---
title: "509 · NVBleed: Covert and Side-Channel Attacks on NVIDIA Multi-GPU Interconnect — Nael B. Abu-Ghazaleh"
date: 2026-09-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nael-b-abu-ghazaleh"
source_hash: "5576edd13fd50b1359c0b2fd096404325c692e60229be84302c25844df605c90"
sequence: 509
generator: "outreach-garden: managed"
---

# 509 · NVBleed: Covert and Side-Channel Attacks on NVIDIA Multi-GPU Interconnect

## At a glance

- **Professor:** Nael B. Abu-Ghazaleh
- **Institution:** Univ. of California - Riverside
- **Paper:** [NVBleed: Covert and Side-Channel Attacks on NVIDIA Multi-GPU Interconnect](https://arxiv.org/pdf/2503.17847)
- **Authors:** Yicheng Zhang, Ravan Nazaraliyev, Sankha Baran Dutta, Andres Marquez, Kevin Barker, Nael Abu-Ghazaleh
- **Year:** 2025

## Paper overview

This paper investigates security vulnerabilities in NVIDIA's multi-GPU interconnect technology, NVLink. The authors reverse-engineer NVLink to identify two main sources of information leakage: timing variations caused by contention and accessible performance counters. They develop covert and side-channel attacks that can extract sensitive information about applications running on GPUs, even across virtual machines in cloud environments. The work demonstrates practical attacks including application fingerprinting and 3D graphics character identification, highlighting new security risks in multi-GPU systems.

### Why it matters

**Research problem:** Whether the high-performance interconnects used in multi-GPU systems, specifically NVIDIA's NVLink, leak sensitive information through covert and side channels, and how such leakages can be exploited to compromise security.

**Why it matters:** Multi-GPU systems are widely used in high-performance computing and cloud platforms for data-intensive applications like machine learning. These systems handle sensitive data, yet their security, especially regarding inter-GPU communication, is not well understood. Leakage through NVLink could allow attackers to infer private information or compromise confidentiality even across virtual machines, posing significant security risks.

**Key contributions:**

- Reverse-engineering NVLink interconnect and identifying two leakage sources: timing variations due to contention and accessible performance counters.
- Developing two intra-VM covert-channel attacks (ContenLink and LeakyCounterLink) exploiting timing and performance counters.
- Demonstrating two intra-VM side-channel attacks: application fingerprinting across 18 HPC and deep learning applications, and 3D graphics character identification in Blender.
- Discovering and exploiting NVLink leakage across co-located VM instances to perform a cross-VM side-channel attack on Google Cloud Platform.
- Evaluating attacks on two generations of multi-GPU systems (DGX-1 with NVLink-V1 and GCP with NVLink-V2) showing practical bandwidth and accuracy.

## About the professor

**Nael B. Abu-Ghazaleh** — Professor, Computer Science, Univ. of California - Riverside.

### Research links

- [Faculty/profile page](http://www.cs.ucr.edu/~nael)
- [Resolved homepage](http://www.cs.ucr.edu/~nael/)
- [Google Scholar](http://scholar.google.com/citations?user=AN3f7iAAAAAJ)
- [DBLP](http://dblp.uni-trier.de/pers/hd/a/Abu=Ghazaleh:Nael_B=)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Microarchitectural Side Channels
**The paper assumes:** computer architecture microarchitecture, side-channel attack principles, hardware performance counters
**Already in this field?** Skip this entirely if you already understand microarchitectural side channels and hardware performance counters in modern processors.

To understand the microarchitectural side-channel attacks exploited in the NVBleed paper, it is essential to grasp how hardware features like timing variations and performance counters leak information. The rigorous course option offers a deep, structured university-level treatment of side-channel attacks and related security concepts, while the fast track provides a concise, accessible introduction suitable for quickly building foundational intuition.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.858 Computer Systems Security, Fall 2014](https://www.youtube.com/playlist?list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh) — MIT OpenCourseWare · 22 videos · 29.7h across 22 episodes

**Watch only this:** Lectures 1, 16, and 22 (Introduction, Side-Channel Attacks, and Guest Lecture by MIT IS&T), about 4.5 hours total — these cover threat models, microarchitectural side channels, and advanced perspectives.

*Why it unblocks this paper:* MIT 6.858 Computer Systems Security covers side-channel attacks in depth, including microarchitectural timing channels and threat models, directly relevant to understanding the NVBleed attacks on NVLink.

*If you want all of it:* 29.7 hours across all 22 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Side-Channel Attacks EXPLAINED - CISO Corner - Payatu](https://www.youtube.com/watch?v=k0vZ7lItWZw) — Payatu · 4:12 · 1 year ago

**Watch only this:** The full 4 minutes and 12 seconds video

*Why it unblocks this paper:* The single video 'Side-Channel Attacks EXPLAINED - CISO Corner - Payatu' provides a clear, concise explanation of side-channel attacks, ideal for quickly grasping the core concepts behind timing and performance-counter based leakage without committing to a full course.

*If you want all of it:* 4 minutes and 12 seconds

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the NVBleed paper, start by building foundational knowledge on GPU interconnect technologies, especially NVIDIA's NVLink architecture, followed by GPU microarchitecture and performance counters to grasp how hardware features leak information. Next, study covert channels and timing side channels to comprehend the attack vectors exploited. Then, explore side-channel attacks on multi-GPU interconnects and cross-VM side-channel attacks in cloud environments to contextualize the threat model. Finally, watch the authors' own talk on NVBleed to directly learn about their novel attacks and findings.

### GPU interconnect technologies and NVLink architecture *(prerequisite)*
Understanding NVLink's architecture and role as a high-speed GPU interconnect is essential to grasp the hardware substrate targeted by the NVBleed attacks. This section covers NVLink's communication mechanisms and its evolution, providing the hardware context for the paper's leakage analysis.

*How the paper uses it:* The paper reverse-engineers NVLink to identify leakage sources in the multi-GPU interconnect.

▶ [Understanding NVIDIA NVLink](https://www.youtube.com/watch?v=6lm8zXvfjyc) — SoC & FPGA · 23:27 · 1 year ago

### GPU microarchitecture and performance counters *(prerequisite)*
This section explains GPU hardware internals and how performance counters work, which are critical for understanding how the paper exploits accessible counters to leak communication patterns. It also provides background on GPU performance analysis tools relevant to the attacks.

*How the paper uses it:* The paper exploits accessible performance counters as one of the main leakage sources.

▶ [From Bottlenecks to Breakthroughs: Understanding GPU Performance with NVIDIA Tools](https://www.youtube.com/watch?v=_2p6Xeojf5s) — Cambridge University RSE Seminars · 1:01:40 · 8 months ago

### Covert channels and timing side channels *(prerequisite)*
Fundamental concepts of timing-based and covert channel attacks are covered here, explaining how microarchitectural features can leak information through timing variations. This knowledge underpins the ContenLink covert channel and timing contention attacks in the paper.

*How the paper uses it:* The paper develops covert channels exploiting timing variations and performance counters.

▶ [Practical Timing Side-Channel Attacks on Memory Compression](https://www.youtube.com/watch?v=fb93jr8wy94) — IEEE Symposium on Security and Privacy · 16:11 · 3 years ago

### Side-channel attacks on multi-GPU interconnects
This section presents research talks on side-channel attacks specifically targeting GPUs and multi-GPU systems, providing context and precedent for the NVBleed attacks. It deepens understanding of how GPU hardware can be exploited for side-channel leakage.

*How the paper uses it:* The paper demonstrates novel side-channel attacks exploiting NVLink leakage in multi-GPU systems.

▶ [Grand Pwning Unit: Accelerating Microarchitectural Attacks with the GPU](https://www.youtube.com/watch?v=HdMLcdhlFes) — IEEE Symposium on Security and Privacy · 17:41 · 8 years ago

### Cross-VM side-channel attacks in cloud environments *(prerequisite)*
Cross-VM side-channel attacks illustrate how attackers can exploit shared hardware resources in cloud environments to leak information across virtual machines. This section provides background on the challenges of isolation in cloud platforms relevant to the paper's cross-VM attack on GCP.

*How the paper uses it:* The paper demonstrates a cross-VM side-channel attack on Google Cloud Platform using NVLink leakage.

▶ [Side Channel attacks in the cloud - Presented By Gorka Irazoqui Apecechea](https://www.youtube.com/watch?v=gc6k_hK7FKk) — 44CON Information Security Conference · 40:29 · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the NVBleed paper, start by learning the fundamentals of GPU microarchitecture and performance counters, which explain how GPU hardware operates and leaks information. Next, grasp the basics of covert channels and timing side channels, the core mechanisms exploited in the attacks. Then, study GPU interconnect technologies, especially NVIDIA's NVLink, to understand the hardware communication substrate targeted. Finally, explore side-channel attacks on multi-GPU interconnects and cross-VM side-channel attacks in cloud environments to see how these vulnerabilities are practically exploited.

### GPU microarchitecture and performance counters *(prerequisite)*
This section introduces how GPUs are architected and how performance counters provide insights into GPU operations. Understanding these counters is crucial because they can leak sensitive information about GPU workloads, as exploited in the paper.

*How the paper uses it:* The paper identifies accessible performance counters as one of the two main leakage sources in NVLink.

▶ [From Bottlenecks to Breakthroughs: Understanding GPU Performance with NVIDIA Tools](https://www.youtube.com/watch?v=_2p6Xeojf5s) — Cambridge University RSE Seminars · 1:01:40 · 8 months ago

### Covert channels and timing side channels *(prerequisite)*
Learn how timing variations and covert channels can leak information by exploiting shared hardware resources. This foundational knowledge explains the principles behind timing-based information leakage used in the paper's attacks.

*How the paper uses it:* The paper's ContenLink attack exploits timing contention as a covert channel on NVLink.

▶ [Practical Timing Side-Channel Attacks on Memory Compression](https://www.youtube.com/watch?v=fb93jr8wy94) — IEEE Symposium on Security and Privacy · 16:11 · 3 years ago

### GPU interconnect technologies and NVLink architecture *(prerequisite)*
Understand how GPUs communicate internally using high-speed interconnects like NVLink. This knowledge is essential to grasp the hardware substrate where the paper's attacks occur.

*How the paper uses it:* The paper reverse-engineers NVIDIA's NVLink interconnect to identify leakage sources.

▶ [Understanding NVIDIA NVLink](https://www.youtube.com/watch?v=6lm8zXvfjyc) — SoC & FPGA · 23:27 · 1 year ago

### Side-channel attacks on multi-GPU interconnects
Explore how side-channel attacks can exploit multi-GPU interconnects to extract sensitive information. This section covers the specific attack techniques and their implications as demonstrated in the paper.

*How the paper uses it:* The paper develops covert and side-channel attacks exploiting NVLink leakage in multi-GPU systems.

▶ [Grand Pwning Unit: Accelerating Microarchitectural Attacks with the GPU](https://www.youtube.com/watch?v=HdMLcdhlFes) — IEEE Symposium on Security and Privacy · 17:41 · 8 years ago

### Cross-VM side-channel attacks in cloud environments *(prerequisite)*
Learn about side-channel attacks that cross virtual machine boundaries in cloud settings, highlighting the risks of shared hardware resources in multi-tenant environments.

*How the paper uses it:* The paper demonstrates a cross-VM side-channel attack on Google Cloud Platform exploiting NVLink leakage.

▶ [Side Channel attacks in the cloud - Presented By Gorka Irazoqui Apecechea](https://www.youtube.com/watch?v=gc6k_hK7FKk) — 44CON Information Security Conference · 40:29 · 7 years ago

## Already in your library

- [Stanford Seminar - NVIDIA GPU Computing: A Journey from PC Gaming to Deep Learning](https://www.youtube.com/watch?v=98Xis1W1mMk) — also for: FZModules: A Heterogeneous Computing Framework for Customizable Scientific Data Compression Pipelines (Fengguang Song)
- [16. Side-Channel Attacks](https://www.youtube.com/watch?v=3v5Von-oNUg) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of NVBleed's key findings on covert and side-channel attacks exploiting NVIDIA's NVLink interconnect. Starting with a simple timing-based covert channel simulation, you advance to implementing an application fingerprinting side-channel attack using synthetic performance counter data. Finally, you extend the research by exploring cross-VM side-channel attacks on a simulated multi-GPU cloud environment, addressing a key limitation noted in the paper.

### Beginner — Simulate NVLink Timing Contention Covert Channel
*Effort: a weekend, ~8 hours*

You build a simple simulation of NVLink timing contention to reproduce the ContenLink covert channel's basic mechanism. Using synthetic timing data, you demonstrate how contention-induced delays can encode and decode covert messages between two simulated GPU processes.

**Why it shows you understood the paper:** This project shows you grasp the fundamental leakage source of timing contention on NVLink and how it can be exploited for covert communication, a core contribution of the paper.

**Grounded in:** ContenLink covert channel achieves over 70 Kbps bandwidth with ~4.78% error rate on GCP NVLink-V2 system.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** Synthetic timing delay data simulating NVLink contention effects as described in the paper.

**Build it:**

1. Implement a timing channel simulator where two processes share a resource with contention-induced delays.
2. Encode bits by modulating the presence or absence of contention delays in simulated packet transmissions.
3. Decode the covert message by measuring timing variations and applying thresholding.
4. Visualize timing distributions and calculate error rates of the covert channel.
5. Write a README explaining the simulation and how it relates to NVBleed's ContenLink attack.

**Ships as:** A Jupyter notebook with simulation code, plots of timing delays, error rate calculations, and a README linking the simulation to the paper's ContenLink covert channel.

**Stretch goal:** Add noise to the timing simulation to study robustness and error correction techniques.

### Intermediate — Application Fingerprinting via NVLink Side Channel
*Effort: 2 weekends, ~20 hours*

You implement a simplified side-channel attack that fingerprints GPU applications by analyzing synthetic performance counter data and timing features inspired by the paper. You train a classifier to distinguish between multiple application profiles and evaluate accuracy.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core method of application fingerprinting using side-channel leakage sources identified in the paper, showing comprehension of both data collection and ML classification aspects.

**Grounded in:** Application fingerprinting attack achieves F1 scores up to 97.78% on DGX and 91.56% on GCP using timing and performance counters.

**Tech stack:** Python 3.11, scikit-learn, XGBoost, Jupyter Notebook

**Data:** Synthetic dataset simulating NVLink performance counters and timing features for 18 GPU applications as described in the paper; no official dataset released.

**Build it:**

1. Generate or simulate performance counter and timing feature data representing different GPU applications.
2. Preprocess the data and extract relevant features for classification.
3. Train and evaluate an XGBoost classifier to fingerprint applications based on side-channel data.
4. Compare results against a simple baseline classifier (e.g., logistic regression).
5. Document the methodology, results, and relate findings to the paper's application fingerprinting attack.

**Ships as:** A Jupyter notebook with data simulation, feature extraction, model training, evaluation metrics, and a README explaining the approach and results in the context of NVBleed.

**Stretch goal:** Incorporate noise and simulate restricted performance counter access to evaluate attack robustness.

### Advanced — Cross-VM Side-Channel Attack Simulation on Multi-GPU Cloud
*Effort: 3+ weeks*

You develop a simulation environment modeling co-located VMs sharing a multi-GPU NVLink interconnect to reproduce cross-VM side-channel leakage. You implement an attack that infers victim VM GPU activity patterns and evaluate classification accuracy, addressing the paper's limitation on cross-VM attack feasibility.

**Why it shows you understood the paper:** This project extends the paper's cross-VM attack by tackling its stated limitation of requiring co-location and specific NVLink topologies, demonstrating deep understanding and ability to innovate on the research.

**Grounded in:** Cross-VM side-channel attack on GCP achieves F1 score over 88% in identifying 3D rendered characters across VM boundaries.

**Tech stack:** Python 3.11, Docker, scikit-learn, XGBoost, Jupyter Notebook

**Data:** Simulated multi-VM NVLink timing and performance counter data reflecting cross-VM leakage patterns; no real cloud data available.

**Build it:**

1. Design a simulation of multiple VMs sharing an NVLink interconnect with contention and performance counter leakage.
2. Implement data collection modules to capture timing and counter features from victim and attacker VMs.
3. Develop a classification model to infer victim VM GPU activity (e.g., 3D character rendering) from side-channel data.
4. Evaluate attack accuracy and analyze impact of VM co-location and NVLink topology assumptions.
5. Write comprehensive documentation linking the simulation and results to the paper's cross-VM attack and limitations.

**Ships as:** A GitHub repository with simulation code, attack implementation, evaluation scripts, and detailed README discussing the extension of NVBleed's cross-VM side-channel attack.

**Stretch goal:** Experiment with mitigation strategies such as restricted performance counter access or clock resolution reduction in the simulation.
