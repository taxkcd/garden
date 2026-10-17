---
title: "732 · Scenic: A Language for Scenario Specification and Data Generation — Daniel J. Fremont"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-daniel-j-fremont"
source_hash: "229c4c55ab6999e980b3bf23b02f8095b45a867b31ddc1ea6ece9698f22fa88a"
sequence: 732
generator: "outreach-garden: managed"
---

# 732 · Scenic: A Language for Scenario Specification and Data Generation

## At a glance

- **Professor:** Daniel J. Fremont
- **Institution:** Univ. of California - Santa Cruz
- **Paper:** [Scenic: A Language for Scenario Specification and Data Generation](https://arxiv.org/pdf/2010.06580)
- **Authors:** Daniel J. Fremont, Edward Kim, Tommaso Dreossi, Shromona Ghosh, Xiangyu Yue, Alberto L. Sangiovanni-Vincentelli, Sanjit A. Seshia
- **Year:** 2020

## Paper overview

This paper introduces Scenic, a domain-specific probabilistic programming language designed to specify and generate scenarios for cyber-physical systems, particularly those using machine learning such as autonomous vehicles. Scenic allows users to define distributions over scenes and agent behaviors, enabling the generation of realistic and varied synthetic data for training, testing, and debugging ML-based systems. The language supports spatial and temporal constraints, dynamic behaviors, and integrates with simulators to produce sensor data like images. The authors demonstrate Scenic's effectiveness by improving a neural network's car detection performance beyond existing synthetic data methods.

### Why it matters

**Research problem:** Machine learning systems in safety-critical cyber-physical domains (e.g., autonomous vehicles) require robust training, testing, and debugging, especially for rare or dangerous scenarios. Collecting real-world data for such cases is costly or infeasible, and naive synthetic data generation often produces unrealistic or invalid scenes.

**Why it matters:** Ensuring the reliability and safety of ML-based cyber-physical systems is crucial as they operate in complex, dynamic environments. Rare events and corner cases can cause failures with serious consequences, so effective methods to generate meaningful training and test data are essential.

**Key contributions:**

- Development of Scenic, a domain-specific probabilistic programming language for scenario specification in ML-based cyber-physical systems.
- A methodology leveraging probabilistic programming to train, test, and debug ML systems via scenario sampling and simulation.
- Domain-specific sampling algorithms that prune the sample space for efficient generation of valid scenes.
- Integration of Scenic with VerifAI for formal specification and falsification of AI-based systems.
- A case study demonstrating Scenic's ability to improve a convolutional neural network's car detection accuracy beyond state-of-the-art synthetic data generation.

## About the professor

**Daniel J. Fremont** — Associate Professor, Computer Science and Engineering, Univ. of California - Santa Cruz.

Research interests: applications of logic in computer science, particularly using automated reasoning to improve the reliability of software, hardware, and cyber-physical systems; formal methods techniques to design and analyze autonomous systems, especially those which use machine learning; algorithmic improvisation; automated theorem proving

### Research links

- [Faculty/profile page](https://people.ucsc.edu/~dfremont)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Probabilistic Programming
**The paper assumes:** probabilistic programming, probabilistic modeling, and scenario sampling
**Already in this field?** Skip this entirely if you already understand the principles and practice of probabilistic programming and how it applies to modeling distributions over complex structured domains.

This background focuses on probabilistic programming, essential for understanding Scenic's approach to specifying distributions over scenarios and agent behaviors in cyber-physical systems. The rigorous course offers a deep, structured foundation in AI principles including probabilistic models, while the fast track provides a concise, intuition-driven introduction to probabilistic programming concepts. Readers can choose the rigorous path for comprehensive mastery or the fast track for a quicker, practical grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS221: Artificial Intelligence: Principles and Techniques | Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rMeDqwS1yFl3j3sR_-MQNEN) — Stanford Online · 20 videos · 24.9h across 20 episodes

**Watch only this:** Lectures 1-4, about 5 hours — covering AI foundations and the first three learning lectures to understand probabilistic reasoning and distributions.

*Why it unblocks this paper:* Stanford CS221 covers foundational AI topics including probabilistic models and reasoning, which underpin the probabilistic programming techniques used in Scenic for scenario specification and sampling.

*If you want all of it:* 24.9 hours across 20 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Probabilistic programming](https://www.youtube.com/playlist?list=PLMf0t9CU8YuxN48OFlap5yCiMD7C1FbSD) — Negar · 10 videos · 7.8h across 10 episodes

**Watch only this:** Episodes 1-3, about 2.5 hours — covering a brief introduction, foundations, and a practical introduction to Bayesian modeling with PyMC.

*Why it unblocks this paper:* This short-form series by Negar provides clear, focused introductions to probabilistic programming and Bayesian modeling, ideal for quickly grasping the core concepts relevant to Scenic without extensive time commitment.

*If you want all of it:* 7.8 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Scenic paper, start with foundational knowledge on probabilistic programming languages, which underpin Scenic's design. Next, explore scenario-based testing in cyber-physical systems and formal methods for autonomous systems to grasp the safety-critical context and verification techniques relevant to Scenic. Then, study domain-specific languages for robotics to appreciate DSL design principles applicable to Scenic. Finally, focus on the core concept of scenario specification and data generation with Scenic itself, prioritizing the authors' own talks for direct insights.

### Probabilistic programming languages *(prerequisite)*
Probabilistic programming languages provide the theoretical and practical foundation for modeling uncertainty and distributions, which Scenic leverages to specify probabilistic scenarios. Understanding this paradigm is essential to appreciate how Scenic enables flexible and expressive scenario generation.

*How the paper uses it:* Scenic is built as a domain-specific probabilistic programming language for scenario specification.

▶ ["An Overview of Probabilistic Programming" by Vikash K. Mansinghka](https://www.youtube.com/watch?v=-8QMqSWU76Q) — Strange Loop Conference · 1:02:55 · 11y ago

### Scenario-based testing cyber-physical systems *(prerequisite)*
Scenario-based testing is a key methodology for validating safety-critical cyber-physical systems, especially those involving machine learning. This background helps contextualize why Scenic's scenario specification and sampling approach is crucial for robust testing and debugging.

*How the paper uses it:* Scenic addresses the challenge of generating realistic scenarios for testing ML-based cyber-physical systems.

▶ [Applications of AI to the Automated Software Testing of Cyber Physical Systems by Lionel Briand](https://www.youtube.com/watch?v=k5u1vIEoqPM) — CS Research Week · 1:24:25 · 7y ago

### Formal methods for autonomous systems *(prerequisite)*
Formal methods provide rigorous techniques for verification and falsification of autonomous systems, complementing Scenic's integration with VerifAI. Understanding these methods clarifies how Scenic contributes to formal analysis workflows for AI-based cyber-physical systems.

*How the paper uses it:* Scenic integrates with VerifAI for formal specification and falsification of AI-based systems.

▶ [FMAS2022 | Formal Verification for Neural Networks in Autonomous Cyber-Physical Systems](https://www.youtube.com/watch?v=ZHMq8_ZvmNg) — Formal Methods Europe · 56:17 · 3y ago

### Domain-specific languages for robotics *(prerequisite)*
Domain-specific languages (DSLs) are specialized programming languages tailored to particular application domains. Studying DSL design principles in robotics informs the understanding of Scenic's language design choices for scenario specification in cyber-physical systems.

*How the paper uses it:* Scenic is a domain-specific language designed for scenario specification in ML-based cyber-physical systems.

▶ ["Everything Old is New Again: Quoted Domain Specific Languages" by Philip Wadler](https://www.youtube.com/watch?v=DlBwJ4rvz5c) — Strange Loop Conference · 41:55 · 11y ago

### Scenario specification and data generation *(paper-talk search result; attribution unverified)*
This core section focuses on Scenic itself, covering how it specifies distributions over scenes and agent behaviors to generate realistic synthetic data for training and testing ML systems. The authors' own talks provide the most direct and detailed exposition of Scenic's design, sampling algorithms, and applications.

*How the paper uses it:* This is the central topic of the paper, presenting Scenic's language and its use for scenario specification and synthetic data generation.

▶ [Parallel and Multi-Objective Falsification with Scenic and VerifAI](https://www.youtube.com/watch?v=rx_RhnUNrVM) — Runtime Verification 2021 · 14:36 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand Scenic, starting from the basics of cyber-physical systems and formal methods, then exploring domain-specific languages and probabilistic programming, and culminating in the core idea of scenario specification and data generation as used in Scenic. The order is designed to build intuition progressively, ensuring a beginner gains context before tackling Scenic's specialized contributions.

### Scenario-based testing cyber-physical systems *(prerequisite)*
Learn what cyber-physical systems (CPS) are and why scenario-based testing is critical for ensuring their safety and reliability. This includes understanding how complex systems like autonomous vehicles interact with the physical world and require rigorous testing methods to handle rare or dangerous scenarios.

*How the paper uses it:* Scenic is designed to specify and generate scenarios for testing ML-based cyber-physical systems like autonomous vehicles.

▶ [Cyber Physical Systems Explained](https://www.youtube.com/watch?v=Ec7Gix_mihA) — The Code Bit · 5:21 · 11mo ago

### Formal methods for autonomous systems *(prerequisite)*
Gain an overview of formal verification and falsification techniques used to ensure the correctness and safety of autonomous systems. This background helps understand Scenic's integration with VerifAI for formal analysis and scenario falsification.

*How the paper uses it:* Scenic integrates with VerifAI to enable formal specification and falsification of AI-based cyber-physical systems.

▶ [Autonomous Systems in the Intersection of Control, Learning, and Formal Methods](https://www.youtube.com/watch?v=-BkLuOA12DA) — Georgia Tech Research · 1:03:26 · 1y ago

### Domain-specific languages for robotics *(prerequisite)*
Understand what domain-specific languages (DSLs) are and how they are designed to simplify programming in specialized domains like robotics. This knowledge clarifies why Scenic, as a DSL, offers readable syntax and domain-tailored constructs for scenario specification.

*How the paper uses it:* Scenic is a domain-specific probabilistic programming language tailored for scenario specification in cyber-physical systems.

▶ ["Everything Old is New Again: Quoted Domain Specific Languages" by Philip Wadler](https://www.youtube.com/watch?v=DlBwJ4rvz5c) — Strange Loop Conference · 41:55 · 11y ago

### Probabilistic programming languages *(prerequisite)*
Explore the paradigm of probabilistic programming, which allows modeling uncertainty and distributions directly in code. This foundation is essential to grasp how Scenic specifies distributions over scenes and agent behaviors probabilistically.

*How the paper uses it:* Scenic builds on probabilistic programming to define distributions over scenes and behaviors for scenario generation.

▶ ["An Overview of Probabilistic Programming" by Vikash K. Mansinghka](https://www.youtube.com/watch?v=-8QMqSWU76Q) — Strange Loop Conference · 1:02:55 · 11y ago

### Scenario specification and data generation
Learn about methods to specify scenarios and generate synthetic data for training and testing machine learning systems, focusing on creating realistic, varied, and valid scenes. This directly relates to Scenic's core capability of producing synthetic data for ML-based cyber-physical systems.

*How the paper uses it:* Scenic enables realistic synthetic data generation by specifying probabilistic scenarios for ML system training and testing.

▶ [Scenic: A Language for Scenario Specification and Scene Generation](https://www.youtube.com/watch?v=aiFRAWlVHhc) — ACM SIGPLAN · 21:51 · 7y ago

## Already in your library

- [On Using Formal Methods For Safe and Robust Robot ...](https://www.youtube.com/watch?v=SQMo7hMPEps) — also for: ConformalNL2LTL: Translating Natural Language Instructions into Temporal Logic Formulas with Conformal Correctness Guarantees (Jyotirmoy Deshmukh)
- [Formal methods with Hillel Wayne](https://www.youtube.com/watch?v=KSkcgIYQy0U) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)
- [18. Domain Specific Languages and Autotuning](https://www.youtube.com/watch?v=bd-mavr5YlA) — also for: A Solver-Aided Hierarchical Language for LLM-Driven CAD Design (Adriana Schulz)
- [Domain-Specific Languages with Martin Fowler](https://www.youtube.com/watch?v=ZfdAwV0HlEU) — also for: A Solver-Aided Hierarchical Language for LLM-Driven CAD Design (Adriana Schulz)
- [Leveraging Public Data for Practical Synthetic Data Generation](https://www.youtube.com/watch?v=thsnoqigE5c) — also for: End-to-end Document Recognition and Understanding with Dessurt (Bryan S. Morse)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of Scenic, the probabilistic programming language for scenario specification and data generation in ML-based cyber-physical systems. The beginner project introduces you to writing simple Scenic scenarios and generating synthetic scenes. The intermediate project involves reimplementing Scenic's core scenario sampling and validation approach to generate and evaluate synthetic data for a perception task, comparing it to a baseline. The advanced project extends Scenic's capabilities by addressing one of its stated limitations, such as supporting richer sensor modalities or integrating with a new simulator, showcasing your ability to innovate beyond the original work.

### Beginner — Write and Run Basic Scenic Scenarios for Synthetic Scene Generation
*Effort: a weekend, ~8 hours*

You write simple Scenic scripts to specify distributions over scenes with spatial constraints and generate synthetic scenes using a Scenic interpreter or a minimal Scenic-like parser you implement. You visualize the generated scenes as 2D plots or simple images to confirm spatial relationships and constraints.

**Why it shows you understood the paper:** This project shows you understand Scenic's core idea of specifying probabilistic distributions over scenes with constraints and how to generate valid samples, demonstrating grasp of the language's syntax and semantics.

**Grounded in:** Development of Scenic, a domain-specific probabilistic programming language for scenario specification in ML-based cyber-physical systems.

**Tech stack:** Python 3.11, matplotlib, basic Scenic interpreter or parser (Python)

**Data:** No external data needed; you generate synthetic scenes from your Scenic scripts.

**Build it:**

1. Study Scenic's syntax and semantics from the paper and supplementary materials.
2. Implement a minimal Scenic parser that can read simple scenario specifications with spatial constraints.
3. Implement a basic sampler that generates scenes by sampling from distributions and enforcing constraints.
4. Visualize generated scenes using matplotlib to show agent positions and spatial relations.
5. Write example Scenic scenarios inspired by the paper's examples, such as cars on roads with constraints.
6. Document your Scenic scripts and generation results in the README.

**Ships as:** A GitHub repo with Scenic scripts, a minimal Scenic parser/sampler, visualization code, and a README explaining the scenarios and showing generated scene images.

**Stretch goal:** Add support for temporal behaviors or simple dynamic agent movements in Scenic scenarios.

### Intermediate — Reimplement Scenic's Scenario Sampling and Evaluate Synthetic Data for Car Detection
*Effort: 2 weekends, ~20 hours*

You reimplement the core Scenic sampling algorithm that prunes the sample space to efficiently generate valid scenes with spatial constraints. Using a public driving simulator like CARLA, you generate synthetic images from sampled scenarios and train a simple car detection model. You compare detection performance on corner cases with and without Scenic-generated data.

**Why it shows you understood the paper:** This project demonstrates your ability to implement Scenic's domain-specific sampling methodology and apply it to improve ML model training with synthetic data, reproducing the paper's key contribution on perception system improvement.

**Grounded in:** Domain-specific sampling algorithms that prune the sample space for efficient generation of valid scenes; Scenic-generated scenarios improved car detection performance on corner cases.

**Tech stack:** Python 3.11, CARLA simulator, PyTorch or TensorFlow, OpenCV, NumPy

**Data:** Synthetic driving scenes generated via CARLA simulator from your Scenic-like scenario sampler; no proprietary datasets used.

**Build it:**

1. Implement Scenic's sampling algorithm to generate valid spatial scenes with constraints efficiently.
2. Integrate your sampler with the CARLA simulator to generate synthetic images of driving scenarios.
3. Train a simple convolutional neural network (CNN) for car detection using baseline synthetic data.
4. Augment training data with Scenic-sampled corner-case scenarios (e.g., overlapping cars) and retrain the CNN.
5. Evaluate and compare detection performance on a test set emphasizing corner cases.
6. Document your methodology, results, and comparisons in the README.

**Verified links from the paper:**

- <https://github.com/carla-simulator/carla> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with your Scenic sampling implementation, CARLA integration scripts, training code, evaluation results, and a README reporting performance improvements.

**Stretch goal:** Add support for dynamic behaviors or temporal constraints in scenario sampling to generate sequences.

### Advanced — Extend Scenic to Support New Sensor Modalities and Simulator Integration
*Effort: 3+ weeks*

You extend Scenic's scenario specification and sampling framework to support richer sensor modalities beyond RGB images, such as LiDAR point clouds or radar data, by integrating with a simulator that provides these sensors (e.g., CARLA or LGSVL). You implement scenario components or specifiers to model sensor-specific constraints and generate corresponding synthetic sensor data. You demonstrate this extension by generating synthetic datasets and evaluating an ML model trained on the new sensor data.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified in the paper, showing your ability to innovate on Scenic's design and apply it to emerging cyber-physical system sensing challenges.

**Grounded in:** Extending Scenic to handle more detailed system dynamics and richer sensor modalities; improving integration with diverse simulators.

**Tech stack:** Python 3.11, CARLA or LGSVL simulator, PyTorch or TensorFlow, Open3D or PCL (for point cloud processing), NumPy

**Data:** Synthetic sensor data (LiDAR, radar) generated from extended Scenic scenarios integrated with a suitable simulator; no real-world datasets required.

**Build it:**

1. Research the APIs and sensor simulation capabilities of CARLA or LGSVL for LiDAR/radar data.
2. Extend your Scenic scenario specification language to include sensor modality specifiers and constraints.
3. Modify the sampling and scenario generation pipeline to produce scenes compatible with the new sensors.
4. Integrate the extended Scenic with the simulator to generate synthetic sensor data.
5. Train and evaluate an ML model (e.g., for object detection) using the new synthetic sensor data.
6. Document your extensions, integration process, and evaluation results in the README.

**Verified links from the paper:**

- <https://github.com/carla-simulator/carla> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/BerkeleyLearnVerify/VerifAI> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with extended Scenic code, simulator integration scripts, synthetic sensor data generation, ML training/evaluation code, and detailed documentation.

**Stretch goal:** Develop reusable libraries of scenario components and behaviors for the new sensor modalities.
