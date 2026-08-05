---
title: "112 · Differentially Private Synthetic Data Generation Using Context-Aware GANs — Anantaa Kotal"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-anantaa-kotal"
source_hash: "8feee933cc1f46590a333b3494c7aed65423eee6845aa0506bba9423bee542eb"
sequence: 112
generator: "outreach-garden: managed"
---

# 112 · Differentially Private Synthetic Data Generation Using Context-Aware GANs

## At a glance

- **Professor:** Anantaa Kotal
- **Institution:** University of Texas - El Paso
- **Paper:** [Differentially Private Synthetic Data Generation Using Context-Aware GANs](https://arxiv.org/pdf/2512.08869)
- **Authors:** Anantaa Kotal, Anupam Joshi
- **Year:** 2025

## Paper overview

This paper presents ContextGAN, a novel generative adversarial network framework that creates synthetic data mimicking real datasets while preserving privacy and enforcing domain-specific rules. It integrates a constraint matrix encoding explicit and implicit domain knowledge into the discriminator and applies differential privacy to protect sensitive information. The framework is validated across healthcare, security, and finance datasets, showing improved realism, utility, and privacy compared to existing methods.

### Why it matters

**Research problem:** Traditional synthetic data generation methods often fail to capture complex, implicit domain-specific rules (e.g., medical guidelines) and lack strong privacy guarantees, limiting their realism and safe usability in sensitive domains like healthcare, security, and finance.

**Why it matters:** Sensitive data sharing is restricted by privacy laws (e.g., GDPR, HIPAA), yet high-quality data is crucial for machine learning and research. Synthetic data can enable safe data sharing but must be realistic and privacy-preserving to be useful and compliant with domain constraints.

**Key contributions:**

- Introduction of a constraint matrix to explicitly encode domain-specific rules (both explicit and implicit) guiding synthetic data generation.
- Integration of the constraint matrix into the GAN discriminator's loss function to enforce domain compliance.
- Application of differential privacy mechanisms (DP-SGD) to the discriminator to protect sensitive data during training.
- Comprehensive evaluation across multiple domains (healthcare, security, finance) demonstrating improved fidelity, utility, and privacy over state-of-the-art models.

## About the professor

**Anantaa Kotal** — Assistant Professor, Computer Science, University of Texas - El Paso.

Research interests: trustworthy and generative AI across public health, security, and policy through privacy-preserving, fair, and accountable system design

### Research links

- [Faculty/profile page](https://hb2504.utep.edu/Home/Profile?username=akotal)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ContextGAN paper, start with foundational concepts including differential privacy in machine learning, generative adversarial networks (GANs), incorporation of domain knowledge in GANs, and constraint matrices in machine learning. These prerequisites provide the theoretical and technical background necessary to grasp the novel integration of domain constraints and privacy in ContextGAN. Finally, focus on the core concept of ContextGAN itself, prioritizing any available author talks or detailed academic presentations related to this specific framework.

### Differential privacy in machine learning *(prerequisite)*
Differential privacy is a rigorous mathematical framework that ensures individual data points cannot be reverse-engineered from trained models. Understanding DP-SGD and related privacy mechanisms is essential to appreciate how ContextGAN protects sensitive information during training.

*How the paper uses it:* ContextGAN applies differential privacy via DP-SGD to the discriminator to prevent leakage of sensitive data.

▶ [04. Privacy II: Differential Privacy for Machine Learning ...](https://www.youtube.com/watch?v=0wbN0CFP6UY) — SprintML-Lab · 1:15:48

### Generative adversarial networks *(prerequisite)*
GANs are the core generative model architecture underlying ContextGAN. A solid grasp of GAN training dynamics, generator-discriminator interplay, and common challenges is critical to understanding how ContextGAN extends this framework.

*How the paper uses it:* ContextGAN builds on GANs by integrating domain constraints and privacy into the discriminator's training.

▶ [S2025 Lecture 24 - Generative Adversarial Networks](https://www.youtube.com/watch?v=UWrQjTE2kG4) — Carnegie Mellon University Deep Learning · 1:18:27

### Incorporating domain knowledge in GANs *(prerequisite)*
Incorporating domain knowledge into GANs allows the generation process to respect domain-specific rules and constraints, improving realism and utility. This concept directly relates to how ContextGAN uses a constraint matrix to enforce domain compliance.

*How the paper uses it:* ContextGAN integrates a constraint matrix encoding domain rules into the GAN discriminator's loss function.

▶ [CS 198-126: Lecture 11 - Advanced GANs](https://www.youtube.com/watch?v=0tPq8sFTW7w) — Machine Learning at Berkeley · 46:52

### Constraint matrices in machine learning *(prerequisite)*
Constraint matrices are fundamental for encoding explicit and implicit rules in machine learning models. Understanding their role in optimization and rule enforcement helps clarify how ContextGAN penalizes rule violations during training.

*How the paper uses it:* The constraint matrix in ContextGAN encodes domain-specific rules guiding synthetic data generation.

▶ [Talk by Ivan Oseledets (SkolTech)](https://www.youtube.com/watch?v=V2X33excMhc) — ENLA Seminar · 1:06:35

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the ContextGAN paper from a beginner to advanced perspective, start by learning the foundational concepts of Generative Adversarial Networks (GANs) and Differential Privacy in machine learning, as these are core to the paper's approach. Then, build on this by exploring how domain knowledge and constraints can be incorporated into GANs to enforce realistic and rule-compliant synthetic data generation. Finally, focus on the specific idea of context-aware GAN frameworks that integrate privacy and domain constraints, which is the novel contribution of the paper.

### Generative adversarial networks *(prerequisite)*
Generative Adversarial Networks (GANs) are a type of deep learning model where two neural networks—the generator and the discriminator—compete to create realistic synthetic data. The generator tries to produce data that looks real, while the discriminator tries to distinguish real from fake data, improving both over time.

*How the paper uses it:* ContextGAN builds on the GAN architecture as the core generative model to produce synthetic data.

▶ [Understanding GANs (Generative Adversarial Networks)](https://www.youtube.com/watch?v=RAa55G-oEuk) — DeepBean · 26:46

### Differential privacy in machine learning *(prerequisite)*
Differential privacy is a rigorous mathematical framework that ensures individual data points in a dataset cannot be reverse-engineered or identified from the output of a machine learning model. Techniques like DP-SGD add noise during training to protect sensitive information while still allowing useful learning.

*How the paper uses it:* ContextGAN applies differential privacy (DP-SGD) to the discriminator to prevent leakage of sensitive information during training.

▶ [Differential Privacy - Simply Explained](https://www.youtube.com/watch?v=gI0wk1CXlsQ) — Simply Explained · 8 years ago

### Incorporating domain knowledge in GANs *(prerequisite)*
Incorporating domain knowledge into GANs means guiding the model to respect specific rules or constraints relevant to the data's context, improving the realism and applicability of synthetic data. This often involves modifying the loss function or architecture to penalize outputs that violate domain-specific rules.

*How the paper uses it:* ContextGAN integrates a constraint matrix encoding domain-specific rules into the discriminator's loss function to enforce compliance.

▶ [CS 198-126: Lecture 11 - Advanced GANs](https://www.youtube.com/watch?v=0tPq8sFTW7w) — Machine Learning at Berkeley · 46:52

### Constraint matrices in machine learning *(prerequisite)*
A constraint matrix is a structured way to encode explicit and implicit rules or restrictions that a model must follow during training or inference. It helps enforce domain-specific knowledge by penalizing or restricting outputs that violate these constraints.

*How the paper uses it:* ContextGAN uses a constraint matrix to explicitly encode domain rules that guide the discriminator in identifying rule violations.

▶ [Loss Function | Convexity | Optimization | Constrained ...](https://www.youtube.com/watch?v=OdYNB1KRwKo) — RoboSathi · 1:27:37

## Already in your library

- [VAPS58:"Generative Adversarial Networks: Dynamics and ...](https://www.youtube.com/watch?v=aPyA65XvWro) — also for: Generating Higher-Quality Anti-Forensics DeepFakes with Adversarial Sharpening Mask (Pradeep K. Atrey)
- [Generative Adversarial Networks (GANs) - Computerphile](https://www.youtube.com/watch?v=Sw9r8CL98N0) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the ContextGAN paper. The beginner project focuses on implementing and visualizing the constraint matrix concept in a simple GAN setting, using your existing Python and ML skills. The intermediate project involves reimplementing the core ContextGAN method with differential privacy on a public tabular dataset, comparing fidelity and privacy metrics against a baseline GAN. The advanced project tackles a future direction from the paper by extending the constraint matrix to handle interdependent domain rules, exploring automation of constraint extraction, and evaluating the impact on synthetic data quality and privacy.

### Beginner — Constraint Matrix Integration in GAN Discriminator
*Effort: a weekend, ~8 hours*

You build a simple GAN on a small tabular dataset (e.g., UCI Adult dataset) and implement a constraint matrix that encodes a few explicit domain rules (e.g., age ranges, income brackets). You integrate this constraint matrix into the discriminator's loss function to penalize synthetic samples violating these rules and visualize the effect on generated data.

**Why it shows you understood the paper:** This project demonstrates you understand how ContextGAN encodes domain knowledge explicitly via a constraint matrix and integrates it into GAN training to enforce domain compliance.

**Grounded in:** Introduction of a constraint matrix to explicitly encode domain-specific rules (both explicit and implicit) guiding synthetic data generation.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, scikit-learn, matplotlib

**Data:** UCI Adult dataset (publicly available) used as a proxy for a tabular dataset with domain rules.

**Build it:**

1. Load and preprocess the UCI Adult dataset for GAN training.
2. Define a simple GAN architecture using PyTorch.
3. Create a constraint matrix encoding simple domain rules (e.g., age must be between 18 and 90).
4. Modify the discriminator loss to add penalties for synthetic samples violating constraints.
5. Train the GAN with and without the constraint matrix and compare generated data distributions.
6. Visualize and report how the constraint matrix affects rule compliance in synthetic data.

**Ships as:** A Jupyter notebook showing GAN training with constraint matrix integration, visualizations of synthetic data distributions, and a README explaining the constraint matrix role.

**Stretch goal:** Add implicit domain rules (e.g., conditional constraints) to the constraint matrix and observe effects.

### Intermediate — Reimplementation of ContextGAN with Differential Privacy on Tabular Data
*Effort: 2 weekends, ~20 hours*

You reimplement the core ContextGAN method from the paper: a GAN with a constraint matrix integrated into the discriminator loss and differential privacy applied via DP-SGD to the discriminator. You train this on a public healthcare or finance tabular dataset (e.g., UCI Heart Disease or Credit Card Default dataset) and compare fidelity metrics (e.g., Earth Mover's Distance) and privacy attack resilience against a baseline CTGAN model.

**Why it shows you understood the paper:** This project proves you can faithfully reproduce the paper's main technical contributions—constraint matrix integration and differential privacy in GAN training—and evaluate their impact on synthetic data quality and privacy.

**Grounded in:** Integration of the constraint matrix into the GAN discriminator's loss function to enforce domain compliance; Application of differential privacy mechanisms (DP-SGD) to the discriminator to protect sensitive data during training.

**Tech stack:** Python 3.11, PyTorch, Opacus (for DP-SGD), scikit-learn, numpy, matplotlib

**Data:** UCI Heart Disease dataset or UCI Credit Card Default dataset as publicly available proxies for healthcare and finance data.

**Build it:**

1. Preprocess the chosen tabular dataset for GAN training.
2. Implement a constraint matrix encoding domain rules relevant to the dataset (e.g., medical thresholds or financial constraints).
3. Build a GAN with discriminator loss augmented by constraint penalties.
4. Integrate DP-SGD using Opacus to make the discriminator differentially private.
5. Train ContextGAN and a baseline CTGAN on the dataset.
6. Evaluate and compare synthetic data fidelity using Earth Mover's Distance and privacy attack resilience (e.g., membership inference attack).
7. Document results and insights in a detailed README.

**Ships as:** A GitHub repo with code to train ContextGAN with DP, evaluation scripts comparing to CTGAN, and a report on fidelity and privacy metrics.

**Stretch goal:** Add a simple membership inference attack implementation to empirically test privacy robustness.

### Advanced — Extending Constraint Matrix for Complex Interdependent Domain Rules
*Effort: 3+ weeks*

You extend the ContextGAN framework by designing and implementing an enhanced constraint matrix capable of encoding complex, interdependent domain rules, addressing a key limitation noted in the paper. You explore automating constraint extraction from domain knowledge sources (e.g., simple rule templates or knowledge graphs). You evaluate the impact of this extension on synthetic data quality and privacy on a public dataset with complex domain rules (e.g., MIMIC-III subset or a finance dataset with regulatory constraints).

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper, demonstrating deep comprehension of the constraint matrix concept and practical challenges in scaling it to complex domains, while contributing a novel extension.

**Grounded in:** Refinement of the constraint matrix to handle complex rule interdependencies in domains with intricate domain knowledge.

**Tech stack:** Python 3.11, PyTorch, Opacus, networkx (for rule dependency graphs), rdflib or owlready2 (optional for knowledge graph parsing), scikit-learn, matplotlib

**Data:** A public healthcare dataset with complex domain rules (e.g., a subset of MIMIC-III or a finance dataset with regulatory constraints) or a simulated dataset with interdependent constraints.

**Build it:**

1. Review the original constraint matrix implementation and identify limitations in handling interdependent rules.
2. Design a data structure (e.g., graph-based) to represent interdependencies among domain rules.
3. Implement an extended constraint matrix that incorporates these interdependencies into the discriminator loss.
4. Experiment with simple automation methods to extract or update constraints from structured domain knowledge sources.
5. Train the extended ContextGAN on the chosen dataset and evaluate synthetic data fidelity, domain compliance, and privacy metrics.
6. Compare results with the original constraint matrix implementation and document findings.
7. Prepare a comprehensive report discussing challenges, solutions, and potential for further automation.

**Ships as:** A GitHub repository with extended ContextGAN code, scripts for constraint extraction, evaluation results, and a detailed README explaining the approach and findings.

**Stretch goal:** Integrate a real knowledge graph (e.g., SNOMED CT for healthcare) to automate constraint extraction and evaluate impact.
