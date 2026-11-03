---
title: "1051 · Predicting Asthma-Related Emergency Department Visits Using Big Data — Sudha Ram"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sudha-ram"
source_hash: "e96f3aaf32665c0dfff7835470d53ade30a7e7362f073c7d4fec5b2932090e99"
sequence: 1051
generator: "outreach-garden: managed"
---

# 1051 · Predicting Asthma-Related Emergency Department Visits Using Big Data

## At a glance

- **Professor:** Sudha Ram
- **Institution:** University of Arizona
- **Paper:** [Predicting Asthma-Related Emergency Department Visits Using Big Data](https://ieeexplore.ieee.org/ielx7/6221020/7165693/07045443.pdf)
- **Authors:** Sudha Ram, Wenli Zhang, Max Williams, Yolande Pengetnze
- **Year:** 2015

## Paper overview

This paper presents a novel method to predict the number of asthma-related emergency department visits in a metropolitan area using big data sources such as Twitter posts, Google search trends, and environmental air quality sensor data. The model achieves about 70% precision in near-real-time prediction, which can help public health officials and hospitals prepare and intervene more effectively.

### Why it matters

**Research problem:** Asthma is a prevalent and costly chronic disease with significant emergency department visits and hospitalizations. Current surveillance systems have data lags of weeks, limiting timely interventions. There is a need for rapid, accurate, and geographically granular prediction of asthma exacerbations to enable proactive healthcare resource allocation and patient interventions.

**Why it matters:** Asthma causes millions of emergency visits, hospitalizations, deaths, and substantial economic and productivity losses annually in the U.S. Timely prediction of asthma exacerbations can reduce these burdens by enabling targeted preventive actions and better resource planning in healthcare facilities.

**Key contributions:**

- Demonstrated feasibility of using social media, internet search, and environmental sensor data to predict asthma-related ED visits in near real-time.
- Developed a machine learning pipeline to clean and classify noisy Twitter data for asthma relevance.
- Showed significant correlations between asthma ED visits and normalized asthma-related tweets, as well as air pollution indicators (CO, NO2, PM2.5).
- Built a population-level predictive model classifying daily ED visits into High, Medium, or Low categories with approximately 70% accuracy.
- Provided a novel approach for noncommunicable disease surveillance using big data sources, complementing traditional individual-level risk models.

## About the professor

**Sudha Ram** — Anheuser Busch Professor of MIS, Entrepreneurship, and Innovation, Management Information Systems, University of Arizona.

Research interests: AI Interpretability and Explainable AI; Big Data Analytics; Health Care Analytics; Large Scale Network Science and Data Mining; Machine learning

### Research links

- [Faculty/profile page](https://eller.arizona.edu/people/sudha-ram)
- [Identity evidence](https://mis.eller.arizona.edu/people/sudha-ram)
- [Lab website](https://eller.arizona.edu/departments-research/centers-labs/business-intelligence-analytics)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Machine Learning for Health Data
**The paper assumes:** machine learning classification algorithms, data preprocessing, supervised learning, model evaluation metrics
**Already in this field?** Skip this entirely if you already understand basic machine learning concepts and classification methods applied to real-world noisy datasets.

This background focuses on machine learning techniques applied to health data, essential for understanding the predictive modeling and data integration methods used in the paper on asthma-related emergency visits. The rigorous course offers a deep dive into machine learning applications in healthcare from leading academic institutions, while the fast track provides a concise, accessible introduction to the same subject for quicker comprehension. Choose the course for thorough mastery or the fast track for a focused overview that covers core concepts efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Machine Learning for Health (ML4H)](https://www.youtube.com/playlist?list=PLlMMtlgw6qNi7lDhV6_kqBl5E1yJTvSQN) — Broad Institute · 16 videos · 14.2h across 16 episodes

**Watch only this:** Episodes 6 (ML4H: Marzyeh Ghassemi: The pulse of ethical machine learning in health), 7 (ML4H: Girish Nadkarni, Artificial Intelligence: Applications, Challenges and Opportunities), and 8 (ML4H: Collin Stultz: Self-Supervised Learning for Patient Phenotyping and Forecasting Adverse Events), about 2 hours 40 minutes total — these provide foundational understanding of machine learning applications, challenges, and patient phenotyping relevant to the paper.

*Why it unblocks this paper:* The 'Machine Learning for Health (ML4H)' series from the Broad Institute is a rigorous, university-affiliated course that covers advanced machine learning methods specifically tailored to healthcare challenges, aligning closely with the paper's use of classification algorithms and big data integration for health prediction.

*If you want all of it:* All 16 episodes, about 14.2 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [AI In Healthcare with Stanford professors Matt Lungren and Justin Norden](https://www.youtube.com/playlist?list=PLoROMvodv4rPXCVjB8Xy1eiWGIAOBwNEf) — Stanford Online · 16 videos · 11.0h across 16 episodes

**Watch only this:** Episodes 2 (AI in Healthcare Series: From Decision Support to Drug Prescriptions, Dr. Graham Walker, Kaiser), 3 (AI in Healthcare Series: Navigating Medical Innovation, Dr. Amy Abernathy, Highlander Health), and 8 (AI In Healthcare Series: Leveraging GPT-5, Cosmos, and Predictive Models for Better Outcomes), about 2 hours total — these episodes focus on AI applications, predictive modeling, and innovation in healthcare relevant to the paper.

*Why it unblocks this paper:* The 'AI In Healthcare with Stanford professors Matt Lungren and Justin Norden' playlist offers a well-produced, clear introduction to AI and machine learning in healthcare, covering key concepts and applications that underpin the paper's methodology in an accessible format.

*If you want all of it:* All 16 episodes, about 11.0 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on predicting asthma-related emergency department visits using big data, start with foundational knowledge on big data health analytics, machine learning classification, social media data mining, and environmental sensor data analysis. These prerequisites provide the necessary background on data sources, analytic techniques, and domain-specific data handling. Finally, focus on the paper authors' own talk to gain direct insight into their methodology, findings, and the integration of multimodal data for asthma prediction.

### Big data health analytics *(prerequisite)*
This section covers how big data is applied to healthcare problems, including data integration, analysis, and impact on health outcomes. Understanding these concepts is foundational for grasping how diverse data streams like social media, search trends, and sensor data can be leveraged for health surveillance and prediction.

*How the paper uses it:* The paper leverages big data sources such as Twitter, Google Trends, and environmental sensors to predict asthma-related ED visits.

▶ [Big Data Training for Cancer Research Special Lecture Series: Dr. Barnholtz-Sloan](https://www.youtube.com/watch?v=Jq72sGhtvqs) — Purdue Institute for Cancer Research · 1:23:44 · 4y ago

### Machine learning classification *(prerequisite)*
Machine learning classification techniques are core to the paper's approach for categorizing daily asthma ED visit levels. This section provides an advanced overview of classification algorithms like Decision Trees, Naive Bayes, SVM, and ANN, which are used in the study.

*How the paper uses it:* The authors apply classification algorithms to predict asthma ED visit counts categorized as High, Medium, or Low.

▶ [Every Machine Learning Model Explained in 15 minutes](https://www.youtube.com/watch?v=63Kr3HFECHM) — Brain Station Advanced · 16:04 · 8mo ago

### Social media data mining *(prerequisite)*
Mining social media data involves collecting, cleaning, and analyzing noisy and unstructured data streams, which is essential for extracting relevant asthma-related signals from Twitter. This section explains advanced methods for social network mining and text data extraction.

*How the paper uses it:* The paper develops a machine learning pipeline to clean and classify noisy Twitter data for asthma relevance.

▶ [Text Mining: Data Collection and Analysis. Part 3. Collecting social media data](https://www.youtube.com/watch?v=MnBVX_ncDjM) — Ales Herasimenka: Social Data Science · 21:14 · 5y ago

### Environmental sensor data analysis *(prerequisite)*
Analyzing environmental sensor data, especially air quality indicators, is key to understanding external factors influencing asthma exacerbations. This section covers instrumentation, data collection, and analysis techniques for environmental monitoring.

*How the paper uses it:* The study integrates air pollution data (CO, NO2, PM2.5) from EPA sensors to correlate with asthma ED visits.

▶ [#14 Environmental Analysis | Quality Control | Part 2 | Environmental Quality Monitoring & Analysis](https://www.youtube.com/watch?v=DhQkUVfZdW0) — NPTEL-NOC IITM · 51:29 · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This talk by the paper's authors provides direct insight into their methodology, data integration, machine learning pipeline, and key findings. It offers the most precise and authoritative explanation of the research and its implications.

*How the paper uses it:* Sudha Ram and colleagues present their approach to predicting asthma-related emergency visits using big data sources and machine learning.

▶ [2014 Symposium on Big Data Analytics in Healthcare – Sudha Ram](https://www.youtube.com/watch?v=mFMkY5T2Vgg) — UAMISDepartment · 39:55 · 11y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how big data and machine learning are applied to predict asthma-related emergency visits. Starting with an introduction to big data in healthcare, it then covers social media data mining and machine learning classification techniques, followed by environmental sensor data analysis. Finally, it culminates with the core concept of multimodal data fusion, which integrates diverse data sources for prediction as done in the paper.

### Big data health analytics *(prerequisite)*
Learn what big data means in the healthcare context and how it can transform disease diagnosis, treatment, and prognosis. This foundational knowledge helps understand the value and challenges of integrating diverse health data sources.

*How the paper uses it:* The paper leverages big data sources like social media, search trends, and environmental sensors to predict asthma emergency visits.

▶ [HealthCare Data Analytics, Machine Learning, & Artificial Intelligence (AI)](https://www.youtube.com/watch?v=bWp0srrjpS8) — National Pre-Health Community · 42:04 · Streamed 3y ago

### Social media data mining *(prerequisite)*
Understand how social media data, such as Twitter posts, can be collected, cleaned, and analyzed to extract meaningful signals about public health trends. This includes techniques for filtering noisy data and identifying relevant content.

*How the paper uses it:* The authors mined and classified asthma-related tweets to incorporate social media signals into their predictive model.

▶ [Text Mining: Data Collection and Analysis. Part 3. Collecting social media data](https://www.youtube.com/watch?v=MnBVX_ncDjM) — Ales Herasimenka: Social Data Science · 21:14 · 5y ago

### Machine learning classification *(prerequisite)*
Get a clear intuition about classification algorithms that categorize data into classes based on features. This includes understanding models like Decision Trees, Naive Bayes, SVM, and Artificial Neural Networks used for prediction tasks.

*How the paper uses it:* The paper applies classification algorithms to predict daily asthma emergency visit levels as High, Medium, or Low.

▶ [Every Machine Learning Model Explained in 15 minutes](https://www.youtube.com/watch?v=63Kr3HFECHM) — Brain Station Advanced · 16:04 · 8mo ago

### Environmental sensor data analysis *(prerequisite)*
Learn how environmental sensors collect air quality data and how this data is analyzed to assess pollution levels. This knowledge is key to understanding how environmental factors correlate with asthma exacerbations.

*How the paper uses it:* The study integrates air pollutant data (CO, NO2, PM2.5) from EPA sensors as predictors of asthma emergency visits.

▶ [What is Environmental Monitoring | Types of Environmental Monitoring | Ambient Air Quality | Noise](https://www.youtube.com/watch?v=hyHcnZsgbRU) — SpeakSafe EHS · 5:14 · 5y ago

### Multimodal data fusion for prediction
Explore how multiple data types (social media, search trends, sensor data) can be combined in machine learning models to improve prediction accuracy. This concept explains the integration of heterogeneous data streams for health surveillance.

*How the paper uses it:* The core contribution of the paper is combining social media, search, and environmental data to predict asthma-related emergency visits in near real-time.

▶ [Lecture 10.1: Fusion, co-learning, and new trend (Multimodal Machine Learning, CMU)](https://www.youtube.com/watch?v=2xr4P0WGKSA) — LP Morency · 1:19:28 · 5y ago

## Already in your library

- [13. Classification](https://www.youtube.com/watch?v=eg8DJYwdMyg) — also for: In the Arms of a Robot: Designing Autonomous Hugging Robots with Intra-Hug Gestures (Hasti Seifi)
- [All Machine Learning algorithms explained in 17 min](https://www.youtube.com/watch?v=E0Hmnixke2g) — also for: DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling (Stephanie Wang)
- [Classification in Machine Learning | Machine Learning with ...](https://www.youtube.com/watch?v=ETChs4iQa8g) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)
- [Lec-9: Introduction to Decision Tree 🌲 with Real life examples](https://www.youtube.com/watch?v=mvveVcbHynE) — also for: MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models (Tim Oates)
- [Lec-2: Supervised Learning Algorithms | Machine Learning](https://www.youtube.com/watch?v=LKlOH8OLLcw) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)
- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [CS 198-126: Lecture 22 - Multimodal Learning](https://www.youtube.com/watch?v=_Y-D5jrX7IQ) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [Lecture 3.1 - Multimodal Representation Fusion (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=WL2AlMIupC4) — also for: Allocation Before Ranking: Decoupled Token Compression for OmniLLMs (Miao Yin)
- [Understanding Sensor Fusion and Tracking, Part 1: What Is ...](https://www.youtube.com/watch?v=6qV3YjFppuc) — also for: D3VL: Understanding Driving Scenes from 3D Time Series Data and Video with Language Models (A. Lynn Abbott)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [Multimodal Models and Fusion - Complete Guide](https://www.youtube.com/watch?v=VL6izWvH4iA) — also for: UniDetect: LLM-Driven Universal Fraud Detection across Heterogeneous Blockchains (Dan Lin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the 2015 paper on predicting asthma-related emergency department visits using big data. The beginner project focuses on reproducing a key correlation metric from the paper using publicly available Twitter and air quality data. The intermediate project implements a simplified version of the paper's multimodal classification model to predict asthma visit levels, reimplementing the core method without relying on unavailable author code. The advanced project extends the approach by addressing a stated limitation: improving spatial granularity of social media signals for asthma prediction, exploring geolocation enhancement techniques and their impact on prediction accuracy.

### Beginner — Asthma Tweet and Air Quality Correlation Analysis
*Effort: a weekend, ~8 hours*

You build a data pipeline to collect and preprocess asthma-related tweets and local air quality sensor data, then compute and visualize the correlation between normalized asthma tweet counts and air pollution indicators with asthma emergency visit proxies. This reproduces the paper's key correlation analysis using public data.

**Why it shows you understood the paper:** This project shows you understand the paper's foundational insight that normalized asthma-related tweet counts and air pollutant indexes correlate with asthma ED visits, demonstrating data cleaning, normalization, and correlation computation skills.

**Grounded in:** Demonstrated significant correlations between normalized asthma-related tweets, air pollution indicators (CO, NO2, PM2.5), and asthma ED visits.

**Tech stack:** Python 3.11, pandas, scikit-learn, matplotlib, tweepy (Twitter API)

**Data:** Public Twitter API data filtered for asthma keywords and publicly available EPA air quality sensor data for a metropolitan area; no hospital ED visit data available, so use air quality and tweet counts as proxies.

**Build it:**

1. Collect recent tweets containing asthma-related keywords using the Twitter API.
2. Collect corresponding air quality data (CO, NO2, PM2.5) from EPA public sensors for the same time period and location.
3. Normalize asthma tweet counts by total daily tweet volume to reduce noise.
4. Calculate Pearson correlation coefficients between normalized tweet counts, pollutant levels, and a proxy for asthma ED visits (e.g., pollutant spikes).
5. Visualize the correlations using scatter plots and time series graphs.

**Ships as:** A Jupyter notebook or Python script with data collection, preprocessing, correlation analysis, and visualizations, plus a README explaining the methodology and results.

**Stretch goal:** Add Google Trends data for asthma-related search terms and analyze its correlation with tweets and air quality data.

### Intermediate — Multimodal Asthma ED Visit Level Prediction
*Effort: 1-3 weekends, ~20 hours*

You implement a machine learning classification pipeline that predicts daily asthma emergency department visit levels (High, Medium, Low) by combining Twitter data and air quality sensor data. You reimplement the core method described in the paper, including tweet filtering, normalization, feature engineering, and classification with Decision Tree and ANN models.

**Why it shows you understood the paper:** This project demonstrates your ability to integrate heterogeneous data sources, preprocess noisy social media data, and apply classification algorithms to replicate the paper's main predictive modeling approach without relying on unavailable author code.

**Grounded in:** Built a population-level predictive model classifying daily ED visits into High, Medium, or Low categories with approximately 70% accuracy by combining air quality and Twitter data.

**Tech stack:** Python 3.11, pandas, scikit-learn, tensorflow or PyTorch, tweepy (Twitter API)

**Data:** Public Twitter data filtered for asthma keywords and EPA air quality sensor data for a metropolitan area; simulate or approximate ED visit labels by categorizing days based on pollutant thresholds or public health reports.

**Build it:**

1. Collect and preprocess asthma-related tweets and air quality data for the same time period and location.
2. Normalize tweet counts and engineer features combining tweet and pollutant data.
3. Define target labels (High, Medium, Low) for asthma ED visit levels using pollutant thresholds or synthetic labels.
4. Train classification models (Decision Tree, ANN) on the combined features.
5. Evaluate model precision and accuracy, comparing combined data against air quality data alone.
6. Document the pipeline and results in a report.

**Ships as:** A runnable ML pipeline with data preprocessing, feature engineering, model training, evaluation metrics, and a README describing the approach and findings.

**Stretch goal:** Incorporate simple temporal features (e.g., lagged variables) to explore time-lagged prediction improvements.

### Advanced — Enhancing Spatial Granularity of Social Media Signals for Asthma Prediction
*Effort: a few weeks, ~40+ hours*

You develop an extended predictive model that improves the spatial granularity of social media signals by applying geolocation inference techniques on asthma-related tweets lacking explicit geotags. You integrate these enhanced spatial features with air quality data to predict asthma ED visit levels at finer geographic resolution, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation of the paper—limited geolocation in Twitter data—and explores a future direction by improving spatial relevance of social media signals, demonstrating advanced data mining, geospatial analysis, and multimodal fusion skills.

**Grounded in:** Addresses the limitation that only 2% of asthma tweets had precise geolocation, proposing methods to improve spatial granularity and relevance of social media signals in predictive models.

**Tech stack:** Python 3.11, pandas, scikit-learn, tensorflow or PyTorch, spaCy or NLTK for NLP, geopy or similar geolocation libraries, tweepy (Twitter API)

**Data:** Public Twitter data with asthma keywords, including tweets without geotags; EPA air quality sensor data; simulate or approximate ED visit data at finer geographic granularity if possible.

**Build it:**

1. Collect asthma-related tweets including those without explicit geolocation.
2. Apply NLP and geolocation inference techniques (e.g., user profile location parsing, place name recognition) to assign approximate locations to tweets.
3. Aggregate tweets spatially at finer geographic units (e.g., zip codes or neighborhoods).
4. Combine enhanced spatial tweet features with localized air quality data.
5. Train and evaluate classification models predicting asthma ED visit levels at finer spatial resolution.
6. Analyze the impact of spatial granularity improvement on prediction accuracy and discuss findings.

**Ships as:** A comprehensive codebase and report demonstrating geolocation inference, spatial feature engineering, predictive modeling, and evaluation, with a README explaining methods and results.

**Stretch goal:** Incorporate additional social media platforms or real-time Google Trends data to further enhance spatial and temporal prediction accuracy.
