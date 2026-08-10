---
title: "285 · Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts — Nathan D. Cahill"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nathan-d-cahill"
source_hash: "01c37f67a6412fc513f9f892f79d71734aa4233a05bde54c0a09a9dabed7c756"
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

**What you're missing:** Information Theory for Machine Learning
**The paper assumes:** information theory, entropy measures, divergence metrics, unsupervised learning principles, transfer learning basics
**Already in this field?** Skip this entirely if you already understand information theoretic concepts like entropy and divergence and their application in machine learning.

This background focuses on information theory concepts essential for understanding the unsupervised learning framework used in ASSERT to summarize intrusion alerts into attack models. The rigorous course option offers a deep, structured university-level treatment of information theory fundamentals, while the fast track provides a shorter, more accessible series covering the core concepts efficiently. Choose the lane that fits your available time and desired depth.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Student Lectures - Information Theory](https://www.youtube.com/playlist?list=PL4d5ZtfQonW3iAhXvTYCnoGEeRhxhKHMc) — Oxford Mathematics · 8 videos · 6.9h across 8 episodes

**Watch only this:** Lectures 1 through 5, about 4.25 hours — covering entropy, basic properties, codes, typical sequences, and optimal codes to build a solid theoretical foundation.

*Why it unblocks this paper:* This Oxford Mathematics 3rd year student lecture series covers foundational information theory topics such as entropy, codes, and typical sequences, which are directly relevant to understanding the metrics (cross-entropy, Jensen-Shannon Divergence) and coding concepts used in ASSERT's attack model synthesis.

*If you want all of it:* All 8 lectures, about 6.9 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Information Theory](https://www.youtube.com/playlist?list=PLlrYM4cD5gcBhTfpQJbN0mmN6HrAAfuDE) — Swin · 9 videos · 6.4h across 9 episodes

**Watch only this:** Episodes 1 and 2, about 1.4 hours total — covering introduction to information theory and the stunning link between entropy, time, and information.

*Why it unblocks this paper:* This concise Swin playlist provides a clear and visual introduction to information theory basics, including entropy and its intuitive interpretations, suitable for quickly grasping the key concepts needed to understand ASSERT's use of information theoretic measures.

*If you want all of it:* All 9 episodes, about 6.4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts,' start by building foundational knowledge on key prerequisite topics such as intrusion detection systems, information theoretic unsupervised learning, transfer learning in cybersecurity, attack graph and alert correlation methods, and near real-time streaming data processing. These topics provide the necessary background on the input data, core methodologies, and related state-of-the-art techniques. Finally, focus on the authors' own talks about the ASSERT system to gain direct insight into their novel approach and contributions.

### Intrusion detection systems alerts *(prerequisite)*
Understanding intrusion detection systems (IDS) and the nature of alerts they generate is essential since ASSERT processes these alerts as input data. This section covers the fundamentals and characteristics of IDS alerts, which form the raw data that ASSERT summarizes and models.

*How the paper uses it:* ASSERT operates on streaming intrusion alerts from IDS like Suricata to extract attack models.

▶ [CSE571-11-20: Intrusion Detection](https://www.youtube.com/watch?v=_AV7Mqkfo1s) — Raj Jain · 57:35

### Information theoretic unsupervised learning *(prerequisite)*
ASSERT uses information theoretic unsupervised learning techniques to aggregate alerts and create attack models. This section introduces key concepts such as entropy, cross-entropy, KL divergence, and Jensen-Shannon Divergence, which are central to ASSERT's model synthesis and updating.

*How the paper uses it:* The core method ASSERT uses to create and update attack models is based on information theoretic unsupervised learning.

▶ [Information Theory of Deep Learning, Naftali Tishby](https://www.youtube.com/watch?v=XL07WEc2TRI) — Stanford Online · 1:24:44

### Transfer learning in cybersecurity *(prerequisite)*
Transfer learning is employed in ASSERT to map heterogeneous alert descriptions to a unified Attack Intent Stages framework. This section provides an understanding of transfer learning principles and their application in cybersecurity contexts, which is critical for grasping how ASSERT achieves high mapping accuracy.

*How the paper uses it:* ASSERT uses transfer learning to map diverse IDS alerts to a common Attack Intent Stages framework with over 90% accuracy.

▶ [Enhancing Generalizability in DDoS Attack Detection Systems ...](https://www.youtube.com/watch?v=zaRsIJy21xM) — Canadian Institute for Cybersecurity (CIC) · 29:47

### Attack graph and alert correlation *(prerequisite)*
Existing methods for summarizing and correlating alerts often rely on attack graphs and correlation rules. Understanding these approaches provides context for ASSERT's novel unsupervised and information theoretic approach to attack model extraction.

*How the paper uses it:* ASSERT improves upon traditional alert correlation and attack graph tools by providing near real-time, unsupervised attack model extraction without expert configuration.

▶ [Using Graph Machine Learning To Detect Complex Attacks](https://www.youtube.com/watch?v=SudYC0k9JI4) — TigerGraph · 27:29

### Near real-time streaming data processing *(prerequisite)*
Since ASSERT processes large volumes of alerts in near real-time, knowledge of streaming data processing architectures and techniques is important. This section covers how streaming data can be efficiently handled and analyzed in real-time environments.

*How the paper uses it:* ASSERT processes over 100,000 alerts per hour in near real-time, requiring efficient streaming data processing methods.

▶ [Lecture 16: Hot Data Analytics for Real Time Streaming in IoT Platform](https://www.youtube.com/watch?v=xzRVFJyEkRI) — IIT KANPUR-NPTEL · 3 years ago

### ASSERT system talk *(the paper's own talk)*
The authors' own talks provide the most direct and detailed insight into the ASSERT system, its design, methodology, and evaluation. These talks are invaluable for understanding the paper's contributions and the practical deployment of the system.

*How the paper uses it:* Direct insight from the paper authors on the ASSERT system and their approach to near real-time attack model extraction.

▶ [https://www.youtube.com › watch?v=2q-c5GtW-3A](https://www.youtube.com/watch?v=2q-c5GtW-3A) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the ASSERT system and its approach to near real-time learning of attack models from intrusion alerts, start by learning the basics of intrusion detection systems and the nature of alerts they generate. Then build foundational knowledge on transfer learning and information theoretic unsupervised learning methods, which are core to ASSERT's design. Finally, explore the ASSERT system talks to see how these concepts come together in a practical, deployable cybersecurity tool.

### Intrusion detection systems alerts *(prerequisite)*
Intrusion Detection Systems (IDS) monitor network traffic to detect suspicious activities and generate alerts. Understanding what these alerts represent and their characteristics is essential to grasp how ASSERT processes and summarizes them.

*How the paper uses it:* ASSERT processes streaming intrusion alerts as its input data to extract attack models.

▶ [Intrusion Detection Systems (IDS) Explained for Beginners](https://www.youtube.com/watch?v=k5usg9_WxJw) — CodeLucky · 10:03

### Transfer learning in cybersecurity *(prerequisite)*
Transfer learning allows a model trained on one task or dataset to be adapted to another, improving efficiency and accuracy. In cybersecurity, it helps map diverse alert descriptions to a unified framework, enabling consistent analysis.

*How the paper uses it:* ASSERT uses transfer learning to map heterogeneous alert descriptions to the Attack Intent Stages framework with high accuracy.

▶ [Transfer Learning - EXPLAINED!](https://www.youtube.com/watch?v=QHS9ZZBdK-g) — CodeEmporium · 2 years ago

### Information theoretic unsupervised learning *(prerequisite)*
Information theoretic unsupervised learning uses concepts like entropy and divergence to discover patterns in data without labeled examples. This approach helps cluster and summarize alerts into meaningful attack models dynamically.

*How the paper uses it:* ASSERT employs information theoretic unsupervised learning to create, update, and merge attack models in near real-time.

▶ [Information Theory Basics](https://www.youtube.com/watch?v=bkLHszLlH34) — Intelligent Systems Lab · 16:22

### ASSERT system talk *(the paper's own talk)*
Hearing directly from the authors about ASSERT provides insight into the system's architecture, challenges addressed, and real-world effectiveness. This ties together the foundational concepts into a concrete application.

*How the paper uses it:* These talks explain ASSERT's design and demonstrate its ability to summarize large volumes of alerts into interpretable attack models.

▶ [https://www.youtube.com › watch?v=2q-c5GtW-3A](https://www.youtube.com/watch?v=2q-c5GtW-3A) — YouTube result via DuckDuckGo


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the ASSERT system and its core contributions in near real-time learning and extraction of attack models from intrusion alerts. Starting from a beginner-level alert aggregation and visualization prototype, progressing to an intermediate reimplementation of the core unsupervised attack model synthesis method on a public IDS alert dataset, and culminating in an advanced extension addressing the imperfect alert-to-AIS mapping limitation via incremental active learning, each project builds on the previous while leveraging the applicant's existing skills and introducing new concepts relevant to the paper.

### Beginner — Intrusion Alert Aggregation and Visualization
*Effort: a weekend, ~8 hours*

You build a small prototype that ingests a stream or batch of intrusion detection system (IDS) alerts (e.g., Suricata alerts from a public dataset or synthetically generated), aggregates them by time windows and alert types, and visualizes the aggregated alert counts over time. The project focuses on implementing simple heuristic alert aggregation similar to ASSERT's initial step and presenting the results in a React web app.

**Why it shows you understood the paper:** This project shows you understand the challenge of alert overload and the need for aggregation to reduce noise, a key motivation and step in ASSERT. It demonstrates familiarity with IDS alert data and the concept of grouping alerts to highlight attack behaviors.

**Grounded in:** Alert aggregation methods rely on heuristics such as time thresholds which may not capture all relevant attack episodes.

**Tech stack:** JavaScript, React, Node.js, Express.js

**Data:** Use publicly available Suricata IDS alert logs from open datasets or simulate alerts with timestamps and types to mimic real IDS alerts.

**Build it:**

1. Collect or simulate a small dataset of IDS alerts with timestamps and alert signatures.
2. Implement a Node.js backend to ingest alerts and aggregate them by configurable time windows and alert categories.
3. Build a React frontend to visualize aggregated alert counts over time using charts.
4. Add controls to adjust aggregation time window and filter alert types.
5. Document how this aggregation reduces alert noise and helps focus analyst attention.

**Ships as:** A GitHub repo with a simple full-stack app that demonstrates alert aggregation heuristics and interactive visualization, with a README explaining the connection to ASSERT's alert aggregation.

**Stretch goal:** Add a basic mapping from alert signatures to Attack Intent Stages (AIS) using a simple keyword-based classifier.

### Intermediate — Unsupervised Attack Model Synthesis from IDS Alerts
*Effort: 2 weekends, ~20 hours*

You reimplement the core ASSERT method of transforming streaming IDS alerts into homogeneous attack action aggregates and dynamically creating and updating statistical attack models using information theoretic metrics like Jensen-Shannon Divergence. You apply this to a public IDS alert dataset or a simulated equivalent, and compare your synthesized attack models against a simple baseline such as static alert clustering.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's core unsupervised learning framework for near real-time attack model extraction, including the use of information theoretic metrics for model synthesis. It shows ability to implement and evaluate a complex method described in the paper without relying on released code.

**Grounded in:** Efficient unsupervised information theoretic methods for near real-time creation, updating, and merging of attack models from streaming alerts.

**Tech stack:** Python 3.11, scikit-learn, NumPy, Pandas, Matplotlib

**Data:** Use a public IDS alert dataset such as the CICIDS2017 dataset or simulate streaming IDS alerts with labeled attack episodes to approximate the paper's input data.

**Build it:**

1. Preprocess the IDS alert dataset to extract features representing alert actions and timestamps.
2. Implement an unsupervised clustering method that aggregates alerts into homogeneous groups representing attack actions.
3. Compute information theoretic metrics (e.g., Jensen-Shannon Divergence) to dynamically create, update, and merge attack models from these aggregates.
4. Compare the resulting attack models against a baseline static clustering approach using metrics like model stability or interpretability.
5. Visualize the evolution of attack models over time and document the methodology and results.

**Ships as:** A Python project with scripts and notebooks that implement and evaluate the unsupervised attack model synthesis method, with clear documentation linking the implementation to ASSERT's core approach.

**Stretch goal:** Incorporate a simple transfer learning step to map heterogeneous alert descriptions to a unified Attack Intent Stages framework.

### Advanced — Improving Alert-to-AIS Mapping via Incremental Active Learning
*Effort: 3+ weeks*

You extend the ASSERT approach by addressing the limitation of imperfect mapping from IDS alert signatures to Attack Intent Stages (AIS). You implement an incremental active learning pipeline that iteratively improves the alert-to-AIS classifier by querying an oracle (simulated or manual labels) on uncertain alerts. You evaluate the impact of improved mapping accuracy on the robustness and interpretability of synthesized attack models.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating deep comprehension of ASSERT's pipeline and the challenges in heterogeneous alert environments. It shows ability to design and implement an active learning system integrated with unsupervised attack model synthesis, a novel extension.

**Grounded in:** Mapping from IDS alert signatures to Attack Intent Stages is not perfect, which may affect model accuracy. Improving alert-to-AIS mapping accuracy through incremental active learning and expanded datasets.

**Tech stack:** Python 3.11, scikit-learn, PyTorch or TensorFlow, Pandas, Jupyter Notebook

**Data:** Use a public IDS alert dataset or simulated alerts with partial AIS labels to train and evaluate the active learning classifier.

**Build it:**

1. Implement a baseline alert-to-AIS classifier using transfer learning or supervised learning on labeled alerts.
2. Design an uncertainty sampling strategy to select alerts for labeling in an active learning loop.
3. Simulate an oracle by using existing labels or manual annotation for queried alerts.
4. Iteratively retrain the classifier with newly labeled data and measure improvement in mapping accuracy.
5. Integrate the improved classifier into the attack model synthesis pipeline and evaluate the effect on model robustness and interpretability.
6. Document the active learning methodology, results, and implications for ASSERT.

**Ships as:** A comprehensive Python project demonstrating incremental active learning to improve alert-to-AIS mapping, with evaluation showing enhanced attack model quality, and a detailed README connecting the work to the paper's limitations and future directions.

**Stretch goal:** Explore integration of the improved attack models with an open-source SIEM platform for real-time SOC workflow.

_No authors' own code or datasets were released for this paper; public IDS alert datasets or synthetic data must be used as substitutes for the paper's input data._
