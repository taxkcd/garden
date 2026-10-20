---
title: "830 · Testing side-channel security of cryptographic implementations against future microarchitectures — Daniel Genkin"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-daniel-genkin"
source_hash: "a939b412e91d6c7fb0a28ef49535bf84f5fcebc0690a4ffd9b1ea493fa060567"
sequence: 830
generator: "outreach-garden: managed"
---

# 830 · Testing side-channel security of cryptographic implementations against future microarchitectures

## At a glance

- **Professor:** Daniel Genkin
- **Institution:** Georgia Institute of Technology
- **Paper:** [Testing side-channel security of cryptographic implementations against future microarchitectures](https://arxiv.org/pdf/2402.00641)
- **Authors:** Gilles Barthe, Marcel Böhme, Sunjay Cauligi, Chitchanok Chuengsatiansup, Daniel Genkin, Marco Guarnieri, David Mateos Romero, Peter Schwabe, David Wu, Yuval Yarom
- **Year:** 2024

## Paper overview

This paper develops a framework to evaluate how new microarchitectural optimizations in CPUs might cause side-channel leaks in cryptographic software. It introduces a domain-specific language (LmSpec) to specify leakage models and a testing tool (LmTest) to detect secret leaks in cryptographic implementations under these models. The authors apply their framework to 18 proposed CPU optimizations and 25 cryptographic implementations, finding that all tested implementations would leak secrets if these optimizations were realized, sometimes enabling secret key recovery.

### Why it matters

**Research problem:** As transistor scaling slows, chip vendors introduce new microarchitectural optimizations to improve performance. However, these optimizations may introduce new side-channel leaks that compromise cryptographic implementations. There is a lack of systematic methods to evaluate the security impact of such future microarchitectural proposals on cryptographic software.

**Why it matters:** Side-channel attacks exploiting microarchitectural features can leak secret information from supposedly secure cryptographic computations. Understanding and mitigating these leaks is critical for maintaining the confidentiality of cryptographic keys and data in future hardware designs.

**Key contributions:**

- Development of LmSpec, an expressive and concise domain-specific language for specifying leakage and speculation models.
- Implementation of LmTest, a testing tool that automatically detects secret-dependent leaks in x86 binaries against arbitrary LmSpec models.
- A large-scale empirical study analyzing the side-channel security of 25 cryptographic implementations from five popular libraries against 18 microarchitectural optimization proposals.
- Demonstration that all tested cryptographic implementations would leak secrets under the proposed optimizations, sometimes enabling direct secret key recovery.
- Release of all artifacts, including LmSpec and LmTest implementations and scripts to reproduce results.

## About the professor

**Daniel Genkin** — Associate Professor, School of Cybersecurity and Privacy, School of Computer Science, Georgia Institute of Technology.

Research interests: system security and cryptography, side-channel attacks, hardware security, cryptanalysis, secure multiparty computation (MPC), verifiable computation, SNARKS

### Research links

- [Faculty/profile page](https://faculty.cc.gatech.edu/~genkin)
- [Lab website](https://architecture.fail/)
- [Google Scholar](https://scholar.google.com/citations?user=BqkyhDEAAAAJ&hl=en)
- [DBLP](http://dblp.uni-trier.de/pers/hd/g/Genkin:Daniel)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Microarchitecture and Side-Channel Attacks
**The paper assumes:** computer architecture microarchitecture, CPU speculation and caching, side-channel attack fundamentals
**Already in this field?** Skip this entirely if you already understand CPU microarchitecture and how it enables side-channel attacks on cryptographic software.

To understand the microarchitectural side-channel vulnerabilities explored in the paper, a solid grasp of CPU microarchitecture, speculation, caching, and side-channel attack techniques is essential. The rigorous course option offers a deep, structured university-level treatment of computer systems security with a dedicated lecture on side-channel attacks, while the fast track provides a focused, visual, and intuition-driven playlist on microarchitecture and side-channel attacks including Spectre and Meltdown, ideal for quicker but still thorough background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.858 Computer Systems Security, Fall 2014](https://www.youtube.com/playlist?list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh) — MIT OpenCourseWare · 22 videos · 29.7h across 22 episodes

**Watch only this:** Lecture 16: Side-Channel Attacks (about 81 minutes) — this lecture specifically covers the principles and examples of side-channel attacks, essential for understanding the paper's threat model and testing approach.

*Why it unblocks this paper:* MIT 6.858 Computer Systems Security is a rigorous university course covering a broad range of security topics including a dedicated lecture on side-channel attacks, providing foundational understanding of microarchitectural vulnerabilities relevant to the paper's testing framework and leakage models.

*If you want all of it:* All 22 episodes, about 29.7 hours — for comprehensive background in systems security and related topics.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Microarchitecture - Spectre - Meltdown](https://www.youtube.com/playlist?list=PLvYd_6wFpH-K5DTuGpCclfufFLFFrhX8D) — Ferhat Erata · 34 videos · 19.5h across the first 32 episodes

**Watch only this:** Episodes 2 1 8 Advanced Branch Prediction, Spectre Attacks Exploiting Speculative Execution, Memory & Caches (about 3 episodes, ~1.8 hours total) — these cover key microarchitectural concepts and side-channel attack mechanisms relevant to the paper.

*Why it unblocks this paper:* Ferhat Erata's 'Microarchitecture - Spectre - Meltdown' playlist offers a concise, well-structured visual explanation of microarchitectural side-channel attacks including speculation and caching, directly aligned with the paper's focus on future microarchitectural optimizations and side-channel leakage.

*If you want all of it:* First 32 episodes, about 19.5 hours — for a deep dive into microarchitectural attacks and defenses.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on testing side-channel security against future microarchitectures, start with foundational knowledge on microarchitectural CPU optimizations and constant-time programming practices, as these are critical to grasp how hardware changes impact cryptographic security. Next, study microarchitectural side-channel leakage modeling to comprehend how leakage is specified and analyzed. Finally, focus on the paper's core contribution by watching the authors' own talks or related advanced research presentations on side-channel analysis and microarchitectural side channels.

### Microarchitectural CPU optimizations *(prerequisite)*
Understanding the hardware-level optimizations in CPUs is essential to appreciate how new microarchitectural features can introduce side-channel leaks. These videos provide detailed academic lectures on CPU microarchitecture and performance optimizations, which form the hardware basis for the paper's leakage models.

*How the paper uses it:* The paper evaluates how proposed microarchitectural optimizations can induce side-channel leaks in cryptographic implementations.

▶ [Lecture 11 - Performance - CompArch - Chapter 7 - Microarchitecture](https://www.youtube.com/watch?v=kYa-rTBbhSU) — TCNJ Dr. Kim · 2w ago

### Constant-time programming and cryptographic side-channel mitigation *(prerequisite)*
Constant-time programming is a key cryptographic software practice designed to prevent timing side-channel leaks. Understanding its principles and limitations is crucial since the paper finds that some coding idioms intended to prevent leaks under this model ironically cause leaks under new microarchitectural optimizations.

*How the paper uses it:* The paper highlights that some leaks arise due to coding idioms designed for constant-time security, which fail under new microarchitectural conditions.

▶ [CacheBleed A Timing Attack on OpenSSL Constant Time RSA](https://www.youtube.com/watch?v=Fjz4dkU2N3g) — IACR · 10y ago

### Microarchitectural side-channel leakage modeling *(prerequisite)*
This concept covers how side-channel leakage is formally modeled and specified, which is central to the paper's development of LmSpec, a domain-specific language for leakage and speculation models. These videos provide rigorous academic perspectives on modeling side-channel leakage at the microarchitectural level.

*How the paper uses it:* LmSpec, the paper's domain-specific language, is designed to specify leakage and prediction models for microarchitectural optimizations.

▶ [Modelling Side-Channel Leakage](https://www.youtube.com/watch?v=f4wFWrz2-AU) — Institut Henri Poincaré · 10y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Direct talks by the paper authors or closely related research presentations provide the most precise insights into the methodology, contributions, and implications of the work. These talks often include detailed explanations of the framework, experimental setup, and findings.

*How the paper uses it:* Hearing from the authors themselves offers the clearest understanding of their framework LmSpec and testing tool LmTest, as well as the empirical results on cryptographic implementations.

▶ [USENIX Security '21 - Osiris: Automated Discovery of Microarchitectural Side Channels](https://www.youtube.com/watch?v=ZXhhBQpEFPc) — USENIX · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the fundamentals of side-channel attacks on cryptography, which explain how secret data can leak through hardware behavior. Next, grasp the basics of microarchitectural CPU optimizations, since these hardware changes can introduce new side-channel vulnerabilities. Then, study constant-time programming and its limitations, as the paper shows how traditional defenses can fail with new CPU features. Finally, explore microarchitectural side-channel leakage modeling, which is central to the paper's novel approach of specifying and testing leakage models with LmSpec and LmTest.

### Side-channel attacks on cryptography *(prerequisite)*
Side-channel attacks exploit unintended information leaks from cryptographic computations, such as timing or power usage, to recover secret keys. Understanding these attacks provides the foundational motivation for why microarchitectural changes can threaten cryptographic security.

*How the paper uses it:* The paper evaluates how new microarchitectural optimizations can cause side-channel leaks that compromise cryptographic implementations.

▶ [What is a Side Channel Attack and types of side channel attacks](https://www.youtube.com/watch?v=4jZISuiC29M) — Coeur Strike · 2y ago

### Microarchitectural CPU optimizations *(prerequisite)*
Modern CPUs use microarchitectural optimizations like speculation and caching to improve performance. These optimizations change how instructions execute internally, which can inadvertently create new side channels.

*How the paper uses it:* The paper studies 18 proposed CPU optimizations that may introduce new leakage paths exploitable by side-channel attacks.

▶ [Lecture 11 - Performance - CompArch - Chapter 7 - Microarchitecture](https://www.youtube.com/watch?v=kYa-rTBbhSU) — TCNJ Dr. Kim · 2w ago

### Constant-time programming and cryptographic side-channel mitigation *(prerequisite)*
Constant-time programming aims to prevent side-channel leaks by ensuring cryptographic code executes in uniform time regardless of secret data. However, this paper shows that some coding idioms designed for constant-time can ironically cause leaks under new microarchitectural behaviors.

*How the paper uses it:* The paper finds that some leaks arise due to coding practices intended to prevent leaks under the standard constant-time model.

▶ [CacheBleed A Timing Attack on OpenSSL Constant Time RSA](https://www.youtube.com/watch?v=Fjz4dkU2N3g) — IACR · 10y ago

### Microarchitectural side-channel leakage modeling
Leakage modeling formalizes how microarchitectural features leak secret information, enabling systematic testing and analysis. This concept is key to specifying leakage and prediction models in the paper's LmSpec language.

*How the paper uses it:* The paper introduces LmSpec, a domain-specific language to specify leakage models for microarchitectural optimizations at the ISA level.

▶ [Side-Channel Attacks: What Part of Microarchitecture is Your Favorite?](https://www.youtube.com/watch?v=c9V_g5f3DM0) — Side Channel Security · 3y ago

## Already in your library

- [16. Side-Channel Attacks](https://www.youtube.com/watch?v=3v5Von-oNUg) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)
- [Lecture on Microarchitectural Side-Channel Attacks](https://www.youtube.com/watch?v=B2vGGoT-a4M) — also for: Rigorous Evaluation of Microarchitectural Side-Channels with Statistical Model Checking (Daniel J. Sorin)
- [Side Channel Attacks: Exploiting Hardware's Secret Whispers](https://www.youtube.com/watch?v=zlfRJKfCNEo) — also for: Uncovering Power and Frequency Behaviors and Their Security Implications in Edge GPU Platforms (Hyeran Jeon)
- [Verifying Constant-Time Implementations](https://www.youtube.com/watch?v=Ykr9gGZavU0) — also for: MicroSampler: A Framework for Microarchitecture-Level Leakage Detection in Constant Time Execution (Radu Teodorescu)
- [Practical Timing Side-Channel Attacks on Memory Compression](https://www.youtube.com/watch?v=fb93jr8wy94) — also for: NVBleed: Covert and Side-Channel Attacks on NVIDIA Multi-GPU Interconnect (Nael B. Abu-Ghazaleh)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core contributions of the paper on testing side-channel security against future microarchitectures. Starting with a beginner-level project that familiarizes you with the LmSpec language and leakage modeling, the intermediate project involves running and extending the authors' LmTest framework to detect leaks in a cryptographic implementation. The advanced project tackles a stated limitation by extending the framework to a new CPU architecture, demonstrating deeper engagement with the paper's future directions.

### Beginner — Modeling Microarchitectural Leakage with LmSpec
*Effort: a weekend (~8 hours)*

You build a small set of LmSpec leakage and prediction clauses that model a simple microarchitectural optimization (e.g., speculative execution or cache timing) and write a README explaining how these models represent side-channel leakage. You then use the Unicorn CPU emulator to generate leakage traces for a simple cryptographic operation under your model.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key contribution of LmSpec as a domain-specific language for specifying leakage models and how microarchitectural features can be abstracted to detect side-channel leaks.

**Grounded in:** Development of LmSpec, an expressive and concise domain-specific language for specifying leakage and speculation models.

**Tech stack:** Python 3.11, Unicorn CPU emulator, Git

**Data:** Synthetic leakage traces generated by running simple cryptographic code snippets under the LmSpec model using Unicorn emulator.

**Build it:**

1. Clone the authors' repository https://github.com/hw-sw-contracts/leakage-model-testing and set up the environment.
2. Study example LmSpec models provided in the repository to understand syntax and semantics.
3. Write a new LmSpec leakage clause modeling a simple microarchitectural feature (e.g., cache timing or branch speculation).
4. Use the Unicorn emulator with your LmSpec model to generate leakage traces for a small cryptographic function (e.g., AES round).
5. Document your model and generated traces in a README explaining how the model captures leakage.

**Verified links from the paper:**

- <https://github.com/hw-sw-contracts/leakage-model-testing> — released by the paper's authors

**Ships as:** A GitHub repository containing your LmSpec model files, generated leakage traces, and a README explaining the model and its significance.

**Stretch goal:** Add a prediction clause to your LmSpec model to simulate attacker prediction capabilities and analyze how it affects leakage.

### Intermediate — Detecting Side-Channel Leaks with LmTest on a Cryptographic Implementation
*Effort: 1-3 weekends (~20 hours)*

You run the LmTest testing framework from the authors' repository to detect secret-dependent leaks in a selected cryptographic implementation (e.g., libsodium's X25519). You then extend the testing by adding a new random input generation strategy or a simple baseline leakage model for comparison. Finally, you report detected leaks and analyze their implications.

**Why it shows you understood the paper:** This project shows you can operate the core testing tool LmTest, understand how it uses LmSpec models to detect leaks, and critically evaluate the results by comparing different input strategies or leakage models.

**Grounded in:** Implementation of LmTest, a testing tool that automatically detects secret-dependent leaks in x86 binaries against arbitrary LmSpec models.

**Tech stack:** Python 3.11, Unicorn CPU emulator, Git, Bash scripting

**Data:** Cryptographic binaries from the authors' case study (e.g., libsodium X25519 implementation) and leakage models from the authors' repository.

**Build it:**

1. Clone and set up the authors' LmTest and LmSpec framework from https://github.com/hw-sw-contracts/leakage-model-testing.
2. Select one cryptographic implementation binary provided or referenced by the authors (e.g., libsodium X25519).
3. Run LmTest with existing leakage and prediction models to reproduce leak detection results.
4. Implement a new random input generation method or a simple baseline leakage model in LmSpec.
5. Run LmTest again with your extension and compare the leak detection results.
6. Write a report summarizing your findings and the impact of input generation or model choice on leak detection.

**Verified links from the paper:**

- <https://github.com/hw-sw-contracts/leakage-model-testing> — released by the paper's authors

**Ships as:** A GitHub repository with your extended LmTest scripts, new input generation or leakage model code, test results, and a detailed README report.

**Stretch goal:** Integrate a visualization of leakage traces or statistical analysis to better illustrate detected leaks.

### Advanced — Extending LmSpec and LmTest to RISC-V Architecture
*Effort: a few weeks (~40+ hours)*

You extend the LmSpec language and LmTest framework to support modeling and testing of microarchitectural leakage on the RISC-V ISA, addressing a limitation noted in the paper about x86 focus. You implement basic leakage and prediction clauses for RISC-V microarchitectural features, run tests on a simple RISC-V cryptographic implementation, and analyze potential leaks.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by adapting the framework to a new architecture, demonstrating deep comprehension of the framework's design and the challenges of microarchitectural leakage modeling across ISAs.

**Grounded in:** The study focuses on x86 binaries and may not generalize directly to other architectures. Future directions include extending LmSpec and LmTest to additional architectures.

**Tech stack:** Python 3.11, Unicorn CPU emulator (RISC-V support), Git, RISC-V toolchain

**Data:** Simple RISC-V cryptographic implementation binaries (publicly available or synthesized) and synthetic leakage models you develop for RISC-V microarchitectural features.

**Build it:**

1. Review the LmSpec and LmTest codebase to understand architecture-specific components.
2. Research RISC-V ISA and available microarchitectural side-channel features relevant for leakage modeling.
3. Extend LmSpec syntax and semantics to support RISC-V instructions and microarchitectural leakage clauses.
4. Modify LmTest to emulate RISC-V binaries using Unicorn with your extended LmSpec models.
5. Obtain or compile a simple RISC-V cryptographic implementation (e.g., AES or X25519).
6. Run your extended LmTest on the RISC-V binary to detect potential side-channel leaks.
7. Document your extension, challenges faced, and analysis of detected leaks in a comprehensive README.

**Verified links from the paper:**

- <https://github.com/hw-sw-contracts/leakage-model-testing> — released by the paper's authors

**Ships as:** A GitHub repository containing your extended LmSpec and LmTest code supporting RISC-V, test results on RISC-V cryptographic binaries, and detailed documentation.

**Stretch goal:** Collaborate with hardware vendors or use open RISC-V microarchitecture simulators to refine leakage models for real hardware features.
