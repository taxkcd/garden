---
title: "359 · Reverse Designing Ferroelectric Capacitors with Machine Learning-based Compact Modeling — Ahmedullah Aziz"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ahmedullah-aziz"
source_hash: "63c3681450fed53dbebbce4b44598daa84284127c49eb1b17531989e391cafe4"
sequence: 359
generator: "outreach-garden: managed"
---

# 359 · Reverse Designing Ferroelectric Capacitors with Machine Learning-based Compact Modeling

## At a glance

- **Professor:** Ahmedullah Aziz
- **Institution:** University of Tennessee
- **Paper:** [Reverse Designing Ferroelectric Capacitors with Machine Learning-based Compact Modeling](https://doi.org/10.1063/5.0304931)
- **Authors:** Diego Ferrer, Jack Hutchins, Revanth Koduru, Sumeet Kumar Gupta, Ahmedullah Aziz
- **Year:** 2025

## Paper overview

This paper presents two algorithms that use machine learning models to quickly and accurately find the physical parameters of ferroelectric capacitors needed to achieve desired electrical behaviors. The approach replaces slow traditional simulations with fast neural network models, enabling efficient device design.

### Why it matters

**Research problem:** Traditional physics-based device simulations and compact models are computationally intensive and slow, making iterative device design and parameter optimization impractical, especially for complex devices like ferroelectric capacitors.

**Why it matters:** Efficient and accurate device parameter optimization is critical for developing advanced electronic devices such as ferroelectric field-effect transistors and memory technologies. Faster methods enable rapid prototyping and innovation in nanoelectronics and low-power electronics.

**Key contributions:**

- Development of a neural network-based compact model accurately predicting ferroelectric capacitor behavior across parameter variations.
- Introduction of two reverse-design algorithms (Bayesian and gradient-based) that efficiently find device parameters for specified electrical targets.
- Demonstration that the gradient-based algorithm consistently outperforms the Bayesian method in accuracy and reliability.
- Quantitative comparison showing machine learning-based methods achieve up to 14,000 times speedup over traditional phase-field simulations.

## About the professor

**Ahmedullah Aziz** — Assistant Professor, Electrical Engineering and Computer Science, University of Tennessee.

### Research links

- [Faculty/profile page](http://nordic-eecs.utk.edu/people/)
- [Identity evidence](https://eecs.utk.edu/people/ahmedullah-aziz)
- [Identity evidence](http://nordic-eecs.utk.edu/)
- [Identity evidence](https://scholar.google.com/citations?user=T57WOKEAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Machine Learning for Device Modeling
**The paper assumes:** machine learning for physical device modeling, neural network regression, gradient-based optimization in engineering
**Already in this field?** Skip this entirely if you already understand how machine learning models are trained and applied to simulate and optimize physical electronic devices.

This background focuses on machine learning fundamentals essential for understanding neural network-based compact modeling and optimization algorithms used in device parameter extraction for ferroelectric capacitors. The rigorous course option offers a comprehensive university-level introduction to machine learning concepts, while the fast track provides a concise, intuition-driven explanation of neural networks and backpropagation, enabling efficient grasp of core ideas without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-2 and 10-11, about 4.3 hours — covering linear regression, gradient descent, introduction to neural networks, and backpropagation to understand model training and gradient-based optimization.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative, broad introduction to machine learning covering supervised learning, neural networks, gradient descent, and optimization techniques, directly relevant to the ML-based compact modeling and reverse-design algorithms in the paper.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 1-4, about 1.4 hours — covering what neural networks are, gradient descent, and backpropagation intuitively and mathematically.

*Why it unblocks this paper:* 3Blue1Brown's Neural Networks series provides clear, visual, and intuitive explanations of neural networks and backpropagation, the core algorithms behind the paper's ML models and gradient-based optimization, making it ideal for a quick yet deep conceptual understanding.

*If you want all of it:* 3.6 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on reverse designing ferroelectric capacitors using machine learning-based compact modeling, start by grasping the foundational simulation technique of phase-field methods, which underpin the training data generation. Next, build a solid understanding of ferroelectric capacitor physics to appreciate the device behavior being modeled. Then, study machine learning approaches for device modeling to comprehend the core methodology replacing slow simulations. Finally, explore reverse design optimization algorithms to understand the parameter extraction methods, and conclude with the paper authors' own talks or closely related academic presentations for direct insights into their novel contributions.

### Phase-field simulation methods *(prerequisite)*
Phase-field simulation is the foundational physics-based technique used to generate the training data for the machine learning compact model in the paper. Understanding this method provides insight into the computational challenges the authors aim to overcome with ML.

*How the paper uses it:* The paper trains its neural network compact model on phase-field simulation data of Metal-Ferroelectric-Metal capacitors.

▶ [Phase field modelling of microstructure in multicomponent alloys](https://www.youtube.com/watch?v=w2Mgtdm702k) — bhadeshia123 · 1:07:37

### Ferroelectric capacitor physics *(prerequisite)*
A thorough understanding of ferroelectric capacitor physics is essential to appreciate the device behavior and electrical characteristics that the ML model aims to replicate and optimize.

*How the paper uses it:* The paper focuses on modeling and reverse designing Metal-Ferroelectric-Metal capacitors, requiring knowledge of their physical operation.

▶ [Interplay between polarization switching & charge trapping in ...](https://www.youtube.com/watch?v=dvn7sFVfhsM) — Institut Català de Nanociència i Nanotecnologia · 43:46

### Machine learning for device modeling *(prerequisite)*
Machine learning techniques form the core approach to replacing slow phase-field simulations with fast neural network models, enabling rapid device parameter optimization.

*How the paper uses it:* The authors develop a neural network-based compact model to predict ferroelectric capacitor behavior efficiently.

▶ [Lecture 10: Machine Learning 1](https://www.youtube.com/watch?v=yRidjbRzuns) — Zico Kolter · 1:20:14

### Reverse design optimization algorithms
Reverse design optimization algorithms are central to the paper's methodology, enabling efficient extraction of device parameters that achieve target electrical characteristics using the ML model.

*How the paper uses it:* The paper introduces two reverse-design algorithms—Bayesian optimization and gradient-based methods—to identify device parameters.

▶ [Inverse Optimization: Applications, Models, and Algorithms ...](https://www.youtube.com/watch?v=ux2ClmtlOmE) — GERAD Research Center · 55:00

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's approach to reverse designing ferroelectric capacitors using machine learning. It starts with the physics of ferroelectric capacitors to build intuition about the device behavior, then covers phase-field simulation methods which generate the training data for the ML model. Next, it explains machine learning for device modeling to understand how neural networks replace slow simulations, and finally introduces reverse design optimization algorithms that enable efficient parameter extraction for target device characteristics.

### Ferroelectric capacitor physics *(prerequisite)*
Learn the basic physical principles and behavior of ferroelectric capacitors, including polarization switching and their unique electrical properties. This foundation helps you understand what device characteristics the paper's models aim to replicate and optimize.

*How the paper uses it:* The paper models the electrical behavior of Metal-Ferroelectric-Metal capacitors, so understanding their physics is essential.

▶ [When Capacitance Turns Negative: The Ferroelectric Revolution](https://www.youtube.com/watch?v=OygzAYmv5PM) — AI Labs: Nanotechnology · 11:11 · 9 months ago

### Phase-field simulation methods *(prerequisite)*
Phase-field simulations numerically model complex physical phenomena like ferroelectric domain evolution. This method generates the detailed training data used to teach the machine learning model how the capacitor behaves under different parameters.

*How the paper uses it:* The ML compact model is trained on phase-field simulation data of ferroelectric capacitors.

▶ [Phase-Field Methods explained (quickly!)](https://www.youtube.com/watch?v=sadtiJRWS3Q) — Rohith KMS · 3 years ago

### Machine learning for device modeling *(prerequisite)*
Understand how machine learning, especially neural networks, can approximate complex physical simulations quickly and accurately. This enables replacing slow phase-field simulations with fast predictive models for device behavior.

*How the paper uses it:* The core approach uses neural networks to create a compact model that predicts device behavior orders of magnitude faster than traditional simulations.

▶ [2 TinyML: Review of Machine Learning Concepts](https://www.youtube.com/watch?v=4ClwvS_PKGA) — Roles Academy · 15:17

### Reverse design optimization algorithms
Learn about optimization methods that work backward from desired device characteristics to find the physical parameters that achieve them. This includes Bayesian and gradient-based algorithms that efficiently search parameter space.

*How the paper uses it:* The paper introduces two reverse-design algorithms that use the ML model to quickly identify device parameters matching target electrical behaviors.

▶ [Inverse Optimization: Applications, Models, and Algorithms ...](https://www.youtube.com/watch?v=ux2ClmtlOmE) — GERAD Research Center · 55:00

## Already in your library

- [Physics Informed Machine Learning: High Level Overview of ...](https://www.youtube.com/watch?v=JoFW2uSd3Uo) — also for: OASIS: Harnessing Diffusion Adversarial Network for Ocean Salinity Imputation using Sparse Drifter Trajectories (Yufei Tang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's machine learning-based reverse design of ferroelectric capacitors. The beginner project focuses on reproducing a core predictive model component using your existing ML skills. The intermediate project implements a simplified gradient-based reverse design algorithm on synthetic data, showing your grasp of the paper's core method and metrics. The advanced project extends the approach by incorporating experimental data or adapting the reverse design to a related device, addressing a stated limitation and opening a path for research collaboration.

### Beginner — Neural Network Model for Ferroelectric Capacitor Behavior
*Effort: a weekend, ~8 hours*

You build a neural network regression model that predicts electrical characteristics of a ferroelectric capacitor from device parameters, reproducing the paper's compact model concept. Using synthetic data mimicking phase-field simulation outputs, you train and evaluate the model, reporting metrics like R² and RMSE.

**Why it shows you understood the paper:** This project shows you understand the core idea of replacing slow physics simulations with a fast ML model and can implement and evaluate such a model, a foundational step in the paper's approach.

**Grounded in:** Development of a neural network-based compact model accurately predicting ferroelectric capacitor behavior across parameter variations; Neural network model achieved R² = 0.991 and RMSE = 1.967 compared to phase-field simulations.

**Tech stack:** Python 3.11, Jupyter Notebook, scikit-learn, numpy, matplotlib

**Data:** Synthetic dataset generated by simulating device parameters and corresponding electrical responses based on simplified physics-inspired formulas approximating phase-field simulation outputs.

**Build it:**

1. Generate a synthetic dataset of device parameters and corresponding electrical characteristics using simplified physics-based formulas.
2. Preprocess the data and split it into training and test sets.
3. Build a feedforward neural network regression model using scikit-learn or a simple PyTorch/TensorFlow model.
4. Train the model on the training data and evaluate on the test set, computing R² and RMSE metrics.
5. Plot predicted vs. true values to visualize model accuracy.
6. Write a README explaining the model, data generation, and evaluation results.

**Ships as:** A GitHub repo with code for data generation, model training, evaluation, and a README demonstrating the neural network's predictive accuracy on synthetic ferroelectric capacitor data.

**Stretch goal:** Add hyperparameter tuning to improve model accuracy and compare with a baseline linear regression model.

### Intermediate — Gradient-Based Reverse Design Algorithm for Ferroelectric Capacitors
*Effort: 2 weekends, ~20 hours*

You implement a gradient-based reverse design algorithm that uses the neural network compact model to find device parameters achieving target electrical characteristics. You compare its performance to a simple random search baseline and report accuracy metrics like R² between target and achieved characteristics.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's core reverse design method, integrating ML models with optimization algorithms to solve inverse design problems efficiently.

**Grounded in:** Introduction of gradient-based reverse-design algorithm that efficiently finds device parameters for specified electrical targets; Gradient-based reverse design consistently reached higher accuracy (R² up to 0.997) than Bayesian optimization.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scipy.optimize, numpy, matplotlib

**Data:** Use the synthetic dataset and trained neural network model from the beginner project as the forward model for reverse design.

**Build it:**

1. Reuse or retrain the neural network model from the beginner project as the forward predictor.
2. Implement a gradient-based optimization routine (e.g., using PyTorch autograd or scipy.optimize) to minimize the difference between predicted and target electrical characteristics by tuning device parameters.
3. Implement a random search baseline that samples device parameters randomly and selects the best match to target characteristics.
4. Run both methods on several target electrical characteristics and compare their accuracy and convergence speed.
5. Visualize optimization trajectories and final parameter sets.
6. Document the methodology, results, and comparison in a detailed README.

**Ships as:** A GitHub repo containing the neural network model, gradient-based reverse design code, baseline random search, evaluation scripts, and a README comparing methods on synthetic data.

**Stretch goal:** Add Bayesian optimization as a third method and compare all three approaches on accuracy and runtime.

### Advanced — Incorporating Experimental Data into ML-Based Reverse Design for Ferroelectric Devices
*Effort: 3-4 weeks*

You extend the reverse design framework by incorporating a small experimental dataset of ferroelectric capacitor measurements to fine-tune or calibrate the neural network model. You evaluate if this improves prediction accuracy and robustness compared to a purely simulation-trained model. Optionally, you adapt the method to a related device type by simulating or using public data.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to integrate experimental data into ML device models and enhance reverse design, a step toward real-world applicability and research collaboration.

**Grounded in:** Limitation: The study focuses on Metal-Ferroelectric-Metal capacitors; generalization to other devices is proposed but not experimentally validated; Future direction: Incorporating more extensive experimental data to validate and refine the compact models.

**Tech stack:** Python 3.11, PyTorch, pandas, numpy, matplotlib, scipy.optimize

**Data:** A small experimental dataset of ferroelectric capacitor electrical measurements (publicly available or simulated with noise added to synthetic data to mimic experimental variability).

**Build it:**

1. Collect or simulate a small experimental dataset of device parameters and electrical responses.
2. Fine-tune or recalibrate the neural network model trained on synthetic data using the experimental dataset.
3. Implement the gradient-based reverse design algorithm using the fine-tuned model.
4. Evaluate and compare prediction accuracy and reverse design performance before and after incorporating experimental data.
5. Optionally, adapt the framework to a related device type by generating or sourcing appropriate data and repeating the process.
6. Prepare a comprehensive README documenting the approach, challenges, results, and implications.

**Ships as:** A GitHub repo with code and documentation showing improved ML model accuracy and reverse design performance after incorporating experimental data, plus optional adaptation to a related device.

**Stretch goal:** Integrate the ML-based compact model into a simple circuit-level simulation to demonstrate device-circuit co-design potential.

_No authors' code or datasets are publicly available for this paper; synthetic data must be used to approximate phase-field simulation outputs._
