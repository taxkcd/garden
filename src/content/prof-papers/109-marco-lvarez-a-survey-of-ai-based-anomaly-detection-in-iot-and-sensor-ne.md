---
title: "109 · A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks — Marco Álvarez"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marco-alvarez"
source_hash: "47f14eeca964601f1fa51a8c8cc0478347367cf16b471e45459b5c269b40b0c8"
sequence: 109
generator: "outreach-garden: managed"
---

# 109 · A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks

## At a glance

- **Professor:** Marco Álvarez
- **Institution:** University of Rhode Island
- **Paper:** [A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks](https://mdpi-res.com/d_attachment/sensors/sensors-23-01352/article_deploy/sensors-23-01352-v2.pdf?version=1675068999)
- **Authors:** Kyle DeMedeiros, Abdeltawab Hendawi, Marco Alvarez
- **Year:** 2023

## Paper overview

This paper surveys recent research on using machine learning and deep learning techniques to detect anomalies in Internet of Things (IoT) and sensor networks. It defines what anomalies are, categorizes them, reviews various detection methods and applications, compares their performance, and identifies gaps and future research directions.

### Why it matters

**Research problem:** With the rapid growth of IoT devices and sensor networks, detecting anomalies—unexpected or abnormal events—is critical for security, fault detection, and system monitoring. However, anomaly detection in these networks is challenging due to diverse anomaly types, data characteristics, and the need for generalizable, efficient detection methods.

**Why it matters:** IoT devices are increasingly embedded in homes, vehicles, and industrial infrastructure, making anomaly detection vital to prevent malicious attacks, sensor faults, and environmental hazards. Effective anomaly detection ensures system reliability, security, and safety in these pervasive networks.

**Key contributions:**

- Provides clear definitions and taxonomy of anomalies in IoT/sensor networks (point, collective, continuous).
- Surveys a wide range of AI-based anomaly detection methods, including graph neural networks, autoencoders, LSTMs, and transformers.
- Highlights the importance of graph-based data representations to capture dependencies between IoT devices.
- Compares detection approaches across different applications such as malicious actor detection, sensor fault detection, and time series anomaly detection.
- Identifies gaps in current research, such as the need for real-time, energy-efficient, and generalizable anomaly detection methods.

## About the professor

**Marco Álvarez** — Associate Professor, Department of Computer Science and Statistics, University of Rhode Island.

Research interests: Artificial Intelligence, Deep Learning, programming languages, compilers, software optimization, computer vision, computational biology

### Research links

- [Faculty/profile page](https://homepage.cs.uri.edu/~malvarez)
- [Resolved homepage](https://homepage.cs.uri.edu/~malvarez/#welcome)
- [Google Scholar](https://scholar.google.com/citations?user=GmGOux8AAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/marcoalvarez)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Neural Networks
**The paper assumes:** graph neural networks, graph theory basics, deep learning on graphs
**Already in this field?** Skip this entirely if you already understand graph neural networks and their application in machine learning.

To understand the AI-based anomaly detection methods surveyed in the paper, especially those leveraging graph neural networks (GNNs) and attention mechanisms, a solid grasp of graph neural networks is essential. The rigorous course option offers a comprehensive, university-level deep dive into graph machine learning, while the fast track provides a concise, intuition-driven introduction to GNN concepts and key architectures. Choose the course for depth and theory, or the fast track for a quick, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W Machine Learning with Graphs I Jure Leskovec](https://www.youtube.com/playlist?list=PLoROMvodv4rOP-ImU-O1rYRg2RFxomvFp) — Stanford Online · 47 videos · 24.1h across 47 episodes

**Watch only this:** Lectures 1.1 to 1.3 (Why Graphs, Applications, Graph Representation), 6.1 to 6.3 (Introduction to GNNs, Basics of Deep Learning, Deep Learning for Graphs), and 7.1 to 7.3 (General Perspective on GNNs, Single Layer, Stacking Layers) — about 4.5 hours total. This subset covers graph fundamentals, GNN basics, and architectural insights critical for understanding the paper.

*Why it unblocks this paper:* Stanford CS224W is a top-tier university course focused specifically on machine learning with graphs, covering foundational concepts, node embeddings, graph neural networks, and attention mechanisms, directly aligning with the paper's emphasis on graph-based deep learning for anomaly detection.

*If you want all of it:* 24.1 hours across all 47 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks (Hands-on)](https://www.youtube.com/playlist?list=PLB1nTQo4_y6sfLtCrGAKG_l7xOHjtYqBk) — LLMs Explained - Aggregate Intellect - AI.SCIENCE · 6 videos · 0.6h across 6 episodes

**Watch only this:** All 6 episodes (Introduction to Graphs, Graph Definition, ML Tasks on Graphs, Simple Graph Convolution, Graph Attention Networks, DeepWalk and Node2Vec) — about 36 minutes total. This covers the essential concepts and key GNN variants relevant to the paper's methods.

*Why it unblocks this paper:* This short series provides a clear, visual, and intuitive introduction to graph neural networks, including graph definitions, simple graph convolutions, graph attention networks, and popular embedding methods like DeepWalk and Node2Vec, making it ideal for quickly grasping the core ideas used in the paper.

*If you want all of it:* 0.6 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on AI-based anomaly detection in IoT and sensor networks, start with foundational concepts including graph neural networks, time series anomaly detection, unsupervised and semi-supervised learning, and attention mechanisms in deep learning. These prerequisites build the technical background on core methods surveyed in the paper. Finally, focus on the paper authors' own talks and related advanced presentations on AI-based anomaly detection in IoT to connect theory with the paper's specific contributions and insights.

### Graph neural networks *(prerequisite)*
Graph neural networks (GNNs) are essential for modeling the complex dependencies and relationships between IoT devices represented as graphs. Understanding GNN architectures, message passing, and attention mechanisms in GNNs provides the technical foundation for the paper's emphasis on graph-based anomaly detection methods.

*How the paper uses it:* The paper highlights graph neural networks as a core approach to capture dependencies between IoT devices for anomaly detection.

▶ [S2025 Lecture 27 - Graph Neural Networks](https://www.youtube.com/watch?v=by50wVhdl8k) — Carnegie Mellon University Deep Learning · 1:27:47

### Time series anomaly detection *(prerequisite)*
Time series anomaly detection techniques are fundamental for analyzing sensor data streams over time, a common data type in IoT networks. This lecture covers statistical and AI-based methods for detecting anomalies in temporal data, which is critical for understanding the surveyed detection approaches in the paper.

*How the paper uses it:* The paper surveys time series analysis methods as a key category of anomaly detection in sensor networks.

▶ [Shreya Khurana - Realtime Time Series Anomaly Detection in ...](https://www.youtube.com/watch?v=ca4w2ZIZ0S0) — PyData · 30:07

### Unsupervised and semi-supervised learning *(prerequisite)*
Due to the scarcity of labeled anomaly data in IoT, unsupervised and semi-supervised learning paradigms are preferred. This lecture provides a rigorous overview of these learning types, enabling comprehension of the paper's discussion on preferred learning methods for anomaly detection.

*How the paper uses it:* The paper emphasizes unsupervised and semi-supervised learning methods as effective approaches given limited labeled anomaly data.

▶ [L10 Semisupervised Learning and Unsupervised Distribution ...](https://www.youtube.com/watch?v=HTtN7rO-jBI) — Pieter Abbeel · 1:27:25

### Attention mechanisms in deep learning *(prerequisite)*
Attention mechanisms enhance neural networks by allowing models to focus on relevant parts of input data, improving performance in complex tasks. This lecture from DeepMind covers contemporary attention mechanisms, which are important for understanding the paper's findings on attention-enhanced graph neural networks for anomaly detection.

*How the paper uses it:* The paper highlights attention mechanisms as a key enhancement in graph-based deep learning approaches for anomaly detection.

▶ [DeepMind x UCL | Deep Learning Lectures | 8/12 | Attention ...](https://www.youtube.com/watch?v=AIiwuClvH6k) — Google DeepMind · 1:36:04

### Paper authors talk *(the paper's own talk)*
Direct talks from the paper's authors or closely related research presentations provide the most precise insights into the survey's findings, methodology, and future directions. These talks connect foundational concepts to the paper's specific contributions in AI-based anomaly detection for IoT.

*How the paper uses it:* The paper authors' own talks offer direct insight into their comprehensive survey and emphasize graph neural networks and attention mechanisms in IoT anomaly detection.

▶ [IOTSHIED.AI - Intrusion and Anomaly Detection for the Internet of Things](https://www.youtube.com/watch?v=DglxT_N_nQo) — CYENS Centre of Excellence · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational AI and machine learning concepts essential for understanding anomaly detection in IoT and sensor networks. Starting with basic learning paradigms, it then covers time series anomaly detection and graph neural networks, followed by attention mechanisms that enhance these models. Finally, it presents applied AI-based anomaly detection in IoT, tying all concepts to the paper's focus on graph-based deep learning and real-world IoT applications.

### Unsupervised and semi-supervised learning *(prerequisite)*
Learn the key machine learning paradigms where models learn from unlabeled or partially labeled data, which is crucial when anomaly labels are scarce. This foundation helps understand why the paper emphasizes unsupervised and semi-supervised methods for IoT anomaly detection.

*How the paper uses it:* The paper highlights unsupervised and semi-supervised learning as preferred approaches due to limited labeled anomaly data in IoT.

▶ [Supervised & Unsupervised Machine Learning](https://www.youtube.com/watch?v=wvODQqb3D_8) — Steve Brunton · 11:46

### Time series anomaly detection *(prerequisite)*
Understand how anomalies are detected in sequential sensor data over time, a fundamental task in IoT networks where data streams continuously. This section builds intuition on detecting unusual patterns in time series, a core application area surveyed in the paper.

*How the paper uses it:* Time series anomaly detection is a fundamental method reviewed in the paper for analyzing sensor data streams in IoT.

▶ [Complete Anomaly Detection Tutorials Machine Learning And ...](https://www.youtube.com/watch?v=OS9xRGKfx4E) — Krish Naik · 36:59

### Graph neural networks *(prerequisite)*
Discover how graph neural networks model relationships and dependencies between interconnected IoT devices, capturing network structure that traditional methods miss. This concept is key to understanding the paper’s emphasis on graph-based deep learning for anomaly detection.

*How the paper uses it:* The paper stresses the importance of graph neural networks to capture dependencies between IoT devices for improved anomaly detection.

▶ [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — DataMListic · 5:44

### Attention mechanisms in deep learning *(prerequisite)*
Learn how attention mechanisms allow models to focus on the most relevant parts of input data, enhancing graph neural networks’ ability to detect complex anomalies in sensor networks. This concept explains why attention improves detection performance as noted in the paper.

*How the paper uses it:* Attention mechanisms enhance graph-based models to better capture complex dependencies in IoT sensor data, as highlighted in the paper.

▶ [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — StatQuest with Josh Starmer · 3 years ago

## Already in your library

- [2021 | Lecture 6.1 - Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=F3PgltDzllc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder grounded in the 2023 survey on AI-based anomaly detection in IoT and sensor networks. Starting with a beginner-level implementation of a simple time series anomaly detection baseline, you then move to an intermediate project reimplementing a graph neural network-based anomaly detector on a public graph dataset relevant to sensor networks. Finally, the advanced project tackles a key future direction from the paper by developing an energy-efficient, real-time graph-based anomaly detection prototype suitable for resource-constrained IoT edge devices. Each project builds on your existing skills while deepening your understanding of the paper's core contributions and challenges.

### Beginner — Time Series Anomaly Detection with LSTM Autoencoder
*Effort: a weekend, ~8 hours*

You build a simple LSTM autoencoder model to detect anomalies in univariate time series sensor data. This project reproduces a basic anomaly detection approach discussed in the paper, focusing on time series analysis without graph structure. You implement training, anomaly scoring, and evaluation using precision, recall, and F1-score.

**Why it shows you understood the paper:** This project demonstrates your grasp of one core AI-based anomaly detection method surveyed in the paper, specifically time series anomaly detection with deep learning. It shows you understand anomaly definitions, model training under limited labeled data, and evaluation metrics used in IoT contexts.

**Grounded in:** Surveys a wide range of AI-based anomaly detection methods, including LSTMs and time series anomaly detection; compares detection approaches using precision, recall, and F1-score.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, scikit-learn

**Data:** Use a publicly available univariate time series anomaly dataset such as the Numenta Anomaly Benchmark (NAB) or a synthetic sensor dataset generated by you to simulate normal and anomalous patterns.

**Build it:**

1. Prepare or generate a univariate time series dataset with labeled anomalies.
2. Implement an LSTM autoencoder model in PyTorch to reconstruct normal sequences.
3. Train the model on normal data only (unsupervised setting).
4. Compute reconstruction error as anomaly scores on test data.
5. Evaluate detection performance using precision, recall, and F1-score.
6. Document the approach, results, and relation to the paper's survey.

**Ships as:** A GitHub repo with code, a Jupyter notebook demonstrating training and evaluation, and a README explaining the method and its connection to the paper's time series anomaly detection survey.

**Stretch goal:** Add a simple baseline comparison using statistical thresholding or isolation forest to highlight the advantage of LSTM autoencoders.

### Intermediate — Graph Neural Network for Anomaly Detection on Sensor Network Data
*Effort: 1-3 weekends, ~20 hours*

You reimplement a core graph-based deep learning anomaly detection method inspired by the paper's emphasis on graph neural networks with attention mechanisms. Using the Stanford Open Graph Benchmark (OGB) datasets as a proxy for IoT sensor network graphs, you train a GNN model to detect anomalous nodes or edges and compare it against a non-graph baseline such as an MLP.

**Why it shows you understood the paper:** This project shows you can apply the paper's key contribution about leveraging graph structure and attention in anomaly detection. It demonstrates your ability to handle graph data, implement GNNs, and critically evaluate performance trade-offs, reflecting the paper's findings on graph-based methods outperforming sensor-independent approaches.

**Grounded in:** Highlights the importance of graph-based data representations to capture dependencies between IoT devices; key result that graph-based deep learning with attention outperforms methods ignoring network structure.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, Jupyter Notebook, scikit-learn

**Data:** Use the Stanford Open Graph Benchmark (OGB) datasets (https://github.com/snap-stanford/ogb) as a proxy for sensor network graph data, since the paper cites OGB as a useful benchmark for graph anomaly detection.

**Build it:**

1. Download and preprocess an OGB dataset suitable for anomaly detection (e.g., ogbn-arxiv or ogbn-products).
2. Implement a graph neural network model with attention mechanisms (e.g., GAT) for node anomaly detection.
3. Train the model using unsupervised or semi-supervised learning on normal nodes.
4. Implement a baseline model ignoring graph structure (e.g., MLP on node features).
5. Evaluate and compare models using precision, recall, and F1-score.
6. Write a detailed README linking the implementation to the paper's survey and results.

**Verified links from the paper:**

- <https://github.com/snap-stanford/ogb> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to train and evaluate a graph neural network anomaly detector on OGB data, plus a baseline comparison and documentation connecting the work to the paper's key contributions.

**Stretch goal:** Extend the model to incorporate temporal dynamics by adding time series features or recurrent layers to better mimic IoT sensor data characteristics.

### Advanced — Energy-Efficient Real-Time Graph-Based Anomaly Detection for Edge IoT Devices
*Effort: few weeks, ~40+ hours*

You develop a prototype anomaly detection framework that addresses the paper's identified limitation of energy efficiency and real-time constraints on resource-constrained IoT edge devices. Starting from a graph neural network model, you optimize it for low computational cost using model pruning, quantization, or lightweight architectures. You implement a streaming anomaly detection pipeline simulating real-time sensor data and evaluate trade-offs between detection accuracy and energy consumption.

**Why it shows you understood the paper:** This project tackles a key future direction and limitation highlighted in the paper: balancing model complexity and energy efficiency for real-time anomaly detection on edge devices. It demonstrates your ability to extend the surveyed methods into practical, resource-aware deployments, a critical challenge in IoT anomaly detection research.

**Grounded in:** Identifies gaps in current research such as the need for real-time, energy-efficient anomaly detection methods; discusses challenges of deploying graph-based models on resource-constrained edge devices.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, ONNX, TensorRT or TVM (optional), Jupyter Notebook

**Data:** Simulate streaming sensor network data with graph structure or use a subset of OGB data adapted to streaming format; no direct IoT edge dataset is available.

**Build it:**

1. Select or simulate a graph-structured sensor network dataset with streaming data characteristics.
2. Implement a baseline graph neural network anomaly detector as in the intermediate project.
3. Apply model compression techniques such as pruning and quantization to reduce model size and inference cost.
4. Develop a streaming inference pipeline that processes data in real-time batches.
5. Measure detection performance and estimate energy consumption or inference latency.
6. Document the trade-offs and relate findings to the paper's discussion on energy efficiency and real-time detection.

**Verified links from the paper:**

- <https://github.com/snap-stanford/ogb> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo demonstrating an energy-optimized graph anomaly detection pipeline with streaming data simulation, performance-energy trade-off analysis, and a comprehensive README connecting to the paper's future directions.

**Stretch goal:** Deploy the optimized model on a real IoT edge device (e.g., Raspberry Pi) and measure actual power consumption and latency.

_No authors' own code or IoT sensor datasets were released with the paper; OGB datasets serve as a proxy for graph anomaly detection, and synthetic or public time series datasets substitute for sensor data._
