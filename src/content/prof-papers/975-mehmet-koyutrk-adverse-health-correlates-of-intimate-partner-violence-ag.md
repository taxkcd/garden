---
title: "975 · Adverse Health Correlates of Intimate Partner Violence against Older Women: Mining Electronic Health Records — Mehmet Koyutürk"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mehmet-koyuturk"
source_hash: "1317f8cc7f654ffe260beeb32e5a58154f0b07a51a6369ad0fd59bc92c08d8f8"
sequence: 975
generator: "outreach-garden: managed"
---

# 975 · Adverse Health Correlates of Intimate Partner Violence against Older Women: Mining Electronic Health Records

## At a glance

- **Professor:** Mehmet Koyutürk
- **Institution:** Case Western Reserve University
- **Paper:** [Adverse Health Correlates of Intimate Partner Violence against Older Women: Mining Electronic Health Records](https://arxiv.org/pdf/2203.13335)
- **Authors:** Serhan Yılmaz, Erkan Günay, Da Hee Lee, Kathleen Whiting, Kristen Silver, Mehmet Koyutürk, Günnur Karakurt
- **Year:** 2022

## Paper overview

This study investigates the health conditions associated with intimate partner violence (IPV) in older women by mining electronic health records (EHRs). It identifies specific medical issues more common in older women experiencing IPV compared to younger women, highlighting substance abuse, mental health disorders, musculoskeletal problems, and certain cancers. The findings aim to improve screening and intervention strategies for IPV in older women.

### Why it matters

**Research problem:** Intimate partner violence (IPV) is often studied in younger women, but older women are also frequently victims, with physical effects harder to detect. There is limited information on specific health consequences of IPV in older women, and barriers exist in identifying and treating IPV in this population.

**Why it matters:** Older women experiencing IPV suffer from diverse and serious health issues that are often under-recognized due to age-related health decline and social barriers. Understanding these health correlates can improve screening, diagnosis, and intervention, potentially reducing harm and improving quality of life.

**Key contributions:**

- Developed a robust framework to identify health correlates of IPV in older women using large-scale EHR data.
- Quantified co-morbidity and differential co-morbidity of medical terms with IPV in older versus younger women.
- Identified substance abuse as highly co-morbid with IPV in older women.
- Discovered diverse health conditions (mental health, musculoskeletal, neoplasms, skin, ENT) with higher association to IPV in older women.
- Provided adjusted confidence intervals accounting for data rounding and false discovery rate.

## About the professor

**Mehmet Koyutürk** — Jennings Professor of Computing Sciences, Department of Computer & Data Sciences, Case Western Reserve University.

Research interests: development of algorithms for large-scale data mining and analysis, especially networks and graph-structured data, with focus on biology; analyzing biological networks and gaining insights into the systems biology of complex diseases

### Research links

- [Faculty/profile page](http://compbio.case.edu/koyuturk)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Statistical Analysis of Electronic Health Records
**The paper assumes:** statistical methods for electronic health record analysis, co-morbidity quantification, privacy-preserving data analysis, multiple hypothesis testing correction
**Already in this field?** Skip this entirely if you already understand statistical analysis techniques applied to electronic health records, including co-morbidity measures and privacy-aware data handling.

This background prepares the reader to understand the statistical analysis methods applied to electronic health records (EHR) data in the paper, including association measures, co-morbidity quantification, handling privacy-related rounding errors, and multiple hypothesis testing corrections. The rigorous course offers a detailed, university-level introduction to statistics and data analysis concepts essential for interpreting the paper's methodology, while the fast track provides a concise, practical introduction focused on healthcare data analysis workflows and relevant statistical techniques. Choose the course for deep conceptual grounding and the fast track for a focused, time-efficient overview tailored to healthcare data contexts.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Healthcare Data Analyst Course](https://www.youtube.com/playlist?list=PLRZeOeu51BQMinKJXU4wVSFnzvzvZH3Hh) — Dr Data Insight · 13 videos · 0.9h across 13 episodes

**Watch only this:** Episodes 1-5, about 20 minutes — covering career start, NHS data overview, key datasets, essential tools, and problem-solving with data analytics, giving a quick but relevant foundation for understanding healthcare data analysis.

*Why it unblocks this paper:* This short-form Healthcare Data Analyst Course provides a practical, concise introduction to healthcare data analytics, including essential skills and concepts for working with NHS and healthcare datasets, which aligns well with the paper's use of EHR data and statistical analysis in a clinical context.

*If you want all of it:* 0.9 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on mining electronic health records to identify adverse health correlates of intimate partner violence (IPV) in older women, start with foundational knowledge on comorbidity analysis and statistical methods for privacy-preserving data, as these underpin the paper's methodology. Next, explore the use of electronic health records data mining to grasp the data source and analytic techniques. Finally, focus on the paper's core concept by watching the authors' own talk on intimate partner violence, which provides direct insights into the study's context and findings.

### Comorbidity analysis in healthcare *(prerequisite)*
Understanding comorbidity—the co-occurrence of multiple diseases or conditions—is essential for interpreting the health correlations with IPV found in the study. This section provides advanced academic talks that discuss comorbidity from clinical and research perspectives, helping to frame how differential co-morbidity scores are meaningful in health data analysis.

*How the paper uses it:* The paper quantifies co-morbidity and differential co-morbidity of medical terms with IPV in older versus younger women.

▶ [Potpourri of Comorbidities](https://www.youtube.com/watch?v=unfy-fmRpNY) — IAS Conference on HIV Science · 1:34:11 · 9y ago

### Statistical methods for privacy-preserving data *(prerequisite)*
The study deals with privacy constraints and rounding errors in aggregated EHR data, requiring robust statistical methods to ensure valid inference. This section includes university-level lectures on privacy-preserving data analysis and algorithms, which provide the theoretical foundation for handling such data challenges.

*How the paper uses it:* The study accounts for privacy and rounding challenges in EHR data analysis by computing confidence intervals that consider rounding errors and rarity of conditions.

▶ [Turing Lecture: Dr Cynthia Dwork, Privacy-Preserving Data Analysis](https://www.youtube.com/watch?v=vsA4w3itxA0) — The Alan Turing Institute · 50:32 · 9y ago

### Electronic health records data mining *(prerequisite)*
Mining electronic health records is the central method used in the paper to extract health correlates of IPV. This section offers advanced talks by university researchers and experts on methodologies for analyzing large-scale EHR data, including standardization, algorithmic approaches, and challenges in observational data.

*How the paper uses it:* The authors mined electronic health records from the IBM Explorys database to identify health conditions associated with IPV in older women.

▶ [Clinical, Standardization & Algorithmic Pathways to Automating Discovery with EHR Data -Charles Mayo](https://www.youtube.com/watch?v=1U0_xJFNVo8) — Michigan Institute for Data & AI in Society · 34:13 · 3y ago

### Paper authors talk
The authors' own talk provides the most direct and specific insights into their study, including motivation, methodology, and key findings. It is the best resource to understand the nuances of their approach and the implications of their results in the context of IPV and older women.

*How the paper uses it:* This video directly addresses intimate partner violence and its recognition, which is central to the paper's focus on health correlates in older women.

▶ [The Signs & Shapes of Harm: Understanding & Defining Intimate Partner Violence](https://www.youtube.com/watch?v=qTmx1CiNYfc) — Mental Health Academy · 5:22 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces key concepts to understand the paper on health correlates of intimate partner violence (IPV) in older women using electronic health records (EHRs). It starts with foundational knowledge about IPV and its health impacts, then explains comorbidity analysis in healthcare, followed by how EHR data mining works, and concludes with privacy-preserving statistical methods essential for handling sensitive EHR data. This order builds intuition from the social and medical context to the computational and statistical techniques used in the study.

### Intimate partner violence health impacts *(prerequisite)*
Learn what intimate partner violence (IPV) is, its dynamics, and the diverse health consequences it causes, especially in women. Understanding these impacts provides essential context for why studying IPV's health correlates in older women matters.

*How the paper uses it:* The paper investigates specific health conditions associated with IPV in older women, so foundational knowledge of IPV's health effects is critical.

▶ [The Signs & Shapes of Harm: Understanding & Defining Intimate Partner Violence](https://www.youtube.com/watch?v=qTmx1CiNYfc) — Mental Health Academy · 5:22 · 1y ago

### Comorbidity analysis in healthcare *(prerequisite)*
Comorbidity analysis studies how different diseases or health conditions co-occur in patients. This helps identify patterns and associations between conditions, which is key to interpreting the paper’s findings on health issues linked with IPV.

*How the paper uses it:* The study quantifies co-morbidity and differential co-morbidity of medical terms with IPV in older versus younger women.

▶ [Comorbidity: implications for managing and delivering best practice healthcare](https://www.youtube.com/watch?v=9IYlvrLYSvM) — The Matilda Centre · 56:55 · 6y ago

### Electronic health records data mining
This concept covers how large-scale electronic health record (EHR) data is collected, standardized, and analyzed to extract meaningful clinical insights. Understanding EHR data mining clarifies the paper’s approach to identifying health correlates of IPV from vast clinical datasets.

*How the paper uses it:* The authors mined EHR data from IBM Explorys to analyze diagnostic terms co-morbid with IPV in older women.

▶ [Using Electronic Health Records For Medical Research](https://www.youtube.com/watch?v=4rdZWcfdWr8) — Life Course Research Visual Toolkit · 9:58 · 5y ago

### Statistical methods for privacy-preserving data *(prerequisite)*
Learn about statistical techniques designed to analyze sensitive data while protecting individual privacy, including handling data rounding and aggregation. These methods ensure robust and ethical analysis of EHR data, which often includes privacy constraints.

*How the paper uses it:* The study develops confidence intervals accounting for rounding errors and privacy measures in the Explorys EHR dataset.

▶ [Turing Lecture: Dr Cynthia Dwork, Privacy-Preserving Data Analysis](https://www.youtube.com/watch?v=vsA4w3itxA0) — The Alan Turing Institute · 50:32 · 9y ago

## Already in your library

- [Unit 3: Electronic Health Records (EHR Systems): Lecture A](https://www.youtube.com/watch?v=EBGZdfdZDuU) — also for: Medi-Gemma: A Hybrid Clinical Decision Support System Integrating Deterministic EMR Analytics and Retrieval-Augmented Generation (Usman Roshan)
- [Differential Privacy: What? So What? Now What?](https://www.youtube.com/watch?v=NRf6sUk1bv0) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Differential Privacy - Simply Explained](https://www.youtube.com/watch?v=gI0wk1CXlsQ) — also for: Differentially Private Synthetic Data Generation Using Context-Aware GANs (Anantaa Kotal)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper's approach to mining electronic health records (EHR) for health correlates of intimate partner violence (IPV) in older women. The beginner project reproduces a simple co-morbidity analysis metric on simulated data to grasp the statistical framework. The intermediate project implements the paper's core differential co-morbidity analysis method on a substitute public EHR dataset, comparing older versus younger women. The advanced project extends the analysis to a longitudinal perspective to address the paper's limitation of cross-sectional data, exploring temporal patterns of IPV-related health conditions.

### Beginner — Simulate and Analyze Differential Co-morbidity Scores
*Effort: a weekend, ~8 hours*

You build a small Python script that simulates aggregated diagnostic count data for two age groups (older and younger women) with and without IPV, then compute co-morbidity and differential co-morbidity scores as described in the paper. You visualize the top diagnostic terms with stronger association to IPV in older women using bar charts.

**Why it shows you understood the paper:** This project shows you understand the paper's core statistical framework for quantifying differential co-morbidity, including handling privacy-related rounding effects and interpreting confidence intervals.

**Grounded in:** The project demonstrates the paper's key contribution: 'Developed a robust framework to identify health correlates of IPV in older women using large-scale EHR data.'

**Tech stack:** Python 3.11, matplotlib, numpy, pandas

**Data:** Simulated aggregated diagnostic counts mimicking the paper's description of IBM Explorys data with rounding and privacy noise.

**Build it:**

1. Simulate aggregated counts of diagnostic terms co-occurring with IPV for older and younger women populations, including rounding noise.
2. Implement calculation of co-morbidity scores and differential co-morbidity scores between age groups as per the paper's formulas.
3. Compute confidence intervals accounting for rounding errors.
4. Visualize the top diagnostic terms with significant differential co-morbidity using bar charts.
5. Write a README explaining the simulation assumptions and how the calculations relate to the paper.

**Ships as:** A Python script and Jupyter notebook with simulated data, calculations of differential co-morbidity scores, visualizations, and explanations linking to the paper's framework.

**Stretch goal:** Add a simple bootstrap method to estimate confidence intervals and compare with the paper's rounding-adjusted intervals.

### Intermediate — Differential Co-morbidity Analysis on Public EHR Dataset
*Effort: 2 weekends, ~20 hours*

You implement the paper's differential co-morbidity statistical framework on a publicly available EHR-like dataset (e.g., MIMIC-III or a substitute dataset with diagnostic codes and patient demographics). You identify diagnostic terms more strongly associated with IPV in older women compared to younger women and compare results against a baseline simple co-morbidity analysis ignoring age groups.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method on real-world data, handle privacy and data aggregation challenges, and interpret differential co-morbidity metrics in a clinical context.

**Grounded in:** This project reproduces the paper's core approach: 'Quantified co-morbidity and differential co-morbidity of medical terms with IPV in older versus younger women.'

**Tech stack:** Python 3.11, pandas, numpy, scipy, matplotlib, seaborn

**Data:** Use a public EHR dataset such as MIMIC-III or a similar dataset with diagnostic codes and patient age/gender as a substitute for IBM Explorys data; simulate IPV labels if necessary based on proxy codes.

**Build it:**

1. Acquire and preprocess the public EHR dataset to extract diagnostic codes, patient age, and gender.
2. Define proxy labels for IPV presence based on diagnostic codes or notes (if available) or simulate labels for demonstration.
3. Aggregate diagnostic term counts co-occurring with IPV for older (65+) and younger women.
4. Implement the differential co-morbidity score calculations as per the paper.
5. Compare results with a baseline co-morbidity analysis ignoring age groups.
6. Visualize and interpret diagnostic terms with significant differential co-morbidity.
7. Document methodology, limitations due to proxy labels or data differences, and relate findings to the paper.

**Ships as:** A Jupyter notebook or Python package that preprocesses data, computes differential co-morbidity scores, compares against baseline, and visualizes results with explanations referencing the paper.

**Stretch goal:** Incorporate false discovery rate correction for multiple comparisons as done in the paper.

### Advanced — Longitudinal Co-morbidity Analysis to Address Cross-Sectional Limitations
*Effort: 3+ weeks*

You extend the paper's cross-sectional differential co-morbidity framework by developing a longitudinal analysis pipeline using a longitudinal EHR dataset (or simulated longitudinal data) to explore temporal patterns of health conditions associated with IPV in older women. You implement temporal co-morbidity metrics and visualize trajectories of key diagnostic terms before and after IPV diagnosis.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by moving beyond cross-sectional data to analyze temporal dynamics, demonstrating deep comprehension of the paper's methods and their extension to longitudinal settings.

**Grounded in:** Addresses the paper's limitation and future direction: 'Data is cross-sectional and aggregated, limiting causal inference... Conduct dedicated longitudinal studies to explore causal mechanisms between IPV and health conditions in older women.'

**Tech stack:** Python 3.11, pandas, numpy, matplotlib, seaborn, statsmodels

**Data:** Use a longitudinal EHR dataset if accessible, or simulate longitudinal patient records with timestamps for diagnoses and IPV events to mimic temporal progression.

**Build it:**

1. Obtain or simulate longitudinal EHR data with timestamps for diagnostic codes and IPV events.
2. Preprocess data to create patient timelines and identify temporal windows before and after IPV diagnosis.
3. Develop temporal co-morbidity metrics that quantify changes in diagnostic term prevalence relative to IPV timing.
4. Implement statistical tests to identify diagnostic terms with significant temporal association to IPV in older women.
5. Visualize trajectories of key health conditions over time around IPV events.
6. Write detailed documentation explaining the extension from cross-sectional to longitudinal analysis and its relevance to the paper's limitations.

**Ships as:** A comprehensive analysis pipeline and report demonstrating longitudinal co-morbidity analysis with visualizations and discussion linking back to the paper's stated limitations and future directions.

**Stretch goal:** Integrate machine learning models to predict IPV occurrence based on temporal health condition patterns.

_No authors' code or data artifacts are available; public EHR datasets or simulated data must be used as substitutes, which may limit direct comparability to the paper's results._
