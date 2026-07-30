---
title: "066 · What data should I include in my POS tagging training set? — Emily Prud'hommeaux"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-emily-prud-hommeaux"
source_hash: "39afe9ee7fbf695afc23e1fd99ac5a22373deb77a960df16eb75da3840000a81"
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
