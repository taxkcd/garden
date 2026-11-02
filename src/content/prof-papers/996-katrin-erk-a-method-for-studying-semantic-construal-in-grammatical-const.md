---
title: "996 · A Method for Studying Semantic Construal in Grammatical Constructions with Interpretable Contextual Embedding Spaces — Katrin Erk"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-katrin-erk"
source_hash: "e368b32a3e54c85be93596e95101e86e008ea0fc0bb30018f17da90ae8f73f8e"
sequence: 996
generator: "outreach-garden: managed"
---

# 996 · A Method for Studying Semantic Construal in Grammatical Constructions with Interpretable Contextual Embedding Spaces

## At a glance

- **Professor:** Katrin Erk
- **Institution:** Univ. of Massachusetts Amherst
- **Paper:** [A Method for Studying Semantic Construal in Grammatical Constructions with Interpretable Contextual Embedding Spaces](https://arxiv.org/pdf/2305.18598)
- **Authors:** Gabriella Chronis, Kyle Mahowald, Katrin Erk
- **Year:** 2023

## Paper overview

This paper presents a method to analyze how the meanings of words change depending on their grammatical context by projecting contextual word embeddings from large language models into interpretable semantic feature spaces derived from psycholinguistic norms. The authors validate their method and apply it to study two grammatical constructions: the AANN construction (e.g., 'a beautiful three days') and subject vs. object noun positions, showing that the same word can have different semantic interpretations depending on its syntactic role.

### Why it matters

**Research problem:** Understanding how grammatical constructions influence the semantic construal of words in context, and developing methods to extract interpretable, context-sensitive semantic features from large language models.

**Why it matters:** Semantic construal in syntax is a fundamental question in linguistics and natural language understanding. Large language models encode rich contextual information, but their embeddings are opaque. Interpretable semantic features can bridge linguistic theory and neural models, enabling better analysis of meaning variation and improving NLP applications.

**Key contributions:**

- Developed a method to project contextual embeddings into interpretable semantic feature spaces using psycholinguistic norms.
- Validated the method quantitatively on sense differentiation and homonym disambiguation tasks.
- Demonstrated that the method captures subtle semantic construal differences in grammatical constructions.
- Showed that nouns in the AANN construction are construed as more measurement-like than in canonical forms.
- Showed that words in subject position are construed as more agentive/animate than in object position, even for the same word.

## About the professor

**Katrin Erk** — Professor, Linguistics and Computer Science, Univ. of Massachusetts Amherst.

Research interests: computational linguistics, specifically computational semantics; polysemous words; narrative schemas and scripts; integrating flexible, graded representations of word meanings with representations of sentence meaning.

### Research links

- [Faculty/profile page](http://www.katrinerk.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Contextual Word Embeddings
**The paper assumes:** contextual word embeddings, transformer-based language models, semantic representation in NLP
**Already in this field?** Skip this entirely if you already understand transformer language models and how contextual embeddings represent word meaning in context.

This background focuses on understanding contextual word embeddings, which are central to the paper's method of projecting BERT embeddings into interpretable semantic spaces. The rigorous course option offers a deep, structured dive into language modeling and contextual embeddings from foundational concepts to advanced architectures, while the fast track provides a concise, practical introduction to building and understanding word embeddings, suitable for quickly grasping core ideas without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS336: Language Modeling from Scratch | Spring 2026](https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV) — Stanford Online · 18 videos · 24.2h across 18 episodes

**Watch only this:** Lectures 1-4 (Overview, Tokenization; PyTorch (einops); Architectures; Attention Alternatives), about 5.3 hours — these cover the fundamentals of language modeling and the architecture of contextual embeddings necessary to understand the paper's embedding projections.

*Why it unblocks this paper:* Stanford CS336: Language Modeling from Scratch covers the full pipeline of language model creation, including tokenization, architectures, and evaluation, providing a comprehensive foundation for understanding contextual embeddings like BERT used in the paper.

*If you want all of it:* 24.2 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Learning Vectorial Representations of Words](https://www.youtube.com/playlist?list=PLZw0Jh6OIju8) — Varun Tej · 19 videos · 1.8h across 19 episodes

**Watch only this:** Episodes N1 to N6 (One Hot Representations and Their Limitations through CBOW – Forward Pass and Cross Entropy Loss), about 30 minutes — these episodes cover the core concepts of word embeddings and their training, providing a quick yet solid background.

*Why it unblocks this paper:* The 'Learning Vectorial Representations of Words' playlist offers a focused, clear introduction to word embeddings, including their mathematical foundations and evaluation, which helps quickly grasp the basics of word vector representations relevant to the paper's embedding methods.

*If you want all of it:* 1.8 hours across 19 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on semantic construal in grammatical constructions using interpretable contextual embedding spaces, start with foundational knowledge on contextual word embeddings and psycholinguistic feature norms, as these underpin the method. Next, study the linguistic phenomenon of semantic construal in syntax to grasp the theoretical motivation. Finally, focus on the paper's core method and findings through the authors' own talk and related advanced lectures on interpretable semantic feature projection.

### contextual word embeddings *(prerequisite)*
Contextual word embeddings are the input representations used in the paper's method. Understanding how embeddings like BERT encode word meaning in context is essential to appreciate how semantic features can be projected from them. The Stanford CS224N lecture by Christopher Manning offers a rigorous, graduate-level introduction to this topic.

*How the paper uses it:* The paper projects contextual embeddings from BERT into interpretable semantic spaces to analyze semantic construal.

▶ [Stanford CS224N: NLP with Deep Learning | Winter 2019 | Lecture 13 – Contextual Word Embeddings](https://www.youtube.com/watch?v=S-CspeZ8FHc) — Stanford Online · 1:20:19 · 7y ago

### semantic construal in syntax *(prerequisite)*
Semantic construal in syntax is the linguistic phenomenon the paper investigates—how grammatical constructions influence word meaning. Understanding this concept provides theoretical context for why projecting embeddings into semantic feature spaces is valuable. The MIT OpenCourseWare lecture by Prof. Norvin W. Richards offers an advanced university-level treatment of syntax and semantics integration.

*How the paper uses it:* The paper analyzes how grammatical constructions affect semantic construal of words in context.

▶ [Lecture 17: Syntax, Part 7, and Semantics, Part 1](https://www.youtube.com/watch?v=Di8e2opeGA0) — MIT OpenCourseWare · 1:15:45 · 3y ago

### paper authors talk
The authors' own presentation provides the most direct and detailed exposition of their method, experiments, and findings. It offers insights into their motivations and interpretations that are not available elsewhere. Although no direct talk by the authors on this exact paper was found, the closest relevant advanced talk on constructions by Martin Hilpert is included for its relevance to grammatical constructions and semantic construal.

*How the paper uses it:* Direct source for authors' presentation of their method and findings on semantic construal in constructions.

▶ [Constructions and their collocates](https://www.youtube.com/watch?v=lKWc8pIDO_w) — Martin Hilpert · 39:06 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about psycholinguistic feature norms, which provide the interpretable semantic spaces used in the method. Next, grasp the concept of contextual word embeddings, the input representations capturing word meaning in context. Then, explore semantic construal in syntax to understand how grammar influences meaning. Finally, study the paper's core method: projecting contextual embeddings into interpretable semantic feature spaces to analyze meaning variation in grammatical constructions.

### psycholinguistic feature norms *(prerequisite)*
Psycholinguistic feature norms are datasets that capture human judgments about semantic attributes of words, such as whether a word relates to motion, body parts, or measurement. These norms form interpretable semantic feature spaces that help translate opaque word embeddings into meaningful semantic dimensions.

*How the paper uses it:* The paper uses psycholinguistic feature norms as the foundation for the interpretable semantic spaces into which contextual embeddings are projected.

▶ [Vocabulary: Semantic Feature Analysis](https://www.youtube.com/watch?v=_QFlk0gVrss) — Education at Bethel University · 6:46 · 5y ago

### contextual word embeddings *(prerequisite)*
Contextual word embeddings represent words as vectors that change depending on the surrounding text, capturing subtle shifts in meaning based on context. Unlike static embeddings, they allow models to distinguish different senses of the same word in different sentences.

*How the paper uses it:* The method projects contextual embeddings from BERT into semantic feature spaces to analyze meaning variation in context.

▶ [Stanford CS224N: NLP with Deep Learning | Winter 2019 | Lecture 13 – Contextual Word Embeddings](https://www.youtube.com/watch?v=S-CspeZ8FHc) — Stanford Online · 1:20:19 · 7y ago

### semantic construal in syntax *(prerequisite)*
Semantic construal in syntax studies how grammatical structures influence the way word meanings are interpreted in context, such as how subjects and objects differ in their semantic roles. Understanding this helps explain how the same word can have different meanings depending on its syntactic position.

*How the paper uses it:* The paper investigates how grammatical constructions like the AANN pattern and subject vs. object positions affect semantic construal of words.

▶ [Constructions and their collocates](https://www.youtube.com/watch?v=lKWc8pIDO_w) — Martin Hilpert · 39:06 · 6y ago

## Already in your library

- [Introduction to Word Embedding | Static vs Dynamic Embedding | Deep Learning](https://www.youtube.com/watch?v=95eQCwQpS4k) — also for: Learning Who Disagrees: Demographic Importance Weighting for Modeling Annotator Distributions with DiADEM (Christopher Homan)
- [An Introduction to Mechanistic Interpretability – Neel Nanda ...](https://www.youtube.com/watch?v=0704iLc55Fs) — also for: Do Sparse Autoencoders Identify Reasoning Features in Language Models? (Irene Y. Chen)
- [Interpretable vs Explainable Machine Learning](https://www.youtube.com/watch?v=VY7SCl_DFho) — also for: Investigating an Intelligent System to Monitor & Explain Abnormal Activity Patterns of Older Adults (Daniel P. Siewiorek)
- [6: Deep Learning for Natural Language – Embeddings](https://www.youtube.com/watch?v=LqFc0z-pQTg) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [BERT Neural Network - EXPLAINED!](https://www.youtube.com/watch?v=xI0HHN5XKDo) — also for: Dynamic Retriever for In-Context Knowledge Editing via Policy Optimization (Yanfu Zhang)
- [Lec 18 | Pre-Training Strategies: ELMo, BERT](https://www.youtube.com/watch?v=WZOqXkld9mk) — also for: Ranking-Constrained Learning with Rationales for Text Classification (Mustafa Bilgic)
- [What Are Word Embeddings?](https://www.youtube.com/watch?v=hVM8qGRTaOA) — also for: Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance (Rakesh M. Verma)
- [Semantics | Features, Roles, Relation of Semantics, Collocations | Lecture: 24 (Linguistics-I)](https://www.youtube.com/watch?v=PvAAm_4LFj4) — also for: Click2Graph: Interactive Panoptic Video Scene Graphs from a Single Click (B. S. Manjunath)
- [Lexical, Syntactic, Semantic, & Pragmatic Analysis in NLP Explained](https://www.youtube.com/watch?v=WaXOcZb9OhU) — also for: “Talk to me with left, right, and angles”: Lexical entrainment in spoken Hebrew dialogue (Rivka Levitan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's method for projecting contextual embeddings into interpretable semantic feature spaces to analyze semantic construal in grammatical constructions. The beginner project reproduces a simple semantic feature prediction visualization to grasp the core idea. The intermediate project reimplements the core mapping method on a small dataset and evaluates sense differentiation, showing quantitative validation. The advanced project extends the method to a new linguistic construction or domain, addressing a stated limitation or future direction, thus demonstrating research-level engagement.

### Beginner — Visualize Semantic Feature Projections for Sample Sentences
*Effort: a weekend, ~8 hours*

You build a small Python notebook that takes contextual embeddings from BERT for a few example sentences containing polysemous words (e.g., 'fire'), projects these embeddings into a psycholinguistic semantic feature space (e.g., McRae norms) using a simple pretrained or heuristic mapping, and visualizes the predicted semantic features as bar charts or radar plots. This reproduces a qualitative analysis similar to the paper's usage clusters and feature predictions for different senses.

**Why it shows you understood the paper:** This project shows you understand how to extract contextual embeddings, apply a semantic feature projection, and interpret the resulting features to reveal semantic construal differences in context, a core contribution of the paper.

**Grounded in:** Provided qualitative analysis of polysemous word senses using usage type clusters.

**Tech stack:** Python 3.11, transformers (HuggingFace), matplotlib, numpy, scikit-learn

**Data:** Use publicly available BERT-base embeddings from HuggingFace transformers; simulate or use a small subset of psycholinguistic feature norms (e.g., McRae) from published norm tables.

**Build it:**

1. Load pretrained BERT-base model and tokenizer from HuggingFace.
2. Select a small set of example sentences with polysemous words (e.g., 'fire').
3. Extract contextual embeddings for target words in these sentences.
4. Implement or load a simple linear mapping from embeddings to semantic features (e.g., random or pretrained on a small sample).
5. Project embeddings into semantic feature space and visualize predicted features per context using bar charts.
6. Write a README explaining the method and interpreting the visualizations.

**Ships as:** A Jupyter notebook with code and plots showing semantic feature predictions for example sentences, plus a README explaining the approach and insights.

**Stretch goal:** Add interactive visualization (e.g., with Plotly) to compare semantic features across multiple contexts dynamically.

### Intermediate — Reimplement Semantic Feature Projection and Evaluate Sense Differentiation
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's core method: train a mapping from BERT contextual embeddings to psycholinguistic semantic feature norms (e.g., McRae norms) at the type level, then apply it to token-level embeddings to predict semantic features in context. You evaluate the method quantitatively on a small sense differentiation task using a public subset of WordNet senses and compute correlation metrics similar to the paper (e.g., Pearson correlation between predicted feature similarity and WordNet sense similarity).

**Why it shows you understood the paper:** This project demonstrates you can implement the core semantic feature projection method from the paper, understand the evaluation metrics, and reproduce quantitative validation of the approach, which is central to the paper's contributions.

**Grounded in:** Validated the method quantitatively on sense differentiation and homonym disambiguation tasks; significant correlation between predicted semantic feature similarity and WordNet sense similarity.

**Tech stack:** Python 3.11, transformers (HuggingFace), scikit-learn, numpy, pandas, PyTorch or TensorFlow (optional)

**Data:** Use pretrained BERT-base embeddings; McRae feature norms subset (publicly available psycholinguistic norms); WordNet sense similarity scores from NLTK or similar.

**Build it:**

1. Collect a small dataset of words with multiple WordNet senses and their McRae feature vectors.
2. Extract BERT embeddings for these words at the type level (average over contexts).
3. Train a regression model (e.g., Partial Least Squares Regression or feedforward neural network) to map embeddings to semantic features.
4. Apply the trained model to token-level embeddings extracted from example sentences.
5. Compute similarity between predicted semantic features for tokens and correlate with WordNet sense similarity.
6. Report evaluation metrics (Pearson r, MAP@k) and compare to a simple baseline (e.g., static embeddings).
7. Document the process and results in a README.

**Ships as:** A code repository with scripts/notebooks for training, evaluation, and a report showing quantitative results replicating the paper's sense differentiation validation.

**Stretch goal:** Extend evaluation to homonym disambiguation using a small labeled dataset and compare performance to static embedding baselines.

### Advanced — Analyze Semantic Construal in a New Grammatical Construction
*Effort: few weeks, ~40+ hours*

You extend the paper's method to analyze semantic construal in a grammatical construction not studied in the paper (e.g., prepositional phrase attachment or comparative constructions). You train or reuse the semantic feature projection model to predict contextual semantic features for target words in this construction, then analyze differences in predicted features compared to canonical contexts. You evaluate whether the method captures meaningful semantic construal differences and discuss implications for linguistic theory.

**Why it shows you understood the paper:** This project shows you can apply the paper's method beyond its original scope, addressing a stated future direction, and engage with both computational implementation and linguistic analysis, demonstrating research-level understanding.

**Grounded in:** Future direction: Apply the method to analyze constructions with less well-understood semantic construals.

**Tech stack:** Python 3.11, transformers (HuggingFace), scikit-learn, numpy, pandas, matplotlib, PyTorch or TensorFlow (optional)

**Data:** Use pretrained BERT embeddings; collect or extract sentences containing the target grammatical construction from a public corpus (e.g., a subset of the Penn Treebank or Universal Dependencies treebank). Use McRae or Buchanan feature norms as semantic feature space.

**Build it:**

1. Select a grammatical construction with less studied semantic construal (e.g., prepositional phrase attachment).
2. Collect or extract sentences containing this construction from a public syntactically annotated corpus.
3. Extract contextual embeddings for target words in these sentences using BERT.
4. Apply or train a semantic feature projection model to predict semantic features for these tokens.
5. Compare predicted semantic features for target words in the construction versus canonical contexts.
6. Visualize and statistically analyze feature differences to identify semantic construal effects.
7. Write a detailed report discussing findings, limitations, and connections to linguistic theory.

**Ships as:** A repository with code for data extraction, feature projection, analysis scripts, and a comprehensive README/report presenting the semantic construal analysis of the new construction.

**Stretch goal:** Incorporate multi-instance learning or label propagation techniques to improve context sensitivity of feature predictions for the new construction.

_The paper's authors did not release code or datasets; all projects require reimplementation or approximation of psycholinguistic feature norms and use publicly available pretrained BERT models and corpora._
