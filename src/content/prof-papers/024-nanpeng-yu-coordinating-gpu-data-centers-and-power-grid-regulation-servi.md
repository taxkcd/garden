---
title: "024 · Coordinating GPU Data Centers and Power Grid Regulation Service for Exogenous Carbon Benefits — Nanpeng Yu"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nyu"
source_hash: "0f427dc255a73db37f0b0775808f9e93dd6639a6a9c194ac156f4839d0da0067"
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

To deeply understand the paper "Coordinating GPU Data Centers and Power Grid Regulation Service for Exogenous Carbon Benefits," start by building foundational knowledge on power system unit commitment and demand response in smart grids, which underpin the grid modeling and frequency regulation context. Next, gain insights into GPU power management challenges relevant to the EcoCenter framework. Finally, focus on the core concept of frequency regulation with data centers and the authors' own talks to grasp their novel contributions and framework details.

## Recommended videos (in order)

### Power system unit commitment lecture *(prerequisite)*
Unit commitment is a fundamental optimization problem in power systems that schedules generation resources to meet demand while minimizing costs and respecting constraints. Understanding this topic is crucial because the paper uses detailed unit commitment simulations to model hidden emissions and optimize data center participation in frequency regulation markets.

*How the paper uses it:* The paper's grid emission modeling and optimization rely on unit commitment simulations to capture hidden carbon emissions from fossil-fueled frequency regulation reserves.

▶ [Lecture - 33 Optimal Unit Commitment](https://www.youtube.com/watch?v=8n8ZNeQIldw) — nptelhrd · 44:56

### Demand response in smart grids colloquium *(prerequisite)*
Demand response programs enable flexible loads to adjust consumption in response to grid needs, enhancing stability and integrating renewables. This context is essential to appreciate how data centers can act as flexible resources providing frequency regulation and carbon benefits.

*How the paper uses it:* The paper explores data center flexibility as a demand response resource providing frequency regulation services to reduce grid carbon emissions.

▶ [Flexing the grid: A deep dive into demand-side solutions](https://www.youtube.com/watch?v=YB964fO1GBs) — Canary Media · 57:34

### GPU power management techniques talk *(prerequisite)*
GPU power management is challenging due to limited low-power states and high static power consumption. Understanding these technical constraints is foundational to grasping how EcoCenter achieves precise power modulation by coordinating GPU power capping and core allocation.

*How the paper uses it:* EcoCenter overcomes GPU power modulation challenges to provide high-precision frequency regulation services.

▶ [2026 AI Infra Strategies | GPU Capacity and Cost Optimization ...](https://www.youtube.com/watch?v=sKQdSRmLBGE) — WEKA · 46:53

### Frequency regulation with data centers seminar
Frequency regulation is a critical grid service maintaining stability by balancing supply and demand on short timescales. Seminars on frequency regulation with data centers provide domain-specific insights into how data centers can participate in these services, which is the central application of the paper.

*How the paper uses it:* The paper's core contribution is enabling GPU data centers to provide frequency regulation services to the power grid.

▶ [Synchronization in the Datacenter](https://www.youtube.com/watch?v=3gUvZikFePA) — Open Compute Project · 18:15

### Authors' talk on EcoCenter *(the paper's own talk)*
The authors' own presentations provide the most direct and detailed explanation of their novel EcoCenter framework, the Exogenous Carbon metric, and their experimental and modeling results. These talks are invaluable for understanding the paper's unique contributions and technical approach.

*How the paper uses it:* This is the authors' own presentation explaining their novel framework and results on coordinating GPU data centers with grid frequency regulation for carbon benefits.

▶ [Energy Usage Impact - New Holistic Metrics for AI Data Centers: A Discussion with The Green Grid](https://www.youtube.com/watch?v=Dln_ixkQ6rI) — The Green Grid · 1:05:37 · 2mo ago
