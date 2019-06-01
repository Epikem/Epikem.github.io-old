---
date: "2019-05-31"
title: "aws-cloudformation-lambda-add-environment-variables"
category: "TIL"
tags: ["dev/til","dev/cloud","dev/cloud/aws","dev/cloud/aws"]
banner: "/assets/bg/3.jpg"
---


다음과 같이 `cloudformation.yaml`에 람다에 환경변수를 추가할 수 있다.

```yaml
(lambda-function-name):
  ...
  Properties:
    ...
    Environment:
      Variables:
        (environment-variable-key): (value)
...
```

아래는 예시.


```yaml
vocaboLambda:
  ...
  Properties:
    ...
    Environment:
      Variables:
        ELASTIC_URL: http://localhost:9200/
...
```

## tags
  \#til, \#cloud, \#aws, \#aws
