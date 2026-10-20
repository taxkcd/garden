---
title: "882 · A11y-CUA Dataset: Characterizing the Accessibility Gap in Computer Use Agents — Amy Pavel"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-amy-pavel"
source_hash: "a64c2371b249dca1824f3f2ad9b1e71102da281982bc35d784ef1244beeb8fca"
sequence: 882
generator: "outreach-garden: managed"
---

# 882 · A11y-CUA Dataset: Characterizing the Accessibility Gap in Computer Use Agents

## At a glance

- **Professor:** Amy Pavel
- **Institution:** Univ. of California - Berkeley
- **Paper:** [A11y-CUA Dataset: Characterizing the Accessibility Gap in Computer Use Agents](https://arxiv.org/pdf/2602.09310)
- **Authors:** Ananya Gubbi Mohanbabu, Rosiana Natalie, Brandon Kim, Anhong Guo, Amy Pavel
- **Year:** 2026

## Paper overview

This paper introduces the A11y-CUA dataset, which captures how blind and low-vision users (BLVUs) and sighted users (SUs) perform everyday computer tasks. It reveals significant differences in interaction styles and highlights the accessibility gaps in current computer use agents (CUAs) when used with assistive technologies. The dataset and analysis aim to improve CUAs to be more accessible and collaborative for all users.

### Why it matters

**Research problem:** Current computer use agents (CUAs) are designed primarily to mimic sighted users' interactions and do not adequately support blind and low-vision users (BLVUs) who rely on assistive technologies (AT). There is a lack of real-world datasets capturing BLVU interactions to evaluate and improve CUA accessibility.

**Why it matters:** As CUAs become more prevalent for automating everyday computer tasks, it is crucial they support accessibility to avoid excluding BLVUs. Without understanding how CUAs perform under AT constraints, these users face barriers in monitoring, collaborating with, and benefiting from CUAs, potentially leading to errors and privacy risks.

**Key contributions:**

- A multimodal dataset of BLVUs and SUs performing 60 real-world computing tasks with 40.4 hours and 158,325 events.
- A computer use recorder that captures synchronized, replayable traces of real computer use including accessibility interactions.
- A comparative analysis revealing distinct interaction styles and within-group variability between SUs and BLVUs.
- An evaluation of state-of-the-art CUAs under default and assistive technology conditions, exposing significant accessibility gaps.

## About the professor

**Amy Pavel** — Univ. of California - Berkeley.

Research interests: accessibility, human-computer interaction

### Research links

- [Faculty/profile page](https://vcresearch.berkeley.edu/faculty/amy-pavel)
- [Identity evidence](https://amypavel.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Human-Computer Interaction
**The paper assumes:** human-computer interaction principles, accessibility in computing, user interface design, assistive technology interaction
**Already in this field?** Skip this entirely if you already have a solid understanding of human-computer interaction and accessibility concepts.

This background prepares the reader to understand the human-computer interaction (HCI) principles and accessibility challenges explored in the A11y-CUA dataset paper. The rigorous course option offers a deep, structured university-level introduction to HCI, including accessibility and design principles, while the fast track provides a concise, focused series of clear explainers on core HCI concepts and accessibility, suitable for quickly grasping the essentials.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Human Computer Interaction (In English)](https://www.youtube.com/playlist?list=PLyqSpQzTE6M-KVz-9blW7qq_LgDPSOtEE) — NPTEL-NOC IITM · 45 videos · 26.3h across 45 episodes

**Watch only this:** Lectures 1-8 (Introduction to Human-Computer Interaction (HCI): Lecture 1 Part 1, Lecture 1 Part 2, Good Design Vs Bad Design, HCI Project, Design: Lecture 2 Part 1, Design: Lecture 2 Part 2, Inclusivity, Accessibility and Design Principles, Canva), about 4.7 hours — these cover HCI basics, design, and accessibility principles essential for this paper.

*Why it unblocks this paper:* This NPTEL-NOC IITM course is a comprehensive university-level series on Human-Computer Interaction, covering foundational concepts, design principles, and accessibility topics directly relevant to understanding interaction styles and accessibility gaps in CUAs.

*If you want all of it:* 26.3 hours across 45 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Human-Computer Interaction](https://www.youtube.com/playlist?list=PL_1Gl3MizLMBAOfSL2kWQrU2JKNxf2nF3) — Human Factors · 13 videos · 6.1h across 13 episodes

**Watch only this:** Episodes 1-7 (Introduction to Human Computer Interaction - History and Eras, Ethics of HCI, Foundations and Requirements, Psychology of HCI - Part 1, Psychology of HCI - Part 2, Methods of HCI, Measures of HCI and UX), about 3.3 hours — covers core HCI concepts and user interaction essentials.

*Why it unblocks this paper:* This Human Factors channel playlist offers a concise, well-structured introduction to HCI with a dedicated episode on accessibility in digital design, providing a quick yet solid overview of the key concepts relevant to the paper's focus on accessibility gaps.

*If you want all of it:* 6.1 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the A11y-CUA paper, start with foundational knowledge on assistive technologies for blind users and human-computer interaction accessibility principles to grasp the user context and design challenges. Next, explore multimodal interaction data collection methods to appreciate the dataset creation approach. Finally, focus on the core concept of accessibility in computer use agents, including the authors' own talk if available, to directly connect with the paper's contributions and findings.

### Assistive technologies for blind users *(prerequisite)*
This section provides foundational understanding of the assistive technologies that blind and low-vision users rely on, which is critical to grasp how these users interact with computers differently from sighted users. It covers the state-of-the-art and challenges in assistive tech design and deployment.

*How the paper uses it:* Understanding assistive technologies is essential to appreciate the interaction constraints and styles of BLVUs captured in the A11y-CUA dataset.

▶ [Stanford Seminar - Designing Assistive Technologies for Agency](https://www.youtube.com/watch?v=RF1aOAomVfE) — Stanford Online · 57:38 · 5y ago

### Human-computer interaction accessibility *(prerequisite)*
This section covers key principles and research in accessible interaction design, focusing on how to build systems that accommodate diverse user needs and abilities. It provides context on usability, trust, and control in human-AI and accessible systems.

*How the paper uses it:* The paper's focus on accessibility gaps in CUAs aligns with broader HCI accessibility principles and challenges.

▶ [Stanford CS547 HCI Seminar | Autumn 2025 | Building Control and Trust in Human-AI Systems](https://www.youtube.com/watch?v=yJkLOzuvse0) — Stanford Online · 57:03 · 11mo ago

### Multimodal interaction data collection *(prerequisite)*
This section explains methods for capturing and analyzing multimodal user interaction data, including synchronized traces of input events, screen content, and accessibility metadata. It is crucial for understanding how the A11y-CUA dataset was constructed and analyzed.

*How the paper uses it:* The A11y-CUA dataset relies on multimodal data collection to capture rich interaction traces from BLVUs and SUs.

▶ [Lecture 7.1 - Multimodal Interaction (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=Z-JCiZiHZlY) — LP Morency · 1:21:06 · 2y ago

### Accessibility in computer use agents
This section focuses on how computer use agents (CUAs) operate and the challenges in making them accessible to users with assistive technologies. It includes university lectures and research talks on AI agents interacting with computer environments, which is central to the paper's evaluation of CUAs under AT constraints.

*How the paper uses it:* The paper evaluates state-of-the-art CUAs under assistive technology conditions, revealing accessibility gaps that this section helps to contextualize.

▶ [CMU AI Agents 2026: 2. Tool Use for Language Model Agents](https://www.youtube.com/watch?v=jXChFB4JSyw) — Graham Neubig · 57:22 · 1mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the accessibility challenges in computer use agents (CUAs) for blind and low-vision users (BLVUs). It starts with basic human-computer interaction (HCI) accessibility principles, then explains assistive technologies used by BLVUs, followed by how multimodal interaction data is collected to analyze user behavior. Finally, it covers the core topic of accessibility in CUAs, tying all concepts to the paper's focus on improving CUAs for diverse users.

### Human-computer interaction accessibility *(prerequisite)*
Learn the fundamental principles of designing computer systems that are usable and accessible to all people, including those with disabilities. This includes understanding usability, accessibility guidelines, and how users interact with technology differently.

*How the paper uses it:* The paper builds on HCI accessibility principles to analyze how BLVUs interact with CUAs differently from sighted users.

▶ [Introduction to Human-Computer Interaction (HCI): Lecture 1 Part 1](https://www.youtube.com/watch?v=IjrqtXlFGYA) — NPTEL-NOC IITM · 1:14:00 · 1y ago

### Assistive technologies for blind users *(prerequisite)*
Understand the types of assistive technologies (AT) that blind and low-vision users rely on, such as screen readers, magnifiers, and keyboard navigation tools. This knowledge is key to grasping how these users interact with computers differently from sighted users.

*How the paper uses it:* The paper evaluates CUAs under AT conditions and studies BLVU interaction styles that depend on these technologies.

▶ [Stanford Seminar - Designing Assistive Technologies for Agency](https://www.youtube.com/watch?v=RF1aOAomVfE) — Stanford Online · 57:38 · 5y ago

### Multimodal interaction data collection *(prerequisite)*
Explore how researchers capture diverse streams of user interaction data—like screen video, audio, input events, and accessibility tree information—to analyze real-world computer use. Multimodal data enables a rich understanding of how different users perform tasks.

*How the paper uses it:* The A11y-CUA dataset was created using a multimodal computer use recorder to capture synchronized traces of BLVU and SU interactions.

▶ [Lecture 7.1 - Multimodal Interaction (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=Z-JCiZiHZlY) — LP Morency · 1:21:06 · 2y ago

### Accessibility in computer use agents
Learn what computer use agents (CUAs) are, how they automate tasks on computers, and the challenges they face in supporting accessibility for users with disabilities. This includes understanding how CUAs interact with assistive technologies and diverse user behaviors.

*How the paper uses it:* The paper analyzes accessibility gaps in CUAs when used by BLVUs and evaluates state-of-the-art CUAs under assistive technology constraints.

▶ [Building Computer Use Agents (CUA)](https://www.youtube.com/watch?v=zr_DuUzFEd4) — Microsoft Developer · 16:40 · 7mo ago

## Already in your library

- [HCI - Human Computer Interaction. What Is HCI?](https://www.youtube.com/watch?v=yNzLBI0wsGU) — also for: “The Data Says Otherwise” – Towards Automated Fact-checking and Communication of Data Claims (Yu Fu)
- [CS 198-126: Lecture 22 - Multimodal Learning](https://www.youtube.com/watch?v=_Y-D5jrX7IQ) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [Lecture 8 – Large Multimodal Models (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=p_GGsKgGxSo) — also for: Bypassing Prompt Guards in Production with Controlled-Release Prompting (Sanjam Garg)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the A11y-CUA dataset paper. The beginner project reproduces a key interaction metric comparison using the dataset's public data. The intermediate project reimplements the paper's core comparative analysis of CUA performance under assistive technology constraints using the A11y-CUA dataset from Hugging Face. The advanced project extends the paper by developing a prototype CUA feature that better supports BLVU keyboard navigation styles, addressing a stated future direction.

### Beginner — Task Completion Time and Interaction Style Visualization
*Effort: a weekend, ~8 hours*

You build a simple web dashboard that visualizes the difference in task completion times and input modality usage (mouse vs keyboard) between blind/low-vision users (BLVUs) and sighted users (SUs) using summary statistics from the A11y-CUA dataset. The dashboard shows bar charts comparing average task times and counts of key presses and mouse clicks per group.

**Why it shows you understood the paper:** This project shows you understand the core accessibility gap metrics reported in the paper, including the significant differences in interaction styles and task efficiency between BLVUs and SUs.

**Grounded in:** Key results: SUs completed tasks faster (average 92.35s) and with higher success rates (99.16%) compared to BLVUs (average 211.18s, 85% success). SUs predominantly used mouse interactions, while BLVUs relied heavily on keyboard navigation and hotkeys with no mouse use.

**Tech stack:** TypeScript, React, D3.js or Chart.js

**Data:** Use summary statistics and aggregated interaction counts from the A11y-CUA dataset available at https://huggingface.co/datasets/berkeley-hci/A11y-CUA

**Build it:**

1. Download and explore the A11y-CUA dataset metadata and summary statistics from Hugging Face.
2. Extract or compute average task completion times and input event counts for BLVU and SU groups.
3. Build a React app with charts visualizing these metrics side-by-side.
4. Add simple UI controls to filter or highlight differences.
5. Write a README explaining the visualization and its connection to the paper's findings.

**Verified links from the paper:**

- <https://huggingface.co/datasets/berkeley-hci/A11y-CUA> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with a React dashboard that clearly visualizes and explains the key interaction differences between BLVUs and SUs from the A11y-CUA dataset.

**Stretch goal:** Add interactive filtering by task type or assistive technology condition to explore within-group variability.

### Intermediate — Reimplementation of CUA Performance Evaluation under Assistive Technologies
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's evaluation of state-of-the-art computer use agents (CUAs) under default and assistive technology (AT) conditions using the A11y-CUA dataset. You process the dataset's multimodal traces to measure task success rates and completion times for keyboard-only and magnifier conditions, comparing them to default. You also implement a simple baseline CUA model to compare performance.

**Why it shows you understood the paper:** This project demonstrates your ability to work with complex multimodal interaction data, reproduce the paper's core accessibility gap evaluation, and understand how CUAs fail under AT constraints.

**Grounded in:** Key contributions: An evaluation of state-of-the-art CUAs under default and AT (keyboard-only, magnified viewport) conditions, revealing accessibility gaps. Key results: Current CUAs performed well under default conditions (78.3% task success) but performance dropped sharply under AT conditions (41.67% with keyboard-only, 28.3% with magnifier).

**Tech stack:** Python 3.11, Pandas, NumPy, Matplotlib or Seaborn

**Data:** Use the full A11y-CUA dataset from https://huggingface.co/datasets/berkeley-hci/A11y-CUA which contains 40.4 hours and 158,325 events of multimodal data.

**Build it:**

1. Download and preprocess the A11y-CUA dataset to extract task success and completion time metrics under different AT conditions.
2. Implement a simple baseline CUA model that simulates task execution using keyboard-only input.
3. Calculate and compare task success rates and average completion times for default, keyboard-only, and magnifier conditions.
4. Visualize the performance drop across conditions with plots.
5. Document the methodology, results, and comparison to the paper's reported metrics.

**Verified links from the paper:**

- <https://huggingface.co/datasets/berkeley-hci/A11y-CUA> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python repo with scripts that reproduce the CUA performance evaluation under AT constraints, including plots and a report comparing your results to the paper.

**Stretch goal:** Extend the evaluation to include error recovery behaviors by BLVUs and analyze within-group variability.

### Advanced — Prototype CUA Supporting Keyboard-Only Navigation for BLVUs
*Effort: a few weeks, ~60+ hours*

You develop a prototype computer use agent that better supports blind and low-vision users by explicitly modeling keyboard-only navigation and hotkey interaction styles identified in the A11y-CUA dataset. Your agent uses the dataset's interaction traces to learn common keyboard navigation patterns and implements a task automation system that can be controlled and monitored via keyboard commands. You evaluate your prototype on a subset of tasks and compare success rates to baseline CUAs.

**Why it shows you understood the paper:** This project addresses a key future direction from the paper by designing CUAs that accommodate diverse BLVU interaction styles and AT constraints, demonstrating deep comprehension of the dataset and accessibility challenges.

**Grounded in:** Future directions: Develop and benchmark CUAs that better support AT constraints and BLVU interaction styles. Key results: BLVUs rely heavily on keyboard navigation and hotkeys with no mouse use, showing diverse interaction strategies and error recovery behaviors.

**Tech stack:** TypeScript, Node.js, Python, FastAPI, React

**Data:** Use the A11y-CUA dataset from https://huggingface.co/datasets/berkeley-hci/A11y-CUA to analyze keyboard navigation patterns and train your prototype.

**Build it:**

1. Analyze the A11y-CUA dataset to extract common keyboard navigation sequences and hotkey usage patterns by BLVUs.
2. Design a CUA prototype that can execute tasks via keyboard commands and provide feedback suitable for screen readers or magnifiers.
3. Implement the prototype with a backend service (e.g., FastAPI) and a keyboard-navigable frontend UI (React).
4. Evaluate the prototype on a subset of tasks from the dataset, measuring task success and user control.
5. Compare your prototype's performance and accessibility to a baseline CUA under keyboard-only conditions.
6. Document your design decisions, evaluation results, and how your prototype addresses the accessibility gaps identified in the paper.

**Verified links from the paper:**

- <https://huggingface.co/datasets/berkeley-hci/A11y-CUA> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A full-stack prototype CUA repository with code, evaluation scripts, and documentation showing improved support for BLVU keyboard navigation styles.

**Stretch goal:** Incorporate support for additional assistive technologies such as screen readers and magnifiers, and extend evaluation to a broader participant set.

_The A11y-CUA dataset contains complex multimodal data and is limited to 16 participants on Windows; ensure you can access and process the dataset format before starting intermediate or advanced projects._
