---
title: "971 · Ranking-Constrained Learning with Rationales for Text Classification — Mustafa Bilgic"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mustafa-bilgic"
source_hash: "944877064b5eda8929803a60d62bdec6a4a3650be847af8b00d48c3a2da527a6"
sequence: 971
generator: "outreach-garden: managed"
---

# 971 · Ranking-Constrained Learning with Rationales for Text Classification

## At a glance

- **Professor:** Mustafa Bilgic
- **Institution:** Illinois Institute of Technology
- **Paper:** [Ranking-Constrained Learning with Rationales for Text Classification](https://aclanthology.org/2022.findings-acl.161.pdf)
- **Authors:** Juanyan Wang, Manali Sharma, Mustafa Bilgic
- **Year:** 2022

## Paper overview

This paper proposes a new method to improve text classification models by using not only labels but also human-provided explanations (rationales) during training. The approach helps models learn more effectively from fewer labeled documents by focusing on the important parts of the text highlighted by annotators. It works with both simple and deep learning models and shows better accuracy with less data on multiple datasets.

### Why it matters

**Research problem:** Text classification models require large labeled datasets to perform well, but labeling data is expensive and time-consuming. The challenge is to improve classification accuracy when only limited labeled data is available.

**Why it matters:** Many real-world applications need fast and accurate text classification with limited labeled data, such as legal document review, news analysis, and scientific article categorization. Improving learning efficiency reduces annotation cost and speeds up deployment.

**Key contributions:**

- Formulation of a general learning-with-rationales method using ranking constraints for text classification.
- Empirical evaluation on three human-annotated datasets (IMDb movie reviews, aviation safety reports, and a new scientific article dataset).
- Demonstration that the method achieves state-of-the-art results, requiring fewer labeled documents to reach target accuracies compared to baselines.
- Release of a new dataset of scientific articles annotated with rationales.

## About the professor

**Mustafa Bilgic** — Chair, Department of Computer Science, Professor of Computer Science, Program Director, Master of Artificial Intelligence, Department of Computer Science, Illinois Institute of Technology.

Research interests: Machine Learning, Active Learning, Active Inference, Probabilistic Graphical Models, and Statistical Relational Learning

### Research links

- [Faculty/profile page](https://science.iit.edu/people/faculty/mustafa-bilgic)
- [Professor website](http://www.cs.iit.edu/~mbilgic/)
- [Lab website](http://www.cs.iit.edu/~ml/)
- [Google Scholar](https://scholar.google.com/citations?user=bOM9qN8AAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Machine Learning with Rationales
**The paper assumes:** machine learning with auxiliary supervision, rationale-augmented learning, ranking loss functions in text classification
**Already in this field?** Skip this entirely if you already understand how machine learning models can incorporate human rationales or auxiliary supervision signals during training.

To understand the methodology and contributions of the paper on ranking-constrained learning with rationales for text classification, a solid grasp of machine learning principles, especially supervised learning with auxiliary signals like rationales, is essential. The rigorous course option offers a deep dive into foundational AI and machine learning concepts, including learning theory and model training, while the fast track provides a concise, intuition-driven introduction to AI and machine learning basics, suitable for quickly grasping the core ideas behind rationale-augmented learning.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-6 (Machine Learning Introduction, Linear Regression, Logistic Regression, Perceptron, GDA, SVM), about 7.9 hours — these cover core supervised learning methods and model training relevant to the paper's approach.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a comprehensive, authoritative machine learning course covering supervised learning, model training, and evaluation techniques foundational to understanding rationale-augmented learning and ranking constraints in text classification.

*If you want all of it:* All 21 lectures, about 27.9 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Artificial Intelligence](https://www.youtube.com/playlist?list=PLSQl0a2vh4HDgW9TkGULy1EWRE7rpEwjY) — Khan Academy · 6 videos · 0.5h across 6 episodes

**Watch only this:** Episodes 1-4 (What is artificial intelligence, AI in your life, ChatGPTIntro, Prompting basics), about 20 minutes — these give a quick, intuitive foundation on AI concepts relevant to the paper.

*Why it unblocks this paper:* Khan Academy's Introduction to Artificial Intelligence playlist provides a clear, concise overview of AI and machine learning basics, ideal for quickly understanding the context and motivation behind using rationales in learning models.

*If you want all of it:* All 6 episodes, about 30 minutes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Ranking-Constrained Learning with Rationales for Text Classification," start by building foundational knowledge on text classification models, ranking loss functions, and BERT embeddings, as these are key technical components used in the paper. Then, explore the core concept of learning with rationales to grasp how human explanations are leveraged to improve model training. Finally, conclude with the authors' own research talk or related advanced talks to gain direct insight into their novel ranking-constrained learning method.

### Text classification models *(prerequisite)*
This section covers the task of text classification and the models commonly used, including logistic regression and BERT-based deep learning models. Understanding these models is essential since the paper improves text classification performance by incorporating rationales into these models.

*How the paper uses it:* The paper proposes a method that enhances text classification models, including logistic regression and BERT-based models, by leveraging rationales.

▶ [CMU Advanced NLP 2021 (2): Text Classification](https://www.youtube.com/watch?v=7tGbA5QqJUg) — Graham Neubig · 1:16:56 · 5y ago

### Ranking loss functions *(prerequisite)*
Ranking loss functions are crucial for the paper's approach, which uses ranking constraints to guide the model to focus on important text segments. This section explains the technical details of loss functions used in machine learning, with an emphasis on ranking losses.

*How the paper uses it:* The paper introduces a ranking-constrained loss function combining classification and ranking losses based on human-annotated rationales.

▶ [Ranking Methods : Data Science Concepts](https://www.youtube.com/watch?v=yKwTAcsV8K8) — ritvikmath · 11:55 · 5y ago

### BERT embeddings for NLP *(prerequisite)*
BERT embeddings provide powerful contextual text representations used in the paper's experiments. This section explains the pre-training strategies and architecture of BERT, enabling a deeper understanding of how embeddings improve text classification.

*How the paper uses it:* The paper applies its method to models using BERT embeddings to demonstrate improved classification accuracy with fewer labeled documents.

▶ [Lec 18 | Pre-Training Strategies: ELMo, BERT](https://www.youtube.com/watch?v=WZOqXkld9mk) — NPTEL IIT Delhi · 48:23 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of text classification and common models used, as this is the task the paper aims to improve. Next, learn about ranking loss functions, which are key to the paper's novel training method. Then, get familiar with BERT embeddings, since the paper uses them for text representation. Finally, focus on the core concept of learning with rationales—leveraging human explanations to guide model training—as this is the paper's main contribution.

### Text classification models *(prerequisite)*
Text classification is the task of assigning categories or labels to text documents. Common models include simple ones like logistic regression and advanced ones like fine-tuned BERT, which understand context deeply. Understanding these models helps grasp what the paper aims to improve.

*How the paper uses it:* The paper proposes a method to improve text classification models by using rationale annotations during training.

▶ [Text Classification Explained: Naive Bayes, Logistic Regression, & Fine-Tuned BERT](https://www.youtube.com/watch?v=1jsTRXZTtq8) — SH AI Academy · 10:37 · 11mo ago

### Ranking loss functions *(prerequisite)*
Ranking loss functions help models learn to order or prioritize certain outputs over others, rather than just predicting labels independently. They are often used in tasks where relative preferences matter. This concept is important to understand how the paper incorporates rationale information into training.

*How the paper uses it:* The paper introduces a ranking-constrained loss that guides the model to prefer full and rationale-only documents over masked ones.

▶ [Ranking Methods : Data Science Concepts](https://www.youtube.com/watch?v=yKwTAcsV8K8) — ritvikmath · 11:55 · 5y ago

### BERT embeddings for NLP *(prerequisite)*
BERT embeddings are powerful text representations learned by a deep transformer model. They capture rich contextual information, enabling better understanding of language nuances. Knowing BERT embeddings is essential since the paper uses them to represent text in experiments.

*How the paper uses it:* The method is compatible with deep learning models using embeddings like BERT, which the paper uses for improved classification.

▶ [What is BERT and how does it work? | A Quick Review](https://www.youtube.com/watch?v=6ahxPTLZxU8) — AssemblyAI · 8:56 · 4y ago

## Already in your library

- [Lecture 3 | Loss Functions and Optimization](https://www.youtube.com/watch?v=h7iBpEHGVNc) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Intuitively Understanding the Cross Entropy Loss](https://www.youtube.com/watch?v=Pwgpl9mKars) — also for: Discovering Decision Manifolds to Assure Trusted Autonomous Systems (Bret Michael)
- [Stanford CS224N: NLP with Deep Learning | Spring 2024 ...](https://www.youtube.com/watch?v=DzpHeXVSC5I) — also for: Measuring an Artificial Intelligence System’s Performance on a Verbal IQ Test For Young Children (Robert H. Sloan)
- [Stanford CS224N: NLP with Deep Learning | Winter 2020 | BERT and Other Pre-trained Language Models](https://www.youtube.com/watch?v=knTc-NQSjKA) — also for: A multimodal cell-free RNA language model for liquid biopsy applications (Fereydoun Hormozdiari)
- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 9 - Pretraining](https://www.youtube.com/watch?v=DGfCRXuNA2w) — also for: Dynamic Retriever for In-Context Knowledge Editing via Policy Optimization (Yanfu Zhang)
- [6: Deep Learning for Natural Language – Embeddings](https://www.youtube.com/watch?v=LqFc0z-pQTg) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [BERT Neural Network - EXPLAINED!](https://www.youtube.com/watch?v=xI0HHN5XKDo) — also for: Dynamic Retriever for In-Context Knowledge Editing via Policy Optimization (Yanfu Zhang)
- [What Are Word Embeddings?](https://www.youtube.com/watch?v=hVM8qGRTaOA) — also for: Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance (Rakesh M. Verma)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's ranking-constrained learning with rationales for text classification. The beginner project reproduces a core mechanism of rationale-based masking and confidence ranking on a small scale using simple models. The intermediate project implements the paper's ranking-constrained loss method on a public dataset, comparing it to a baseline to validate the approach. The advanced project extends the method to multi-class classification, addressing a key limitation noted by the authors and exploring adapted loss functions.

### Beginner — Rationale Masking and Confidence Ranking Demo
*Effort: a weekend, ~8 hours*

You build a small Python notebook that demonstrates the core idea of the paper's ranking constraints by creating three versions of a text input: full text, rationale-only text, and rationale-masked text. Using a simple logistic regression classifier with TF-IDF features, you compute and compare the model's confidence scores on these inputs to verify the ranking constraint that full and rationale-only inputs should yield higher confidence than masked inputs.

**Why it shows you understood the paper:** This project shows you grasp the fundamental mechanism of the ranking-constrained loss by manually simulating the rationale masking and confidence ordering on a simple model, reflecting the paper's approach to guiding models to focus on important text segments.

**Grounded in:** The approach is general and can be applied to simple models such as logistic regression with one-hot encoding, demonstrating the ranking constraints between full, rationale-only, and masked documents.

**Tech stack:** Python 3.11, scikit-learn, Jupyter Notebook

**Data:** Use a small subset of the IMDb movie review dataset with rationale annotations simulated by selecting sentences containing sentiment keywords, as the paper uses IMDb with human rationales.

**Build it:**

1. Load a small set of IMDb movie reviews and simulate rationale annotations by selecting key sentences.
2. Create three versions of each document: full text, rationale-only text, and rationale-masked text.
3. Extract TF-IDF features for each version.
4. Train a logistic regression classifier on full texts with labels.
5. Compute and compare prediction confidence scores on the three versions to verify the ranking constraint.
6. Visualize and report the confidence score differences.

**Ships as:** A Jupyter notebook with code, plots, and explanations demonstrating the ranking of confidence scores across full, rationale-only, and masked inputs using logistic regression.

**Stretch goal:** Add a simple ranking loss term to the logistic regression training loop to enforce the confidence ordering explicitly.

### Intermediate — Ranking-Constrained Learning on IMDb with BERT Embeddings
*Effort: 1-3 weekends*

You implement the paper's ranking-constrained loss function combined with classification loss on the IMDb movie review dataset using BERT embeddings and a simple feed-forward classifier. You train models with and without the ranking constraint using the same limited labeled data and rationale annotations (simulated or extracted) to compare accuracy and data efficiency, reproducing the paper's key result that fewer labeled documents are needed to reach target accuracy.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the core method from the paper's description, apply it to a real NLP dataset with embeddings, and empirically validate the benefit of ranking constraints with rationales over a baseline, reflecting the paper's main empirical contribution.

**Grounded in:** Empirical evaluation on IMDb dataset showing the method achieves 80% accuracy with only 23 labeled documents versus 73 for fine-tuned BERT without rationales.

**Tech stack:** Python 3.11, PyTorch, transformers (HuggingFace), scikit-learn, Jupyter Notebook

**Data:** IMDb movie review dataset with simulated rationale annotations by selecting sentiment-bearing sentences, as the paper uses IMDb with human rationales.

**Build it:**

1. Load IMDb dataset and simulate rationale annotations by extracting key sentences.
2. Extract BERT embeddings for full documents, rationale-only documents, and rationale-masked documents.
3. Implement the ranking-constrained loss combining classification loss and ranking loss as described in the paper.
4. Train two models: one with standard classification loss, one with the ranking-constrained loss, on limited labeled data.
5. Evaluate and compare accuracy and data efficiency of both models.
6. Document results and visualize accuracy versus number of labeled documents.

**Ships as:** A GitHub repository with code implementing ranking-constrained learning on IMDb, a README explaining the method, and plots comparing accuracy and data efficiency against a baseline.

**Stretch goal:** Experiment with different proportions of rationale sentences and analyze their effect on model performance.

### Advanced — Extending Ranking-Constrained Learning to Multi-Class Text Classification
*Effort: a few weeks*

You extend the ranking-constrained learning framework to multi-class classification by adapting the ranking loss to handle multiple classes and corresponding rationales. You select or create a multi-class text classification dataset with rationale annotations (or simulate them) and implement the adapted loss function with BERT embeddings and a neural classifier. You evaluate the method's effectiveness compared to a baseline without ranking constraints, addressing a key limitation and future direction noted by the paper.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions by extending the method beyond binary classification, adapting the loss function, and applying it to a more complex setting, which could initiate research discussions with the professor.

**Grounded in:** Limitation: The paper focuses on binary classification tasks; extension to multi-class classification is not addressed. Future direction: Extending the framework to multi-class classification with adapted loss functions and datasets.

**Tech stack:** Python 3.11, PyTorch, transformers (HuggingFace), scikit-learn, Jupyter Notebook

**Data:** Use a publicly available multi-class text classification dataset such as 20 Newsgroups, with simulated rationale annotations by selecting class-indicative sentences.

**Build it:**

1. Select a multi-class text classification dataset (e.g., 20 Newsgroups) and simulate rationale annotations by extracting class-indicative sentences.
2. Adapt the ranking-constrained loss function to handle multiple classes and corresponding rationale sets.
3. Extract BERT embeddings for full, rationale-only, and rationale-masked documents.
4. Implement and train a neural classifier with the adapted loss function.
5. Train a baseline model without ranking constraints for comparison.
6. Evaluate and compare classification accuracy and data efficiency.
7. Document the methodology, challenges, and results.

**Ships as:** A GitHub repository with code implementing multi-class ranking-constrained learning, a detailed README explaining the adapted loss and evaluation, and results comparing to baseline models.

**Stretch goal:** Investigate multi-label classification scenarios where documents have multiple labels and rationales, further extending the framework.
