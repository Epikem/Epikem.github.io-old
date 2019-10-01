---
date: "2019-10-01"
title: "vocabo-server 재배포 시도"
category: "vocabo"
tags: ["project/vocabo"]
banner: "/assets/bg/4.jpg"
---



elasticsearch 버전 및 elk stack by bitnami 및 logstash가 전부 조금씩 바뀌면서 손을 봐줘야 하게 되었다.

1. 이전에 하던 대로 elk certified by bitnami를 쓰려 했는데 compute instance에 ssh로 접속하려 하니 passphrase를 적으라는데, 어디서 그걸 찾을 수 있는지 몰라서 한참 찾다가, 다 삭제하고 bitnami 사이트에서 자체 스택 만들기 기능으로 스택을 만들고 나서야 찾을 수 있었다.
2. elasticsearch 버전이 7.3.2가 되어서 jaso-analyzer 버전 숫자도 그에 맞게 높여줬다. 제대로 작동할지는 모르겠다.
3. elasticsearch 매핑 부분이 조금 바뀌어서, "logs"인덱스 이름/타입 이름?을 빼주고 나서야 put 요청이 성공했다.
4. 그랬더니, 이번엔 logstash에서 template file을 못찾는다는 에러가 떴다. 찾아보니 mapping 형식을 json으로 나타낸 것을 의미하는거 같은데, 그걸 왜 또 중복으로 적어야 하나? 버전 차이 때문인가 싶어서 logstash를 업데이트하려고 했는데, checkver부분이 달라져서인지 scoop에서 버전 업데이트가 되지 않고 있었다. 그래서 어쩔 수 없이 그냥 직접 받은 다음 테스트 하기로 했다.
5. 알고보니 logstash 바뀐 부분이, 절대 경로를 써야한다고 한다. 그래서 파일이 제대로 안 읽히고 있었던 것.
고치니까 데이터가 들어갔다. 근데 너무나 느려서 확인해보니 stdout{} 플러그인 출력때문에 느려서 그걸 지우고 하니 훨씬 빨라졌다.
6. 드디어 데이터를 다 올리고, 서버를 올릴 차례다. 먼저 server에서 deconfig 이후 config 명령으로, 파라미터를 아래와 같이 주어서 세팅을 해야 한다.
```ps
npm run config -- --account-id=014553383153 --bucket-name=vocabo-lambda-bucket --function-name=vocaboServer --region=ap-northeast-2
```
처음에 --region 플래그 없이 했을때 왜 스택이 만들어졌다는데 안뜨지? 했는데 버지니아 북부 (기본 region)에 만들어지고 있었던 거였다.
7. `win-package-deploy` 명령으로 스택을 만들고 이제 rest api경로에서 테스트해보는데 기본 경로는 forbidden이 뜨고, prod 스테이지 경로는 타임아웃이 뜨길래 왜인가 했는데, lambda 환경 변수 설정이 잘못되어 있었다. 

```
ELASTICSEARCH_URL: http://<userid>:<password>@35.229.203.172:80/elasticsearch/
```
이렇게 되어있어야 하는데,
```
ELASTICSEARCH_URL: http://<userid>:<password>@http://35.229.203.172:80/elasticsearch/
```
이렇게 되어 있었음.
고치니까 prod 스테이지 경로에서 잘 작동이 되는것을 확인할 수 있었다. 그리고 사이트에서도 동작이 되었다.
여전히 영어 검색시 5개만 보여주는걸 고치지 못했지만.

8. 비용절감을 위해 compute 인스턴스를 멈춘 다음 사이즈 조절을 했는데, bitnami에서 그 정보는 동기화가 안 된다. 그리고, bitnami를 써서 재시작해야 제대로 서비스들이 돌아가는것 같다(확인 필요). 또, ip도 바뀌므로 서버쪽도 재업로드 해야한다.

aws는 학생 크레딧을 년마다 준다는데, 구글은 아직 안 되는 모양이다. 가능하면 elasticsearch만 aws로 옮길 수 있다면 더 이상 gcp를 쓸 이유가 없으므로 그쪽을 고려해보아야겠다.

유저 요청이 있을 때만 서버 서비스 스택을 잠시 만드는 식으로 하면 좋을거 같은데. 상당히 고려할 게 많다.

