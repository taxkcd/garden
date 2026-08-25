---
title: "492 · Medi-Gemma: A Hybrid Clinical Decision Support System Integrating Deterministic EMR Analytics and Retrieval-Augmented Generation — Usman Roshan"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-usman-roshan"
source_hash: "d84eaba116e56289ba75f7ba3a5e0ec2d47d6a902c765c25378898f6cd87365d"
sequence: 492
generator: "outreach-garden: managed"
---

# 492 · Medi-Gemma: A Hybrid Clinical Decision Support System Integrating Deterministic EMR Analytics and Retrieval-Augmented Generation

## At a glance

- **Professor:** Usman Roshan
- **Institution:** NJIT
- **Paper:** [Medi-Gemma: A Hybrid Clinical Decision Support System Integrating Deterministic EMR Analytics and Retrieval-Augmented Generation](https://arxiv.org/pdf/2607.04907)
- **Authors:** Mohammed Saim Ahmed Quadri, Yunzhe Xue, Justin W. Ady, Usman Roshan
- **Year:** 2026

## Paper overview

This paper presents Medi-Gemma, a clinical decision support system that combines precise data analytics on electronic medical records (EMRs) with advanced language models to assist clinicians in wound pathology triage and workflow automation. It separates exact data computations from natural language reasoning to reduce errors and improve safety in clinical AI applications.

### Why it matters

**Research problem:** Large Language Models (LLMs) used in clinical settings often suffer from hallucinations, poor quantitative reasoning over structured EMR data, and retrieval omissions, limiting their safe and effective deployment in healthcare.

**Why it matters:** Errors in clinical AI systems can lead to incorrect patient assessments and unsafe recommendations, which is critical in high-stakes medical environments where accuracy and safety are paramount.

**Key contributions:**

- A hybrid clinical decision support system explicitly separating deterministic computation from generative reasoning.
- A dynamic intent routing framework directing queries to specialized analytic or patient-specific pipelines.
- Ground Truth State Injection mechanism to incorporate the latest validated patient information before language model inference.
- Modular clinical architecture integrating retrieval-augmented generation, protocol mapping, and rule-based safety verification.

## About the professor

**Usman Roshan** — Associate Professor, Data Science, NJIT.

### Research links

- [Faculty/profile page](https://people.njit.edu/profile/usman)
- [Identity evidence](http://cs.njit.edu/usman)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** retrieval-augmented generation
**The paper assumes:** retrieval-augmented generation in natural language processing, hybrid AI architectures combining retrieval and generation
**Already in this field?** Skip this entirely if you already understand how retrieval-augmented generation works in modern NLP systems and its role in hybrid AI architectures.

To understand the core innovation of Medi-Gemma, which integrates deterministic EMR analytics with retrieval-augmented generation (RAG), it is essential to grasp how RAG combines information retrieval with language model generation. The rigorous course option offers a deep, university-level exploration of advanced NLP concepts including RAG, suitable for readers seeking comprehensive technical depth. The fast track provides a concise, practical introduction to RAG and related concepts, ideal for readers who want a focused, intuition-driven overview without committing many hours.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [UMass CS685: Advanced Natural Language Processing (Fall 2020)](https://www.youtube.com/playlist?list=PLWnsVgP6CzadmQX6qevbar3_vDBioWHJL) — Mohit Iyyer · 26 videos · 26.7h across 26 episodes

**Watch only this:** Lectures 1 (Language modeling), 7 (Attention mechanisms), 8 (Transformers and sequence-to-sequence models), 17 (Retrieval-augmented language models), about 4 hours total — these cover the essential NLP foundations and the specific RAG topic.

*Why it unblocks this paper:* The UMass CS685 Advanced Natural Language Processing course includes a dedicated lecture on Retrieval-augmented language models and covers foundational and advanced NLP topics that underpin the RAG architecture used in Medi-Gemma. This university-level series provides the rigorous theoretical and practical background needed to fully understand the paper's approach.

*If you want all of it:* 26.7 hours across 26 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Generative AI with Practical Foundations](https://www.youtube.com/playlist?list=PLgSpzMhGrZbgcCNYZD4pYWK8k3o1WLxP2) — Anudeep · 11 videos · 2.3h across 11 episodes

**Watch only this:** Episodes 1 (Generative AI Foundations), 7 (Embeddings Explained – Semantic Search and Meaning in AI), 9 (Retrieval-Augmented Generation (RAG) Explained from Scratch), about 40 minutes total — these provide a focused, practical overview of RAG and its components.

*Why it unblocks this paper:* This concise series by Anudeep offers a practical, clear introduction to generative AI foundations including a dedicated module on Retrieval-Augmented Generation (RAG), along with hands-on labs that illustrate key concepts like embeddings and vector search relevant to the paper's RAG implementation.

*If you want all of it:* 2.3 hours across 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Medi-Gemma system and its contributions, start with foundational knowledge on deterministic electronic medical record (EMR) analytics and retrieval-augmented generation (RAG) in NLP, as these underpin the system's architecture. Next, explore clinical AI safety and rule-based verification to appreciate the safety mechanisms critical in clinical decision support. Finally, focus on the core concept of hybrid clinical decision support systems and the authors' own detailed talk on Medi-Gemma to grasp the novel integration of deterministic analytics with generative models in clinical workflows.

### Deterministic electronic medical record analytics *(prerequisite)*
This section covers the precise and rule-based processing of EMR data, which forms the deterministic backbone of Medi-Gemma. Understanding EMR data structures, analytics, and challenges such as data heterogeneity and normalization is essential before delving into hybrid AI systems.

*How the paper uses it:* Medi-Gemma separates deterministic EMR data analytics from generative reasoning to improve accuracy and safety.

▶ [Family history risk predictions from the electronic medical records (EMR) - Nicholas Tatonetti](https://www.youtube.com/watch?v=4QpQjvuvMgw) — National Human Genome Research Institute · 20:24 · 7 years ago

### Retrieval-augmented generation in NLP *(prerequisite)*
Retrieval-augmented generation (RAG) is a key technique that enhances language models by integrating external knowledge retrieval, enabling more accurate and up-to-date responses. This foundational knowledge is critical to understanding how Medi-Gemma incorporates RAG for natural language clinical queries.

*How the paper uses it:* Medi-Gemma employs retrieval-augmented generation to augment language model reasoning with relevant patient data.

▶ [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks, with Patrick Lewis, Facebook AI](https://www.youtube.com/watch?v=JGpmQvlYRdU) — Natural Language Processing presentations · 1:22:32 · 6 years ago

### Clinical AI safety and rule-based verification *(prerequisite)*
Safety and compliance are paramount in clinical AI systems. This section introduces rule-based safety verification and regulatory considerations, providing context for Medi-Gemma's safety compliance modules that enforce clinical safety limits and prevent unsafe outputs.

*How the paper uses it:* Medi-Gemma uses rule-based safety verification to enforce clinical safety limits and prevent output violations.

▶ [Professor Ibrahim Habli: Clinical AI - Cure or disease?](https://www.youtube.com/watch?v=pKRCVC5rB7Y) — Department of Computer Science, University of York · 48:33 · 2 years ago

### Hybrid clinical decision support systems
This section focuses on the integration of deterministic analytics with AI-driven reasoning in clinical decision support systems. It contextualizes the hybrid approach Medi-Gemma takes to balance precise computation with flexible natural language understanding in healthcare workflows.

*How the paper uses it:* Medi-Gemma exemplifies a hybrid clinical decision support system combining deterministic analytics with generative models.

▶ [Lecture 3.0.0: Clinical Decision Support Systems (CDSS) | Masters in Health Data Science](https://www.youtube.com/watch?v=btrBThUaIgw) — Universal Digital Health · 22:55 · 9 months ago

### Medi-Gemma system talk *(the paper's own talk)*
The authors' own detailed presentation of Medi-Gemma provides the most direct and comprehensive insight into the system's architecture, innovations, and evaluation. This talk is essential for understanding the paper's contributions and technical nuances.

*How the paper uses it:* This is the authors' own talk presenting Medi-Gemma, the system described in the paper.

▶ [MedGemma - An Open Doctor Model?](https://www.youtube.com/watch?v=ZbpnqpCifSY) — Sam Witteveen · 16:06 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand Medi-Gemma, a hybrid clinical decision support system. We start with the basics of deterministic analytics on electronic medical records (EMRs), then cover retrieval-augmented generation (RAG) in natural language processing, followed by clinical AI safety and rule-based verification. Finally, we explore hybrid clinical decision support systems and conclude with a focused look at the Medi-Gemma system itself. This order builds intuition from core data processing and AI methods to their integration in clinical workflows.

### Deterministic electronic medical record analytics *(prerequisite)*
Learn how precise, rule-based computations and data processing are performed on structured electronic medical records (EMRs). This foundation helps understand how clinical data is reliably extracted and analyzed without ambiguity or hallucination.

*How the paper uses it:* Medi-Gemma separates deterministic EMR data analytics from generative reasoning to ensure precise and safe clinical computations.

▶ [Unit 3: Electronic Health Records (EHR Systems): Lecture A](https://www.youtube.com/watch?v=EBGZdfdZDuU) — Dr Chris Paton - Digital Health, Informatics & AI · 31:44 · 6 years ago

### Retrieval-augmented generation in NLP *(prerequisite)*
Understand how retrieval-augmented generation (RAG) combines external knowledge retrieval with language model generation to produce more accurate and context-aware responses. This method helps language models access up-to-date and relevant information beyond their training data.

*How the paper uses it:* Medi-Gemma uses retrieval-augmented generation to enhance natural language queries with patient-specific data for improved reasoning.

▶ [A guide to building Retrieval Augmented Generation (RAG) pipelines that actually work](https://www.youtube.com/watch?v=OHh_SByRYmQ) — Neural Breakdown with AVB · 17:27 · 1 year ago

### Clinical AI safety and rule-based verification *(prerequisite)*
Explore how clinical AI systems enforce safety constraints and compliance through rule-based verification to prevent unsafe or incorrect outputs. This is critical in healthcare to maintain trust and patient safety.

*How the paper uses it:* Medi-Gemma incorporates rule-based safety verification modules to ensure clinical recommendations adhere to safety protocols.

▶ [Professor Ibrahim Habli: Clinical AI - Cure or disease?](https://www.youtube.com/watch?v=pKRCVC5rB7Y) — Department of Computer Science, University of York · 48:33 · 2 years ago

### Hybrid clinical decision support systems
Learn about clinical decision support systems that combine deterministic data analytics with AI-driven reasoning to assist clinicians. This hybrid approach balances precision with flexible natural language understanding.

*How the paper uses it:* Medi-Gemma exemplifies a hybrid clinical decision support system integrating deterministic EMR analytics with retrieval-augmented generation.

▶ [Clinical Decision Support Systems](https://www.youtube.com/watch?v=QCKhJ3mQRts) — Medicine and Health Sciences at Bethel University · 5:14 · 7 years ago

### Medi-Gemma system talk *(the paper's own talk)*
Dive into a detailed presentation of the Medi-Gemma system, its architecture, and how it integrates deterministic analytics with advanced language models for clinical decision support.

*How the paper uses it:* This talk provides direct insights from the authors on Medi-Gemma's design, key contributions, and clinical applications.

▶ [MedGemma - An Open Doctor Model?](https://www.youtube.com/watch?v=ZbpnqpCifSY) — Sam Witteveen · 16:06 · 1 year ago

## Already in your library

- [Unit 5: Clinical Decision Support Systems Lecture A](https://www.youtube.com/watch?v=_1ub86XvuAc) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [Stanford CS25: V3 I Retrieval Augmented Language Models](https://www.youtube.com/watch?v=mE7IDf2SmJg) — also for: Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding (Tinoosh Mohsenin)
- [9: Generative AI – Large Language Models (LLMs) and ...](https://www.youtube.com/watch?v=KGDe1QvfKJ8) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [RAG Explained For Beginners](https://www.youtube.com/watch?v=_HQ2H_0Ayy0) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [RAG Explained in 12 Minutes](https://www.youtube.com/watch?v=v0ynfDPpe4E) — also for: Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding (Tinoosh Mohsenin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of Medi-Gemma's hybrid clinical decision support system. The beginner project focuses on implementing a simplified deterministic EMR analytics module with rule-based intent routing, reflecting the system's core modular design. The intermediate project involves reimplementing the Ground Truth Injection mechanism combined with retrieval-augmented generation on a small simulated EMR dataset, showing how factual consistency is improved. The advanced project extends the system by integrating a learned intent routing classifier to replace the rule-based router, addressing a stated future direction while maintaining safety constraints.

### Beginner — Deterministic EMR Analytics with Rule-Based Intent Routing
*Effort: a weekend, ~8 hours*

You build a small prototype that simulates deterministic analytics on structured EMR-like data and implements a simple rule-based intent router to direct queries either to analytics or to a placeholder natural language response. This reproduces the modular ClinicalOrchestrator concept separating exact data computation from generative reasoning.

**Why it shows you understood the paper:** This project shows you grasp the core architectural separation in Medi-Gemma and the importance of routing queries deterministically to improve safety and reduce hallucinations.

**Grounded in:** A hybrid clinical decision support system explicitly separating deterministic computation from generative reasoning; Dynamic intent routing framework directing queries to specialized analytic or patient-specific pipelines.

**Tech stack:** Python 3.11, FastAPI, TypeScript, React

**Data:** Simulated small-scale EMR data representing patient vital signs and wound status, synthesized as JSON objects.

**Build it:**

1. Create a small JSON dataset simulating structured EMR data with patient identifiers and wound-related metrics.
2. Implement a deterministic analytics module in Python that computes simple statistics or flags based on the EMR data.
3. Develop a rule-based intent router that parses input queries (e.g., keywords or patient IDs) and routes them to either the analytics module or a stub natural language response.
4. Build a minimal FastAPI backend exposing endpoints for query submission and response retrieval.
5. Create a React frontend to enter queries and display routed responses, showing which pipeline handled the query.

**Ships as:** A GitHub repo with backend and frontend code demonstrating deterministic analytics and rule-based intent routing on simulated EMR data, with a README explaining the architecture and usage.

**Stretch goal:** Add a simple rule-based safety verifier that filters or flags analytics outputs violating predefined clinical thresholds.

### Intermediate — Ground Truth Injection with Retrieval-Augmented Generation on Simulated EMR
*Effort: 2 weekends, ~20 hours*

You reimplement the Ground Truth Injection mechanism by embedding a snapshot of validated patient EMR data into prompts for a retrieval-augmented generation (RAG) pipeline using an open-source LLM API. You compare the factual consistency of responses with and without Ground Truth Injection on a small simulated EMR dataset.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's key method for improving factual adherence and reducing hallucinations by combining deterministic data injection with generative reasoning.

**Grounded in:** Ground Truth State Injection mechanism to incorporate the latest validated patient information before language model inference; Substantial reduction in temporal inconsistencies and hallucinations in patient-specific reasoning.

**Tech stack:** Python 3.11, FastAPI, OpenAI API or HuggingFace Transformers, TypeScript, React

**Data:** Simulated EMR dataset with patient records and wound care notes, synthesized as JSON; no official dataset released by the paper.

**Build it:**

1. Simulate a small EMR dataset with patient data and clinical notes relevant to wound care.
2. Implement a retrieval module that selects relevant EMR data snippets based on query keywords.
3. Develop a Ground Truth Injection module that embeds the retrieved EMR snapshot as context in the prompt sent to an LLM.
4. Set up a RAG pipeline using an open-source or API-accessible LLM to generate natural language responses.
5. Compare outputs with and without Ground Truth Injection for factual consistency and hallucination reduction.
6. Build a simple frontend to submit queries and display generated responses with provenance.

**Ships as:** A GitHub repo with code implementing Ground Truth Injection in a RAG pipeline over simulated EMR data, including a report comparing factual adherence metrics and example outputs.

**Stretch goal:** Incorporate a basic rule-based safety verifier to filter generated outputs violating clinical rules.

### Advanced — Learned Intent Routing with Safety Constraints for Hybrid Clinical AI
*Effort: 3+ weeks*

You extend the Medi-Gemma architecture by replacing the paper's rule-based intent router with a learned classifier trained on simulated or publicly available clinical query data. You integrate this learned router with deterministic analytics and RAG pipelines, ensuring safety via rule-based verification. You evaluate routing accuracy and safety compliance.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, demonstrating your ability to enhance modular clinical AI systems with adaptive components while preserving safety and interpretability.

**Grounded in:** Current rule-based intent routing and protocol mapping may be enhanced by learned classifiers in future; Development of adaptive intent routing using learned classifiers while preserving deterministic execution.

**Tech stack:** Python 3.11, scikit-learn, FastAPI, OpenAI API or HuggingFace Transformers, TypeScript, React

**Data:** Simulated clinical query dataset labeled for intent (analytics vs. generative response), created by you; no public dataset released by the paper.

**Build it:**

1. Create or collect a labeled dataset of clinical queries with intent labels (deterministic analytics vs. generative reasoning).
2. Train a text classification model (e.g., logistic regression or small transformer) to predict intent from query text.
3. Replace the rule-based intent router with the learned classifier in the backend pipeline.
4. Integrate deterministic analytics and RAG modules as in the intermediate project.
5. Implement a rule-based safety verifier to enforce clinical constraints on outputs.
6. Evaluate the system on routing accuracy, safety compliance, and compare with rule-based routing.
7. Build a frontend to demonstrate query routing decisions and final responses.

**Ships as:** A comprehensive GitHub repo with learned intent routing integrated into a hybrid clinical AI pipeline, including evaluation metrics, example queries, and safety verification, documented in a detailed README.

**Stretch goal:** Experiment with multi-agent clinical reasoning by chaining multiple specialized agents for longitudinal patient monitoring.

_No code or datasets were released by the paper's authors; all data must be simulated or substituted with publicly available clinical-like data. Verify that simulated data sufficiently represents wound care EMR features for meaningful demonstration._
