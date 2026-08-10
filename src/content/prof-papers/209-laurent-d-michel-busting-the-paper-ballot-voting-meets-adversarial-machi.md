---
title: "209 · Busting the Paper Ballot: Voting Meets Adversarial Machine Learning — Laurent D. Michel"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-laurent-d-michel"
source_hash: "35541932fc64c891c1926df725fc0dfe1354640eaa9d2293f252d6085fc9dc09"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Adversarial Machine Learning
**The paper assumes:** machine learning classifiers, adversarial examples, gradient-based attacks, loss functions in neural networks
**Already in this field?** Skip this entirely if you already understand adversarial machine learning concepts including attack methods and defenses.

To understand the vulnerabilities of machine learning classifiers to adversarial examples in election tabulators, this background focuses on adversarial machine learning concepts, attacks, defenses, and the phenomenon of gradient masking. The rigorous course option provides a deep, structured university-level introduction to adversarial robustness within a broader deep learning context, while the fast track offers a concise, focused explainer series on adversarial machine learning to quickly grasp the core ideas and terminology relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS230: Deep Learning I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rNRRGdS0rBbXOUGA0wjdh1X) — Stanford Online · 9 videos · 13.9h across 9 episodes

**Watch only this:** Watch Lecture 4: Adversarial Robustness and Generative Models (about 92 minutes) to get a focused, rigorous introduction to adversarial attacks and defenses in deep learning.

*Why it unblocks this paper:* Stanford CS230: Deep Learning I Autumn 2025 includes a dedicated lecture on adversarial robustness and generative models, providing rigorous coverage of adversarial attacks and defenses relevant to the paper's focus on gradient masking and modified loss functions.

