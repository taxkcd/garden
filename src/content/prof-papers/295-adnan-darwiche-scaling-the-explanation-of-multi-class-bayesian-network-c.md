---
title: "295 · Scaling the Explanation of Multi-Class Bayesian Network Classifiers — Adnan Darwiche"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-adnan-darwiche"
source_hash: "9013e7b3ae40ad807ab6c57d30f15e30419381a6196419c84f04b0992b4e8b41"
sequence: 295
generator: "outreach-garden: managed"
---

# 295 · Scaling the Explanation of Multi-Class Bayesian Network Classifiers

## At a glance

- **Professor:** Adnan Darwiche
- **Institution:** Univ. of California - Los Angeles
- **Paper:** [Scaling the Explanation of Multi-Class Bayesian Network Classifiers](https://doi.org/10.48550/arXiv.2603.14594)
- **Authors:** Yaofang Zhang, Adnan Darwiche
- **Year:** 2026

## Paper overview

This paper presents a new algorithm to efficiently compile multi-class Bayesian network classifiers into logical formulas that explain their decisions. These formulas enable fast and reliable explanations of classifier outputs, improving upon prior methods that were limited to binary classifiers and slower compilation times.

### Why it matters

**Research problem:** How to efficiently compile class formulas for multi-class Bayesian network classifiers into tractable logical circuits that enable scalable and guaranteed explanations of classifier decisions.

**Why it matters:** As machine learning classifiers are increasingly used in critical applications like medical diagnosis, explaining their decisions with guarantees is essential for trust and accountability. Prior methods were limited to binary classifiers and had high computational costs, restricting their practical use.

**Key contributions:**

- Generalization from binary to multi-class Bayesian network classifiers.
- Significant improvement in compilation time compared to prior work.
- Output of class formulas as OR-decomposable NNF circuits enabling efficient computation of explanations.
- Introduction of the feature tree structure to guide compilation and exploit conditional independencies.
- Theoretical complexity analysis showing improved scalability over brute force methods.

## About the professor

**Adnan Darwiche** — Professor, Computer Science Department, Univ. of California - Los Angeles.

Research interests: probabilistic reasoning, symbolic reasoning and machine learning

### Research links

- [Faculty/profile page](http://www.cs.ucla.edu/~darwiche)
- [Resolved homepage](http://reasoning.cs.ucla.edu/home.php)
- [Lab website](http://reasoning.cs.ucla.edu/)

## Learning path

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational and advanced knowledge essential for understanding the paper on scaling explanations of multi-class Bayesian network classifiers. It covers probability theory basics, graphical models and Bayesian networks, logical circuit representations including negation normal form, algorithmic complexity concepts, Bayesian network classifiers and explanation methods, and jointree algorithms with feature trees. Work through these stages in order to build the necessary background before engaging with the paper's novel contributions.

**The paper assumes:** probability theory, Bayesian networks, graphical models, logical circuits (especially negation normal form), algorithmic complexity, and explanation methods for classifiers
**Time to work through:** roughly 45-55 hours if you watch all recommended content, about 25-30 hours if you follow the skip guidance
**Already in this field?** Skip stages 1-3 if you already have a solid background in probability theory, Bayesian networks, and logical circuit representations.

### Stage 1 · Probability Theory Fundamentals *(foundational)*
The paper builds on Bayesian networks, which are probabilistic graphical models requiring a solid understanding of probability concepts like conditional probability, independence, and Bayes' theorem.

▶ **Course:** [6.041 Probabilistic Systems Analysis and Applied Probability](https://www.youtube.com/playlist?list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8) — MIT OpenCourseWare · 25 videos · 21.1h across 25 episodes

*What to watch:* Watch the first 12 episodes of the '6.041 Probabilistic Systems Analysis and Applied Probability' playlist by MIT OpenCourseWare, covering probability models, conditioning, Bayes' rule, independence, and discrete random variables. These episodes provide a rigorous and structured introduction to probability theory relevant to Bayesian networks.

*Move on when you can:* Explain and compute conditional probabilities and Bayes' rule for simple events and random variables.

### Stage 2 · Graphical Models and Bayesian Networks *(core)*
Understanding Bayesian networks, their structure, semantics, and inference algorithms is essential since the paper compiles classifiers based on these models.

▶ **Course:** [Probabilistic Graphical Model by Daphne Koller [Full Course]](https://www.youtube.com/playlist?list=PLBAGcD3siRDjiQ5VZQ8t0C7jkHQ8fhuq8) — Deep Learning Boston · 83 videos · 14.8h across the first 60 episodes

*What to watch:* Focus on the first 24 episodes of the 'Probabilistic Graphical Model by Daphne Koller [Full Course]' playlist by Deep Learning Boston, which cover Bayesian network semantics, factorization, reasoning patterns, and inference techniques. This series offers a comprehensive and authoritative introduction to Bayesian networks.

*Move on when you can:* Construct a Bayesian network for a given problem and perform exact inference using variable elimination or belief propagation.

### Stage 3 · Logical Circuits and Negation Normal Form *(core)*
The paper compiles class formulas into OR-decomposable negation normal form (NNF) circuits, so understanding logical circuit representations and NNF is critical.

▶ [Lecture 06-2 Negation normal form (NNF)](https://www.youtube.com/watch?v=CWMqv78H9i4) — Automated Reasoning · 4:16

*What to watch:* Watch the 'Lecture 06-2 Negation normal form (NNF)' video by Automated Reasoning. This concise lecture explains how to convert propositional formulas into negation normal form and introduces the concept of OR-decomposability, directly relevant to the paper's circuit compilation approach.

*Move on when you can:* Convert propositional logic formulas into negation normal form and explain OR-decomposability in circuit representations.

### Stage 4 · Algorithmic Complexity and Tractability *(core)*
The paper analyzes and improves the complexity of compilation algorithms, so understanding complexity classes, exponential growth, and tractability notions is necessary.

▶ **Course:** [MIT 6.006 Introduction to Algorithms, Spring 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY) — MIT OpenCourseWare · 32 videos · 35.3h across 32 episodes

*What to watch:* Watch the first 10 episodes of the 'MIT 6.006 Introduction to Algorithms, Spring 2020' playlist by MIT OpenCourseWare, focusing on algorithm basics, data structures, and asymptotic analysis. These lectures provide a solid foundation in algorithmic complexity essential for understanding the paper's complexity improvements.

*Move on when you can:* Explain the difference between polynomial and exponential time complexity and analyze the complexity of a given algorithm.

### Stage 5 · Bayesian Network Classifiers and Explanation Methods *(advanced)*
The paper extends prior work on binary Bayesian network classifiers and their explanation methods, so familiarity with these classifiers and existing explanation techniques is required.

▶ [Lecture 15A: Compiling Bayesian Network Classifiers](https://www.youtube.com/watch?v=TsxmXBNl8eU) — UCLA Automated Reasoning Group · 44:56

*What to watch:* Watch the 'Lecture 15A: Compiling Bayesian Network Classifiers' video by UCLA Automated Reasoning Group. This focused lecture discusses compiling machine learning systems into symbolic representations, directly related to the paper's approach to Bayesian network classifier explanations.

*Move on when you can:* Describe how a Bayesian network classifier works for binary classification and summarize methods for explaining classifier decisions.

### Stage 6 · Jointree Algorithms and Feature Trees *(advanced)*
The paper’s novel compilation algorithm uses jointree representations and feature trees to exploit conditional independencies, so understanding these data structures and algorithms is essential.

▶ **Course:** [Learning and Reasoning with Bayesian Networks](https://www.youtube.com/playlist?list=PLlDG_zCuBub6ywAIrM1DfJp8xaeVjyvwx) — UCLA Automated Reasoning Group · 36 videos · 22.2h across 36 episodes

*What to watch:* Watch the first 20 episodes of the 'Learning and Reasoning with Bayesian Networks' playlist by UCLA Automated Reasoning Group, focusing on jointree construction, inference algorithms, and feature tree concepts. These lectures are by the paper's co-author and provide deep insight into the data structures used.

*Move on when you can:* Explain the construction and use of jointrees for Bayesian network inference and describe how feature trees partition features.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on scaling explanations of multi-class Bayesian network classifiers, start by building a strong foundation in probabilistic graphical models and Bayesian networks, focusing on their structure and conditional independence properties. Next, study Bayesian network classifiers and knowledge compilation techniques, which are crucial for the paper's compilation algorithm. Finally, focus on the paper's core contribution: the feature tree guided compilation approach and the authors' own presentation of their work for detailed insights.

### Probabilistic graphical models *(prerequisite)*
Probabilistic graphical models provide the foundational framework for representing and reasoning about uncertainty in complex domains. Understanding their structure, factorization, and inference methods is essential for grasping Bayesian networks and their classifiers.

*How the paper uses it:* Bayesian networks, a type of probabilistic graphical model, form the basis of the classifiers compiled and explained in the paper.

▶ [17 Probabilistic Graphical Models and Bayesian Networks](https://www.youtube.com/watch?v=zCWRTKnOYYg) — Bert Huang · 10 years ago

### Conditional independence in Bayesian networks *(prerequisite)*
Conditional independence is a key property exploited in Bayesian networks to simplify computations and enable efficient inference. Mastering concepts like d-separation and independence criteria is critical to understanding how the paper's feature tree and jointree exploit these properties for scalable compilation.

*How the paper uses it:* The paper's feature tree embedded in a jointree leverages conditional independencies to avoid redundant computations during compilation.

▶ [Lecture 14: Bayes' Nets - Independence](https://www.youtube.com/watch?v=iaY3isLZUGs) — CS188Fall2013 · 1:17:12 · 12 years ago

### Bayesian network classifiers *(prerequisite)*
Bayesian network classifiers extend Bayesian networks for classification tasks, combining probabilistic reasoning with decision-making. Understanding their structure and behavior is necessary to appreciate the challenges and innovations in compiling multi-class classifiers as addressed by the paper.

*How the paper uses it:* The paper generalizes compilation methods from binary to multi-class Bayesian network classifiers and focuses on explaining their decisions.

▶ [Lecture 15A: Compiling Bayesian Network Classifiers](https://www.youtube.com/watch?v=TsxmXBNl8eU) — UCLA Automated Reasoning Group · 44:56

### Knowledge compilation and logical circuits *(prerequisite)*
Knowledge compilation transforms complex logical or probabilistic models into tractable logical circuits like NNF or DNNF, enabling efficient reasoning and explanation. Understanding these circuits and their properties is fundamental to grasping the paper's compilation algorithm output.

*How the paper uses it:* The paper outputs class formulas as OR-decomposable negation normal form (NNF) circuits to enable efficient explanation computation.

▶ [Lecture 8B: DNNF Circuits (Minimization and Structured ...](https://www.youtube.com/watch?v=PaWLYwMLuVc) — UCLA Automated Reasoning Group · 33:39

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on efficiently compiling multi-class Bayesian network classifiers into logical formulas for explanations, start by learning the foundational concepts of probabilistic graphical models and Bayesian networks, which underpin the classifiers. Then, grasp conditional independence in Bayesian networks, a key property exploited for efficiency. Next, study Bayesian network classifiers themselves to understand the model being explained. Finally, learn about knowledge compilation and logical circuits, which are the core techniques used to represent classifier decisions tractably, before exploring the paper's novel feature tree guided compilation method.

### Probabilistic graphical models *(prerequisite)*
Probabilistic graphical models provide a way to represent complex distributions over many variables using graphs, capturing dependencies and independencies visually and mathematically. Understanding these models helps you see how Bayesian networks encode joint probabilities efficiently.

*How the paper uses it:* Bayesian networks, the foundation of the classifiers in the paper, are a type of probabilistic graphical model.

▶ [Probabilistic Graphical Models: Lecture 17](https://www.youtube.com/watch?v=roLA6GKTtEc) — Sarah Schultz · 1:09:17

### Conditional independence in Bayesian networks *(prerequisite)*
Conditional independence means that some variables become independent when you know the value of others, which simplifies reasoning and computation. In Bayesian networks, this property is encoded in the graph structure and is crucial for efficient algorithms.

*How the paper uses it:* The paper exploits conditional independencies via the feature tree embedded in a jointree to reduce redundant computations during compilation.

▶ [What is D-Separation? | Conditional Independence](https://www.youtube.com/watch?v=mv5D2akH25w) — Machine Learning & Simulation · 18:49

### Bayesian network classifiers *(prerequisite)*
Bayesian network classifiers use Bayesian networks to classify data by modeling the probabilistic relationships between features and classes. Understanding how these classifiers work is key to appreciating how their decisions can be explained.

*How the paper uses it:* The paper generalizes compilation methods from binary to multi-class Bayesian network classifiers and focuses on explaining their decisions.

▶ [Lec-8: Naive Bayes Classification Full Explanation with ...](https://www.youtube.com/watch?v=GBMMtXRiQX0) — Gate Smashers · 13:31

### Knowledge compilation and logical circuits *(prerequisite)*
Knowledge compilation transforms complex logical or probabilistic models into tractable circuit representations that allow efficient queries and explanations. Logical circuits like negation normal form (NNF) are used to represent class formulas compactly.

*How the paper uses it:* The paper compiles Bayesian network classifiers into OR-decomposable NNF circuits to enable efficient explanation computation.

▶ [Lecture 8B: DNNF Circuits (Minimization and Structured ...](https://www.youtube.com/watch?v=PaWLYwMLuVc) — UCLA Automated Reasoning Group · 33:39

## Already in your library

- [Bayesian Networks 1 - Inference | Stanford CS221: AI (Autumn ...](https://www.youtube.com/watch?v=U23yuPEACG0) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)
- [Bayesian Network | Introduction and Workshop](https://www.youtube.com/watch?v=mebXoVrfchg) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Scaling the Explanation of Multi-Class Bayesian Network Classifiers." Starting with a beginner-level implementation of the feature tree concept on a small Bayesian network, you then reimplement the core compilation algorithm to produce OR-decomposable NNF circuits and compare runtime against a baseline. Finally, the advanced project extends the method to handle continuous or hybrid Bayesian network classifiers, addressing a key limitation noted by the authors.

### Beginner — Feature Tree Construction and Visualization for Bayesian Network Classifiers
*Effort: a weekend, ~8 hours*

You build a small Python tool that takes a simple discrete Bayesian network classifier and constructs a feature tree (f-tree) embedded in a jointree representation. The tool visualizes the feature tree structure and demonstrates how conditional independencies partition features to guide compilation.

**Why it shows you understood the paper:** This project shows you grasp the paper's key structural innovation—the feature tree—and how it exploits conditional independencies to improve compilation efficiency.

**Grounded in:** Introduction of the feature tree structure to guide compilation and exploit conditional independencies.

**Tech stack:** Python 3.11, networkx, matplotlib

**Data:** You simulate a small discrete Bayesian network classifier with 5-7 features and 3 classes, as no public dataset is provided.

**Build it:**

1. Implement a simple discrete Bayesian network classifier data structure with nodes and conditional probability tables.
2. Construct a jointree representation of the network using standard algorithms.
3. Define and extract a feature tree (f-tree) as a subtree embedded in the jointree that partitions features.
4. Visualize the feature tree and jointree using networkx and matplotlib.
5. Write a README explaining how the feature tree captures conditional independencies and guides compilation.

**Ships as:** A GitHub repo with code to build and visualize feature trees from small Bayesian network classifiers, plus documentation explaining the concept and its role in scalable compilation.

**Stretch goal:** Add an interactive web visualization using React to explore feature trees and jointrees dynamically.

### Intermediate — Reimplementation of Multi-Class BNC Compilation to OR-Decomposable NNF Circuits
*Effort: 2 weekends, ~20 hours*

You reimplement the core compilation algorithm from the paper that compiles multi-class Bayesian network classifiers into OR-decomposable negation normal form (NNF) circuits using feature trees. You apply it to a small benchmark Bayesian network and compare compilation runtime and circuit size against the baseline algorithm from the cited third-party repository https://github.com/AndyShih12/BNC_SDD.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's main algorithmic contribution, its scalability improvements, and how to evaluate compilation performance metrics.

**Grounded in:** Significant improvement in compilation time compared to prior work; Output of class formulas as OR-decomposable NNF circuits enabling efficient computation of explanations.

**Tech stack:** Python 3.11, numpy, networkx, matplotlib

**Data:** Use a small discrete Bayesian network classifier from public benchmarks or simulate one with 10-15 features and 4 classes; baseline runtime comparison uses https://github.com/AndyShih12/BNC_SDD as the baseline implementation.

**Build it:**

1. Study the paper's Algorithm 2 and implement the compilation algorithm that uses feature trees embedded in jointrees.
2. Implement data structures for OR-decomposable NNF circuits and methods to compute explanations from them.
3. Run your implementation on a small multi-class Bayesian network classifier and measure compilation time and circuit size.
4. Run the baseline algorithm from https://github.com/AndyShih12/BNC_SDD on the same network and record metrics.
5. Compare and analyze the results, documenting improvements and limitations.
6. Write a README describing the implementation, evaluation, and insights.

**Verified links from the paper:**

- <https://github.com/AndyShih12/BNC_SDD> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with a working implementation of the multi-class BNC compilation algorithm, scripts to run benchmarks against the baseline, and a report summarizing runtime and circuit size comparisons.

**Stretch goal:** Extend the implementation to output contrastive explanations for multi-class decisions as described in the paper.

### Advanced — Extending Multi-Class BNC Compilation to Hybrid Bayesian Networks with Continuous Features
*Effort: 3+ weeks*

You develop an extension of the paper's compilation algorithm to handle Bayesian network classifiers with continuous or hybrid (discrete + continuous) features. This involves adapting the feature tree construction and compilation steps to incorporate continuous variable representations, possibly via discretization or symbolic approximations, and evaluating the approach on a synthetic hybrid Bayesian network.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of the method and the challenges in scaling explanations to continuous domains.

**Grounded in:** Extending the approach to handle continuous or hybrid Bayesian network classifiers.

**Tech stack:** Python 3.11, numpy, scipy, networkx, matplotlib

**Data:** Synthetic hybrid Bayesian network classifier with a mix of discrete and continuous features, created by you to simulate realistic conditional dependencies.

**Build it:**

1. Review the paper's method and limitations regarding continuous features.
2. Design a strategy to incorporate continuous features, e.g., via discretization or symbolic interval representations.
3. Modify the feature tree construction and compilation algorithm to handle continuous variables accordingly.
4. Implement the extended compilation algorithm and generate OR-decomposable NNF circuits for hybrid networks.
5. Create synthetic hybrid Bayesian network classifiers for evaluation.
6. Evaluate compilation runtime, circuit size, and explanation quality, comparing to the discrete-only baseline.
7. Document challenges, solutions, and potential improvements.

**Ships as:** A GitHub repo with code implementing the extended compilation algorithm for hybrid Bayesian networks, synthetic data generation scripts, evaluation results, and a detailed README discussing the approach and findings.

**Stretch goal:** Explore integration with neural network classifiers by approximating them as Bayesian networks and compiling explanations similarly.
