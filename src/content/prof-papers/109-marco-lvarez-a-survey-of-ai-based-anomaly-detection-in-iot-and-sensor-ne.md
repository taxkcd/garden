---
title: "109 · A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks — Marco Álvarez"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marco-alvarez"
source_hash: "c7fd1a90ad791350bcc601f09f70cca6a8ed5abb3d9e9eda91f1cb714493fc79"
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
