---
title: "661 · A Novel Approach for Detection and Ranking of Trendy and Emerging Cyber Threat Events in Twitter Streams — William H. Hsu"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-william-h-hsu"
source_hash: "dbbb89e9d5205ec27549e313d842f62051b519e6c6cf565b16ba74c1c1405508"
sequence: 661
generator: "outreach-garden: managed"
---

# 661 · A Novel Approach for Detection and Ranking of Trendy and Emerging Cyber Threat Events in Twitter Streams

## At a glance

- **Professor:** William H. Hsu
- **Institution:** Kansas State University
- **Paper:** [A Novel Approach for Detection and Ranking of Trendy and Emerging Cyber Threat Events in Twitter Streams](https://arxiv.org/pdf/1907.07768v1)
- **Authors:** Avishek Bose, Vahid Behzadan, Carlos Aguirre, William H. Hsu
- **Year:** 2019

## Paper overview

This paper presents a new unsupervised machine learning method to detect and rank cyber threat events from Twitter data. It identifies both novel (new) and developing (trendy) cyber threat events by clustering tweets and extracting important keywords and named entities. The method also weights terms by the influence of the tweeting users to prioritize significant threats. The approach was validated against human annotations and showed good precision in detecting relevant cyber security events.

### Why it matters

**Research problem:** Detecting and ranking cyber threat events from noisy, short, and unstructured Twitter text streams, distinguishing between novel and developing events, and assigning importance scores to prioritize actionable intelligence.

**Why it matters:** Cybersecurity professionals need timely and accurate detection of emerging threats to respond effectively. Twitter is a rich but noisy source of real-time threat information, but existing methods often fail to jointly detect novel and trending events or to rank their importance considering user influence.

**Key contributions:**

- Detection of both novel and trendy cyber threat events from Twitter streams using an unsupervised approach.
- A ranking method for cyber threat events based on importance scores derived from named entities, keywords, and user influence.
- A tunable framework allowing user-specified parameters to adjust event detection sensitivity.

## About the professor

**William H. Hsu** — Professor, Associate Director of Graduate Programs, Department of Computer Science, Kansas State University.

### Research links

- [Faculty/profile page](https://www.cs.ksu.edu/about/people/faculty/hsu)
- [Identity evidence](http://people.cis.ksu.edu/~bhsu)
- [Lab website](http://www.kddresearch.org/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** unsupervised machine learning
**The paper assumes:** unsupervised machine learning, clustering algorithms, feature extraction, and vector space models
**Already in this field?** Skip this entirely if you already understand unsupervised learning methods and clustering techniques in machine learning.

To understand the unsupervised machine learning techniques used in the paper for detecting and ranking cyber threat events from Twitter, it is essential to grasp clustering algorithms, feature extraction, and heuristic scoring methods. The rigorous course option offers a deep, structured university-level introduction to machine learning including unsupervised methods, while the fast track provides a concise, focused explainer series on unsupervised machine learning algorithms, ideal for quickly gaining practical intuition.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 12 to 15, about 4.5 hours — covering Expectation-Maximization algorithms, Factor Analysis, PCA, and ICA, which provide foundational understanding of unsupervised learning and clustering methods.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative, comprehensive machine learning course that covers unsupervised learning topics such as clustering and dimensionality reduction in depth, directly relevant to the paper's use of DBSCAN clustering and TFIDF vectorization.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Unsupervised Machine Learning Algorithms Explained by a Data Scientist](https://www.youtube.com/playlist?list=PLOLWGEXpOrByXHRGMfU1b7X4esb-c1i2N) — Thinking Neuron · 15 videos · 7.4h across 15 episodes

**Watch only this:** Episodes 1, 3, and 13, about 1.5 hours total — focusing on clustering basics, K-Means, and DBSCAN clustering to quickly understand the core unsupervised methods used.

*Why it unblocks this paper:* Thinking Neuron's series offers clear, concise explanations of unsupervised machine learning algorithms including clustering methods like DBSCAN, which is central to the paper's approach, making it a practical and accessible introduction.

*If you want all of it:* 7.4 hours across 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's approach for detecting and ranking cyber threat events from Twitter streams, start with foundational knowledge on text vectorization (TFIDF) and clustering short documents (DBSCAN), as these are key to representing and grouping tweets. Then, build understanding of named entity recognition and user influence in social networks, which are crucial for extracting key terms and weighting event importance. Finally, focus on the core concept of unsupervised event detection in social media streams, culminating with the authors' own talk or closest available research-level presentation to grasp their novel method and results.

### TFIDF vectorization text mining *(prerequisite)*
TFIDF vectorization is fundamental to representing tweet text as numerical features for clustering and keyword extraction. Understanding this technique helps grasp how the paper encodes tweet content for unsupervised analysis.

*How the paper uses it:* The paper uses TFIDF vectorization to represent tweets before clustering with DBSCAN.

▶ [TF IDF – Term Frequency – Inverse Document Frequency Text Classification by Dr. Mahesh Huddar](https://www.youtube.com/watch?v=OlV1VbIgzoI) — Mahesh Huddar · 4 yr ago

### text clustering short documents *(prerequisite)*
Clustering short, noisy tweets is essential to group related cyber threat messages into event clusters. DBSCAN is the clustering algorithm used in the paper, so understanding its mechanics and suitability for this task is important.

*How the paper uses it:* The authors cluster tweets using DBSCAN to detect event clusters from Twitter streams.

▶ [Clustering with DBSCAN, Clearly Explained!!!](https://www.youtube.com/watch?v=RDZUdRSDOok) — StatQuest with Josh Starmer · 4 yr ago

### named entity recognition NLP *(prerequisite)*
Named entity recognition extracts key entities such as organizations, products, or threat actors from text, which is critical for identifying important terms in cyber threat events.

*How the paper uses it:* The method extracts named entities from tweets to help characterize and rank cyber threat events.

▶ [Named Entity Recognition (NER) in Natural Language Processing](https://www.youtube.com/watch?v=xPxfosBTaFQ) — AL-SuffaTech · 5:55 · 3 yr ago

### user influence social network analysis *(prerequisite)*
Understanding user influence in social networks helps explain how the paper weights tweet terms by the influence of tweeting users to prioritize significant threats.

*How the paper uses it:* User influence, measured by follower counts, is used to weight terms and rank event importance.

▶ [Social Network Analysis Lecture](https://www.youtube.com/watch?v=06aOGPXhyQ4) — Prof. Ranjit Singh · 3 yr ago

### unsupervised event detection social media
This concept covers methods to detect events from social media streams without labeled data, directly relating to the paper's unsupervised approach for cyber threat event detection and ranking.

*How the paper uses it:* The core method detects novel and developing cyber threat events from noisy Twitter streams using unsupervised learning.

▶ [Unsupervised Streaming Cyber-Analytics](https://www.youtube.com/watch?v=AH1IcYq1VgA) — Microsoft Research · 8 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning how text data from short tweets can be converted into numerical form using TFIDF vectorization, which is essential for clustering and keyword extraction. Next, grasp the DBSCAN clustering algorithm to see how tweets are grouped into event clusters. Then, learn about Named Entity Recognition to identify key cyber threat actors and terms. After that, understand how user influence in social networks can weight the importance of tweets. Finally, explore unsupervised event detection methods in social media streams to see how the paper detects and ranks cyber threat events without labeled data.

### TFIDF vectorization text mining *(prerequisite)*
TFIDF is a method to convert text into numerical vectors by measuring how important a word is in a document relative to a collection of documents. This helps algorithms understand and compare short texts like tweets by emphasizing distinctive words.

*How the paper uses it:* The paper uses TFIDF vectorization to represent tweets for clustering and keyword extraction.

▶ [TF-IDF in NLP | with real life example | Term Frequency & Inverse Document Frequency](https://www.youtube.com/watch?v=BlSGIbikW1E) — Gate Smashers · 1 mo ago

### text clustering short documents *(prerequisite)*
Clustering groups similar data points together; DBSCAN is a clustering algorithm that finds dense regions and can handle noise, making it suitable for grouping short, noisy tweets into event clusters.

*How the paper uses it:* DBSCAN clustering is used to find event clusters from the TFIDF vectorized tweets.

▶ [Clustering with DBSCAN, Clearly Explained!!!](https://www.youtube.com/watch?v=RDZUdRSDOok) — StatQuest with Josh Starmer · 4 yr ago

### named entity recognition NLP *(prerequisite)*
Named Entity Recognition (NER) automatically identifies important entities like people, organizations, or locations in text, which helps highlight key elements in cyber threat tweets.

*How the paper uses it:* The method extracts named entities from tweets to identify key cyber threat actors and terms.

▶ [Named Entity Recognition (NER) in Natural Language Processing](https://www.youtube.com/watch?v=xPxfosBTaFQ) — AL-SuffaTech · 5:55 · 3 yr ago

### user influence social network analysis *(prerequisite)*
User influence measures how impactful a user is in a social network, often based on follower counts or connections, which helps prioritize more significant tweets and events.

*How the paper uses it:* The paper weights terms by user influence to prioritize important cyber threat events.

▶ [What is Social Network Analysis?](https://www.youtube.com/watch?v=xT3EpF2EsbQ) — Mod•U: Powerful Concepts in Social Science · 11 yr ago

### unsupervised event detection social media
Unsupervised event detection identifies emerging events from social media streams without labeled data, using clustering and keyword extraction to find novel and trending topics.

*How the paper uses it:* The core method detects and ranks cyber threat events from Twitter streams without supervision.

▶ [Intro to Event Detection in Social Media](https://www.youtube.com/watch?v=On2AgzJ93tA) — Cody Buntain · 22:55 · 10 yr ago

### paper specific talk *(paper-talk search result; attribution unverified)*
Hearing directly from authors or domain experts can clarify the novel approach and results of the paper, providing context and motivation behind the method.

*How the paper uses it:* Directly hear authors explain their novel method and results for detecting and ranking cyber threat events.

▶ [Cyber Threat Detection Using Machine Learning | Machine Learning Project](https://www.youtube.com/watch?v=j_cRarkEwv4) — Computer Science Project · 1 yr ago

## Already in your library

- [Lec-13: K-mean Clustering with Numerical Example | Unsupervised Learning | Machine🖥️ Learning 🙇‍♂️🙇](https://www.youtube.com/watch?v=5FpsGnkbEpM) — also for: Mean Shift, Mode Seeking, and Clustering (Yizong Cheng)
- [Named Entity Recognition (NER) Explained: Finding People, Places, and Facts in Text](https://www.youtube.com/watch?v=dDQ_8haGjvA) — also for: Automatic bioinformatic software named entity recognition from literature (Cuncong Zhong)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the 2019 paper on detecting and ranking cyber threat events from Twitter streams. The beginner project replicates a core preprocessing and clustering step on a small tweet sample. The intermediate project reimplements the full unsupervised detection and ranking pipeline on a smaller dataset, comparing TFIDF+DBSCAN to a simple baseline. The advanced project extends the method by incorporating transformer-based contextual embeddings to address the paper's limitation on semantic methods for short tweets.

### Beginner — Tweet Clustering with TFIDF and DBSCAN
*Effort: a weekend (~6-8 hours)*

You build a small pipeline that collects a sample of cybersecurity-related tweets (using keyword filters), preprocesses the text (cleaning, tokenization), vectorizes tweets using TFIDF, and clusters them with DBSCAN to identify event clusters. You visualize the clusters and sample tweets per cluster.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core insight that TFIDF vectorization combined with DBSCAN clustering effectively groups short, noisy tweets into meaningful event clusters, outperforming semantic embeddings.

**Grounded in:** Demonstrates the paper's key result: 'TFIDF vectorization combined with DBSCAN clustering outperformed semantic embedding methods like doc2Vec and LDA for short, noisy tweets.'

**Tech stack:** Python 3.11, scikit-learn, pandas, matplotlib, nltk or spaCy

**Data:** A small sample of cybersecurity-related tweets collected via Twitter API keyword filters or a publicly available cybersecurity tweet subset (if accessible).

**Build it:**

1. Collect or download a small set (~1000) of cybersecurity-related tweets using keyword filters.
2. Preprocess tweets: clean text, remove URLs, mentions, stopwords, and tokenize.
3. Vectorize tweets using TFIDF vectorizer from scikit-learn.
4. Apply DBSCAN clustering on the TFIDF vectors to find clusters of related tweets.
5. Visualize clusters and inspect sample tweets per cluster to verify meaningful grouping.

**Ships as:** A GitHub repo with code and README showing the clustering pipeline, cluster visualizations, and example tweets per cluster.

**Stretch goal:** Add a simple baseline clustering method (e.g., KMeans) and compare cluster coherence with DBSCAN.

### Intermediate — Unsupervised Cyber Threat Event Detection and Ranking
*Effort: 1-3 weekends (~20 hours)*

You implement the full unsupervised pipeline from the paper: collect cybersecurity tweets, preprocess, vectorize with TFIDF, cluster with DBSCAN, extract named entities and keywords using TextRazor and TextRank, classify events as novel or trendy using heuristics, and compute importance scores weighted by user influence (follower counts). You compare TFIDF+DBSCAN to a simple baseline like doc2Vec+KMeans and report precision and true positive rate on a small annotated subset.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method end-to-end, including event detection, classification, and ranking, and validate it quantitatively, reflecting a deep understanding of the approach and its evaluation.

**Grounded in:** Reimplements the paper's main contributions: 'Detection of both novel and trendy cyber threat events from Twitter streams using an unsupervised approach' and 'A ranking method for cyber threat events based on importance scores derived from named entities, keywords, and user influence.'

**Tech stack:** Python 3.11, scikit-learn, pandas, requests, TextRazor API, networkx (for TextRank)

**Data:** A small annotated dataset of cybersecurity tweets (e.g., ~2000 tweets) collected via keyword filters; annotations can be manual or simulated for evaluation.

**Build it:**

1. Collect and preprocess cybersecurity tweets with keyword filters.
2. Vectorize tweets using TFIDF and cluster with DBSCAN.
3. Extract named entities using TextRazor API and keywords using TextRank algorithm.
4. Implement heuristics to classify event clusters as novel, trendy, or both.
5. Calculate importance scores combining entity/keyword scores weighted by user follower counts.
6. Implement a baseline method using doc2Vec embeddings and KMeans clustering for comparison.
7. Evaluate detection precision, true positive rate, and false positive rate against annotated events.

**Verified links from the paper:**

- <https://github.com/behzadanksu/cybertweets> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/wolfgarbe/symspell> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the full pipeline code, evaluation scripts, and a report comparing the method to baseline with metrics and analysis.

**Stretch goal:** Add parameter tuning for DBSCAN and heuristics to study sensitivity and impact on detection performance.

### Advanced — Enhancing Cyber Threat Event Detection with Transformer Embeddings
*Effort: a few weeks (~40+ hours)*

You extend the paper's method by replacing or augmenting TFIDF vectorization with transformer-based contextual embeddings (e.g., from a pretrained BERT model fine-tuned for cybersecurity tweets). You re-cluster tweets using these embeddings and compare event detection and ranking performance to the original TFIDF+DBSCAN approach. You analyze whether transformer embeddings improve semantic understanding and detection accuracy on short, noisy tweets.

**Why it shows you understood the paper:** This project addresses a key limitation noted in the paper about semantic embedding methods being ineffective for short tweets, demonstrating initiative to improve and extend the original approach with modern NLP techniques.

**Grounded in:** Targets the limitation: 'Semantic embedding methods like doc2Vec and LDA were found ineffective for short tweets, limiting deeper semantic understanding.' and the future direction: 'Explore integration of additional data sources beyond Twitter to improve coverage and recall.'

**Tech stack:** Python 3.11, PyTorch or TensorFlow, transformers library (Hugging Face), scikit-learn, pandas

**Data:** A cybersecurity tweet dataset similar to the intermediate project; can use the same data for fair comparison.

**Build it:**

1. Collect and preprocess cybersecurity tweets as before.
2. Generate contextual embeddings for tweets using a pretrained transformer model (e.g., BERT or a cybersecurity domain-adapted variant).
3. Cluster tweets using DBSCAN or HDBSCAN on transformer embeddings.
4. Extract named entities and keywords as in the original method.
5. Compute event importance scores weighted by user influence.
6. Compare detection and ranking metrics (precision, true positive rate, SSE of rankings) against the original TFIDF+DBSCAN baseline.
7. Analyze cases where transformer embeddings improve or degrade detection.

**Verified links from the paper:**

- <https://github.com/behzadanksu/cybertweets> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for transformer-based event detection, evaluation scripts, and a detailed report discussing improvements, challenges, and future work.

**Stretch goal:** Incorporate dynamic social network analysis to refine user influence weighting as suggested in the paper's future directions.
