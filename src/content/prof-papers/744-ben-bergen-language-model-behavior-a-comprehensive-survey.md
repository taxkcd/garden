---
title: "744 · Language Model Behavior: A Comprehensive Survey — Ben Bergen"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ben-bergen"
source_hash: "f0baaad2bf6643765054ab7832e9d290edc99e22ac7a05dd478db676d7ce888a"
sequence: 744
generator: "outreach-garden: managed"
---

# 744 · Language Model Behavior: A Comprehensive Survey

## At a glance

- **Professor:** Ben Bergen
- **Institution:** Univ. of California - San Diego
- **Paper:** [Language Model Behavior: A Comprehensive Survey](https://arxiv.org/pdf/2303.11504)
- **Authors:** Tyler A. Chang, Benjamin K. Bergen
- **Year:** 2023

## Paper overview

This survey reviews over 250 recent studies on the behavior of English Transformer language models before any task-specific fine-tuning. It covers their capabilities in syntax, semantics, pragmatics, world knowledge, reasoning, memorization, and bias. The paper highlights that while these models generate fluent and coherent text and show basic linguistic and reasoning abilities, they are sensitive to input variations and still prone to errors such as unfactual responses and social biases. The survey aims to clarify what is known about language model behavior to guide applied work and research.

### Why it matters

**Research problem:** Understanding the capabilities and limitations of large Transformer-based language models in generating and processing natural language, especially before any task-specific fine-tuning, given their widespread use and unpredictable behavior.

**Why it matters:** Language models are foundational to many NLP applications and increasingly accessible to the public. Knowing their strengths and weaknesses is crucial for safe and effective deployment, for advancing NLP research, and for understanding artificial language understanding.

**Key contributions:**

- Systematic review of language model capabilities across multiple linguistic and cognitive dimensions.
- Distinction between masked and autoregressive models and their behaviors.
- Highlighting the sensitivity of model outputs to input phrasing and surface features.
- Discussion of model size and training data scale effects on performance.
- Identification of common failure modes such as errors in negation, commonsense reasoning, and social biases.

## About the professor

**Ben Bergen** — Professor, Department of Cognitive Science, Univ. of California - San Diego.

Research interests: Language, cognition, computation, and the brain.

### Research links

- [Faculty/profile page](https://pages.ucsd.edu/~bkbergen)
- [Lab website](http://www.cogsci.ucsd.edu/~bkbergen/lcl/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Transformer Language Models
**The paper assumes:** Transformer neural network architectures, language modeling objectives, and pre-training methods
**Already in this field?** Skip this entirely if you already understand Transformer models and their language modeling training paradigms.

To understand the comprehensive survey on English Transformer language models, it is essential to grasp the Transformer architecture, training objectives, and how these models generate and assign probabilities to text. The rigorous course offers a deep, structured university-level exploration suitable for thorough foundational knowledge, while the fast track provides a concise, beginner-friendly introduction focusing on core concepts and practical implementation. Choose the rigorous course for in-depth study and the fast track for a quicker, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-5, about 9 hours — covering Transformer basics, Transformer-based models, large language models, training, and tuning, which provide the core understanding of model architecture and training relevant to the survey.

*Why it unblocks this paper:* Stanford CME295 is a university-level course that thoroughly covers Transformer architecture, training, tuning, reasoning, and evaluation, directly aligning with the survey's focus on Transformer-based language models and their behaviors.

*If you want all of it:* 16.2 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [LLMs From Scratch: Theory, Math, Code & Transformers](https://www.youtube.com/playlist?list=PLv8Cp2NvcY8BQtdyf29kkoAXpcjaGXHHn) — Code With Aarohi · 10 videos · 5.8h across 10 episodes

**Watch only this:** Episodes 1-4, about 2.3 hours — covering how LLMs work, building a mini GPT, tokenizer construction, and Transformer architecture, which provide a compact yet comprehensive background.

*Why it unblocks this paper:* This playlist by Code With Aarohi offers a clear, beginner-friendly introduction to LLMs, covering theory, math, and code with an emphasis on Transformer architecture and tokenization, matching the survey's foundational topics in a concise format.

*If you want all of it:* 5.8 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the comprehensive survey on language model behavior, start with foundational linguistic prerequisites including syntax, semantics, pragmatics, and commonsense reasoning to grasp the linguistic and cognitive dimensions these models engage with. Then, proceed to advanced university-level lectures on Transformer language models to understand their architecture and training paradigms. Finally, conclude with the authors' own talks or closely related research seminars to gain direct insights into the survey's findings and the current research landscape on language model behavior.

### Syntax in language models *(prerequisite)*
Understanding how language models acquire and represent syntactic knowledge is foundational for interpreting their linguistic capabilities. This section includes academic seminars and university lectures that explore neural syntax and cognitive neuroscience perspectives on syntax, providing a rigorous linguistic background relevant to the survey's findings on syntactic learning.

*How the paper uses it:* The survey highlights that language models learn syntactic rules early in training, making syntax a key prerequisite to understanding model behavior.

▶ [Modeling the Neural Syntax: Reading the Neural Centers. Mr. Prem Nagar, IDC Language Group](https://www.youtube.com/watch?v=keI7lthnEvs) — IDC Language Research Seminars · 1:38:04 · 2y ago

### Semantics and pragmatics in NLP *(prerequisite)*
Semantics and pragmatics are critical linguistic dimensions where language models show both strengths and weaknesses, especially in handling meaning and context-dependent interpretation. This section offers university-level lectures and academic content that rigorously cover these topics, aligning with the survey's discussion of models' struggles with negation and pragmatic implicatures.

*How the paper uses it:* The survey discusses models' partial semantic understanding and notable difficulties with pragmatics, making this a necessary conceptual foundation.

▶ [Lecture 21 - Part 1: Natural Language Processing, basic concepts- I](https://www.youtube.com/watch?v=p62v0_n3joc) — IIT KANPUR-NPTEL · 39:06 · 3w ago

### Commonsense reasoning in language models *(prerequisite)*
Commonsense reasoning is essential for assessing language models' reasoning capabilities and limitations, a major focus of the survey. This section includes invited talks and keynote presentations from reputable AI conferences that delve into symbolic and neural approaches to commonsense reasoning, providing advanced insights into this challenging area.

*How the paper uses it:* The survey identifies commonsense reasoning as an area where models improve with size but remain unreliable, highlighting its importance.

▶ [Guy Van den Broeck - Symbolic Reasoning in the Age of Large Language Models](https://www.youtube.com/watch?v=OtmiJRTljzs) — NeSy conference · 1:11:10 · 11mo ago

### Transformer language models behavior
This core section covers the architecture, training, and behavior of Transformer-based language models, which are the focus of the survey. Advanced university lectures from Stanford provide a detailed and rigorous treatment of Transformer models and large language models, including training techniques and evaluation strategies.

*How the paper uses it:* The survey centers on Transformer language models, making a deep understanding of their behavior and training essential.

▶ [Stanford CME295 Transformers & LLMs | Fall 2026 | Lecture 3 - LLM training](https://www.youtube.com/watch?v=S3bCDcJhz4s) — Stanford Online · 1:44:32 · 1d ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Direct talks by the paper authors or closely related research seminars provide the most precise insights into the survey's scope, methodology, and key findings. These talks offer a unique opportunity to understand the authors' perspectives and the nuances of their comprehensive literature synthesis.

*How the paper uses it:* Benjamin K. Bergen, a co-author, is a professor specializing in language and cognition, making his talks directly relevant to the survey.

▶ [Measuring and Controlling Instruction (In)Stability in Language Model Dialogs](https://www.youtube.com/watch?v=PyAsQTQ93CY) — Conference on Language Modeling · 12:00 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational linguistic concepts essential to understanding Transformer language models and their behavior as surveyed in the paper. Starting with syntax and semantics/pragmatics to build linguistic intuition, it then covers commonsense reasoning in language models, and finally explains Transformer language models themselves, focusing on how they generate and process language. Each step connects directly to the paper's analysis of language model capabilities and limitations.

### Syntax in language models *(prerequisite)*
Syntax is the set of rules that govern sentence structure in language. Understanding syntax helps grasp how language models learn grammatical patterns and generate coherent text. This section introduces syntactic rules and how models acquire syntactic knowledge.

*How the paper uses it:* The paper highlights that language models generally produce grammatical text and learn syntactic rules early in training.

▶ [Introduction to Linguistics: Syntax 2](https://www.youtube.com/watch?v=rm5pZb2zgq8) — Language Science · 30:50 · 5y ago

### Semantics and pragmatics in NLP *(prerequisite)*
Semantics deals with meaning in language, while pragmatics focuses on how context influences meaning. These concepts are key to understanding the strengths and weaknesses of language models in interpreting and generating meaningful text, especially their struggles with negation and pragmatic reasoning.

*How the paper uses it:* The paper discusses models' partial semantic understanding but poor performance on negation and pragmatic implicatures.

▶ [Intro to Semantics and Pragmatics](https://www.youtube.com/watch?v=PpzqldQghrA) — Love Linguage · 22:40 · 5y ago

### Commonsense reasoning in language models *(prerequisite)*
Commonsense reasoning enables understanding of everyday knowledge and logical inference beyond literal text. This section explains why commonsense is critical for language models to generate factual and coherent responses, and the challenges they face in this area.

*How the paper uses it:* The paper notes that commonsense and factual knowledge improve with model size but remain unreliable in some areas.

▶ [Guy Van den Broeck - Symbolic Reasoning in the Age of Large Language Models](https://www.youtube.com/watch?v=OtmiJRTljzs) — NeSy conference · 1:11:10 · 11mo ago

### Transformer language models behavior
Transformer language models use attention mechanisms to process and generate language. This section explains their architecture, training, and how they produce text, providing the core technical background to understand the survey's focus on model behavior.

*How the paper uses it:* The paper surveys English Transformer language models' behavior before fine-tuning, analyzing their linguistic and reasoning capabilities.

▶ [Transformers & LLMs: A Beginner's Guide to Large Language Models](https://www.youtube.com/watch?v=rzciG0ZCGxA) — CodeLucky · 9:05 · 1y ago

## Already in your library

- [Understanding the Structure of Reasoning in Language Models](https://www.youtube.com/watch?v=gAwCSHujtGo) — also for: Dynamic Reasoning Systems (Daniel Schwartz)
- [7: Deep Learning for Natural Language – Transformers](https://www.youtube.com/watch?v=IeF7aATDaw4) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 2 - Large Language Models](https://www.youtube.com/watch?v=GaIeu3npx04) — also for: “The Data Says Otherwise” – Towards Automated Fact-checking and Communication of Data Claims (Yu Fu)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Lecture 1 | Natural Language Processing with Deep Learning](https://www.youtube.com/watch?v=OQQ-W_63UgQ) — also for: Measuring an Artificial Intelligence System’s Performance on a Verbal IQ Test For Young Children (Robert H. Sloan)
- [Lecture 11 – Semantic Parsing | Stanford CS224U: Natural Language Understanding | Spring 2019](https://www.youtube.com/watch?v=C5bdflsg7rs) — also for: Global and Local Semantic Completion Learning for Vision-Language Pre-training (Liu Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the survey "Language Model Behavior: A Comprehensive Survey" by Chang and Bergen (2023). The beginner project reproduces a basic behavioral analysis of syntactic sensitivity in language models, the intermediate project extends this by running controlled input phrasing experiments using the authors' released code, and the advanced project addresses a key limitation by exploring model brittleness with negation and pragmatics, proposing and testing mitigation strategies.

### Beginner — Syntactic Sensitivity Analysis of a Pretrained English Transformer
*Effort: a weekend, ~8 hours*

You build a small script to probe a pretrained English autoregressive Transformer model (e.g., GPT-2 small) for its sensitivity to syntactic correctness by comparing model token probabilities on grammatical versus ungrammatical sentences. You replicate the paper's finding that models assign higher probabilities to grammatical tokens early in training by testing on a fixed pretrained checkpoint.

**Why it shows you understood the paper:** This project shows you understand the behavioral black-box probing methodology used in the paper and the early syntactic learning capabilities of Transformer LMs, as well as how to measure output probabilities to evaluate linguistic competence.

**Grounded in:** Demonstrates the paper's claim: "Language models generally produce grammatical text and learn syntactic rules early in training." (Section 3.1 and 3.3)

**Tech stack:** Python 3.11, transformers (Hugging Face), PyTorch

**Data:** Use a small set of hand-crafted minimal pairs of grammatical and ungrammatical English sentences (e.g., subject-verb agreement errors) created by you.

**Build it:**

1. Install Hugging Face transformers and PyTorch.
2. Load a pretrained English autoregressive Transformer model (e.g., GPT-2 small).
3. Create a small dataset of minimal pairs contrasting grammatical and ungrammatical sentences.
4. Compute and compare the average token log-probabilities assigned by the model to each sentence.
5. Visualize the difference in probabilities to show model preference for grammatical sentences.
6. Write a README explaining the connection to the paper's syntactic behavior findings.

**Ships as:** A GitHub repo with code to run syntactic probability comparisons on minimal pairs, a README linking results to the paper's findings, and example output visualizations.

**Stretch goal:** Add experiments testing sensitivity to word order variations or agreement errors beyond minimal pairs.

### Intermediate — Reproducing Input Phrasing Sensitivity Using Authors' Behavioral Analysis Code
*Effort: 1-2 weekends, ~15 hours*

You use the authors' released code repository to reproduce experiments showing how slight changes in input phrasing affect model outputs and probabilities. You run controlled input perturbations on a pretrained English Transformer model and compare output probabilities and generated text to quantify brittleness.

**Why it shows you understood the paper:** This project demonstrates you can work with the authors' behavioral analysis framework, replicate core experiments on input sensitivity, and interpret the results in the context of the paper's key contribution about model brittleness to phrasing.

**Grounded in:** Reproduces the paper's finding: "Model outputs are highly sensitive to input phrasing and surface features." (Introduction and multiple sections)

**Tech stack:** Python 3.11, transformers (Hugging Face), PyTorch, the authors' behavioral analysis code from https://github.com/tylerachang/llm-behavior-survey

**Data:** Use the input perturbation scripts and example prompts provided in the authors' repository to generate controlled input variations.

**Build it:**

1. Clone and set up the authors' behavioral analysis repository.
2. Install required dependencies including transformers and PyTorch.
3. Run provided scripts to generate model outputs on base prompts and perturbed variants.
4. Collect and analyze output probabilities and text differences to quantify sensitivity.
5. Document your reproduction results and compare them to the paper's reported findings.
6. Write a README explaining the experiment setup, results, and connection to the paper.

**Verified links from the paper:**

- <https://github.com/tylerachang/llm-behavior-survey> — released by the paper's authors

**Ships as:** A GitHub repo fork or wrapper around the authors' code with your reproduction scripts, analysis notebooks, and a README linking results to the paper's phrasing sensitivity contribution.

**Stretch goal:** Extend the experiments to test sensitivity on a different pretrained model or on longer input contexts.

### Advanced — Mitigating Negation and Pragmatics Brittleness in English Transformer LMs
*Effort: 3+ weeks*

You design and implement an experimental framework to evaluate and improve Transformer language models' handling of negation and pragmatic implicatures, addressing a key limitation highlighted in the paper. You create or adapt datasets testing negation understanding, run baseline evaluations, and experiment with prompt engineering or lightweight fine-tuning to reduce brittleness. You analyze improvements and failure modes.

**Why it shows you understood the paper:** This project tackles a major open challenge identified in the survey, demonstrating deep comprehension of model weaknesses in negation and pragmatics, and applying applied ML engineering skills to propose and test concrete mitigation strategies.

**Grounded in:** Targets the paper's limitation and future direction: "Models struggle with negation and pragmatics despite some semantic understanding." (Sections 4.2 and 4.5) and "Improving model handling of negation, pragmatics, and commonsense reasoning." (Future directions)

**Tech stack:** Python 3.11, transformers (Hugging Face), PyTorch, FastAPI (optional for serving), Jupyter Notebook

**Data:** Use publicly available negation and pragmatic reasoning datasets such as the Negation Scope Dataset or create synthetic examples; no direct dataset from the paper is provided.

**Build it:**

1. Survey existing negation and pragmatics evaluation datasets and select or create a test set.
2. Evaluate a pretrained English Transformer LM's baseline performance on negation and pragmatic tasks.
3. Implement prompt engineering techniques or lightweight fine-tuning on small curated examples to improve performance.
4. Analyze changes in output probabilities and generated text to assess brittleness reduction.
5. Document failure modes and discuss implications in relation to the paper's findings.
6. Write a detailed README explaining the motivation, methodology, results, and connection to the paper.

**Ships as:** A GitHub repo containing evaluation scripts, datasets or data generation code, improvement experiments, analysis notebooks, and a comprehensive README linking the work to the paper's limitations and future directions.

**Stretch goal:** Extend the framework to test multimodal or augmented models as suggested in the paper's future directions.

_The paper's authors released a behavioral analysis code repository but no datasets; intermediate project depends on their code, while data for advanced project must be sourced or synthesized externally._
