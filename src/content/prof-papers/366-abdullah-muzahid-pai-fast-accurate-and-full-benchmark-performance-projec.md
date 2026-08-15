---
title: "366 · PAI: Fast, Accurate, and Full Benchmark Performance Projection with AI — Abdullah Muzahid"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-abdullah-muzahid"
source_hash: "09ed0c64af9f5ce3e3721053255d051f98d82bd640665e543179bc0181767dc6"
sequence: 366
generator: "outreach-garden: managed"
---

# 366 · PAI: Fast, Accurate, and Full Benchmark Performance Projection with AI

## At a glance

- **Professor:** Abdullah Muzahid
- **Institution:** Texas A&M University
- **Paper:** [PAI: Fast, Accurate, and Full Benchmark Performance Projection with AI](https://arxiv.org/abs/2603.19330)
- **Authors:** Avery Johnson, Mohammad Majharul Islam, Riad Akram, Abdullah Muzahid
- **Year:** 2026

## Paper overview

This paper presents PAI, a machine learning-based method that quickly and accurately predicts the performance of full benchmarks on modern System-on-Chips (SoCs) without relying on slow, detailed simulators. Using a hierarchical LSTM model trained on microarchitecture independent features, PAI achieves similar accuracy to state-of-the-art simulators but runs thousands of times faster.

### Why it matters

**Research problem:** Traditional cycle-accurate simulators for SoC performance prediction are very slow, require extensive development effort, and are prone to errors. Existing machine learning approaches either depend on detailed simulation data, are slow, inaccurate, or cannot predict full benchmark performance effectively.

**Why it matters:** Fast and accurate performance modeling is critical for designing next-generation SoCs efficiently. Slow simulation tools hinder rapid design iterations and increase development costs, making it challenging to evaluate many design choices and optimize hardware effectively.

**Key contributions:**

- First technique to accurately predict full benchmark performance without relying on detailed simulation or instruction-wise encoding.
- Hierarchical LSTM model that separately processes microarchitecture independent features and hardware configurations.
- Demonstration of fast inference speed—predicting the entire SPEC CPU 2017 benchmark suite in under 3 minutes.
- Comparable accuracy to state-of-the-art simulators with three orders of magnitude faster prediction time.
- Dataset construction method using microarchitecture independent metrics collected at intervals from native machines or ISA emulators.

## About the professor

**Abdullah Muzahid** — Associate Professor, Department of Computer Science and Engineering, Texas A&M University.

Research interests: Computer Architecture and Systems, multiprocessor architecture, parallel programming, programming models, debugging, program analysis and synthesis, Machine Learning

### Research links

- [Faculty/profile page](http://people.tamu.edu/~abdullah.muzahid/index.html)
- [Resolved homepage](https://people.it.tamu.edu/~abdullah.muzahid)
- [CV](https://people.it.tamu.edu/~abdullah.muzahid/files/cv.pdf)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Recurrent Neural Networks and LSTM
**The paper assumes:** recurrent neural networks, long short-term memory networks, sequence modeling in machine learning
**Already in this field?** Skip this entirely if you already understand recurrent neural networks and LSTM architectures in machine learning.

This background focuses on Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) networks, which are central to understanding the hierarchical LSTM model used in the PAI paper for performance prediction. The rigorous course provides a deep, structured university-level treatment of RNNs and LSTMs, while the fast track offers a concise, intuition-driven explainer series that covers the essential concepts quickly and clearly. Choose the rigorous course for a thorough foundation and the fast track for a rapid, clear conceptual overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural Networks / Deep Learning](https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1) — StatQuest with Josh Starmer · 33 videos · 10.9h across 33 episodes

**Watch only this:** Episodes 'Recurrent Neural Networks (RNNs), Clearly Explained!!!' and 'Long Short-Term Memory (LSTM), Clearly Explained', about 40 minutes total — these two episodes succinctly explain the RNN and LSTM concepts needed to understand the paper's model.

*Why it unblocks this paper:* StatQuest's Neural Networks / Deep Learning playlist includes clear, visual, and intuitive explanations of RNNs and LSTMs, making it ideal for quickly grasping the key ideas behind PAI's hierarchical LSTM without deep mathematical detail.

*If you want all of it:* All 33 episodes, about 10.9 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the PAI paper, start by building foundational knowledge on microarchitecture independent metrics and SoC performance simulation, which are critical to grasping the input features and context of the work. Then, study hierarchical LSTM models to comprehend the core machine learning architecture enabling PAI's performance prediction. Finally, focus on the paper's core concept by reviewing talks directly related to PAI's performance prediction approach, prioritizing any author or research group presentations.

### Microarchitecture independent metrics *(prerequisite)*
Understanding microarchitecture independent metrics is essential because these features serve as the input to PAI's hierarchical LSTM model. These metrics abstract away microarchitectural details, enabling the model to generalize across hardware configurations without relying on detailed simulation data.

*How the paper uses it:* PAI uses microarchitecture independent metrics collected from real machines or fast instruction set emulators as input features for its performance prediction model.

▶ [Digital Circuits - Lecture 13: Multi-Cycle Microarchitecture (ETH Zurich, Spring 2017)](https://www.youtube.com/watch?v=rRHaGtUMs_0) — Onur Mutlu Lectures · 9y ago

### SoC performance simulation *(prerequisite)*
Familiarity with traditional SoC performance simulation methods provides context on the limitations that PAI aims to overcome, such as slow simulation speeds and high development effort. This background clarifies why a fast, accurate ML-based approach is valuable.

*How the paper uses it:* PAI addresses the slow and error-prone nature of traditional cycle-accurate SoC simulators by providing a fast and accurate alternative.

▶ [DS3: A System-Level Domain-Specific System-on-Chip Simulation Framework](https://www.youtube.com/watch?v=6wSSc84NtmQ) — IEEEComputerSociety · 6y ago

### Hierarchical LSTM models
Hierarchical LSTM models form the core of PAI's architecture, enabling separate processing of microarchitecture independent features and hardware configurations. Understanding this model type is crucial to grasping how PAI achieves its accuracy and speed.

*How the paper uses it:* PAI's key contribution is a hierarchical LSTM model that improves accuracy over simpler LSTM architectures by handling different input types independently.

▶ [Long Short-Term Memory (LSTM), Clearly Explained](https://www.youtube.com/watch?v=YCzL96nL7j0) — StatQuest with Josh Starmer · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of microarchitecture and SoC performance simulation to grasp the hardware context and traditional challenges. Then learn about Instructions Per Cycle (IPC) as a key performance metric. Next, build intuition on hierarchical LSTM models, the core AI technique used in PAI. Finally, explore the paper's specific approach to fast and accurate SoC benchmark performance prediction using microarchitecture independent metrics and hierarchical LSTM.

### Microarchitecture independent metrics *(prerequisite)*
Microarchitecture independent metrics are hardware-agnostic features that capture program behavior without relying on specific microarchitectural details. Understanding these metrics helps appreciate how PAI generalizes performance prediction across different hardware configurations.

*How the paper uses it:* PAI uses microarchitecture independent metrics as input features to enable accurate and generalizable performance prediction without detailed simulation.

▶ [Lecture 8: Microarchitecture (Spring 2017)](https://www.youtube.com/watch?v=6giEeHR-EJU) — Onur Mutlu Lectures · 9y ago

### SoC performance simulation *(prerequisite)*
System-on-Chip (SoC) performance simulation involves modeling the behavior of integrated hardware components to predict system performance. Traditional simulators are accurate but slow, motivating the need for faster methods like PAI.

*How the paper uses it:* PAI addresses the limitations of slow, cycle-accurate SoC simulators by providing a fast and accurate alternative.

▶ [System on Chip (SoC) Explained](https://www.youtube.com/watch?v=FUhCrWoNA2c) — ALL ABOUT ELECTRONICS · 9y ago

### Instruction per cycle prediction *(prerequisite)*
Instructions Per Cycle (IPC) measures how many instructions a processor executes per clock cycle, serving as a key indicator of CPU performance. Understanding IPC is essential to appreciate what PAI predicts.

*How the paper uses it:* PAI predicts IPC for full benchmarks to evaluate SoC performance quickly and accurately.

▶ [IPC Explained [HINDI] Instructions Per Cycle](https://www.youtube.com/watch?v=MsM5eVH78QI) — Aman James · 24:41 · 7y ago

### Hierarchical LSTM models
Hierarchical LSTM models use multiple layers of Long Short-Term Memory networks to separately process different types of sequential data, improving learning and prediction accuracy. This architecture is central to PAI's success.

*How the paper uses it:* PAI employs a hierarchical LSTM to process microarchitecture independent metrics and hardware configurations separately for better performance prediction.

▶ [Long Short-Term Memory (LSTM), Clearly Explained](https://www.youtube.com/watch?v=YCzL96nL7j0) — StatQuest with Josh Starmer · 3y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the PAI paper's core ideas and contributions. The beginner project focuses on reproducing a key metric from the paper using simple data and tools you already know. The intermediate project involves reimplementing the hierarchical LSTM model on a smaller scale with public or simulated data, comparing accuracy against a baseline. The advanced project extends the method to address one of the paper's stated limitations by incorporating cache miss latency features, showing your ability to innovate beyond the original work.

### Beginner — IPC Prediction Error Visualization for SPEC CPU 2017
*Effort: a weekend, ~8 hours*

You build a small web app or Jupyter notebook that visualizes the average IPC prediction errors reported in the paper for seen and unseen benchmarks from the SPEC CPU 2017 suite. Using static data extracted from the paper's results, you create charts that clearly show the error distribution and inference speed comparison against simulators.

**Why it shows you understood the paper:** This project shows you understand the key performance metrics and trade-offs PAI achieves, including accuracy and speed, and can communicate these results clearly, which is critical for research impact.

**Grounded in:** Key results: "Achieved average IPC prediction error of 9.35% on SPEC CPU 2017 benchmark suite." and "Inference time for full benchmark suite is approximately 2 minutes 57 seconds, about 1000x faster than state-of-the-art simulators."

**Tech stack:** Python 3.11, Jupyter Notebook, Matplotlib, Pandas

**Data:** Use the IPC prediction error statistics and inference time data reported in the paper for SPEC CPU 2017 benchmarks (seen and unseen).

**Build it:**

1. Extract the IPC prediction error values for seen and unseen benchmarks from the paper's text.
2. Create a Pandas DataFrame to hold benchmark names and their corresponding errors.
3. Plot bar charts or box plots showing error distributions for seen vs unseen benchmarks.
4. Add a comparison chart showing inference time of PAI vs state-of-the-art simulators.
5. Write a README explaining the significance of these metrics in the context of the paper.

**Ships as:** A Jupyter notebook or small web app repository with visualizations of IPC prediction errors and inference speed comparisons, plus a README explaining the results.

**Stretch goal:** Add interactive filtering of benchmarks by error magnitude or core count to explore outliers.

### Intermediate — Hierarchical LSTM Model for IPC Prediction on Simulated Benchmark Traces
*Effort: 2 weekends, ~20 hours*

You reimplement the core hierarchical LSTM architecture described in the paper to predict IPC from microarchitecture independent metrics (uAIMs) and hardware configuration features. Since the authors released no code or dataset, you simulate or synthesize a small dataset mimicking uAIM traces and hardware configs for a subset of SPEC CPU 2017 benchmarks or a similar public benchmark. You train your model and compare its IPC prediction accuracy against a simple baseline like a single LSTM or linear regression.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's hierarchical LSTM design into code, understand the input features and training process, and evaluate model accuracy similarly to the paper's methodology.

**Grounded in:** Key contributions: "Hierarchical LSTM model that separately processes microarchitecture independent features and hardware configurations." and "Hierarchical LSTM model outperforms simple LSTM and other baseline models in accuracy and convergence."

**Tech stack:** Python 3.11, PyTorch, NumPy, Pandas, Jupyter Notebook

**Data:** Simulated microarchitecture independent metrics and hardware configuration features for a small subset of SPEC CPU 2017 benchmarks, created based on descriptions in the paper.

**Build it:**

1. Design a data schema for uAIM traces and hardware configuration vectors based on the paper's description.
2. Simulate or synthesize a small dataset with these features and corresponding IPC labels.
3. Implement the hierarchical LSTM model with two separate LSTM modules for uAIMs and hardware configs, followed by a fusion layer.
4. Train the model on the synthetic dataset and evaluate IPC prediction error.
5. Implement a simple baseline model (e.g., single LSTM or linear regression) and compare accuracy.
6. Document your implementation, training process, and results in a README.

**Ships as:** A GitHub repo with code implementing the hierarchical LSTM model, training scripts on synthetic data, baseline comparison, and a report of IPC prediction accuracy.

**Stretch goal:** Incorporate real microarchitecture independent metrics collected from a fast instruction set emulator if accessible, to replace synthetic data.

### Advanced — Extending PAI to Model Cache Miss Latency Effects for Improved IPC Prediction
*Effort: 3+ weeks*

You extend the hierarchical LSTM model by incorporating additional features that capture cache miss latency effects, addressing one of the paper's stated limitations. You design new input features representing cache miss statistics or latency proxies and integrate them into the model architecture or training process. You evaluate whether this extension reduces IPC prediction errors on outlier benchmarks known for complex latency effects, using simulated or publicly available microarchitecture metrics.

**Why it shows you understood the paper:** This project shows you can critically analyze the paper's limitations, design meaningful model improvements, and implement them to push the state of the art, demonstrating readiness for research collaboration.

**Grounded in:** Limitations: "Does not yet fully model underlying causes of performance degradation such as cache miss latencies." and Future directions: "Further study of performance degradation factors like cache miss latency to enhance prediction accuracy."

**Tech stack:** Python 3.11, PyTorch, NumPy, Pandas, Jupyter Notebook, Matplotlib

**Data:** Synthetic or publicly available microarchitecture independent metrics augmented with cache miss latency features for a subset of SPEC CPU 2017 benchmarks or similar workloads.

**Build it:**

1. Research and define features that can represent cache miss latency effects relevant to IPC prediction.
2. Augment your existing synthetic dataset or create a new dataset including these cache-related features.
3. Modify the hierarchical LSTM architecture to accept and process the new features, possibly with an additional LSTM or attention mechanism.
4. Train and validate the extended model, focusing on benchmarks with known latency-related prediction errors.
5. Compare IPC prediction errors before and after the extension, highlighting improvements on outliers.
6. Prepare a detailed README documenting your approach, experiments, and findings.

**Ships as:** A GitHub repository with extended hierarchical LSTM code, augmented dataset, training and evaluation scripts, and a comprehensive report on the impact of modeling cache miss latency.

**Stretch goal:** Explore generalizing the model to heterogeneous architectures by adding features for accelerator types and evaluating cross-architecture prediction accuracy.
