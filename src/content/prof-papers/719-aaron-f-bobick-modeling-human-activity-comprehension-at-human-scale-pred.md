---
title: "719 · Modeling human activity comprehension at human scale: prediction, segmentation, and categorization — Aaron F. Bobick"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aaron-f-bobick"
source_hash: "dc344b644fcf215530dfddec198aa7f32d6ada20a406cc87ece884530cdeefcb"
sequence: 719
generator: "outreach-garden: managed"
---

# 719 · Modeling human activity comprehension at human scale: prediction, segmentation, and categorization

## At a glance

- **Professor:** Aaron F. Bobick
- **Institution:** Washington University in St. Louis
- **Paper:** [Modeling human activity comprehension at human scale: prediction, segmentation, and categorization](https://pmc.ncbi.nlm.nih.gov/articles/PMC11497596/pdf/pgae459.pdf)
- **Authors:** Tan T. Nguyen, Matthew A. Bezdeka, Samuel J. Gershman, Aaron F. Bobick, Todd S. Braver, Jeffrey M. Zacks
- **Year:** 2024

## Paper overview

This paper presents computational models that learn to understand and predict human activities by segmenting continuous behavior into meaningful events and categorizing them. The models use recurrent neural networks combined with Bayesian inference to represent event schemas and switch between them based on prediction error or prediction uncertainty. Trained on a large dataset of naturalistic human activities, the models achieve human-like performance in predicting, segmenting, and categorizing activities, with uncertainty-based updating showing closer alignment to human behavior.

### Why it matters

**Research problem:** How does the human cognitive system segment continuous streams of behavior into discrete events and categorize them, and what mechanisms govern when to update internal event models during activity comprehension?

**Why it matters:** Understanding how humans segment and categorize events is crucial for modeling cognition, improving human-robot interaction, and advancing AI systems that perceive and predict human actions in real-world settings.

**Key contributions:**

- Developed SEM-2.0, an improved event comprehension model that initializes new event schemas from a general RNN trained on all activities, uses a uniform prior for schema assignment, and inputs previous scenes to all schemas for prediction.
- Introduced two biologically plausible gating mechanisms for event model updating based on prediction error and prediction uncertainty, creating pe-SEM and uncertainty-SEM variants.
- Trained models on a large-scale naturalistic human activity corpus (META) to enable direct comparison with human segmentation and categorization behavior.
- Demonstrated that event model transitioning based on prediction uncertainty better matches human event segmentation and categorization than prediction error or ungated inference.
- Provided evidence that event schemas generalize across different actors and environments, capturing underlying event dynamics.

## About the professor

**Aaron F. Bobick** — Dean of the School of Engineering & Applied Science and the James M. McKelvey Professor, Washington University in St. Louis.

Research interests: action recognition by computer vision, robot perception for human-robot collaboration

### Research links

- [Faculty/profile page](https://engineering.washu.edu/faculty/Aaron-Bobick.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bayesian inference and recurrent neural networks
**The paper assumes:** Bayesian inference, recurrent neural networks, probabilistic sequence modeling
**Already in this field?** Skip this entirely if you already understand how Bayesian inference works in conjunction with recurrent neural networks for sequence prediction and model selection.

This background focuses on understanding Bayesian inference combined with recurrent neural networks (RNNs), which is essential for grasping the computational modeling of event segmentation and categorization in the paper. The rigorous course offers a deep, structured university-level foundation in the mathematical and probabilistic principles underlying these models, while the fast track provides a concise, intuition-driven introduction to Bayesian inference suitable for quick comprehension. Choose the course for thorough mastery or the fast track for a rapid but solid conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Mathematical Foundations for Machine Learning](https://www.youtube.com/playlist?list=PLgMDNELGJ1CYPJS6m_ygxb4KtHYxh1HjR) — NPTEL - Indian Institute of Science, Bengaluru · 71 videos · 40.3h across the first 60 episodes

**Watch only this:** Lectures 60 to 64 (Minimizing the Cost Function: Gradient Descent Algorithm, Variants of the Gradient Descent Algorithm, Neural Networks, Perceptron, Multilayer Perceptron, Back Propagation Algorithm), about 3.5 hours — these cover neural network fundamentals and training essential for SEM's RNN components; plus Lectures 16 to 20 (Classification, Clustering Techniques, Logistic Regression, Linear Regression, Data and Patterns), about 3 hours — to understand probabilistic classification and data modeling relevant to Bayesian inference.

*Why it unblocks this paper:* This NPTEL course from the Indian Institute of Science, Bengaluru, covers foundational machine learning mathematics including neural networks and probabilistic inference, directly supporting understanding of SEM's RNN and Bayesian inference integration.

*If you want all of it:* About 40.3 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Bayesian Inference](https://www.youtube.com/playlist?list=PL5hM8iFdqkjsQGLOY2FXwh3sDznXrOBQ1) — Ermia Azarkhalili · 15 videos · 16.2h across 15 episodes

**Watch only this:** Episodes 1 (Intro to Bayesian Model Evaluation, Visualization, & Comparison Using ArviZ), 6 (Variational Inference | Evidence Lower Bound (ELBO) | Intuition & Visualization), and 7 (Bayesian Neural Network | Deep Learning), about 3.5 hours total — these provide a focused introduction to Bayesian inference and its application in neural networks relevant to the paper.

*Why it unblocks this paper:* This playlist by Ermia Azarkhalili offers clear, visual, and intuition-first explanations of Bayesian inference concepts, including Bayesian neural networks and probabilistic programming, which are key to understanding the gating mechanisms and schema selection in SEM.

*If you want all of it:* About 16.2 hours across all 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on modeling human activity comprehension, start with foundational concepts including recurrent neural networks for sequence modeling, Bayesian inference in cognitive modeling, and the role of prediction error and uncertainty in brain function. Next, gain familiarity with human activity recognition datasets and evaluation to contextualize the training and testing regime. Finally, focus on the paper's core concept of event segmentation and categorization models, culminating with the authors' own talk or closely related academic presentations to grasp the specific computational approach and findings.

### Recurrent neural networks for sequence modeling *(prerequisite)*
Recurrent neural networks (RNNs) are essential for modeling temporal dependencies in sequential data, which underpins the SEM architecture's ability to capture short-term dynamics in human activity streams. Understanding RNNs, including gated variants like GRUs used in the paper, provides the necessary background to appreciate how the model predicts and segments events over time.

*How the paper uses it:* The SEM model uses recurrent neural networks to represent short-term dynamics of human activities.

▶ [11-785, Fall 22 Lecture 17: Recurrent Networks: Modelling Language, Sequence to Sequence Models](https://www.youtube.com/watch?v=ZmEzjfvP6yk) — Carnegie Mellon University Deep Learning · 1:23:47 · 3y ago

### Bayesian inference in cognitive modeling *(prerequisite)*
Bayesian inference provides a principled framework for updating beliefs and selecting among competing hypotheses, which is central to the SEM model's schema selection and gating mechanisms. A solid grasp of Bayesian cognitive modeling helps in understanding how the model probabilistically infers event boundaries and schema transitions based on prediction uncertainty or error.

*How the paper uses it:* The SEM architecture employs Bayesian inference to select and update event schemas during activity comprehension.

▶ [A beginners guide to Bayesian Cognitive Modelling](https://www.youtube.com/watch?v=NNySqCSmIo4) — Ben Vincent · 44:32 · 5y ago

### Prediction error and uncertainty in brain function *(prerequisite)*
Prediction error and uncertainty are fundamental concepts in neuroscience explaining how the brain updates internal models in response to sensory inputs. These concepts directly relate to the gating mechanisms in the paper's models that decide when to switch event schemas, making this background crucial for understanding the biological plausibility and cognitive relevance of the approach.

*How the paper uses it:* The paper introduces gating mechanisms based on prediction error and prediction uncertainty to govern event model updating.

▶ [BEACON Seminar: Predictive decision-making during exploration in frontal cortex](https://www.youtube.com/watch?v=rj3ovEwg9SM) — Experimental Psychology Dept, University of Oxford · 44:34 · 5y ago

### Human activity recognition datasets and evaluation *(prerequisite)*
Understanding the characteristics and challenges of human activity recognition datasets is important for appreciating the scale and naturalism of the META corpus used in the paper. This knowledge contextualizes the model's training and evaluation, highlighting the rigor and relevance of the experimental setup.

*How the paper uses it:* The models were trained and evaluated on the large-scale naturalistic META dataset to enable direct comparison with human behavior.

▶ [Human Activity Recognition using TensorFlow (CNN + LSTM) | 2 Methods](https://www.youtube.com/watch?v=QmtSkq3DYko) — Bleed AI Academy · 1:18:36 · 5y ago

### Event segmentation and categorization models
This concept is central to the paper, focusing on how continuous human behavior is computationally segmented into discrete events and categorized. Understanding existing models and theories of event cognition provides the theoretical and computational context for the SEM architecture and its novel gating mechanisms.

*How the paper uses it:* The paper advances computational models of event segmentation and categorization, key to human activity comprehension.

▶ [Chris Baldassano MIND Talk "Event Cognition and Segmentation"](https://www.youtube.com/watch?v=PPXVTu5sbE0) — MIND Summer School · 1:19:41 · 8y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talks or closely related academic presentations provide the most direct and detailed insights into the paper's methodology, results, and implications. These talks often include nuanced explanations and discussions not found in the paper, making them invaluable for advanced understanding.

*How the paper uses it:* Direct presentation by the authors or related experts offers the most specific insights into the paper's contributions and findings.

▶ [Human Intelligence & AI: Cognitive Modeling Approaches](https://www.youtube.com/watch?v=s9t5nZ8TSiI) — MIT Schwarzman College of Computing · 1:56:38 · 7mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on modeling human activity comprehension, start by building foundational knowledge of recurrent neural networks (RNNs) for sequence modeling, as they underpin the model's short-term dynamics. Next, learn about Bayesian inference in cognitive modeling, which is crucial for how the model selects and updates event schemas. Then, explore the concepts of prediction error and uncertainty in brain function, which relate to the gating mechanisms for event model updating. After that, gain familiarity with human activity recognition datasets and evaluation to appreciate the data context. Finally, study event segmentation and categorization models, the core computational concepts the paper advances.

### Recurrent neural networks for sequence modeling *(prerequisite)*
Recurrent neural networks (RNNs) are designed to process sequences by maintaining a memory of past inputs, making them ideal for modeling time-dependent data like human activities. Understanding how RNNs capture temporal dependencies helps grasp how the paper models short-term dynamics of events.

*How the paper uses it:* The paper uses RNNs to model the short-term dynamics of human activity sequences within its Structured Event Memory architecture.

▶ [Illustrated Guide to Recurrent Neural Networks: Understanding the Intuition](https://www.youtube.com/watch?v=LHXXI4-IEns) — The AI Hacker · 9:51 · 8y ago

### Bayesian inference in cognitive modeling *(prerequisite)*
Bayesian inference provides a principled way to update beliefs based on new evidence, which is essential in cognitive models for selecting and switching between event schemas. Learning this helps understand how the paper's models decide when to update internal event representations.

*How the paper uses it:* The paper employs Bayesian inference to gate schema selection and update event models based on prediction error or uncertainty.

▶ [A beginners guide to Bayesian Cognitive Modelling](https://www.youtube.com/watch?v=NNySqCSmIo4) — Ben Vincent · 44:32 · 5y ago

### Prediction error and uncertainty in brain function *(prerequisite)*
Prediction error and uncertainty are key concepts in neuroscience describing how the brain detects mismatches between expected and actual inputs and how confident it is in its predictions. These mechanisms inform when to update internal models, directly relating to the gating strategies in the paper.

*How the paper uses it:* The paper introduces gating mechanisms based on prediction error and prediction uncertainty to control event model transitions, mirroring brain function.

▶ [What are Errors and Uncertainty? | Reasons and Causes](https://www.youtube.com/watch?v=oSGCXv-MkaU) — Alpha Science Academy · 13:47 · 7y ago

### Human activity recognition datasets and evaluation *(prerequisite)*
Understanding datasets used for human activity recognition, including their structure and evaluation methods, is important to appreciate how models are trained and validated on real-world data. This knowledge contextualizes the paper's use of the META dataset.

*How the paper uses it:* The paper trains and evaluates its models on the large-scale naturalistic META human activity dataset to compare with human behavior.

▶ [Human Activity Recognition using TensorFlow (CNN + LSTM) | 2 Methods](https://www.youtube.com/watch?v=QmtSkq3DYko) — Bleed AI Academy · 1:18:36 · 5y ago

### Event segmentation and categorization models
Event segmentation and categorization involve dividing continuous behavior into meaningful units and labeling them, which is central to understanding human activity comprehension. Learning these concepts clarifies the paper's core contributions in modeling these processes computationally.

*How the paper uses it:* The paper develops computational models that segment continuous human activity into discrete events and categorize them, achieving human-like performance.

▶ [Chris Baldassano MIND Talk "Event Cognition and Segmentation"](https://www.youtube.com/watch?v=PPXVTu5sbE0) — MIND Summer School · 1:19:41 · 8y ago

## Already in your library

- [Where human intelligence outwits large language models | Nofil Khan | TEDxUnity Grammar Youth](https://www.youtube.com/watch?v=wXQ6eMkKniA) — also for: Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies (Rosa I. Arriaga)
- [Lecture 11 | Detection and Segmentation](https://www.youtube.com/watch?v=nDPWywWRIRo) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [CS 198-126: Lecture 8 - Semantic Segmentation](https://www.youtube.com/watch?v=kxzB2p9gzWU) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [Lecture 10 | Recurrent Neural Networks](https://www.youtube.com/watch?v=6niqTuYFZLQ) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [MIT 6.S191 (2025): Recurrent Neural Networks, Transformers ...](https://www.youtube.com/watch?v=GvezxUdLrEk) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [MIT 6.S191: Recurrent Neural Networks, Transformers, and Attention](https://www.youtube.com/watch?v=d02VkQ9MP44) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Serdar Bozdag)
- [Recurrent Neural Networks (RNNs), Clearly Explained!!!](https://www.youtube.com/watch?v=AsNTP8Kwu80) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [17. Bayesian Statistics](https://www.youtube.com/watch?v=bFZ-0FH5hfs) — also for: Bayesian Neighborhood Adaptation for Graph Neural Networks (Rui Li)
- [L14.4 The Bayesian Inference Framework](https://www.youtube.com/watch?v=0w_4QcvBYII) — also for: Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates (Matthew Berger)
- [Bayes theorem, the geometry of changing beliefs](https://www.youtube.com/watch?v=HZGCoVF3YvM) — also for: Credo: Declarative Control of LLM Pipelines via Beliefs and Policies (Andrew Crotty)
- [Introduction to Bayesian statistics, part 1: The basic concepts](https://www.youtube.com/watch?v=0F0QoMCSKJ4) — also for: Bayesian functional data analysis in astronomy (Tamás Budavári)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's core contributions on modeling human activity comprehension through event segmentation and categorization. The beginner project recreates a simplified event segmentation mechanism using prediction uncertainty gating, the intermediate project builds and evaluates the SEM-2.0 model on the META dataset using the authors' released code, and the advanced project extends the model by incorporating a memory mechanism for schema updating, addressing a key limitation noted by the authors.

### Beginner — Event Segmentation with Prediction Uncertainty Gating
*Effort: a weekend, ~8 hours*

You build a simplified recurrent neural network model that segments a synthetic sequence of human activity scenes into events by gating event model transitions based on prediction uncertainty. The project implements a basic RNN to predict next scene features and uses Bayesian-inspired uncertainty thresholds to decide event boundaries.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key mechanism where prediction uncertainty governs event schema switching, a core contribution that aligns model behavior with human event segmentation.

**Grounded in:** Introduced two biologically plausible gating mechanisms for event model updating based on prediction error and prediction uncertainty, creating pe-SEM and uncertainty-SEM variants.

**Tech stack:** Python 3.11, TensorFlow or PyTorch, NumPy, Matplotlib

**Data:** Synthetic sequence data simulating continuous human activity features, generated by you to mimic scene vectors as described in the paper.

**Build it:**

1. Generate a synthetic sequence of scene vectors representing continuous human activity features.
2. Implement a simple RNN to predict the next scene vector given the current input.
3. Calculate prediction uncertainty (e.g., variance or entropy) from the RNN's output distribution.
4. Define a gating mechanism that triggers event boundary detection when uncertainty exceeds a threshold.
5. Visualize predicted event boundaries alongside the input sequence.
6. Write a README explaining the gating mechanism and how it relates to the paper's uncertainty-SEM model.

**Ships as:** A GitHub repository with code to run the synthetic event segmentation model, visualizations of event boundaries, and a README linking the implementation to the paper's gating mechanism.

**Stretch goal:** Add a baseline gating mechanism based on prediction error and compare segmentation results with the uncertainty gating.

### Intermediate — Reproducing SEM-2.0 Event Segmentation on META Dataset
*Effort: 2 weekends, ~20 hours*

You set up and run the authors' SEM-2.0 model implementation on the publicly available META dataset to reproduce event segmentation and categorization results. You compare SEM-2.0 with the uncertainty-SEM variant and a simple baseline, evaluating segmentation boundary correlation with human annotations.

**Why it shows you understood the paper:** By running and extending the authors' released code, you demonstrate comprehension of the full SEM architecture, training procedures, and evaluation metrics, directly engaging with the paper's core experimental results.

**Grounded in:** Trained SEM and two variants that gate schema inference based on prediction error (pe-SEM) or prediction uncertainty (uncertainty-SEM) on a large, richly annotated naturalistic activity dataset (META). The models' outputs were compared directly with human segmentation and categorization judgments.

**Tech stack:** Python 3.11, TensorFlow, Git, Jupyter Notebook

**Data:** META dataset from https://osf.io/3embr/, the authors' publicly available naturalistic human activity dataset.

**Build it:**

1. Clone the authors' SEM-2.0 and uncertainty-SEM code repositories from https://github.com/NguyenThanhTan/SEM2 and https://github.com/mbezdek/extended-event-modeling.
2. Download and preprocess the META dataset from https://osf.io/3embr/ according to the authors' instructions.
3. Train SEM-2.0 and uncertainty-SEM models on the META dataset using provided scripts.
4. Evaluate model event segmentation boundaries against human annotations using correlation metrics.
5. Compare SEM-2.0 and uncertainty-SEM performance with a simple baseline (e.g., ungated RNN prediction error).
6. Document results and insights in a Jupyter Notebook and README.

**Verified links from the paper:**

- <https://osf.io/3embr> — released by the paper's authors
- <https://github.com/mbezdek/extended-event-modeling> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/NguyenThanhTan/SEM2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo containing code to train and evaluate SEM-2.0 and uncertainty-SEM on META, with notebooks showing segmentation results and comparisons to human data.

**Stretch goal:** Implement a visualization of the rapid event model transitions (flurries) predicted by SEM-2.0 and uncertainty-SEM at event boundaries.

### Advanced — Incorporating Memory for Schema Updating in SEM
*Effort: 3+ weeks*

You extend the SEM-2.0 architecture by adding a memory mechanism to enable schema updating when re-encountering events, addressing the paper's limitation of lacking memory for schema updating. You implement and test this extension on the META dataset, analyzing improvements in event segmentation and categorization consistency.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep understanding of SEM's architecture and the cognitive modeling challenges of event schema updating and memory integration.

**Grounded in:** SEM models lack memory for schema updating, requiring repeated inference when re-encountering events.

**Tech stack:** Python 3.11, TensorFlow, Git, Jupyter Notebook

**Data:** META dataset from https://osf.io/3embr/, used to train and evaluate the extended SEM model.

**Build it:**

1. Study the SEM-2.0 codebase and understand its event schema inference and gating mechanisms.
2. Design and implement a memory module (e.g., an external memory network or recurrent memory cell) to store and update event schemas.
3. Integrate the memory module into SEM-2.0 to allow schema updating upon re-encountering events.
4. Train the extended SEM model on the META dataset and evaluate event segmentation and categorization performance.
5. Compare results with the original SEM-2.0 and uncertainty-SEM models to assess improvements.
6. Document the architecture changes, training process, and evaluation results in a detailed README and notebook.

**Verified links from the paper:**

- <https://osf.io/3embr> — released by the paper's authors
- <https://github.com/mbezdek/extended-event-modeling> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/NguyenThanhTan/SEM2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the extended SEM implementation, training scripts, evaluation notebooks, and documentation explaining the memory integration and its impact.

**Stretch goal:** Explore alternative neural architectures such as convolutional LSTMs to better capture spatiotemporal relations as suggested in the paper's future directions.
