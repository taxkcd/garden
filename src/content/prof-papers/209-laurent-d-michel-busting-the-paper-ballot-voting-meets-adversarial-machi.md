---
title: "209 · Busting the Paper Ballot: Voting Meets Adversarial Machine Learning — Laurent D. Michel"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-laurent-d-michel"
source_hash: "7c3d98af0bb3e50f92625d8394ad3a711f1e0766672c3e3908db2f3aa9c1e50a"
sequence: 209
generator: "outreach-garden: managed"
---

# 209 · Busting the Paper Ballot: Voting Meets Adversarial Machine Learning

## At a glance

- **Professor:** Laurent D. Michel
- **Institution:** University of Connecticut
- **Paper:** [Busting the Paper Ballot: Voting Meets Adversarial Machine Learning](https://arxiv.org/abs/2506.14582)
- **Authors:** Kaleel Mahmood, Caleb Manicke, Ethan Rathbun, Aayushi Verma, Sohaib Ahmad, Nicholas Stamatakis, Laurent Michel, Benjamin Fuller
- **Year:** 2025

## Paper overview

This paper investigates the security risks of using machine learning classifiers in U.S. election tabulators, specifically how adversarial machine learning attacks can cause ballots to be misclassified. The authors introduce new datasets, train various models, identify a numerical instability causing gradient masking that hinders attacks, propose a method to overcome it, and demonstrate that physical attacks on printed ballots can alter election outcomes in close races.

### Why it matters

**Research problem:** Machine learning classifiers used in election tabulators to detect marked bubbles on paper ballots are vulnerable to adversarial examples that can cause misclassification, potentially altering election results.

**Why it matters:** Elections rely on accurate tabulation to ensure fairness. Even a small attack success rate (e.g., 5%) can flip the outcome in close races. Machine learning models are increasingly considered for ballot interpretation, but their vulnerabilities pose a significant security risk.

**Key contributions:**

- Introduction of four new labeled ballot datasets for training classifiers.
- Training and evaluation of six machine learning models on these datasets.
- Identification and analysis of gradient masking caused by numerical instability in standard white-box attacks on voting datasets.
- Modification of the difference of logits ratio (DLR) loss function to overcome gradient masking in binary classification.
- Demonstration of physical adversarial attacks on printed and scanned ballots that can misclassify empty bubbles as marked, impacting close elections.

## About the professor

**Laurent D. Michel** — Professor, Computer Science and Engineering, University of Connecticut.

Research interests: design and implementation of domain specific languages for combinatorial optimization, voting security, and system security through optimization

### Research links

- [Faculty/profile page](https://ldmbouge.github.io/)
- [Resolved homepage](https://ldmbouge.github.io/basic/about/)
- [Lab website](https://cacc.engr.uconn.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the vulnerabilities of machine learning classifiers in election tabulators as explored in the paper, start with foundational concepts such as gradient masking in neural networks and the difference of logits ratio loss, which are critical to the paper's technical contributions. Then, build context on physical adversarial attacks on printed media and machine learning applications in election tabulation. Finally, focus on the core concept of adversarial machine learning attacks and conclude with the authors' own talk or closest available expert presentation on election security and paper ballots.

### Gradient masking in neural networks *(prerequisite)*
Gradient masking is a key technical challenge identified in the paper that causes false robustness in adversarial attacks on ballot classifiers. Understanding how gradients vanish or explode in neural networks and how this affects backpropagation is foundational to grasping the numerical instability issues the authors address.

*How the paper uses it:* The paper identifies gradient masking caused by numerical instability as a core reason for failed adversarial attacks on convolutional models.

▶ [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — 3Blue1Brown · 20:33 · 8 years ago

### Difference of logits ratio loss *(prerequisite)*
The difference of logits ratio (DLR) loss function modification is critical to overcoming gradient masking in the paper's adversarial attack methodology. Understanding logistic regression and loss functions provides the necessary background to appreciate this modification.

*How the paper uses it:* The authors use a modified DLR loss to successfully overcome gradient masking in binary classification attacks.

▶ [StatQuest: Logistic Regression](https://www.youtube.com/watch?v=yIYKR4sgzI8) — StatQuest with Josh Starmer · 8 years ago

### Physical adversarial attacks on printed media *(prerequisite)*
Physical adversarial attacks demonstrate the real-world feasibility and constraints of manipulating printed ballots, which is a major contribution of the paper. Understanding how adversarial examples survive printing and scanning noise is essential to evaluating the practical impact of the attacks.

*How the paper uses it:* The paper demonstrates physical adversarial attacks on printed and scanned ballots that can alter election outcomes.

▶ [Trust region based adversarial attack on neural networks](https://www.youtube.com/watch?v=0aPgJ3uwO-Q) — UCF CRCV · 31:57 · 6 years ago

### Machine learning for election tabulation *(prerequisite)*
This concept provides context on how machine learning classifiers are applied to interpret paper ballots in elections, setting the stage for understanding the security risks explored in the paper.

*How the paper uses it:* The paper investigates vulnerabilities in machine learning classifiers used for bubble detection in election tabulators.

▶ [AI and Elections: What We Learned in 2024 – Julia Angwin | IASEAI 2025](https://www.youtube.com/watch?v=YtPn8UR-r24) — International Association for Safe & Ethical AI · 27:21 · 11 months ago

### Adversarial machine learning attacks
Adversarial machine learning attacks are the central method studied in the paper to manipulate ballot classifiers. A rigorous university lecture on adversarial robustness provides a deep understanding of attack strategies and defenses relevant to the paper's contributions.

*How the paper uses it:* The paper studies adversarial attacks that cause misclassification of marked bubbles on ballots.

▶ [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — Stanford Online · 9 months ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk or a closely related expert presentation on election security and paper ballots offers direct insights into the motivation, methodology, and implications of the paper's findings.

*How the paper uses it:* Direct source for the authors' presentation and insights on their work on adversarial machine learning vulnerabilities in election tabulators.

▶ [Election security: Are paper ballots safer?](https://www.youtube.com/watch?v=aeWdHwjPl0U) — CBS News · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding how machine learning is applied to election tabulation to interpret paper ballots, establishing the context of the paper. Then learn about adversarial machine learning attacks, which are the core threat studied here. Next, grasp the technical challenge of gradient masking in neural networks that causes false robustness in attacks. Follow this with the difference of logits ratio loss, a key method modification to overcome gradient masking. Finally, explore physical adversarial attacks on printed media to see how these attacks translate to real-world ballot manipulation.

### Machine learning for election tabulation *(prerequisite)*
This section introduces how machine learning classifiers are used to interpret paper ballots in elections, providing the foundational context for the paper's focus. Understanding this helps grasp why ML models are critical in modern election systems and why their vulnerabilities matter.

*How the paper uses it:* The paper studies ML classifiers applied to bubble detection on paper ballots for election tabulation.

▶ [Machine Learning Classifier for 2020 Presidential Election - Tweepy + scikit-learn](https://www.youtube.com/watch?v=VIzdmK62FrU) — Tiffany Reid · 19:23 · 7 years ago

### Adversarial machine learning attacks
Learn what adversarial machine learning attacks are—small, intentional input changes that fool ML models into misclassifying data. This concept is central to the paper's investigation of how ballot classifiers can be tricked.

*How the paper uses it:* The paper demonstrates that ML classifiers in election tabulators are vulnerable to adversarial examples causing misclassification.

▶ [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — Software Engineering Institute | Carnegie Mellon University · 2 years ago

### Gradient masking in neural networks *(prerequisite)*
Gradient masking is a phenomenon where gradients used in training or attacks become zero or misleading, causing false impressions of model robustness. Understanding this explains why standard attacks failed on the paper's ballot classifiers.

*How the paper uses it:* The paper identifies gradient masking due to numerical instability as a key challenge hindering adversarial attacks on ballot classifiers.

▶ [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — 3Blue1Brown · 20:33 · 8 years ago

### Difference of logits ratio loss *(prerequisite)*
This loss function modification helps overcome gradient masking by better guiding adversarial attacks in binary classification tasks. Learning this clarifies the paper's technical solution to enable successful attacks.

*How the paper uses it:* The paper modifies the difference of logits ratio loss to overcome gradient masking in attacks on ballot classifiers.

▶ [StatQuest: Logistic Regression](https://www.youtube.com/watch?v=yIYKR4sgzI8) — StatQuest with Josh Starmer · 8 years ago

### Physical adversarial attacks on printed media *(prerequisite)*
Physical adversarial attacks involve creating real-world perturbations (e.g., on printed ballots) that survive scanning and still fool ML models. This section shows the practical impact and constraints of attacks studied in the paper.

*How the paper uses it:* The paper demonstrates physical adversarial attacks on printed and scanned ballots that can alter election outcomes.

▶ [Trust region based adversarial attack on neural networks](https://www.youtube.com/watch?v=0aPgJ3uwO-Q) — UCF CRCV · 31:57 · 6 years ago

## Already in your library

- [Generalizable Adversarial Robustness to Unforeseen Attacks - Soheil Feizi](https://www.youtube.com/watch?v=RGgDQumPOU8) — also for: SmoothLLM: Defending Large Language Models Against Jailbreaking Attacks (Hamed Hassani)
