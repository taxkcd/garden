---
title: "686 · Uncovering Power and Frequency Behaviors and Their Security Implications in Edge GPU Platforms — Hyeran Jeon"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hyeran-jeon"
source_hash: "333dd70eb0a8f6b8aae5208785013c9a99b8180f9949dfac5399e0c792bf4a9b"
sequence: 686
generator: "outreach-garden: managed"
---

# 686 · Uncovering Power and Frequency Behaviors and Their Security Implications in Edge GPU Platforms

## At a glance

- **Professor:** Hyeran Jeon
- **Institution:** Univ. of California - Merced
- **Paper:** [Uncovering Power and Frequency Behaviors and Their Security Implications in Edge GPU Platforms](https://doi.org/10.1145/3841634)
- **Authors:** Mujahid Al Rafi, Kevin Chau, Hyeran Jeon
- **Year:** 2026

## Paper overview

This paper investigates how GPUs and deep learning accelerators (DLAs) used in edge devices behave in terms of power consumption and frequency. It reveals that these behaviors vary significantly depending on instructions and data, which creates vulnerabilities that attackers can exploit to covertly leak information. The authors design new covert channels based on power and frequency signals that outperform previous attacks in bandwidth and noise tolerance. They also evaluate mitigation strategies but find none fully effective, highlighting the need for better security in edge AI platforms.

### Why it matters

**Research problem:** The power, frequency, and security characteristics of GPUs and DLAs on edge platforms are not well understood, and these devices may be vulnerable to covert channel attacks exploiting hardware-level side effects.

**Why it matters:** Edge GPUs and DLAs are increasingly used in sensitive applications like autonomous vehicles, surveillance, and medical devices, often operating in untrusted environments. Security vulnerabilities in these devices could lead to leakage of confidential data, making it critical to understand and mitigate such risks.

**Key contributions:**

- First in-depth power, energy, and frequency characterization of edge GPUs and DLAs.
- Development of PTX micro-kernels for instruction-level characterization revealing architecture-dependent power variations.
- Design of three novel covert channels based on GPU power, GPU frequency, and DLA frequency with significantly higher bandwidth than prior work.
- Demonstration that these covert channels are robust against conventional mitigations.
- Evaluation of practical mitigation strategies and identification of their limitations.

## About the professor

**Hyeran Jeon** — Associate Professor, CSE department, Univ. of California - Merced.

Research interests: energy-efficient, reliable and secure computer architecture and systems design

### Research links

- [Faculty/profile page](https://www.mocalab.org)
- [Google Scholar](https://scholar.google.com/citations?user=WyJcBncAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** computer architecture and hardware security
**The paper assumes:** computer architecture, GPU microarchitecture, hardware security, side channel attacks, power and frequency management
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of computer architecture and hardware security concepts.

To understand the hardware-level behaviors of edge GPUs and DLAs, including power consumption, frequency scaling, and their security implications such as covert channels, a solid foundation in hardware security and computer architecture is essential. The rigorous course provides a deep, structured university-level treatment of hardware security principles and side-channel analysis, while the fast track offers a concise, focused introduction to the same topics for quicker comprehension. Choose the rigorous option for in-depth study and the fast track for a time-efficient overview that still covers key concepts relevant to this paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Hardware Security - Debdeep Mukhopadhyay - IIT KGP](https://www.youtube.com/playlist?list=PLQBbcgo55TX-7vygatpMHOOtgflvYtkeZ) — Amit Panda · 60 videos · 29.8h across 60 episodes

**Watch only this:** Lectures 1 through 10, about 4.8 hours — covering introduction to hardware security, cryptography basics, and side channel analysis to build foundational knowledge for the paper's focus on power and frequency covert channels.

*Why it unblocks this paper:* This IIT KGP course by Debdeep Mukhopadhyay covers hardware security comprehensively, including side-channel attacks and hardware cryptanalysis, which are directly relevant to understanding power and frequency side channels in GPUs and DLAs as explored in the paper.

*If you want all of it:* About 29.8 hours across all 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Hardware Security Tutorial](https://www.youtube.com/playlist?list=PLPokM2qEmTDClgPTX_GOLeMZkuf7o38yS) — Todd Austin · 7 videos · 5.8h across 7 episodes

**Watch only this:** Parts 1 through 4, about 3.3 hours — covering secure hardware/software building, security basics, attack methods, and side-channel attacks to quickly ground the reader in relevant hardware security concepts.

*Why it unblocks this paper:* Todd Austin's Hardware Security Tutorial is a concise 7-part series that covers the basics of hardware security, side-channel attacks, and defenses, providing a clear and accessible introduction to the key concepts needed to grasp the paper's contributions without a large time investment.

*If you want all of it:* About 5.8 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on power and frequency behaviors and their security implications in edge GPU platforms, start with foundational knowledge on hardware side channel attacks and GPU architecture including frequency scaling. Then, build understanding of power management in edge computing to grasp the energy efficiency context. Finally, focus on the paper's core concept by watching the authors' own talks presenting their novel covert channels exploiting power and frequency signals, which directly relate to the paper's contributions.

### Hardware side channel attacks lecture *(prerequisite)*
This section covers the fundamentals and advanced techniques of hardware side channel attacks, which are essential to understand how covert channels exploit hardware signals such as power and frequency. The selected talks are from reputable security conferences and university lectures, providing rigorous and detailed explanations of side channel vulnerabilities and attacks.

*How the paper uses it:* Understanding covert channels exploiting hardware signals is central to the paper's design of novel covert channels based on power and frequency.

▶ [RuhrSec 2016: "Cache Side-Channel Attacks and the case of Rowhammer", Daniel Gruss](https://www.youtube.com/watch?v=gxsguH5opsM) — Hackmanit – IT Security · 10 yr ago

### GPU architecture and frequency scaling lecture *(prerequisite)*
This section provides advanced insights into GPU architecture and dynamic frequency scaling mechanisms, which are crucial to comprehend how frequency variations impact power consumption and security vulnerabilities in edge GPUs. The selected video is a research-focused reading group session covering GPU architecture and CUDA, suitable for an advanced audience.

*How the paper uses it:* Key to grasping how GPU frequency variations affect power and security in edge GPU platforms.

▶ [ML Performance Reading Group Session 1: GPU Architecture, CUDA, NCCL](https://www.youtube.com/watch?v=Cp7g1Ll4v0M) — EleutherAI · 1 yr ago

### Power management in edge computing lecture *(prerequisite)*
This section explores power management strategies and challenges specific to edge computing environments, providing context for the energy efficiency and power behavior analysis in edge GPUs. The chosen talk is a recent industry-focused seminar discussing power considerations at the network edge, offering relevant and up-to-date insights.

*How the paper uses it:* Essential for understanding power behavior and energy efficiency in edge GPUs studied in the paper.

▶ [TRANSFORM 2026 Houston: Power @ the Perimeter:The Rise of Edge Computing](https://www.youtube.com/watch?v=a-ddE1p9b5k) — ZEDEDA · 2 wk ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This section features the authors' own presentations of their research findings, offering direct and detailed explanations of their methodology, results, and implications. These talks provide the most authoritative and comprehensive understanding of the novel covert channels based on power and frequency signals in edge GPUs.

*How the paper uses it:* Direct source for the authors' presentation of their findings on power and frequency behaviors and covert channels in edge GPUs.

▶ [https://www.youtube.com › watch?v=KD-DQ2Dsa6g](https://www.youtube.com/watch?v=KD-DQ2Dsa6g) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper on power and frequency behaviors and their security implications in edge GPU platforms. It starts with the basics of edge computing and power management to set the context, then covers GPU architecture and frequency scaling to explain hardware behaviors. Next, it introduces hardware side channel attacks to build intuition about covert channels, and finally focuses on covert channels exploiting power and frequency signals, which is the core method of the paper.

### Power management in edge computing lecture *(prerequisite)*
Learn what edge computing is and why power management is critical in these devices. This sets the stage for understanding why power and frequency behaviors matter in edge GPUs, which are resource-constrained and security-sensitive.

*How the paper uses it:* The paper studies power and frequency behaviors specifically on edge GPU platforms, where power management is essential.

▶ [What is Edge Computing?](https://www.youtube.com/watch?v=WZQ6kCvOEaE) — Edge Impulse · 10:16

### GPU architecture and frequency scaling lecture *(prerequisite)*
Understand the basics of GPU architecture and how frequency scaling works to manage power and performance. This knowledge helps explain how GPU frequency variations occur and why they can leak information.

*How the paper uses it:* The paper analyzes frequency variations in NVIDIA edge GPUs and their impact on security.

▶ [Every GPU Feature Explained in 9 Minutes](https://www.youtube.com/watch?v=AltyB2aaYeE) — Byte Sized Explainer · 7 mo ago

### Hardware side channel attacks lecture *(prerequisite)*
Get an intuitive overview of hardware side channel attacks, which exploit physical signals like power consumption and timing to leak information. This foundational concept is key to understanding the covert channels designed in the paper.

*How the paper uses it:* The paper designs covert channels exploiting power and frequency side channels on edge GPUs.

▶ [Side Channel Attacks: Exploiting Hardware's Secret Whispers](https://www.youtube.com/watch?v=zlfRJKfCNEo) — ThoughtLab · 1 yr ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Hear directly from the authors about their findings and contributions. This talk can provide insights into their methodology and results, complementing the foundational knowledge.

*How the paper uses it:* The authors present their detailed characterization and novel covert channels in this talk.

▶ [https://www.youtube.com › watch?v=KD-DQ2Dsa6g](https://www.youtube.com/watch?v=KD-DQ2Dsa6g) — YouTube result via DuckDuckGo

## Already in your library

- [Nvidia CUDA in 100 Seconds](https://www.youtube.com/watch?v=pPStdjuYzSI) — also for: Strata: Hierarchical Context Caching for Long Context Language Model Serving (Scott A. Mahlke)
- [What is edge computing?](https://www.youtube.com/watch?v=3hScMLH7B4o) — also for: Covariance-Guided Resource Adaptive Learning for Efficient Edge Inference (In Kee Kim)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate understanding of the paper's key findings on power and frequency behaviors and their security implications in edge GPUs. The beginner project reproduces a simple power characterization micro-benchmark using familiar tools. The intermediate project implements a covert channel based on GPU frequency variations, re-creating the core attack method described. The advanced project extends the paper by exploring covert channel robustness under noisy multi-tenant GPU workloads, addressing a stated limitation and future direction.

### Beginner — GPU Instruction-Level Power Characterization Micro-Benchmark
*Effort: a weekend, ~8 hours*

You build a simple micro-benchmark that runs a small set of GPU instructions on an NVIDIA Jetson platform and collects power telemetry using the tegrastats utility. You analyze and plot power consumption variations across different instructions and data values.

**Why it shows you understood the paper:** This project shows you grasp the paper's first key contribution: that GPU power consumption varies significantly by instruction and data, which underpins the covert channel attacks.

**Grounded in:** Development of PTX micro-kernels for instruction-level characterization revealing architecture-dependent power variations.

**Tech stack:** Python 3.11, matplotlib, NVIDIA Jetson platform, shell scripting

**Data:** Power telemetry collected live from the NVIDIA Jetson TX2 or similar edge GPU using the tegrastats utility as described in the paper.

**Build it:**

1. Set up an NVIDIA Jetson device with CUDA and tegrastats installed.
2. Write simple PTX micro-kernels that execute different GPU instructions with varying data.
3. Run each micro-kernel while collecting power telemetry via tegrastats.
4. Parse and plot the power consumption data to show variations by instruction and data.
5. Document the instructions tested and observed power differences in the README.

**Verified links from the paper:**

- <https://github.com/NVIDIA/Deep-Learning-Accelerator-SW> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with PTX micro-kernels, scripts to collect and plot power telemetry, and a README explaining the observed power variations by instruction.

**Stretch goal:** Add frequency telemetry collection and compare power vs frequency variations for the same instructions.

### Intermediate — GPU Frequency-Based Covert Channel Implementation
*Effort: 2 weekends, ~20 hours*

You implement a covert channel on an NVIDIA Jetson platform that modulates secret bits by controlling GPU frequency states via instruction sequences, then recovers the bits by monitoring frequency telemetry. You compare bandwidth and error rates against a simple baseline of random frequency modulation.

**Why it shows you understood the paper:** This project demonstrates comprehension of the paper's core method: designing a high-bandwidth covert channel exploiting GPU frequency variations, and evaluating its effectiveness and robustness.

**Grounded in:** Design of three novel covert channels based on GPU power, GPU frequency, and DLA frequency with significantly higher bandwidth than prior work.

**Tech stack:** Python 3.11, CUDA C++, shell scripting, NVIDIA Jetson platform

**Data:** Live frequency telemetry from NVIDIA Jetson TX2 or similar edge GPU collected via tegrastats; no external dataset needed.

**Build it:**

1. Develop CUDA kernels that induce frequency changes corresponding to secret bits (e.g., high frequency for bit 1, low for bit 0).
2. Write a receiver script that samples GPU frequency telemetry to decode the transmitted bits.
3. Implement a baseline random frequency modulation scheme for comparison.
4. Measure and report bandwidth and error rates for both schemes.
5. Document the covert channel design, evaluation results, and limitations.

**Verified links from the paper:**

- <https://github.com/NVIDIA/Deep-Learning-Accelerator-SW> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with CUDA kernel code, telemetry collection and decoding scripts, evaluation results, and a README detailing the covert channel implementation and performance.

**Stretch goal:** Add simple mitigation techniques like telemetry resolution limiting and evaluate their impact on the covert channel.

### Advanced — Evaluating Covert Channel Robustness in Multi-Tenant Noisy GPU Environments
*Effort: 3+ weeks*

You extend the paper's covert channel implementation by simulating or running multiple concurrent GPU workloads to introduce noise in power and frequency telemetry. You analyze how noise affects covert channel bandwidth and error rates, and explore detection or mitigation strategies based on anomaly detection of telemetry fluctuations.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper: assessing covert channel effectiveness under realistic noisy multi-tenant conditions and investigating detection-based defenses.

**Grounded in:** The covert channels assume no noise from other concurrent GPU processes, which may not always hold in real-world multi-tenant scenarios; study covert channels under more realistic multi-tenant and noisy environments.

**Tech stack:** Python 3.11, CUDA C++, scikit-learn, NVIDIA Jetson platform or GPU simulator

**Data:** Telemetry data collected from running multiple concurrent GPU workloads on an NVIDIA Jetson device or simulated noisy telemetry data generated based on the paper's reported power/frequency variations.

**Build it:**

1. Set up multiple concurrent GPU workloads to generate telemetry noise during covert channel transmission.
2. Collect power and frequency telemetry data under noisy conditions.
3. Measure covert channel bandwidth and error rates with noise.
4. Implement anomaly detection algorithms (e.g., statistical thresholds, machine learning classifiers) to detect covert channel activity.
5. Evaluate detection effectiveness and propose mitigation recommendations.
6. Document methodology, results, and insights in the README.

**Verified links from the paper:**

- <https://github.com/NVIDIA/Deep-Learning-Accelerator-SW> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo containing noisy workload scripts, telemetry collection and analysis code, detection algorithm implementations, evaluation results, and a detailed README discussing robustness and defense strategies.

**Stretch goal:** Design and test fine-grained power management techniques to reduce covert channel leakage while maintaining legitimate telemetry utility.
