---
title: "862 · Flumen: Dynamic Processing in the Photonic Interconnect — Avinash Karanth"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-avinash-karanth"
source_hash: "a545d24f3b045c5baeeac6eb72fa772c987bce44739a91810cca9bbf35efb884"
sequence: 862
generator: "outreach-garden: managed"
---

# 862 · Flumen: Dynamic Processing in the Photonic Interconnect

## At a glance

- **Professor:** Avinash Karanth
- **Institution:** Ohio University
- **Paper:** [Flumen: Dynamic Processing in the Photonic Interconnect](https://dl.acm.org/doi/pdf/10.1145/3579371.3589110)
- **Authors:** Kyle Shiflett, Avinash Karanth, Razvan Bunescu, Ahmed Louri
- **Year:** 2023

## Paper overview

This paper presents Flumen, a novel photonic interconnect architecture for chiplet-based multicore processors that combines communication and computation. Flumen uses a Mach-Zehnder interferometer mesh (MZIM) to enable high-bandwidth, energy-efficient optical communication and dynamically partitions the network to perform parallel linear algebra computations during periods of low network load. This approach improves energy efficiency, speed, and energy-delay product compared to traditional electrical mesh networks.

### Why it matters

**Research problem:** Traditional electrical network-on-package (NoP) interconnects in chiplet-based heterogeneous architectures suffer from energy and bandwidth scaling issues, especially as core counts increase and network utilization is often low. Existing in-network computation approaches using electrical NoCs do not scale well to package-level interconnects due to energy inefficiency and breaking data locality. There is a need for an energy-efficient, scalable interconnect that supports both communication and computation dynamically.

**Why it matters:** Modern applications like deep neural networks and multimedia processing require massive linear algebra computations but often have low network utilization, leading to wasted network resources. Efficiently combining communication and computation at the package-level interconnect can reduce energy consumption, improve performance, and better utilize network resources, which is critical for scaling future multicore and chiplet-based processors.

**Key contributions:**

- A novel dual-function photonic interconnect/accelerator architecture using MZIM that supports both communication and computation within the same network.
- Dynamic adaptability allowing runtime partitioning of the network to balance communication and computation demands.
- A detailed performance model combining full-system multicore simulation and photonic circuit simulation to evaluate Flumen against electrical and optical network topologies.
- Demonstration of energy-efficient, scalable photonic interconnects that support en route computation with minimal network changes.

## About the professor

**Avinash Karanth** — Director & Chair, Electrical Engineering and Computer Science, School of Electrical Engineering and Computer Science, Ohio University.

Research interests: Computer Architecture, Network-on-Chips (NoCs), Hardware Security, Emerging Technologies for NoCs (Nanophotonics, Wireless, 3D Integration), Machine Learning for Computing Systems

### Research links

- [Faculty/profile page](https://oucsace.cs.ohio.edu/~avinashk)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Silicon Photonics and Optical Interconnects
**The paper assumes:** silicon photonics, integrated photonic circuits, optical interconnect architectures, Mach-Zehnder interferometers, microring resonators
**Already in this field?** Skip this entirely if you already understand integrated silicon photonics devices and their use in on-chip optical communication and computation.

To fully understand the Flumen paper's novel photonic interconnect architecture, a solid grasp of silicon photonics fundamentals—especially Mach-Zehnder interferometers and photonic integrated circuits—is essential. The rigorous course option offers a deep, structured university-level treatment of integrated photonics devices and circuits, ideal for readers seeking comprehensive technical mastery. The fast track provides a concise, well-produced webinar series from industry experts that covers silicon photonics platforms and applications, suitable for readers who want a practical overview and foundational intuition in a fraction of the time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Integrated Photonics Devices and Circuits](https://www.youtube.com/playlist?list=PLyqSpQzTE6M-cHmWiVl1wUxOQXIEPt8YR) — NPTEL-NOC IITM · 42 videos · 39.9h across 42 episodes

**Watch only this:** Lectures 1-5 (Introduction, Course Background, Optical Interconnect Technology, Silicon Photonics Platform, Moore's Law and Interconnect Bottleneck) plus Lectures 6-10 (Fundamentals of Lightwaves including EM waves, waveguiding, and Mach-Zehnder Interferometer), about 6 hours total — this subset covers the core photonic device physics and MZI fundamentals needed to grasp Flumen's architecture.

*Why it unblocks this paper:* This NPTEL course 'Integrated Photonics Devices and Circuits' by Prof. Bijoy Krishna Das covers fundamental principles and device-level details of photonic components including Mach-Zehnder interferometers, waveguides, and integrated optical components, directly relevant to understanding Flumen's MZIM architecture and photonic computation.

*If you want all of it:* 39.9 hours across 42 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Webinar Series 3 - Silicon Photonics](https://www.youtube.com/playlist?list=PLdOPhepcdnQNGVDKWWINAMpF_0XK8GsMg) — Europractice Services · 8 videos · 3.7h across the first 7 episodes

**Watch only this:** Episodes S3-E0 through S3-E4 (Prologue, Silicon Nitride MPWs, AMF Silicon Photonic Platforms, SiGe BiCMOS & Photonic BiCMOS Technologies, Frontiers in Silicon Photonics), about 3.5 hours total — these episodes cover the essential technology and platform context relevant to Flumen.

*Why it unblocks this paper:* The 'Silicon Photonics' webinar series from Europractice Services provides concise, industry-focused talks on silicon photonics platforms, device technologies, and foundry perspectives, giving a practical and accessible overview of the technology underlying Flumen's photonic interconnect.

*If you want all of it:* 3.7 hours across the first 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Flumen paper, start by building foundational knowledge on the key enabling photonic technologies: the Mach-Zehnder interferometer mesh (MZIM) and wavelength-division multiplexing (WDM). Then, study the broader context of in-network computation architectures and photonic network-on-chip design to appreciate the architectural innovations Flumen introduces. Finally, focus on the paper's core contribution by watching the authors' own talk on Flumen, which provides direct insight into their novel dynamic photonic interconnect and computation approach.

### Mach-Zehnder interferometer mesh *(prerequisite)*
Understanding the Mach-Zehnder interferometer (MZI) is critical because Flumen's photonic fabric is built from a mesh of these interferometers (MZIM). This video from MIT OpenCourseWare offers a rigorous, university-level lecture on the physics and operation of MZIs, providing the necessary background to grasp how Flumen achieves dual-function communication and computation.

*How the paper uses it:* Flumen’s photonic fabric is built using several Mach-Zehnder interferometers connected as one large multiport interferometer called a Mach-Zehnder interferometer mesh (MZIM).

▶ [Mach-Zehnder interferometers and beam splitters](https://www.youtube.com/watch?v=0USje5vTIKs) — MIT OpenCourseWare · 9y ago

### Wavelength-division multiplexing photonics *(prerequisite)*
WDM is a key technique Flumen uses to exploit the parallelism of light for high bandwidth communication. This lecture by David Schaefer provides an academic-level overview of WDM principles and components, essential for understanding how Flumen achieves scalable, energy-efficient optical communication.

*How the paper uses it:* Flumen uses wavelength-division multiplexing (WDM) to exploit the inherent parallelism of light for high bandwidth.

▶ [FOA Lecture 31 Wavelength Division Multiplexing](https://www.youtube.com/watch?v=w7JB9_mpcx0) — David Schaefer · 10y ago

### In-network computation architectures *(prerequisite)*
To appreciate Flumen's innovation in combining communication and computation within the same network fabric, it is important to understand the general concept of in-network computation. The USENIX talk on NetRPC presents a rigorous research perspective on enabling computation within networks, providing relevant background on architectural trends and challenges.

*How the paper uses it:* Existing in-network computation approaches using electrical NoCs do not scale well, motivating Flumen’s photonic approach to combine communication and computation dynamically.

▶ [NSDI '23 - NetRPC: Enabling In-Network Computation in Remote Procedure Calls](https://www.youtube.com/watch?v=HucaH6jb7zA) — USENIX · 3y ago

### Photonic network-on-chip design *(prerequisite)*
Flumen is a photonic network-on-chip (NoC) architecture, so understanding photonic NoC design principles is foundational. The lecture by Jelena Vuckovic at the OSC Colloquium provides an advanced, research-focused overview of scalable photonics and optimized photonic architectures, which aligns well with Flumen’s goals.

*How the paper uses it:* Flumen demonstrates energy-efficient, scalable photonic interconnects supporting computation within chiplet-based multicore processors.

▶ [OSC Colloquium: Jelena Vuckovic, "Scalable photonics: an optimized approach"](https://www.youtube.com/watch?v=eGSajLM9ZqM) — UA OSC · 5y ago

### Flumen photonic interconnect talk *(paper-talk search result; attribution unverified)*
This lightning talk from ISCA 2023 is given by the paper authors themselves and directly presents the Flumen architecture, its dynamic partitioning, and performance benefits. Watching this talk provides the most precise and authoritative insight into the paper’s contributions and results.

*How the paper uses it:* The authors’ own talk on Flumen provides direct insight into their novel photonic interconnect architecture combining communication and computation.

▶ [ISCA'23 - Lightning Talks - Session2A - Flumen: Dynamic Processing in the Photonic Interconnect](https://www.youtube.com/watch?v=lPjOg5zOYgU) — ACM SIGARCH · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational photonics and networking concepts essential to understanding Flumen's innovative photonic interconnect architecture. We start with core photonic devices like the Mach-Zehnder interferometer, then cover wavelength-division multiplexing to grasp how Flumen achieves high bandwidth. Next, we explore in-network computation and photonic network-on-chip design to see how communication and computation merge. Finally, we conclude with a direct overview of Flumen's architecture from the authors themselves.

### Mach-Zehnder interferometer mesh *(prerequisite)*
The Mach-Zehnder interferometer (MZI) is a fundamental photonic device that splits and recombines light to measure phase differences, enabling precise control of optical signals. Understanding how MZIs work and how they can be connected in a mesh is key to grasping Flumen's dual-function communication and computation capabilities.

*How the paper uses it:* Flumen’s photonic fabric is built using a Mach-Zehnder interferometer mesh (MZIM) that enables dynamic routing and computation.

▶ [Mach-Zehnder interferometers and beam splitters](https://www.youtube.com/watch?v=0USje5vTIKs) — MIT OpenCourseWare · 9y ago

### Wavelength-division multiplexing photonics *(prerequisite)*
Wavelength-division multiplexing (WDM) is a technique that sends multiple optical signals simultaneously over different wavelengths (colors) of light, greatly increasing bandwidth. This parallelism is crucial for Flumen to achieve high data throughput in its photonic interconnect.

*How the paper uses it:* Flumen uses WDM to exploit the inherent parallelism of light for high bandwidth communication and computation.

▶ [Wavelength Division Multiplexing WDM (Basics, Architecture, Components, Technologies & Features)](https://www.youtube.com/watch?v=uBAp-zBJho4) — Engineering Funda · 6y ago

### In-network computation architectures *(prerequisite)*
In-network computation integrates processing capabilities directly within the communication network, reducing data movement and improving efficiency. This concept helps understand how Flumen dynamically partitions its photonic network to perform computations en route.

*How the paper uses it:* Flumen dynamically partitions the network to perform parallel linear algebra computations during low network load periods.

▶ [What is In-Network Computing?](https://www.youtube.com/watch?v=im0ZeTZcX2o) — DOCOMO Euro-Labs Official · 1y ago

### Photonic network-on-chip design *(prerequisite)*
Photonic network-on-chip (NoC) design involves using light-based interconnects within chips to overcome electrical limitations in bandwidth and energy. Understanding photonic NoCs provides context for Flumen’s scalable chiplet interconnect approach.

*How the paper uses it:* Flumen is a photonic NoP architecture designed for scalable chiplet-based multicore processors.

▶ [Photonics, the Next Gen of Communication Processors w/ Daniel Pérez López](https://www.youtube.com/watch?v=t4RDwpd_SZU) — Altium Academy · 3y ago

### Flumen photonic interconnect talk *(paper-talk search result; attribution unverified)*
This talk by the authors presents Flumen’s novel photonic interconnect architecture, explaining its design, dynamic partitioning, and performance benefits. It offers direct insight into the paper’s core contributions and results.

*How the paper uses it:* The video provides a concise overview of Flumen’s architecture and its dual-function communication and computation capabilities.

▶ [ISCA'23 - Lightning Talks - Session2A - Flumen: Dynamic Processing in the Photonic Interconnect](https://www.youtube.com/watch?v=lPjOg5zOYgU) — ACM SIGARCH · 3y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Flumen's novel photonic interconnect architecture that dynamically combines communication and computation. The beginner project recreates a core concept visualization using your existing software skills. The intermediate project involves reimplementing Flumen's dynamic partitioning and performance comparison on synthetic linear algebra workloads, introducing photonic network simulation concepts. The advanced project extends Flumen by exploring dynamic phase reconfiguration strategies to improve runtime adaptability, addressing a key limitation noted in the paper.

### Beginner — Visualizing Mach-Zehnder Interferometer Mesh Partitioning
*Effort: a weekend, ~8 hours*

You build an interactive web-based visualization that models a small Mach-Zehnder interferometer mesh (MZIM) and demonstrates how it can be dynamically partitioned into communication and computation sections. The visualization allows toggling partitions and shows how wavelength-division multiplexing (WDM) channels flow through the mesh.

**Why it shows you understood the paper:** This project shows you grasp the core architectural concept of Flumen's dual-function photonic interconnect and its dynamic adaptability, which is central to the paper's contribution.

**Grounded in:** Flumen’s photonic fabric is built using several Mach-Zehnder interferometers connected as one large multiport interferometer called a Mach-Zehnder interferometer mesh (MZIM). Flumen can be reconfigured at runtime to adapt the topology to facilitate both communication and computation simultaneously.

**Tech stack:** TypeScript, React, D3.js

**Data:** No external data needed; you simulate the MZIM topology and WDM channels in code.

**Build it:**

1. Model a small MZIM topology as a graph with nodes representing Mach-Zehnder interferometers and edges representing optical paths.
2. Implement a UI to visualize the mesh and WDM channels flowing through it using D3.js.
3. Add controls to dynamically partition the mesh into communication and computation sections.
4. Visualize how partitioning affects channel routing and resource allocation.
5. Write a README explaining the connection to Flumen's architecture and dynamic partitioning.

**Ships as:** A GitHub repo with an interactive React+D3 visualization demonstrating MZIM partitioning and WDM channel routing, with documentation linking it to Flumen's architecture.

**Stretch goal:** Add animations showing dynamic reconfiguration over time and simulate simple linear algebra operations on the computation partition.

### Intermediate — Simulating Dynamic Partitioning and Performance of Flumen Photonic Interconnect
*Effort: 2 weekends, ~20 hours*

You implement a simplified simulation of Flumen's MZIM photonic interconnect that supports dynamic partitioning between communication and computation. You simulate linear algebra workloads (e.g., matrix multiplication) and synthetic traffic patterns to evaluate energy consumption and latency compared to a baseline electrical mesh network.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core method of Flumen's dynamic dual-function interconnect and quantitatively evaluate its benefits, reflecting comprehension of the paper's performance modeling and results.

**Grounded in:** Flumen can be reconfigured at runtime to adapt the topology to facilitate both communication and computation simultaneously. Flumen achieved a speedup of 3.6× and reduced energy-delay product by 9.3× on average compared to an electrical mesh network.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic linear algebra workloads generated in code to simulate matrix multiplications and synthetic traffic patterns as described in the paper.

**Build it:**

1. Implement a simplified MZIM model that can be partitioned dynamically into communication and computation sections.
2. Simulate matrix multiplication workloads on the computation partition using precomputed phase settings.
3. Simulate synthetic network traffic on the communication partition.
4. Implement a baseline electrical mesh network simulation for comparison.
5. Measure and plot metrics such as energy consumption, latency, and energy-delay product for both networks.
6. Write a README explaining the simulation design, assumptions, and comparison results.

**Ships as:** A Python repo with simulation scripts and plots comparing Flumen's photonic interconnect to an electrical mesh baseline, demonstrating dynamic partitioning and performance gains.

**Stretch goal:** Incorporate a simple scheduler to dynamically adjust partition sizes based on workload fluctuations.

### Advanced — Exploring Runtime Phase Reconfiguration for Adaptive Flumen Computation
*Effort: 3+ weeks*

You develop a prototype framework to explore dynamic phase programming algorithms for the MZIM to support adaptive matrix operations at runtime. This addresses Flumen's limitation of requiring precise precomputed phase settings, aiming to reduce overhead and increase flexibility for dynamic workloads.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep engagement with Flumen's architecture and challenges in photonic computation reconfigurability.

**Grounded in:** The architecture requires precise precomputed phase programming for computation matrices, which may limit runtime flexibility. Improving phase programming algorithms for runtime adaptability and supporting a wider range of matrix operations is a future direction.

**Tech stack:** Python 3.11, NumPy, SciPy, Jupyter Notebook

**Data:** Synthetic matrix operation workloads generated in code to test phase reconfiguration algorithms.

**Build it:**

1. Review Flumen's phase programming requirements and model the MZIM phase settings mathematically.
2. Implement algorithms to compute phase settings for different matrix operations dynamically.
3. Simulate the overhead and latency of phase reconfiguration compared to static precomputed settings.
4. Evaluate the impact on energy and performance for adaptive workloads with changing matrix operations.
5. Document challenges and propose heuristics or approximations to reduce reconfiguration overhead.
6. Write a detailed README discussing the approach, results, and implications for Flumen's runtime adaptability.

**Ships as:** A Jupyter Notebook and Python scripts demonstrating dynamic phase programming algorithms with analysis of overhead and adaptability, addressing Flumen's runtime flexibility limitation.

**Stretch goal:** Prototype integration with a simple scheduler that triggers phase reconfiguration based on workload changes.
