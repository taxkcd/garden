---
title: "800 · LiSB: Lightweight Secure Boot and Attestation Scheme for IoT and Edge Devices — Naghmeh Karimi"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-naghmeh-karimi"
source_hash: "7bce4358df03153c180b26438d92ce3de05be0cb67e1ba0b1e3cbdb6eaabd262"
sequence: 800
generator: "outreach-garden: managed"
---

# 800 · LiSB: Lightweight Secure Boot and Attestation Scheme for IoT and Edge Devices

## At a glance

- **Professor:** Naghmeh Karimi
- **Institution:** Univ. of Maryland - Baltimore County
- **Paper:** [LiSB: Lightweight Secure Boot and Attestation Scheme for IoT and Edge Devices](https://mdsoar.org/bitstreams/0cf839da-d40f-4a64-9c49-3704d315141a/download)
- **Authors:** Mohamed Younis, Mohammad Ebrahimabadi, Suhee Sanjana Mehjabin, Emily Pozniak, Tamim Sookoor, Naghmeh Karimi
- **Year:** 2025

## Paper overview

This paper presents LiSB, a lightweight and robust secure boot and attestation scheme designed for resource-constrained IoT and edge devices. It uses hardware-based Physically Unclonable Functions (PUFs) to generate device-specific digests of boot-up software, ensuring integrity without storing secrets in memory. LiSB is energy-efficient, outperforms existing schemes like TPM, and is resilient against attacks such as impersonation, replay, and PUF modeling.

### Why it matters

**Research problem:** Ensuring the integrity of boot-up software/firmware in resource-constrained IoT and edge devices is challenging due to limitations in power, cost, and size, and the vulnerability of existing attestation schemes to attacks like replay, impersonation, and physical tampering.

**Why it matters:** IoT devices are widely used in critical applications (healthcare, transportation, government) and are vulnerable to malicious software injection and firmware modification, which can lead to severe security breaches, privacy violations, and national security threats.

**Key contributions:**

- Introduction of LiSB, a novel lightweight secure boot and attestation scheme tailored for IoT and edge devices.
- Use of PUFs to generate unique, unpredictable, and unclonable digests without storing secrets in device memory.
- Development of a robust attestation protocol that authenticates verifiers and mitigates replay and impersonation attacks.
- Prototype implementation on FPGA demonstrating low power consumption and hardware overhead.
- Formal security analysis using AVISPA confirming resilience against man-in-the-middle, replay, and impersonation attacks.

## About the professor

**Naghmeh Karimi** — Assistant Professor, Computer Science and Electrical Engineering, Univ. of Maryland - Baltimore County.

Research interests: Hardware Security, Design for Security and Trust, Design for Testability, Design for Reliability and Fault Tolerance, Hardware Design and Synthesis, VLSI, FPGA & ASIC Design, Internet of Things (IOT), Computer Aided Design (CAD)

### Research links

- [Faculty/profile page](https://umbc.edu/academics/faculty/naghmeh-karimi/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Hardware Security and Physically Unclonable Functions
**The paper assumes:** hardware security fundamentals, Physically Unclonable Functions (PUFs), secure boot principles, hardware-based attestation protocols
**Already in this field?** Skip this entirely if you already understand hardware security concepts and the role of PUFs in secure system design.

This background focuses on hardware security with an emphasis on Physically Unclonable Functions (PUFs), which are central to the LiSB scheme's lightweight and secure boot and attestation approach for IoT devices. The rigorous course option provides a structured, in-depth university-level lecture series on hardware security concepts and side-channel protections, while the fast track offers a concise, focused explainer series specifically on PUFs, ideal for quickly grasping the core principles relevant to LiSB. Choose the course for comprehensive understanding and the fast track for a quick, targeted introduction.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Physically Unclonable Function CSRL](https://www.youtube.com/playlist?list=PLcoda8vSJIxes_q2s1b5eYERavSoH8Bp2) — Cyber Security Research Lab · 14 videos · 0.1h across the first 10 episodes

**Watch only this:** Episodes 1-10, about 6 minutes total — these cover PUF basics, IoT applications, and security considerations needed to understand LiSB's use of PUFs.

*Why it unblocks this paper:* This concise playlist from Cyber Security Research Lab focuses specifically on Physically Unclonable Functions, explaining their principles, applications, and security properties, directly aligning with the core mechanism used in LiSB.

*If you want all of it:* All 14 episodes, about 9.5 minutes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the LiSB paper, start by building foundational knowledge on Physically Unclonable Functions (PUFs) as they form the hardware root of trust in LiSB. Next, study secure boot protocols to grasp the integrity guarantees LiSB aims to improve upon. Then, learn about lightweight cryptographic checksum techniques since LiSB uses these instead of heavy hashes for efficiency. Follow this with an exploration of attestation protocols for IoT devices to appreciate the challenges LiSB addresses in preventing replay and impersonation attacks. Finally, focus on the core concept of lightweight secure boot and attestation schemes, culminating in a detailed understanding of LiSB's novel approach.

### Physically Unclonable Functions lecture *(prerequisite)*
Physically Unclonable Functions (PUFs) provide device-specific, unclonable secrets by leveraging manufacturing variations. Understanding PUFs is essential because LiSB uses them as the root of trust to generate unique digests without storing secrets in memory. This section covers the theory, applications, and security considerations of PUFs.

*How the paper uses it:* LiSB employs hardware-based PUFs to generate unpredictable, device-specific digests without storing secrets in memory.

▶ [CERIAS Seminar: Security Applications for Physically Unclonable Functions](https://www.youtube.com/watch?v=ajPlntlsTdk) — Christiaan008 · 53:50 · 15y ago

### Secure boot protocols seminar *(prerequisite)*
Secure boot protocols establish a chain of trust from hardware to firmware to ensure software integrity during boot. Understanding these protocols provides context for LiSB's improvements in lightweight secure boot tailored for resource-constrained IoT devices. This section includes advanced talks on secure boot attacks, TPM, and hardware root of trust.

*How the paper uses it:* LiSB focuses on secure boot integrity and improves upon existing schemes like TPM for IoT and edge devices.

▶ [Alex Matrosov - Modern Secure Boot Attacks - Ekoparty 2019](https://www.youtube.com/watch?v=RDY1pzq2_aU) — Ekoparty Security Conference · 36:29 · 6y ago

### Lightweight cryptographic checksum lecture *(prerequisite)*
LiSB uses lightweight checksum functions instead of computationally expensive cryptographic hashes to generate boot software digests efficiently. This section covers the principles and performance considerations of checksum algorithms relevant to LiSB's design choices.

*How the paper uses it:* LiSB uses lightweight checksum functions to generate digests for boot software modules, enhancing energy efficiency.

▶ [Checksum](https://www.youtube.com/watch?v=AtVWnyDDaDI) — Neso Academy · 9:32 · 6y ago

### Attestation protocols for IoT talk *(prerequisite)*
Remote attestation protocols enable verification of device integrity remotely, which is critical for IoT security. This section explores advanced attestation mechanisms, challenges, and practical implementations, providing insight into the protocol design considerations LiSB addresses to prevent replay and impersonation attacks.

*How the paper uses it:* LiSB develops a robust attestation protocol that authenticates verifiers and mitigates replay and impersonation attacks.

▶ [Remote Attestation of IoT devices using a discrete TPM 2.0 - Dimitar Tomov, Svetlozar Kalchev](https://www.youtube.com/watch?v=2q7-ZC3GbqE) — Linux Plumbers Conference · 28:59 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the LiSB paper, start by learning about Physically Unclonable Functions (PUFs), which form the hardware root of trust enabling device-specific secrets without stored keys. Next, grasp the fundamentals of secure boot protocols to appreciate how boot integrity is ensured in embedded and IoT devices. Then, study lightweight cryptographic checksum techniques that LiSB uses for efficient integrity verification. Finally, explore attestation protocols for IoT devices to understand how LiSB prevents attacks like replay and impersonation, culminating in a focused look at lightweight secure boot and attestation schemes combining these concepts.

### Physically Unclonable Functions lecture *(prerequisite)*
Physically Unclonable Functions (PUFs) exploit inherent manufacturing variations in hardware to generate unique, unclonable device fingerprints without storing secret keys. Understanding PUFs is crucial because they provide the unpredictable, device-specific root of trust that LiSB leverages for secure boot and attestation.

*How the paper uses it:* LiSB uses hardware-based PUFs to generate device-specific digests without storing secrets in memory.

▶ [Physical Unclonable Functions (PUFs) Explained](https://www.youtube.com/watch?v=IAFpTOvK4WM) — Avery Isaiah Johnson · 4:41 · 8y ago

### Secure boot protocols seminar *(prerequisite)*
Secure boot protocols establish a chain of trust during device startup, ensuring only authenticated and untampered software runs. Learning these fundamentals helps you understand the security guarantees LiSB aims to provide for IoT and edge devices.

*How the paper uses it:* LiSB is a secure boot scheme designed to validate boot-up software integrity in resource-constrained devices.

▶ [Secure Boot Explained: The Chain of Trust | Embedded Linux EP01](https://www.youtube.com/watch?v=PL0Bif4vY48) — BSP Blueprint · 4:28 · 3w ago

### Lightweight cryptographic checksum lecture *(prerequisite)*
Lightweight checksums provide efficient integrity verification by computing simple digests of data, consuming less power and resources than heavy cryptographic hashes. This concept is key to LiSB's design, which replaces traditional hashes with lightweight checksums for energy efficiency.

*How the paper uses it:* LiSB uses lightweight checksum functions instead of heavy cryptographic hashes to generate boot software digests efficiently.

▶ [Checksum](https://www.youtube.com/watch?v=AtVWnyDDaDI) — Neso Academy · 9:32 · 6y ago

### Attestation protocols for IoT talk *(prerequisite)*
Attestation protocols enable a device to prove its software integrity to a remote verifier, protecting against attacks like replay and impersonation. Understanding these protocols is essential to grasp how LiSB authenticates devices securely in IoT environments.

*How the paper uses it:* LiSB develops a robust attestation protocol that authenticates verifiers and mitigates replay and impersonation attacks.

▶ [LPC2019 - What does remote attestation buy you?](https://www.youtube.com/watch?v=c-e7dm2aGBg) — Linux Plumbers Conference · 44:10 · 6y ago

### Lightweight secure boot and attestation scheme
This concept integrates PUFs, lightweight checksums, and attestation protocols into a cohesive secure boot scheme tailored for constrained IoT devices. It highlights LiSB's novel approach to balancing security, efficiency, and practicality.

*How the paper uses it:* LiSB presents a novel lightweight secure boot and attestation scheme combining PUFs and lightweight checksums for IoT and edge devices.

▶ [🔒 Secure Boot Explained | Cryptography | Trust Chain | Key Management | Firmware | Interview](https://www.youtube.com/watch?v=h-T-aSsu0mc) — Tech-AD-venture · 39:31 · 10mo ago

## Already in your library

- [Top 10 Secure Boot Mistakes | Jasper Van Woudenberg | hardwear.io USA 2019](https://www.youtube.com/watch?v=B9J8qjuxysQ) — also for: A Stateless Transparent Voting Machine (Juan E. Gilbert)
- [What is Secure Boot - Simple Explanation](https://www.youtube.com/watch?v=zGmU9iXg7Z4) — also for: A Stateless Transparent Voting Machine (Juan E. Gilbert)
- [#37 PUF | Part 1 | Information Security 5 Secure Systems Engineering](https://www.youtube.com/watch?v=woEUksF7R9o) — also for: Security Enclave Architecture for Heterogeneous Security Primitives for Supply-Chain Attacks (Patanjali SLPSK)
- [Lec-28: Introduction to Error detection and Correction | Computer Networks](https://www.youtube.com/watch?v=U7-h2hyM1Dc) — also for: Anchoring Whole-System Persistence and Resilience in CXL (Jianping Zeng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of LiSB, a lightweight secure boot and attestation scheme for IoT devices. Starting with a simple simulation of PUF-based digest generation, you then reimplement the core attestation protocol and compare its efficiency against a baseline. Finally, you explore an advanced extension addressing LiSB's limitation by designing a runtime application-level attestation prototype for devices without integrated PUFs.

### Beginner — Simulate PUF-Based Device-Specific Digest Generation
*Effort: a weekend, ~8 hours*

You build a software simulation that mimics the generation of device-specific digests using Physically Unclonable Functions (PUFs) combined with lightweight checksum functions. This project models how LiSB avoids storing secrets in memory by producing unique digests per device at boot time.

**Why it shows you understood the paper:** This project demonstrates your grasp of LiSB's core hardware-rooted trust mechanism and how PUFs contribute to secure boot integrity without secret storage, a key innovation of the paper.

**Grounded in:** Use of PUFs to generate unique, unpredictable, and unclonable digests without storing secrets in device memory.

**Tech stack:** Python 3.11

**Data:** Simulated PUF challenge-response pairs generated programmatically to represent device uniqueness.

**Build it:**

1. Implement a function to simulate PUF challenge-response behavior with noise tolerance.
2. Develop a lightweight checksum function to compute digests from simulated boot software data.
3. Combine simulated PUF outputs with checksum results to produce device-specific digests.
4. Create a simple CLI or script to demonstrate digest generation for multiple simulated devices.
5. Document the approach and explain how this simulates LiSB's PUF-based digest generation.

**Ships as:** A Python repository with code and README showing simulated PUF digest generation and explanation of its security relevance.

**Stretch goal:** Add noise modeling to simulate PUF variability and demonstrate error correction or tolerance.

### Intermediate — Reimplement LiSB Attestation Protocol and Compare Power Efficiency
*Effort: 1-3 weekends*

You reimplement the core LiSB attestation protocol in software, including verifier-specific challenges and obfuscation to prevent replay and impersonation attacks. You then compare its computational efficiency and estimated power consumption against a SHA-256 based attestation baseline.

**Why it shows you understood the paper:** This project proves you understand LiSB's novel attestation protocol design and its lightweight nature, as well as how it achieves significant power savings over traditional cryptographic schemes.

**Grounded in:** Development of a robust attestation protocol that authenticates verifiers and mitigates replay and impersonation attacks; LiSB consumes 25 times less power than SHA-256 based attestation schemes.

**Tech stack:** Python 3.11, GitHub Actions (optional for CI)

**Data:** No external dataset needed; simulated boot software digests and challenge-response interactions based on the paper's protocol description.

**Build it:**

1. Study the LiSB attestation protocol steps and model them in Python, including PUF digest simulation from the beginner project.
2. Implement verifier-specific challenge generation and obfuscation logic.
3. Implement a SHA-256 based attestation baseline for comparison.
4. Measure and compare runtime and approximate power consumption (e.g., CPU time, energy profiling tools) for both protocols.
5. Write a report summarizing the efficiency gains and security features demonstrated.

**Verified links from the paper:**

- <https://github.com/SS-Mehjabin/LiSB.git> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing LiSB and SHA-256 attestation protocols, efficiency comparison results, and a README explaining the findings.

**Stretch goal:** Integrate formal verification tools or lightweight symbolic checks to validate protocol correctness.

### Advanced — Prototype Runtime Application-Level Attestation Without PUF Hardware
*Effort: a few weeks*

You design and implement a prototype attestation scheme extending LiSB principles to runtime application integrity verification on IoT devices lacking integrated PUF hardware. This involves creating a software-based root of trust and adapting the attestation protocol to support application-level checks.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of LiSB, demonstrating your ability to extend the scheme beyond boot-time and hardware constraints, and to innovate on lightweight attestation for constrained devices.

**Grounded in:** LiSB focuses on boot-up software/firmware integrity and requires hardware integration of PUFs; future directions include extending LiSB to application-level attestation and adapting to devices without PUFs.

**Tech stack:** Python 3.11, FastAPI, TypeScript, React

**Data:** Simulated application code states and attestation challenges generated in software; no real IoT hardware required.

**Build it:**

1. Research software-based roots of trust and lightweight attestation methods applicable without PUFs.
2. Design a protocol inspired by LiSB's verifier-specific challenges and obfuscation for runtime attestation.
3. Implement a prototype backend service (e.g., FastAPI) to act as verifier and a client simulating an IoT device runtime environment.
4. Develop frontend UI (React) to visualize attestation status and logs.
5. Test the prototype with simulated application state changes and verify attestation correctness and resistance to replay/impersonation.
6. Document design decisions, limitations, and how this addresses LiSB's limitations.

**Ships as:** A full-stack GitHub repository with backend and frontend code demonstrating runtime attestation without PUFs, plus documentation linking to LiSB's concepts and limitations.

**Stretch goal:** Explore integration with microcontroller simulators or hardware-in-the-loop testing for more realistic evaluation.
