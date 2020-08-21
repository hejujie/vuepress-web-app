---
title: '[Paper] Counterfactual Multi-Agent Policy Gradients'
lang: zh-CN
datetime: 2019-07-14
meta:
  - name: description
    content: 借助Causal Inference中的Counterfactual思想指导RL训练。
  - name: keywords
    content: Reinforcement Learning
---

## Key Challenges

dsfdsfdsf 在 Mulit-agent 设置下，会存在如下的三个挑战：

- Modelling other agents' information： 在 multi-agent 的设置下，过去常用的 independent actor-critic 等模型，往往会由于独立训练，导致信息共享不足，从而 coordinated 效果比较差。
- Multi-agent credit assignment：常规的 actor-critic 方法由于每个 actor 训练的 reward 都是基于全局的 reward，所以很难评估每个 agent 采取的 action 实际对全局的 reward 影响有多大，故而导致优化存在困难。
- Curse of dimensionality in aciton：由于系统是 mulit-agent，在要求算法有更好效果的情况下，往往需要不同 agent 采取 action 的联合概率分布，故而也导致了 action space 指数上升的问题。

基于这三个挑战，文章分别提出 centralised critic、counterfactual baseline、efficient critic representation 去解决这三个问题。

## Centralised critic

- 做法

  - critic 仅仅在 learning 的时候使用：它可以是基于 joint action 和所有的 state information 进行训练。
  - agent 在 learning 和 execution 的时候都需要，训练的时候仅仅使用来自自己的 action-observation history。

- 训练：

  - 如果 global state 存在，那么直接用它训练。

  - 否则使用 joint acion-observation 进行训练。

    ![image-20190709220049644](http://ipic-ccyy.oss-cn-shenzhen.aliyuncs.com/blog/2019-07-09-140051.png)

## Counterfactual baseline

- 问题：

  - 在训练出 centralised critic 之后，如何利用它辅助 policy gradient 进行训练。

- Naive Way：

  - 直接利用它估计 TD-error： $$ g=\nabla*{\theta^{\pi}} \log \pi\left(u | \tau*{t}^{a}\right)\left(r+\gamma V\left(s*{t+1}\right)-V\left(s*{t}\right)\right) $$

  - Credit Assignment 问题：
    - TD-error 考虑的是 global reward 的影响。
    - 对于每个 actor 而言，难以显式确认它对于 global reward 贡献。

- Difference reward：

  - Per-agent shaped reward：

    - 每个 agent 都构建一个模型：表征当自己的 action 替换成一个 default 的 action$c^{a}$的时候，对于 reward 的影响。 $$ D^{a}=r(s, \mathbf{u})-r\left(s,\left(\mathbf{u}^{-a}, c^{a}\right)\right) $$

    - 那么如果 agent a 选择了一个能够提高 D 的 action，那么这个 action 也是对 global reward 是有贡献的。这其实也就部分解决了 credit assignment 的问题。 $$ D^{a}\left(s,\left(\mathbf{u}^{-a}, \dot{u}^{a}\right)\right)>D^{a}(s, \mathbf{u}) \Longrightarrow r\left(s,\left(\mathbf{u}^{-a}, \dot{u}^{a}\right)\right)>r\left(s,\left(\mathbf{u}^{-a}, a\right)\right) $$

  - 局限性：

    - 需要额外对$r\left(s,\left(\mathbf{u}^{-a}, c^{a}\right)\right)$ 进行估计。
    - 需要用户指定默认的动作$c^{a}$。

- Counterfactual baseline：

  - 估计 Q(s, u):

    - 基于 golbal state 和 joint action， 估计 Q-value。

  - Advantage based on counterfactual baseline：

    - 方程中的第一项是当前选择的 action 的 global q-value。方程中的第二项，表征在 agent a 的所有可能选择状态下能够获得的 golbal q-value 的期望，也就是常规理解的 baselines。

    - 联系到 difference reward 中，这里用 centralised critic 替代了原式中的 reward。从而直接在数据中进行学习，避免了对 reward 估计对多余 simulations。同时，对于 agent a 的所有 action 进行期望，从而避免需要人工设置默认 aciton 的问题。

      - $$ A^{a}(s, \mathbf{u})=Q(s, \mathbf{u})-\sum\_{u^{\prime a}} \pi^{a}\left(u^{\prime a} | \tau^{a}\right) Q\left(s,\left(\mathbf{u}^{-a}, u^{\prime a}\right)\right) $$

  - Self-consistency 的问题：baseline。

    - 这个 Advantage 具有与 aristocrat utily 相同的结构，但是后者的模式中，policy 和 unility function 是相互依赖的，所以导致了 self-consistency 的问题。
    - 在这里，counterfactual baselines 的期望是对 gradient 起作用的，而在 policy gradient 的相关证明中，它实际上对 gradient 的期望是 0，并不会带来 bias。

## Efficient critic representation

- 问题：

  - 在上节中引入了 counterfactual baseline，它的核心作用之一是通过对对应 agent 的动作求期望消去了 difference 设置默认 action 的需求，求和这也导致了需要多次进行前向对需求；
  - 另外，如果使用神经网络，假设 agent 的 action 数量是$U$， 一共有 n 个 agent，那么就需要 $|U|^{n}$ 个输出节点。这实际上也是不可接受的。

- Efficient critic representation：

  - 在这个结构中，将其他 agents 的 actions $\mathbf{u}\_{t}^{-a}$, 结合其他历史信息作为输入。

  - 输出则是 condition on 其他 action 的情况下的当前 agent 的期望。并利用这个信息，取出所有 q-value 计算 baselines，并与当前 action 的 q-value 作差得到 Advantage funciton，最终用于梯度下降。

    ![image-20190709230341262](http://ipic-ccyy.oss-cn-shenzhen.aliyuncs.com/blog/2019-07-09-150342.png)
