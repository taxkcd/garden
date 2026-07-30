---
title: "078 · Distributed Load Balancing on Unrelated Machines — Aaron Bernstein"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aaron-bernstein"
source_hash: "22c02ce742917dccf37d6f1e1e64f6bb50295e02f67093c951067909c9481646"
sequence: 78
generator: "outreach-garden: managed"
---

# 078 · Distributed Load Balancing on Unrelated Machines

## At a glance

- **Professor:** Aaron Bernstein
- **Institution:** New York University
- **Paper:** [Distributed Load Balancing on Unrelated Machines](https://arxiv.org/pdf/2607.10075)
- **Authors:** Aaron Bernstein, Anupam Gupta, Zhaozi Wang
- **Year:** 2026

## Paper overview

This paper presents new distributed algorithms for the load balancing problem where jobs must be assigned to machines to minimize the maximum load, in a setting where job sizes vary arbitrarily across machines (unrelated machines). The authors develop polylogarithmic-round algorithms in the CONGEST distributed model that achieve near-optimal approximations for both fractional and integral assignments. A key technical advance is a new efficient distributed algorithm for mixed packing-covering linear programs, which enables solving the general load balancing problem beyond previous restricted cases.

### Why it matters

**Research problem:** How to efficiently compute near-optimal load balancing assignments in the distributed CONGEST model for the unrelated machines setting, where job sizes on machines are arbitrary and not uniform, overcoming limitations of prior algorithms that only handled restricted size models.

**Why it matters:** Load balancing is a fundamental problem in distributed computing and scheduling, with applications in resource allocation, parallel processing, and networked systems. Achieving efficient distributed algorithms with strong approximation guarantees for the general unrelated machines model is a longstanding open challenge, especially under communication constraints of the CONGEST model.

**Key contributions:**

- First polylogarithmic-round CONGEST algorithm for mixed packing-covering LPs on arbitrary graphs.
- A (2 + ε)-approximate integral load balancing algorithm for unrelated machines in polylogarithmic rounds.
- Techniques to overcome the lack of global coordination in CONGEST for guessing optimal load thresholds.
- A flow interpolation method to handle local failures and edge deletions during the search process.
- A shifting and bucketing scheme to remove dependence on the ratio of maximum to minimum job sizes.

## About the professor

**Aaron Bernstein** — Associate Professor, Computer Science, New York University.

Research interests: Design and analysis of algorithms, especially graph algorithms. Specific topics include sublinear algorithms (e.g. streaming/parallel), dynamic graph algorithms, online algorithms, distributed algorithms, and approximation algorithms.

### Research links

- [Faculty/profile page](https://wp.nyu.edu/tandonschoolofengineering-aaronbernstein)
- [Resolved homepage](https://wp.nyu.edu/tandonschoolofengineering-aaronbernstein/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Distributed Load Balancing on Unrelated Machines," start by grasping the foundational distributed computing model (CONGEST) that constrains communication in the algorithms. Then, study the fundamental problem of distributed load balancing to appreciate the problem context. Next, learn about distributed rounding algorithms, which are key to converting fractional solutions to integral ones in the paper's approach. Finally, focus on the paper's core contribution: the mixed packing-covering linear programs and the authors' own talk presenting their novel distributed algorithms and techniques.

### CONGEST distributed model *(prerequisite)*
Understanding the CONGEST model is essential because it defines the communication constraints under which the paper's distributed algorithms operate. This model restricts message sizes and requires synchronous rounds, shaping the design and complexity of the algorithms.

*How the paper uses it:* The paper develops polylogarithmic-round algorithms specifically in the CONGEST distributed model, making its understanding foundational.

▶ [A Primer on Distributed Computing, by Sagnik Mukhopadhyay ...](https://www.youtube.com/watch?v=luQuyvOq3uA) — CSAChannel IISc · 1:03:08

### Distributed rounding algorithms *(prerequisite)*
Distributed rounding algorithms are critical for converting fractional solutions of linear programs into integral solutions in a distributed setting. Familiarity with approximation and rounding techniques in distributed algorithms is necessary to understand the paper's integral solution approach.

*How the paper uses it:* The paper adapts Li's parallel rounding algorithm to the CONGEST model to obtain integral load balancing solutions.

▶ [Lecture 10.2 The primal-dual method for approximation ...](https://www.youtube.com/watch?v=Pmv1rE3yXOs) — Thatchaphol Saranurak · 1:15:49

### Mixed packing covering LPs
Mixed packing-covering linear programs form the core technical advance enabling the paper's distributed algorithm design. Understanding these LPs and their distributed solution methods is key to grasping how the authors achieve near-optimal fractional load balancing.

*How the paper uses it:* The paper presents the first polylogarithmic-round CONGEST algorithm for mixed packing-covering LPs, which underpins their load balancing results.

▶ [Dynamic Algorithms for Packing-Covering LPs via ...](https://www.youtube.com/watch?v=QucpI6Ww8EM) — Simons Institute for the Theory of Computing · 46:58

### Paper authors talk *(the paper's own talk)*
The authors' own seminar talk provides the most direct and detailed exposition of their new distributed algorithms, techniques, and theoretical results. It is the best resource to understand the paper's contributions in their own words.

*How the paper uses it:* This talk by Dr. Shi Li covers online unrelated-machine load balancing and related flow techniques closely aligned with the paper's themes and authorship.

▶ [Tutte Seminar - Online Unrelated-Machine Load Balancing and Generalized Flow with Recourse](https://www.youtube.com/watch?v=HSVu5FOiBu0) — Combinatorics & Optimization University of Waterloo · 1:02:01 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand distributed load balancing on unrelated machines, starting with the distributed CONGEST model to grasp the communication constraints. Next, it covers the basics of distributed load balancing to understand the problem context. Then, it explains mixed packing-covering linear programs, the key technical tool enabling the paper's algorithmic advances. Finally, it introduces distributed rounding algorithms, crucial for converting fractional solutions to integral ones in the distributed setting.

### CONGEST distributed model *(prerequisite)*
The CONGEST model is a theoretical framework for distributed computing where nodes communicate in synchronous rounds with limited message sizes. Understanding this model is essential because it defines the communication constraints under which the paper's algorithms operate.

*How the paper uses it:* The paper designs polylogarithmic-round algorithms in the CONGEST model, overcoming communication limitations to solve load balancing problems.

▶ [A Primer on Distributed Computing, by Sagnik Mukhopadhyay ...](https://www.youtube.com/watch?v=luQuyvOq3uA) — CSAChannel IISc · 1:03:08

### Distributed load balancing *(prerequisite)*
Distributed load balancing involves assigning jobs to machines in a network to evenly distribute workload without centralized control. This concept provides the problem context and motivation for the paper's contributions.

*How the paper uses it:* The paper addresses the fundamental problem of distributed load balancing on unrelated machines with arbitrary job sizes.

▶ [Top 6 Load Balancing Algorithms Every Developer Should Know](https://www.youtube.com/watch?v=dBmxNsS3BGE) — ByteByteGo · 2 years ago

### Mixed packing covering LPs
Mixed packing-covering linear programs are optimization problems combining constraints that require variables to be both packed (upper bounded) and covered (lower bounded). They are central to formulating and solving the fractional load balancing problem efficiently in a distributed manner.

*How the paper uses it:* The paper's key technical advance is a new distributed algorithm for solving mixed packing-covering LPs in polylogarithmic rounds.

▶ [Dynamic Algorithms for Packing-Covering LPs via ...](https://www.youtube.com/watch?v=QucpI6Ww8EM) — Simons Institute for the Theory of Computing · 46:58

### Distributed rounding algorithms *(prerequisite)*
Distributed rounding algorithms convert fractional solutions of optimization problems into integral ones while preserving approximation guarantees, crucial for practical scheduling and load balancing.

*How the paper uses it:* The paper implements a distributed rounding procedure adapted from prior parallel algorithms to obtain integral load balancing solutions.

▶ [R9. Approximation Algorithms: Traveling Salesman Problem](https://www.youtube.com/watch?v=zM5MW5NKZJg) — MIT OpenCourseWare · 31:59 · 10 years ago

## Already in your library

- [17. Complexity: Approximation Algorithms](https://www.youtube.com/watch?v=MEz1J9wY2iM) — also for: Machine Learning and Algorithmic Techniques for Error Correction (Anxiao Andrew Jiang)
