---
title: "951 · Federated Analytics: A survey — Shantanu Sharma"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shantanu-sharma"
source_hash: "5157fd3ee5b4fb4e164542a033b3178204b39d81286776d4b542f47d2794d2ae"
sequence: 951
generator: "outreach-garden: managed"
---

# 951 · Federated Analytics: A survey

## At a glance

- **Professor:** Shantanu Sharma
- **Institution:** NJIT
- **Paper:** [Federated Analytics: A survey](https://arxiv.org/pdf/2302.01326)
- **Authors:** Ahmed Roushdy Elkordy, Yahya H. Ezzeldin, Shanshan Han, Shantanu Sharma, Chaoyang He, Sharad Mehrotra, Salman Avestimehr
- **Year:** 2023

## Paper overview

This paper surveys federated analytics (FA), a privacy-preserving method to compute data analytics across multiple parties without sharing raw data. It explains how FA differs from federated learning, categorizes common FA queries, reviews existing solutions, and discusses applications and challenges. The goal is to enable collaborative data analysis while protecting privacy and reducing operational costs.

### Why it matters

**Research problem:** How to perform data analytics collaboratively over distributed private datasets owned by multiple parties without sharing raw data, while preserving privacy and efficiency.

**Why it matters:** Many real-world applications require analyzing data distributed across multiple entities (e.g., mobile devices, hospitals) without violating privacy or incurring high costs of centralizing data. Federated analytics enables such privacy-preserving collaborative analytics, which is critical for domains like healthcare, advertising, and machine learning model evaluation.

**Key contributions:**

- Clear definition and distinction of federated analytics from federated learning
- Taxonomy of federated analytics queries including statistical, set-based, and matrix transformation queries
- Survey of existing privacy-preserving algorithms and protocols for these queries
- Discussion of practical applications in healthcare, advertising, and model evaluation
- Identification of challenges and open research directions for scalable and secure federated analytics

## About the professor

**Shantanu Sharma** — Assistant Professor, Department of Computer Science, Department of Data Science, NJIT.

Research interests: Databases, security, privacy, and IoT

### Research links

- [Faculty/profile page](https://web.njit.edu/~ss797)
- [Lab website](https://centers.njit.edu/bdal/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** privacy-preserving data analytics
**The paper assumes:** differential privacy, secure multiparty computation, privacy-preserving algorithms, distributed data analytics
**Already in this field?** Skip this entirely if you already understand the core concepts and mathematical foundations of privacy-preserving data analytics techniques such as differential privacy and secure multiparty computation.

To understand the privacy-preserving techniques foundational to federated analytics, such as differential privacy and secure multiparty computation, this background provides two complementary learning paths. The rigorous course offers a deep, structured university-level exploration of cybersecurity and privacy principles, while the fast track delivers concise, focused explainers on privacy-enhancing technologies relevant to federated analytics. Choose the course for comprehensive depth or the fast track for a quicker, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Cybersecurity and Privacy](https://www.youtube.com/playlist?list=PLyqSpQzTE6M-jkJEzbS5oHJUp2GWPsq6e) — NPTEL-NOC IITM · 48 videos · 24.5h across the first 46 episodes

**Watch only this:** Episodes 1-6: 'Introduction - Cybersecurity and Privacy - Prof. Saji K Mathew' through 'Foundations - Part 03 - Prof. Saji K Mathew', about 3 hours 10 minutes — these provide the essential background on cybersecurity and privacy concepts relevant to federated analytics.

*Why it unblocks this paper:* This NPTEL-NOC IITM university course on Cybersecurity and Privacy covers foundational concepts and security management that underpin privacy-preserving data analytics techniques surveyed in the paper, including differential privacy and secure multiparty computation.

*If you want all of it:* Approximately 24.5 hours across the first 46 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Privacy-Enhancing Technologies Explained: FHE, Federated Learning and Confidential Computing](https://www.youtube.com/playlist?list=PLXLcbRiLvTZ0) — Duality Technologies · 15 videos · 2.9h across 15 episodes

**Watch only this:** Episodes 1-5: 'Federated Learning Explained: Collaborate Without Centralizing Data' through 'Cross-Border Medical Data Analysis with Secure Federated Analytics', about 55 minutes — these cover the core concepts and applications of privacy-enhancing technologies relevant to federated analytics.

*Why it unblocks this paper:* This Duality Technologies playlist offers concise, well-produced explainers on privacy-enhancing technologies including federated learning, differential privacy, and secure data collaboration, directly aligned with the privacy-preserving methods surveyed in the paper.

*If you want all of it:* Approximately 2.9 hours across all 15 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Federated Analytics: A survey,' start with foundational concepts such as Secure Multiparty Computation and Differential Privacy, which are core privacy-preserving techniques enabling federated analytics. Then, build context on Federated Learning and Distributed Data Analytics to appreciate the distinctions and operational environment. Finally, focus on the core concept of Federated Analytics itself, prioritizing the authors' own talk and related advanced seminars to grasp the survey's contributions and challenges.

### Secure Multiparty Computation lecture *(prerequisite)*
Secure Multiparty Computation (MPC) is a fundamental cryptographic technique that allows multiple parties to jointly compute a function over their inputs while keeping those inputs private. Understanding MPC is essential because many federated analytics protocols rely on MPC to ensure privacy without sharing raw data. The selected talk provides a rigorous, research-level introduction from a Google researcher involved in practical MPC deployments.

*How the paper uses it:* MPC is one of the key privacy-preserving techniques surveyed in the paper for enabling federated analytics queries without data sharing.

▶ [Benjamin Kreuter - Secure Multiparty Computation at Google](https://www.youtube.com/watch?v=iViQHHchtbk) — DIMACS CCICADA · 28:03 · 8y ago

### Differential Privacy seminar *(prerequisite)*
Differential Privacy (DP) is a mathematical framework that provides strong privacy guarantees by adding noise to data or query results. It is widely used in federated analytics to protect individual data contributions while enabling useful aggregate analysis. The chosen seminar offers an advanced, detailed explanation of DP concepts and mechanisms suitable for researchers.

*How the paper uses it:* The paper surveys differential privacy as a core technique for privacy protection in federated analytics systems.

▶ [Ilya Mironov - Rényi Differential Privacy](https://www.youtube.com/watch?v=oQzaA5KG3pM) — DIMACS CCICADA · 31:22 · 8y ago

### Federated Learning lecture *(prerequisite)*
Federated Learning (FL) is a decentralized machine learning paradigm where models are trained across distributed data sources without centralizing data. Understanding FL is important to distinguish it from federated analytics, which generalizes beyond model training to broader data analysis queries. The selected lecture from a university channel provides a comprehensive and rigorous introduction to FL concepts and challenges.

*How the paper uses it:* The paper clearly distinguishes federated analytics from federated learning, making FL knowledge foundational to grasping the survey's scope.

▶ [Zilinghan Li: Federated Learning Tutorial: Concepts, Applications, Challenges, and Framework](https://www.youtube.com/watch?v=b-wStqcHS8A) — MICDE University of Michigan · 59:25 · 2y ago

### Distributed Data Analytics conference *(prerequisite)*
Distributed Data Analytics involves performing data analysis across multiple data owners or nodes without centralizing data. This context is crucial for understanding the operational challenges and motivations behind federated analytics. The selected conference talk discusses real-world distributed database systems and their design trade-offs, providing relevant background for federated analytics.

*How the paper uses it:* Federated analytics operates in distributed data environments, making distributed data analytics knowledge important for understanding the paper's problem setting.

▶ [Distributed Data Summit 2018: Five Lessons in Distributed Databases by Jonathan Ellis](https://www.youtube.com/watch?v=eGruCOlw3oQ) — DataStax Developers · 43:44 · 8y ago

### Federated Analytics Elkordy talk
This section covers the core concept of federated analytics as surveyed in the paper. The authors' own talks or closely related seminars provide the most direct and authoritative insights into the paper's taxonomy, privacy techniques, applications, and open challenges. The selected videos include the authors' presentations and advanced seminars from reputable research networks focusing on federated analysis.

*How the paper uses it:* This is the paper's central topic, and the authors' own talks provide the best direct exposition of their survey and findings.

▶ [Federated Analysis Collective Learning Series: Current Approaches for Federated Analysis](https://www.youtube.com/watch?v=xufC7oVEqpw) — Health Data Research Network Canada · 53:04 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand federated analytics, starting with the basics of distributed data analytics and federated learning to clarify the context and distinctions. It then covers core privacy-preserving techniques—secure multiparty computation and differential privacy—that enable federated analytics. Finally, it presents focused seminars on federated analytics methods to connect these foundations directly to the paper's surveyed approaches and applications.

### Distributed Data Analytics conference *(prerequisite)*
Distributed data analytics involves analyzing data spread across multiple locations or owners without centralizing it. Understanding this helps grasp why federated analytics is needed to perform collaborative analysis while respecting data locality and privacy.

*How the paper uses it:* The paper addresses analytics over distributed private datasets without sharing raw data, a core challenge in distributed data analytics.

▶ [What Is Data Analytics? - An Introduction (Full Guide)](https://www.youtube.com/watch?v=yZvFH7B6gKI) — CareerFoundry · 9:04 · 5y ago

### Federated Learning lecture *(prerequisite)*
Federated learning is a decentralized machine learning approach where models are trained across distributed data sources without sharing raw data. Learning this concept clarifies how federated analytics differs by focusing on general data analysis rather than model training.

*How the paper uses it:* The paper clearly distinguishes federated analytics from federated learning, emphasizing their different goals and methods.

▶ [Week 01 | Introduction to Federated Learning | Theory and Applications of Federated Learning](https://www.youtube.com/watch?v=ovFPEx-2c2Q) — Faranak Solat · 37:17 · 1mo ago

### Secure Multiparty Computation lecture *(prerequisite)*
Secure multiparty computation (MPC) allows multiple parties to jointly compute a function over their inputs while keeping those inputs private. This technique is fundamental for enabling privacy-preserving federated analytics without sharing raw data.

*How the paper uses it:* The paper surveys MPC as a key privacy-preserving technique used in federated analytics protocols.

▶ [Basics of Secure Multiparty Computation](https://www.youtube.com/watch?v=_mDlLKgiFDY) — CryptoClear · 13:08 · 8y ago

### Differential Privacy seminar *(prerequisite)*
Differential privacy is a mathematical framework that protects individual data privacy by adding noise to query results, ensuring that outputs do not reveal sensitive information. Understanding this is crucial for grasping how federated analytics balances privacy and utility.

*How the paper uses it:* The paper discusses differential privacy as a core privacy technique applied in federated analytics to protect data during analysis.

▶ [Differential Privacy Mechanisms Explained](https://www.youtube.com/watch?v=Quzx_QaARAE) — Security and Privacy Academy · 5:35 · 2y ago

### Federated Analytics methods seminar
This seminar series introduces federated analytics concepts, challenges, and current approaches, focusing on practical applications and statistical methods used in privacy-preserving distributed data analysis.

*How the paper uses it:* The paper surveys federated analytics methods and applications, making this seminar directly relevant for understanding the state of the art.

▶ [Federated Analysis Collective Learning Series: Federated Analysis 101](https://www.youtube.com/watch?v=7-Ejrfxw8DE) — Health Data Research Network Canada · 51:14 · 2y ago

## Already in your library

- [Secure Multiparty Computation I](https://www.youtube.com/watch?v=Fv4UawF52eU) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [Secure Multi Party Computation part 1- The BGW Protocol - Gilad Asharov](https://www.youtube.com/watch?v=XA_4dzs1Zys) — also for: Collaborative Incrementally Verifiable Computation (Omkant Pandey)
- [Introduction to Multi-Party Computation (MPC or SMPC)](https://www.youtube.com/watch?v=90jcXCHsBF0) — also for: Collaborative Incrementally Verifiable Computation (Omkant Pandey)
- [Lec 01 What is Secure Multi-Party Computation (MPC)?](https://www.youtube.com/watch?v=NXFLrm8zcS8) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [Differential Privacy: Fundamentals to Forefront I](https://www.youtube.com/watch?v=5muBxGQ9B2g) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [The Definition of Differential Privacy - Cynthia Dwork](https://www.youtube.com/watch?v=lg-VhHlztqo) — also for: Deciding Differential Privacy of Online Algorithms with Multiple Variables (A. Prasad Sistla)
- [Differential Privacy - Lecture 1](https://www.youtube.com/watch?v=OfWj89oRD7g) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Differential Privacy](https://www.youtube.com/watch?v=FYokHdzgJSg) — also for: Deciding Differential Privacy of Online Algorithms with Multiple Variables (A. Prasad Sistla)
- [Differential Privacy explained](https://www.youtube.com/watch?v=XgotQQpXwio) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Differential Privacy - Simply Explained](https://www.youtube.com/watch?v=gI0wk1CXlsQ) — also for: Differentially Private Synthetic Data Generation Using Context-Aware GANs (Anantaa Kotal)
- [A visual Introduction to Federated or Collaborative Learning](https://www.youtube.com/watch?v=bGuG57PTZyw) — also for: Intelligent Sensing-to-Action for Robust Autonomy at the Edge: Opportunities and Challenges (Amit Ranjan Trivedi)
- [Explaining Distributed Systems Like I'm 5](https://www.youtube.com/watch?v=CESKgdNiKJw) — also for: MyZone: A Next-Generation Online Social Network (John Black)
- [Federated Learning and Analytics at Google and Beyond](https://www.youtube.com/watch?v=Yu6SZJZuPtY) — also for: One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification (Hana Khamfroush)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of federated analytics as surveyed in the paper. The beginner project implements a simple federated statistical query with privacy considerations using your existing full-stack skills. The intermediate project reimplements a core federated analytics protocol for private set intersection with differential privacy, comparing utility and privacy trade-offs. The advanced project addresses a key limitation by designing and evaluating an incentive mechanism to encourage honest participation in multi-party federated analytics, exploring a future research direction.

### Beginner — Federated Statistical Query with Local Differential Privacy
*Effort: a weekend, ~8 hours*

You build a simple web-based simulation of federated analytics performing a statistical query (e.g., computing the mean or frequency of a binary attribute) across multiple simulated clients without sharing raw data. Each client applies local differential privacy (LDP) to their data before sending noisy statistics to a central aggregator that computes the approximate global statistic.

**Why it shows you understood the paper:** This project shows you understand the core concept of federated analytics as privacy-preserving distributed data analysis, the distinction from federated learning, and the application of local differential privacy to protect client data.

**Grounded in:** Demonstrates the paper's taxonomy of statistical testing queries and the use of local differential privacy for privacy-preserving federated analytics (see sections on statistical queries and privacy-preserving techniques).

**Tech stack:** JavaScript, React, Node.js, Express.js

**Data:** Simulated binary attribute data generated on client side to mimic distributed private datasets.

**Build it:**

1. Create a React frontend to simulate multiple clients with local datasets.
2. Implement local differential privacy mechanisms (e.g., randomized response) on client data.
3. Build a Node.js/Express backend to aggregate noisy client statistics and compute the global estimate.
4. Visualize the true vs. noisy aggregated statistics and privacy parameters.
5. Document the privacy-utility trade-off observed in the simulation.

**Ships as:** A GitHub repo with a web app demonstrating federated statistical query with LDP, including code, usage instructions, and a README explaining the privacy mechanism and results.

**Stretch goal:** Add support for multiple types of statistical queries (mean, frequency, median) and compare their privacy-utility trade-offs.

### Intermediate — Private Set Intersection with Differential Privacy in Federated Analytics
*Effort: 1-3 weekends, ~20 hours*

You implement a federated analytics protocol for private set intersection (PSI) among multiple parties, enhanced with differential privacy to protect individual set membership. You compare the privacy-utility trade-offs of your implementation against a baseline non-private PSI protocol.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement a core federated analytics query type (set queries) with privacy-preserving techniques surveyed in the paper, and to evaluate trade-offs between privacy guarantees and utility, a key challenge highlighted by the authors.

**Grounded in:** Reimplements and evaluates the paper's discussion on set queries and privacy-preserving techniques combining differential privacy and secure multiparty computation (see taxonomy of queries and privacy methods).

**Tech stack:** Python 3.11, FastAPI, PyCryptodome or similar cryptography library, Jupyter Notebook for evaluation

**Data:** Simulated sets of identifiers for multiple parties generated in code to mimic distributed private datasets.

**Build it:**

1. Implement a baseline private set intersection protocol for two or more parties using cryptographic primitives.
2. Incorporate differential privacy noise addition to the PSI output to protect membership privacy.
3. Build a FastAPI server to orchestrate the federated protocol among simulated parties.
4. Evaluate and compare the accuracy and privacy trade-offs of the private vs. non-private PSI on simulated data.
5. Document the implementation details, evaluation metrics, and insights on privacy-utility trade-offs.

**Ships as:** A GitHub repo with code implementing private set intersection with differential privacy, evaluation notebooks, and a README explaining the protocol and results.

**Stretch goal:** Extend the protocol to support multi-party PSI with scalability optimizations and measure communication overhead.

### Advanced — Incentive Mechanism Design for Robust Federated Analytics Participation
*Effort: a few weeks, ~40+ hours*

You design and simulate an incentive mechanism to encourage honest participation and truthful reporting in a multi-party federated analytics system. You model participant behavior, implement the incentive scheme, and evaluate its effectiveness in improving robustness and data quality under adversarial conditions.

**Why it shows you understood the paper:** This project tackles one of the paper's key open challenges and future directions—designing incentive mechanisms and enhancing robustness in federated analytics—demonstrating deep comprehension and original extension beyond the survey.

**Grounded in:** Addresses the paper's identified limitation and future direction regarding incentive mechanisms and robustness in federated analytics systems.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, SimPy or custom simulation code

**Data:** Synthetic participant data and behavior models generated in simulation to represent distributed private datasets and adversarial clients.

**Build it:**

1. Research existing incentive mechanism concepts applicable to federated analytics.
2. Model participant behaviors including honest and adversarial reporting in a simulated federated analytics environment.
3. Design an incentive scheme (e.g., rewards, penalties) to promote honest participation.
4. Implement the simulation of federated analytics queries with and without the incentive mechanism.
5. Evaluate the impact of the incentive mechanism on data quality, robustness, and participant behavior.
6. Document the design, simulation results, and implications for federated analytics systems.

**Ships as:** A GitHub repo with simulation code, analysis notebooks, and a detailed README discussing the incentive mechanism design and evaluation results.

**Stretch goal:** Prototype a simple decentralized trust model integrating the incentive mechanism to reduce reliance on centralized cloud services.
