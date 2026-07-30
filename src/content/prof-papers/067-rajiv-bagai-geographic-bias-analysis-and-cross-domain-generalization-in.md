---
title: "067 · Geographic Bias Analysis and Cross-Domain Generalization in Deep Learning-Based Building Damage Assessment — Rajiv Bagai"
date: 2026-07-28
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rajiv-bagai"
source_hash: "f36678947a97fceb5417d306feeed2855b06fbf84089b7dd95c6acdc8b878c6d"
sequence: 67
generator: "outreach-garden: managed"
---

# 067 · Geographic Bias Analysis and Cross-Domain Generalization in Deep Learning-Based Building Damage Assessment

## At a glance

- **Professor:** Rajiv Bagai
- **Institution:** Wichita State University
- **Paper:** [Geographic Bias Analysis and Cross-Domain Generalization in Deep Learning-Based Building Damage Assessment](https://mdpi-res.com/d_attachment/remotesensing/remotesensing-18-01529/article_deploy/remotesensing-18-01529-v3.pdf?version=1779327086)
- **Authors:** Shruti Kshirsagar, Bharath Chandra, Unaza Tallal, Rajiv Bagai, Atri Dutta
- **Year:** 2026

## Paper overview

This paper studies how AI models that assess building damage from satellite images after disasters perform poorly when applied to new geographic regions with different environmental and structural characteristics. The authors propose enhancing input images with structural features and using domain adaptation techniques to improve model robustness and generalization across diverse disaster locations.

### Why it matters

**Research problem:** Deep learning models for automated building damage assessment from satellite imagery struggle to generalize across geographically and environmentally diverse disaster locations due to geographic bias and domain shift.

**Why it matters:** Accurate and rapid building damage assessment is critical for effective disaster response and humanitarian aid. Models that fail to generalize well can lead to delayed or inadequate emergency assistance, risking lives and resources.

**Key contributions:**

- Systematic geographic bias analysis across 17 disaster locations showing performance variation linked to geographic and structural differences.
- Development of a six-channel Fusion Augmentation strategy to enhance structural features in input images.
- Evaluation of supervised fine-tuning and unsupervised CORAL domain adaptation combined with Fusion Augmentation on out-of-domain locations.
- Demonstration that structural feature enhancement and domain adaptation substantially improve cross-location generalization.

## About the professor

**Rajiv Bagai** — Professor, Computer Science, Wichita State University.

Research interests: Data Privacy and Web Anonymity, Incomplete and/or Inconsistent Databases, Data Models, Deductive Databases, Logic Programming, Programming Languages

### Research links

- [Faculty/profile page](https://www.wichita.edu/profiles/academics/engineering/SoC/Bagai-Rajiv.php)
- [Resolved homepage](https://www.wichita.edu/profiles/academics/engineering/SoC/01_Faculty/Bagai-Rajiv.php)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the geographic bias and domain shift challenges addressed in the paper, start with foundational knowledge on domain adaptation techniques and their theoretical underpinnings. Then, proceed to a focused, rigorous lecture that covers domain adaptation in machine learning, which directly relates to the paper's approach to improving cross-domain generalization in building damage assessment models.

### Geographic bias and domain shift *(prerequisite)*
This section covers the fundamental challenges of domain shift and geographic bias in machine learning models, which cause performance degradation when models are applied to new, unseen geographic regions. Understanding domain adaptation methods is critical to grasping how the paper improves model robustness across diverse disaster locations.

*How the paper uses it:* The paper addresses geographic bias and domain shift as the key problem limiting the generalization of building damage assessment models across different disaster locations.

▶ [[ML 2021 (English version)] Lecture 27: Domain Adaptation](https://www.youtube.com/watch?v=8AKqH6V9kjE) — Hung-yi Lee · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the key concept of geographic bias and domain shift in machine learning, which is central to understanding the challenges faced by building damage assessment models in this paper. Starting with foundational intuition about domain adaptation and domain shift, the learner will build a clear mental model of why models fail to generalize across regions and how adaptation techniques can help. The selected videos are concise, clear, and focused on domain adaptation as used in the paper's context.

### Geographic bias and domain shift *(prerequisite)*
Geographic bias and domain shift occur when machine learning models trained on data from one region perform poorly on data from different regions due to differences in environment, structure, or data distribution. Domain adaptation techniques aim to reduce this performance gap by adjusting models to new domains without requiring extensive new labeled data. Understanding this concept is crucial to grasp why the paper proposes structural feature enhancement and domain adaptation to improve damage assessment models.

*How the paper uses it:* The paper analyzes geographic bias and applies domain adaptation to improve model generalization across diverse disaster locations.

▶ [[ML 2021 (English version)] Lecture 27: Domain Adaptation](https://www.youtube.com/watch?v=8AKqH6V9kjE) — Hung-yi Lee · 5 years ago
