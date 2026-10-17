---
title: "675 · Demo: Decoding Control Information Passively from Standalone 5G Network — Alexander Marder"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alexander-marder"
source_hash: "60c979302b6369a8eb1002bd18964616fcb2633308c942d033ae318ce2358a89"
sequence: 675
generator: "outreach-garden: managed"
---

# 675 · Demo: Decoding Control Information Passively from Standalone 5G Network

## At a glance

- **Professor:** Alexander Marder
- **Institution:** Johns Hopkins University
- **Paper:** [Demo: Decoding Control Information Passively from Standalone 5G Network](https://doi.org/10.1145/3636534.3698840)
- **Authors:** Haoran Wan, Xuyang Cao, Alexander Marder, Kyle Jamieson
- **Year:** 2024

## Paper overview

This paper presents NR-Scope, a system that passively decodes control information from standalone 5G networks to measure fine-grained radio access network (RAN) telemetry such as capacity, latency, and retransmission. NR-Scope operates independently of network operators and devices, providing real-time insights into network performance and user equipment throughput without interfering with the network.

### Why it matters

**Research problem:** 5G standalone networks are closed systems that limit application visibility into the radio access network, making it difficult to optimize application performance due to variable wireless conditions and lack of telemetry data.

**Why it matters:** Wireless network variability affects application performance, especially for latency-sensitive and throughput-demanding applications like cloud gaming and remote surgery. Without access to detailed RAN telemetry, applications cannot adapt effectively, and network operators cannot enable co-design with applications.

**Key contributions:**

- Development of NR-Scope, a passive, independently deployable 5G RAN telemetry system.
- Real-time decoding of downlink and uplink control information from 5G standalone networks.
- Accurate throughput estimation per user equipment with sub-millisecond granularity.
- Demonstration of NR-Scope on indoor private, industrial test, and potentially commercial 5G cells.
- Applications enabling improved congestion control, cloud gaming performance, spectrum consumption modeling, and security situational awareness.

## About the professor

**Alexander Marder** — Assistant Professor, Computer Science, Johns Hopkins University.

Research interests: My research uses empirical analyses to improve the security, resilience, and performance of networked systems. I bring a unique skill set to network analysis and design, with a deep understanding of Internet topology, creative approaches to gathering data, and extensive experience measuring network properties.

### Research links

- [Faculty/profile page](https://alexmarder.github.io)
- [GitHub](https://github.com/alexmarder)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** 5G NR Physical Layer and Control Channels
**The paper assumes:** 5G NR physical layer protocols, downlink control information structure, radio resource control signaling
**Already in this field?** Skip this entirely if you already understand 5G NR physical layer design and control channel signaling.

This background focuses on understanding the 5G New Radio (NR) physical layer and control channels, which are essential to grasp how NR-Scope passively decodes control information from standalone 5G networks. The rigorous course offers a deep, structured dive into 5G wireless standard design, ideal for readers seeking comprehensive technical mastery. The fast track provides a concise, visual introduction to the 5G NR physical layer and control signaling, suitable for those needing a quicker but still substantive overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [5G Wireless Standard Design](https://www.youtube.com/playlist?list=PLFW6lRTa1g81SMpel8aIFBubvO0h1UOJV) — IIT KANPUR-NPTEL · 60 videos · 28.9h across 60 episodes

**Watch only this:** Lectures 2 through 6, and 22 through 24, about 3.5 hours — covering adaptive modulation and coding, HARQ, OFDM, numerology, frame structure, and the physical downlink control channel transmit chain including CRC, segmentation, and polar encoding.

*Why it unblocks this paper:* This IIT Kanpur NPTEL course thoroughly covers 5G wireless standard design, including key physical layer technologies and control channel structures such as PDCCH and DCI decoding, directly underpinning the paper's core methods.

*If you want all of it:* 28.9 hours across 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [5G NR Physical Layer](https://www.youtube.com/playlist?list=PLpY6z9J7HsohxzMfkCjUPoqyABXWfpswj) — Birendra Singh · 12 videos · 5.1h across the first 11 episodes

**Watch only this:** Episodes 4, 10, and 11, about 1.5 hours — covering 5G physical layer introduction, physical downlink control channel (PDCCH), and downlink control information (DCI).

*Why it unblocks this paper:* Birendra Singh’s playlist offers a focused and accessible introduction to the 5G NR physical layer and control channels, including a dedicated episode on 5G NR Downlink Control Information (DCI), matching the paper's emphasis on control information decoding.

*If you want all of it:* 5.1 hours across the first 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Demo: Decoding Control Information Passively from Standalone 5G Network,' start by building foundational knowledge on 5G standalone network architecture, software defined radio (SDR) technology, and radio access network (RAN) telemetry techniques. These prerequisites provide the necessary context on the network environment, the hardware platform used for passive decoding, and existing telemetry methods. Finally, focus on the core concept of NR-Scope's passive decoding of 5G control information, prioritizing the authors' own talks or advanced technical presentations to grasp the system design and real-time decoding approach.

### 5G standalone network architecture *(prerequisite)*
Understanding the architecture and operation of 5G standalone (SA) networks is essential to contextualize NR-Scope's deployment and its ability to decode control information independently of the core network. This includes knowledge of 5G core components, call flows, and how SA differs from non-standalone modes.

*How the paper uses it:* NR-Scope targets standalone 5G networks to passively decode control information without operator or device cooperation.

▶ [5G Core Architecture, Concepts, Call Flows & Procedures | Hands-On Training – Part 1](https://www.youtube.com/watch?v=kQZRH5txCJE) — NextGen Telecom Research and Development · 55:53 · 1mo ago

### Software defined radio for wireless monitoring *(prerequisite)*
NR-Scope relies on software defined radio hardware to capture and decode 5G control signals passively. A thorough understanding of SDR principles, architecture, and signal processing capabilities is critical to appreciate how NR-Scope achieves real-time decoding without active network participation.

*How the paper uses it:* NR-Scope uses SDR hardware to passively decode downlink control information from 5G base stations.

▶ [Software Defined Radio](https://www.youtube.com/watch?v=bI0qXPqufBY) — MIT Film & Video Production club · 1:23:34 · Streamed 7y ago

### Radio access network telemetry techniques *(prerequisite)*
Familiarity with existing RAN telemetry methods and their limitations helps highlight NR-Scope's novel contribution of passive, fine-grained telemetry extraction. This includes understanding how telemetry data is traditionally collected and used for network performance and security monitoring.

*How the paper uses it:* NR-Scope advances RAN telemetry by providing real-time, passive decoding of control information for detailed network insights.

▶ [SNTA'21 Session 4 (Technical Session)](https://www.youtube.com/watch?v=nw31Izr6KpA) — ACM SNTA Workshop · 1:16:43

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the NR-Scope system for passive decoding of 5G standalone network control information, start by learning the basics of software defined radio (SDR) as the hardware foundation. Then, grasp the architecture and operation of standalone 5G networks to contextualize where NR-Scope fits. Next, explore radio access network (RAN) telemetry techniques to appreciate the measurement challenges and innovations. Finally, focus on how 5G NR downlink control information is decoded, which is central to NR-Scope's passive telemetry approach.

### Software defined radio for wireless monitoring *(prerequisite)*
Software Defined Radio (SDR) uses software to process radio signals instead of traditional hardware components, enabling flexible and programmable wireless monitoring. Understanding SDR basics helps you see how NR-Scope captures and decodes 5G signals passively without interfering with the network.

*How the paper uses it:* NR-Scope uses software-defined radio hardware to capture and decode 5G control signals passively.

▶ [#286 How does Software Defined Radio (SDR) work under the Hood? SDR Tutorial](https://www.youtube.com/watch?v=xQVm-YTKR9s) — Andreas Spiess · 27:20 · 7y ago

### 5G standalone network architecture *(prerequisite)*
Standalone 5G networks operate independently of older 4G infrastructure, with their own core and radio access networks. Learning this architecture clarifies the environment NR-Scope monitors and why passive telemetry is challenging yet valuable.

*How the paper uses it:* NR-Scope targets standalone 5G networks, which are closed systems limiting telemetry access.

▶ [5G Core Architecture, Concepts, Call Flows & Procedures | Hands-On Training – Part 1](https://www.youtube.com/watch?v=kQZRH5txCJE) — NextGen Telecom Research and Development · 55:53 · 1mo ago

### Radio access network telemetry techniques *(prerequisite)*
Radio Access Network (RAN) telemetry involves collecting data about network performance and user activity within the wireless access layer. Understanding existing telemetry methods highlights the novelty of NR-Scope's passive, operator-independent approach.

*How the paper uses it:* NR-Scope provides fine-grained RAN telemetry passively, unlike traditional operator-dependent methods.

▶ [What is a radio access network](https://www.youtube.com/watch?v=ClIMvJYWD-8) — CDEBYTE · 1 yr ago

### 5G NR downlink control information decoding
Downlink Control Information (DCI) in 5G NR carries scheduling and resource allocation commands from the base station to user devices. Learning how DCI is structured and decoded is key to understanding how NR-Scope extracts real-time network telemetry without active participation.

*How the paper uses it:* NR-Scope passively decodes downlink control information every transmission time interval to estimate throughput and channel conditions.

▶ [5G PDCCH Detailed Explanation (Materials Added)](https://www.youtube.com/watch?v=QMJ3DXfr-LI) — Mohamed Eladawi (محمد العدوى) · 25:12 · 3y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of NR-Scope's passive decoding of 5G standalone network control information. The beginner project recreates a simplified throughput estimation visualization using simulated data, the intermediate project implements a basic passive decoder for 5G downlink control information (DCI) from software-defined radio captures, and the advanced project extends this approach to explore telemetry decoding in commercial 5G networks addressing synchronization and hardware challenges.

### Beginner — Simulate and Visualize 5G Throughput Estimation
*Effort: a weekend, ~8 hours*

You build a small web app that simulates 5G user equipment throughput over time based on simplified resource block allocations and retransmission indicators. The app visualizes throughput per user in real time using charts, mimicking NR-Scope's throughput estimation output.

**Why it shows you understood the paper:** This project shows you understand how NR-Scope derives throughput metrics from control information like resource block allocation and retransmission, and how these metrics can be visualized to reflect user activity and channel conditions.

**Grounded in:** NR-Scope provides exact throughput estimations per user equipment with sub-millisecond granularity.

**Tech stack:** TypeScript, React, D3.js or Chart.js

**Data:** Simulated 5G downlink control information data generated in code to represent resource block allocations, retransmission flags, and modulation coding schemes.

**Build it:**

1. Create a data generator that simulates resource block allocations, retransmission indicators, and modulation coding schemes for multiple users over time.
2. Build a React frontend that consumes this simulated data stream and calculates throughput per user based on bits delivered per transmission interval.
3. Visualize throughput and user activity metrics in real time using charts.
4. Add controls to adjust simulation parameters like retransmission rate and resource allocation to observe effects on throughput.
5. Document how the simulation maps to NR-Scope's throughput estimation process.

**Ships as:** A GitHub repository with a React app that simulates and visualizes per-user 5G throughput metrics derived from control information.

**Stretch goal:** Add latency and retransmission visualizations to better mimic NR-Scope's telemetry outputs.

### Intermediate — Basic Passive Decoder for 5G Downlink Control Information
*Effort: 2 weekends, ~20 hours*

You implement a simplified passive decoder that processes recorded software-defined radio (SDR) captures of 5G standalone downlink signals to extract downlink control information (DCI) messages. You parse resource block allocations and retransmission indicators to estimate throughput for a small number of user equipment (UE).

**Why it shows you understood the paper:** This project demonstrates you can reimplement the core method of NR-Scope—passive decoding of 5G control channels using SDR hardware—and extract key telemetry metrics, validating your grasp of the system's real-time decoding and throughput estimation.

**Grounded in:** NR-Scope passively decodes downlink control information (DCI) every transmission time interval (TTI) in real time and provides exact throughput estimations per user equipment.

**Tech stack:** Python 3.11, GNU Radio, NumPy, Matplotlib

**Data:** Use publicly available or self-recorded SDR captures of sub-6GHz 5G standalone downlink signals; if unavailable, simulate simplified DCI message streams based on 3GPP NR specifications.

**Build it:**

1. Set up GNU Radio or an equivalent SDR processing environment to read 5G downlink signal captures.
2. Implement a parser for 5G NR DCI message formats according to 3GPP specifications focusing on resource block allocation and retransmission flags.
3. Extract and decode DCI messages from the signal captures or simulated data.
4. Calculate throughput estimates per UE based on decoded resource allocations and retransmission indicators.
5. Visualize throughput estimates over time and compare against a simple baseline (e.g., constant throughput assumption).
6. Write documentation explaining the decoding process and how it relates to NR-Scope's approach.

**Ships as:** A Python-based passive decoder that processes SDR captures or simulated data to extract 5G DCI messages and estimate per-UE throughput, with visualization and documentation.

**Stretch goal:** Incorporate decoding of radio resource control (RRC) messages to enrich telemetry data as NR-Scope does.

### Advanced — Extending Passive 5G Telemetry Decoding to Commercial Networks
*Effort: 3+ weeks*

You develop an extension of the passive decoding approach to handle challenges in commercial 5G standalone networks, such as synchronization issues and potential encryption or obfuscation of control channels. You explore methods to maintain decoding accuracy and evaluate telemetry extraction feasibility in diverse operator environments.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of NR-Scope by addressing real-world deployment challenges, showing deep comprehension of the system's constraints and the ability to innovate beyond the original demo.

**Grounded in:** Limitations include uncertainty about availability of commercial 5G standalone cells and the need for tight synchronization; future directions include extending NR-Scope to wider deployment scenarios including commercial 5G networks.

**Tech stack:** Python 3.11, GNU Radio, Docker, Linux, Bash scripting

**Data:** If commercial 5G SDR captures are unavailable, simulate control channel obfuscation and synchronization errors to test robustness of decoding algorithms.

**Build it:**

1. Research synchronization challenges and encryption/obfuscation techniques used in commercial 5G standalone networks.
2. Modify the passive decoder from the intermediate project to handle timing offsets and partial obfuscation in control channel decoding.
3. Implement heuristics or machine learning models to detect and correct synchronization errors.
4. Test the enhanced decoder on simulated data with injected synchronization errors and obfuscation.
5. Evaluate decoding accuracy and throughput estimation robustness compared to the baseline decoder.
6. Document findings, limitations, and potential integration strategies with NR-Scope.

**Ships as:** A robust passive decoder prototype capable of handling synchronization and obfuscation challenges in commercial 5G standalone networks, with evaluation results and detailed documentation.

**Stretch goal:** Integrate decoded telemetry with an AI-driven application adaptation module to demonstrate improved application-level decisions.
