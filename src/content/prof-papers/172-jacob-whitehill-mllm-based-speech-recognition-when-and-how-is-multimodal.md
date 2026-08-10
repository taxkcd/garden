---
title: "172 · MLLM-based Speech Recognition: When and How is Multimodality Beneficial? — Jacob Whitehill"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jacob-whitehill"
source_hash: "a830f7145e3c6fead8e1ee5324d8ce5fa24235bb53dc2f16b7468e8f40d3cb56"
sequence: 172
generator: "outreach-garden: managed"
---

# 172 · MLLM-based Speech Recognition: When and How is Multimodality Beneficial?

## At a glance

- **Professor:** Jacob Whitehill
- **Institution:** Worcester Polytechnic Institute
- **Paper:** [MLLM-based Speech Recognition: When and How is Multimodality Beneficial?](https://arxiv.org/pdf/2507.19037)
- **Authors:** Yiwen Guan, Viet Anh Trinh, Vivek Voleti, Jacob Whitehill
- **Year:** 2025

## Paper overview

This paper investigates how multi-modal large language models (MLLMs) can improve automatic speech recognition (ASR) accuracy by integrating multiple input types such as audio, lip movements, and images. It explores when and how these modalities help, especially in noisy environments, and compares different model architectures and input strategies.

### Why it matters

**Research problem:** Understanding under what conditions and through which model architectures multiple input modalities improve ASR accuracy, particularly in noisy environments, and how to effectively integrate these modalities in MLLMs.

**Why it matters:** Improving ASR accuracy in noisy and challenging conditions is critical for applications like education, human-computer interaction, and accessibility. Multi-modal inputs can provide complementary information to audio, but their integration is complex and not well understood.

**Key contributions:**

- Systematic analysis of multi-modal inputs' conditional accuracy benefits as a function of auditory noise.
- Assessment of visual encoding quality and efficiency on ASR accuracy.
- Comparison of Transformer and Mamba backbones regarding speed, accuracy, and training stability.
- Evaluation of input formatting strategies and modality loss weighting effects on model performance.

## About the professor

**Jacob Whitehill** — Professor, Worcester Polytechnic Institute.

### Research links

- [Faculty/profile page](https://www.wpi.edu/people/faculty/jrwhitehill)
- [Identity evidence](https://www.wpi.edu/academics/facultydir/200331.htm)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** transformer neural networks
**The paper assumes:** deep learning architectures, attention mechanisms, sequence modeling, and positional encoding methods
**Already in this field?** Skip this entirely if you already understand the Transformer architecture and its role in multi-modal sequence modeling.

To understand the Transformer architectures and attention mechanisms central to this paper on multi-modal speech recognition, two background options are provided. The rigorous course offers a deep dive into Transformers and related neural network concepts from a top university, ideal for thorough comprehension. The fast track provides a concise, intuition-focused explainer series that covers the essentials efficiently, suitable for a quicker but solid grasp of the subject.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 7 and 8: 'Recurrent Neural Networks' and 'Attention and Transformers' (~140 minutes total) — these provide the core understanding of sequence models and Transformer attention mechanisms needed to grasp the paper's methodology.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 covers attention and Transformers in the context of deep learning architectures, including sequence processing and visual data integration, directly relevant to the paper's focus on Transformer and Mamba backbones for multi-modal inputs.

*If you want all of it:* About 21.2 hours across 18 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 6 and 7: 'Transformers, the tech behind LLMs' and 'Attention in transformers, step-by-step' (~42 minutes total) — these two episodes cover the essential intuition and mechanics of Transformers and attention.

*Why it unblocks this paper:* 3Blue1Brown's 'Neural networks' series includes clear, visual explanations of Transformers and attention mechanisms, making it a great quick introduction to the core concepts underlying the paper's model architectures.

*If you want all of it:* About 3.6 hours across 10 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on MLLM-based speech recognition, start with foundational knowledge on Automatic Speech Recognition (ASR) and Transformer architectures, as these underpin the model comparisons and ASR improvements discussed. Next, explore visual encoding techniques crucial for integrating lip movements and images into ASR. Finally, focus on the core concept of multimodal large language models and the authors' own talk to gain direct insight into their novel contributions and experimental findings.

### Automatic speech recognition *(prerequisite)*
This section covers the fundamental principles and challenges of ASR systems, providing the necessary background on how speech signals are converted to text. Understanding ASR is essential to appreciate how multimodal inputs can enhance recognition accuracy, especially under noisy conditions.

*How the paper uses it:* ASR is the core task improved by integrating multiple modalities in the paper.

▶ [MIT 6.S191: Automatic Speech Recognition](https://www.youtube.com/watch?v=sR6_bZ6VkAg) — Alexander Amini · 41:44

### Transformer architectures *(prerequisite)*
Transformers are a key backbone model compared in the paper for multimodal ASR. This section explains the architecture and mechanisms of Transformers, which is critical to understanding the model design choices and performance trade-offs explored.

*How the paper uses it:* The paper compares Transformer and Mamba architectures for multimodal ASR.

▶ [MIT 6.S191 (2025): Recurrent Neural Networks, Transformers ...](https://www.youtube.com/watch?v=GvezxUdLrEk) — Alexander Amini · 1:01:34

### Visual encoding for speech recognition *(prerequisite)*
Visual encoding techniques extract meaningful features from lip movements and images, which are integrated with audio inputs to improve ASR accuracy. This section delves into how visual data is processed and encoded for speech recognition tasks.

*How the paper uses it:* Improving visual encoding quality is shown to consistently enhance ASR accuracy in the paper.

▶ [D3L2 Speech Recognition with Deep Networks (by José A. R. Fonollosa)](https://www.youtube.com/watch?v=jE4SJFBA9Jo) — TALP_UPC Research Center · 31:16 · 9 years ago

### Multimodal large language models
This section focuses on the core method of integrating multiple input modalities within large language models, which is central to the paper's approach. Understanding multimodal LLMs provides insight into how audio, visual, and textual data are fused for improved speech recognition.

*How the paper uses it:* The paper investigates how multimodal LLMs can improve ASR accuracy by integrating diverse inputs.

▶ [Multimodal Large Language Model Intro By Google Engineer ...](https://www.youtube.com/watch?v=jjdKfk89yAM) — Martin Is A Dad · 28:52

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how multimodal large language models improve speech recognition, starting with the basics of automatic speech recognition and Transformer architectures. It then covers visual encoding techniques crucial for integrating lip movements and images, followed by an introduction to multimodal large language models, culminating in insights about the paper's specific multimodal ASR approach. Each step builds intuition with concise, clear videos to efficiently prepare you for the paper's contributions.

### Automatic speech recognition *(prerequisite)*
Learn what automatic speech recognition (ASR) is, how it converts spoken language into text, and the main challenges involved. This foundation is essential to understand why and how multimodal inputs can improve ASR accuracy.

*How the paper uses it:* The paper aims to improve ASR accuracy by integrating multiple input modalities.

▶ [Automatic Speech Recognition - An Overview](https://www.youtube.com/watch?v=q67z7PTGRi8) — Microsoft Research · 8 years ago

### Transformer architectures *(prerequisite)*
Understand the Transformer model, a key neural network architecture that underpins many modern language and multimodal models. This video breaks down the attention mechanism and how Transformers process sequences efficiently.

*How the paper uses it:* The paper compares Transformer and Mamba architectures as backbones for multimodal ASR.

▶ [Transformer Neural Networks, ChatGPT's foundation, Clearly ...](https://www.youtube.com/watch?v=zxQyTK8quyY) — StatQuest with Josh Starmer · 36:15

### Visual encoding for speech recognition *(prerequisite)*
Explore how visual information like lip movements and images can be encoded and used to enhance speech recognition, especially in noisy environments. This concept is key to understanding the multimodal inputs studied in the paper.

*How the paper uses it:* The paper evaluates the impact of visual encoding quality on ASR accuracy.

▶ [Speech Recognition Tutorial - An Introduction to Speech Recognition](https://www.youtube.com/watch?v=40X2LVPgn0k) — Fullstack Academy · 17:49 · 9 years ago

### Multimodal large language models
Get an introduction to multimodal large language models (MLLMs) that integrate different input types such as audio, images, and text to improve understanding and generation tasks. This video explains the architecture and training philosophy behind MLLMs.

*How the paper uses it:* The paper investigates how MLLMs can effectively integrate multiple modalities for speech recognition.

▶ [Multimodal Large Language Model Intro By Google Engineer ...](https://www.youtube.com/watch?v=jjdKfk89yAM) — Martin Is A Dad · 28:52

### Paper authors talk
Hear directly from experts about speech recognition technologies and their evolution, providing context and deeper insight into the challenges and innovations in the field.

*How the paper uses it:* Offers broader context on speech recognition technologies relevant to the paper's focus.

▶ [How Does Speech Recognition Work? Learn about Speech to Text, Voice Recognition and Speech Synthesis](https://www.youtube.com/watch?v=6altVgTOf9s) — Acadaimy · 6:24 · 5 years ago

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [What is Multimodal AI? How LLMs Process Text, Images, and More](https://www.youtube.com/watch?v=J51oZYcNvP8) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth to demonstrate understanding of the paper "MLLM-based Speech Recognition: When and How is Multimodality Beneficial?". The beginner project reproduces a key experimental insight on modality benefits under noise using simple tools. The intermediate project implements a core multimodal ASR model architecture and compares modalities on a public dataset. The advanced project extends the paper by exploring improved positional encodings for 2-D visual data, addressing a stated limitation and future direction.

### Beginner — Multimodal ASR Accuracy vs Noise Visualization
*Effort: a weekend, ~8 hours*

You build a simple Python notebook that simulates or uses synthetic data to plot how adding synchronized (lip movement) and unsynchronized (images) modalities affects ASR accuracy at different noise levels. The project visualizes the conditional accuracy benefits described in the paper.

**Why it shows you understood the paper:** This project shows you grasp the core experimental finding that modality benefits depend on noise level and synchronization, demonstrating comprehension of the paper's key result through data visualization.

**Grounded in:** Systematic analysis of multi-modal inputs' conditional accuracy benefits as a function of auditory noise.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy, pandas

**Data:** Synthetic or publicly available noisy speech data with simulated modality accuracy scores, as the paper's datasets are not publicly released.

**Build it:**

1. Create or simulate ASR accuracy data for audio-only, audio+lip, and audio+image modalities at multiple noise levels.
2. Use matplotlib to plot accuracy curves for each modality combination against noise level.
3. Annotate the plot to highlight the 'sweet spot' where unsynchronized modalities help most and high noise where synchronized modalities dominate.
4. Write a README explaining the plot and how it relates to the paper's findings.

**Ships as:** A Jupyter notebook and README showing plots of ASR accuracy vs noise for different modality combinations, illustrating the paper's conditional modality benefits.

**Stretch goal:** Add a small interactive widget (e.g., using ipywidgets) to toggle modality combinations and noise levels dynamically.

### Intermediate — Multimodal ASR with Transformer on Public Dataset
*Effort: 2 weekends, ~20 hours*

You implement a simplified multimodal ASR model using a Transformer backbone that integrates audio and lip movement inputs. You train and evaluate it on a public audiovisual speech dataset (e.g., GRID corpus as a substitute) under varying noise levels, comparing audio-only vs multimodal accuracy.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core method of multimodal integration and reproduce the key metric of accuracy improvement from adding synchronized visual modalities, showing practical grasp of model architecture and training.

**Grounded in:** Comparison of Transformer and Mamba backbones regarding speed, accuracy, and training stability; systematic evaluation of multiple modalities on ASR accuracy.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, numpy, torchaudio, opencv-python

**Data:** Use the GRID audiovisual speech corpus (publicly available) as a substitute for the paper's datasets to provide synchronized audio and lip movement data.

**Build it:**

1. Download and preprocess the GRID corpus to extract audio and lip video frames.
2. Implement a Transformer-based multimodal ASR model that takes audio features and lip movement embeddings as inputs.
3. Add noise augmentation to audio inputs at different SNR levels.
4. Train the model on audio-only and audio+lip inputs, evaluate word error rate (WER) or accuracy.
5. Plot and compare ASR accuracy across noise levels and modalities.
6. Document the implementation, results, and comparison to the paper's reported trends.

**Ships as:** A GitHub repo with code to train and evaluate a Transformer multimodal ASR model on GRID, showing accuracy improvements from lip modality under noise.

**Stretch goal:** Add a simple modality loss weighting scheme to observe its effect on training stability and accuracy.

### Advanced — Positional Encoding for 2-D Visual Data in Multimodal ASR
*Effort: 3+ weeks*

You develop and integrate a novel positional encoding scheme designed to better capture spatial and temporal relationships in 2-D visual inputs (e.g., lip movement video frames) for multimodal ASR. You implement this in a Transformer-based ASR model and evaluate its impact on accuracy and training stability compared to absolute positional encodings.

**Why it shows you understood the paper:** This project directly addresses a key limitation and future direction from the paper, showing deep engagement with the challenges of multimodal integration and model architecture innovation, potentially opening a conversation with the professor.

**Grounded in:** Limitations: Absolute positional encodings struggle with 2-D visual representations like raster images; Future directions: Develop more powerful positional encodings to better integrate multi-modal and 2-D visual data.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, numpy, opencv-python

**Data:** Use the GRID corpus or a similar public audiovisual speech dataset for training and evaluation.

**Build it:**

1. Research existing positional encoding methods for 2-D and spatiotemporal data (e.g., relative positional encodings, learned embeddings).
2. Design and implement a positional encoding scheme that encodes spatial and temporal positions of visual frames.
3. Integrate this encoding into a Transformer-based multimodal ASR model replacing absolute positional encodings.
4. Train and evaluate the model on audiovisual speech data with noise augmentation.
5. Compare ASR accuracy, training stability, and convergence speed against a baseline model using absolute positional encodings.
6. Document the design decisions, experimental results, and discuss implications relative to the paper.

**Ships as:** A GitHub repository with code and experiments demonstrating improved positional encoding for 2-D visual data in multimodal ASR, with detailed analysis and comparison.

**Stretch goal:** Explore combining this positional encoding with stronger visual encoders as suggested in the paper's future directions.

_The paper's authors released no code or datasets; intermediate and advanced projects rely on substituting public audiovisual speech datasets like GRID corpus._
