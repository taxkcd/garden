---
title: "911 · Towards Mixed Criticality Industrial Wireless Sensor-Actuator Network — Mahbubur Rahman"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mahbubur-rahman"
source_hash: "9d71b1c56f0a56a14b7059bebef2fd69471d9d171fbb907a3f4258d0843e3078"
sequence: 911
generator: "outreach-garden: managed"
---

# 911 · Towards Mixed Criticality Industrial Wireless Sensor-Actuator Network

## At a glance

- **Professor:** Mahbubur Rahman
- **Institution:** CUNY
- **Paper:** [Towards Mixed Criticality Industrial Wireless Sensor-Actuator Network](https://dl.acm.org/doi/pdf/10.1145/3571306.3571447)
- **Authors:** Prashant Modekurthy, Mahbubur Rahman, Abusayeed Saifullah
- **Year:** 2023

## Paper overview

This paper addresses the challenge of scheduling communication in industrial wireless sensor-actuator networks (WSAN) that support control loops with different levels of criticality. It proposes a mixed-criticality (MC) scheduling framework that dynamically allocates network resources to ensure high-criticality loops meet real-time deadlines even under uncertain wireless conditions, while allowing low-criticality loops to use unused resources when possible. The approach exploits radio capture effects and reduces redundancy to improve network utilization and reliability.

### Why it matters

**Research problem:** How to design real-time scheduling algorithms for wireless sensor-actuator networks in industrial IoT that handle mixed-criticality control loops with dynamic criticality changes and uncertain wireless channel conditions, ensuring high-criticality loops meet deadlines without unnecessarily sacrificing low-criticality loops.

**Why it matters:** Industrial WSANs are increasingly used in cyber-physical systems for process monitoring and control, where some control loops are more critical than others. Ensuring timely and reliable communication for high-criticality loops is essential for safety and efficiency, but wireless networks face unpredictable channel conditions and interference. Existing MC scheduling research focuses on CPU scheduling and does not adequately address wireless network challenges, risking system instability or inefficient resource use.

**Key contributions:**

- Formulation of the mixed-criticality scheduling problem and formal definition of MC semantics for WSAN.
- Proposal of a real-time MC scheduling framework that co-schedules control loops under dynamic criticality changes.
- Exploitation of radio capture effects for dynamic resource allocation and reclamation between high and low criticality loops.
- A novel technique to minimize redundancy in high-criticality loop scheduling by payload augmentation, enhancing network utilization and schedulability.

## About the professor

**Mahbubur Rahman** — Assistant Professor, Computer Science, CUNY.

Research interests: Internet of Things, Cyber-Physical Systems, Wireless Sensor Networks, Distributed Systems, Real-Time and Embedded Systems

### Research links

- [Faculty/profile page](https://www.gc.cuny.edu/people/mahbubur-rahman)
- [Professor website](https://boole.cs.qc.cuny.edu/rahman/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on mixed-criticality scheduling in industrial wireless sensor-actuator networks, start with foundational knowledge on mixed-criticality real-time scheduling theory and the radio capture effect in wireless networks, as these underpin the paper's novel scheduling framework. Next, review the challenges and techniques in wireless sensor-actuator network scheduling to contextualize the problem domain. Finally, study the authors' own talk or the closest available academic presentations to grasp their specific contributions and experimental validations.

### Mixed-criticality real-time scheduling *(prerequisite)*
This section covers the theoretical foundations of scheduling tasks with different criticality levels in real-time systems, which is essential to understand the paper's approach to handling mixed-criticality control loops. The selected talk by Sanjoy Baruah provides a rigorous and comprehensive lecture on scheduling theories for cyber-physical systems, directly relevant to the paper's core problem.

*How the paper uses it:* The paper builds on mixed-criticality scheduling theory to design real-time algorithms for WSANs with dynamic criticality changes.

▶ [Sanjoy Baruah: : Scheduling Theories for Cyber-Physical Systems](https://www.youtube.com/watch?v=xcDfEfu87g8) — UConn Institute for Advanced Systems Engineering · 1:16:16 · 9y ago

### Radio capture effect in wireless networks *(prerequisite)*
Understanding the radio capture effect is crucial because the paper exploits this physical layer phenomenon to prioritize high-criticality transmissions without hardware modifications. The chosen lecture from 'Research Touch' offers an in-depth academic treatment of wireless digital communication, including channel effects relevant to capture phenomena.

*How the paper uses it:* The paper exploits radio capture effects to enable dynamic resource allocation favoring high-criticality packets in shared wireless slots.

▶ [Lecture 09: Wireless Digital Communication with MATLAB](https://www.youtube.com/watch?v=UpmvBX9MhQs) — Research Touch · 1:02:17 · 5y ago

### Wireless sensor-actuator networks scheduling *(prerequisite)*
This section addresses the scheduling challenges and techniques specific to wireless sensor-actuator networks, providing context for the paper's problem and solution. The selected video by TerrenceBlevins is a focused academic talk on process control over real-time WSANs, offering relevant insights into scheduling and control aspects in such networks.

*How the paper uses it:* The paper proposes a novel MC scheduling framework tailored for industrial WSANs with mixed-criticality control loops.

▶ [Process Control over Real Time Wireless Sensor and Actuator Networks](https://www.youtube.com/watch?v=8L8KIv9eX_c) — TerrenceBlevins · 20:23 · 11y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talks or closely related academic presentations provide direct insight into their novel mixed-criticality scheduling framework, experimental validation, and exploitation of radio capture effects. Although no exact talk by the paper authors on this work was found, the closest relevant academic talks on wireless sensor networks and actuator technologies are included for advanced understanding.

*How the paper uses it:* Direct insight from the authors or related academic talks helps understand the novel contributions and experimental results of the paper.

▶ [Technologies for Next Generation Sensor & Actuator Networks](https://www.youtube.com/watch?v=NOapUJxk8Zo) — Instituto de Física Interdisciplinar y Sistemas Complejos (IFISC) · 1:12:04 · 12y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand mixed-criticality scheduling in industrial wireless sensor-actuator networks (WSANs). We start with the basics of wireless sensor and actuator networks, then explore real-time scheduling and mixed-criticality theory, followed by the radio capture effect, a key physical layer phenomenon exploited in the paper. Finally, we connect these concepts to the paper's novel mixed-criticality scheduling framework for WSANs.

### Wireless sensor-actuator networks scheduling *(prerequisite)*
Wireless sensor-actuator networks (WSANs) consist of spatially distributed sensors and actuators communicating wirelessly to monitor and control physical processes. Scheduling in WSANs involves coordinating communication and control tasks to meet timing and reliability requirements despite wireless uncertainties.

*How the paper uses it:* Understanding WSAN scheduling challenges is fundamental to grasping the paper's problem and solution of mixed-criticality communication scheduling.

▶ [Wireless Sensor Networks - WSN Explained: Architecture, Basics, Characteristics, and Examples](https://www.youtube.com/watch?v=BBvG7uzmOV0) — Engineering Funda · 12:48 · 2y ago

### Mixed-criticality real-time scheduling *(prerequisite)*
Mixed-criticality scheduling addresses systems where tasks have different importance levels, ensuring high-criticality tasks meet deadlines even under resource constraints or uncertainties, while allowing lower-criticality tasks to use leftover resources.

*How the paper uses it:* The paper builds on mixed-criticality scheduling theory to design algorithms that dynamically allocate wireless network resources for control loops with varying criticality.

▶ [Sanjoy Baruah: : Scheduling Theories for Cyber-Physical Systems](https://www.youtube.com/watch?v=xcDfEfu87g8) — UConn Institute for Advanced Systems Engineering · 1:16:16 · 9y ago

### Radio capture effect in wireless networks *(prerequisite)*
The radio capture effect allows a receiver to successfully decode a stronger signal even when multiple signals collide on the same frequency, enabling prioritization of critical transmissions without hardware changes.

*How the paper uses it:* The paper exploits the radio capture effect to prioritize high-criticality transmissions in shared wireless slots, improving reliability and resource utilization.

▶ [What is FM Capture Effect?](https://www.youtube.com/watch?v=iNiPcbNIaIc) — Johnson's TechWorld · 5:27 · 2y ago

### Paper authors talk
Hearing directly from experts provides insight into the motivation, challenges, and innovations of the proposed mixed-criticality scheduling framework for industrial WSANs.

*How the paper uses it:* This talk offers direct context and explanation related to the paper's focus on wireless sensor-actuator networks and industrial IoT applications.

▶ [Process Control over Real Time Wireless Sensor and Actuator Networks](https://www.youtube.com/watch?v=8L8KIv9eX_c) — TerrenceBlevins · 20:23 · 11y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the mixed-criticality scheduling framework for industrial wireless sensor-actuator networks presented in the paper. The beginner project recreates a core concept of the radio capture effect and its impact on packet reception reliability. The intermediate project implements a simplified version of the paper's mixed-criticality scheduling framework with dynamic resource allocation and compares it against a baseline. The advanced project extends the framework toward a distributed scheduling approach, addressing one of the paper's stated limitations and future directions.

### Beginner — Simulate Radio Capture Effect in Wireless Packet Collisions
*Effort: a weekend, ~8 hours*

You build a discrete-event simulator that models wireless packet transmissions with collisions and demonstrates the radio capture effect where a high-power packet can be received successfully despite collisions. You visualize packet reception outcomes under different signal strengths and timing overlaps.

**Why it shows you understood the paper:** This project shows you grasp the physical layer phenomenon the paper exploits to prioritize high-criticality transmissions without hardware changes, a key enabler of their scheduling framework.

**Grounded in:** The approach exploits radio capture effects for dynamic resource allocation and reclamation between high and low criticality loops.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** No external data needed; you simulate packet transmissions with configurable parameters for signal strength and timing.

**Build it:**

1. Implement a simple event-driven simulation of packet transmissions with start times, durations, and signal strengths.
2. Model collisions when packets overlap in time and apply a capture effect rule where the strongest packet is received successfully.
3. Run experiments varying signal strength differences and collision timings to observe capture effect outcomes.
4. Visualize results showing successful and failed receptions under different scenarios.

**Ships as:** A Python repository with simulation code, example runs, and plots demonstrating the capture effect in wireless collisions.

**Stretch goal:** Add support for multiple simultaneous collisions and probabilistic capture success based on signal-to-interference ratio.

### Intermediate — Implement Mixed-Criticality Scheduling for WSAN Simulation
*Effort: 2 weekends, ~20 hours*

You implement a simplified mixed-criticality scheduling framework for wireless sensor-actuator networks that supports two criticality levels. Your simulator dynamically allocates time slots to high- and low-criticality control loops, reclaims unused resources, and exploits capture effect logic to prioritize high-criticality transmissions. You compare schedulability and resource utilization against a baseline fixed-priority scheduler without MC features.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core MC scheduling method and validate its benefits in terms of deadline guarantees and efficient resource use.

**Grounded in:** Proposal of a real-time MC scheduling framework that co-schedules control loops under dynamic criticality changes and exploits radio capture effects.

**Tech stack:** Python 3.11, numpy, matplotlib

**Data:** Simulated WSAN control loop traffic with configurable periods, deadlines, and criticality levels; no real dataset available.

**Build it:**

1. Design data structures to represent control loops with parameters: period, deadline, criticality level, and transmission redundancy.
2. Implement a fixed-priority scheduler baseline that assigns slots statically without dynamic reclamation.
3. Implement the MC co-scheduling framework that dynamically reallocates slots from low- to high-criticality loops based on mode.
4. Incorporate a simplified capture effect model to simulate successful reception of high-criticality packets in shared slots.
5. Run experiments comparing deadline miss rates and slot utilization between baseline and MC scheduler.
6. Plot results and analyze improvements in schedulability and network efficiency.

**Ships as:** A Python simulation repository with MC scheduling implementation, baseline comparison, and visualized results.

**Stretch goal:** Add payload augmentation logic to reduce redundancy and improve slot usage as described in the paper.

### Advanced — Distributed Mixed-Criticality Scheduling for WSANs
*Effort: 3+ weeks*

You design and prototype a distributed scheduling algorithm for mixed-criticality wireless sensor-actuator networks that removes the centralized network manager assumption. Your system supports dynamic criticality changes and uses local coordination and capture effect principles to ensure real-time guarantees for high-criticality loops. You evaluate your approach in simulation against the centralized fixed-priority MC scheduler.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by exploring distributed scheduling, demonstrating deep comprehension and ability to extend the research.

**Grounded in:** The scheduling framework assumes a centralized network manager; future directions include exploring distributed scheduling algorithms that handle dynamic criticality changes without centralized control.

**Tech stack:** Python 3.11, asyncio, numpy, matplotlib

**Data:** Simulated WSAN traffic with multiple control loops and dynamic criticality changes; no real-world dataset available.

**Build it:**

1. Study the paper's centralized MC scheduling framework and identify components requiring central coordination.
2. Design a distributed scheduling protocol where nodes locally decide transmission slots based on shared state and priority rules.
3. Implement dynamic criticality mode changes and local slot reclamation mechanisms.
4. Incorporate a capture effect model to prioritize high-criticality transmissions in shared slots.
5. Simulate network scenarios with varying traffic loads and criticality changes.
6. Compare deadline miss rates and network utilization against the centralized scheduler baseline.
7. Document challenges, trade-offs, and potential improvements.

**Ships as:** A Python simulation repository demonstrating distributed MC scheduling with evaluation and analysis in the README.

**Stretch goal:** Implement a prototype on a small physical testbed using IEEE 802.15.4 radios or software-defined radios if hardware is available.
