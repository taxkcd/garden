---
title: "308 · Unveiling Influencer-Driven PII Disclosures in Social Media Discourse — Ling Wang"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ling-wang"
source_hash: "67415bae309062287c269b0e99144763df71b71876e68474e00b53483571b34d"
sequence: 308
generator: "outreach-garden: managed"
---

# 308 · Unveiling Influencer-Driven PII Disclosures in Social Media Discourse

## At a glance

- **Professor:** Ling Wang
- **Institution:** Nova Southeastern University
- **Paper:** [Unveiling Influencer-Driven PII Disclosures in Social Media Discourse](https://doi.org/10.1108/DTS-05-2025-0112)
- **Authors:** Eidan J. Rosado, Ling Wang, Laurie P. Dringus, Junping Sun
- **Year:** 2024

## Paper overview

This study investigates how social media influencers affect the sharing of personal identifiable information (PII) by their followers. Using Reddit data, the research analyzes the relationship between influencer reach and follower engagement and PII disclosures over time. The findings show that influencers with greater reach tend to generate more engagement and PII disclosures, but non-influencers can also initiate viral conversations. Engagements and disclosures tend to decline as time passes.

### Why it matters

**Research problem:** Understanding the influence of social media personalities on the sharing of personal identifiable information (PII) by their audience, especially given the privacy risks associated with such disclosures on public and private social networks.

**Why it matters:** Influencers significantly impact marketing, social trends, and information sharing, which can lead to privacy risks for followers who disclose personal information. This has implications for cybersecurity, privacy, and ethical social media use, as well as for businesses relying on influencer marketing.

**Key contributions:**

- Demonstrated a strong correlation between influencer reach (influence power) and increased follower engagement and PII disclosures.
- Provided a detailed typology and risk assessment of PII types disclosed in social media posts.
- Showed that engagements and PII disclosures decline over time in social media conversation threads.
- Highlighted that non-influencers can also initiate viral conversations leading to PII disclosures.
- Developed a research model using eigenvector centrality to measure influencer power in social media clusters.

## About the professor

**Ling Wang** — Professor - Computing, Computing, Nova Southeastern University.

Research interests: information privacy, learning systems and technologies, information and computing ethics, research methodology and statistics

### Research links

- [Faculty/profile page](https://computing.nova.edu/people/wang.html)
- [Identity evidence](https://cec.nova.edu/faculty/wang.html)
- [Identity evidence](https://scholars.nova.edu/en/persons/ling-wang/)
- [Resolved homepage](https://sites.nova.edu/lingwang/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Social Network Analysis
**The paper assumes:** graph theory, social network analysis, eigenvector centrality, community detection, network metrics
**Already in this field?** Skip this entirely if you already understand social network analysis concepts including centrality measures and community structure in networks.

This background focuses on Social Network Analysis, essential for understanding how influencer power is measured via eigenvector centrality and how social media conversation clusters are analyzed in the paper. The rigorous course offers a deep, structured university-level treatment, while the fast track provides a concise, beginner-friendly introduction to core concepts and practical labs in R. Choose the course for comprehensive mastery; choose the fast track for a quick, practical grasp of key ideas.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Social Network Analysis - Prof Tanmoy Chakraborty](https://www.youtube.com/playlist?list=PLyqSpQzTE6M_bqqS9VmsoFNtcS72EDhUV) — NPTEL-NOC IITM · 70 videos · 27.0h across the first 60 episodes

**Watch only this:** Episodes 1-3 (SNA Chapter 1 Lecture 1, SNA Chapter 2 Lecture 2, SNA Chapter 1 Lecture 2), Episodes 6-9 (Tutorial 2: Introduction to NetworkX - Part I, SNA Chapter 2 Lecture 1, Tutorial 3: Introduction to NetworkX - Part II, SNA Chapter 3 Lecture 1), and Episodes 15-17 (SNA Chapter 3 Lecture 6, SNA Chapter 3 Lecture 7, SNA Chapter 4 Lecture 1), about 7.5 hours total — covering core concepts, eigenvector centrality, and network analysis tools.

*Why it unblocks this paper:* This NPTEL-NOC IITM course by Prof Tanmoy Chakraborty covers social network analysis comprehensively, including eigenvector centrality and network clustering, directly supporting the paper's methodology and interpretation of influencer power in social media clusters.

*If you want all of it:* About 27.0 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Social Network Analysis: A Beginner's Lab in R](https://www.youtube.com/playlist?list=PL1M5TsfDV6VsyfMHfkDcUW71ADKcUNCUI) — Mod•U: Powerful Concepts in Social Science · 15 videos · 2.2h across 15 episodes

**Watch only this:** Episodes 1-3 (The Basics of Social Network Analysis: A Social Network Lab in R for Beginners, Network Layouts and Data Structures, R Lab.1 - Let's Draw a Social Network Graph), and Episodes 8-9 (Closeness Centrality & Betweenness Centrality, Eigenvector Centrality), about 1.5 hours total — focusing on foundational concepts and eigenvector centrality.

*Why it unblocks this paper:* This concise series from Mod•U offers a practical, beginner-friendly introduction to social network analysis concepts and labs in R, including eigenvector centrality, which is central to the paper's influencer power measurement.

*If you want all of it:* About 2.2 hours across all 15 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Unveiling Influencer-Driven PII Disclosures in Social Media Discourse," start with foundational concepts such as eigenvector centrality to grasp how influencer power is measured in social networks, followed by personal identifiable information (PII) detection techniques critical for identifying privacy risks. Next, explore social media influencer impact analysis and time series analysis to comprehend follower behavior and temporal trends in engagement and disclosures. Finally, focus on the paper authors' own talks to gain direct insights into their methodology, findings, and implications.

### Eigenvector centrality in social networks *(prerequisite)*
Eigenvector centrality is a key network metric used to quantify the influence or power of nodes within a social network, which is central to this paper's approach to measuring influencer power. Understanding how eigenvector centrality works and is calculated provides the mathematical and conceptual foundation for interpreting the paper's correlation analyses.

*How the paper uses it:* The paper uses eigenvector centrality to measure influencer power in social media conversation clusters.

▶ [Eigenvector Centrality Calculations](https://www.youtube.com/watch?v=IIBOT3SjJZE) — Dr Alan Shaw · 7 years ago

### Personal identifiable information detection *(prerequisite)*
Detecting PII in social media content is essential to assess privacy risks and understand the nature of disclosures analyzed in the study. Videos explaining PII detection technologies and methodologies provide the technical background for the paper's use of the PII-Codex Python package and related machine learning approaches.

*How the paper uses it:* The study detects PII disclosures in Reddit posts using automated detection tools.

▶ [PII Detection at Scale on the Lakehouse](https://www.youtube.com/watch?v=nTAKQuxZ9lI) — Databricks · 3 years ago

### Social media influencer impact analysis *(prerequisite)*
Analyzing how influencers affect follower engagement and information sharing behavior is foundational to this research. Understanding metrics and methods for evaluating influencer impact helps contextualize the paper's findings on influencer reach and PII disclosures.

*How the paper uses it:* The paper investigates how influencer reach correlates with follower engagement and PII disclosures.

▶ [Beyond Packaged Analytics: Conducting Custom Engagement Analyses - Holly Syrdal](https://www.youtube.com/watch?v=XE-O6Z0h4H4) — Stukent · 3 years ago

### Time series analysis of social media data *(prerequisite)*
Time series analysis techniques are used to examine trends in engagement and PII disclosures over time within social media conversation clusters. A solid grasp of these methods aids in understanding the temporal dynamics reported in the paper.

*How the paper uses it:* The study performs time series analyses to show declining trends in engagement and PII disclosures over time.

▶ [What Are Time Series? | Time Series Analysis](https://www.youtube.com/watch?v=i7HARZlJv7Y) — Egor Howell · 2 years ago

### Paper authors talk *(the paper's own talk)*
Direct talks by the paper's authors provide the most authoritative and detailed insights into their research questions, methodology, results, and implications. These talks often include nuanced discussions not fully captured in the paper text.

*How the paper uses it:* The authors' own presentations offer direct exposition of their study on influencer-driven PII disclosures.

▶ [https://www.youtube.com › watch?v=FPy9UsHbe-o](https://www.youtube.com/watch?v=FPy9UsHbe-o) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides you through the foundational concepts needed to understand how social media influencers impact personal identifiable information (PII) disclosures, focusing on the methods and findings of the paper. Starting with the basics of PII and influencer impact, it then builds up to key analytical techniques like eigenvector centrality and time series analysis, culminating in understanding the paper's core approach combining content analysis and machine learning.

### Personal identifiable information detection *(the paper's own talk)*
Learn what personally identifiable information (PII) is and how it can be detected in text data. This includes understanding the types of information considered PII and the importance of protecting it in online environments.

*How the paper uses it:* The paper uses PII detection to identify sensitive information disclosed in social media posts.

▶ [PII Explained: What Counts as Personally Identifiable Information and How to Protect It](https://www.youtube.com/watch?v=FJdFB2MlOJE) — Technically U · 1 year ago

### Social media influencer impact analysis *(prerequisite)*
Understand what social media influencers are and how their reach and engagement affect follower behavior. This includes learning about influencer tiers and how influencer activity can drive information sharing.

*How the paper uses it:* The study investigates how influencer power correlates with follower engagement and PII disclosures.

▶ [What is a Social Media Influencer? Nano, Micro, Macro, Celebrity Explained | Pulse Advertising](https://www.youtube.com/watch?v=JLiKXW82tjE) — Pulse Advertising · 4 years ago

### Eigenvector centrality in social networks *(prerequisite)*
Discover eigenvector centrality, a network analysis measure that identifies influential nodes based on their connections to other influential nodes. This helps quantify the power or influence of individuals within social networks.

*How the paper uses it:* The paper uses eigenvector centrality to measure influencer power in Reddit conversation clusters.

▶ [Eigen Vector Centrality - Concept & Example | Graph Analytics | Social Media Analytics](https://www.youtube.com/watch?v=9k8CU78NpXs) — Engineering Unplugged · 1 year ago

### Time series analysis of social media data *(prerequisite)*
Learn the basics of time series analysis to understand how data points change over time. This is essential for analyzing trends in engagement and PII disclosures across social media conversations.

*How the paper uses it:* The study performs time series analysis to observe declining trends in engagement and PII disclosures over time.

▶ [VERY BASIC introduction to TIME SERIES ANALYSIS](https://www.youtube.com/watch?v=KDzETC-YqRM) — Data & Donuts · 1 year ago

### Content analysis and machine learning in social media
Explore how content analysis combined with machine learning techniques can be used to analyze large volumes of social media conversations, extracting meaningful patterns such as PII disclosures and engagement metrics.

*How the paper uses it:* The paper applies content analysis and machine learning to detect PII and analyze social media discourse on Reddit.

▶ [learn how to conduct content analysis: research method](https://www.youtube.com/watch?v=_rqGCAgIzX4) — Research Tube · 6 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Unveiling Influencer-Driven PII Disclosures in Social Media Discourse." The beginner project reproduces a core correlation analysis on synthetic Reddit-like data to grasp influencer power and PII disclosure relationships. The intermediate project reimplements the paper's eigenvector centrality method and PII detection on a public Reddit dataset substitute, comparing engagement and disclosure trends. The advanced project extends the study by incorporating multimedia PII detection or cross-platform influencer identification, addressing key limitations and future directions.

### Beginner — Correlation of Influencer Power and PII Disclosures on Sample Reddit Data
*Effort: a weekend, ~8 hours*

You build a small Python analysis pipeline that simulates a Reddit conversation cluster dataset with nodes representing users and posts, assigns influencer power scores using eigenvector centrality on the graph, detects PII disclosures in text using a simple keyword-based approach, and computes correlation metrics between influencer power, engagement, and PII disclosures.

**Why it shows you understood the paper:** This project shows you understand how influencer power relates statistically to engagement and PII disclosures, reproducing a key paper result on correlation analysis and eigenvector centrality application in social media graphs.

**Grounded in:** Demonstrated a strong correlation between influencer reach (influence power) and increased follower engagement and PII disclosures.

**Tech stack:** Python 3.11, NetworkX, pandas, matplotlib

**Data:** Synthetic Reddit-style conversation cluster data generated to mimic the paper's description of clusters with nodes and edges representing user interactions.

**Build it:**

1. Generate or simulate a small graph dataset representing Reddit conversation clusters with user nodes and reply edges.
2. Calculate eigenvector centrality scores for nodes to represent influencer power using NetworkX.
3. Implement a simple PII detection function based on keyword matching (e.g., names, emails, phone numbers) in post texts.
4. Aggregate engagement metrics (e.g., number of replies) and PII disclosures per cluster.
5. Compute and visualize correlation coefficients between influencer power, engagement, and PII disclosures.
6. Write a README explaining the methodology and how it relates to the paper's findings.

**Ships as:** A GitHub repo with Python scripts that generate data, compute influencer power, detect PII, calculate correlations, and visualize results, plus a README linking the analysis to the paper's correlation findings.

**Stretch goal:** Add a simple time series simulation to show declining engagement and PII disclosures over time in conversation clusters.

### Intermediate — Reimplementation of Influencer Power and PII Disclosure Analysis on Reddit Data
*Effort: 1-3 weekends*

You reimplement the core method of measuring influencer power via eigenvector centrality on real Reddit conversation data (using publicly available Reddit datasets as a substitute), apply a Python PII detection package or implement a rule-based detector, and perform correlation and time series analyses of engagement and PII disclosures across conversation clusters. You compare your results to a simple baseline such as degree centrality.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's core methodology to real-world data, reimplementing influencer power measurement and PII detection, and reproducing key metrics like correlation and trend analysis, showing deep comprehension of the paper's approach.

**Grounded in:** The study used eigenvector centrality to measure influencer power and performed correlation and time series analyses on engagement and PII disclosures across conversation clusters.

**Tech stack:** Python 3.11, NetworkX, pandas, matplotlib, scipy, PII-Codex or custom PII detection

**Data:** Public Reddit comment datasets (e.g., from pushshift.io) used as a substitute for the paper's Reddit data, focusing on conversation threads with at least 30 nodes.

**Build it:**

1. Download and preprocess Reddit comment data to extract conversation clusters (threads) with user interactions.
2. Construct graphs representing conversation clusters and compute eigenvector centrality for influencer power.
3. Apply or implement PII detection on comment texts to identify PII disclosures.
4. Calculate engagement metrics such as number of replies and PII disclosure counts per cluster.
5. Perform correlation analysis between influencer power, engagement, and PII disclosures; compare with degree centrality baseline.
6. Conduct time series analysis to observe engagement and PII disclosure trends over time.
7. Document methodology, results, and comparison to the paper's findings in the README.

**Ships as:** A GitHub repo with scripts for data preprocessing, influencer power calculation, PII detection, correlation and time series analysis, plus visualizations and a detailed README comparing your results to the paper.

**Stretch goal:** Incorporate a simple influencer tier assignment based on active user counts and analyze its correlation reliability, discussing Reddit-specific challenges.

### Advanced — Extending Influencer-Driven PII Disclosure Analysis with Multimedia PII Detection or Cross-Platform Influence
*Effort: a few weeks*

You extend the paper's methodology by addressing one of its stated limitations or future directions: either implement multimedia PII detection (e.g., extracting PII from images in social media posts using OCR and image metadata analysis) or develop a cross-platform influencer identification method combining Reddit and Twitter data to better capture influencer power. You then analyze how these extensions affect engagement and PII disclosure trends.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions, applying advanced techniques to extend the research scope, demonstrating research-level initiative and technical depth.

**Grounded in:** PII detection was limited to text content; images and videos were not analyzed for PII disclosures. Future directions include incorporating multimedia PII detection and developing more reliable cross-platform influencer identification methods.

**Tech stack:** Python 3.11, NetworkX, pandas, matplotlib, scipy, Tesseract OCR or equivalent for image PII detection, Twitter API and Reddit API wrappers (e.g., PRAW for Reddit), Machine learning libraries (optional, e.g., scikit-learn)

**Data:** Public Reddit and Twitter datasets or APIs used to collect conversation data and multimedia posts; synthetic or publicly available images for PII detection experiments.

**Build it:**

1. Choose extension focus: multimedia PII detection or cross-platform influencer identification.
2. For multimedia PII detection: collect social media posts with images, apply OCR and metadata extraction to detect PII in images.
3. For cross-platform influence: collect user interaction data from Reddit and Twitter, construct combined influence graphs, and compute influencer power metrics.
4. Integrate multimedia PII detection or cross-platform influencer scores into engagement and PII disclosure analyses.
5. Perform correlation and time series analyses to compare with text-only or single-platform baselines.
6. Document methodology, challenges, and findings in a comprehensive README.

**Ships as:** A GitHub repo demonstrating the extended analysis pipeline, including multimedia PII detection or cross-platform influencer metrics, with visualizations and a detailed report linking back to the paper's limitations and future directions.

**Stretch goal:** Develop a privacy risk assessment dashboard that visualizes PII disclosure trends and influencer impact across platforms and media types.
