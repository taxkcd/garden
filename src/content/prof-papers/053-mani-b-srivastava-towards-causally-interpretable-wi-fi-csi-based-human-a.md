---
title: "053 · Towards Causally Interpretable Wi-Fi CSI-Based Human Activity Recognition with Discrete Latent Compression and LTL Rule Extraction — Mani B. Srivastava"
date: 2026-07-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mani-b-srivastava"
source_hash: "b3ad053ee440e3b1e1112079e41c5309e443c1b7ee72f2eb9673a152df4c2d86"
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

To deeply understand the CHARL-TRE paper, start by grounding yourself in the prerequisite concepts of causal discovery in time series and linear temporal logic, which underpin the symbolic reasoning and rule extraction components. Next, build a solid grasp of categorical variational autoencoders with Gumbel-Softmax reparameterization, essential for the discrete latent compression of Wi-Fi CSI data. Finally, focus on the core concept by watching the authors' own talks and related advanced presentations on Wi-Fi CSI-based human activity recognition to contextualize the application and innovations of the paper.

## Recommended videos (in order)

### Causal discovery in time series seminar *(prerequisite)*
Understanding LPCMCI causal discovery methods applied to time series data is crucial because the paper uses these techniques to infer temporal dependencies in the discrete latent space. These videos provide advanced seminar-level insights into detecting causality in autocorrelated and nonlinear time series, which aligns with the paper's causal inference approach.

*How the paper uses it:* The paper applies LPCMCI causal discovery on latent trajectories to infer temporal dependencies for symbolic rule extraction.

▶ [TRR181 Seminar Series: "Detecting causality from time series in a ML framework", by Prof. C. Franzke](https://www.youtube.com/watch?v=kNQJAfhFoSA) — TRR 181 Energy Transfers in Atmosphere and Ocean · 34:19 · 3 years ago

### Linear temporal logic lecture *(prerequisite)*
Linear Temporal Logic (LTL) is the formal language used in the paper to represent temporal rules symbolically for interpretable classification decisions. These comprehensive university lectures provide a rigorous introduction to LTL syntax and semantics, enabling a deep understanding of how temporal logic formulas encode activity patterns.

*How the paper uses it:* LTL is used to represent temporal rules symbolically for interpretable classification decisions in CHARL-TRE.

▶ [Lecture 12 Linear temporal logic](https://www.youtube.com/watch?v=--4S7HjoZho) — HT Z (UnlimitedPawar) · 1:28:51

### Categorical variational autoencoder lecture *(prerequisite)*
The paper's discrete latent compression relies on categorical variational autoencoders with Gumbel-Softmax reparameterization. These videos, especially the NIPS Bayesian Deep Learning Workshop talk, offer an advanced and detailed explanation of the categorical reparameterization trick, which is central to the paper's representation learning approach.

*How the paper uses it:* The authors use categorical VAEs with Gumbel-Softmax to obtain discrete latent representations amenable to symbolic reasoning.

▶ [Categorical Reparameterization with Gumbel-Softmax & The Concrete Distribution](https://www.youtube.com/watch?v=JFgXEbgcT7g) — Bayesian Deep Learning Workshop NIPS 2016 · 13:31 · 9 years ago

### Human activity recognition with Wi-Fi CSI talk *(prerequisite)*
To appreciate the application context and challenges of Wi-Fi CSI-based human activity recognition, these advanced conference talks provide domain-specific insights into device-free sensing and signal processing techniques. They set the stage for understanding the motivation and practical relevance of the CHARL-TRE pipeline.

*How the paper uses it:* The paper addresses human activity recognition from Wi-Fi CSI data, a domain explored in these talks.

▶ [MobiCom 2015 - Understanding and Modeling of WiFi Signal ...](https://www.youtube.com/watch?v=BRpgckJ3nUI) — ACM SIGMOBILE ONLINE · 16:45

### Authors' talk on CHARL-TRE
The authors' own presentations on related Wi-Fi CSI-based human activity recognition work provide the most direct and specific insights into the methodology and innovations of CHARL-TRE. These talks offer a focused view on the challenges and solutions that the paper addresses, making them essential for fully grasping the research contributions.

*How the paper uses it:* Directly targets the authors' own presentation on this exact work for the most specific insights.

▶ [ICCKE 2021 - CSI-Based Human Activity Recognition using ...](https://www.youtube.com/watch?v=SnGlVwdVwsk) — ICCKE · 14:06
