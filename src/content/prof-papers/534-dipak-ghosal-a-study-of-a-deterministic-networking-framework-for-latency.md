---
title: "534 · A Study of a Deterministic Networking Framework for Latency Critical Large Scientific Data Transfers — Dipak Ghosal"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dipak-ghosal"
source_hash: "8cb93200b87fa0257df77ed278f7d913f76ae069c8f122351259739006bfb96f"
sequence: 534
generator: "outreach-garden: managed"
---

# 534 · A Study of a Deterministic Networking Framework for Latency Critical Large Scientific Data Transfers

## At a glance

- **Professor:** Dipak Ghosal
- **Institution:** Univ. of California - Davis
- **Paper:** [A Study of a Deterministic Networking Framework for Latency Critical Large Scientific Data Transfers](https://doi.org/10.1109/SCW63240.2024.00110)
- **Authors:** Vijeth Kumbarahally Lakshminarayana, Carolina Minami Oguchi, Alex Sim, Kesheng Wu, Dipak Ghosal
- **Year:** 2024

## Paper overview

This paper studies a deterministic networking framework designed to support large scientific data transfers that require guaranteed completion times. It compares this framework, based on Time-Sensitive Networking (TSN) principles and Cyclic Queueing and Forwarding (CQF), with existing circuit-based bandwidth reservation schemes. The study uses simulations to evaluate performance in terms of flow latency and acceptance rates, showing that the deterministic approach performs comparably to dynamic bandwidth reservation methods.

### Why it matters

**Research problem:** Scientific workflows generate large volumes of data that need to be transferred across networks with strict completion-time guarantees. Current best-effort packet networks lack such guarantees, and existing circuit reservation methods can be inefficient or inflexible.

**Why it matters:** Reliable and timely data transfers are critical for modern scientific research across disciplines like physics, biology, and materials science. Improving network performance for these workflows enables faster analysis and discovery, supporting data-driven scientific paradigms.

**Key contributions:**

- Proposed applying TSN and CQF, originally designed for LANs, to WANs for scientific data transfers.
- Developed a simulation model comparing CQF with existing circuit reservation schemes.
- Analyzed trade-offs in CQF cycle time affecting latency and bandwidth utilization.
- Demonstrated that CQF achieves comparable flow acceptance rates and latencies to dynamic bandwidth reservation.
- Identified potential for further optimization of deterministic networking using advanced techniques.

## About the professor

**Dipak Ghosal** — Professor, Department of Computer Science, Univ. of California - Davis.

Research interests: High-speed Networks, Wireless Networks, Vehicular Ad-hoc Networks, Parallel and Distributed Systems, Timing Channels, Performance Evaluation of Computer and Communication Systems

### Research links

- [Faculty/profile page](http://faculty.engineering.ucdavis.edu/ghosal)
- [Professor website](http://dipakghosal.cs.ucdavis.edu/)
- [Resolved homepage](https://dipakghosal.cs.ucdavis.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on deterministic networking for latency-critical scientific data transfers, start with foundational knowledge on Time-Sensitive Networking (TSN) and circuit-switched bandwidth reservation, as these underpin the deterministic framework and provide context for comparison. Next, explore Wide Area Network (WAN) performance evaluation and scientific data transfer workflows to grasp the application environment and requirements. Finally, focus on the core concept of Cyclic Queueing and Forwarding (CQF) and the authors' own talk presenting their novel framework, which ties all these elements together.

### Time-Sensitive Networking (TSN) *(prerequisite)*
TSN principles form the foundation of the deterministic networking approach studied in the paper. Understanding TSN standardization, its toolbox, and how it enables deterministic Ethernet is essential to appreciate the framework's design and guarantees.

*How the paper uses it:* The paper's deterministic networking framework is based on TSN principles to provide latency guarantees.

▶ [Time-Sensitive Networking Standardization](https://www.youtube.com/watch?v=MI30rR4fdYE) — IEEE Standards Association · 32:19 · 10 months ago

### Circuit-Switched Bandwidth Reservation *(prerequisite)*
Circuit-switched bandwidth reservation schemes represent the existing methods against which the paper compares the CQF-based deterministic approach. A solid understanding of circuit switching and bandwidth reservation is necessary to evaluate the paper's contributions and results.

*How the paper uses it:* The paper compares CQF with fixed and dynamic circuit-switched bandwidth reservation schemes.

▶ [Switching Techniques in Computer Networks](https://www.youtube.com/watch?v=-HlJ4psu5aU) — Neso Academy · 12:35 · 6 years ago

### Wide Area Network (WAN) Performance Evaluation *(prerequisite)*
Since the paper evaluates the deterministic networking framework using simulations on a WAN topology, understanding WAN architectures and performance considerations is important. This knowledge contextualizes the simulation environment and the challenges addressed.

*How the paper uses it:* The paper uses a realistic ESnet WAN topology for simulation-based performance evaluation.

▶ [Wide Area Network (WAN) Topologies](https://www.youtube.com/watch?v=9WkZT0YMZ70) — Kevin Wallace Training, LLC · 10:49 · 7 years ago

### Scientific Data Transfer Workflows *(prerequisite)*
The application domain of the paper involves large scientific data transfers with strict completion guarantees. Understanding scientific workflows and their data transfer requirements helps appreciate the motivation and impact of the proposed networking framework.

*How the paper uses it:* The paper targets scientific workflows generating large data volumes requiring timely transfers.

▶ [Scientific Workflows for Science and the Science of Scientific Workflows](https://www.youtube.com/watch?v=9Sr9K0uI80s) — UQ Research Computing Centre · 39:35 · 10 years ago

### Cyclic Queueing and Forwarding (CQF)
CQF is the core algorithm enabling deterministic latency guarantees in the network. A thorough understanding of queueing models and CQF's operation is crucial to grasp how the proposed framework achieves its performance and control benefits.

*How the paper uses it:* CQF is the central algorithm studied and simulated in the paper for deterministic networking.

▶ [Lec-30 Queueing Models](https://www.youtube.com/watch?v=xGkpXk-AnWU) — nptelhrd · 58:32 · 16 years ago

### Paper-specific author talk *(the paper's own talk)*
The authors' own presentation provides direct insights into their deterministic networking framework, simulation methodology, and key findings. This talk is the most authoritative and focused resource to understand the paper's contributions and context.

*How the paper uses it:* This talk is by the paper's author presenting their novel deterministic networking framework.

▶ [Work Towards the Problem | Lakshmi Narayanan | Cognizant | ICTACT Bridge](https://www.youtube.com/watch?v=kiXT6FPOfDo) — ICT Academy · 24:28 · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on deterministic networking for latency-critical scientific data transfers, start by learning about the context of scientific data workflows and why timely data transfer matters. Then build foundational knowledge on Wide Area Networks (WANs) and circuit-switched bandwidth reservation schemes, which are the existing methods compared in the paper. Next, grasp the principles of Time-Sensitive Networking (TSN), the basis for the proposed framework, before diving into the core algorithm Cyclic Queueing and Forwarding (CQF) that enables deterministic guarantees.

### Scientific Data Transfer Workflows *(prerequisite)*
Scientific workflows involve processing and transferring large volumes of data across distributed computing resources. Understanding these workflows helps appreciate the need for reliable, timely data transfers with strict completion guarantees.

*How the paper uses it:* The paper targets large scientific data transfers that require guaranteed completion times to support modern scientific research.

▶ [Scientific Workflows for Science and the Science of Scientific Workflows](https://www.youtube.com/watch?v=9Sr9K0uI80s) — UQ Research Computing Centre · 39:35 · 10 years ago

### Wide Area Network (WAN) Performance Evaluation *(prerequisite)*
Wide Area Networks connect geographically dispersed nodes and have unique performance challenges like latency and bandwidth constraints. Learning about WAN architectures and performance evaluation provides context for the network environment studied in the paper.

*How the paper uses it:* The paper simulates the deterministic networking framework on a realistic WAN topology (ESnet) to evaluate performance.

▶ [Wide Area Network (WAN) Topologies](https://www.youtube.com/watch?v=9WkZT0YMZ70) — Kevin Wallace Training, LLC · 10:49 · 7 years ago

### Circuit-Switched Bandwidth Reservation *(prerequisite)*
Circuit switching reserves a dedicated communication path with fixed bandwidth for the duration of a connection, ensuring predictable performance but with potential inefficiencies. Understanding this helps contrast the paper's deterministic approach with existing reservation schemes.

*How the paper uses it:* The paper compares the proposed CQF-based deterministic networking framework against fixed and dynamic circuit-switched bandwidth reservation schemes.

▶ [Switching Techniques in Computer Networks](https://www.youtube.com/watch?v=-HlJ4psu5aU) — Neso Academy · 12:35 · 6 years ago

### Time-Sensitive Networking (TSN) *(prerequisite)*
TSN is a set of standards that enable deterministic, low-latency communication over Ethernet by controlling traffic scheduling and timing. It forms the foundation of the paper's proposed deterministic networking framework.

*How the paper uses it:* The paper applies TSN principles to wide area networks to achieve deterministic guarantees for scientific data transfers.

▶ [Time-Sensitive Networking (TSN) Explained: Deterministic Ethernet for Real-Time Systems | Uplatz](https://www.youtube.com/watch?v=F6vUSPKOPLk) — Uplatz · 7:32 · 6 months ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the deterministic networking framework based on TSN and CQF for latency-critical scientific data transfers. The beginner project reproduces a key simulation metric from the paper using your existing Python skills. The intermediate project implements a simplified CQF simulation and compares it to a fixed bandwidth reservation baseline, introducing network simulation concepts. The advanced project extends the paper by exploring multipath routing effects on CQF performance, addressing a stated limitation and requiring new simulation design and analysis.

### Beginner — Simulate CQF Flow Acceptance Rate vs Cycle Time
*Effort: a weekend, ~8 hours*

You build a simple Python script to simulate the flow acceptance rate of the CQF deterministic networking scheme as a function of the cycle time T, reproducing the key result shown in the paper's Figure 5. The simulation models a small network with fixed parameters and plots acceptance rate versus T.

**Why it shows you understood the paper:** This project shows you understand the core CQF mechanism and its sensitivity to cycle time, a key contribution of the paper. It demonstrates your ability to translate the paper's simulation setup and metrics into working code.

**Grounded in:** CQF cycle time T critically affects flow latency and acceptance rate. "The flow acceptance rate as a function of T is shown... with a proper choice of T, CQF can achieve comparable flow acceptance rates."

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Simulated network traffic parameters based on the paper's description; no external dataset required.

**Build it:**

1. Implement a simplified CQF flow acceptance rate model in Python based on the paper's description.
2. Simulate flow arrivals and acceptance decisions for varying CQF cycle times T.
3. Plot flow acceptance rate versus cycle time T to reproduce the paper's trend.
4. Write a README explaining the CQF concept, simulation assumptions, and results.

**Ships as:** A Python script and README showing a plot of flow acceptance rate vs CQF cycle time T, reproducing the paper's key simulation result.

**Stretch goal:** Add flow latency simulation and plot latency vs cycle time T to deepen understanding.

### Intermediate — Implement CQF and Fixed Bandwidth Reservation Simulation
*Effort: 1-3 weekends, ~20 hours*

You develop a network simulation in Python that implements the CQF deterministic forwarding algorithm and a fixed bandwidth reservation (BRCSR) baseline on a small WAN topology. You simulate scientific data flows with arrival rates and sizes, measure flow acceptance rates and latencies, and compare CQF against BRCSR.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method (CQF) and baseline (fixed bandwidth reservation) from the paper's descriptions, and to evaluate their performance metrics as done in the paper's simulations. It shows you grasp the trade-offs and evaluation methodology.

**Grounded in:** Developed a simulation model comparing CQF with existing circuit reservation schemes. "CQF performs comparably to fixed bandwidth reservation in latency and acceptance rate."

**Tech stack:** Python 3.11, networkx, matplotlib, numpy

**Data:** Simulated WAN topology inspired by ESnet with 30 nodes and 41 links as described in the paper; synthetic flow arrival and size distributions.

**Build it:**

1. Model a simplified WAN topology with networkx representing nodes and links.
2. Implement CQF forwarding logic and fixed bandwidth reservation scheme for flow admission.
3. Simulate flow arrivals with sizes and deadlines, run admission control under both schemes.
4. Measure and plot flow acceptance rates and average latencies for both schemes under varying load.
5. Document the simulation design, assumptions, and results in a README.

**Ships as:** A Python simulation repository with scripts and plots comparing CQF and fixed bandwidth reservation on flow acceptance and latency metrics.

**Stretch goal:** Add dynamic bandwidth reservation (FBCSR) as a third scheme for comparison.

### Advanced — Explore Multipath Routing Effects on CQF Performance
*Effort: a few weeks, ~40+ hours*

You extend your CQF simulation to incorporate multipath routing strategies to address one of the paper's stated limitations. You design and implement multipath routing algorithms in the WAN simulation and evaluate their impact on flow acceptance rates and latency under CQF scheduling.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of CQF and WAN routing. It shows initiative in extending the deterministic networking framework and contributes novel simulation insights.

**Grounded in:** Limitations: "Routing is limited to shortest path; multipath routing is not explored." Future directions: "Investigate multipath routing to improve completion guarantees and bandwidth utilization."

**Tech stack:** Python 3.11, networkx, matplotlib, numpy

**Data:** Synthetic WAN topology and flow workload as in the intermediate project; no external dataset.

**Build it:**

1. Extend the WAN simulation to support multiple routing paths per flow.
2. Implement multipath routing algorithms (e.g., equal-cost multipath, k-shortest paths).
3. Integrate multipath routing with CQF scheduling and admission control.
4. Simulate and compare flow acceptance rates and latencies with and without multipath routing under varying network loads.
5. Analyze and document the impact of multipath routing on CQF performance in a detailed README.

**Ships as:** An extended simulation codebase demonstrating multipath routing effects on CQF, with analysis and plots in the README.

**Stretch goal:** Incorporate adaptive CQF cycle time tuning using simple heuristics or reinforcement learning to optimize performance.
