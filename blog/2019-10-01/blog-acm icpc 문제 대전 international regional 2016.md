---
date: "2019-10-01"
title: "acm icpc 문제 대전 international regional 2016"
category: "sport"
tags: ["dev/sport","blog"]
banner: "/assets/bg/2.jpg"
---


### 개구리

방향이 수직, 위치가 격자로 고정된 두 선분간 거리를 효율적으로 구할 수 있어야 풀 수 있다.

그걸 차마 구현할 수 있을거라고 생각을 못해서 모든 선들의 몸통을 포함해서 점으로 만든 다음, 모든 점 집합간 다익스트라를 돌리면 되지 않을까 생각했으나 시간복잡도가 될 수가 없었다. (실패)



### 트럭

처음엔 그리디로 한 번에 들어갈 수 있는 하중 기준으로 그룹화해서 그룹 길이만 따져서 더하면 되지 않을까 했는데, 앞차가 나갔을 때 뒷차가 들어올 수도 있다는 점을 고려하지 못했다. 

한 번에 단위시간만 이동가능하고, 앞 차가 다 나갔을 때 뒷차가 들어올 수 있는지 등등도 계산해야 해서 까다로운데 숫자가 작아서 그냥 시뮬레이션을 돌렸다.

<details><summary>cpp solution</summary>

```cpp

const int MaxN=1010;
int arr[MaxN];
int bridge[101];
void solve()
{
    // https://www.acmicpc.net/problem/13327
    // https://www.acmicpc.net/problem/13335
    // https://www.acmicpc.net/problem/13332

    // 길이 W, 최대 하중 L, ai 트럭무게, 한번에 단위시간만 이동가능. 
    int N,W,L;
    cin>>N>>W>>L;
    for (int n = 0; n < N; n++)
    {
        cin>>arr[n];
        // 순서를 바꿀 수 없으므로, 그리디로 해도 될거 같다.
        // 그러나 문제는 단위시간만 이동 가능하다는것.
        // 그 부분은 그냥 해당 길이 k 그룹이 다 건너는데 걸리는 시간을 f(k,w)로 계산하면 된다.
        // 길이 1이면 w+1, 2면 w+2, ... k면 w+k일듯.
        // 아니다. 앞 트럭들중 몇이 다 건넜을 때, 하중이 괜찮다면 뒤의 트럭이 바로 들어와야 한다.
        // 
    }
    // 그럼 그냥 시간이 널널하니 다 돌려도 괜찮을 수 있다.

    int t=0;
    int cur=0;
    int curLoad=0;
    while(t<150000){
        t++;
        curLoad-=bridge[0];
        bridge[0]=0;
        if(curLoad+arr[cur]<=L){
            bridge[W]=arr[cur];
            curLoad+=arr[cur];
            cur++;
        } else bridge[W]=0;
        bool left=(bridge[W])*true;
        for (int ww = 0; ww < W; ww++)
        {
            // cout << bridge[ww] << ' ';
            if(bridge[ww]!=0){
                left=true;
            }
            bridge[ww]=bridge[ww+1];
        }
        // cout << endl;
        // cout << t << ' ' << curLoad << ' ' << left << ' ' << cur << ' ' << n << endl;
        if(!left && cur>=N){
            break;
        }
    }
    cout << t << endl;
}
```

</details>



## tags
  \#sport, \#blog


