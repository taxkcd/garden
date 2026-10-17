---
title: "733 · Scalability and Efficiency of Push-Driven P2PTV Systems — Sugih Jamin"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sugih-jamin"
source_hash: "3db268eb5602af8012e37de20cb990e5f393770ef2cdffde24ad46b38bc49cc8"
sequence: 733
generator: "outreach-garden: managed"
---

# 733 · Scalability and Efficiency of Push-Driven P2PTV Systems

## At a glance

- **Professor:** Sugih Jamin
- **Institution:** University of Michigan
- **Paper:** [Scalability and Efficiency of Push-Driven P2PTV Systems](https://jcoms.fesb.unist.hr/pdfs/jcomss_v7n3_september2011_93-103.pdf)
- **Authors:** Cyril Cassagnes, Damien Magoni, Hyunseok Chang, Wenjie Wang, Sugih Jamin
- **Year:** 2011

## Paper overview

This paper studies how peer-to-peer television streaming systems (P2PTV) perform as more users join the network. Using real data from a large European P2PTV service, the authors simulate the system to understand what factors affect its scalability and efficiency. They find that the upload capacity of users and how long they stay connected are critical to system performance, while the method of choosing peers to connect to has less impact. The paper also explores how system settings like splitting video streams into substreams and buffer sizes affect user experience.

### Why it matters

**Research problem:** How well do push-driven peer-to-peer television (P2PTV) systems scale and maintain efficiency as the number of users grows, especially under realistic user behavior and network conditions?

**Why it matters:** P2PTV offers an attractive way to deliver live TV over the Internet with potential bandwidth savings and ease of deployment. Understanding its scalability and efficiency is crucial for widespread adoption and to ensure good user experience under heavy load.

**Key contributions:**

- Analysis of 9.8 million real P2PTV sessions to derive distributions of session length, upload capacity, inter-arrival time, and NAT types.
- Simulation of a realistic P2PTV overlay network based on empirical data.
- Demonstration that upload capacity (redistribution factor) and session length have the strongest impact on scalability and user viewing time.
- Finding that peer selection algorithms have minimal effect on scalability compared to user characteristics.
- Evaluation of overlay parameters such as number of substreams, buffer size, and search attempts on system performance.

## About the professor

**Sugih Jamin** — Associate Professor, EECS - Computer Science and Engineering, University of Michigan.

Research interests: Dynamic behaviors of large-scale systems, probabilistic distributed algorithms, computer network protocols and architectures, computer graphics.

### Research links

- [Faculty/profile page](https://eecs.engin.umich.edu/people/jamin-sugih)
- [Identity evidence](http://web.eecs.umich.edu/~sugih)
- [Professor website](http://web.eecs.umich.edu/~sugih/)
- [Resolved homepage](https://web.eecs.umich.edu/~sugih/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Peer-to-peer network modeling
**The paper assumes:** peer-to-peer network architectures, overlay network modeling, network simulation techniques, NAT traversal basics
**Already in this field?** Skip this entirely if you already understand peer-to-peer network design and modeling, including overlay construction and common network constraints like NAT.

This background focuses on peer-to-peer (P2P) network modeling, essential for understanding the simulation and analysis of P2PTV systems in the paper. The rigorous course offers a deep dive into distributed computing concepts including P2P networks, while the fast track provides a concise, practical introduction to building and understanding basic P2P networks. Choose the course for comprehensive foundational knowledge; choose the fast track for a quick, focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Distributed Computing CS-332](https://www.youtube.com/playlist?list=PLpTMNSADLSk11eV_XfoeQJYPelQsLKhg4) — Seekho Lecture TV · 27 videos · 16.6h across 27 episodes

**Watch only this:** Episodes W03-L04-Video09 (Mar 11, slides 1-30) and W03-L05-Video11 (Mar 22, slides 8-18) on P2P Networks, totaling about 1.2 hours — these cover P2P network basics and overlay construction relevant to the paper's simulation approach.

*Why it unblocks this paper:* This university-level distributed computing course covers fundamental design issues and algorithms in distributed systems, including peer-to-peer systems, which directly relate to the paper's focus on P2PTV overlay networks, scalability, and efficiency.

*If you want all of it:* All 27 episodes, approximately 16.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computer Networks](https://www.youtube.com/playlist?list=PL3rRfWY-TjF6YF6fMYDkv9h3RLDcC5Rxc) — Prof.Vandana Chaurasia · 9 videos · 0.3h across 9 episodes

**Watch only this:** Episode 'Practical-02 || Building a Basic Peer-to-Peer Network', about 8 minutes — sufficient for a quick understanding of P2P network basics relevant to the paper.

*Why it unblocks this paper:* This short-form playlist by Prof.Vandana Chaurasia includes a focused episode on building a basic peer-to-peer network, providing a quick, practical introduction to P2P concepts needed to grasp the paper's context.

*If you want all of it:* All 9 episodes, about 0.3 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the scalability and efficiency of push-driven P2PTV systems as studied in the paper, start by building foundational knowledge on peer-to-peer overlay networks and network scalability analysis, which underpin the system architecture and performance evaluation. Next, study NAT traversal techniques critical for peer connectivity in P2P systems. Finally, focus on the core concept of push-driven P2P streaming, including the authors' own detailed talk if available, to grasp the specific methodologies and findings of the paper.

### Peer-to-peer overlay networks *(prerequisite)*
Understanding peer-to-peer overlay networks is essential as they form the fundamental architecture underlying P2PTV systems. This includes knowledge of structured overlays, peer discovery, and distributed hash tables, which are crucial for grasping how peers connect and share video streams in the network.

*How the paper uses it:* The paper's P2PTV system relies on a push-driven overlay network architecture, making overlay network fundamentals critical to understanding the system design.

▶ [Peer-to-Peer Computing and Structured Overlay Network](https://www.youtube.com/watch?v=GYrvRCtIZz4) — Distributed Systems · 46:54 · 9y ago

### Network scalability analysis *(prerequisite)*
Network scalability analysis provides the tools and concepts to evaluate how system performance changes as the number of users grows. This is vital for interpreting the paper's simulation results on scalability and understanding bottlenecks in large-scale P2P streaming systems.

*How the paper uses it:* The paper investigates how P2PTV systems scale with increasing users, making scalability analysis foundational to its research problem.

▶ [DOE CSGF 2012: Approaches for Scalable Performance Analysis and Optimization](https://www.youtube.com/watch?v=TW5akV1K_Mw) — Krell Institute · 57:16 · 14y ago

### NAT traversal techniques *(prerequisite)*
NAT traversal techniques are critical for enabling peer connectivity across different network configurations, directly impacting system efficiency and user experience in P2PTV systems. Understanding these techniques helps contextualize the paper's findings on NAT compatibility issues reducing view time.

*How the paper uses it:* The paper identifies NAT compatibility as a significant factor affecting peer connectivity and system performance under high load.

▶ [ch43 ep#10 NAT Traversal](https://www.youtube.com/watch?v=KIwhuvdmHZU) — Polly Huang · 8:34 · 5y ago

### Push-driven P2P streaming
This is the core concept studied in the paper, focusing on how push-driven architectures distribute live video streams among peers. Studying this topic provides direct insight into the system design choices, challenges, and performance trade-offs analyzed in the paper.

*How the paper uses it:* The paper specifically analyzes push-driven, substream-based P2PTV systems using real-world data and simulations.

▶ [Advances in P2P Live Video Streaming](https://www.youtube.com/watch?v=UaYyrd1gWZA) — Microsoft Research · 1:24:10 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the scalability and efficiency of push-driven P2PTV systems, start by learning the fundamentals of peer-to-peer overlay networks, which form the backbone of P2PTV architectures. Next, grasp the basics of network scalability analysis to appreciate how system performance changes as users grow. Then, study NAT traversal techniques, critical for peer connectivity in P2P systems. Finally, focus on push-driven P2P streaming concepts to directly connect with the paper's core methodology and findings.

### Peer-to-peer overlay networks *(prerequisite)*
Peer-to-peer overlay networks are virtual networks built on top of existing physical networks, enabling direct peer connections without centralized servers. Understanding their structure and operation is essential to grasp how P2PTV systems distribute video streams among users.

*How the paper uses it:* The paper analyzes a P2PTV overlay network where peers exchange video substreams, making overlay network fundamentals crucial.

▶ [Peer-to-Peer Computing and Structured Overlay Network](https://www.youtube.com/watch?v=GYrvRCtIZz4) — Distributed Systems · 46:54 · 9y ago

### Network scalability analysis *(prerequisite)*
Network scalability analysis studies how network performance metrics like throughput and latency evolve as the number of users or load increases. This knowledge helps in understanding the challenges and limits of scaling P2PTV systems.

*How the paper uses it:* The paper evaluates how P2PTV system performance and user viewing time degrade as traffic load and peer count increase.

▶ [Scalability Simply Explained in 10 Minutes](https://www.youtube.com/watch?v=EWS_CIxttVw) — ByteByteGo · 9:20 · 2y ago

### NAT traversal techniques *(prerequisite)*
NAT traversal techniques enable peers behind Network Address Translators (NATs) to establish direct connections, which is vital for peer connectivity in P2P networks. Without effective NAT traversal, many peers cannot participate fully, reducing system efficiency.

*How the paper uses it:* The paper finds NAT compatibility issues reduce peer connectivity and viewing time by up to 15% under high load.

▶ [ch43 ep#10 NAT Traversal](https://www.youtube.com/watch?v=KIwhuvdmHZU) — Polly Huang · 8:34 · 5y ago

### Push-driven P2P streaming
Push-driven P2P streaming involves peers proactively sending video substreams to others, contrasting with pull-based approaches. Understanding this method is key to appreciating the paper's simulation of substream-based P2PTV overlays and their scalability characteristics.

*How the paper uses it:* The paper simulates a push-driven, substream-based P2PTV system to study scalability and efficiency under realistic user behavior.

▶ [Advances in P2P Live Video Streaming](https://www.youtube.com/watch?v=UaYyrd1gWZA) — Microsoft Research · 1:24:10 · 10y ago

## Already in your library

- [How Peer to Peer (P2P) Network works | System Design Interview Basics](https://www.youtube.com/watch?v=2v6KqRB7adg) — also for: MyZone: A Next-Generation Online Social Network (John Black)
- [Peer-to-Peer Architectural Model: Overlay Network, Unstructured & Structured P2P, Advtgs & Disadvtgs](https://www.youtube.com/watch?v=5TlXplq3wv4) — also for: Managing Edge Resources at Scale: A Peer-to-Peer CDN for On-Demand Video Streaming (Klara Nahrstedt)
- [NAT-T (NAT Traversal) In English for SD-WAN:Encapsulates IPsec traffic in UDP (usually port 4500)](https://www.youtube.com/watch?v=VMeYfLcfB_M) — also for: MyZone: A Next-Generation Online Social Network (John Black)
- [Tailscale Webinar - NAT Traversal explained with Lee Briggs](https://www.youtube.com/watch?v=7EoCa9HP9Bc) — also for: MyZone: A Next-Generation Online Social Network (John Black)
- [NAT Explained - Network Address Translation](https://www.youtube.com/watch?v=FTUV0t6JaDA) — also for: MyZone: A Next-Generation Online Social Network (John Black)
- [NAT and NAT-Traversal Explained - Network Address Translation](https://www.youtube.com/watch?v=5DhHcIuBn1g) — also for: MyZone: A Next-Generation Online Social Network (John Black)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the scalability and efficiency factors in push-driven P2PTV systems studied in the paper. The beginner project reproduces a key metric from the paper using simple simulation and visualization. The intermediate project implements a core simulation model of the P2PTV overlay using realistic user behavior parameters and compares peer selection algorithms. The advanced project extends the simulation to explore incentive or peer filtering mechanisms to improve upload capacity and reduce churn, addressing a stated future direction of the paper.

### Beginner — Simulate and Visualize Peer Upload Capacity Distribution
*Effort: a weekend, ~8 hours*

You build a simple simulation that generates a distribution of peer upload capacities (redistribution factors) based on the paper's reported statistics, then visualize this distribution and its impact on scalability metrics like the average redistribution factor. This reproduces the paper's finding that about 50% of peers redistribute less than 50% of a full stream.

**Why it shows you understood the paper:** This project shows you grasp the critical role of upload capacity in limiting P2PTV scalability and can translate empirical distributions into meaningful visualizations.

**Grounded in:** Analysis of 9.8 million real P2PTV sessions to derive distributions of upload capacity (redistribution factor) and the finding that 50% of peers redistribute less than 50% of a full stream, limiting scalability.

**Tech stack:** Python 3.11, matplotlib, numpy, pandas

**Data:** Simulated upload capacity data synthesized based on the distribution statistics reported in the paper (no public dataset available).

**Build it:**

1. Extract the reported statistics of upload capacity distribution (redistribution factor k) from the paper.
2. Write a Python script to generate a synthetic sample of peer upload capacities following the reported distribution shape.
3. Calculate summary statistics such as the fraction of peers below 0.5 redistribution factor and the average k.
4. Plot histograms and cumulative distribution functions to visualize the upload capacity distribution.
5. Plot a simple metric showing how average redistribution factor affects potential scalability.
6. Write a README explaining the simulation, visualization, and connection to the paper's results.

**Ships as:** A GitHub repo with Python scripts and plots showing the upload capacity distribution and its impact on scalability, with clear explanation linking to the paper's findings.

**Stretch goal:** Add simulation of session length distribution and visualize combined effects on view time ratio.

### Intermediate — Simulate Push-Driven P2PTV Overlay with Peer Selection Comparison
*Effort: 1-3 weekends*

You implement a simplified push-driven P2PTV overlay network simulator that models peers joining and leaving, upload capacity constraints, and substream splitting. You incorporate realistic user behavior parameters (session length, upload capacity) as reported in the paper. You implement and compare at least two peer selection algorithms (e.g., random and upload-based) and measure their impact on the view time ratio metric.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core simulation approach and verify the paper's key result that peer selection algorithms have minimal effect on scalability compared to user characteristics.

**Grounded in:** Simulation of a realistic P2PTV overlay network based on empirical data and finding that peer selection algorithms differ little in improving view time ratio compared to user characteristics.

**Tech stack:** Python 3.11, networkx, numpy, matplotlib

**Data:** User behavior parameters (session length, upload capacity) synthesized from distributions reported in the paper; no public dataset available.

**Build it:**

1. Design data structures to represent peers and substreams in the overlay network.
2. Implement peer arrival and departure processes using session length and inter-arrival time distributions from the paper.
3. Model upload capacity constraints and redistribution factor per peer.
4. Implement push-driven streaming with substream splitting and buffer simulation.
5. Implement at least two peer selection algorithms: random and upload-capacity-based.
6. Run simulations under varying traffic loads and measure view time ratio for each algorithm.
7. Plot and compare results, highlighting minimal differences between peer selection methods.
8. Document the simulation design, assumptions, and results in a README.

**Ships as:** A GitHub repo with the P2PTV overlay simulator code, scripts to run experiments comparing peer selection algorithms, and plots reproducing the paper's key scalability results.

**Stretch goal:** Add NAT compatibility modeling and measure its impact on view time ratio under high load.

### Advanced — Incentive-Based Peer Filtering to Improve P2PTV Scalability
*Effort: a few weeks*

You extend the P2PTV overlay simulation to implement and evaluate an incentive or peer filtering mechanism that prioritizes peers with higher upload capacity and longer session lengths, aiming to improve the redistribution factor and reduce churn. You compare this approach against the baseline random peer selection and upload-based selection, measuring improvements in view time ratio and scalability under realistic traffic loads.

**Why it shows you understood the paper:** This project addresses a stated future direction of the paper by exploring adaptive peer filtering to improve system performance, demonstrating your ability to extend the core model and contribute novel insights.

**Grounded in:** Future direction: filtering or incentivizing peers with higher upload capacity to improve redistribution factor and reduce churn.

**Tech stack:** Python 3.11, networkx, numpy, matplotlib, pandas

**Data:** Synthesized user behavior data based on the paper's distributions; simulation extended from the intermediate project.

**Build it:**

1. Build upon the intermediate P2PTV overlay simulator implementation.
2. Design and implement an incentive mechanism that filters or prioritizes peers with higher upload capacity and longer session lengths for substream redistribution.
3. Incorporate churn reduction strategies by favoring long-lived peers near the source.
4. Run simulations comparing baseline peer selection algorithms with the incentive-based filtering under varying traffic loads.
5. Measure and plot view time ratio, number of interruptions, and redistribution factor improvements.
6. Analyze trade-offs such as increased search attempts or saturation effects.
7. Write a detailed report in the README discussing the design, results, and relation to the paper's limitations and future directions.

**Ships as:** A GitHub repo with the extended simulator, scripts for incentive-based peer filtering experiments, and analysis showing potential scalability improvements, linked explicitly to the paper's future directions.

**Stretch goal:** Incorporate improved NAT traversal modeling and evaluate combined effects with incentive mechanisms.

_The paper's authors did not release code or datasets; all data must be synthesized based on reported distributions, and simulations reimplemented from the paper's descriptions._
