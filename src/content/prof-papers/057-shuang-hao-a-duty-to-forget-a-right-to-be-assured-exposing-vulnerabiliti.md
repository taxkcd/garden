---
title: "057 · A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services — Shuang Hao"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shuang-hao"
source_hash: "3ca0c77041fd91f12f805ae73de130031f5964cd7df000de7ad8dc323f6cf0df"
sequence: 57
generator: "outreach-garden: managed"
---

# 057 · A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services

## At a glance

- **Professor:** Shuang Hao
- **Institution:** University of Texas at Dallas
- **Paper:** [A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services](https://www.utdallas.edu/~shao/papers/hu_ndss24.pdf)
- **Authors:** Hongsheng Hu, Shuo Wang, Jiamin Chang, Haonan Zhong, Ruoxi Sun, Shuang Hao, Haojin Zhu, Minhui Xue
- **Year:** 2024

## Paper overview

This paper investigates security vulnerabilities in machine unlearning services provided by Machine Learning as a Service (MLaaS) platforms. It identifies a new threat called over-unlearning, where malicious users can cause the model to forget more information than intended by manipulating the data they request to be unlearned. The authors propose two novel black-box attack strategies that enable such over-unlearning, demonstrating through experiments that these attacks can significantly degrade model performance without requiring access to the model internals or training data.

### Why it matters

**Research problem:** How can malicious users exploit machine unlearning services in MLaaS to degrade model utility by causing the model to unlearn more information than intended (over-unlearning), especially under realistic black-box access constraints?

**Why it matters:** Machine unlearning is critical for complying with privacy regulations like GDPR and CCPA, allowing users to revoke their data from trained models. However, MLaaS providers often lack access to original training data and rely on approximate unlearning methods. This creates a security gap where malicious users can exploit unlearning requests to harm model performance, threatening the reliability and trustworthiness of MLaaS offerings.

**Key contributions:**

- First investigation of machine unlearning service vulnerabilities in real-world MLaaS environments.
- Identification and formalization of the over-unlearning threat, where malicious unlearning requests cause excessive forgetting.
- Development of two novel black-box attack strategies (blending and pushing) to achieve over-unlearning.
- Extensive empirical evaluation across datasets, model architectures, and unlearning methods demonstrating the effectiveness of the attacks.
- Comprehensive ablation studies showing the impact and stealthiness of the proposed attacks.

## About the professor

**Shuang Hao** — Associate Professor, Department of Computer Science, University of Texas at Dallas.

Research interests: security and privacy, particularly developing data-driven and AI techniques to identify and mitigate adversarial attacks and illicit activities

### Research links

- [Faculty/profile page](http://utdallas.edu/~shao)
- [Professor website](https://www.utdallas.edu/~shao/index.html)
- [Google Scholar](https://scholar.google.com/citations?user=GYkFAcQAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the vulnerabilities in machine unlearning services explored in the paper, start with foundational knowledge on black-box adversarial attacks and the security context of Machine Learning as a Service (MLaaS). Then, build understanding of the unlearning methods targeted by the attacks, specifically gradient-based and fine-tuning approaches. Finally, focus on the core concept of machine unlearning attacks, emphasizing the novel over-unlearning threat, with priority given to the authors' own talk if available.

### Black-box adversarial attacks *(prerequisite)*
This section covers the fundamentals and advanced techniques of black-box adversarial attacks, which are critical since the paper's proposed over-unlearning attacks operate under black-box access constraints. Understanding query-efficient and targeted black-box attacks provides the necessary background to grasp how attackers manipulate unlearning requests without internal model knowledge.

*How the paper uses it:* The paper's attack strategies require only black-box access, making knowledge of black-box adversarial attacks essential.

▶ [Black-Box Attacks (Continued) | Lecture 19 (Part 1) | Applied Deep Learning (Supplementary)](https://www.youtube.com/watch?v=S0gwYgCdgCk) — Maziar Raissi · 4 years ago

### Machine Learning as a Service security *(prerequisite)*
This section contextualizes the deployment environment and threat model for the paper by exploring the security challenges inherent in MLaaS platforms. Understanding the operational and security aspects of MLaaS helps frame why machine unlearning vulnerabilities pose a significant risk in real-world settings.

*How the paper uses it:* The paper investigates vulnerabilities specifically in MLaaS unlearning services, making MLaaS security context crucial.

▶ [Introduction to AI Security - Jim Manico - NDC AI 2025](https://www.youtube.com/watch?v=RLOaFg7XAzM) — NDC Conferences · 5 months ago

### Model fine-tuning and gradient-based unlearning *(prerequisite)*
This section explains the unlearning methods targeted by the attacks, focusing on gradient-based and fine-tuning techniques. A solid understanding of these methods is necessary to appreciate how the proposed over-unlearning attacks exploit the unlearning pipeline to degrade model performance.

*How the paper uses it:* The attacks in the paper target gradient-based and fine-tuning unlearning methods, so understanding these is key to grasping the threat.

▶ [SaTML 2023 - Korbinian Koch - Machine Unlearning with SISA Comes at the Expense of Minority Classes](https://www.youtube.com/watch?v=9qz_fkHcCbI) — Nicolas Papernot · 11:54 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand vulnerabilities in machine unlearning services in MLaaS, starting with the basics of model fine-tuning and gradient-based learning, then explaining the MLaaS security context, followed by black-box adversarial attacks, and culminating in the core topic of machine unlearning attacks. Each step builds intuition with concise, clear videos to help beginners grasp how malicious users can exploit unlearning to degrade model performance.

### Model fine-tuning and gradient-based unlearning *(prerequisite)*
Fine-tuning and gradient descent are key techniques in training and updating machine learning models. Understanding these methods helps grasp how models learn from data and how unlearning can be approximated by reversing or modifying these updates.

*How the paper uses it:* The paper targets gradient-based and fine-tuning unlearning methods to demonstrate over-unlearning attacks.

▶ [Gradient descent simple explanation|gradient descent machine learning|gradient descent algorithm](https://www.youtube.com/watch?v=gzrQvzYEvYc) — Unfold Data Science · 15:39 · 6 years ago

### Machine Learning as a Service security *(prerequisite)*
MLaaS platforms provide machine learning models as a service but face unique security challenges, especially when users can request unlearning of their data. Understanding this environment clarifies the threat model and why vulnerabilities arise.

*How the paper uses it:* The paper studies vulnerabilities in MLaaS unlearning services where providers lack original training data.

▶ [Introduction to AI Security - Jim Manico - NDC AI 2025](https://www.youtube.com/watch?v=RLOaFg7XAzM) — NDC Conferences · 5 months ago

### Black-box adversarial attacks *(prerequisite)*
Black-box attacks manipulate models without access to their internal parameters, relying only on inputs and outputs. This concept is crucial to understand how attackers can craft inputs to cause over-unlearning without insider knowledge.

*How the paper uses it:* The proposed over-unlearning attacks operate under black-box access constraints.

▶ [Black-Box Attacks (Continued) | Lecture 19 (Part 1) | Applied Deep Learning (Supplementary)](https://www.youtube.com/watch?v=S0gwYgCdgCk) — Maziar Raissi · 4 years ago

### Machine unlearning attacks
Machine unlearning allows models to forget specific data, but attackers can exploit this to degrade model performance by causing excessive forgetting. Understanding these attacks reveals the novel threat of over-unlearning introduced in the paper.

*How the paper uses it:* The core contribution of the paper is identifying and demonstrating over-unlearning attacks on machine unlearning services.

▶ [What is Machine Unlearning?](https://www.youtube.com/watch?v=0_ciCzHaM4o) — Probably Private · 10 months ago
