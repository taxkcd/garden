---
title: "053 · Towards Causally Interpretable Wi-Fi CSI-Based Human Activity Recognition with Discrete Latent Compression and LTL Rule Extraction — Mani B. Srivastava"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mani-b-srivastava"
source_hash: "5ab16def5deee3a1fe2c96151d53024f60267489e86ee906350e58ce1319af1f"
sequence: 53
generator: "outreach-garden: managed"
---

# 053 · Towards Causally Interpretable Wi-Fi CSI-Based Human Activity Recognition with Discrete Latent Compression and LTL Rule Extraction

## At a glance

- **Professor:** Mani B. Srivastava
- **Institution:** Univ. of California - Los Angeles
- **Paper:** [Towards Causally Interpretable Wi-Fi CSI-Based Human Activity Recognition with Discrete Latent Compression and LTL Rule Extraction](https://arxiv.org/abs/2604.22979)
- **Authors:** Luca Cotti, Luca Lavazza, Marco Cominelli, Liying Han, Gaofeng Dong, Francesco Gringoli, Mani B. Srivastava, Trevor Bihl, Erik P. Blasch, Daniel O. Brigham, Kara Combs, Lance M. Kaplan, Federico Cerutti
- **Year:** 2026

## Paper overview

This paper presents CHARL-TRE, a new method for recognizing human activities using Wi-Fi signals. It compresses raw Wi-Fi data into a discrete, interpretable format and extracts logical rules that explain temporal patterns in activities. This approach allows for transparent, rule-based classification instead of opaque neural networks, achieving competitive accuracy while enabling easy inspection and modification of the decision process.

### Why it matters

**Research problem:** How to achieve accurate human activity recognition (HAR) from high-dimensional, noisy Wi-Fi Channel State Information (CSI) data with models that are both causally interpretable and symbolically controllable, avoiding black-box neural network opacity.

**Why it matters:** Wi-Fi based HAR enables device-free sensing useful in health monitoring, security, and smart environments. Existing deep learning methods perform well but lack interpretability and flexibility, limiting trust and adaptability. A causally interpretable and symbolic approach would improve transparency and controllability in HAR systems.

**Key contributions:**

- Development of CHARL-TRE, a pipeline combining unsupervised discrete latent compression of Wi-Fi CSI with causal discovery and symbolic LTL rule extraction for HAR.
- Use of categorical variational autoencoders with Gumbel-Softmax to obtain discrete latent representations amenable to symbolic reasoning.
- Application of LPCMCI causal discovery on latent trajectories to infer temporal dependencies and translate them into interpretable LTL rules.
- Construction of a fully deterministic, rule-based classifier that operates solely on symbolic rules derived from latent space without retraining the encoder.
- Demonstration that antenna-specific rule sets can be logically combined for multi-antenna fusion without modifying the encoder.

## About the professor

**Mani B. Srivastava** — Professor, Univ. of California - Los Angeles.

Research interests: Embedded software, ubiquitous and mobile computing, human-cyber-physical systems, security and privacy, mobile health, internet of things, energy-aware computing

### Research links

- [Faculty/profile page](http://www.ee.ucla.edu/mani-srivastava)
- [Resolved homepage](https://www.ee.ucla.edu/mani-srivastava/#main)
- [Lab website](http://nesl.ee.ucla.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CHARL-TRE paper, start with foundational knowledge of Wi-Fi Channel State Information (CSI) sensing to grasp the data modality and its challenges. Next, study causal discovery methods, especially LPCMCI and partial correlation, to comprehend how temporal causal dependencies are inferred. Then, learn about Linear Temporal Logic (LTL) to understand the symbolic temporal rule representation used for classification. Following that, review categorical variational autoencoders with Gumbel-Softmax to appreciate the discrete latent compression technique. Finally, focus on the core concept by examining advanced talks on Wi-Fi CSI-based human activity recognition, ideally from the authors or closely related academic presentations.

### Wi-Fi channel state information sensing lecture *(prerequisite)*
This section provides foundational understanding of Wi-Fi CSI, the sensing modality used in the paper. It covers the nature of CSI data, its acquisition, and its application in device-free sensing, which is crucial to appreciate the input data characteristics and challenges addressed by CHARL-TRE.

*How the paper uses it:* Wi-Fi CSI is the raw data source that CHARL-TRE compresses and symbolically reasons over for human activity recognition.

▶ [Channel State Information CSI: definition, tools, benefits, and applications](https://www.youtube.com/watch?v=lO8-bscb9Us) — Mustafa S. Aljumaily · 7:18 · 9 years ago

### Causal discovery LPCMCI lecture *(prerequisite)*
This section covers causal discovery techniques, focusing on LPCMCI and partial correlation tests used to infer temporal causal dependencies in time series data. Understanding these methods is essential to grasp how CHARL-TRE extracts temporal dependency graphs from latent trajectories.

*How the paper uses it:* CHARL-TRE applies LPCMCI causal discovery on discrete latent trajectories to infer temporal dependencies for rule extraction.

▶ [Ruibo Tu - A brief introduction to causal discovery](https://www.youtube.com/watch?v=KeWs8PqVHC4) — Digital Futures: Research Hub for Digitalization · 4 years ago

### Linear temporal logic LTL lecture *(prerequisite)*
This section introduces Linear Temporal Logic (LTL), the formal language used to express temporal rules in CHARL-TRE. Learning LTL enables understanding how temporal patterns and causal dependencies are symbolically represented and used for interpretable classification.

*How the paper uses it:* CHARL-TRE translates inferred temporal dependencies into explicit LTL rules forming a fully symbolic classifier.

▶ [Introduction to LTL. Part 1: Basic Intuition](https://www.youtube.com/watch?v=a9fo3dUly8A) — Andrei Popescu · 5 years ago

### Categorical variational autoencoder lecture *(prerequisite)*
This section explains categorical variational autoencoders with Gumbel-Softmax reparameterization, the core method for compressing high-dimensional Wi-Fi CSI data into discrete latent representations. Understanding this technique is key to appreciating how CHARL-TRE achieves a discrete, interpretable latent space amenable to symbolic reasoning.

*How the paper uses it:* CHARL-TRE uses categorical VAEs with Gumbel-Softmax to obtain discrete latent codes from raw CSI data.

▶ [Gumbel-Softmax | Lecture 63 (Part 3) | Applied Deep Learning (Supplementary)](https://www.youtube.com/watch?v=6dyGMlZl_NQ) — Maziar Raissi · 4 years ago

### CHARL-TRE Wi-Fi CSI HAR talk *(the paper's own talk)*
This section focuses on advanced talks directly related to Wi-Fi CSI-based human activity recognition, ideally featuring the authors or closely related academic presentations. These talks provide insights into the state-of-the-art methods, challenges, and innovations in the domain, contextualizing the CHARL-TRE approach.

*How the paper uses it:* This is the core concept of the paper, presenting the novel CHARL-TRE pipeline for interpretable Wi-Fi CSI-based human activity recognition.

▶ [A Doppler-Based Human Activity Recognition System Using WiFi Signals](https://www.youtube.com/watch?v=PkP0PHkswqo) — IEEE Sensors · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the CHARL-TRE method for Wi-Fi CSI-based human activity recognition. We start with the basics of Wi-Fi Channel State Information sensing to grasp the data source, then cover causal discovery techniques essential for temporal dependency inference, followed by linear temporal logic for expressing interpretable temporal rules. Next, we explain categorical variational autoencoders with Gumbel-Softmax for discrete latent compression, culminating in a focused look at the CHARL-TRE pipeline itself.

### Wi-Fi channel state information sensing lecture *(prerequisite)*
Learn what Wi-Fi Channel State Information (CSI) is, how it captures the wireless channel characteristics, and why it is useful for sensing human activities without devices. This foundational knowledge helps understand the raw data input to the CHARL-TRE pipeline.

*How the paper uses it:* Wi-Fi CSI is the high-dimensional, noisy data source that CHARL-TRE compresses and analyzes for human activity recognition.

▶ [Channel State Information CSI: definition, tools, benefits, and applications](https://www.youtube.com/watch?v=lO8-bscb9Us) — Mustafa S. Aljumaily · 7:18 · 9 years ago

### Causal discovery LPCMCI lecture *(prerequisite)*
Understand causal discovery methods, especially linear partial correlation tests, which help infer temporal causal relationships between variables in time series data. This is key to how CHARL-TRE extracts temporal dependency graphs from latent trajectories.

*How the paper uses it:* CHARL-TRE applies LPCMCI causal discovery on discrete latent trajectories to find class-conditional temporal dependencies.

▶ [Ruibo Tu - A brief introduction to causal discovery](https://www.youtube.com/watch?v=KeWs8PqVHC4) — Digital Futures: Research Hub for Digitalization · 4 years ago

### Linear temporal logic LTL lecture *(prerequisite)*
Learn the basics of Linear Temporal Logic (LTL), a formal language to express temporal properties and rules over sequences. CHARL-TRE uses LTL to symbolically represent temporal dependencies as interpretable classification rules.

*How the paper uses it:* The temporal dependency graphs inferred by causal discovery are translated into explicit LTL rules forming the symbolic classifier in CHARL-TRE.

▶ [Introduction to LTL. Part 1: Basic Intuition](https://www.youtube.com/watch?v=a9fo3dUly8A) — Andrei Popescu · 5 years ago

### Categorical variational autoencoder lecture
Discover how categorical variational autoencoders with Gumbel-Softmax reparameterization compress continuous data into discrete latent codes. This discrete latent space enables symbolic reasoning and rule extraction in CHARL-TRE.

*How the paper uses it:* CHARL-TRE uses a categorical VAE with Gumbel-Softmax to compress raw CSI magnitude windows into discrete latent variables for causal and symbolic analysis.

▶ [Gumbel-Softmax | Lecture 63 (Part 3) | Applied Deep Learning (Supplementary)](https://www.youtube.com/watch?v=6dyGMlZl_NQ) — Maziar Raissi · 4 years ago

### CHARL-TRE Wi-Fi CSI HAR talk
Finally, watch a talk focused on Wi-Fi based human activity recognition systems that provide context and intuition for the kind of sensing and classification CHARL-TRE advances. This helps connect the foundational concepts to practical HAR applications.

*How the paper uses it:* This talk directly relates to the paper's domain of Wi-Fi CSI-based human activity recognition, providing practical background and motivation.

▶ [Towards a Low Cost Wifi Based Real Time Human Activity Recognition System](https://www.youtube.com/watch?v=gh1JWoPwdaM) — Eco-Sustainable Informatics · 10:52 · 3 years ago

## Already in your library

- [ICCKE 2021 - CSI-Based Human Activity Recognition using ...](https://www.youtube.com/watch?v=SnGlVwdVwsk) — also for: Towards Causally Interpretable Wi-Fi CSI-Based Human Activity Recognition with Discrete Latent Compression and LTL Rule Extraction (Mani B. Srivastava)
- [Categorical Reparameterization with Gumbel-Softmax & The Concrete Distribution](https://www.youtube.com/watch?v=JFgXEbgcT7g) — also for: Towards Causally Interpretable Wi-Fi CSI-Based Human Activity Recognition with Discrete Latent Compression and LTL Rule Extraction (Mani B. Srivastava)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the CHARL-TRE pipeline for causally interpretable Wi-Fi CSI-based human activity recognition. The beginner project focuses on reproducing the discrete latent compression step using categorical variational autoencoders with Gumbel-Softmax, the core technical novelty of the paper. The intermediate project implements the full CHARL-TRE pipeline on a public Wi-Fi CSI dataset, including causal discovery and LTL rule extraction, to reproduce classification accuracy and interpretability results. The advanced project extends the pipeline by exploring non-linear causal discovery methods or longer temporal horizons, addressing a key limitation and future direction of the paper.

### Beginner — Discrete Latent Compression of Wi-Fi CSI Using Categorical VAE
*Effort: a weekend, ~8 hours*

You build a categorical variational autoencoder (VAE) with Gumbel-Softmax latent variables to compress raw Wi-Fi CSI magnitude windows into discrete latent codes. You train the VAE on a small subset of a public Wi-Fi CSI dataset and freeze the encoder to produce deterministic one-hot latent representations.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key representation learning step, showing you can implement discrete latent compression that enables symbolic reasoning downstream.

**Grounded in:** Use of categorical variational autoencoders with Gumbel-Softmax to obtain discrete latent representations amenable to symbolic reasoning.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Use a publicly available Wi-Fi CSI dataset with raw magnitude windows (e.g., the dataset referenced in the paper or a substitute public CSI dataset).

**Build it:**

1. Download and preprocess raw Wi-Fi CSI magnitude windows from the public dataset.
2. Implement a categorical VAE with Gumbel-Softmax latent variables in PyTorch.
3. Train the VAE to reconstruct CSI windows, monitoring reconstruction loss.
4. Freeze the encoder and generate deterministic one-hot latent codes for test samples.
5. Visualize latent codes over time to inspect discrete latent trajectories.

**Ships as:** A GitHub repo with code, a Jupyter notebook showing training and latent code extraction, and visualizations of discrete latent trajectories.

**Stretch goal:** Add a simple baseline using continuous latent variables (standard VAE) and compare reconstruction quality and latent code discreteness.

### Intermediate — Reimplementation of CHARL-TRE Pipeline for Wi-Fi CSI Human Activity Recognition
*Effort: 2 weekends, ~20 hours*

You reimplement the full CHARL-TRE pipeline: discrete latent compression with categorical VAE, causal discovery on latent trajectories using LPCMCI with partial correlation tests, and extraction of Linear Temporal Logic (LTL) rules for symbolic classification. You evaluate classification accuracy on a public Wi-Fi CSI dataset with multiple activities and compare against a simple baseline such as a neural network classifier.

**Why it shows you understood the paper:** This project shows you can integrate representation learning, causal discovery, and symbolic reasoning as in the paper, reproducing key results like >70% accuracy and interpretable LTL rules.

**Grounded in:** Development of CHARL-TRE, a pipeline combining unsupervised discrete latent compression of Wi-Fi CSI with causal discovery and symbolic LTL rule extraction for HAR; CHARL-TRE achieves competitive deterministic classification accuracy exceeding 70%.

**Tech stack:** Python 3.11, PyTorch, NumPy, pandas, matplotlib, networkx, ltl3tools or custom LTL parser, Jupyter Notebook

**Data:** Use the public Wi-Fi CSI dataset referenced in the paper or a substitute public dataset with labeled human activities.

**Build it:**

1. Implement or reuse the categorical VAE from the beginner project to encode CSI windows into discrete latent codes.
2. Implement LPCMCI causal discovery with partial correlation tests on latent time series (using or adapting code from https://github.com/ansresearch/exposing-the-csi).
3. Translate inferred causal temporal dependencies into LTL rules representing temporal patterns for each activity class.
4. Implement a symbolic classifier that applies these LTL rules to classify latent trajectories deterministically.
5. Evaluate classification accuracy and precision/recall metrics on the dataset, comparing against a simple neural network baseline.
6. Visualize example LTL rules and their empirical support to demonstrate interpretability.

**Verified links from the paper:**

- <https://github.com/ansresearch/exposing-the-csi> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for the full pipeline, evaluation scripts, and a detailed README explaining the pipeline steps, results, and example LTL rules.

**Stretch goal:** Add multi-antenna fusion by logically combining antenna-specific rule sets at the symbolic level without retraining the encoder.

### Advanced — Extending CHARL-TRE with Non-Linear Causal Discovery and Longer Temporal Horizons
*Effort: 3+ weeks*

You extend the CHARL-TRE pipeline by integrating non-linear causal discovery methods (e.g., kernel-based or mutual information tests) and/or increasing the temporal lag horizon beyond τ ≤ 5 to capture richer temporal dependencies in the latent space. You evaluate the impact on classification accuracy and interpretability on the Wi-Fi CSI dataset, addressing a key limitation and future direction of the paper.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's limitations and advances the state of the art by improving causal discovery while preserving symbolic interpretability, potentially opening new research directions.

**Grounded in:** Explore non-linear causal tests and extend temporal horizons beyond τ ≤ 5 to capture richer temporal dependencies.

**Tech stack:** Python 3.11, PyTorch, NumPy, pandas, scikit-learn, networkx, Jupyter Notebook, causal discovery libraries supporting non-linear tests (e.g., tigramite extensions or custom implementations)

**Data:** Use the same public Wi-Fi CSI dataset as in the intermediate project.

**Build it:**

1. Review and understand the LPCMCI causal discovery implementation and its linear partial correlation tests.
2. Research and implement or integrate non-linear causal discovery tests suitable for time series (e.g., kernel-based conditional independence tests or mutual information-based tests).
3. Modify the causal discovery step to allow temporal lags greater than 5 and evaluate computational feasibility.
4. Apply the extended causal discovery to the discrete latent trajectories from the categorical VAE encoder.
5. Translate the richer causal graphs into LTL rules and update the symbolic classifier accordingly.
6. Evaluate classification accuracy, interpretability (rule complexity), and computational cost compared to the original pipeline.
7. Document findings and discuss trade-offs between richer causal discovery and interpretability.

**Verified links from the paper:**

- <https://github.com/ansresearch/exposing-the-csi> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with extended causal discovery code, updated symbolic classifier, evaluation scripts, and a comprehensive report comparing original and extended methods.

**Stretch goal:** Investigate semantic interpretability of latent variables by correlating latent propositions with physical CSI phenomena using domain knowledge or visualization.
