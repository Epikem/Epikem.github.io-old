---
date: "2019-05-25"
title: "드디어! bitnami certified elasticsearch 플러그인 인스톨 문제 알아냄"
category: "vocabo"
tags: ["project/vocabo"]
banner: "/assets/bg/1.jpg"
---


역시 설치만 한다고 바로 적용될 리가 없었다. 서비스 재시작이 필요한 것. [bitnami 설명서](https://docs.bitnami.com/google/apps/elasticsearch/administration/control-services/)에 떡하니 서비스 관리 방법이 나와 있었다. ReadTheDocs +1..

나중에 다시 설치해야할 경우를 위한 절차:
1. jaso-analyzer 저장소에 올라와있는 빌드되어있는 패키지 다운로드.
2. 압축을 풀어 버전을 현재 elasticsearch 버전으로 맞춘다 (추가 절차 있음)
3. 다시 압축한다
4. aws s3에 올리고, 퍼블릭으로 설정한다
5. elasticsearch vm 인스턴스에서 `wget`으로 다운로드한다
6. `elasticsearch-plugin install file://<path-to-plugin>` 명령어로 플러그인을 설치한다.
7. 공식 플러그인인 `nori-analyzer`의 경우, 그냥 `elasticsearch-plugin install analysis-nori`였나 여튼 이름으로 설치 가능하다.
8. `elasticsearch-plugin list`명령으로 설치가 되었는지 확인한다.
9. `nori-tokenizer`에서 사용자 사전을 쓸 경우 추가해줘야 할 수 있다.
10. 적용하려면 elasticsearch 서비스를 재시작 해야한다. 찾아보니 rolling update도 지원하긴 하는듯.


`anaylisys-nori`와 `jaso-analyzer`설치 후 재시작하고나서 아래 요청을 보내니 전과는 다른 에러가 떴다. 이제 `userdict`만 추가하면 될 것이다.


```json
// Request
PUT kengdic
{
  "settings":{
    "analysis":{
      "tokenizer":{
        "nori-user-dict":{
          "type":"nori_tokenizer",
          "decompound_mode":"mixed",
          "user_dictionary":"userdict_ko.txt"
        }
      },
      "analyzer":{
        "analyzer-kor":{
          "type":"custom",
          "tokenizer":"nori-user-dict"
        },
        "analyzer-eng":{
          "type":"custom",
          "tokenizer":"standard",
          "filter":[
            "lowercase"
          ]
        }
      }
    }
  },
  "mappings":{
    "logs":{
      "properties":{
        "word":{
          // "type":"text",
          "type": "completion",
          "analyzer":"analyzer-kor"
        },
        "def":{
          // "type":"text",
          "type":"completion",
          "analyzer":"analyzer-eng"
        }
      }
    }
  }
}

// Response
{
  "error": {
    "root_cause": [
      {
        "type": "illegal_argument_exception",
        "reason": "IOException while reading user_dictionary: /opt/bitnami/elasticsearch/config/userdict_ko.txt"
      }
    ],
    "type": "illegal_argument_exception",
    "reason": "IOException while reading user_dictionary: /opt/bitnami/elasticsearch/config/userdict_ko.txt",
    "caused_by": {
      "type": "no_such_file_exception",
      "reason": "/opt/bitnami/elasticsearch/config/userdict_ko.txt"
    }
  },
  "status": 400
}
```
고치고 나서 하면 바로 성공할 줄 알았는데, 이런 에러가 뜬다.

```html
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>502 Proxy Error</title>
</head><body>
<h1>Proxy Error</h1>
<p>The proxy server received an invalid
response from an upstream server.<br />
The proxy server could not handle the request <em><a href="/elasticsearch/kengdic">PUT&nbsp;/elasticsearch/kengdic</a></em>.<p>
Reason: <strong>Error reading from remote server</strong></p></p>
</body></html>
```
d아마도ㅡ
7.0.1로 버전이 올라가면서 스키마 자체가 바뀌어서일 수 있겠다.

확실히 이쪽이 맞는듯.

https://www.elastic.co/guide/en/elasticsearch/reference/6.7/removal-of-types.html
https://www.elastic.co/guide/en/elasticsearch/reference/7.x/breaking-changes-7.0.html


## installing-elasticsearch-plugins

`elasticsearch-plugin` cli를 이용하여 설치 후, elasticsearch 서비스를 재시작한다.

## tags
  \#TIL, \#elasticsearch