---
title: "353 · A NFT (Non-Fungible Token) Chain Model and Performance Study — Nohpill Park"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nohpill-park"
source_hash: "502e6e11e8529bfb4f093962c8df7f463a3df306a3a42ff622e64fbfb5dd3b07"
sequence: 353
generator: "outreach-garden: managed"
---

# 353 · A NFT (Non-Fungible Token) Chain Model and Performance Study

## At a glance

- **Professor:** Nohpill Park
- **Institution:** Oklahoma State University
- **Paper:** [A NFT (Non-Fungible Token) Chain Model and Performance Study](https://www.researchsquare.com/article/rs-3211130/latest.pdf)
- **Authors:** Jongho Seol, Zuqiang Ke, Abhilash Kancharla, Shital Joshi, Nohpill Park
- **Year:** 2022

## Paper overview

This paper proposes a quantitative performance model for NFT chains that handle transactions distributed across on-chain and off-chain components. Using an embedded Markovian queueing model, it tracks transaction slots on both chains to evaluate system performance. Extensive simulations validate the model, showing the importance of balancing transaction rates between on-chain and off-chain to optimize performance.

### Why it matters

**Research problem:** There is a lack of adequate theoretical models addressing the performance issues of NFT chains, especially considering the distribution of transactions across on-chain and off-chain components.

**Why it matters:** NFTs are rapidly expanding as digital assets, and their underlying blockchain systems must efficiently handle high volumes of transactions. Understanding and optimizing NFT chain performance is critical for scalability, cost efficiency, and dependability in blockchain-based NFT applications.

**Key contributions:**

- Development of a bivariate embedded Markovian queueing model for NFT chains considering both on-chain and off-chain transactions.
- Quantitative analysis of NFT chain performance using stochastic modeling of transaction slots.
- Extensive numerical simulations validating the model's efficacy and demonstrating performance trends.
- Identification of the critical importance of managing the balance between on-chain and off-chain transaction rates (λoff ≫ λon) for optimal NFT chain performance.
- Provision of a theoretical foundation for designing NFT chains from a performance perspective.

## About the professor

**Nohpill Park** — Associate Professor, Department of Computer Science, Oklahoma State University.

Research interests: Fuustack design and implementation for NFT (Non-fungible Token), Dependable/High Performance Blockchain-based Crypto Computing, Bigdata Analytics

### Research links

- [Faculty/profile page](http://www.cs.okstate.edu/%7Enpark)
- [Resolved homepage](https://cas.okstate.edu/computer_science/about_us/faculty_staff)
- [Lab website](https://cas.okstate.edu/computer_science/about_us/dr_thomas_lab)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Markovian queueing theory
**The paper assumes:** Markovian queueing theory, stochastic processes, Poisson processes, exponential service time distributions
**Already in this field?** Skip this entirely if you already understand Markovian queueing models and their application to performance evaluation in computer systems.

This background focuses on Markovian queueing theory, which is essential to understand the embedded Markovian queueing model used in the NFT chain performance paper. The rigorous course option provides a deep, structured university-level treatment of queueing theory, while the fast track offers a shorter, focused introduction to key concepts like Poisson processes and Markov chains. Choose the lane that fits your available time and depth needs; the fast track covers the core essentials efficiently, whereas the course offers comprehensive coverage for thorough mastery.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Queueing Theory](https://www.youtube.com/playlist?list=PLwdnzlV3ogoX2OHyZz3QbEYFhbqM7x275) — NPTEL IIT Guwahati · 49 videos · 35.4h across 49 episodes

**Watch only this:** Lectures 1 through 14, about 10 hours — covering queueing systems, Kendall's notation, Little's Law, stochastic processes, Markov chains, Poisson process properties, and M/M/1 queue performance measures.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course is a comprehensive university lecture series on queueing theory, covering Markov chains, Poisson processes, and embedded Markovian models, directly supporting the paper's core methodology.

*If you want all of it:* 35.4 hours across 49 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Queueing Theory Lectures](https://www.youtube.com/playlist?list=PLE-nD0DL6trGIjtwj2dTLxBk61ZmTbcNo) — Dr. Richard Li · 13 videos · 6.8h across 13 episodes

**Watch only this:** Lectures 1 through 7, about 3.5 hours — covering introduction, classification of models, Little's formula, and sample problems on queueing models.

*Why it unblocks this paper:* Dr. Richard Li's Queueing Theory Lectures provide a concise, well-structured introduction to queueing models and key concepts like Little's formula and finite queue models, suitable for quickly grasping the essentials behind the paper's model.

*If you want all of it:* 6.8 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's NFT chain performance model, start with foundational knowledge in queueing theory and stochastic processes, focusing on Poisson process modeling and embedded Markovian queueing models. Then, build blockchain-specific context by studying transaction processing mechanisms. Finally, engage with the core concept of the paper by reviewing the authors' own presentation or closest available advanced talks on NFT chain modeling.

### queueing theory stochastic processes *(prerequisite)*
Queueing theory and stochastic processes provide the mathematical foundation for modeling transaction arrivals and service times in blockchain systems. Understanding these concepts is crucial for grasping how the embedded Markovian queueing model in the paper operates.

*How the paper uses it:* The paper uses stochastic modeling of transaction slots and queueing theory to analyze NFT chain performance.

▶ [MAP6264: Queueing Theory - Lecture 01](https://www.youtube.com/watch?v=AsTuNP0N7DU) — FAU Lectures · 1:21:20

### Poisson process modeling *(prerequisite)*
Poisson processes are key to modeling the random arrival of transactions in the NFT chain system. This concept underpins the paper's assumption of transaction arrivals and is essential for understanding the performance model's input assumptions.

*How the paper uses it:* The paper models transaction arrivals as Poisson processes split into on-chain and off-chain rates.

▶ [L22.2 Definition of the Poisson Process](https://www.youtube.com/watch?v=D_EGYzqmapc) — MIT OpenCourseWare · 5:07

### blockchain transaction processing *(prerequisite)*
A solid understanding of how blockchain transactions are processed on-chain and off-chain is necessary to appreciate the system architecture and performance implications discussed in the paper. This knowledge contextualizes the dual transaction handling modeled in the study.

*How the paper uses it:* The paper analyzes performance considering transactions distributed across on-chain and off-chain components.

▶ [Foundations of Blockchains (Lecture 1.1: Focus of Lecture ...](https://www.youtube.com/watch?v=KNJGPI0fuFA) — Tim Roughgarden Lectures · 9:23

### embedded Markovian queueing model
The embedded Markovian queueing model is the central methodological innovation of the paper, tracking transaction slots on both on-chain and off-chain components. Understanding this model is critical for grasping the paper's performance analysis and simulation results.

*How the paper uses it:* The paper develops a bivariate embedded Markovian queueing model to evaluate NFT chain performance.

▶ [M/M/c Queueing Model](https://www.youtube.com/watch?v=nzHx4cJGrDs) — Stochastic Processes - 1 · 13:42

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the NFT chain performance model paper. Start with blockchain transaction processing to grasp how transactions work on-chain and off-chain. Then learn about Poisson process modeling and queueing theory to build intuition on stochastic transaction arrivals and service. Finally, explore the embedded Markovian queueing model, the core method used in the paper to model NFT chain performance.

### blockchain transaction processing *(prerequisite)*
Learn how blockchain transactions are created, validated, and processed, including the distinction between on-chain and off-chain transactions. This foundation is essential to understand the system the paper models and why balancing transaction loads matters.

*How the paper uses it:* The paper studies NFT chains that distribute transactions across on-chain and off-chain components, so understanding blockchain transaction processing is critical.

▶ [How does a blockchain work - Simply Explained](https://www.youtube.com/watch?v=SSo_EIwHSd4) — Simply Explained · 8 years ago

### Poisson process modeling *(prerequisite)*
Understand the Poisson process as a mathematical model for random events occurring independently over time, which is used to model transaction arrivals in the NFT chain. This helps build intuition about how transaction rates are represented in the paper.

*How the paper uses it:* The paper models transaction arrivals as Poisson processes split into on-chain and off-chain rates.

▶ [L22.2 Definition of the Poisson Process](https://www.youtube.com/watch?v=D_EGYzqmapc) — MIT OpenCourseWare · 5:07

### queueing theory stochastic processes *(prerequisite)*
Explore the basics of queueing theory, which studies waiting lines and service processes using stochastic models. This knowledge is necessary to understand how the paper models transaction slots and waiting times in the NFT chain.

*How the paper uses it:* The paper uses stochastic queueing models to analyze NFT chain performance metrics like waiting time and throughput.

▶ [Introduction to Queuing Theory](https://www.youtube.com/watch?v=PIADNHdY2eg) — Mark Branson · 15:20

### embedded Markovian queueing model
Dive into the embedded Markovian queueing model, which tracks two variables simultaneously to represent on-chain and off-chain transaction slots. This is the core modeling technique used in the paper to capture the NFT chain's performance dynamics.

*How the paper uses it:* The paper develops a bivariate embedded Markovian queueing model to simultaneously track on-chain and off-chain transaction slots.

▶ [M/M/c Queueing Model](https://www.youtube.com/watch?v=nzHx4cJGrDs) — Stochastic Processes - 1 · 13:42


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the NFT chain performance model from the paper. The beginner project reproduces a core simulation metric using familiar tools to grasp the embedded Markovian queueing model basics. The intermediate project reimplements the bivariate queueing model and compares performance metrics under varying transaction rates, deepening insight into the model's behavior. The advanced project extends the model to incorporate non-Poisson transaction arrivals, addressing a key limitation and exploring more realistic NFT marketplace dynamics.

### Beginner — Simulate NFT Chain Transaction Slots with Embedded Markovian Queue
*Effort: a weekend, ~8 hours*

You build a simple discrete-event simulation in Python that models the NFT chain's on-chain and off-chain transaction slots as described by the embedded Markovian queueing model. The simulation tracks the average number of transactions in the system (L) and average waiting time (W) for fixed service rate and varying ratios of on-chain to off-chain transaction arrival rates.

**Why it shows you understood the paper:** This project shows you understand the core stochastic process modeling approach of the paper and can reproduce key performance metrics that validate the model's intuition about transaction balancing.

**Grounded in:** The model employing an embedded Markovian queueing process model, tracks a bivariate state of the NFT chain such that (i, j) where i stochastically tracks the number of slots of the transactions executed on chain and j stochastically tracks the number of transactions off chain as well.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Synthetic transaction arrival data generated via Poisson processes as described in the paper's model.

**Build it:**

1. Implement Poisson process generators for on-chain and off-chain transaction arrivals.
2. Model transaction slots as a bivariate embedded Markovian queue with states (i, j).
3. Simulate the system over time to collect statistics on average number of transactions (L) and waiting time (W).
4. Plot L and W against varying ratios of λ_off to λ_on to reproduce trends shown in the paper.
5. Write a README explaining the model, simulation approach, and results.

**Ships as:** A Python notebook or script with simulation code, plots of performance metrics, and a README explaining the model and results.

**Stretch goal:** Add a simple web UI with React to visualize the simulation state in real time.

### Intermediate — Reimplement and Analyze the Bivariate Embedded Markovian Queueing Model for NFT Chains
*Effort: 2 weekends, ~20 hours*

You reimplement the core bivariate embedded Markovian queueing model from the paper in Python, simulating transaction slot dynamics with Poisson arrivals and exponential service times. You run experiments varying block size (n) and transaction arrival rates, comparing performance metrics (L, W) against a baseline single-variable blockchain queueing model to highlight the benefits of the bivariate approach.

**Why it shows you understood the paper:** This project demonstrates you can faithfully reproduce the paper's core method, understand its quantitative contributions, and critically compare it to simpler models, showing deeper comprehension of NFT chain performance modeling.

**Grounded in:** The authors extend a baseline single-variable blockchain performance model to a bivariate embedded Markovian queueing model that simultaneously tracks the number of transaction slots on-chain and off-chain.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, matplotlib, scipy

**Data:** Synthetic data generated by simulating Poisson transaction arrivals and exponential service times as per the paper's assumptions.

**Build it:**

1. Study the paper's mathematical description of the bivariate embedded Markovian queueing model.
2. Implement the model in Python, simulating the joint state transitions of on-chain and off-chain transaction slots.
3. Implement a baseline single-variable blockchain queueing model for comparison.
4. Run simulations varying block size (n) and λ_on, λ_off ratios, collecting L and W metrics.
5. Plot and compare results, highlighting differences and confirming the paper's findings.
6. Document the implementation details, experiments, and analysis in a comprehensive README.

**Ships as:** A Python project with simulation scripts, comparative plots, and a detailed README analyzing the model's performance and comparison to baseline.

**Stretch goal:** Add parameter sweep automation and generate a report summarizing optimal transaction rate balances.

### Advanced — Extend NFT Chain Queueing Model to Non-Poisson Transaction Arrivals
*Effort: 3+ weeks, ~60 hours*

You extend the bivariate embedded Markovian queueing model by replacing the Poisson arrival assumption with a more realistic bursty or heavy-tailed transaction arrival process (e.g., using a Markov-modulated Poisson process or Weibull inter-arrival times). You simulate the extended model to analyze how performance metrics (L, W) change under these more complex arrival patterns, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations, apply advanced stochastic modeling techniques, and produce novel insights into NFT chain performance under realistic conditions, potentially opening avenues for further research.

**Grounded in:** The model assumes exponential distributions for service times and Poisson arrivals, which may not capture all real-world transaction dynamics. Future directions include extending the model to incorporate more realistic transaction arrival and service time distributions.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, scipy, matplotlib, simpy or custom discrete-event simulation

**Data:** Synthetic transaction arrival data generated from non-Poisson processes (e.g., Markov-modulated Poisson or Weibull distributions) to simulate bursty NFT marketplace activity.

**Build it:**

1. Research and select appropriate non-Poisson arrival processes to model bursty NFT transactions.
2. Modify the bivariate embedded Markovian queueing model to incorporate these arrival processes.
3. Implement the extended model in Python, ensuring correct state transition logic.
4. Simulate the system under various parameter settings and compare performance metrics to the original Poisson-based model.
5. Analyze and visualize how burstiness affects waiting times and throughput.
6. Write a detailed report discussing the methodology, results, and implications for NFT chain design.

**Ships as:** A Python codebase implementing the extended model, simulation results comparing Poisson vs. non-Poisson arrivals, and a comprehensive README/report discussing findings and future work.

**Stretch goal:** Integrate adaptive mechanisms that dynamically adjust on-chain/off-chain transaction rates based on observed arrival patterns.
