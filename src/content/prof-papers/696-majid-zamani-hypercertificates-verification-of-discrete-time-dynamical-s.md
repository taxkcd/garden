---
title: "696 · HyperCertificates: Verification of Discrete-Time Dynamical Systems Against HyperLTL Specifications — Majid Zamani"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-majid-zamani"
source_hash: "ef8c0b1f9a64357c21b1c727921454731f791d78f84013f961d730b6efcd523b"
sequence: 696
generator: "outreach-garden: managed"
---

# 696 · HyperCertificates: Verification of Discrete-Time Dynamical Systems Against HyperLTL Specifications

## At a glance

- **Professor:** Majid Zamani
- **Institution:** University of Colorado Boulder
- **Paper:** [HyperCertificates: Verification of Discrete-Time Dynamical Systems Against HyperLTL Specifications](https://arxiv.org/pdf/2605.00752)
- **Authors:** Vishnu Murali, Amin Falah, Ashutosh Trivedi, Majid Zamani
- **Year:** 2026

## Paper overview

This paper introduces HyperCertificates, a novel method to verify discrete-time dynamical systems against complex properties called hyperproperties, which involve relationships between multiple system executions (traces). Unlike traditional methods that consider individual system behaviors, HyperCertificates incorporate lookahead information to reason about future states, enabling verification of properties like opacity and privacy that depend on how different system executions relate. The approach combines closure certificates (for reachability) and barrier certificates (for safety) and is automatable using sum-of-squares optimization and SMT solvers. The paper demonstrates the method on case studies including finite and continuous systems.

### Why it matters

**Research problem:** Verifying discrete-time dynamical systems against hyperproperties specified in HyperLTL is challenging, especially for infinite-state systems. Existing methods like augmented barrier certificates lack lookahead and thus fail to verify certain hyperproperties such as opacity. The problem is to develop a sound, automatable verification framework that can handle these complex hyperproperties effectively.

**Why it matters:** Hyperproperties capture critical system behaviors related to security, privacy, and robustness that cannot be expressed by traditional temporal logics focusing on single traces. Verifying such properties is essential for ensuring system confidentiality (e.g., opacity), privacy, and correct behavior in interconnected and cyber-physical systems. Addressing this verification challenge enables more reliable and secure system design.

**Key contributions:**

- Definition of HyperCertificates combining closure and barrier certificates to verify HyperLTL properties with lookahead.
- Generalization of the framework to ∀*∃* HyperLTL fragments and arbitrary HyperLTL formulas.
- Automatable synthesis methods using sum-of-squares optimization and SMT solvers.
- Demonstration of the approach on finite and continuous-state dynamical systems, including cases where previous methods fail.
- Proofs of soundness guaranteeing that existence of HyperCertificates implies satisfaction of the hyperproperty.

## About the professor

**Majid Zamani** — Associate Professor, Computer Science Department, University of Colorado Boulder.

Research interests: verification and control of cyber-physical systems, secure-by-construction synthesis, information-based control, and compositional analysis and synthesis of interconnected systems

### Research links

- [Faculty/profile page](https://sites.google.com/site/zamani1362/home)
- [Lab website](https://www.hyconsys.com/)
- [Google Scholar](https://scholar.google.com/citations?user=-XDU9ZMAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Formal Verification of Cyber-Physical Systems
**The paper assumes:** formal verification methods for cyber-physical systems, temporal logic specifications, barrier and closure certificates, sum-of-squares optimization, SMT solving
**Already in this field?** Skip this entirely if you already understand formal verification techniques for cyber-physical systems and the use of barrier certificates and SMT-based synthesis.

To understand the verification framework and certificate synthesis methods in the paper on HyperCertificates, a solid grasp of formal verification techniques for cyber-physical systems is essential. The rigorous course option offers a deep, structured university-level treatment of safety validation and reachability analysis, while the fast track provides a concise, accessible overview of formal methods in cyber-physical systems, suitable for quickly building intuition and context.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford AA228V I Validation of Safety Critical Systems I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOq1LMLI8U7djzDb8--xpaC) — Stanford Online · 17 videos · 20.1h across 17 episodes

**Watch only this:** Lectures 1-4 (Introduction & Overview, System Modeling, Property Specification 1 & 2), plus Lectures 11-13 (Reachability for Linear Systems, Reachability for Nonlinear Systems, Discrete Reachability), about 7.5 hours total — these cover the modeling, property specification, and reachability foundations critical for HyperCertificates.

*Why it unblocks this paper:* Stanford AA228V covers system modeling, property specification, and reachability analysis for safety-critical systems, directly relevant to understanding discrete-time dynamical system verification and certificate methods used in the paper.

*If you want all of it:* 20.1 hours across 17 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [FM'21](https://www.youtube.com/playlist?list=PL0qdLcjoqKRV_NckY01x0eC-nh04SbLA_) — Formal Methods Europe · 42 videos · 16.0h across 42 episodes

**Watch only this:** Episodes 2 (Formally Verified Safety Net for Waypoint Navigation Neural Network Controllers), 7 (Domain-Specific Reasoning with Satisfiability Modulo Theories), and 18 (Hybrid Systems Verification with Isabelle/HOL: Simpler Syntax, Better Models...), about 1.5 hours total — these give a quick but substantive insight into formal verification tools and hybrid systems relevant to the paper.

*Why it unblocks this paper:* The FM'21 series by Formal Methods Europe provides concise, focused talks on formal verification techniques including SMT solvers and hybrid system verification, offering a practical overview aligned with the paper's use of SMT and sum-of-squares methods.

*If you want all of it:* 16.0 hours across 42 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'HyperCertificates: Verification of Discrete-Time Dynamical Systems Against HyperLTL Specifications,' start by building a foundation in discrete-time dynamical systems and the sum-of-squares optimization technique, both crucial for modeling and automating certificate synthesis. Next, gain familiarity with SMT solvers, which are essential for the counterexample-guided inductive synthesis approach used in the paper. Then, study the HyperLTL logic to comprehend the specification language for hyperproperties. Finally, focus on the core concept of HyperCertificates, emphasizing the authors' own research contributions and talks to grasp their novel verification framework with lookahead.

### Discrete-time dynamical systems *(prerequisite)*
Discrete-time dynamical systems form the fundamental mathematical model class on which the verification framework operates. Understanding their behavior, limit sets, and evolution over discrete time steps is essential to grasp how system executions (traces) are analyzed and related in the paper.

*How the paper uses it:* The paper verifies discrete-time dynamical systems against HyperLTL specifications using HyperCertificates.

▶ [Lecture 4 | Omega & Alpha Limit Sets in Discrete Dynamical Systems](https://www.youtube.com/watch?v=iFfluQ4umg0) — TV Academic Hub | University Mathematics · 1:39:45 · 1mo ago

### Sum-of-squares optimization *(prerequisite)*
Sum-of-squares (SOS) optimization is a key computational technique used to automatically synthesize polynomial certificates that prove system properties. A rigorous seminar talk on SOS proofs and algorithms provides the necessary mathematical and algorithmic background to understand the certificate synthesis approach in the paper.

*How the paper uses it:* The authors use sum-of-squares optimization to automate the synthesis of HyperCertificates.

▶ [Sum-of-Squares Proofs, Efficient Algorithms, and Applications - Pravesh Kothari](https://www.youtube.com/watch?v=sjjRdqWVMzk) — Institute for Advanced Study · 1:08:29 · 2y ago

### SMT solvers for verification *(prerequisite)*
SMT solvers are powerful tools for automated reasoning and constraint solving, crucial for the counterexample-guided inductive synthesis (CEGIS) method employed in the paper. A detailed research talk on SMT solvers and their role in formal verification will provide the advanced understanding needed.

*How the paper uses it:* The paper leverages SMT solvers for the CEGIS-based synthesis of HyperCertificates.

▶ [From formal verification to high-performance constraint solving](https://www.youtube.com/watch?v=vmqoM4B7wvQ) — Microsoft Research · 1:10:21 · 10y ago

### HyperLTL logic *(prerequisite)*
HyperLTL is the temporal logic used to specify hyperproperties that relate multiple system executions. Understanding its syntax and semantics is critical to appreciate the verification challenges addressed by the paper. A conference talk on controller synthesis for hyperproperties specified in HyperLTL offers an advanced and relevant introduction.

*How the paper uses it:* The paper verifies discrete-time systems against HyperLTL specifications using HyperCertificates.

▶ [HYPER 2021: Borzoo Bonakdarpour on Controller Synthesis for Hyperproperties](https://www.youtube.com/watch?v=WMO7JEOKu3k) — ATVA 2021 · 40:14 · 4y ago

### HyperCertificates method
HyperCertificates combine closure and barrier certificates with lookahead to verify complex hyperproperties. While no direct author talk was found, the closest rigorous research-level video on barrier certificates for stochastic systems by the paper's authors provides deep insight into the certificate-based verification approach foundational to HyperCertificates.

*How the paper uses it:* This method is the core contribution of the paper, combining closure and barrier certificates to verify HyperLTL properties with lookahead.

▶ [k-Inductive Barrier Certificates for Stochastic Systems](https://www.youtube.com/watch?v=Vy2HM8TNNwI) — Association for Computing Machinery (ACM) · 14:57 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on HyperCertificates, start by learning the basics of discrete-time dynamical systems, which are the fundamental models analyzed. Next, grasp the specification language HyperLTL that expresses hyperproperties involving multiple system executions. Then, study the computational techniques sum-of-squares optimization and SMT solvers that enable automated certificate synthesis. Finally, explore the core method of HyperCertificates, which combines closure and barrier certificates with lookahead to verify complex hyperproperties.

### Discrete-time dynamical systems *(prerequisite)*
Discrete-time dynamical systems describe how a system's state evolves step-by-step over time according to a fixed rule. Understanding these systems provides the foundation for analyzing system behaviors and verifying properties about their executions.

*How the paper uses it:* The paper verifies properties of discrete-time dynamical systems, so understanding their dynamics is essential.

▶ [Discrete-time Dynamical System 01](https://www.youtube.com/watch?v=zWww0d0IbHo) — A&A Academy by Yoske Igarashi · 11:08 · 12y ago

### HyperLTL logic *(prerequisite)*
HyperLTL is a temporal logic that can specify hyperproperties—properties relating multiple execution traces of a system, such as security and privacy guarantees. Learning HyperLTL helps understand what kinds of system behaviors the paper aims to verify.

*How the paper uses it:* The paper verifies discrete-time systems against hyperproperties specified in HyperLTL.

▶ [HYPER 2021: Borzoo Bonakdarpour on Controller Synthesis for Hyperproperties](https://www.youtube.com/watch?v=WMO7JEOKu3k) — ATVA 2021 · 40:14 · 4y ago

### Sum-of-squares optimization *(prerequisite)*
Sum-of-squares optimization is a mathematical technique that certifies non-negativity of polynomials and is used to automatically synthesize certificates proving system properties. It is a key computational tool in the paper's verification framework.

*How the paper uses it:* The paper uses sum-of-squares optimization to automate synthesis of HyperCertificates.

▶ [Sum-of-Squares Proofs, Efficient Algorithms, and Applications - Pravesh Kothari](https://www.youtube.com/watch?v=sjjRdqWVMzk) — Institute for Advanced Study · 1:08:29 · 2y ago

### SMT solvers for verification *(prerequisite)*
SMT solvers are automated tools that decide the satisfiability of logical formulas with respect to background theories, enabling counterexample-guided inductive synthesis. They help efficiently generate and check candidate certificates in the paper's method.

*How the paper uses it:* The paper employs SMT solvers for counterexample-guided synthesis of certificates.

▶ [From formal verification to high-performance constraint solving](https://www.youtube.com/watch?v=vmqoM4B7wvQ) — Microsoft Research · 1:10:21 · 10y ago

## Already in your library

- [Advanced 6. Planning with Temporal Logic](https://www.youtube.com/watch?v=Tmhe33f9mWA) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)
- [Lecture 12 Linear temporal logic](https://www.youtube.com/watch?v=--4S7HjoZho) — also for: Towards Causally Interpretable Wi-Fi CSI-Based Human Activity Recognition with Discrete Latent Compression and LTL Rule Extraction (Mani B. Srivastava)
- [Z3 Explained - Satisfiability Modulo Theories & SMT Solvers](https://www.youtube.com/watch?v=EacYNe7moSs) — also for: Understanding CDCL Solvers via Scalability Studies and Proofdoors (Vijay Ganesh)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the HyperCertificates framework for verifying discrete-time dynamical systems against HyperLTL specifications. The beginner project focuses on reproducing a core concept from the paper using familiar tools. The intermediate project involves reimplementing the HyperCertificates method on a simplified system to verify opacity, comparing it against a baseline method. The advanced project extends the method to address a stated limitation by exploring approximate verification strategies to improve scalability.

### Beginner — Simulate and Visualize Lookahead in Discrete-Time Dynamical Systems
*Effort: a weekend, ~8 hours*

You build a small Python simulation of a discrete-time dynamical system with a simple state space (e.g., 1D or 2D grid). Implement a visualization that shows multiple system executions (traces) and demonstrates the concept of lookahead by plotting reachable future states from current states. This will illustrate how lookahead enables reasoning about future system behaviors beyond immediate next steps.

**Why it shows you understood the paper:** This project concretely demonstrates the key insight of the paper that lookahead is essential for verifying hyperproperties involving multiple traces. A professor would see that you grasp how closure certificates model reachability and how lookahead extends verification capabilities.

**Grounded in:** We introduce a notion of HyperCertificates that combine barrier and closure certificates to verify HyperLTL properties with lookahead.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic discrete-time dynamical system simulated within the project; no external data required.

**Build it:**

1. Implement a simple discrete-time dynamical system with a small finite state space.
2. Simulate multiple executions (traces) from different initial states.
3. Compute reachable future states from current states to represent lookahead.
4. Visualize the traces and reachable states using matplotlib, highlighting lookahead regions.
5. Write a README explaining how lookahead is represented and why it matters for hyperproperty verification.

**Ships as:** A GitHub repo with Python code simulating the system, visualizations of traces and lookahead, and a README explaining the concept.

**Stretch goal:** Add interactive controls to vary the lookahead horizon and observe its effect on reachable states.

### Intermediate — Reimplement HyperCertificates to Verify Opacity on a Finite-State System
*Effort: 2 weekends, ~20 hours*

You reimplement the core HyperCertificates method from the paper to verify initial-state opacity on a small finite-state discrete-time system. You will synthesize closure and barrier certificates using sum-of-squares optimization and SMT solving (or suitable approximations). You then compare your results against a baseline augmented barrier certificate method that lacks lookahead, showing where it fails and HyperCertificates succeed.

**Why it shows you understood the paper:** This project shows you can implement the paper's main verification framework and reproduce a key result demonstrating the advantage of lookahead in verifying hyperproperties like opacity. It also shows you understand the synthesis techniques and the verification game formulation.

**Grounded in:** We evaluate our approach on the finite-state system illustrated in Figure 1, where the augmented barrier certificate method proposed in [AMTZ24] fails to certify opacity.

**Tech stack:** Python 3.11, cvxpy or SOSTOOLS (if using MATLAB), Z3 SMT solver, numpy

**Data:** Synthetic finite-state system modeled as a transition graph; no external dataset required.

**Build it:**

1. Model a small finite-state discrete-time system with non-deterministic transitions.
2. Implement synthesis of closure certificates representing reachability with lookahead using sum-of-squares or convex optimization.
3. Implement barrier certificates ensuring safety conditions for opacity.
4. Use an SMT solver (e.g., Z3) to encode and check certificate conditions.
5. Compare verification results with a baseline augmented barrier certificate method that lacks lookahead.
6. Document the implementation, results, and comparison in a detailed README.

**Ships as:** A GitHub repo with code implementing HyperCertificates synthesis and verification on a finite-state system, comparison with baseline, and a report README.

**Stretch goal:** Extend the implementation to handle a small continuous-state system with polynomial dynamics.

### Advanced — Approximate HyperCertificate Synthesis for Scalability on Higher-Dimensional Systems
*Effort: 3+ weeks*

You develop an extension of the HyperCertificates framework that addresses the computational complexity limitation by implementing an approximate verification strategy. This could involve relaxing the existential player's strategy restrictions, using neural network representations for certificates, or employing relational abstractions to reduce complexity. You apply this to a higher-dimensional system (e.g., a 3D vehicle dynamics model) and evaluate scalability improvements and soundness preservation.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the framework and its challenges. It shows initiative in advancing the state of the art and practical skills in combining formal methods with approximation techniques.

**Grounded in:** Given the computational complexity of synthesizing HyperCertificates, especially for higher-dimensional systems, what strategies do you envision to improve scalability or approximate verification while preserving soundness?

**Tech stack:** Python 3.11, PyTorch or TensorFlow, Z3 SMT solver, cvxpy or SOSTOOLS, numpy

**Data:** Synthetic or simplified continuous-state dynamical system with polynomial dynamics, inspired by the vehicle dynamics model in the paper.

**Build it:**

1. Review the HyperCertificates synthesis method and identify computational bottlenecks.
2. Implement a neural network-based representation for closure and barrier certificates.
3. Integrate SMT-based counterexample-guided inductive synthesis (CEGIS) with neural certificate training.
4. Apply relational abstractions or prophecy variables to simplify existential quantifiers.
5. Test the approach on a 3D polynomial dynamical system and measure synthesis time and verification results.
6. Document methodology, experiments, and discuss trade-offs between scalability and soundness.

**Ships as:** A GitHub repo with code implementing approximate HyperCertificate synthesis, experiments on a 3D system, and a comprehensive README discussing results and limitations.

**Stretch goal:** Explore controller synthesis for hyperproperties using the approximate certificates.
