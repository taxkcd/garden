---
title: "123 · Incidence Theorems and Their Applications — Zeev Dvir"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zeev-dvir"
source_hash: "785a5ee2b446a5bf06d6b5acf2996a690eb92f2ccf959c80bbb79c59bc9c1272"
sequence: 123
generator: "outreach-garden: managed"
---

# 123 · Incidence Theorems and Their Applications

## At a glance

- **Professor:** Zeev Dvir
- **Institution:** Princeton University
- **Paper:** [Incidence Theorems and Their Applications](https://arxiv.org/pdf/1208.5073)
- **Authors:** Zeev Dvir
- **Year:** 2013

## Paper overview

This survey paper reviews various incidence theorems concerning arrangements of points, lines, and other geometric objects, and explores their applications in theoretical computer science and combinatorics. It covers counting incidences over real and finite fields, Kakeya-type problems, and Sylvester-Gallai type problems, highlighting key techniques such as the polynomial method and additive combinatorics.

### Why it matters

**Research problem:** Understanding the maximum number of incidences (intersections) between geometric objects like points and lines under various conditions, and applying these incidence bounds to problems in combinatorics, computational complexity, randomness extraction, and error-correcting codes.

**Why it matters:** Incidence theorems provide fundamental combinatorial bounds that have powerful applications in solving longstanding problems such as Erdos’ distinct distances problem, constructing randomness extractors in computer science, and analyzing locally correctable codes. These results bridge discrete geometry and theoretical computer science, impacting areas like cryptography, derandomization, and coding theory.

**Key contributions:**

- Comprehensive survey of incidence theorems over real and finite fields.
- Detailed exposition of the Szemeredi-Trotter theorem with multiple proofs.
- Connections of incidence bounds to Erdos’ distinct distances problem via the Elekes-Sharir framework and Guth-Katz theorem.
- Applications of incidence theorems to explicit constructions of randomness extractors.
- Use of the polynomial method to prove the finite field Kakeya conjecture.

## About the professor

**Zeev Dvir** — Professor, Computer Science and Mathematics, Princeton University.

Research interests: theoretical computer science, computational complexity, pseudo-randomness, coding theory, combinatorics

### Research links

- [Faculty/profile page](http://www.cs.princeton.edu/~zdvir)
- [Resolved homepage](https://www.cs.princeton.edu/~zdvir/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Algebraic Combinatorics
**The paper assumes:** algebraic combinatorics, polynomial method, additive combinatorics, finite field geometry
**Already in this field?** Skip this entirely if you already have a solid understanding of algebraic combinatorics and the polynomial method in combinatorial geometry.

This background focuses on algebraic combinatorics, which is essential for understanding the algebraic and combinatorial techniques used in incidence theorems, such as the polynomial method and additive combinatorics. The rigorous course option offers a deep, structured university-level treatment, while the fast track provides a concise, focused introduction to the core concepts, suitable for quickly gaining intuition and foundational knowledge.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.217 Graph Theory and Additive Combinatorics, Fall 2019](https://www.youtube.com/playlist?list=PLUl4u3cNGP62qauV_CpT1zKaGG_Vj5igX) — MIT OpenCourseWare · 26 videos · 33.9h across 26 episodes

**Watch only this:** Lectures 1 through 5 (about 6.5 hours) cover the foundational graph theory and additive combinatorics concepts, including algebraic constructions and dependent random choice, which are crucial for understanding incidence bounds and combinatorial geometry.

*Why it unblocks this paper:* MIT's '18.217 Graph Theory and Additive Combinatorics' is a comprehensive university course that covers additive combinatorics and algebraic methods in depth, including the polynomial method and Szemerédi's regularity lemma, which are central to the paper's techniques and results.

*If you want all of it:* All 26 lectures totaling about 33.9 hours provide a thorough grounding in graph theory, additive combinatorics, and related algebraic methods.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Algebraic Methods in Combinatorics](https://www.youtube.com/playlist?list=PL0NRmB0fnLJQaWrLAEt7wlVtdHrKuz-pw) — Harvard CMSA · 15 videos · 14.5h across the first 14 episodes

**Watch only this:** Episodes 4 ('Geometric Energies: Between Discrete Geometry and Additive Combinatorics'), 8 ('Subspace evasion, list decoding, and dimension expanders'), 9 ('The polynomial method in Fourier analysis'), and 13 ('Cutting curves into segments and incidence geometry'), about 4 hours total, provide a targeted overview of the algebraic combinatorics tools used in incidence theorems.

*Why it unblocks this paper:* Harvard CMSA's 'Algebraic Methods in Combinatorics' workshop playlist offers focused talks on the polynomial method, incidence geometry, and additive combinatorics, directly aligned with the paper's key techniques and results, but in a shorter, more accessible format.

*If you want all of it:* All 14 episodes (about 14.5 hours) cover a broad range of algebraic combinatorics topics relevant to incidence geometry and combinatorial applications.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand Zeev Dvir's survey on incidence theorems and their applications, start with foundational concepts such as the Szemeredi-Trotter theorem, additive combinatorics, and finite field incidence geometry, which provide the combinatorial and algebraic tools underlying the results. Then, proceed to the core concept of the paper focusing on the author’s own talks and advanced lectures on incidence geometry and its applications in theoretical computer science, ensuring a direct connection to the surveyed material and techniques.

### Szemeredi-Trotter theorem *(prerequisite)*
The Szemeredi-Trotter theorem is a fundamental incidence bound between points and lines in the plane, central to many results surveyed in the paper. Understanding its statement, proofs, and implications is crucial as it forms the backbone of incidence geometry results and their applications in combinatorics and computational complexity.

*How the paper uses it:* The paper provides a detailed exposition of the Szemeredi-Trotter theorem with multiple proofs and uses it as a foundation for further incidence results.

▶ [Lecture 08: The Szemeredi-Trotter Theorem](https://www.youtube.com/watch?v=3h0jvsOnTIc) — MIT OpenCourseWare · 8 months ago

### Additive combinatorics *(prerequisite)*
Additive combinatorics provides key combinatorial tools that underpin many incidence bounds and their applications, including the polynomial method and sum-product phenomena. A rigorous understanding of additive combinatorics helps in grasping the combinatorial techniques used throughout the paper.

*How the paper uses it:* The survey discusses additive combinatorics as a key technique underlying incidence bounds and applications in randomness extraction and coding theory.

▶ ["What is Additive Number Theory?" by Prof. Kaneenka Sinha | Talk Series | Maths Club IISER Pune](https://www.youtube.com/watch?v=iiirP5twg9Y) — Maths Club IISER Pune · 1:18:51 · 4 years ago

### Finite field incidence geometry *(prerequisite)*
Extending incidence results to finite fields is crucial for applications in coding theory and randomness extractors discussed in the paper. This area covers incidence bounds over finite fields, which are more subtle and less understood than their real counterparts, making it essential for understanding the paper's finite field results.

*How the paper uses it:* The paper surveys finite field Szemeredi-Trotter theorems and their applications to extractors and Kakeya problems.

▶ [Incidence Geometry and Connections to Theoretical Computer Science  - Shubhangi Saraf](https://www.youtube.com/watch?v=QJqoZU0U58o) — Institute for Advanced Study · 16:47 · 9 years ago

### Paper author talk *(the paper's own talk)*
Direct talks by or closely related to the paper's author or leading researchers provide the most precise and insightful exposition of the surveyed results and techniques. These talks often include the latest perspectives, detailed proofs, and connections to open problems, making them invaluable for an advanced reader.

*How the paper uses it:* Zeev Dvir is the author of the survey, and talks by Avi Wigderson and others at the Institute for Advanced Study relate closely to the paper's themes of incidence geometry and locally correctable codes.

▶ [Local Correction of Codes and Euclidean Incidence Geometry - Avi Wigderson](https://www.youtube.com/watch?v=5MNBa-b0hDA) — Institute for Advanced Study · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand incidence theorems and their applications as surveyed in the paper. We start with additive combinatorics to build combinatorial intuition, then cover finite field incidence geometry to understand the extension of incidence results beyond the real plane. Next, we explore the Szemeredi-Trotter theorem, the core incidence bound in the paper. Finally, we introduce the polynomial method, a key algebraic technique used to prove major results like the finite field Kakeya conjecture.

### Additive combinatorics *(prerequisite)*
Additive combinatorics studies how sets behave under addition and related operations, providing key combinatorial tools to analyze incidences and structure in sets of points and lines. Understanding these ideas helps grasp how combinatorial bounds arise in incidence geometry.

*How the paper uses it:* The paper uses additive combinatorics as a fundamental tool underlying incidence bounds and their applications.

▶ [What is...additive combinatorics?](https://www.youtube.com/watch?v=2t11L2iT6TE) — VisualMath · 2 years ago

### Finite field incidence geometry *(prerequisite)*
Finite field incidence geometry extends classical incidence results to settings over finite fields, which is crucial for applications in coding theory and randomness extraction. This introduces the algebraic and combinatorial challenges unique to finite fields.

*How the paper uses it:* The paper surveys incidence theorems over finite fields and their applications to extractors and codes.

▶ [Incidence Geometry and Connections to Theoretical Computer Science  - Shubhangi Saraf](https://www.youtube.com/watch?v=QJqoZU0U58o) — Institute for Advanced Study · 16:47 · 9 years ago

### Szemeredi-Trotter theorem
The Szemeredi-Trotter theorem gives a near-optimal bound on the number of incidences between points and lines in the plane, a foundational result in incidence geometry. Understanding this theorem is key to grasping many applications and extensions discussed in the paper.

*How the paper uses it:* The paper provides detailed exposition of the Szemeredi-Trotter theorem as a core incidence bound.

▶ [Lecture 08: The Szemeredi-Trotter Theorem](https://www.youtube.com/watch?v=3h0jvsOnTIc) — MIT OpenCourseWare · 8 months ago

### Polynomial method
The polynomial method uses algebraic polynomials to encode geometric configurations and prove incidence bounds and combinatorial results. It is a powerful technique that enabled breakthroughs like the finite field Kakeya conjecture proof.

*How the paper uses it:* The paper highlights the polynomial method as a key technique for proving incidence theorems and the Kakeya conjecture.

▶ [Algebra Basics: What Are Polynomials? - Math Antics](https://www.youtube.com/watch?v=ffLLmV4mZwU) — mathantics · 10 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of key incidence theorems and their applications as surveyed in Dvir's paper. The beginner project focuses on visualizing and reproducing the Szemeredi-Trotter theorem's incidence bounds in the plane, using your existing JavaScript and React skills. The intermediate project involves reimplementing the polynomial method proof of the finite field Kakeya conjecture, requiring you to learn some algebraic geometry concepts and apply Python programming. The advanced project tackles a future direction from the paper by attempting to improve incidence bounds over finite fields under subfield assumptions, combining combinatorics and coding theory insights with your algorithmic and ML background.

### Beginner — Visualizing the Szemeredi-Trotter Theorem in the Plane
*Effort: a weekend (~8 hours)*

You build an interactive web app that generates random sets of points and lines in the plane and computes the number of incidences (point-line intersections). The app visualizes these points and lines and plots the incidence count against the theoretical Szemeredi-Trotter bound O((|P||L|)^{2/3} + |P| + |L|).

**Why it shows you understood the paper:** This project shows you understand the core statement and combinatorial nature of the Szemeredi-Trotter theorem, how incidences scale with point and line counts, and can concretely reproduce and visualize the theorem's bounds.

**Grounded in:** Szemeredi-Trotter theorem bounds incidences between points and lines in R2 by O((|P||L|)^{2/3} + |P| + |L|).

**Tech stack:** JavaScript, React, D3.js or Canvas API

**Data:** Synthetic random points and lines generated in-browser; no external dataset needed.

**Build it:**

1. Implement a function to generate random points and random lines in the 2D plane.
2. Write an algorithm to count incidences between the generated points and lines.
3. Visualize the points and lines on a 2D canvas or SVG using React and D3.js or Canvas API.
4. Plot the incidence counts against the Szemeredi-Trotter theoretical bound for varying sizes of points and lines.
5. Add UI controls to vary the number of points and lines and observe the incidence behavior.

**Ships as:** A GitHub repo with a React web app that visualizes points, lines, and their incidences, demonstrating the Szemeredi-Trotter bound with interactive plots and explanations.

**Stretch goal:** Add support for special configurations (e.g., grid points, concurrent lines) to observe how incidences deviate from the bound.

### Intermediate — Reimplementing the Polynomial Method Proof of the Finite Field Kakeya Conjecture
*Effort: 1-3 weekends (~20 hours)*

You implement the polynomial method approach to prove the finite field Kakeya conjecture as described in the paper. This involves coding algebraic routines to construct low-degree polynomials vanishing on Kakeya sets over finite fields and verifying the lower bound on their size. You compare your results against naive bounds and visualize the polynomial zero sets.

**Why it shows you understood the paper:** This project demonstrates you can translate a core algebraic combinatorics proof technique from the paper into code, understand the polynomial method's role in incidence geometry, and reproduce a key finite field result.

**Grounded in:** Proof of the finite field Kakeya conjecture using the polynomial method.

**Tech stack:** Python 3.11, NumPy, SymPy or SageMath (if available)

**Data:** Synthetic finite field data constructed programmatically; no external dataset needed.

**Build it:**

1. Implement finite field arithmetic for a chosen small finite field (e.g., GF(7) or GF(11)).
2. Generate Kakeya sets in the finite field plane by enumerating lines in all directions.
3. Construct polynomials of bounded degree that vanish on the Kakeya set using symbolic algebra.
4. Verify the lower bound on the size of Kakeya sets by analyzing the polynomial zero sets.
5. Compare the polynomial method bound to naive combinatorial bounds and plot results.

**Ships as:** A Python repo with scripts demonstrating the polynomial method proof on finite fields, including visualizations and comparison of bounds.

**Stretch goal:** Extend the implementation to higher-dimensional finite fields or experiment with different field sizes.

### Advanced — Exploring Improved Incidence Bounds over Finite Fields with Subfield Assumptions
*Effort: a few weeks (~40+ hours)*

You research and implement incidence counting algorithms over finite fields incorporating subfield structure assumptions as discussed in the paper's limitations and future directions. You attempt to improve or experimentally verify incidence bounds beyond the known finite field Szemeredi-Trotter theorem by leveraging additive combinatorics and algebraic techniques. You analyze how subfield presence affects incidence counts and relate this to coding theory applications.

**Why it shows you understood the paper:** This project shows deep engagement with open problems and limitations from the paper, applying advanced combinatorial and algebraic methods to extend known results. It signals readiness for research-level work and potential collaboration.

**Grounded in:** Tight incidence bounds over finite fields are not fully known; current results are not tight. Improving incidence bounds over finite fields and extending them to broader settings is a future direction.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic finite field point and line sets generated programmatically; no external dataset needed.

**Build it:**

1. Review the finite field Szemeredi-Trotter theorem and known improvements under subfield assumptions from the paper.
2. Implement incidence counting algorithms over finite fields with and without subfield structure.
3. Experimentally measure incidence counts on synthetic data sets constructed to highlight subfield effects.
4. Analyze and visualize how incidence bounds vary with subfield presence and parameters.
5. Explore connections to dimension bounds in locally correctable codes and document findings.

**Ships as:** A Jupyter notebook and Python scripts demonstrating experimental incidence bounds over finite fields with subfield assumptions, including analysis and visualizations.

**Stretch goal:** Attempt to formalize conjectures or heuristics for improved incidence bounds and propose coding-theoretic applications.
