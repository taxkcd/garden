---
title: "771 · On the Use of Proxies in Political Ad Targeting — Alan Mislove"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alan-mislove"
source_hash: "ec34944a1ba35ba79bb40d34cffc559bdade8a935549f625da44dd366dafa8eb"
sequence: 771
generator: "outreach-garden: managed"
---

# 771 · On the Use of Proxies in Political Ad Targeting

## At a glance

- **Professor:** Alan Mislove
- **Institution:** Northeastern University
- **Paper:** [On the Use of Proxies in Political Ad Targeting](https://arxiv.org/pdf/2410.14617)
- **Authors:** Piotr Sapiezynski, Levi Kaplan, Alan Mislove, Aleksandra Korolova
- **Year:** 2024

## Paper overview

This paper studies how political advertisers on Facebook circumvent restrictions on targeting sensitive groups by using proxy attributes—neutral interests that correlate with political or racial groups. The authors develop new methods to measure how well these proxies work and analyze data from the 2022 U.S. midterm elections to show widespread use of proxies, highlighting the ineffectiveness of Facebook's current mitigation strategies and the need for better transparency and regulation.

### Why it matters

**Research problem:** Facebook and other platforms have removed certain sensitive targeting options (e.g., political affiliation, ethnicity) to prevent discriminatory or manipulative political advertising. However, advertisers may bypass these restrictions by targeting proxy attributes that correlate with the removed categories. The problem is to measure the extent and effectiveness of such proxy targeting in political ads.

**Why it matters:** Proxy targeting can undermine legal and ethical safeguards against discrimination and manipulation in political advertising. It enables exclusion or micro-targeting of groups based on sensitive attributes indirectly, which can contribute to polarization, misinformation, and social harm. Understanding and detecting proxy use is critical for protecting democratic processes and civil rights.

**Key contributions:**

- Novel scalable methods to quantify political and racial skew of Facebook ad targeting interests without proprietary data or ad spend.
- Comprehensive data collection from Facebook Ad Library on political advertisers and their targeting criteria during the 2022 U.S. midterms.
- Empirical evidence showing widespread use of proxy attributes by political advertisers to circumvent Facebook's removal of sensitive targeting options.
- Demonstration that proxy targeting occurs across the political spectrum and involves millions of dollars in ad spend.
- Highlighting the ineffectiveness of current platform policies and the need for increased transparency and regulatory approaches.

## About the professor

**Alan Mislove** — Professor, Computer Science, Northeastern University.

Research interests: algorithmic auditing, algorithmic discrimination, fairness, privacy

### Research links

- [Faculty/profile page](http://www.ccs.neu.edu/home/amislove)
- [Google Scholar](https://scholar.google.com/citations?user=oAqKi9MAAAAJ&hl=en&oi=ao)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** algorithmic auditing and fairness
**The paper assumes:** algorithmic auditing methods, fairness in machine learning, proxy discrimination detection
**Already in this field?** Skip this entirely if you already understand algorithmic auditing techniques and fairness concepts in machine learning and online systems.

This background selection supports understanding algorithmic auditing and fairness, crucial for grasping the methodologies and implications of proxy use in political ad targeting without proprietary data. The rigorous course offers a deep, interdisciplinary academic foundation, while the fast track provides a concise, practical overview of AI auditing concepts and fairness testing. Choose the course for comprehensive theoretical and social context; choose the fast track for a focused, time-efficient introduction to auditing AI systems and fairness issues.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [I2SC Lecture Series](https://www.youtube.com/playlist?list=PL3mLZR4xcvWW_dTbSMjU6NDH2mh0AQrmo) — Interdisciplinary Institute for Societal Computing · 19 videos · 11.2h across 19 episodes

**Watch only this:** Episodes 1-4, about 2.3 hours — covering statistical population estimation, fairness and causality, society-centered AI perspectives, and political bias evaluation, which provide foundational knowledge for auditing and fairness in algorithmic systems.

*Why it unblocks this paper:* The I2SC Lecture Series is an interdisciplinary academic course that covers algorithmic fairness, bias, and societal impacts of technology, directly relevant to understanding the socio-technical challenges and measurement methods in the paper.

*If you want all of it:* 11.2 hours across 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Advanced in AI Audit (AAIA) from ISACA Comprehensive Video Series](https://www.youtube.com/playlist?list=PL4WwoMPrTqu_IR3cgKaaFRNcCncUzKOQb) — François R. JOLY · 18 videos · 2.0h across 18 episodes

**Watch only this:** Episodes 1-5, about 30 minutes — covering AI evolution, machine learning models, neural networks, AI life cycle, and governance frameworks, which establish a quick but solid foundation for understanding AI auditing and fairness.

*Why it unblocks this paper:* The ISACA Advanced in AI Audit (AAIA) series offers a concise, practical overview of AI governance, auditing, bias, and fairness testing, aligning well with the paper's focus on auditing ad targeting systems and detecting proxy biases.

*If you want all of it:* 2.0 hours across 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "On the Use of Proxies in Political Ad Targeting," start with foundational knowledge on algorithmic auditing of online ads, fairness and bias in machine learning, and political microtargeting methods. These prerequisites provide the theoretical and practical context for the paper's novel measurement methodologies. Finally, focus on the paper's core concept by reviewing the authors' own talk or closely related research talks to grasp their specific approaches and findings.

### Algorithmic auditing online ads *(prerequisite)*
This section covers foundational methods and challenges in auditing algorithms that deliver online advertisements, including detecting biases and discriminatory practices. Understanding these auditing techniques is essential to appreciate the paper's novel approaches to measuring proxy targeting without proprietary data.

*How the paper uses it:* The paper builds on algorithmic auditing principles to develop new methods for detecting proxy targeting in Facebook political ads.

▶ [Aleksandra Korolova - Auditing Ad Delivery Algorithms - IPAM at UCLA](https://www.youtube.com/watch?v=ODjTQaThrgI) — Institute for Pure & Applied Mathematics (IPAM) · 4 yr ago

### Fairness and bias in machine learning *(prerequisite)*
This section explores the ethical and technical aspects of bias and fairness in machine learning systems, which is critical for understanding the implications of proxy targeting and discrimination in ad delivery. It provides context on why detecting proxies matters for fairness and civil rights.

*How the paper uses it:* The paper addresses fairness concerns by revealing how proxy attributes enable discriminatory political ad targeting despite platform restrictions.

▶ [Bias in bios: fairness in a high-stakes machine-learning setting](https://www.youtube.com/watch?v=IDNXZitcQng) — Brown University · 1:03:14

### Political microtargeting methods *(prerequisite)*
This section explains how political campaigns use microtargeting strategies to influence voters, including the use of data-driven targeting proxies. It is essential to understand these methods to contextualize the paper's focus on proxy attribute exploitation in political ads.

*How the paper uses it:* The paper investigates how political advertisers use proxy interests as microtargeting tools to circumvent Facebook's restrictions.

▶ [From Microtargeting to Misinformation: The Political Power of Generative AI](https://www.youtube.com/watch?v=cczJBVb4Jcc) — University of Glasgow College of Social Sciences · 11 mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts needed to understand the paper's investigation of proxy use in political ad targeting on Facebook. Starting with fairness and bias in machine learning to grasp ethical concerns, it then covers political microtargeting methods to understand advertiser strategies, followed by algorithmic auditing of online ads to learn how biases and proxies can be detected. Finally, it focuses on audience estimation and skew measurement, which are central to the paper's novel methodologies for quantifying political and racial skew in ad targeting.

### Fairness and bias in machine learning *(prerequisite)*
Understanding fairness and bias in machine learning is critical to recognizing how algorithms can unintentionally discriminate or reinforce societal biases. This section explains key concepts and ethical implications, setting the stage for why proxy targeting in ads is problematic.

*How the paper uses it:* The paper addresses proxy targeting as a form of indirect discrimination, making fairness and bias foundational to its ethical analysis.

▶ [AI Bias & Fairness: Understanding Algorithmic Bias in Machine Learning](https://www.youtube.com/watch?v=Ezap2E2BHTs) — CodeLucky · 1 yr ago

### Political microtargeting methods *(prerequisite)*
Political microtargeting uses data-driven strategies to deliver tailored political ads to specific voter segments. This section explains how advertisers use behavioral and interest data to influence voter decisions, including the use of proxies.

*How the paper uses it:* The paper studies how political advertisers use proxy attributes as microtargeting tools to circumvent restrictions on sensitive categories.

▶ [Microtargeting explained, how it could influence voter's decisions](https://www.youtube.com/watch?v=Nw21mRE_N_0) — WTHI-TV · 6 yr ago

### Algorithmic auditing online ads *(prerequisite)*
Algorithmic auditing involves systematically examining ad delivery systems to detect biases and unfair practices. This section introduces methods to audit online advertising algorithms without needing proprietary data.

*How the paper uses it:* The authors develop novel auditing methods to measure political and racial skew in Facebook ad targeting without privileged access.

▶ [Aleksandra Korolova - Auditing Ad Delivery Algorithms - IPAM at UCLA](https://www.youtube.com/watch?v=ODjTQaThrgI) — Institute for Pure & Applied Mathematics (IPAM) · 4 yr ago

### Audience estimation and skew measurement
Audience estimation and skew measurement quantify how much an audience or interest group leans toward a particular political or racial demographic. This section explains the statistical concept of skewness and how it can be used to detect proxy targeting.

*How the paper uses it:* The paper’s core contribution is two novel methods to measure skew in ad targeting interests, revealing proxy use.

▶ [Skewness - Right, Left & Symmetric Distribution - Mean, Median, & Mode With Boxplots - Statistics](https://www.youtube.com/watch?v=U0NZu6f5TMI) — The Organic Chemistry Tutor · 10:22 · 7 yr ago

## Already in your library

- [Introduction to Algorithm Fairness | Causes, Measuring ...](https://www.youtube.com/watch?v=3UcSq1dGW2c) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [MIT 6.S191: AI Bias and Fairness](https://www.youtube.com/watch?v=wmyVODy_WD8) — also for: The Potential of Diverse Youth as Stakeholders in Identifying and Mitigating Algorithmic Bias for a Future of Fairer AI (Amy E. Ogan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of proxy use in political ad targeting on Facebook as studied in the paper. The beginner project reproduces a core measurement metric using synthetic or public data to grasp skew calculation. The intermediate project implements one of the paper's novel measurement methods using the authors' released domain bias dataset, applying it to real Facebook interest data from the 2022 midterms. The advanced project extends the methodology to a new ad category beyond political ads, addressing a key limitation and exploring proxy detection in housing or employment ads.

### Beginner — Compute Political Skew Scores for Facebook Interests
*Effort: a weekend, ~8 hours*

You build a simple Python script that calculates political skew scores for a small set of Facebook interests using synthetic audience prevalence data. This reproduces the core skew metric from the paper, demonstrating how interests can serve as proxies by their differential prevalence in partisan groups.

**Why it shows you understood the paper:** By implementing skew score calculations, you show you understand the paper's fundamental measurement concept for quantifying proxy targeting effectiveness without proprietary data.

**Grounded in:** Key contribution: Novel scalable methods to quantify political and racial skew of Facebook ad targeting interests without proprietary data or ad spend.

**Tech stack:** Python 3.11, Jupyter Notebook, pandas, matplotlib

**Data:** Synthetic data simulating audience prevalence of interests in Democrat and Republican Custom Audiences, inspired by the paper's description.

**Build it:**

1. Create synthetic prevalence data for 10-20 Facebook interests across two Custom Audiences representing political groups.
2. Implement the skew score formula as described in the paper to compute political skew per interest.
3. Visualize the skew scores using a bar chart to highlight interests with strong partisan bias.
4. Write a README explaining the skew metric and how it relates to proxy targeting.

**Ships as:** A Jupyter Notebook or Python script with synthetic data, skew score calculations, visualizations, and explanatory notes.

**Stretch goal:** Add racial skew score calculations using a similar synthetic dataset to explore multi-dimensional proxy detection.

### Intermediate — Implement Facebook Interest Skew Measurement Using External Domain Biases
*Effort: 2 weekends, ~20 hours*

You implement the second measurement approach from the paper that uses Facebook Audience Insights and external website political bias scores to estimate interest skew. Using the authors' released domain bias dataset, you map Facebook Pages associated with interests to bias scores and compute average skew for each interest.

**Why it shows you understood the paper:** This project demonstrates you can reproduce one of the paper's novel proxy detection methodologies using real external data and understand how domain bias scores translate to interest skew.

**Grounded in:** Approach: Using Facebook Audience Insights to identify popular Facebook Pages associated with interests, mapping their external URLs to known political bias scores from prior datasets, and averaging these to estimate interest skew.

**Tech stack:** Python 3.11, pandas, requests, matplotlib

**Data:** The domain bias dataset released by the authors at https://github.com/gitronald/domains/, used to map Facebook Pages to political bias scores.

**Build it:**

1. Download and explore the domain bias dataset from the authors' GitHub repository.
2. Collect a sample list of Facebook interests and their associated popular Pages (simulate or use public Facebook Audience Insights data if accessible).
3. Map the Pages' external URLs to bias scores from the domain dataset.
4. Compute average political skew scores per interest by averaging the bias scores of associated Pages.
5. Visualize the skew distribution and compare with a simple baseline (e.g., random assignment).
6. Document the methodology and limitations in a README.

**Verified links from the paper:**

- <https://github.com/gitronald/domains> — released by the paper's authors

**Ships as:** A Python project that computes and visualizes political skew scores for Facebook interests using external domain bias data, with code and documentation.

**Stretch goal:** Extend the project to analyze racial skew by incorporating demographic data or voter records if available.

### Advanced — Detect Proxy Targeting in Housing Ads Using Facebook Interest Skew Methods
*Effort: 3+ weeks*

You extend the paper's proxy detection methodologies to the housing advertising category, addressing a stated limitation. Using publicly available Facebook Ad Library data for housing ads, you analyze targeting interests for political or racial skew using the domain bias dataset and synthetic or voter data proxies. You develop a prototype auditing tool that flags potential proxy targeting in housing ads.

**Why it shows you understood the paper:** This project shows you can apply and adapt the paper's core methods beyond political ads, tackling a real limitation and contributing to ongoing research directions in algorithmic auditing and fairness.

**Grounded in:** Future direction: Extending proxy detection methodologies to other categories like housing, employment, and health advertising.

**Tech stack:** Python 3.11, pandas, requests, matplotlib, Jupyter Notebook

**Data:** Public Facebook Ad Library data for housing ads (collected via Facebook's Ad Library API or manual scraping), combined with the authors' domain bias dataset from https://github.com/gitronald/domains.

**Build it:**

1. Collect a dataset of Facebook housing ads and their targeting interests from the Facebook Ad Library.
2. Use the domain bias dataset to assign political bias scores to interests associated with housing ads.
3. If possible, incorporate synthetic or regional voter record data to estimate racial skew for interests.
4. Compute skew scores for housing ad interests and identify those with strong partisan or racial bias.
5. Build a simple auditing tool or dashboard that flags ads using interests with high proxy potential.
6. Write a detailed report discussing findings, limitations, and implications for platform transparency.

**Verified links from the paper:**

- <https://github.com/gitronald/domains> — released by the paper's authors

**Ships as:** A documented codebase and Jupyter Notebook demonstrating proxy detection in housing ads, with an auditing prototype and analysis report.

**Stretch goal:** Integrate real-time monitoring capabilities or extend to employment ads using similar methods.

_Access to Facebook Audience Insights data and Facebook Ad Library data may be limited or incomplete; synthetic or publicly available substitutes may be needed._
