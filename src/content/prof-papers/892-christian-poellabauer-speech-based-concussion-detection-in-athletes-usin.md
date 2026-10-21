---
title: "892 · Speech-based concussion detection in athletes using Mel-spectrograms and convolutional neural networks — Christian Poellabauer"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-christian-poellabauer"
source_hash: "471e53583cb6e20182e2d2dedb130bef5fbe38ce4f17cc3af83bb9d72e5d87de"
sequence: 892
generator: "outreach-garden: managed"
---

# 892 · Speech-based concussion detection in athletes using Mel-spectrograms and convolutional neural networks

## At a glance

- **Professor:** Christian Poellabauer
- **Institution:** Florida International University
- **Paper:** [Speech-based concussion detection in athletes using Mel-spectrograms and convolutional neural networks](https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2026.1830075/pdf)
- **Authors:** Rahmina Rubaiat, Christian Poellabauer
- **Year:** 2026

## Paper overview

This study developed a deep learning model using speech recordings from athletes to detect concussions. By analyzing eight different speech tasks with mel spectrograms and convolutional neural networks, the model distinguished concussed athletes from healthy controls with high accuracy, especially on tasks involving dynamic speech like reading and rapid syllable repetition. Sustained vowel sounds were less effective for detection. The work suggests speech analysis can be a non-invasive tool to support concussion assessment.

### Why it matters

**Research problem:** Concussion diagnosis is challenging because conventional imaging often fails to detect subtle functional brain abnormalities, and current assessments rely on subjective symptom reports. There is a need for objective, scalable, non-invasive digital biomarkers to detect concussion-related neurological dysfunction.

**Why it matters:** Timely and accurate concussion detection is critical to prevent prolonged symptoms and adverse cognitive, behavioral, and motor outcomes in athletes. Speech reflects complex brain functions and may reveal subtle concussion effects not captured by imaging, offering a promising complementary diagnostic approach.

**Key contributions:**

- Demonstrated the effectiveness of a mel-spectrogram-based CNN for concussion detection from speech across multiple task types.
- Compared the discriminative value of articulation-rich reading tasks, diadochokinetic (DDK) motor-speech tasks, and sustained vowel phonation tasks.
- Provided interpretability insights via Grad-CAM visualizations showing model focus on phonetic transitions and motor coordination cues.
- Highlighted the importance of speech task selection for digital concussion diagnostics.

## About the professor

**Christian Poellabauer** — Professor, Knight Foundation School of Computing and Information Sciences, Florida International University.

Research interests: effective and efficient ways to collect and analyze sensor data at scale

### Research links

