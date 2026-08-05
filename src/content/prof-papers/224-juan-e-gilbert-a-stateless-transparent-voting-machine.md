---
title: "224 · A Stateless Transparent Voting Machine — Juan E. Gilbert"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-juan-e-gilbert"
source_hash: "cca801560f464388509b41f40f40afaced8e20d1818eed04f213df84f117644b"
sequence: 224
generator: "outreach-garden: managed"
---

# 224 · A Stateless Transparent Voting Machine

## At a glance

- **Professor:** Juan E. Gilbert
- **Institution:** University of Florida
- **Paper:** [A Stateless Transparent Voting Machine](https://arxiv.org/abs/2509.19257)
- **Authors:** Juan E. Gilbert, Jean D. Louis
- **Year:** 2025

## Paper overview

This paper presents a new design for a voting machine called the Stateless Transparent Voting Machine (STVM) that improves security, usability, and accessibility. It uses a transparent touchscreen to let voters verify their printed ballots interactively and boots from a read-only Blu-ray disc to prevent persistent malware. The STVM aims to address vulnerabilities in current ballot marking devices and hand-marked paper ballots by ensuring vote integrity and voter verification.

### Why it matters

**Research problem:** Current ballot marking devices (BMD) and hand-marked paper ballots (HMPB) have security and usability issues, including vulnerability to malware, vote flipping attacks, and insufficient voter verification, which can compromise election outcomes.

**Why it matters:** Voting is fundamental to democracy, and compromised voting machines or ballots can alter election results undetected, undermining public trust and election integrity. Ensuring secure, accessible, and verifiable voting systems is critical.

**Key contributions:**

- Introduction of a stateless voting machine architecture that boots from read-only media to prevent persistent malware.
- Development of a transparent interactive printing interface that enforces voter verification of each printed ballot selection.
- Demonstration that the STVM is more secure than traditional BMDs against various attack classes including vote flipping, denial-of-service, code injection, and remote control attacks.
- Experimental evidence showing malware cannot persist on the STVM after reboot, unlike on traditional BMDs.
- Comparison of STVM with hand-marked paper ballots highlighting STVM's accessibility and security advantages.

## About the professor

**Juan E. Gilbert** — Professor, Computer and Information Science and Engineering, University of Florida.

### Research links

- [Faculty/profile page](http://juangilbert.com/research.html)
- [Identity evidence](http://juangilbert.com/)
- [Identity evidence](https://cise.ufl.edu/people/faculty/name/juan-gilbert/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Stateless Transparent Voting Machine (STVM) paper, start with foundational concepts of stateless system architecture and secure boot from read-only media to grasp the core security mechanisms that enable malware resistance. Then, explore the context of voter-verifiable ballot marking devices to appreciate the usability and verification challenges the STVM addresses. Finally, focus on the paper's core innovation through the authors' own talks about the STVM, gaining direct insight into the design, security, and usability improvements.

### Stateless system architecture *(prerequisite)*
Understanding stateless system architecture is essential to grasp how the STVM prevents persistent malware by avoiding persistent storage. This foundational knowledge clarifies why the machine's design boots fresh each time, eliminating state-based vulnerabilities common in traditional voting machines.

*How the paper uses it:* The STVM's stateless design is a key security feature preventing malware persistence.

▶ [Implementing Event-Driven Microservices architecture in ...](https://www.youtube.com/watch?v=w8Dv1TEguJ8) — NDC Conferences · 58:55

### Secure boot from read-only media *(prerequisite)*
Secure boot mechanisms from read-only media underpin the STVM's ability to resist persistent malware attacks by ensuring the system boots from a trusted, immutable source. This concept is critical to understanding how the STVM maintains integrity across reboots.

*How the paper uses it:* The STVM boots from a read-only Blu-ray disc to prevent persistent malware.

▶ [Top 10 Secure Boot Mistakes | Jasper Van Woudenberg | hardwear.io USA 2019](https://www.youtube.com/watch?v=B9J8qjuxysQ) — hardwear.io · 7 years ago

### Voter-verifiable ballot marking devices *(prerequisite)*
Familiarity with existing voter-verifiable ballot marking devices provides context for the STVM's improvements in voter verification and accessibility. This background helps appreciate the usability challenges and security vulnerabilities the STVM aims to overcome.

*How the paper uses it:* The STVM improves on traditional ballot marking devices by enhancing voter verification.

▶ [DEF CON VOTING VILLAGE DC DAY 2](https://www.youtube.com/watch?v=ECJaaAkQ-KM) — Voting Village @ DEF CON

### STVM author talk *(the paper's own talk)*
Direct talks by the paper's authors offer the most authoritative and detailed insights into the STVM's design, security features, and usability benefits. These talks provide a comprehensive understanding of the prototype and experimental results from the creators themselves.

*How the paper uses it:* These talks present the STVM design and experimental validation directly from the authors.

▶ [Transparent Voting Machine Prototype](https://www.youtube.com/watch?v=6_G8bdlXBAc) — Juan E. Gilbert · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts essential to understanding the Stateless Transparent Voting Machine (STVM) paper, starting with the basics of stateless system architecture and secure boot mechanisms to build intuition about the machine's security design. It then covers voter-verifiable ballot marking devices to provide context on existing voting technologies, culminating with a focused look at the STVM's core innovation: the transparent interactive printing interface that enhances voter verification.

### Stateless system architecture *(prerequisite)*
Learn what it means for a system to be stateless versus stateful, focusing on how stateless systems do not retain persistent data between sessions. This concept is key to understanding how the STVM prevents malware persistence by not storing data locally.

*How the paper uses it:* The STVM uses a stateless design to avoid persistent malware by booting fresh each time without saving state.

▶ [Stateful & Stateless Architecture](https://www.youtube.com/watch?v=Sn18rLefS-4) — codestorywithMIK · 8:49

### Secure boot from read-only media *(prerequisite)*
Understand how secure boot processes verify system integrity during startup and how booting from read-only media like Blu-ray discs prevents unauthorized code modifications. This mechanism is central to the STVM's defense against persistent malware.

*How the paper uses it:* The STVM boots from a read-only Blu-ray disc, ensuring the system image cannot be altered by malware.

▶ [What is Secure Boot - Simple Explanation](https://www.youtube.com/watch?v=zGmU9iXg7Z4) — Linux Network · 1 year ago

### Voter-verifiable ballot marking devices *(prerequisite)*
Explore how ballot marking devices work and the importance of voter verification to ensure votes are recorded as intended. This background helps appreciate the STVM's improvements in usability and security over traditional devices.

*How the paper uses it:* The STVM improves on existing ballot marking devices by enabling interactive voter verification of printed ballots.

▶ [Using the Ballot Marking Device](https://www.youtube.com/watch?v=eVZqG29dVBw) — Board of Elections New York City · 8 years ago

### STVM author talk *(the paper's own talk)*
Hear directly from the authors about the design goals, challenges, and features of the STVM prototype. This talk provides practical insights and real-world context for the paper's contributions.

*How the paper uses it:* The author talk explains the motivation and design of the STVM, complementing the paper's technical details.

▶ [Transparent Voting Machine Prototype](https://www.youtube.com/watch?v=6_G8bdlXBAc) — Juan E. Gilbert · 5 years ago
