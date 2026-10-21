---
title: "923 · Sentiment Analysis of Twitter Discourse on Omicron Vaccination in the USA Using VADER and BERT — Senn, William"
date: 2026-07-12
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-senn-william"
source_hash: "08a3f2dadead1c0a42df015778d67408082a611622e796205e98a0b13e3d47b8"
sequence: 923
generator: "outreach-garden: managed"
---

# 923 · Sentiment Analysis of Twitter Discourse on Omicron Vaccination in the USA Using VADER and BERT

## At a glance

- **Professor:** Senn, William
- **Institution:** Tarleton State University (Acceptance Rate: 87%)
- **Paper:** [Sentiment Analysis of Twitter Discourse on Omicron Vaccination in the USA Using VADER and BERT](https://ojs.bonviewpress.com/index.php/jdsis/article/download/2441/884)
- **Authors:** Satvika Marrapu, William Senn, Victor Prybutok
- **Year:** 2025

## Paper overview

This study analyzes public sentiment on Twitter about the COVID-19 Omicron vaccination in the USA from March 2022 to March 2023. Using advanced natural language processing tools VADER and BERT, the research identifies how positive, negative, and neutral emotions evolved over time, providing insights useful for public health messaging and policy.

### Why it matters

**Research problem:** There is a critical gap in understanding public sentiment specifically toward the Omicron variant vaccination, despite existing research on COVID-19 vaccines in general. The study addresses the need for real-time, nuanced sentiment analysis to inform public health strategies.

**Why it matters:** Public sentiment influences vaccine uptake and hesitancy, which are crucial for controlling the pandemic. Understanding sentiment dynamics helps tailor communication strategies to combat misinformation and improve vaccination rates.

**Key contributions:**

- Developed a hybrid sentiment analysis framework combining VADER and BERT for Twitter data on Omicron vaccination.
- Provided a comprehensive temporal analysis of public sentiment dynamics over a full year.
- Demonstrated BERT’s effectiveness with 82% accuracy in classifying nuanced sentiments.
- Identified the evolving emotional landscape with shifts from positivity to negativity and neutrality.
- Highlighted implications for public health messaging and policy adaptation based on sentiment trends.

## About the professor

**Senn, William** — Associate Professor CIS, Computer Information Systems, Tarleton State University (Acceptance Rate: 87%).

Research interests: information science, documentation theory, philosophy of information, ai-mediated systems

### Research links

- [Professor website](https://orcid.org/0000-0001-6223-7829)
- [Resolved homepage](https://www.tarleton.edu/mcis/people.html)
- [Google Scholar](https://scholar.google.com/citations?user=WjUv_z0AAAAJ&hl=en)
- [ResearchGate](https://www.researchgate.net/profile/Will-Senn-2)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Natural Language Processing
**The paper assumes:** foundations of natural language processing, sentiment analysis methods, transformer-based language models
**Already in this field?** Skip this entirely if you already have a solid understanding of natural language processing and transformer models like BERT.

This background focuses on foundational knowledge in Natural Language Processing (NLP), essential for understanding the sentiment analysis methods (VADER and BERT) used in the paper. The rigorous course offers a deep, structured dive into large language models and transformer architectures, while the fast track provides a concise, practical introduction to NLP concepts suitable for quick comprehension and immediate application.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Large Language Models (LLMs)](https://www.youtube.com/playlist?list=PLp6ek2hDcoNDDRINFiWGDlPKUwW-g1Hjk) — NPTEL IIT Delhi · 38 videos · 29.0h across 38 episodes

**Watch only this:** Lectures 2 to 20, about 12.5 hours — covering NLP introduction, word representations, tokenization, neural language models, transformers, and BERT pre-training strategies.

*Why it unblocks this paper:* This NPTEL IIT Delhi course thoroughly covers the fundamentals of large language models, including tokenization, word representations, transformers, and BERT pre-training strategies, directly aligning with the paper's use of VADER and BERT for sentiment analysis.

*If you want all of it:* 29.0 hours across 38 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Learning Machine Learning | Natural Language Processing (NLP) in R](https://www.youtube.com/playlist?list=PLGey__rsxvBXNOv0Yq9jWcgo_iBH_Z9U_) — Learn Machine Learning · 14 videos · 2.0h across 14 episodes

**Watch only this:** Episodes 1 to 4, about 32 minutes — covering NLP intuition, types, classical vs deep learning models, and Bag of Words model.

*Why it unblocks this paper:* This concise series from Learn Machine Learning provides a clear, practical introduction to NLP concepts and classical vs deep learning models, suitable for quickly grasping the basics needed to understand sentiment analysis techniques used in the paper.

*If you want all of it:* 2.0 hours across 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on sentiment analysis of Twitter discourse on Omicron vaccination using VADER and BERT, start by building foundational knowledge on Twitter data collection and preprocessing, followed by understanding lexicon-based and transformer-based sentiment analysis methods. Then, explore temporal sentiment trend analysis to grasp how sentiment evolves over time. Finally, focus on the paper's core contribution by reviewing the authors' own talk or closely related advanced research talks on sentiment analysis in social media contexts.

### Twitter data collection and preprocessing *(prerequisite)*
Understanding how Twitter data is collected and preprocessed is essential to appreciate the data quality, biases, and challenges in social media sentiment analysis. The selected video is a detailed academic talk from a research institute covering data collection, storage, and processing routines for Twitter data.

*How the paper uses it:* The paper relies on Twitter data collected via snscrape and applies preprocessing steps to clean the data before analysis.

▶ [Collection, Management, and Analysis of Twitter Data](https://www.youtube.com/watch?v=Gzl0lpQ7S7w) — MZES Methods Bites · 1:20:23 · 4y ago

### Lexicon-based sentiment analysis *(prerequisite)*
Lexicon-based sentiment analysis, particularly VADER, is foundational for understanding rule-based sentiment scoring approaches. The chosen video provides an in-depth academic-level explanation of VADER and its application in sentiment analysis.

*How the paper uses it:* The paper uses VADER as the initial sentiment labeling tool before applying BERT for deeper analysis.

▶ [Sentiment Analysis using Dictionaries SentiWordNet SentiWords and VADER by Dr Mahesh Huddar](https://www.youtube.com/watch?v=Fv1CrtakXPk) — Mahesh Huddar · 11:57 · 4y ago

### Transformer models for NLP *(prerequisite)*
Transformer architectures like BERT are central to modern NLP and sentiment analysis. This video offers a concise yet rigorous explanation of the transformer model, self-attention mechanism, and BERT, providing the necessary background to understand the paper's deep learning approach.

*How the paper uses it:* The paper trains a BERT model for nuanced sentiment classification of tweets.

▶ [Transformers Explained: The AI Behind ChatGPT, BERT & Modern NLP!](https://www.youtube.com/watch?v=MrmROTjspgo) — SH AI Academy · 9:47 · 1y ago

### Temporal sentiment trend analysis *(prerequisite)*
Analyzing how sentiment changes over time is key to interpreting public opinion dynamics. The selected video is a research-focused talk illustrating the use of Twitter data for sentiment prediction and temporal analysis, aligning well with the paper's temporal sentiment trend study.

*How the paper uses it:* The paper provides a comprehensive temporal analysis of sentiment dynamics over a year.

▶ [Sentiment Analysis: extracting emotion through machine learning | Andy Kim | TEDxDeerfield](https://www.youtube.com/watch?v=n4L5hHFcGVk) — TEDx Talks · 13:11 · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Direct insight from the authors or closely related academic talks on sentiment analysis of social media data provide the most relevant and detailed understanding of the methodology and findings. Although no exact talk by the authors on this paper was found, a closely related conference talk on sentiment analysis of Twitter data in a health-related context is selected.

*How the paper uses it:* While no exact talk by the paper's authors is available, this talk shares methodological similarities and domain relevance, offering valuable context.

▶ [How Do People View COVID-19 Vaccines: Analyses on Tweets About COVID-19 Vaccines](https://www.youtube.com/watch?v=hymwDTvIedU) — Novel Research and Talks · 31:41 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces you to the foundational concepts needed to understand sentiment analysis of Twitter data on COVID-19 Omicron vaccination using VADER and BERT. We start with how Twitter data is collected and preprocessed, then explore lexicon-based sentiment analysis with VADER, followed by understanding transformer models like BERT for deeper contextual analysis. Finally, we look at temporal sentiment trend analysis to interpret how public opinion evolves over time.

### Twitter data collection and preprocessing *(prerequisite)*
Before analyzing sentiment, it's essential to understand how Twitter data is gathered and cleaned to ensure quality and reduce bias. This includes scraping tweets, handling noisy text, and preparing data for analysis.

*How the paper uses it:* The paper collected 150,000 tweets using snscrape and applied preprocessing to clean the data before sentiment analysis.

▶ [Webinar: Working with Twitter Data](https://www.youtube.com/watch?v=cRNJrShpXrw) — UK DATA SERVICE · 1:10:34 · 4y ago

### Lexicon-based sentiment analysis *(prerequisite)*
Lexicon-based methods like VADER use predefined dictionaries and rules to assign sentiment scores to text, providing a fast and interpretable way to detect positive, negative, or neutral emotions.

*How the paper uses it:* The study used VADER for initial sentiment labeling to leverage its rule-based strengths on Twitter data.

▶ [VADER Sentiment Analysis: Analyzing Free-Form Text Data with AI](https://www.youtube.com/watch?v=Kau8GJDSef8) — Python for Humanists · 12:51 · 1y ago

### Transformer models for NLP *(prerequisite)*
Transformers, including BERT, are advanced deep learning models that understand context by attending to all words in a sentence simultaneously, enabling nuanced sentiment classification beyond simple word counts.

*How the paper uses it:* The paper trained a BERT model to capture deeper contextual sentiment in tweets about Omicron vaccination.

▶ [Transformers Explained: The AI Behind ChatGPT, BERT & Modern NLP!](https://www.youtube.com/watch?v=MrmROTjspgo) — SH AI Academy · 9:47 · 1y ago

### Sentiment analysis with VADER and BERT
Combining VADER's lexicon-based approach with BERT's contextual understanding creates a hybrid framework that balances speed and accuracy for sentiment analysis on social media text.

*How the paper uses it:* The core contribution of the paper is developing a hybrid sentiment analysis framework using both VADER and BERT for Twitter data.

▶ [Sentiment Analysis: VADER, LSTM & BERT Explained (NLP Python Guide)](https://www.youtube.com/watch?v=5pqufk7kQmk) — SH AI Academy · 13:34 · 11mo ago

### Temporal sentiment trend analysis *(prerequisite)*
Analyzing how sentiment changes over time reveals patterns in public opinion and helps relate sentiment shifts to real-world events or campaigns.

*How the paper uses it:* The paper provides a comprehensive temporal analysis showing sentiment evolution from positivity to negativity and neutrality over a year.

▶ [Sentiment Analysis: extracting emotion through machine learning | Andy Kim | TEDxDeerfield](https://www.youtube.com/watch?v=n4L5hHFcGVk) — TEDx Talks · 13:11 · 6y ago

## Already in your library

- [Lecture 1 | Natural Language Processing with Deep Learning](https://www.youtube.com/watch?v=OQQ-W_63UgQ) — also for: Measuring an Artificial Intelligence System’s Performance on a Verbal IQ Test For Young Children (Robert H. Sloan)
- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)
- [7: Deep Learning for Natural Language – Transformers](https://www.youtube.com/watch?v=IeF7aATDaw4) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- ["Transformers in Natural Language Processing & Beyond" by Justin Joyce](https://www.youtube.com/watch?v=1NMcjg2t8Hk) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformer Neural Networks, ChatGPT's foundation, Clearly ...](https://www.youtube.com/watch?v=zxQyTK8quyY) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Illustrated Guide to Transformers Neural Network: A step by ...](https://www.youtube.com/watch?v=4Bdc55j80l8) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)
- [Transformers Step-by-Step Explained (Attention Is All You Need)](https://www.youtube.com/watch?v=avjX3QrYkls) — also for: In-Context Algebra (David Bau)
- [Lecture 5 – Sentiment Analysis 1 | Stanford CS224U: Natural Language Understanding | Spring 2019](https://www.youtube.com/watch?v=O1Xh3H1uEYY) — also for: Artificial intelligence in communication impacts language and social relationships (Malte F. Jung)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper's hybrid sentiment analysis approach on Twitter data about Omicron vaccination. The beginner project reproduces a simple VADER sentiment analysis and visualization on a small tweet sample, the intermediate project reimplements the core hybrid VADER+BERT method on a public COVID-19 vaccine tweet dataset with comparative metrics, and the advanced project extends the analysis to multilingual tweets to address a stated limitation and explore richer sentiment categories.

### Beginner — VADER Sentiment Analysis on Sample COVID-19 Tweets
*Effort: a weekend, ~8 hours*

You build a Python script to collect a small sample of English tweets about COVID-19 vaccination using snscrape or a public dataset substitute, preprocess the text, and apply VADER sentiment analysis to label tweets as positive, negative, or neutral. Then you create a simple time-series plot showing sentiment proportions over a short period.

**Why it shows you understood the paper:** This project shows you understand lexicon-based sentiment analysis and temporal sentiment trend visualization, replicating the paper's initial sentiment labeling step and one key result about sentiment distribution over time.

**Grounded in:** The study’s sentiment analysis framework adopts a two-pronged approach, utilizing both VADER and BERT to leverage their respective advantages... This hybrid approach allows us to capitalize on the strengths of both tools.

**Tech stack:** Python 3.11, snscrape or Tweepy, NLTK (for VADER), matplotlib or seaborn, pandas

**Data:** A small sample of English-language tweets about COVID-19 vaccination collected via snscrape or a publicly available COVID-19 vaccine tweet dataset as a substitute for the paper's data.

**Build it:**

1. Collect or download a small dataset of English tweets about COVID-19 vaccination covering a few weeks.
2. Preprocess tweets by cleaning text (remove URLs, mentions, stop words).
3. Apply VADER sentiment analyzer to assign sentiment scores and labels.
4. Aggregate sentiment counts by day or week.
5. Plot the temporal sentiment proportions (positive, negative, neutral).
6. Write a README explaining the approach and how it relates to the paper's VADER usage.

**Ships as:** A GitHub repo with Python scripts for data collection, preprocessing, VADER sentiment labeling, and a Jupyter notebook or script generating a temporal sentiment plot with explanations.

**Stretch goal:** Add basic comparison with a simple baseline like TextBlob sentiment analysis to contrast VADER results.

### Intermediate — Hybrid VADER and BERT Sentiment Classification on COVID-19 Vaccine Tweets
*Effort: 1-3 weekends*

You implement the paper's core hybrid sentiment analysis method by preprocessing a publicly available COVID-19 vaccine tweet dataset, applying VADER for initial sentiment labeling, then fine-tuning a pretrained BERT model to classify tweet sentiments. You compare BERT's classification accuracy against VADER and report metrics similar to the paper (accuracy, precision, recall).

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main methodological contribution—combining lexicon-based and transformer-based sentiment analysis—and to evaluate model performance on social media data, reflecting the paper's key results.

**Grounded in:** The BERT model achieved an overall accuracy of 82% in its sentiment classification task.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, Transformers library (Hugging Face), NLTK (for VADER), scikit-learn, pandas

**Data:** A publicly available COVID-19 vaccine-related tweet dataset (e.g., from Kaggle or Twitter API) used as a substitute for the paper's dataset covering March 2022 to March 2023.

**Build it:**

1. Obtain and preprocess a COVID-19 vaccine tweet dataset (clean text, remove URLs, mentions, stop words).
2. Apply VADER to label tweets with initial sentiment classes.
3. Prepare data splits for training and testing.
4. Fine-tune a pretrained BERT model on the labeled training data for sentiment classification.
5. Evaluate BERT on the test set and compute accuracy, precision, recall.
6. Compare BERT's performance against VADER's rule-based labels.
7. Document the methodology, results, and comparison in a README.

**Ships as:** A GitHub repo containing scripts for data preprocessing, VADER labeling, BERT fine-tuning, evaluation metrics, and a report summarizing the hybrid approach and performance comparison.

**Stretch goal:** Add temporal sentiment trend analysis by aggregating classified tweets over time and plotting sentiment shifts.

### Advanced — Multilingual Sentiment Analysis of COVID-19 Vaccine Tweets with Fine-Grained Emotions
*Effort: a few weeks*

You extend the paper's approach by collecting multilingual tweets about COVID-19 vaccination, preprocessing them, and training or fine-tuning a multilingual transformer model (e.g., XLM-R) to classify fine-grained sentiment categories such as fear, anger, trust, and disgust. You analyze temporal and language-based sentiment trends to address the paper's limitation on English-only data and coarse sentiment categories.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by broadening language coverage and sentiment granularity, demonstrating deep comprehension of the paper's methods and challenges in real-world social media sentiment analysis.

**Grounded in:** Expand analysis to include multilingual tweets for broader cultural insights. Incorporate fine-grained sentiment categories like fear, anger, trust, and disgust.

**Tech stack:** Python 3.11, Transformers library (Hugging Face), XLM-R or similar multilingual model, scikit-learn, pandas, matplotlib or seaborn

**Data:** Multilingual tweets about COVID-19 vaccination collected via Twitter API or snscrape, or a public multilingual COVID-19 tweet dataset if available; data must be labeled or weakly labeled for fine-grained emotions.

**Build it:**

1. Collect or obtain multilingual COVID-19 vaccine tweets covering multiple languages.
2. Preprocess tweets with language-specific cleaning and tokenization.
3. Define or obtain fine-grained emotion labels (fear, anger, trust, disgust, etc.) via manual annotation or distant supervision.
4. Fine-tune a multilingual transformer model (e.g., XLM-R) on the labeled dataset.
5. Evaluate model performance on fine-grained sentiment classification.
6. Analyze temporal and language-wise sentiment trends and visualize them.
7. Write detailed documentation linking the extension to the paper's stated limitations and future directions.

**Ships as:** A GitHub repo with data collection and preprocessing scripts, fine-tuning code for multilingual sentiment classification, evaluation results, and visualizations of sentiment trends across languages and emotions.

**Stretch goal:** Integrate qualitative content analysis or multimodal data (images, videos) to enrich sentiment context as suggested by the paper's thoughtful question.

_The paper's authors released no code or dataset; all projects require using substitute public datasets or collecting tweets via snscrape or Twitter API._