- [Faculty/profile page](https://users.cs.fiu.edu/~cpoellab)
- [Lab website](http://mosaic.cis.fiu.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** deep learning for audio processing
**The paper assumes:** convolutional neural networks, mel spectrograms, audio signal processing, deep learning model training and evaluation
**Already in this field?** Skip this entirely if you already understand convolutional neural networks applied to audio data and mel spectrogram representations.

This background prepares the reader to understand the deep learning methods applied to audio processing in the paper, specifically convolutional neural networks (CNNs) on mel spectrograms for speech-based concussion detection. The rigorous course offers a thorough university-level foundation in neural networks for signal processing, ideal for those seeking deep technical understanding. The fast track provides a concise, practical introduction to deep learning for audio, suitable for readers who want a focused overview without investing extensive time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Neural Networks for Signal Processing – I](https://www.youtube.com/playlist?list=PLgMDNELGJ1CZn1399dV7_U4VBNJflRsua) — NPTEL - Indian Institute of Science, Bengaluru · 67 videos · 27.9h across the first 60 episodes

**Watch only this:** Lectures 2 through 23 (ee53 lec02 Introduction to Neural Networks through ee53 lec23 Convolutional Neural Networks (CNN)), about 8 hours — covering core neural network concepts, learning algorithms, and CNNs applied to signal processing.

*Why it unblocks this paper:* This NPTEL course covers neural networks for signal processing, including convolutional neural networks, which are central to the paper's methodology. It provides a rigorous, structured foundation on neural network architectures and learning processes relevant to audio signal analysis.

*If you want all of it:* About 27.9 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Deep Learning Audio](https://www.youtube.com/playlist?list=PLEHtn5PGiXADq0KCqvndVdWPvgOCINIMP) — Joey Foursheds · 11 videos · 4.4h across 11 episodes

**Watch only this:** Episodes 1, 7, and 8 (Sound play with Convolution Neural Networks; Machine Learning for Audio Signals in Python - 08 Variational Autoencoder (VAE) in PyTorch; How To Implement Audio Data Augmentation in Python), about 1 hour 10 minutes total — focusing on CNNs for audio and data augmentation.

*Why it unblocks this paper:* This playlist by Joey Foursheds offers a concise, practical introduction to deep learning applied to audio, including CNNs and audio data augmentation techniques, directly relevant to the paper's approach.

*If you want all of it:* About 4.4 hours across 11 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on speech-based concussion detection using mel-spectrograms and CNNs, start by building foundational knowledge on speech signal processing, especially mel-spectrogram representations, followed by convolutional neural networks applied to audio data. Next, explore speech motor control and diadochokinetic tasks to grasp the speech tasks used for concussion detection. Then, study interpretability methods like Grad-CAM to understand how the model's decisions are visualized. Finally, review data augmentation techniques for audio to appreciate how model robustness was enhanced. The learning path culminates with the authors' own talk or closest relevant expert talks on concussion assessment and speech analysis.

### Mel-spectrograms in speech analysis *(prerequisite)*
Mel-spectrograms are a core audio representation transforming raw speech signals into a time-frequency image suitable for CNN input. Understanding how speech is processed into mel-spectrograms is essential for grasping the data preprocessing in the paper.

*How the paper uses it:* The paper uses mel-spectrograms to convert speech recordings into input features for the CNN model.

▶ [Speech Processing - L25 - Frequency-Domain Methods – From the Spectrograms to MFCCs](https://www.youtube.com/watch?v=mutAYQqTRns) — Agha Ali Raza - Youtube Channel · 1:09:02 · 4y ago

### Convolutional neural networks for audio *(prerequisite)*
Convolutional neural networks (CNNs) are the primary deep learning architecture used for classifying audio signals in this study. Learning how CNNs operate on audio data, including feature extraction and classification, is critical to understanding the model design.

*How the paper uses it:* The study applies a CNN to mel-spectrograms for concussion classification from speech.

▶ [MIT 6.S191 (2024): Convolutional Neural Networks](https://www.youtube.com/watch?v=2xqkSUhmmXU) — Alexander Amini · 1:07:58 · 2y ago

### Speech motor control and diadochokinetic tasks *(prerequisite)*
Diadochokinetic (DDK) tasks assess motor speech coordination, which is relevant because the paper finds these tasks particularly discriminative for concussion detection. Understanding the neurophysiology and speech motor control behind these tasks helps contextualize the speech task selection.

*How the paper uses it:* The paper compares DDK motor-speech tasks with other speech tasks for concussion detection effectiveness.

▶ [Sensorimotor Control and Speech Impairment: A Model for Neurodevelopmental Disorders](https://www.youtube.com/watch?v=tCCwiA5owys) — University of California Television (UCTV) · 44:26 · 3y ago

### Interpretability methods in deep learning *(prerequisite)*
Interpretability techniques like Grad-CAM visualize which input features a CNN focuses on for its decisions. This is important to understand how the model identifies concussion-related speech features and to evaluate the qualitative interpretability analysis presented.

*How the paper uses it:* Grad-CAM is used in the paper to interpret model attention on speech features for concussion detection.

▶ [Lec 25 Grad-CAM and Class Activation Maps (CAMs)](https://www.youtube.com/watch?v=uN7BibMYhFU) — NPTEL - Indian Institute of Science, Bengaluru · 49:31 · 8mo ago

### Data augmentation for audio deep learning *(prerequisite)*
Data augmentation techniques improve model robustness and generalization by artificially increasing training data diversity. The paper uses Gaussian noise augmentation to enhance CNN performance, so understanding these methods is key to appreciating the model's reliability.

*How the paper uses it:* Gaussian noise augmentation was applied to speech recordings to improve model generalization in the study.

▶ [What is Audio Data Augmentation? | Djordje Grozdic | DSC Europe 2022](https://www.youtube.com/watch?v=BSvy9qB-NrE) — Data Science Conference · 25:48 · 3y ago

### Paper-specific author talk *(paper-talk search result; attribution unverified)*
Direct talks by the paper authors or closely related expert presentations provide the most precise insights into the study's motivation, methodology, and findings. These talks contextualize the research within concussion assessment and speech analysis.

*How the paper uses it:* Christian Poellabauer, co-author and professor at FIU, leads research on sensor data analytics including speech-based concussion detection.

▶ [UEFA Medical Webinar - On Pitch Concussion Assessment](https://www.youtube.com/watch?v=F6rOL4qOPEk) — UEFA Medical · Streamed 5mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces key concepts to understand speech-based concussion detection using deep learning. Start with foundational knowledge of speech motor control and diadochokinetic tasks to grasp the speech tasks used. Then learn about mel-spectrograms as the audio representation feeding the model. Next, explore convolutional neural networks for audio classification, followed by data augmentation techniques that improve model robustness. Finally, understand interpretability methods like Grad-CAM that reveal how the model focuses on speech features for concussion detection.

### Speech motor control and diadochokinetic tasks *(prerequisite)*
This section explains how speech motor control works and why diadochokinetic (DDK) tasks, which involve rapid repetition of syllables, are used to assess motor coordination in speech. Understanding these tasks helps appreciate why certain speech exercises reveal concussion effects.

*How the paper uses it:* The paper found that DDK and reading tasks, which involve dynamic speech motor control, were more effective for concussion detection than sustained vowels.

▶ [Diadochokinetic Syllable Rate](https://www.youtube.com/watch?v=hP8r0h1PeSI) — Camille Molineux · 8:54 · 11y ago

### Mel-spectrograms in speech analysis *(prerequisite)*
Mel-spectrograms transform raw audio into a visual representation of frequency content over time, scaled to match human hearing. This makes it easier for neural networks to learn meaningful speech features.

*How the paper uses it:* The study converted speech recordings into mel-spectrograms as input to the convolutional neural network for concussion classification.

▶ [What is a Mel Spectrogram? Audio Machine Learning](https://www.youtube.com/watch?v=MtvD2zyZE0M) — DrawTheLogic · 8:09 · 5mo ago

### Convolutional neural networks for audio *(prerequisite)*
Convolutional neural networks (CNNs) are deep learning models that automatically learn spatial patterns, such as frequency-time features in spectrograms, to classify audio signals effectively.

*How the paper uses it:* The core model in the paper is a CNN trained on mel-spectrograms to distinguish concussed from healthy athletes based on speech.

▶ [13. Speech Recognition with Convolutional Neural Networks in Keras/TensorFlow](https://www.youtube.com/watch?v=Qf4YJcHXtcY) — CoreWeave · 14:01 · 7y ago

### Data augmentation for audio deep learning *(prerequisite)*
Data augmentation artificially increases training data diversity by applying transformations like adding noise, which helps models generalize better to new, unseen audio samples.

*How the paper uses it:* The paper used Gaussian noise augmentation on speech recordings to improve the CNN’s robustness and generalization.

▶ [Audio Data Augmentation Is All You Need](https://www.youtube.com/watch?v=HH_h52I_Qeg) — Valerio Velardo - The Sound of AI · 15:54 · 4y ago

### Interpretability methods in deep learning *(prerequisite)*
Interpretability techniques like Grad-CAM visualize which parts of the input a CNN focuses on to make decisions, helping to understand and trust model predictions.

*How the paper uses it:* Grad-CAM was used in the study to show that the CNN attends to phonetic transitions and motor coordination cues in speech for concussion detection.

▶ [Grad-CAM Explained in 7 Minutes](https://www.youtube.com/watch?v=qFDLq_5oMo8) — TeenAIVerse by Deekshita Joshi · 7:21 · 2mo ago

## Already in your library

- [Convolutional Neural Networks | CNN | Kernel | Stride | Padding | Pooling | Flatten | Formula](https://www.youtube.com/watch?v=Y1qxI-Df4Lk) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [MIT 6.S191 (2025): Convolutional Neural Networks](https://www.youtube.com/watch?v=oGpzWAlP5p0) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [MIT 6.S191: Convolutional Neural Networks](https://www.youtube.com/watch?v=pqIcoskUuWs) — also for: An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification (Sumitra Mukherjee)
- [Grad-CAM Explained | FREE XAI Course | L7 - Gradient-weighted Class Activation Mapping](https://www.youtube.com/watch?v=_QiebC9WxOc) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [Data Augmentation in Deep Learning | CNN](https://www.youtube.com/watch?v=sM2C-SsREgM) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [Image Data Augmentation Explained | Boost Model Accuracy with Smart Techniques](https://www.youtube.com/watch?v=70gmWbwUOEE) — also for: An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification (Sumitra Mukherjee)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's approach to speech-based concussion detection using mel spectrograms and CNNs. The beginner project focuses on reproducing a core visualization from the paper to grasp mel spectrogram generation and model attention. The intermediate project implements the core CNN classification method on a smaller or simulated dataset, comparing task types as in the paper. The advanced project extends the work by addressing a stated limitation or future direction, such as testing model robustness under noisy conditions or exploring alternative acoustic features for sustained vowel tasks.

### Beginner — Mel-Spectrogram Visualization and Grad-CAM Interpretation
*Effort: a weekend, ~8 hours*

You build a Python notebook that loads sample speech audio (e.g., from public speech datasets or simulated data), converts it into mel spectrograms, and applies a simple pretrained CNN to generate Grad-CAM visualizations highlighting model attention on speech features. You reproduce a figure similar to the paper's Grad-CAM visualizations for reading and sustained vowel tasks.

**Why it shows you understood the paper:** This project demonstrates you understand how mel spectrograms represent speech signals and how Grad-CAM can interpret CNN focus areas, directly reflecting the paper's interpretability analysis.

**Grounded in:** Grad-CAM visualizations revealed focused model attention on dynamic speech features for reading and DDK tasks, but diffuse attention for sustained vowels.

**Tech stack:** Python 3.11, librosa, matplotlib, PyTorch

**Data:** Use publicly available speech samples from open datasets like LibriSpeech or simulate short speech segments resembling reading and vowel phonation tasks.

**Build it:**

1. Load or record short speech samples representing reading and sustained vowel tasks.
2. Convert audio samples into mel spectrograms using librosa.
3. Define or load a simple CNN model pretrained on speech spectrograms.
4. Implement Grad-CAM to visualize model attention on the spectrogram inputs.
5. Plot and compare Grad-CAM heatmaps for dynamic speech vs. sustained vowel samples.
6. Write a README explaining the relation to the paper's interpretability results.

**Ships as:** A Jupyter notebook and README showing mel spectrogram generation and Grad-CAM visualizations that qualitatively reproduce the paper's attention patterns.

**Stretch goal:** Add Gaussian noise augmentation to the audio and show how Grad-CAM attention changes.

### Intermediate — CNN-Based Concussion Detection on Simulated Speech Tasks
*Effort: 1-3 weekends, ~20 hours*

You implement the core CNN classification pipeline described in the paper: convert speech audio into mel spectrograms, augment data with Gaussian noise, train a CNN to classify simulated concussion vs. control labels on multiple speech tasks (reading, DDK, sustained vowels). You compare classification accuracy across task types and report metrics like accuracy, precision, and recall.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's core method of using mel spectrograms and CNNs for concussion detection, including data augmentation and task-based performance comparison.

**Grounded in:** The study collected speech recordings from athletes performing eight speech tasks, converted audio to mel spectrograms, applied Gaussian noise augmentation, and trained a CNN with participant-level cross-validation, achieving >94% accuracy on reading and DDK tasks but lower on sustained vowels.

**Tech stack:** Python 3.11, PyTorch, librosa, scikit-learn, numpy, matplotlib

**Data:** Simulate a small dataset of speech audio representing reading, DDK, and sustained vowel tasks with binary labels for concussion/control, as no public dataset matches the paper's proprietary data.

**Build it:**

1. Simulate or collect small speech audio samples for three task types with binary labels.
2. Convert audio to mel spectrograms and apply Gaussian noise augmentation.
3. Define and train a CNN classifier on the spectrogram data using participant-level splits.
4. Evaluate model performance with accuracy, precision, recall, and F1 score per task.
5. Compare and visualize classification results across task types.
6. Document the pipeline and relate findings to the paper's reported results.

**Ships as:** A runnable Python project with training scripts, evaluation metrics, and a report comparing task-wise concussion detection performance.

**Stretch goal:** Implement Grad-CAM visualizations to interpret model attention on different tasks.

### Advanced — Robust Speech-Based Concussion Detection under Noisy Conditions
*Effort: few weeks, ~40+ hours*

You extend the CNN concussion detection pipeline by investigating model robustness to real-world noise and device variability, addressing a key limitation noted in the paper. You collect or simulate speech data with added environmental noise, retrain and evaluate the CNN, and explore alternative acoustic features or modeling approaches for sustained vowel tasks to improve detection performance.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating deep comprehension of the method and its practical challenges, and contributes a novel extension by improving robustness and exploring feature/model alternatives.

**Grounded in:** Controlled recording conditions may not reflect real-world noise and device variability; future directions include exploring robustness under naturalistic, noisy, and less standardized recording conditions and alternative features for sustained vowel tasks.

**Tech stack:** Python 3.11, PyTorch, librosa, scikit-learn, numpy, matplotlib

**Data:** Use simulated speech data augmented with various real-world noise profiles (e.g., background chatter, traffic) to mimic less controlled conditions; no original dataset available.

**Build it:**

1. Augment simulated speech data with diverse real-world noise samples at varying SNR levels.
2. Retrain the CNN model on noisy data and evaluate performance degradation compared to clean data.
3. Experiment with alternative acoustic features (e.g., MFCCs, pitch, jitter) for sustained vowel tasks.
4. Compare CNN performance using mel spectrograms vs. alternative features on vowel tasks.
5. Analyze results and write a detailed report discussing robustness improvements and feature effectiveness.
6. Optionally, implement quantitative interpretability methods to link model attention to acoustic changes.

**Ships as:** A comprehensive project repository with noisy data augmentation scripts, retrained models, comparative evaluations, and a report addressing the paper's limitations and future directions.

**Stretch goal:** Apply the pipeline to a small external dataset of neurological speech disorders to explore transferability.

_The paper's authors did not release code or datasets; all projects rely on simulated or publicly available speech data approximating the paper's tasks._
