---
title: "403 · Can We Trust the Similarity Measurement in Federated Learning? — Xukai Zou"
date: 2026-08-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xukai-zou"
source_hash: "6160c9a7e3f53065d5cad39bb1332d4f346ae872b4738473bc598523a33e519b"
sequence: 403
generator: "outreach-garden: managed"
---

# 403 · Can We Trust the Similarity Measurement in Federated Learning?

## At a glance

- **Professor:** Xukai Zou
- **Institution:** IUPUI
- **Paper:** [Can We Trust the Similarity Measurement in Federated Learning?](https://arxiv.org/pdf/2311.03369)
- **Authors:** Zhilin Wang, Qin Hu, Xukai Zou
- **Year:** 2023

## Paper overview

This paper investigates the security risks of using similarity metrics to evaluate local models in federated learning (FL). It reveals that attackers can craft poisoned models that appear similar to benign models under common similarity measures but differ significantly in parameters, enabling effective attacks that evade detection. The authors propose a novel attack called Faker that exploits these vulnerabilities and demonstrate its effectiveness across multiple datasets and defenses. They also suggest a defense strategy called similarity of partial parameters (SPP) to mitigate such attacks.

### Why it matters

**Research problem:** Is it secure to measure the reliability of local models by similarity metrics in federated learning, given that these metrics might be vulnerable to adversarial manipulation?

**Why it matters:** Federated learning relies on aggregating local models from multiple clients without accessing raw data, making it vulnerable to adversarial attacks. Many defenses use similarity metrics to detect malicious models, but if these metrics are unreliable, the entire FL system's security is compromised.

**Key contributions:**

- Revealing the insecurity of similarity metrics in evaluating local models in FL.
- Designing Faker, a novel untargeted model poisoning attack exploiting similarity metric vulnerabilities.
- Formulating Faker as an optimization problem to generate stealthy poisoned models.
- Demonstrating Faker's superior attack success rate and efficiency compared to benchmark attacks.
- Proposing the similarity of partial parameters (SPP) defense to mitigate Faker.

## About the professor

**Xukai Zou** — Professor, Applied and Creative Computing, IUPUI.

Research interests: Secure group communication, differential and hierarchical access control, ad hoc networks, trusted collaborative computing

### Research links

- [Faculty/profile page](https://luddy.indianapolis.iu.edu/people/xukai-zou.html)
- [Identity evidence](http://cs.iupui.edu/~xkzou)
- [Identity evidence](https://luddy.indianapolis.iu.edu/about/directory/xukai-zou.html)
- [Identity evidence](https://dblp.org/pid/41/592.html)
- [Identity evidence](https://scholarworks.indianapolis.iu.edu/collections/56eca450-f017-4aee-a783-dce85f85e752)
- [Professor website](http://cs.iupui.edu/~xzou/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Federated Learning Security
**The paper assumes:** federated learning fundamentals, adversarial machine learning, model poisoning attacks
**Already in this field?** Skip this entirely if you already understand federated learning architectures and the security challenges of adversarial attacks on distributed model aggregation.

To understand the security vulnerabilities of similarity metrics in federated learning as explored in the paper, a solid grasp of federated learning concepts and adversarial threats in distributed learning is essential. The rigorous course option provides a structured, in-depth academic treatment, while the fast track offers a concise, practical introduction to federated learning security and attacks. Choose the course for comprehensive foundational knowledge and the fast track for a quicker, focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Advanced Machine Learning (lecture series)](https://www.youtube.com/playlist?list=PLemsnf33Vij4-kv-JTjDthaGUYUnQbbws) — Florian Marquardt

**Watch only this:** Since no episode titles or durations are provided, recommend watching the first 3 lectures (approximately 3 hours) to cover foundational federated learning concepts and security challenges relevant to the paper.

*Why it unblocks this paper:* This university lecture series by Florian Marquardt covers advanced machine learning topics, likely including federated learning fundamentals and security aspects, providing the rigorous theoretical background needed to fully understand the paper's attack and defense mechanisms.

*If you want all of it:* Total duration unknown; watch entire playlist for comprehensive coverage.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Federated AI Simulations with Flower (2025 Tutorial)](https://www.youtube.com/playlist?list=PLNG4feLHqCWkdlSrEL2xbCtGa6QBxlUZb) — Flower · 9 videos

**Watch only this:** Watch the first 4 episodes (about 2 hours) to get a practical overview of federated learning setup, local model updates, and security challenges.

*Why it unblocks this paper:* The 'Federated AI Simulations with Flower (2025 Tutorial)' playlist offers a concise, practical introduction to federated learning frameworks and security considerations, directly relevant to understanding the paper's context and the role of similarity metrics in detecting attacks.

*If you want all of it:* All 9 episodes, approximately 4.5 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Can We Trust the Similarity Measurement in Federated Learning?", start by building foundational knowledge on the security challenges and adversarial threats in federated learning, followed by an understanding of model poisoning attacks which are the core adversarial threat the paper addresses. Next, explore the vulnerabilities of similarity metrics in high-dimensional spaces, which underpin the paper's main technical insight. Finally, study the authors' own talk presenting their novel Faker attack and defense strategy, which directly explains their contributions and experimental results.

### Federated learning security *(prerequisite)*
This section covers the security challenges and threat models in federated learning, providing essential context for why similarity metrics are used for defense and how adversaries can exploit vulnerabilities. Understanding these security issues is critical to grasp the motivation behind the Faker attack and the proposed defenses.

*How the paper uses it:* The paper investigates security risks in federated learning, making this foundational knowledge crucial.

▶ [Mitigating Data Poisoning Attacks in Federated Learning by Dr ...](https://www.youtube.com/watch?v=38TMZNIjzYQ) — Canadian Institute for Cybersecurity (CIC) · 30:31

### Model poisoning attacks in federated learning *(prerequisite)*
This section focuses on adversarial model poisoning attacks, which are the core threat the Faker attack improves upon. It explains how attackers manipulate local models to degrade global model performance, setting the stage for understanding the novelty and effectiveness of Faker.

*How the paper uses it:* Faker is a novel model poisoning attack exploiting similarity metric vulnerabilities.

▶ [USENIX Security '20 - Local Model Poisoning Attacks to ...](https://www.youtube.com/watch?v=SQ12UpYrUVU) — USENIX · 12:08

### Similarity metrics in high-dimensional spaces *(prerequisite)*
Understanding how similarity metrics behave in high-dimensional parameter spaces is fundamental to appreciating why common metrics like L2 norm and cosine similarity can be deceived by poisoned models. This section provides the mathematical and intuitive background on similarity measures relevant to the paper's analysis.

*How the paper uses it:* The paper reveals vulnerabilities of common similarity metrics used in federated learning.

▶ [Cosine Similarity, Clearly Explained!!!](https://www.youtube.com/watch?v=e9U0QAFbfLI) — StatQuest with Josh Starmer · 10:14

### Paper authors' talk *(the paper's own talk)*
The authors' own talk provides direct insights into their research, including the design of the Faker attack, the optimization formulation, experimental evaluation, and the proposed SPP defense. This talk is the most authoritative and detailed source for understanding the paper's contributions and implications.

*How the paper uses it:* This is the authors' presentation of their work on similarity measurement vulnerabilities and the Faker attack.

▶ [Exploiting Similarity in Federated Learning](https://www.youtube.com/watch?v=tCLhleUT2TM) — Simons Institute for the Theory of Computing · Streamed 5 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces federated learning and its security challenges, focusing on model poisoning attacks and the vulnerabilities of similarity metrics used to detect them. Starting with foundational concepts of federated learning and similarity measures, it then covers adversarial attacks on federated models before concluding with the paper's core insight on similarity metric vulnerabilities and the Faker attack.

### Federated learning security *(prerequisite)*
Learn what federated learning is and why it faces unique security challenges, including how adversaries can attack distributed models without accessing raw data. This foundation is essential to understand the context and motivation behind the paper's investigation.

*How the paper uses it:* The paper studies attacks and defenses in federated learning, making understanding FL security crucial.

▶ [Mitigating Data Poisoning Attacks in Federated Learning by Dr ...](https://www.youtube.com/watch?v=38TMZNIjzYQ) — Canadian Institute for Cybersecurity (CIC) · 30:31

### Similarity metrics in high-dimensional spaces *(prerequisite)*
Understand how similarity metrics like cosine similarity, L2 norm, and Euclidean distance work, especially in high-dimensional vector spaces. This intuition helps explain why these metrics can fail to distinguish between benign and poisoned models in federated learning.

*How the paper uses it:* The paper reveals vulnerabilities in common similarity metrics used to evaluate local models in FL.

▶ [Cosine Similarity, Clearly Explained!!!](https://www.youtube.com/watch?v=e9U0QAFbfLI) — StatQuest with Josh Starmer · 10:14

### Optimization for adversarial model crafting
Learn the basics of optimization techniques used to craft adversarial models that maximize attack effectiveness while evading detection. This knowledge supports understanding how Faker formulates its attack as an optimization problem.

*How the paper uses it:* Faker uses an optimization problem to generate poisoned models that appear similar to benign ones.

▶ [Robust Learning via Robust Optimization - Stefanie Jegelka](https://www.youtube.com/watch?v=IgAPc0i0-9E) — IBM Research · 6 years ago

### Paper authors' talk *(the paper's own talk)*
Watch the authors' presentation to gain direct insights into their analysis of similarity metric vulnerabilities and the design of the Faker attack and SPP defense. This talk summarizes the paper's key contributions and experimental results.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on their work.

▶ [Exploiting Similarity in Federated Learning](https://www.youtube.com/watch?v=tCLhleUT2TM) — Simons Institute for the Theory of Computing · Streamed 5 months ago

## Already in your library

- [USENIX Enigma 2017 — Adversarial Examples in Machine ...](https://www.youtube.com/watch?v=hUukErt3-7w) — also for: The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models (Amir Sadovnik)
- [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Adversarial Examples for Deep Neural Networks](https://www.youtube.com/watch?v=kxyacmVSGlI) — also for: A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services (Shuang Hao)
- [Physics Informed Machine Learning: High Level Overview of ...](https://www.youtube.com/watch?v=JoFW2uSd3Uo) — also for: OASIS: Harnessing Diffusion Adversarial Network for Ocean Salinity Imputation using Sparse Drifter Trajectories (Yufei Tang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper "Can We Trust the Similarity Measurement in Federated Learning?". The beginner project reproduces a core vulnerability of similarity metrics in federated learning on a small scale. The intermediate project implements the Faker attack optimization and compares it against a baseline defense on a public dataset. The advanced project extends the Faker attack by exploring more efficient optimization methods or adapting the attack to other similarity-based evaluation metrics, addressing the paper's stated limitations and future directions.

### Beginner — Similarity Metric Vulnerability Demo in Federated Learning
*Effort: a weekend, ~8 hours*

You build a small federated learning simulation with a few clients training simple neural networks on a public dataset (e.g., MNIST). You implement common similarity metrics (L2 norm, Euclidean distance, cosine similarity) to compare local model updates and demonstrate how two models can have high similarity scores despite significant parameter differences, reproducing the paper's core vulnerability.

**Why it shows you understood the paper:** This project shows you understand the fundamental insecurity of similarity metrics in federated learning by reproducing the key insight that similarity scores can be misleading in high-dimensional model spaces.

**Grounded in:** Revealing the insecurity of similarity metrics in evaluating local models in FL.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook

**Data:** MNIST dataset, a well-known public dataset used as a substitute for the paper's datasets.

**Build it:**

1. Set up a simple federated learning simulation with 3-5 clients training a small neural network on MNIST.
2. Implement L2 norm, Euclidean distance, and cosine similarity to measure similarity between local model updates.
3. Craft or select two local models with similar similarity scores but large parameter differences.
4. Visualize and report the similarity scores and parameter differences to demonstrate the vulnerability.

**Ships as:** A Jupyter notebook with code and visualizations showing similarity metric failures on MNIST local models.

**Stretch goal:** Add a simple defense that flags models with large parameter differences despite high similarity scores.

### Intermediate — Implementing Faker Attack and SPP Defense on MNIST
*Effort: 2 weekends, ~20 hours*

You reimplement the Faker attack as an optimization problem to craft poisoned local models that maximize similarity to benign models while maximizing parameter differences. You apply this attack on MNIST in a federated learning setup and implement the paper's proposed Similarity of Partial Parameters (SPP) defense. You compare Faker's attack success rate and detection rate against a baseline similarity metric defense.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core method into code, reproduce its main attack and defense mechanisms, and evaluate their effectiveness on a standard dataset.

**Grounded in:** Designing Faker, a novel untargeted model poisoning attack exploiting similarity metric vulnerabilities; Proposing the similarity of partial parameters (SPP) defense to mitigate Faker.

**Tech stack:** Python 3.11, PyTorch, SciPy (for optimization), Jupyter Notebook

**Data:** MNIST dataset, used as a substitute for the paper's datasets.

**Build it:**

1. Implement a federated learning simulation with multiple clients training on MNIST.
2. Formulate and solve the Faker attack optimization problem to generate poisoned local models.
3. Implement similarity metrics and the SPP defense calculating similarity on random partial parameters.
4. Run experiments comparing Faker attack success and detection rates against a baseline similarity metric defense.
5. Analyze and visualize results showing Faker's effectiveness and SPP's mitigation.

**Ships as:** A Jupyter notebook or Python scripts with Faker attack and SPP defense implementations, experiment results, and analysis.

**Stretch goal:** Extend the Faker attack to a different public dataset (e.g., CIFAR-10) or implement additional similarity metrics.

### Advanced — Extending Faker Attack with Efficient Optimization or New Similarity Metrics
*Effort: 3+ weeks*

You develop a genuine extension by improving the optimization method for the Faker attack to be more efficient or accurate, or by adapting Faker to attack other similarity-based evaluation metrics used in federated learning or fairness assessments. You evaluate your extension on a public dataset and compare with the original Faker attack results.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's limitations and future directions by addressing the approximate optimization or metric robustness challenges, potentially contributing novel insights to federated learning security.

**Grounded in:** Developing more efficient and accurate solutions for the optimization problem underlying Faker; In-depth theoretical and experimental study of similarity metrics' robustness beyond FL systems.

**Tech stack:** Python 3.11, PyTorch, SciPy or CVXPY (for advanced optimization), Jupyter Notebook

**Data:** MNIST or CIFAR-10 dataset as substitutes for the paper's datasets.

**Build it:**

1. Review the paper's Faker attack optimization formulation and current approximate solution methods.
2. Research and implement a more efficient or accurate optimization algorithm (e.g., gradient-based methods, convex relaxations).
3. Alternatively, identify and implement new similarity metrics relevant to federated learning or fairness evaluation.
4. Adapt Faker attack to exploit vulnerabilities in these new metrics.
5. Evaluate and compare attack success and detection rates against baseline Faker and defenses.
6. Document findings and potential implications for federated learning security.

**Ships as:** A comprehensive codebase and report demonstrating the extended Faker attack with improved optimization or new similarity metrics, including experimental evaluation.

**Stretch goal:** Explore integration of cryptographic verification techniques to enhance model reliability assessment as suggested in the paper's thoughtful question.
