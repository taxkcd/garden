---
title: "616 · GMIA-NEXT: Next-Generation Global Map of Irrigated Areas — Michela Taufer"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michela-taufer"
source_hash: "1d5762bc428e51d97d333499592618287441d112c795718ea5722c0e5367fede"
sequence: 616
generator: "outreach-garden: managed"
---

# 616 · GMIA-NEXT: Next-Generation Global Map of Irrigated Areas

## At a glance

- **Professor:** Michela Taufer
- **Institution:** University of Tennessee
- **Paper:** [GMIA-NEXT: Next-Generation Global Map of Irrigated Areas](https://doi.org/10.21203/rs.3.rs-10085674/v2)
- **Authors:** Endalkachew Abebe Kebede, Yanhua Xie, Gabriel Laboy, Kevin Bhimani, Anna Boser, Anton Urfels, Bhoktear Khan, Matthew Adepoju, Oluseun Adeluyi, Kate A. Brauman, Stefano Casirati, Sunita Chandrasekaran, Jillian M. Deines, Rafaela Flach, Matthew C. Hansen, Sarah Hartman, Esteban Jobbagy, Ahmad Khan, Vasavi Kurapati, Tyler Lark, Jack Marquez, Holly Michael, Catherine Nakalembe, Kin Hong NG, Kin Wai NG, Soheil Nozari, Peter Potapov, Lorenzo Rosa, Stefan Siebert, Ryan Smith, Michela Taufer, Kyle Frankel Davis
- **Year:** 2026

## Paper overview

This paper presents GMIA-NEXT, a new global map of irrigated areas at 30-meter resolution for the 2023/24 growing season. Using machine learning and multi-source satellite and environmental data, the authors created a detailed and up-to-date map of irrigation worldwide. This map improves on previous datasets by offering finer spatial resolution, better accuracy, and open access to data and code, enabling better monitoring and management of agricultural water use.

### Why it matters

**Research problem:** Existing global irrigation datasets suffer from coarse spatial resolution, outdated data, limited temporal coverage, and lack of open access, which restrict their usefulness for detailed, real-time irrigation monitoring and management.

**Why it matters:** Irrigation is critical for global food production, climate adaptation, and water resource management. Accurate, fine-scale irrigation data are essential to support food security, sustainable water use, and policy decisions, especially given the growing global population and increasing water scarcity.

**Key contributions:**

- Development of a comprehensive, georeferenced global ground-truth dataset with over 380,000 labeled points.
- Creation of a medium-resolution (30 m) global irrigation map for the 2023/24 growing season.
- Integration of multi-source satellite imagery, environmental predictors, and agroecological zones in a machine learning framework.
- Implementation of two modeling frameworks (AEZ tile-based and continental-scale) to optimize classification accuracy.
- Open access to all code, ground-truth data, and resulting irrigation maps following FAIR principles.

## About the professor

**Michela Taufer** — Mathworks Professor, University of Tennessee.

Research interests: High Performance Computing, Scientific Applications And Their Programmability On Multi-Core And Many-Core Platforms, Numerical Reproducibility And Stability Of Multithreaded Applications, Performance Analysis, Modeling, And Optimization Of Multi-Scale Applications, Cloud Computing And Volunteer Computing, Big Data Analytics And MapReduce

### Research links

- [Faculty/profile page](https://eecs.utk.edu/people/michela-taufer)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Machine Learning for Remote Sensing
**The paper assumes:** machine learning classification algorithms, remote sensing data analysis, spatial data modeling
**Already in this field?** Skip this entirely if you already understand supervised machine learning methods applied to satellite imagery and spatial environmental datasets.

This background focuses on machine learning methods applied to remote sensing data, specifically for classifying irrigated versus non-irrigated cropland pixels as in the GMIA-NEXT paper. The rigorous course provides a structured, university-level deep dive into remote sensing and GIS with practical machine learning applications, while the fast track offers a concise, visual introduction to remote sensing concepts and machine learning relevant to mineral exploration that shares key techniques and data types. Choose the course for comprehensive understanding and the fast track for a quick, intuitive grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Agriculture Precision](https://www.youtube.com/playlist?list=PLmk0fUBXB9t2QcIawoP6Ys8NQMMWW54Eg) — Study Hacks-Institute of GIS & Remote Sensing · 39 videos · 25.3h across 39 episodes

**Watch only this:** Episodes 1 (What is crop yield forecasting?), 2 (Crop Yield Estimation Using Satellite Remote Sensing), 6 (Crop health Monitoring using Machine learning), and 7 (Crop Yield Prediction Using Machine Learning) — about 2.5 hours total. These provide essential background on remote sensing data, machine learning classification, and agricultural applications.

*Why it unblocks this paper:* This Agriculture Precision playlist covers satellite remote sensing, GIS, and machine learning techniques applied to agriculture, closely matching the paper's focus on irrigation mapping using multi-source satellite data and classification models.

*If you want all of it:* All 39 episodes, totaling about 25.3 hours, for a comprehensive understanding of precision agriculture, remote sensing, and machine learning.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Minerals Exploration using Remote sensing](https://www.youtube.com/playlist?list=PLmk0fUBXB9t0pxkVhj5YUTPeVmXg6oCOH) — Study Hacks-Institute of GIS & Remote Sensing · 18 videos · 4.5h across 18 episodes

**Watch only this:** Episodes 3 (What is Remote Sensing? | Understanding Remote Sensing (Beginner Guide)), 2 (Multispectral vs. Hyperspectral Remote Sensing — Which Is More Effective for Mineral Exploration?), and 5 (Mineral exploration through satellite remote sensing || How to identify potential gold mineral areas) — about 45 minutes total. These cover core remote sensing concepts and machine learning classification relevant to the paper.

*Why it unblocks this paper:* This Minerals Exploration using Remote sensing playlist offers concise, clear explanations of remote sensing fundamentals and machine learning applications with multispectral satellite data, which are directly relevant to understanding the data integration and classification methods in the paper.

*If you want all of it:* All 18 episodes, about 4.5 hours, for a broader overview of remote sensing and machine learning applications in mineral exploration.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the GMIA-NEXT paper, start by building foundational knowledge on the key data sources and modeling techniques used: satellite remote sensing for agriculture, agroecological zones mapping, and Random Forest classification. These prerequisites provide essential context on the input data, spatial frameworks, and machine learning methods. Finally, focus on the core concept by watching the authors' own talk presenting their novel global irrigation mapping approach, which directly explains the paper's methodology and contributions.

### Satellite remote sensing for agriculture seminar *(prerequisite)*
This section covers the use of satellite data, such as Landsat imagery, for agricultural monitoring. Understanding the capabilities and limitations of satellite remote sensing is critical since the paper integrates multi-source Earth observation data as input for irrigation classification.

*How the paper uses it:* The paper uses Landsat 8/9 satellite imagery as a primary data source for mapping irrigated areas globally.

▶ [Satellite Remote Sensing to Detect Cover Crop Performance: Case Study in Mississippi Alluvial Plain](https://www.youtube.com/watch?v=ZhtX-SbjmCg) — National Center for Alluvial Aquifer Research NCAAR · 57:15 · 3y ago

### Agroecological zones mapping lecture *(prerequisite)*
Agroecological zones provide spatial context that guides the modeling frameworks in the paper. Learning about these zones helps understand how the authors structured their classification models regionally to improve accuracy.

*How the paper uses it:* The paper employs an AEZ tile-based modeling framework to optimize irrigation classification accuracy across different ecological regions.

▶ [Agro-Ecological Zones of India | For PG JRF NET Ph.D, NABARD AFO FRO ACF and All Exams |  By Rao sir](https://www.youtube.com/watch?v=ORHkfsvOAYw) — Rao's Career Institute, Dehradun · 58:51 · Streamed 9mo ago

### Random Forest classification lecture *(prerequisite)*
Random Forest is the core machine learning algorithm used for classifying irrigated versus non-irrigated cropland pixels. A detailed lecture on Random Forest classification provides insight into the model's mechanics, strengths, and application in remote sensing.

*How the paper uses it:* The paper uses Random Forest classifiers as the main algorithm for irrigation mapping, outperforming other tested methods.

▶ [Land Use & Land Cover (LULC) Classification Using Random Forest Machine Learning in Earth Engine](https://www.youtube.com/watch?v=Z-DPRCWWaqg) — Study Hacks-Institute of GIS & Remote Sensing · 1:00:59 · 3y ago

### GMIA-NEXT irrigation mapping talk
This is the authors' own recorded talk explaining their novel approach to global irrigation mapping using machine learning and multi-source data. It offers direct insights into the methodology, data integration, validation, and open-access contributions of the GMIA-NEXT project.

*How the paper uses it:* This talk is given by the paper's authors and directly presents the GMIA-NEXT global irrigation mapping approach and results.

▶ [GCL Distinguished Speaker Talk - Endi Kebede](https://www.youtube.com/watch?v=9sVVX7BcWsg) — Global Computing Laboratory · 54:36 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the GMIA-NEXT paper, starting with satellite remote sensing for agriculture to grasp the data sources used. Next, it covers agroecological zones to understand spatial modeling context, followed by Random Forest classification as the core machine learning method. Finally, it concludes with a focused look at the paper's specific irrigation mapping approach to tie all concepts together.

### Satellite remote sensing for agriculture seminar *(prerequisite)*
Learn how satellites capture and provide data about agricultural land, including the types of sensors and imagery used to monitor crops and irrigation. This foundational knowledge helps you understand the input data sources like Landsat imagery used in the paper.

*How the paper uses it:* The paper uses multi-source Earth observation data, including Landsat 8/9 imagery, as key inputs for irrigation mapping.

▶ [Satellite Remote Sensing for Agricultural Applications || Agriculture Precision || Smart Farming](https://www.youtube.com/watch?v=f90QAEBU_Gg) — Study Hacks-Institute of GIS & Remote Sensing · 33:17 · 2y ago

### Agroecological zones mapping lecture *(prerequisite)*
Understand what agroecological zones are and how they classify regions based on climate, soil, and vegetation, which influence agricultural practices. This concept is important because spatial modeling frameworks in the paper use these zones to improve irrigation classification accuracy.

*How the paper uses it:* The paper employs agroecological zones to guide spatially stratified machine learning models for irrigation classification.

▶ [Agro-Ecological Zones of India | For PG JRF NET Ph.D, NABARD AFO FRO ACF and All Exams |  By Rao sir](https://www.youtube.com/watch?v=ORHkfsvOAYw) — Rao's Career Institute, Dehradun · 58:51 · Streamed 9mo ago

### Random Forest classification lecture *(prerequisite)*
Get a clear, visual explanation of the Random Forest machine learning algorithm, which builds many decision trees and aggregates their results for robust classification. This method is widely used in remote sensing for land cover classification due to its accuracy and interpretability.

*How the paper uses it:* Random Forest is the core machine learning model used in the paper to classify cropland pixels as irrigated or non-irrigated.

▶ [Visual Guide to Random Forests](https://www.youtube.com/watch?v=cIbj0WuK41w) — Econoscent · 5:12 · 6y ago

### GMIA-NEXT irrigation mapping talk
Hear directly from the authors about their novel approach to creating a high-resolution global irrigation map using machine learning and multi-source data. This talk provides context on the challenges, innovations, and validation of their method.

*How the paper uses it:* This talk presents the GMIA-NEXT project, explaining the integration of data and modeling frameworks for global irrigation mapping.

▶ [GCL Distinguished Speaker Talk - Endi Kebede](https://www.youtube.com/watch?v=9sVVX7BcWsg) — Global Computing Laboratory · 54:36 · 1y ago

## Already in your library

- [StatQuest: Random Forests Part 1 - Building, Using and Evaluating](https://www.youtube.com/watch?v=J4Wdy0Wc_xQ) — also for: Discovering Decision Manifolds to Assure Trusted Autonomous Systems (Bret Michael)
- [Random Forest Algorithm Clearly Explained!](https://www.youtube.com/watch?v=v6VJ2RO66Ag) — also for: KGML-xDTD: A Knowledge Graph-based Machine Learning Framework for Drug Treatment Prediction and Mechanism Description (David Koslicki)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the GMIA-NEXT paper. The beginner project focuses on reproducing a key visualization from the paper using publicly available satellite data and simple classification, suitable for a weekend. The intermediate project involves reimplementing the core Random Forest classification method on a smaller cropland dataset to produce an irrigation map and evaluate accuracy, introducing machine learning pipeline skills. The advanced project extends the method to address a stated limitation by integrating higher-resolution Sentinel-2 data to improve irrigation mapping accuracy for smallholder farms, involving data fusion and model adaptation over several weeks.

### Beginner — Visualize Irrigated vs Non-Irrigated Cropland Using Landsat Data
*Effort: a weekend (~8 hours)*

You build a simple script to classify a small agricultural region into irrigated and non-irrigated areas using a Random Forest classifier trained on a small labeled sample. Then you produce a map visualization comparing your classification to a baseline cropland mask. This reproduces a basic spatial classification and visualization similar to the paper's approach but on a small scale.

**Why it shows you understood the paper:** This project shows you understand the core classification task and how satellite imagery and environmental data are integrated to distinguish irrigation status, as well as how to visualize spatial results.

**Grounded in:** The paper's approach of using Random Forest classification on Landsat imagery and environmental predictors to map irrigated areas at 30 m resolution.

**Tech stack:** Python 3.11, scikit-learn, rasterio, matplotlib, numpy, pandas

**Data:** Use publicly available Landsat 8 surface reflectance imagery for a small agricultural region (e.g., a US county) and simulate a small labeled dataset by manually selecting sample points or using a public cropland dataset as proxy.

**Build it:**

1. Download Landsat 8 imagery for a small agricultural area from USGS Earth Explorer or Google Earth Engine.
2. Prepare a small labeled dataset of irrigated and non-irrigated points by manual annotation or proxy data.
3. Extract spectral bands and environmental features (e.g., elevation) at sample points.
4. Train a Random Forest classifier to distinguish irrigated vs non-irrigated samples.
5. Apply the classifier to the entire image to produce a classification map.
6. Visualize the classification map alongside the original imagery and cropland mask.

**Ships as:** A GitHub repo with scripts to train and apply the classifier, and a README showing the classification map and explanation of methods.

**Stretch goal:** Add simple post-processing (e.g., majority filtering) to improve spatial coherence of the classification map.

### Intermediate — Reimplement GMIA-NEXT Random Forest Irrigation Mapping on a Regional Dataset
*Effort: 1-3 weekends (~20 hours)*

You reimplement the core Random Forest classification framework described in the paper to map irrigated areas over a larger region using multi-source satellite and environmental data. You compare your results against a simple baseline (e.g., cropland mask alone) and report classification accuracy metrics similar to the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main machine learning method, handle heterogeneous geospatial data, and evaluate classification performance, reflecting a solid grasp of the paper's core contribution.

**Grounded in:** The paper's key contribution of integrating multi-source satellite imagery, environmental predictors, and Random Forest classification to produce a global irrigation map with ~80% accuracy.

**Tech stack:** Python 3.11, scikit-learn, rasterio, geopandas, numpy, pandas, matplotlib

**Data:** Use publicly available Landsat 8 imagery and environmental data (e.g., elevation, climate) for a selected agroecological zone or continent-scale region. Simulate or obtain a labeled ground-truth dataset from public cropland/irrigation datasets as proxy.

**Build it:**

1. Collect and preprocess Landsat 8 imagery and environmental variables for the chosen region.
2. Assemble a labeled dataset of irrigated and non-irrigated points from public sources or proxies.
3. Extract features from satellite bands and environmental variables at labeled points.
4. Train a Random Forest classifier using the assembled dataset.
5. Apply the classifier to classify all cropland pixels in the region as irrigated or non-irrigated.
6. Evaluate classification accuracy using held-out test samples and compare against a baseline method.
7. Visualize the resulting irrigation map and accuracy metrics.

**Ships as:** A GitHub repository with code to preprocess data, train and apply the classifier, evaluation scripts, and a README documenting methods, results, and comparison to baseline.

**Stretch goal:** Implement the AEZ tile-based modeling framework by dividing the region into agroecological zones and training separate models per zone.

### Advanced — Enhance Irrigation Mapping Accuracy for Smallholder Farms Using Sentinel-2 Data
*Effort: a few weeks (~40+ hours)*

You extend the GMIA-NEXT approach by integrating higher-resolution Sentinel-2 satellite data with Landsat and environmental predictors to improve irrigation mapping accuracy in regions with small, fragmented fields typical of smallholder agriculture. You adapt the Random Forest model to handle the fused data and evaluate improvements over the baseline 30 m Landsat-only approach.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to extend the method with new data sources, address spectral mixing challenges, and improve classification in complex agricultural landscapes.

**Grounded in:** The paper's stated limitation that 30 m Landsat resolution is insufficient for smallholder farms due to spectral mixing, and the future direction to incorporate Sentinel and Planet data for finer-scale irrigation monitoring.

**Tech stack:** Python 3.11, scikit-learn, rasterio, geopandas, numpy, pandas, matplotlib

**Data:** Use publicly available Sentinel-2 imagery (10 m resolution) combined with Landsat 8 imagery and environmental data for a smallholder farming region (e.g., parts of India or Africa). Use proxy ground-truth data from public datasets or simulated labels.

**Build it:**

1. Download and preprocess Sentinel-2 and Landsat 8 imagery for the target smallholder region.
2. Fuse Sentinel-2 and Landsat data to create a multi-resolution feature set per pixel.
3. Collect environmental variables and prepare labeled irrigated/non-irrigated samples.
4. Train a Random Forest classifier on the fused dataset.
5. Apply the model to classify irrigation status at higher spatial resolution.
6. Compare classification accuracy and spatial coherence against the Landsat-only baseline.
7. Document challenges, improvements, and potential next steps.

**Ships as:** A GitHub repo with code for data fusion, model training and evaluation, and a detailed README discussing methodology, results, and how this addresses the paper's limitation.

**Stretch goal:** Incorporate dynamic thresholding or temporal Sentinel-2 time series data to further improve classification accuracy and temporal relevance.

_No official code or ground-truth datasets were released by the paper's authors; all projects rely on publicly available satellite data and proxy or simulated labels._