*If you want all of it:* The full course is about 13.9 hours across 9 episodes if a broader deep learning foundation is desired.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Adversarial Machine learning](https://www.youtube.com/playlist?list=PLqY9uEMecYPXC4sCrNRJ5uHwmTr3FpTui) — Hugh Medal · 16 videos · 11.9h across 16 episodes

**Watch only this:** Watch the first 5 episodes (about 3.7 hours total) covering adversarial examples, adversarial training, and key defenses to quickly grasp the core concepts and challenges addressed in the paper.

*Why it unblocks this paper:* The 'Adversarial Machine learning' playlist by Hugh Medal offers a clear, well-structured series of 16 episodes focused specifically on adversarial examples, attacks, and defenses, matching the paper's subject closely and providing an accessible yet thorough overview.

*If you want all of it:* The entire playlist is about 11.9 hours across 16 episodes for a comprehensive understanding.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder grounded in the paper "Busting the Paper Ballot: Voting Meets Adversarial Machine Learning." The beginner project familiarizes you with the concept of gradient masking and adversarial attacks on ballot classifiers using simplified models and synthetic data. The intermediate project involves reimplementing the core adversarial attack method with the modified difference of logits ratio loss on a smaller dataset, demonstrating attack success and gradient masking mitigation. The advanced project extends the paper by exploring a future direction: applying alternative adversarial attacks (e.g., PGD or MIM) with different loss functions on ballot classification models, addressing a stated limitation and deepening understanding of defenses.

### Beginner — Visualize Gradient Masking on a Simple Ballot Classifier
*Effort: a weekend, ~8 hours*

You build a small convolutional neural network to classify synthetic bubble images as marked or unmarked, then implement a basic white-box adversarial attack (e.g., FGSM) to observe gradient masking effects. You visualize gradients during attack iterations to confirm numerical instability causing zero gradients.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key finding about gradient masking due to numerical instability in ballot classifiers, a subtle but critical vulnerability that can falsely indicate model robustness.

**Grounded in:** Identification and analysis of gradient masking caused by numerical instability in standard white-box attacks on voting datasets.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, matplotlib

**Data:** Synthetic bubble images generated programmatically to simulate marked and unmarked bubbles, as the paper's datasets are not publicly released.

**Build it:**

1. Generate a small synthetic dataset of binary images representing marked and unmarked ballot bubbles.
2. Train a simple CNN binary classifier on this dataset to achieve >90% accuracy.
3. Implement a basic FGSM adversarial attack and attempt to generate adversarial examples.
4. Visualize gradients during attack iterations to detect gradient masking (zero or near-zero gradients).
5. Document observations and explain how numerical instability causes gradient masking.

**Ships as:** A GitHub repo with code, Jupyter notebooks showing training, attack attempts, gradient visualizations, and a README explaining gradient masking in ballot classifiers.

**Stretch goal:** Add a visualization comparing gradient masking effects on different model architectures (e.g., CNN vs. MLP).

### Intermediate — Reimplement Modified DLR Adversarial Attack on Ballot Classification
*Effort: 2 weekends, ~20 hours*

You reimplement the core adversarial attack method from the paper using the modified difference of logits ratio (DLR) loss to overcome gradient masking on a ballot classification model trained on a substitute dataset. You compare attack success rates with and without the modified loss.

**Why it shows you understood the paper:** This project proves you can faithfully reproduce the paper's main technical contribution—overcoming gradient masking with a modified loss—and quantitatively evaluate attack effectiveness on ballot classifiers.

**Grounded in:** Modification of the difference of logits ratio (DLR) loss function to overcome gradient masking in binary classification.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, numpy, matplotlib

**Data:** Use the publicly available REGAIN baseline's reference implementation dataset from https://github.com/VoterCenter/Busting-the-Ballot as a substitute for the paper's ballot datasets, or alternatively synthetic bubble images if unavailable.

**Build it:**

1. Obtain or generate a dataset of ballot bubble images labeled as marked or unmarked.
2. Train a convolutional neural network classifier (e.g., SimpleCNN or ResNet-20) on this dataset.
3. Implement the standard DLR loss-based adversarial attack and measure attack success rate.
4. Modify the DLR loss as described in the paper to mitigate gradient masking.
5. Run the modified DLR loss attack and compare attack success rates and gradient behavior.
6. Document results, including accuracy, attack success, and gradient masking analysis.

**Verified links from the paper:**

- <https://github.com/VoterCenter/Busting-the-Ballot> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with training and attack code, notebooks or scripts comparing standard vs. modified DLR loss attacks, and a detailed README linking results to the paper's findings.

**Stretch goal:** Extend the attack implementation to include another white-box attack method like PGD and compare its effectiveness.

### Advanced — Evaluate Alternative Adversarial Attacks on Ballot Classifiers with Domain-Specific Optimization
*Effort: 3+ weeks*

You extend the paper by implementing alternative adversarial attacks such as PGD, MIM, or FGSM with different loss functions on ballot classifiers, addressing the paper's future direction. You explore how domain-specific optimization or domain-specific languages could improve robustness or verifiability of models against these attacks.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's limitations and future directions, applying advanced adversarial methods and connecting them to domain-specific optimization techniques relevant to Professor Michel's research interests.

**Grounded in:** Extending adversarial attack methods beyond APGD to other attacks like PGD, MIM, and FGSM with alternative loss functions; investigating defenses and robustness via domain-specific optimization.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, numpy, matplotlib, possibly a DSL or optimization framework if feasible

**Data:** Use synthetic ballot bubble datasets or substitute datasets from the third-party codebase at https://github.com/VoterCenter/Busting-the-Ballot if available.

**Build it:**

1. Train ballot bubble classifiers (e.g., ResNet-20) on available or synthetic datasets.
2. Implement alternative adversarial attacks (PGD, MIM, FGSM) with various loss functions.
3. Evaluate and compare attack success rates and gradient masking effects.
4. Investigate how domain-specific optimization techniques or DSLs could formalize model constraints or verification to improve robustness.
5. Document findings, including code, experiments, and a conceptual proposal for integrating domain-specific languages or optimization in election tabulation security.

**Verified links from the paper:**

- <https://github.com/VoterCenter/Busting-the-Ballot> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive GitHub repo with attack implementations, evaluation scripts, and a detailed report/README discussing results and proposing domain-specific optimization approaches for robust ballot classifiers.

**Stretch goal:** Prototype a minimal domain-specific language or optimization model to specify constraints on classifier behavior relevant to election security.
