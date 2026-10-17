---
title: "734 · The signal is coming from inside the noun phrase! Tracking semantic proto-role inferences during sentence processing — Marten van Schijndel"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marten-van-schijndel"
source_hash: "e8cd89e9218b3f92989a92b07be0f7782f672079bff4156dba3e0cd28ff60909"
sequence: 734
generator: "outreach-garden: managed"
---

# 734 · The signal is coming from inside the noun phrase! Tracking semantic proto-role inferences during sentence processing

## At a glance

- **Professor:** Marten van Schijndel
- **Institution:** Cornell University
- **Paper:** [The signal is coming from inside the noun phrase! Tracking semantic proto-role inferences during sentence processing](https://aclanthology.org/2026.scil-main.40.pdf)
- **Authors:** Lucas Y. Li, Zander Lynch, Marten van Schijndel
- **Year:** 2026

## Paper overview

This paper investigates how both humans and large language models (LLMs) infer semantic proto-role properties (PRPs) — features that describe the roles entities play in events — from different parts of a sentence. The authors introduce a novel interpretability method, Generalized Contextual Decomposition for Transformers (GCD-T), to analyze which words (arguments, modifiers, predicates) contribute to these inferences in Transformer-based LLMs. They find that both humans and models rely heavily on nouns and modifiers, not just verbs, to determine these semantic roles, even when the argument appears after the verb. The study combines computational analysis with human experiments to validate these findings.

### Why it matters

**Research problem:** Understanding which parts of a sentence (verbs, arguments, modifiers) contribute to the inference of semantic proto-role properties during sentence processing, and how this compares between humans and large language models.

**Why it matters:** Semantic proto-roles are fundamental to understanding event structure and meaning in language. Clarifying how these roles are inferred incrementally during sentence processing can improve psycholinguistic theories and enhance computational models of language understanding, which is crucial for advancing natural language processing applications.

**Key contributions:**

- Introduction of GCD-T, a novel feature attribution method for Transformer-based language models.
- Empirical demonstration that both nouns (arguments) and modifiers contribute significantly to proto-role property inferences in LLMs.
- Evidence that LLMs use post-verbal arguments similarly to pre-verbal arguments for semantic role inference, challenging purely incremental models.
- Validation through human experiments showing that humans also rely heavily on non-verb elements for proto-role inferences.
- Insight that proto-agent properties rely more on argument cues, while proto-patient properties rely more on predicate cues.

## About the professor

**Marten van Schijndel** — Assistant Professor, Computational Linguistics, Cornell University.

Research interests: incremental representations that humans use to process language, differences between how language is used and how it is processed, relationships between computational language models and psycholinguistic data, neural network representations of language

### Research links

- [Faculty/profile page](https://vansky.github.io)
- [Lab website](https://c-psyd.github.io/)
- [GitHub](https://github.com/vansky)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Transformer interpretability methods
**The paper assumes:** Transformer architecture, attention mechanisms, and interpretability methods in natural language processing
**Already in this field?** Skip this entirely if you already understand Transformer models and common interpretability techniques for deep language models.

To understand the novel interpretability method Generalized Contextual Decomposition for Transformers (GCD-T) used in the paper, it is essential to grasp Transformer architectures and existing interpretability techniques. The rigorous course provides a deep, structured exploration of Transformers and large language models, ideal for readers seeking comprehensive knowledge. The fast track offers a concise, intuition-driven series on mechanistic interpretability of Transformers, suitable for readers who want a focused, quick understanding of interpretability methods without the full depth of a university course.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-4, about 6.8 hours — covering Transformer basics, Transformer-based models, large language models, and training, which provide the foundational knowledge needed to understand GCD-T.

*Why it unblocks this paper:* Stanford CME295 covers the Transformer architecture and large language models in depth, including model components and interpretability techniques, directly supporting understanding of GCD-T and its context within Transformer-based NLP models.

*If you want all of it:* 16.2 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Mechanistic Interpretability](https://www.youtube.com/playlist?list=PLsOxCO6LfuKE0YK1JyOFDTu3l0BO5z58h) — Craft Overflow · 14 videos · 12.7h across 14 episodes

**Watch only this:** Episodes 1-5, about 4.5 hours — covering the story and theory of mechanistic interpretability, key interpretability concepts, and foundational Transformer building blocks, which are essential to grasp GCD-T's approach.

*Why it unblocks this paper:* The Mechanistic Interpretability playlist offers focused, clear explanations on understanding how AI models, especially Transformers, work internally, emphasizing interpretability methods relevant to GCD-T without requiring a full course commitment.

*If you want all of it:* 12.7 hours across 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on semantic proto-role inferences in sentence processing, start by grounding yourself in foundational linguistic theories of semantic proto-roles and thematic relations, followed by gaining insights into incremental sentence processing from a psycholinguistic perspective. Next, explore interpretability methods for Transformer models to appreciate the novel Generalized Contextual Decomposition for Transformers (GCD-T) introduced in the paper. Finally, focus on the core concept of noun phrases and their role in semantic role inference as emphasized by the authors.

### Semantic proto-role theory *(prerequisite)*
This section covers foundational linguistic theory on semantic roles and proto-roles, which are central to understanding how entities participate in events. The selected lecture provides a rigorous academic treatment of thematic relations and semantic roles, essential for grasping the theoretical background of the paper.

*How the paper uses it:* The paper investigates semantic proto-role properties, so understanding the underlying theory of semantic roles is crucial.

▶ [SEMANTICS-20: Thematic Relations](https://www.youtube.com/watch?v=kGr04Puuo_Q) — Dr. Nimer Abusalim (The University of Jordan) · 11:46 · 9y ago

### Incremental sentence processing *(prerequisite)*
Incremental sentence processing is a key psycholinguistic concept explaining how humans interpret sentences word-by-word in real time. The chosen university lecture offers a comprehensive and advanced overview of sentence processing models, which aligns with the paper's focus on incremental inference of proto-role properties.

*How the paper uses it:* The paper compares human and model incremental processing of proto-role information during sentence comprehension.

▶ [Lec 15: Sentence processing](https://www.youtube.com/watch?v=cjOnehGe6lY) — NPTEL IIT Guwahati · 1:05:57 · 3y ago

### Transformer interpretability methods *(prerequisite)*
Understanding interpretability methods for Transformer models is essential to appreciate the novel GCD-T method introduced in the paper. The selected seminar talk from Columbia University provides an in-depth and research-level exploration of Transformer explainability techniques, which contextualizes the paper's methodological contributions.

*How the paper uses it:* The paper introduces GCD-T, a new interpretability method for Transformer-based language models.

▶ [Hila Chefer - Transformer Explainability](https://www.youtube.com/watch?v=A1tqsEkSoLg) — Columbia Vision Seminar · 1:03:26 · 4y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Although no direct recorded talk by the paper authors on this exact work is available, understanding the syntactic and semantic structure of noun phrases is critical. The selected university lecture from the University of Edinburgh provides an advanced, academic-level discussion on noun phrase structure, directly relevant to the paper's core finding that semantic proto-role signals come from inside noun phrases.

*How the paper uses it:* The paper's core insight is that semantic proto-role inferences arise significantly from noun phrases and their modifiers.

▶ [Generative Syntax 5.1 - Noun Phrases](https://www.youtube.com/watch?v=Vs8Xq2elS-c) — Linguistics and English Language at the University of Edinburgh · 12:45 · 12y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how semantic proto-role properties are inferred during sentence processing by humans and language models. We start with core linguistic ideas about semantic roles and incremental sentence processing, then cover interpretability methods for Transformers, and finally focus on the paper's novel method, Generalized Contextual Decomposition for Transformers (GCD-T). This progression builds intuition about language understanding, model analysis, and the paper's contributions in a concise, accessible way.

### Semantic proto-role theory *(prerequisite)*
Semantic proto-roles are basic semantic properties that describe the roles entities play in events, such as agents or patients. Understanding these roles helps clarify how meaning is structured in sentences beyond just syntactic roles. This foundational linguistic theory underpins the paper's focus on how proto-role properties are inferred.

*How the paper uses it:* The paper investigates how semantic proto-role properties are inferred from different sentence components by humans and models.

▶ [[Introduction to Linguistics] Theta Roles / Thematic Roles](https://www.youtube.com/watch?v=FWgWbJlxvds) — TrevTutor · 7:26 · 7y ago

### Incremental sentence processing *(prerequisite)*
Incremental sentence processing refers to how humans interpret sentences word-by-word as they read or hear them, rather than waiting for the entire sentence. This concept is key to understanding how semantic roles might be inferred in real time. It provides psycholinguistic context for comparing human and model sentence comprehension.

*How the paper uses it:* The paper compares how humans and Transformer models incrementally infer proto-role properties during sentence comprehension.

▶ [Sentence Processing.    Garden Path and Constraint-Based Model.](https://www.youtube.com/watch?v=GqvI_Gy1n3g) — Melanne Caong · 24:39 · 5y ago

### Transformer interpretability methods *(prerequisite)*
Transformer interpretability methods analyze how Transformer-based language models make predictions by revealing which parts of the input contribute to outputs. Understanding these methods is essential to grasp the paper's novel interpretability technique. This background helps appreciate how the paper decomposes model decisions about proto-role properties.

*How the paper uses it:* The paper introduces a new interpretability method, GCD-T, to analyze Transformer contributions to proto-role inferences.

▶ [Hila Chefer - Transformer Explainability](https://www.youtube.com/watch?v=A1tqsEkSoLg) — Columbia Vision Seminar · 1:03:26 · 4y ago

### Generalized Contextual Decomposition for Transformers
Generalized Contextual Decomposition for Transformers (GCD-T) is a novel method that breaks down Transformer model outputs to quantify how different sentence parts influence predictions. This method allows precise attribution of semantic proto-role property inferences to nouns, modifiers, and verbs. Learning about GCD-T provides direct insight into the paper's core technical contribution.

*How the paper uses it:* GCD-T is the paper's central novel method for interpreting Transformer-based proto-role property predictions.

▶ [Stanford XCS224U: NLU I Contextual Word Representations, Part 2: Transformer I Spring 2023](https://www.youtube.com/watch?v=yqV_YfBBtK0) — Stanford Online · 17:41 · 3y ago

## Already in your library

- [Semantic Layers in the Age of AI are 100% Needed](https://www.youtube.com/watch?v=K_VPF9URZo4) — also for: Semantic Data Processing with Holistic Data Understanding (Aditya G. Parameswaran)
- [Semantics | Features, Roles, Relation of Semantics, Collocations | Lecture: 24 (Linguistics-I)](https://www.youtube.com/watch?v=PvAAm_4LFj4) — also for: Click2Graph: Interactive Panoptic Video Scene Graphs from a Single Click (B. S. Manjunath)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [25. Interpretability](https://www.youtube.com/watch?v=wDLzLN1tArA) — also for: Interpretability from the Ground Up: Stakeholder-Centric Design of Automated Scoring in Educational Assessments (Chris Piech)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformers Step-by-Step Explained (Attention Is All You Need)](https://www.youtube.com/watch?v=avjX3QrYkls) — also for: In-Context Algebra (David Bau)
- [Vision Transformers explained](https://www.youtube.com/watch?v=tkZMj1VKD9s) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Introduction to Transformers | Transformers Part 1](https://www.youtube.com/watch?v=BjRVS2wTtcA) — also for: Comparative Analysis of Transformers to Support Fine-Grained Emotion Detection in Short-Text Data (David C. Wilson)
- [Illustrated Guide to Transformers Neural Network: A step by ...](https://www.youtube.com/watch?v=4Bdc55j80l8) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's core contribution: how semantic proto-role properties (PRPs) are inferred incrementally by Transformer models and humans, focusing on the role of nouns, modifiers, and verbs. Starting from a small-scale reproduction of the GCD-T interpretability method on a simple example, you then reimplement and apply GCD-T on the Semantic Proto-Role Labelling (SPRL) task using the authors' released code. Finally, you extend the method to analyze a broader set of proto-role properties or more complex sentence structures, addressing one of the paper's stated future directions.

### Beginner — Reproduce GCD-T Attribution on Proto-Role Example
*Effort: a weekend, ~8 hours*

You build a small script that uses the Generalized Contextual Decomposition for Transformers (GCD-T) method to decompose the contributions of nouns, verbs, and modifiers to proto-role property predictions on a handful of example sentences. You visualize and compare the attribution scores for these components, reproducing a simplified version of one of the paper's key figures.

**Why it shows you understood the paper:** This project shows you understand the core interpretability method introduced in the paper and how it quantifies contributions of sentence parts to semantic proto-role inferences in Transformer models.

**Grounded in:** Introduction of GCD-T, a novel feature attribution method for Transformer-based language models.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, matplotlib

**Data:** A small set of example sentences constructed to illustrate proto-role inferences; no large dataset required.

**Build it:**

1. Clone and explore the authors' GCD-T code repository at https://github.com/lucas-y-li/decomposing_transformers.
2. Select or write a few example sentences illustrating proto-agent and proto-patient properties.
3. Use GCD-T to compute contribution scores of nouns, verbs, and modifiers for these sentences using a pretrained RoBERTa or GPT-2 model.
4. Visualize the attribution scores with bar charts or heatmaps to show which words contribute most to proto-role predictions.
5. Write a README explaining the method, your examples, and how the results align with the paper's findings.

**Verified links from the paper:**

- <https://github.com/lucas-y-li/decomposing_transformers> — released by the paper's authors

**Ships as:** A GitHub repo with scripts and notebooks demonstrating GCD-T attribution on example sentences, including visualizations and explanations.

**Stretch goal:** Add a simple masking experiment replacing nouns or verbs with pseudo-words to observe changes in attribution scores.

### Intermediate — Apply GCD-T to SPRL Task with Authors' Code
*Effort: 1-3 weekends*

You reimplement the paper's core method by running the authors' GCD-T code on the Semantic Proto-Role Labelling (SPRL) task using the Decomp dataset. You quantify and compare the contributions of arguments, modifiers, and predicates to proto-role property predictions, and compare your results to a simple baseline such as standard attention weights or gradient-based attribution.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' released code and data, reproduce their core quantitative analyses, and understand how GCD-T reveals the role of different sentence components in semantic proto-role inference.

**Grounded in:** The authors develop Generalized Contextual Decomposition for Transformers (GCD-T), an interpretability method that decomposes Transformer model outputs to quantify contributions of sentence components to proto-role property predictions.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, matplotlib, scikit-learn

**Data:** Semantic Proto-Role Labelling (SPRL) task data from the Decomp dataset as used in the paper; accessed or simulated as described in the authors' repository.

**Build it:**

1. Clone the authors' GCD-T repository and set up the environment with required dependencies.
2. Download or prepare the SPRL Decomp dataset as per the repository instructions.
3. Run the GCD-T method on pretrained RoBERTa or GPT-2 models fine-tuned on the SPRL task.
4. Compute contribution scores for arguments, modifiers, and predicates across the dataset.
5. Implement a simple baseline attribution method (e.g., attention weights or integrated gradients) for comparison.
6. Analyze and visualize the differences in attribution between GCD-T and the baseline, reporting metrics similar to the paper.
7. Document your process, results, and insights in a detailed README.

**Verified links from the paper:**

- <https://github.com/lucas-y-li/decomposing_transformers> — released by the paper's authors

**Ships as:** A GitHub repo with code to run GCD-T on SPRL data, baseline comparisons, visualizations, and a report reproducing key paper results.

**Stretch goal:** Add a small human experiment simulation by masking sentence components and measuring changes in model predictions.

### Advanced — Extend GCD-T Analysis to Additional Proto-Role Properties
*Effort: a few weeks*

You extend the GCD-T interpretability method to analyze a broader range of semantic proto-role properties beyond proto-agentive and proto-patient, or apply it to more complex sentence structures. This addresses the paper's limitation of focusing on a subset of proto-role properties. You implement new analyses, visualize results, and discuss how these findings relate to incremental sentence processing theories.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's methodology and limitations, and the ability to creatively apply and extend it to new linguistic phenomena, potentially contributing novel insights.

**Grounded in:** Extending analysis to a broader range of proto-role properties and more complex sentence structures is a stated future direction.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, matplotlib, pandas

**Data:** The SPRL dataset or a similar public dataset annotated with additional proto-role properties; if unavailable, extend existing annotations or simulate additional properties based on linguistic criteria.

**Build it:**

1. Review the paper's discussion on proto-role properties and identify additional properties to analyze.
2. Extend or augment the SPRL dataset annotations to include these properties, or simulate them if necessary.
3. Modify the GCD-T code to handle and output attribution scores for the new proto-role properties.
4. Run experiments on pretrained Transformer models fine-tuned for these extended properties.
5. Analyze how contributions of sentence components differ for these new properties compared to proto-agentive and proto-patient.
6. Visualize and document findings, relating them to incremental processing theories and the paper's conclusions.
7. Write a comprehensive report discussing methodology, results, limitations, and future work.

**Verified links from the paper:**

- <https://github.com/lucas-y-li/decomposing_transformers> — released by the paper's authors

**Ships as:** A GitHub repo with extended GCD-T code, datasets or annotations, analysis scripts, visualizations, and a detailed report discussing new proto-role property insights.

**Stretch goal:** Investigate how verbal selectional restrictions influence proto-role inferences by integrating lexical entailment features into the analysis.

_The SPRL Decomp dataset and annotations for additional proto-role properties may require access or adaptation; verify dataset availability and licensing before starting._
