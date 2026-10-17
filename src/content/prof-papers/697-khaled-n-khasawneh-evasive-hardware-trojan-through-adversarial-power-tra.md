---
title: "697 · Evasive Hardware Trojan through Adversarial Power Trace — Khaled N. Khasawneh"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-khaled-n-khasawneh"
source_hash: "918e55504784baecf74ed4ab0eaa3a8bc8859d4da3f9635f87a78c07737ea8df"
sequence: 697
generator: "outreach-garden: managed"
---

# 697 · Evasive Hardware Trojan through Adversarial Power Trace

## At a glance

- **Professor:** Khaled N. Khasawneh
- **Institution:** George Mason University
- **Paper:** [Evasive Hardware Trojan through Adversarial Power Trace](https://arxiv.org/pdf/2401.02342v1)
- **Authors:** Behnam Omidi, Khaled N. Khasawneh, Ihsen Alouani
- **Year:** 2024

## Paper overview

This paper presents a method to design hardware Trojans (HTs) that can evade detection by machine learning (ML) models analyzing power side-channel data. The authors develop a technique called Hardware Trojan Obfuscation (HTO) that generates adversarial power traces implemented directly in hardware circuits, fooling ML-based HT detectors with high efficiency. They propose circuit designs for ASICs and FPGAs that consume adversarial power traces to bypass detection, and evaluate countermeasures including spectral filtering and adversarial training.

### Why it matters

**Research problem:** Machine learning models used for detecting hardware Trojans via power side-channel analysis are vulnerable to adversarial noise. The problem is how to design hardware Trojans that generate adversarial power traces to evade ML-based detection, and how to optimize such adversarial circuits to be stealthy and resource-efficient.

**Why it matters:** Hardware Trojans pose serious security risks in integrated circuits, especially given the globalized IC supply chain. ML-based detection methods are promising but if attackers can bypass them using adversarial techniques, the integrity of critical systems is compromised. Understanding and mitigating these vulnerabilities is crucial for hardware security.

**Key contributions:**

- Developed an adversarial power generation method allowing HTs to bypass ML-based side-channel defenses.
- Designed configurable adversarial patch generation circuits for ASIC and FPGA platforms.
- Optimized adversarial noise to minimize resource utilization, achieving effective attacks with as few as one transistor on ASIC.
- Proposed spectral domain countermeasures and evaluated adaptive attacks that bypass these defenses.
- Analyzed the trade-offs of adversarial training as a defense, highlighting utility loss.

## About the professor

**Khaled N. Khasawneh** — Associate Professor, Department of Electrical & Computer Engineering (ECE), George Mason University.

Research interests: Computer Architecture, Security, Machine Learning, hardware support for security, microarchitecture security, machine learning security and privacy, malware detection

### Research links

- [Faculty/profile page](https://sites.google.com/view/knkhasawneh/khaled-n-khasawneh)
- [Lab website](https://sites.google.com/view/knkhasawneh/camlsec?authuser=0)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Adversarial Machine Learning
**The paper assumes:** machine learning adversarial attacks, adversarial example generation, adversarial training, robustness evaluation
**Already in this field?** Skip this entirely if you already understand adversarial machine learning concepts and defenses against adversarial attacks in ML.

To understand this paper on adversarial hardware Trojans that evade ML-based detection via power side-channel attacks, foundational knowledge of adversarial machine learning is essential. The rigorous course option offers a deep, structured university-level introduction to AI and machine learning principles, including adversarial examples, while the fast track provides a concise, practical introduction to adversarial machine learning concepts and techniques. Choose the course for a thorough theoretical grounding and the fast track for a focused, time-efficient overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [AI Security Foundations: Adversarial Machine Learning in Persian](https://www.youtube.com/playlist?list=PLYxTF848CZLmN1wPNhX5gKc4g4DSRafZE) — Arash Vashagh · 11 videos · 1.7h across 11 episodes

**Watch only this:** Sessions 1 (Introduction to Adversarial Machine Learning), 2 (AI and Machine Learning Foundations), 8 (Gradients), 9 and 10 (Gradient Descent Parts 1 and 2) — about 45 minutes total, covering key concepts needed to grasp adversarial example generation.

*Why it unblocks this paper:* This concise series introduces adversarial machine learning fundamentals, including classification, loss functions, gradients, and gradient descent, which are foundational to understanding adversarial attacks and defenses relevant to the paper.

*If you want all of it:* All 11 episodes, approximately 1.7 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on evasive hardware Trojans via adversarial power traces, start with foundational knowledge on power side-channel analysis and adversarial machine learning attacks, as these underpin the detection and evasion mechanisms. Next, explore hardware security and Trojan detection methods to grasp the security context and ML-based defenses targeted by the paper. Then, study ASIC and FPGA power modeling to appreciate the hardware platforms used for adversarial patch implementation. Finally, focus on the paper's core concept of hardware Trojan obfuscation and related adversarial techniques, prioritizing the authors' own talks or rigorous academic presentations.

### Power side-channel analysis *(prerequisite)*
Power side-channel analysis is a fundamental technique that exploits variations in a device's power consumption to infer secret information or detect anomalies such as hardware Trojans. Understanding different power analysis attacks, including differential power analysis, is essential to appreciate how ML models analyze power traces for Trojan detection.

*How the paper uses it:* The paper targets ML-based hardware Trojan detection methods that analyze power side-channel data, making this foundational knowledge critical.

▶ [#50 Power Analysis Attacks | Information Security 5 Secure Systems Engineering](https://www.youtube.com/watch?v=kmNOhUqkXww) — NPTEL-NOC IITM · 36:58 · 7y ago

### Adversarial machine learning attacks *(prerequisite)*
Adversarial machine learning studies how attackers can craft inputs to fool ML models, including evasion attacks that cause misclassification. This knowledge is key to understanding how adversarial power traces are generated to bypass ML-based Trojan detectors.

*How the paper uses it:* The paper's core innovation is generating adversarial power traces that fool ML detectors, making adversarial ML attacks a crucial prerequisite.

▶ [Carlini- Wagner (CW) attack | Adversarial Attacks | Adversarial Machine Learning](https://www.youtube.com/watch?v=KW62IOOi2J4) — Learn With Aparna · 21:05 · 11 mo ago

### Hardware security and Trojan detection *(prerequisite)*
This area covers the challenges of detecting malicious modifications in hardware, the structure of hardware Trojans, and ML-based detection approaches. It provides the security context and highlights why ML detection is vulnerable to adversarial attacks.

*How the paper uses it:* The paper addresses vulnerabilities in ML-based hardware Trojan detection, so understanding existing detection methods and challenges is necessary.

▶ [How to Train Your Hardware Trojan Detector](https://www.youtube.com/watch?v=aDLXWtsTegU) — Security Network Munich · 1:17:56 · Streamed 4y ago

### ASIC and FPGA power modeling *(prerequisite)*
Knowledge of ASIC and FPGA architectures and their power consumption characteristics is important to understand how adversarial patches are implemented in hardware and optimized for stealth and efficiency.

*How the paper uses it:* The paper designs adversarial circuits for ASICs and FPGAs that generate adversarial power traces, requiring understanding of these platforms' power modeling.

▶ [FPGA Basics, Architecture and Applications | FPGA vs ASIC vs Processor | Design Optimization](https://www.youtube.com/watch?v=RnXK0n0grmc) — Abhyaas Training Institute · 26:03 · 5y ago

### Hardware Trojan obfuscation
Hardware Trojan obfuscation involves techniques to hide or disguise malicious circuitry to evade detection. This concept is central to the paper's method of generating adversarial power traces directly in hardware to fool ML detectors.

*How the paper uses it:* The paper proposes a novel Hardware Trojan Obfuscation (HTO) technique that generates adversarial power traces to evade ML-based detection.

▶ [#51 Hardware Trojans | Information Security 5 Secure Systems Engineering](https://www.youtube.com/watch?v=YVbvil6LjN0) — NPTEL-NOC IITM · 19:48 · 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand adversarial hardware Trojans that evade machine learning detection via power side-channel analysis. It starts with the basics of power side-channel analysis to grasp how hardware leaks information, then covers hardware security and Trojan detection to understand the threat context. Next, it explains adversarial machine learning attacks to build intuition on how ML models can be fooled. Finally, it focuses on the paper's core method: hardware Trojan obfuscation through adversarial power trace generation.

### Power side-channel analysis *(prerequisite)*
Power side-channel analysis studies how the power consumption of a device reveals information about its internal operations and data. Understanding this helps explain how hardware Trojans can be detected by analyzing power usage patterns. This concept lays the groundwork for why adversarial power traces can fool ML detectors.

*How the paper uses it:* The paper targets ML-based HT detection methods that analyze power side-channel data, so understanding this analysis is fundamental.

▶ [#50 Power Analysis Attacks | Information Security 5 Secure Systems Engineering](https://www.youtube.com/watch?v=kmNOhUqkXww) — NPTEL-NOC IITM · 36:58 · 7y ago

### Hardware security and Trojan detection *(prerequisite)*
Hardware Trojans are malicious modifications in integrated circuits that can compromise security. This section explains what hardware Trojans are, how they are inserted, and the challenges in detecting them, especially using ML techniques. It provides the security context for why adversarial attacks on HT detection are critical.

*How the paper uses it:* The paper develops attacks against ML-based hardware Trojan detection, so understanding the nature of hardware Trojans and detection challenges is essential.

▶ [#51 Hardware Trojans | Information Security 5 Secure Systems Engineering](https://www.youtube.com/watch?v=YVbvil6LjN0) — NPTEL-NOC IITM · 19:48 · 7y ago

### Adversarial machine learning attacks *(prerequisite)*
Adversarial machine learning studies how small, crafted perturbations can fool ML models into making wrong predictions. This section introduces the idea of adversarial examples and evasion attacks, which is key to understanding how the paper generates adversarial power traces to evade HT detectors.

*How the paper uses it:* The paper's core innovation is generating adversarial power traces that fool ML-based HT detectors, so grasping adversarial ML attacks is crucial.

▶ [Carlini- Wagner (CW) attack | Adversarial Attacks | Adversarial Machine Learning](https://www.youtube.com/watch?v=KW62IOOi2J4) — Learn With Aparna · 21:05 · 11 mo ago

## Already in your library

- [16. Side-Channel Attacks](https://www.youtube.com/watch?v=3v5Von-oNUg) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)
- [Lecture 16 | Adversarial Examples and Adversarial Training](https://www.youtube.com/watch?v=CIfsB_EYsVI) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Stanford CS230: Deep Learning | Autumn 2018 | Lecture 4 - Adversarial Attacks / GANs](https://www.youtube.com/watch?v=ANszao6YQuM) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Adversarial Machine Learning explained! | With examples.](https://www.youtube.com/watch?v=YyTyWGUUhmo) — also for: The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models (Amir Sadovnik)
- [Introduction to FPGA Part 1 - What is an FPGA? | Digi-Key ...](https://www.youtube.com/watch?v=lLg1AgA2Xoo) — also for: Coordinating Instruments for Multi-Messenger Astrophysics (Jeremy Buhler)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of adversarial hardware Trojans that evade ML-based detection via power side-channel analysis, as presented in the paper. Starting with a simple simulation of adversarial power traces, you then implement and evaluate a core adversarial attack method on a public ML detector baseline. Finally, you explore an advanced extension addressing the paper's limitation on resource efficiency or spectral defenses, applying your software and ML skills to hardware security challenges.

### Beginner — Simulate Adversarial Power Traces to Fool ML Trojan Detector
*Effort: a weekend (~8 hours)*

You build a Python simulation that generates adversarial perturbations on synthetic power side-channel traces to fool a simple ML-based hardware Trojan detector. The project reproduces a minimal adversarial example generation process and visualizes how adversarial noise changes the power trace and the detector's output.

**Why it shows you understood the paper:** This project shows you grasp the core concept of adversarial power trace generation and its impact on ML-based Trojan detection, demonstrating the paper's key insight that adversarial noise can evade detection.

**Grounded in:** Demonstrates the paper's key result: 'HTO can fool ML-based HT detectors with 100% efficiency using minimal hardware.'

**Tech stack:** Python 3.11, NumPy, Matplotlib, scikit-learn

**Data:** Synthetic power side-channel traces generated in code to simulate Trojan and clean signals, as no public dataset is provided.

**Build it:**

1. Implement a simple ML classifier (e.g., SVM or logistic regression) to detect Trojan presence from synthetic power traces.
2. Generate synthetic clean and Trojan power traces as 1D numeric arrays.
3. Implement a basic adversarial noise generation method (e.g., FGSM) to perturb Trojan traces to evade the classifier.
4. Visualize original and adversarial power traces and classifier confidence scores.
5. Write a README explaining the adversarial power trace concept and how the simulation relates to the paper.

**Ships as:** A Python notebook or script with code, plots of power traces before and after adversarial perturbation, and a README explaining the simulation and its relation to the paper.

**Stretch goal:** Add a simple spectral filtering step to the adversarial traces and show how it affects detection, illustrating the paper's spectral defense evaluation.

### Intermediate — Reimplement Adversarial Power Trace Generation and Evaluate on ML Trojan Detector
*Effort: 1-3 weekends (~20 hours)*

You implement the core adversarial power trace generation algorithm described in the paper to attack a simple ML-based hardware Trojan detector trained on synthetic or publicly available power side-channel data. You compare detection accuracy before and after adversarial perturbation and report metrics similar to the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main adversarial attack method and quantitatively evaluate its effectiveness, showing you understand both the attack mechanics and ML evaluation.

**Grounded in:** Reimplements the paper's contribution: 'Developed an adversarial power generation method allowing HTs to bypass ML-based side-channel defenses.'

**Tech stack:** Python 3.11, PyTorch or TensorFlow, NumPy, Matplotlib, scikit-learn

**Data:** Synthetic or publicly available power side-channel traces for hardware Trojan detection; no authors' dataset is released, so synthetic data simulating Trojan and clean traces is used.

**Build it:**

1. Implement or reuse an ML model architecture similar to HTnet for Trojan detection on power traces.
2. Generate or obtain a dataset of synthetic power traces labeled as Trojan or clean.
3. Implement the adversarial power trace generation algorithm (e.g., gradient-based adversarial noise) as described in the paper.
4. Evaluate and compare the ML detector's accuracy on clean vs. adversarially perturbed traces.
5. Document the attack's effectiveness and resource trade-offs in a report or README.

**Ships as:** A GitHub repo with code to train the ML detector, generate adversarial power traces, evaluation scripts, and a report comparing detection accuracy with and without adversarial noise.

**Stretch goal:** Implement a simple adversarial training defense and evaluate its impact on robustness and baseline accuracy, reflecting the paper's defense analysis.

### Advanced — Design and Evaluate Resource-Efficient Adversarial Circuit Simulation for Hardware Trojan Obfuscation
*Effort: a few weeks (~40+ hours)*

You design a software simulation of a resource-optimized adversarial hardware Trojan obfuscation circuit inspired by the paper's ASIC transistor network or FPGA ring oscillator approach. You simulate power consumption patterns and evaluate how spectral filtering defenses affect detection, addressing the paper's limitation on resource utilization and spectral defense effectiveness.

**Why it shows you understood the paper:** This project extends the paper by tackling a stated limitation and future direction, showing deep comprehension of adversarial hardware design, power side-channel modeling, and defense evaluation, bridging hardware security and ML.

**Grounded in:** Addresses the paper's limitation: 'High resource utilization of adversarial circuits can expose attacks to detection by other means.' and future direction: 'Develop more resource-efficient adversarial circuit designs to enhance stealthiness.'

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, PySpice or equivalent circuit simulation library

**Data:** Simulated power consumption traces generated by the adversarial circuit model; no real hardware data is available.

**Build it:**

1. Research and model a simplified transistor-level or ring oscillator-based adversarial power consumption circuit as described in the paper.
2. Simulate power traces generated by this circuit under different resource utilization constraints.
3. Implement spectral filtering techniques to attempt detection of adversarial traces.
4. Evaluate how resource optimization affects the stealthiness and detectability of the adversarial circuit.
5. Document findings and compare with the paper's reported trade-offs and results.

**Ships as:** A repository with simulation code, plots of power traces and spectral analysis, and a detailed README discussing resource vs. stealth trade-offs and defense effectiveness.

**Stretch goal:** Extend the simulation to model adaptive attacks that generate noise in specific frequency bands to bypass spectral filters, as explored in the paper.
