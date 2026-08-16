---
title: "467 · An Extended Study of Gear-Ratio-Aware Standard Cell Layout Generation for DTCO Exploration — Chung-Kuan Cheng"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chung-kuan-cheng"
source_hash: "15fec555e5c11ca692302361454074a3561e27a98b466500f119b764403c7762"
sequence: 467
generator: "outreach-garden: managed"
---

# 467 · An Extended Study of Gear-Ratio-Aware Standard Cell Layout Generation for DTCO Exploration

## At a glance

- **Professor:** Chung-Kuan Cheng
- **Institution:** Univ. of California - San Diego
- **Paper:** [An Extended Study of Gear-Ratio-Aware Standard Cell Layout Generation for DTCO Exploration](https://arxiv.org/pdf/2603.13665)
- **Authors:** Chung-Kuan Cheng, Andrew B. Kahng, Bill Lin, Yucheng Wang, Dooseok Yoon
- **Year:** 2026

## Paper overview

This paper presents CPCell, a framework for generating standard cell layouts that supports arbitrary gear ratios and offset parameters to improve routability and design-technology co-optimization (DTCO) in advanced semiconductor nodes. It introduces new routing and placement techniques, acceleration methods to reduce runtime, and evaluates the impact of gear ratio choices on cell and block-level metrics such as power, performance, area, and IR-drop.

### Why it matters

**Research problem:** Advanced semiconductor nodes decouple contacted poly pitch (CPP) and metal pitch, leading to complex gear ratio (GR) and offset parameters that affect cell-level routability and block-level implementation quality. Existing methods either do not support arbitrary gear ratios and offsets or handle them only post-layout, limiting optimization and causing legalization failures.

**Why it matters:** Properly modeling and optimizing gear ratio and offset parameters during standard cell layout generation is critical for improving routability, reducing congestion, and achieving better power, performance, and area (PPA) trade-offs in sub-7nm technology nodes. Without this, designs may suffer from routing blockages, increased area, and power inefficiencies.

**Key contributions:**

- Development of CPCell, a standard-cell layout generation framework supporting arbitrary gear ratios and offset variants with guaranteed global optimality.
- Introduction of a fine-grained relative layered grid graph for constraint formulation capturing gear ratio details.
- Incorporation of Middle-of-Line routing and M0 pin enablement to improve routing resources and pin accessibility.
- Design of acceleration techniques (transistor clustering, identical transistor partitioning, routing lower bound tightening, early termination) to reduce solver runtime by up to 88.96%.
- Comprehensive cell-level and block-level studies evaluating gear ratio and offset impacts on power, performance, area, and IR-drop.

## About the professor

**Chung-Kuan Cheng** — Distinguished Professor, Department of Computer Science and Engineering, Univ. of California - San Diego.

### Research links

- [Faculty/profile page](http://cseweb.ucsd.edu/~kuan)
- [Resolved homepage](http://www-cse.ucsd.edu/users/kuan/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=9KBDb1cAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Constraint Programming and Combinatorial Optimization
**The paper assumes:** constraint programming, combinatorial optimization, multi-objective optimization, and solver algorithms
**Already in this field?** Skip this entirely if you already understand constraint programming methods and combinatorial optimization techniques used in electronic design automation.

To understand the constraint programming and combinatorial optimization techniques used in the CPCell framework for standard cell layout generation, this background provides two complementary learning paths. The rigorous course offers a deep dive into optimization fundamentals and methods, while the fast track gives a concise, focused introduction to combinatorial optimization concepts relevant to constraint programming and solver acceleration techniques. Choose the course for comprehensive mastery or the fast track for a quicker, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1-7, about 9.2 hours — covering introduction, convex sets, functions, and duality, which provide the mathematical foundation for constraint programming and optimization used in CPCell.

*Why it unblocks this paper:* Stanford EE364A Convex Optimization I by Stephen Boyd is a top-tier university course that covers foundational optimization techniques, including multi-objective optimization and constraint formulations, which are essential to grasp the CPCell framework's constraint programming and solver acceleration methods.

*If you want all of it:* 23.7 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Combinatorial Optimization](https://www.youtube.com/playlist?list=PLzneuU2STpz2Tdg8jeWnOvgPJrjI5MrbM) — Ashish Sharma · 9 videos · 13.8h across 9 episodes

**Watch only this:** Episodes 1-3, about 4.6 hours — covering combinatorial optimization basics and fundamental graph algorithms relevant to constraint programming.

*Why it unblocks this paper:* Ashish Sharma's Combinatorial Optimization playlist offers a concise and clear introduction to combinatorial optimization concepts, including graph algorithms and NP-completeness, which align well with understanding the combinatorial aspects of CPCell's layout generation and solver techniques.

*If you want all of it:* 13.8 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on CPCell, start with foundational knowledge on Design-Technology Co-Optimization (DTCO) and Standard Cell Layout Generation, as these provide the motivation and technical background for the work. Next, study Constraint Programming as it is the core methodological approach used in CPCell. Finally, focus on the paper's core concept by reviewing the authors' own talk or the most relevant advanced lecture about CPCell and gear-ratio-aware layout generation.

### Design-Technology Co-Optimization lecture *(prerequisite)*
DTCO is critical to understanding the motivation behind CPCell, as the paper targets co-optimization of design and technology parameters such as gear ratios and offsets to improve routability and PPA in advanced nodes. The selected lecture provides a rigorous academic introduction to DTCO in the semiconductor industry.

*How the paper uses it:* CPCell aims to improve DTCO by enabling flexible gear ratio and offset-aware standard cell layout generation.

▶ [An Introduction to Design-Technology Co-Optimization(DTCO) in Semiconductor Industry](https://www.youtube.com/watch?v=8BdvHSlgfeA) — 서울대학교 전기정보공학부 ECE SNU · 23:24 · 1 year ago

### Standard Cell Layout Generation lecture *(prerequisite)*
Understanding standard cell layout generation fundamentals is essential to grasp the problem CPCell addresses. The chosen lecture offers an in-depth university-level overview of standard cell libraries and layout considerations, which underpin the paper's focus on layout automation.

*How the paper uses it:* CPCell extends standard cell layout generation by incorporating arbitrary gear ratios and offset parameters.

▶ [DVD - Lecture 3: Logic Synthesis - Part 1](https://www.youtube.com/watch?v=4BZ6t2d3rJM) — Adi Teman · 1:16:27 · 7 years ago

### Constraint Programming for Physical Design seminar *(prerequisite)*
Constraint programming is the core technique used in CPCell to model and solve the layout generation problem with complex gear ratio constraints. The selected video is a detailed seminar from a reputable research group explaining the general principles of constraint programming, suitable for advanced readers.

*How the paper uses it:* CPCell formulates layout generation as a constraint programming problem using a fine-grained relative layered grid graph.

▶ [General Principles of Constraint Programming](https://www.youtube.com/watch?v=pHsw7lju_io) — Microsoft Research · 1:03:32 · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts essential to understanding the CPCell framework for gear-ratio-aware standard cell layout generation. We start with the basics of Design-Technology Co-Optimization (DTCO) to grasp the motivation behind optimizing semiconductor layouts, then cover standard cell layout fundamentals to understand the building blocks of IC design. Next, we explore constraint programming as the methodological backbone of CPCell, followed by an intuitive explanation of gear ratios and their impact on routing and layout. Finally, we conclude with the core concept of the CPCell framework itself, tying all prior knowledge together.

### Design-Technology Co-Optimization lecture *(prerequisite)*
Learn what DTCO means in semiconductor design: the joint optimization of design and manufacturing technology to improve chip performance, power, and area. This sets the stage for why CPCell’s approach to layout generation matters in advanced nodes.

*How the paper uses it:* Understanding DTCO is essential to grasp the motivation and impact of CPCell.

▶ [An Introduction to Design-Technology Co-Optimization(DTCO) in Semiconductor Industry](https://www.youtube.com/watch?v=8BdvHSlgfeA) — 서울대학교 전기정보공학부 ECE SNU · 23:24 · 1 year ago

### Standard Cell Layout Generation lecture *(prerequisite)*
Standard cells are the fundamental building blocks of ASICs. This section explains what standard cells are, their layout structure, and how they fit into the overall chip design flow, providing intuition on the challenges CPCell addresses.

*How the paper uses it:* Fundamental to understanding the problem CPCell addresses in layout automation.

▶ [Standard Cell | Standard Cell Layout | Standard Cell Library | Tracks of Standard cells](https://www.youtube.com/watch?v=yLqLD8Y4-Qc) — Team VLSI · 34:04 · 6 years ago

### Constraint Programming for Physical Design seminar *(prerequisite)*
Constraint programming is a powerful method for solving combinatorial problems by defining constraints and searching for solutions that satisfy them. This section introduces the basics of constraint programming, which CPCell uses to formulate layout generation.

*How the paper uses it:* CPCell formulates layout generation as a constraint programming problem.

▶ [General Principles of Constraint Programming](https://www.youtube.com/watch?v=pHsw7lju_io) — Microsoft Research · 1:03:32 · 9 years ago

### Gear Ratio and Routing in Advanced Nodes lecture
Gear ratios describe how different pitches in semiconductor layers relate and affect routing resources. This section provides an intuitive understanding of gear ratios and their mechanical analogies, helping to visualize their impact on layout and routing.

*How the paper uses it:* Central to understanding how gear ratios affect routability and layout quality.

▶ [NEVER be confused by GEAR RATIOS again - EXPLAINED in the MOST VISUAL WAY using LEGO](https://www.youtube.com/watch?v=txQs3x-UN34) — driving 4 answers · 8:06 · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of CPCell's approach to gear-ratio-aware standard cell layout generation. The beginner project reproduces a key metric from the paper using simple visualization and analysis. The intermediate project implements a simplified constraint programming model of gear ratio effects on cell layout and compares results to a baseline. The advanced project extends CPCell's method to support an additional layer stack, addressing a stated limitation and exploring scalability and complexity trade-offs.

### Beginner — Visualize Gear Ratio Impact on Cell Width and Wirelength
*Effort: a weekend, ~8 hours*

You build a small web app or script that visualizes the reduction in average cell width and wirelength for non-1:1 gear ratios (3:2 and 5:3) compared to the 1:1 baseline, based on data extracted from the paper's figures and tables. The app shows bar charts or line plots illustrating these metrics to reproduce the key result visually.

**Why it shows you understood the paper:** This project shows you understand how gear ratio choices affect cell-level physical metrics and can extract and faithfully represent quantitative results from the paper.

**Grounded in:** Key result: Non-1:1 gear ratios (3:2 and 5:3) reduce average cell width and wirelength relative to the 1:1 baseline by increasing vertical routing resources.

**Tech stack:** JavaScript, React, D3.js or Chart.js

**Data:** Data manually extracted from the paper's reported cell width and wirelength metrics for 1:1, 3:2, and 5:3 gear ratios.

**Build it:**

1. Extract numerical values for average cell width and wirelength for the 1:1, 3:2, and 5:3 gear ratios from the paper's figures or tables.
2. Set up a React app with a charting library like D3.js or Chart.js.
3. Implement bar charts or line plots to display the metrics side-by-side for the three gear ratios.
4. Add labels and legends to clearly indicate gear ratios and metrics.
5. Write a README explaining the source of data and the significance of the visualization.

**Ships as:** A GitHub repo with a React app that visually reproduces the paper's key metric comparing gear ratios, with clear documentation.

**Stretch goal:** Add interactive sliders to simulate how changing gear ratios might affect cell width and wirelength based on simple linear interpolation.

### Intermediate — Simplified Constraint Programming Model for Gear-Ratio-Aware Cell Layout
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the CPCell framework's core constraint programming model to generate standard cell layouts supporting arbitrary gear ratios (1:1, 3:2, 5:3). You model transistor placement and routing resources on a layered grid graph with gear ratio parameters, then solve for layouts minimizing cell width. You compare your results to a naive baseline that ignores gear ratio effects.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's core methodological contribution: formulating layout generation as a constraint programming problem that captures gear ratio details and optimizes cell metrics.

**Grounded in:** Key contribution: Development of CPCell, a standard-cell layout generation framework supporting arbitrary gear ratios and offset variants with guaranteed global optimality.

**Tech stack:** Python 3.11, Google OR-Tools CP-SAT solver, Matplotlib or Plotly

**Data:** Synthetic netlists with up to 10 transistors created to test the model; no proprietary data needed.

**Build it:**

1. Study the paper's description of the relative layered grid graph and constraint formulation for gear ratios.
2. Set up a Python environment with Google OR-Tools installed.
3. Implement a simplified constraint model representing transistor placement and routing with gear ratio parameters.
4. Create small synthetic netlists (e.g., 5-10 transistors) to serve as input.
5. Run the solver to generate layouts for 1:1, 3:2, and 5:3 gear ratios and record cell widths.
6. Implement a naive baseline that ignores gear ratio constraints and compare cell widths.
7. Visualize and document the results in a report.

**Verified links from the paper:**

- <https://github.com/google/or-tools> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python repo with a constraint programming model reproducing gear-ratio-aware layout generation on small netlists, including comparison plots and documentation.

**Stretch goal:** Incorporate transistor clustering acceleration to reduce solver runtime and compare performance.

### Advanced — Extending CPCell to Support Five-Layer Stack for Advanced Nodes
*Effort: 3-4 weeks*

You extend the CPCell constraint programming model to support an additional metal layer beyond the four-layer stack targeted in the paper, addressing the limitation of fixed layer count. You modify the layered grid graph and constraints to handle the increased complexity and evaluate the impact on solver runtime and layout quality for netlists up to 20 transistors. You analyze scalability trade-offs and document challenges.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing deep comprehension of CPCell's architecture and the computational challenges of generalizing to arbitrary layer stacks.

**Grounded in:** Limitation: The framework currently targets a four-layer stack consistent with the PROBE3.0 PDK; generalization to arbitrary layer counts increases computational complexity.

**Tech stack:** Python 3.11, Google OR-Tools CP-SAT solver, Jupyter Notebook for analysis

**Data:** Synthetic netlists with 10-20 transistors generated to test scalability; no proprietary data required.

**Build it:**

1. Review the CPCell model and code structure from the intermediate project or paper description.
2. Design an extension of the layered grid graph to include a fifth metal layer with appropriate pitch and routing parameters.
3. Modify the constraint model to incorporate the new layer and update routing and placement constraints accordingly.
4. Generate synthetic netlists with 10-20 transistors for testing.
5. Run the solver on the extended model and record runtime and layout metrics.
6. Compare results to the original four-layer model to analyze scalability and solution quality.
7. Document the implementation details, challenges faced, and potential improvements.

**Verified links from the paper:**

- <https://github.com/google/or-tools> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python repo extending CPCell to five layers with analysis notebooks showing runtime and layout comparisons, plus a detailed README.

**Stretch goal:** Explore integrating simple machine learning heuristics to guide solver search and reduce runtime on larger netlists.

_The authors released no code for this paper; intermediate and advanced projects require reimplementation of CPCell's methods from the paper's descriptions._
