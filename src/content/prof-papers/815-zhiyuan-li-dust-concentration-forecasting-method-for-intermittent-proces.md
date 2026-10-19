---
title: "815 · Dust Concentration Forecasting Method for Intermittent Processing of Powder and Granular Materials — Zhiyuan Li"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zhiyuan-li"
source_hash: "94149be48b595bfea4776b688d1acb7baaf18235434e576ca427c2504137a493"
sequence: 815
generator: "outreach-garden: managed"
---

# 815 · Dust Concentration Forecasting Method for Intermittent Processing of Powder and Granular Materials

## At a glance

- **Professor:** Zhiyuan Li
- **Institution:** Purdue University
- **Paper:** [Dust Concentration Forecasting Method for Intermittent Processing of Powder and Granular Materials](https://www.mdpi.com/1424-8220/26/13/4207/pdf?version=1783058137)
- **Authors:** Mingming Wang, Zhiyuan Li, Chaobo Li, Xiaoyun Sun, Yi Wang, Zhaofeng He
- **Year:** 2026

## Paper overview

This paper presents a new forecasting model to predict dust concentration changes during intermittent processing of powder and granular materials, which is important for workplace safety. The model uses an advanced Transformer-based architecture combined with a linear trend model to better capture complex and abrupt changes in dust levels. Experiments on a public smoke-sensing dataset show that the model outperforms existing methods in accuracy and early warning capability, although further validation on real industrial data is needed.

### Why it matters

**Research problem:** Forecasting high-frequency, multivariate dust concentration sequences during intermittent processing of powder and granular materials is challenging due to abrupt changes, local accumulation, and complex coupling among multiple sensors. Existing models struggle to capture global dependencies and local trends simultaneously, limiting early warning effectiveness.

**Why it matters:** Accurate real-time forecasting of dust concentration is critical for occupational health and safety, as dust accumulation can cause respiratory issues and safety hazards like dust explosions. Current monitoring methods rely on lagging alarms and low-frequency data, which are insufficient for timely warnings in industrial settings.

**Key contributions:**

- Introduction of a progressive dual-stage feed-forward network within the iTransformer encoder to improve nonlinear feature refinement for high-frequency dust concentration sequences.
- Incorporation of a DLinear auxiliary branch to complement the iTransformer by modeling local linear trends and fluctuations.
- Design of an adaptive gated fusion mechanism that dynamically weights the contributions of the iTransformer and DLinear branches according to the characteristics of the input sequence.
- Comprehensive evaluation on a public 1 Hz smoke-sensing dataset demonstrating superior forecasting accuracy and early warning performance compared to multiple baseline models.
- Analysis of warning-oriented metrics to assess model performance during high-concentration dust events, highlighting improvements in peak detection and false alarm reduction.

## About the professor

**Zhiyuan Li** — Professor of Computer Science, Department of Computer Science, Purdue University.

Research interests: compiler techniques for parallel processing and locality enhancement, programming interfaces and compiler support for innovative parallel software, programming environments and run-time systems for resource-constrained distributed systems

### Research links

- [Faculty/profile page](https://www.cs.purdue.edu/people/faculty/ci.html)
- [Identity evidence](https://www.cs.purdue.edu/people/faculty/ci)
- [Professor website](https://www.cs.purdue.edu/homes/ci/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Time Series Forecasting with Transformers
**The paper assumes:** Transformer architectures for time series forecasting, multivariate time series modeling, and sequence-to-sequence prediction methods
**Already in this field?** Skip this entirely if you already understand Transformer models applied to time series forecasting and their architectural adaptations.

This background focuses on time series forecasting with Transformers, essential for understanding the novel iTransformer architecture and its components in the paper. The rigorous course offers a deep, structured foundation in time series modeling and forecasting techniques, while the fast track provides a concise, practical overview of modern time series forecasting methods including Transformer-based approaches. Choose the course for comprehensive theory and application depth, or the fast track for a quicker, intuition-driven grasp of key concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Jan 2025 - Time Series Modelling and Forecasting with Applications in R](https://www.youtube.com/playlist?list=PLOzRYVm0a65e8s29NCmih-Aww81ax0A0H) — NPTEL IIT Bombay · 61 videos · 29.0h across the first 60 episodes

**Watch only this:** Episodes 1 to 23 (Course Introduction through Smoothing Techniques), about 10.5 hours — covering time series basics, stationarity, decomposition, autocorrelation, and smoothing methods to build a solid foundation for understanding forecasting models.

*Why it unblocks this paper:* This NPTEL IIT Bombay course covers foundational and advanced time series modeling and forecasting techniques, including decomposition, stationarity, and forecasting accuracy, which are crucial for understanding the challenges and evaluation metrics in high-frequency multivariate forecasting as in the paper.

*If you want all of it:* About 29 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Time series forecasting( stat and ML)](https://www.youtube.com/playlist?list=PLfmH-cByb2wsl-pUBkukhuhdrjjg6qS8r) — Mahadee Al Mobin · 20 videos · 10.7h across 20 episodes

**Watch only this:** Episodes 1, 3, 7, 12, and 16 (Feature Engineering for Time Series Forecasting, Timeseries analysis using Darts Library, Feature Engineering, Two Effective Algorithms for Time Series Forecasting, and LSTM is dead. Long Live Transformers!), about 2.5 hours total — these cover core concepts, practical tools, and Transformer relevance.

*Why it unblocks this paper:* This playlist offers concise, practical videos on time series forecasting with a focus on statistical and machine learning methods, including modern Transformer-based approaches, providing a quick yet clear understanding of the techniques relevant to the paper's forecasting model.

*If you want all of it:* About 10.7 hours across 20 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on dust concentration forecasting using a hybrid iTransformer and DLinear model with adaptive fusion, start by building foundational knowledge on multivariate time series forecasting, feed-forward neural networks, linear models for time series trends, and adaptive fusion mechanisms in neural networks. Then, focus on the core concept of Transformer models for time series to grasp the architecture underlying the proposed method. Finally, conclude with the authors' own talk or the closest available expert-level presentation related to dust and environmental measurement to connect theory with application.

### Multivariate time series forecasting *(prerequisite)*
This section covers how multiple sensor variables are modeled jointly in forecasting tasks, which is essential for understanding the paper's approach to handling multiple dust concentration sensors simultaneously. The selected video is a rigorous academic talk from Harvard CMSA that compares autoregressive and recurrent neural network models for multivariate time series, providing a strong theoretical foundation.

*How the paper uses it:* The paper addresses forecasting high-frequency, multivariate dust concentration sequences, making understanding multivariate time series modeling crucial.

▶ [Modeling multivariate time series in economics: Autoregressions versus Recurrent Neural Networks](https://www.youtube.com/watch?v=yxkKjsd9H9I) — Harvard CMSA · 34:20 · 8y ago

### Feed-forward neural networks in deep learning *(prerequisite)*
Understanding feed-forward neural networks is key to grasping the dual-stage feed-forward network refinement component introduced in the paper. The chosen lecture from IIT Madras offers a comprehensive and academic-level explanation of feed-forward networks and backpropagation, suitable for advanced readers.

*How the paper uses it:* The paper introduces a progressive dual-stage feed-forward network within the iTransformer encoder to improve nonlinear feature refinement.

▶ [L25: Feed forward neural networks explained | backpropagation intuition](https://www.youtube.com/watch?v=HHv6Ndo9VBU) — IIT Madras - B.S. Degree Programme · 26:35 · 3y ago

### Linear models for time series trends *(prerequisite)*
This section explains linear trend modeling in time series, which is fundamental to understanding the DLinear auxiliary branch that models local linear trends in the paper. The selected lecture provides a detailed university-level treatment of time series analysis and linear regression methods.

*How the paper uses it:* The DLinear auxiliary branch in the paper complements the iTransformer by modeling local linear trends and fluctuations.

▶ [TIME SERIES ANALYSIS (LINEAR REGRESSION METHOD)](https://www.youtube.com/watch?v=Q-UZlNVDqco) — EZIKAN ACADEMY · 1:08:48 · 4y ago

### Adaptive fusion mechanisms in neural networks *(prerequisite)*
Adaptive fusion mechanisms dynamically combine outputs from different model branches, a key innovation in the paper. The Stanford University lecture on gated recurrent units and related neural network topics provides a rigorous academic perspective on gating mechanisms relevant to adaptive fusion.

*How the paper uses it:* The paper designs an adaptive gated fusion mechanism to dynamically weight the contributions of the iTransformer and DLinear branches.

▶ [Lecture 11: Gated Recurrent Units and Further Topics in NMT](https://www.youtube.com/watch?v=6_MO12fPC-0) — Stanford University School of Engineering · 1:20:00 · 9y ago

### Transformer models for time series
This core section focuses on the Transformer-based architecture used in the paper's forecasting model. The Deep Learning Systems Course lecture covers attention mechanisms and the Transformer architecture in detail, providing the necessary depth to understand the iTransformer variant employed.

*How the paper uses it:* The paper's forecasting model is based on an iTransformer architecture that inverts the modeling dimension to focus on variate-wise dependencies.

▶ [Lecture 20 - Transformers and Attention](https://www.youtube.com/watch?v=IFKRf-BAqZo) — Deep Learning Systems Course · 1:10:16 · 3y ago

### Paper authors' talk *(paper-talk search result; attribution unverified)*
Ideally, the authors' own talk about their novel forecasting model would provide direct insights and detailed explanations. However, no exact talk by the paper authors on this work is available. The closest relevant expert-level talk on environmental measurement of dust concentrations is included to connect the theoretical model with practical dust sensing and monitoring.

*How the paper uses it:* Direct insight from the authors on their novel forecasting model would be ideal; in absence, an expert-level talk on dust measurement is selected.

▶ [Technology for Environmental Measurement of Dust Concentrations](https://www.youtube.com/watch?v=n0G5zNLQKcI) — Tesscorn Aerosol Research · 54:51 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in time series forecasting, starting with multivariate time series to understand how multiple sensor variables interact. Next, it covers feed-forward neural networks to grasp the nonlinear feature refinement used in the model. Then, it explains linear models for time series trends to appreciate the auxiliary linear branch. Following that, adaptive fusion mechanisms are introduced to understand how the model dynamically combines different predictions. Finally, the core Transformer-based architecture for time series forecasting is explored to tie all components together.

### Multivariate time series forecasting *(prerequisite)*
Multivariate time series forecasting involves predicting future values based on multiple interrelated time-dependent variables, which is essential when sensor data from various sources influence each other. Understanding this helps grasp how the model jointly processes multiple dust concentration sensors to capture complex dependencies.

*How the paper uses it:* The paper models high-frequency, multivariate dust concentration sequences from multiple sensors, requiring joint modeling of their interactions.

▶ [181 - Multivariate time series forecasting using LSTM](https://www.youtube.com/watch?v=tepxdcepTbY) — DigitalSreeni · 22:40 · 5y ago

### Feed-forward neural networks in deep learning *(prerequisite)*
Feed-forward neural networks are the basic building blocks of deep learning, where data flows through layers without cycles, enabling nonlinear transformations of input features. This concept is crucial to understand the dual-stage feed-forward network refinement that enhances nonlinear feature extraction in the paper's model.

*How the paper uses it:* The paper introduces a progressive dual-stage feed-forward network within the iTransformer encoder to improve nonlinear feature refinement.

▶ [L-26.1: Feed Forward Neural Network | Machine Learning](https://www.youtube.com/watch?v=2g1wwNpjzKM) — The MaxX Academy · 4:21 · 9mo ago

### Linear models for time series trends *(prerequisite)*
Linear models for time series capture local linear trends and patterns in data, providing a simple but effective way to model gradual changes over time. Understanding these models helps appreciate the DLinear auxiliary branch that complements the nonlinear Transformer branch by modeling local linear trends in dust concentration.

*How the paper uses it:* The DLinear auxiliary branch in the paper models local linear trends and fluctuations to complement the Transformer-based nonlinear modeling.

▶ [Time Series 101: Linear Trend Projection, A Visual Guide](https://www.youtube.com/watch?v=IEhgLamC6l4) — Brandon Foltz · 14:06 · 3y ago

### Adaptive fusion mechanisms in neural networks *(prerequisite)*
Adaptive fusion mechanisms dynamically combine outputs from multiple models or branches based on context, allowing the system to weigh contributions differently depending on input characteristics. This is key to understanding how the paper's model balances nonlinear and linear predictions for better forecasting accuracy.

*How the paper uses it:* The paper designs an adaptive gated fusion mechanism that dynamically weights the iTransformer and DLinear branch outputs based on sequence context.

▶ [Lecture 11: Gated Recurrent Units and Further Topics in NMT](https://www.youtube.com/watch?v=6_MO12fPC-0) — Stanford University School of Engineering · 1:20:00 · 9y ago

### Transformer models for time series
Transformer models use self-attention mechanisms to capture global dependencies in sequences, making them powerful for time series forecasting with complex patterns. Learning about Transformers helps understand the core architecture (iTransformer) used in the paper to model variate-wise dependencies in dust concentration data.

*How the paper uses it:* The paper's core forecasting model is based on an iTransformer architecture that inverts modeling dimensions to focus on variate-wise dependencies among sensors.

▶ [Lecture 20 - Transformers and Attention](https://www.youtube.com/watch?v=IFKRf-BAqZo) — Deep Learning Systems Course · 1:10:16 · 3y ago

## Already in your library

- [Informer: Time series Transformer - EXPLAINED!](https://www.youtube.com/watch?v=aETHYkoJeNY) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Serdar Bozdag)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformer Neural Networks, ChatGPT's foundation, Clearly ...](https://www.youtube.com/watch?v=zxQyTK8quyY) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Temporal Fusion Transformers, EXPLAINED. Advanced Time ...](https://www.youtube.com/watch?v=V14qoa5vZ1I) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [Lecture 10 - Introduction to Neural Networks | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=MfIjxPh6Pys) — also for: Knowledge-augmented Deep Learning and Its Applications: A Survey (Zijun Cui)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [8. Time Series Analysis I](https://www.youtube.com/watch?v=uBeM1FUk4Ps) — also for: VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection (John Paparrizos)
- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [MIT 6.S191 (2025): Recurrent Neural Networks, Transformers ...](https://www.youtube.com/watch?v=GvezxUdLrEk) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [MIT 6.S191: Recurrent Neural Networks, Transformers, and Attention](https://www.youtube.com/watch?v=d02VkQ9MP44) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Serdar Bozdag)
- [C5W3L07 Attention Model Intuition](https://www.youtube.com/watch?v=SysgYptB198) — also for: Leveraging large language models to predict antibiotic resistance in Mycobacterium tuberculosis (Christina Boucher)
- [Backpropagation, intuitively | Deep Learning Chapter 3](https://www.youtube.com/watch?v=Ilg3gGewQ5U) — also for: Neural Control Variates with Automatic Integration (Gordon Wetzstein)
- [Understanding Intuition of Attention Models in Neural Networks | Attention Is All You Need | NerdML](https://www.youtube.com/watch?v=8OuETwIFBkU) — also for: Long-LRM++: Preserving Fine Details in Feed-Forward Wide-Coverage Reconstruction (Fuxin Li)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the dust concentration forecasting model proposed in the paper. The beginner project focuses on reproducing a key component of the model's architecture to grasp its nonlinear feature refinement. The intermediate project involves reimplementing the core hybrid forecasting method and evaluating it on a public smoke-sensing dataset, mirroring the paper's main experiments. The advanced project tackles one of the paper's stated limitations by adapting the model for improved peak amplitude prediction and warning reliability using synthetic or proxy data, showing ability to extend and improve the original work.

### Beginner — Dual-Stage Feed-Forward Network Module
*Effort: a weekend, ~8 hours*

You build a standalone implementation of the dual-stage feed-forward network (DualStageFFN) module described in the paper, which replaces the original feed-forward network in a Transformer encoder. You will implement the two-stage nonlinear feature refinement and test it on synthetic multivariate time series data to observe improved nonlinear representation.

**Why it shows you understood the paper:** This project shows you understand the key architectural innovation of the paper's iTransformer encoder and how dual-stage feed-forward networks enhance nonlinear feature extraction for high-frequency dust concentration sequences.

**Grounded in:** Introduction of a progressive dual-stage feed-forward network within the iTransformer encoder to improve nonlinear feature refinement for high-frequency dust concentration sequences.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook

**Data:** Synthetic multivariate time series data generated to mimic high-frequency sensor readings with nonlinear transient fluctuations.

**Build it:**

1. Implement a PyTorch module for the dual-stage feed-forward network as described in the paper, with two sequential nonlinear transformations and residual connections.
2. Generate synthetic multivariate time series data with nonlinear transient patterns.
3. Integrate the DualStageFFN module into a simple Transformer encoder block.
4. Train the model on the synthetic data for a regression task and compare performance to a baseline Transformer feed-forward network.
5. Visualize loss curves and feature representations to demonstrate improved nonlinear modeling.

**Ships as:** A GitHub repo with the DualStageFFN PyTorch implementation, synthetic data generation script, training notebook, and README explaining the module and experimental results.

**Stretch goal:** Extend the module to include dropout and layer normalization as in the paper and evaluate their impact on training stability.

### Intermediate — Hybrid iTransformer-DLinear Dust Concentration Forecaster
*Effort: 2 weekends, ~20 hours*

You reimplement the core hybrid forecasting model combining the iTransformer with the DLinear auxiliary branch and the adaptive gated fusion mechanism. You train and evaluate it on the public 1 Hz smoke-sensing dataset used as a proxy in the paper, comparing forecasting accuracy and warning metrics against a simple baseline like vanilla Transformer or LSTM.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's main method and results, including the integration of nonlinear and linear trend modeling and adaptive fusion, validating the model's superior forecasting performance.

**Grounded in:** Comprehensive evaluation on a public 1 Hz smoke-sensing dataset demonstrating superior forecasting accuracy and early warning performance compared to multiple baseline models.

**Tech stack:** Python 3.11, PyTorch, NumPy, Pandas, Matplotlib, Jupyter Notebook

**Data:** Public 1 Hz smoke-sensing dataset used in the paper as a proxy benchmark for dust concentration sequences.

**Build it:**

1. Acquire and preprocess the public smoke-sensing dataset to format multivariate time series inputs and targets.
2. Implement the iTransformer encoder with the dual-stage feed-forward network module.
3. Implement the DLinear auxiliary branch to model local linear trends.
4. Design and implement the adaptive gated fusion mechanism to combine outputs from both branches dynamically.
5. Train the hybrid model and a baseline model on the dataset, using MSE and warning-related metrics for evaluation.
6. Plot and compare forecasting results, including peak detection and false alarm rates.

**Ships as:** A GitHub repo containing the full hybrid model implementation, training scripts, evaluation notebooks, and a README documenting the approach, results, and comparison to baseline.

**Stretch goal:** Add ablation studies to isolate the impact of each component (dual-stage FFN, DLinear, adaptive fusion) on forecasting performance.

### Advanced — Improved Peak-Sensitive Dust Concentration Forecasting
*Effort: 3+ weeks*

You extend the hybrid forecasting model to address the paper's limitation of peak underestimation and missed alarms during high-concentration dust events. You develop enhancements such as peak-preserving loss functions, data augmentation for extreme events, or modified fusion strategies. You validate improvements on synthetic or proxy datasets and analyze warning reliability metrics.

**Why it shows you understood the paper:** This project shows your capability to critically analyze the paper's limitations and propose concrete model improvements, advancing the state of dust concentration forecasting and early warning reliability.

**Grounded in:** Peak underestimation and missed alarms remain issues in some high-concentration windows, indicating room for improvement in peak-sensitive forecasting and warning reliability.

**Tech stack:** Python 3.11, PyTorch, NumPy, Pandas, Matplotlib, Jupyter Notebook

**Data:** Synthetic or proxy multivariate time series data with annotated high-concentration peak events, simulating dust concentration spikes.

**Build it:**

1. Review the original hybrid model implementation and identify components affecting peak prediction.
2. Design and implement enhancements such as weighted loss functions emphasizing peak accuracy or data augmentation to increase peak samples.
3. Modify the adaptive fusion mechanism to better handle high-variation contexts.
4. Train and evaluate the enhanced model on synthetic or proxy datasets with peak events.
5. Compare peak detection accuracy, false alarm rate, and warning timing metrics against the original model.
6. Document findings and potential applicability to real industrial dust data.

**Ships as:** A GitHub repo with the enhanced forecasting model code, training and evaluation notebooks, detailed analysis of peak-sensitive metrics, and a README discussing improvements and future work.

**Stretch goal:** Integrate the forecasting model with a simple simulated industrial control system to demonstrate proactive risk management based on predictions.
