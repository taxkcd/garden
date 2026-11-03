---
title: "1025 · Challenges and opportunities in portraying emotion in generated sign language — John McDonald"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-john-mcdonald"
source_hash: "4d186bbe4ac3832134c16d41785cb8848cf7a4e6ffc0cd801a9b5944d595b1b7"
sequence: 1025
generator: "outreach-garden: managed"
---

# 1025 · Challenges and opportunities in portraying emotion in generated sign language

## At a glance

- **Professor:** John McDonald
- **Institution:** DePaul University
- **Paper:** [Challenges and opportunities in portraying emotion in generated sign language](https://arxiv.org/pdf/2508.07937)
- **Authors:** John C. McDonald, Rosalee Wolfe, Fabrizio Nunnari
- **Year:** 2025

## Paper overview

This paper addresses the challenge of making signing avatars express emotions naturally and legibly, focusing on facial and non-manual signals in sign language. It proposes using a two-parameter model (Pleasure and Arousal) to control emotional expressions on the Paula signing avatar, improving the consistency and nuance of emotional portrayal in sign language animation.

### Why it matters

**Research problem:** Signing avatars struggle to portray the full range of emotional facial expressions in sign language due to the complexity of non-manual signals and the lack of a standard, intuitive method to specify the avatar's emotional state.

**Why it matters:** Accurate emotional expression is critical for natural and meaningful sign language communication. Without it, avatars appear robotic and fail to convey the richness of human communication, limiting their effectiveness and user acceptance.

**Key contributions:**

- Introduction of a two-parameter PAD-based representation (Pleasure and Arousal) for emotive non-manual signals in signing avatars.
- Implementation of this model on the Paula avatar with a flexible facial rig allowing nuanced emotional expressions.
- Development of the EASIER notation for textual specification of emotional expressions.
- Demonstration of cultural and linguistic differences in emotive facial expressions across signed languages.
- User evaluations in the EASIER project showing the effectiveness of the approach for multiple sign languages.

## About the professor

**John McDonald** — Associate Professor, School of Computing, DePaul University.

Research interests: Computer Graphics, High Performance and Scientific Computing, Visual Computing (VC)

### Research links

- [Faculty/profile page](https://www.depaul.edu/faculty/john-mcdonald)
- [Professor website](http://mcdonald.cs.depaul.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Affective computing and emotion modeling
**The paper assumes:** computational emotion modeling, dimensional emotion theories, affective computing frameworks
**Already in this field?** Skip this entirely if you already understand computational models of emotion, especially dimensional models like PAD, and their use in affective computing.

This background focuses on affective computing and emotion modeling, specifically the PAD (Pleasure, Arousal, Dominance) model used to represent and control emotional expressions in signing avatars. The rigorous course option provides a comprehensive university-level lecture series covering foundational and applied aspects of affective computing, while the fast track offers a concise, focused playlist for a quicker but still solid understanding of the core concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [NPTEL Affective Computing](https://www.youtube.com/playlist?list=PLwWn86V6fq_HOo_zksaKcnn8yUHTWFH33) — Pranav Kumar · 37 videos · 23.2h across 37 episodes

**Watch only this:** Lectures 1 to 4 (Fundamentals of Affective Computing, Applications, Emotion Psychology, Emotion Theory), plus Lectures 1 and 2 on Facial Expression Recognition, totaling about 4.5 hours — these cover the psychological foundations and computational facial expression methods critical for this paper.

*Why it unblocks this paper:* This NPTEL Affective Computing course by Pranav Kumar covers fundamentals of affective computing, emotion psychology, emotion theory, facial expression recognition, and applications, directly relevant to understanding the PAD model and its computational use in avatar emotional expression.

*If you want all of it:* All 37 episodes, approximately 23.2 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Facial Emotion Recognition](https://www.youtube.com/playlist?list=PLll8hJo6PgObbv9H9to3QmvIeuqpM42lz) — Tech Girl · 18 videos · 20.2h across 18 episodes

**Watch only this:** Episodes 1 (Facial Expressions Recognition using Keras Live Project- 1st Part Training), 5 (Emotion Detection -Python Project using Machine Learning & OpenCV), and 6 (Facial Expression Detection Using Keras and OpenCV), totaling about 3.5 hours — these give a hands-on overview of emotion recognition technology relevant to the paper's avatar control.

*Why it unblocks this paper:* This Facial Emotion Recognition playlist by Tech Girl offers a practical, application-focused introduction to emotion detection and facial expression recognition, providing a quick, intuitive grasp of key concepts relevant to avatar emotional expression.

*If you want all of it:* All 18 episodes, approximately 20.2 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on emotional portrayal in signing avatars, start with foundational knowledge of sign language non-manual signals and facial animation rigging, which are critical for implementing nuanced emotional expressions. Then explore the broader context of emotion representation in avatars to appreciate the challenges and methods in virtual character emotion modeling. Finally, focus on the paper's core concept, including the authors' own talk if available, to gain direct insight into their novel PAD-based approach and its application to the Paula avatar.

### Sign language non-manual signals *(prerequisite)*
Understanding the facial and body cues that convey emotion in sign language is essential, as these non-manual signals are a core challenge addressed by the paper. The selected video provides a detailed and academic-level explanation of non-manual signals in ASL, focusing on their linguistic and expressive roles beyond beginner content.

*How the paper uses it:* The paper focuses on improving emotional expression in signing avatars by accurately modeling non-manual signals such as facial expressions.

▶ [Learn to Sign with Expression | ASL | Non-Manual Signals](https://www.youtube.com/watch?v=1uaF8CECxrc) — Learn How to Sign · 8:21 · 4y ago

### Facial animation rigging *(prerequisite)*
Technical expertise in facial rigging is foundational for implementing the nuanced emotional expressions described in the paper. The chosen talk from the Blender Conference 2025 offers an in-depth, research-level presentation on facial rigging techniques suitable for stylized characters, aligning well with the paper's use of a flexible facial rig for the Paula avatar.

*How the paper uses it:* The Paula avatar uses a sophisticated facial rig with over 60 controls to enable precise emotional expression.

▶ [Facial Rigging for Stylized Character Animation — Blender Conference 2025](https://www.youtube.com/watch?v=_Ov0pFIOpug) — Blender · 49:33 · 1y ago

### Emotion representation in avatars *(prerequisite)*
Exploring how emotions are modeled and rendered in virtual characters provides broader context for the paper's approach. The selected seminar talk offers a comprehensive and scientific perspective on affective 3D human expressions, which complements the paper's use of the PAD model for emotional control.

*How the paper uses it:* The paper applies a psychological emotion model to control avatar facial expressions, situating it within broader avatar emotion representation research.

▶ [3DGV Talk: Aniket Bera --- Learning Affective 3D Human Expressions](https://www.youtube.com/watch?v=xIUgZiMoFAs) — 3DGV Seminar · 1:23:16 · Streamed 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand how this paper improves emotional expression in signing avatars, start by learning about the non-manual signals in sign language, which are crucial for conveying emotion. Next, grasp the basics of facial animation rigging to see how avatars can physically express emotions. Then, explore how emotions are represented in avatars generally to understand the broader context. Finally, dive into the PAD emotion model, the core method used in the paper to control emotional expressions on the Paula avatar.

### Sign language non-manual signals *(prerequisite)*
Non-manual signals in sign language include facial expressions and body cues that are essential for conveying grammar and emotion. Understanding these signals helps appreciate why avatars need nuanced facial animation to communicate effectively.

*How the paper uses it:* The paper focuses on improving emotional expression through facial and non-manual signals in signing avatars.

▶ [Learn to Sign with Expression | ASL | Non-Manual Signals](https://www.youtube.com/watch?v=1uaF8CECxrc) — Learn How to Sign · 8:21 · 4y ago

### Facial animation rigging *(prerequisite)*
Facial animation rigging is the technical process of creating controls that allow an avatar's face to move realistically and expressively. Learning this helps understand how the Paula avatar can be manipulated to show emotions.

*How the paper uses it:* The Paula avatar uses a flexible facial rig with over 60 controls to create nuanced emotional expressions.

▶ [Head Rig and Facial Animation | Joysticks 'n Sliders Tutorial](https://www.youtube.com/watch?v=lwYCnlbLyJ4) — Jafar Fazel · 37:52 · 4y ago

### Emotion representation in avatars *(prerequisite)*
This concept covers how virtual characters model and render emotions to appear lifelike and relatable. It provides context for why a structured emotional model like PAD is necessary for avatars.

*How the paper uses it:* The paper contributes to the broader field of emotion representation by applying the PAD model to signing avatars.

▶ [3DGV Talk: Aniket Bera --- Learning Affective 3D Human Expressions](https://www.youtube.com/watch?v=xIUgZiMoFAs) — 3DGV Seminar · 1:23:16 · Streamed 4y ago

### PAD emotion model
The PAD model represents emotions along three dimensions: Pleasure, Arousal, and Dominance, allowing flexible and nuanced emotional states. Understanding this model is key to grasping how the paper controls avatar facial expressions.

*How the paper uses it:* The authors use the Pleasure and Arousal dimensions of the PAD model to specify emotional expressions on the Paula avatar.

▶ [Physiological Arousal | Cross-Cultural Psychology | PSY515_Topic120](https://www.youtube.com/watch?v=a__f38hSeLk) — Virtual University of Pakistan · 6:35 · 2y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's core contribution: using the Pleasure and Arousal parameters of the PAD model to control emotional facial expressions in signing avatars. The beginner project recreates a simple visualization of the discrete PAD parameter space. The intermediate project implements the two-parameter PAD model to generate facial expressions on a simplified avatar rig and compares them to a baseline. The advanced project extends the model by adding intermediate values for Pleasure and Arousal, addressing a key limitation noted by the authors.

### Beginner — Visualizing PAD Emotion States for Signing Avatars
*Effort: a weekend, ~8 hours*

You build an interactive web visualization that displays the nine extreme emotional states defined by the discrete Pleasure and Arousal parameters (-1, 0, +1) as a 3x3 grid. Each cell shows a stylized facial expression icon or emoji representing the corresponding emotional state. Users can hover or click cells to see the Pleasure and Arousal values and a short description of the emotion.

**Why it shows you understood the paper:** This project shows you understand the PAD two-parameter model applied in the paper, the discrete parameter restriction, and the mapping of parameter combinations to emotional states, which is foundational to the authors' approach.

**Grounded in:** The Paula avatar can express nine extreme emotional states defined by combinations of Pleasure and Arousal parameters.

**Tech stack:** TypeScript, React, CSS

**Data:** No external data needed; you simulate the nine discrete PAD states as described in the paper.

**Build it:**

1. Create a React app with a 3x3 grid layout representing Pleasure (-1,0,+1) on one axis and Arousal (-1,0,+1) on the other.
2. Design or select simple facial expression icons or emojis corresponding to each PAD combination based on the paper's descriptions.
3. Implement hover or click handlers to display the PAD values and emotion descriptions for each grid cell.
4. Style the grid and cells for clarity and accessibility.
5. Write a README explaining the PAD model and how the visualization relates to the paper's emotional states.

**Ships as:** A GitHub repo with a React app showing the PAD emotion grid and a README linking the visualization to the paper's discrete PAD model.

**Stretch goal:** Add a slider to interpolate between discrete PAD states and dynamically update the facial expression icons.

### Intermediate — Implementing PAD-Based Facial Expression Control for a Signing Avatar
*Effort: 1-3 weekends*

You implement the two-parameter PAD model (Pleasure and Arousal with discrete values -1, 0, +1) to control facial expressions on a simplified 3D or 2D avatar rig. You create a small set of facial expression morph targets or blend shapes corresponding to the nine PAD states and allow blending between them. You compare your PAD-driven expressions to a baseline of fixed discrete emotion expressions (e.g., happy, sad, neutral) and evaluate user perception via a small survey or heuristic metric.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the core method of the paper—mapping PAD parameters to facial expressions—and appreciate the benefits of the two-parameter model over discrete emotion labels, as well as the challenges of expression blending and linguistic annotation.

**Grounded in:** Introduction of a two-parameter PAD-based representation (Pleasure and Arousal) for emotive non-manual signals in signing avatars; The Paula avatar can express nine extreme emotional states defined by combinations of Pleasure and Arousal parameters.

**Tech stack:** TypeScript, React, Three.js or a 2D canvas library, CSS

**Data:** No official dataset released by the authors; you simulate facial expression morph targets based on the paper's descriptions and AffectNet as a conceptual guide.

**Build it:**

1. Set up a React app with a 3D or 2D avatar face capable of morph target or blend shape animation.
2. Define nine facial expression morph targets corresponding to the discrete PAD states (-1,0,+1 for Pleasure and Arousal).
3. Implement a control UI to select PAD parameter values and blend facial expressions accordingly.
4. Implement a baseline mode with fixed discrete emotion expressions (e.g., happy, sad, neutral) for comparison.
5. Conduct a small user study or heuristic evaluation comparing PAD-driven expressions to baseline for clarity and nuance.
6. Document the implementation, evaluation, and relation to the paper's method.

**Ships as:** A GitHub repo with a PAD-controlled avatar demo, baseline comparison, evaluation results, and a README linking to the paper's PAD model and findings.

**Stretch goal:** Incorporate simple linguistic annotation support using the EASIER notation for specifying emotional expressions.

### Advanced — Extending PAD Model with Intermediate Values for Nuanced Signing Avatar Emotions
*Effort: a few weeks*

You extend the two-parameter PAD model implementation by allowing intermediate continuous values between -1 and +1 for Pleasure and Arousal, increasing expressivity beyond the paper's discrete levels. You update the avatar's facial rig controls to interpolate smoothly among these values and create a UI for continuous parameter input. You evaluate how intermediate values affect the naturalness and legibility of emotional expressions, addressing a key limitation noted by the authors.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the PAD model's role in emotional expression and the technical challenges of implementing continuous control in signing avatars.

**Grounded in:** Current implementation only supports extreme values (-1, 0, +1) for Pleasure and Arousal, limiting intermediate emotional expressions; future direction to expand the parameter space to allow intermediate values for Pleasure and Arousal to increase expressivity.

**Tech stack:** TypeScript, React, Three.js or 2D canvas, CSS

**Data:** Same as intermediate: simulated facial expression morph targets extended to support interpolation for intermediate PAD values.

**Build it:**

1. Build upon the intermediate PAD model implementation with discrete values.
2. Modify the facial expression rig to support continuous interpolation of Pleasure and Arousal parameters between -1 and +1.
3. Create a UI slider or input for continuous PAD parameter control.
4. Generate intermediate facial expressions by blending morph targets or using procedural animation techniques.
5. Conduct a user evaluation or heuristic analysis comparing discrete vs. continuous PAD control for expression naturalness and clarity.
6. Write detailed documentation explaining the extension, evaluation, and how it addresses the paper's limitation.

**Ships as:** A GitHub repo demonstrating continuous PAD parameter control for signing avatar facial expressions, evaluation results, and a README discussing the extension in the context of the paper's limitations and future work.

**Stretch goal:** Incorporate the Dominance dimension of the PAD model by adding torso and shoulder movement controls to the avatar.
