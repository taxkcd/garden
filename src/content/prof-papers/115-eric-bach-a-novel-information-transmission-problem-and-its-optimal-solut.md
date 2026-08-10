---
title: "115 · A Novel Information Transmission Problem and Its Optimal Solution — Eric Bach"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eric-bach"
source_hash: "cf819496557011c85fee08a61f3f3f366cc962acf7c2d4285cc6bd3643daccb4"
sequence: 115
generator: "outreach-garden: managed"
---

# 115 · A Novel Information Transmission Problem and Its Optimal Solution

## At a glance

- **Professor:** Eric Bach
- **Institution:** University of Wisconsin - Madison
- **Paper:** [A Novel Information Transmission Problem and Its Optimal Solution](https://doi.org/10.3954/cis.9.141)
- **Authors:** Eric Bach, Jin-Yi Cai
- **Year:** 2009

## Paper overview

This paper introduces a new model for transmitting a real number over a network using unordered, probabilistic signals modeled as Bernoulli trials. Unlike traditional Shannon information theory which assumes ordered bit sequences, this model accounts for modern internet conditions where packets may arrive out of order or be lost. The authors define a criterion for optimal encoding and rigorously solve for the unique optimal encoding function, providing explicit formulas and generalizing to cases with prior information or weighted errors.

### Why it matters

**Research problem:** How to optimally encode and transmit a real number over a communication medium that delivers unordered, probabilistic signals (Bernoulli trials), differing from classical ordered bit transmission models.

**Why it matters:** Modern internet communication involves packets sent along multiple, varying routes with probabilistic delays and losses, making traditional ordered bit sequence models inadequate. Efficient and optimal encoding schemes for such unordered, probabilistic transmissions can improve network protocols, congestion estimation, and reliable information transfer.

**Key contributions:**

- Proposed a new information transmission model using Bernoulli trials for unordered, probabilistic signals.
- Defined a natural asymptotic criterion for evaluating encoding schemes.
- Derived the unique optimal encoding function f(x) = (1 - cos(πx))/2 minimizing the error criterion.
- Provided rigorous proofs of convergence and optimality using real analysis and measure theory.
- Generalized the model to incorporate prior information and weighted error penalties.

## About the professor

**Eric Bach** — Professor, Computer Sciences Department, University of Wisconsin - Madison.

Research interests: Theoretical computer science, computational number theory, algebraic algorithms, complexity theory, cryptography, six-string automata

### Research links

- [Faculty/profile page](http://pages.cs.wisc.edu/~bach/bach.html)
- [Resolved homepage](https://pages.cs.wisc.edu/~bach/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** measure-theoretic probability
**The paper assumes:** measure-theoretic probability, convergence of random variables, Lebesgue integration, probability measures
**Already in this field?** Skip this entirely if you already have a solid understanding of measure-theoretic probability and rigorous probability theory.

This background focuses on measure-theoretic probability, which is essential for understanding the rigorous proofs and asymptotic error analysis in the paper. The course option provides a deep, structured university-level treatment suitable for readers seeking full mastery of the foundational concepts and tools. The fast track offers a concise, intuition-driven introduction to the same subject, ideal for readers who want a solid grasp of key ideas without investing extensive time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Probability Theory and Stochastic Processes](https://www.youtube.com/playlist?list=PLp6ek2hDcoNBtK-hVSSPlbBzfxXwWON4x) — NPTEL IIT Delhi · 93 videos · 18.7h across the first 60 episodes

**Watch only this:** Episodes 1 through 23, about 7 hours — covering from probability space axioms through jointly continuous random variables, which includes all foundational measure-theoretic probability concepts needed to understand the paper's proofs.

*Why it unblocks this paper:* This NPTEL IIT Delhi course covers probability theory and stochastic processes with a strong foundation in measure theory, including probability spaces, random variables, and convergence concepts, directly supporting the paper's rigorous proofs and measure-theoretic probability framework.

*If you want all of it:* About 18.7 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Measure Theoretic Probability](https://www.youtube.com/playlist?list=PLcwjc2OQcM4vCdi7mKHrcfKogSELKnEio) — Axiom Tutor · 12 videos · 1.6h across 12 episodes

**Watch only this:** Videos 1 through 9, about 1.5 hours — covering introduction, motivation, probability measures, sigma algebras, and measurable functions, sufficient for grasping the measure-theoretic foundations used in the paper.

*Why it unblocks this paper:* This Axiom Tutor playlist offers a concise and focused introduction to measure-theoretic probability, covering key concepts such as sigma algebras, probability measures, and measurable functions, providing a quick but rigorous overview aligned with the paper's needs.

*If you want all of it:* About 1.6 hours across all 12 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "A Novel Information Transmission Problem and Its Optimal Solution," start by solidifying foundational knowledge in Bernoulli trials, measure-theoretic probability, and calculus of variations, as these mathematical tools underpin the authors' approach. Then, focus on the core concept of optimal encoding functions for noisy channels, culminating in the authors' own research talk that directly addresses their novel transmission model and results.

### Bernoulli trials in information theory *(prerequisite)*
Bernoulli trials form the probabilistic basis of the paper's transmission model, where signals are modeled as independent Bernoulli random variables. Understanding their properties and distributions is essential for grasping how the encoding function relates the real number to the mean of these trials.

*How the paper uses it:* The paper models transmission as sending i.i.d. Bernoulli random variables with mean related to the real number to be transmitted.

▶ [Week 5: Lecture 39: Bernoulli trials and binomial distributions](https://www.youtube.com/watch?v=ojvuajaE8F0) — NPTEL IIT Bombay · 20:32 · 6 years ago

### Optimal encoding functions for noisy channels
This concept covers the design of encoding schemes that minimize error in probabilistic and unordered transmission channels, which is the core problem addressed by the paper. Understanding classical results and challenges in this area provides context for the novelty and significance of the authors' solution.

*How the paper uses it:* The paper proposes and solves for the unique optimal encoding function minimizing error in a Bernoulli trial transmission model.

▶ [Lecture 18: Transmitting Information Reliably over a Noisy Channel & Shannon’s Noisy Coding Theorem](https://www.youtube.com/watch?v=kWsJ_JDuFaI) — MIT OpenCourseWare · 7 months ago

### Authors' talk on novel information transmission *(the paper's own talk)*
The authors' own talk offers direct insight into their new transmission model, the derivation of the optimal encoding function, and the broader implications of their work. This talk is the most precise and authoritative resource to understand the paper's contributions and open problems.

*How the paper uses it:* Professor Eric Bach discusses current research in theoretical computer science, including topics related to the paper's transmission model.

▶ [Welcome Weekend 2020 - Theory Research Talk - Eric Bach](https://www.youtube.com/watch?v=_MJ27ITq7Es) — UW–Madison Computer Sciences · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner from understanding the fundamental probabilistic building block of Bernoulli trials, through the mathematical tools of measure-theoretic probability and calculus of variations, to the core concept of optimal encoding functions for noisy, unordered transmissions as studied in the paper. The order ensures a solid intuition for the probabilistic model and the rigorous mathematical framework before tackling the paper's novel encoding solution.

### Bernoulli trials in information theory *(prerequisite)*
Bernoulli trials are simple probabilistic experiments with two outcomes, often called success or failure, and form the basis for modeling random signals in communication. Understanding these trials helps grasp how the paper models transmission as sequences of independent random bits with a probability related to the real number being sent.

*How the paper uses it:* The paper models the transmission of a real number as sending i.i.d. Bernoulli random variables with mean linked to the encoded value.

▶ [What are Bernoulli Trials? | Probability Theory, Bernoulli Distribution](https://www.youtube.com/watch?v=1Qx40BduAZY) — Wrath of Math · 7:27 · 7 years ago

### Optimal encoding functions for noisy channels
This concept covers designing encoding schemes that minimize error when transmitting information over noisy or probabilistic channels. It builds on the previous concepts to understand how the paper finds an encoding function that significantly reduces transmission error compared to naive methods.

*How the paper uses it:* The core contribution of the paper is the derivation of the optimal encoding function f(x) = (1 - cos(πx))/2 that minimizes the asymptotic mean squared error in unordered Bernoulli trial transmissions.

▶ [Lecture 18: Transmitting Information Reliably over a Noisy Channel & Shannon’s Noisy Coding Theorem](https://www.youtube.com/watch?v=kWsJ_JDuFaI) — MIT OpenCourseWare · 7 months ago

### Authors' talk on novel information transmission *(the paper's own talk)*
Hearing directly from the authors provides insight into the motivation, approach, and significance of their new transmission model and results. It helps contextualize the theoretical findings within broader research goals.

*How the paper uses it:* This talk features Professor Eric Bach discussing current research in theoretical computer science, including topics related to secure and reliable information transmission as in the paper.

▶ [Welcome Weekend 2020 - Theory Research Talk - Eric Bach](https://www.youtube.com/watch?v=_MJ27ITq7Es) — UW–Madison Computer Sciences · 6 years ago

## Already in your library

- [Information Theory, Lecture 1: Defining Entropy and Information - Oxford Mathematics 3rd Yr Lecture](https://www.youtube.com/watch?v=ScX2aBFyrVU) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's novel information transmission model using Bernoulli trials. The beginner project recreates the core optimal encoding function and visualizes its error reduction compared to naive encoding. The intermediate project implements the asymptotic error criterion and compares the optimal encoding function against the naive baseline on simulated data, introducing measure-theoretic probability concepts practically. The advanced project extends the model to incorporate prior information and weighted error penalties, addressing one of the paper's key generalizations and limitations, and explores practical finite-sample effects.

### Beginner — Visualize Optimal Encoding Function and Error Reduction
*Effort: a weekend, ~8 hours*

You build a small interactive visualization that plots the optimal encoding function f(x) = (1 - cos(πx))/2 alongside the naive identity function over [0,1]. You also plot the corresponding asymptotic scaled mean squared error curves for both functions, illustrating the approximately 64% error reduction achieved by the optimal function.

**Why it shows you understood the paper:** This project shows you grasp the paper's key result of the unique optimal encoding function and its quantitative advantage over naive encoding, demonstrating comprehension of the core mathematical formula and error metric.

**Grounded in:** The optimal encoding function is f(x) = (1 - cos(πx))/2 minimizing the error criterion, reducing error by about 64% compared to naive encoding.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** No external data needed; you simulate the encoding functions and compute error curves analytically as described in the paper.

**Build it:**

1. Implement the optimal encoding function f(x) = (1 - cos(πx))/2 and the naive identity function over the interval [0,1].
2. Compute the inverse functions g = f^{-1} and g_naive = identity^{-1} (which is identity).
3. Calculate the asymptotic scaled mean squared error E[n(g(Ȳ) - x)^2] using the formula (g'(y))^2 y(1 - y) for both functions over a dense grid.
4. Plot both encoding functions on the same graph.
5. Plot the corresponding error curves on a separate graph to visualize the error reduction.
6. Write a README explaining the significance of the plots and how they relate to the paper's main result.

**Ships as:** A Jupyter notebook with plots of the optimal and naive encoding functions and their asymptotic error curves, plus a README explaining the results.

**Stretch goal:** Add an interactive slider to vary the input x and dynamically show encoding and error values.

### Intermediate — Simulate Bernoulli Transmission and Compare Encoding Schemes
*Effort: 1-2 weekends, ~15 hours*

You implement a simulation of transmitting a real number x ∈ [0,1] by generating n i.i.d. Bernoulli trials with mean given by the encoding function (optimal and naive). You estimate x from the sample mean and compute the scaled mean squared error over multiple trials to empirically verify the asymptotic error criterion and the superiority of the optimal encoding.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's theoretical model into a probabilistic simulation, apply measure-theoretic probability concepts, and empirically validate the key asymptotic error metric and optimality claim.

**Grounded in:** The natural measure for the error is E[n(g(Ȳ) − x)^2], and the optimal encoding function minimizes this error compared to naive encoding.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, Jupyter Notebook

**Data:** Simulated Bernoulli trial data generated according to the encoding functions; no external dataset required.

**Build it:**

1. Implement the optimal encoding function f(x) and its inverse g(y), and the naive identity encoding and inverse.
2. For a range of x values in [0,1], simulate n Bernoulli trials with success probability f(x) for both encoding schemes.
3. Compute the sample mean Ȳ for each simulation and estimate x as g(Ȳ).
4. Calculate the scaled mean squared error n * (g(Ȳ) - x)^2 over multiple independent trials to approximate the expectation.
5. Plot the empirical scaled mean squared error versus x for both encoding schemes.
6. Compare the empirical results to the theoretical asymptotic error curves from the paper.
7. Document the methodology, results, and interpretation in a README.

**Ships as:** A Jupyter notebook with simulation code, plots comparing empirical scaled mean squared errors for optimal and naive encodings, and a README discussing the results.

**Stretch goal:** Extend the simulation to include finite sample size effects and analyze convergence rates.

### Advanced — Extend Optimal Encoding to Weighted Error Penalties with Prior Information
*Effort: 3-4 weeks*

You develop a software implementation that generalizes the optimal encoding function to incorporate prior distributions on x and weighted error penalties as described in the paper. You simulate transmissions under these conditions, compute the corresponding optimal transformations involving integrals of the weight function, and analyze how the encoding adapts. You also explore finite sample size effects and discuss practical implications for network protocols.

**Why it shows you understood the paper:** This project tackles one of the paper's main generalizations and limitations by implementing the extended model with prior information and weighted errors, demonstrating deep comprehension of the variational problem and its practical challenges beyond the asymptotic idealization.

**Grounded in:** The model generalizes to include prior information and non-uniform error penalties, yielding explicit optimal transformations involving integrals of the weight function.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, Jupyter Notebook, SymPy (optional for symbolic integration)

**Data:** Simulated data generated according to chosen prior distributions and weight functions; no external dataset required.

**Build it:**

1. Study the paper's formulas for the generalized optimal encoding involving prior distributions and weighted error penalties.
2. Implement numerical integration routines to compute the optimal encoding function for given priors and weight functions.
3. Simulate Bernoulli trial transmissions using these generalized encoding functions for various x sampled from the prior.
4. Estimate x from sample means and compute weighted scaled mean squared errors.
5. Analyze and plot how the encoding function and error metrics change with different priors and weights.
6. Investigate finite sample size effects by varying n and discuss implications for real network conditions.
7. Write a detailed README explaining the implementation, results, and connections to the paper's future directions and limitations.

**Ships as:** A comprehensive Jupyter notebook or Python package implementing generalized optimal encoding with prior and weighted errors, simulation results, plots, and a detailed README.

**Stretch goal:** Prototype a simple network protocol simulation that uses the generalized encoding to handle dynamic conditions and finite samples.
