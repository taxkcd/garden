---
title: "351 · Generate, Transduct, Adapt: Iterative Transduction with VLMs — Grant Van Horn"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-grant-van-horn"
source_hash: "25d1582bf7abc17ab53b6d874892eb79a93051981c40b71aaa2e4678afcbdf3f"
sequence: 351
generator: "outreach-garden: managed"
---

# 351 · Generate, Transduct, Adapt: Iterative Transduction with VLMs

## At a glance

- **Professor:** Grant Van Horn
- **Institution:** Univ. of Massachusetts Amherst
- **Paper:** [Generate, Transduct, Adapt: Iterative Transduction with VLMs](https://arxiv.org/pdf/2501.06031)
- **Authors:** Oindrila Saha, Logan Lawrence, Grant Van Horn, Subhransu Maji
- **Year:** 2025

## Paper overview

This paper presents GTA-CLIP, a method that improves zero-shot and few-shot image classification by iteratively generating discriminative attributes using large language models, performing attribute-augmented transductive inference, and fine-tuning vision-language models like CLIP on the target dataset. This approach leverages both language and vision spaces to better distinguish classes, especially in fine-grained and label-scarce domains, achieving significant accuracy improvements over existing methods.

### Why it matters

**Research problem:** Improving zero-shot and few-shot image classification accuracy by leveraging the structure of both language and vision spaces in a transductive learning setting, where the entire unlabeled test dataset is available for inference.

**Why it matters:** Zero-shot and few-shot classification are critical for domains where labeled data is scarce or expensive to obtain, such as biodiversity monitoring and fine-grained species identification. Enhancing model accuracy without extensive labeling can greatly aid scientific and ecological applications.

**Key contributions:**

- Proposed a unified framework combining attribute generation, transductive inference, and model adaptation for zero- and few-shot classification.
- Introduced a dynamic attribute generation process driven by pairwise class confusion to expand the attribute space effectively.
- Demonstrated significant performance improvements over CLIP and state-of-the-art transductive CLIP across 12 diverse datasets.
- Showed that fine-tuning the model with inferred labels and attributes is crucial to leverage the benefits of dynamic attributes.
- Provided ablation studies and visualizations illustrating how language and vision spaces evolve during iterative learning.

## About the professor

**Grant Van Horn** — Assistant Professor (On leave through Spring 2027), Computer Science, Univ. of Massachusetts Amherst.

Research interests: Machine Learning, Artificial Intelligence, Robotics, Computer Vision, and Graphics

### Research links

- [Faculty/profile page](https://www.cics.umass.edu/about/directory/grant-van-horn)
- [Identity evidence](https://gvh.codes)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Transductive Learning and Vision-Language Models
**The paper assumes:** transductive learning, vision-language model architectures, zero-shot and few-shot classification, embedding space adaptation
**Already in this field?** Skip this entirely if you already understand transductive learning methods and the fundamentals of vision-language models like CLIP, including their embedding spaces and fine-tuning strategies.

To deeply understand the iterative transductive learning framework with vision-language models like CLIP in the GTA-CLIP paper, it is essential to grasp both transductive learning concepts and the workings of vision-language models and their adaptation. The rigorous course offers a comprehensive, structured deep dive into deep learning for computer vision, including vision-language topics, while the fast track provides a concise, intuition-focused introduction to sequence models and attention mechanisms relevant to language and vision model integration. Choose the rigorous course for thorough mastery and the fast track for a quick but solid conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos

**Watch only this:** Lectures 1 through 6 (Introduction, Linear Classifiers, Regularization, Neural Networks, CNNs, CNN Architectures), about 7 hours — these provide the core deep learning and vision foundations needed before tackling vision-language and transductive learning specifics.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 covers foundational and advanced topics in deep learning for vision, including vision-language models and transductive inference concepts, directly supporting understanding of GTA-CLIP's iterative attribute generation, transductive inference, and adaptation.

*If you want all of it:* All 18 episodes, about 21.2 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Sequence Models (Course 5 of the Deep Learning Specialization)](https://www.youtube.com/playlist?list=PLkDaE6sCZn6F6wUI9tvS_Gw1vaFAx6rd6) — DeepLearningAI · 6 videos · 1.0h across 6 episodes

**Watch only this:** Episodes 1, 4, and 5 (Basic Models, Attention Model Intuition, Attention Model), about 30 minutes total — these cover the essential concepts of sequence modeling and attention relevant to LLM-driven attribute generation.

*Why it unblocks this paper:* The Sequence Models series by DeepLearningAI offers a concise, clear introduction to sequence models and attention mechanisms, which are key to understanding large language models and their integration with vision models in GTA-CLIP's attribute generation and adaptation steps.

*If you want all of it:* All 6 episodes, about 1 hour

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the GTA-CLIP paper, start by building foundational knowledge on large language models and their role in attribute generation, followed by insights into transductive learning in vision-language models and fine-tuning techniques. Then, explore the specific core concept of the paper—iterative transduction with vision-language models—through the authors' own talk or the closest available substitute to grasp their novel approach and contributions.

### Large language models attribute generation *(prerequisite)*
This section covers how large language models (LLMs) generate discriminative class attributes that guide classification, a key step in GTA-CLIP's iterative attribute generation. Understanding LLMs' capabilities and limitations in knowledge extraction and generation is essential to appreciate the attribute augmentation process.

*How the paper uses it:* GTA-CLIP uses LLMs to dynamically generate discriminative attributes to improve class separability.

▶ [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — Google for Developers · 3 years ago

### Transductive learning vision language models *(prerequisite)*
This section introduces the transductive learning framework, which leverages the entire unlabeled test dataset during inference to improve classification accuracy. It is foundational to GTA-CLIP's approach of attribute-augmented transductive inference and iterative adaptation of vision-language models.

*How the paper uses it:* GTA-CLIP performs attribute-augmented transductive inference to refine image class assignments using both image and attribute embeddings.

▶ [ICCV 2023 Tutorial: Test-time Adaptation: Formulations ...](https://www.youtube.com/watch?v=l584yXZfYx4) — ContinualAI · 41:10

### Vision-language model fine-tuning *(prerequisite)*
Fine-tuning vision-language models on target datasets is crucial for adapting pretrained models to new domains and tasks. This section explains how fine-tuning improves model performance, which aligns with GTA-CLIP's iterative adaptation step to leverage dynamic attributes effectively.

*How the paper uses it:* GTA-CLIP fine-tunes vision and language encoders based on inferred labels and attributes to improve classification.

▶ [Computer Vision Meetup: Lessons Learned fine-tuning ...](https://www.youtube.com/watch?v=EX8rn1aZsVw) — Voxel51 · 31:04

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the GTA-CLIP paper, starting with how large language models generate discriminative attributes, then covering vision-language model fine-tuning and transductive learning frameworks. Finally, it presents the core idea of GTA-CLIP’s iterative transductive method that combines these elements to improve zero- and few-shot image classification. Each step builds intuition on how language and vision models interact and adapt to scarce labeled data.

### Large language models attribute generation *(prerequisite)*
Learn what large language models (LLMs) are and how they can generate meaningful, discriminative attributes for classes by leveraging vast textual knowledge. This helps guide classification by providing semantic cues beyond raw images.

*How the paper uses it:* GTA-CLIP uses LLMs to dynamically generate class-specific attributes that improve class separability during classification.

▶ [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — Google for Developers · 3 years ago

### Vision-language model fine-tuning *(prerequisite)*
Understand how vision-language models like CLIP can be fine-tuned on target datasets to better align image and text embeddings, improving classification accuracy especially in new or label-scarce domains.

*How the paper uses it:* GTA-CLIP fine-tunes vision-language encoders iteratively to leverage the generated attributes and inferred labels for better performance.

▶ [Fine-Tune Visual Language Models (VLMs) - HuggingFace ...](https://www.youtube.com/watch?v=3ypHZayanBI) — Uygar Kurt · 45:48

### Transductive learning vision language models *(prerequisite)*
Explore the transductive learning framework where the model uses the entire unlabeled test set during inference to improve predictions, rather than treating test samples independently. This leverages the structure of the test data distribution.

*How the paper uses it:* GTA-CLIP performs attribute-augmented transductive inference to refine class assignments using both image and attribute embeddings.

▶ [Zero-Shot Learning - Dr. Timothy Hospedales](https://www.youtube.com/watch?v=jBnCcr-3bXc) — Yandex for ML · 29:08

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical ladder to demonstrate understanding of the GTA-CLIP paper. The beginner project focuses on reproducing the attribute generation mechanism using large language models on a small subset of classes, the intermediate project implements the core iterative GTA-CLIP method on a public fine-grained dataset with zero-shot evaluation, and the advanced project extends the method by incorporating human-in-the-loop feedback for attribute refinement to address a stated future direction.

### Beginner — Attribute Generation with LLMs for Confused Classes
*Effort: a weekend, ~8 hours*

You build a small script that simulates the dynamic attribute generation step of GTA-CLIP by using a large language model (e.g., OpenAI GPT-3/4 API) to generate discriminative attributes for a pair of visually similar or confused classes. You then embed these attributes using a text encoder (e.g., CLIP text encoder) and visualize their separability in embedding space.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key contribution of dynamic attribute generation driven by class confusion, showing you understand how language models can augment class representations to improve separability.

**Grounded in:** Introduced a dynamic attribute generation process driven by pairwise class confusion to expand the attribute space effectively.

**Tech stack:** Python 3.11, OpenAI API or HuggingFace transformers, CLIP model (e.g., OpenAI CLIP or open_clip), matplotlib or seaborn for visualization

**Data:** Use a small subset of classes from the CUB-200-2011 dataset (public fine-grained bird species dataset) as a proxy for the paper's fine-grained datasets.

**Build it:**

1. Select two visually similar/confused classes from CUB-200-2011.
2. Formulate prompts to query a large language model to generate discriminative attributes for these classes.
3. Encode the generated attributes using the CLIP text encoder.
4. Visualize attribute embeddings and compare with static class name embeddings.
5. Document the attribute generation prompts and results.

**Ships as:** A GitHub repo with scripts for attribute generation and embedding visualization, plus a README explaining the process and how it relates to GTA-CLIP's attribute generation step.

**Stretch goal:** Add a simple confusion matrix computation from CLIP zero-shot predictions on a small test set to identify confused classes automatically.

### Intermediate — Iterative GTA-CLIP Reimplementation on CUB Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core GTA-CLIP iterative pipeline: (1) generate class-specific attributes using an LLM based on confusion, (2) perform attribute-augmented transductive inference to refine pseudo-labels, and (3) fine-tune the CLIP vision-language model on the target dataset. You evaluate zero-shot classification accuracy improvements over vanilla CLIP on the CUB dataset.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's main method end-to-end, including the iterative loop and fine-tuning, and quantitatively reproduce the reported accuracy gains on a fine-grained dataset.

**Grounded in:** Proposed a unified framework combining attribute generation, transductive inference, and model adaptation for zero- and few-shot classification.

**Tech stack:** Python 3.11, PyTorch, OpenAI API or HuggingFace transformers for LLM, CLIP model (open_clip or official OpenAI CLIP), scikit-learn for clustering and Gaussian modeling, matplotlib for plotting

**Data:** Use the public CUB-200-2011 dataset as a stand-in for the paper's fine-grained datasets.

**Build it:**

1. Download and preprocess the CUB-200-2011 dataset.
2. Implement a confusion-based attribute generation step querying an LLM for discriminative attributes.
3. Implement attribute-augmented transductive inference using image and attribute embeddings to refine pseudo-labels.
4. Fine-tune the CLIP model on the inferred labels and attributes iteratively.
5. Evaluate zero-shot classification accuracy after each iteration and compare with vanilla CLIP baseline.
6. Plot accuracy improvements and confusion alignment.

**Ships as:** A GitHub repo with code to run the iterative GTA-CLIP pipeline on CUB, scripts to evaluate and plot results, and a README describing the method and findings.

**Stretch goal:** Add an ablation study comparing static vs dynamic attributes and with/without fine-tuning.

### Advanced — Human-in-the-Loop Attribute Refinement for GTA-CLIP
*Effort: 3-4 weeks*

You extend the GTA-CLIP iterative framework by integrating a human-in-the-loop mechanism where domain experts can review and refine the generated attributes in real-time during the iterative process. This aims to reduce hallucinated or incorrect attributes from LLMs and improve classification reliability, addressing a key future direction from the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the method and its challenges, and the ability to design and implement a meaningful extension that could improve ecological monitoring applications.

**Grounded in:** Incorporating human-in-the-loop approaches to guide and validate attribute generation for improved accuracy and reliability.

**Tech stack:** Python 3.11, PyTorch, OpenAI API or HuggingFace transformers, CLIP model, Streamlit or Flask for interactive UI, scikit-learn, matplotlib

**Data:** Use the CUB-200-2011 dataset as the target fine-grained dataset.

**Build it:**

1. Reimplement the iterative GTA-CLIP pipeline as in the intermediate project.
2. Develop an interactive UI (e.g., Streamlit) to display generated attributes per class and allow expert edits or confirmations.
3. Integrate the human feedback loop to update attribute sets before transductive inference and fine-tuning steps.
4. Evaluate classification accuracy improvements with and without human-in-the-loop refinement.
5. Analyze the impact of corrected attributes on confusion reduction and model adaptation.
6. Document the system design, usage instructions, and experimental results.

**Ships as:** A GitHub repo with the full GTA-CLIP pipeline extended with a human-in-the-loop attribute refinement UI, evaluation scripts, and a detailed README explaining the extension and its benefits.

**Stretch goal:** Explore semi-automated attribute validation using uncertainty metrics to prioritize human review effort.
