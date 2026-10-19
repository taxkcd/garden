---
title: "812 · Compact Frequency Estimators in Adversarial Environments — Thomas Shrimpton"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-thomas-shrimpton"
source_hash: "29b4fea1ec0b1eb9d673c84b2a95022661e599bafb8fd9ce6e566bb9ba20d785"
sequence: 812
generator: "outreach-garden: managed"
---

# 812 · Compact Frequency Estimators in Adversarial Environments

## At a glance

- **Professor:** Thomas Shrimpton
- **Institution:** University of Florida
- **Paper:** [Compact Frequency Estimators in Adversarial Environments](https://dl.acm.org/doi/pdf/10.1145/3576915.3623216)
- **Authors:** Sam A. Markelon, Mia Filić, Thomas Shrimpton
- **Year:** 2023

## Paper overview

This paper studies compact frequency estimators (CFEs), which are data structures used to estimate how often elements appear in large data streams. The authors analyze two popular CFEs, Count-Min Sketch (CMS) and HeavyKeeper (HK), showing that both can be manipulated by adaptive adversaries to produce large estimation errors. They propose a new CFE called Count-Keeper (CK) that combines CMS and HK to improve accuracy and robustness against such attacks, and can flag suspicious estimates.

### Why it matters

**Research problem:** How to design compact frequency estimators that remain accurate and robust when the data stream is controlled or influenced by adaptive adversaries who can exploit the internal randomness of the data structure.

**Why it matters:** CFEs are widely used in network monitoring, database queries, and anomaly detection to identify heavy hitters or frequent elements. If adversaries can manipulate these estimators to hide or fake heavy hitters, it can undermine security systems such as DDoS detection or network planning.

**Key contributions:**

- Formalization of an adaptive adversarial attack model on CFEs with four access settings (public/private keys and representations).
- Concrete attacks on CMS and HK showing they can be forced to produce arbitrarily large frequency estimation errors.
- Introduction of the Count-Keeper structure that combines CMS and HK to reduce estimation errors by at least a factor of two compared to CMS.
- Demonstration that Count-Keeper can flag suspicious frequency estimates, a feature absent in CMS and HK.
- Analytical and experimental validation of the attacks and defenses, including error bounds and cover set sizes.

## About the professor

**Thomas Shrimpton** — Professor, CISE Department, University of Florida.

Research interests: cryptography, hash functions, authenticated encryption schemes, symmetric-key primitives, applied cryptography, IC supply chain security, data structures, censorship circumvention tools

### Research links

- [Faculty/profile page](https://cise.ufl.edu/~teshrim)
- [Professor website](https://cise.ufl.edu/~teshrim/new-homepage.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** probabilistic data structures
**The paper assumes:** probabilistic data structures, streaming algorithms, hash-based frequency estimation
**Already in this field?** Skip this entirely if you already understand the design and analysis of probabilistic data structures like Count-Min Sketch and HeavyKeeper for frequency estimation in data streams.

This background focuses on probabilistic data structures, specifically compact frequency estimators like Count-Min Sketch and HeavyKeeper, which are central to understanding the attacks and defenses in the paper. The rigorous course option offers a deep, structured university-level introduction to data structures and hashing fundamentals, while the fast track provides a concise, targeted overview suitable for quickly grasping key concepts relevant to frequency estimation and hashing.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CSC263: Data Structures and Analysis](https://www.youtube.com/playlist?list=PL867l8oCp40CVe1A5AXpQvHg20dG0W6Ek) — Smit Rao · 13 videos

**Watch only this:** Episodes 4 (Probability), 11 (Dictionary I - BST), 12 (Dictionary II - AVL Trees and Augmentation), and 13 (Dictionary III - Hash Tables), about 1.5 hours total — these cover probability basics and hash tables, which are critical to grasping the paper's data structures and adversarial attacks.

*Why it unblocks this paper:* This university lecture series by Smit Rao covers foundational data structures, hashing, and probability concepts essential for understanding the internal workings and vulnerabilities of compact frequency estimators like CMS and HK.

*If you want all of it:* 5.1 hours across all 13 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Data Structure and Algorithm](https://www.youtube.com/playlist?list=PLoEGdOkeVpDgm5J_pWk8dnyMPgqMiTuP8) — Grandmaster GyoroGyoro · 15 videos

**Watch only this:** Watch the first 5 episodes, about 1.5 hours total — these cover hashing, data structures, and probabilistic methods needed to understand the paper's core concepts.

*Why it unblocks this paper:* This short-form playlist provides clear, concise explanations of data structures and algorithms, including hashing and probabilistic data structures, offering a quick but solid conceptual foundation relevant to frequency estimators and their vulnerabilities.

*If you want all of it:* Approximately 3-4 hours for all 15 episodes (exact duration not specified)

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Compact Frequency Estimators in Adversarial Environments,' start with foundational knowledge on hash functions in probabilistic data structures to grasp how collisions and cover sets arise. Then, study adaptive adversarial attacks on data structures to comprehend the threat model exploited by adversaries. Next, review compact frequency estimation data structures like Count-Min Sketch and HeavyKeeper, which are the basis for the paper's analysis. Finally, focus on the paper's core contribution through the authors' own talk presenting their new Count-Keeper structure and adversarial analysis.

### Hash functions in probabilistic data structures *(prerequisite)*
Understanding hash functions and their probabilistic properties is critical to grasp how frequency estimators like CMS and HK work, and how collisions lead to estimation errors. The selected MIT OpenCourseWare lecture by Jason Ku provides a rigorous university-level treatment of hashing, suitable for advanced readers.

*How the paper uses it:* The paper's attack model and cover set concept rely heavily on hash function collisions in CFEs.

▶ [4. Hashing](https://www.youtube.com/watch?v=Nu8YGneFCWE) — MIT OpenCourseWare · 52:55 · 5y ago

### Adaptive adversarial attacks on data structures *(prerequisite)*
This concept covers how adaptive adversaries exploit internal randomness and query access to manipulate data structures. The Stanford talk by Florian Tramer on adaptive attacks to adversarial defenses offers a research-level perspective on adaptive attacks, aligning well with the paper's adversarial model.

*How the paper uses it:* The paper formalizes adaptive adversarial attacks on CFEs and demonstrates their impact on CMS and HK.

▶ [ScAINet '20 - On Adaptive Attacks to Adversarial Example Defenses](https://www.youtube.com/watch?v=ZFdtBA4eAgc) — USENIX · 20:20 · 6y ago

### Compact frequency estimation data structures *(prerequisite)*
To understand the vulnerabilities and improvements proposed, one must know how compact frequency estimators like Count-Min Sketch and HeavyKeeper function. The IDEAL Workshop talk by Jelani Nelson on private frequency estimation is a rigorous research lecture that provides foundational knowledge on frequency estimation algorithms.

*How the paper uses it:* CMS and HK are the primary CFEs analyzed and attacked in the paper, forming the baseline for the new Count-Keeper design.

▶ [IDEAL Workshop: Jelani Nelson, Private Frequency Estimation via Projective Geometry](https://www.youtube.com/watch?v=vVmrf1Mwxyg) — Advanced Algorithms · 45:35 · 4y ago

### Compact Frequency Estimators in Adversarial Environments (paper core concept) *(paper-talk search result; attribution unverified)*
The authors' own talk at RWC 2024 is the best source for understanding their novel Count-Keeper structure, the adversarial attack model, and experimental results. It provides direct insights into the paper's contributions and context from the researchers themselves.

*How the paper uses it:* This talk presents the paper's main contributions, attack formalization, and the Count-Keeper defense mechanism.

▶ [Compact Frequency Estimators in Adversarial Environments (RWC 2024)](https://www.youtube.com/watch?v=EZzSEvqMmKA) — IACR · 20:26 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Compact Frequency Estimators in Adversarial Environments, start by learning the basics of hash functions and their role in probabilistic data structures, which are critical for frequency estimation. Next, grasp the foundational concepts of compact frequency estimation data structures like Count-Min Sketch and HeavyKeeper. Then, study adaptive adversarial attacks that exploit these data structures' randomness. Finally, explore the hybrid data structure design concept that underpins the paper's proposed Count-Keeper, which improves robustness and accuracy.

### Hash functions in probabilistic data structures *(prerequisite)*
Hash functions map data elements to positions in data structures, enabling efficient storage and retrieval. In probabilistic data structures, hashing helps manage collisions and estimate frequencies approximately, which is essential for compact frequency estimators. Understanding hashing principles clarifies how adversaries can exploit collisions to manipulate frequency estimates.

*How the paper uses it:* The paper analyzes how hash collisions and cover sets affect frequency estimators' vulnerability to adversarial attacks.

▶ [4. Hashing](https://www.youtube.com/watch?v=Nu8YGneFCWE) — MIT OpenCourseWare · 52:55 · 5y ago

### Compact frequency estimation data structures *(prerequisite)*
Compact frequency estimators like Count-Min Sketch and HeavyKeeper are data structures designed to estimate how often elements appear in large data streams using limited space. They use hashing and counters to provide approximate frequency counts efficiently, which is crucial for applications like network monitoring and anomaly detection.

*How the paper uses it:* The paper studies vulnerabilities and improvements of CMS and HK, the two popular compact frequency estimators.

▶ [1.4 Frequency Count Method](https://www.youtube.com/watch?v=1U3Uwct45IY) — Abdul Bari · 12:22 · 8y ago

### Adaptive adversarial attacks on data structures *(prerequisite)*
Adaptive adversarial attacks involve an attacker who can interact with and adapt to a data structure's internal randomness to cause errors or misestimations. Understanding these attacks helps appreciate the challenges in designing robust frequency estimators that resist manipulation.

*How the paper uses it:* The paper formalizes an adaptive adversarial attack model that exploits internal randomness to induce large estimation errors in CFEs.

▶ [Nazli Dereli - Adversarial Attacks: A Real Threat to Our Machine Learning Systems](https://www.youtube.com/watch?v=KSrOIyIEQgg) — Data Circles · 20:04 · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Hearing directly from the authors provides insights into their motivations, methodology, and key findings, complementing the technical understanding with context and future directions.

*How the paper uses it:* The authors present their work on compact frequency estimators and adversarial robustness in this recorded talk.

▶ [Compact Frequency Estimators in Adversarial Environments (RWC 2024)](https://www.youtube.com/watch?v=EZzSEvqMmKA) — IACR · 20:26 · 2y ago

## Already in your library

- [Kernel Density Estimation - Explained](https://www.youtube.com/watch?v=6sGOMbC5xdE) — also for: On Imbalanced Regression with Hoeffding Trees (Dimitrios I. Diochnos)
- [Stanford CS230: Deep Learning | Autumn 2018 | Lecture 4 - Adversarial Attacks / GANs](https://www.youtube.com/watch?v=ANszao6YQuM) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Adversarial Attacks on AI Explained | AiSecurityDIR](https://www.youtube.com/watch?v=5mCQOZBagGo) — also for: A Comprehensive Analysis of Accuracy and Robustness in Quantum Neural Networks (Susan A. Mengel)
- [L-6.1: What is hashing with example | Hashing in data structure](https://www.youtube.com/watch?v=W5q0xgxmRd8) — also for: Linear Hashing Is Optimal (David Zuckerman)
- [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Data Structures Explained for Beginners - How I Wish I was Taught](https://www.youtube.com/watch?v=O9v10jQkm5c) — also for: On the Implementations of the BiTemporal RDF Model: An Experimental Approach (Abdullah Uz Tansel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and demonstrate the core ideas of the paper "Compact Frequency Estimators in Adversarial Environments." The beginner project focuses on reproducing a fundamental vulnerability of Count-Min Sketch under adversarial conditions. The intermediate project builds on the authors' released code to implement and evaluate the Count-Keeper hybrid data structure against attacks. The advanced project extends the paper by exploring adaptive threshold tuning for Count-Keeper's flagging mechanism, addressing a stated limitation and future direction.

### Beginner — Adversarial Attack on Count-Min Sketch
*Effort: a weekend, ~8 hours*

You build a simple simulation of the Count-Min Sketch (CMS) data structure and implement a basic adaptive adversarial attack that finds cover sets to induce large estimation errors on a target element. You then measure and visualize the estimation error before and after the attack.

**Why it shows you understood the paper:** This project shows you understand the vulnerability of CMS to adaptive adversaries by concretely reproducing the attack mechanism and its impact on frequency estimation accuracy.

**Grounded in:** CMS and HK are vulnerable to adaptive adversaries who can create large over- or under-estimation errors.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic data stream generated in code simulating element insertions and adversarial queries.

**Build it:**

1. Implement a Count-Min Sketch data structure with configurable width and depth.
2. Generate a synthetic data stream of elements with known frequencies.
3. Implement the cover set attack: find elements that collide with the target element's counters.
4. Simulate the adversarial insertion of cover set elements to distort the target's frequency estimate.
5. Measure and plot the estimation error of the target element before and after the attack.

**Ships as:** A GitHub repository with CMS implementation, attack code, plots showing estimation errors, and a README explaining the vulnerability.

**Stretch goal:** Add a simple flagging heuristic to detect suspiciously large estimation errors in CMS.

### Intermediate — Implementing and Evaluating Count-Keeper
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' Count-Keeper implementation from their GitHub repository, then extend it by running experiments comparing Count-Keeper's accuracy and robustness against CMS and HeavyKeeper on synthetic and adversarial streams. You reproduce key metrics such as error reduction and flagging rates.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' code, understand the hybrid data structure design, and validate the paper's core claims about Count-Keeper's improved accuracy and adversarial robustness.

**Grounded in:** Introduction of the Count-Keeper structure that combines CMS and HK to reduce estimation errors by at least a factor of two compared to CMS; Count-Keeper's flagging mechanism successfully detects suspicious estimates.

**Tech stack:** Python 3.11, matplotlib, numpy, Git

**Data:** Synthetic data streams generated by the authors' code simulating honest and adversarial element insertions.

**Build it:**

1. Clone the authors' repository from https://github.com/smarky7CD/cfe-in-adv-envs and set up the environment.
2. Run baseline experiments to reproduce Count-Keeper, CMS, and HeavyKeeper accuracy on honest streams.
3. Implement adversarial attack scenarios as described in the paper to test robustness.
4. Collect and plot error metrics and flagging rates comparing the three data structures.
5. Write a detailed README documenting your experimental setup, results, and insights.

**Verified links from the paper:**

- <https://github.com/smarky7CD/cfe-in-adv-envs> — released by the paper's authors

**Ships as:** A GitHub repository fork with scripts to run experiments, plots comparing estimators, and a report README.

**Stretch goal:** Add parameter tuning scripts to explore how Count-Keeper's space usage affects accuracy and flagging.

### Advanced — Adaptive Thresholding for Count-Keeper Flagging
*Effort: 3+ weeks*

You extend the Count-Keeper implementation by designing and integrating an adaptive thresholding mechanism for its flagging feature. This mechanism dynamically adjusts the flagging threshold based on observed stream statistics or detected attack patterns to improve detection accuracy in diverse or large-scale streams.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of Count-Keeper's design and the challenges in adversarial robustness, while contributing a novel extension that could inspire further research.

**Grounded in:** The flagging threshold parameter requires tuning and may be less effective for very large streams or sophisticated adversaries; Exploring adaptive thresholding or anomaly detection methods to improve flagging accuracy in diverse deployment scenarios.

**Tech stack:** Python 3.11, matplotlib, numpy, Git, scikit-learn

**Data:** Synthetic data streams with varying adversarial attack intensities generated in code; optionally extend authors' datasets.

**Build it:**

1. Study the Count-Keeper flagging mechanism and its threshold parameter in the authors' code.
2. Design an adaptive thresholding algorithm that updates thresholds based on recent estimation error distributions or anomaly scores.
3. Integrate the adaptive thresholding into the Count-Keeper implementation.
4. Run experiments comparing static vs adaptive flagging thresholds on synthetic streams with different attack patterns.
5. Analyze flagging accuracy, false positive rates, and robustness improvements.
6. Document your methodology, results, and potential trade-offs in a comprehensive README.

**Verified links from the paper:**

- <https://github.com/smarky7CD/cfe-in-adv-envs> — released by the paper's authors

**Ships as:** A GitHub repository with enhanced Count-Keeper code, adaptive flagging implementation, experimental results, and a detailed report.

**Stretch goal:** Explore machine learning-based anomaly detection methods to further improve flagging.
