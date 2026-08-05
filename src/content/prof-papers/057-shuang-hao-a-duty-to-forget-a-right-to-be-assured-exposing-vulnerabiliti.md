---
title: "057 · A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services — Shuang Hao"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shuang-hao"
source_hash: "5af016acf7d589489b2af0440c99bb7bbe897164c5a103c88907d410f6af7c14"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to understand and demonstrate the core ideas of the paper on over-unlearning attacks in machine unlearning services. Starting with a beginner-level reproduction of the blending attack effect on CIFAR-10 using the authors' released code, you then move to an intermediate project implementing and comparing the pushing attack under black-box constraints. Finally, the advanced project extends the paper by exploring over-unlearning attacks beyond image classification, applying the pushing method to a simple NLP classification task, addressing a key limitation and future direction of the paper.

### Beginner — Reproduce Blending Attack Impact on CIFAR-10 Unlearning
*Effort: a weekend, ~8 hours*

You build a small experiment to reproduce the blending attack's effect on model accuracy when unlearning 50% of a class on CIFAR-10. Using the authors' released code, you run the blending method and measure accuracy degradation compared to normal unlearning.

**Why it shows you understood the paper:** This project shows you understand the over-unlearning threat and the blending attack mechanism by faithfully reproducing a key quantitative result from the paper.

**Grounded in:** Blending method causes up to 8.1% accuracy degradation on CIFAR-10 with 50% unlearning.

**Tech stack:** Python 3.8+, PyTorch, NumPy, Matplotlib

**Data:** CIFAR-10 dataset, publicly available, used as in the paper.

**Build it:**

1. Clone the authors' repository from https://github.com/TASI-LAB/Over-unlearning.
2. Set up the environment with required dependencies (PyTorch, etc.).
3. Run the baseline normal unlearning experiment on CIFAR-10 for a chosen class.
4. Run the blending attack unlearning experiment unlearning 50% of that class.
5. Measure and plot the model accuracy degradation compared to normal unlearning.
6. Write a README explaining the experiment and results.

**Verified links from the paper:**

- <https://github.com/TASI-LAB/Over-unlearning> — released by the paper's authors

**Ships as:** A GitHub repo with code and README showing the blending attack reproduction and accuracy degradation plot on CIFAR-10.

**Stretch goal:** Add a simple visualization of blended samples to illustrate how blending modifies data.

### Intermediate — Implement and Evaluate Pushing Attack under Black-Box Constraints
*Effort: 1-3 weekends, ~20 hours*

You implement the pushing attack strategy described in the paper to cause over-unlearning on CIFAR-10 using black-box model access. You compare its effectiveness against normal unlearning and the blending baseline by measuring model accuracy after unlearning.

**Why it shows you understood the paper:** This project demonstrates deeper comprehension of the paper's core novel attack method (pushing) and black-box adversarial techniques, replicating the paper's key empirical findings.

**Grounded in:** Pushing methods are more effective and stealthy for over-unlearning.

**Tech stack:** Python 3.8+, PyTorch, NumPy, scikit-image, Matplotlib

**Data:** CIFAR-10 dataset, publicly available, used as in the paper.

**Build it:**

1. Review the pushing attack algorithm as described in the paper.
2. Extend or adapt the authors' codebase to implement the pushing attack under black-box constraints.
3. Run experiments unlearning 10-50% of a class on CIFAR-10 with pushing attack.
4. Compare model accuracy after pushing attack unlearning vs normal unlearning and blending attack.
5. Calculate perceptual similarity metrics (SSIM, LPIPS) to verify stealthiness.
6. Document the implementation details, results, and comparisons in a README.

**Verified links from the paper:**

- <https://github.com/TASI-LAB/Over-unlearning> — released by the paper's authors

**Ships as:** A GitHub repo with pushing attack implementation, experimental results comparing accuracy and stealthiness, and analysis.

**Stretch goal:** Add a simple black-box query simulation to mimic MLaaS constraints more realistically.

### Advanced — Explore Over-Unlearning Attacks on NLP Classification Models
*Effort: few weeks, ~40+ hours*

You extend the paper's over-unlearning attack methods by applying the pushing attack to a simple NLP classification task (e.g., sentiment analysis) to test if over-unlearning threats exist beyond image classification. You adapt the attack to text data and evaluate model degradation after unlearning manipulated samples.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by transferring the attack methodology to a new domain, demonstrating critical thinking and research potential.

**Grounded in:** The study focuses primarily on image classification tasks and may not generalize directly to other domains or modalities; future direction to investigate over-unlearning in other ML domains.

**Tech stack:** Python 3.8+, PyTorch, Transformers (HuggingFace), NumPy, scikit-learn

**Data:** Use a publicly available small NLP dataset such as SST-2 (Stanford Sentiment Treebank) as a substitute for image data.

**Build it:**

1. Select a simple NLP classification dataset (e.g., SST-2) and train a baseline text classification model (e.g., BERT fine-tuned).
2. Design an adaptation of the pushing attack for text data, e.g., adversarial perturbations on embeddings or token substitutions.
3. Implement the adapted pushing attack to generate manipulated samples for unlearning requests.
4. Perform unlearning on the model using normal and manipulated samples, measuring accuracy degradation.
5. Analyze the stealthiness of manipulated samples (e.g., semantic similarity metrics).
6. Write a detailed report comparing results and discussing challenges and implications.

**Ships as:** A GitHub repo with code, experiments, and a comprehensive README/report demonstrating over-unlearning attacks on NLP models.

**Stretch goal:** Explore simple defense mechanisms or detection heuristics for malicious unlearning requests in NLP.
