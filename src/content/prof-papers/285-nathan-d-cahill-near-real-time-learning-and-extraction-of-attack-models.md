---
title: "285 · Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts — Nathan D. Cahill"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nathan-d-cahill"
source_hash: "21ca3c3b0dac13e29ed3a7d4da1d40072bc81f699f2efe99d09c616cfb496325"
sequence: 285
generator: "outreach-garden: managed"
---

# 285 · Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts

## At a glance

- **Professor:** Nathan D. Cahill
- **Institution:** Rochester Inst. of Technology
- **Paper:** [Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts](https://arxiv.org/abs/2103.13902)
- **Authors:** Shanchieh Jay Yang, Ahmet Okutan, Gordon Werner, Shao-Hsuan Su, Ayush Goel, Nathan D. Cahill
- **Year:** 2021

## Paper overview

This paper presents ASSERT, a system that automatically summarizes large volumes of intrusion alerts into interpretable attack models in near real-time without requiring expert knowledge. It helps Security Operation Center (SOC) analysts by reducing alert overload and highlighting critical attack behaviors, improving situational awareness and response times.

### Why it matters

**Research problem:** Security Operation Centers are overwhelmed by massive volumes of noisy intrusion alerts, making it difficult to extract actionable intelligence and timely detect ongoing and emerging cyberattacks. Existing alert correlation and attack graph tools require significant expertise and are not widely adopted in real-world SOC operations.

**Why it matters:** Timely and accurate understanding of cyberattacks is critical for effective defense. Overwhelming alert volumes delay incident response and threat hunting, increasing risk of successful attacks and damage to enterprise networks.

**Key contributions:**

- Development of ASSERT, a lightweight, deployable system that summarizes intrusion alerts into interpretable attack models without prior knowledge or expert configuration.
- Use of transfer learning and active learning to map heterogeneous alert descriptions to a common Attack Intent Stages framework with over 90% accuracy.
- Efficient unsupervised information theoretic methods for near real-time creation, updating, and merging of attack models from streaming alerts.
- Demonstration of ASSERT's ability to process 100K+ alerts per hour and maintain 20-25 meaningful attack models.
- Case studies showing ASSERT's effectiveness in extracting persistent Kerberos attacks, outbound command-and-control activities, and evolving attack behaviors.

## About the professor

**Nathan D. Cahill** — Associate Professor, School of Mathematical Sciences, Rochester Inst. of Technology.

Research interests: computer vision, machine learning, and medical image analysis

### Research links

- [Faculty/profile page](https://people.rit.edu/ndcsma)
- [Resolved homepage](https://people.rit.edu/ndcsma/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Information Theory and Unsupervised Learning
**The paper assumes:** information theory, unsupervised machine learning, statistical divergence measures
**Already in this field?** Skip this entirely if you already understand information theoretic concepts and their application in unsupervised learning algorithms.

This background is essential for understanding the information theoretic and unsupervised learning methods used in the ASSERT system for near real-time attack model extraction from intrusion alerts. The rigorous course provides a comprehensive university-level foundation in machine learning, including unsupervised learning and information theory concepts, while the fast track offers a focused, intuition-driven introduction to information theory to quickly grasp the key measures like entropy, cross-entropy, and divergence used in the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-5 and 8-15, about 11.5 hours — covering foundational machine learning concepts, unsupervised learning methods, and information theoretic measures such as cross-entropy and EM algorithms relevant to the paper's approach.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative and comprehensive machine learning course covering both supervised and unsupervised learning, including clustering and dimensionality reduction, as well as learning theory. It provides the rigorous mathematical and conceptual foundation necessary to fully understand the unsupervised learning framework and information theoretic metrics used in ASSERT.

*If you want all of it:* 27.9 hours across all 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Information Theory](https://www.youtube.com/playlist?list=PLgMDNELGJ1CYS-8dlMGPIaowVfeda4nUj) — NPTEL - Indian Institute of Science, Bengaluru · 68 videos · 21.9h across the first 60 episodes

**Watch only this:** Episodes 1-20, about 7 hours — covering core information theory concepts including entropy, KL divergence, cross-entropy, and their properties essential for understanding ASSERT's model synthesis.

*Why it unblocks this paper:* The NPTEL Information Theory playlist offers a clear, focused introduction to information theory concepts such as entropy, KL divergence, cross-entropy, and hypothesis testing, which are central to the paper's method for attack model synthesis. It is well-structured and concise compared to the full machine learning course.

*If you want all of it:* 21.9 hours across the first 60 episodes (68 total)

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts," start by building foundational knowledge on the key prerequisite topics: information theoretic unsupervised learning, transfer learning in cybersecurity, attack graph and alert correlation, and streaming data model synthesis. These topics provide the theoretical and practical background for the paper's approach. Finally, focus on the core concept of unsupervised attack model extraction and the authors' own talk about the ASSERT system to grasp the novel contributions and implementation details.

### Information theoretic unsupervised learning *(prerequisite)*
This section covers the foundational machine learning methods used by ASSERT to extract and update attack models without supervision. Understanding unsupervised learning, especially from an information theoretic perspective, is crucial to appreciate how the system synthesizes attack models from noisy alert data streams.

*How the paper uses it:* ASSERT uses information theoretic unsupervised learning to transform streaming intrusion alerts into attack models.

▶ [Lecture 5b: Introduction to Unsupervised Learning - Harpreet S. Dhillon](https://www.youtube.com/watch?v=UJrH04lZF4k) — JTG Summer School 2021 at IIT Kanpur · 31:06 · 4y ago

### Transfer learning in cybersecurity *(prerequisite)*
Transfer learning is employed in ASSERT to map heterogeneous intrusion alerts to a unified Attack Intent Stages framework. This section provides insights into transfer learning techniques and their robustness, which is essential for understanding how ASSERT achieves high accuracy in alert-to-AIS mapping.

*How the paper uses it:* ASSERT applies transfer learning to map diverse alert descriptions to a common Attack Intent Stages framework.

▶ [Scalable Binary Analysis for Security feat. Suman Jana | Stanford MLSys Seminar Episode 36](https://www.youtube.com/watch?v=HbVVOb7xTdU) — Stanford MLSys Seminars · 1:00:19 · Streamed 5y ago

### Attack graph and alert correlation *(prerequisite)*
This section introduces existing methods for summarizing and correlating intrusion alerts using attack graphs, providing background on the challenges ASSERT aims to overcome. Understanding these traditional approaches helps contextualize ASSERT's improvements in real-time attack model extraction.

*How the paper uses it:* ASSERT improves upon existing alert correlation and attack graph tools by automating model extraction without expert configuration.

▶ [Attack of the Graph: Visual Tools for Cyber Analysis - Christian Miles](https://www.youtube.com/watch?v=7U7a0O77m4o) — BSides Vancouver · 20:12 · 5y ago

### Streaming data model synthesis *(prerequisite)*
Streaming data model synthesis techniques enable near real-time creation, updating, and merging of attack models from continuous alert streams. This section provides foundational knowledge on stream processing and data model management critical to ASSERT's performance and scalability.

*How the paper uses it:* ASSERT dynamically creates, updates, and merges attack models in near real-time from streaming alerts.

▶ [Lecture 9: Introduction to Stream Computing](https://www.youtube.com/watch?v=487-pFiPBME) — Hivecell · 1:20:43 · 7y ago

### Unsupervised attack model extraction
This core concept focuses on the paper's central approach of summarizing intrusion alerts into interpretable attack models without supervision. Understanding model extraction attacks and unsupervised learning in security contexts deepens comprehension of ASSERT's methodology and its novelty.

*How the paper uses it:* ASSERT's main contribution is unsupervised extraction of attack models from intrusion alerts.

▶ [Stanford EE104: Introduction to Machine Learning | 2020 | Lecture 18 - unsupervised learning](https://www.youtube.com/watch?v=B3OimYsCH9w) — Stanford Online · 43:00 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces key concepts to understand the ASSERT system for near real-time attack model extraction from intrusion alerts. It starts with foundational machine learning concepts like unsupervised learning and transfer learning, then covers background on alert correlation and streaming data processing. Finally, it focuses on the core idea of unsupervised attack model extraction as used in the paper.

### Information theoretic unsupervised learning *(prerequisite)*
Unsupervised learning is a type of machine learning where the model learns patterns from unlabeled data without explicit guidance. Information theoretic methods use concepts like entropy and divergence to measure and extract meaningful structures from data. Understanding this helps grasp how ASSERT groups and summarizes intrusion alerts without prior labels.

*How the paper uses it:* ASSERT uses information theoretic unsupervised learning to transform streaming alerts into attack models without expert knowledge.

▶ [Stanford EE104: Introduction to Machine Learning | 2020 | Lecture 18 - unsupervised learning](https://www.youtube.com/watch?v=B3OimYsCH9w) — Stanford Online · 43:00 · 5y ago

### Transfer learning in cybersecurity *(prerequisite)*
Transfer learning involves leveraging knowledge gained from one task or dataset to improve learning in another, often related, task. In cybersecurity, it helps map diverse and heterogeneous intrusion alerts to a unified framework, enabling consistent interpretation across different alert sources.

*How the paper uses it:* ASSERT employs transfer learning to map heterogeneous alert descriptions to a common Attack Intent Stages framework with high accuracy.

▶ [What is Transfer Learning?](https://www.youtube.com/watch?v=BqqfQnyjmgg) — Hugging Face · 4:06 · 5y ago

### Attack graph and alert correlation *(prerequisite)*
Attack graphs and alert correlation techniques summarize and link multiple intrusion alerts to reveal underlying attack campaigns or behaviors. These methods help reduce alert overload by grouping related alerts, improving situational awareness for security analysts.

*How the paper uses it:* The paper contrasts ASSERT with existing alert correlation and attack graph tools that require expert knowledge and are less practical in real SOCs.

▶ [Security Alert Correlation | Defender for Cloud in the Field #35](https://www.youtube.com/watch?v=vobhOyNME2s) — Microsoft Security · 14:42 · 3y ago

### Streaming data model synthesis *(prerequisite)*
Streaming data model synthesis involves continuously creating and updating models from data that arrives in real-time streams. This approach is essential for timely detection and summarization of evolving patterns in fast-moving data like intrusion alerts.

*How the paper uses it:* ASSERT dynamically creates, updates, and merges attack models from streaming alerts in near real-time using efficient unsupervised methods.

▶ [What is Stream Processing? | Batch vs Stream Processing | Data Pipelines | Real-Time Data Processing](https://www.youtube.com/watch?v=ya4298V8Mqo) — BI Insights Inc · 6:20 · 3y ago

## Already in your library

- [Information Theory, Lecture 1: Defining Entropy and Information - Oxford Mathematics 3rd Yr Lecture](https://www.youtube.com/watch?v=ScX2aBFyrVU) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Information Theory Basics](https://www.youtube.com/watch?v=bkLHszLlH34) — also for: Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts (Nathan D. Cahill)
- [Enhancing Generalizability in DDoS Attack Detection Systems ...](https://www.youtube.com/watch?v=zaRsIJy21xM) — also for: Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts (Nathan D. Cahill)
- [TrustML Seminar: Pin-Yu Chen on Practical Backdoor Attacks and Defenses in Machine Learning Systems](https://www.youtube.com/watch?v=RY8j_2zIvPY) — also for: SSL-Cleanse: Trojan Detection and Mitigation in Self-Supervised Learning (Mengxin Zheng)
- [Transfer Learning - EXPLAINED!](https://www.youtube.com/watch?v=QHS9ZZBdK-g) — also for: Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts (Nathan D. Cahill)
- [Data Streaming, Explained](https://www.youtube.com/watch?v=ag9jlVxM_18) — also for: On Imbalanced Regression with Hoeffding Trees (Dimitrios I. Diochnos)
- [Lec-23: Supervised vs Unsupervised learning with real life example](https://www.youtube.com/watch?v=fM8XdC1EweU) — also for: A Neural-Preconditioned Poisson Solver for Mixed Dirichlet and Neumann Boundary Conditions (Julian Panetta)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate understanding of ASSERT's approach to near real-time attack model extraction from intrusion alerts. The beginner project recreates a core metric from the paper to grasp information theoretic model comparison. The intermediate project implements a simplified version of ASSERT's unsupervised attack model synthesis on a simulated alert stream, comparing it to a baseline clustering method. The advanced project extends ASSERT by addressing its limitation on alert-to-AIS mapping accuracy through an incremental active learning approach, showing how to improve robustness in heterogeneous alert environments.

### Beginner — Implement Jensen-Shannon Divergence for Alert Model Comparison
*Effort: a weekend, ~6 hours*

You build a small Python script that computes the Jensen-Shannon Divergence (JSD) between two probability distributions representing alert feature histograms. You will simulate simple alert feature distributions and calculate JSD to understand how ASSERT measures similarity between attack models.

**Why it shows you understood the paper:** This project shows you understand the key information theoretic metric ASSERT uses to merge and update attack models, demonstrating grasp of the mathematical foundation behind model synthesis.

**Grounded in:** The paper states: 'It employs metrics like cross-entropy and Jensen-Shannon Divergence for model synthesis.'

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Simulated alert feature distributions created as simple probability vectors in code; no external data required.

**Build it:**

1. Implement a function to compute Kullback-Leibler divergence between two distributions.
2. Use it to implement Jensen-Shannon Divergence between two distributions.
3. Simulate two or more alert feature histograms as probability distributions.
4. Calculate and visualize the JSD values between these distributions.
5. Write a README explaining how JSD relates to ASSERT's model merging.

**Ships as:** A Jupyter notebook or Python script demonstrating JSD calculations on simulated alert distributions, with explanations linking to ASSERT's model synthesis.

**Stretch goal:** Add cross-entropy calculations and compare results with JSD on the same distributions.

### Intermediate — Unsupervised Attack Model Extraction from Simulated Intrusion Alerts
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of ASSERT's unsupervised learning framework to aggregate streaming intrusion alerts into attack models. Using simulated alert data with heterogeneous alert descriptions mapped to a small set of Attack Intent Stages (AIS), you create, update, and merge statistical attack models in near real-time. You compare your approach against a baseline clustering method (e.g., k-means) and report metrics such as number of meaningful models and model stability.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core method of ASSERT from the paper's description, including alert aggregation, AIS mapping, and information theoretic model synthesis, showing practical grasp of near real-time unsupervised attack model extraction.

**Grounded in:** Key contribution: 'Efficient unsupervised information theoretic methods for near real-time creation, updating, and merging of attack models from streaming alerts.' Key result: 'Successfully extracted and tracked about 20-25 attack models from 25,000 alerts per hour.'

**Tech stack:** Python 3.11, scikit-learn, NumPy, Pandas, Jupyter Notebook

**Data:** Simulated streaming intrusion alerts generated in code, with alert descriptions mapped to a small AIS label set; no real alert data available.

**Build it:**

1. Define a small AIS framework with 4-6 stages based on the paper's description.
2. Simulate a stream of intrusion alerts with heterogeneous descriptions mapped to AIS labels.
3. Implement an unsupervised aggregation method to group alerts into homogeneous action aggregates.
4. Implement attack model creation and updating using Jensen-Shannon Divergence to merge similar models.
5. Implement a baseline clustering method (e.g., k-means) on the same data for comparison.
6. Evaluate and report the number of meaningful attack models and model stability over time.

**Ships as:** A Python project with scripts/notebooks showing the unsupervised attack model extraction pipeline on simulated alerts, comparison with baseline clustering, and evaluation metrics.

**Stretch goal:** Incorporate a simple transfer learning step to improve alert-to-AIS mapping accuracy using a small labeled subset.

### Advanced — Improving Alert-to-AIS Mapping Robustness via Incremental Active Learning
*Effort: 3+ weeks, ~80 hours*

You extend the intermediate project by implementing an incremental active learning framework to improve the accuracy and robustness of mapping heterogeneous IDS alert signatures to Attack Intent Stages. You simulate evolving alert sources with noisy and novel alert descriptions, and iteratively select alerts for labeling to refine the mapping model. You evaluate the impact on attack model synthesis quality and stability, addressing the paper's stated limitation on imperfect AIS mapping.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to apply active learning to improve transfer learning in a cybersecurity context and enhance the robustness of near real-time attack model extraction.

**Grounded in:** Limitation: 'Mapping from IDS alert signatures to Attack Intent Stages is not perfect, which may affect model accuracy.' Future direction: 'Improving alert-to-AIS mapping accuracy through incremental active learning and expanded datasets.'

**Tech stack:** Python 3.11, scikit-learn, PyTorch or TensorFlow, NumPy, Pandas, Jupyter Notebook

**Data:** Simulated evolving intrusion alert streams with noisy and novel alert descriptions mapped to AIS labels; synthetic labels generated for active learning.

**Build it:**

1. Build a baseline alert-to-AIS classifier using transfer learning on simulated labeled alerts.
2. Simulate evolving alert streams with new and noisy alert descriptions.
3. Implement an active learning loop that selects uncertain alerts for labeling and incrementally retrains the classifier.
4. Integrate the improved AIS mapping into the attack model synthesis pipeline from the intermediate project.
5. Evaluate improvements in AIS mapping accuracy and resulting attack model quality and stability.
6. Document the approach, challenges, and results in a detailed README.

**Ships as:** A comprehensive Python project demonstrating incremental active learning to improve AIS mapping and its effect on attack model synthesis robustness, with evaluation and documentation.

**Stretch goal:** Integrate a visualization dashboard to monitor model confidence, selected samples, and attack model evolution in near real-time.

_No authors' released code or datasets are available for ASSERT; all data must be simulated based on the paper's descriptions._
