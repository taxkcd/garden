---
title: "746 · Pseudorandom Function from Learning Burnside Problem — Antonio Nicolosi"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-antonio-nicolosi"
source_hash: "1cbf44f48de4a7def0a1d061394b2e3912bea61f32841be09bcffff65e45feae"
sequence: 746
generator: "outreach-garden: managed"
---

# 746 · Pseudorandom Function from Learning Burnside Problem

## At a glance

- **Professor:** Antonio Nicolosi
- **Institution:** Stevens Institute of Technology
- **Paper:** [Pseudorandom Function from Learning Burnside Problem](https://www.mdpi.com/2227-7390/13/7/1193/pdf?version=1743757051)
- **Authors:** Dhiraj K. Pandey, Antonio R. Nicolosi
- **Year:** 2025

## Paper overview

This paper introduces new constructions of pseudorandom functions (PRFs) based on a post-quantum hardness assumption called the learning Burnside homomorphisms with noise (Bn-LHN) problem. It develops efficient algorithms for operations in Burnside groups, optimizes homomorphism computations, and proposes three progressively refined PRF designs that reduce secret-key sizes and improve efficiency. The work aims to provide secure cryptographic primitives resistant to quantum attacks.

### Why it matters

**Research problem:** The challenge is to construct efficient and secure pseudorandom functions based on post-quantum hardness assumptions, specifically leveraging the Bn-LHN problem in non-abelian Burnside groups, while managing error distributions and optimizing group operations to achieve practical performance.

**Why it matters:** Classical cryptographic assumptions like factorization and discrete logarithms are vulnerable to quantum attacks (e.g., Shor's algorithm). Developing cryptographic primitives based on post-quantum hardness assumptions such as Bn-LHN is critical for future-proof security. Efficient constructions and implementations are necessary for practical adoption.

**Key contributions:**

- Introduction of an optimized and parallelizable concatenation operation for Burnside groups Bn and Br.
- Development of three progressively refined PRG constructions (direct, parameterized, indexed) based on the Bn-LHN assumption.
- Design of PRF constructions using the GGM approach with reduced secret-key sizes compared to prior work based on Bn-LHR assumption.
- Algorithmic improvements and parallel computation strategies for efficient Burnside group operations and homomorphisms.
- Security proofs establishing the PRG and PRF constructions under the Bn-LHN assumption.

## About the professor

**Antonio Nicolosi** — Associate Professor, School of Computing, Stevens Institute of Technology.

Research interests: Cryptography, Security and privacy in distributed systems, Lattices and decoding algorithms

### Research links

- [Faculty/profile page](https://www.stevens.edu/profile/anicolos)
- [Professor website](http://www.cs.stevens.edu/~nicolosi/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** non-abelian group theory
**The paper assumes:** undergraduate abstract algebra, group theory focusing on non-abelian groups and group homomorphisms
**Already in this field?** Skip this entirely if you have completed a rigorous undergraduate course in abstract algebra covering non-abelian groups and homomorphisms.

To understand the core mathematical framework of the paper on pseudorandom functions from the learning Burnside problem, a solid grasp of non-abelian group theory is essential. The rigorous course option offers a comprehensive university-level introduction to abstract group theory, including homomorphisms and normal subgroups, which are crucial for the paper's algorithmic and security proofs. The fast track provides a concise, intuition-focused series on group theory basics, including abelian and non-abelian groups and key theorems, suitable for quickly gaining the necessary conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Abstract Group Theory - Krishna Hanumanthu | CMI - NPTEL](https://www.youtube.com/playlist?list=PLEAYkSg4uSQ1Yhxu2U-BxtRjZElrfVVcO) — Rahul Madhavan · 46 videos · 21.8h across 46 episodes

**Watch only this:** Lectures 1 through 13 ("INTRODUCTION TO ABSTRACT GROUP THEORY" through "Normal subgroups"), about 6.1 hours — this covers foundational group concepts, homomorphisms, and normal subgroups essential for the paper's mathematical framework.

*Why it unblocks this paper:* This 21.8-hour university lecture series from CMI covers abstract group theory in depth, including group homomorphisms and normal subgroups, which are directly relevant to understanding Burnside groups and the Bn-LHN problem underlying the paper.

*If you want all of it:* All 46 lectures, about 21.8 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Group Theory ||All topics ||All theorems ||explained](https://www.youtube.com/playlist?list=PLJG6EJZwjtFG_O6Q2suWHBU5UA3Kb5XOT) — Bushra's Coaching · 22 videos · 2.5h across 22 episodes

**Watch only this:** Episodes 1 through 10 ("Group ,Abelian Group ,Non-abelian Group All Properties||explained||important lecture" through "Short Trick about What is Group?Abelian group?Non Abelian group?"), about 1 hour — covers essential definitions and properties of groups needed to follow the paper.

*Why it unblocks this paper:* This 2.5-hour playlist provides concise, clear explanations of group theory fundamentals, including abelian vs non-abelian groups and key theorems, offering a quick but solid conceptual grounding for the paper's use of non-abelian Burnside groups.

*If you want all of it:* All 22 episodes, about 2.5 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Pseudorandom Function from Learning Burnside Problem," start by building a strong foundation in the algebraic structures and cryptographic frameworks it relies on. Begin with the fundamental algebraic concepts of Burnside groups and their properties, then study the post-quantum cryptography context motivating new hardness assumptions like Bn-LHN. Next, learn about the Goldreich–Goldwasser–Micali (GGM) pseudorandom function construction framework used in the paper. Finally, focus on the core concept of the paper—the learning Burnside homomorphisms with noise problem—and the authors' own talk or closest advanced lecture on pseudorandom functions to grasp their novel constructions and optimizations.

### Burnside groups and their properties *(prerequisite)*
Burnside groups form the algebraic foundation of the cryptographic constructions in the paper. Understanding their structure, the Burnside theorem, and related group theory concepts is essential to grasp how the authors optimize group operations and homomorphisms. The selected lecture from NPTEL provides a rigorous university-level treatment of Burnside's theorem and related group theory topics.

*How the paper uses it:* The paper's constructions rely on efficient algorithms and properties of Burnside groups Bn and Br.

▶ [Lec 32 Burnside Theorem and its proof](https://www.youtube.com/watch?v=uAacRo6Mvi8) — NPTEL - Indian Institute of Science, Bengaluru · 32:22 · 8mo ago

### Post-quantum cryptography assumptions *(prerequisite)*
Post-quantum cryptography is the broader context motivating the paper's new hardness assumption Bn-LHN. This lecture from the Simons Institute offers a detailed and advanced seminar on the challenges and motivations behind post-quantum cryptography, including the need for new assumptions resistant to quantum attacks.

*How the paper uses it:* The paper introduces PRFs based on the post-quantum hardness assumption Bn-LHN to ensure quantum resistance.

▶ [Postquantum Cryptography | Quantum Colloquium](https://www.youtube.com/watch?v=wd9-6XveC8o) — Simons Institute for the Theory of Computing · 1:03:15 · Streamed 5y ago

### Goldreich–Goldwasser–Micali (GGM) pseudorandom function construction *(prerequisite)*
The GGM construction is a fundamental cryptographic framework used in the paper to build PRFs from PRGs. The lecture by Stanislaw Jarecki provides a thorough university-level explanation of how to construct PRFs from PRGs, including the GGM approach, which is directly relevant to the paper's methodology.

*How the paper uses it:* The authors design their PRF constructions using the GGM framework applied to their Bn-LHN-based PRGs.

▶ [CompSci.201, Lec 9 (11/2),  3-DES and DES-X, from PRG to PRF,  from PRF to PRP](https://www.youtube.com/watch?v=onKuzBMRoVY) — Stanislaw Jarecki · 1:27:44 · 5y ago

### Learning Burnside homomorphisms with noise
This concept is the core hardness assumption underlying the paper's cryptographic constructions. While no direct recorded talk by the authors on this exact topic is available, foundational lectures on group homomorphisms provide the necessary algebraic background to understand the problem's structure and significance.

*How the paper uses it:* The Bn-LHN problem is the central post-quantum hardness assumption the paper leverages for its PRF constructions.

▶ [Group theory 3: Homomorphisms](https://www.youtube.com/watch?v=SUh7JBbKqVw) — Richard E Borcherds · 18:03 · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Although no direct talk by the paper authors on this exact work is available, advanced university-level lectures on pseudorandom functions provide rigorous and detailed insights into PRF definitions and constructions, which align closely with the paper's contributions. The lecture by Iftach Haitner at Bar-Ilan University is a comprehensive and advanced treatment suitable for an expert audience.

*How the paper uses it:* This lecture covers pseudorandom functions in depth, complementing the paper's novel PRF constructions based on Bn-LHN.

▶ [Winter School: Pseudorandom functions and permutations - Iftach Haitner](https://www.youtube.com/watch?v=0YicJFccEik) — Bar-Ilan University - אוניברסיטת בר-אילן · 1:23:06 · 12y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on pseudorandom functions from the learning Burnside problem, start by grasping the basics of post-quantum cryptography to appreciate why new hardness assumptions like Bn-LHN matter. Then, build foundational knowledge of Burnside groups and group homomorphisms, which are central algebraic structures in the paper. Finally, learn about pseudorandom functions and the Goldreich–Goldwasser–Micali (GGM) construction framework, which the paper uses to build its PRFs.

### Post-quantum cryptography assumptions *(prerequisite)*
This section introduces why classical cryptographic assumptions are vulnerable to quantum attacks and the need for new post-quantum hardness assumptions. Understanding this context helps appreciate the motivation behind the Bn-LHN assumption used in the paper.

*How the paper uses it:* The paper relies on the Bn-LHN assumption as a post-quantum hardness foundation for its PRF constructions.

▶ [What is Post-Quantum Cryptography?](https://www.youtube.com/watch?v=8SsCbJVZ1rw) — Eye on Tech · 5:11 · 1y ago

### Burnside groups and their properties *(prerequisite)*
Burnside groups are a special type of non-abelian groups with fixed exponent properties. Learning their structure and properties is essential to understand the algebraic setting where the paper's cryptographic constructions operate.

*How the paper uses it:* The paper constructs PRFs based on operations and homomorphisms in Burnside groups.

▶ [Cryptography via Burnside Groups](https://www.youtube.com/watch?v=bNAVEVOUy5c) — Simons Institute for the Theory of Computing · 1:09:46 · 11y ago

### Learning Burnside homomorphisms with noise
Group homomorphisms are structure-preserving maps between groups. Understanding homomorphisms and their properties is key to grasping the learning Burnside homomorphisms with noise problem, the core hardness assumption in the paper.

*How the paper uses it:* The Bn-LHN problem, central to the paper, involves learning noisy homomorphisms in Burnside groups.

▶ [Visual Group Theory, Lecture 4.1: Homomorphisms and isomorphisms](https://www.youtube.com/watch?v=fvcRtYSW3EU) — Professor Macauley · 47:18 · 10y ago

### Pseudorandom functions *(paper-talk search result; attribution unverified)*
Pseudorandom functions (PRFs) are deterministic functions that appear random to any efficient adversary. Understanding what PRFs are and their role in cryptography is crucial before diving into the paper's PRF constructions.

*How the paper uses it:* The paper designs new PRFs based on the Bn-LHN assumption.

▶ [PRFs explained: Transforming Secrets into Infinite Keys - Pseudo Random Functions](https://www.youtube.com/watch?v=UrjcpvWeHSM) — Practical Networking · 8:50 · 2y ago

### Goldreich–Goldwasser–Micali (GGM) pseudorandom function construction *(prerequisite)*
The GGM construction is a classic method to build PRFs from pseudorandom generators (PRGs). Understanding this framework helps in comprehending how the paper builds its PRFs from the proposed PRGs.

*How the paper uses it:* The paper uses the GGM framework to construct PRFs from its Bn-LHN-based PRGs.

▶ [CompSci.201, Lec 9 (11/2),  3-DES and DES-X, from PRG to PRF,  from PRF to PRP](https://www.youtube.com/watch?v=onKuzBMRoVY) — Stanislaw Jarecki · 1:27:44 · 5y ago

## Already in your library

- [Pseudorandom Number Generator (PRNG)](https://www.youtube.com/watch?v=q2XVhTWJ-Oo) — also for: How Does Machine Learning Manage Complexity? (Lance Fortnow)
- [Group Theory: Lecture 3/30 - Homomorphisms](https://www.youtube.com/watch?v=e2TV11yBmKw) — also for: Homomorphism Calculus for User-Defined Aggregations (Dixin Tang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and implement key ideas from the paper "Pseudorandom Function from Learning Burnside Problem." Starting with a basic implementation of Burnside group concatenation, you then build a core pseudorandom generator based on the Bn-LHN assumption, and finally extend the work by exploring performance optimizations or error distribution improvements as suggested in the paper's future directions.

### Beginner — Burnside Group Concatenation Operation
*Effort: a weekend, ~8 hours*

You implement the optimized and parallelizable concatenation operation for Burnside groups Bn and Br as described in the paper. This involves coding the group elements and their concatenation with an emphasis on the parallelization approach that reduces time complexity.

**Why it shows you understood the paper:** This project demonstrates your grasp of the fundamental algebraic structure and algorithmic optimization introduced in the paper, showing you can translate the theoretical concatenation operation into working code.

**Grounded in:** Section 3 details a parallelizable direct concatenation operation reducing time complexity and enabling efficient implementation.

**Tech stack:** Python 3.11, multiprocessing or concurrent.futures for parallelism

**Data:** No external data needed; you simulate Burnside group elements as per the paper's definitions.

**Build it:**

1. Implement a data structure to represent Burnside group elements with fixed exponent r=4 and generator size n (small n, e.g., n=3).
2. Code the direct concatenation operation between two Burnside group elements following the paper's algorithm.
3. Add parallelization to the concatenation operation using Python's multiprocessing or concurrent.futures.
4. Write unit tests to verify correctness of concatenation and measure timing improvements with and without parallelization.
5. Document the implementation and include a README explaining the connection to the paper's contribution.

**Ships as:** A GitHub repository with Python code implementing and benchmarking the parallelizable Burnside group concatenation operation, including tests and documentation.

**Stretch goal:** Extend the implementation to support Burnside groups with larger generator sizes and compare performance scaling.

### Intermediate — Implement Direct PRG Construction from Bn-LHN
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's direct pseudorandom generator (PRG) construction based on the Bn-LHN assumption, including the homomorphism computations in Burnside groups. You then evaluate its correctness and performance on small synthetic inputs, comparing runtime with and without parallelized concatenation.

**Why it shows you understood the paper:** This project shows you can implement the core cryptographic construction of the paper, understand the Bn-LHN assumption's role, and reproduce key performance metrics, demonstrating a deeper grasp of the paper's main method.

**Grounded in:** Section 4 presents direct PRG construction and Section 3 details optimized Burnside group operations; Tables 2 and 3 show timing results for concatenation and homomorphism computations.

**Tech stack:** Python 3.11, NumPy, multiprocessing or concurrent.futures

**Data:** Synthetic Burnside group elements and noise samples generated according to the paper's error distribution model.

**Build it:**

1. Reimplement the Burnside group operations and parallel concatenation from the beginner project.
2. Implement the direct PRG construction as described in Section 4, including sampling noise and computing homomorphisms.
3. Generate synthetic input samples simulating the error distribution and Burnside group elements.
4. Run performance benchmarks comparing parallelized vs. non-parallelized implementations.
5. Write a report comparing your runtime results to the paper's empirical timing results.
6. Document the code and usage instructions in a README.

**Ships as:** A GitHub repository with a working implementation of the direct PRG construction, performance benchmarks, and a report comparing results to the paper.

**Stretch goal:** Add a simple baseline PRG implementation without parallelization and compare security parameter impacts on runtime.

### Advanced — Optimizing Error Distribution Sampling for Bn-LHN PRFs
*Effort: 3+ weeks*

You develop and evaluate improved error distribution sampling techniques for the Bn-LHN problem to reduce overhead in PRF constructions. This project addresses one of the paper's stated limitations by implementing alternative sampling methods and measuring their impact on PRF efficiency and security parameters.

**Why it shows you understood the paper:** This project demonstrates your ability to extend the paper's work by tackling a known limitation, applying algorithmic innovation, and empirically evaluating cryptographic performance and security trade-offs.

**Grounded in:** The paper notes that error distribution management introduces complexity in sampling and precomputation, suggesting future work on lower-overhead sampling techniques.

**Tech stack:** Python 3.11, NumPy, SciPy, multiprocessing, matplotlib for visualization

**Data:** Synthetic data simulating Burnside group elements and noise distributions as per the paper's model.

**Build it:**

1. Review the paper's error distribution sampling method and identify computational bottlenecks.
2. Research alternative sampling algorithms suitable for the Bn-LHN noise model.
3. Implement one or more optimized sampling techniques.
4. Integrate these sampling methods into the PRF construction from the intermediate project.
5. Benchmark the new sampling methods against the original in terms of runtime and impact on PRF output quality.
6. Analyze security implications based on entropy and error parameters discussed in the paper.
7. Document findings and provide recommendations for practical parameter choices.

**Ships as:** A GitHub repository with enhanced error sampling implementations, integrated PRF code, performance and security analysis, and detailed documentation.

**Stretch goal:** Explore parallelization of the new sampling methods and test scalability on larger Burnside group parameters.
