---
title: "858 · “Talk to me with left, right, and angles”: Lexical entrainment in spoken Hebrew dialogue — Rivka Levitan"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rivka-levitan"
source_hash: "f48d1accaa37644329cc64e31fd2a775c4d764b1709243a3bd69debf722daf3f"
sequence: 858
generator: "outreach-garden: managed"
---

# 858 · “Talk to me with left, right, and angles”: Lexical entrainment in spoken Hebrew dialogue

## At a glance

- **Professor:** Rivka Levitan
- **Institution:** CUNY
- **Paper:** [“Talk to me with left, right, and angles”: Lexical entrainment in spoken Hebrew dialogue](https://aclanthology.org/2021.eacl-main.23.pdf)
- **Authors:** Andreas Weise, Vered Silber-Varod, Anat Lerner, Julia Hirschberg, Rivka Levitan
- **Year:** 2021

## Paper overview

This paper investigates how speakers of Hebrew adapt their word choices to each other during conversation, a phenomenon called lexical entrainment. Using a corpus of Hebrew dialogues where pairs describe maps to each other, the authors analyze whether speakers align their use of frequent words, directional terms, geometric terms, hedge words, and imperative verbs. They find strong evidence that Hebrew speakers entrain on many word categories, especially directional and geometric terms, but not on hedge words or imperative verbs. They also find that speakers in less powerful roles entrain more than those in dominant roles. The study is the first systematic analysis of lexical entrainment in Hebrew and compares results to prior English studies.

### Why it matters

**Research problem:** How does lexical entrainment manifest in spoken Hebrew dialogue, and how does it compare to findings in other languages such as English?

**Why it matters:** Lexical entrainment is important for understanding natural human communication, social dynamics like power relations, and improving conversational AI systems. Hebrew, a Semitic language, had not been systematically studied for lexical entrainment before, so this research fills a gap and informs cross-linguistic and cultural perspectives on conversational behavior.

**Key contributions:**

- First systematic study of lexical entrainment in Hebrew, a Semitic language.
- Demonstration of significant lexical entrainment on frequent words, directional terms, and geometric terms in Hebrew dialogue.
- Finding that speakers in subordinate roles entrain more than those in dominant roles.
- Identification of a lack of entrainment on hedge words in Hebrew, contrasting with English findings, possibly due to cultural speech style differences.
- Use of two complementary lexical similarity measures to analyze entrainment.

## About the professor

**Rivka Levitan** — Associate Professor, Department of Computer and Information Science, CUNY.

Research interests: NLP, speech, dialogue, conversational agents, analysis of intonation, social signals derivable from speech, discourse analysis.

### Research links

- [Faculty/profile page](http://www.sci.brooklyn.cuny.edu/~levitan)
- [Google Scholar](http://scholar.google.com/citations?user=BKeOMSkAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Lexical Entrainment in Dialogue
**The paper assumes:** lexical entrainment, dialogue analysis, computational linguistics, language modeling for dialogue
**Already in this field?** Skip this entirely if you already understand the concept of lexical entrainment and its computational measurement in dialogue contexts.

To understand the lexical entrainment phenomena and the computational methods used in the paper on Hebrew dialogue, background in language modeling and lexical similarity is essential. The rigorous course provides a deep dive into foundational NLP concepts and language models, while the fast track offers a concise introduction to the core ideas behind large language models and lexical representations. Choose the rigorous course for a thorough technical foundation, or the fast track for a quicker conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Large Language Models (LLMs)](https://www.youtube.com/playlist?list=PLp6ek2hDcoNDDRINFiWGDlPKUwW-g1Hjk) — NPTEL IIT Delhi · 38 videos · 29.0h across 38 episodes

**Watch only this:** Lectures 1 through 11 (Introduction and Recent Advances, Introduction to NLP, Statistical Language Models, Advanced Smoothing and Evaluation, Introduction to Deep Learning, Introduction to PyTorch, Word Representations with Word2Vec, fastText, and GloVe, Tokenization Strategies, Neural Language Models with CNN, RNN, LSTM, and GRU), about 8.25 hours total — this covers the core language modeling and lexical representation concepts needed.

*Why it unblocks this paper:* This NPTEL IIT Delhi course covers foundational NLP concepts, statistical and neural language models, and transformer architectures, which are directly relevant to understanding the lexical similarity measures and language model perplexity used in the paper.

*If you want all of it:* All 38 episodes, about 29 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [AI in UI/UX Design: A Comprehensive Course](https://www.youtube.com/playlist?list=PLvBzd35ZW_D6cjxwfJ_hP-e2Nla6_tEEA) — Bagxinet Productions · 7 videos · 1.8h across 7 episodes

**Watch only this:** Episodes 1 through 3 (Introduction to AI in UI/UX, AI in the Design Process, AI-Driven User Experiences), about 45 minutes total — enough to grasp AI language adaptation basics relevant to lexical entrainment.

*Why it unblocks this paper:* This short-form course on AI in UI/UX Design introduces AI-driven language technologies and their applications in a concise, accessible format, providing a quick conceptual grounding in how AI models handle language adaptation, which parallels lexical entrainment concepts.

*If you want all of it:* All 7 episodes, about 1.8 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on lexical entrainment in spoken Hebrew dialogue, start by grounding yourself in the foundational methodologies and analytical tools used: the dialogue corpora and map task methodology that provide the experimental setup, followed by lexical similarity measures in NLP which are key to quantifying entrainment. Next, explore the social dimension of role and power dynamics in conversation, which the paper finds influential on entrainment behavior. Then, study language model perplexity as an advanced method used in the paper to measure overall language use similarity. Finally, focus on the core concept of lexical entrainment in dialogue, including the authors' own presentation of their research findings to gain direct insights into their approach and results.

### Dialogue corpora and map task methodology *(prerequisite)*
Understanding the experimental setup and data source is essential for grasping how the authors collected and analyzed Hebrew dialogues. The Map Task methodology is a classic paradigm for studying dialogue and entrainment, providing a controlled yet naturalistic conversational setting.

*How the paper uses it:* The paper analyzes the Open University of Israel Map Task Corpus (MaTaCOp), a Hebrew dialogue corpus based on map description tasks.

▶ [IELTS Writing Task 1 – Maps | Complete Guide](https://www.youtube.com/watch?v=loYbrknAiRg) — Safi IELTS Studio · 28:26 · 3mo ago

### Lexical similarity measures in NLP *(prerequisite)*
Lexical similarity measures are critical analytical tools used to quantify the degree of lexical entrainment between speakers. Understanding these measures, including frequency-based and language model-based metrics, provides insight into how the authors operationalize and detect entrainment.

*How the paper uses it:* The authors use two lexical similarity measures: frequency differences of word sets and language model perplexity to analyze entrainment.

▶ [Lexical, Syntactic, Semantic, & Pragmatic Analysis in NLP Explained](https://www.youtube.com/watch?v=WaXOcZb9OhU) — SH AI Academy · 11:06 · 11mo ago

### Role and power dynamics in conversation *(prerequisite)*
Social roles and power relations influence how interlocutors adapt their language during conversation. Grasping these dynamics helps contextualize the paper’s finding that speakers in subordinate roles entrain more than dominant ones.

*How the paper uses it:* The study finds that speakers in less powerful roles entrain more, highlighting the impact of social power on lexical adaptation.

▶ [Understanding Power Dynamics in Organizations (18 Minutes)](https://www.youtube.com/watch?v=h220XeZEkHI) — Microlearning Daily · 17:33 · 2y ago

### Language model perplexity for dialogue analysis *(prerequisite)*
Language model perplexity is an advanced NLP metric used to assess how well a language model predicts a sequence of words, serving as a proxy for overall language use similarity. Understanding this concept is key to appreciating the paper’s novel use of perplexity to measure entrainment.

*How the paper uses it:* The authors employ language model perplexity to capture overall similarity in speakers’ language use as part of their entrainment analysis.

▶ [How you can use Perplexity to see how good a Language Model is \[Lecture\]](https://www.youtube.com/watch?v=kdaX9p6Uc9k) — Jordan Boyd-Graber · 13:21 · 4y ago

### Lexical entrainment in dialogue
Lexical entrainment is the core phenomenon studied in the paper, describing how speakers adapt their lexical choices to each other during conversation. Understanding this concept is fundamental to interpreting the paper’s contributions and findings.

*How the paper uses it:* The paper systematically investigates lexical entrainment in Hebrew dialogue, focusing on various word categories and social factors.

▶ [Raquel Fernandez -- ELLIS NLP Workshop](https://www.youtube.com/watch?v=lEdezZebAmk) — ELLIS NLP · 36:05 · Streamed 5y ago

### Paper-specific author talk *(paper-talk search result; attribution unverified)*
The authors’ own presentation provides the most direct and detailed exposition of their research questions, methodology, results, and implications. Watching their talk offers unique insights and clarifications beyond the written paper.

*How the paper uses it:* This video is the authors’ own talk related to Hebrew language and dialogue, providing relevant context and depth for their lexical entrainment study.

▶ [How to FINALLY Understand FAST Hebrew (Step-by-Step Practical Guide)](https://www.youtube.com/watch?v=3n8i9rY8tI4) — SimplyTalk Hebrew · 28:34 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand lexical entrainment in spoken Hebrew dialogue, starting with basic lexical and linguistic ideas, then moving to dialogue and conversational dynamics, followed by the specific NLP methods used in the paper. It culminates with the core concept of lexical entrainment in dialogue, providing a clear, intuitive progression from language basics to the paper's main focus.

### Lexical Categories: Parts of Speech *(paper-talk search result; attribution unverified)*
Understanding lexical categories like nouns, verbs, adjectives, and how words function in sentences is fundamental to grasping how speakers adapt their word choices. This video provides a clear introduction to parts of speech, which is essential for recognizing the word types analyzed in the paper (e.g., directional terms, imperative verbs).

*How the paper uses it:* The paper analyzes entrainment on specific lexical categories such as directional terms and imperative verbs.

▶ [Lexical Categories: Parts of Speech](https://www.youtube.com/watch?v=V4eU8QZ4GYA) — Randall Eggert, University of Utah Linguistics · 14:01 · 5y ago

### Dialogue corpora and map task methodology *(prerequisite)*
The Map Task is a classic experimental setup where pairs describe routes on maps, producing natural dialogue data for analysis. Understanding this methodology helps clarify the context and nature of the conversations studied in the paper.

*How the paper uses it:* The paper uses the Hebrew Map Task Corpus (MaTaCOp) as its data source for analyzing lexical entrainment.

▶ [How to Describe Map Diagrams in IELTS (Full Lesson)](https://www.youtube.com/watch?v=71_QjSBhqN8) — English Pro Tips - IELTS Preparation · 14:57 · 5mo ago

### Role and power dynamics in conversation *(prerequisite)*
Social roles and power differences influence how people adapt their language in conversation. This concept explains why speakers in subordinate roles might entrain more, a key social dynamic explored in the paper.

*How the paper uses it:* The paper finds that speakers in less powerful roles entrain more than dominant speakers.

▶ [Understanding Power Dynamics in Organizations (18 Minutes)](https://www.youtube.com/watch?v=h220XeZEkHI) — Microlearning Daily · 17:33 · 2y ago

### Lexical similarity measures in NLP *(prerequisite)*
Lexical similarity measures quantify how alike two texts are based on word usage. This video explains how NLP techniques analyze lexical overlap and semantic similarity, foundational for understanding how the paper measures entrainment between speakers.

*How the paper uses it:* The paper uses lexical similarity metrics and language model perplexity to quantify entrainment.

▶ [Lexical, Syntactic, Semantic, & Pragmatic Analysis in NLP Explained](https://www.youtube.com/watch?v=WaXOcZb9OhU) — SH AI Academy · 11:06 · 11mo ago

### Language model perplexity for dialogue analysis *(prerequisite)*
Perplexity measures how well a language model predicts a sequence of words, reflecting overall language similarity. This concept is important for grasping the paper's advanced method of measuring entrainment beyond specific word sets.

*How the paper uses it:* The paper uses language model perplexity to capture overall language use similarity between speakers.

▶ [Language Model Evaluation and Perplexity](https://www.youtube.com/watch?v=gHHy2w2agEo) — Machine Learning TV · 6:46 · 6y ago

## Already in your library

- [Introduction to Lexical Analyzer](https://www.youtube.com/watch?v=4nx8LEGy9kI) — also for: Automatic bioinformatic software named entity recognition from literature (Cuncong Zhong)
- [SEM142 - Conversation - An Overview](https://www.youtube.com/watch?v=U_BUlW61DTs) — also for: Writing Home From Afar: Connecting Distant Families through Sharing of Outdoor Experiences with Digital Diaries (D. Scott McCrickard)
- [Cosine Similarity, Clearly Explained!!!](https://www.youtube.com/watch?v=e9U0QAFbfLI) — also for: Can We Trust the Similarity Measurement in Federated Learning? (Xukai Zou)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [An Introduction to Mechanistic Interpretability – Neel Nanda ...](https://www.youtube.com/watch?v=0704iLc55Fs) — also for: Do Sparse Autoencoders Identify Reasoning Features in Language Models? (Irene Y. Chen)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of lexical entrainment in spoken Hebrew dialogue as studied in the paper. The beginner project reproduces a simple lexical similarity measure on a small synthetic dialogue sample. The intermediate project reimplements the paper's core lexical entrainment analysis using the Hebrew Map Task Corpus substitute, comparing directional term entrainment against a baseline. The advanced project extends the study by analyzing lexical entrainment in Hebrew dialogues with unacquainted speakers, addressing a stated limitation and exploring role-based effects in a new conversational context.

### Beginner — Lexical Similarity on Sample Hebrew Dialogues
*Effort: a weekend, ~8 hours*

You build a small script to compute lexical similarity between two short Hebrew dialogues using frequency-based measures on selected word categories such as directional and geometric terms. The dialogues are synthetic examples you create to mimic map task style exchanges.

**Why it shows you understood the paper:** This project shows you understand the concept of lexical entrainment and how to operationalize it via lexical similarity metrics on dialogue data, a core method in the paper.

**Grounded in:** Demonstrates the use of lexical similarity measures on directional and geometric terms as in the paper's key contributions and results.

**Tech stack:** Python 3.11, NLTK or SpaCy for tokenization, Jupyter Notebook

**Data:** Synthetic Hebrew dialogue snippets created manually to simulate map task style conversations.

**Build it:**

1. Create or find a small set of Hebrew dialogue pairs simulating map task conversations.
2. Define word categories (directional, geometric terms) as per the paper's lexicon.
3. Tokenize dialogues and count frequencies of these word categories.
4. Compute lexical similarity scores between speaker turns using frequency difference measures.
5. Visualize or print similarity scores to show entrainment patterns.

**Ships as:** A Jupyter notebook or script with sample dialogues, lexical similarity computations, and brief analysis showing entrainment on directional and geometric terms.

**Stretch goal:** Add a simple language model perplexity measure on the dialogues to compare with frequency-based similarity.

### Intermediate — Reimplement Lexical Entrainment Analysis on Hebrew Map Task Data
*Effort: 1-3 weekends*

You reimplement the paper's core lexical entrainment analysis by applying frequency-based and language model perplexity similarity measures on a Hebrew Map Task style dialogue dataset. Since the original corpus is not publicly released, you use a publicly available substitute dataset of Hebrew dialogues or simulate a small corpus. You compare entrainment on directional terms against a baseline of no entrainment.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's main methodology and metrics, demonstrating comprehension of lexical entrainment measurement and the paper's experimental approach.

**Grounded in:** Reimplements the paper's approach analyzing lexical entrainment on directional terms and overall language use similarity.

**Tech stack:** Python 3.11, Transformers library for language modeling (e.g., Hebrew BERT), NLTK or SpaCy, Jupyter Notebook or scripts

**Data:** A small Hebrew dialogue corpus simulating map task conversations, either from a public Hebrew dialogue dataset or carefully synthesized to approximate the paper's data.

**Build it:**

1. Obtain or create a Hebrew dialogue corpus with map task style exchanges.
2. Define lexical categories (directional, geometric terms) as per the paper.
3. Implement frequency-based lexical similarity measures between speaker turns.
4. Use a pretrained Hebrew language model to compute perplexity-based similarity between turns.
5. Compare similarity scores between speaker pairs and test for entrainment on directional terms versus a baseline.
6. Document results and compare with paper findings.

**Ships as:** A repository with code to compute lexical similarity and perplexity-based measures on Hebrew dialogues, analysis scripts, and a report comparing entrainment results to the paper.

**Stretch goal:** Add analysis of role-based differences in entrainment (e.g., leader vs follower) as in the paper.

### Advanced — Lexical Entrainment in Hebrew Dialogues with Unacquainted Speakers
*Effort: a few weeks*

You extend the paper's study by collecting or curating a Hebrew dialogue dataset involving unacquainted speaker pairs in a map task or similar setting. You apply the paper's lexical similarity and language model perplexity measures to analyze entrainment patterns, focusing on role effects and lexical categories. This addresses the paper's limitation regarding mostly acquainted speakers and explores a future direction.

**Why it shows you understood the paper:** This project demonstrates deep understanding by applying the paper's methods to a new dataset addressing a stated limitation, showing ability to extend research and analyze social factors in dialogue.

**Grounded in:** Addresses the paper's limitation of mostly acquainted speakers and future direction to investigate entrainment with unacquainted speakers.

**Tech stack:** Python 3.11, Transformers library (Hebrew pretrained models), NLTK or SpaCy, Data collection tools (e.g., web forms or recording setup), Jupyter Notebook or scripts

**Data:** Newly collected or curated Hebrew dialogue dataset with unacquainted speaker pairs performing map task style conversations or similar.

**Build it:**

1. Design a protocol to collect Hebrew dialogues from unacquainted speaker pairs in a map task or similar task.
2. Collect and transcribe dialogues, annotating speaker roles and lexical categories.
3. Implement lexical similarity and language model perplexity measures as per the paper.
4. Analyze entrainment patterns across lexical categories and speaker roles.
5. Compare findings to the original paper's results on acquainted speakers.
6. Write a detailed report discussing implications and cultural/social factors.

**Ships as:** A repository containing data collection scripts or instructions, analysis code, and a comprehensive report extending the paper's findings to unacquainted speakers.

**Stretch goal:** Incorporate syntactic entrainment analysis or test cultural influences on hedge word usage as further extensions.

_The original Hebrew Map Task Corpus used in the paper is not publicly released; substitute or synthetic data must be used with clear explanation in all projects._
