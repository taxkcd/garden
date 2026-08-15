---
title: "392 · Verifiable Sustainability in Data Centers — Kanad Ghose"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kanad-ghose"
source_hash: "61f62c62bc15e8c4f1f1226b786aec0762b9addb822af9e3987f36540ab5cdfa"
sequence: 392
generator: "outreach-garden: managed"
---

# 392 · Verifiable Sustainability in Data Centers

## At a glance

- **Professor:** Kanad Ghose
- **Institution:** Binghamton University
- **Paper:** [Verifiable Sustainability in Data Centers](https://arxiv.org/abs/2307.11993v3)
- **Authors:** Syed Rafiul Hussain, Patrick McDaniel, Anshul Gandhi, Kanad Ghose, Kartik Gopalan, Dongyoon Lee, Yu David Liu, Zhenhua Liu, Shuai Mu, Erez Zadok
- **Year:** 2024

## Paper overview

This paper discusses the significant environmental impact of data centers and the challenges in accurately measuring and verifying their sustainability metrics. It highlights the security and privacy vulnerabilities in current sustainability data collection and reporting practices and proposes research directions to develop secure, verifiable, and privacy-preserving systems for sustainability in data centers.

### Why it matters

**Research problem:** Current techniques for collecting, aggregating, and reporting sustainability data in data centers are vulnerable to cyberattacks, misuse, and greenwashing, leading to inaccurate and unverifiable sustainability claims.

**Why it matters:** Data centers consume a significant portion of global energy (2-4%, potentially rising to 5-7%) and contribute substantially to greenhouse gas emissions. Inaccurate sustainability reporting undermines efforts to mitigate environmental impact and can lead to financial loss, regulatory evasion, and loss of trust among stakeholders.

**Key contributions:**

- Identification of security threats and adversarial models specific to sustainability data in data centers.
- Proposal of a verifiable footprint collection architecture using trusted execution environments and cryptographic proofs.
- Discussion of privacy-preserving techniques for footprint collection and aggregation, including differential privacy, homomorphic encryption, and secure multi-party computation.
- Exploration of public sustainability ledgers using blockchain and smart contracts for transparency and accountability.
- Highlighting the need for standardization and lightweight security mechanisms to facilitate adoption.

## About the professor

**Kanad Ghose** — Professor, Department of Computer Science, Binghamton University.

Research interests: Power-aware microarchitectures and systems, Computer systems, High-performance computing, Cyber-physical systems

### Research links

- [Faculty/profile page](https://www.binghamton.edu/computer-science/people/profile.html?id=ghose)
- [Identity evidence](http://www.cs.binghamton.edu/~ghose)
- [Resolved homepage](https://www.cs.binghamton.edu/~ghose/research.html)
- [Google Scholar](https://scholar.google.com/citations?user=3itxM90AAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Applied Cryptography
**The paper assumes:** cryptographic protocols, homomorphic encryption, zero-knowledge proofs, secure multi-party computation, and privacy-preserving cryptography
**Already in this field?** Skip this entirely if you already understand practical cryptographic methods used for secure computation and privacy.

This background focuses on applied cryptography, essential for understanding the cryptographic techniques used in securing and verifying sustainability data in data centers, such as homomorphic encryption, zero-knowledge proofs, and secure multi-party computation. The rigorous course offers a deep, formal foundation suitable for readers seeking comprehensive mastery, while the fast track provides a concise, intuitive introduction to core cryptographic concepts for quicker preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Foundations of Cryptography](https://www.youtube.com/playlist?list=PLgMDNELGJ1CbdGLyn7OrVAP-IKg-0q2U2) — NPTEL - Indian Institute of Science, Bengaluru · 59 videos · 32.9h across 59 episodes

**Watch only this:** lectures 1-24 ("noc20 cs02 lec01 Introduction" through "noc20 cs02 lec24 Message Authentication for Long Messages Part II"), about 13 hours — these cover the core cryptographic primitives and security notions relevant to the paper's cryptographic proposals and threat models.

*Why it unblocks this paper:* This NPTEL course from the Indian Institute of Science, Bengaluru, covers foundational and practical cryptographic concepts including symmetric and asymmetric encryption, message authentication, and security models, which underpin the cryptographic methods discussed in the paper.

*If you want all of it:* 32.9 hours across all 59 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Playlist to Cryptography & System Security](https://www.youtube.com/playlist?list=PLPIwNooIb9viexdR0fCeMwTThgZBx4lBJ) — Perfect Computer Engineer · 49 videos · 8.5h across 49 episodes

**Watch only this:** episodes 1-24 ("Introduction to Cryptography and System Security 🔥" through "Asymmetric key Cryptography | Asymmetric key encryption"), about 4 hours — this subset covers essential cryptography concepts needed to grasp the paper's security and privacy mechanisms.

*Why it unblocks this paper:* This playlist by Perfect Computer Engineer offers clear, concise explanations of cryptography and system security basics, including encryption techniques and security goals, providing an accessible overview of the cryptographic principles relevant to the paper without deep mathematical detail.

*If you want all of it:* 8.5 hours across all 49 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Verifiable Sustainability in Data Centers,' start by building a strong foundation on the key enabling technologies: Trusted Execution Environments (TEEs), Homomorphic Encryption, Differential Privacy, and Blockchain for sustainability. These foundational concepts are critical as they underpin the paper's proposed architectures and security mechanisms. Finally, focus on the core concept of the paper itself by watching the authors' own talk or the most relevant advanced seminar on sustainability in data centers to grasp the specific challenges, threat models, and proposed solutions.

### Trusted execution environments *(prerequisite)*
Trusted Execution Environments (TEEs) provide the hardware-based isolation and tamper-proof guarantees essential for secure sustainability data collection in data centers. Understanding TEEs is foundational to appreciating how the paper proposes to secure sustainability metrics against tampering and insider threats.

*How the paper uses it:* The paper leverages TEEs like ARM TrustZone and Intel SGX to ensure accurate and trustworthy sustainability data collection.

▶ [#33 Trusted Execution Environments | Information Security 5 Secure Systems Engineering](https://www.youtube.com/watch?v=7EfWU52MgM8) — NPTEL-NOC IITM · 7 years ago

### Homomorphic encryption *(prerequisite)*
Homomorphic encryption allows computations to be performed directly on encrypted data, preserving privacy during data aggregation and analysis. This cryptographic technique is a core part of the paper's approach to privacy-preserving sustainability metrics.

*How the paper uses it:* The paper discusses homomorphic encryption as a method to enable computation on encrypted sustainability data without revealing sensitive information.

▶ [Prof. Nigel Smart | Fully Homomorphic Encryption](https://www.youtube.com/watch?v=gWcjwXJWMKM) — INI Seminar Room 1 · 31:11

### Differential privacy *(prerequisite)*
Differential privacy provides a rigorous framework to protect individual data points when aggregating sustainability data, balancing privacy and utility. It is crucial to understand this to evaluate the paper's privacy-preserving aggregation techniques.

*How the paper uses it:* The paper highlights differential privacy as a technique to add noise and obscure individual sustainability data points during aggregation.

▶ [Differential Privacy - Lecture 1](https://www.youtube.com/watch?v=OfWj89oRD7g) — Microsoft Research · 1:26:02

### Blockchain for sustainability *(prerequisite)*
Blockchain technology offers immutable, transparent ledgers that can enhance accountability and trust in sustainability reporting. Understanding blockchain's role in sustainability is key to grasping the paper's proposal for public sustainability ledgers.

*How the paper uses it:* The paper explores blockchain and smart contracts as tools for transparent and verifiable sustainability footprint reporting.

▶ [UN Blockchain Talks #1: Unlocking Blockchain's Potential](https://www.youtube.com/watch?v=aXNirHRF1P8) — UN Innovation Network · 53:51

### Paper authors talk *(the paper's own talk)*
The authors' own talk or a directly relevant advanced seminar provides the most precise and insightful explanation of the paper's novel contributions, threat models, and proposed architectures for verifiable sustainability in data centers.

*How the paper uses it:* This is the core concept of the paper, presenting the authors' perspective on securing sustainability metrics in data centers.

▶ [When Observability Meets Sustainability: A Real World ...](https://www.youtube.com/watch?v=OvBdccD8_Jg) — The Linux Foundation · 33:17

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces key technologies and concepts needed to understand verifiable sustainability in data centers. Start with foundational privacy and security methods like differential privacy and trusted execution environments, then explore cryptographic techniques such as homomorphic encryption. Finally, learn about blockchain's role in transparent sustainability reporting and privacy-preserving data aggregation methods, culminating in the paper's core focus on securing sustainability metrics.

### Differential privacy *(prerequisite)*
Differential privacy is a technique that protects individual data points by adding controlled noise, ensuring that aggregated data reveals little about any single contributor. It balances privacy with data utility, which is crucial when collecting sensitive sustainability metrics.

*How the paper uses it:* The paper discusses differential privacy as a key method to protect sensitive sustainability data during aggregation.

▶ [Differential Privacy explained](https://www.youtube.com/watch?v=XgotQQpXwio) — Security and Privacy Academy · 5:40

### Trusted execution environments *(prerequisite)*
Trusted Execution Environments (TEEs) are secure areas within a processor that isolate code and data to prevent tampering or snooping. They provide hardware-based guarantees that sustainability data collection is accurate and tamper-proof.

*How the paper uses it:* TEEs are proposed in the paper as foundational hardware to ensure trustworthy sustainability data collection in data centers.

▶ [What is Trusted Execution Environment (TEE) | TEE (Trusted Execution Environment)](https://www.youtube.com/watch?v=heTIzSzXN-M) — InfosecTrain · 3 years ago

### Homomorphic encryption *(prerequisite)*
Homomorphic encryption allows computations to be performed directly on encrypted data without decrypting it first, preserving privacy while enabling data analysis. This is important for securely aggregating sustainability metrics without exposing raw data.

*How the paper uses it:* The paper highlights homomorphic encryption as a cryptographic method to enable privacy-preserving computation on sustainability data.

▶ [Homomorphic Encryption Explained](https://www.youtube.com/watch?v=hroyj8R8h60) — The Code Bit · 4:28

### Blockchain for sustainability *(prerequisite)*
Blockchain technology provides a public, immutable ledger that can transparently record sustainability metrics and certifications, enhancing accountability and preventing data tampering or greenwashing.

*How the paper uses it:* The paper explores public sustainability ledgers using blockchain and smart contracts to ensure transparency and verifiability.

▶ [Can the Blockchain Help Fight Climate Change?](https://www.youtube.com/watch?v=z3lfWdfeUH4) — Bloomberg Originals · 5:24

### Privacy-preserving data aggregation
Privacy-preserving data aggregation techniques combine cryptographic and statistical methods to securely collect and aggregate data from multiple sources without revealing individual inputs, crucial for multi-tenant data centers.

*How the paper uses it:* The paper discusses privacy-preserving aggregation methods like multi-party computation and federated learning to protect tenant data privacy.

▶ [Research Seminar: "Privacy-preserving Federated Learning ...](https://www.youtube.com/watch?v=Nf7Ct-EDSKY) — SigProcessing · 1:04:26

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insight into the motivation, challenges, and proposed solutions for verifiable sustainability in data centers, grounding the technical concepts in real-world context.

*How the paper uses it:* This video offers a high-level discussion relevant to the paper’s focus on sustainability challenges in data centers.

▶ [Data Centers and Sustainability: How Carbon Neutral and Net Zero Carbon Are Being Applied](https://www.youtube.com/watch?v=vfNx1zSZnls) — Upsite Technologies · 4 years ago

## Already in your library

- [Trusted Execution Environments: A Technical Overview of ...](https://www.youtube.com/watch?v=MREwcSo0uz4) — also for: Efficient Security Support for CXL Memory through Adaptive Incremental Offloaded (Re-)Encryption (Yuanchao Xu)
- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Introduction to CKKS (Approximate Homomorphic Encryption)](https://www.youtube.com/watch?v=iQlgeL64vfo) — also for: Application-Aware Approximate Homomorphic Encryption: Configuring FHE for Practical Use (Daniele Micciancio)
- [Differential Privacy - Simply Explained](https://www.youtube.com/watch?v=gI0wk1CXlsQ) — also for: Differentially Private Synthetic Data Generation Using Context-Aware GANs (Anantaa Kotal)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth to demonstrate understanding of the paper "Verifiable Sustainability in Data Centers." The beginner project focuses on implementing a simple trusted execution environment (TEE) simulation for sustainability data collection, the intermediate project reimplements the paper's core verifiable footprint collection architecture using cryptographic proofs on simulated data, and the advanced project extends the paper by exploring lightweight cryptographic protocols combined with privacy-preserving aggregation to address computational overhead limitations.

### Beginner — Simulated Trusted Execution Environment for Sustainability Metrics
*Effort: a weekend, ~8 hours*

You build a small prototype that simulates a trusted execution environment (TEE) to securely collect and attest sustainability metrics (e.g., power usage) from a mock data center workload. The prototype will demonstrate how isolation and attestation can protect metric collection from tampering.

**Why it shows you understood the paper:** This project shows you understand the paper's key contribution about using TEEs for tamper-proof sustainability data collection and the security challenges involved in metric integrity.

**Grounded in:** Proposal of a verifiable footprint collection architecture using trusted execution environments and cryptographic proofs.

**Tech stack:** Python 3.11, PyCryptodome, Docker (optional for containerization)

**Data:** Simulated sustainability metrics generated as synthetic power usage data representing a small data center workload.

**Build it:**

1. Implement a Python module that simulates a workload generating power usage metrics over time.
2. Create a simple TEE simulation that isolates metric collection and generates a cryptographic attestation (e.g., HMAC or digital signature) of the collected data.
3. Build a verifier module that checks the attestation to confirm data integrity and authenticity.
4. Demonstrate tampering attempts on the data outside the TEE simulation and show verification failure.
5. Write a README explaining the architecture and how this simulates the paper's TEE-based collection.

**Ships as:** A GitHub repo with Python code simulating TEE-based metric collection and verification, plus documentation explaining the security guarantees and limitations.

**Stretch goal:** Add a simple web dashboard to visualize collected metrics and their verification status in real time.

### Intermediate — Reimplementation of Verifiable Sustainability Footprint Collection
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core verifiable footprint collection architecture using trusted hardware concepts and cryptographic proofs on a simulated dataset. You compare a baseline naive metric collection (no verification) against your verifiable approach and report metrics on data integrity and overhead.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's architectural design and cryptographic proof concepts into a working prototype, showing comprehension of the security challenges and solutions proposed.

**Grounded in:** Architectural design for sustainability-aware data centers incorporating sustainability collectors, certification agents, aggregators, and storage with adversary considerations.

**Tech stack:** Python 3.11, PyCryptodome, Flask (for API simulation), SQLite (for storage)

**Data:** Synthetic sustainability data simulating power and carbon footprint metrics over time for multiple data center nodes.

**Build it:**

1. Design and implement sustainability collectors that simulate metric generation with cryptographic attestation using digital signatures.
2. Implement certification agents that verify attestation and aggregate verified metrics securely.
3. Build a simple API server to store and serve aggregated sustainability data with verification status.
4. Implement a baseline naive collection system without verification for comparison.
5. Run experiments comparing data integrity (detecting tampering) and computational overhead between baseline and verifiable system.
6. Document findings and relate them to the paper's threat models and architectural proposals.

**Ships as:** A GitHub repo with a prototype system demonstrating verifiable sustainability data collection and aggregation, comparison results, and detailed README linking to the paper's architecture and threat models.

**Stretch goal:** Integrate differential privacy noise addition to the aggregated data and analyze privacy-utility trade-offs.

### Advanced — Lightweight Privacy-Preserving Sustainability Data Aggregation
*Effort: 3+ weeks*

You develop an extension addressing the paper's limitation on computational overhead of homomorphic encryption by designing and implementing a lightweight cryptographic protocol combining differential privacy and secure multi-party computation (MPC) for sustainability data aggregation. You evaluate scalability and privacy-utility trade-offs on simulated data.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep understanding of the cryptographic challenges and proposing a novel, practical solution for scalable, privacy-preserving sustainability metrics.

**Grounded in:** Designing lightweight, secure, and bespoke cryptographic protocols tailored for sustainability data; Combining differential privacy, homomorphic encryption, and zero-knowledge proofs for enhanced privacy and utility.

**Tech stack:** Python 3.11, PySyft or MPyC (for MPC), Numpy, Matplotlib

**Data:** Simulated sustainability metrics data representing multiple data center tenants with privacy-sensitive attributes.

**Build it:**

1. Research and select lightweight MPC and differential privacy libraries compatible with Python.
2. Implement a protocol where multiple simulated data center tenants locally add differential privacy noise and participate in MPC to aggregate sustainability metrics securely.
3. Compare computational overhead and privacy-utility trade-offs against a baseline homomorphic encryption approach (conceptual or implemented).
4. Visualize results showing scalability and privacy guarantees.
5. Write a detailed report linking your implementation and results to the paper's limitations and future directions.

**Ships as:** A GitHub repo with code implementing the lightweight privacy-preserving aggregation protocol, evaluation scripts, visualizations, and a comprehensive README discussing the approach in the context of the paper.

**Stretch goal:** Explore integration with a blockchain-based public sustainability ledger to record aggregated proofs immutably.
