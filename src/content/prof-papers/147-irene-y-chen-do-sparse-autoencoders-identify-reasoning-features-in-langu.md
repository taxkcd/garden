---
title: "147 · Do Sparse Autoencoders Identify Reasoning Features in Language Models? — Irene Y. Chen"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-irene-y-chen"
source_hash: "4acdd316e490615b5ada414dfcc58a148a32011eebe9e53510bdfa78b90ea761"
sequence: 147
generator: "outreach-garden: managed"
---

# 147 · Do Sparse Autoencoders Identify Reasoning Features in Language Models?

## At a glance

- **Professor:** Irene Y. Chen
- **Institution:** Univ. of California - Berkeley
- **Paper:** [Do Sparse Autoencoders Identify Reasoning Features in Language Models?](https://arxiv.org/pdf/2601.05679)
- **Authors:** George Ma, Zhongyuan Liang, Irene Y. Chen, Somayeh Sojoudi
- **Year:** 2026

## Paper overview

This paper investigates whether sparse autoencoders (SAEs), a tool used to interpret large language models (LLMs), truly identify internal features that correspond to reasoning processes. The authors find that many features identified as reasoning-related are actually triggered by simple lexical cues rather than genuine reasoning. They develop a falsification framework combining token injection and LLM-guided counterexamples to test these features, concluding that caution is needed when attributing reasoning behavior to individual SAE features.

### Why it matters

**Research problem:** Whether sparse autoencoders can reliably identify genuine reasoning-related internal features in large language models, or if the features they detect are confounded by superficial lexical patterns.

**Why it matters:** Understanding if and how LLMs internally represent reasoning is crucial for interpretability, trust, and improving model design. Misattributing lexical correlates as reasoning features can mislead research and applications relying on mechanistic interpretability.

**Key contributions:**

- Theoretical analysis demonstrating that sparsity in SAE decoding favors stable low-dimensional lexical correlates over high-dimensional reasoning variation.
- Development of a falsification-oriented evaluation framework combining causal token injection and LLM-guided counterexample generation.
- Comprehensive empirical evaluation across 22 configurations of LLMs, layers, and reasoning datasets.
- Demonstration that most candidate reasoning features are token-driven or confounded by lexical patterns.
- Provision of detailed qualitative analyses showing common lexical confounds activating SAE features.

## About the professor

**Irene Y. Chen** — Assistant Professor, Department of Pathology and Laboratory Medicine (SMD), Univ. of California - Berkeley.

### Research links

- [Faculty/profile page](https://vcresearch.berkeley.edu/faculty/irene-chen)
- [Identity evidence](https://irenechen.net)
- [Identity evidence](https://irenechen.net/)
- [Identity evidence](https://people.csail.mit.edu/iychen/)
- [Professor website](https://www.urmc.rochester.edu/people/112363645-irene-y-chen)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Sparse coding and autoencoders
**The paper assumes:** machine learning autoencoders, sparse coding, and neural network interpretability
**Already in this field?** Skip this entirely if you already understand the principles of sparse autoencoders and their role in feature learning and interpretability.

Understanding sparse autoencoders and sparse coding is essential for grasping the theoretical and practical aspects of how these models identify features in large language models, particularly the bias toward lexical cues over reasoning features. The rigorous course offers a deep, structured university-level treatment of the topic, while the fast track provides a concise, intuition-focused introduction suitable for quickly building foundational knowledge before diving into the paper.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [ML-autoencoders](https://www.youtube.com/playlist?list=PLeAZNHYyAdx-_wXw1j5Jbu4nw7B0BAK9g) — anchorcult · 17 videos · 2.3h across the first 14 episodes

**Watch only this:** Watch the first 14 episodes, about 2.3 hours total — these cover the basics of autoencoders, sparse autoencoders, and their training, providing a solid intuitive foundation.

*Why it unblocks this paper:* This short-form playlist offers clear, visual, and concise explanations of autoencoders and sparse autoencoders, ideal for quickly understanding the architecture and sparsity concepts crucial for interpreting the paper's theoretical and empirical analyses.

*If you want all of it:* All 17 episodes, approximately 2.8 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on sparse autoencoders identifying reasoning features in language models, start with foundational knowledge on mechanistic interpretability and causal probing, which provide the theoretical and methodological background for interpreting neural networks and testing causal relationships. Next, explore the core concept of sparse autoencoders interpretability, focusing on their role in extracting interpretable features from LLMs. Finally, conclude with the authors' own talk on sparse autoencoders to gain direct insights into their findings, methodology, and implications.

### Mechanistic interpretability language models *(prerequisite)*
Mechanistic interpretability is the foundational framework for understanding how internal computations in language models correspond to learned features and behaviors. This concept is critical to grasp the context and goals of the paper, which aims to interpret reasoning features mechanistically within LLMs.

*How the paper uses it:* The paper builds on mechanistic interpretability to investigate whether sparse autoencoders reveal genuine reasoning features in LLMs.

▶ [Mechanistic Interpretability - Stella Biderman | Stanford MLSys ...](https://www.youtube.com/watch?v=P7sjVMtb5Sg) — Stanford MLSys Seminars · 55:27

### Causal probing neural networks *(prerequisite)*
Causal probing techniques are essential for establishing whether identified features in neural networks have a causal effect on model behavior, rather than merely correlating with it. Understanding these methods is necessary to appreciate the paper's falsification framework combining token injection and adversarial counterexamples.

*How the paper uses it:* The paper uses causal token injection as part of its falsification framework to test candidate reasoning features identified by sparse autoencoders.

▶ [Probing | Stanford CS224U Natural Language Understanding ...](https://www.youtube.com/watch?v=ElDtkhqv5ZE) — Stanford Online · 11:29

### Sparse autoencoders interpretability
Sparse autoencoders are the central interpretability tool studied in the paper, used to extract monosemantic features from LLM activations. Understanding how SAEs work and their interpretability properties is crucial to follow the paper's theoretical analysis and empirical evaluation.

*How the paper uses it:* The paper analyzes sparse autoencoders theoretically and empirically to assess their ability to identify reasoning-related features in LLMs.

▶ [Decoding Neural Networks with Sparse Autoencoders | David ...](https://www.youtube.com/watch?v=M7nxLfKC9pY) — UCL Centre for Artificial Intelligence · 1:09:05

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides direct exposition of their research, including motivation, methodology, theoretical insights, and detailed empirical results. This talk is the most authoritative source for understanding the nuances and implications of their findings.

*How the paper uses it:* This talk by Joshua Engels covers sparse autoencoders and their limitations, directly relating to the paper's investigation of reasoning features in LLMs.

▶ [Sparse Autoencoders: Progress & Limitations with Joshua Engels](https://www.youtube.com/watch?v=eVlGeHA2Cnw) — NDIF Team · 11 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how sparse autoencoders are used to interpret reasoning features in large language models. We start with mechanistic interpretability to grasp the goal of understanding internal model computations, then cover causal probing and adversarial example generation as key methods for testing feature causality. Finally, we focus on sparse autoencoders themselves, the core tool analyzed in the paper, to see how they identify features and their limitations.

### Mechanistic interpretability language models *(prerequisite)*
Mechanistic interpretability is about understanding how neural networks internally compute their outputs by identifying meaningful components like neurons or circuits. This foundational knowledge helps us appreciate why and how researchers try to find reasoning features inside language models.

*How the paper uses it:* The paper builds on mechanistic interpretability to analyze whether sparse autoencoders truly find reasoning-related features in LLMs.

▶ [An Introduction to Mechanistic Interpretability – Neel Nanda ...](https://www.youtube.com/watch?v=0704iLc55Fs) — International Association for Safe & Ethical AI · 25:13

### Causal probing neural networks *(prerequisite)*
Causal probing techniques test whether specific internal features actually cause certain model behaviors, rather than just correlating with them. This is crucial for validating if identified features represent genuine reasoning or superficial cues.

*How the paper uses it:* The paper uses causal token injection as part of its falsification framework to test candidate reasoning features.

▶ [Probing | Stanford CS224U Natural Language Understanding ...](https://www.youtube.com/watch?v=ElDtkhqv5ZE) — Stanford Online · 11:29

### Adversarial example generation LLMs *(prerequisite)*
Adversarial example generation involves creating inputs that fool models or break feature-behavior relationships, helping to falsify hypotheses about feature causality. This method is used to generate counterexamples that challenge candidate reasoning features.

*How the paper uses it:* The paper employs LLM-guided adversarial counterexample generation to falsify reasoning features identified by sparse autoencoders.

▶ [Are Aligned Language Models “Adversarially Aligned”?](https://www.youtube.com/watch?v=uqOfC3KSZFc) — Simons Institute for the Theory of Computing · 1:02:41

### Sparse autoencoders interpretability
Sparse autoencoders are tools that learn sparse, interpretable decompositions of neural network activations, aiming to identify distinct features inside models. Understanding how SAEs work and their interpretability benefits is key to grasping the paper's analysis.

*How the paper uses it:* The paper critically evaluates sparse autoencoders as a method to identify reasoning features in LLMs and reveals their limitations.

▶ [Demo: Gemma Scope: Sparse autoencoders on Gemma 2](https://www.youtube.com/watch?v=X1gDXDQu_wU) — Google for Developers · 7:24

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insights into their motivations, methods, and conclusions, complementing technical understanding with context and nuance.

*How the paper uses it:* This talk by Joshua Engels discusses sparse autoencoders, their progress, and limitations, directly relating to the paper's topic.

▶ [Sparse Autoencoders: Progress & Limitations with Joshua Engels](https://www.youtube.com/watch?v=eVlGeHA2Cnw) — NDIF Team · 11 months ago

## Already in your library

- [A Friendly Introduction to Generative Adversarial Networks (GANs)](https://www.youtube.com/watch?v=8L11aMN5KY8) — also for: CCS‑GAN: COVID‑19 CT Scan Generation and Classification with Very Few Positive Training Images (Yaacov Yesha)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's core findings and methods on sparse autoencoders (SAEs) and reasoning feature interpretability in language models. The beginner project reproduces a key token-injection activation analysis using the authors' released code. The intermediate project extends the falsification framework by applying it to a public reasoning dataset and comparing lexical confound effects. The advanced project tackles a future direction by exploring distributed, nonlinear feature representations beyond monosemantic SAE features, addressing a key limitation of the paper.

### Beginner — Reproduce Token Injection Activation Analysis
*Effort: a weekend, ~8 hours*

You build a minimal pipeline that uses the authors' released code to reproduce the token injection experiment showing that many candidate reasoning features are strongly activated by inserting associated tokens into non-reasoning text. You will run the provided sparse autoencoder models on sample inputs, perform token injection, and plot activation changes.

**Why it shows you understood the paper:** This project shows you understand the paper's key empirical finding that lexical cues drive many SAE features attributed to reasoning, and you can use the authors' codebase to replicate their falsification method.

**Grounded in:** Between 45% and 90% of candidate reasoning features are strongly activated by inserting a few associated tokens into non-reasoning text, indicating token-driven confounds.

**Tech stack:** Python 3.11, PyTorch, matplotlib, Jupyter Notebook

**Data:** Use the example inputs and pretrained SAE models provided in the authors' GitHub repository https://github.com/GeorgeMLP/reasoning-probing.

**Build it:**

1. Clone the authors' repository https://github.com/GeorgeMLP/reasoning-probing and install dependencies.
2. Load the pretrained sparse autoencoder models and sample reasoning and non-reasoning text inputs.
3. Implement token injection by inserting activating tokens into non-reasoning inputs as described in the paper.
4. Compute and plot the activation changes of candidate SAE features before and after token injection.
5. Compare your plots to the paper's figures demonstrating token-driven feature activation.

**Verified links from the paper:**

- <https://github.com/GeorgeMLP/reasoning-probing> — released by the paper's authors

**Ships as:** A Jupyter notebook with code and plots reproducing token injection activation results, plus a README explaining the experiment and findings.

**Stretch goal:** Add a simple CLI interface to run token injection experiments on arbitrary input texts.

### Intermediate — Apply Falsification Framework on Public Reasoning Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's falsification framework combining causal token injection and LLM-guided adversarial counterexample generation, applying it to a public reasoning benchmark such as the GSM8K dataset (a widely used math reasoning dataset). You compare the activation patterns of SAE features on original vs. token-injected and adversarially perturbed inputs, quantifying lexical confound effects.

**Why it shows you understood the paper:** This project demonstrates you can implement the core falsification methodology from the paper, adapt it to a new dataset, and critically evaluate whether SAE features truly represent reasoning or lexical cues.

**Grounded in:** Development of a falsification-oriented evaluation framework combining causal token injection and LLM-guided counterexample generation; comprehensive empirical evaluation across multiple models, layers, and reasoning datasets.

**Tech stack:** Python 3.11, PyTorch, OpenAI API or HuggingFace transformers for LLM-guided counterexample generation, matplotlib, Jupyter Notebook

**Data:** Use the GSM8K dataset (public math word problem dataset) as a substitute for the paper's reasoning datasets.

**Build it:**

1. Reimplement the sparse autoencoder training or use pretrained SAE models from the authors' codebase if compatible.
2. Load the GSM8K dataset and preprocess it for input to the SAE models.
3. Implement causal token injection by inserting activating tokens into non-reasoning or unrelated GSM8K problems.
4. Use an LLM (e.g., OpenAI GPT or HuggingFace model) to generate adversarial counterexamples that produce false positives and false negatives for candidate SAE features.
5. Measure and plot feature activations across original, token-injected, and adversarial inputs to evaluate lexical confound effects.
6. Compare your results to the paper's reported metrics and discuss similarities or differences.

**Verified links from the paper:**

- <https://github.com/GeorgeMLP/reasoning-probing> — released by the paper's authors

**Ships as:** A Jupyter notebook and report demonstrating the falsification framework applied to GSM8K, with quantitative and qualitative analyses of SAE feature activations.

**Stretch goal:** Add a simple dashboard to visualize feature activations and adversarial examples interactively.

### Advanced — Explore Distributed and Nonlinear Reasoning Representations
*Effort: 3+ weeks*

You extend the paper's work by investigating distributed or nonlinear representations of reasoning in language models that go beyond monosemantic SAE features. You design and implement methods to analyze combinations of multiple SAE features or nonlinear transformations thereof, testing whether these better capture genuine reasoning signals. You apply an extended falsification framework to evaluate these representations.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, showing deep comprehension of the challenges in mechanistic interpretability and the ability to innovate beyond the original methods.

**Grounded in:** The study does not address nonlinear or multi-feature representations of reasoning that resist single-feature attribution; future direction to investigate distributed representations across multiple features or nonlinear combinations.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, OpenAI API or HuggingFace transformers, matplotlib, Jupyter Notebook

**Data:** Use the same reasoning datasets as the paper or public datasets like GSM8K; pretrained SAE models from the authors' codebase as a starting point.

**Build it:**

1. Review the authors' SAE feature extraction and contrastive activation methods.
2. Develop methods to combine multiple SAE features linearly and nonlinearly (e.g., via PCA, clustering, or small neural networks) to form composite reasoning feature representations.
3. Extend the falsification framework to test these composite features using token injection and LLM-guided adversarial counterexamples.
4. Evaluate whether composite features show more robust correlation with reasoning presence than individual features.
5. Document qualitative and quantitative results, comparing to the original single-feature analysis.
6. Discuss implications for interpretability methods and propose further improvements.

**Verified links from the paper:**

- <https://github.com/GeorgeMLP/reasoning-probing> — released by the paper's authors

**Ships as:** A comprehensive GitHub repository with code, notebooks, and a detailed report presenting the exploration of distributed reasoning representations and their falsification evaluation.

**Stretch goal:** Implement a visualization tool to explore feature combinations and their activations interactively.
