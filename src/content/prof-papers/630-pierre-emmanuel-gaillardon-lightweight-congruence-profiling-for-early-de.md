---
title: "630 · Lightweight Congruence Profiling for Early Design Exploration of Heterogeneous FPGAs — Pierre-Emmanuel Gaillardon"
date: 2026-10-12
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-pierre-emmanuel-gaillardon"
source_hash: "28ef48ba6fe143bbbd4d3d32dac01d2c6de0727bbb1d27ee6bc920835f6b6e77"
sequence: 630
generator: "outreach-garden: managed"
---

# 630 · Lightweight Congruence Profiling for Early Design Exploration of Heterogeneous FPGAs

## At a glance

- **Professor:** Pierre-Emmanuel Gaillardon
- **Institution:** University of Utah
- **Paper:** [Lightweight Congruence Profiling for Early Design Exploration of Heterogeneous FPGAs](https://arxiv.org/pdf/2509.18295v1)
- **Authors:** Allen Boston, Biruk Seyoum, Luca Carloni, Pierre-Emmanuel Gaillardon
- **Year:** 2025

## Paper overview

This paper introduces a lightweight profiling method to help designers quickly identify performance bottlenecks in modern heterogeneous FPGA architectures. By measuring how well an application aligns with FPGA resources such as logic blocks, routing interconnect, and specialized compute units, the method guides efficient design space exploration and architecture optimization.

### Why it matters

**Research problem:** As FPGAs evolve to include heterogeneous resources like DSPs and memory blocks, design space exploration becomes complex due to intricate interactions between application demands and FPGA architecture. Existing tools lack fast, interpretable metrics to guide high-level architectural decisions.

**Why it matters:** Efficiently matching FPGA architectures to application needs is critical for improving power, performance, and area (PPA) in reconfigurable computing. Without effective profiling, designers face costly trial-and-error and suboptimal FPGA designs.

**Key contributions:**

- Development of a lightweight, interpretable profiling methodology for heterogeneous FPGA architectures based on congruence scores.
- Definition of three specific congruence scores (ICS, HRCS, LBCS) that isolate bottlenecks in routing, specialized blocks, and logic fabric respectively.
- Application of the methodology to benchmark suites (Koios and VPR) using Stratix 10–like FPGA models with varying densities of heterogeneous resources.
- Demonstration that the profiling scores can guide architecture co-design by identifying best-fit FPGA variants for different applications.
- Provision of a multidimensional view of application-architecture alignment that supports faster and more informed design space exploration.

## About the professor

**Pierre-Emmanuel Gaillardon** — Professor, Electrical & Computer Engineering, University of Utah.

### Research links

- [Faculty/profile page](https://simons.berkeley.edu/people/pierre-emmanuel-gaillardon)
- [Identity evidence](https://faculty.utah.edu/u6001662-PIERRE-EMMANUEL_GAILLARDON/research/index.hml)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** FPGA Architecture and CAD Tools
**The paper assumes:** FPGA architecture fundamentals, FPGA CAD tool flow, and FPGA delay modeling
**Already in this field?** Skip this entirely if you already understand FPGA internal architecture and how FPGA CAD tools like VPR perform placement, routing, and timing analysis.

To understand the lightweight congruence profiling methodology for heterogeneous FPGA architectures presented in the paper, foundational knowledge of FPGA subsystems (logic blocks, routing interconnect, heterogeneous resources) and CAD tools like VPR is essential. The rigorous course offers a deep, structured dive into digital design and FPGA implementation fundamentals, while the fast track provides a concise, focused introduction to FPGA design concepts suitable for quick comprehension. Choose the rigorous course for thorough background or the fast track for a time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Hardware Design using Digital Components, HDL & Implementation on FPGA](https://www.youtube.com/playlist?list=PLs1KAm9f26t_dIWL1oww7U4jDVlrQfhK3) — PinE Training Academy of VLSI & Embedded · 33 videos · 31.8h across 33 episodes

**Watch only this:** Episodes 1-6 (Logic Building Sessions on Gates Implementation Using Universal Gates and Adder Theory & Implementation), about 5.7 hours — these cover core digital logic concepts and basic FPGA design essentials needed to understand FPGA subsystems and resource utilization.

*Why it unblocks this paper:* This course covers the fundamentals of digital logic design, HDL, and FPGA implementation, providing the necessary background on FPGA architecture and design flows that underpin the paper's profiling methodology and use of CAD tools like VPR.

*If you want all of it:* 31.8 hours across 33 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [FPGA DESIGN COURSE -2026](https://www.youtube.com/playlist?list=PLqPfWwayuBvMI5Zl-RGv8BrP2PCZpu_gp) — ALL ABOUT VLSI · 10 videos · 4.5h across 10 episodes

**Watch only this:** Episodes 1-5 (Difference Between ASIC and FPGA, ASIC Design Flow, FPGA Design Flow, Introduction to PLD, What Is Inside an FPGA?), about 2.3 hours — these cover the essentials of FPGA architecture and design flow necessary to grasp the paper's context.

*Why it unblocks this paper:* This concise FPGA design course explains FPGA architecture basics, design flow, and key components like LUTs and heterogeneous resources, providing a quick but solid foundation relevant to understanding the paper's focus on FPGA subsystem bottlenecks and profiling.

*If you want all of it:* 4.5 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on lightweight congruence profiling for heterogeneous FPGAs, start by building foundational knowledge on heterogeneous FPGA architectures and FPGA placement and routing delay modeling, which are critical to grasping the resource types and delay isolation techniques used. Next, explore FPGA design space exploration to appreciate the context and motivation for fast, interpretable profiling methods. Then, study the Roofline model as it inspires the profiling methodology. Finally, focus on the paper's core concept by watching the authors' own talk to gain direct insight into their novel congruence scoring methodology and its application.

### Heterogeneous FPGA architectures *(prerequisite)*
Understanding the different types of FPGA resources, including logic blocks, DSPs, and memory blocks, is essential to appreciate how heterogeneous architectures impact design and profiling. This foundational knowledge helps contextualize the paper's focus on profiling congruence across these subsystems.

*How the paper uses it:* The paper targets heterogeneous FPGA architectures with specialized compute blocks, so knowing these resource types is foundational.

▶ [Heterogeneous Computing: Hardware and Software Perspectives](https://www.youtube.com/watch?v=H1lkkrt13v0) — Association for Computing Machinery (ACM) · 59:49 · 10y ago

### FPGA placement and routing delay modeling *(prerequisite)*
Placement and routing delay modeling is crucial to understanding how the authors modify delays in VPR to isolate subsystem bottlenecks. This knowledge clarifies the technical basis for the congruence scores derived from delay modifications.

*How the paper uses it:* The methodology relies on delay modifications in VPR placement and routing to compute congruence scores.

▶ [On the Difficulty of Pin-to-Wire Routing in FPGAs](https://www.youtube.com/watch?v=UZt2cDGHByQ) — EECG Toronto - University of Toronto · 30:57 · 13y ago

### FPGA design space exploration *(prerequisite)*
Design space exploration explains why fast and interpretable profiling metrics are needed to guide architectural decisions efficiently. Understanding this context highlights the importance and impact of the paper's proposed profiling method.

*How the paper uses it:* The paper aims to accelerate design space exploration by providing lightweight congruence profiling.

▶ [Exploring FPGA Designs for MX and Beyond - Ebby Samson](https://www.youtube.com/watch?v=-AKQR3N81go) — Spatial ML Seminar Series · 16:11 · 1y ago

### Roofline model FPGA profiling *(prerequisite)*
The Roofline model is the inspiration behind the paper's profiling methodology. Learning about this model helps understand how performance bottlenecks are identified and visualized, which is central to the congruence scoring approach.

*How the paper uses it:* The authors use a Roofline-inspired approach to define congruence scores isolating subsystem bottlenecks.

▶ [Introduction to Roofline 1 - AMD Profiling workshop - Day 2 - Pt2](https://www.youtube.com/watch?v=5-paZXoSfFk) — Pawsey Supercomputing Research Centre · 58:39 · 3y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides direct insight into their novel lightweight profiling methodology, the definition of congruence scores, and their application to heterogeneous FPGA architectures. This talk is the most authoritative and detailed resource on the paper's core contributions.

*How the paper uses it:* This talk is by the authors and covers their profiling methodology and results in detail.

▶ [Synthesizable Heterogenous FPGAs via VTR + Automatic BRAM Testing for Robust DVS for FPGAs](https://www.youtube.com/watch?v=XYJXRUdsFaQ) — EECG Toronto - University of Toronto · 29:58 · Streamed 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about heterogeneous FPGA architectures to grasp the types of resources involved. Next, explore FPGA placement and routing delay modeling to appreciate how delays affect performance and how the paper isolates subsystem bottlenecks. Then, study FPGA design space exploration to see why fast, interpretable profiling is crucial. After that, learn about the Roofline model as the inspiration for the paper's profiling methodology. Finally, focus on the paper's core contribution: the congruence scoring methodology that quantifies application-architecture alignment.

### Heterogeneous FPGA architectures *(prerequisite)*
This concept covers the different types of resources inside modern FPGAs, such as logic blocks, DSPs, and memory blocks, and how they work together. Understanding these heterogeneous resources is essential to appreciate the challenges in matching applications to FPGA architectures.

*How the paper uses it:* The paper profiles how well applications align with heterogeneous FPGA resources like logic blocks and specialized compute units.

▶ [FPGA in HFT Systems Explained | Why Reconfigurable Hardware Beats CPUs](https://www.youtube.com/watch?v=JmVOEkskft4) — ByteMonk · 8:16 · 1y ago

### FPGA placement and routing delay modeling *(prerequisite)*
Placement and routing determine how circuits are physically laid out and connected on an FPGA, affecting signal delays and overall performance. Modeling these delays is key to identifying bottlenecks and optimizing designs.

*How the paper uses it:* The paper modifies delay models in the VPR tool to isolate subsystem bottlenecks in routing and logic.

▶ [FPGA Timing Optimization: Background and Challenges](https://www.youtube.com/watch?v=9Ld9Sr_JE9o) — Greg Stitt · 22:53 · 5y ago

### FPGA design space exploration *(prerequisite)*
Design space exploration involves evaluating different FPGA architectures and configurations to find the best fit for an application, balancing trade-offs like performance, power, and area. Fast and interpretable profiling methods accelerate this process.

*How the paper uses it:* The paper aims to speed up design space exploration by providing lightweight, interpretable profiling scores.

▶ [Design Space & Terminology](https://www.youtube.com/watch?v=3Te2ai3PgMA) — Microelectronic Systems Design Research Group · 13:01 · 10y ago

### Roofline model FPGA profiling
The Roofline model is a visual performance model that helps identify whether an application is limited by compute or memory bandwidth. This intuition guides optimization efforts by highlighting bottlenecks.

*How the paper uses it:* The paper’s profiling methodology is inspired by the Roofline model to isolate bottlenecks in FPGA subsystems.

▶ [Roofline Model Explained | GPU Course Part 16](https://www.youtube.com/watch?v=3U5t-3uaCew) — Learn AI with Kritika · 8:12 · 3mo ago

## Already in your library

- [Introduction to FPGA Part 1 - What is an FPGA? | Digi-Key ...](https://www.youtube.com/watch?v=lLg1AgA2Xoo) — also for: Coordinating Instruments for Multi-Messenger Astrophysics (Jeremy Buhler)
- [Automated design space exploration and generation of AI accelerators](https://www.youtube.com/watch?v=PawgM_teh_I) — also for: Flydeling: Streamlined Performance Models for Hardware Acceleration of CNNs through System Identification (Shuvra S. Bhattacharyya)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the lightweight congruence profiling methodology introduced in the paper. Starting with a simple visualization of the congruence scores on benchmark data, you progress to reimplementing the core profiling method on a small FPGA benchmark and architecture variant. Finally, you extend the methodology to address one of the paper's limitations by isolating heterogeneous block types in the profiling scores, showing your ability to innovate beyond the original work.

### Beginner — Visualize Congruence Scores from Paper Benchmarks
*Effort: a weekend, ~8 hours*

You build a small web app or script that visualizes the three congruence scores (ICS, HRCS, LBCS) for the Koios and VPR benchmark sets on different FPGA architecture variants, reproducing radar plots similar to those in the paper. This involves parsing provided benchmark score data (simulated or extracted from the paper's figures) and rendering interactive charts.

**Why it shows you understood the paper:** This project shows you understand the meaning and interplay of the three congruence scores and how they reflect bottlenecks across FPGA subsystems for different applications and architectures.

**Grounded in:** Radar plots visually illustrate how performance bottlenecks shift among FPGA subsystems across benchmarks and architecture variants.

**Tech stack:** TypeScript, React, D3.js or Chart.js

**Data:** Simulated congruence score data based on the paper's reported results for Koios and VPR benchmarks across Stratix 10–like FPGA variants.

**Build it:**

1. Extract or simulate congruence score data for ICS, HRCS, and LBCS from the paper's figures and tables.
2. Set up a React project with a charting library like D3.js or Chart.js.
3. Implement radar plot components to display the three scores per benchmark and architecture variant.
4. Add interactivity to switch between benchmark sets and architecture variants.
5. Document the interpretation of the plots in the README.

**Ships as:** A GitHub repo with a React app that displays radar plots of congruence scores for Koios and VPR benchmarks, with a README explaining the significance of each score and how the plots relate to the paper's findings.

**Stretch goal:** Add a feature to compare aggregate scores across architecture variants and highlight the best overall fit.

### Intermediate — Reimplement Congruence Profiling on Small FPGA Benchmarks
*Effort: 1-3 weekends*

You reimplement the core congruence scoring methodology by modifying delay parameters in the VPR FPGA placement and routing tool to isolate subsystem bottlenecks. You run this on a small set of public or synthesized FPGA benchmarks and a Stratix 10–like architecture variant, computing ICS, HRCS, and LBCS scores and comparing them to a baseline without delay modifications.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's core method—roofline-inspired delay modifications in VPR—to quantify subsystem bottlenecks and validate the profiling approach on real FPGA design data.

**Grounded in:** The authors propose a Roofline-inspired profiling methodology that computes three congruence scores by using modified delay models in the VPR tool to isolate subsystem bottlenecks and evaluate these scores on benchmark suites with different FPGA architecture variants.

**Tech stack:** Python 3.11, VPR FPGA tool, Bash scripting

**Data:** Small public or synthesized FPGA benchmarks compatible with VPR; Stratix 10–like FPGA architecture model as described in the paper.

**Build it:**

1. Set up the VPR tool and obtain or synthesize a small set of FPGA benchmarks.
2. Implement scripts to modify delay parameters in VPR to near-zero for each subsystem (interconnect, heterogeneous blocks, logic blocks) as per the paper's methodology.
3. Run placement and routing with normal and modified delays to collect timing results.
4. Calculate ICS, HRCS, and LBCS scores from the timing data.
5. Compare scores against baseline runs and analyze bottleneck shifts.
6. Write a report summarizing the methodology, results, and comparison.

**Ships as:** A GitHub repo with scripts and instructions to run congruence profiling on small FPGA benchmarks using VPR, including computed scores and analysis in the README.

**Stretch goal:** Add visualization of bottleneck shifts similar to the paper's radar plots.

### Advanced — Extend Congruence Profiling to Separate Heterogeneous Block Types
*Effort: a few weeks*

You extend the profiling methodology to isolate and compute separate congruence scores for different types of heterogeneous blocks (e.g., DSPs vs BRAMs) instead of grouping them into a single HRCS. This involves modifying the delay model and profiling scripts to treat each block type independently, then evaluating the extended scores on benchmark sets and analyzing how bottlenecks shift with heterogeneous resource granularity.

**Why it shows you understood the paper:** This project tackles a stated limitation of the paper by improving the granularity of the profiling method, demonstrating your ability to innovate on the original research and deepen the analysis of FPGA subsystem bottlenecks.

**Grounded in:** The methodology groups all heterogeneous blocks into a single HRCS value for simplicity, which may obscure individual block contributions. Extending the methodology to isolate and evaluate individual heterogeneous block types separately is a future direction.

**Tech stack:** Python 3.11, VPR FPGA tool, Bash scripting, Data visualization (e.g., Matplotlib or D3.js)

**Data:** Same as intermediate project: small FPGA benchmarks and Stratix 10–like architecture models with heterogeneous block type annotations.

**Build it:**

1. Analyze the FPGA architecture model to identify different heterogeneous block types (e.g., DSPs, BRAMs).
2. Modify VPR delay parameters and profiling scripts to separately zero delays for each heterogeneous block type.
3. Run profiling experiments isolating each block type to compute distinct congruence scores.
4. Aggregate and compare these extended scores across benchmarks and architecture variants.
5. Visualize the results to show how bottlenecks shift with finer-grained heterogeneous resource profiling.
6. Document the methodology, challenges, and insights in the README.

**Ships as:** A GitHub repo with extended profiling scripts, experimental results, visualizations, and a detailed README explaining the extension and its impact on profiling accuracy.

**Stretch goal:** Integrate power and area metrics into the extended congruence scoring framework for a holistic evaluation.

_No authors' code or datasets are publicly available for this paper; the intermediate and advanced projects require setting up and using the VPR FPGA tool with publicly available or synthesized benchmarks and architecture models approximating Stratix 10–like FPGAs._
