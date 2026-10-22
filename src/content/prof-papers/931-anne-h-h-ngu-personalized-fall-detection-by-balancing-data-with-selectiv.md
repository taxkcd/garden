---
title: "931 · Personalized Fall Detection By Balancing Data with Selective Feedback Using Contrastive Learning — Anne H. H. Ngu"
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-anne-h-h-ngu"
source_hash: "d480db2cc5a71554b508175e64a6a1fa163d5b8eb534e56e3ebdf59304dcdafa"
sequence: 931
generator: "outreach-garden: managed"
---

# 931 · Personalized Fall Detection By Balancing Data with Selective Feedback Using Contrastive Learning

## At a glance

- **Professor:** Anne H. H. Ngu
- **Institution:** Texas State University
- **Paper:** [Personalized Fall Detection By Balancing Data with Selective Feedback Using Contrastive Learning](https://arxiv.org/pdf/2603.17148)
- **Authors:** Awatif Yasmin, Tarek Mahmud, Sana Alamgeer, Anne H. H. Ngu
- **Year:** 2026

## Paper overview

This paper presents a method to improve fall detection systems by personalizing models to individual users' movement patterns. It addresses the challenge of imbalanced data where fall events are rare compared to normal daily activities, which can bias models. The authors propose a framework that uses semi-supervised clustering and contrastive learning to select the most informative feedback data from users to retrain personalized fall detection models. Experiments with smartwatch data from ten participants show that this selective personalization improves detection accuracy and recall, especially when retraining models from scratch or using few-shot learning.

### Why it matters

**Research problem:** Fall detection models suffer from imbalanced training data because real-world fall events are rare compared to non-fall activities, leading to biased models that miss actual falls. Personalizing models to individual users is challenging due to limited fall data and the dominance of routine activity data in feedback.

**Why it matters:** Accurate fall detection is critical for elderly individuals living independently to ensure timely assistance after falls. Generalized models often produce high false alarms or miss falls, reducing user acceptance and safety. Personalized models can improve detection accuracy and usability but require effective methods to handle scarce fall data and imbalanced feedback.

**Key contributions:**

- A selective data-driven personalization framework that balances fall and non-fall activity data using semi-supervised clustering and contrastive learning.
- Demonstration that selective feedback data improves recall and precision of personalized fall detection models compared to models trained on all feedback data.
- Evaluation of three retraining strategies (TFS, TL, FSL) showing that retraining from scratch achieves the highest accuracy, while few-shot learning offers a practical trade-off between accuracy and efficiency.
- Use of gradient-based data selection within clusters to identify the most informative samples for retraining, reducing redundancy and computational cost.
- Validation of the pretrained Siamese Neural Network's clustering accuracy across multiple human activity recognition datasets.

## About the professor

**Anne H. H. Ngu** — Regents' Professor, Computer Science, Texas State University.

Research interests: Smart Health, Wearable Sensing Systems, Machine Learning, Information Integration, Internet of Things, Databases, Process Automation, Service Computing, Software Engineering, and Agent Technologies

### Research links

- [Faculty/profile page](https://faculty.txst.edu/profile/1921728)
- [Professor website](https://www.cs.txstate.edu/~hn12)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Contrastive Learning in Machine Learning
**The paper assumes:** contrastive learning, Siamese neural networks, semi-supervised clustering, representation learning
**Already in this field?** Skip this entirely if you already understand contrastive learning methods and Siamese networks in machine learning.

This background focuses on contrastive learning, a core technique used in the paper for selective feedback data balancing and personalized fall detection model retraining. The rigorous course option provides a deep, structured university-level understanding of contrastive learning and related representation learning methods, while the fast track offers a concise, accessible series of explainers that cover essential concepts and recent advances quickly. Readers should choose the course for comprehensive mastery or the fast track for an efficient conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Yann LeCun’s Deep Learning Course](https://www.youtube.com/playlist?list=PLgF7i4LH-YxacgG0OPmTYe1UUQAvcw9Ke) — NYU Data Science · 33 videos · 47.4h across 33 episodes

**Watch only this:** Lectures 5L (Joint embedding method and latent variable energy based models (LV-EBMs)), 5.1, 5.2, 6L (Latent variable EBMs for structured prediction), 6 (LV-EBMs training), 8L (Self-supervised learning and variational inference), and 10L (Self / cross, hard / soft attention and the Transformer), about 9 hours total — these cover the core contrastive learning theory and practical embedding methods.

*Why it unblocks this paper:* Yann LeCun’s Deep Learning Course is a rigorous university-level series that covers supervised and unsupervised deep learning, embedding methods, metric learning, and self-supervised learning, including joint embedding and contrastive learning techniques relevant to Siamese Neural Networks and semi-supervised clustering used in the paper.

*If you want all of it:* 47.4 hours across 33 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [contrastive learning](https://www.youtube.com/playlist?list=PL4rcooZADlRCmeG82d4hMLtwWAp9PE5Cg) — Christoph Schuhmann · 16 videos · 8.8h across 16 episodes

**Watch only this:** Episodes 6 (Exploring Simple Siamese Representation Learning), 7 (Exploring Simple Siamese Representation Learning and Beyond), 8 (Exploring Simple Siamese Representation Learning), and 9 (Basics of Deep Learning: Siamese Representation Learning), about 2 hours total — these provide a concise yet thorough introduction to Siamese networks and contrastive learning principles.

*Why it unblocks this paper:* Christoph Schuhmann’s contrastive learning playlist offers clear, focused explainers on contrastive learning and Siamese representation learning, including practical insights into SwAV and BYOL methods, which align well with the paper’s use of contrastive learning for data selection and model personalization.

*If you want all of it:* 8.8 hours across 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on personalized fall detection using selective feedback and contrastive learning, start with foundational concepts including imbalanced data learning, Siamese Neural Networks, and semi-supervised clustering. These prerequisites build the necessary background on handling rare event data, the model architecture for similarity learning, and clustering techniques for data balancing. Finally, focus on the core concept of personalized fall detection systems, emphasizing the authors' approach and results.

### imbalanced data learning lecture *(prerequisite)*
This section covers the challenges and techniques for handling imbalanced datasets, which is crucial since fall events are rare compared to normal activities. Understanding these methods helps grasp why selective data balancing is necessary for effective fall detection.

*How the paper uses it:* The paper addresses imbalanced training data where fall events are scarce, requiring specialized learning strategies.

▶ [What Is Balanced And Imbalanced Dataset How to handle imbalanced datasets in ML DM by Mahesh Huddar](https://www.youtube.com/watch?v=KR-eWajtTfo) — Mahesh Huddar · 3y ago

### siamese neural network talk *(prerequisite)*
Siamese Neural Networks are key to the paper's method for computing similarity metrics between feedback samples for clustering. This talk explains the architecture and its use in learning distance metrics, foundational for understanding the pretrained model used.

*How the paper uses it:* The authors use a pretrained Siamese Neural Network to compute similarity for clustering feedback data.

▶ [Siamese Neural Networks: Explanation and Implementation in TensorFlow / Keras](https://www.youtube.com/watch?v=DGJyh5dK4hU) — Greg Hogg · 4y ago

### semi supervised clustering lecture *(prerequisite)*
Semi-supervised clustering combines labeled and unlabeled data to group feedback samples effectively, enabling balanced selection of fall and non-fall data. This lecture provides the theoretical background necessary to understand the clustering approach used in the paper.

*How the paper uses it:* The paper employs semi-supervised clustering to group feedback data for balanced retraining.

▶ [Introduction to Semi-Supervised learning](https://www.youtube.com/watch?v=caelO7XRO6Q) — VANDANA BHATTACHARJEE · 7mo ago

### personalized fall detection talk *(paper-talk search result; attribution unverified)*
This section focuses on the core topic of the paper: personalized fall detection systems. The selected video provides an advanced, research-level presentation on fall detection technology, relevant to the paper's context and methodology.

*How the paper uses it:* This is the paper's central topic, focusing on personalized fall detection using selective feedback and contrastive learning.

▶ [How to Build a Fall Detection System using Ultralytics Platform | Email Alerts | Ultralytics YOLO26](https://www.youtube.com/watch?v=3G4SqYhx2oM) — Ultralytics · 5mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand personalized fall detection using contrastive learning. It starts with the basics of imbalanced data challenges in machine learning, then covers semi-supervised clustering and Siamese Neural Networks as key techniques for grouping and similarity measurement. Finally, it explains contrastive learning, the core method used in the paper to select informative feedback data for model personalization.

### imbalanced data learning lecture *(prerequisite)*
Imbalanced data occurs when some classes (like falls) are much rarer than others (normal activities), which can bias machine learning models to ignore the rare but important events. Understanding how to handle such imbalance is crucial for building reliable fall detection systems.

*How the paper uses it:* The paper addresses the challenge of imbalanced fall vs. non-fall data that biases detection models.

▶ [What Is Balanced And Imbalanced Dataset How to handle imbalanced datasets in ML DM by Mahesh Huddar](https://www.youtube.com/watch?v=KR-eWajtTfo) — Mahesh Huddar · 3y ago

### semi supervised clustering lecture *(prerequisite)*
Semi-supervised clustering combines a small amount of labeled data with a large amount of unlabeled data to group similar samples effectively. This helps in organizing feedback data into meaningful clusters for better model retraining.

*How the paper uses it:* The authors use semi-supervised clustering to group user feedback samples for balanced data selection.

▶ [Introduction to Semi-Supervised learning](https://www.youtube.com/watch?v=caelO7XRO6Q) — VANDANA BHATTACHARJEE · 7mo ago

### siamese neural network talk *(prerequisite)*
Siamese Neural Networks learn to measure similarity between pairs of inputs by processing them through twin networks sharing weights. This approach is useful for clustering and identifying similar activity patterns in fall detection data.

*How the paper uses it:* The pretrained Siamese Neural Network is used to compute similarity metrics for clustering feedback samples.

▶ [Siamese Neural Networks: Explanation and Implementation in TensorFlow / Keras](https://www.youtube.com/watch?v=DGJyh5dK4hU) — Greg Hogg · 4y ago

### personalized fall detection talk *(paper-talk search result; attribution unverified)*
Fall detection systems use sensor data to identify when a person has fallen, which is critical for elderly safety. Personalized models adapt to individual movement patterns to improve accuracy and reduce false alarms.

*How the paper uses it:* The paper proposes a personalized fall detection framework that balances feedback data to improve detection accuracy.

▶ [How to Build a Fall Detection System using Ultralytics Platform | Email Alerts | Ultralytics YOLO26](https://www.youtube.com/watch?v=3G4SqYhx2oM) — Ultralytics · 5mo ago

## Already in your library

- [Contrastive Learning with SimCLR | Deep Learning Animated](https://www.youtube.com/watch?v=UqJauYELn6c) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Contrastive Learning - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=sftIkJ8MYL4) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [Contrastive Learning? MIT Short Answer](https://www.youtube.com/watch?v=Sex3p1Hjiek) — also for: Contrast Everything: A Hierarchical Contrastive Framework for Medical Time-Series (Xiang Zhang)
- [Contrastive Learning in PyTorch - Part 1: Introduction](https://www.youtube.com/watch?v=u-X_nZRsn5M) — also for: Contrast Everything: A Hierarchical Contrastive Framework for Medical Time-Series (Xiang Zhang)
- [Semi-supervised Clustering: Probabilistic Models, Algorithms and Experiments](https://www.youtube.com/watch?v=vphqZIOxyZI) — also for: Data Skeleton Learning: Scalable Active Clustering with Sparse Graph Structures (Jaideep Srivastava)
- [Imbalanced Data in Machine Learning | Undersampling | Oversampling | SMOTE](https://www.youtube.com/watch?v=yh2AKoJCV3k) — also for: One size does not fit all: revising traditional paradigms for assessing accuracy of QSAR models used for virtual screening (Alexander Tropsha)
- [Handling Imbalanced Dataset in Machine Learning: Easy Explanation for Data Science Interviews](https://www.youtube.com/watch?v=GR-OW5asKlk) — also for: One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification (Hana Khamfroush)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder grounded in the paper's core contributions and limitations. Starting with a beginner project that reproduces selective feedback data sampling on a small scale, you then implement the paper's core personalization method on a real smartwatch fall detection dataset for intermediate depth. Finally, the advanced project tackles a key limitation by improving few-shot learning efficiency for on-device personalization, aligning with the paper's future directions.

### Beginner — Selective Feedback Sampling Visualization
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates imbalanced fall vs. non-fall activity data and implements a simple gradient-based sample selection within clusters to select a balanced subset of feedback data. You visualize the difference in class balance and sample informativeness compared to random sampling.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's selective feedback data sampling mechanism using gradient-based selection within clusters, a key innovation to balance imbalanced fall detection data and reduce redundancy.

**Grounded in:** Gradient-based data selection outperformed random selection, improving average F1-score from 0.85 to 0.91.

**Tech stack:** Python 3.11, Jupyter Notebook, scikit-learn, matplotlib, numpy

**Data:** Synthetic imbalanced dataset simulating fall and non-fall activity samples, generated within the notebook.

**Build it:**

1. Generate a synthetic imbalanced dataset with labeled fall and non-fall samples.
2. Implement a simple clustering method (e.g., KMeans) on the dataset features.
3. Compute a gradient-based informativeness score for each sample (simulate gradients or use proxy metrics).
4. Select top informative samples per cluster and compare with random sampling.
5. Visualize class balance and sample selection differences using plots.

**Ships as:** A Jupyter Notebook showing data generation, clustering, gradient-based vs random sampling, and visualizations illustrating improved balance and informativeness.

**Stretch goal:** Extend to use a pretrained Siamese Neural Network embedding for clustering instead of raw features.

### Intermediate — Personalized Fall Detection with Selective Feedback
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core personalization framework by training a Siamese Neural Network for semi-supervised clustering on the SmartFallMM dataset, then apply gradient-based selective feedback sampling to balance fall and non-fall data. You retrain a personalized fall detection model using few-shot learning and compare its F1-score against a baseline trained on all feedback data.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's main method of combining contrastive learning, clustering, and selective feedback data to improve personalized fall detection accuracy and recall on real smartwatch data.

**Grounded in:** Selective feedback data improves recall and precision of personalized fall detection models compared to models trained on all feedback data.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, numpy, pandas, matplotlib

**Data:** SmartFallMM dataset from https://github.com/txst-cs-smartfall/SmartFallMM-Dataset, a smartwatch fall detection dataset used in the paper.

**Build it:**

1. Download and preprocess the SmartFallMM dataset for fall and non-fall activities.
2. Implement or adapt a Siamese Neural Network to learn embeddings for semi-supervised clustering.
3. Cluster feedback samples using the learned embeddings and compute gradient-based informativeness scores.
4. Select a balanced subset of feedback data using the gradient-based method.
5. Retrain a personalized fall detection classifier using few-shot learning on the selected data.
6. Evaluate and compare F1-score, recall, and precision against a baseline retrained on all feedback data.

**Verified links from the paper:**

- <https://github.com/txst-cs-smartfall/SmartFallMM-Dataset> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to preprocess data, train the SNN, perform selective sampling, retrain personalized models, and a report comparing metrics with baseline results.

**Stretch goal:** Add transfer learning and training-from-scratch retraining strategies and compare their performance and computational cost.

### Advanced — Efficient Few-Shot Learning for On-Device Fall Detection
*Effort: 3+ weeks*

You develop an improved few-shot learning approach for personalized fall detection that reduces computational cost while closing the accuracy gap with full retraining. You experiment with hyperparameter tuning, freezing strategies, and lightweight model architectures to enable real-time, on-device personalization. You evaluate on the SmartFallMM dataset and analyze trade-offs between accuracy and efficiency.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by optimizing few-shot learning for practical deployment, demonstrating deep comprehension of the paper's challenges and potential solutions.

**Grounded in:** The few-shot learning approach, although efficient, currently achieves lower accuracy than full retraining and requires further optimization.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, numpy, pandas, matplotlib

**Data:** SmartFallMM dataset from https://github.com/txst-cs-smartfall/SmartFallMM-Dataset, used for evaluation of personalized fall detection models.

**Build it:**

1. Review the paper's few-shot learning method and identify hyperparameters and model components to optimize.
2. Implement freezing strategies for model layers and experiment with different learning rate schedules.
3. Test lightweight model architectures suitable for on-device deployment (e.g., MobileNet variants).
4. Apply gradient-based selective feedback sampling to create balanced few-shot training sets.
5. Evaluate accuracy, recall, precision, and computational cost (runtime, memory) on SmartFallMM.
6. Analyze trade-offs and document improvements over the baseline few-shot learning approach.

**Verified links from the paper:**

- <https://github.com/txst-cs-smartfall/SmartFallMM-Dataset> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive GitHub repository with optimized few-shot learning code, evaluation scripts, and a detailed report discussing accuracy-efficiency trade-offs and recommendations for on-device personalization.

**Stretch goal:** Integrate continual learning methods to enable dynamic adaptation with minimal supervision.

_The paper's authors did not release their code, so the intermediate and advanced projects require reimplementation of the core methods from the paper's descriptions. The SmartFallMM dataset is publicly available via the provided GitHub link._
