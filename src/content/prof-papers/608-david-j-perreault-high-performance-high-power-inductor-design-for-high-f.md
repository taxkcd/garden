---
title: "608 · High-Performance High-Power Inductor Design for High-Frequency Applications — David J. Perreault"
date: 2026-09-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-j-perreault"
source_hash: "f1e2703cb1fefc8c14c6c6fce72a9d537a454b57283e601e5dd8286c748e839c"
sequence: 608
generator: "outreach-garden: managed"
---

# 608 · High-Performance High-Power Inductor Design for High-Frequency Applications

## At a glance

- **Professor:** David J. Perreault
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [High-Performance High-Power Inductor Design for High-Frequency Applications](https://doi.org/10.1109/ojpel.2025.3623094)
- **Authors:** Mansi V. Joisher, Roderick S. Bayliss III, Mike K. Ranjram, Rachel S. Yang, Alexander Jurkov, David J. Perreault
- **Year:** 2024

## Paper overview

This paper presents a novel design for high-power inductors operating at high radio frequencies (3-30 MHz), which are critical components in power electronics. The authors propose a self-shielded cored inductor that reduces electromagnetic interference and losses compared to traditional air-core inductors, enabling smaller and more efficient power electronic systems.

### Why it matters

**Research problem:** Designing efficient, compact, and high-power inductors for high-frequency applications is challenging due to significant core and conductor losses, electromagnetic interference (EMI), and size constraints. Conventional air-core inductors have high losses and EMI issues, limiting system miniaturization and efficiency.

**Why it matters:** High-frequency inductors are essential in applications like RF plasma generation, induction heating, wireless power transfer, and miniaturized switched-mode power converters. Improving their efficiency and size directly impacts the performance and feasibility of these technologies.

**Key contributions:**

- Introduction of a self-shielded cored inductor design that minimizes external magnetic flux and EMI.
- Use of quasi-distributed gaps and field balancing to reduce skin and proximity effect losses.
- Development of refined reluctance models to accurately predict inductance and losses including 3D effects like phi-directed fields and lost gaps.
- Experimental validation of a 500 nH, 80 A peak current inductor operating at 13.56 MHz with a high quality factor (Q) of 1150.
- Demonstration of significant loss reduction (50%) and volume reduction (to 28%) compared to shielded air-core inductors of equivalent inductance.

## About the professor

**David J. Perreault** — Ford Professor of Electrical Engineering, Electrical Engineering and Computer Science (EECS), Massachusetts Inst. of Technology.

Research interests: design, manufacturing, and control techniques for power electronic systems and components, and their use in a wide range of applications

### Research links

- [Faculty/profile page](http://www.rle.mit.edu/perreault)
- [Resolved homepage](https://lees-rle.mit.edu/)
- [Lab website](http://www.rle.mit.edu/lees)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Electromagnetic Field Theory
**The paper assumes:** electromagnetic field theory, magnetic circuits, Maxwell's equations, and high-frequency electromagnetic phenomena
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of electromagnetic field theory and magnetic circuit modeling.

Understanding electromagnetic field theory is essential for grasping the magnetic flux distribution, electromagnetic interference, and loss mechanisms in high-frequency inductors as discussed in the paper. The rigorous course option offers a deep, structured university-level lecture series ideal for thorough comprehension, while the fast track provides a concise, focused set of videos to quickly build foundational knowledge without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Electromagnetic Fields & Energy, Textbook Components w Video](https://www.youtube.com/playlist?list=PL74058E54264993C8) — MIT OpenCourseWare · 49 videos · 6.5h across 49 episodes

**Watch only this:** Episodes 3, 4, 5, 6, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 (magnetic field of line current, voltmeter reading induced by magnetic induction, field of solenoids and coils, charge distribution, and related demos), about 2 hours total

*Why it unblocks this paper:* This MIT OpenCourseWare playlist covers fundamental electromagnetic field theory topics including magnetic fields, induction, and flux, which are directly relevant to modeling and understanding the self-shielded inductor design and its electromagnetic behavior.

*If you want all of it:* 6.5 hours across 49 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Electromagnetic Field Theory](https://www.youtube.com/playlist?list=PL4lHevQbRIlmxl-sIJvE7fLa65piaMwtb) — RF Design Basics · 30 videos · 7.1h across 30 episodes

**Watch only this:** Episodes 1 through 20 (covering coordinate systems, vector calculus, Coulomb's law, electric flux, Gauss's law, divergence theorem, potential, and boundary conditions), about 4.5 hours total

*Why it unblocks this paper:* This playlist by RF Design Basics provides clear, concise explanations of electromagnetic field concepts including coordinate systems, Coulomb's law, Gauss's law, and boundary conditions, which are foundational for understanding electromagnetic interference and magnetic circuit modeling in the paper.

*If you want all of it:* 7.1 hours across 30 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on high-performance high-power inductor design for high-frequency applications, start by building foundational knowledge on high-frequency power electronics components, electromagnetic interference mitigation, magnetic core inductor design, and skin and proximity effects in conductors. These prerequisites provide the necessary context on the operating environment, challenges, and physical phenomena addressed by the paper. Finally, focus on the core concept of self-shielded cored inductor design, featuring the authors' own detailed talk to directly grasp their novel design approach and experimental validation.

### High-frequency power electronics components *(prerequisite)*
This section introduces the challenges and context of power electronics operating at MHz frequencies, which is critical to appreciate why advanced inductor designs are necessary. It covers the environment where the inductors operate and the demands placed on components at these frequencies.

*How the paper uses it:* Understanding the high-frequency power electronics context clarifies the application environment and challenges that the proposed inductor design addresses.

▶ [Power Electronics at MHz Frequencies| Juan Rivas-Davila | Energy@Stanford & SLAC 2020](https://www.youtube.com/watch?v=Cg6z0fLLYEI) — Stanford ENERGY · 1:00:54 · 5 years ago

### Electromagnetic interference mitigation techniques *(prerequisite)*
This section covers the principles and methods of reducing electromagnetic interference (EMI), a key challenge in high-frequency inductor design. Understanding EMI and its mitigation is essential to appreciate the self-shielding strategy used in the paper.

*How the paper uses it:* The paper's self-shielded inductor design aims to reduce EMI and external magnetic flux, making EMI mitigation knowledge crucial.

▶ [Lec 54: Introduction to EMI](https://www.youtube.com/watch?v=RoCPFEHmtjk) — NPTEL IIT Guwahati · 22:54 · 4 years ago

### Magnetic core inductor design *(prerequisite)*
This section focuses on magnetic core materials and structures, including modeling and design considerations for inductors with magnetic cores. It provides the necessary background to understand the choice of ferrite cores and gap distribution in the paper's design.

*How the paper uses it:* The paper uses a pot-core ferrite magnetic core with quasi-distributed gaps, so understanding magnetic core design principles is foundational.

▶ [https://www.youtube.com › watch?v=S-0Vaa3725s](https://www.youtube.com/watch?v=S-0Vaa3725s) — YouTube result via DuckDuckGo

### Skin and proximity effects in conductors *(prerequisite)*
This section explains the skin and proximity effects that cause conductor losses at high frequencies. Understanding these effects is critical to grasp how the paper's design uses field balancing and quasi-distributed gaps to reduce losses.

*How the paper uses it:* The paper addresses skin and proximity effect losses through its novel winding and gap design, making this knowledge essential.

▶ [Skin and proximity effects: an intuitive explanation of Dowell’s loss model](https://www.youtube.com/watch?v=TPSbuUOHhUg) — Sam Ben-Yaakov · 39:14 · 4 years ago

### Self-shielded cored inductor design
This core section presents the novel self-shielded cored inductor design that minimizes external magnetic flux and EMI while improving efficiency. It includes the detailed design methodology, modeling, and experimental validation.

*How the paper uses it:* This is the central contribution of the paper, detailing the innovative inductor design and its performance benefits.

▶ [ElectronicBits#22 -  HF Power Inductor Design](https://www.youtube.com/watch?v=6Mi8QDD71vE) — Sam Ben-Yaakov · 46:17 · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner through the foundational concepts needed to understand the novel high-frequency, high-power inductor design presented in the paper. Starting with the basics of inductors and magnetic cores, it then covers the challenges of high-frequency power electronics, followed by the critical phenomena of skin and proximity effects that cause losses. Finally, it culminates with electromagnetic interference mitigation and the paper's core innovation: the self-shielded cored inductor design.

### Magnetic core inductor design *(prerequisite)*
Learn what inductors are, how magnetic cores influence their behavior, and why core materials and shapes matter. This builds intuition about energy storage in magnetic fields and how cores affect inductance and losses.

*How the paper uses it:* The paper’s design uses a pot-core with high-frequency ferrite material and quasi-distributed gaps to optimize magnetic performance and reduce losses.

▶ [https://www.youtube.com › watch?v=XsA8sZuhSFg](https://www.youtube.com/watch?v=XsA8sZuhSFg) — YouTube result via DuckDuckGo

### High-frequency power electronics components *(prerequisite)*
Understand the environment where these inductors operate—power electronics at MHz frequencies—and the challenges such as losses, efficiency, and size constraints. This context explains why specialized inductor designs are necessary.

*How the paper uses it:* The paper targets inductors operating at 3-30 MHz for applications like wireless power transfer and switched-mode converters.

▶ [Lecture 1: Introduction to Power Electronics](https://www.youtube.com/watch?v=f7oXhDatwtY) — MIT OpenCourseWare · 43:22 · 2 years ago

### Skin and proximity effects in conductors *(prerequisite)*
These effects cause current crowding and increased resistance in conductors at high frequencies, leading to losses. Understanding these phenomena is key to grasping why the paper uses quasi-distributed gaps and field balancing to reduce losses.

*How the paper uses it:* The paper’s design mitigates skin and proximity effect losses through field balancing and distributed gaps in the core.

▶ [Skin and proximity effects: an intuitive explanation of Dowell’s loss model](https://www.youtube.com/watch?v=TPSbuUOHhUg) — Sam Ben-Yaakov · 39:14 · 4 years ago

### Electromagnetic interference mitigation techniques *(prerequisite)*
Learn what electromagnetic interference (EMI) is, how it arises from inductors, and common methods to reduce it. This knowledge is essential to appreciate the paper’s self-shielded design that minimizes external magnetic flux and EMI.

*How the paper uses it:* The paper introduces a self-shielded pot-core inductor that significantly reduces EMI compared to air-core inductors.

▶ [EMI (ElectroMagnetic Interference) & EMC (Electromegetic Compatibility) by Engineering Funda](https://www.youtube.com/watch?v=cWo_sVDTszY) — Engineering Funda · 24:25 · 8 years ago

### Self-shielded cored inductor design
This is the paper’s core innovation: a pot-core inductor with a copper shield and quasi-distributed gaps that balances magnetic fields to reduce losses and EMI. Understanding this design explains how the authors achieve high Q and compact size at high frequencies.

*How the paper uses it:* The paper’s novel self-shielded inductor design enables 50% loss reduction and 72% volume reduction compared to shielded air-core inductors.

▶ [ElectronicBits#22 -  HF Power Inductor Design](https://www.youtube.com/watch?v=6Mi8QDD71vE) — Sam Ben-Yaakov · 46:17 · 9 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's novel high-frequency, high-power self-shielded inductor design. The beginner project focuses on simulating and visualizing the magnetic field shielding concept using tools you already know. The intermediate project involves reimplementing the core reluctance modeling and Q-factor estimation from the paper, comparing it to a simple baseline air-core inductor model. The advanced project extends the paper's work by addressing a stated limitation: modeling and mitigating assembly-induced losses and dielectric effects to improve experimental Q-factor predictions.

### Beginner — Visualize Self-Shielding Magnetic Field in Pot-Core Inductor
*Effort: a weekend, ~8 hours*

You build a simple 2D electromagnetic field visualization of a pot-core inductor with and without a copper shield to demonstrate self-shielding effects. Using Python and matplotlib or a JavaScript visualization library, you simulate and plot magnetic flux lines and field intensity around the inductor geometry.

**Why it shows you understood the paper:** This project shows you grasp the core concept of self-shielding reducing external magnetic flux and EMI, a key contribution of the paper.

**Grounded in:** The self-shielded inductor is designed to ensure a minimal magnetic field outside the inductor’s physical volume, resulting in only an 8.7% Q reduction when a large metallic object is nearby.

**Tech stack:** Python 3.11, matplotlib, NumPy

**Data:** No external data needed; you simulate magnetic field lines based on idealized pot-core geometry parameters described in the paper.

**Build it:**

1. Research basic magnetic field equations for pot-core inductors and copper shielding effects.
2. Implement a 2D grid simulation of magnetic flux density around a simplified pot-core geometry.
3. Add a copper shield layer and simulate its effect on external magnetic flux.
4. Visualize magnetic flux lines and field intensity with and without shielding using matplotlib.
5. Write a README explaining the self-shielding concept and how your visualization demonstrates it.

**Ships as:** A GitHub repo with simulation code and plots showing reduced external magnetic fields due to shielding, plus a README linking this to the paper's self-shielding contribution.

**Stretch goal:** Add an interactive web visualization using JavaScript (e.g., D3.js) to dynamically adjust shield thickness and observe effects.

### Intermediate — Reimplement Refined Reluctance Model and Q Estimation
*Effort: 2 weekends, ~20 hours*

You implement the paper’s refined reluctance model for the magnetic circuit of the self-shielded pot-core inductor, including quasi-distributed gaps and 3D effects approximations. You compute inductance and estimate Q-factor at a target frequency, then compare results to a simple air-core inductor model to demonstrate loss and size improvements.

**Why it shows you understood the paper:** This project proves you can translate the paper’s core modeling approach into code and quantitatively reproduce key performance metrics, showing deep comprehension of the design and loss mechanisms.

**Grounded in:** Development of refined reluctance models to accurately predict inductance and losses including 3D effects like phi-directed fields and lost gaps; simulated Q of 1495 compared to air-core inductors.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** No external dataset; you use geometric and material parameters from the paper’s design description to parameterize your model.

**Build it:**

1. Study the paper’s reluctance model equations and assumptions for the pot-core inductor.
2. Implement the magnetic circuit model including quasi-distributed gaps and field balancing.
3. Calculate inductance and loss components to estimate Q-factor at 13.56 MHz.
4. Implement a baseline air-core inductor model for comparison.
5. Plot and compare Q-factor and loss estimates for both designs.
6. Document your implementation details, assumptions, and comparison results in a README.

**Ships as:** A repository with code that reproduces the paper’s refined reluctance model and Q estimation, plus comparison plots and explanations linking back to the paper’s key results.

**Stretch goal:** Incorporate a simple 3D finite element simulation using an open-source FEM library (e.g., FEniCS) to validate reluctance model approximations.

### Advanced — Model and Mitigate Assembly-Induced Losses in Self-Shielded Inductors
*Effort: 3+ weeks*

You develop a computational model that incorporates assembly imperfections such as winding crumpling, non-concentric core pieces, and dielectric losses to predict their impact on the inductor’s Q-factor. You propose and simulate mitigation strategies (e.g., improved winding geometry or materials) to reduce these losses, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to extend the paper’s work by tackling a stated limitation through modeling and proposing practical improvements, potentially contributing to better experimental reproducibility.

**Grounded in:** Experimental Q is lower than simulation due to assembly imperfections, winding crumpling, non-concentric core pieces, and unmodeled dielectric losses; future directions include refinement of assembly techniques and further modeling of core damage mechanisms.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, possibly CAD software or FEM tools for geometry modeling

**Data:** You simulate assembly imperfections based on qualitative descriptions from the paper; no external dataset is available.

**Build it:**

1. Review the paper’s discussion on assembly-induced losses and dielectric effects.
2. Model geometric imperfections such as winding crumpling and core misalignment mathematically or via parameterized perturbations.
3. Incorporate dielectric loss models into the Q-factor estimation.
4. Simulate the impact of these imperfections on inductance and Q-factor.
5. Propose and simulate mitigation strategies (e.g., optimized winding layout or materials).
6. Summarize findings and recommendations in a detailed README.

**Ships as:** A comprehensive codebase modeling assembly-induced losses with simulations showing their impact and mitigation, accompanied by a report connecting results to the paper’s limitations and future directions.

**Stretch goal:** Collaborate with a hardware lab to experimentally validate your mitigation strategies on prototype inductors.
