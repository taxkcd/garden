---
title: "230 · Data Augmentation Approaches for Satellite Imagery — Rebecca A. Hutchinson"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rebecca-a-hutchinson"
source_hash: "3c108a77086a993915143f408d4aa1c5d0a331b40a8a4b75919451b94d5017f0"
sequence: 230
generator: "outreach-garden: managed"
---

# 230 · Data Augmentation Approaches for Satellite Imagery

## At a glance

- **Professor:** Rebecca A. Hutchinson
- **Institution:** Oregon State University
- **Paper:** [Data Augmentation Approaches for Satellite Imagery](https://doi.org/10.1609/aaai.v39i27.35028)
- **Authors:** Laurel M. Hopkins, Weng-Keen Wong, Hannah Kerner, Fuxin Li, Rebecca A. Hutchinson
- **Year:** 2025

## Paper overview

This paper studies how data augmentation techniques, commonly used in natural image analysis, perform on satellite imagery tasks. It finds that many natural image augmentations, especially color-based ones, do not transfer well to satellite images. The authors propose three new satellite-specific augmentation methods—Sat-CutMix, Sat-SlideMix, and Sat-Trivial—that consistently improve model performance across multiple classification and regression tasks on satellite data.

### Why it matters

**Research problem:** Satellite imagery datasets often lack sufficient annotated labels for training deep learning models. While data augmentation is a common technique to increase training data diversity in natural images, it is unclear which augmentation methods are suitable for satellite imagery given its unique spectral and spatial characteristics.

**Why it matters:** Satellite imagery is critical for many societal applications such as biodiversity monitoring, crop mapping, water quality assessment, and socioeconomic indicator estimation. Improving machine learning performance on satellite data with limited labels can enhance these applications and enable better Earth monitoring.

**Key contributions:**

- Comprehensive evaluation showing that geometric augmentations benefit satellite imagery tasks, while color augmentations generally degrade performance.
- Proposal of three novel satellite-specific data augmentation methods: Sat-CutMix (non-label-preserving mixing), Sat-SlideMix (label-preserving image rolling), and Sat-Trivial (satellite-specific automated augmentations).
- Demonstration that the proposed methods outperform existing natural image augmentation techniques across diverse satellite imagery tasks and datasets.

## About the professor

**Rebecca A. Hutchinson** — Associate Professor, School of Electrical Engineering and Computer Science, Department of Fisheries, Wildlife, and Conservation Sciences, Oregon State University.

Research interests: My research is at the intersection of machine learning and ecology. I am part of the computational sustainability community, trying to find ways that computer science can contribute to promoting the health of the Earth’s ecosystems and bringing interesting new problems back to computer science. Much of my work is on computational methods for species distribution modeling, a problem in which data describing sightings of a species are combined with environmental variables to produce habitat models. I work with hierarchical latent variable models that represent both ecological and observation processes; for example, occupancy models and their variants fall within this paradigm. My current research is on robust parameter estimation methods for these models and techniques for incorporating semi-parametric techniques into probabilistic models. I am also interested in methods for analyzing species interaction networks and strategies for evaluating species distribution models.

### Research links

- [Faculty/profile page](http://web.engr.oregonstate.edu/~rah)
- [Resolved homepage](https://web.engr.oregonstate.edu/~rah)
- [Google Scholar](https://scholar.google.com/citations?user=1pnbx9QAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on satellite-specific data augmentation methods, start with foundational knowledge on deep learning applications in remote sensing to grasp the domain context. Next, learn about general image augmentation techniques and the distinction between geometric and color augmentations, which are critical insights in the paper. Then, study mix-based augmentation methods to understand the core mechanisms behind Sat-CutMix and Sat-SlideMix. Finally, focus on the paper-specific satellite imagery augmentation approaches, prioritizing the authors' own talks and advanced academic presentations.

### Deep learning for remote sensing *(prerequisite)*
This section provides foundational understanding of how deep learning models are applied to satellite and remote sensing data, which is essential to appreciate the challenges and opportunities in satellite imagery analysis. It covers domain-specific considerations and state-of-the-art techniques in remote sensing AI.

*How the paper uses it:* Understanding deep learning applications in remote sensing sets the stage for appreciating the need for satellite-specific augmentation methods.

▶ [EDS Seminar Series 9/27/22 - Deep Learning Applications ...](https://www.youtube.com/watch?v=AyFdgWek-v4) — Earth Lab CU Boulder · 59:48

### Image augmentation techniques *(prerequisite)*
This section covers general image augmentation methods used in computer vision, including geometric and photometric transformations. It provides the baseline knowledge needed to compare and contrast with satellite-specific augmentations proposed in the paper.

*How the paper uses it:* General image augmentation techniques form the baseline against which the paper evaluates and improves satellite-specific methods.

▶ [[Open DMQA Seminar] Image Augmentation - Adversarial ...](https://www.youtube.com/watch?v=ItBSS3_zFQU) — ‍김성범[ 교수 / 산업경영공학부 ] · 37:16

### Geometric vs color augmentations *(prerequisite)*
This section focuses on the key insight that geometric augmentations tend to improve satellite imagery model performance, while color augmentations often degrade it. Understanding this distinction is crucial to grasp the paper's experimental findings and motivation for new methods.

*How the paper uses it:* The paper demonstrates that geometric augmentations outperform color augmentations for satellite imagery, a critical empirical finding.

▶ [Lecture 06: Image Enhancement in Spatial Domain (Geometric Operations)](https://www.youtube.com/watch?v=1kAsnlIcu5I) — MEI Lab · 21:13 · 6 years ago

### Mix-based augmentation methods *(prerequisite)*
This section explains mixed sample data augmentation strategies like MixUp and CutMix, which are foundational to the paper's proposed Sat-CutMix and Sat-SlideMix methods. Understanding these techniques helps in comprehending the novel satellite-specific adaptations.

*How the paper uses it:* Sat-CutMix and Sat-SlideMix build on mix-based augmentation concepts, making this background essential.

▶ [Cutmix Data augmentation with TensorFlow 2 and intergration in tf.data - Full Stack Deep Learning.](https://www.youtube.com/watch?v=lc8VKxdEbSs) — Neuralearn · 41:56 · 4 years ago

### Data augmentation for satellite imagery
This section directly addresses data augmentation techniques tailored for satellite imagery, providing context on preprocessing and augmentation challenges unique to satellite data. It bridges general augmentation knowledge with domain-specific applications.

*How the paper uses it:* The paper focuses on evaluating and proposing augmentation methods specifically for satellite imagery tasks.

▶ [Preprocessing Real Sentinel-2 Imagery for Deep Learning ...](https://www.youtube.com/watch?v=NTj4WAc187A) — Dr. Azad Rasul · 18:01

### Paper-specific author talk
This section features talks by the paper's authors or closely related presentations that discuss their novel satellite-specific augmentation methods. These talks provide the most direct and detailed insights into the paper's contributions and experimental results.

*How the paper uses it:* The authors' own presentations offer the most precise exposition of their novel augmentation methods and findings.

▶ [Introduction to Satellite Image Augmentation with Generative ...](https://www.youtube.com/watch?v=x0Le0IJO9N8) — Geoawesome · 24:47

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in deep learning for remote sensing and image augmentation, focusing on the unique challenges of satellite imagery. Starting with deep learning basics for satellite data, it then covers general image augmentation techniques, the distinction between geometric and color augmentations, and mix-based augmentation methods. Finally, it culminates with satellite-specific data augmentation approaches central to the paper's contributions.

### Deep learning for remote sensing *(prerequisite)*
Learn how deep learning models are applied to satellite and remote sensing data, including the challenges and typical workflows. This foundation helps understand why specialized augmentations might be needed for satellite imagery.

*How the paper uses it:* The paper fine-tunes ResNet18 models on satellite datasets, so understanding deep learning in remote sensing is essential.

▶ [Classifying Land Cover with Deep Learning: Sentinel-2 ...](https://www.youtube.com/watch?v=8gn-Sg9GzoM) — Dr. Azad Rasul · 13:49

### Image augmentation techniques *(prerequisite)*
Understand general image augmentation methods used in computer vision, such as flipping, rotation, cropping, and color adjustments. These techniques artificially expand datasets and improve model robustness.

*How the paper uses it:* The paper compares natural image augmentation methods with satellite-specific ones to evaluate their effectiveness.

▶ [https://www.youtube.com › watch?v=1HlnucQG3FE](https://www.youtube.com/watch?v=1HlnucQG3FE) — YouTube result via DuckDuckGo

### Geometric vs color augmentations *(prerequisite)*
Distinguish between geometric augmentations (like rotation and flipping) that change image structure, and color augmentations that alter pixel values. This distinction is key because the paper finds geometric augmentations help satellite imagery tasks, while color augmentations often hurt performance.

*How the paper uses it:* The paper shows geometric augmentations consistently improve satellite model performance, whereas color augmentations generally degrade it.

▶ [Lecture 06: Image Enhancement in Spatial Domain (Geometric Operations)](https://www.youtube.com/watch?v=1kAsnlIcu5I) — MEI Lab · 21:13 · 6 years ago

### Mix-based augmentation methods *(prerequisite)*
Explore augmentation methods that mix two or more images or samples, such as MixUp and CutMix, which create new training examples by combining images and labels. These methods help regularize models and improve generalization.

*How the paper uses it:* The paper proposes Sat-CutMix and Sat-SlideMix, satellite-specific mix-based augmentations inspired by these techniques.

▶ [Cutmix Data augmentation with TensorFlow 2 and intergration in tf.data - Full Stack Deep Learning.](https://www.youtube.com/watch?v=lc8VKxdEbSs) — Neuralearn · 41:56 · 4 years ago

### Data augmentation for satellite imagery
Focus on augmentation techniques tailored specifically for satellite images, considering their unique spectral and spatial properties. This includes preprocessing and augmentation strategies that improve model performance on satellite data.

*How the paper uses it:* The paper evaluates existing natural image augmentations and introduces three novel satellite-specific augmentation methods that outperform prior approaches.

▶ [Preprocessing Real Sentinel-2 Imagery for Deep Learning ...](https://www.youtube.com/watch?v=NTj4WAc187A) — Dr. Azad Rasul · 18:01

### Paper-specific author talk *(the paper's own talk)*
Gain direct insights from experts on their novel satellite-specific augmentation methods and the motivation behind them. This talk contextualizes the paper's contributions within real-world satellite imagery applications.

*How the paper uses it:* This talk discusses the application of deep learning on satellite imagery and the new augmentation methods proposed in the paper.

▶ [Using deep learning on Satellite imagery to get a business edge](https://www.youtube.com/watch?v=E7b54Ja6cFk) — R Consortium · 8 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of satellite-specific data augmentation methods introduced in the paper. The beginner project reproduces a simple geometric augmentation effect on satellite imagery classification using familiar tools. The intermediate project implements and compares one of the paper's novel augmentations (Sat-SlideMix) on a public satellite dataset, showing quantitative performance gains. The advanced project extends the paper's methods to a new satellite image analysis task (segmentation) and explores augmentation for multispectral data, addressing stated limitations and future directions.

### Beginner — Geometric Augmentation Effects on Satellite Image Classification
*Effort: a weekend, ~8 hours*

You build a small image classification pipeline using a pretrained ResNet18 model fine-tuned on a publicly available satellite image dataset (e.g., EuroSAT RGB subset). You implement basic geometric augmentations (flip, rotate, translate) and compare model performance with and without these augmentations.

**Why it shows you understood the paper:** This project shows you understand the paper's key finding that geometric augmentations improve satellite imagery model performance, and you can reproduce this effect using standard tools and datasets.

**Grounded in:** Our results indicate that geometric augmentations consistently outperform color augmentations.

**Tech stack:** Python 3.11, PyTorch, torchvision, Jupyter Notebook

**Data:** EuroSAT RGB subset, a well-known public satellite image classification dataset used as a substitute for the paper's datasets.

**Build it:**

1. Set up a PyTorch training pipeline with a pretrained ResNet18 model.
2. Load the EuroSAT RGB dataset and split into train/validation sets.
3. Implement geometric augmentations: horizontal flip, random rotation, and translation using torchvision transforms.
4. Train the model with and without these augmentations and record validation accuracy.
5. Plot and compare the results to demonstrate augmentation impact.

**Ships as:** A GitHub repo with code and a README showing training scripts, augmentation implementations, and a comparison plot of model accuracy with/without geometric augmentations.

**Stretch goal:** Add shear augmentation and observe its effect, noting any performance degradation as reported in the paper.

### Intermediate — Implementing Sat-SlideMix Augmentation for Satellite Elevation Regression
*Effort: 1-3 weekends, ~20 hours*

You reimplement the Sat-SlideMix augmentation method described in the paper and apply it to a satellite image regression task, such as elevation prediction, using a public satellite dataset with elevation labels (e.g., the USGS National Map or a similar open dataset). You compare model performance against a baseline with no augmentation and a baseline with standard CutMix augmentation.

**Why it shows you understood the paper:** This project demonstrates your ability to implement a novel satellite-specific augmentation from the paper and quantitatively validate its superior performance on a regression task, reflecting core contributions of the paper.

**Grounded in:** Sat-SlideMix was the best performing augmentation method overall, significantly outperforming others on the elevation regression task.

**Tech stack:** Python 3.11, PyTorch, torchvision, Jupyter Notebook, numpy, matplotlib

**Data:** A public satellite dataset with elevation labels (e.g., USGS National Map elevation tiles or a similar open dataset) used as a substitute for the paper's elevation regression datasets.

**Build it:**

1. Implement the Sat-SlideMix augmentation: rolling image patches horizontally or vertically while preserving labels.
2. Set up a regression training pipeline with a pretrained ResNet18 backbone.
3. Prepare the satellite dataset with elevation labels and split into train/validation sets.
4. Train three models: baseline (no augmentation), with CutMix augmentation, and with Sat-SlideMix augmentation.
5. Evaluate and compare regression metrics (e.g., RMSE) across models.
6. Document results and discuss how Sat-SlideMix improves performance.

**Ships as:** A GitHub repo with code implementing Sat-SlideMix, training scripts, evaluation metrics, and a README reporting quantitative comparisons and insights.

**Stretch goal:** Extend Sat-SlideMix to multi-channel satellite images (e.g., multispectral bands) and analyze performance changes.

### Advanced — Extending Satellite-Specific Augmentations to Multispectral Segmentation Tasks
*Effort: a few weeks, ~40+ hours*

You develop an extension of the paper's satellite-specific augmentations (Sat-CutMix, Sat-SlideMix, Sat-Trivial) tailored for multispectral satellite image segmentation tasks. Using a publicly available multispectral segmentation dataset (e.g., DeepGlobe Land Cover or a similar open dataset), you adapt augmentations to handle multiple spectral bands and evaluate their impact on segmentation model performance (e.g., using a U-Net architecture).

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by applying and adapting satellite-specific augmentations beyond classification/regression to segmentation and multispectral data, demonstrating deep comprehension and research potential.

**Grounded in:** The proposed methods were evaluated on classification and regression tasks but not on segmentation or other satellite image analysis tasks. Developing augmentation techniques that better handle multi- and hyperspectral satellite images with many spectral bands.

**Tech stack:** Python 3.11, PyTorch, torchvision, segmentation_models_pytorch, Jupyter Notebook, numpy, matplotlib

**Data:** A public multispectral satellite image segmentation dataset such as DeepGlobe Land Cover dataset or a similar open-source dataset used as a substitute for the paper's datasets.

**Build it:**

1. Adapt Sat-CutMix, Sat-SlideMix, and Sat-Trivial augmentations to support multispectral images with multiple spectral bands.
2. Set up a segmentation training pipeline using a U-Net or similar architecture pretrained on ImageNet.
3. Prepare the multispectral segmentation dataset and split into train/validation sets.
4. Train segmentation models with no augmentation, standard augmentations, and the adapted satellite-specific augmentations.
5. Evaluate segmentation metrics (e.g., IoU, Dice coefficient) and compare performance.
6. Analyze how satellite-specific augmentations affect segmentation quality and multispectral data handling.
7. Document challenges, solutions, and potential improvements for future work.

**Ships as:** A GitHub repo with code for multispectral augmentation implementations, segmentation training scripts, evaluation results, and a detailed README discussing findings and future directions.

**Stretch goal:** Investigate integration of these augmentations with contrastive learning frameworks or foundation models for satellite imagery.

_No authors' code or datasets were released for this paper; public satellite datasets must be used as substitutes, and augmentation methods must be reimplemented from the paper's descriptions._
