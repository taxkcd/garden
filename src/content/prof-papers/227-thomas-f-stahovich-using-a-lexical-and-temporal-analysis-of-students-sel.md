---
title: "227 · Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding — Thomas F. Stahovich"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-thomas-f-stahovich"
source_hash: "35df892165c3dc06fe165d179428e8c19d77a6a636ae267a76cb17a5070a83fb"
sequence: 227
generator: "outreach-garden: managed"
---

# 227 · Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding

## At a glance

- **Professor:** Thomas F. Stahovich
- **Institution:** Univ. of California - Riverside
- **Paper:** [Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding](https://doi.org/10.18260/1-2-1153-52562)
- **Authors:** Nicholas M. Rhodes, Matthew A. Ung, Jim Herold, Thomas F. Stahovich
- **Year:** 2013

## Paper overview

This study analyzes how students' handwritten self-explanations during homework in a Mechanical Engineering Statics course relate to their performance. Using smartpens that record time-stamped pen strokes, the authors apply machine learning to identify vocabulary and timing patterns that predict homework grades. The model explains about one-third of the variance in student performance and reveals insights into effective self-explanation behaviors.

### Why it matters

**Research problem:** How can the quality and characteristics of students' self-explanations, including vocabulary and time spent, predict their understanding and performance on engineering homework assignments?

**Why it matters:** Self-explanation is known to improve learning and metacognitive skills, but prior work mostly uses summative assessments. Developing automated, formative assessments that analyze self-explanation behaviors can provide real-time insights and potentially improve educational outcomes in engineering education.

**Key contributions:**

- A novel dataset of handwritten self-explanations with temporal pen stroke data from engineering students.
- Application of lexical (TF-IDF) and temporal features to model student performance.
- Development of a feature selection pipeline combining K-Means clustering and Correlation Feature Selection.
- A linear regression model explaining 32.9% of variance in homework grades.
- Insights into specific vocabulary indicative of strong or weak understanding (e.g., 'started' vs. 'think').

## About the professor

**Thomas F. Stahovich** — Professor of Mechanical Engineering, Bourns College of Engineering, Univ. of California - Riverside.

### Research links

- [Faculty/profile page](https://orcid.org/0000-0002-7547-1187)
- [Identity evidence](https://smarttools.engr.ucr.edu)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on predicting student understanding via lexical and temporal analysis of self-explanations, start with foundational concepts in educational data mining and text mining techniques like TF-IDF, which underpin the feature extraction process. Next, explore K-Means clustering and feature selection methods used to identify predictive vocabulary features. Finally, focus on the paper's core concept of combining lexical and temporal features, prioritizing any direct talks by the authors or university-level lectures that explain these methods in detail.

### Educational data mining *(prerequisite)*
This section covers the application of machine learning and data mining techniques to educational datasets, providing context for how student performance can be predicted from behavioral data. Understanding this helps frame the paper's approach of modeling student self-explanations to predict grades.

*How the paper uses it:* The paper applies educational data mining techniques to analyze student self-explanations and predict homework performance.

▶ [The State of Educational Data Mining in 2009 and Today ...](https://www.youtube.com/watch?v=OpbLVvmgBwk) — Penn Video Network · 20:59

### Text mining and TF-IDF *(prerequisite)*
TF-IDF is a key text mining technique used to quantify the importance of words in documents, which the paper uses to extract lexical features from student explanations. This section provides a rigorous introduction to TF-IDF and feature engineering in NLP, essential for understanding the paper's lexical analysis.

*How the paper uses it:* The authors use TF-IDF to represent vocabulary features from transcribed student self-explanations.

▶ [Machine Learning Course - 4. Intro to Feature Engineering ...](https://www.youtube.com/watch?v=EvfnDphF-9g) — Geoff Hulten · 1:17:31

### K-Means clustering and feature selection *(prerequisite)*
K-Means clustering and feature selection are used in the paper to identify the most predictive vocabulary features from high-dimensional data. This section explains these methods in depth, enabling comprehension of the paper's feature selection pipeline.

*How the paper uses it:* The paper employs K-Means clustering combined with Correlation Feature Selection to select predictive features for the regression model.

▶ [StatQuest: K-means clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) — StatQuest with Josh Starmer · 8 years ago

### Lexical and temporal feature modeling
This core section focuses on the combined use of lexical (vocabulary) and temporal (timing) features to model student understanding, which is central to the paper's methodology. It covers how these features are extracted and used in predictive modeling.

*How the paper uses it:* The paper's main contribution is modeling student performance using lexical and temporal features from smartpen data.

▶ [Lec-36: Feature Extraction in Data preprocessing | Machine Learning](https://www.youtube.com/watch?v=lzWcVVCXMfo) — Gate Smashers · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the foundational learning theory of self-explanation and why it matters for improving student understanding. Then, build knowledge of educational data mining to see how machine learning can analyze educational data like student homework. Next, learn about text mining techniques, especially TF-IDF, which the paper uses to extract meaningful vocabulary features. After that, grasp K-Means clustering and feature selection methods used to identify predictive features. Finally, explore the core method of combining lexical (vocabulary) and temporal (timing) features to model and predict student performance as done in the paper.

### Self-explanation in learning *(prerequisite)*
Self-explanation is a learning strategy where students explain concepts to themselves to deepen understanding and improve metacognition. Understanding this theory helps appreciate why analyzing students' self-explanations can reveal their grasp of material.

*How the paper uses it:* The paper analyzes students' handwritten self-explanations to predict their understanding and performance.

▶ [Big 3 Learning Theories: Behaviorism, Cognitivism ...](https://www.youtube.com/watch?v=SC3uP13Nwqk) — Lindsay O'Neill, MLIS, EdD · 15:12

### Educational data mining *(prerequisite)*
Educational data mining applies machine learning and data analysis techniques to educational data to uncover patterns and predict outcomes like student performance. This context is essential to understand how the paper uses machine learning on homework data.

*How the paper uses it:* The authors use machine learning to analyze student homework and self-explanation data to predict grades.

▶ [Predicting Student Performance Categories using ...](https://www.youtube.com/watch?v=dNKWX4V5xTE) — Computer Science & IT Conference Proceedings · 25:25

### Text mining and TF-IDF *(prerequisite)*
TF-IDF is a text mining technique that quantifies the importance of words in documents relative to a corpus, helping identify meaningful vocabulary features. This is key to how the paper extracts lexical features from student explanations.

*How the paper uses it:* The paper computes TF-IDF scores on transcribed student self-explanations to capture vocabulary predictive of performance.

▶ [Machine Learning Course - 4. Intro to Feature Engineering ...](https://www.youtube.com/watch?v=EvfnDphF-9g) — Geoff Hulten · 1:17:31

### K-Means clustering and feature selection *(prerequisite)*
K-Means clustering groups similar data points, and feature selection identifies the most relevant features for prediction, reducing dimensionality and improving model performance. The paper uses these methods to select vocabulary and effort features.

*How the paper uses it:* The authors apply K-Means clustering and Correlation Feature Selection to identify predictive features from lexical and temporal data.

▶ [StatQuest: K-means clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) — StatQuest with Josh Starmer · 8 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper "Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding." Starting with a small-scale lexical feature analysis of student self-explanations, you then reimplement the core predictive modeling approach on a simulated dataset, and finally extend the method by exploring richer temporal dynamics to address a stated limitation of the paper. Each project uses your existing software engineering and ML skills while deepening your grasp of educational data mining and text-based predictive modeling.

### Beginner — Lexical Feature Analysis of Sample Student Self-Explanations
*Effort: a weekend, ~8 hours*

You build a simple Python notebook that processes a small set of handwritten self-explanation transcripts (simulated or manually created) to compute TF-IDF scores for vocabulary features. You visualize the correlation of selected words like 'started' and 'think' with mock student performance scores to replicate the paper's key lexical insights.

**Why it shows you understood the paper:** This project shows you understand how lexical features relate to student understanding and how TF-IDF and correlation analysis reveal predictive vocabulary, directly reflecting the paper's key contributions.

**Grounded in:** Insights into specific vocabulary indicative of strong or weak understanding (e.g., 'started' vs. 'think').

**Tech stack:** Python 3.11, Jupyter Notebook, scikit-learn, pandas, matplotlib

**Data:** Simulated small dataset of student self-explanation texts with associated mock homework grades, since the paper's original dataset is not publicly available.

**Build it:**

1. Create or collect a small set (10-20) of sample student self-explanation texts with associated mock grades.
2. Preprocess the texts: tokenize, lowercase, and unify synonyms manually.
3. Compute TF-IDF scores for the vocabulary features using scikit-learn.
4. Calculate Pearson correlation coefficients between selected word TF-IDF scores and grades.
5. Visualize the correlations highlighting words like 'started' and 'think'.
6. Write a README explaining how these lexical features relate to student understanding as per the paper.

**Ships as:** A Jupyter Notebook and README showing TF-IDF computation, correlation analysis, and visualization of key vocabulary features linked to student performance.

**Stretch goal:** Add a simple K-Means clustering of the TF-IDF vectors to group student explanations and interpret clusters.

### Intermediate — Reimplementation of Lexical and Temporal Feature Regression Model
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's core method by building a linear regression model that predicts student homework grades from combined lexical (TF-IDF) and temporal (time spent) features. You simulate a dataset inspired by the paper's descriptions and compare your model's R2 metric to a baseline that uses only effort features.

**Why it shows you understood the paper:** This project demonstrates you can reproduce the paper's main modeling pipeline, including feature extraction, selection, and regression, and understand the relative predictive power of vocabulary versus effort features.

**Grounded in:** The linear regression model using 31 word features plus 2 effort features explains 32.9% of variance in student grades; effort-based features had zero coefficient.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, Jupyter Notebook

**Data:** Simulated dataset of student self-explanation texts with timestamps and homework grades, constructed based on the paper's feature descriptions since no public dataset is available.

**Build it:**

1. Simulate or generate a dataset with student self-explanation texts, timestamps for pen strokes, and homework grades.
2. Preprocess texts and compute TF-IDF lexical features.
3. Extract temporal features such as total time spent per explanation.
4. Implement feature selection combining K-Means clustering and Correlation Feature Selection heuristics.
5. Train a linear regression model on the selected features to predict grades.
6. Evaluate model performance using R2 and compare to a baseline model using only temporal features.
7. Document the pipeline, results, and comparison in a README.

**Ships as:** A Jupyter Notebook and README showing the full modeling pipeline, feature selection, regression results, and analysis of lexical vs. temporal feature importance.

**Stretch goal:** Incorporate automated synonym unification using a simple NLP thesaurus or word embeddings to improve lexical feature consistency.

### Advanced — Extending Self-Explanation Analysis with Rich Temporal Dynamics
*Effort: a few weeks, ~40+ hours*

You extend the paper's approach by developing a richer temporal feature extraction pipeline that captures detailed timing dynamics of pen strokes (e.g., pauses, stroke speed variability) from simulated timestamped handwriting data. You integrate these features with lexical TF-IDF features in a regression or more advanced model to test if temporal dynamics improve prediction of student understanding beyond vocabulary alone.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by exploring richer temporal modeling, demonstrating deep comprehension of the original work and ability to innovate on its methods.

**Grounded in:** Effort features (time spent) had zero coefficient, suggesting vocabulary choice is more predictive than time spent; future directions include exploring richer temporal dynamics to improve prediction.

**Tech stack:** Python 3.11, pandas, numpy, scikit-learn, matplotlib, Jupyter Notebook

**Data:** Simulated dataset of timestamped pen stroke sequences with associated self-explanation texts and homework grades, created to mimic the paper's smartpen data structure.

**Build it:**

1. Design a data simulation scheme to generate timestamped pen stroke sequences and corresponding self-explanation texts with mock grades.
2. Extract advanced temporal features such as pause durations, stroke speed variability, and stroke count.
3. Combine these temporal features with lexical TF-IDF features from the texts.
4. Train regression models (linear or regularized) to predict grades using combined features.
5. Compare model performance to baseline lexical-only and temporal-only models using R2.
6. Analyze which temporal dynamics contribute to improved prediction and document findings.
7. Write a detailed README discussing how this extension addresses the paper's limitation and future directions.

**Ships as:** A comprehensive Jupyter Notebook and README demonstrating advanced temporal feature extraction, combined modeling, and evaluation with discussion of implications for formative assessment.

**Stretch goal:** Experiment with multimodal models incorporating audio or video data if available, or explore automated transcription integration for scalability.
