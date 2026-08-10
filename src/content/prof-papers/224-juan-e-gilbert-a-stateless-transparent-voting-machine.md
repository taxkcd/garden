---
title: "224 · A Stateless Transparent Voting Machine — Juan E. Gilbert"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-juan-e-gilbert"
source_hash: "518db8d048701f06017160b6847fbba57d106a1b011dfa7dcf5940fbb7f0dd39"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Secure Voting Systems
**The paper assumes:** fundamental concepts of secure voting systems, election security threats, and ballot marking device vulnerabilities
**Already in this field?** Skip this entirely if you already understand the security principles and common vulnerabilities in electronic and paper-based voting systems.

This background provides foundational knowledge on secure voting systems, focusing on the security vulnerabilities of traditional ballot marking devices and hand-marked paper ballots, and the principles behind designing secure, stateless voting machines like the STVM. Choose the rigorous course for a deep, structured understanding of AI and reasoning techniques that underpin trustworthy systems, or opt for the fast track for a concise, accessible introduction to election security basics. Both lanes prepare you to appreciate the innovations and security claims of the STVM paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.034 Artificial Intelligence, Fall 2010](https://www.youtube.com/playlist?list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi) — MIT OpenCourseWare · 30 videos · 24.3h across 30 episodes

**Watch only this:** Episodes 1 through 7, about 5.6 hours — covering Introduction and Scope, Reasoning (Goal Trees and Problem Solving, Rule-Based Expert Systems), Search methods, and Constraints including Visual Object Recognition, which are foundational for AI-based tamper detection and secure system design.

*Why it unblocks this paper:* MIT 6.034 Artificial Intelligence, Fall 2010 covers fundamental AI concepts including reasoning, search, and probabilistic inference that are essential to understanding trustworthy AI systems and security mechanisms relevant to secure voting machines like the STVM.

*If you want all of it:* 24.3 hours across 30 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Ever Wondered About Election Security?](https://www.youtube.com/playlist?list=PLwk7IuIKtO8bdkqbqCPJP3ivMqOqYCjev) — U.S. Election Assistance Commission · 6 videos · 0.2h across 6 episodes

**Watch only this:** All 6 episodes, about 12 minutes total — a quick, well-produced introduction to election security fundamentals from voter registration to voting equipment and results.

*Why it unblocks this paper:* The U.S. Election Assistance Commission's 'Ever Wondered About Election Security?' series provides a clear, concise overview of election security stages and measures, directly relevant to understanding the context and importance of innovations like the STVM.

*If you want all of it:* 0.2 hours across 6 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and fidelity to the Stateless Transparent Voting Machine (STVM) paper. The beginner project recreates the core interactive ballot verification concept in a simple web app, the intermediate project implements a stateless voting machine prototype with secure boot simulation and voter verification metrics, and the advanced project extends the STVM design by prototyping AI-based tamper detection using computer vision on transparent casing mockups. Each project demonstrates understanding of a key paper contribution or limitation and leverages your existing software engineering and AI skills.

### Beginner — Interactive Ballot Verification Web Demo
*Effort: a weekend, ~8 hours*

You build a React web application that simulates the STVM's transparent interactive printing interface. The app lets users select ballot choices and then interactively verify each printed selection on a transparent overlay before final submission. This reproduces the core voter verification mechanism that improved anomaly detection rates in the paper.

**Why it shows you understood the paper:** This project shows you grasp the paper's key usability and security innovation: the transparent interactive printing interface that enforces voter verification. A professor would see you understand how voter interaction can improve detection of ballot anomalies.

**Grounded in:** Development of a transparent interactive printing interface that enforces voter verification of each printed ballot selection.

**Tech stack:** React, TypeScript, CSS

**Data:** No external data needed; simulated ballot choices and verification steps are hardcoded in the app.

**Build it:**

1. Set up a React project with TypeScript.
2. Create a ballot selection UI with multiple choice options.
3. Implement a transparent overlay that shows the printed ballot selections.
4. Add interactive confirmation steps requiring user verification of each selection.
5. Track and display detection rate of simulated ballot anomalies based on user verification.
6. Write a README explaining the connection to the STVM paper's interface.

**Ships as:** A GitHub repo with a React app demonstrating interactive ballot verification and a README linking it to the paper's voter verification contribution.

**Stretch goal:** Add accessibility features such as keyboard navigation and screen reader support to parallel the paper's accessibility claims.

### Intermediate — Stateless Voting Machine Prototype with Verification Metrics
*Effort: 2 weekends, ~20 hours*

You implement a simplified stateless voting machine prototype in Python and React that simulates booting from read-only media and enforces voter verification via an interactive ballot printing interface. You simulate malware persistence by resetting state on reboot and measure voter detection rates of ballot anomalies compared to a baseline without interactive verification.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core method of a stateless architecture combined with interactive verification, and quantitatively compare detection rates, showing comprehension of the security and usability improvements.

**Grounded in:** Introduction of a stateless voting machine architecture that boots from read-only media to prevent persistent malware and the 77% detection rate of ballot anomalies by voters.

**Tech stack:** Python 3.11, FastAPI, React, TypeScript, Docker

**Data:** Simulated ballot data generated within the app; no external dataset is available from the paper.

**Build it:**

1. Create a Python FastAPI backend that simulates a stateless voting machine by resetting state on each 'boot'.
2. Develop a React frontend that implements the transparent interactive printing interface for ballot selection and verification.
3. Implement a simulation of malware persistence by injecting vote flipping in a baseline version without stateless reset.
4. Run user simulations or scripted tests to measure detection rates of ballot anomalies with and without interactive verification.
5. Compare detection rates and document results in a report.
6. Write a README linking the prototype and metrics to the STVM paper's core contributions.

**Ships as:** A full-stack prototype demonstrating stateless boot and interactive verification with quantitative anomaly detection metrics, plus a report comparing baseline and STVM-like behavior.

**Stretch goal:** Add support for accessibility features certified for statewide use, mimicking the paper's accessibility claims.

### Advanced — AI-Based Tamper Detection for Transparent Voting Machine Casing
*Effort: 3-4 weeks*

You design and implement a computer vision system using Python and PyTorch to detect tampering or foreign components on a transparent voting machine casing mockup. Using synthetic or publicly available images of transparent devices with and without tampering, you train a model to identify anomalies, addressing the paper's future direction of integrating AI for tamper detection.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by prototyping the AI tamper detection system. It shows you can extend the STVM concept with trustworthy AI techniques, bridging your applied ML skills with the paper's vision.

**Grounded in:** Proposal for a fully transparent physical casing and use of AI/computer vision to detect tampering (future direction).

**Tech stack:** Python 3.11, PyTorch, OpenCV, Jupyter Notebook

**Data:** No paper dataset available; you use synthetic images or publicly available transparent object datasets as a substitute to simulate tampering detection.

**Build it:**

1. Collect or generate a dataset of images of transparent casings with and without simulated tampering.
2. Preprocess images and label tampered vs. untampered samples.
3. Design and train a convolutional neural network (CNN) model to classify tampering.
4. Evaluate model performance and tune hyperparameters.
5. Create a demo script that takes an input image and outputs tampering detection results.
6. Document the approach, limitations, and connection to the STVM paper's future directions.

**Ships as:** A GitHub repo with code, trained model, demo scripts, and a detailed README explaining the AI tamper detection prototype and its relation to the STVM paper.

**Stretch goal:** Integrate the tamper detection model into a live web demo with webcam input to simulate real-time tamper alerts.

_The paper authors released no code or datasets for the STVM; all data must be simulated or substituted with synthetic/public data as described._
