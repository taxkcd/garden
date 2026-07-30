---
title: "024 · Coordinating GPU Data Centers and Power Grid Regulation Service for Exogenous Carbon Benefits — Nanpeng Yu"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nyu"
source_hash: "706085ace2df5d56d14f5a0ea799db9bd5c7e806c01a7b6e0a18c60f5ad795a5"
sequence: 24
generator: "outreach-garden: managed"
---

# 024 · Coordinating GPU Data Centers and Power Grid Regulation Service for Exogenous Carbon Benefits

## At a glance

- **Professor:** Nanpeng Yu
- **Institution:** Univ. of California - Riverside
- **Paper:** [Coordinating GPU Data Centers and Power Grid Regulation Service for Exogenous Carbon Benefits](https://arxiv.org/abs/2601.22487)
- **Authors:** Ali Jahanshahi, Sara Rashidi Golrouye, Osten Anderson, Nanpeng Yu, Daniel Wong
- **Year:** 2026

## Paper overview

This paper addresses the challenge of increasing energy consumption and carbon emissions caused by AI/ML GPU data centers and the instability they introduce to power grids. It proposes a novel metric called Exogenous Carbon to quantify the carbon emission reductions on the grid side when data centers participate in frequency regulation services. The authors introduce EcoCenter, a framework that enables GPU data centers to provide frequency regulation by modulating their power consumption precisely, thereby reducing reliance on fossil-fueled power plants and lowering overall carbon emissions.

### Why it matters

**Research problem:** The rapid growth of AI/ML data centers increases electricity demand and carbon emissions, destabilizing power grids that rely on fossil-fueled frequency regulation reserves to maintain stability. Existing carbon intensity metrics do not account for the hidden carbon emissions from these regulation reserves, limiting the ability to reduce grid-side emissions effectively.

**Why it matters:** Data centers consume a significant and growing portion of electricity (up to 46% in some US states by 2030), contributing substantially to greenhouse gas emissions. Power grids need to maintain stability despite the intermittent nature of renewable energy sources, which increases demand for fossil-fueled frequency regulation reserves. Reducing these hidden emissions is critical to supporting sustainable data center growth and increasing renewable energy penetration.

**Key contributions:**

- Introduction of Exogenous Carbon metric to quantify grid-side carbon emission reductions from data center frequency regulation services.
- Development of EcoCenter framework that enables GPU data centers to provide frequency regulation by overcoming GPU power modulation challenges.
- Demonstration that data center participation in frequency regulation can yield exogenous carbon savings that outweigh operational carbon emissions.
- Detailed modeling of hidden carbon emissions from fossil-fueled frequency regulation reserves using grid unit commitment simulations.
- Optimization formulation for asymmetric frequency regulation provision maximizing economic and carbon benefits.

## About the professor

**Nanpeng Yu** — Assistant Professor, Electrical and Computer Engineering, Univ. of California - Riverside.

### Research links

- [Faculty/profile page](https://engineeringonline.ucr.edu/faculty/nanpeng-yu)
- [Identity evidence](https://intra.ece.ucr.edu/~nyu)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on coordinating GPU data centers with power grid frequency regulation for carbon benefits, start by building foundational knowledge on power grid frequency regulation services, GPU power management and modulation, unit commitment and grid emission modeling, and workload scheduling and optimization in data centers. These prerequisites provide the necessary background on grid operations, GPU power control challenges, and data center workload coordination. Finally, focus on the paper's core contribution by watching the authors' own talk or the closest available detailed presentation about their EcoCenter framework and its role in enabling GPU data centers to provide frequency regulation with carbon benefits.

### Frequency regulation services in power grids *(prerequisite)*
Frequency regulation is essential for maintaining grid stability by balancing supply and demand in real time. Understanding how frequency regulation works and its economic and operational aspects is foundational to grasping how data centers can participate in these services to reduce carbon emissions.

*How the paper uses it:* The paper leverages frequency regulation services as the mechanism through which GPU data centers modulate power consumption to provide grid stability and carbon benefits.

▶ [Economics #69: Frequency Regulation and Dispatch](https://www.youtube.com/watch?v=7E6yxPCCRJ0) — Regulatory Assistance Project · 9:49 · 6 years ago

### GPU power management and modulation *(prerequisite)*
GPU power modulation is challenging due to limited low-power states and high static power consumption. Understanding GPU power-performance characteristics and modulation techniques is critical to appreciate how EcoCenter achieves precise power control for frequency regulation.

*How the paper uses it:* EcoCenter overcomes GPU power modulation challenges by coordinating GPU power capping and core allocation to provide high-precision power modulation.

▶ [AI Datacenters as Grid-Responsive Flexible Loads:  Real-Time GPU Power Modulation](https://www.youtube.com/watch?v=LP3FdH-5SCU) — Open Compute Project · 2 months ago

### Unit commitment and grid emission modeling *(prerequisite)*
Unit commitment involves optimizing the operation of power generation units to meet demand efficiently. Modeling grid emissions through unit commitment simulations is crucial to quantify hidden carbon emissions from fossil-fueled frequency regulation reserves.

*How the paper uses it:* The paper uses detailed unit commitment simulations to model hidden carbon emissions and optimize data center participation in frequency regulation markets.

▶ [05 Unit Commitment](https://www.youtube.com/watch?v=jS15dU_422Q) — Daniel Kirschen · 4 years ago

### Workload scheduling and optimization in data centers *(prerequisite)*
Coordinating workloads in data centers is key to managing power consumption without impacting latency-sensitive tasks. Understanding workload scheduling and optimization helps in grasping how EcoCenter co-locates latency-critical and best-effort workloads for effective power modulation.

*How the paper uses it:* EcoCenter coordinates multi-GPU workload scheduling to enable precise power modulation while maintaining service quality.

▶ [Optimizing Datacenter Operations with Practical Complexity](https://www.youtube.com/watch?v=SDMwtJPrD9I) — Microsoft Research · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning how power grids maintain stability through frequency regulation services, which is essential to grasp why data centers can help reduce carbon emissions. Next, explore GPU power management challenges to see how EcoCenter modulates GPU power for grid services. Then, study unit commitment and grid emission modeling to understand how hidden carbon emissions are quantified. After that, learn about workload scheduling and optimization in data centers to appreciate how EcoCenter coordinates workloads for precise power modulation. Finally, dive into the EcoCenter framework itself, which integrates these concepts to enable GPU data centers to provide frequency regulation with carbon benefits.

### Frequency regulation services in power grids *(prerequisite)*
Frequency regulation is a key grid service that balances supply and demand in real time to maintain stable grid frequency. Understanding this helps explain why data centers can modulate power consumption to support grid stability and reduce reliance on fossil-fueled reserves.

*How the paper uses it:* The paper leverages frequency regulation services as the mechanism through which GPU data centers provide grid support and achieve carbon emission reductions.

▶ [https://www.youtube.com › watch?v=qAKxPf0onG4](https://www.youtube.com/watch?v=qAKxPf0onG4) — YouTube result via DuckDuckGo

### GPU power management and modulation *(prerequisite)*
GPUs have limited low-power states and high static power, making precise power modulation challenging. Learning about GPU power management reveals why EcoCenter uses coordinated power capping and core allocation to finely control GPU power consumption.

*How the paper uses it:* EcoCenter overcomes GPU power modulation challenges to provide high-precision power adjustments needed for frequency regulation.

▶ [AI Datacenters as Grid-Responsive Flexible Loads:  Real-Time GPU Power Modulation](https://www.youtube.com/watch?v=LP3FdH-5SCU) — Open Compute Project · 2 months ago

### Unit commitment and grid emission modeling *(prerequisite)*
Unit commitment is an optimization problem that schedules power plants to meet demand efficiently. Understanding this helps explain how the paper models hidden carbon emissions from fossil-fueled regulation reserves and quantifies the carbon benefits of data center participation.

*How the paper uses it:* The paper uses detailed unit commitment simulations to capture hidden emissions and optimize data center frequency regulation participation.

▶ [05 Unit Commitment](https://www.youtube.com/watch?v=jS15dU_422Q) — Daniel Kirschen · 4 years ago

### Workload scheduling and optimization in data centers *(prerequisite)*
Data centers run diverse workloads with different latency and resource needs. Learning about workload scheduling shows how EcoCenter co-locates latency-critical and best-effort tasks to enable effective power modulation without hurting performance.

*How the paper uses it:* EcoCenter coordinates multi-GPU workload management to achieve precise power modulation while maintaining latency-sensitive service quality.

▶ [The Entire AI Data Center Explained — From Electricity to ChatGPT](https://www.youtube.com/watch?v=ckoi0RTEgcY) — Leo Cui, Ph.D., CFA · 40:19 · 1 day ago

## Already in your library

- [Lecture - 33 Optimal Unit Commitment](https://www.youtube.com/watch?v=8n8ZNeQIldw) — also for: Coordinating GPU Data Centers and Power Grid Regulation Service for Exogenous Carbon Benefits (Nanpeng Yu)
