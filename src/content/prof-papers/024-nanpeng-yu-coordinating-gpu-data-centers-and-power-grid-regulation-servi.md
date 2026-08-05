---
title: "024 · Coordinating GPU Data Centers and Power Grid Regulation Service for Exogenous Carbon Benefits — Nanpeng Yu"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nyu"
source_hash: "23e2812e06a8a78727886263e6f4126bec451e5934d7894dc39f6e241ce830cd"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and fidelity to the paper "Coordinating GPU Data Centers and Power Grid Regulation Service for Exogenous Carbon Benefits." The beginner project focuses on reproducing and visualizing the Exogenous Carbon metric concept using simple simulation and visualization tools. The intermediate project involves reimplementing the core EcoCenter GPU power modulation method on a small-scale simulated workload to demonstrate frequency regulation participation and carbon savings. The advanced project extends the framework to explore multi-server coordination for frequency regulation, addressing a key future direction of the paper and involving workload scheduling optimization.

### Beginner — Simulate and Visualize Exogenous Carbon Metric
*Effort: a weekend, ~8 hours*

You build a Python notebook that simulates a simplified power grid frequency regulation scenario and calculates the Exogenous Carbon metric as defined in the paper. You visualize how modulating data center power consumption affects grid carbon emissions compared to baseline scenarios without regulation participation.

**Why it shows you understood the paper:** This project shows you understand the paper's novel Exogenous Carbon metric and its significance in quantifying hidden grid-side carbon emission reductions from data center frequency regulation.

**Grounded in:** Introduction of Exogenous Carbon metric to quantify grid-side carbon emission reductions from data center frequency regulation services.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy, pandas

**Data:** You simulate grid frequency regulation signals and data center power modulation profiles based on descriptions in the paper; no real dataset is required.

**Build it:**

1. Implement a simple time series simulation of grid frequency regulation signals over a short period (e.g., 1 hour at 2-second intervals).
2. Model a data center power consumption profile that modulates power in response to the regulation signal with some delay and precision.
3. Calculate the Exogenous Carbon metric by estimating grid carbon emission reductions due to data center participation versus a baseline without modulation.
4. Visualize the regulation signal, power modulation, and resulting carbon emission differences using plots.
5. Write a README explaining the metric, simulation assumptions, and interpretation of results.

**Ships as:** A Jupyter notebook with simulation code, plots illustrating the Exogenous Carbon metric, and a README explaining the implementation and insights.

**Stretch goal:** Add sensitivity analysis by varying modulation precision and latency to see their impact on Exogenous Carbon.

### Intermediate — Reimplement EcoCenter GPU Power Modulation on Simulated Workloads
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the EcoCenter framework that modulates GPU power consumption by coordinating power capping and core allocation on a simulated multi-GPU server running mixed latency-critical and best-effort workloads. You evaluate power modulation precision and estimate carbon savings using a basic grid emission model.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core EcoCenter method for GPU power modulation and workload coordination to provide frequency regulation, reproducing key results such as ≥90% modulation precision and carbon emission reduction estimation.

**Grounded in:** Development of EcoCenter framework that enables GPU data centers to provide frequency regulation by overcoming GPU power modulation challenges; EcoCenter achieves high precision (≥90%) power modulation by coordinating GPU power capping and core allocation.

**Tech stack:** Python 3.11, Jupyter Notebook, numpy, matplotlib, scipy

**Data:** You simulate GPU workload power profiles and frequency regulation signals based on the paper's descriptions; no real hardware data is required.

**Build it:**

1. Model synthetic latency-critical and best-effort GPU workloads with power consumption profiles and latency constraints.
2. Implement GPU power capping and core allocation knobs as adjustable parameters affecting simulated power consumption.
3. Design a control loop that modulates GPU power consumption at 2-second granularity to track a frequency regulation signal.
4. Measure modulation precision as the ratio of actual to requested power adjustment.
5. Estimate grid carbon emission reductions using a simplified unit commitment inspired model or fixed carbon intensity assumptions.
6. Visualize power modulation, workload latency impact, and carbon savings.
7. Document assumptions, methods, and results in a README.

**Ships as:** A Jupyter notebook or Python scripts demonstrating GPU power modulation control, precision metrics, and carbon emission estimates with visualizations and documentation.

**Stretch goal:** Integrate a simple optimization routine to allocate power modulation asymmetrically between latency-critical and best-effort workloads to maximize carbon savings.

### Advanced — Multi-Server EcoCenter Coordination for Frequency Regulation
*Effort: 3+ weeks*

You extend the EcoCenter framework concept to coordinate power modulation across multiple simulated GPU servers with heterogeneous workloads and hardware characteristics. You implement a workload scheduling and power modulation optimizer that maximizes frequency regulation capacity and carbon benefits, addressing the paper's future direction of scaling to multi-server environments.

**Why it shows you understood the paper:** This project tackles a key future direction and limitation of the paper by scaling EcoCenter beyond a single server, demonstrating your ability to apply optimization and workload scheduling to complex, realistic data center scenarios for grid services.

**Grounded in:** Scaling the framework to multi-server and multi-data center environments for coordinated grid services.

**Tech stack:** Python 3.11, numpy, scipy, cvxpy, matplotlib, Jupyter Notebook

**Data:** You simulate multi-server workload and power profiles with heterogeneous GPU hardware parameters; no real dataset is available so you base simulations on paper descriptions and typical GPU power ranges.

**Build it:**

1. Design a multi-server simulation environment with heterogeneous GPU servers running mixed workloads.
2. Implement power modulation knobs per server including power capping and core allocation with constraints.
3. Formulate an optimization problem to allocate frequency regulation capacity across servers maximizing carbon emission reduction and economic benefit, respecting workload latency constraints.
4. Solve the optimization problem using a convex optimization library (e.g., cvxpy).
5. Simulate frequency regulation participation using the optimized power modulation schedules.
6. Evaluate aggregate modulation precision, workload impact, and estimated carbon savings.
7. Visualize multi-server coordination results and document methodology and findings.

**Ships as:** A documented codebase and Jupyter notebook showing multi-server EcoCenter coordination, optimization formulation and solution, and evaluation of frequency regulation and carbon benefits.

**Stretch goal:** Incorporate real-time workload prediction uncertainty into the optimization to improve robustness.

_No authors' own code or datasets are available for this paper; all data must be simulated based on descriptions in the paper. The applicant should verify assumptions about GPU power profiles and grid emission models from the paper text before starting._
