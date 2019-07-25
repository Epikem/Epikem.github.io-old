---
date: "2019-07-25"
title: "codeforces 오랜만에 참가"
category: "blog"
tags: ["dev/sport"]
banner: "/assets/bg/2.jpg"
---


파이썬으로 풀다가 B부터 안풀려서 망함. 나중에 보니 역시 방법이 틀린 게 아니라 입출력이 느린 게 원인이였던 것으로 보임.

다른 통과한 파이썬 풀이를 보니 추가적으로 문제에 나온 합이 20만을 넘지 않는다는 것을 이용해 %연산을 쓰지 않고 &1 연산을 이용한 것으로 보이는데, 어쨌든 내 시간초과 풀이를 cpp로 포팅해서 넣으니 바로 통과했다. 같은 O(n)인데 왜 그렇게까지 느려지는걸까??

https://wiki.python.org/moin/PythonSpeed/PerformanceTips
여길 읽고 나면 좀 나아질지도 모르겠다.

다른 풀이를 보다 발견한 게, 다음 두 줄 추가만으로 더 빨라진다.

```py
from sys import stdin
input=stdin.readline
```

왜지??

찾아본 결과 다음과 같다:

https://stackoverflow.com/questions/22623528/sys-stdin-readline-and-input-which-one-is-faster-when-reading-lines-of-inpu

즉, 파이썬 `input`함수는 대화형 환경에서 prompt를 출력하기 때문에 그만큼 더 느려진다는 것. 그외에도 몇 가지 차이점이 있는데 그런 점들이 많이 느려지게 한 모양이다.

저 두 줄만 적용해서 python3 및 pypy3로 제출했는데 전부 통과되었다.

한글만 써진다면 쓸만하겠는데 문제는 한글을 주석에 쓰면 컴파일 에러가 나버린다.

## tags
  \#sport, \#algorithm
