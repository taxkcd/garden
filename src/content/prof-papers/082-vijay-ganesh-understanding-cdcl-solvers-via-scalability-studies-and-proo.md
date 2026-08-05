---
title: "082 · Understanding CDCL Solvers via Scalability Studies and Proofdoors — Vijay Ganesh"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vijay-ganesh"
source_hash: "0dbe8aea17234599670dce2ac41b50e1399b46aa8b82bfbd6faa6e5a35932df9"
sequence: 82
generator: "outreach-garden: managed"
---

# 082 · Understanding CDCL Solvers via Scalability Studies and Proofdoors

## At a glance

- **Professor:** Vijay Ganesh
- **Institution:** Georgia Institute of Technology
- **Paper:** [Understanding CDCL Solvers via Scalability Studies and Proofdoors](https://arxiv.org/pdf/2605.15506)
- **Authors:** Shimin Zhang, Yechuan Xia, Chunxiao Li, Jianwen Li, Moshe Y. Vardi, Vijay Ganesh
- **Year:** 2026

## Paper overview

This paper investigates why Conflict-Driven Clause Learning (CDCL) SAT solvers perform efficiently on large industrial Boolean formulas, despite SAT being theoretically intractable. The authors conduct a large-scale scalability study on Bounded Model Checking (BMC) instances and introduce the concept of proofdoors—sequences of interpolants that capture solver reasoning—to explain solver performance differences. They find that classical structural parameters fail to explain solver efficiency, but proofdoors successfully discriminate between linearly and exponentially scaling instances. Additionally, scrambling formulas disrupts solver performance by enlarging proofdoors.

### Why it matters

**Research problem:** Understanding the discrepancy between the theoretical intractability of SAT and the practical efficiency of CDCL SAT solvers on industrial formulas, specifically by systematically studying solver scalability on large industrial BMC instances and identifying structural parameters that explain solver performance.

**Why it matters:** SAT solvers are fundamental tools in software engineering, security, AI, and formal verification. Explaining their practical efficiency despite theoretical hardness can guide the design of better solvers and improve verification capabilities, especially for deep circuit unfolding in BMC.

**Key contributions:**

- Conducted a large-scale scalability study of 766 BMC families (76,600+ instances), revealing a spectrum of CDCL solver scaling behaviors: linear, polynomial, and exponential.
- Demonstrated that classical structural parameters (clause-variable ratio, treewidth, community structure) fail to discriminate between linear and exponential scaling regimes.
- Introduced and empirically validated the proofdoor parameter as a semantic structural measure that explains CDCL solver efficiency by capturing localized reasoning and memoization.
- Showed that CDCL solvers incrementally absorb small proofdoors on linearly-scaling BMC instances but not on exponentially-scaling ones.
- Established that scrambling linear instances enlarges proofdoor sizes and degrades solver performance, linking variable order heuristics to proofdoor size.

## About the professor

**Vijay Ganesh** — Professor, Computer Science, Georgia Institute of Technology.

Research interests: theory and practice of SAT/SMT solvers and their applications in software engineering, security, AI, mathematics, and physics

### Research links

- [Faculty/profile page](https://vganesh1.github.io)
- [Resolved homepage](https://vganesh1.github.io/)
- [Lab website](https://sites.gatech.edu/ai4math-center/)
- [Google Scholar](http://scholar.google.com/citations?hl=en&user=YP23eR0AAAAJ&view_op=list_works&pagesize=100)
- [ORCID](https://orcid.org/0000-0002-6029-2047)
- [DBLP](https://dblp.org/pid/g/VijayGanesh.html)
- [GitHub](https://github.com/vganesh1)
- [LinkedIn](https://www.linkedin.com/in/ganeshvijay/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Understanding CDCL Solvers via Scalability Studies and Proofdoors," start by building a solid foundation on the key prerequisite topics: Conflict-Driven Clause Learning (CDCL) SAT solving, Bounded Model Checking (BMC), and interpolation in SAT/SMT, as these form the technical backbone of the study. After grasping these foundational concepts through advanced university lectures and research talks, focus on the paper's core novel concept of proofdoors, which explains solver efficiency. This learning path culminates with a direct talk by the paper authors or closely related advanced presentations on structural properties and CDCL solver performance to connect theory with the paper's empirical findings.

### Conflict-Driven Clause Learning CDCL *(prerequisite)*
CDCL is the fundamental SAT solving algorithm analyzed in the paper. Understanding its mechanics, including clause learning and conflict analysis, is essential to appreciate how solver efficiency is studied and explained.

*How the paper uses it:* The paper investigates CDCL solver performance and introduces proofdoors to explain their efficiency on industrial BMC instances.

▶ [CDCL SAT Solving and Applications to Optimization Problems](https://www.youtube.com/watch?v=oL_vZ5_ybjk) — Simons Institute for the Theory of Computing · 1:00:30

### Bounded Model Checking BMC *(prerequisite)*
BMC is the application domain from which the paper's large dataset of industrial SAT instances is drawn. Understanding BMC's role in formal verification and how it generates SAT instances is crucial for contextualizing the scalability study.

*How the paper uses it:* The paper conducts a large-scale scalability study on BMC instances to analyze CDCL solver behavior.

▶ [A Crash Course on Model Checking - session 1](https://www.youtube.com/watch?v=qx-d8zZbeTI) — Microsoft Research · 1:04:10

### Interpolation in SAT and SMT *(prerequisite)*
Interpolation techniques are central to defining proofdoors, the paper's novel semantic structural parameter. A solid grasp of interpolation in SAT/SMT helps understand how proofdoors capture solver reasoning.

*How the paper uses it:* Proofdoors are sequences of interpolants used to explain solver performance differences in the paper.

▶ [Local proof transformations for flexible interpolation and proof ...](https://www.youtube.com/watch?v=StkoFbPLPfc) — Лекториум · 1:36:42

### Proofdoors semantic structural parameter
Proofdoors are the paper's key contribution, representing a new semantic structural parameter that explains CDCL solver efficiency beyond classical parameters. Understanding this concept is critical to grasp the paper's theoretical and empirical advances.

*How the paper uses it:* The paper introduces and validates proofdoors as a semantic measure that explains CDCL solver efficiency on BMC instances.

▶ [Algorithmic utilization of structure in SAT instances](https://www.youtube.com/watch?v=WhyS2ONbvsU) — Simons Institute for the Theory of Computing · 5 years ago

### Paper authors talk *(the paper's own talk)*
Direct talks by the authors or closely related presentations provide the most precise and detailed insights into the paper's methodology, findings, and implications. They offer a unique perspective on the novel concept of proofdoors and the scalability study results.

*How the paper uses it:* Hearing the authors' presentation helps understand their novel findings and methods on CDCL solver scalability and proofdoors.

▶ [On Using Structural Properties to Improve CDCL Solver Performance](https://www.youtube.com/watch?v=pR5qAy0ImtA) — Simons Institute for the Theory of Computing · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the fundamentals of Bounded Model Checking (BMC), which is the application domain of the studied SAT instances. Next, grasp the core algorithm Conflict-Driven Clause Learning (CDCL), as it is the solver type analyzed. Then, study interpolation in SAT/SMT, since proofdoors are defined via sequences of interpolants. Finally, explore the novel concept of proofdoors, the semantic structural parameter introduced to explain CDCL solver efficiency on industrial BMC instances.

### Bounded Model Checking BMC *(prerequisite)*
Bounded Model Checking is a formal verification technique that checks the correctness of systems up to a fixed number of steps by encoding the problem as a SAT formula. Understanding BMC helps you see why large industrial SAT instances arise and why their structure matters for solver performance.

*How the paper uses it:* The paper studies CDCL solver scalability specifically on large industrial BMC instances.

▶ [A Crash Course on Model Checking - session 1](https://www.youtube.com/watch?v=qx-d8zZbeTI) — Microsoft Research · 1:04:10

### Conflict-Driven Clause Learning CDCL *(prerequisite)*
CDCL is the leading SAT solving algorithm that combines systematic search with learning from conflicts to prune the search space efficiently. Learning how CDCL works is essential to appreciate how solver heuristics and learned clauses impact performance.

*How the paper uses it:* The paper analyzes the performance and behavior of CDCL solvers on BMC formulas.

▶ [CDCL SAT Solving and Applications to Optimization Problems](https://www.youtube.com/watch?v=oL_vZ5_ybjk) — Simons Institute for the Theory of Computing · 1:00:30

### Interpolation in SAT and SMT *(prerequisite)*
Interpolation in SAT/SMT involves deriving intermediate formulas (interpolants) that explain unsatisfiability between partitions of a formula. This concept is key to understanding proofdoors, which are sequences of such interpolants capturing solver reasoning.

*How the paper uses it:* Proofdoors are defined as sequences of interpolants between formula partitions to explain solver efficiency.

▶ [Z3 Explained - Satisfiability Modulo Theories & SMT Solvers](https://www.youtube.com/watch?v=EacYNe7moSs) — Guided Hacking · 2 years ago

### Proofdoors semantic structural parameter
Proofdoors are a novel semantic structural parameter introduced to explain why CDCL solvers perform efficiently on some industrial formulas. They capture localized reasoning and incremental clause absorption via sequences of interpolants, linking solver behavior to proof complexity.

*How the paper uses it:* The paper introduces and empirically validates proofdoors as the key parameter explaining CDCL solver scalability on BMC instances.

▶ [Algorithmic utilization of structure in SAT instances](https://www.youtube.com/watch?v=WhyS2ONbvsU) — Simons Institute for the Theory of Computing · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper "Understanding CDCL Solvers via Scalability Studies and Proofdoors." Starting from a beginner-level reproduction of solver runtime scaling on a small BMC instance set, progressing to an intermediate project that runs and extends the authors' proofdoor computation tools on public or synthetic BMC CNF formulas, and culminating in an advanced project that explores machine learning approximations of proofdoor structures to address the paper's NP-hardness limitation.

### Beginner — CDCL Solver Runtime Scaling on Small BMC Instances
*Effort: a weekend, ~8 hours*

You build a small-scale experiment to reproduce the paper's core observation that CDCL solver runtimes on BMC CNF instances exhibit linear, polynomial, or exponential scaling. Using a modern CDCL solver (e.g., CaDiCaL or MiniSat) with preprocessing disabled, you generate or obtain a small set of BMC CNF formulas (synthetic or public) with increasing sizes and measure solver runtimes. You then fit simple models (linear, polynomial, exponential) to the runtime data and classify the scaling behavior.

**Why it shows you understood the paper:** This project shows you understand the paper's foundational scalability study methodology and the importance of classifying solver runtime scaling regimes on BMC instances, a key empirical contribution.

**Grounded in:** Conducted a large-scale scalability study of 766 BMC families (76,600+ instances), revealing a spectrum of CDCL solver scaling behaviors: linear, polynomial, and exponential.

**Tech stack:** Python 3.11, CaDiCaL or MiniSat SAT solver, NumPy, Matplotlib, scipy

**Data:** A small set (10-20) of publicly available or synthetically generated BMC CNF formulas with increasing sizes, as a substitute for the paper's large BMC dataset.

**Build it:**

1. Obtain or generate a small set of BMC CNF formulas with increasing problem sizes.
2. Run a CDCL SAT solver (CaDiCaL or MiniSat) on each formula with preprocessing disabled, recording runtimes.
3. Fit linear, polynomial, and exponential models to the runtime data using Python.
4. Classify each instance's scaling behavior based on the best-fitting model.
5. Plot runtime vs. instance size with fitted curves to visualize scaling regimes.
6. Write a README explaining the experiment, results, and connection to the paper.

**Ships as:** A GitHub repo with scripts to run solver experiments, runtime fitting code, plots showing scaling regimes, and a README linking the results to the paper's scalability study.

**Stretch goal:** Add runtime experiments with scrambled versions of the CNF formulas to observe solver slowdown effects.

### Intermediate — Proofdoor Computation and Absorption Analysis on BMC Instances
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' ProofDoorTools repository to compute proofdoors on a manageable subset of BMC CNF instances (either from the paper's released data or synthetic substitutes). You extend the toolchain to analyze clause absorption by the CDCL solver on these instances, reproducing the paper's key metric that small proofdoors are incrementally absorbed on linear scaling instances. You compare proofdoor sizes and absorption heatmaps between linear and exponential scaling instances.

**Why it shows you understood the paper:** This project demonstrates you can operate the authors' core method, understand proofdoor computation and absorption proxies, and reproduce the semantic structural parameter that explains solver efficiency.

**Grounded in:** Introduced and empirically validated the proofdoor parameter as a semantic structural measure that explains CDCL solver efficiency by capturing localized reasoning and memoization.

**Tech stack:** Python 3.11, Git, Linux shell, CaDiCaL SAT solver, matplotlib, numpy

**Data:** Use the authors' released ProofDoorTools code and either their small example BMC CNF instances or synthetically generated BMC CNFs for proofdoor computation.

**Build it:**

1. Clone https://github.com/ShiminZhang/ProofDoorTools and set up the environment.
2. Run the proofdoor computation on a small set of BMC CNF instances (linear and exponential scaling).
3. Run CDCL solver absorption analysis on computed proofdoor clauses to generate absorption heatmaps.
4. Visualize and compare proofdoor sizes and absorption patterns between instance classes.
5. Document the process, results, and how they relate to the paper's findings.

**Verified links from the paper:**

- <https://github.com/ShiminZhang/ProofDoorTools> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run proofdoor computations and absorption analysis, visualizations of proofdoor sizes and absorption heatmaps, and a README explaining the reproduction and insights.

**Stretch goal:** Add a simple baseline comparison using classical structural parameters (clause-variable ratio, treewidth) to show their failure to discriminate scaling regimes.

### Advanced — Machine Learning Approximation of Proofdoor Structures to Guide CDCL Heuristics
*Effort: 3+ weeks*

You develop a machine learning model to predict or approximate proofdoor structures from BMC CNF instance features, addressing the paper's limitation that exact proofdoor computation is NP-hard and often infeasible on large industrial instances. Using features such as variable incidence graphs, clause statistics, and partial interpolants, you train a model on small instances with known proofdoors (from ProofDoorTools) and test its generalization. You then integrate the predicted proofdoor information to guide branching heuristics in a CDCL solver (e.g., prioritize interface variables), evaluating solver runtime improvements on held-out instances.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by combining empirical solver analysis with machine learning to approximate semantic structural parameters, demonstrating deep comprehension and innovation based on the paper.

**Grounded in:** Given that proofdoor computation is NP-hard and challenging on large instances, have you considered integrating machine learning techniques to predict or approximate proofdoor structures to guide solver heuristics more efficiently?

**Tech stack:** Python 3.11, scikit-learn or PyTorch, CaDiCaL SAT solver, networkx, numpy, matplotlib

**Data:** Small BMC CNF instances with computed proofdoors from ProofDoorTools for training; synthetic or public BMC CNFs for testing and evaluation.

**Build it:**

1. Extract graph and clause features from BMC CNF instances with known proofdoors.
2. Train a machine learning model (e.g., random forest or GNN) to predict proofdoor-related metrics or clause importance.
3. Validate model predictions on held-out instances and analyze accuracy.
4. Modify a CDCL solver's branching heuristic to prioritize variables predicted to be in the proofdoor.
5. Evaluate solver runtime on test instances with and without ML-guided heuristics.
6. Document methodology, results, limitations, and relation to the paper's future directions.

**Verified links from the paper:**

- <https://github.com/ShiminZhang/ProofDoorTools> — released by the paper's authors

**Ships as:** A GitHub repo containing ML training and evaluation code, modified solver heuristics scripts, performance comparison plots, and a detailed README discussing the approach and its connection to the paper's limitations and future work.

**Stretch goal:** Extend the ML model to predict proofdoor sizes or absorption likelihood to further refine solver guidance.
