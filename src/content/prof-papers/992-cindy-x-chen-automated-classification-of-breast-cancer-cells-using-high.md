---
title: "992 · Automated Classification of Breast Cancer Cells Using High-Throughput Holographic Cytometry — Cindy X. Chen"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-cindy-x-chen"
source_hash: "b45f2136c57de713ccce3b059f24094985f885522620aef37186a793d3c86638"
sequence: 992
generator: "outreach-garden: managed"
---

# 992 · Automated Classification of Breast Cancer Cells Using High-Throughput Holographic Cytometry

## At a glance

- **Professor:** Cindy X. Chen
- **Institution:** University of Massachusetts Lowell
- **Paper:** [Automated Classification of Breast Cancer Cells Using High-Throughput Holographic Cytometry](https://www.frontiersin.org/articles/10.3389/fphy.2021.759142/pdf)
- **Authors:** Cindy X. Chen, Han Sang Park, Hillel Price, Adam Wax
- **Year:** 2021

## Paper overview

This study presents a high-throughput imaging system called holographic cytometry that captures detailed images of breast cells flowing through microfluidic channels. Using these images, the researchers developed machine learning models to distinguish between normal breast cells, breast cancer cells, and cells exposed to carcinogenic cadmium. The system can rapidly analyze thousands of cells and identify abnormal cells with high accuracy without the need for labeling or staining.

### Why it matters

**Research problem:** Current breast cancer diagnostic methods like fine-needle aspiration cytology (FNAC) combined with flow cytometry have limitations such as being time-consuming, costly, labor-intensive, and lacking sensitivity to certain abnormal cells. There is a need for a rapid, label-free, high-throughput method to identify early-stage cancer and precancerous cells based on morphological and biophysical phenotypes.

**Why it matters:** Breast cancer is one of the most diagnosed cancers worldwide and a leading cause of death due to metastasis. Early and accurate detection of cancerous and precancerous cells can improve prognosis and treatment outcomes. Existing methods have drawbacks that limit their effectiveness, so developing a sensitive, rapid, and label-free diagnostic tool could significantly impact cancer screening and environmental monitoring.

**Key contributions:**

- Development and application of a high-throughput holographic cytometry system capable of imaging up to 148 cells per second with 1μm resolution.
- Demonstration that cadmium-treated breast epithelial cells exhibit morphological changes intermediate between normal and cancer cells.
- Extraction of 25 morphological parameters per cell and identification of four key parameters (area, optical volume, major axis length, mean phase) that significantly differentiate cell types.
- Use of logistic regression and CNN models to classify normal, cadmium-treated, and cancerous breast cells with high accuracy.
- Evidence that label-free QPI combined with machine learning can serve as a diagnostic tool for early-stage cancer detection.

## About the professor

**Cindy X. Chen** — Head & Associate Professor, Richard Miner School Computer and Information Sciences, University of Massachusetts Lowell.

Research interests: Spatio-Temporal Databases, Data Mining, Cloud Computing and Big Data, etc.

### Research links

- [Faculty/profile page](http://www.cs.uml.edu/~cchen)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** machine learning for biomedical imaging
**The paper assumes:** machine learning algorithms, biomedical image analysis, supervised classification models
**Already in this field?** Skip this entirely if you already understand machine learning methods applied to biomedical imaging data, including logistic regression and CNNs.

This background focuses on machine learning techniques applied to biomedical imaging, essential for understanding how the paper classifies breast cancer cells using holographic cytometry images. The rigorous course provides a structured, university-level introduction to biomedical image processing concepts and techniques, while the fast track offers a concise, focused introduction to state-of-the-art machine learning methods in biomedical image analysis. Choose the course for a deeper foundational understanding; choose the fast track for a quicker, modern overview emphasizing machine learning applications.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Biomedical Image Processing Lecture Series-II](https://www.youtube.com/playlist?list=PLbxubM21fyTcColy25pY9fB5KxVHAoJeh) — Karthika A · 10 videos · 1.5h across 10 episodes

**Watch only this:** Episodes 1-6, about 54 minutes — covering medical imaging modalities, noise filtering, segmentation, and a case study on clinical data integration relevant to cancer detection.

*Why it unblocks this paper:* This university lecture series by Karthika A covers biomedical image processing techniques including image enhancement, segmentation, and feature extraction, which are foundational to understanding the preprocessing and morphological parameter extraction used in the paper's classification models.

*If you want all of it:* 1.5 hours across 10 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [PHAROS Training Series - Course 6 "Vision Representation Learning and Generative Models in Biomedicine" - 16.04.26](https://www.youtube.com/playlist?list=PLVLmmIe3oqJoeMzWwjz5tqHqoTspAWuMC) — PHAROS AI Factory Project · 7 videos · 1.7h across 7 episodes

**Watch only this:** Episodes 1-4, about 56 minutes — covering introduction, vision representation learning, and generative models in biomedicine.

*Why it unblocks this paper:* This PHAROS AI Factory Project series provides a concise introduction to modern machine learning techniques for biomedical images, including deep neural networks for classification and representation learning, directly relevant to the CNN and logistic regression approaches used in the paper.

*If you want all of it:* 1.7 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on automated classification of breast cancer cells using high-throughput holographic cytometry, start by building foundational knowledge in microfluidic cell sorting and machine learning classification of biomedical images, as these underpin the experimental setup and computational analysis. Then, study the specific machine learning models (logistic regression and CNN) applied for cell classification. Finally, focus on the core imaging technique of quantitative phase imaging and holographic cytometry, culminating with the authors' own talk or closest related expert talks to grasp the novel contributions and context of the research.

### Microfluidic cell sorting *(prerequisite)*
Microfluidic cell sorting enables controlled flow and precise handling of cells for high-throughput imaging and analysis, which is critical for the paper's experimental design involving imaging cells flowing through microfluidic channels. Understanding this technology provides insight into how the authors achieve rapid and label-free cell imaging.

*How the paper uses it:* The paper uses microfluidic channels to flow breast cells for holographic imaging and classification.

▶ [Microfluidic Label-free sorting Technologies for Applications in Medicine... Presented by Prof. U…](https://www.youtube.com/watch?v=cQFp8YhCdms) — Terasaki Institute · 40:49 · Streamed 3y ago

### Machine learning classification biomedical images *(prerequisite)*
Machine learning classification techniques are core to distinguishing cell types based on imaging data. This section covers advanced applications of deep learning and machine learning in medical imaging, providing context for the CNN and logistic regression models used in the paper.

*How the paper uses it:* The authors apply logistic regression and CNN models to classify breast cell images based on morphological features.

▶ [Deep learning for medical imaging applications](https://www.youtube.com/watch?v=M1lgXr4Xcns) — Australian Data Science Network · 58:49 · 4y ago

### Logistic regression and CNN in cell classification *(prerequisite)*
This section focuses specifically on the logistic regression and convolutional neural network models used for classification tasks, explaining their mathematical foundations and application in biomedical contexts. This knowledge is essential to understand the paper's modeling approach and performance results.

*How the paper uses it:* The paper uses logistic regression and CNN to classify normal, cadmium-treated, and cancerous breast cells.

▶ [Locally Weighted & Logistic Regression | Stanford CS229: Machine Learning - Lecture 3 (Autumn 2018)](https://www.youtube.com/watch?v=het9HFqo1TQ) — Stanford Online · 1:19:34 · 6y ago

### Quantitative phase imaging
Quantitative phase imaging (QPI) is the central imaging technique enabling label-free, high-resolution morphological profiling of cells. This section provides an in-depth understanding of QPI principles and applications, which is crucial for grasping how the holographic cytometry system captures detailed cell images without staining.

*How the paper uses it:* The holographic cytometry system used in the paper is an ultra-high throughput QPI technique for imaging breast cells.

▶ [Colloquium: Laura Waller](https://www.youtube.com/watch?v=_AjgyY94nDY) — UA OSC · 57:37 · 9y ago

### Holographic cytometry
Holographic cytometry is the specific high-throughput imaging method used in the paper to capture cell morphology in flow. This section covers advanced research talks on holographic microscopy and flow cytometry techniques, providing detailed insights into the technology's capabilities and implementation.

*How the paper uses it:* The paper's key contribution is the development and application of a high-throughput holographic cytometry system for breast cell imaging.

▶ [Pietro Ferraro: Harnessing Label-Free Flow Cyto-Tomography for Advanced Suspended Cell Analysis](https://www.youtube.com/watch?v=13tLx2-Zf_c) — EPFL Center for Imaging · 56:02 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced learning path introduces foundational concepts needed to understand the paper's approach to automated breast cancer cell classification. We start with microfluidic cell sorting to understand how cells are prepared and flowed for imaging, then cover machine learning classification basics, followed by logistic regression and CNN models used for classification. Next, we explore quantitative phase imaging, the label-free imaging technique central to the paper, and finally focus on holographic cytometry, the specific high-throughput imaging method used to capture cell morphology for classification.

### Microfluidic cell sorting *(prerequisite)*
Microfluidic cell sorting uses tiny channels to precisely control and flow cells for analysis, enabling high-throughput and gentle handling of cells. This technology is crucial for preparing cells in a controlled manner for imaging and downstream analysis.

*How the paper uses it:* The paper uses microfluidic channels to flow breast cells through the holographic cytometry system for imaging.

▶ [Microfluidic Label-free sorting Technologies for Applications in Medicine... Presented by Prof. U…](https://www.youtube.com/watch?v=cQFp8YhCdms) — Terasaki Institute · 40:49 · Streamed 3y ago

### Machine learning classification biomedical images *(prerequisite)*
Machine learning classification involves training algorithms to recognize patterns in biomedical images to distinguish different cell types or disease states. Understanding this helps grasp how computational models can automate diagnosis from imaging data.

*How the paper uses it:* The study applies machine learning models to classify breast cells based on their morphological images.

▶ [Deep learning for medical imaging applications](https://www.youtube.com/watch?v=M1lgXr4Xcns) — Australian Data Science Network · 58:49 · 4y ago

### Logistic regression and CNN in cell classification *(prerequisite)*
Logistic regression is a simple yet powerful model for binary classification, while convolutional neural networks (CNNs) are advanced deep learning models that excel at image classification by automatically learning features. Both are used to classify cell types from imaging data.

*How the paper uses it:* The authors use logistic regression and CNN models to classify normal, cadmium-treated, and cancerous breast cells.

▶ [Logistic Regression \[Simply explained\]](https://www.youtube.com/watch?v=C5268D9t9Ak) — numiqo · 14:22 · 3y ago

### Quantitative phase imaging
Quantitative phase imaging (QPI) is a label-free microscopy technique that measures optical phase shifts caused by cells, revealing detailed morphological and biophysical properties without staining. It enables non-invasive, high-contrast imaging of live cells.

*How the paper uses it:* The paper uses QPI via holographic cytometry to capture detailed, label-free images of breast cells for classification.

▶ [Webinar: Unlocking Cell Secrets with QPI](https://www.youtube.com/watch?v=legumOMBcPU) — TELIGHT Co. · 23:09 · 2y ago

### Holographic cytometry
Holographic cytometry combines holographic imaging with flow cytometry principles to capture high-throughput, label-free quantitative phase images of cells flowing through microfluidic channels. It enables rapid morphological profiling of thousands of cells.

*How the paper uses it:* This is the core imaging method developed and applied in the paper to classify breast cancer and treated cells.

▶ [Pietro Ferraro: Harnessing Label-Free Flow Cyto-Tomography for Advanced Suspended Cell Analysis](https://www.youtube.com/watch?v=13tLx2-Zf_c) — EPFL Center for Imaging · 56:02 · 1y ago

## Already in your library

- [Label-Free Quantitative Phase Imaging of Live Cells and Tissue](https://www.youtube.com/watch?v=JBg42wO-2uc) — also for: Intravital imaging by simultaneous label-free autofluorescence-multiharmonic microscopy (Saurabh Sinha)
- [StatQuest: Logistic Regression](https://www.youtube.com/watch?v=yIYKR4sgzI8) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's core contributions in automated classification of breast cancer cells using holographic cytometry. The beginner project focuses on reproducing a key morphological parameter analysis from the paper using logistic regression. The intermediate project implements the core classification method with logistic regression and CNN on a simulated dataset mimicking the paper's cell types. The advanced project extends the method by exploring the paper's future direction of integrating additional features such as cell stiffness or fluorescence markers to improve classification robustness on heterogeneous data.

### Beginner — Morphological Parameter Analysis and Logistic Regression Classification
*Effort: a weekend, ~8 hours*

You build a small Python project that extracts four key morphological parameters (area, optical volume, major axis length, mean phase) from a provided set of cell images or simulated data. Then you implement logistic regression to classify normal versus cancerous breast cells based on these parameters, reproducing the paper's reported accuracy range using only these features.

**Why it shows you understood the paper:** This project shows you understand the importance of morphological features in cell classification and how logistic regression can be applied to phenotype profiles, directly reflecting the paper's key contribution of identifying four key parameters and achieving high accuracy with them.

**Grounded in:** Extraction of 25 morphological parameters per cell and identification of four key parameters (area, optical volume, major axis length, mean phase) that significantly differentiate cell types; logistic regression using only four key morphological parameters achieved accuracies around 89-95%.

**Tech stack:** Python 3.11, scikit-learn, numpy, matplotlib, pandas

**Data:** Simulated or publicly available breast cell morphological parameter data approximating the paper's four key parameters, since the authors released no dataset.

**Build it:**

1. Simulate or generate a small dataset of cell morphological parameters mimicking normal and cancerous breast cells with four features: area, optical volume, major axis length, mean phase.
2. Implement exploratory data analysis and visualize parameter distributions to identify separability.
3. Train a logistic regression classifier on the dataset to distinguish normal vs cancer cells.
4. Evaluate classification accuracy and compare results to the paper's reported 89-95% accuracy range.
5. Write a README explaining the parameter significance and classification results.

**Ships as:** A GitHub repo with code for parameter extraction (or simulation), logistic regression classification, visualizations, and a README discussing the results and their relation to the paper.

**Stretch goal:** Add a simple web-based visualization dashboard using Streamlit or Flask to interactively explore parameter distributions and classification results.

### Intermediate — Reimplementation of Cell Classification with Logistic Regression and CNN
*Effort: 2 weekends, ~20 hours*

You implement the core classification pipeline described in the paper: extracting morphological parameters from quantitative phase images and training both logistic regression and a convolutional neural network (CNN) to classify normal, cadmium-treated, and cancerous breast cells. Since no dataset is provided, you simulate or use a substitute public dataset with similar characteristics. You compare logistic regression and CNN performance and report accuracy metrics as in the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method of combining label-free quantitative phase imaging features with machine learning models, including CNNs, to classify breast cell types with high accuracy, reflecting the paper's main experimental approach and results.

**Grounded in:** Use of logistic regression and CNN models to classify normal, cadmium-treated, and cancerous breast cells with high accuracy; CNN classification of raw phase images yielded accuracies between 95.1% and 99.4%.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scikit-learn, numpy, matplotlib, pandas

**Data:** Simulated quantitative phase images or a publicly available cell image dataset with morphological features approximating normal, cadmium-treated, and cancerous breast cells, as the authors released no dataset.

**Build it:**

1. Simulate or obtain a substitute dataset of quantitative phase images or morphological features representing the three cell types.
2. Extract or preprocess morphological parameters from images if applicable.
3. Implement logistic regression classification using all or selected morphological parameters.
4. Design and train a CNN on raw or preprocessed phase images for the same classification task.
5. Evaluate and compare classification accuracies of logistic regression and CNN models.
6. Document the pipeline, results, and comparison in a detailed README.

**Ships as:** A GitHub repo containing code for data simulation/preprocessing, logistic regression and CNN training, evaluation scripts, and a README comparing model performances and relating them to the paper's findings.

**Stretch goal:** Incorporate data augmentation techniques to improve CNN robustness and analyze their effect on classification accuracy.

### Advanced — Extending Holographic Cytometry Classification with Additional Biophysical Features
*Effort: 3+ weeks*

You develop an extended classification system that integrates additional biophysical features such as simulated cell stiffness or fluorescence marker proxies alongside morphological parameters to improve classification robustness on heterogeneous cell populations. This addresses the paper's limitation of focusing solely on morphology and phase imaging. You implement multi-modal feature fusion in machine learning models and evaluate improvements over morphology-only baselines.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by exploring integration of complementary biophysical features to enhance diagnostic capability, demonstrating deep comprehension of the paper's scope and potential extensions.

**Grounded in:** The system currently focuses on morphological parameters and phase imaging without integrating biochemical markers or stiffness measurements; future directions include incorporating additional features such as fluorescence markers and cell stiffness measurements to enhance diagnostic capability.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scikit-learn, numpy, matplotlib, pandas

**Data:** Simulated multi-modal dataset combining morphological parameters with synthetic stiffness or fluorescence-like features, as no real multi-modal dataset is available from the paper.

**Build it:**

1. Design a synthetic dataset that includes morphological parameters plus additional biophysical features such as simulated stiffness or fluorescence intensity.
2. Implement feature fusion techniques to combine multi-modal data for classification.
3. Train machine learning models (logistic regression, random forest, or neural networks) on the combined feature set.
4. Compare classification performance against morphology-only models to assess improvement.
5. Analyze feature importance and discuss implications for diagnostic robustness.
6. Prepare a comprehensive README documenting methodology, results, and relation to the paper's limitations and future directions.

**Ships as:** A GitHub repo with code for multi-modal data simulation, feature fusion, classification models, evaluation scripts, and a detailed README discussing the extension and its significance relative to the paper.

**Stretch goal:** Explore transfer learning by applying the extended model to a different biomedical cell classification task to test generalizability.

_The paper's authors did not release code or datasets; all projects require simulating or substituting data approximating the paper's cell morphological and phase imaging features._
