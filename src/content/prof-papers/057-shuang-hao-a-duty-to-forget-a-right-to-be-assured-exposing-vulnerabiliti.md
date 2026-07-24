---
title: "057 · A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services — Shuang Hao"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shuang-hao"
source_hash: "198828c14644183aea969b337e171430f44777e4f8d4dc20b6a344b6bca88cbb"
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

To deeply understand the vulnerabilities in machine unlearning services explored in this paper, start by building foundational knowledge on black-box adversarial attacks and the security context of machine learning as a service (MLaaS). Then, gain background on the regulatory and privacy motivations behind machine unlearning. Finally, focus on the core concept of machine unlearning security threats and the authors' own presentation of their novel over-unlearning attacks to grasp the specific contributions and experimental insights.

## Recommended videos (in order)

### Black-box adversarial attacks *(prerequisite)*
Understanding black-box adversarial attacks is essential because the paper's proposed over-unlearning attack strategies operate under black-box access constraints, without requiring internal model knowledge. This section covers the theory and practical methods of black-box attacks, including zeroth order optimization and adversarial perturbations.

*How the paper uses it:* The paper's attack strategies (blending and pushing) rely on black-box adversarial techniques to manipulate unlearning requests.

▶ [Adversarial Examples for Deep Neural Networks](https://www.youtube.com/watch?v=kxyacmVSGlI) — Paul Hand · 43:54

### Machine learning as a service security *(prerequisite)*
This section provides context on the deployment environment of MLaaS platforms and the associated security challenges. It discusses vulnerabilities and abuse vectors in cloud-based ML services, which is critical to understanding the threat model and practical feasibility of over-unlearning attacks.

*How the paper uses it:* The paper investigates vulnerabilities specifically in MLaaS unlearning services, making this context vital for appreciating the threat model.

▶ [#HITB2023HKT D2T2 - Breaking ML Services: Finding 0-days ...](https://www.youtube.com/watch?v=-K08hpzevYY) — Hack In The Box Security Conference · 1:06:13

### Data deletion and right to be forgotten in ML *(prerequisite)*
This section covers the foundational motivation for machine unlearning, including privacy regulations like GDPR and CCPA that mandate data deletion rights. Understanding this regulatory background clarifies why machine unlearning services exist and why their security is critical.

*How the paper uses it:* The paper addresses security gaps in machine unlearning services designed to comply with data protection regulations.

▶ [Episode 48 — Evaluate AI and Machine-Learning Privacy ...](https://www.youtube.com/watch?v=3ruEmUFgfFw) — Bare Metal Cyber · 16:25

### Machine unlearning security threats
This section focuses on the core concept of the paper: vulnerabilities and adversarial threats in machine unlearning. It includes research talks on attacks and defenses related to unlearning, providing a broader academic context for the paper's contributions.

*How the paper uses it:* The paper identifies and formalizes the over-unlearning threat as a novel security vulnerability in machine unlearning.

▶ [Nicolas Papernot | What does it mean for machine learning to ...](https://www.youtube.com/watch?v=rQRbb-4Hy7E) — Schwartz Reisman Institute · 1:24:17
