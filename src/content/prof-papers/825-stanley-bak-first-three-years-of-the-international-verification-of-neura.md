---
title: "825 · First three years of the international verification of neural networks competition (VNN-COMP) — Stanley Bak"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stanley-bak"
source_hash: "d049ddb1d932b69bc6ea0e585f469efcd0a6cd720144dda38b4edc70da22ff17"
sequence: 825
generator: "outreach-garden: managed"
---

# 825 · First three years of the international verification of neural networks competition (VNN-COMP)

## At a glance

- **Professor:** Stanley Bak
- **Institution:** Stony Brook University
- **Paper:** [First three years of the international verification of neural networks competition (VNN-COMP)](https://link.springer.com/content/pdf/10.1007/s10009-023-00703-4.pdf)
- **Authors:** Christopher Brix, Mark Niklas Müller, Stanley Bak, Taylor T. Johnson, Changliu Liu
- **Year:** 2023

## Paper overview

This paper summarizes the first three years (2020-2022) of the International Verification of Neural Networks Competition (VNN-COMP), which compares software tools that verify whether neural networks meet specified safety and robustness properties. It discusses the competition's goals, benchmark categories, evaluation methods, results, and trends, highlighting the growing complexity of networks and verification challenges, and outlines future directions to improve tool comparison, tuning, and soundness evaluation.

### Why it matters

**Research problem:** Neural networks are increasingly used in safety-critical applications but are vulnerable to adversarial perturbations that can cause incorrect outputs. Verifying that neural networks satisfy safety and robustness specifications is challenging due to network complexity and the diversity of verification tools and benchmarks.

**Why it matters:** Ensuring the robustness and safety of neural networks is crucial before deploying them in critical domains such as autonomous systems, image classification, and control systems, where failures can have severe consequences.

**Key contributions:**

- Standardization of neural network and specification formats to facilitate tool interoperability.
- Creation of a diverse set of benchmarks covering various network architectures and application domains.
- Development of an automated, fair evaluation framework using cost-equivalent hardware.
- Meta-analysis of tool performance trends over three years, showing increasing network complexity and the shift towards GPU-accelerated, branch-and-bound methods.
- Recommendations for future competition improvements, including continuous evaluation, soundness assessment, and batch processing.

## About the professor

**Stanley Bak** — Associate Professor, Department of Computer Science, Stony Brook University.

Research interests: verification of autonomy, cyber-physical systems, and neural networks

### Research links

- [Faculty/profile page](https://ai.stonybrook.edu/people/faculty/StanleyBak)
- [Identity evidence](http://stanleybak.com)
- [Google Scholar](https://scholar.google.com/citations?user=IzNAqc8AAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Neural Network Verification
**The paper assumes:** foundations of neural network verification, formal specification of neural network properties, and verification algorithms for neural networks
**Already in this field?** Skip this entirely if you already understand how neural network verification works, including its problem formulations and common solution methods.

To understand the verification of neural networks as discussed in the VNN-COMP paper, it is essential to grasp the fundamentals of neural network architectures, their behavior, and the challenges in verifying their safety and robustness properties. The rigorous course provides a structured, in-depth foundation on convolutional neural networks, which are a core architecture type in verification benchmarks, while the fast track offers a concise, focused introduction to neural networks on FPGA hardware, including verification aspects relevant to practical implementations. Choose the rigorous course for a deep theoretical and practical understanding, or the fast track for a quicker, intuition-driven overview that touches on verification concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Convolutional Neural Networks (Course 4 of the Deep Learning Specialization)](https://www.youtube.com/playlist?list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF) — DeepLearningAI · 42 videos · 6.0h across 42 episodes

**Watch only this:** lectures C4W1L01 through C4W1L11 (Computer Vision to Why Convolutions), about 1.5 hours — these cover core CNN concepts and architectures relevant to verification.

*Why it unblocks this paper:* This DeepLearningAI course on Convolutional Neural Networks covers foundational concepts of neural network architectures, including layers, activations, and practical examples, which are crucial to understanding the networks verified in VNN-COMP. It provides a rigorous, structured approach to the subject, enabling comprehension of the benchmarks and verification challenges discussed in the paper.

*If you want all of it:* all 42 episodes, about 6.0 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural Networks on FPGA](https://www.youtube.com/playlist?list=PLJePd8QU_LYKZwJnByZ8FHDg5l1rXtcIq) — Piero Nexus · 12 videos · 3.6h across 12 episodes

**Watch only this:** episodes 1 through 7 (Introduction to Verification), about 2.1 hours — covering basic neural network design and verification concepts.

*Why it unblocks this paper:* This concise series by Piero Nexus focuses on neural networks implemented on FPGA hardware, including a dedicated episode on verification, providing a practical and intuition-first perspective on neural network verification challenges relevant to the paper's focus on tool evaluation and hardware acceleration.

*If you want all of it:* all 12 episodes, about 3.6 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on the first three years of the International Verification of Neural Networks Competition (VNN-COMP), start by building foundational knowledge on formal methods for safety verification and branch-and-bound optimization methods, which underpin the verification tools evaluated in the competition. Then, explore benchmarking and evaluation frameworks to grasp how tools are fairly compared. Finally, focus on the core concept of neural network verification methods, emphasizing the authors' own talk to gain direct insights into their approaches and findings.

### Formal methods for safety verification *(prerequisite)*
Formal methods provide the foundational theoretical and practical techniques used to verify safety properties in complex systems, including neural networks. Understanding these methods is crucial as they underpin the verification tools assessed in VNN-COMP, ensuring correctness and reliability in safety-critical applications.

*How the paper uses it:* The paper discusses verification tools that rely on formal methods to assess neural network safety and robustness.

▶ [Using Formal Methods in Safety Verification](https://www.youtube.com/watch?v=CBxj39-_Q0E) — Mike Bartley · 12y ago

### Branch-and-bound optimization methods *(prerequisite)*
Branch-and-bound is a key algorithmic approach used by top-performing neural network verification tools in VNN-COMP to efficiently explore large search spaces and tighten verification bounds. A solid understanding of this method is essential to appreciate the computational strategies that enable scalable verification.

*How the paper uses it:* Top-performing tools in the competition increasingly use branch-and-bound approaches for tighter MILP encodings.

▶ [Branch and Bound - Algorithms Part 13](https://www.youtube.com/watch?v=MHFxqL0mtQg) — VarPi · 1y ago

### Benchmarking and evaluation frameworks *(prerequisite)*
Benchmarking and evaluation frameworks are critical for fairly comparing verification tools across diverse neural network problems. Understanding these frameworks helps contextualize the competition's methodology for standardized scoring, hardware usage, and automated evaluation pipelines.

*How the paper uses it:* The paper emphasizes the creation of an automated, fair evaluation framework using cost-equivalent hardware and standardized formats.

▶ [Lec 62 Evaluation, Benchmarking, and Impact of Foundation Models](https://www.youtube.com/watch?v=1zEHHDlB_r0) — NPTEL - Indian Institute of Science, Bengaluru · 7mo ago

### Neural network verification methods *(paper-talk search result; attribution unverified)*
This core concept covers the specialized techniques and tools developed to verify safety and robustness properties of neural networks. Focusing on the authors' own talk provides direct insight into their research contributions, methodologies, and the evolution of verification approaches within VNN-COMP.

*How the paper uses it:* The paper summarizes the competition that evaluates various neural network verification methods and tools.

▶ [HCSS 2020 talk "Geometric Path Enumeration Methods for Verifying ReLU Neural Networks"](https://www.youtube.com/watch?v=kfpwZkT-Tzw) — Stanley Bak · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the verification of neural networks as discussed in the VNN-COMP paper. Starting with the basics of adversarial robustness to grasp why verification matters, it then covers formal methods for safety verification and branch-and-bound optimization techniques that underpin top verification tools. Finally, it presents the core concept of neural network verification methods and the benchmarking frameworks used to evaluate these tools in the competition.

### Adversarial robustness in neural networks *(prerequisite)*
Learn why neural networks can be vulnerable to small input changes called adversarial perturbations that cause incorrect outputs. Understanding this challenge motivates the need for verification to ensure network safety and robustness.

*How the paper uses it:* The paper focuses on verifying neural networks to guarantee robustness against adversarial perturbations in safety-critical applications.

▶ [Lecture 10.1 - Adversarial Robustness in Deep learning](https://www.youtube.com/watch?v=2iNDmQ67Ve8) — UCF CRCV · 2y ago

### Formal methods for safety verification *(prerequisite)*
Formal methods provide mathematically rigorous techniques to prove system properties like safety and correctness. These methods form the foundation of the verification tools evaluated in the competition.

*How the paper uses it:* The competition evaluates tools based on formal verification methods that ensure neural networks meet specified safety properties.

▶ [Using Formal Methods in Safety Verification](https://www.youtube.com/watch?v=CBxj39-_Q0E) — Mike Bartley · 12y ago

### Branch-and-bound optimization methods *(prerequisite)*
Branch-and-bound is an algorithmic technique to efficiently solve complex optimization problems by systematically exploring and pruning the search space. It is widely used in verification tools to handle large neural networks.

*How the paper uses it:* Top-performing verification tools in VNN-COMP use branch-and-bound methods to improve scalability and precision.

▶ [Branch and Bound - Algorithms Part 13](https://www.youtube.com/watch?v=MHFxqL0mtQg) — VarPi · 1y ago

### Neural network verification methods
This concept covers how verification tools check if neural networks satisfy safety and robustness specifications, using techniques like constraint solving and layer-by-layer analysis.

*How the paper uses it:* The paper surveys various verification methods submitted to the competition and their evolving strategies.

▶ [An Introduction to Formal Verification Methods for Neural Networks](https://www.youtube.com/watch?v=kINfn-ZYiLY) — MATLAB · 1y ago

### Benchmarking and evaluation frameworks
Benchmarking frameworks define standardized tests and scoring rules to fairly compare verification tools. Understanding this helps appreciate how the competition measures tool performance and progress.

*How the paper uses it:* VNN-COMP uses standardized benchmarks and automated evaluation pipelines to compare verification tools fairly.

▶ [Why Benchmarks Matter: Building Better AI Evaluation Frameworks](https://www.youtube.com/watch?v=L5EsXvMxvEc) — Label Studio · 10mo ago

## Already in your library

- [α,β-CROWN: A Formal Verification Framework for Neural Networks - Prof. Huan Zhang, UIUC](https://www.youtube.com/watch?v=xCuY97ywyCc) — also for: Two-Stage Learning of Stabilizing Neural Controllers via Zubov Sampling and Iterative Domain Expansion (Huan Zhang)
- [What is Neural Network Verification?](https://www.youtube.com/watch?v=1LcJk5UHpTo) — also for: Deductive Closure Training of Language Models for Coherence, Accuracy, and Updatability (Jacob Andreas)
- [Formal Verification Explained: Model Checking & Program Verification for Beginners](https://www.youtube.com/watch?v=Fj19QyIp1ME) — also for: Architectural Modeling and Analysis for Safety Engineering (Mats Per Erik Heimdahl)
- [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the VNN-COMP paper by progressively engaging with the competition's core ideas: standardization and benchmarking of neural network verification tools, evaluation of verification methods on benchmarks, and addressing a key limitation in the competition's evaluation methodology. Each project leverages your existing software engineering and applied ML skills while introducing new concepts relevant to neural network verification and benchmarking.

### Beginner — VNN-COMP Benchmark Format Explorer
*Effort: a weekend, ~8 hours*

You build a small tool that parses and visualizes the ONNX neural network format and VNN-LIB specification format used in VNN-COMP benchmarks. The tool will allow loading a small neural network and its safety property specification, then display a summary of the network architecture and the property constraints in a human-readable form.

**Why it shows you understood the paper:** This project shows you understand the importance of standardization in VNN-COMP and how neural networks and their verification properties are represented, a foundational step for any verification tool.

**Grounded in:** Standardization of neural network and specification formats to facilitate tool interoperability.

**Tech stack:** Python 3.11, onnx Python package, PySimpleGUI or Streamlit for UI

**Data:** Use a small ONNX neural network and VNN-LIB property specification from publicly available VNN-COMP benchmarks or create a minimal synthetic example following the format specifications.

**Build it:**

1. Install the onnx Python package and familiarize yourself with ONNX model loading.
2. Write a parser to read a small ONNX model file and extract its layer types and sizes.
3. Implement a parser for a simple VNN-LIB property file to extract the safety or robustness constraints.
4. Build a simple UI to display the network architecture and property constraints in a readable format.
5. Test your tool on a minimal example network and property, verifying correct parsing and display.

**Verified links from the paper:**

- <https://github.com/onnx/onnx> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the parsing tool, example input files, and a README explaining how to load and visualize VNN-COMP benchmark formats.

**Stretch goal:** Add support to compare two networks or properties side-by-side to highlight differences.

### Intermediate — Reimplementation of VNN-COMP Evaluation Metrics
*Effort: 1-3 weekends*

You implement a simplified evaluation framework that runs a neural network verification tool (or a mock verifier) on a small set of benchmark instances, measures verification time and correctness, and computes scoring metrics similar to those used in VNN-COMP. You compare your results against a simple baseline verifier that always times out or returns unknown.

**Why it shows you understood the paper:** This project demonstrates your grasp of the competition's core evaluation methodology, including benchmarking, scoring rules, and the challenges of fair tool comparison on standardized hardware.

**Grounded in:** Development of an automated, fair evaluation framework using cost-equivalent hardware and standardized scoring.

**Tech stack:** Python 3.11, pytest for testing, Docker for environment standardization

**Data:** Use a small subset of publicly available or synthetic ONNX networks and VNN-LIB properties as benchmark instances. Since no official code is released, you simulate verification results.

**Build it:**

1. Design a simple benchmark runner that accepts a verifier executable or script and a benchmark instance (network + property).
2. Implement timing and resource measurement for each verification run with per-instance timeouts.
3. Define scoring rules inspired by VNN-COMP (e.g., points for correct SAT/UNSAT, penalties for timeouts or errors).
4. Create a mock verifier that randomly returns SAT, UNSAT, or timeout to simulate tool behavior.
5. Run your evaluation framework on the mock verifier and a baseline that always times out, then report scores and runtimes.
6. Document the evaluation process and scoring in a README.

**Ships as:** A GitHub repo with the evaluation framework code, mock verifier scripts, example benchmarks, and a report comparing mock verifier and baseline scores.

**Stretch goal:** Integrate a simple real verifier from a third-party tool (e.g., a basic MILP solver) to replace the mock verifier.

### Advanced — Batch Verification Extension for VNN-COMP Evaluation
*Effort: a few weeks*

You extend the intermediate evaluation framework to support batch processing of multiple properties per network, reflecting the paper's future direction to better model practical verification scenarios. You implement batch scheduling, measure cumulative runtimes, and analyze how batch verification affects scoring and tool efficiency compared to isolated runs.

**Why it shows you understood the paper:** This project addresses a stated limitation and future direction in the paper, showing your ability to extend the competition's evaluation methodology to a more realistic use case and analyze its impact.

**Grounded in:** Enable batch processing of multiple properties per network to better reflect practical use cases.

**Tech stack:** Python 3.11, Docker, pytest, pandas for analysis

**Data:** Use the same synthetic or small public benchmark instances as in the intermediate project, grouped into batches of properties per network.

**Build it:**

1. Modify the evaluation framework to accept batches of properties for a single network and run verification sequentially or in parallel.
2. Implement batch scheduling logic and cumulative runtime measurement.
3. Run experiments comparing batch verification to isolated verification on the same benchmarks.
4. Analyze and visualize the impact on scoring, runtime, and resource usage.
5. Write a detailed README documenting the batch verification extension, results, and implications for VNN-COMP.
6. Optionally, propose heuristics for batch scheduling or tool tuning automation.

**Ships as:** A GitHub repo with the extended evaluation framework supporting batch verification, experimental results, and analysis in the README.

**Stretch goal:** Incorporate soundness evaluation heuristics or proof generation stubs as suggested future directions.
