---
date: "2019-06-07"
title: "인공지능 및 기계학습 개론Ⅰ - 1.3 ~ 1.4"
category: "blog"
tags: ["study","dev/machine-learning"]
banner: "/assets/bg/4.jpg"
---


### 인공지능 및 기계학습 개론Ⅰ - 1.3. MAP

edwith강의 시청
https://www.edwith.org/machinelearning1_17/lecture/10575/

$P(\theta|D)=\frac{P(D|\theta)P(\theta)}{P(D)}$

$Posterior=\frac{Likelihood*Prior Knowledge}{Normalizing Constant}$

베타 분포?

$P(\theta)=\frac{\theta^{\alpha-1}(1-\theta)^{\beta-1}}{B(\alpha,\beta)}, B(\alpha,\beta)=\frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}, \Gamma(\alpha)=\Gamma(\alpha-1)$

$P(\theta|D)\propto\theta{a_H+\alpha-1}(1-\theta)^{a_T+\beta-1}$

MLE에서는 $\theta$를 $\hat{\theta}=argmax_\theta P(D|\theta)$에서 찾았다.
$
P(D|\theta)=\theta^{a_H}(1-\theta)^{a_T}
\newline
\hat{\theta}=\frac{a_H}{a_H+a_T}
$

MAP에서는 $\theta$를 $\hat{\theta}=argmax_\theta P(\theta|D)$에서 찾는다.
(likelihood에 대한 것이 아니라, posteior에 대하 찾는것...?)
$
P(\theta|D)\propto\theta^{a_H+\alpha-1}(1-\theta)^{a_T+\beta-1}
\newline
\hat{\theta}=\frac{a_H+\alpha-1}{a_H+\alpha+a_T+\beta-2}
$

$a_H, a_T$가 커지면 $\alpha, \beta$값을 누르고 MLE와 MAP가 같아짐. 
$\alpha, \beta$가 사전정보, $a_H, a_T$가 실험 정보를 의미하는듯.

잘 이해안됨.
[이 블로그](https://darkpgmr.tistory.com/62)가 더 도움되는듯


### 인공지능 및 기계학습 개론Ⅰ - 1.4. Probability and Distribution

확률 기초

$
P(E)\in R, P(E)\ge 0, P(\omega) = 1
$
상호 배타적인 사건들에 대해 
$
P(E_1 \cup E_2 \cup \cdots)=\sum_{i=0}^\infty P(E_i)
\newline
$


Subsequent characteristics

$
if A \subseteq B then P(A) \le P(B), 0 \le P(E) \le 1
P(A \cup B) = P(A)+P(B)-P(A \cap B), P(E^\complement)=1-P(E)
$

#### Conditional Probability

$P(A|B)$의 정의는, B가 일어나면서 A가 일어날 확률.

$
P(A|B)=\frac{P(A \cap B)}{P(B)}
\newline
P(B|A)=\frac{P(A|B)P(B)}{P(A)}
P(A)=\sum_n P(A|B_n)P(B_n)
$

#### 확률 분포 Probability Distribution

* a function mapping an event to a probability

정규분포, 푸아송 분포 등 여러가지 있음.

example :
$
f(x)=\frac{e^{-\frac{1}{2}x^2}}{\sqrt{2\pi}}
$

* 정규 분포:

$
f(x,\mu, \sigma)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$

표기 : $N(\mu, \sigma^2)$

평균 : $\mu$

편차 : $\sigma^2$


* 베타 분포

0부터 1사이에 long tail 없이 존재.

$
f(\theta, \alpha, \beta)=\frac{\theta^{\alpha-1}(1-\theta)^{\beta-1}}{B(\alpha,\beta)}
\newline
B(\alpha, \beta)=\frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}
$

표기: $Beta(\alpha, \beta)$

평균: $\frac{\alpha}{\alpha+\beta}$

편차: $\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$

* 이항 분포 Binomial Distribution

$
f(\theta,n,p)= \binom{n}{k} p^k (1-p)^{n-k}, \binom{n}{k} = \frac{n!}{k!(n-k)!}
$

표기: $B(n,p)$

평균: $np$

편차: $np(1-p)$


* 다항 분포 Multinomial Distribution

$
f(x_1, \ldots, x_k, n, p_1, \ldots, p_k)= \frac{n!}{x_1!\ldots x_k!}p_1^{x_1}\ldots p_k ^{x_k}
$

Notation: `Mult(P), P=<p1, ..., pk>`

Mean: $E(x_i)=np_i$

variance: $Var(x_i)=np_i(1-p_i)$

근데 이 강의.. 너무 이론쪽인데 지금은 이게 필요한지 잘 모르겠다. 실용 강의를 보다 필요성을 느끼게 되면 보는게 더 나을지도.



## tags
  \#study, \#machine-learning

