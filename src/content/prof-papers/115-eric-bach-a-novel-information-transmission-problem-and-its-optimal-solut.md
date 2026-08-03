---
title: "115 · A Novel Information Transmission Problem and Its Optimal Solution — Eric Bach"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eric-bach"
source_hash: "f788f3b04da3d52911b2128adf6f684eaef787c7d6965d7b9e50e9ea96ea864c"
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
