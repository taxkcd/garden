---
title: "458 · Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies — Rosa I. Arriaga"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rosa-i-arriaga"
source_hash: "78a6b73d7edb0b6c4c9a4ece246c80b10e331fc0fcdd9ebc0b626ba1115f6f96"
sequence: 458
generator: "outreach-garden: managed"
---

# 458 · Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies

## At a glance

- **Professor:** Rosa I. Arriaga
- **Institution:** Georgia Institute of Technology
- **Paper:** [Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies](https://arxiv.org/abs/2208.10264)
- **Authors:** Gati Aher, Rosa I. Arriaga, Adam Tauman Kalai
- **Year:** 2023

## Paper overview

This paper introduces Turing Experiments (TEs), a new method to evaluate how well large language models (LMs) like GPT can simulate human behavior across multiple individuals in classic psychological, economic, and social experiments. The authors demonstrate that recent large LMs can replicate known human behaviors in experiments such as the Ultimatum Game, Garden Path Sentences, and Milgram Shock Experiment, but also reveal distortions like hyper-accuracy in knowledge tasks. This approach helps understand the strengths and limitations of LMs in modeling human behavior and informs their use in applications like education and mental health.

### Why it matters

**Research problem:** To systematically evaluate which aspects of human behavior large language models can faithfully simulate and identify consistent distortions in their simulations, especially across diverse populations and multiple individuals, rather than simulating a single arbitrary individual as in the traditional Turing Test.

**Why it matters:** Understanding how well LMs simulate human behavior is critical for downstream applications requiring accurate human models, such as educational tools, mental health support, and social computing. It also helps anticipate limitations and biases in AI systems that could affect their reliability and ethical use.

**Key contributions:**

- Proposing the concept of Turing Experiments (TEs) for evaluating zero-shot human behavior simulation by LMs.
- Developing a methodology for running TEs using prompt engineering and generating synthetic experiment records.
- Executing four TEs across multiple GPT-based LMs to replicate classic behavioral, psycholinguistic, and social psychology experiments.
- Identifying a novel 'hyper-accuracy distortion' in large, aligned LMs where simulated participants give unrealistically precise answers.
- Demonstrating that larger LMs produce more faithful simulations and reveal nuanced demographic effects such as gender differences in the Ultimatum Game.

## About the professor

**Rosa I. Arriaga** — Associate Professor, School of Interactive Computing, Georgia Institute of Technology.

Research interests: chronic care management, mental health, Human Computer Interaction, Social Computing

### Research links

- [Faculty/profile page](https://sites.google.com/view/riarriaga/home)
- [Resolved homepage](https://sites.google.com/view/riarriaga/lab)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=TaR3dq4AAAAJ&view_op=list_works&sortby=pubdate)
- [CV](https://drive.google.com/file/d/1lIlC-iOvnX8Zr1MfA6xN7YOIw5EiCyQM/view)
- [New AI Grant to support future work in clinical training!](https://cos.gatech.edu/news/improving-mental-health-care-help-ai-teammate)
- [Listen to a recent talk](https://hcii.cmu.edu/news/event/2024/08/hcii-seminar-series-rosa-arriaga)
- [podcast about her research on Tech and PTSD](https://www.youtube.com/watch?v=WEUIhDfxYII)
- [views on graduate education](https://changingacademiclife.captivate.fm/episode/rosa-arriaga)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Social Science
**The paper assumes:** human subject experimental design, computational modeling of social behavior, behavioral economics, social psychology experiments
**Already in this field?** Skip this entirely if you already understand how computational methods are used to model and simulate human social and behavioral experiments.

This background prepares the reader to understand the computational social science foundations critical for the paper's methodology of simulating human behavior in social and psychological experiments using large language models. The rigorous course offers a deep dive into computational social science research methods, including experimental design and data analysis, while the fast track provides a concise introduction to computational social science concepts and applications, suitable for quickly grasping the core ideas relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [POL SCI 935 - Computational Social Science](https://www.youtube.com/playlist?list=PLD7BlzsBs5Z-u9z9pyJ2n3wIfOpXvbXMp) — Patrick Kraft · 36 videos · 11.0h across 36 episodes

**Watch only this:** Watch lectures 3 to 7 (episodes: 'POL SCI 935 - 03 Social Research in the Digital Age', 'POL SCI 935 - 04 Observing Behavior: Overview', 'POL SCI 935 - 04 Observing Behavior: Big Data', 'POL SCI 935 - 04 Observing Behavior: Research Strategies', 'POL SCI 935 - 04 Observing Behavior: Causal Inference Primer', 'POL SCI 935 - 06 Asking Questions: Overview', 'POL SCI 935 - 07 Running Experiments: Overview'), about 3.5 hours total — these cover social research foundations, observing behavior, and experimental design relevant to Turing Experiments.

*Why it unblocks this paper:* This university-level course by Patrick Kraft covers computational social science comprehensively, including social research methods, experimental design, and data analysis, directly supporting understanding of the paper's approach to simulating human subject studies and interpreting behavioral data.

*If you want all of it:* About 11.0 hours across all 36 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Social Science](https://www.youtube.com/playlist?list=PLadFsdA5F3vu01xg_No8E01gW1mG5hiO4) — Data Science Lab - Politecnico di Milano · 11 videos · 2.5h across 11 episodes

**Watch only this:** Watch episodes 1 to 5 ('Conversation Graphs in Online Social Media', 'Large-Scale Analysis of On-line Conversation about Vaccine-Related Phenomena', 'A Multi perspective Approach for AnalysingLong Running Live Events on Social Media', 'COCTEAU - Co-Creating the European Union. The gamification app', 'Mapping socio-political issues in the United Stateswith a large-scale analysis of local talk radio'), about 1.1 hours total — these episodes give a quick but substantive introduction to computational social science concepts and applications.

*Why it unblocks this paper:* This concise playlist from Data Science Lab - Politecnico di Milano introduces computational social science with clear, focused episodes on social media analysis and socio-political phenomena, providing an accessible overview of computational methods to understand social behavior relevant to the paper's simulations.

*If you want all of it:* About 2.5 hours across all 11 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies,' start with foundational knowledge about the traditional Turing Test and its limitations to appreciate the motivation behind Turing Experiments. Next, gain insight into prompt engineering techniques critical for generating zero-shot simulations of diverse human participants. Then, review the classic human subject experiments replicated in the paper to understand the behavioral phenomena being modeled. Finally, focus on the core concept of simulating human behavior with language models, featuring a detailed academic talk on this topic.

### Turing Test and its limitations *(prerequisite)*
This section covers the foundational AI evaluation method known as the Turing Test, including its historical context and philosophical implications. Understanding its limitations is essential to grasp why the authors propose Turing Experiments as a more nuanced evaluation of language models simulating multiple human behaviors.

*How the paper uses it:* The paper contrasts traditional Turing Tests with their novel Turing Experiments approach to better evaluate multi-individual human behavior simulation.

▶ [How Can We Tell If a Machine is Conscious?  The Turing Test, lecture 1](https://www.youtube.com/watch?v=oHGrnhNyJ4o) — Matt McCormick, Professor in Philosophy, CSUS · 28:23 · 5 years ago

### Prompt engineering for language models *(prerequisite)*
Prompt engineering is a key technique used in the paper to generate zero-shot simulations of diverse human participants by varying demographic and experimental conditions. This section provides an in-depth, expert-level discussion on prompt design and refinement strategies to improve language model outputs.

*How the paper uses it:* The authors rely on prompt engineering to create synthetic experiment records simulating multiple participants with varied demographics.

▶ [AI prompt engineering: A deep dive](https://www.youtube.com/watch?v=T9aRN5JkmL8) — Anthropic · 1:16:43 · 1 year ago

### Classic human subject experiments in psychology *(prerequisite)*
Understanding the original psychological and social experiments replicated by the language models is critical to evaluating the fidelity of the simulations. This section offers a rigorous academic overview of the Milgram Obedience Experiment, a core study replicated in the paper.

*How the paper uses it:* The paper replicates classic experiments like Milgram's Shock Experiment to assess how well LMs simulate human obedience patterns.

▶ [Overview of Milgram | The Social Approach | A Level Psychology 9990](https://www.youtube.com/watch?v=PSvLVD4w9Co) — A Level Psychology | Alt Academy · 9:07 · 2 years ago

### Human behavior simulation with language models
This core section focuses on the central methodology of using large language models to simulate multiple human participants in behavioral experiments. The selected talk is a detailed, university-level presentation on leveraging LLMs for accurate human behavior simulation, aligning closely with the paper's approach and findings.

*How the paper uses it:* The paper's main contribution is the Turing Experiments methodology to simulate human behavior using LMs, which this talk elaborates on.

▶ [February 18 | Leveraging LLMs to Accurately Simulate Human Behavior](https://www.youtube.com/watch?v=EkSpNxPvXWU) — Stanford Tech Impact and Policy Center · 1:01:38 · Streamed 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how large language models (LLMs) simulate human behavior in psychological experiments. It starts with the classic Turing Test to grasp traditional AI evaluation, then covers prompt engineering techniques essential for zero-shot simulations, followed by an introduction to the original human subject experiments replicated by the models. Finally, it presents the core method of simulating multiple humans with LLMs as used in the paper.

### Turing Test and its limitations *(prerequisite)*
The Turing Test is a foundational AI evaluation method that assesses whether a machine can imitate human conversation indistinguishably. Understanding its principles and limitations helps appreciate why the paper proposes Turing Experiments as a more nuanced alternative for simulating multiple human behaviors.

*How the paper uses it:* The paper contrasts traditional single-individual Turing Tests with their novel multi-individual Turing Experiments approach.

▶ [The Turing Test - Computerphile](https://www.youtube.com/watch?v=Qbp3LJvcX38) — Computerphile · 10:00 · 11 years ago

### Prompt engineering for language models *(prerequisite)*
Prompt engineering involves crafting inputs to guide language models to produce desired outputs, crucial for zero-shot tasks where models generate responses without prior fine-tuning. This skill enables simulating diverse human participants by varying prompts with demographic and experimental details.

*How the paper uses it:* The authors use prompt engineering to simulate multiple participants with varied demographics and experimental conditions in their Turing Experiments.

▶ [AI prompt engineering: A deep dive](https://www.youtube.com/watch?v=T9aRN5JkmL8) — Anthropic · 1:16:43 · 1 year ago

### Classic human subject experiments in psychology *(prerequisite)*
Understanding the original psychological experiments like the Milgram Shock Experiment and Ultimatum Game is essential to evaluate how well language models replicate human behavior patterns observed in these studies.

*How the paper uses it:* The paper replicates four classic experiments to compare LM-generated behavior with human data.

▶ [Overview of Milgram | The Social Approach | A Level Psychology 9990](https://www.youtube.com/watch?v=PSvLVD4w9Co) — A Level Psychology | Alt Academy · 9:07 · 2 years ago

### Human behavior simulation with language models
This concept covers how large language models can be used to simulate responses of multiple human participants in social science experiments, highlighting the methodology and challenges of such simulations.

*How the paper uses it:* The core method of the paper is using LLMs to simulate multiple humans in classic experiments via zero-shot prompting.

▶ [February 18 | Leveraging LLMs to Accurately Simulate Human Behavior](https://www.youtube.com/watch?v=EkSpNxPvXWU) — Stanford Tech Impact and Policy Center · 1:01:38 · Streamed 1 year ago

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insight into their motivation, methodology, and key findings about Turing Experiments and the fidelity and distortions in LM simulations of human behavior.

*How the paper uses it:* This talk complements the paper by explaining the Turing Experiments approach and results in the authors' own words.

▶ [Where human intelligence outwits large language models | Nofil Khan | TEDxUnity Grammar Youth](https://www.youtube.com/watch?v=wXQ6eMkKniA) — TEDx Talks · 12:54 · 2 years ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What Are Vision Language Models? How AI Sees & Understands Images](https://www.youtube.com/watch?v=lOD_EE96jhM) — also for: AdaTooler-V: Adaptive Tool-Use for Images and Videos (Yuzhang Shang)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Introduction to Large Language Models](https://www.youtube.com/watch?v=RBzXsQHjptQ) — also for: Large Language Models for Designing Participatory Budgeting Rules (Hau Chan)
- [Large Language Models Explained! How LLMs Work for ...](https://www.youtube.com/watch?v=RhPKBmeYNuI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Prompt Engineering Full Course](https://www.youtube.com/watch?v=2BpCk4d2Cc0) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [Prompt Engineering Full Course | From Beginner to Pro](https://www.youtube.com/watch?v=YhRfgYH_AoU) — also for: Supporting Students in Prototyping AI-backed Software with Hosted Prompt Template APIs (Armando Fox)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper's core idea: simulating multiple human participants in classic psychological experiments using large language models. The beginner project reproduces a simple zero-shot simulation of the Ultimatum Game to show grasp of prompt engineering and demographic variation. The intermediate project reimplements the Turing Experiment methodology for the Garden Path Sentences task, comparing model outputs to known human difficulty patterns, introducing new prompt design and analysis skills. The advanced project extends the approach by investigating demographic diversity beyond binary gender in the Ultimatum Game simulation, addressing a stated limitation and exploring intersectional effects, which could lead to novel research insights.

### Beginner — Zero-Shot Ultimatum Game Simulation with GPT
*Effort: a weekend, ~8 hours*

You build a script that uses zero-shot prompting of a GPT-based language model to simulate multiple participants playing the Ultimatum Game by varying participant names and binary gender. You collect simulated acceptance/rejection decisions for different offer sizes and analyze acceptance rates by offer size and gender.

**Why it shows you understood the paper:** This project shows you understand the paper's core method of using prompt engineering to simulate multiple individuals with demographic variation and replicate known human behavioral patterns in economic games.

**Grounded in:** Proposing the concept of Turing Experiments (TEs) for evaluating zero-shot human behavior simulation by LMs; Larger GPT models replicate human behavior in the Ultimatum Game with gender-sensitive effects.

**Tech stack:** Python 3.11, OpenAI GPT API or similar GPT-based LLM, pandas, matplotlib or seaborn

**Data:** Synthetic data generated by zero-shot GPT prompts simulating Ultimatum Game participants with varied names and binary gender, as described in the paper.

**Build it:**

1. Write zero-shot prompts to simulate Ultimatum Game responders with varied names and binary gender attributes.
2. Generate responses for a range of offer sizes (e.g., 10%, 30%, 50%, 70%, 90% of total).
3. Parse GPT outputs to extract accept/reject decisions.
4. Aggregate acceptance rates by offer size and gender.
5. Visualize acceptance rates and compare qualitatively to human data trends reported in the paper.

**Ships as:** A GitHub repo with scripts to run the zero-shot simulation, a README explaining the prompt design, and plots showing acceptance rates by offer size and gender.

**Stretch goal:** Add simulation of proposer behavior and compare joint proposer-responder dynamics.

### Intermediate — Reimplementing Garden Path Sentences Turing Experiment
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's Turing Experiment methodology for the Garden Path Sentences task by designing zero-shot prompts to simulate multiple participants parsing garden path sentences. You collect model outputs indicating parsing difficulty or interpretation and compare them to known human difficulty patterns.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method from scratch, including prompt engineering for psycholinguistic tasks and quantitative comparison of LM outputs to human experimental results.

**Grounded in:** Executing four TEs across multiple GPT-based LMs to replicate classic behavioral, psycholinguistic, and social psychology experiments; The Garden Path Sentences TE reproduced known human difficulty in parsing garden path sentences using larger models.

**Tech stack:** Python 3.11, OpenAI GPT API or similar GPT-based LLM, pandas, matplotlib or seaborn

**Data:** Synthetic data generated by zero-shot GPT prompts simulating participant responses to garden path sentences; human difficulty patterns are known from psycholinguistics literature cited in the paper.

**Build it:**

1. Select a set of garden path sentences and control sentences from psycholinguistic literature.
2. Design zero-shot prompts to simulate multiple participants parsing each sentence and reporting difficulty or interpretation.
3. Generate multiple simulated participant responses per sentence using GPT.
4. Quantify parsing difficulty metrics from model outputs (e.g., error rates, hesitation indicators).
5. Compare aggregated model difficulty patterns to known human difficulty patterns and visualize results.

**Ships as:** A GitHub repo with prompt scripts, data processing code, and visualizations comparing simulated parsing difficulty to human data.

**Stretch goal:** Experiment with prompt variations to reduce hyper-accuracy distortions or improve fidelity to human errors.

### Advanced — Exploring Intersectional Demographic Effects in Ultimatum Game Simulations
*Effort: a few weeks, ~40+ hours*

You extend the paper's Ultimatum Game Turing Experiment by incorporating a broader set of demographic variables beyond binary gender, such as age groups or cultural backgrounds, to simulate intersectional effects on acceptance rates. You design prompts to represent these demographics, generate synthetic participant data, and analyze nuanced behavioral patterns.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper by expanding demographic diversity in simulations, demonstrating deep understanding of prompt engineering, ethical considerations, and behavioral analysis in LM-based human simulations.

**Grounded in:** The approach currently focuses on binary gender and limited demographic variables; broader diversity and intersectionality remain to be explored; Demonstrating that larger LMs produce more faithful simulations and reveal nuanced demographic effects such as gender differences in the Ultimatum Game.

**Tech stack:** Python 3.11, OpenAI GPT API or similar GPT-based LLM, pandas, matplotlib or seaborn, Jupyter Notebook for analysis

**Data:** Synthetic data generated by zero-shot GPT prompts simulating Ultimatum Game participants with expanded demographic attributes (e.g., age, culture) created by you based on demographic variation principles described in the paper.

**Build it:**

1. Research demographic variables relevant to Ultimatum Game behavior beyond binary gender (e.g., age, cultural background).
2. Design zero-shot prompts that encode these demographic attributes along with participant names.
3. Generate a large synthetic dataset of simulated participant responses across demographic intersections and offer sizes.
4. Analyze acceptance rates and demographic interaction effects statistically and visually.
5. Discuss ethical considerations and limitations of demographic simulation with LMs.
6. Document methodology, results, and implications in a detailed README.

**Ships as:** A GitHub repo with prompt generation code, synthetic dataset, analysis notebooks, and a comprehensive report on intersectional demographic effects in Ultimatum Game simulations.

**Stretch goal:** Propose and implement prompt alignment techniques to balance truthful LM outputs with realistic human-like errors in demographic simulations.
