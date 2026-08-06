---
title: "247 · Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions — Tengfei Ma"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tengfei-ma"
source_hash: "bed13cef3639522dc6f160c5dda37b34df01393174a1a4239f391cab73c26adf"
sequence: 247
generator: "outreach-garden: managed"
---

# 247 · Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions

## At a glance

- **Professor:** Tengfei Ma
- **Institution:** Stony Brook University
- **Paper:** [Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions](https://arxiv.org/pdf/2511.06662)
- **Authors:** Franklin Lee, Tengfei Ma
- **Year:** 2025

## Paper overview

This paper presents a novel system that combines electronic health records (EHRs) and pharmacologic knowledge graphs (KGs) to predict drug-drug interactions (DDIs), including those involving drugs not previously seen in knowledge graphs. The system uses a fusion model (teacher) that integrates KG and patient-specific EHR data to learn drug interaction mechanisms, and a distilled EHR-only model (student) that can generalize to new drugs without KG data. This approach improves precision and interpretability of DDI alerts, reducing false positives and supporting clinical decision-making.

### Why it matters

**Research problem:** Drug-drug interactions cause preventable harm, but many clinically important mechanisms remain unknown. Existing models relying solely on knowledge graphs fail to predict interactions for unseen drugs, while EHR-based models are noisy and site-dependent. There is a need for a system that can accurately predict DDIs for both known and unseen drugs, incorporating patient-specific context.

**Why it matters:** Accurate prediction of DDIs is critical for patient safety and effective pharmacovigilance. Pharmacists require precise, mechanism-specific alerts that consider patient context to avoid harmful drug combinations and reduce alert fatigue caused by imprecise warnings.

**Key contributions:**

- First system to condition KG relation scoring on patient-level EHR context and distill that reasoning into an EHR-only model for zero-shot DDI prediction.
- Development of a fusion gating mechanism to integrate heterogeneous KG and EHR embeddings while preserving interpretability.
- Design of a clinically aligned evaluation protocol with leakage-safe negatives and exact mechanism matching to DrugBank's 86-way ontology.
- Demonstration of improved precision and F1 scores over KG-only, EHR-only, and SMILES-based baselines in both seen and unseen drug settings.
- Provision of mechanism-specific, patient-conditioned alerts that are interpretable and actionable for pharmacists.

## About the professor

**Tengfei Ma** — Assistant Professor, Department of Biomedical Informatics, Stony Brook University.

Research interests: machine learning, natural language processing (NLP) and biomedical informatics

### Research links

- [Faculty/profile page](https://sites.google.com/site/matf0123)
- [Professor website](https://bmi.stonybrookmedicine.edu/people/tengfei_ma)
- [Resolved homepage](https://sites.google.com/site/matf0123/)
- [Google Scholar](https://scholar.google.com/citations?user=9OvNakkAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on dual-pathway fusion of EHRs and knowledge graphs for predicting unseen drug-drug interactions, start with foundational concepts including knowledge graph embeddings, electronic health record data modeling, teacher-student model distillation, and multimodal fusion gating mechanisms. These prerequisites provide the necessary background on the data representations, model architectures, and fusion techniques used. Finally, focus on the core concept of the fusion model for drug-drug interaction prediction, emphasizing the authors' own talk if available, to grasp the novel contributions and specific application context.

### Knowledge graph embeddings *(prerequisite)*
Understanding knowledge graph embeddings is essential as they form the basis for representing pharmacologic knowledge graph data in the fusion model. These embeddings capture relational and semantic information crucial for scoring drug interactions.

*How the paper uses it:* The fusion teacher model integrates KG embeddings with EHR embeddings to learn drug interaction mechanisms.

▶ [Stanford CS224W: Machine Learning w/ Graphs I 2023 I Knowledge Graph Embeddings](https://www.youtube.com/watch?v=isI_TUMoP60) — Stanford Online · 2 years ago

### Electronic health record data modeling *(prerequisite)*
Modeling EHR data is critical to extract patient-specific features that condition the KG relation scoring. This background helps understand how noisy, site-dependent EHR data is processed and represented for the fusion model.

*How the paper uses it:* Patient-level EHR context is used to condition KG relation scoring and to build the EHR-only student model.

▶ [Integrating Structured & Unstructured EHR Data into CDM | Michael Matheny, MD, MS, MPH | Aug 10 2020](https://www.youtube.com/watch?v=asz-TcYbhhE) — Sentinel Initiative · 5 years ago

### Teacher-student model distillation *(prerequisite)*
Knowledge distillation transfers knowledge from a complex teacher model to a simpler student model, enabling zero-shot prediction for unseen drugs using only EHR data. Understanding this process is key to grasping the paper's approach to generalization.

*How the paper uses it:* The paper distills the fusion teacher model into an EHR-only student model for zero-shot DDI prediction.

▶ [Lecture 10 - Knowledge Distillation | MIT 6.S965](https://www.youtube.com/watch?v=IIqf-oUTHe0) — MIT HAN Lab · 3 years ago

### Multimodal fusion gating mechanisms *(prerequisite)*
Multimodal fusion gating mechanisms enable effective integration of heterogeneous KG and EHR embeddings while preserving interpretability. This concept explains why naive concatenation fails and how the paper's fusion gating improves performance.

*How the paper uses it:* The fusion gating mechanism integrates KG and EHR embeddings in the teacher model to improve precision and interpretability.

▶ [Lecture 5 – Multimodal Fusion (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=Hsv1mOIZ1Ag) — Paul Liang · 11 months ago

### Fusion model for drug-drug interaction prediction *(the paper's own talk)*
This core concept covers the paper's novel fusion framework that combines KG and EHR data to predict DDIs, including for unseen drugs. It highlights the teacher-student architecture, mechanism-specific alerts, and clinical evaluation protocols.

*How the paper uses it:* Central to the paper, this model embodies the novel dual-pathway fusion approach for DDI prediction.

▶ [Visualizing EHR data in a Knowledge Graph](https://www.youtube.com/watch?v=ybWOSUjsk2k) — i2b2 tranSMART Foundation · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's novel approach to predicting drug-drug interactions by integrating electronic health records (EHRs) and knowledge graphs (KGs). We start with basics of EHR data modeling and knowledge graph embeddings to grasp the data representations, then cover teacher-student model distillation and multimodal fusion gating mechanisms to understand the core methods. Finally, we explore the fusion model for drug-drug interaction prediction, tying all concepts together in the context of the paper.

### Electronic health record data modeling *(prerequisite)*
Electronic health records (EHRs) contain detailed patient data that must be structured and modeled effectively for machine learning. Understanding how EHR data is organized and represented helps grasp how patient-specific features are extracted for the model.

*How the paper uses it:* The paper uses patient-level EHR data to derive drug embeddings and condition DDI predictions on patient context.

▶ [EHR Chapter 1 Lecture: Introduction to Electronic Health Records](https://www.youtube.com/watch?v=9nVd3-gKP0g) — Cody Closson · 9 years ago

### Knowledge graph embeddings *(prerequisite)*
Knowledge graph embeddings transform entities and relations in a graph into continuous vector spaces, enabling machine learning models to capture complex relationships. This is crucial for representing pharmacologic knowledge graphs in the fusion model.

*How the paper uses it:* The fusion teacher model integrates KG embeddings to represent known drug interaction mechanisms.

▶ [Stanford CS224W: Machine Learning w/ Graphs I 2023 I Knowledge Graph Embeddings](https://www.youtube.com/watch?v=isI_TUMoP60) — Stanford Online · 2 years ago

### Teacher-student model distillation *(prerequisite)*
Teacher-student distillation transfers knowledge from a complex, multimodal teacher model to a simpler student model, enabling the student to generalize better, especially in zero-shot scenarios. This technique reduces dependency on KG data for unseen drugs.

*How the paper uses it:* The paper distills the fusion teacher model into an EHR-only student model for zero-shot DDI prediction.

▶ [Lecture 10 - Knowledge Distillation | MIT 6.S965](https://www.youtube.com/watch?v=IIqf-oUTHe0) — MIT HAN Lab · 3 years ago

### Multimodal fusion gating mechanisms *(prerequisite)*
Fusion gating mechanisms intelligently combine heterogeneous data modalities by weighting and integrating their embeddings, preserving interpretability and improving prediction accuracy. This is more effective than naive concatenation.

*How the paper uses it:* The fusion teacher model uses a gating mechanism to integrate KG and EHR embeddings while maintaining interpretability.

▶ [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — ISTA Conference · 23:01 · 2 years ago

### Paper authors talk *(the paper's own talk)*
Direct talks from the authors can provide insights into their motivation, approach, and results, complementing technical understanding with their perspective and clarifications.

*How the paper uses it:* Hearing the authors discuss their fusion framework helps contextualize the technical contributions and clinical impact.

▶ [Visualizing EHR data in a Knowledge Graph](https://www.youtube.com/watch?v=ybWOSUjsk2k) — i2b2 tranSMART Foundation · 5 years ago

## Already in your library

- [MedAI #88: Distilling Step-by-Step! Outperforming LLMs with ...](https://www.youtube.com/watch?v=fnDUaDDrR4c) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [Knowledge Distillation Simplified | Teacher to Student Model ...](https://www.youtube.com/watch?v=_3asoj46jVw) — also for: When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting (Sangmi Lee Pallickara)
- [MedAI #76: Multimodal learning with graphs for biomedical ...](https://www.youtube.com/watch?v=CWOCDnNvPhg) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions." The beginner project focuses on implementing and visualizing the fusion gating mechanism on synthetic or simplified data to grasp the core fusion idea. The intermediate project involves reimplementing the teacher-student fusion framework on a public or simulated dataset to reproduce key metrics and compare against a baseline. The advanced project extends the method by addressing a stated limitation—such as incorporating uncertainty calibration or real-time clinical feedback simulation—to explore practical improvements and clinical utility.

### Beginner — Fusion Gating Mechanism Visualization for Drug Interaction Embeddings
*Effort: a weekend, ~8 hours*

You build a small prototype that implements the fusion gating mechanism described in the paper to combine two sets of drug embeddings (simulated EHR-based and KG-based) and visualize the gating weights and fused embeddings. This project uses synthetic or simplified embeddings to demonstrate how the gating balances heterogeneous information sources.

**Why it shows you understood the paper:** This project shows you understand the core fusion mechanism that integrates heterogeneous embeddings while preserving interpretability, a key contribution of the paper.

**Grounded in:** Development of a fusion gating mechanism to integrate heterogeneous KG and EHR embeddings while preserving interpretability.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic drug embeddings generated to simulate EHR and KG embedding vectors; no real dataset required.

**Build it:**

1. Generate synthetic embeddings representing EHR-derived and KG-derived drug features.
2. Implement the gating mechanism that computes gating weights and fuses the two embeddings per drug pair.
3. Visualize gating weights and fused embeddings using plots to show how the model balances inputs.
4. Write a README explaining the gating mechanism and how the visualization relates to the paper.

**Ships as:** A Jupyter notebook with code and plots demonstrating the fusion gating mechanism on synthetic embeddings, plus a README linking the implementation to the paper's fusion contribution.

**Stretch goal:** Add interactive sliders to adjust gating parameters and observe changes in fusion outputs.

### Intermediate — Reimplementation of Teacher-Student Fusion Model for DDI Prediction
*Effort: 2 weekends, ~20 hours*

You reimplement the core teacher-student fusion framework from the paper using publicly available or simulated EHR and drug KG data. You train a fusion teacher model combining KG and EHR embeddings and distill a student model using only EHR features. You evaluate precision and F1 on seen and unseen drug splits and compare against a simple baseline such as an EHR-only model.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main method, including multimodal fusion and knowledge distillation, and to reproduce key evaluation metrics, proving deep comprehension of the approach.

**Grounded in:** The authors propose a teacher-student framework where a fusion teacher model combines KG embeddings and EHR-derived drug embeddings via a gating mechanism to score drug relations across 86 pharmacologic mechanisms. The student model is distilled from the teacher and uses only EHR features to enable zero-shot prediction for drugs absent from the KG.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook

**Data:** Simulated or publicly available EHR-like drug co-administration data and a simplified drug knowledge graph constructed from DrugBank public data or synthetic KG edges; no authors' code or dataset available.

**Build it:**

1. Collect or simulate a small drug knowledge graph and EHR-derived drug co-occurrence embeddings.
2. Implement the fusion teacher model with gating mechanism to combine KG and EHR embeddings.
3. Train the teacher model to predict drug-drug interaction relations on a training split.
4. Implement knowledge distillation to train the EHR-only student model for zero-shot prediction.
5. Evaluate precision and F1 on held-out drug pairs and unseen drugs, comparing to an EHR-only baseline.
6. Document results and relate them to the paper's reported metrics.

**Ships as:** A GitHub repository with code, training scripts, evaluation results, and a detailed README explaining the reimplementation and metric comparisons.

**Stretch goal:** Add a simple interpretability module that outputs mechanism-specific scores for predicted DDIs.

### Advanced — Extending Fusion Model with Uncertainty Calibration and Abstention for Safer DDI Alerts
*Effort: 3+ weeks*

You extend the teacher-student fusion framework by incorporating uncertainty calibration and an abstention mechanism to improve the reliability and safety of DDI alerts, addressing a key future direction from the paper. You simulate clinical feedback loops or real-time data streams to test how calibrated confidence scores can reduce false positives and alert fatigue.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions, applying advanced ML techniques to enhance clinical utility and safety of the fusion model, potentially opening a conversation with the professor.

**Grounded in:** Calibrating uncertainty and adding abstention mechanisms to improve reliability and safety of alerts.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook, Matplotlib

**Data:** Simulated or public proxy datasets for EHR and drug KG as in the intermediate project, augmented with synthetic uncertainty labels or confidence scores.

**Build it:**

1. Reimplement or reuse the fusion teacher-student model from the intermediate project.
2. Implement uncertainty calibration techniques such as temperature scaling or Monte Carlo dropout.
3. Add an abstention mechanism that allows the model to withhold low-confidence predictions.
4. Simulate clinical feedback by generating synthetic patient contexts and drug pairs with known interaction uncertainty.
5. Evaluate the impact of calibration and abstention on precision, recall, and false positive rates.
6. Document the methodology, results, and implications for clinical decision support.

**Ships as:** A comprehensive GitHub repository with extended fusion model code, calibration and abstention modules, evaluation scripts, and a README discussing improvements over the base model and clinical relevance.

**Stretch goal:** Integrate a simple web-based dashboard to visualize calibrated confidence scores and abstention decisions for pharmacists.
