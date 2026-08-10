---
title: "361 · List Decoding Reed–Solomon Codes in the Lee, Euclidean, and Other Metrics — Chris Peikert"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chris-peikert"
source_hash: "a8611cfc54968e1bea3f2c5d034a2d511ddf035ba7002a262b927a60e97e6da3"
sequence: 361
generator: "outreach-garden: managed"
---

# 361 · List Decoding Reed–Solomon Codes in the Lee, Euclidean, and Other Metrics

## At a glance

- **Professor:** Chris Peikert
- **Institution:** University of Michigan
- **Paper:** [List Decoding Reed–Solomon Codes in the Lee, Euclidean, and Other Metrics](https://arxiv.org/abs/2510.11453)
- **Authors:** Chris Peikert, Alexandra Veliche Hostetler
- **Year:** 2026

## Paper overview

This paper presents a polynomial-time algorithm for list decoding generalized Reed–Solomon codes over prime fields in ℓp (semi)metrics for any 0 < p ≤ 2, including the Lee (ℓ1) and Euclidean (ℓ2) metrics. The algorithm improves upon prior work by decoding to arbitrarily large distances with better distance-rate tradeoffs, and it also supports continuous error models such as Gaussian and Laplacian noise. Additionally, the paper proves lower bounds on minimum distances for certain code subclasses, showing that the list decoding is unique in many cases.

### Why it matters

**Research problem:** Efficiently decoding Reed–Solomon codes in metrics other than the Hamming metric, specifically in ℓp (semi)metrics such as Lee (ℓ1) and Euclidean (ℓ2), which are more appropriate for applications where error magnitude matters, and extending decoding capabilities to larger distances and continuous error models.

**Why it matters:** Reed–Solomon codes are widely used in computer science and information theory, including cryptography and communication systems. Most decoding algorithms focus on the Hamming metric, which counts corrupted symbols but ignores error magnitude. Metrics like Lee and Euclidean better model scenarios with continuous or value-dependent errors, such as Gaussian noise channels, making efficient decoding in these metrics crucial for practical and theoretical advances.

**Key contributions:**

- A polynomial-time algorithm for list decoding generalized Reed–Solomon codes over prime fields in ℓp (semi)metrics for any 0 < p ≤ 2.
- Improved distance-rate tradeoffs compared to prior algorithms for Lee (ℓ1) and Euclidean (ℓ2) metrics, especially for large decoding distances.
- Extension of decoding to continuous error models such as Gaussian and Laplacian noise, supporting higher rates than worst-case error bounds.
- Proof of lower bounds on ℓ1 and ℓ2 minimum distances for a natural subclass of GRS codes, establishing uniqueness of decoding in many parameter regimes.
- Fourier-analytic framework leveraging lattice roughness and Poisson summation to analyze decoding performance.

## About the professor

**Chris Peikert** — Arthur W. Burks Collegiate Professor, Computer Science and Engineering, University of Michigan.

Research interests: cryptography, lattices, coding theory, algorithms, and computational complexity

### Research links

- [Faculty/profile page](http://web.eecs.umich.edu/~cpeikert)
- [Resolved homepage](https://web.eecs.umich.edu/~cpeikert/)
- [GitHub](https://github.com/cpeikert)
- [Social profile](https://twitter.com/ChrisPeikert)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Fourier analysis and lattice theory
**The paper assumes:** Fourier analysis on finite groups and Euclidean spaces, lattice theory and geometry of numbers, Poisson summation formula
**Already in this field?** Skip this entirely if you already have a solid undergraduate or beginning graduate-level understanding of Fourier analysis and lattice theory in the context of coding and cryptography.

This background focuses on Fourier analysis and lattice theory, which are foundational to understanding the paper's approach to list decoding Reed–Solomon codes in ℓp metrics. The rigorous course option provides a deep, structured university-level treatment of Fourier transforms and their applications, ideal for readers seeking comprehensive mastery. The fast track offers a concise, well-structured introduction to Fourier series, suitable for quickly grasping key concepts and intuition without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Lecture Collection | The Fourier Transforms and Its Applications](https://www.youtube.com/playlist?list=PLB24BC7956EE040CD) — Stanford · 30 videos · 25.6h across 30 episodes

**Watch only this:** Lectures 1-12, about 10.3 hours — covering the fundamentals of Fourier transforms, properties, convolution, and Poisson summation, which are essential for understanding the paper's analytic methods.

*Why it unblocks this paper:* This Stanford lecture series by Professor Brad Osgood thoroughly covers Fourier transforms and their applications, including the theoretical foundations and techniques like Poisson summation that are central to the paper's Fourier-analytic framework.

*If you want all of it:* 25.6 hours across 30 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [FOURIER SERIES - BY TIKLE'S ACADEMY](https://www.youtube.com/playlist?list=PLNKD1qB9pptvLY76pTUOr5iorMU7m1yPo) — TIKLE'S ACADEMY OF MATHS · 22 videos · 8.7h across 22 episodes

**Watch only this:** Lectures 1-8, about 3 hours — covering the definition, formulas, even/odd functions, expansions, and basic sums, which give a solid quick foundation in Fourier series.

*Why it unblocks this paper:* This 8.7-hour series from TIKLE'S ACADEMY offers a clear, focused introduction to Fourier series, including definitions, expansions, and problem-solving, providing a practical and intuitive grasp of Fourier analysis relevant to the paper's use of Fourier transforms.

*If you want all of it:* 8.7 hours across 22 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on list decoding Reed–Solomon codes in ℓp metrics, start with foundational mathematical tools such as Fourier analysis and lattice theory with Poisson summation, which underpin the authors' novel decoding framework. Then, study the general theory and algorithms of soft-decision decoding and list decoding of Reed–Solomon codes to grasp the coding-theoretic context. Finally, focus on the authors' own talks and advanced lectures on list decoding Reed–Solomon codes to connect these foundations directly to the paper's contributions.

### Fourier analysis in coding theory *(prerequisite)*
Fourier analysis is central to the paper's approach, as the authors parameterize weight vectors by functions with non-negative Fourier transforms to enable decoding in ℓp metrics. Understanding Fourier series and transforms provides the mathematical foundation to appreciate how these weight functions are constructed and analyzed.

*How the paper uses it:* The paper's decoding framework relies on Fourier-analytic techniques to define and optimize weight vectors for ℓp metrics.

▶ [Lecture 1: Fourier Series, Fourier Transforms, and PDEs](https://www.youtube.com/watch?v=2MPFFx724FQ) — Simon Benjamin · 59:29

### Lattice theory and Poisson summation *(prerequisite)*
Lattice theory and the Poisson summation formula are used in the paper to analyze decoding performance and optimize weight vectors. These advanced mathematical tools help relate discrete code structures to continuous Fourier-analytic properties, crucial for the paper's novel decoding guarantees.

*How the paper uses it:* The authors leverage lattice roughness and Poisson summation to analyze and optimize decoding weights in their framework.

▶ [Index Theory Lecture 14: Tutorial on Poisson Summation ...](https://www.youtube.com/watch?v=BsHMmgrY9as) — Masoud Khalkhali · 1:55:55

### Soft-decision decoding algorithms *(prerequisite)*
Soft-decision decoding generalizes classical decoding by incorporating probabilistic or weighted information about received symbols. The paper extends the Guruswami–Sudan soft-decision list decoding framework to ℓp metrics, so understanding soft-decision decoding algorithms is essential to grasp the algorithmic innovations.

*How the paper uses it:* The paper generalizes the soft-decision list decoding framework to handle weighted decoding in ℓp metrics.

▶ [Soft Decision Decoding of Convolutional Codes](https://www.youtube.com/watch?v=USuALWdspmk) — Subrahmanya K N · 13:19

### List decoding generalized Reed–Solomon codes
List decoding of Reed–Solomon codes is the core coding-theoretic method enabling decoding beyond unique decoding radius. The paper builds on and generalizes these algorithms to new metrics and error models, so advanced lectures on list decoding Reed–Solomon codes provide direct context and technical background.

*How the paper uses it:* The paper presents a polynomial-time list decoding algorithm for generalized Reed–Solomon codes in ℓp metrics.

▶ [Lecture 13 Video 3: List-Decoding FRS Codes, Take 2](https://www.youtube.com/watch?v=E8JtiRgvPfI) — Mary Wootters · 5 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talks provide the most precise and direct exposition of their contributions, methods, and results. These talks often include insights and technical details not found in the paper alone, making them invaluable for an advanced reader.

*How the paper uses it:* Direct presentations by the authors or closely related talks give the clearest understanding of the paper's novel algorithm and analysis.

▶ [Lecture 13, Video 2: List-Decoding FRS Codes, Take 1](https://www.youtube.com/watch?v=NxyJAPJ6QlA) — Mary Wootters · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by building intuition on Fourier analysis, a key mathematical tool used to define and analyze weight functions for decoding. Next, learn about lattice theory and Poisson summation, which underpin the paper's advanced decoding performance analysis. Then, grasp the basics of error-correcting codes in ℓp metrics to appreciate the challenges beyond the classical Hamming metric. After that, explore soft-decision decoding algorithms, the framework generalized by the paper to handle weighted decoding in ℓp metrics. Finally, focus on list decoding of generalized Reed–Solomon codes, the core method enabling decoding beyond unique decoding radius in various metrics, as directly relevant to the paper's contributions.

### Fourier analysis in coding theory *(prerequisite)*
Fourier analysis breaks down complex signals into sums of simple waves, helping us understand functions in terms of frequency components. This intuition is crucial for the paper's approach, which uses functions with non-negative Fourier transforms to define decoding weights.

*How the paper uses it:* The paper's decoding algorithm is parameterized by functions whose Fourier transforms are non-negative, enabling analysis and optimization in ℓp metrics.

▶ [But what is the Fourier Transform? A visual introduction.](https://www.youtube.com/watch?v=spUNpyF58BY) — 3Blue1Brown · 19:42

### Lattice theory and Poisson summation *(prerequisite)*
Lattice theory studies regular grid-like structures in space, and Poisson summation connects sums over lattices with sums over their duals, enabling powerful analytic techniques. These tools help analyze and optimize decoding performance in the paper.

*How the paper uses it:* The authors leverage lattice roughness and Poisson summation to analyze decoding performance and optimize weight vectors.

▶ [Math 139 Fourier Analysis Lecture 22: Poisson summation ...](https://www.youtube.com/watch?v=TqR5yTbn8R0) — Winston Ou · 48:27

### Soft-decision decoding algorithms *(prerequisite)*
Soft-decision decoding uses probabilistic or weighted information about received symbols rather than just hard yes/no decisions, improving decoding accuracy. This framework is generalized in the paper to handle weighted decoding in ℓp metrics.

*How the paper uses it:* The paper generalizes the soft-decision list decoding framework by defining weight vectors parameterized by functions with non-negative Fourier transforms.

▶ [What is Soft Output Decoding?](https://www.youtube.com/watch?v=GvXH3dEveLk) — Iain Explains Signals, Systems, and Digital Comms · 14:29

### List decoding generalized Reed–Solomon codes
List decoding allows recovering all codewords within a certain distance from a received word, enabling decoding beyond the unique decoding radius. Understanding this concept is essential to grasp the paper's main contribution: a polynomial-time list decoding algorithm for generalized Reed–Solomon codes in ℓp metrics.

*How the paper uses it:* The paper presents a polynomial-time algorithm for list decoding generalized Reed–Solomon codes over prime fields in ℓp metrics for 0 < p ≤ 2.

▶ [Lecture 13 Video 3: List-Decoding FRS Codes, Take 2](https://www.youtube.com/watch?v=E8JtiRgvPfI) — Mary Wootters · 5 years ago

## Already in your library

- [What are Reed-Solomon Codes? How computers recover lost data](https://www.youtube.com/watch?v=1pQJkt7-R4Q) — also for: Quantum Advantage via Solving Multivariate Polynomials (Aayush Jain)
- [Lecture 4, Video 4: Reed-Solomon Codes!](https://www.youtube.com/watch?v=yQkEnde2lNg) — also for: List Decoding and Property Testing of Error Correcting Codes (Atri Rudra)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's novel polynomial-time list decoding algorithm for generalized Reed–Solomon codes in ℓp metrics (0 < p ≤ 2). The beginner project focuses on implementing and visualizing the Lee (ℓ1) metric weight assignment on small codes, the intermediate project reimplements the core decoding algorithm for ℓ2 metric on small prime fields and compares it to a simple baseline, and the advanced project explores extending the framework beyond the paper's limitation by experimenting with weight functions for ℓp metrics with p > 2, addressing a stated open problem.

### Beginner — Visualizing Weight Assignments for Lee Metric on Small Reed–Solomon Codes
*Effort: a weekend, ~8 hours*

You build a small Python script that implements the paper's weight vector assignment for the Lee (ℓ1) metric on a toy generalized Reed–Solomon code over a small prime field (e.g., q=7). You visualize the weight distribution assigned to each symbol in the alphabet and demonstrate how these weights reflect error likelihoods in the Lee metric.

**Why it shows you understood the paper:** This project shows you understand the core concept of parameterizing decoding weights by functions with non-negative Fourier transforms and how these weights relate to the Lee metric, a key contribution of the paper.

**Grounded in:** The approach uses weight vectors parameterized by functions with non-negative Fourier transforms, specifically applied to the Lee (ℓ1) metric.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic small generalized Reed–Solomon code over prime field Z7; no external dataset needed.

**Build it:**

1. Implement a small generalized Reed–Solomon code over Z7 with evaluation points.
2. Define the weight function f and compute its Fourier transform ensuring non-negativity.
3. Assign weights to each symbol in the alphabet according to the Lee metric as described in the paper.
4. Visualize the weight distribution using matplotlib to show how weights vary across symbols.
5. Write a README explaining the connection between the weight assignments and the Lee metric decoding.

**Ships as:** A GitHub repo with a Python script that computes and visualizes Lee metric weights for a small GRS code, plus a README explaining the connection to the paper's method.

**Stretch goal:** Add interactive visualization allowing parameter changes to the weight function and observe effects on weight distribution.

### Intermediate — Reimplementation of Polynomial-Time List Decoding for ℓ2 Metric on Small GRS Codes
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core polynomial-time list decoding algorithm for generalized Reed–Solomon codes over a small prime field (e.g., q=17) in the Euclidean (ℓ2) metric. You simulate received words with additive Gaussian noise and decode them using your implementation. You compare decoding success rates and list sizes against a naive nearest-neighbor baseline in the Hamming metric.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's theoretical algorithm into working code, apply it to continuous noise models, and evaluate its performance relative to simpler baselines, reflecting the paper's key contributions and results.

**Grounded in:** The paper presents a polynomial-time algorithm for list decoding GRS codes in ℓp metrics for 0 < p ≤ 2, including ℓ2, and supports continuous error models such as Gaussian noise.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib

**Data:** Synthetic data: codewords from a small GRS code over Z17 with additive Gaussian noise simulated for received words.

**Build it:**

1. Implement a small generalized Reed–Solomon code over prime field Z17 with chosen evaluation points.
2. Implement the polynomial-time list decoding algorithm for the ℓ2 metric as described in the paper, including weight vector computations.
3. Simulate received words by adding Gaussian noise to codewords.
4. Implement a naive baseline decoder using nearest neighbor in Hamming metric for comparison.
5. Run decoding experiments comparing success rates and list sizes between your algorithm and the baseline.
6. Plot and analyze results, documenting them in a detailed README.

**Ships as:** A GitHub repo containing the decoding implementation, simulation scripts, comparison plots, and a README explaining the methodology and results.

**Stretch goal:** Extend the implementation to support Laplacian noise and compare performance with Gaussian noise.

### Advanced — Exploring Weight Functions for ℓp Metrics Beyond p=2 in List Decoding of GRS Codes
*Effort: 3+ weeks*

You develop an experimental framework to investigate weight functions whose Fourier transforms may take negative values, aiming to extend the paper's decoding framework to ℓp metrics with p > 2. You implement candidate weight functions, analyze their Fourier transforms numerically, and test their impact on decoding performance on small GRS codes over prime fields. You document challenges and potential relaxations to the non-negativity condition.

**Why it shows you understood the paper:** This project tackles a key limitation and open problem stated in the paper, showing deep engagement with the Fourier-analytic framework and the mathematical constraints of the decoding algorithm. It could initiate a research conversation with the professor.

**Grounded in:** The framework restricts to 0 < p ≤ 2 because for p > 2 the Fourier transform can have negative values, which prevents the framework from supporting such metrics; exploring relaxations is a stated future direction.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, sympy

**Data:** Synthetic small GRS codes over prime fields (e.g., Z19); no external dataset required.

**Build it:**

1. Review the paper's Fourier-analytic framework and the role of non-negative Fourier transforms in weight functions.
2. Implement numerical routines to compute Fourier transforms of candidate weight functions for ℓp metrics with p > 2.
3. Analyze and visualize where and how the Fourier transforms become negative.
4. Implement a modified decoding routine that attempts to use these weight functions, noting failures or successes.
5. Experiment with relaxations or approximations to the non-negativity condition and evaluate decoding performance.
6. Document findings, challenges, and potential directions for extending the decoding framework.

**Ships as:** A GitHub repo with code for Fourier analysis of weight functions, experimental decoding attempts, visualizations, and a comprehensive report discussing the feasibility of extending the framework beyond p=2.

**Stretch goal:** Propose and implement a heuristic list pruning method to handle cases where decoding is not unique due to relaxed weight conditions.

_The paper authors released no code or datasets; all projects require reimplementation and synthetic data generation based on the paper's descriptions._
