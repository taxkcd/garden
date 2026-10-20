---
title: "834 · Testing Learning-Enabled Cyber-Physical Systems with Large-Language Models: A Formal Approach — Aloysius K. Mok"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aloysius-k-mok"
source_hash: "4d5030ed1f9ee94be9affcc5c09a139a65c21eca4d28d3373ae4a0707e4816e9"
sequence: 834
generator: "outreach-garden: managed"
---

# 834 · Testing Learning-Enabled Cyber-Physical Systems with Large-Language Models: A Formal Approach

## At a glance

- **Professor:** Aloysius K. Mok
- **Institution:** University of Texas at Austin
- **Paper:** [Testing Learning-Enabled Cyber-Physical Systems with Large-Language Models: A Formal Approach](https://arxiv.org/pdf/2311.07377)
- **Authors:** Xi Zheng, Aloysius K. Mok, Ruzica Piskac, Yong Jae Lee, Bhaskar Krishnamachari, Dakai Zhu, Oleg Sokolsky, Insup Lee
- **Year:** 2024

## Paper overview

This paper addresses the challenge of ensuring safety and reliability in cyber-physical systems (CPS) that incorporate machine learning components. Traditional software testing methods are insufficient for these complex systems. The authors propose a formal testing approach that leverages large language models (LLMs) to generate realistic test cases and extract formal specifications, enabling model-based testing to provide stronger safety guarantees. They demonstrate early promising results in autonomous driving scenarios using vision-based LLMs and domain-specific languages to generate and validate test cases.

### Why it matters

**Research problem:** Learning-enabled cyber-physical systems (CPS) integrate machine learning components, making traditional verification and validation methods inadequate to ensure their safety and reliability. The complexity and data-driven nature of these systems pose significant challenges in testing and formal assurance.

**Why it matters:** Learning-enabled CPS are increasingly deployed in critical applications such as autonomous vehicles, delivery drones, and robotic surgeries, where failures can cause fatalities and economic losses. Ensuring their safety is essential to protect users and gain regulatory and public trust.

**Key contributions:**

- A formal testing framework combining LLMs, model learning, and model-based testing tailored for learning-enabled CPS.
- Development of a domain-specific language (DSL) to translate traffic rules into test scenarios for autonomous driving simulations.
- Demonstration of multi-modal LLMs (e.g., LLaVA) to analyze traffic accident images and generate realistic corner cases.
- Integration of the L* learning algorithm with simulators as oracles to iteratively refine system behavior models.
- A coverage-guided fuzzing approach that maximizes failure coverage with formal assurances beyond traditional fuzzers.

## About the professor

**Aloysius K. Mok** — Professor, Quincy Lee Centennial Professor in Computer Sciences, Computer Sciences, University of Texas at Austin.

Research interests: Fault-tolerant hard-real-time systems, system architecture, computer-aided system design tools, and software engineering

### Research links

- [Faculty/profile page](https://www.cs.utexas.edu/users/mok)
- [Professor website](http://www.cs.utexas.edu/users/mok)
- [Lab website](http://www.cs.utexas.edu/users/mok/RTS/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Formal Methods for Cyber-Physical Systems
**The paper assumes:** formal methods, automata theory, temporal logic, model-based testing, and formal verification
**Already in this field?** Skip this entirely if you already have a solid understanding of formal verification techniques and model-based testing for cyber-physical systems.

This background focuses on formal methods essential for understanding the modeling, verification, and testing techniques used in the paper on learning-enabled cyber-physical systems. The rigorous course option provides a deep, structured university-level foundation in formal verification, automata theory, and temporal logic, while the fast track offers a concise, accessible introduction to formal verification concepts suitable for quickly grasping the core ideas without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Formal Methods for System Verification](https://www.youtube.com/playlist?list=PLwdnzlV3ogoU0I4OqKZvuaPc_EoUPifbP) — NPTEL IIT Guwahati · 58 videos

**Watch only this:** Lectures 1-4 and 19-24, about 4.5 hours — covering formal methods introduction, propositional logic, SAT solvers, and LTL syntax and encoding examples to grasp the foundational formal verification techniques used in the paper.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course on Formal Methods for System Verification covers key topics such as temporal logic, model checking, SAT solvers, and formal property verification that directly underpin the paper's use of L* algorithm, temporal logic specifications, and coverage-guided fuzzing with formal guarantees.

*If you want all of it:* About 30.9 hours across 58 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Formal Verification](https://www.youtube.com/playlist?list=PLIua6mMJKgkqT4YllPXgIMkiZvJgkoNu-) — Ankit Jain · 13 videos · 7.8h across 13 episodes

**Watch only this:** Episodes 1-5, about 3 hours — covering an introduction to formal verification, model-based development, and equivalence checking to quickly build intuition on formal methods applied in CPS testing.

*Why it unblocks this paper:* This concise playlist by Ankit Jain provides clear, focused explanations on formal verification, model-based development, and temporal logic, offering an accessible overview of the core formal methods concepts relevant to the paper's approach without requiring a full university course commitment.

*If you want all of it:* About 7.8 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Testing Learning-Enabled Cyber-Physical Systems with Large-Language Models: A Formal Approach," start by building foundational knowledge on learning-enabled cyber-physical systems and the core algorithms like the L* algorithm used for model learning. Then, explore the key testing techniques such as coverage-guided fuzzing and formal model-based testing. Finally, focus on the authors' own seminar talk that directly presents their novel approach combining large language models with formal methods for testing CPS.

### Learning-enabled cyber-physical systems *(prerequisite)*
This section provides foundational understanding of cyber-physical systems that integrate machine learning components, which is critical to grasp the challenges and context of the paper. The selected talk by Gabor Karsai is a rigorous university-level seminar that discusses assurance-based learning-enabled CPS, aligning well with the paper's research problem.

*How the paper uses it:* The paper addresses safety and testing challenges in learning-enabled CPS, making foundational knowledge of such systems essential.

▶ [Gabor Karsai: "Towards Assurance-based Learning-enabled Cyber-Physical Systems"](https://www.youtube.com/watch?v=TPWT-H9HCtE) — Institute for Pure & Applied Mathematics (IPAM) · 40:58 · 5y ago

### Coverage-guided fuzzing *(prerequisite)*
Coverage-guided fuzzing is a key technique in the paper to generate test cases with formal safety guarantees. The selected Microsoft Research talk provides a rigorous and detailed explanation of property-based testing and coverage-guided fuzzing, suitable for an advanced audience.

*How the paper uses it:* The paper employs coverage-guided fuzzing to maximize failure coverage with formal assurances beyond traditional fuzzers.

▶ [Coverage Guided, Property Based Testing](https://www.youtube.com/watch?v=RR6c_fiMfJQ) — Microsoft Research · 47:48 · 7y ago

### Formal model-based testing
Formal model-based testing is the central method used in the paper to generate test cases with formal safety guarantees. The Microsoft Research talk on model-based testing with labeled transition systems is a comprehensive and rigorous resource that aligns well with the paper's approach.

*How the paper uses it:* The paper's model-based testing stage uses formal models to generate test cases ensuring safety properties.

▶ [Model-based testing with labeled transition systems \[1/2\]](https://www.youtube.com/watch?v=5_me9hyAT7E) — Microsoft Research · 1:21:49 · 10y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This is the authors' own seminar talk presenting their recent work on formal testing of learning-enabled CPS using large language models. It directly covers the paper's approach, results, and challenges, making it the most authoritative and relevant resource.

*How the paper uses it:* This talk by James Zheng, a co-author, presents the paper's novel three-stage roadmap and experimental results in detail.

▶ [James Zheng // #SISeminarSeries​​ // July 11, 2025](https://www.youtube.com/watch?v=HIoN6oNlMqw) — Software Institute · 47:39 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper's approach to testing learning-enabled cyber-physical systems (CPS) with large language models (LLMs). We start with the basics of learning-enabled CPS to grasp the system context, then explain how LLMs are applied in system testing. Next, we cover the L* algorithm for formal model learning, followed by coverage-guided fuzzing as a testing technique. Finally, we present formal model-based testing, the core method used in the paper to generate test cases with formal safety guarantees.

### Learning-enabled cyber-physical systems *(prerequisite)*
Learn what cyber-physical systems (CPS) are and how integrating machine learning components creates learning-enabled CPS. This foundation helps understand the complexity and safety challenges these systems face.

*How the paper uses it:* The paper focuses on testing CPS that incorporate machine learning, making traditional methods insufficient.

▶ [Gabor Karsai: "Towards Assurance-based Learning-enabled Cyber-Physical Systems"](https://www.youtube.com/watch?v=TPWT-H9HCtE) — Institute for Pure & Applied Mathematics (IPAM) · 40:58 · 5y ago

### Large language models in system testing *(prerequisite)*
Understand how large language models (LLMs) work and their role in extracting knowledge and generating realistic test scenarios for complex systems. This knowledge is key to appreciating the paper's use of LLMs for test generation and specification extraction.

*How the paper uses it:* The paper leverages multi-modal LLMs to generate test cases and extract formal specifications for CPS testing.

▶ [How Large Language Models (LLMs) Work - Full Explanation | Chapter 04](https://www.youtube.com/watch?v=FCMNnOQiG-k) — Ease With Data · 44:41 · 4mo ago

### Coverage-guided fuzzing *(prerequisite)*
Coverage-guided fuzzing is a testing technique that systematically explores program behaviors to maximize failure detection. Learning this method clarifies how the paper achieves formal safety guarantees through test case generation.

*How the paper uses it:* The paper employs coverage-guided fuzzing to generate test cases that maximize failure coverage with formal assurances.

▶ [Coverage Guided, Property Based Testing](https://www.youtube.com/watch?v=RR6c_fiMfJQ) — Microsoft Research · 47:48 · 7y ago

### Formal model-based testing
Model-based testing uses formal system models to automatically generate test cases, ensuring thorough and rigorous validation. This concept is central to the paper's approach to testing learning-enabled CPS with formal guarantees.

*How the paper uses it:* The paper's core testing framework relies on formal model-based testing to provide stronger safety assurances for CPS.

▶ [Model-based testing with labeled transition systems \[1/2\]](https://www.youtube.com/watch?v=5_me9hyAT7E) — Microsoft Research · 1:21:49 · 10y ago

## Already in your library

- [Applications of AI to the Automated Software Testing of Cyber Physical Systems by Lionel Briand](https://www.youtube.com/watch?v=k5u1vIEoqPM) — also for: Scenic: A Language for Scenario Specification and Data Generation (Daniel J. Fremont)
- [FMAS2022 | Formal Verification for Neural Networks in Autonomous Cyber-Physical Systems](https://www.youtube.com/watch?v=ZHMq8_ZvmNg) — also for: Scenic: A Language for Scenario Specification and Data Generation (Daniel J. Fremont)
- [Cyber Physical Systems Explained](https://www.youtube.com/watch?v=Ec7Gix_mihA) — also for: Scenic: A Language for Scenario Specification and Data Generation (Daniel J. Fremont)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [\[1hr Talk\] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How LLMs Works? - Overview](https://www.youtube.com/watch?v=K45s2PgywvI) — also for: Towards Higher Quality Software Vulnerability Data Using LLM-based Patch Filtering (Hui Chen)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [How LLM Works? Simplified Self Attention | Deep Learning](https://www.youtube.com/watch?v=gsyTL1cq_4o) — also for: Towards Scalable Schema Mapping using Large Language Models (Arash Termehchy)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models from scratch](https://www.youtube.com/watch?v=lnA9DMvHtfI) — also for: Vipera: Blending Visual and LLM-Driven Guidance for Systematic Auditing of Text-to-Image Generative AI (Adam Perer)
- [What Is LLM HAllucination And How to Reduce It?](https://www.youtube.com/watch?v=r0q1n8BJ0QI) — also for: AgroAskAI: A Multi-Agentic AI Framework for Supporting Smallholder Farmers’ Enquiries Globally (Arpita Biswas)
- [Large Language Models Explained! How LLMs Work for ...](https://www.youtube.com/watch?v=RhPKBmeYNuI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [All Machine Learning algorithms explained in 17 min](https://www.youtube.com/watch?v=E0Hmnixke2g) — also for: DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling (Stephanie Wang)
- [Fuzzing Programs to Find Bugs - Computerphile](https://www.youtube.com/watch?v=kaD54VXxGrI) — also for: Fuzzing with Agents? Generators Are All You Need (Rohan Padhye)
- [Fuzzing (fuzz testing) 101: Lessons from cyber security expert Dr. David Brumley](https://www.youtube.com/watch?v=17ebHty54T4) — also for: A Study of the Reliability of Agentic AI-Generated Programs (Barton P. Miller)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's formal testing framework for learning-enabled cyber-physical systems (CPS) using large language models (LLMs). The beginner project focuses on reproducing a key element of the paper's domain-specific language (DSL) for traffic rule translation. The intermediate project involves reimplementing the core multi-modal LLM-based test generation and model learning approach on a simplified autonomous driving simulator scenario. The advanced project extends the paper by addressing one of its stated limitations: improving multi-stage validation of LLM-generated test scenarios using video-based inputs.

### Beginner — Traffic Rule DSL Interpreter
*Effort: a weekend, ~8 hours*

You build a small domain-specific language (DSL) interpreter that translates a subset of traffic rules into formal test scenarios for autonomous driving. This project reproduces the paper's approach of converting human-readable traffic rules into machine-readable specifications using a DSL.

**Why it shows you understood the paper:** This project shows you grasp the paper's contribution of using a DSL to formalize traffic rules for test generation, demonstrating comprehension of how domain knowledge is encoded for formal testing.

**Grounded in:** Development of a domain-specific language (DSL) to translate traffic rules into test scenarios for autonomous driving simulations.

**Tech stack:** TypeScript, Node.js

**Data:** A small manually curated subset of Texas traffic rules (text) simulated as input, inspired by the paper's use of the Texas traffic rule handbook.

**Build it:**

1. Select and extract 5-10 simple traffic rules from a public traffic rule handbook or online source.
2. Design a minimal DSL syntax to represent these rules formally (e.g., stop sign behavior, speed limits).
3. Implement a parser and interpreter in TypeScript that converts DSL statements into JSON test scenario objects.
4. Write example DSL scripts encoding the selected traffic rules.
5. Create a README explaining the DSL design and how it maps to test scenarios.

**Ships as:** A GitHub repo with the DSL parser code, example DSL scripts, and documentation showing how traffic rules are formalized into test scenarios.

**Stretch goal:** Add multi-level validation to check DSL scripts for semantic correctness and reduce errors.

### Intermediate — LLM-Guided Test Scenario Generation and Model Learning
*Effort: 2-3 weekends, ~20 hours*

You implement a simplified version of the paper's three-stage roadmap: use an open-source LLM (e.g., OpenAI GPT-4 or LLaVA if accessible) to generate test scenarios from traffic rule prompts, then apply a basic L* algorithm implementation to learn a formal model of a toy autonomous driving system simulated in a lightweight environment, and finally generate test cases using temporal logic specifications.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core method of combining LLM-based test generation with data-driven model learning and formal model-based testing, reflecting the paper's main technical contribution.

**Grounded in:** The paper proposes a three-stage roadmap involving LLM-based test generation, data-driven model learning, and model-based testing.

**Tech stack:** Python 3.11, OpenAI API or Hugging Face transformers, Automata-lib (for L* algorithm), Temporal Logic library (e.g., Spot or custom)

**Data:** Use a small synthetic dataset of traffic scenarios generated by the LLM from prompts based on the DSL rules; simulate a toy autonomous driving environment (e.g., a grid world with stop signs and pedestrians).

**Build it:**

1. Write prompts to query an LLM to generate diverse traffic test scenarios based on the DSL rules.
2. Implement or reuse an L* algorithm library to learn a finite state machine model of the toy autonomous driving system using membership and equivalence queries simulated via the environment.
3. Define simple temporal logic safety properties (e.g., 'the car must stop at stop signs').
4. Implement coverage-guided fuzzing to generate test cases that explore the learned model and check property violations.
5. Evaluate and compare the number of detected safety violations against a baseline random test generator.
6. Document the pipeline, results, and limitations.

**Ships as:** A GitHub repo with code for LLM-based scenario generation, model learning, and model-based testing on a toy simulator, including evaluation metrics and a detailed README.

**Stretch goal:** Integrate a multi-modal LLM (e.g., LLaVA) to analyze traffic images and generate corner cases.

### Advanced — Video-Based Multi-Stage Validation for LLM-Generated CPS Test Scenarios
*Effort: 3-4 weeks*

You extend the paper by implementing a multi-stage validation pipeline that uses video-based vision encoders integrated with LLMs to analyze traffic incident videos, generate realistic test scenarios, and validate them against formal safety properties. This addresses the paper's future direction of transitioning from image-based to video-based vision encoders to better capture temporal information and improve scenario correctness.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, demonstrating deep understanding of the challenges in LLM hallucination mitigation and formal validation in CPS testing.

**Grounded in:** Transitioning from image-based to video-based vision encoders in LLMs to better capture temporal information in traffic incidents.

**Tech stack:** Python 3.11, OpenCV, PyTorch, Hugging Face transformers (video-capable models), OpenAI API or similar LLM API, Temporal Logic library

**Data:** Use publicly available traffic incident videos from open datasets (e.g., Dashcam footage from public sources) as a substitute for the paper's sensor data.

**Build it:**

1. Collect a small set of traffic incident videos from public datasets or online sources.
2. Use a video-capable vision encoder model (e.g., Video Swin Transformer) to extract temporal features from the videos.
3. Integrate the extracted features with an LLM prompt to generate detailed, temporally-aware test scenarios.
4. Implement a multi-stage validation pipeline that checks generated scenarios against formal temporal logic properties and consistency rules.
5. Evaluate the pipeline's effectiveness in reducing hallucination and improving scenario realism compared to image-based methods.
6. Document the approach, challenges, and results.

**Ships as:** A GitHub repo with code for video-based scenario generation, multi-stage validation, and evaluation, plus a comprehensive README discussing the extension and its impact.

**Stretch goal:** Incorporate privacy-preserving techniques for sensor data handling as an ethical consideration.
