---
title: "585 · Interpretability from the Ground Up: Stakeholder-Centric Design of Automated Scoring in Educational Assessments — Chris Piech"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chris-piech"
source_hash: "1dfef779da13f63723d9d9026452dc991207712645072ea97b12cfa82f0e41bc"
sequence: 585
generator: "outreach-garden: managed"
---

# 585 · Interpretability from the Ground Up: Stakeholder-Centric Design of Automated Scoring in Educational Assessments

## At a glance

- **Professor:** Chris Piech
- **Institution:** Stanford University
- **Paper:** [Interpretability from the Ground Up: Stakeholder-Centric Design of Automated Scoring in Educational Assessments](https://aclanthology.org/2026.findings-acl.1859.pdf)
- **Authors:** Yunsung Kim, Michael Hardy, Joseph Tey, Candace Thille, Chris Piech
- **Year:** 2026

## Paper overview

This paper presents a new framework called ANALYTIC SCORE for automated scoring of open-ended educational assessments that is interpretable and transparent to various stakeholders such as students, assessment developers, and test users. The framework extracts human-understandable features from student responses and uses a logically traceable scoring model, enabling explanations that align with human judgment and support trust and fairness. The approach achieves scoring accuracy close to state-of-the-art black-box models while providing clear, faithful explanations of scoring decisions.

### Why it matters

**Research problem:** Automated scoring of complex, open-ended student responses lacks widely accepted, practical interpretability solutions that meet the diverse needs of stakeholders in large-scale educational assessments. Existing methods often fail to provide faithful, grounded, traceable, and interchangeable explanations necessary for trust, fairness, and actionable feedback.

**Why it matters:** Automated scoring systems are increasingly used due to scalability and efficiency but are vulnerable to errors, bias, and fairness issues. Without interpretability, stakeholders cannot trust or effectively use these scores for high-stakes decisions, instructional design, or policy making. Interpretability is a moral imperative to ensure reliability, fairness, and justifiability in educational assessments.

**Key contributions:**

- Identification of diverse interpretability needs and benefits for assessment stakeholders (test takers, developers, users).
- Development of four foundational interpretability principles (FGTI) tailored to automated scoring.
- Design and implementation of the ANALYTIC SCORE framework embodying FGTI principles for interpretable automated scoring.
- Demonstration that ANALYTIC SCORE achieves scoring accuracy close to uninterpretable state-of-the-art models across multiple assessment domains.
- Empirical validation that the framework’s featurization aligns well with human judgments, supporting interpretability claims.

## About the professor

**Chris Piech** — Associate Professor of Computer Science (Teaching), Computer Science, Stanford University.

Research interests: machine learning to understand human learning

### Research links

- [Faculty/profile page](https://stanford.edu/~cpiech/bio/index.html)
- [Resolved homepage](https://piechlab.stanford.edu/)
- [Social profile](https://twitter.com/chrispiech)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Interpretable Machine Learning
**The paper assumes:** interpretable machine learning methods, ordinal logistic regression, feature extraction for interpretability
**Already in this field?** Skip this entirely if you already understand interpretable machine learning concepts and how interpretable models are constructed and evaluated.

This background focuses on interpretable machine learning, which is central to understanding the design and evaluation of the ANALYTIC SCORE framework for automated scoring in educational assessments. The rigorous course option provides a deep, structured university-level treatment of relevant NLP and interpretability concepts, while the fast track offers a concise, practical introduction to interpretable ML techniques suitable for quickly grasping key ideas without extensive time investment.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Interpretable Machine Learning - Kaggle Course](https://www.youtube.com/playlist?list=PLpdmBGJ6ELUJaQDlOzg3tCoGc4ouyE55_) — 1littlecoder · 5 videos · 2.1h across 5 episodes

**Watch only this:** All 5 episodes, about 2.1 hours — a concise overview of interpretable ML use-cases and explanation techniques that quickly build intuition for the paper's approach.

*Why it unblocks this paper:* This Kaggle course playlist provides a clear, practical introduction to interpretable machine learning concepts and tools such as feature importance and SHAP values, which are directly relevant to understanding the human-understandable featurization and explanation methods used in the paper.

*If you want all of it:* 2.1 hours across 5 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Interpretability from the Ground Up: Stakeholder-Centric Design of Automated Scoring in Educational Assessments,' start by grounding yourself in foundational concepts such as interpretability principles in AI scoring, automated scoring of open-ended responses, ordinal logistic regression models, LLM-based feature extraction in education, and stakeholder-centered design in educational AI. These prerequisites provide the theoretical and methodological background needed to appreciate the novel contributions of the ANALYTIC SCORE framework. Finally, focus on the core concept by reviewing talks related to interpretability frameworks, prioritizing any direct author presentations if available.

### Interpretability principles in AI scoring *(prerequisite)*
Understanding the foundational interpretability principles such as Faithfulness, Groundedness, Traceability, and Interchangeability (FGTI) is essential to grasp why the ANALYTIC SCORE framework was designed the way it was. This section covers rigorous university lectures and research talks that explain interpretability techniques and their importance in AI models, especially in high-stakes domains.

*How the paper uses it:* The paper develops and applies the FGTI interpretability principles to automated scoring models.

▶ [25. Interpretability](https://www.youtube.com/watch?v=wDLzLN1tArA) — MIT OpenCourseWare · 5 years ago

### Automated scoring of open-ended responses *(prerequisite)*
This section contextualizes the challenges and existing methods for automatically scoring complex, open-ended student responses. It includes seminar talks and research presentations that discuss rubric-based scoring, continuous evaluation frameworks, and AI-assisted grading systems, providing background on the state of automated assessment.

*How the paper uses it:* The paper addresses limitations in current automated scoring methods for open-ended responses and proposes a new interpretable framework.

▶ [RL with Rubric Anchors: Open-Ended Rewards for LLMs](https://www.youtube.com/watch?v=hQodjysE_Ko) — AI Research Roundup · 4:32

### Ordinal logistic regression models *(prerequisite)*
Since the ANALYTIC SCORE framework uses an ordinal logistic regression model for scoring, understanding this statistical method is crucial. This section includes detailed academic lectures explaining the theory, interpretation, and application of ordinal regression models, ensuring a solid grasp of the scoring mechanism's traceability and limitations.

*How the paper uses it:* The scoring module in ANALYTIC SCORE is based on ordinal logistic regression to maintain traceability.

▶ [Categorical Data Analysis: Ordered Regression Latent ...](https://www.youtube.com/watch?v=lah6MKYw2Kc) — Prof. J. Xu's Virtual Lecture Hall · 13:00

### LLM-based feature extraction in education *(prerequisite)*
The paper leverages large language models (LLMs) to extract human-understandable analytic features from student responses. This section covers talks that explain how LLMs can be prompted and used for structured information extraction, which is key to the framework's grounded and faithful interpretability.

*How the paper uses it:* ANALYTIC SCORE uses LLM prompting to featurize student responses into interpretable analytic components.

▶ [Data Extraction from Text Using LLMs](https://www.youtube.com/watch?v=lt5w3U1maUA) — Dr. Dror · 8:12

### Stakeholder-centered design in educational AI *(prerequisite)*
The framework is designed around diverse stakeholder needs to ensure trust, fairness, and actionable feedback in automated scoring. This section includes talks on human-centered AI design, values-driven AI, and stakeholder engagement, providing a broader perspective on the ethical and practical motivations behind the paper's approach.

*How the paper uses it:* The paper’s design is motivated by a stakeholder-centric approach to interpretability in educational assessments.

▶ [Advancing Human-centered, Values-driven AI](https://www.youtube.com/watch?v=TzyUqV4_Yfk) — UT Austin Research · 2 months ago

### ANALYTIC SCORE framework talk *(the paper's own talk)*
This section focuses on direct or closely related talks by the paper’s authors or research groups presenting the ANALYTIC SCORE framework or closely aligned interpretability frameworks. Such talks provide the most precise and detailed explanation of the novel contributions, methodology, and evaluation results.

*How the paper uses it:* Directly presents the authors’ novel framework and interpretability principles applied to automated scoring.

▶ [Been Kim wants interpretability for everyone](https://www.youtube.com/watch?v=06hIoM-cLVM) — OATML research group · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on interpretable automated scoring in educational assessments, start by learning the foundational interpretability principles that guide trustworthy AI design. Next, grasp the challenges and methods of automated scoring for open-ended student responses. Then, understand the ordinal logistic regression model used for scoring decisions. After that, explore how large language models (LLMs) can extract human-understandable features from text responses. Finally, dive into the stakeholder-centered design approach that ensures the scoring system meets diverse user needs and trust requirements.

### Interpretability principles in AI scoring *(prerequisite)*
Interpretability principles help us understand how AI models make decisions in ways humans can trust and verify. This section covers foundational ideas like faithfulness and traceability that ensure explanations reflect the true model reasoning.

*How the paper uses it:* The paper develops four interpretability principles (FGTI) that guide the design of their scoring framework.

▶ [25. Interpretability](https://www.youtube.com/watch?v=wDLzLN1tArA) — MIT OpenCourseWare · 5 years ago

### Automated scoring of open-ended responses *(prerequisite)*
Automated scoring systems evaluate complex student answers without human graders, but open-ended responses pose challenges due to their variability and nuance. This section explains the typical approaches and difficulties in scoring such responses automatically.

*How the paper uses it:* The paper addresses automated scoring challenges for open-ended educational assessments.

▶ [RL with Rubric Anchors: Open-Ended Rewards for LLMs](https://www.youtube.com/watch?v=hQodjysE_Ko) — AI Research Roundup · 4:32

### Ordinal logistic regression models *(prerequisite)*
Ordinal logistic regression is a statistical model used to predict ordered categories, like scores or ratings. It provides a transparent way to map extracted features to scores, supporting traceability in scoring decisions.

*How the paper uses it:* The ANALYTIC SCORE framework uses ordinal logistic regression as its traceable scoring model.

▶ [Ordered Probit and Logit Models in Stata](https://www.youtube.com/watch?v=c9kvqeLFF8U) — econometricsacademy · 10:50

### LLM-based feature extraction in education *(prerequisite)*
Large Language Models (LLMs) can be prompted to extract structured, human-understandable features from unstructured text, enabling interpretable analysis of student responses. This section introduces how LLMs assist in feature extraction for educational data.

*How the paper uses it:* The paper uses LLM prompting to featurize student responses into analytic components.

▶ [Data Extraction from Text Using LLMs](https://www.youtube.com/watch?v=lt5w3U1maUA) — Dr. Dror · 8:12

### Stakeholder-centered design in educational AI *(prerequisite)*
Designing AI systems with diverse stakeholders in mind ensures the system meets real-world needs for trust, fairness, and usability. This section explains how involving users like students and educators shapes responsible AI design.

*How the paper uses it:* The framework is built around stakeholder needs to ensure interpretability and fairness.

▶ [Advancing Human-centered, Values-driven AI](https://www.youtube.com/watch?v=TzyUqV4_Yfk) — UT Austin Research · 2 months ago

## Already in your library

- [StatQuest: Logistic Regression](https://www.youtube.com/watch?v=yIYKR4sgzI8) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [HAI Seminar: Learning by Creating – A Human-Centered Vision for AI in Education](https://www.youtube.com/watch?v=iOyaj5u0-DY) — also for: The Potential of Diverse Youth as Stakeholders in Identifying and Mitigating Algorithmic Bias for a Future of Fairer AI (Amy E. Ogan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the ANALYTIC SCORE framework from the paper. The beginner project reproduces a core interpretability principle via a simple feature extraction and explanation demo. The intermediate project builds on the authors' released code to replicate the scoring pipeline on the ASAP-SAS dataset and compare performance to a baseline. The advanced project extends the framework to explore a more complex, modular scoring model addressing a stated limitation, showing capacity to innovate beyond the paper.

### Beginner — Feature Extraction and Explanation Demo for Open-Ended Responses
*Effort: a weekend, ~8 hours*

You build a small web app or script that takes a few sample student open-ended responses and uses prompt-based LLM calls to extract human-understandable analytic features, then displays these features alongside a simple ordinal logistic regression score prediction and explanation. This reproduces the core idea of transparent, grounded feature extraction and traceable scoring on a small scale.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's key interpretability principles (FGTI) by implementing faithful, grounded, and traceable explanations from raw text to score, showing how analytic components support interpretability.

**Grounded in:** Demonstrates the paper's key contribution of extracting explicit analytic components and applying a traceable ordinal logistic regression scoring model embodying the FGTI interpretability principles.

**Tech stack:** Python 3.11, OpenAI GPT-4 API or similar LLM API, Flask or FastAPI for simple web app, scikit-learn for ordinal logistic regression

**Data:** Use a small set of example student responses from the ASAP-SAS dataset publicly available on Kaggle, or simulate a few representative open-ended responses with scoring rubrics.

**Build it:**

1. Collect or simulate 10-20 short open-ended student responses with known scores.
2. Write prompt templates to extract analytic features from each response using an LLM API.
3. Train a simple ordinal logistic regression model on the extracted features and scores.
4. Build a minimal web interface or CLI to input a response, show extracted features, predicted score, and explanation.
5. Document how the features and model align with interpretability principles from the paper.

**Ships as:** A GitHub repo with code, example data, and a README explaining the feature extraction, scoring, and interpretability demonstration.

**Stretch goal:** Add a visualization of feature importance or a step-by-step trace of the scoring decision to deepen traceability.

### Intermediate — Reimplementation and Evaluation of ANALYTIC SCORE on ASAP-SAS Dataset
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' ANALYTIC SCORE implementation from their GitHub repository, reproduce their scoring pipeline on the ASAP-SAS dataset, and compare its performance against a simple baseline model such as a standard logistic regression or a black-box LLM scoring model. You report quadratic weighted kappa (QWK) scores to evaluate accuracy and analyze feature alignment with human annotations.

**Why it shows you understood the paper:** This project shows you can operate the full pipeline embodying the paper's FGTI principles, understand the modular stages (feature extraction, scoring), and critically evaluate interpretability versus accuracy trade-offs on real data.

**Grounded in:** Directly implements and evaluates the ANALYTIC SCORE framework, reproducing key results including scoring accuracy close to state-of-the-art and high featurization alignment with human judgments.

**Tech stack:** Python 3.11, PyTorch or TensorFlow (if required by authors' code), scikit-learn, Jupyter Notebook, Kaggle ASAP-SAS dataset

**Data:** Use the ASAP-SAS dataset available at https://www.kaggle.com/competitions/asap-sas/data as used by the paper.

**Build it:**

1. Clone the authors' ANALYTIC SCORE repository from https://github.com/yunsungkim0908/analyticscore.
2. Set up the environment and download the ASAP-SAS dataset from Kaggle.
3. Run the feature extraction and scoring pipeline on a subset of ASAP-SAS items.
4. Implement a simple baseline scoring model (e.g., logistic regression on TF-IDF features).
5. Compare QWK scores between ANALYTIC SCORE and baseline, and analyze feature alignment with human annotations.
6. Write a report summarizing results and interpretability insights.

**Verified links from the paper:**

- <https://github.com/yunsungkim0908/analyticscore> — released by the paper's authors
- <https://www.kaggle.com/competitions/asap-sas/data> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with runnable code, evaluation notebooks, and a detailed README documenting reproduction and baseline comparison results.

**Stretch goal:** Distill the LLM featurizer into a smaller open-source model as the paper did, and evaluate scalability improvements.

### Advanced — Extending ANALYTIC SCORE with Modular LLM-Based Scoring Models
*Effort: 3-4 weeks*

You develop an extension of the ANALYTIC SCORE framework by replacing the ordinal logistic regression scoring module with a modular LLM-based scoring agent workflow that maintains traceability and interchangeability. You design a pipeline where analytic features guide LLM agents to produce scoring decisions with explanations, aiming to capture more complex scoring logic while preserving the FGTI principles. You evaluate this approach on ASAP-SAS or a similar dataset and compare interpretability and accuracy.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the framework and the trade-offs between interpretability and scoring complexity. It shows initiative to innovate responsibly within the paper's conceptual space.

**Grounded in:** Addresses the paper's stated limitation that ordinal logistic regression may not capture complex scoring logic and explores the future direction of modular LLM workflows for scoring while preserving FGTI principles.

**Tech stack:** Python 3.11, OpenAI GPT-4 or open-source LLMs (e.g., Llama), PyTorch, scikit-learn, Jupyter Notebook, Kaggle ASAP-SAS dataset

**Data:** Use the ASAP-SAS dataset from Kaggle or a comparable open-ended constructed response dataset if ASAP-SAS access is limited.

**Build it:**

1. Study the ANALYTIC SCORE codebase and identify integration points for the scoring module.
2. Design a modular LLM-based scoring workflow that takes analytic features as input and outputs scores with explanations.
3. Implement the modular scoring agent using prompt engineering and chaining of LLM calls to simulate scoring logic.
4. Evaluate the new scoring module on ASAP-SAS items and compare QWK and interpretability metrics to the original model.
5. Document how the modular approach preserves or enhances FGTI interpretability principles.
6. Prepare a detailed report or presentation discussing trade-offs, challenges, and potential for real-world deployment.

**Verified links from the paper:**

- <https://github.com/yunsungkim0908/analyticscore> — released by the paper's authors
- <https://www.kaggle.com/competitions/asap-sas/data> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the extended scoring pipeline code, evaluation notebooks, and comprehensive documentation of design decisions and empirical results.

**Stretch goal:** Conduct a small user study or expert review to validate interpretability and stakeholder trust improvements from the modular scoring model.
