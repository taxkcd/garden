---
title: "043 · Time-lock puzzles and timed-release Crypto — Ron Rivest"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rivest"
source_hash: "0f9461fc571653d747710953afaf9d45631d13258afc852087d8c2c4221d9a1b"
sequence: 43
generator: "outreach-garden: managed"
---

# 043 · Time-lock puzzles and timed-release Crypto

## At a glance

- **Professor:** Ron Rivest
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [Time-lock puzzles and timed-release Crypto](https://dspace.mit.edu/bitstream/1721.1/149822/1/MIT-LCS-TR-684.pdf)
- **Authors:** Ronald L. Rivest, Adi Shamir, David A. Wagner
- **Year:** 1996

## Paper overview

This paper introduces the concept of time-lock puzzles, cryptographic constructions that allow information to be encrypted so it can only be decrypted after a predetermined amount of time has passed. It explores two main approaches: computational puzzles that require sequential work to solve, and trusted agents who release secrets at specified times. The paper proposes a novel time-lock puzzle based on repeated squaring modulo a composite number, which is intrinsically sequential and resistant to parallel speedup, and discusses a secret-sharing scheme using trusted agents for timed-release encryption.

### Why it matters

**Research problem:** How to encrypt information so that it cannot be decrypted until a specified future time, without relying solely on trusted parties, and how to design cryptographic puzzles that require a predictable amount of real time to solve.

**Why it matters:** Timed-release crypto has many practical applications such as sealed bids in auctions, timed payments, delayed diary decryption, and key escrow with delayed government access. Ensuring secure timed-release without trusting agents is challenging but critical for privacy and fairness in these scenarios.

**Key contributions:**

- Definition and formalization of time-lock puzzles for timed-release cryptography.
- A novel time-lock puzzle construction based on repeated squaring modulo a composite number.
- Analysis showing the puzzle is intrinsically sequential and resistant to parallel speedup.
- A secret-sharing based scheme using trusted agents to enable timed-release crypto with threshold reconstruction.
- Discussion of an offline variant of the trusted agent scheme for practical deployment.

## About the professor

**Ron Rivest** — Institute Professor, Department of Electrical Engineering and Computer Science, Massachusetts Inst. of Technology.

Research interests: cryptography, computer and network security, algorithms, voting security, climate change, contact tracing (exposure notification)

### Research links

- [Faculty/profile page](http://people.csail.mit.edu/rivest)
- [Professor website](https://people.csail.mit.edu/rivest)
- [Lab website](https://toc.csail.mit.edu/cis)
- [GitHub](https://www.github.com/ron-rivest)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 1996 paper on time-lock puzzles and timed-release cryptography by Rivest, Shamir, and Wagner, start with foundational concepts in modular arithmetic and number theory, which underpin the repeated squaring technique. Next, study secret sharing schemes to grasp the trusted agent approach for timed-release encryption. Finally, focus on the core concept of time-lock puzzles, prioritizing advanced research talks that explore modern developments in this area to contextualize and deepen understanding of the original paper's contributions.

### Modular arithmetic and number theory *(prerequisite)*
Modular arithmetic is fundamental to understanding the repeated squaring modulo a composite number, which is the core computational primitive used in the paper's time-lock puzzle construction. A rigorous university lecture covering modular arithmetic in depth will provide the necessary mathematical background for the paper's cryptographic methods.

*How the paper uses it:* The paper's time-lock puzzle construction relies on repeated squaring modulo a composite number n = pq, making modular arithmetic essential to understand.

▶ [Lecture 9: Modular Arithmetic](https://www.youtube.com/watch?v=Nn8nBPyzzQ0) — MIT OpenCourseWare · 1:19:46 · 1 year ago

### Secret sharing schemes *(prerequisite)*
Secret sharing schemes, especially Shamir's Secret Sharing, form the basis for the trusted agent timed-release cryptography approach discussed in the paper. Watching a research-level session or seminar on secret sharing will clarify how threshold reconstruction enables robust timed-release encryption without relying on a single trusted party.

*How the paper uses it:* The paper proposes a secret-sharing based scheme using trusted agents to enable timed-release crypto with threshold reconstruction.

▶ [Session on Secret Sharing and Secure Multiparty Computation](https://www.youtube.com/watch?v=pOFSP-JdBZU) — IACR · 3 years ago

### Time-lock puzzles and timed-release Crypto (Paper authors talk) *(the paper's own talk)*
This section focuses on advanced talks related to time-lock puzzles, ideally from the authors or closely related research groups, to gain direct insight into the paper's novel timed-release cryptography approach and its theoretical foundations. These talks provide a deep dive into the state-of-the-art and foundational concepts that build on or relate directly to the 1996 paper.

*How the paper uses it:* Direct insight from the authors and related researchers on their novel timed-release cryptography approach and time-lock puzzle constructions.

▶ [Time-Lock Puzzles from Randomized Encodings](https://www.youtube.com/watch?v=bRcegZugqfY) — Simons Institute for the Theory of Computing · 11 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the 1996 paper on time-lock puzzles and timed-release cryptography, start with the foundational math of modular arithmetic, which underpins the cryptographic operations used. Next, learn about secret sharing schemes, essential for the trusted agent timed-release approach. Then, grasp the repeated squaring method, the core computational technique enabling the paper's intrinsically sequential time-lock puzzles. Finally, explore brief talks by experts on time-lock puzzles to see modern perspectives and applications.

### Modular arithmetic and number theory *(prerequisite)*
Modular arithmetic is a system of arithmetic for integers where numbers 'wrap around' upon reaching a certain value, called the modulus. This concept is fundamental to cryptography, enabling operations like repeated squaring modulo a composite number, which are used to build secure puzzles.

*How the paper uses it:* The paper's time-lock puzzle relies on repeated squaring modulo a composite number n = pq, making modular arithmetic foundational.

▶ [Lecture 9: Modular Arithmetic](https://www.youtube.com/watch?v=Nn8nBPyzzQ0) — MIT OpenCourseWare · 1:19:46 · 1 year ago

### Secret sharing schemes *(prerequisite)*
Secret sharing schemes allow a secret to be split into parts, giving each participant a share, so that only a threshold number of shares can reconstruct the secret. This technique ensures robustness and security when trusted agents release secrets at predetermined times.

*How the paper uses it:* The paper uses secret-sharing with trusted agents to enable timed-release encryption with threshold reconstruction.

▶ [Protecting Your Secrets With Polynomials - Shamir's Secret Sharing](https://www.youtube.com/watch?v=_EHMd8gpApo) — emcapsulation · 11 months ago

### Repeated squaring time-lock puzzle
Repeated squaring is an algorithm to efficiently compute large exponents modulo a number by successively squaring and reducing. In the paper, this process is used to create puzzles that require sequential computation, preventing parallel speedup and controlling decryption timing.

*How the paper uses it:* The paper's novel time-lock puzzle construction is based on repeated squaring modulo a composite number, ensuring intrinsic sequentiality.

▶ [The Method of Repeated Squares](https://www.youtube.com/watch?v=C2dOkcg_jaM) — Andrew Misseldine · 5 years ago

### Paper authors talk *(the paper's own talk)*
Hearing from experts and researchers provides insight into the motivations, challenges, and modern developments in time-lock puzzles and timed-release cryptography. These talks contextualize the paper's contributions and show how the field has evolved.

*How the paper uses it:* These talks offer direct insight into time-lock puzzles and timed-release cryptography, expanding on the paper's foundational ideas.

▶ [Time-Lock Puzzles from Randomized Encodings](https://www.youtube.com/watch?v=bRcegZugqfY) — Simons Institute for the Theory of Computing · 11 years ago

## Already in your library

- [Rachit Garg: Time-Lock Puzzles with Efficient Batch Solving](https://www.youtube.com/watch?v=G4yriZDo17c) — also for: Time-lock puzzles and timed-release Crypto (Ron Rivest)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the 1996 paper on time-lock puzzles by Rivest, Shamir, and Wagner. The beginner project reproduces the core repeated squaring time-lock puzzle mechanism in a simple form. The intermediate project implements and benchmarks the puzzle's sequential nature and resistance to parallel speedup. The advanced project addresses a key limitation by exploring adaptive puzzle difficulty to maintain timing guarantees despite hardware variability, directly engaging with the paper's future directions.

### Beginner — Basic Repeated Squaring Time-Lock Puzzle
*Effort: a weekend, ~8 hours*

You build a simple command-line tool that encrypts a short secret using the repeated squaring time-lock puzzle method described in the paper, and then decrypts it by performing the required sequential squarings modulo a composite number. The tool demonstrates the core puzzle construction with configurable parameters.

**Why it shows you understood the paper:** This project shows you understand the fundamental cryptographic construction of the time-lock puzzle based on repeated squaring modulo n = pq, and how the puzzle enforces a time delay via sequential computation.

**Grounded in:** The paper's key contribution: 'A novel time-lock puzzle construction based on repeated squaring modulo a composite number.'

**Tech stack:** Python 3.11

**Data:** No external data needed; you generate random secrets and composite numbers for puzzle creation.

**Build it:**

1. Implement modular exponentiation by repeated squaring modulo a composite number n = pq.
2. Generate a random composite number n by multiplying two primes (for simplicity, small primes).
3. Encrypt a secret by adding it to a^{2^t} mod n as per the paper's method.
4. Implement the puzzle solver that performs t repeated squarings sequentially to recover the secret.
5. Create a CLI interface to input parameters (secret, t) and show encryption and decryption steps.
6. Write a README explaining the puzzle construction and how the code maps to the paper.

**Ships as:** A GitHub repo with the Python script and README demonstrating the time-lock puzzle encryption and decryption with example runs.

**Stretch goal:** Add a simple timing benchmark to show how increasing t increases solve time approximately linearly.

### Intermediate — Benchmarking Sequentiality and Parallel Resistance of Time-Lock Puzzle
*Effort: 1-3 weekends*

You implement the repeated squaring time-lock puzzle from the paper and experimentally verify its intrinsic sequential nature by benchmarking puzzle solving time with varying numbers of parallel threads or processes. You compare single-threaded vs. multi-threaded performance to confirm the lack of parallel speedup.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's key result that the puzzle is intrinsically sequential and resistant to parallel speedup, by reproducing the experimental evidence and metrics supporting this claim.

**Grounded in:** The paper's key result: 'Parallelization does not significantly speed up solving the puzzle, making it reliable for timed-release.'

**Tech stack:** Python 3.11, multiprocessing or threading library, matplotlib for plotting

**Data:** No external data; you generate puzzles with varying t values and measure solve times under different parallelization settings.

**Build it:**

1. Reimplement the repeated squaring puzzle solver from the beginner project.
2. Implement a parallelized version attempting to split the squaring computations across multiple threads or processes.
3. Design and run benchmarks measuring solve time for single-threaded and multi-threaded runs over a range of t values.
4. Plot and analyze the results to show minimal speedup from parallelization.
5. Write a report in the README comparing your results to the paper's claims.
6. Optionally, include code to simulate hardware speed variability by adding artificial delays.

**Ships as:** A GitHub repo with code, benchmark scripts, plots, and a detailed README analyzing the puzzle's sequentiality and parallel resistance.

**Stretch goal:** Add a simple secret-sharing scheme simulation with trusted agents as described in the paper to contrast computational and trusted-agent approaches.

### Advanced — Adaptive Time-Lock Puzzle with Dynamic Difficulty Adjustment
*Effort: a few weeks*

You extend the repeated squaring time-lock puzzle by implementing an adaptive difficulty mechanism that adjusts the puzzle parameter t dynamically based on observed hardware speed or elapsed time, aiming to maintain a target solve time despite hardware variability. This addresses the paper's limitation on precise timing control.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep comprehension by proposing and implementing a practical enhancement to improve timing precision and robustness of time-lock puzzles.

**Grounded in:** The paper's limitation and future direction: 'Precise timing control is difficult due to hardware speed variations.' and 'Improving precision and control over puzzle solution timing despite hardware variability.'

**Tech stack:** Python 3.11, multiprocessing, matplotlib, possibly Docker for environment control

**Data:** No external data; you simulate hardware speed variability by running on different machines or artificially varying compute speed in code.

**Build it:**

1. Build on the intermediate project’s puzzle implementation and benchmarking framework.
2. Design a method to estimate current hardware speed by timing a small calibration puzzle.
3. Implement a controller that adjusts the puzzle parameter t dynamically to target a desired solve time.
4. Test the adaptive puzzle on machines or simulated environments with different speeds.
5. Evaluate how well the adaptive mechanism maintains timing guarantees compared to fixed t puzzles.
6. Document the design, implementation, and evaluation results in a comprehensive README.

**Ships as:** A GitHub repo with adaptive time-lock puzzle code, calibration and adjustment logic, evaluation scripts, and a detailed report discussing improvements over the original scheme.

**Stretch goal:** Explore hybrid schemes combining adaptive puzzles with secret-sharing trusted agents to improve robustness.
