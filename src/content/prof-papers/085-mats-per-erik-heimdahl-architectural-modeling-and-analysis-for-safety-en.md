---
title: "085 · Architectural Modeling and Analysis for Safety Engineering — Mats Per Erik Heimdahl"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mats-per-erik-heimdahl"
source_hash: "d7d1fa5f1bfd3f426d17e4745a8fb0b84a6b957f8721543370760e4cdec494a7"
sequence: 85
generator: "outreach-garden: managed"
---

# 085 · Architectural Modeling and Analysis for Safety Engineering

## At a glance

- **Professor:** Mats Per Erik Heimdahl
- **Institution:** University of Minnesota
- **Paper:** [Architectural Modeling and Analysis for Safety Engineering](https://ntrs.nasa.gov/api/citations/20210017388/downloads/NASA-CR-20210017388.pdf)
- **Authors:** Danielle Stewart, Jing (Janet) Liu, Darren Cofer, Mats Heimdahl, Michael W. Whalen, Michael Peterson
- **Year:** 2021

## Paper overview

This paper presents an extension to the Architecture Analysis and Design Language (AADL) called the Safety Annex, which supports modeling system behavior under failure conditions. It enables independent modeling of component failures and integrates fault behaviors into the nominal system model. The accompanying tool uses model checking to propagate errors and identify minimal fault combinations that can violate safety properties. The approach is demonstrated with a complex example from civil aviation, showing how safety engineers can analyze system resilience and drive design improvements.

### Why it matters

**Research problem:** Traditional safety analysis methods for complex safety-critical systems are time-consuming and often lack precise models of system architecture and software behavior, making it difficult to accurately assess fault propagation and system safety. Existing approaches require explicit error propagation specifications, which can be complex and error-prone.

**Why it matters:** Ensuring safety in critical systems like avionics requires accurate and efficient safety analysis integrated with system design. Improving model-based safety analysis can reduce costs, shorten development cycles, and improve software quality and system safety assurance.

**Key contributions:**

- Close integration of behavioral fault analysis into AADL enabling unified system and safety modeling.
- Support for implicit error propagation through behavioral contracts, reducing need for explicit propagation specifications.
- Modeling of both symmetric and asymmetric (Byzantine) faults.
- Capability to model dependent faults and hardware-software fault bindings.
- Tool support for model checking to verify safety properties and generate minimal cut sets.

## About the professor

**Mats Per Erik Heimdahl** — Professor, Distinguished University Teaching Professor, Computer Science & Engineering, University of Minnesota.

Research interests: software engineering, automated software engineering, software requirements engineering, model-based software development, software validation and verification, software test automation

### Research links

- [Faculty/profile page](https://cse.umn.edu/cs/mats-heimdahl)
- [Identity evidence](http://www.umsec.umn.edu/directory/mats-heimdahl)
- [Professor website](http://www-users.cs.umn.edu/~heimdahl)
- [Lab website](http://crisys.cs.umn.edu/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=a1VRT-wAAAAJ&view_op=list_works&citft=1&email_for_op=cscicomm%40umn.edu&sortby=pubdate)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Architectural Modeling and Analysis for Safety Engineering, start with foundational knowledge of the Architecture Analysis and Design Language (AADL), as it is the base modeling language extended by the Safety Annex. Next, build understanding of model checking techniques for safety verification and fault modeling in safety-critical systems, which are key to analyzing fault propagation and verifying safety properties. Then, study compositional verification methods to appreciate scalability aspects. Finally, focus on the core concept of the Safety Annex extension to AADL and the authors' own talk to grasp their integrated approach to fault and safety modeling.

### Architecture Analysis and Design Language AADL *(prerequisite)*
AADL is the foundational architecture modeling language extended by the Safety Annex in the paper. Understanding AADL's syntax, semantics, and modeling capabilities is essential to grasp how the Safety Annex integrates fault behaviors into system models. The chosen video is a detailed webinar from the Software Engineering Institute, providing an in-depth introduction to AADL with academic rigor.

*How the paper uses it:* AADL is the foundational modeling language extended by the Safety Annex to enable integrated system and safety modeling.

▶ [Architecture Analysis with AADL](https://www.youtube.com/watch?v=h0oZPEXb0q8) — Software Engineering Institute | Carnegie Mellon University · 10 years ago

### Model checking for safety verification *(prerequisite)*
Model checking is the key formal verification technique used in the paper to analyze fault propagation and verify safety properties under fault conditions. A thorough understanding of model checking principles and tools is necessary to appreciate how the Safety Annex approach automates safety analysis. The selected video is a comprehensive tutorial on UPPAAL model checking, suitable for advanced learners.

*How the paper uses it:* Model checking is used by the Safety Annex tool to propagate errors and identify minimal fault combinations violating safety properties.

▶ [Lecture 19 - UPPAAL Model Checking Tutorial [PoM-CPS]](https://www.youtube.com/watch?v=9aCyigaQ_W0) — Madhur Behl · 1:12:11

### Fault modeling in safety-critical systems *(prerequisite)*
Fault modeling is fundamental to representing component failures and their behaviors, which the Safety Annex supports extensively including symmetric and asymmetric faults. Understanding fault types, behaviors, and modeling techniques in safety-critical contexts is crucial. The chosen lecture from NPTEL IIT Kharagpur offers a rigorous academic treatment of fault modeling.

*How the paper uses it:* The Safety Annex supports modeling of both symmetric and asymmetric faults, enabling detailed fault behavior representation.

▶ [Lecture 56: Fault Modeling](https://www.youtube.com/watch?v=DMkpnoQyjRc) — NPTEL IIT Kharagpur · 31:52 · 7 years ago

### Compositional verification methods *(prerequisite)*
Compositional verification methods enable scalable analysis of large system architectures by verifying components hierarchically, a key scalability feature of the Safety Annex approach. Understanding these methods helps in appreciating how the paper addresses complexity challenges. The selected talk from ACM SIGPLAN on compositional verification of concurrent programs provides a research-level perspective.

*How the paper uses it:* The Safety Annex approach improves scalability through compositional verification following the architecture hierarchy.

▶ [[CPP'24] Compositional Verification of Concurrent C Programs ...](https://www.youtube.com/watch?v=_DZYmS04ZEw) — ACM SIGPLAN · 26:45

### Safety Annex extension to AADL
This is the core concept of the paper, presenting the Safety Annex as an extension to AADL that integrates fault and safety modeling within a unified system model. Understanding this extension is critical to grasping the paper's contributions and innovations. The chosen video is a detailed overview from the Software Engineering Institute discussing AADL and toolsets supporting safety-critical system engineering, closely related to the Safety Annex context.

*How the paper uses it:* The Safety Annex is the central method enabling integrated fault and safety modeling within AADL.

▶ [AADL/ACVIP 2021: Overview of AADL and Toolsets to Support the Engineering of Safety-critical System](https://www.youtube.com/watch?v=xyY2MmZQiPo) — Software Engineering Institute | Carnegie Mellon University · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's approach to safety engineering using architectural modeling and formal verification. Start with understanding fault modeling in safety-critical systems to grasp why faults matter, then learn about model checking as the key verification technique. Next, explore compositional verification methods for scalable analysis, followed by the Architecture Analysis and Design Language (AADL) which the paper extends. Finally, focus on the Safety Annex extension to AADL, the paper's core contribution enabling integrated fault and safety modeling.

### Fault modeling in safety-critical systems *(prerequisite)*
Fault modeling explains different types of faults and how they behave in safety-critical systems, which is essential to understand how failures can impact system safety. This foundation helps you appreciate the need for precise fault definitions and their propagation in system models.

*How the paper uses it:* The paper models both symmetric and asymmetric faults and integrates fault behaviors into the system architecture.

▶ [Lecture 56: Fault Modeling](https://www.youtube.com/watch?v=DMkpnoQyjRc) — NPTEL IIT Kharagpur · 31:52 · 7 years ago

### Model checking for safety verification *(prerequisite)*
Model checking is a formal verification technique that systematically explores system states to verify safety properties and detect fault-induced violations. Understanding model checking helps you see how the paper's tool verifies safety properties and identifies minimal fault sets.

*How the paper uses it:* The paper uses model checking to propagate errors and find minimal fault combinations violating safety properties.

▶ [Formal Verification Explained: Model Checking & Program Verification for Beginners](https://www.youtube.com/watch?v=Fj19QyIp1ME) — CodeLucky · 1 year ago

### Compositional verification methods *(prerequisite)*
Compositional verification breaks down complex system verification into smaller parts, improving scalability and manageability. This concept is key to analyzing large architectures efficiently, as done in the paper.

*How the paper uses it:* The paper leverages compositional verification to scale safety analysis to large systems.

▶ [[CPP'24] Compositional Verification of Concurrent C Programs ...](https://www.youtube.com/watch?v=_DZYmS04ZEw) — ACM SIGPLAN · 26:45

### Architecture Analysis and Design Language AADL *(prerequisite)*
AADL is a modeling language for describing system architectures, including hardware and software components. Learning AADL basics is crucial to understand the paper's extension that integrates fault and safety modeling.

*How the paper uses it:* The paper extends AADL with a Safety Annex to model faults and safety behaviors within the system architecture.

▶ [Architecture Analysis with AADL](https://www.youtube.com/watch?v=h0oZPEXb0q8) — Software Engineering Institute | Carnegie Mellon University · 10 years ago

### Safety Annex extension to AADL
The Safety Annex is an extension to AADL that enables integrated modeling of faults and their propagation within the system model, supporting both behavioral and explicit fault modeling. This is the core method introduced by the paper to unify system design and safety analysis.

*How the paper uses it:* The Safety Annex is the paper's main contribution enabling unified fault and safety modeling in AADL.

▶ [AADL/ACVIP 2021: Overview of AADL and Toolsets to Support the Engineering of Safety-critical System](https://www.youtube.com/watch?v=xyY2MmZQiPo) — Software Engineering Institute | Carnegie Mellon University · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the Safety Annex extension to AADL for model-based safety analysis. The beginner project focuses on modeling and simulating simple fault propagation in a small system to grasp the core concept. The intermediate project involves reimplementing the core model checking approach on a simplified avionics-like system to identify minimal fault sets, gaining experience with formal verification tools. The advanced project extends the approach by addressing a stated limitation—automating behavioral contract generation—to reduce modeling effort, which aligns with the paper's future directions and invites research-level exploration.

### Beginner — Simple Fault Propagation Model in AADL Safety Annex
*Effort: a weekend, ~8 hours*

You build a small AADL model of a simple system with a few components and define faults using the Safety Annex concepts. Then you simulate fault propagation through the system behavior using a basic script or tool to visualize how faults affect system outputs.

**Why it shows you understood the paper:** This project shows you understand the Safety Annex's core idea of integrating fault behavior into system architecture and how faults propagate implicitly through component contracts.

**Grounded in:** The Safety Annex enables independent modeling of component failures and integrates fault behaviors into the nominal system model.

**Tech stack:** AADL modeling environment (e.g., OSATE), Python 3.x for scripting, Graphviz or similar for visualization

**Data:** You create a synthetic small system model (3-5 components) with manually defined faults and contracts, simulating a minimal example inspired by the paper's approach.

**Build it:**

1. Install and set up OSATE or another AADL modeling tool supporting the Safety Annex.
2. Create a small system architecture with 3-5 components and define nominal behaviors.
3. Extend the model with Safety Annex fault definitions for components (e.g., stuck-at faults).
4. Write simple Python scripts to parse the model and simulate fault propagation based on contracts.
5. Visualize fault propagation paths and affected outputs using Graphviz.
6. Document the model, fault definitions, and simulation results in the README.

**Ships as:** A GitHub repo containing the AADL model files, simulation scripts, visualizations of fault propagation, and a README explaining the Safety Annex concepts demonstrated.

**Stretch goal:** Add asymmetric fault modeling where faults manifest differently to different observers in the system.

### Intermediate — Model Checking Safety Properties on a Simplified Wheel Brake System
*Effort: 2 weekends, ~20 hours*

You reimplement the core model checking approach described in the paper to verify safety properties under fault conditions on a simplified version of the Wheel Brake System example. You encode component faults, behavioral contracts, and safety properties, then use a model checker to find minimal fault sets violating safety.

**Why it shows you understood the paper:** This project demonstrates you can apply the Safety Annex's compositional verification and minimal cut set generation methods, reproducing key results on fault combinations that violate safety properties.

**Grounded in:** Model checking identifies minimal fault combinations that violate safety properties, such as inadvertent braking.

**Tech stack:** AADL modeling environment (OSATE), AGREE annex for behavioral contracts, Python 3.x, NuSMV or another model checker compatible with AGREE

**Data:** You create a simplified Wheel Brake System model inspired by the paper's example, with fewer components and fault types to keep verification tractable.

**Build it:**

1. Model a simplified Wheel Brake System architecture in AADL with key components and interfaces.
2. Define behavioral contracts for components using the AGREE annex.
3. Specify faults using the Safety Annex, including symmetric and asymmetric faults.
4. Formally specify safety properties to verify (e.g., no inadvertent braking).
5. Translate the model and contracts into the input format for the chosen model checker.
6. Run model checking to identify minimal fault sets violating safety properties.
7. Analyze and document the results, comparing with expected minimal cut sets.

**Verified links from the paper:**

- <https://github.com/loonwerks/AMASE> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the AADL and AGREE models, model checker input files, verification results, and a README explaining the modeling and verification process.

**Stretch goal:** Integrate explicit error propagation for dependent faults and compare verification results with and without this modeling.

### Advanced — Automating Behavioral Contract Generation for Safety Annex Models
*Effort: 3+ weeks*

You develop a tool or framework that assists in automatically generating behavioral contracts for components in AADL Safety Annex models, aiming to reduce the manual effort required. This addresses a key limitation noted in the paper about the complexity of detailed contract and fault definition development.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by exploring automation in contract generation, demonstrating deep comprehension of the Safety Annex modeling challenges and potential improvements.

**Grounded in:** The approach requires detailed behavioral contracts and fault definitions which may be complex to develop. Future directions include enhanced automation for fault definition and behavioral contract generation.

**Tech stack:** Python 3.x, AADL parsing libraries (e.g., OSATE APIs if accessible), Machine learning or rule-based heuristics for contract inference, Docker for environment reproducibility

**Data:** You use synthetic or publicly available small AADL models as input to your tool, simulating contract generation; no proprietary data is required.

**Build it:**

1. Study the structure of behavioral contracts in AADL Safety Annex and how they are manually defined.
2. Implement a parser to read AADL component interfaces and nominal behaviors.
3. Develop heuristics or simple ML models to infer behavioral contracts from component interface and nominal behavior descriptions.
4. Integrate the tool to output contracts in AGREE annex format compatible with Safety Annex models.
5. Validate the generated contracts on small example models by comparing with manually written contracts.
6. Document the tool design, usage instructions, and evaluation results.

**Ships as:** A GitHub repo with the contract generation tool, example input models, generated contracts, and a detailed README describing the approach and evaluation.

**Stretch goal:** Extend the tool to suggest fault definitions and propagate them automatically in the model.

_The paper's authors have not released their own code for the Safety Annex; the intermediate project uses the third-party AMASE tool as a baseline reference but requires reimplementation of core methods._
