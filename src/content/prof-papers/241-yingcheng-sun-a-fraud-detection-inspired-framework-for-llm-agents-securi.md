---
title: "241 · A Fraud-Detection-Inspired Framework for LLM Agents Security — Yingcheng Sun"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yingcheng-sun"
source_hash: "305c89e66069b244022a015134ad185592a5f6e1ef909d6213e9306d107a995e"
sequence: 241
generator: "outreach-garden: managed"
---

# 241 · A Fraud-Detection-Inspired Framework for LLM Agents Security

## At a glance

- **Professor:** Yingcheng Sun
- **Institution:** UNC - Greensboro
- **Paper:** [A Fraud-Detection-Inspired Framework for LLM Agents Security](https://arxiv.org/pdf/2605.01143)
- **Authors:** Sheldon Yu, Yingcheng Sun, Hanqing Guo, Qianqian Tong
- **Year:** 2026

## Paper overview

This paper addresses security risks in autonomous AI agents powered by large language models (LLMs). Instead of detecting malicious prompts individually, it proposes a fraud detection-inspired method that analyzes sequences of interactions to identify risky behavior patterns. The approach uses lightweight models to enable fast, real-time detection of adversarial attacks that unfold over multiple steps, improving safety in AI systems that perform actions like reading files or sending messages.

### Why it matters

**Research problem:** LLM agents face security vulnerabilities from adversarial interactions such as prompt injections and multi-turn escalation attacks. Existing defenses focus on single-turn prompt filtering, which misses complex, gradual, or indirect attacks that span multiple interaction steps.

**Why it matters:** LLM agents are increasingly used in sensitive applications involving private data and external tool access. Adversarial exploitation can lead to unauthorized actions, data leaks, or policy bypasses, posing serious risks. Effective real-time defenses are needed to secure these powerful but vulnerable systems.

**Key contributions:**

- Reframing LLM agent security as detection of adversarial interaction trajectories rather than isolated prompt classification.
- Introducing a lightweight, low-latency fraud detection layer suitable for real-time deployment.
- Designing a structured feature space capturing prompt, session, tool, context, and trajectory signals.
- Conducting simulation-based experiments demonstrating improved detection performance and practical security benefits.

## About the professor

**Yingcheng Sun** — Assistant Professor, Department of Computer Science, UNC - Greensboro.

Research interests: Information Retrieval, Machine Learning and Software Engineering with applications in large clinical information acquisition, mining and visualization that help solving important healthcare problems. I am also interested in web text mining and retrieval.

### Research links

- [Faculty/profile page](https://yingchengsun.github.io/academic)
- [Resolved homepage](https://yingchengsun.github.io/academic/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Machine Learning for Anomaly Detection
**The paper assumes:** machine learning for anomaly detection, supervised classification, feature engineering for sequential data
**Already in this field?** Skip this entirely if you already understand supervised machine learning methods for anomaly and fraud detection, including feature design and evaluation.

This background focuses on machine learning methods for anomaly detection, crucial for understanding the paper's approach to detecting adversarial interaction trajectories in LLM agents using structured features and lightweight classifiers. The rigorous course option provides a comprehensive foundation in machine learning concepts relevant to anomaly detection, while the fast track offers a concise, practical introduction to anomaly detection techniques, suitable for quickly grasping core ideas without deep theoretical detail.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-9 (covering introduction, linear models, logistic regression, decision trees, ensemble methods), about 12 hours — this subset covers core supervised learning and ensemble methods relevant to anomaly detection with structured features.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative, broad machine learning course covering supervised learning, ensemble methods, and decision trees, which underpin classic anomaly detection and fraud detection techniques like XGBoost. It provides the theoretical and practical foundation needed to understand the paper's feature engineering and model choice.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Anomaly Detection](https://www.youtube.com/playlist?list=PL3N9eeOlCrP5DflJUcymWEKhfhLx2MhRO) — AIEngineering · 6 videos · 3.4h across 6 episodes

**Watch only this:** Episodes 1-3 (Autoencoder Explained, Anomaly Detection with AutoEncoders using Tensorflow, Anomaly Detection model on Time Series data in Python), about 1.5 hours — these provide a solid practical introduction to anomaly detection methods and their implementation.

*Why it unblocks this paper:* The 'Anomaly Detection' series by AIEngineering offers focused, practical explanations of anomaly detection methods including autoencoders and isolation forests, which are common in anomaly and fraud detection contexts. It is concise and directly relevant to understanding anomaly detection techniques applicable to the paper's problem.

*If you want all of it:* 3.4 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's novel fraud-detection-inspired framework for securing LLM agents, start by grounding yourself in the foundational machine learning techniques of fraud detection and lightweight XGBoost classification, which underpin the paper's approach. Then, explore the nature of multi-turn adversarial attacks on LLMs and the importance of structured feature engineering for security, which are critical to modeling and detecting complex adversarial trajectories. Finally, focus on the paper's core concept of adversarial interaction trajectory detection and the authors' own talk to grasp their specific methodology and contributions.

### Fraud detection machine learning *(prerequisite)*
This section covers foundational machine learning methods used in fraud detection, providing insight into the inspiration behind the paper's approach. Understanding ensemble AI models and precision-speed tradeoffs in fraud detection will clarify why the authors chose a fraud-detection-inspired framework.

*How the paper uses it:* The paper adapts fraud detection techniques to model adversarial interaction trajectories in LLM agents.

▶ [Fraud Detection with AI: Ensemble of AI Models Improve Precision & Speed](https://www.youtube.com/watch?v=Mo7JMC_oDlI) — IBM Technology · 11 months ago

### Lightweight XGBoost classification *(prerequisite)*
XGBoost is a key algorithm enabling the paper's fast, low-latency risk scoring. This section explains the mathematical intuition and mechanics of gradient boosted trees, essential for understanding the lightweight classifier used in the framework.

*How the paper uses it:* The authors use an XGBoost classifier to efficiently process structured features for real-time adversarial risk detection.

▶ [Visual Guide to Gradient Boosted Trees (xgboost)](https://www.youtube.com/watch?v=TyvYZ26alZs) — Econoscent · 5 years ago

### Multi-turn adversarial attacks on LLMs *(prerequisite)*
This section explores the complex, multi-turn adversarial attack patterns that the paper aims to detect. Understanding these attacks is crucial to appreciate the limitations of single-turn defenses and the need for trajectory-level detection.

*How the paper uses it:* The paper targets multi-turn adversarial interactions that evade traditional prompt-level defenses.

▶ [A Framework for Adaptive Multi-Turn Jailbreak Attacks on Large Language Models](https://www.youtube.com/watch?v=z_OYcwZ6Ffg) — CAMLIS · 8 months ago

### Structured feature engineering for security *(prerequisite)*
Feature engineering is critical for designing the structured feature space that captures prompt, session, tool, context, and trajectory signals. This section provides an advanced understanding of how to craft features that improve model performance in security contexts.

*How the paper uses it:* The framework relies on a handcrafted, structured feature space to represent adversarial interaction trajectories.

▶ [What is Feature Engineering | Day 23 | 100 Days of Machine Learning](https://www.youtube.com/watch?v=sluoVhT0ehg) — CampusX · 5 years ago

### Adversarial interaction trajectory detection
This core concept focuses on modeling sequences of interactions to detect multi-turn adversarial attacks, the central innovation of the paper. Understanding trajectory-level detection methods is essential to grasp the paper's contribution to LLM agent security.

*How the paper uses it:* The paper proposes a trajectory-level adversarial interaction detection framework inspired by fraud detection.

▶ [Adversarial Defenses for LLMs](https://www.youtube.com/watch?v=9vyfRynPHVQ) — Trajectory Labs · 58:17 · Streamed 4 months ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides the most direct and detailed presentation of their novel security framework, experimental results, and future directions. It offers unique insights into their motivation and design choices.

*How the paper uses it:* This is the authors' own recorded talk about their fraud-detection-inspired framework for LLM agent security.

▶ [Agentic AI: Redefining Fraud Defence | Greenlite AI | What the Fraud? Podcast](https://www.youtube.com/watch?v=5HS6v_9FtYY) — Sumsub for Experts · 10 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in machine learning fraud detection and lightweight classification methods, then builds up to understanding multi-turn adversarial attacks on LLMs and structured feature engineering for security. Finally, it culminates with the core idea of adversarial interaction trajectory detection, which is central to the paper's novel security framework for LLM agents. The order ensures a smooth learning curve from general fraud detection principles to the specific trajectory-based detection approach proposed.

### Fraud detection machine learning *(prerequisite)*
Start by learning how machine learning techniques are used to detect fraud in various domains. This includes understanding the types of features used, the challenges of precision and speed, and how ensembles of models can improve detection performance.

*How the paper uses it:* The paper draws inspiration from fraud detection systems to model adversarial interaction trajectories in LLM agents.

▶ [How can Machine Learning detect fraud?](https://www.youtube.com/watch?v=g8UPjC3-H2k) — PixelPlex Inc. · 3 years ago

### Lightweight XGBoost classification *(prerequisite)*
Next, understand XGBoost, a powerful and efficient gradient boosting algorithm widely used for classification tasks. Focus on its intuition, how it builds ensembles of decision trees, and why it is suitable for fast, low-latency inference.

*How the paper uses it:* The paper uses a lightweight XGBoost classifier to enable real-time risk scoring of adversarial trajectories.

▶ [XGBoost Explained in Under 3 Minutes](https://www.youtube.com/watch?v=33fGfuleXw0) — DataMListic · 2 years ago

### Multi-turn adversarial attacks on LLMs *(prerequisite)*
Learn about adversarial attacks that unfold over multiple interactions with large language models, including prompt injections and escalation attacks. This helps understand why single-turn defenses are insufficient and why trajectory-level detection is needed.

*How the paper uses it:* The paper targets multi-turn adversarial attacks that evade single-turn prompt-level defenses.

▶ [Universal and Transferable Adversarial Attacks on Aligned Language Models Explained](https://www.youtube.com/watch?v=fy26vj_jGvc) — Gabriel Mongaras · 3 years ago

### Structured feature engineering for security *(prerequisite)*
Explore how to design and extract structured features from data to improve machine learning model performance, especially for security applications. This includes capturing context, session history, and interaction patterns in a tabular format.

*How the paper uses it:* The paper designs a structured feature space capturing prompt, session, tool, context, and trajectory signals for detection.

▶ [What is Feature Engineering | Day 23 | 100 Days of Machine Learning](https://www.youtube.com/watch?v=sluoVhT0ehg) — CampusX · 5 years ago

### Adversarial interaction trajectory detection
Finally, focus on the core method of modeling sequences of interactions (trajectories) to detect adversarial behavior patterns over multiple turns. This approach is inspired by fraud detection systems and enables real-time, incremental risk scoring.

*How the paper uses it:* This is the central method proposed by the paper to detect multi-turn adversarial attacks on LLM agents.

▶ [Adversarial Defenses for LLMs](https://www.youtube.com/watch?v=9vyfRynPHVQ) — Trajectory Labs · 58:17 · Streamed 4 months ago

## Already in your library

- [Adversarial Examples for Deep Neural Networks](https://www.youtube.com/watch?v=kxyacmVSGlI) — also for: A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services (Shuang Hao)
- [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Lec-36: Feature Extraction in Data preprocessing | Machine Learning](https://www.youtube.com/watch?v=lzWcVVCXMfo) — also for: Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding (Thomas F. Stahovich)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate understanding of the fraud-detection-inspired framework for securing LLM agents from multi-turn adversarial attacks. The beginner project recreates a core detection mechanism on synthetic data to grasp trajectory-level risk scoring. The intermediate project implements the paper's lightweight XGBoost classifier with structured features and compares it against a single-turn baseline on simulated adversarial sessions. The advanced project extends the framework by exploring learned session representations to address the paper's limitation on fixed handcrafted features, moving towards improved robustness and adaptability.

### Beginner — Synthetic Multi-Turn Adversarial Interaction Detector
*Effort: a weekend, ~8 hours*

You build a simple Python script that simulates multi-turn interaction sessions with adversarial and benign patterns using handcrafted templates. Then you extract basic structured features per turn and aggregate them into trajectory-level features. Finally, you implement a lightweight risk scoring function inspired by the paper's approach to flag risky trajectories before sensitive actions.

**Why it shows you understood the paper:** This project shows you understand the paper's key insight that multi-turn trajectories reveal adversarial patterns missed by single-turn prompt filtering, and that lightweight incremental feature extraction enables real-time detection.

**Grounded in:** Reframing LLM agent security as detection of adversarial interaction trajectories rather than isolated prompt classification.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy

**Data:** Synthetic multi-turn interaction sessions generated by parameterized templates as described in the paper's evaluation section.

**Build it:**

1. Implement a Python script to generate synthetic multi-turn sessions with labeled adversarial and benign trajectories based on simple templates.
2. Define and extract structured features per prompt and session turn (e.g., prompt content indicators, tool usage flags, session history length).
3. Aggregate features across turns to form trajectory-level feature vectors.
4. Implement a simple risk scoring function (e.g., weighted sum or logistic regression) to classify trajectories as risky or safe.
5. Evaluate detection performance using precision, recall, and F1 score on the synthetic dataset.
6. Document the approach, feature design, and results in a README.

**Ships as:** A GitHub repo with scripts to generate synthetic data, extract features, compute risk scores, and evaluate detection metrics, plus a README explaining the method and results.

**Stretch goal:** Add a simple visualization of risk scores evolving over interaction turns to illustrate trajectory-level detection.

### Intermediate — XGBoost-Based Trajectory-Level Adversarial Detector
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core detection framework by engineering structured features capturing prompt content, session history, tool usage, and trajectory patterns from synthetic multi-turn sessions. You train a lightweight XGBoost classifier incrementally scoring risk before sensitive actions. You compare performance against a single-turn prompt-level baseline classifier and report F1 score and attack success rate reduction.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reproduce the paper's main method and metrics, showing comprehension of the structured feature space and the advantage of trajectory-level detection over single-turn defenses.

**Grounded in:** Introducing a lightweight, low-latency fraud detection layer suitable for real-time deployment; The proposed detector achieves an F1 score of 0.81 and reduces attack success rate by 94%, outperforming strong single-turn and short-history baselines.

**Tech stack:** Python 3.11, XGBoost, scikit-learn, pandas, numpy

**Data:** Synthetic multi-turn adversarial interaction corpus generated by parameterized templates as per the paper's evaluation methodology.

**Build it:**

1. Generate or reuse synthetic multi-turn session data with adversarial and benign labels.
2. Engineer structured features as described in the paper: prompt content indicators, session history stats, tool usage flags, and trajectory interaction patterns.
3. Train an XGBoost classifier incrementally on trajectory-level features to predict risk scores before sensitive actions.
4. Implement a single-turn prompt-level baseline classifier using only current prompt features.
5. Evaluate and compare both models on F1 score and attack success rate reduction metrics.
6. Write a detailed README documenting feature engineering, model training, evaluation, and comparison results.

**Ships as:** A GitHub repo with data generation, feature extraction, XGBoost training scripts, baseline implementation, evaluation code, and a comprehensive README with results and analysis.

**Stretch goal:** Integrate a simple web UI to input multi-turn prompts and display real-time risk scores from the XGBoost model.

### Advanced — Learned Session Representations for Robust Adversarial Trajectory Detection
*Effort: 3+ weeks*

You extend the paper's framework by replacing the fixed handcrafted feature set with learned representations of session and trajectory dynamics using sequence models (e.g., LSTM or Transformer encoders). You train a classifier on these learned embeddings to detect adversarial trajectories, aiming to improve detection robustness and adaptability to novel attack patterns. You evaluate performance gains over the original handcrafted XGBoost baseline on synthetic data.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the framework and the ability to innovate by incorporating learned representations to enhance detection capabilities.

**Grounded in:** The framework currently relies on structured tabular features and does not incorporate learned representations of session or trajectory dynamics; Investigate learned representations of session and trajectory dynamics to improve detection performance and robustness.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, pandas, numpy

**Data:** Synthetic multi-turn adversarial interaction dataset generated as per the paper's methodology; used for training and evaluation.

**Build it:**

1. Generate or reuse the synthetic multi-turn adversarial dataset with labels.
2. Design and implement a sequence model (e.g., LSTM or Transformer) to encode multi-turn interaction sessions into learned embeddings.
3. Train a classifier on top of these embeddings to predict adversarial risk scores.
4. Compare detection performance (F1 score, attack success rate reduction) against the handcrafted feature XGBoost baseline.
5. Analyze robustness to variations in adversarial patterns and discuss adaptability benefits.
6. Document the methodology, experiments, results, and insights in a detailed README.

**Ships as:** A GitHub repo containing code for data generation, learned representation model training, evaluation scripts, and a README presenting the extension, results, and discussion.

**Stretch goal:** Experiment with online adaptation or continual learning techniques to handle evolving adversarial behaviors as suggested by the paper's future directions.
