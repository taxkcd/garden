---
title: "646 · NISQ Security and Complexity via Simple Classical Reasoning — Juan A. Garay"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-juan-a-garay"
source_hash: "89f7572c22aa720f3d25f1746734a8507c162f12ba353d5f27a0294ef90d4717"
sequence: 646
generator: "outreach-garden: managed"
---

# 646 · NISQ Security and Complexity via Simple Classical Reasoning

## At a glance

- **Professor:** Juan A. Garay
- **Institution:** Texas A&M University
- **Paper:** [NISQ Security and Complexity via Simple Classical Reasoning](https://link.springer.com/content/pdf/10.1007/978-3-032-12296-4_15.pdf)
- **Authors:** Alexandru Cojocaru, Juan Garay, Qipeng Liu, Fang Song
- **Year:** 2025

## Paper overview

This paper develops new theoretical tools to analyze the security and computational complexity of cryptographic tasks against adversaries using near-term quantum computers (NISQ devices) that combine classical and quantum queries. The authors introduce a hybrid coherent measure-and-reprogram framework that enables proving security results using only classical combinatorial reasoning, despite the presence of quantum effects. They establish lifting theorems that relate the success probabilities of hybrid quantum-classical adversaries to simpler classical adversaries, and apply these to derive hardness results for various cryptographic problems and query complexity tasks in the NISQ setting.

### Why it matters

**Research problem:** How to rigorously analyze the security and complexity of cryptographic search problems against adversaries with hybrid classical-quantum capabilities in the Noisy Intermediate-Scale Quantum (NISQ) model, including hybrid queries, noisy oracles, and bounded quantum depth, using manageable and general proof techniques.

**Why it matters:** Quantum computing threatens classical cryptographic assumptions, and near-term quantum devices (NISQ) impose practical constraints that differ from ideal quantum models. Understanding security in these realistic quantum scenarios is crucial for designing cryptographic protocols that remain secure in the near future and for advancing quantum computational complexity theory. Existing techniques are often complex, ad-hoc, or limited to specific problems, so a general, simple, and modular framework is needed.

**Key contributions:**

- Introduction of a hybrid coherent measure-and-reprogram framework for hybrid classical-quantum query algorithms.
- Novel hybrid lifting theorem relating hybrid adversaries' success probabilities to simpler hybrid query adversaries.
- Lifting theorems for noisy oracle and bounded-depth quantum algorithms.
- First direct product theorems in the average case for hybrid quantum-classical adversaries.
- Applications to non-uniform security of salted games, multi-instance hardness of cryptographic tasks like one-wayness and collision resistance, and query complexity problems such as multi-image inversion, multi-collision finding, multi-search, and 3SUM.

## About the professor

**Juan A. Garay** — Professor, Computer Science & Engineering, Computer Science & Engineering, Texas A&M University.

Research interests: Cryptography and information security, Cryptographic protocols and schemes, Secure multiparty computation, Cryptocurrencies and blockchain protocols, Cryptography and game theory, Network security, Distributed computing, Consensus problems, Algorithms

### Research links

- [Faculty/profile page](https://engineering.tamu.edu/cse/profiles/garay-juan.html)
- [Professor website](https://jagaray.com/)
- [Google Scholar](https://scholar.google.com/citations?user=pOCh6eAAAAAJ)
- [LinkedIn](https://www.linkedin.com/in/juangaray1/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Quantum Cryptography and Complexity
**The paper assumes:** quantum cryptography, quantum query complexity, quantum random oracle model, quantum algorithms, computational complexity theory
**Already in this field?** Skip this entirely if you already have a solid understanding of quantum cryptography and quantum computational complexity theory.

To understand the paper on NISQ security and complexity via simple classical reasoning, a solid grasp of quantum cryptography, quantum query models, and quantum computational complexity is essential. The rigorous course option offers a deep, structured university-level introduction to quantum computing fundamentals, including quantum algorithms and oracles, which underpin the paper's theoretical framework. The fast track provides a concise, accessible introduction to post-quantum cryptography concepts and the quantum threat to classical cryptography, suitable for quickly gaining relevant intuition and context without the full technical depth.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to quantum computing course 2022](https://www.youtube.com/playlist?list=PLo0Vs5tDeRLRIPcJ83SN91M-asGuaa1AD) — NYU Quantum Technology Lab · 25 videos · 28.9h across 25 episodes

**Watch only this:** Lectures 1-13 (L1 Overview through L13 Composite systems and entanglement), about 15 hours — covering quantum states, measurements, entanglement, and quantum gates to build the necessary background for quantum query models and complexity.

*Why it unblocks this paper:* This NYU Quantum Technology Lab course by Prof. Tim Byrnes covers foundational quantum computing topics such as quantum states, measurements, quantum gates, and quantum algorithms, which are crucial for understanding the quantum random oracle model and hybrid quantum-classical query algorithms used in the paper.

*If you want all of it:* 28.9 hours across 25 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Post-Quantum Cryptography Explained](https://www.youtube.com/playlist?list=PLA1qgQLL41SRldymPO7YOb6eRMXJ_uLkH) — Cryptography 101 · 18 videos · 2.5h across 18 episodes

**Watch only this:** Episodes 2-5 (Post-Quantum Cryptography Explained: An Overview through Quantum-Safe Cryptography), about 30 minutes — these episodes explain the quantum threat, quantum-safe cryptography, and relevant cryptographic primitives.

*Why it unblocks this paper:* This 'Post-Quantum Cryptography Explained' series from Cryptography 101 provides a clear and concise overview of the quantum threat to classical cryptography and introduces key post-quantum cryptographic concepts, giving quick contextual understanding relevant to the paper's focus on security against quantum adversaries.

*If you want all of it:* 2.5 hours across 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'NISQ Security and Complexity via Simple Classical Reasoning,' start with foundational concepts including the Quantum Random Oracle Model, hybrid classical-quantum algorithms, and quantum query complexity to grasp the cryptographic and computational setting. Then, study the core method of the measure-and-reprogram technique, which is central to the authors' framework. Finally, watch the authors' own talk on quantum lifting theorems to see their novel hybrid coherent measure-and-reprogram framework and lifting theorems applied to NISQ security.

### Quantum random oracle model *(prerequisite)*
Understanding the Quantum Random Oracle Model (QROM) is essential as it forms the cryptographic setting where the paper's security proofs and lifting theorems operate. The QROM extends the classical random oracle model to quantum adversaries, allowing quantum queries to oracles, which is critical for analyzing quantum-resistant cryptographic protocols.

*How the paper uses it:* The paper develops lifting theorems for search games in the quantum random oracle model tailored to NISQ settings.

▶ [Online-Extractability in the Quantum Random-Oracle Model](https://www.youtube.com/watch?v=eeh7IPw8hOQ) — IACR · 4 yr ago

### Hybrid classical quantum algorithms *(prerequisite)*
Grasping hybrid classical-quantum algorithms is crucial to understand the adversary model studied in the paper, where adversaries make both classical and quantum queries with bounded quantum depth and noise. This knowledge underpins the motivation for the hybrid lifting theorems and the measure-and-reprogram framework.

*How the paper uses it:* The paper introduces a hybrid coherent measure-and-reprogram framework specifically for hybrid classical-quantum query algorithms.

▶ [Quantum Lifting Theorems in QROM and QRPM](https://www.youtube.com/watch?v=bwtzMtqwLJ8) — Quantum Meets · 1:35:13

### Quantum query complexity *(prerequisite)*
Quantum query complexity provides the theoretical foundation for understanding the bounds on the number of queries quantum algorithms need to solve problems, which is directly related to the paper's complexity results and query limitations in the NISQ model.

*How the paper uses it:* The paper establishes query complexity bounds and lifting theorems that relate hybrid adversaries' success probabilities to simpler adversaries with bounded queries.

▶ [Understanding quantum algorithms via query complexity](https://www.youtube.com/watch?v=v2Y7KkvpmVw) — Rio ICM2018 · 46:55

### Measure-and-reprogram technique
The measure-and-reprogram technique is central to the paper's approach, enabling classical combinatorial reasoning about hybrid quantum-classical adversaries by simulating them with classical algorithms. Understanding this technique is key to grasping how the authors prove their lifting theorems and security results.

*How the paper uses it:* At the core of the paper's results lies the novel hybrid coherent measure-and-reprogram framework, a generalization of prior quantum reprogramming methods.

▶ [QCrypt 2020: The Measure-and-Reprogram Technique 2.0: Multi-Round Fiat-Shamir and More](https://www.youtube.com/watch?v=eNWTjJi8yzE) — QCrypt conference · 6 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on NISQ security and hybrid lifting theorems, start by learning the foundational cryptographic setting of the Quantum Random Oracle Model (QROM), which underpins the security analysis. Next, grasp the nature of hybrid classical-quantum algorithms that model adversaries combining classical and quantum queries. Then, build intuition on quantum query complexity to appreciate the complexity bounds involved. Finally, focus on the paper's core method—the hybrid coherent measure-and-reprogram technique—that enables classical reasoning about hybrid quantum-classical adversaries.

### Quantum random oracle model *(prerequisite)*
The Quantum Random Oracle Model (QROM) is a cryptographic framework where adversaries can query a random oracle in quantum superposition, making security proofs more challenging. Understanding QROM is essential for analyzing cryptographic protocols against quantum adversaries.

*How the paper uses it:* The paper's security and complexity results are established in the QROM setting tailored to NISQ adversaries.

▶ [Mark Zhandry: Quantum Random Oracle (Part 1)](https://www.youtube.com/watch?v=DgBlsbr7ORU) — The BIU Research Center on Applied Cryptography and Cyber Security · 52:43

### Hybrid classical quantum algorithms *(prerequisite)*
Hybrid classical-quantum algorithms combine classical and quantum computations, often making both classical and quantum queries to oracles. This model reflects realistic near-term quantum adversaries with limited quantum capabilities.

*How the paper uses it:* The paper studies adversaries modeled as hybrid classical-quantum query algorithms, central to their lifting theorems.

▶ [Quantum Lifting Theorems in QROM and QRPM](https://www.youtube.com/watch?v=bwtzMtqwLJ8) — Quantum Meets · 1:35:13

### Quantum query complexity *(prerequisite)*
Quantum query complexity measures how many queries a quantum algorithm needs to solve a problem, providing fundamental limits on quantum algorithm efficiency. Understanding this helps interpret the bounds and hardness results in the paper.

*How the paper uses it:* The paper derives query complexity bounds for hybrid adversaries in NISQ settings.

▶ [Understanding quantum algorithms via query complexity](https://www.youtube.com/watch?v=v2Y7KkvpmVw) — Rio ICM2018 · 46:55

### Measure-and-reprogram technique
The measure-and-reprogram technique is a quantum cryptographic proof method that simulates quantum adversaries by measuring and reprogramming oracles, enabling classical reasoning about quantum queries. The paper generalizes this to a hybrid coherent version for hybrid adversaries.

*How the paper uses it:* The hybrid coherent measure-and-reprogram framework is the core novel method enabling the paper's classical combinatorial security proofs.

▶ [QCrypt 2020: The Measure-and-Reprogram Technique 2.0: Multi-Round Fiat-Shamir and More](https://www.youtube.com/watch?v=eNWTjJi8yzE) — QCrypt conference · 6 yr ago

## Already in your library

- [What is the NISQ Era? Near-Term Quantum Computing Explained](https://www.youtube.com/watch?v=0QPTokUtiz8) — also for: An industry-academia partnership for advancing quantum frontiers: perspective from the U.S. Center for Quantum Technologies (Peter M. Kogge)
- [Dominique Unruh - The quantum random oracle model Part 1 of 2 - IPAM at UCLA](https://www.youtube.com/watch?v=YAIFGB4ryGE) — also for: Nonadaptive One-Way to Hiding Implies Adaptive Quantum Reprogramming (Joseph Jaeger)
- [Random Oracle model, Security of hash functions](https://www.youtube.com/watch?v=L9YnO_bIdnk) — also for: Obfuscated Consensus (James Aspnes)
- [Hybrid Classical-Quantum Algorithms](https://www.youtube.com/watch?v=PHoX1HCiVoY) — also for: An industry-academia partnership for advancing quantum frontiers: perspective from the U.S. Center for Quantum Technologies (Peter M. Kogge)
- [Part 1 Quantum query complexity basics+the hybrid method | Yassine Hamoudi (U California, Berkeley)](https://www.youtube.com/watch?v=ivSG82Q3ANg) — also for: From Promises to Totality: A Framework for Ruling Out Quantum Speedups (Supartha Podder)
- [Hybrid Quantum-Classical Computing Explained - The Future of AI & Science](https://www.youtube.com/watch?v=Vk__RaHK9pA) — also for: A Comprehensive Analysis of Accuracy and Robustness in Quantum Neural Networks (Susan A. Mengel)
- [A Quantum Query Complexity Trichotomy for Regular Languages](https://www.youtube.com/watch?v=PKAgbsncyI8) — also for: From Promises to Totality: A Framework for Ruling Out Quantum Speedups (Supartha Podder)
- [Qalgo 6.1: Models of query complexity](https://www.youtube.com/watch?v=y9IZ6W1ddGw) — also for: From Promises to Totality: A Framework for Ruling Out Quantum Speedups (Supartha Podder)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the hybrid coherent measure-and-reprogram framework and hybrid lifting theorems introduced in the paper. Starting with a basic simulation of the hybrid adversary model, you then implement and evaluate the core hybrid lifting theorem on a simplified cryptographic search problem. Finally, you extend the framework to explore one of the paper's stated limitations by experimenting with noisy oracle parameters and analyzing tightness of bounds, showcasing your ability to engage with open research questions.

### Beginner — Simulate Hybrid Classical-Quantum Query Model
*Effort: a weekend, ~8 hours*

You build a small simulation of a hybrid adversary making classical and quantum queries to a random oracle, tracking query counts and success probabilities. The simulation models the hybrid coherent measure-and-reprogram framework's key idea by representing hybrid queries and their combinatorial success metric.

**Why it shows you understood the paper:** This project concretely demonstrates your grasp of the hybrid adversary model and the combinatorial quantity p(R) central to the paper's classical reasoning approach, showing you can translate abstract quantum-classical hybrid concepts into code.

**Grounded in:** Claim: The paper introduces a hybrid coherent measure-and-reprogram framework for hybrid classical-quantum query algorithms.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** No external data needed; simulate random oracle queries and hybrid adversary behavior as described in the paper.

**Build it:**

1. Implement a classical random oracle as a hash function simulator.
2. Model a hybrid adversary that issues a fixed pattern of classical and quantum queries.
3. Track the success probability metric p(R) as a combinatorial function of queries.
4. Visualize how varying the number of classical vs quantum queries affects p(R).
5. Write a README explaining the hybrid adversary model and the simulation results.

**Ships as:** A Jupyter notebook with simulation code, plots of success probability vs query counts, and a README explaining the hybrid coherent measure-and-reprogram framework.

**Stretch goal:** Add a simple baseline that models only classical queries and compare success probabilities.

### Intermediate — Implement Hybrid Lifting Theorem on Multi-Image Inversion
*Effort: 2 weekends, ~20 hours*

You reimplement the core hybrid lifting theorem (Theorem 1.1) from the paper to analyze the hardness of a simplified multi-image inversion cryptographic search problem. You simulate hybrid adversaries with bounded classical and quantum queries, then compare their success probabilities to simpler hybrid adversaries as per the theorem's bounds.

**Why it shows you understood the paper:** This project shows you can implement the paper's central proof technique and apply it to a concrete cryptographic hardness problem, reproducing the kind of bounds and reasoning the authors present.

**Grounded in:** Theorem 1.1: Hybrid lifting theorem bounding the success probability of a hybrid adversary by that of a simpler hybrid adversary with a polynomial loss depending on query counts.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** No real dataset; simulate cryptographic search instances and oracle queries as per the paper's multi-image inversion problem description.

**Build it:**

1. Define a simplified multi-image inversion problem with multiple independent instances.
2. Implement hybrid adversaries issuing classical and quantum queries with fixed query budgets.
3. Code the hybrid lifting theorem's combinatorial bound to relate success probabilities.
4. Run experiments varying query counts and number of instances to observe direct product behavior.
5. Plot success probability bounds and compare with naive baselines.
6. Document the implementation, experiments, and how results align with Theorem 1.1.

**Ships as:** A Python project with code implementing the hybrid lifting theorem, experimental results on multi-image inversion hardness, and a detailed README.

**Stretch goal:** Extend to include noisy oracle queries and observe how bounds degrade.

### Advanced — Explore Tightness of Lifting Bounds in Noisy Oracle Models
*Effort: 3+ weeks*

You extend the hybrid coherent measure-and-reprogram framework by implementing experiments to test the tightness of the lifting theorem bounds (Theorem 1.2) for noisy oracle models. You simulate hybrid adversaries under varying noise parameters and quantum depth constraints, analyze where bounds are loose, and propose small modifications or heuristics to improve tightness.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating your ability to engage with open research questions and extend theoretical frameworks through empirical analysis.

**Grounded in:** Limitation: The bounds for noisy oracle and bounded-depth quantum models are not always tight away from extreme noise parameters.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** Synthetic data simulating noisy oracle responses and hybrid adversary queries as described in the paper's noisy oracle model.

**Build it:**

1. Implement the noisy oracle model with configurable noise parameters.
2. Simulate hybrid adversaries with bounded quantum depth making queries to the noisy oracle.
3. Compute success probabilities and compare them to the theoretical bounds from Theorem 1.2.
4. Identify parameter regimes where bounds are loose and analyze causes.
5. Experiment with heuristic adjustments or alternative combinatorial metrics to tighten bounds.
6. Write a comprehensive report discussing findings, limitations, and possible future improvements.

**Ships as:** A research-style codebase with simulations, plots, and a report analyzing tightness of noisy oracle lifting bounds, suitable for discussion with a research mentor.

**Stretch goal:** Attempt to extend the framework to adaptive hybrid query patterns with minimal loss.
