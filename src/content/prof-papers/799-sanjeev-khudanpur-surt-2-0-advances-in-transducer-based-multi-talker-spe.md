---
title: "799 · SURT 2.0: Advances in Transducer-based Multi-talker Speech Recognition — Sanjeev Khudanpur"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sanjeev-khudanpur"
source_hash: "1152cd202c9e0986db7bab744e968ad46af71595f49e1f6465a742d45a8818a1"
sequence: 799
generator: "outreach-garden: managed"
---

# 799 · SURT 2.0: Advances in Transducer-based Multi-talker Speech Recognition

## At a glance

- **Professor:** Sanjeev Khudanpur
- **Institution:** Johns Hopkins University
- **Paper:** [SURT 2.0: Advances in Transducer-based Multi-talker Speech Recognition](https://arxiv.org/pdf/2306.10559)
- **Authors:** Desh Raj, Daniel Povey, Sanjeev Khudanpur
- **Year:** 2023

## Paper overview

This paper presents SURT 2.0, an improved model for recognizing speech from multiple speakers talking simultaneously in meetings. It addresses limitations of the original SURT model by improving training efficiency, reducing errors like missed or duplicated speech, and demonstrating strong performance on real meeting datasets. The model uses advanced neural network architectures and training techniques to separate and transcribe overlapping speech streams in a streaming, end-to-end manner.

### Why it matters

**Research problem:** Multi-talker automatic speech recognition (ASR) in continuous, streaming settings is challenging due to overlapping speech, turn-taking, and far-field audio conditions. Existing models like SURT have issues with omission and leakage errors, high computational cost, and limited evaluation on synthetic data.

**Why it matters:** Accurate transcription of multi-speaker conversations is critical for meeting transcription, voice assistants, and other human language technologies. Improving multi-talker ASR enables better understanding and interaction in real-world conversational environments.

**Key contributions:**

- Introduced a mask-based unmixing module with dual-path LSTMs allowing arbitrary output branches and interpretable features.
- Replaced original encoders with efficient zipformer architecture and introduced branch tying to reduce omission and leakage errors.
- Used pruned transducer loss for memory-efficient training enabling longer sequences and academic resource feasibility.
- Developed a realistic mixture simulation method based on force-aligned subsegments and pause/overlap statistics.
- Pretrained recognition module on single-speaker data to improve convergence and performance.

## About the professor

**Sanjeev Khudanpur** — Associate Professor, Department of Electrical and Computer Engineering, Johns Hopkins University.

Research interests: Information Theory, Speech Recognition, Statistical Modeling, Machine Translation, Deep Learning, Natural Language Processing

### Research links

- [Faculty/profile page](https://www.clsp.jhu.edu/faculty/sanjeev-khudanpur)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** End-to-end speech recognition
**The paper assumes:** sequence-to-sequence models, transducer architectures, streaming automatic speech recognition, neural network-based speech recognition
**Already in this field?** Skip this entirely if you already understand end-to-end speech recognition models and transducer-based ASR systems.

This background selection is designed to prepare readers to understand the SURT 2.0 paper on transducer-based multi-talker speech recognition by covering foundational concepts in end-to-end speech recognition, transducer models, and sequence-to-sequence learning. The rigorous course option offers a deep, structured university-level introduction to machine learning fundamentals that underpin speech recognition models, while the fast track provides a more focused, shorter series of clear explainers specifically on speech recognition concepts. Choose the course for a comprehensive foundation and the fast track for a quicker, targeted overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 10 to 12 (Introduction to Neural Networks, Backpropagation & Improving Neural Networks, Debugging ML Models and Error Analysis), about 4 hours — these cover neural network fundamentals and training techniques critical for end-to-end ASR.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a rigorous, authoritative machine learning course that covers core concepts such as neural networks, sequence models, and learning theory, which are essential for understanding the transducer architectures and training techniques used in SURT 2.0.

*If you want all of it:* Approximately 27.9 hours across all 21 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [speech recognition](https://www.youtube.com/playlist?list=PLv97UIIGwH0v6gXcqEw5NFRljBxYTep38) — Rahmat Al Hakam (NETFORI) · 19 videos · 13.7h across the first 18 episodes

**Watch only this:** Episodes 6 (Speech Recognition Basics, Part 1), 8 (Automatic Speech Recognition: An Overview), and 11 (Stanford Seminar - Deep Speech: Scaling up end-to-end speech recognition), about 2.5 hours total — these cover core ASR concepts and end-to-end model insights relevant to SURT 2.0.

*Why it unblocks this paper:* Rahmat Al Hakam's speech recognition playlist offers concise, clear explanations focused on speech recognition fundamentals, including forced alignment, acoustic modeling, and end-to-end approaches, providing a practical and accessible introduction aligned with the paper's subject.

*If you want all of it:* About 13.7 hours across the first 18 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand SURT 2.0, start by building foundational knowledge on key prerequisite concepts such as Dual-path LSTM networks for effective speech separation, Mask-based speech separation techniques, Streaming end-to-end ASR architectures for real-time transcription, and the Zipformer encoder architecture that improves computational efficiency. After establishing these foundations, focus on the core concept of Transducer-based speech recognition, which underpins SURT 2.0's recognition approach. Finally, conclude with the authors' own talk if available, to gain direct insights into the specific advances and design choices in SURT 2.0.

### Dual-path LSTM networks *(prerequisite)*
Dual-path LSTM networks are a critical architectural component enabling effective masking and speech separation in SURT 2.0. Understanding their recurrent structure and how they process sequential data in segments is foundational to grasping how SURT 2.0 separates overlapping speech streams.

*How the paper uses it:* SURT 2.0 replaces the original unmixing module with a mask estimator using dual-path LSTMs to improve speech separation.

▶ [Stanford CS231N | Spring 2025 | Lecture 7: Recurrent Neural Networks](https://www.youtube.com/watch?v=kG2lAPBF7zA) — Stanford Online · 1:11:48 · 1y ago

### Mask-based speech separation *(prerequisite)*
Mask-based speech separation is a fundamental technique for isolating individual speakers' signals from overlapping audio. Learning about mask estimation and its role in source separation provides essential context for SURT 2.0's improved unmixing module.

*How the paper uses it:* SURT 2.0 introduces a mask-based unmixing module that leverages interpretable features for multi-talker speech recognition.

▶ [\[Interspeech 2022\] Heterogeneous Target Speech Separation](https://www.youtube.com/watch?v=OS7EOhMFZUE) — Mitsubishi Electric Research Laboratories (MERL) · 15:32 · 3y ago

### Streaming end-to-end ASR *(prerequisite)*
Streaming end-to-end ASR models enable real-time transcription of speech, which is crucial for applications like meeting transcription. Understanding streaming architectures and their challenges prepares the reader to appreciate SURT 2.0's streaming capabilities.

*How the paper uses it:* SURT 2.0 employs a streaming zipformer encoder and stateless decoder to enable efficient, real-time multi-talker ASR.

▶ [\[ICASSP 2020\] Streaming Automatic Speech Recognition with the Transformer Model](https://www.youtube.com/watch?v=YIT5OQVLZiI) — Mitsubishi Electric Research Laboratories (MERL) · 14:29 · 6y ago

### Transducer-based speech recognition
Transducer models form the core end-to-end architecture for speech recognition in SURT 2.0. Understanding the RNN Transducer framework and its training objectives is essential to grasp how SURT 2.0 performs multi-talker recognition.

*How the paper uses it:* SURT 2.0 builds upon transducer models with pruned transducer loss and auxiliary objectives to improve multi-speaker ASR.

▶ [Target-speaker Methods for Speech Recognition – Desh Raj](https://www.youtube.com/watch?v=ewIwOp-o_pM) — Center for Language & Speech Processing(CLSP), JHU · 51:39 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand SURT 2.0, a state-of-the-art model for multi-talker speech recognition. We start with the basics of speech separation using mask-based methods, then build intuition on recurrent neural networks and dual-path LSTMs for sequence modeling. Next, we cover efficient encoder architectures like the zipformer, followed by streaming end-to-end ASR models, and finally focus on the transducer-based recognition approach central to SURT 2.0.

### Mask-based speech separation *(prerequisite)*
Mask-based speech separation is a technique that isolates individual speakers' voices from overlapping audio by estimating masks that filter out unwanted sounds. This approach is fundamental for handling multi-speaker scenarios where voices overlap, enabling clearer transcription.

*How the paper uses it:* SURT 2.0 uses a mask-based unmixing module to separate overlapping speech streams effectively.

▶ [\[Interspeech 2022\] Heterogeneous Target Speech Separation](https://www.youtube.com/watch?v=OS7EOhMFZUE) — Mitsubishi Electric Research Laboratories (MERL) · 15:32 · 3y ago

### Dual-path LSTM networks *(prerequisite)*
Dual-path LSTMs are a specialized recurrent neural network architecture designed to model long sequences by splitting input into chunks and processing them both within and across chunks. This structure helps capture complex dependencies in speech signals, improving separation and recognition.

*How the paper uses it:* SURT 2.0 replaces the original unmixing module with a mask estimator using dual-path LSTMs for better separation and interpretability.

▶ [Illustrated Guide to LSTM's and GRU's: A step by step explanation](https://www.youtube.com/watch?v=8HyCNIVRbSU) — The AI Hacker · 11:18 · 8y ago

### Zipformer encoder architecture *(prerequisite)*
The zipformer is an efficient encoder architecture that combines convolution and transformer layers to process speech features quickly and accurately. It balances computational cost and performance, making it suitable for streaming applications.

*How the paper uses it:* SURT 2.0 adopts a streaming zipformer encoder to improve computational efficiency and recognition accuracy.

▶ [\[ICASSP 2020\] Streaming Automatic Speech Recognition with the Transformer Model](https://www.youtube.com/watch?v=YIT5OQVLZiI) — Mitsubishi Electric Research Laboratories (MERL) · 14:29 · 6y ago

### Transducer-based speech recognition
Transducer models are a type of end-to-end ASR architecture that jointly models acoustic and language information to produce accurate transcriptions. They are well-suited for streaming recognition and handling variable-length input and output sequences.

*How the paper uses it:* SURT 2.0 uses a pruned transducer loss and a stateless decoder as part of its recognition module to improve training efficiency and accuracy.

▶ [\[Fall 2023\] Speech Recognition and Understanding (Lecture 20: End-to-End ASR: RNN Transducer)](https://www.youtube.com/watch?v=BQBOu9BOFpc) — WAVLab · 46:45 · 2y ago

## Already in your library

- [Automatic Speech Recognition - An Overview](https://www.youtube.com/watch?v=q67z7PTGRi8) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Speech Recognition Tutorial - An Introduction to Speech Recognition](https://www.youtube.com/watch?v=40X2LVPgn0k) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [How Does Speech Recognition Work? Learn about Speech to Text, Voice Recognition and Speech Synthesis](https://www.youtube.com/watch?v=6altVgTOf9s) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Automatic Speech Recognition Systems ( ASR ) | Deep Learning | Artificial Intelligence Part 1](https://www.youtube.com/watch?v=D3JyZFkoJEE) — also for: Gesture-Aware Zero-Shot Speech Recognition for Patients with Language Disorders (Seungbae Kim)
- [Lecture 10 | Recurrent Neural Networks](https://www.youtube.com/watch?v=6niqTuYFZLQ) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [Long Short-Term Memory (LSTM), Clearly Explained](https://www.youtube.com/watch?v=YCzL96nL7j0) — also for: PAI: Fast, Accurate, and Full Benchmark Performance Projection with AI (Abdullah Muzahid)
- [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)
- [Introduction to Encoder-Decoder Architecture | Sequence to Sequence Model](https://www.youtube.com/watch?v=Pc-sR242Kmo) — also for: Toward Sensor-to-Text Generation: Leveraging LLM-Based Video Annotations for Stroke Therapy Monitoring (Monika Akbar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of SURT 2.0's advances in streaming multi-talker speech recognition. The beginner project focuses on reproducing a core masking mechanism using dual-path LSTMs to grasp the separation concept. The intermediate project involves running and extending the authors' released code to evaluate SURT 2.0 on a public meeting dataset, comparing key metrics. The advanced project tackles a stated limitation by experimenting with extending SURT 2.0 to handle more than two overlapping speakers, exploring architectural and training challenges.

### Beginner — Dual-Path LSTM Masking for Speech Separation
*Effort: a weekend, ~8 hours*

You implement a simplified mask estimator using dual-path LSTM networks to separate overlapped speech frames from a synthetic two-speaker mixture. You visualize the mask outputs and compare them to ideal binary masks to understand the separation mechanism.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core masking module introduced in SURT 2.0, showing you understand how dual-path LSTMs help separate overlapping speech streams.

**Grounded in:** Introduced a mask-based unmixing module with dual-path LSTMs allowing arbitrary output branches and interpretable features.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Simulated two-speaker mixtures created by mixing clean single-speaker utterances from LibriSpeech or a similar public dataset.

**Build it:**

1. Implement a dual-path LSTM network that processes input speech features in chunks with intra- and inter-chunk LSTMs.
2. Simulate two-speaker mixtures by overlapping single-speaker audio segments and extract features (e.g., log Mel spectrograms).
3. Train the mask estimator to predict masks for each speaker's speech using ideal binary masks as targets.
4. Visualize the predicted masks alongside the ideal masks to assess separation quality.
5. Document the implementation and results in a Jupyter Notebook.

**Ships as:** A Jupyter Notebook repository showing the dual-path LSTM mask estimator implementation, training on simulated mixtures, and visualizations comparing predicted and ideal masks.

**Stretch goal:** Add a simple evaluation metric such as signal-to-distortion ratio (SDR) improvement to quantify separation quality.

### Intermediate — Reproducing SURT 2.0 on LibriCSS Meeting Data
*Effort: 2 weekends, ~20 hours*

You set up and run the SURT 2.0 model using the authors' released k2 codebase to train and evaluate on the LibriCSS dataset. You compare the word error rate (WER) results to the paper's reported metrics and experiment with enabling/disabling auxiliary CTC loss to observe its effect.

**Why it shows you understood the paper:** This project shows you can work with the authors' code, understand the training pipeline, and reproduce key results on a public meeting benchmark, confirming comprehension of SURT 2.0's core contributions and evaluation.

**Grounded in:** Demonstrated strong performance on three public meeting benchmarks (LibriCSS, AMI, ICSI) with open-source training recipes and models.

**Tech stack:** Python 3.11, PyTorch, k2-fsa/k2 toolkit, Kaldi (for LibriCSS data preparation), Linux shell scripting

**Data:** LibriCSS dataset, a publicly available meeting-style multi-speaker dataset used in the paper for evaluation.

**Build it:**

1. Clone and set up the k2 repository from https://github.com/k2-fsa/k2 and install dependencies.
2. Download and prepare the LibriCSS dataset using Kaldi scripts or instructions.
3. Run the SURT 2.0 training recipe provided by the authors on LibriCSS simulated mixtures.
4. Evaluate the trained model on LibriCSS test sets and record WER metrics.
5. Modify the training configuration to disable auxiliary CTC loss and compare the impact on WER.
6. Document the setup, training, evaluation, and findings in a README.

**Verified links from the paper:**

- <https://github.com/k2-fsa/k2> — released by the paper's authors
- <https://github.com/kaldi-asr/kaldi> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with scripts and instructions to reproduce SURT 2.0 training and evaluation on LibriCSS, including WER comparisons with and without auxiliary losses.

**Stretch goal:** Implement branch tying in the masking network and evaluate its effect on omission and leakage errors.

### Advanced — Extending SURT 2.0 for More Than Two Overlapping Speakers
*Effort: 3+ weeks*

You experiment with modifying the SURT 2.0 architecture to handle three overlapping speakers by extending the mask estimator and output branches. You simulate three-speaker mixtures based on the paper's mixture simulation method and adapt training procedures. You analyze challenges in scaling and report preliminary results.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, demonstrating your ability to extend the model architecture and training to more complex multi-talker scenarios, a non-trivial research engineering task.

**Grounded in:** SURT 2.0 is limited to scenarios with at most two overlapping speakers per time frame. Future direction: Extend SURT framework to handle more than two simultaneous speakers and more complex meeting scenarios.

**Tech stack:** Python 3.11, PyTorch, k2-fsa/k2 toolkit, Kaldi, Linux shell scripting

**Data:** Simulated three-speaker mixtures generated by extending the authors' force-aligned subsegment mixture method using LibriSpeech or similar single-speaker data.

**Build it:**

1. Study the SURT 2.0 mask estimator and output branch design to understand how to add a third output branch.
2. Modify the masking network to predict three masks corresponding to three speakers.
3. Implement a data simulation pipeline to create three-speaker overlapped mixtures using force-aligned subsegments and pause/overlap statistics.
4. Adapt the training loss functions (e.g., pruned transducer loss, auxiliary CTC/masking losses) to support three output branches.
5. Train the extended SURT 2.0 model on the simulated three-speaker mixtures and monitor convergence.
6. Evaluate the model on synthetic test mixtures and analyze omission, leakage, and WER metrics.
7. Document architectural changes, training challenges, and results.

**Verified links from the paper:**

- <https://github.com/k2-fsa/k2> — released by the paper's authors
- <https://github.com/kaldi-asr/kaldi> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code and documentation for an extended SURT 2.0 model supporting three overlapping speakers, including data simulation scripts and evaluation results.

**Stretch goal:** Incorporate a joint decoding algorithm that processes all output branches simultaneously to reduce errors, as suggested in the paper's future directions.

_LibriCSS dataset preparation requires Kaldi and some familiarity with speech data pipelines; ensure you have access to compute resources suitable for training SURT 2.0 models._
