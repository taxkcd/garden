---
title: "093 · Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs — Craig B. Zilles"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-craig-b-zilles"
source_hash: "865e1012305892883fbbe01f41267a838d29648a48b5fbef7edc095bc8bb2b2c"
sequence: 93
generator: "outreach-garden: managed"
---

# 093 · Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs

## At a glance

- **Professor:** Craig B. Zilles
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs](https://zilles.cs.illinois.edu/papers/Levine_Automated_Grading_of_Handwritten_Mathematics_Using_Vision_Capable_LLMs_AIED_2026.pdf)
- **Authors:** Jacob Levine, Miguel Aenlle, Craig Zilles, Matthew West, Mariana Silva
- **Year:** 2026

## Paper overview

This paper evaluates the use of vision-capable large language models (LLMs) to automatically grade handwritten mathematics submitted as images by students. The study compares AI grading to human grading on real student work from university STEM courses, finding that most errors come from transcription issues rather than grading logic. The work highlights both the promise and current limitations of AI grading for handwritten math.

### Why it matters

**Research problem:** Automated grading of handwritten mathematics is challenging due to the complexity of multi-step handwritten solutions and the difficulty of accurately transcribing and evaluating such work using AI.

**Why it matters:** Automated grading can reduce instructor workload, provide immediate feedback, and enable scalable assessment, but handwritten math remains a barrier for many existing systems, limiting their adoption in STEM education.

**Key contributions:**

- Extension of a rubric-based LLM grading pipeline to handle handwritten math images in a single LLM call.
- Empirical evaluation of three vision-capable LLMs (GPT-5-mini, GPT-5.1, Gemini-3-flash) on authentic student handwritten math submissions.
- Detailed error analysis distinguishing transcription failures from rubric application failures.
- Identification of common failure modes such as blurry images, rotated text, hallucinated content, and incorrect handling of equivalent expressions.
- Recommendations for system design, prompt refinement, and deployment strategies in educational settings.

## About the professor

**Craig B. Zilles** — Professor of Computer Science, Severns Faculty Scholar, Computer Science, Univ. of Illinois at Urbana-Champaign.

Research interests: learning analytics, computer-based testing, CS 1, plagiarism detection, computer architecture, compiler construction, dynamic optimization.

### Research links

- [Faculty/profile page](http://zilles.cs.illinois.edu)
- [Resolved homepage](http://zilles.cs.illinois.edu/bio.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on automated grading of handwritten mathematics using vision-capable LLMs, start with foundational knowledge on multimodal large language models and handwriting recognition technology, as these underpin the transcription and evaluation process. Next, explore the context of automated grading systems in STEM education and rubric-based automated evaluation to grasp the challenges and methodologies in grading. Finally, focus on the paper's core concept by reviewing the authors' own talk on their specific approach and findings.

### Large language models multimodal learning *(prerequisite)*
This section covers how large language models integrate multiple modalities such as text and images, which is essential to understand how the vision-capable LLMs in the paper process handwritten math images and perform grading in a single call.

*How the paper uses it:* The paper uses vision-capable LLMs that combine image and text understanding to transcribe and grade handwritten math.

▶ [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — Stanford Online · 1:20:04

### Handwriting recognition technology *(prerequisite)*
Understanding handwriting recognition technology is critical to grasp the transcription challenges highlighted in the paper, including errors due to image quality and handwriting variability that impact grading accuracy.

*How the paper uses it:* Transcription errors dominate grading inaccuracies in the paper's evaluation of handwritten math grading.

▶ [L27: Introduction to asr & handwriting recognition | speech to ...](https://www.youtube.com/watch?v=dzbHcaEYxww) — IIT Madras - B.S. Degree Programme · 19:19

### Automated grading systems in STEM education *(prerequisite)*
This section provides context on the broader challenges and benefits of automated grading in STEM fields, helping to situate the paper's contributions within ongoing efforts to improve assessment scalability and feedback.

*How the paper uses it:* The paper addresses the challenge of automated grading for handwritten math in university STEM courses.

▶ [An Exploration of Automated Grading of Complex Assignments](https://www.youtube.com/watch?v=n4PEPOvLZUo) — Association for Computing Machinery (ACM) · 30:03

### Rubric-based automated evaluation *(prerequisite)*
Rubric-based evaluation is the core method used by the LLM to assign grades after transcription, so understanding rubric design and application is key to appreciating the paper's grading pipeline and error analysis.

*How the paper uses it:* The paper extends a rubric-based LLM grading pipeline to handle handwritten math images.

▶ [Guided Grading with AI Tools](https://www.youtube.com/watch?v=l4cCSGtCRB8) — Eric Curts · 50:18

### Paper authors talk *(the paper's own talk)*
The authors' own recorded talk provides the most direct and detailed presentation of their methodology, empirical evaluation, error analysis, and recommendations, making it the best resource for understanding the paper's contributions and nuances.

*How the paper uses it:* This is a direct source for understanding the authors' presentation of their work on automated grading of handwritten algebra.

▶ [Automated Grading of Handwritten Algebra (Project 2: Fall 2024)](https://www.youtube.com/watch?v=Xa841iiZBoE) — Jeongkyu Lee · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand automated grading of handwritten mathematics using vision-capable large language models (LLMs). We start with the basics of handwriting recognition technology, then explore automated grading systems in STEM education to understand the problem context. Next, we cover rubric-based automated evaluation as the core grading method, followed by an introduction to large language models with multimodal learning capabilities. Finally, we focus on the paper's core method: combining handwritten math transcription and rubric evaluation in a single LLM call.

### Handwriting recognition technology *(prerequisite)*
Handwriting recognition technology converts handwritten text into machine-readable text. Understanding this helps grasp why transcription errors occur and how they impact grading accuracy.

*How the paper uses it:* The paper identifies transcription errors from handwriting recognition as the main source of grading inaccuracies.

▶ [How to use OCR | Get Started with Optical Character ...](https://www.youtube.com/watch?v=Mgs3VVHWbqE) — Roboflow · 10:11

### Automated grading systems in STEM education *(prerequisite)*
Automated grading systems aim to reduce instructor workload and provide fast feedback, especially in STEM fields where grading complex answers is challenging. This context clarifies why automated handwritten math grading is important and difficult.

*How the paper uses it:* The paper addresses challenges and benefits of automated grading in STEM education, focusing on handwritten math.

▶ [Guided Grading with AI Tools](https://www.youtube.com/watch?v=l4cCSGtCRB8) — Eric Curts · 50:18

### Large language models multimodal learning *(prerequisite)*
Multimodal large language models can process both text and images, enabling tasks like reading handwritten math and evaluating it in one step. Understanding this capability is key to the paper’s approach.

*How the paper uses it:* The paper uses vision-capable LLMs that combine image transcription and rubric evaluation in a single call.

▶ [What is Multimodal AI? How LLMs Process Text, Images, and More](https://www.youtube.com/watch?v=J51oZYcNvP8) — IBM Technology · 3 months ago

### Handwritten math transcription with LLMs
This concept covers how vision-capable LLMs transcribe handwritten math from images and apply rubric-based grading simultaneously, which is the paper’s main technical contribution.

*How the paper uses it:* The paper’s core method is a single multimodal LLM call that transcribes and grades handwritten math images.

▶ [How I used a tiny vision LLM to do my image to text ...](https://www.youtube.com/watch?v=3Z1oEM1hl-A) — Learn Meta-Analysis · 5:36

## Already in your library

- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
