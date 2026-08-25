---
title: "497 · Security Enclave Architecture for Heterogeneous Security Primitives for Supply-Chain Attacks — Patanjali SLPSK"
date: 2026-08-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-patanjali-slpsk"
source_hash: "60ad755389c122892b50b54414289e006a19af9ec0f6d768517323d7efb258b0"
sequence: 497
generator: "outreach-garden: managed"
---

# 497 · Security Enclave Architecture for Heterogeneous Security Primitives for Supply-Chain Attacks

## At a glance

- **Professor:** Patanjali SLPSK
- **Institution:** Augusta University
- **Paper:** [Security Enclave Architecture for Heterogeneous Security Primitives for Supply-Chain Attacks](https://arxiv.org/pdf/2507.10971)
- **Authors:** Kshitij Raj, Atri Chatterjee, Patanjali SLPSK, Swarup Bhunia, Sandip Ray
- **Year:** 2025

## Paper overview

This paper presents CITADEL, a modular and configurable security architecture designed to protect system-on-chip (SoC) designs against various supply-chain attacks such as counterfeiting, reverse engineering, and illegal recycling. CITADEL integrates multiple security primitives like Physical Unclonable Functions (PUFs) and design obfuscation into a unified framework that manages security throughout the SoC lifecycle with minimal hardware overhead.

### Why it matters

**Research problem:** How to design a systematic, configurable, and efficient security architecture for SoCs that integrates heterogeneous security primitives to protect against diverse supply-chain threats across the entire device lifecycle.

**Why it matters:** Globalized SoC supply chains involve multiple untrusted entities that can implant malicious hardware, reverse engineer designs, produce counterfeit chips, or illegally recycle devices, threatening the security and integrity of hardware products. Existing solutions often target specific threats without a unified architectural framework, making comprehensive protection challenging.

**Key contributions:**

- First comprehensive, parameterized SoC security architecture enabling systematic integration of heterogeneous security primitives for supply-chain protection.
- Development of a detailed threat model covering multiple SoC lifecycle stages and adversaries.
- Design of a modular skeletal architecture with a compute enclave, security wrappers, and secure off-chip communication.
- Demonstration of CITADEL’s applicability through case studies addressing counterfeiting, reverse engineering, and illegal recycling.
- Evaluation showing minimal silicon area and power overhead, making CITADEL practical for low-power SoCs.

## About the professor

**Patanjali SLPSK** — Assistant Professor, Department of Cybersecurity Engineering, Augusta University.

Research interests: AI for System Design, AI for Hardware Security, Cybersecurity for AI

### Research links

- [Faculty/profile page](https://patanjali.github.io)
- [Resolved homepage](https://patanjali.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Hardware Security and Physical Unclonable Functions
**The paper assumes:** hardware security principles, Physical Unclonable Functions (PUFs), design obfuscation techniques, secure SoC architectures
**Already in this field?** Skip this entirely if you already understand hardware security fundamentals, PUFs, and design obfuscation methods used in SoC protection.

To understand the CITADEL architecture for securing SoCs against supply-chain attacks, a solid grasp of hardware security concepts—especially Physical Unclonable Functions (PUFs) and design obfuscation—is essential. The rigorous course option provides a deep, structured university-level lecture series on hardware security fundamentals, while the fast track offers a concise, focused playlist on PUFs to quickly build intuition and foundational knowledge. Choose the course for comprehensive coverage; choose the fast track for a quicker, targeted introduction.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [NOC Jan 2019: Hardware Security](https://www.youtube.com/playlist?list=PLbRMhDVUMngfulSvKL0cT-tn8ULtERsWk) — NPTEL IIT Kharagpur · 61 videos · 29.6h across the first 60 episodes

**Watch only this:** Lectures 1-3 (Introduction to Hardware Security Part I & II, Algorithm to Hardware), about 1.5 hours — these cover the basics of hardware security concepts and cryptographic foundations relevant to PUFs and SoC security.

*Why it unblocks this paper:* This NPTEL IIT Kharagpur course on Hardware Security covers foundational concepts including cryptography, side-channel attacks, and hardware security primitives, providing the rigorous background needed to understand the integration of PUFs and security modules in CITADEL.

*If you want all of it:* About 29.6 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Physically Unclonable Functions](https://www.youtube.com/playlist?list=PL_0VKNIi4SHuHniRkgLuMBiZlMaxJty99) — Ben Sooter · 8 videos · 1.8h across the first 6 episodes

**Watch only this:** First 4 episodes (ICTK PUF Physical Unclonable Function for IoT, Physical Unclonable Functions (PUFs) Explained, PUFs, protection, privacy, PRNGs (33c3), Chongyan Gu - Physical Unclonable Functions PUFs for Smart Meter Security), about 1.2 hours — these provide a focused introduction to PUF technology and its security applications.

*Why it unblocks this paper:* This concise playlist by Ben Sooter focuses specifically on Physical Unclonable Functions, explaining their principles, applications, and security relevance, which directly supports understanding the PUF-based chip identification and security primitives in CITADEL.

*If you want all of it:* About 1.8 hours across the first 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To thoroughly understand the CITADEL architecture for heterogeneous security primitives in SoCs, start with foundational knowledge on Physical Unclonable Functions (PUFs) and design obfuscation techniques, as these are key security primitives integrated in CITADEL. Next, build understanding of System-on-Chip (SoC) security architectures and secure device lifecycle management, which underpin the architectural and lifecycle aspects of CITADEL. Finally, study the core concept of modular security enclave architectures, culminating in the authors' own talk or the closest high-quality substitute presenting the CITADEL architecture itself.

### Physical Unclonable Functions lecture *(prerequisite)*
PUFs are fundamental hardware security primitives that generate unique device fingerprints based on intrinsic physical variations. Understanding PUFs is essential to grasp how CITADEL achieves chip identification and authentication with minimal overhead. The NPTEL-NOC IITM lecture series provides a rigorous, university-level treatment of PUF concepts, designs, and applications.

*How the paper uses it:* CITADEL integrates PUF-based chip identification as a core security primitive for supply-chain protection.

▶ [#37 PUF | Part 1 | Information Security 5 Secure Systems Engineering](https://www.youtube.com/watch?v=woEUksF7R9o) — NPTEL-NOC IITM · 18:06 · 7 years ago

### Design obfuscation techniques seminar *(prerequisite)*
Design obfuscation protects hardware intellectual property against reverse engineering by making the design difficult to analyze or replicate. This seminar from UCL Information Security Research Group offers an advanced, research-focused perspective on hardware obfuscation and reverse engineering challenges, aligning well with CITADEL's use of obfuscation primitives.

*How the paper uses it:* CITADEL incorporates design obfuscation primitives like ProtectIP to defend against reverse engineering threats.

▶ [Towards Cognitive Obfuscation - Understanding Cognitive Processes of Hardware Reverse Engineers](https://www.youtube.com/watch?v=sPp-65h8lCE) — UCL Information Security Research Group · 50:27 · Streamed 5 years ago

### System on Chip security architecture lecture *(prerequisite)*
A solid understanding of SoC architectures and their security challenges is critical to appreciate CITADEL's modular and lifecycle-aware design. The IIT Madras lecture on SoC architecture fundamentals provides a detailed academic treatment suitable for advanced readers.

*How the paper uses it:* CITADEL is a modular SoC security architecture integrating heterogeneous primitives for supply-chain attack protection.

▶ [L51: SoC: architecture fundamentals](https://www.youtube.com/watch?v=y4bEOS9viu8) — IIT Madras - BS in Electronic Systems · 25:56 · 1 year ago

### Secure device lifecycle management talk *(prerequisite)*
Device lifecycle management ensures security policies and asset management persist across manufacturing, deployment, and end-of-life stages. The Secure Systems Research Group's SELIoT project talk offers a research-level overview of lifecycle security in IoT devices, relevant to CITADEL's lifecycle management features.

*How the paper uses it:* CITADEL provides explicit architectural support for secure device lifecycle transitions and asset management.

▶ [SELIoT: Securing the Lifecycle of IoT devices](https://www.youtube.com/watch?v=nsWZEfk479M) — Secure Systems Research Group · 13:34 · 8 years ago

### Modular security enclave architecture lecture
Understanding modular security enclave architectures is central to grasping CITADEL's skeletal framework that integrates heterogeneous security primitives. The Black Hat talk 'Demystifying the Secure Enclave Processor' offers an in-depth, expert-level explanation of secure enclave processors, which closely parallels CITADEL's compute enclave concept.

*How the paper uses it:* CITADEL's core innovation is a modular skeletal security architecture with a compute enclave orchestrating security primitives.

▶ [Demystifying the Secure Enclave Processor](https://www.youtube.com/watch?v=7UNeUT_sRos) — Black Hat · 47:39 · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the CITADEL security enclave architecture for protecting SoCs against supply-chain attacks, start by learning the basics of System on Chip (SoC) architectures to grasp the hardware context. Then, build foundational knowledge of key security primitives like Physical Unclonable Functions (PUFs) and design obfuscation, which CITADEL integrates. Next, explore secure device lifecycle management concepts that underpin CITADEL’s protection across the chip’s lifespan. Finally, study modular security enclave architectures to see how CITADEL unifies these elements into a configurable framework.

### System on Chip security architecture lecture *(prerequisite)*
System on Chip (SoC) designs integrate multiple components like processors, memory, and peripherals on a single chip. Understanding SoC architecture fundamentals helps you appreciate the hardware environment where security mechanisms like CITADEL operate.

*How the paper uses it:* CITADEL is designed as a modular security architecture integrated within SoC designs to protect against supply-chain threats.

▶ [L51: SoC: architecture fundamentals](https://www.youtube.com/watch?v=y4bEOS9viu8) — IIT Madras - BS in Electronic Systems · 25:56 · 1 year ago

### Physical Unclonable Functions lecture *(prerequisite)*
Physical Unclonable Functions (PUFs) exploit manufacturing variations to generate unique, unclonable identifiers for chips. Learning about PUFs provides insight into how CITADEL uses them for chip identification and authentication.

*How the paper uses it:* CITADEL integrates PUF-based chip identification (MeLPUF) as a core security primitive for supply-chain protection.

▶ [#37 PUF | Part 1 | Information Security 5 Secure Systems Engineering](https://www.youtube.com/watch?v=woEUksF7R9o) — NPTEL-NOC IITM · 18:06 · 7 years ago

### Design obfuscation techniques seminar *(prerequisite)*
Design obfuscation techniques make hardware designs harder to reverse engineer by hiding or complicating the internal logic. Understanding these methods clarifies how CITADEL protects intellectual property against reverse engineering attacks.

*How the paper uses it:* CITADEL incorporates design obfuscation (ProtectIP) to defend against reverse engineering threats in the supply chain.

▶ [Towards Cognitive Obfuscation - Understanding Cognitive Processes of Hardware Reverse Engineers](https://www.youtube.com/watch?v=sPp-65h8lCE) — UCL Information Security Research Group · 50:27 · Streamed 5 years ago

### Secure device lifecycle management talk *(prerequisite)*
Device lifecycle management involves securing a device from manufacturing through deployment to end-of-life, including provisioning, authentication, and asset tracking. This knowledge is essential to understand how CITADEL manages security across the SoC lifecycle.

*How the paper uses it:* CITADEL provides explicit architectural support for secure device lifecycle management, enabling secure provisioning and lifecycle transitions.

▶ [SELIoT: Securing the Lifecycle of IoT devices](https://www.youtube.com/watch?v=nsWZEfk479M) — Secure Systems Research Group · 13:34 · 8 years ago

### Modular security enclave architecture lecture
Modular security enclave architectures isolate security functions within a dedicated processor or module, enabling flexible integration of security primitives. This concept is key to understanding CITADEL’s skeletal architecture that orchestrates heterogeneous security mechanisms.

*How the paper uses it:* CITADEL’s core innovation is a modular skeletal security enclave integrating heterogeneous primitives via standardized wrappers.

▶ [Demystifying the Secure Enclave Processor](https://www.youtube.com/watch?v=7UNeUT_sRos) — Black Hat · 47:39 · 9 years ago

### CITADEL architecture talk *(the paper's own talk)*
A direct presentation by security researchers on CITADEL offers the most precise and detailed explanation of the architecture, design choices, and security features. Watching this talk consolidates understanding of the entire system.

*How the paper uses it:* This talk provides an overview and deep dive into CITADEL’s architecture and its integration of security primitives for supply-chain protection.

▶ [CS17: Security Architecture & Design | Secure Hardware Architecture |Secure software architecture](https://www.youtube.com/watch?v=5PBabNKsakg) — University Academy · 15:44 · 7 years ago

## Already in your library

- [Discussing System On Chip (SoC) - Computerphile](https://www.youtube.com/watch?v=0MLaYe3y0BU) — also for: SRAM Has No Chill: Exploiting Power Domain Separation to Steal On-Chip Secrets (Matthew Hicks)
- [System on Chip (SoC) Explained](https://www.youtube.com/watch?v=FUhCrWoNA2c) — also for: PAI: Fast, Accurate, and Full Benchmark Performance Projection with AI (Abdullah Muzahid)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the CITADEL architecture for SoC supply-chain security. The beginner project focuses on simulating a core security primitive (PUF) in software to grasp chip identification concepts. The intermediate project involves reimplementing a simplified modular security enclave framework that integrates PUF and design obfuscation primitives, showing lifecycle management and secure communication. The advanced project extends CITADEL by exploring AI-driven anomaly detection within the compute enclave to address a future direction proposed by the paper.

### Beginner — Simulate a Physical Unclonable Function (PUF) for Chip Identification
*Effort: a weekend, ~8 hours*

You build a software simulation of a simple PUF mechanism that generates unique chip IDs based on simulated physical variations. This project involves creating a reproducible challenge-response system that mimics the MeLPUF concept described in the paper.

**Why it shows you understood the paper:** This project demonstrates your grasp of one of the fundamental security primitives integrated in CITADEL for chip identification and anti-counterfeiting, showing you understand how unique hardware fingerprints can be generated and verified.

**Grounded in:** Effective generation and secure communication of unique ChipIDs using distributed MeLPUF cells.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** No external data needed; you simulate PUF challenge-response pairs with random noise to mimic physical variations.

**Build it:**

1. Implement a function that simulates a PUF challenge-response behavior with noise to represent physical uniqueness.
2. Generate multiple challenge-response pairs and store them as a chip's unique fingerprint.
3. Create a verification function that matches a given challenge-response pair against stored fingerprints with a tolerance for noise.
4. Demonstrate uniqueness and reproducibility by simulating multiple chips and showing distinct IDs.
5. Document the simulation approach and relate it to MeLPUF as described in the paper.

**Ships as:** A Jupyter Notebook demonstrating PUF simulation, generation of unique chip IDs, and verification logic, with explanations linking to the paper's MeLPUF primitive.

**Stretch goal:** Add a simple web UI using Streamlit or Flask to input challenges and display chip ID verification results interactively.

### Intermediate — Implement a Modular Security Enclave Framework with PUF and Design Obfuscation
*Effort: 2 weekends, ~20 hours*

You build a simplified modular security enclave framework in software that mimics CITADEL's skeletal architecture. It integrates a simulated PUF module for chip identification and a design obfuscation key manager. The enclave manages secure provisioning, attestation, and lifecycle state transitions, communicating securely with a mock external Asset Management Infrastructure (AMI).

**Why it shows you understood the paper:** This project shows you can reimplement the core architectural concept of CITADEL, including modular integration of heterogeneous security primitives and lifecycle management, demonstrating comprehension of the paper's main contribution.

**Grounded in:** First comprehensive, parameterized SoC security architecture enabling systematic integration of heterogeneous security primitives for supply-chain protection; Lifecycle management enabling secure transitions from fabrication to end-of-life with asset purging and authentication.

**Tech stack:** Python 3.11, FastAPI, SQLite, Docker

**Data:** Simulated PUF challenge-response data from the beginner project; design obfuscation keys generated randomly in software.

**Build it:**

1. Design a modular Python application representing the compute enclave with plug-and-play security primitive modules.
2. Implement a PUF module using the simulation from the beginner project for chip identification.
3. Implement a design obfuscation key manager module that securely stores and enforces obfuscation keys.
4. Create lifecycle management logic supporting provisioning, attestation, and state transitions (e.g., fabrication, deployment, end-of-life).
5. Develop a mock AMI server using FastAPI to simulate secure off-chip communication and asset metadata management.
6. Demonstrate secure communication protocols between enclave and AMI, including mutual authentication.
7. Document the architecture, modules, and lifecycle flows, relating each to CITADEL's framework.

**Ships as:** A Dockerized Python project with modular enclave components, a mock AMI server, and a README explaining the architecture and lifecycle management aligned with CITADEL.

**Stretch goal:** Add logging and simple metrics to measure overhead (e.g., simulated latency or resource usage) to compare with the paper's minimal overhead claims.

### Advanced — Extend CITADEL with AI-Driven Anomaly Detection in the Compute Enclave
*Effort: 3+ weeks*

You develop an extension to the modular security enclave framework that integrates an AI-driven anomaly detection module running inside the compute enclave. This module monitors simulated SoC lifecycle events and security primitive outputs to detect suspicious patterns or potential attacks in real-time, addressing the paper's future direction of integrating AI for adaptive security policies.

**Why it shows you understood the paper:** This project tackles a stated future direction by combining AI with CITADEL's modular architecture, demonstrating deep understanding of both the paper's framework and the challenges of real-time threat mitigation in SoC security.

**Grounded in:** Exploring migration of system firmware authentication into CITADEL enclave for stronger boot security; Extending CITADEL to cover more use cases and broader threat models including integrity and fault attacks; Given CITADEL’s modular architecture, how do you envision integrating AI-driven anomaly detection or adaptive security policies within the compute enclave to enhance real-time threat mitigation across the SoC lifecycle?

**Tech stack:** Python 3.11, FastAPI, PyTorch, scikit-learn, Docker

**Data:** Simulated SoC lifecycle event logs and PUF responses generated from the intermediate project; synthetic anomaly injection to simulate attacks.

**Build it:**

1. Extend the modular enclave framework to include an AI anomaly detection module that consumes lifecycle event data and security primitive outputs.
2. Collect and preprocess simulated event logs and PUF data, injecting synthetic anomalies representing supply-chain attacks or lifecycle violations.
3. Train a lightweight machine learning model (e.g., autoencoder or isolation forest) to detect anomalies in the enclave environment.
4. Integrate the trained model into the enclave to perform real-time anomaly detection and trigger adaptive security responses.
5. Implement a dashboard or API endpoint to report detected anomalies and enclave status.
6. Evaluate detection performance on simulated normal and attack scenarios, documenting results and limitations.
7. Write a detailed README discussing how this extension addresses the paper's future directions and limitations.

**Ships as:** A Dockerized modular enclave framework with AI anomaly detection, example datasets, evaluation scripts, and comprehensive documentation linking to CITADEL's architecture and future work.

**Stretch goal:** Explore federated learning approaches to update anomaly detection models securely across multiple devices without exposing sensitive data.
