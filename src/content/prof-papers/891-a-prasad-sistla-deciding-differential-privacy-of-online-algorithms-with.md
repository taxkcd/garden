---
title: "891 · Deciding Differential Privacy of Online Algorithms with Multiple Variables — A. Prasad Sistla"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-a-prasad-sistla"
source_hash: "21a8c1fd34fb20d83a2a193333de54d13e3aab09aca6a7087f4b201fc18f5035"
sequence: 891
generator: "outreach-garden: managed"
---

# 891 · Deciding Differential Privacy of Online Algorithms with Multiple Variables

## At a glance

- **Professor:** A. Prasad Sistla
- **Institution:** University of Illinois at Chicago
- **Paper:** [Deciding Differential Privacy of Online Algorithms with Multiple Variables](https://arxiv.org/pdf/2309.06615)
- **Authors:** Rohit Chadha, A. Prasad Sistla, Mahesh Viswanathan, Bishnu Bhusal
- **Year:** 2023

## Paper overview

This paper addresses the problem of verifying whether online algorithms that process streams of data and add noise to protect privacy satisfy differential privacy guarantees. It extends a previous automaton model to handle multiple storage variables, allowing more complex algorithms to be modeled. The authors characterize precisely which automata are differentially private, provide an algorithm to check this property, prove the problem is PSPACE-complete, and implement a tool that outperforms existing methods.

### Why it matters

**Research problem:** Determining whether an online randomized algorithm that processes a stream of inputs and produces outputs is differentially private, especially when the algorithm uses multiple real-valued storage variables.

**Why it matters:** Differential privacy is crucial for protecting individuals' sensitive information in data analysis. Ensuring algorithms meet differential privacy is subtle and error-prone, and verifying this property is generally undecidable. Developing decidable and practical verification methods for complex online algorithms is important for trustworthy data privacy.

**Key contributions:**

- Generalization of DiP automata to multiple storage variables, significantly extending expressive power.
- Precise characterization of differentially private automata via well-formedness conditions involving leaking cycles, leaking pairs, disclosing cycles, and privacy violating paths.
- Development of a PSPACE-complete decision procedure to check differential privacy for output-distinct DiP automata.
- Implementation of the DiPAut tool that efficiently verifies differential privacy and outperforms state-of-the-art tools.
- Experimental evaluation demonstrating scalability and effectiveness on various examples.

## About the professor

**A. Prasad Sistla** — Professor, Department of Computer Science, University of Illinois at Chicago.

Research interests: Formal Methods in Concurrent and Distributed Systems, Security, Database Management Systems

### Research links

- [Faculty/profile page](https://www.cs.uic.edu/Sistla)
- [Professor website](http://cs.uic.edu/wp-content/uploads/sites/110/2022/02/sistla_cv2_2.pdf)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=P-wJ6Y4AAAAJ)
- [DBLP](https://dblp.org/pid/s/APrasadSistla.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Automata Theory and Formal Verification
**The paper assumes:** automata theory, formal verification methods, complexity theory, graph theory
**Already in this field?** Skip this entirely if you already have a solid understanding of automata theory and formal methods for verifying system properties.

To understand the formal verification and automata-theoretic foundations underpinning the paper on differential privacy of online algorithms, a solid grasp of automata theory, model checking, and formal methods is essential. The rigorous course option offers a deep, structured university-level lecture series on formal verification, ideal for those seeking comprehensive mastery. The fast track provides a concise, focused explainer series that covers key formal verification concepts and complexity management techniques, suitable for a quicker but still substantive background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Formal Methods for System Verification](https://www.youtube.com/playlist?list=PLwdnzlV3ogoU0I4OqKZvuaPc_EoUPifbP) — NPTEL IIT Guwahati · 58 videos · 30.9h across 58 episodes

**Watch only this:** Lectures 1-6 (Formal Methods for System Verification: Course Introduction, Formal Methods with Examples, Spectrum of Logic, Propositional Logic, Decision Problems of Propositional Logic, Normal Forms), about 3 hours — these provide the essential logical and verification foundations needed to understand the paper's automata and verification framework.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course on Formal Methods for System Verification covers foundational topics such as model checking, formal property verification, and decision problems in logic, which directly relate to the automata-theoretic and PSPACE complexity aspects of the paper.

*If you want all of it:* About 30.9 hours across 58 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [How to address complexity in formal verification?](https://www.youtube.com/playlist?list=PLmuRPgaNG2vGvyO0zEtwjACp4pfcR9IlJ) — Formal Intelligence · 9 videos · 1.5h across 9 episodes

**Watch only this:** Episodes 1-5 (Formal Verification Simplified: Parameter Reduction Techniques, Decoding Formal Verification: Cutpoints, Blackboxes & Free Variables, Effortless Formal Verification: Mastering Over-Constraining, Unraveling Case Splitting: Streamline Formal Verification, Counter Abstraction Made Easy: Formal Verification Simplified), about 45 minutes — these episodes provide a quick yet substantive overview of complexity management in formal verification.

*Why it unblocks this paper:* This concise series by Formal Intelligence focuses on addressing complexity in formal verification, covering key abstraction and simplification techniques that help understand the practical challenges and heuristics relevant to the PSPACE-complete verification problem discussed in the paper.

*If you want all of it:* About 1.5 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper on deciding differential privacy of online algorithms with multiple variables, start by building a foundation in the complexity class PSPACE, which characterizes the computational difficulty of the verification algorithm. Next, study automata theory, especially with real-valued variables, as this forms the mathematical basis for modeling the online algorithms in the paper. Then, deepen your understanding of differential privacy theory, the fundamental privacy concept underlying the verification problem. Finally, focus on the paper's core concept, the DiP automata model, and the authors' own talks or related advanced presentations on differential privacy verification techniques.

### PSPACE complexity class *(prerequisite)*
Understanding PSPACE and PSPACE-completeness is essential to grasp the computational complexity results of the paper's verification algorithm. The selected MIT OpenCourseWare lectures by Michael Sipser provide a rigorous and detailed treatment of space complexity and PSPACE-completeness, suitable for advanced readers.

*How the paper uses it:* The paper proves that deciding differential privacy for DiP automata with multiple variables is PSPACE-complete.

▶ [17. Space Complexity, PSPACE, Savitch's Theorem](https://www.youtube.com/watch?v=cT_qwkTigv4) — MIT OpenCourseWare · 1:20:10 · 5y ago

### Automata theory with real-valued variables *(prerequisite)*
Automata theory provides the formal framework for modeling online algorithms with storage variables. While the paper extends classical automata to multiple real-valued variables, foundational knowledge of finite automata and formal languages is necessary. The CMU lecture by Ryan O'Donnell offers a comprehensive and rigorous introduction to finite automata and regular languages.

*How the paper uses it:* The paper generalizes automata models to handle multiple real-valued storage variables for representing online algorithms.

▶ [Great Ideas in Theoretical Computer Science: Finite Automata (Spring 2015)](https://www.youtube.com/watch?v=UNn_dirK-nI) — Ryan O'Donnell · 1:19:29 · 9y ago

### Differential privacy theory *(prerequisite)*
Differential privacy is the core privacy concept that the paper's verification problem addresses. The selected talks, including Cynthia Dwork's definition of differential privacy at the Institute for Advanced Study, provide a deep and formal understanding of the concept, suitable for advanced researchers.

*How the paper uses it:* Differential privacy is the fundamental privacy guarantee the paper aims to verify for online algorithms.

▶ [The Definition of Differential Privacy - Cynthia Dwork](https://www.youtube.com/watch?v=lg-VhHlztqo) — Institute for Advanced Study · 18:21 · 9y ago

### DiP automata model
The DiP automata model is the central formalism extended in the paper to multiple variables, capturing the class of online algorithms analyzed. While no direct author talks on DiP automata were found, advanced differential privacy talks from research institutions provide relevant context on privacy verification techniques.

*How the paper uses it:* The paper generalizes the DiP automata model to multiple storage variables and develops verification algorithms based on this model.

▶ [Differential Privacy](https://www.youtube.com/watch?v=FYokHdzgJSg) — Simons Institute for the Theory of Computing · 42:05 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the fundamental concept of differential privacy, which is the core privacy guarantee the paper aims to verify. Next, build foundational knowledge of automata theory, especially finite automata and how they can be extended with variables, since the paper models online algorithms as automata with multiple storage variables. Then, grasp the PSPACE complexity class to appreciate the computational difficulty of the verification problem. Finally, focus on the DiP automata model, the paper's central formalism that generalizes previous models to multiple variables and enables the verification algorithm.

### Differential privacy theory *(prerequisite)*
Differential privacy is a rigorous mathematical framework that ensures an algorithm's output does not reveal too much about any single individual's data. Understanding this concept is essential because the paper focuses on verifying whether online algorithms satisfy differential privacy guarantees.

*How the paper uses it:* The paper's main goal is to verify differential privacy properties of online algorithms modeled as automata.

▶ [The Definition of Differential Privacy - Cynthia Dwork](https://www.youtube.com/watch?v=lg-VhHlztqo) — Institute for Advanced Study · 18:21 · 9y ago

### Automata theory with real-valued variables *(prerequisite)*
Automata theory studies abstract machines and the problems they can solve. Extending finite automata with real-valued storage variables allows modeling more complex, stateful algorithms that process streams of data, which is crucial for understanding the paper's modeling approach.

*How the paper uses it:* The paper generalizes automata models to include multiple real-valued storage variables to represent online algorithms.

▶ [Great Ideas in Theoretical Computer Science: Finite Automata (Spring 2015)](https://www.youtube.com/watch?v=UNn_dirK-nI) — Ryan O'Donnell · 1:19:29 · 9y ago

### PSPACE complexity class *(prerequisite)*
PSPACE is a complexity class that captures problems solvable using polynomial space. Understanding PSPACE and PSPACE-completeness helps appreciate the computational challenges and theoretical limits of verifying differential privacy as discussed in the paper.

*How the paper uses it:* The paper proves that deciding differential privacy for the proposed automata model is PSPACE-complete.

▶ [18. PSPACE-Completeness](https://www.youtube.com/watch?v=aVv9WXwW95w) — MIT OpenCourseWare · 1:17:36 · 5y ago

## Already in your library

- [Differential Privacy - Simply Explained](https://www.youtube.com/watch?v=gI0wk1CXlsQ) — also for: Differentially Private Synthetic Data Generation Using Context-Aware GANs (Anantaa Kotal)
- [Differential Privacy: What? So What? Now What?](https://www.youtube.com/watch?v=NRf6sUk1bv0) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Differential Privacy explained](https://www.youtube.com/watch?v=XgotQQpXwio) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Differential Privacy: Fundamentals to Forefront I](https://www.youtube.com/watch?v=5muBxGQ9B2g) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Differential Privacy - Lecture 1](https://www.youtube.com/watch?v=OfWj89oRD7g) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [1. Introduction, Finite Automata, Regular Expressions](https://www.youtube.com/watch?v=9syvZr-9xwk) — also for: On Signifiable Computability: Part III: A Note on Unnameable Functions on Natural Numbers (Vladimir A. Kulyukin)
- [16. Complexity: P, NP, NP-completeness, Reductions](https://www.youtube.com/watch?v=eHZifpgyH_4) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)
- [P NP NP-Hard NP-Complete problems in Urdu/Hindi](https://www.youtube.com/watch?v=7GiM_LlzYx0) — also for: How Does Machine Learning Manage Complexity? (Lance Fortnow)
- [Complexity Classes (P, NP, NP-Hard, NP-Complete) | 11th Computer - Ch 3 - Lec 5](https://www.youtube.com/watch?v=H4m-gR8kXgY) — also for: Protein Local Structure Alignment Under the Discrete Fréchet Distance (Binhai Zhu), Resource-Aware Intrusion Detection in Infrastructure Networks: A Game-Theoretic Approach (Guoliang Xue)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core contributions of the paper on verifying differential privacy of online algorithms modeled as DiP automata with multiple variables. Starting from a basic simulation of a single-variable DiP automaton, you advance to implementing the paper's PSPACE decision algorithm for well-formedness checking on a small automaton example, and finally extend the model to handle a limitation by exploring other noise distributions beyond Laplace noise. Each project deepens your grasp of the automata model, privacy verification conditions, and practical tool implementation.

### Beginner — Simulate a Single-Variable DiP Automaton with Laplace Noise
*Effort: a weekend, ~8 hours*

You build a Python simulation of a simple online randomized algorithm modeled as a DiP automaton with one real-valued storage variable. The simulation processes a stream of inputs, updates the variable, adds Laplace noise to outputs, and tracks privacy parameters.

**Why it shows you understood the paper:** This project demonstrates your grasp of the DiP automata model's core concept with one variable and the Laplace noise mechanism, foundational to the paper's extension to multiple variables.

**Grounded in:** Generalization of DiP automata to multiple storage variables, starting from the single-variable case as the foundation.

**Tech stack:** Python 3.11, NumPy

**Data:** Synthetic input streams generated as sequences of numeric values to simulate online algorithm inputs.

**Build it:**

1. Implement a Python class representing a DiP automaton with one real-valued storage variable.
2. Simulate input stream processing with state updates and Laplace noise added to outputs.
3. Compute and log privacy parameters (epsilon) for the noisy outputs based on the Laplace mechanism.
4. Visualize or print the output stream and privacy parameters for sample input sequences.

**Ships as:** A Python script and README demonstrating the simulation of a single-variable DiP automaton with Laplace noise and computed privacy guarantees.

**Stretch goal:** Add support for multiple storage variables with independent noise addition and track combined privacy parameters.

### Intermediate — Implement Well-Formedness Checking for Output-Distinct DiP Automata
*Effort: 2 weekends, ~20 hours*

You implement the PSPACE decision algorithm described in the paper to check well-formedness conditions (absence of leaking cycles, leaking pairs, disclosing cycles, and privacy violating paths) for a small output-distinct DiP automaton with multiple variables. You compare your implementation's results on example automata against expected outcomes.

**Why it shows you understood the paper:** This project shows you can translate the paper's core theoretical characterization and algorithm into a working verification tool, demonstrating understanding of the graph-theoretic conditions and PSPACE algorithm.

**Grounded in:** Development of a PSPACE-complete decision procedure to check differential privacy for output-distinct DiP automata.

**Tech stack:** Python 3.11, NetworkX (for graph algorithms)

**Data:** Small, manually constructed DiP automata examples with multiple variables, designed to test well-formedness conditions.

**Build it:**

1. Parse or define a representation for DiP automata with multiple real-valued storage variables and output-distinctness.
2. Implement graph construction of runs and dependency graphs from the automaton.
3. Implement checks for leaking cycles, leaking pairs, disclosing cycles, and privacy violating paths as per the paper's definitions.
4. Combine checks into a decision procedure that outputs whether the automaton is well-formed (and thus differentially private).
5. Test the implementation on example automata and compare results with expected privacy verification outcomes.

**Ships as:** A Python tool with documented examples that verifies differential privacy of small DiP automata by checking well-formedness conditions.

**Stretch goal:** Integrate a simple command-line interface to input automata definitions and output verification results.

### Advanced — Extend DiP Automata Verification to Gaussian Noise Mechanisms
*Effort: 3+ weeks*

You extend the DiP automata model and verification algorithm to handle Gaussian noise mechanisms instead of Laplace noise, addressing one of the paper's stated limitations. You adapt the well-formedness conditions and decision procedure accordingly and evaluate on example automata.

**Why it shows you understood the paper:** This project tackles a future direction proposed by the authors, demonstrating deep comprehension of the model's assumptions and the ability to generalize the verification framework to other noise distributions.

**Grounded in:** The model and verification focus on Laplace noise mechanisms and may not directly extend to other noise distributions.

**Tech stack:** Python 3.11, NumPy, NetworkX

**Data:** Synthetic DiP automata examples adapted to Gaussian noise; no external dataset required.

**Build it:**

1. Study the differences between Laplace and Gaussian noise in differential privacy guarantees.
2. Modify the DiP automata model representation to incorporate Gaussian noise parameters.
3. Adapt the well-formedness conditions and graph-theoretic checks to reflect privacy guarantees under Gaussian noise.
4. Implement the extended decision procedure and verify correctness on test automata.
5. Document the theoretical and practical changes, and compare verification results with the Laplace-based approach.

**Ships as:** An extended verification tool and documentation demonstrating differential privacy checking of DiP automata under Gaussian noise.

**Stretch goal:** Explore heuristics to improve scalability of the verification algorithm for larger automata with Gaussian noise.
