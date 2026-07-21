---
title: "043 · Time-lock puzzles and timed-release Crypto — Ron Rivest"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rivest"
source_hash: "5d07ba9bd9a11983f7d6f7747a2914656e80cf9a28df20549eb8bcfa99978982"
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

To deeply understand the 1996 paper on time-lock puzzles and timed-release cryptography by Rivest, Shamir, and Wagner, start by building foundational knowledge on sequential computation complexity and secret sharing threshold schemes, as these underpin the security and design of the puzzles and trusted agent schemes. Then, study the core cryptographic construction of the repeated squaring time-lock puzzle, which is central to the paper's novel approach. Finally, explore the authors' own talks and related advanced presentations to grasp the original motivations, formalizations, and recent developments in time-lock puzzles.

## Recommended videos (in order)

### Sequential computation complexity *(prerequisite)*
Understanding why repeated squaring is intrinsically sequential and resists parallelization is critical to appreciating the security and timing guarantees of the time-lock puzzle. The chosen video is a rigorous academic seminar from the Simons Institute, providing a deep dive into hardness results for sequence problems, which aligns well with the paper's emphasis on sequential work.

*How the paper uses it:* The paper argues that repeated squaring is an intrinsically sequential process, making parallel speedup ineffective.

▶ [Hardness for Sequence Problems - LCS and Frechet Distance](https://www.youtube.com/watch?v=XCoCiXIShyk) — Simons Institute for the Theory of Computing · 55:24

### Secret sharing threshold schemes *(prerequisite)*
Secret sharing schemes form the foundation for the trusted agent timed-release approach in the paper, enabling threshold reconstruction and robustness against agent failure or corruption. The selected lecture from NPTEL offers a thorough and academic introduction to Shamir's Secret Sharing, which is the basis for the paper's trusted agent scheme.

*How the paper uses it:* The paper uses secret-sharing to distribute timed-release shares of the key among trusted agents with threshold reconstruction.

▶ [Lec 11 Shamir Secret-Sharing](https://www.youtube.com/watch?v=EwazKH7X0FI) — NPTEL - Indian Institute of Science, Bengaluru · 40:43

### Repeated squaring time-lock puzzle
This concept covers the core cryptographic construction proposed in the paper, where repeated squaring modulo a composite number creates a puzzle that requires a predictable amount of sequential computation time. The CMU × LayerZero Crypto Seminar talk by Rachit Garg is a recent, in-depth research presentation on time-lock puzzles, including efficient solving techniques, making it highly relevant and advanced.

*How the paper uses it:* The paper introduces a novel time-lock puzzle based on repeated squaring modulo a composite number to enforce sequential computation time.

▶ [Rachit Garg: Time-Lock Puzzles with Efficient Batch Solving](https://www.youtube.com/watch?v=G4yriZDo17c) — CMU × LayerZero Crypto Seminar · 54:27 · 2 years ago

### Authors' talk on time-lock puzzles *(the paper's own talk)*
Direct talks by the paper's authors or closely related presentations provide the best insight into the original motivations, formalizations, and nuances of the time-lock puzzle concept. While no direct talk by Rivest, Shamir, or Wagner on this exact paper was found, the CSAIL2019 Crypto Puzzle Solver Architecture video relates to Rivest's later work on time-lock puzzles and offers valuable context on the evolution of these puzzles.

*How the paper uses it:* Professor Rivest is a co-author and pioneer of the time-lock puzzle concept introduced in this paper.

▶ [[FPGA 2023] CSAIL2019 Crypto Puzzle Solver Architecture](https://www.youtube.com/watch?v=LjKA2AL5YMg) — ISFPGA'23 · 20:48
