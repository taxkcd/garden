---
title: "599 · Molecular system for an exponentially fast growing programmable synthetic polymer — Alan H. Barr"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alan-h-barr"
source_hash: "00265aeabea5bd45f41b943142e2a4ce38a750dae855961728434eb20ebbb291"
sequence: 599
generator: "outreach-garden: managed"
---

# 599 · Molecular system for an exponentially fast growing programmable synthetic polymer

## At a glance

- **Professor:** Alan H. Barr
- **Institution:** California Inst. of Technology
- **Paper:** [Molecular system for an exponentially fast growing programmable synthetic polymer](https://www.nature.com/articles/s41598-023-35720-5.pdf)
- **Authors:** Nadine Dabby, Alan Barr, Ho-Lin Chen
- **Year:** 2023

## Paper overview

This paper presents a novel molecular system that uses DNA to create synthetic polymers capable of growing exponentially fast in real time. Unlike previous methods that grow polymers by adding layers externally, this system inserts components internally, enabling faster and more efficient growth. The system can also divide polymers, increasing the number of polymers exponentially. This work bridges molecular biology and computational theory, proposing a new computational framework to understand such exponential growth in physical systems.

### Why it matters

**Research problem:** How to design and implement a molecular system that achieves programmable exponential growth of synthetic polymers in real time, overcoming limitations of passive self-assembly and traditional computational models.

**Why it matters:** Exponential growth in molecular self-assembly is crucial for efficient bottom-up fabrication of complex 2D and 3D molecular devices with applications in medicine, environment, and manufacturing. Understanding and controlling such growth can enable smarter materials and programmable molecular machines, advancing synthetic biology and nanotechnology.

**Key contributions:**

- First molecular system to implement internal parallel insertion for exponential polymer growth in real time.
- Experimental demonstration of programmable exponential growth and division of synthetic DNA polymers.
- Development of a formal computational model for active self-assembly based on Pushdown Automata.
- Identification of limitations of traditional Turing machine theory for analyzing exponential growth in physical systems and proposal of an extended physical computation framework.
- Design and validation of molecular primitives (insertion, division) enabling complex programmable behaviors.

## About the professor

**Alan H. Barr** — Professor of Computer Science, Computer Science, California Inst. of Technology.

Research interests: mathematics of computer graphics, MRI Imaging, developmental biology and molecular modeling, global virtual hospital, InterPlanetary Superhighway, GPU computing

### Research links

- [Faculty/profile page](http://www.eas.caltech.edu/people/2923/profile)
- [Professor website](https://www.eas.caltech.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** formal languages and automata theory
**The paper assumes:** formal languages, automata theory, pushdown automata, computational models, and complexity classes
**Already in this field?** Skip this entirely if you already understand automata theory, including pushdown automata and their computational power relative to Turing machines.

This background covers formal languages and automata theory, focusing on Pushdown Automata (PDA), which is the core computational model used in the paper to explain and implement exponential polymer growth. The rigorous course option provides a comprehensive university-level lecture series for deep understanding, while the fast track offers a concise, focused playlist on Pushdown Automata to quickly grasp the essential concepts relevant to the paper's computational framework.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Automata Jeff Ullman | Stanford](https://www.youtube.com/playlist?list=PLEAYkSg4uSQ33jY4raAXvUT7Bm_S_EGu0) — Rahul Madhavan · 26 videos · 11.6h across 26 episodes

**Watch only this:** Lectures 9 to 14 (Introduction to context free grammars, Parse trees, Normal forms for CFG, Pushdown automata, Equivalence of PDA and CFG, The pumping lemma for CFLs), about 2.5 hours — these cover the theory and formalism of PDAs essential for understanding the paper's computational claims.

*Why it unblocks this paper:* This Stanford-level course by an expert covers the full spectrum of automata theory including finite automata, context-free grammars, pushdown automata, and Turing machines, providing the rigorous theoretical foundation needed to understand the paper's computational model and its distinction from Turing machines.

*If you want all of it:* All 26 episodes, about 11.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Pushdown Automata | Chapter 14 | Theory of Computation](https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqpOGRpt_v7FtYW2y10yTN) — Neso Academy · 9 videos · 2.3h across 9 episodes

**Watch only this:** Episodes 1 to 6 (Pushdown Automata Introduction, Formal Definition, Graphical Notation, and the Even Palindrome example parts 1-3), about 1.5 hours — these provide a concise yet thorough introduction to PDAs and their operation.

*Why it unblocks this paper:* This Neso Academy playlist focuses specifically on Pushdown Automata with clear explanations and examples, ideal for quickly grasping the PDA model and its equivalence to context-free grammars, directly relevant to the paper's computational framework.

*If you want all of it:* All 9 episodes, about 2.3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on programmable exponential growth of synthetic polymers, start by grounding yourself in the computational theory of Pushdown Automata, which underpins the molecular system's computational model. Next, explore the molecular mechanisms of polymer growth and division to grasp the experimental processes enabling exponential polymerization. Then, study DNA hairpin structures and their kinetics, essential for the internal insertion mechanism. Finally, focus on the authors' own talk presenting their novel molecular system, providing direct insights into their experimental design and computational framework.

### Pushdown Automata computational theory *(prerequisite)*
Understanding Pushdown Automata (PDA) is critical because the paper's molecular system is computationally equivalent to a PDA rather than a Turing machine. This foundational knowledge clarifies why the system can achieve exponential growth efficiently and how it differs from traditional computational models. The selected video is a rigorous university lecture from MIT OpenCourseWare by Michael Sipser, providing a detailed and formal treatment of PDAs.

*How the paper uses it:* The molecular system’s computational equivalence to a Pushdown Automaton is central to its exponential growth capability.

▶ [4. Pushdown Automata, Conversion of CFG to PDA and Reverse Conversion](https://www.youtube.com/watch?v=m9eHViDPAJQ) — MIT OpenCourseWare · 1:09:23 · 5y ago

### Molecular polymer growth and division mechanisms *(prerequisite)*
This concept covers the experimental and chemical basis of polymer growth and division, which are key to understanding how the authors achieve exponential polymerization. The chosen video is a substantive university-level lecture on step-growth polymerization from the University of Edinburgh, providing advanced insights into polymer chemistry relevant to the paper's experimental system.

*How the paper uses it:* The paper experimentally demonstrates polymer growth and division mechanisms enabling exponential increase in polymer length and population.

▶ [Step-Growth Polymerization | Polymer Chemistry Lecture | University of Edinburgh (2024)](https://www.youtube.com/watch?v=WnPQcLaWGTk) — Pritam Das · 1:21:05 · 2y ago

### DNA hairpin structures and kinetics *(prerequisite)*
DNA hairpin monomers are the molecular primitives inserted internally to achieve exponential growth. Understanding their structure and kinetics is essential to grasp the mechanistic details of the system. The selected video is a detailed seminar on DNA hairpin flexibility and novel RNA systems, offering advanced molecular insights relevant to the paper's hairpin insertion mechanism.

*How the paper uses it:* The molecular insertion mechanism relies on DNA hairpin monomers whose kinetics determine growth rates.

▶ [Unravelling the FLEXibility of DNA hairpins and novel RNA systems | Exciting Seminars #smfret #fcs](https://www.youtube.com/watch?v=9eq-EE70PgQ) — Exciting Instruments · 49:15 · 1y ago

### Authors molecular system talk *(paper-talk search result; attribution unverified)*
This section features the authors' own presentation of their molecular system, providing direct and authoritative insights into their experimental design, computational modeling, and results. It is the core resource for understanding the novel contributions and context of the paper.

*How the paper uses it:* This is the direct source for understanding the authors' presentation and insights on their novel molecular system.

▶ [Polymerisation Unleashed: The Future of Manufacturing](https://www.youtube.com/watch?v=GfqCtB0Lknc) — iitutor.com · 37:57 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on programmable exponential growth of synthetic polymers using DNA, start by learning the basics of DNA hairpin structures and their kinetics, which are fundamental to the molecular insertion mechanism. Next, grasp the computational theory of Pushdown Automata, as the molecular system is modeled computationally by this framework. Then, explore the molecular polymer growth and division mechanisms to see how polymers physically grow and split. Finally, delve into the authors' novel molecular system that implements internal parallel insertion for exponential polymer growth, tying all concepts together.

### DNA hairpin structures and kinetics *(prerequisite)*
DNA hairpins are looped structures formed when a single strand of DNA folds back on itself. Understanding their formation and kinetics is essential because the paper's molecular system uses DNA hairpin monomers that insert internally into polymers, driving exponential growth.

*How the paper uses it:* The system inserts DNA hairpin monomers internally to enable exponential polymer growth.

▶ [Week3-3-DNA & Hairpins](https://www.youtube.com/watch?v=jF_fcTyvJBw) — Teaching Bioinformatics · 13:53 · 5y ago

### Pushdown Automata computational theory *(prerequisite)*
Pushdown Automata are computational models that use a stack to process inputs, enabling recognition of context-free languages. This concept is key to understanding the paper's computational framework, which models the molecular system's behavior as equivalent to a Pushdown Automaton rather than a traditional Turing machine.

*How the paper uses it:* The molecular system corresponds computationally to a Pushdown Automaton, enabling exponential growth faster than Turing machine models.

▶ [Push Down Automata (PDA)|Concepts| Definition|Theory of Computation (TOC)|FLAT](https://www.youtube.com/watch?v=5n0juq4lImQ) — CSE ACADEMY · 14:44 · 2y ago

### Molecular polymer growth and division mechanisms *(prerequisite)*
Polymer growth involves linking monomers into long chains, and division mechanisms split polymers to increase their number. Understanding these processes helps grasp how the system achieves exponential increase in both polymer length and population.

*How the paper uses it:* The paper experimentally demonstrates polymer growth by internal insertion and polymer division to increase polymer population exponentially.

▶ [GCSE Chemistry - Addition Polymers & Polymerisation (2026/27 exams)](https://www.youtube.com/watch?v=1ZUg6ZC3ltA) — Cognito · 7:11 · 6y ago

### Authors molecular system talk *(paper-talk search result; attribution unverified)*
This talk presents the authors' own explanation and experimental insights into their novel molecular system for programmable exponential polymer growth, tying together the molecular design, computational model, and experimental results.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on their novel molecular system implementing exponential growth.

▶ [Polymerisation Unleashed: The Future of Manufacturing](https://www.youtube.com/watch?v=GfqCtB0Lknc) — iitutor.com · 37:57 · 10y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's core innovation: programmable exponential growth of synthetic DNA polymers via internal parallel insertion. The beginner project replicates a key experimental result using simulation and visualization. The intermediate project implements the core computational model of polymer growth and compares exponential versus linear growth kinetics. The advanced project extends the system toward one of the paper's stated future directions by simulating 2D polymer growth with rigid components to address scalability limitations.

### Beginner — Simulate and Visualize Exponential vs Linear DNA Polymer Growth
*Effort: a weekend, ~8 hours*

You build a simple Python simulation that models the exponential internal insertion mechanism of DNA hairpin monomers into a linear polymer chain, and a linear growth control model. You visualize polymer length over time using plots to reproduce the key kinetic difference shown in the paper's fluorescence assay results.

**Why it shows you understood the paper:** This project shows you grasp the fundamental mechanism of internal parallel insertion enabling exponential growth, and can translate the paper's experimental kinetics into a computational model and visualization.

**Grounded in:** Exponential polymer growth achieved in under 60 minutes to reach 1000 base pairs, compared to 480 minutes for linear growth (Fig. 2, Fig. 3).

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** No external data needed; you simulate polymer length growth based on reaction rates described in the paper.

**Build it:**

1. Implement a Python function to simulate linear polymer growth by sequentially adding monomers over time.
2. Implement a Python function to simulate exponential polymer growth by modeling internal parallel insertion doubling insertion sites each round.
3. Plot polymer length versus time for both models on the same graph using matplotlib.
4. Annotate the plot to highlight the time difference to reach 1000 base pairs for each growth mode.
5. Write a README explaining the simulation assumptions and how they correspond to the paper's fluorescence kinetics.

**Ships as:** A GitHub repository with Python scripts simulating and plotting polymer growth kinetics, and a README linking the simulation results to the paper's experimental findings.

**Stretch goal:** Add stochastic noise to the insertion rates to simulate kinetic variability and plot confidence intervals.

### Intermediate — Reimplement Pushdown Automaton Model for DNA Polymer Growth
*Effort: 2 weekends, ~20 hours*

You implement a computational model of the molecular system as a Pushdown Automaton that simulates programmable internal insertion and division operations on polymer strings. You compare exponential growth kinetics with a linear growth baseline and report polymer length distributions over simulated time.

**Why it shows you understood the paper:** This project demonstrates your comprehension of the paper's formal computational model and its equivalence to a Pushdown Automaton, as well as the ability to translate molecular operations into algorithmic steps and analyze growth kinetics.

**Grounded in:** Development of a formal computational model for active self-assembly based on Pushdown Automata; experimental demonstration of programmable exponential growth and division of synthetic DNA polymers.

**Tech stack:** Python 3.11, networkx (optional for state visualization), matplotlib, numpy

**Data:** Simulated polymer sequences and insertion/division operations based on the paper's molecular primitives; no external dataset.

**Build it:**

1. Implement a Pushdown Automaton simulator that models polymer states as strings and supports insertion and division operations.
2. Encode the molecular primitives (hairpin insertion, division complexes) as state transitions in the automaton.
3. Simulate polymer growth over discrete time steps, tracking polymer length and count.
4. Implement a linear growth baseline model for comparison.
5. Plot polymer length and population growth curves for both models.
6. Document how the simulation corresponds to the paper's computational model and experimental results.

**Ships as:** A GitHub repo with a Pushdown Automaton simulator modeling polymer growth, comparison plots of exponential vs linear growth, and detailed README linking to the paper's model and results.

**Stretch goal:** Add visualization of the automaton's state transitions and polymer string transformations over time.

### Advanced — Simulate Programmable Exponential Growth of 2D Synthetic Polymers with Rigid Components
*Effort: 3+ weeks*

You develop a simulation framework extending the paper's 1D polymer growth model to two dimensions by incorporating rigid molecular components and spatial constraints. You model polymer flexibility, steric effects, and kinetic control to explore scalability challenges and propose strategies for robust programmable growth in 2D.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep understanding of the molecular system, physical constraints, and computational modeling required to scale exponential growth beyond linear polymers.

**Grounded in:** Develop molecular systems with rigid components to enable programmable exponential growth in two and three dimensions; current system limited to linear polymers due to polymer flexibility and self-interactions.

**Tech stack:** Python 3.11, NumPy, matplotlib, networkx or PyGraphviz for spatial graph modeling, optional: PyBullet or other physics engine for steric simulation

**Data:** Synthetic polymer growth data generated by your simulation; no external dataset.

**Build it:**

1. Design data structures to represent 2D polymers with rigid segments and spatial coordinates.
2. Implement insertion and division operations respecting spatial constraints and steric hindrance.
3. Model polymer flexibility and Brownian motion effects to simulate realistic growth dynamics.
4. Simulate exponential growth kinetics and compare with linear growth under spatial constraints.
5. Visualize 2D polymer structures and growth over time.
6. Analyze how rigidity and spatial modeling affect growth scalability and propose improvements.

**Ships as:** A GitHub repository with a 2D polymer growth simulator, visualizations of polymer structures, growth kinetics analysis, and a comprehensive README discussing how this addresses the paper's limitations and future directions.

**Stretch goal:** Incorporate complex hairpin loop structures to expand programmability as suggested in the paper's future work.
