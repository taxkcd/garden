---
title: "066 · What data should I include in my POS tagging training set? — Emily Prud'hommeaux"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-emily-prud-hommeaux"
source_hash: "f492daaefd2789092c759b19fb3e5c0ba12bf071775a7f1c666ab0307878489c"
sequence: 66
generator: "outreach-garden: managed"
---

# 066 · What data should I include in my POS tagging training set?

## At a glance

- **Professor:** Emily Prud'hommeaux
- **Institution:** Boston College
- **Paper:** [What data should I include in my POS tagging training set?](https://aclanthology.org/2025.findings-emnlp.448/)
- **Authors:** Zoey Liu, Masoud Jasbi, Kenji Sagae, Emily Prud’hommeaux, Christan Grant
- **Year:** 2025

## Paper overview

This study investigates how to efficiently build part-of-speech (POS) tagging training sets for under-resourced languages, including Indigenous and endangered languages. It compares three data selection methods—in-context learning with large language models (LLMs), active learning (AL), and random sampling—across 60 languages from 12 language families. The research finds that using GPT-4.1-mini with just 1,000 randomly sampled tokens can achieve strong POS tagging performance when data sharing is ethical and acceptable. For communities that prefer to keep data private, AL with 4,500-5,500 tokens can yield reasonable results faster than random sampling. These findings guide resource allocation for building NLP datasets in low-resource language contexts.

### Why it matters

**Research problem:** How to construct effective POS tagging training sets for under-resourced languages with limited annotation resources, balancing performance and ethical considerations around data sharing.

**Why it matters:** POS tagging remains crucial for linguistic research, language documentation, and creating educational materials, especially for Indigenous and endangered languages that face severe resource constraints and ethical concerns about data sharing.

**Key contributions:**

- Demonstrated that GPT-4.1-mini achieves strong POS tagging performance (F1 > 0.83) with only 1,000 randomly sampled tokens as prompt examples for 60 languages.
- Showed that active learning with uncertainty sampling reaches comparable performance faster than random sampling, requiring about 4,500-5,500 tokens.
- Provided a large-scale cross-linguistic evaluation of AL for POS tagging across diverse languages, addressing gaps in prior research.
- Applied rigorous statistical growth curve modeling to compare data selection methods, moving beyond visual or anecdotal analysis.
- Discussed ethical considerations and practical recommendations for dataset construction respecting Indigenous data sovereignty.

## About the professor

**Emily Prud'hommeaux** — Associate Professor, Computer Science, Boston College.

### Research links

- [Faculty/profile page](https://www.bc.edu/bc-web/schools/morrissey/departments/computer-science/people/faculty-directory/emily-prudhommeaux.html)
- [Identity evidence](http://cs.bc.edu/~prudhome)
- [Identity evidence](https://cs.bc.edu/prudhome/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** active learning in NLP
**The paper assumes:** active learning methods, uncertainty sampling, part-of-speech tagging, natural language processing
**Already in this field?** Skip this entirely if you already understand active learning techniques and their application in NLP tasks like POS tagging.

This background focuses on active learning in natural language processing (NLP), a core method used in the paper for efficient POS tagging training set construction. The rigorous course option offers a deep, structured university-level understanding of NLP fundamentals and active learning context, while the fast track provides a concise, practical introduction to active learning annotation powered by spaCy and Prodigy, suitable for quick comprehension and applied insight. Choose the course for comprehensive theoretical grounding and the fast track for a practical, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224N Natural Language Processing with Deep Learning I Spring 2024 I Professor Christopher Manning](https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D) — Stanford Online · 23 videos · 27.5h across 23 episodes

**Watch only this:** Lectures 1 (Intro and Word Vectors), 4 (Dependency Parsing), 5 (Recurrent Neural Networks), 6 (Sequence to Sequence Models), and 12 (Efficient Training, Shikhar Murty) — about 6 hours total. These cover core NLP techniques, parsing, sequence modeling, and efficient training strategies related to active learning.

*Why it unblocks this paper:* Stanford CS224N Natural Language Processing with Deep Learning (Spring 2024) is a top-tier university course covering foundational NLP concepts including sequence models, dependency parsing, and annotation methods relevant to active learning. It provides the theoretical and practical background needed to understand the paper's use of active learning with CRFs and uncertainty sampling for POS tagging.

*If you want all of it:* 27.5 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [NLP with Spacy](https://www.youtube.com/playlist?list=PLGZ2RJ3mzrLtETkEU_EsO0KTADJogEuBy) — oon arfiandwi (OonID) · 18 videos · 10.1h across 18 episodes

**Watch only this:** Episodes 2 (TRAINING A NEW ENTITY TYPE with Prodigy – annotation powered by active learning) and 10 (TRAINING AN INSULTS CLASSIFIER with Prodigy in ~1 hour) — about 1.5 hours total. These focus directly on active learning annotation techniques and practical training.

*Why it unblocks this paper:* The 'NLP with spaCy' playlist by OonID offers practical, concise tutorials on NLP annotation and training workflows, including active learning powered annotation with Prodigy. It is well-suited for quickly grasping how active learning is applied in real-world NLP tasks like POS tagging.

*If you want all of it:* 10.1 hours across 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on efficient POS tagging training set construction for under-resourced languages, start with foundational knowledge on in-context learning with large language models and ethical considerations in NLP data. Then, build understanding of data selection methods for POS tagging, followed by the paper's core concept focusing on the authors' own work and their comparative evaluation of data selection methods for POS tagging.

### In-context learning with large language models *(prerequisite)*
In-context learning is a key method used in the paper where GPT-4.1-mini is prompted with examples to perform POS tagging. Understanding the theoretical foundations and mechanisms of in-context learning in LLMs provides insight into why the authors' approach with 1,000 tokens is effective.

*How the paper uses it:* The paper uses in-context learning with GPT-4.1-mini prompts as a central method for POS tagging with minimal data.

▶ [Toward Understanding In-context Learning](https://www.youtube.com/watch?v=hxrR39mAlR4) — Simons Institute for the Theory of Computing · 1:29:35

### Ethical considerations in NLP data *(prerequisite)*
Ethical concerns, especially around Indigenous data sovereignty, critically shape the paper's recommendations on data sharing and selection methods. Understanding these ethical frameworks is essential to appreciate the constraints and practical implications discussed by the authors.

*How the paper uses it:* The paper discusses ethical considerations and practical recommendations respecting Indigenous data sovereignty in dataset construction.

▶ [Unpacking Indigenous Data Sovereignty | The Social](https://www.youtube.com/watch?v=qtWlCHn5Pv0) — The Social CTV · 7:03

### Data selection methods for POS tagging
The paper compares three data selection methods—random sampling, active learning with uncertainty sampling, and in-context learning prompts. A detailed understanding of uncertainty sampling and active learning techniques contextualizes the paper's experimental design and results.

*How the paper uses it:* The authors evaluate active learning with uncertainty sampling and random sampling as data selection strategies for POS tagging.

▶ [Investigating the Consistency of Uncertainty Sampling in Deep Active Learning](https://www.youtube.com/watch?v=kNLZhlYbAOI) — DAGM GCPR 2021 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand efficient data selection for POS tagging in low-resource languages. Starting with the basics of part-of-speech tagging, it then covers ethical considerations in NLP data, followed by an explanation of in-context learning with large language models, and finally explores data selection methods like active learning relevant to the paper's experiments.

### Part-of-speech tagging fundamentals *(prerequisite)*
Learn what part-of-speech tagging is, why it matters in language processing, and how models assign grammatical categories to words. This foundation helps you understand the task the paper aims to improve.

*How the paper uses it:* POS tagging is the core NLP task studied in the paper for under-resourced languages.

▶ [Part-of-Speech (POS) Tagging Tutorial: Teaching AI Grammar ...](https://www.youtube.com/watch?v=N5KRLY4es_A) — SH AI Academy · 13:55

### Ethical considerations in NLP data *(prerequisite)*
Understand the importance of respecting data sovereignty and ethical constraints when working with Indigenous and endangered language data. This context explains why some data selection methods are preferred over others.

*How the paper uses it:* The paper discusses ethical concerns limiting LLM API use and data sharing in Indigenous communities.

▶ [Unpacking Indigenous Data Sovereignty | The Social](https://www.youtube.com/watch?v=qtWlCHn5Pv0) — The Social CTV · 7:03

### In-context learning with large language models *(prerequisite)*
Discover how large language models can learn to perform tasks by conditioning on examples given directly in the prompt, without retraining. This method is key to the paper's use of GPT-4.1-mini for POS tagging with limited data.

*How the paper uses it:* The paper uses GPT-4.1-mini with 1,000 token prompts for POS tagging via in-context learning.

▶ [What Is In-Context Learning in Deep Learning?](https://www.youtube.com/watch?v=As9a15poQHs) — Deep Learning with Yacine · 11:48

### Data selection methods for POS tagging
Explore how different strategies like random sampling and active learning select training data to improve model performance efficiently. Understanding these methods clarifies the paper's comparative experiments.

*How the paper uses it:* The paper compares active learning, random sampling, and in-context learning for building POS tagging datasets.

▶ [Machine Learning | Uncertainty Sampling | Active Learning](https://www.youtube.com/watch?v=DsdBe0-4-30) — RANJI RAJ · 6 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's investigation into data selection methods for POS tagging in under-resourced languages. The beginner project reproduces a simple analysis of active learning versus random sampling on a small dataset, the intermediate project reimplements the core active learning method using the authors' released code and compares it to random sampling on a Universal Dependencies treebank, and the advanced project extends the paper by exploring diversity sampling integrated with active learning, addressing a stated future direction. Each project uses the applicant's existing software engineering and ML skills while introducing progressively deeper engagement with the paper's methods and ethical considerations.

### Beginner — Compare Active Learning and Random Sampling on a Small POS Dataset
*Effort: a weekend, ~8 hours*

You build a simple Python script that simulates active learning with uncertainty sampling and random sampling for POS tagging on a small publicly available Universal Dependencies treebank (e.g., English or Irish). You plot learning curves of weighted F1 score versus number of tokens annotated, reproducing the qualitative pattern that active learning reaches performance faster than random sampling.

**Why it shows you understood the paper:** This project shows you understand the core data selection methods compared in the paper and how active learning can improve annotation efficiency for POS tagging, a key contribution of the study.

**Grounded in:** Shows that active learning models reached their maximum F1 scores faster than random sampling but with similar upper asymptotes.

**Tech stack:** Python 3.11, scikit-learn, matplotlib, pandas

**Data:** A small Universal Dependencies treebank such as UD_English-EWT or UD_Irish-IDT, publicly available from Universal Dependencies repository.

**Build it:**

1. Download a small Universal Dependencies treebank and preprocess it to extract tokens and POS tags.
2. Implement or adapt uncertainty sampling active learning for POS tagging using a simple CRF or logistic regression model.
3. Implement random sampling baseline for selecting training tokens.
4. Train models incrementally with increasing token counts selected by each method and evaluate weighted F1 on a fixed test set.
5. Plot learning curves comparing active learning and random sampling performance.
6. Write a README explaining the methods, results, and connection to the paper.

**Ships as:** A GitHub repo with scripts, plots of learning curves, and a README that explains the comparison of active learning and random sampling for POS tagging.

**Stretch goal:** Add a simple uncertainty metric visualization to better explain active learning selection.

### Intermediate — Reimplement Active Learning for POS Tagging Using Authors' Code
*Effort: 1-3 weekends*

You clone and run the authors' released code from https://github.com/ufcompling/unlabeled_pos to reproduce their active learning experiments on a selected Universal Dependencies treebank. You then extend the code to compare active learning with random sampling on that treebank, reporting weighted F1 scores and plotting growth curves similar to the paper's figures.

**Why it shows you understood the paper:** By working directly with the authors' implementation and reproducing their core experiments, you demonstrate comprehension of the paper's methodology, evaluation metrics, and statistical modeling of learning efficiency.

**Grounded in:** The authors' code implements active learning with uncertainty sampling using CRFs and growth curve modeling to compare data selection methods for POS tagging.

**Tech stack:** Python 3.11, PyTorch or CRF library as per authors' code, matplotlib, pandas, Jupyter Notebook

**Data:** Universal Dependencies treebanks as used in the paper, selecting one with sufficient size and diversity (e.g., UD_Irish-IDT).

**Build it:**

1. Clone the authors' repository https://github.com/ufcompling/unlabeled_pos and set up the environment.
2. Run the provided scripts to reproduce active learning experiments on the chosen treebank.
3. Implement a random sampling baseline within the same framework.
4. Collect weighted F1 scores at various token counts for both methods.
5. Plot learning curves and apply simple growth curve modeling to compare methods.
6. Document the process, results, and insights in a detailed README.

**Verified links from the paper:**

- <https://github.com/ufcompling/unlabeled_pos> — released by the paper's authors

**Ships as:** A GitHub repo forked from the authors' code with added random sampling baseline, plots comparing methods, and a README explaining the reproduction and extension.

**Stretch goal:** Experiment with varying the initial seed size or token batch sizes to observe effects on learning curves.

### Advanced — Integrate Diversity Sampling with Active Learning for POS Tagging
*Effort: a few weeks*

You develop an extension of the active learning framework by integrating diversity sampling strategies (e.g., clustering-based or embedding-based selection) alongside uncertainty sampling to improve training set construction for POS tagging. You evaluate this hybrid method on a Universal Dependencies treebank and compare it against pure uncertainty sampling and random sampling baselines, reporting weighted F1 scores and analyzing data distribution metrics like KL divergence.

**Why it shows you understood the paper:** This project addresses a stated future direction of the paper by exploring diversity sampling integrated with active learning, demonstrating deep engagement with the paper's limitations and potential improvements. It also shows ability to innovate beyond reproduction.

**Grounded in:** Future directions include exploring diversity sampling methods integrated with active learning to potentially improve data selection.

**Tech stack:** Python 3.11, PyTorch or CRF library, scikit-learn, transformers (for embeddings), matplotlib, pandas, Jupyter Notebook

**Data:** Universal Dependencies treebanks as in the paper, preferably one with typological diversity and sufficient size (e.g., UD_Irish-IDT or UD_English-EWT).

**Build it:**

1. Set up the active learning framework based on the authors' code or your intermediate project.
2. Implement a diversity sampling method, such as clustering token embeddings or using sentence embeddings to select diverse examples.
3. Combine diversity sampling with uncertainty sampling in a hybrid selection strategy.
4. Run experiments comparing hybrid, pure uncertainty, and random sampling on POS tagging performance.
5. Analyze training set distributions using KL divergence and other metrics to relate to model performance.
6. Write a comprehensive report and README documenting methodology, results, and implications for ethical data selection.

**Verified links from the paper:**

- <https://github.com/ufcompling/unlabeled_pos> — released by the paper's authors

**Ships as:** A GitHub repo with code implementing hybrid active learning, experimental results comparing methods, analysis of data distributions, and a detailed README discussing findings and ethical considerations.

**Stretch goal:** Extend the approach to simulate privacy-preserving active learning scenarios respecting Indigenous data sovereignty constraints.
