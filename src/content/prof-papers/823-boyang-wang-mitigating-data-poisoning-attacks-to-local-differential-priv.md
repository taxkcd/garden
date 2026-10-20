---
title: "823 · Mitigating Data Poisoning Attacks to Local Differential Privacy — Boyang Wang"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-boyang-wang"
source_hash: "a52894fc4193e32adf85f7b02504e4c57756e2442604c2ea66a8897c55254670"
sequence: 823
generator: "outreach-garden: managed"
---

# 823 · Mitigating Data Poisoning Attacks to Local Differential Privacy

## At a glance

- **Professor:** Boyang Wang
- **Institution:** University of Cincinnati
- **Paper:** [Mitigating Data Poisoning Attacks to Local Differential Privacy](https://arxiv.org/pdf/2506.02156)
- **Authors:** Xiaolin Li, Ninghui Li, Boyang Wang, Wenhai Sun
- **Year:** 2025

## Paper overview

This paper addresses the problem of data poisoning attacks on local differential privacy (LDP) systems, which are used to protect user privacy when collecting data. The authors propose a comprehensive defense framework that includes new methods to detect malicious users and attack patterns, as well as techniques to recover data utility after attacks. Their methods improve detection accuracy and reduce computational costs compared to previous work, and they provide practical recommendations for deploying LDP systems more securely.

### Why it matters

**Research problem:** Local differential privacy protocols are vulnerable to data poisoning attacks where malicious users inject false data to manipulate frequency estimation results. Existing defenses are limited, often requiring extra knowledge, having high false positives, or being computationally expensive. There is a need for effective, efficient, and practical mitigation methods against adaptive and stealthy attacks on LDP frequency estimation.

**Why it matters:** LDP is widely used in privacy-preserving data collection for many applications. Data poisoning attacks threaten the integrity and reliability of LDP-based analytics, potentially leading to incorrect conclusions and undermining user privacy guarantees. Developing robust defenses is critical to ensure trustworthy and secure deployment of LDP technologies.

**Key contributions:**

- Discovery of a new stealthy adaptive attack strategy (Adaptive Pattern Attack) that evades prior detection methods.
- Development of Diffstats, a zero-shot fake user detection method that significantly outperforms the state-of-the-art FIAD in accuracy and speed.
- Introduction of abnormal statistics detection (ASD) to detect attacks when fake user identification is difficult.
- Proposal of a novel post-processing method (RSN) for recovering corrupted data utility under attack.
- Comprehensive empirical evaluation demonstrating improved detection accuracy, reduced false positives, and effective utility recovery.

## About the professor

**Boyang Wang** — Assoc Professor, CEAS - Electrical and Computer Engineering, University of Cincinnati.

Research interests: privacy-preserving technologies, applied cryptography, data privacy and network security

### Research links

- [Faculty/profile page](https://researchdirectory.uc.edu/p/wang2ba)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** local differential privacy
**The paper assumes:** local differential privacy definitions, LDP frequency estimation protocols, privacy-preserving data collection techniques
**Already in this field?** Skip this entirely if you already understand the principles and mechanisms of local differential privacy and its common frequency estimation protocols.

To understand the foundations and advanced concepts behind local differential privacy (LDP) relevant to this paper on mitigating data poisoning attacks, two complementary background options are provided. The rigorous course offers a deep dive into privacy-preserving data processing within a broader AI and data science context, ideal for thorough comprehension. The fast track is a concise, focused lecture from a reputable series that covers core privacy-preserving data processing concepts quickly for efficient grounding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Lecture Series 2022](https://www.youtube.com/playlist?list=PLZkHu66nUK_4q0QlQgng0JyY6uAf8GrXD) — ScaDS-AI Living Lab · 11 videos · 3.9h across 11 episodes

**Watch only this:** Watch Lecture #11 Privacy Preserving Data Processing (~21 minutes) for a focused introduction to privacy-preserving techniques including LDP concepts relevant to the paper.

*Why it unblocks this paper:* This 2022 lecture series from ScaDS-AI Living Lab includes a dedicated lecture on Privacy Preserving Data Processing, directly relevant to local differential privacy and its challenges, providing a rigorous academic foundation for understanding the paper's context and methods.

*If you want all of it:* The full playlist contains 11 lectures totaling about 3.9 hours, which covers broader AI and data topics beyond privacy but includes essential privacy lectures.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [CCS 2016 - Tue, Oct 25, 2016 - Track 2 (Differential Privacy / Cyptography / Attacks)](https://www.youtube.com/playlist?list=PLDJxfCuZwWGALDbo4VhCBksdFWAbMPn0_) — CCS 2016 · 10 videos · 4.8h across 10 episodes

**Watch only this:** Watch the first 3 episodes (~1.4 hours total): 'Differential Privacy as a Mutual Information Constraint', 'Advanced Probabilistic Couplings for Differential Privacy', and 'A Systematic Analysis of the Juniper Dual EC Incident' to get a solid quick overview of differential privacy theory and attack considerations.

*Why it unblocks this paper:* This CCS 2016 short-form playlist contains focused talks on differential privacy and related attacks, including local differential privacy topics, providing concise, research-level insights that complement the rigorous course with practical and attack-focused perspectives.

*If you want all of it:* The full playlist has 10 episodes totaling about 4.8 hours, covering a range of differential privacy topics and attacks.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Mitigating Data Poisoning Attacks to Local Differential Privacy,' start by building a solid foundation on Local Differential Privacy (LDP) protocols and the nature of data poisoning attacks in privacy-preserving systems. Then, explore the core analytic task of frequency estimation under LDP, which is the main target of the attacks and defenses in the paper. Finally, focus on the paper authors' own talk presenting their novel detection and mitigation framework, which provides direct insights into their contributions and evaluation.

### Local differential privacy protocols *(prerequisite)*
This section covers the fundamental privacy model of Local Differential Privacy (LDP), which is the basis for the paper's defense framework. Understanding LDP protocols, their design, and deployment challenges is essential to grasp why and how data poisoning attacks can manipulate frequency estimation results and why mitigation is necessary.

*How the paper uses it:* The paper's defense framework and attack models are built upon vulnerabilities in LDP protocols.

▶ [USENIX Security '17 - Differential Privacy: From Theory to Deployment](https://www.youtube.com/watch?v=Nvy-TspgZMs) — USENIX · 9y ago

### Data poisoning attacks in privacy *(prerequisite)*
This section introduces the threat model of data poisoning attacks, where adversaries inject malicious data to corrupt privacy-preserving analytics. Understanding these attacks in the context of privacy systems, especially LDP, is critical to appreciate the challenges the paper addresses and the novelty of their adaptive attack and detection methods.

*How the paper uses it:* The paper focuses on mitigating data poisoning attacks that threaten the integrity of LDP frequency estimation.

▶ [USENIX Security '21 - Data Poisoning Attacks to Local Differential Privacy Protocols](https://www.youtube.com/watch?v=diH9X5j-JwU) — USENIX · 12:54 · 5y ago

### Frequency estimation under LDP *(prerequisite)*
Frequency estimation is a core data analytic task under LDP and the primary target of the poisoning attacks and subsequent defenses proposed in the paper. This section explains the mechanisms and challenges of frequency estimation under LDP, including consistency enforcement, which is central to the paper's post-processing utility recovery.

*How the paper uses it:* The paper's attack and defense methods specifically target frequency estimation protocols under LDP.

▶ [USENIX Security '17 - Locally Differentially Private Protocols for Frequency Estimation](https://www.youtube.com/watch?v=k-KfUuS0lWE) — USENIX · 9y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This section features the authors' own presentation of their research, providing the most direct and detailed explanation of their novel adaptive attack, zero-shot detection methods (Diffstats and ASD), and post-processing techniques (RSN). Watching this talk offers insights into their methodology, empirical evaluation, and practical recommendations.

*How the paper uses it:* This is the authors' own talk on their work, offering the most authoritative and comprehensive overview of the paper.

▶ [Defending against Data Poisoning Attacks via User Elimination (Flower AI Summit 2025)](https://www.youtube.com/watch?v=XW0rt1jjJhY) — Flower · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on mitigating data poisoning attacks in local differential privacy (LDP), start by learning the fundamentals of LDP protocols, which form the privacy backbone of the work. Next, grasp the nature of data poisoning attacks in privacy systems to appreciate the threat model. Then, study frequency estimation under LDP, the core analytic task targeted by attacks and defenses. Finally, explore the paper's novel detection method, differential statistical anomaly detection, to see how it identifies malicious users without prior attack knowledge.

### Local differential privacy protocols *(prerequisite)*
Local differential privacy (LDP) protocols allow data collectors to gather useful statistics while ensuring each user's data remains private by adding noise locally before sharing. Understanding LDP basics helps you see how privacy is preserved and why attacks on these protocols matter.

*How the paper uses it:* The paper builds on LDP protocols as the target system vulnerable to data poisoning attacks.

▶ [SaTML 2023 - Gautam Kamath - An Introduction to Differential Privacy](https://www.youtube.com/watch?v=9lqd2UINW-E) — Nicolas Papernot · 3y ago

### Data poisoning attacks in privacy *(prerequisite)*
Data poisoning attacks involve malicious users injecting false or manipulated data to corrupt the learning or analysis process, threatening data integrity and privacy. Understanding these attacks clarifies the risks the paper aims to mitigate.

*How the paper uses it:* The paper addresses data poisoning attacks specifically targeting LDP frequency estimation.

▶ [USENIX Security '21 - Data Poisoning Attacks to Local Differential Privacy Protocols](https://www.youtube.com/watch?v=diH9X5j-JwU) — USENIX · 12:54 · 5y ago

### Frequency estimation under LDP *(prerequisite)*
Frequency estimation under LDP is the process of estimating how often different categories appear in private user data, despite noise added for privacy. This task is central to many applications and is the main analytic target of poisoning attacks and defenses in the paper.

*How the paper uses it:* The paper focuses on defending frequency estimation under LDP from poisoning attacks.

▶ [NDSS 2020 Locally Differentially Private Frequency Estimation with Consistency](https://www.youtube.com/watch?v=r-4MDr522w8) — NDSS Symposium · 6y ago

### Differential statistical anomaly detection
Differential statistical anomaly detection uses statistical differences to identify unusual patterns or outliers in data without prior knowledge of attacks. This method helps detect fake users injecting poisoned data in the paper's defense framework.

*How the paper uses it:* Diffstats, the paper's novel zero-shot fake user detection method, is based on differential statistical anomaly detection.

▶ [Detecting Anomalies Using Statistical Distances | SciPy 2018 | Charles Masson](https://www.youtube.com/watch?v=U7xdiGc7IRU) — Enthought · 8y ago

## Already in your library

- [Differential Privacy - Simply Explained](https://www.youtube.com/watch?v=gI0wk1CXlsQ) — also for: Differentially Private Synthetic Data Generation Using Context-Aware GANs (Anantaa Kotal)
- [Lecture 17A: DP Deployments 1, Local DP](https://www.youtube.com/watch?v=eP9RGfQsvtg) — also for: Query-Efficient Locally Private Hypothesis Selection via the Scheffe Graph (Gautam Kamath)
- [Mitigating Data Poisoning Attacks in Federated Learning by Dr ...](https://www.youtube.com/watch?v=38TMZNIjzYQ) — also for: Can We Trust the Similarity Measurement in Federated Learning? (Xukai Zou)
- [Complete Anomaly Detection Tutorials Machine Learning And ...](https://www.youtube.com/watch?v=OS9xRGKfx4E) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Anomaly Detection Explained | Unsupervised Machine Learning with Real-World Examples](https://www.youtube.com/watch?v=7FjapNRy5YA) — also for: Extended Isolation Forest (Robert J. Brunner)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper "Mitigating Data Poisoning Attacks to Local Differential Privacy." Starting with a basic implementation of the Diffstats detection method, you then extend to running and comparing the full mitigation framework from the authors' released code. Finally, you explore an advanced extension by adapting the detection and mitigation techniques to numerical data under LDP, addressing a key limitation noted in the paper.

### Beginner — Implement Diffstats Fake User Detection
*Effort: a weekend, ~8 hours*

You build a simplified implementation of the Diffstats zero-shot fake user detection method described in the paper. Using synthetic categorical frequency data under LDP, you implement the differential statistical anomaly detection logic to identify malicious users injecting poisoned data.

**Why it shows you understood the paper:** This project shows you understand the core detection mechanism Diffstats, including how it detects fake users without prior attack knowledge and with low computational cost.

**Grounded in:** Development of Diffstats, a zero-shot fake user detection method that significantly outperforms the state-of-the-art FIAD in accuracy and speed.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic categorical frequency data generated to simulate LDP frequency oracles with injected fake users, as described in the paper's evaluation setup.

**Build it:**

1. Generate synthetic categorical frequency data simulating LDP-obfuscated user reports with some malicious fake users.
2. Implement the Diffstats detection algorithm to compute differential statistics and identify anomalous users.
3. Evaluate detection accuracy using precision, recall, and F1 score metrics.
4. Visualize detection results and compare with a simple baseline such as random detection.

**Ships as:** A Jupyter notebook demonstrating Diffstats implementation, detection metrics, and visualizations with synthetic data.

**Stretch goal:** Add a simple implementation of the FIAD baseline for direct comparison of detection performance.

### Intermediate — Run and Extend the MDPA_LDP Mitigation Framework
*Effort: 1-3 weekends*

You clone and run the authors' released MDPA_LDP codebase implementing their full mitigation framework including Diffstats, ASD, and RSN post-processing. You reproduce key detection and utility recovery results on provided datasets and compare Diffstats against FIAD baseline.

**Why it shows you understood the paper:** This project shows you can work with the authors' code, understand the integrated detection and mitigation pipeline, and critically evaluate performance metrics as reported in the paper.

**Grounded in:** Comprehensive empirical evaluation demonstrating improved detection accuracy, reduced false positives, and effective utility recovery.

**Tech stack:** Python 3.11, Git, Jupyter Notebook, NumPy, Pandas, Matplotlib

**Data:** Datasets included or referenced in the MDPA_LDP repository, which contain synthetic and real-world categorical frequency data under LDP protocols.

**Build it:**

1. Clone the MDPA_LDP GitHub repository from https://github.com/Marvin-huoshan/MDPA_LDP.
2. Set up the environment and dependencies as per the repository instructions.
3. Run the provided scripts to reproduce detection accuracy and utility recovery results for Diffstats and RSN.
4. Implement a simple modification such as testing detection performance under a different parameter setting or domain size.
5. Document your results and compare them to the paper's reported metrics.

**Verified links from the paper:**

- <https://github.com/Marvin-huoshan/MDPA_LDP> — released by the paper's authors

**Ships as:** A GitHub repository fork with runnable code, a report notebook showing reproduced results and your extension experiments.

**Stretch goal:** Add visualization of attack patterns detected by ASD and analyze false positive rates under your modified settings.

### Advanced — Adapt Detection and Mitigation to Numerical LDP Data
*Effort: a few weeks*

You design and implement an extension of the paper's detection and post-processing methods to handle numerical data collected under local differential privacy. This addresses the paper's limitation that their methods focus on categorical frequency oracles. You develop anomaly detection metrics suitable for numerical distributions and adapt RSN-like normalization for utility recovery.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's methods and limitations, and your ability to innovate by transferring techniques to a new LDP domain, a future direction suggested by the authors.

**Grounded in:** The proposed methods focus on categorical frequency oracles and may require adaptation for other LDP tasks or numerical data.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, SciPy, Matplotlib, scikit-learn

**Data:** Publicly available numerical datasets (e.g., UCI Machine Learning Repository datasets) adapted with synthetic LDP noise injection to simulate numerical LDP data.

**Build it:**

1. Select a numerical dataset and apply local differential privacy mechanisms to generate noisy numerical data.
2. Design anomaly detection metrics inspired by Diffstats but adapted for numerical distributions (e.g., statistical distance measures).
3. Implement a post-processing normalization method analogous to RSN to recover data utility.
4. Evaluate detection accuracy and utility recovery compared to naive baselines.
5. Document challenges, results, and potential improvements.

**Ships as:** A GitHub repository with code, notebooks, and a detailed README explaining your adaptation approach, experiments, and findings.

**Stretch goal:** Explore integrating your detection methods into an interactive or iterative LDP protocol as another future direction.

_The MDPA_LDP repository is the only authors' released code and focuses on categorical frequency oracles; numerical data adaptation requires synthetic data generation and method redesign._
