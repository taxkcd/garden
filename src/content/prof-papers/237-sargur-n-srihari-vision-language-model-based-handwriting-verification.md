---
title: "237 · Vision-Language Model Based Handwriting Verification — Sargur N. Srihari"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sargur-n-srihari"
source_hash: "3f753c7cc1bdfc3b8152d8a155f0931ad733bf3784654ef47cf649c47a12761e"
sequence: 237
generator: "outreach-garden: managed"
---

# 237 · Vision-Language Model Based Handwriting Verification

## At a glance

- **Professor:** Sargur N. Srihari
- **Institution:** University at Buffalo
- **Paper:** [Vision-Language Model Based Handwriting Verification](https://doi.org/10.48550/arxiv.2407.21788)
- **Authors:** Mihir Chauhan, Abhishek Satbhai, Mohammad Abuzar Hashemi, Mir Basheer Ali, Bina Ramamurthy, Mingchen Gao, Siwei Lyu, Sargur Srihari
- **Year:** 2024

## Paper overview

This paper investigates the use of Vision-Language Models (VLMs), such as GPT-4o and PaliGemma, for handwriting verification, a task important in forensic document analysis. The study shows that while VLMs provide better interpretability and require less training data, traditional CNN models like ResNet-18 still outperform them in accuracy. The authors propose that VLMs can generate human-understandable explanations for handwriting comparisons, which could improve trust in forensic applications.

### Why it matters

**Research problem:** Handwriting verification methods often lack interpretability and require large labeled datasets, which limits their acceptance by forensic document examiners. The challenge is to develop models that provide accurate verification with clear, human-understandable explanations and require less training data.

**Why it matters:** Handwriting verification is critical in forensic document examination for authenticating documents and identifying forgeries. Improving interpretability and reducing data requirements can increase trust and practical usability of automated verification systems in legal contexts.

**Key contributions:**

- First exploration of VLMs for forensic handwriting verification.
- Demonstration that VLMs can generate human-interpretable explanations via 0-shot CoT reasoning.
- Comparison of VLMs with traditional CNN and Transformer baselines on CEDAR handwriting datasets.
- Development of prompt engineering techniques to highlight handwriting similarities and differences with visual coordinates.
- Supervised fine-tuning of PaliGemma with parameter-efficient methods to improve verification accuracy.

## About the professor

**Sargur N. Srihari** — Satish Dhawan Visiting Chair Professor, Department of Computer Science and Engineering, University at Buffalo.

Research interests: artificial intelligence and machine learning

### Research links

- [Faculty/profile page](https://cedar.buffalo.edu/~srihari)
- [Resolved homepage](http://www.cedar.buffalo.edu/~srihari/)
- [Lab website](http://www.cedar.buffalo.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Vision-Language Models
**The paper assumes:** multimodal deep learning, transformer architectures, vision-language model design and training
**Already in this field?** Skip this entirely if you already understand how vision-language models work, including their architecture and multimodal training methods.

This background focuses on Vision-Language Models (VLMs), essential for understanding the integration of visual and textual modalities, prompt engineering, and fine-tuning strategies used in the paper on handwriting verification. The rigorous course offers a deep, structured dive into deep learning for computer vision including vision-language topics, while the fast track provides a concise, intuition-driven overview of recent VLM architectures and competitive models. Choose the course for comprehensive foundational knowledge and the fast track for a quicker, practical grasp of current VLM approaches.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos

**Watch only this:** Lectures 5-6 (Image Classification with CNNs and CNN Architectures) plus Lecture 8 (Attention and Transformers) and Lecture 16 (Vision and Language), about 4.5 hours total — this subset covers CNNs, transformers, and vision-language models essential for this paper.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 covers core concepts of CNNs, Transformers, and vision-language integration (Lecture 16: Vision and Language), directly relevant to understanding the architectures and methods used in VLM-based handwriting verification.

*If you want all of it:* About 21.2 hours across 18 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Vision-Language Model Competition: DeepSeek-VL and Rivals](https://www.youtube.com/playlist?list=PLXKyJu0coDeXFGNeId8wRs-5vdC0DJKqS) — Byte Goose AI. · 13 videos · 4.7h across 13 episodes

**Watch only this:** Episodes 7 (CLIP: Contrastive Language–Image Pretraining model) and 9 (V-JEPA Learns Intuitive Physics Through Representation Prediction), about 45 minutes total — these episodes cover foundational VLM architectures and reasoning relevant to the paper's approach.

*Why it unblocks this paper:* The Vision-Language Model Competition: DeepSeek-VL and Rivals playlist offers a concise, up-to-date overview of state-of-the-art vision-language models, including architectures and reasoning approaches, which aligns well with the paper's focus on VLMs and prompt engineering for interpretability.

*If you want all of it:* About 4.7 hours across 13 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Vision-Language Model Based Handwriting Verification, start with foundational knowledge on Convolutional Neural Networks (CNNs) as they represent the baseline method for handwriting verification. Next, gain domain-specific insights into forensic handwriting analysis to appreciate the practical challenges and motivations behind interpretable verification models. Then, study prompt engineering techniques for multimodal AI, which are critical for guiding Vision-Language Models (VLMs) in generating explanations. After that, explore zero-shot reasoning and chain-of-thought prompting methods that enable VLMs to perform verification with minimal training data. Finally, focus on the core concept of Vision-Language Models themselves, prioritizing any talks by the paper authors or advanced research presentations on VLMs.

### Convolutional Neural Networks for image recognition *(prerequisite)*
Understanding CNNs is essential as they form the traditional baseline for handwriting verification in this paper. CNNs are widely used for image classification tasks and provide a performance benchmark against which VLMs are compared.

*How the paper uses it:* The paper compares VLMs against CNN baselines like ResNet-18 for handwriting verification accuracy.

▶ [Stanford CS231N | Spring 2025 | Lecture 5: Image Classification with CNNs](https://www.youtube.com/watch?v=f3g1zGdxptI) — Stanford Online · 11 months ago

### Forensic handwriting analysis *(prerequisite)*
This domain knowledge provides context on the challenges and requirements of handwriting verification in forensic applications. It highlights why interpretability and trustworthiness are critical for practical adoption.

*How the paper uses it:* The paper addresses forensic handwriting verification and aims to improve interpretability for forensic examiners.

▶ [Introduction to forensic handwriting examination part 1](https://www.youtube.com/watch?v=Cq2UOpAAzkw) — M Wakshull · 8:15

### Prompt engineering for multimodal AI *(prerequisite)*
Prompt engineering is a key technique used to guide Vision-Language Models in generating verification decisions and human-understandable explanations. Understanding advanced prompt engineering methods for multimodal inputs is crucial to grasp the paper's approach.

*How the paper uses it:* The authors develop prompt engineering techniques to highlight handwriting similarities and differences with visual coordinates.

▶ [Master Advanced Prompt Engineering: From COSTAR to Multimodal AI](https://www.youtube.com/watch?v=0zFCwLOPlME) — Bishwajit Khanra · 7:40 · 1 month ago

### Vision-Language Models zero-shot reasoning
Zero-shot chain-of-thought prompting enables VLMs to perform reasoning and generate explanations without task-specific training data. This method is central to the paper's approach for interpretable handwriting verification with minimal fine-tuning.

*How the paper uses it:* The paper uses 0-shot CoT prompt engineering with GPT-4o to generate explanations and verification decisions.

▶ [Lecture 17 – Prompt Engineering: Zero-Shot, Chain of Thought & Persona](https://www.youtube.com/watch?v=jGECn_Xx0Do) — Zero to Deployed · 6 days ago

### Paper authors talk *(the paper's own talk)*
Direct talks by the paper authors or closely related advanced presentations provide the most precise insights into the methodology, experiments, and implications of the work. Such talks are invaluable for understanding the nuances and future directions.

*How the paper uses it:* Direct source for authors' presentation and insights on this work.

▶ [Vision Language Models | Multi Modality, Image Captioning, Text-to-Image | Advantages of VLM's](https://www.youtube.com/watch?v=lbGugemmozk) — Ultralytics · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of forensic handwriting analysis to grasp the domain and challenges motivating this research. Next, learn about Convolutional Neural Networks (CNNs) as they are the traditional baseline for handwriting verification. Then, explore Vision-Language Models (VLMs) and their zero-shot reasoning capabilities, especially Chain-of-Thought prompting, which is central to the paper's approach. Finally, study prompt engineering techniques for multimodal AI to see how the authors guide VLMs to generate interpretable explanations.

### Forensic handwriting analysis *(prerequisite)*
This introduces the domain context and challenges in handwriting verification, explaining why interpretability and accuracy matter in forensic settings. Understanding the principles forensic experts use helps appreciate the need for human-understandable AI explanations.

*How the paper uses it:* The paper aims to improve forensic handwriting verification by making AI decisions interpretable and trustworthy for examiners.

▶ [Principles of Handwriting || Forensic Handwriting Analysis](https://www.youtube.com/watch?v=ftTotIsA-EM) — Diksha's Learning Lab · 10:48

### Convolutional Neural Networks for image recognition *(prerequisite)*
CNNs are a foundational deep learning method for image tasks like handwriting verification. This section covers how CNNs extract features from images and classify them, forming the accuracy baseline the paper compares against.

*How the paper uses it:* ResNet-18 CNN is the top-performing baseline model in the paper’s handwriting verification experiments.

▶ [Neural Networks Part 8: Image Classification with Convolutional Neural Networks (CNNs)](https://www.youtube.com/watch?v=HGwBXDKFk9I) — StatQuest with Josh Starmer · 15:24 · 5 years ago

### Vision-Language Models zero-shot reasoning
Zero-shot Chain-of-Thought (CoT) prompting enables VLMs to reason step-by-step without task-specific training data. This method is key to generating human-understandable explanations for handwriting verification in the paper.

*How the paper uses it:* The authors use 0-shot CoT prompt engineering with GPT-4o to produce interpretable verification decisions.

▶ [Chain of thought(CoT) Prompting | Prompt Engineering : part 3](https://www.youtube.com/watch?v=FozevIfgvHg) — CloudxLab Official · 27:48

### Prompt engineering for multimodal AI *(prerequisite)*
Prompt engineering guides multimodal AI models to generate desired outputs by carefully crafting inputs, especially when combining images and text. This skill is crucial for controlling VLMs to highlight handwriting similarities and differences with explanations.

*How the paper uses it:* The paper develops prompt engineering techniques to improve VLM interpretability and verification accuracy.

▶ [Prompt Engineering in Generative AI: Types & Techniques | KodeKloud](https://www.youtube.com/watch?v=Vx6VwdhDCEc) — KodeKloud · 2 years ago

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insights into their motivations, challenges, and future directions. It also contextualizes the technical content with real-world forensic applications and the role of VLMs.

*How the paper uses it:* The authors discuss their novel use of VLMs for forensic handwriting verification and interpretability.

▶ [Vision Language Models | Multi Modality, Image Captioning, Text-to-Image | Advantages of VLM's](https://www.youtube.com/watch?v=lbGugemmozk) — Ultralytics · 1 year ago

## Already in your library

- [Lecture 2 - Chain of Thought Reasoning | Reasoning LLMs ...](https://www.youtube.com/watch?v=fZNNqcN_UQM) — also for: MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models (Tim Oates)
- [Chain-of-thought prompting - Explained!](https://www.youtube.com/watch?v=AFE6x81AP4k) — also for: Improving Human Verification of LLM Reasoning through Interactive Explanation Interfaces (Anh Nguyen)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate understanding of the paper "Vision-Language Model Based Handwriting Verification." The beginner project reproduces the paper's interpretability mechanism by generating explanations from a VLM prompt. The intermediate project uses the authors' released code to run and extend the VLM-based handwriting verification on the CEDAR dataset, comparing accuracy against a CNN baseline. The advanced project tackles a future direction by developing improved prompt engineering and fine-tuning strategies for VLMs with synthetic explanation data to reduce output variability and improve verification accuracy.

### Beginner — Generate Handwriting Verification Explanations with GPT-4o Zero-Shot CoT
*Effort: a weekend, ~8 hours*

You build a simple Python script that uses the GPT-4o API to generate zero-shot Chain-of-Thought (CoT) explanations for pairs of handwriting images. Using prompt templates inspired by the paper, you feed sample handwriting image descriptions and receive human-readable verification explanations. This reproduces the paper's demonstration of VLM interpretability without model fine-tuning.

**Why it shows you understood the paper:** This project shows you understand the core idea of using VLMs for interpretable handwriting verification via zero-shot CoT prompting, a key contribution of the paper.

**Grounded in:** Demonstration that VLMs can generate human-interpretable explanations via 0-shot CoT reasoning.

**Tech stack:** Python 3.11, OpenAI GPT-4o API or equivalent, Jupyter Notebook or script

**Data:** Use a small curated set of handwriting image pairs from the CEDAR dataset described in the paper, or simulate pairs with textual descriptions if images are unavailable.

**Build it:**

1. Read the paper's description of the zero-shot CoT prompt engineering for GPT-4o.
2. Write Python code to call the GPT-4o API with prompts that describe handwriting pairs and request verification explanations.
3. Prepare a small set of sample handwriting pair descriptions (textual or image metadata) to feed into the prompt.
4. Run the script to generate explanations and save the outputs.
5. Write a README explaining the prompt design, example inputs, and outputs.

**Ships as:** A GitHub repo with a Python script or notebook that generates and displays zero-shot CoT explanations for handwriting verification pairs, with example prompts and outputs documented.

**Stretch goal:** Add a simple web UI to upload handwriting images and display GPT-4o generated explanations interactively.

### Intermediate — Run and Extend VLM Handwriting Verification on CEDAR Dataset
*Effort: 1-3 weekends, ~20 hours*

You clone and run the authors' released codebase (https://github.com/Abhishek0057/vlm-hv) to reproduce their VLM-based handwriting verification results on the CEDAR dataset. Then you implement a simple baseline CNN model (e.g., ResNet-18) using PyTorch and compare its accuracy against the VLM approach on the same data. You report accuracy metrics and analyze differences.

**Why it shows you understood the paper:** This project shows you can work with the authors' code and data, understand the core VLM verification method, and critically compare it to traditional CNN baselines as done in the paper.

**Grounded in:** Comparison of VLMs with traditional CNN and Transformer baselines on CEDAR handwriting datasets; ResNet-18 CNN achieved highest accuracy of 84%, outperforming GPT-4o (70%) and fine-tuned PaliGemma (71%).

**Tech stack:** Python 3.11, PyTorch, NumPy, CEDAR handwriting dataset, Git

**Data:** CEDAR handwriting datasets (Letter and AND) as used in the paper; publicly available or described in the paper.

**Build it:**

1. Clone the authors' GitHub repository https://github.com/Abhishek0057/vlm-hv and set up the environment.
2. Download and prepare the CEDAR handwriting datasets as per the repository instructions.
3. Run the VLM-based verification pipeline to reproduce reported accuracy and explanation outputs.
4. Implement a ResNet-18 CNN baseline for handwriting verification on the same dataset.
5. Train and evaluate the CNN baseline, reporting accuracy metrics.
6. Compare results and write a report summarizing findings and insights.

**Verified links from the paper:**

- <https://github.com/Abhishek0057/vlm-hv> — released by the paper's authors

**Ships as:** A GitHub repo with code to run the authors' VLM verification, a CNN baseline implementation, evaluation scripts, and a README with accuracy comparisons and analysis.

**Stretch goal:** Fine-tune the PaliGemma VLM on a small subset of CEDAR data and measure accuracy improvements.

### Advanced — Improved Prompt Engineering and Fine-Tuning for VLM Handwriting Verification
*Effort: few weeks, ~40+ hours*

You develop and experiment with improved prompt engineering techniques to reduce variability in VLM outputs for handwriting verification, addressing a key limitation noted in the paper. You generate synthetic fine-tuning data combining text explanations and visual coordinate annotations inspired by the paper's future directions. Using parameter-efficient fine-tuning methods, you fine-tune PaliGemma or a similar open VLM to improve verification accuracy and explanation consistency. You evaluate on CEDAR or a similar handwriting dataset.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's limitations and future directions by extending the method to improve VLM reliability and interpretability through prompt and fine-tuning innovations.

**Grounded in:** Limitations: High variability in VLM performance due to prompt sensitivity and limited fine-tuning data; Future directions: Develop improved fine-tuning methods and robust prompt engineering to reduce variability in VLM outputs.

**Tech stack:** Python 3.11, PyTorch, Transformers library, CEDAR handwriting dataset or substitute, OpenAI GPT-4o API or open VLM like PaliGemma

**Data:** CEDAR handwriting dataset or a publicly available handwriting dataset; synthetic explanation and coordinate annotation data generated based on paper descriptions.

**Build it:**

1. Study the paper's prompt engineering strategies and limitations in VLM output variability.
2. Design and implement improved prompt templates that incorporate visual coordinate references and structured explanation formats.
3. Generate synthetic fine-tuning data combining handwriting image metadata and textual explanations.
4. Apply parameter-efficient fine-tuning (e.g., LoRA, adapters) to PaliGemma or an open VLM using the synthetic data.
5. Evaluate the fine-tuned model on handwriting verification accuracy and explanation consistency.
6. Document methodology, experiments, results, and potential forensic applicability.

**Verified links from the paper:**

- <https://github.com/Abhishek0057/vlm-hv> — released by the paper's authors

**Ships as:** A GitHub repo with prompt engineering code, synthetic data generation scripts, fine-tuning code, evaluation scripts, and a detailed README reporting improvements and challenges.

**Stretch goal:** Collaborate with forensic document examiners to collect real explanation-annotated handwriting pairs for fine-tuning and validation.

_The CEDAR handwriting dataset may require institutional access or permission; if unavailable, substitute with a publicly available handwriting dataset or simulate handwriting image pairs with textual descriptions for the beginner and advanced projects._
