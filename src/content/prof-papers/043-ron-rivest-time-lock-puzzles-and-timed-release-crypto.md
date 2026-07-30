---
title: "043 · Time-lock puzzles and timed-release Crypto — Ron Rivest"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rivest"
source_hash: "b05ac2346152d23002240792b39e0f2e590947691c44ce137beae1c9257028ad"
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
