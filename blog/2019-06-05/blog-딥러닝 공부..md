---
date: "2019-06-05"
title: "딥러닝 공부."
category: "blog"
tags: ["blog"]
banner: "/assets/bg/3.jpg"
---


edwith강의 시청
https://www.edwith.org/machinelearning1_17/lecture/10575/

### MLE: Maximum Likelihood Estimation

최적의 가능성을 가지는 $\theta$를 추론하는것..?

$\hat\theta=argmax_\theta P(D|\theta)$


$\hat\theta=argmax_\theta P(D|\theta)=argmax_\theta \theta^{a_H}(1-\theta)^{a_T}$

단조 함수라서, 로그를 취해서 계산을 편하게 함.

$\hat\theta=argmax_\theta lnP(D|\theta)=argmax_\theta ln{\theta^{a_H}(1-\theta)^{a_T}}=argmax_\theta \{a_Hln\theta+a_Tln(1-\theta)\}$

이 값을 최대화해야하므로, 미분이 0이 되는 위치를 찾는다.

$
\frac{d}{d\theta}(a_Hln\theta+a_Tln(1-\theta))=0
\newline
\frac{a_H}{\theta}-\frac{a_T}{1-\theta}=0
\newline
\theta=\frac{a_H}{a_T+a_H}
$

$\theta$가 $\frac{a_H}{a_T+a_H}$일 때 MLE 관점에서 최적.


### Simple Error Bound

실제 던졌을 때의 $\theta$에 대한 최적 $\hat\theta$와의 에러 $\epsilon$?

Hoeffding's inequality

$
P(|\hat\theta-\theta^*|\ge\epsilon)\le2e^{-2N\epsilon^2}
$

이 식으로, 에러 0.1 이하의 경우가 0.01%가 되도록 하기 위한 N을 구한다던가 하는것이 가능.

Probably Approximate Correct learning (PAC)
(case, error)





## tags:
  #study, #machine-learning