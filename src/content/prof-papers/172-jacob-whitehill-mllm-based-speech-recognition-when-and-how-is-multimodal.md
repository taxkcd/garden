---
title: "172 · MLLM-based Speech Recognition: When and How is Multimodality Beneficial? — Jacob Whitehill"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jacob-whitehill"
source_hash: "1d843d9d91d89c9ec5456d77de2d83223d0f1ba6769cc27418a43ba8decf0cc6"
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
