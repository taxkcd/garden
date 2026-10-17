---
title: "729 · Designing Trustworthy Layered Attestations — Perry Alexander"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-perry-alexander"
source_hash: "755bdfeec0ef7d816f017f86600dab3330e0026fe78b122882e7159fca9cf0d9"
sequence: 729
generator: "outreach-garden: managed"
---

# 729 · Designing Trustworthy Layered Attestations

## At a glance

- **Professor:** Perry Alexander
- **Institution:** University of Kansas
- **Paper:** [Designing Trustworthy Layered Attestations](https://arxiv.org/pdf/2603.06326)
- **Authors:** Will Thomas, Perry Alexander, Logan Schmalz, Joshua D. Guttman, James Carter, Adam Petz, Paul D. Rowe
- **Year:** 2026

## Paper overview

This paper addresses the challenge of providing trustworthy evidence (attestations) that a remote system is secure and trustworthy for sensitive operations. It proposes a layered approach to attestation that combines hardware and software mechanisms, such as Trusted Platform Modules (TPMs), Linux with SELinux, and runtime integrity measurement tools, to reliably detect and report system compromises. The authors demonstrate their approach with a concrete example system called a Cross-Domain Solution (CDS) and provide design principles (maxims) to guide the construction of layered attestation systems. They also evaluate their design empirically and formally, and suggest improvements for future systems.

### Why it matters

**Research problem:** How to design effective, trustworthy layered attestation mechanisms that provide reliable evidence of a system's trustworthy state despite advanced adversaries capable of corrupting software components, including the kernel, and how to structure systems so that attestation evidence is meaningful and robust.

**Why it matters:** Attestation is critical for ensuring that sensitive information is only shared with systems that can be trusted not to mishandle or leak it. Existing attestation mechanisms are often shallow, untimely, or fragile, making it possible for adversaries to evade detection. Reliable attestation mechanisms are essential for security management, network access control, and trusted execution environments, especially as systems face sophisticated attacks.

**Key contributions:**

- Identification of a strong adversary model capturing realistic threats against Linux systems with SELinux and IMA.
- Empirical and formal evidence showing the designed mechanisms can detect or defend against these threats, winning the attestation game.
- Formulation of five reusable design maxims for trustworthy layered attestation systems.
- Demonstration of the maxims' applicability to multiple system variants, including confidential computing environments.
- Two actionable recommendations to improve Linux kernel and system architectures to better support trustworthy attestation.

## About the professor

**Perry Alexander** — AT&T Foundation Distinguished Professor, Electrical and Computer Science, University of Kansas.

Research interests: formal verification and synthesis, trusted systems, and programming language semantics

### Research links

- [Faculty/profile page](http://perry.alexander.name)
- [ORCID](https://orcid.org/0000-0002-5387-9157)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Trusted Computing and Attestation
**The paper assumes:** trusted computing principles, hardware roots of trust, attestation protocols, Linux security modules (SELinux, IMA), and runtime integrity measurement
**Already in this field?** Skip this entirely if you already understand the fundamentals of trusted computing architectures and attestation mechanisms including TPM, SELinux, and integrity measurement frameworks.

To understand the foundational concepts and mechanisms behind trustworthy layered attestations as presented in the paper, it is essential to grasp trusted computing principles, including TPMs, SELinux, IMA, and attestation protocols. The rigorous course offers a deep, structured university-level treatment of trusted computing and security principles, while the fast track provides a concise, focused introduction to TPM usage and attestation concepts for quicker comprehension. Choose the rigorous course for thorough understanding and the fast track for a practical, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [ACM - Bangalore](https://www.youtube.com/playlist?list=PLPeEbErKGwN2dCQcLouJPkyWM7D_o3o-o) — NPTEL - Special Lecture Series · 7 videos · 5.5h across 7 episodes

**Watch only this:** Episodes 2 and 3: 'Trusted Computing' and 'Security Gap Analysis II', about 1.5 hours total — these cover the core trusted computing concepts and security challenges necessary to understand layered attestation mechanisms.

*Why it unblocks this paper:* This NPTEL Special Lecture Series covers trusted computing and related security principles in a university-level format, providing foundational knowledge on trusted computing architectures and security policies relevant to layered attestations.

*If you want all of it:* All 7 episodes, about 5.5 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Trusted Computing 1102: Intermediate Trusted Platform Modules (TPMs) usage](https://www.youtube.com/playlist?list=PLUFkSN0XLZ-kB-kz3lW6yoncGI5M_YjPb) — OpenSecurityTraining2 · 19 videos · 3.5h across 19 episodes

**Watch only this:** Lectures A, C Part 1, and C Part 2, about 33 minutes total — these cover TPM basics and platform configuration registers essential for understanding attestation evidence.

*Why it unblocks this paper:* This OpenSecurityTraining2 series provides a focused, intermediate-level introduction to TPM usage and attestation concepts, directly relevant to the hardware roots of trust and attestation mechanisms discussed in the paper, in a concise format.

*If you want all of it:* All 19 episodes, about 3.5 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Designing Trustworthy Layered Attestations,' start with foundational knowledge of the hardware root of trust via Trusted Platform Modules (TPM), followed by kernel-level security policies enforced by SELinux, and runtime integrity measurement techniques that detect system compromises during operation. Finally, focus on the paper's core concept of layered attestation systems, culminating with the authors' own detailed presentation of their work, which ties all these components together into a coherent trustworthy attestation design.

### Trusted Platform Module (TPM) *(prerequisite)*
Understanding TPM is essential as it forms the hardware root of trust foundational to the layered attestation system proposed in the paper. The selected video provides a rigorous, university-level introduction to TPM technology, its role in secure computing, and its practical implications.

*How the paper uses it:* TPM is a critical hardware root of trust component in the paper's layered attestation design.

▶ [Introduction to Trusted Platform Modules (TPMs) TC1101 Lecture A](https://www.youtube.com/watch?v=PW7WSXFzeJg) — OpenSecurityTraining2 · 17:04 · 2y ago

### SELinux and Linux security policies *(prerequisite)*
SELinux enforces mandatory access control policies at the kernel level, which are vital for maintaining system integrity and limiting adversary impact as described in the paper. The chosen video is a comprehensive university-level lecture that covers SELinux architecture and policy enforcement in depth, suitable for advanced readers.

*How the paper uses it:* SELinux policies are a key software mechanism ensuring integrity constraints in the layered attestation system.

▶ [Session-87 | SELINUX Part-1 | Introduction To Security Enhanced Linux (SELinux) | Nehra Classes](https://www.youtube.com/watch?v=aqPOp521VFA) — Nehra Classes · 1:03:30 · Streamed 4y ago

### Runtime integrity measurement *(prerequisite)*
Runtime integrity measurement tools detect system compromises during operation, a core aspect of the paper's approach to layered attestation. The selected talk is a detailed conference presentation on Linux kernel runtime integrity techniques, providing advanced insights into mechanisms like LKIM relevant to the paper.

*How the paper uses it:* Runtime integrity measurement tools like LKIM are integral to detecting compromises in the paper's attestation system.

▶ [CONFidence 2018: Linux Kernel Runtime Guard (LKRG) under the hood (Adam "pi3" Zabrocki)](https://www.youtube.com/watch?v=tOiPM692DOM) — PROIDEA Events · 56:13 · 8y ago

### Layered attestation systems
This concept is central to the paper, combining hardware and software mechanisms to provide trustworthy evidence of system integrity. The chosen video is the authors' own recorded talk, offering direct insights into their design, adversary model, empirical evaluation, and formal verification efforts, making it the most authoritative and relevant resource.

*How the paper uses it:* The paper's core contribution is the design and evaluation of a layered attestation system demonstrated on a Cross-Domain Solution.

▶ [Layered Attestation of a Cross-Domain System - Perry Alexander, University of Kansas](https://www.youtube.com/watch?v=3evdvaB5Le0) — The Linux Foundation · 58:50 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Designing Trustworthy Layered Attestations,' start by learning the foundational hardware security concept of the Trusted Platform Module (TPM), which forms the hardware root of trust. Next, build knowledge of SELinux and Linux security policies that enforce kernel-level security critical for attestation integrity. Then, explore runtime integrity measurement tools that detect compromises during system operation. Finally, grasp the core concept of layered attestation systems that combine these mechanisms to provide trustworthy evidence of system integrity.

### Trusted Platform Module (TPM) *(prerequisite)*
TPM is a specialized hardware chip that securely stores cryptographic keys and measurements, forming a hardware root of trust. It enables systems to prove their integrity by securely reporting their state, which is foundational for trustworthy attestation.

*How the paper uses it:* The paper uses TPM as the hardware root of trust to anchor layered attestation mechanisms.

▶ [TPM (Trusted Platform Module) - Computerphile](https://www.youtube.com/watch?v=RW2zHvVO09g) — Computerphile · 13:11 · 5y ago

### SELinux and Linux security policies *(prerequisite)*
SELinux is a Linux kernel security module that enforces mandatory access control policies, restricting how processes interact with system resources. This enforces strict separation and integrity constraints critical to limiting adversary impact in attestation.

*How the paper uses it:* SELinux policies are used in the paper to enforce kernel-level security constraints essential for trustworthy layered attestation.

▶ [SELinux in Linux [HINDI] | MPrashant](https://www.youtube.com/watch?v=DS-HpSlqfAc) — M Prashant · 22:45 · 3y ago

### Runtime integrity measurement *(prerequisite)*
Runtime integrity measurement tools monitor the system during operation to detect unauthorized changes or compromises, providing timely evidence of system integrity beyond boot-time checks.

*How the paper uses it:* The paper employs runtime integrity measurement tools like LKIM to detect kernel compromises during system operation.

▶ [CONFidence 2018: Linux Kernel Runtime Guard (LKRG) under the hood (Adam "pi3" Zabrocki)](https://www.youtube.com/watch?v=tOiPM692DOM) — PROIDEA Events · 56:13 · 8y ago

### Layered attestation systems
Layered attestation systems combine hardware roots of trust, kernel security policies, and runtime measurements to provide comprehensive, trustworthy evidence of a system's secure state.

*How the paper uses it:* The paper's core contribution is designing and evaluating a layered attestation system combining TPM, SELinux, IMA, and LKIM.

▶ [Layered Attestation of a Cross-Domain System - Perry Alexander, University of Kansas](https://www.youtube.com/watch?v=3evdvaB5Le0) — The Linux Foundation · 58:50 · 1y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and demonstrate key aspects of trustworthy layered attestation as presented in the paper. The beginner project focuses on reproducing a core attestation concept using familiar tools, the intermediate project involves reimplementing the layered attestation approach with runtime integrity measurement and policy enforcement, and the advanced project tackles one of the paper's future directions by exploring virtualization-based isolation for kernel integrity measurement.

### Beginner — Simulate Layered Attestation with TPM and SELinux Policies
*Effort: a weekend, ~8 hours*

You build a simplified simulation of layered attestation by combining TPM-based system state assertions with SELinux policy enforcement on a Linux VM or container. The project involves scripting TPM quote generation and verifying SELinux policy status to produce a basic attestation report.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core concept of layered attestation combining hardware roots of trust (TPM) with kernel-level security policies (SELinux). A professor would see you understand how these layers contribute to trustworthy evidence of system integrity.

**Grounded in:** Key contribution: Identification of a strong adversary model capturing realistic threats against Linux systems with SELinux and TPM; Key result: The attestation system based on TPM and SELinux can reliably attest to system integrity.

**Tech stack:** Linux (Ubuntu or Fedora), Bash scripting, TPM2 tools (tpm2-tools), SELinux utilities (setools, sestatus)

**Data:** No external dataset needed; use a local Linux VM or container with TPM emulator (e.g., swtpm) and SELinux enabled.

**Build it:**

1. Set up a Linux VM or container with TPM emulator and SELinux enabled.
2. Use tpm2-tools to generate TPM quotes representing system state.
3. Query SELinux status and policies using sestatus and seinfo.
4. Write a script to collect TPM quotes and SELinux policy enforcement status into a combined attestation report.
5. Document how the layered evidence corresponds to system integrity claims.

**Ships as:** A GitHub repo with scripts to generate a layered attestation report combining TPM quotes and SELinux policy status, plus a README explaining the process and its relation to layered attestation.

**Stretch goal:** Add runtime integrity measurement simulation by monitoring file hashes or kernel module status and including that in the attestation report.

### Intermediate — Reimplement Layered Attestation with Runtime Integrity Measurement
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core layered attestation approach by integrating TPM-based attestation, SELinux policy enforcement, and a runtime integrity measurement tool (e.g., LKIM or a simplified eBPF-based monitor). You compare attestation results before and after simulated kernel or application compromises and measure performance overhead.

**Why it shows you understood the paper:** This project shows you can apply the paper's core method of combining hardware roots of trust, kernel security policies, and runtime measurement to detect system compromises. It also demonstrates your ability to evaluate attestation effectiveness and overhead, key results of the paper.

**Grounded in:** Key contribution: Empirical and formal evidence showing the designed mechanisms can detect or defend against threats; Key results: negligible performance overhead (~1.3%) and effective mitigation of data-driven corruption threats.

**Tech stack:** Linux (Fedora or Ubuntu), Python 3.11, Bash scripting, eBPF tools (bcc or bpftrace), TPM2 tools, SELinux utilities

**Data:** Use a local Linux system with TPM and SELinux enabled; simulate kernel or application compromises by modifying files or loading kernel modules.

**Build it:**

1. Set up a Linux environment with TPM, SELinux, and eBPF support.
2. Implement or adapt a runtime integrity measurement tool using eBPF to monitor kernel or critical process integrity.
3. Script TPM quote generation and SELinux policy checks to collect layered attestation evidence.
4. Simulate system compromises (e.g., modify monitored files or kernel modules) and collect attestation evidence before and after.
5. Measure and report performance overhead of the attestation process using standard Linux benchmarking tools.
6. Compare attestation results to detect compromises and document findings.

**Ships as:** A GitHub repository with scripts and tools to perform layered attestation including runtime integrity measurement, a performance evaluation report, and a README linking the implementation to the paper's methodology and results.

**Stretch goal:** Integrate the Copland attestation protocol concepts by implementing a simple attestation manager to orchestrate evidence collection and verification.

### Advanced — Virtualized Kernel Integrity Measurement for Stronger Attestation
*Effort: 3+ weeks*

You design and prototype a virtualization-based isolation mechanism for kernel integrity measurement (addressing the paper's limitation of LKIM running inside the kernel). This involves creating a lightweight VM or container that runs the integrity measurement tool isolated from the kernel it monitors, preventing rootkit interference. You evaluate the approach's feasibility and security benefits.

**Why it shows you understood the paper:** This project tackles a key future direction and limitation identified in the paper, demonstrating deep understanding of layered attestation challenges and the need for virtualization support to strengthen adversary models. It shows initiative to extend the paper's contributions toward practical improvements.

**Grounded in:** Limitation: LKIM currently runs within the kernel using eBPF, creating a measurement cycle exploitable by rootkits; Future direction: Developing virtualization support for LKIM to isolate kernel integrity measurement.

**Tech stack:** Linux (Fedora or Ubuntu), Python 3.11, Bash scripting, QEMU/KVM or Docker, eBPF tools, TPM2 tools, SELinux utilities

**Data:** Use a local Linux system with virtualization support; no external dataset needed.

**Build it:**

1. Research virtualization techniques suitable for isolating kernel integrity measurement (e.g., lightweight VMs or containers).
2. Set up a virtualized environment where the integrity measurement tool runs isolated from the monitored kernel.
3. Adapt or implement a runtime integrity measurement tool to run inside the isolated environment and monitor the host kernel.
4. Develop scripts to collect and aggregate attestation evidence from the isolated measurement environment.
5. Evaluate the security benefits by simulating rootkit attempts to interfere with measurement and showing isolation prevents tampering.
6. Document the design, implementation challenges, and security evaluation in relation to the paper's future directions.

**Ships as:** A GitHub repo with virtualization setup scripts, isolated kernel integrity measurement tooling, evaluation results demonstrating improved isolation, and a detailed README connecting the work to the paper's limitations and future directions.

**Stretch goal:** Extend the prototype to support TPM locality enforcement by experimenting with Linux kernel patches or policy configurations to restrict TPM key usage.
