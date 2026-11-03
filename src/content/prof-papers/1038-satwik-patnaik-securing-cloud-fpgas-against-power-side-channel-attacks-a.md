---
title: "1038 · Securing Cloud FPGAs Against Power Side-Channel Attacks: A Case Study on Iterative AES — Satwik Patnaik"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-satwik-patnaik"
source_hash: "de32b482136e12d6ce378e5991402ba103f5357301d06b7895ebc005ae087863"
sequence: 1038
generator: "outreach-garden: managed"
---

# 1038 · Securing Cloud FPGAs Against Power Side-Channel Attacks: A Case Study on Iterative AES

## At a glance

- **Professor:** Satwik Patnaik
- **Institution:** University of Delaware
- **Paper:** [Securing Cloud FPGAs Against Power Side-Channel Attacks: A Case Study on Iterative AES](https://arxiv.org/pdf/2307.02569)
- **Authors:** Nithyashankari Gummidipoondi Jayasankaran, Hao Guo, Satwik Patnaik, Jeyavijayan (JV) Rajendran, Jiang Hu
- **Year:** 2023

## Paper overview

This paper studies vulnerabilities of cloud-based Field Programmable Gate Arrays (FPGAs) to power side-channel (PSC) attacks, focusing on the Advanced Encryption Standard (AES) cryptographic algorithm. It improves attack repeatability and efficiency by manually optimizing sensor placement on the FPGA and studies defenses that spread out AES logic or add extra logic to reduce attack success. The work also evaluates existing defenses using ring oscillators and proposes practical placement-based defenses that do not rely on ring oscillators, which are blocked by cloud providers.

### Why it matters

**Research problem:** Cloud FPGAs shared by multiple users are vulnerable to power side-channel attacks that can leak secret cryptographic keys, such as the 128-bit AES key, through voltage fluctuations sensed remotely without physical access. Existing attacks have low repeatability or require many power traces, and existing defenses using ring oscillators are impractical on cloud platforms like AWS due to combinatorial loop restrictions.

**Why it matters:** Cloud FPGAs are increasingly used for compute-intensive tasks due to their efficiency and performance. Multi-tenanting increases utilization but introduces security risks where malicious users can extract secret keys from co-located victim logic, threatening data confidentiality and trust in cloud services.

**Key contributions:**

- Demonstrated a repeatable PSC attack on 128-bit AES with 100% success rate using manual placement of FPGA primitives in TDC sensors, reducing minimum traces for disclosure (MTD) to 3.8k.
- Studied the impact of junction temperature on attack repeatability and MTD.
- Analyzed the effect of primitive-level placement of AES flip-flops and LUTs on attack resilience, showing that spreading these primitives can increase MTD.
- Evaluated the impact of additional logic (Kalman filters, processors, MIT-II CEP crypto cores) placed alongside AES on attack difficulty.
- Implemented and compared active fence defenses using ring oscillators, highlighting practical deployment challenges on cloud FPGAs.

## About the professor

**Satwik Patnaik** — Assistant Professor, Department of Electrical and Computer Engineering, University of Delaware.

Research interests: Hardware Security, Computer Security, Secure Computer-Aided Design Tools, Reinforcement Learning (RL) and Graph Neural Networks (GNNs) for Security, Hardware Intellectual Property Protection, Hardware Trojans, Side-channel Attacks, Heterogenous Integration and Emerging Technologies for Security

### Research links

- [Faculty/profile page](https://sites.google.com/udel.edu/satwikpatnaik)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Hardware Security and Side-Channel Attacks
**The paper assumes:** hardware security principles, side-channel attack techniques, FPGA architecture basics, power analysis attacks
**Already in this field?** Skip this entirely if you already have a solid understanding of hardware security concepts and side-channel attack methodologies on cryptographic hardware.

To understand the hardware security concepts and side-channel attack methodologies critical to this paper on securing cloud FPGAs against power side-channel attacks, two background options are provided. The rigorous course offers a deep, structured university-level treatment of secure hardware architecture including side channels, while the fast track provides a concise, visual introduction to hardware security concepts and attacks. Choose the course for a comprehensive foundation or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [SWS115 Secure Hardware Architecture (Sp 2023)](https://www.youtube.com/playlist?list=PLNwFw4ux9bQQVO-ttlNdzA1a50ERjL1nT) — Gunjae Koo · 13 videos · 17.9h across 13 episodes

**Watch only this:** Episodes 7-8: 'SWS115 - Memory Hierarchy II' and 'SWS115 - Side Channels', about 3.7 hours total — these cover memory effects and side-channel attacks essential to grasping PSC attack mechanisms and FPGA vulnerabilities.

*Why it unblocks this paper:* This university course on Secure Hardware Architecture covers side channels and hardware vulnerabilities in depth, directly relevant to understanding power side-channel attacks on FPGAs and defenses, matching the paper's focus on hardware security and side-channel analysis.

*If you want all of it:* All 13 episodes, about 17.9 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Hardware Security](https://www.youtube.com/playlist?list=PLG3VHl1-eYMtf0oAAmxdbaeIfaQJtCezY) — Sadeq El-Fergany · 8 videos · 1.9h across 8 episodes

**Watch only this:** Episodes 1-4: 'Lab 07 Part 02 Clock Glitching AES AddRoundKey Stub' through 'Lab 06 Part 01 Clock Glitching (intro and Deep Flip-Flop DFF)', about 56 minutes total — these focus on practical side-channel attack demonstrations and hardware security basics relevant to the paper.

*Why it unblocks this paper:* This short-form playlist introduces hardware security concepts including side-channel attacks and cryptographic hardware, providing a clear and concise overview suitable for quickly grasping the fundamentals needed to understand the paper's attack and defense strategies.

*If you want all of it:* All 8 episodes, about 1.9 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on securing cloud FPGAs against power side-channel attacks, start by building foundational knowledge on FPGA primitive placement and routing, as this is critical for the manual sensor placement and defense strategies proposed. Next, learn about time-to-digital converters (TDCs), the key sensing technique used to improve attack repeatability and sensitivity. Then, study the Advanced Encryption Standard (AES) hardware implementation, the cryptographic target of the attacks. Finally, focus on the core concept of power side-channel attacks on FPGAs, culminating in the authors' own talk which directly addresses their novel attack and defense methods.

### FPGA primitive placement and routing *(prerequisite)*
Understanding FPGA primitive placement and routing is essential to grasp how manual placement of FPGA primitives enhances sensor sensitivity and how spreading AES logic affects attack resilience. This knowledge provides insight into the physical and logical layout challenges addressed in the paper's defense strategies.

*How the paper uses it:* The paper improves attack repeatability by manually placing FPGA primitives and proposes placement-based defenses that rely on detailed FPGA routing knowledge.

▶ [GPlace3.0: Routability-Driven FPGA Placement for Ultrascale FPGA devices.](https://www.youtube.com/watch?v=bd57F-yG31Y) — EECG Toronto - University of Toronto · 1:06:25 · Streamed 8y ago

### Time-to-digital converters in side-channel sensing *(prerequisite)*
Time-to-digital converters (TDCs) are the core sensing mechanism used to detect power side-channel signals with high sensitivity and repeatability. Understanding TDC design and operation is crucial to appreciate how the paper's manual placement of TDC sensor primitives reduces the minimum traces for disclosure.

*How the paper uses it:* The paper leverages manual placement of FPGA primitives forming TDC sensors to enhance attack sensitivity and repeatability.

▶ [Design of Time-to-Digital Converter](https://www.youtube.com/watch?v=5vIlDo0gHKo) — NPTEL-NOC IITM · 38:43 · 4y ago

### Advanced Encryption Standard hardware implementation *(prerequisite)*
A thorough understanding of AES hardware implementation is necessary to comprehend the target of the side-channel attacks and how the placement of AES flip-flops and LUTs influences attack success. This background helps contextualize the cryptographic aspects of the paper.

*How the paper uses it:* The paper targets the 128-bit AES key implemented on cloud FPGAs and studies how AES primitive placement affects attack resilience.

▶ [AES Security and Implementation Aspects](https://www.youtube.com/watch?v=oQuBvLAKUM8) — Neso Academy · 8:54 · 3y ago

### Power side-channel attacks on FPGAs *(prerequisite)*
Understanding power side-channel attacks on FPGAs provides the fundamental attack vector exploited in the paper. This knowledge is necessary to appreciate the challenges in attack repeatability and the limitations of existing defenses.

*How the paper uses it:* The paper studies vulnerabilities of cloud FPGAs to power side-channel attacks and improves attack repeatability through sensor placement.

▶ [FPGA-Based Remote Power Side-Channel Attacks](https://www.youtube.com/watch?v=-NVm1yei4hY) — IEEE Symposium on Security and Privacy · 17:30 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand power side-channel attacks on cloud FPGAs, focusing on the AES cryptographic algorithm and the novel sensor placement and defense strategies explored in the paper. We start with a clear explanation of AES encryption, then cover the basics of power side-channel attacks and how time-to-digital converters (TDCs) improve sensing. Next, we explore FPGA primitive placement and routing to understand manual sensor placement and defenses. Finally, we highlight placement-based defenses against side-channel attacks as proposed in the paper.

### Advanced Encryption Standard hardware implementation *(prerequisite)*
Learn the structure and operation of the AES encryption algorithm, including its rounds, transformations, and key scheduling. This foundational knowledge is essential to understand what secret keys attackers aim to extract via side-channel attacks.

*How the paper uses it:* AES is the cryptographic algorithm targeted by the power side-channel attacks and defenses studied in the paper.

▶ [Introduction to Advanced Encryption Standard (AES)](https://www.youtube.com/watch?v=3MPkc-PFSRI) — Neso Academy · 11:07 · 3y ago

### Power side-channel attacks on FPGAs *(prerequisite)*
Understand how power side-channel attacks exploit variations in power consumption or voltage to leak secret information from cryptographic hardware like FPGAs. This section covers the attack vector that the paper improves upon.

*How the paper uses it:* The paper studies vulnerabilities of cloud FPGAs to power side-channel attacks and improves attack repeatability and efficiency.

▶ [ECED4406 - 0x500 Introduction to Side Channel Attacks](https://www.youtube.com/watch?v=D1DNz5sNDgE) — Colin O'Flynn · 9:41 · 5y ago

### Time-to-digital converters in side-channel sensing *(prerequisite)*
Discover how time-to-digital converters (TDCs) convert timing differences into digital values, enabling sensitive measurement of power fluctuations remotely. This sensing technique is key to the paper's improved attack repeatability.

*How the paper uses it:* The paper manually places FPGA primitives to form TDC sensors that enhance attack sensitivity and repeatability.

▶ [Design of Time-to-Digital Converter](https://www.youtube.com/watch?v=5vIlDo0gHKo) — NPTEL-NOC IITM · 38:43 · 4y ago

### FPGA primitive placement and routing *(prerequisite)*
Learn about FPGA architecture and how placing and routing primitives like flip-flops and LUTs affects timing and power characteristics. This knowledge is critical to understanding the manual sensor placement and placement-based defenses proposed.

*How the paper uses it:* Manual placement of FPGA primitives is used to optimize TDC sensors and spread AES logic for defense.

▶ [FPGA place and Route](https://www.youtube.com/watch?v=0YWTQVD_ujQ) — Ekeeda · 9:40 · 3y ago

## Already in your library

- [Introduction to Side-Channel Power Analysis (SCA, DPA)](https://www.youtube.com/watch?v=OlX-p4AGhWs) — also for: Power Side-Channel Membership Inference Attack on Embedded Machine Learning (Prabhat Mishra)
- [What is a Side Channel Attack and types of side channel attacks](https://www.youtube.com/watch?v=4jZISuiC29M) — also for: Testing side-channel security of cryptographic implementations against future microarchitectures (Daniel Genkin)
- [16. Side-Channel Attacks](https://www.youtube.com/watch?v=3v5Von-oNUg) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)
- [PLATYPUS: Software-based Power Side-Channel Attacks on x86](https://www.youtube.com/watch?v=LXaroV2crWw) — also for: Power Side-Channel Membership Inference Attack on Embedded Machine Learning (Prabhat Mishra)
- [Lecture 6 - Deep Learning-based Side-Channel Analysis (Guest lecture by Stjepan Picek)](https://www.youtube.com/watch?v=IFbTPxEZFCs) — also for: Power Side-Channel Membership Inference Attack on Embedded Machine Learning (Prabhat Mishra)
- [On the Difficulty of Pin-to-Wire Routing in FPGAs](https://www.youtube.com/watch?v=UZt2cDGHByQ) — also for: Lightweight Congruence Profiling for Early Design Exploration of Heterogeneous FPGAs (Pierre-Emmanuel Gaillardon)
- [Lecture 1: Introduction to FPGA](https://www.youtube.com/watch?v=uEpdlGzfFBQ) — also for: Coordinating Instruments for Multi-Messenger Astrophysics (Jeremy Buhler)
- [The Ins and Outs of FPGA IO](https://www.youtube.com/watch?v=dnk6_uN5UyE) — also for: HiLFS: FPGA-Orchestrated File System for High-Level Synthesis (André DeHon)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of power side-channel (PSC) attacks on cloud FPGAs as studied in the paper. The beginner project reproduces a simplified PSC attack concept using software simulation to grasp the core timing sensor idea. The intermediate project implements a placement-based defense simulation inspired by the paper's core method, comparing attack success metrics. The advanced project extends the research by investigating the impact of temperature variation on attack repeatability, addressing a stated limitation and requiring new data analysis skills.

### Beginner — Simulate FPGA TDC Sensor Timing Variations for AES Side-Channel Attack
*Effort: a weekend, ~8 hours*

You build a Python simulation that models the time-to-digital converter (TDC) sensor concept used in the paper to detect power side-channel leakage during AES encryption. The simulation will generate synthetic timing data representing voltage fluctuations correlated with AES key bits and perform a simple correlation power analysis (CPA) to recover partial key information.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental mechanism of the paper's PSC attack—how manual placement of FPGA primitives forms TDC sensors that detect timing variations linked to secret keys.

**Grounded in:** Demonstrated a repeatable PSC attack on 128-bit AES with 100% success rate using manual placement of FPGA primitives in TDC sensors, reducing minimum traces for disclosure (MTD) to 3.8k.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic timing data simulating TDC sensor outputs during AES encryption rounds, generated within the project.

**Build it:**

1. Implement a simplified AES encryption simulation that outputs intermediate values.
2. Model TDC sensor timing variations as noisy timing measurements correlated with AES intermediate states.
3. Generate synthetic timing traces for multiple encryption runs with random plaintexts and a fixed key.
4. Implement a basic correlation power analysis (CPA) to correlate timing traces with guessed key bytes.
5. Visualize correlation results and identify key byte candidates.
6. Document the simulation assumptions and limitations in the README.

**Ships as:** A Jupyter Notebook and Python scripts that simulate TDC sensor timing data and perform CPA to recover AES key bytes, with visualizations and explanations.

**Stretch goal:** Add noise and temperature variation parameters to the simulation to observe their effect on attack success.

### Intermediate — Placement-Based Defense Simulation Against PSC Attacks on AES
*Effort: 2 weekends, ~20 hours*

You implement a software simulation framework that models the effect of spreading AES flip-flops and LUTs across an FPGA fabric on the success rate of a PSC attack using TDC sensors. You simulate attack traces under different placement strategies and measure the minimum traces for disclosure (MTD) to evaluate defense effectiveness compared to a baseline compact placement.

**Why it shows you understood the paper:** This project shows you can apply the paper's core defense approach—placement-based spreading of AES primitives—to reduce attack efficacy and quantitatively compare MTD metrics, reflecting the paper's key experimental results.

**Grounded in:** Analyzed the effect of primitive-level placement of AES flip-flops and LUTs on attack resilience, showing that spreading these primitives can increase MTD.

**Tech stack:** Python 3.11, NumPy, Pandas, Matplotlib, Jupyter Notebook

**Data:** Synthetic timing trace data generated by the simulation framework modeling different AES placement scenarios; no real FPGA data required.

**Build it:**

1. Design a model to represent AES flip-flop and LUT placements on a grid representing FPGA slices.
2. Simulate TDC sensor timing traces for AES encryption under compact and spread-out placement configurations.
3. Implement CPA to analyze timing traces and estimate MTD for each placement.
4. Compare and plot MTD values across placement strategies to evaluate defense effectiveness.
5. Write a report summarizing the simulation methodology, results, and relation to the paper's findings.

**Ships as:** A simulation framework with scripts and notebooks that produce comparative MTD metrics for placement-based defenses, accompanied by plots and a detailed README.

**Stretch goal:** Incorporate additional logic activity (e.g., Kalman filter simulation) alongside AES to evaluate combined defense effects.

### Advanced — Study of Junction Temperature Impact on PSC Attack Repeatability and MTD
*Effort: 3+ weeks*

You develop an experimental and analytical project that investigates how junction temperature variations affect the repeatability and minimum traces for disclosure (MTD) of PSC attacks on AES implemented on FPGA. Using synthetic data augmented with temperature-dependent noise models, you analyze attack success rates and propose temperature-aware defense considerations.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by exploring temperature effects on TDC sensor outputs and attack feasibility, demonstrating your ability to extend the research with new data modeling and analysis.

**Grounded in:** Studied the impact of junction temperature on attack repeatability and MTD.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook, Pandas

**Data:** Synthetic timing traces generated with temperature-dependent noise parameters to simulate junction temperature effects on TDC sensor outputs.

**Build it:**

1. Review the paper's findings on temperature impact and model temperature-dependent noise affecting TDC sensor timing.
2. Extend the PSC attack simulation to incorporate temperature variation in timing trace generation.
3. Run CPA attacks on simulated traces at different temperature levels and record MTD and success rates.
4. Analyze and visualize how temperature affects attack repeatability and MTD.
5. Discuss implications for practical FPGA defense design and propose temperature-aware mitigation strategies.
6. Prepare a comprehensive report linking your findings to the paper's limitations and future directions.

**Ships as:** A research-style report with code and notebooks demonstrating temperature impact on PSC attacks, including plots, analysis, and defense recommendations.

**Stretch goal:** Validate the simulation model by comparing with any available FPGA temperature and power side-channel datasets or literature.

_The paper's authors did not release code or datasets; all data must be synthetically generated or simulated based on the paper's descriptions._
