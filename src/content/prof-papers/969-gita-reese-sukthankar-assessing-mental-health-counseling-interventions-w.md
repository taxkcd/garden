---
title: "969 · Assessing Mental Health Counseling Interventions with LLMs — Gita Reese Sukthankar"
date: 2026-10-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-gita-reese-sukthankar"
source_hash: "98f51ac1bf87c0ad2a13e49ca7decf8bc197ce5b99a81464751e51c9dc0905f8"
sequence: 969
generator: "outreach-garden: managed"
---

# 969 · Assessing Mental Health Counseling Interventions with LLMs

## At a glance

- **Professor:** Gita Reese Sukthankar
- **Institution:** University of Central Florida
- **Paper:** [Assessing Mental Health Counseling Interventions with LLMs](http://ial.eecs.ucf.edu/pdf/Sukthankar-WI2025.pdf)
- **Authors:** Nurun Naher, Joshua Langfus, Linda Pfiffner, Gita Sukthankar
- **Year:** 2026

## Paper overview

This paper studies how large language models (LLMs) like GPT-4o and Gemini 2.5 can be used to automatically assess the quality and fidelity of mental health counseling interventions, specifically a behavioral parent training program for ADHD. The authors compare LLM assessments to expert human ratings and analyze consistency and agreement between models and humans. They find that LLMs can reliably approximate human fidelity ratings, with Gemini outperforming GPT-4o, but caution that human oversight remains important due to interpretive nuances.

### Why it matters

**Research problem:** Manual fidelity assessment of behavioral counseling interventions is costly, time-consuming, and requires specialized human expertise, limiting scalability and sustainability of effective mental health programs.

**Why it matters:** Accurate fidelity assessment ensures treatment validity and feasibility, but current human-based methods are expensive and hard to scale, especially in under-resourced settings. Automating this process could reduce costs and improve access to quality mental health care.

**Key contributions:**

- Demonstrated that LLMs can assess treatment fidelity in structured counseling interventions with high consistency and alignment to human experts.
- Compared two advanced LLMs (GPT-4o and Gemini 2.5) on fidelity assessment tasks, showing Gemini slightly outperforms GPT-4o.
- Proposed best practices for using LLMs in fidelity assessment, including multi-pass consensus, zero temperature setting, and JSON output formatting.
- Provided qualitative insights into sources of disagreement between LLMs and humans, highlighting interpretive nuances and overgeneralization tendencies.
- Outlined a scalable, cost-effective approach to augment traditional fidelity assessment workflows with LLMs.

## About the professor

**Gita Reese Sukthankar** — Department of Computer Science, University of Central Florida.

Research interests: activity and plan recognition, multi-agent systems, machine learning, adversarial games, assistive technologies, human-robot interactions, cooperation in multi-agent systems, software support for human teams

### Research links

- [Faculty/profile page](https://www.cs.ucf.edu/~gitars/)
- [Lab website](http://ial.eecs.ucf.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Large Language Models and Prompt Engineering
**The paper assumes:** large language model architecture, transformer neural networks, prompt engineering techniques, model inference and sampling strategies
**Already in this field?** Skip this entirely if you already understand transformer-based large language models and how to design prompts for controlled model outputs.

This background focuses on Large Language Models (LLMs) and prompt engineering, which are essential to understanding how LLMs like GPT-4o and Gemini 2.5 are used for fidelity assessment in mental health counseling interventions. The rigorous course option provides a deep, structured university-level foundation on LLM architectures, training, and prompting techniques, while the fast track offers a concise, practical introduction to key prompting methods for quick comprehension. Readers can choose the lane that fits their time and depth needs; the fast track is a focused primer, not a diluted version.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Large Language Models (LLMs)](https://www.youtube.com/playlist?list=PLp6ek2hDcoNDDRINFiWGDlPKUwW-g1Hjk) — NPTEL IIT Delhi · 38 videos · 29.0h across 38 episodes

**Watch only this:** Lectures 1-4 (Introduction to LLMs, NLP basics, Statistical Language Models, Advanced Smoothing and Evaluation), Lectures 15-17 (Transformer architecture and implementation), Lectures 21-23 (Instruction tuning, Prompt-based learning, Advanced prompting), about 7.5 hours total.

*Why it unblocks this paper:* This NPTEL IIT Delhi course comprehensively covers foundational concepts of LLMs, including Transformer architecture, pre-training, and prompt-based learning, directly relevant to understanding the LLMs and prompting strategies used in the paper.

*If you want all of it:* 29.0 hours across 38 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Prompting Techniques Explained](https://www.youtube.com/playlist?list=PLhRXULtLjLtfQ9COvoZg8Zg6ejTI3UPTG) — Kalyan KS · 7 videos · 0.4h across 7 episodes

**Watch only this:** All 7 episodes, about 25 minutes total.

*Why it unblocks this paper:* This short playlist by Kalyan KS offers clear, focused explainers on popular LLM prompting techniques such as zero-shot, few-shot, and chain-of-thought prompting, which are crucial for understanding the structured prompting and multi-pass consensus methods used in the paper.

*If you want all of it:* 0.4 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on assessing mental health counseling interventions with LLMs, start by building foundational knowledge on behavioral intervention fidelity assessment, large language model evaluation, prompt engineering for LLMs, and consensus methods in AI evaluation. These prerequisites provide the necessary background on the clinical context, AI model evaluation techniques, and methodological approaches used in the paper. Finally, focus on the core concept of the paper itself, including any direct talks by the authors or closely related research presentations, to grasp the specific system and findings presented.

### Behavioral intervention fidelity assessment *(prerequisite)*
Understanding fidelity assessment is crucial because the paper automates the evaluation of treatment fidelity in behavioral counseling. This section covers the importance, measurement, and challenges of fidelity in clinical interventions, providing the clinical and methodological context for the paper's AI application.

*How the paper uses it:* The paper automates fidelity assessment of a behavioral parent training program for ADHD, so understanding fidelity concepts is foundational.

▶ [Monitoring Intervention Fidelity](https://www.youtube.com/watch?v=rhv5nRGGbRU) — Dartington Social Research Unit · 55:42 · 13y ago

### Large language models evaluation *(prerequisite)*
This section introduces how LLMs are systematically evaluated, including metrics and frameworks for assessing accuracy, hallucination, and reliability. Such knowledge is essential to appreciate the paper's methods comparing GPT-4o and Gemini 2.5 on fidelity assessment tasks.

*How the paper uses it:* The paper evaluates two state-of-the-art LLMs for fidelity assessment, requiring understanding of LLM evaluation methodologies.

▶ [Introduction to LLM Evaluations – Model Evals vs Application Evals | CampusX](https://www.youtube.com/watch?v=cNF_MO82Qew) — CampusX · 24:32 · 4mo ago

### Prompt engineering for LLMs *(prerequisite)*
Prompt engineering is critical for designing the structured queries used to elicit fidelity ratings from LLMs. This section explains how to craft effective prompts to improve model responses, directly relating to the paper's approach of structured prompting and zero temperature settings.

*How the paper uses it:* The paper uses structured prompts and prompt engineering best practices to query LLMs for fidelity ratings.

▶ [Introduction to Prompt Engineering | Part 1](https://www.youtube.com/watch?v=hs5zKoBpgTo) — CloudxLab Official · 7:13 · 1y ago

### Consensus methods in AI evaluation *(prerequisite)*
Consensus methods like multi-pass voting and majority agreement are used in the paper to improve reliability of LLM fidelity ratings. This section covers how consensus approaches help manage variability and non-determinism in AI outputs.

*How the paper uses it:* The paper employs multi-pass consensus voting to aggregate LLM responses for fidelity assessment.

▶ [CITP Special Event: Sayash Kapoor: Final Public Oral (FPO) - The Missing Science of AI Evaluation](https://www.youtube.com/watch?v=8SGdYYtmmwI) — CITP Princeton · 1:17:59 · 2mo ago

### LLM-based fidelity assessment system
This core concept focuses on the specific system developed in the paper that uses LLMs to automate fidelity assessment in mental health counseling. Videos here cover evaluation of LLMs as judges and reliability of LLM-based auditing, directly relevant to the paper's approach and challenges.

*How the paper uses it:* The paper develops and evaluates an LLM-powered system for fidelity assessment in behavioral counseling interventions.

▶ [The Stability Trap: Evaluating the Reliability of LLM-Based Instruction Adherence Auditing](https://www.youtube.com/watch?v=Pr-9wAJshmo) — ACM FAccT Conference · 12:40 · 4w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how large language models (LLMs) can be used to assess mental health counseling fidelity. We start with the basics of behavioral intervention fidelity assessment to grasp what is being measured, then cover how LLMs are evaluated and how prompt engineering shapes their outputs. Next, we explore consensus methods that improve reliability in AI evaluations, culminating in the core method of LLM-based fidelity assessment developed in the paper.

### Behavioral intervention fidelity assessment *(prerequisite)*
Fidelity assessment measures how closely a behavioral intervention is delivered as intended, ensuring treatment quality and validity. Understanding this helps appreciate why automating fidelity ratings is valuable and challenging. This video explains what fidelity means, why it matters, and how it is monitored in practice.

*How the paper uses it:* The paper automates fidelity assessment of a structured behavioral parent training program for ADHD.

▶ [Monitoring Intervention Fidelity](https://www.youtube.com/watch?v=rhv5nRGGbRU) — Dartington Social Research Unit · 55:42 · 13y ago

### Large language models evaluation *(prerequisite)*
Evaluating LLMs involves measuring their accuracy, consistency, and reliability on specific tasks. This video introduces systematic evaluation methods that move beyond subjective impressions to data-driven metrics, which is essential for trusting LLM outputs in sensitive domains like mental health.

*How the paper uses it:* The authors compare LLM fidelity ratings to human expert ratings using agreement metrics and consensus methods.

▶ [AI Evaluation Explained | How to Measure LLM Quality in 2026](https://www.youtube.com/watch?v=e3lC_I7gUiY) — LearnITGuide Tutorials · 8:35 · 3w ago

### Prompt engineering for LLMs *(prerequisite)*
Prompt engineering is the craft of designing clear, specific instructions to get accurate and consistent responses from LLMs. This foundational skill is critical because the paper’s system relies on structured prompts to query models about counseling fidelity.

*How the paper uses it:* The paper uses carefully designed prompts to extract fidelity ratings from GPT-4o and Gemini 2.5.

▶ [Lesson 1: Introduction to Prompt Engineering | Master AI Prompts for ChatGPT, MidJourney & More](https://www.youtube.com/watch?v=QTjRFBWwwbU) — AI Simplified · 11:45 · 1y ago

### Consensus methods in AI evaluation *(prerequisite)*
Consensus methods combine multiple model outputs or votes to improve reliability and reduce randomness in AI evaluations. This video explains how aggregating multiple judgments leads to more stable and trustworthy results.

*How the paper uses it:* The authors use multi-pass querying and majority vote consensus to stabilize LLM fidelity ratings.

▶ [Ahmed Alaa | Evaluation of Generative AI Models in Healthcare | CGSI 2025](https://www.youtube.com/watch?v=X7__tUHkjMI) — Computational Genomics Summer Institute CGSI · 31:26 · 1y ago

### LLM-based fidelity assessment system
This concept covers how LLMs can be used as automated judges to assess adherence to treatment protocols by analyzing transcripts. It highlights the challenges and methods for reliable, scalable fidelity assessment using AI.

*How the paper uses it:* This is the core contribution of the paper: an LLM-powered system that approximates human fidelity ratings for mental health counseling interventions.

▶ [The Stability Trap: Evaluating the Reliability of LLM-Based Instruction Adherence Auditing](https://www.youtube.com/watch?v=Pr-9wAJshmo) — ACM FAccT Conference · 12:40 · 4w ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [LLM Evaluation Basics: Datasets & Metrics](https://www.youtube.com/watch?v=1jReCwBgM84) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [Using Large Language Models for Evaluation: Opportunities & Limitations | Prof. Emine Yilmaz, UCL](https://www.youtube.com/watch?v=5RufsrI-_JM) — also for: Do Large Language Model Benchmarks Test Reliability? (Sara Beery)
- [\[1hr Talk\] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Workshop: Basics of LLMs & Prompt Engineering | AI in Medical Education Symposium](https://www.youtube.com/watch?v=zriuIpOSL2g) — also for: Text-Attributed Knowledge Graph Enrichment with Large Language Models for Medical Concept Representation (Dongjie Wang)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Prompting 101 | Code w/ Claude](https://www.youtube.com/watch?v=ysPbXH0LpIE) — also for: Geo-OLM: Enabling Sustainable Earth Observation Studies with Cost-Efficient Open Language Models & State-Driven Workflows (Diana Marculescu)
- [Prompt Engineering Full Course](https://www.youtube.com/watch?v=2BpCk4d2Cc0) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [What is Prompt Engineering? 🤔 क्या है Prompt Engineer? (The REAL Truth)](https://www.youtube.com/watch?v=NOdDPIcar78) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Prompt Engineering Full Course | From Beginner to Pro](https://www.youtube.com/watch?v=YhRfgYH_AoU) — also for: Supporting Students in Prototyping AI-backed Software with Hosted Prompt Template APIs (Armando Fox)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of using large language models (LLMs) for fidelity assessment in mental health counseling interventions, as studied in the paper. The beginner project recreates a core evaluation metric from the paper using simple LLM prompts and transcript samples. The intermediate project reimplements the paper's consensus-based LLM fidelity assessment method on a small simulated dataset, comparing two LLMs. The advanced project extends the method by exploring improved vote aggregation strategies to address interpretive variability, directly tackling a future direction highlighted by the authors.

### Beginner — LLM Agreement Metrics on Counseling Transcript Samples
*Effort: a weekend (~8 hours)*

You build a small script that uses GPT-4o and Gemini 2.5 (via API or local access) to assess fidelity questions on a handful of short counseling transcript excerpts. You compute intra-model agreement and Cohen's Kappa between model outputs to replicate the paper's reported agreement metrics on a tiny scale.

**Why it shows you understood the paper:** This project shows you grasp how the paper measures LLM consistency and agreement on fidelity ratings, a key quantitative contribution. It also demonstrates familiarity with prompt engineering and evaluation metrics used in the study.

**Grounded in:** Demonstrated that LLMs can assess treatment fidelity in structured counseling interventions with high consistency and alignment to human experts; Gemini 2.5 achieved 96.67% intra-model agreement and Cohen’s Kappa of 0.85; GPT-4o showed 93.33% agreement and Kappa of 0.79.

**Tech stack:** Python 3.11, OpenAI API or Gemini API client, scikit-learn (for Cohen's Kappa)

**Data:** Simulated short counseling transcript excerpts created by you to mimic behavioral parent training dialogue, since no public dataset is provided.

**Build it:**

1. Write or collect 5-10 short counseling transcript excerpts simulating parent training sessions for ADHD.
2. Design structured prompts based on the paper's description to query GPT-4o and Gemini 2.5 for fidelity ratings on these excerpts.
3. Query each model multiple times per question with zero temperature and collect outputs.
4. Implement majority vote consensus per model and compute intra-model agreement and Cohen's Kappa between runs.
5. Compare agreement metrics between the two LLMs and document results in a README.

**Ships as:** A GitHub repo with scripts to run LLM queries on sample transcripts, compute agreement metrics, and a README explaining the setup and results replicating the paper's agreement evaluation on a small scale.

**Stretch goal:** Add a simple human baseline by manually rating the same transcripts and compare LLM-human agreement.

### Intermediate — Reimplementation of LLM-Based Fidelity Assessment with Consensus Voting
*Effort: 1-3 weekends (~20 hours)*

You reimplement the core LLM fidelity assessment system described in the paper, applying structured prompts to a small set of simulated counseling transcripts. You implement multi-pass querying with majority vote consensus per fidelity question, comparing GPT-4o and Gemini 2.5 outputs. You report agreement metrics including Cohen's Kappa and analyze disagreements.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's main method of using multi-pass LLM consensus for fidelity assessment, including evaluation against human-like ratings. It shows skill in prompt engineering, consensus methods, and quantitative evaluation aligned with the paper.

**Grounded in:** The authors developed an LLM-powered system that uses structured prompts and transcripts from school clinicians delivering a parent training intervention for ADHD. They evaluated two state-of-the-art LLMs (GPT-4o and Gemini 2.5) by querying each model multiple times per fidelity question, using majority vote consensus, and comparing results to expert human coders.

**Tech stack:** Python 3.11, OpenAI API or Gemini API client, pandas, scikit-learn

**Data:** Simulated transcripts of behavioral parent training sessions for ADHD, created based on the paper's intervention description, since no public dataset is available.

**Build it:**

1. Create or curate a dataset of 20-30 simulated counseling transcripts reflecting structured parent training sessions.
2. Design detailed structured prompts for fidelity questions as described in the paper, ensuring zero temperature and JSON output formatting.
3. Implement multi-pass querying of GPT-4o and Gemini 2.5 for each transcript and fidelity question, collecting multiple outputs.
4. Apply majority vote consensus per model per question to produce final fidelity ratings.
5. Compute intra-model agreement, cross-model agreement, and Cohen's Kappa with simulated human ratings.
6. Analyze and document cases of disagreement and interpretive variability.

**Ships as:** A GitHub repository containing the reimplemented fidelity assessment pipeline, scripts for querying LLMs with consensus voting, evaluation metrics, and a detailed README explaining methodology and results.

**Stretch goal:** Incorporate a simple baseline method that uses keyword matching for fidelity assessment and compare its performance to the LLM consensus method.

### Advanced — Exploring Alternative Vote Aggregation for LLM Fidelity Assessment
*Effort: a few weeks (~40+ hours)*

You extend the paper's LLM fidelity assessment system by implementing and evaluating alternative vote aggregation methods such as round robin tournaments or generative self-aggregation to reduce interpretive variability and false positives. You apply these methods on the simulated counseling transcripts and compare results to majority vote consensus and human ratings.

**Why it shows you understood the paper:** This project tackles a future direction explicitly proposed by the paper, demonstrating deep comprehension of the limitations of consensus methods and interpretive nuances in LLM fidelity assessment. It shows your ability to innovate on the core method and critically evaluate improvements.

**Grounded in:** Explore alternative scoring and vote aggregation methods such as round robin tournaments or generative self-aggregation; Improve prompt engineering and calibration to reduce interpretive variability and enhance alignment with human standards.

**Tech stack:** Python 3.11, OpenAI API or Gemini API client, pandas, scikit-learn, matplotlib or seaborn for visualization

**Data:** Simulated counseling transcripts as in the intermediate project, representing structured behavioral parent training sessions for ADHD.

**Build it:**

1. Reimplement the baseline multi-pass majority vote consensus fidelity assessment system from the intermediate project.
2. Research and implement alternative vote aggregation strategies such as round robin tournaments and generative self-aggregation.
3. Apply these aggregation methods to the multi-pass LLM outputs for each fidelity question on the simulated transcripts.
4. Compare the alternative methods against majority vote consensus and simulated human ratings using agreement metrics like Cohen's Kappa.
5. Analyze cases where alternative methods reduce false positives or interpretive variability.
6. Document findings, limitations, and recommendations for real-world deployment.

**Ships as:** A comprehensive GitHub repository with the extended fidelity assessment system, implementations of alternative vote aggregation methods, evaluation scripts, visualizations of agreement metrics, and a detailed README discussing improvements and challenges.

**Stretch goal:** Experiment with prompt calibration techniques to further reduce overgeneralization and improve alignment with human judgments.

_The paper does not provide public code or datasets; all data must be simulated based on the paper's descriptions of structured behavioral parent training transcripts for ADHD._
