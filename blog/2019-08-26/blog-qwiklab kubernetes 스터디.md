---
date: "2019-08-26"
title: "qwiklab kubernetes 스터디"
category: "blog"
tags: ["dev/cloud","blog"]
banner: "/assets/bg/2.jpg"
---


각종 명령어를 치면서 정리하자. 또 금방 까먹는다

이전에 했던 것과 비슷한 명령들은 생략.

> exec /bin/sh in first container of pod named "monolith"
```ps
kubectl exec monolith --stdin --tty /bin/sh
 # is same with:
kubectl exec monolith -it /bin/sh
```

`--stdin` 및 `--tty`플래그는 또 뭔가 했더니, 알고보니 `-i`가 `--stdin`플래그 줄임이고, `-t`가 `--tty` 플래그의 줄임이었다. 그리고 `-c`플래그로 pod 내부의 컨테이너 중 어떤 컨테이너를 대상으로 할 지 선택할 수 있다. 아래는 `kubectl exec -h` 도움말:

>Options:
>  -c, --container='': Container name. If omitted, the first container in the pod will be chosen
> 
>  -i, --stdin=false: Pass stdin to the container
> 
>  -t, --tty=false: Stdin is a TTY
>
>Usage:
>  kubectl exec POD [-c CONTAINER] -- COMMAND [args...] [options]
>

이번 예에서는 https 트래픽을 처리할 수 있는 secure pod를 만들고, 그걸 Service로 외부 노출하여 접속해보는 것으로 보인다.

### 1. 

> create tls certificates from files:
```ps
ls tls/
 # > ca-key.pem  ca.pem  cert.pem  key.pem
kubectl create secret generic tls-certs --from-file tls/
 #> secret/tls-certs created
```

> generate nginx configmap from file
```ps
cat nginx/proxy.conf
 # > server {
 # >   listen 443;
 # >   ssl    on;
 # > 
 # >   ssl_certificate     /etc/tls/cert.pem;
 # >   ssl_certificate_key /etc/tls/key.pem;
 # > 
 # >   location / {
 # >     proxy_pass http://127.0.0.1:80;
 # >   }
 # > }

kubectl create configmap nginx-proxy-conf --from-file nginx/proxy.conf
 # > configmap/nginx-proxy-conf created

cat pods/secure-monolith.yaml
```

```yml
apiVersion: v1
kind: Pod
metadata:
  name: "secure-monolith"
  labels:
    app: monolith
spec:
  containers:
    - name: nginx
      image: "nginx:1.9.14"
      lifecycle:
        preStop:
          exec:
            command: ["/usr/sbin/nginx","-s","quit"]
      volumeMounts:
        - name: "nginx-proxy-conf"
          mountPath: "/etc/nginx/conf.d"
        - name: "tls-certs"
          mountPath: "/etc/tls"
    - name: monolith
      image: "kelseyhightower/monolith:1.0.0"
      ports:
        - name: http
          containerPort: 80
        - name: health
          containerPort: 81
      resources:
        limits:
          cpu: 0.2
          memory: "10Mi"
      livenessProbe:
        httpGet:
          path: /healthz
          port: 81
          scheme: HTTP
        initialDelaySeconds: 5
        periodSeconds: 15
        timeoutSeconds: 5
      readinessProbe:
        httpGet:
          path: /readiness
          port: 81
          scheme: HTTP
        initialDelaySeconds: 5
        timeoutSeconds: 1
  volumes:
    - name: "tls-certs"
      secret:
        secretName: "tls-certs"
    - name: "nginx-proxy-conf"
      configMap:
        name: "nginx-proxy-conf"
        items:
          - key: "proxy.conf"
            path: "proxy.conf"
```

```ps
kubectl create -f pods/secure-monolith.yaml
 # > pod/secure-monolith created
```

> expose secure-monolith pod with kube service
```ps
cat services/monolith.yaml
```
```yml
kind: Service
apiVersion: v1
metadata:
  name: "monolith"
spec:
  selector:
    app: "monolith"
    secure: "enabled"
  ports:
    - protocol: "TCP"
      port: 443
      targetPort: 443
      nodePort: 31000
  type: NodePort
```

> Things to note:
> 1. 이 서비스는 selector를 통해 `app=monolith,secure=enabled`인 pod를 찾아 자동으로 노출한다.
> 2. 포트 31000의 외부 트래픽을 내부 포트 443의 nginx로 전달해야 하므로 여기서 nodeport를 expose해야 한다.

```ps
kubectl create -f services/monolith.yaml
 # > service/monolith created
```

`gcloud compute firewall-rules` 명령으로 노출된 nodeport의 monolith service로의 트래픽을 허용한다.

```ps
gcloud compute firewall-rules create allow-monolith-nodeport --allow=tcp:31000

 #> Creating firewall...done.
```

> get an external IP address for one of the nodes.
```ps
gcloud compute instances list
```

> try hitting the secure-monolith service using curl:
```
curl -k https://<EXTERNAL_IP>:31000
```

이 때, 연결이 실패하게 되는데, 예제에서 secure-monolith yaml에 `secure=enabled` 라벨을 빼놓았기 때문이다. 아래와 같이 `kubectl label pods`명령으로 label을 추가할 수 있고, label을 추가하면 서비스를 재시작하지 않고도 서비스가 알아서 갱신되며 endpoint가 생성된다.

```ps
kubectl get pods -l "app=monolith,secure=enabled"
 #> No resources found.
kubectl label pods secure-monolith 'secure-enabled'
 #> error: at least one label update is required
kubectl label pods secure-monolith 'secure=enabled'
 #> pod/secure-monolith labeled
kubectl get pods secure-monolith --show-labels
 #> NAME              READY   STATUS    RESTARTS   AGE     LABELS
 #> secure-monolith   2/2     Running   0          9m54s   app=monolith,secure=enabled
```

다시 외부 ip로 접속하면 연결이 잘 된다.

## tags
  \#cloud, \#blog
