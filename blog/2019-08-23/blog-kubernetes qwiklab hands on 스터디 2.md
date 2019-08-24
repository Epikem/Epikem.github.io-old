---
date: "2019-08-23"
title: "kubernetes qwiklab hands on 스터디 2"
category: "blog"
tags: ["meta","blog"]
banner: "/assets/bg/3.jpg"
---


각종 명령어를 치면서 정리하자. 또 금방 까먹는다

### 1. 

> list active account name
```ps1
gcloud auth list
```

> list project id
```ps1
gcloud config list project
```

> setting default compute zone
```ps1
gcloud config set compute/zone <us-central1-a>
```

> creating a kubernetes engine cluster
```ps1
gcloud container clusters create <cluster-name>
```

> get authentication credentials for the cluster
```ps1
gcloud container clusters get-credentials <cluster-name>
```

위 명령을 해야 kubeconfig entry가 생성된다는거 같다. 기본 인증서 등등이 없어진다는 말이 이걸 말하는 듯? 

> deploying and application to the cluster
```ps1
kubectl run hello-server --image=gcr.io/google-samples/hello-app:1.0 --port 8080
```

> expose kube resource with kubernetes service
```ps1
kubectl expose deployment hello-server --type="LoadBalancer"
```

> cleanup cluster
```ps1
gcloud container clusters delete <cluster-name>
```

### 2. orchestrating the clous with kubernetes

In this lab you will learn how to:

    Provision a complete Kubernetes cluster using Kubernetes Engine.
    Deploy and manage Docker containers using kubectl.
    Break an application into microservices using Kubernetes' Deployments and Services.




## tags
  \#meta, \#blog
