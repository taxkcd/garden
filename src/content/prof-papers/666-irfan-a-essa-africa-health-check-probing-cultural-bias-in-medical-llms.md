---
title: "666 · Africa Health Check: Probing Cultural Bias in Medical LLMs — Irfan A. Essa"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-irfan-a-essa"
source_hash: "8c1c14cb808dadf56cb6b34f1145e5b62bb4d313c680fd503b429395a40211b1"
sequence: 666
generator: "outreach-garden: managed"
---

# 666 · Africa Health Check: Probing Cultural Bias in Medical LLMs

## At a glance

- **Professor:** Irfan A. Essa
- **Institution:** Georgia Institute of Technology
- **Paper:** [Africa Health Check: Probing Cultural Bias in Medical LLMs](https://doi.org/10.18653/v1/2025.emnlp-main.1639)
- **Authors:** Charles Nimo, Shuheng Liu, Irfan Essa, Michael Best
- **Year:** 2025

## Paper overview

This study investigates how large language models (LLMs) used in healthcare may show cultural bias by favoring Western medical treatments over traditional African herbal medicines. The authors created a dataset of African traditional remedies and developed new metrics to measure bias in these models. They found that while adding cultural context helps models recommend local treatments better, many models still default to Western medicine, and some are misled by superficial cultural cues. The work highlights the need for culturally aware AI to better serve diverse global health needs.

### Why it matters

**Research problem:** Medical large language models often reflect Western-centric training data, leading to cultural bias that omits indigenous medical systems and region-specific treatments, particularly in African healthcare contexts.

**Why it matters:** Such biases can worsen health inequities in low- and middle-income countries where traditional medicine is widely used and essential. AI tools that ignore local cultural contexts risk reinforcing disparities rather than closing healthcare gaps.

**Key contributions:**

- Created a dataset of over 130 country-remedy pairs covering 100+ African traditional herbal medicines grounded in WHO safety and efficacy standards.
- Introduced Cultural Bias Attribution (CBA), a novel gradient-based metric to quantify how prompt tokens influence culturally biased model outputs.
- Systematically evaluated multiple state-of-the-art medical LLMs on African traditional medicine tasks, revealing strengths and limitations in cultural adaptability.

## About the professor

**Irfan A. Essa** — Assistant Professor & Imlay Fellow, College of Computing, Georgia Institute of Technology.

Research interests: computer vision, computer graphics, digital multimedia, HCI, neuroscience, cognition and computational modeling

### Research links

- [Faculty/profile page](https://sites.cc.gatech.edu/gvu/people/irfan.essa/)
- [Identity evidence](http://prof.irfanessa.com)
- [Professor website](http://www.cc.gatech.edu/~irfan)
- [Resolved homepage](http://prof.irfanessa.com/)
- [Lab website](http://www.cc.gatech.edu/gvu/perception/)
- [LinkedIn](https://www.linkedin.com/in/irfanessa/)
- [Social profile](https://twitter.com/irrfaan)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Interpretability of Machine Learning Models
**The paper assumes:** machine learning interpretability, gradient-based attribution methods, Integrated Gradients, explainable AI techniques
**Already in this field?** Skip this entirely if you already understand gradient-based interpretability methods for deep neural networks and their application to language models.

This background focuses on interpretability of machine learning models, specifically gradient-based attribution methods like Integrated Gradients, which are central to understanding the Cultural Bias Attribution (CBA) metric used in the paper. The rigorous course offers a deep, structured dive into deep learning fundamentals including interpretability, while the fast track provides concise, intuition-driven explainers ideal for quickly grasping core concepts relevant to bias attribution in medical LLMs.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Deep Learning](https://www.youtube.com/playlist?list=PLZ2ps__7DhBZVxMrSkTIcG6zZBDKUXCnM) — IIT Madras - B.S. Degree Programme · 68 videos · 19.2h across the first 60 episodes

**Watch only this:** Episodes L14: Learning parameters | (infeasible) | guess work | loss, sigmoid & error surface, L15: Gradient descent | weight update rule | learning rate & convergence demo, L17: Learning parameters:gradient descent | taylor series, gradients & optimization, L25: Feed forward neural networks explained | backpropagation intuition, and L4: Call for sanity in artificial intelligence | efficient deep learning | interpretability, about 1.5 hours total

*Why it unblocks this paper:* This IIT Madras Deep Learning course covers foundational deep learning concepts including gradient descent, backpropagation, and interpretability, which are essential to understand the gradient-based Cultural Bias Attribution metric used in the paper.

*If you want all of it:* About 19.2 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 2: Gradient descent, how neural networks learn | Deep Learning Chapter 2, 3: Backpropagation, intuitively | Deep Learning Chapter 3, and 4: Backpropagation calculus | Deep Learning Chapter 4, about 1 hour total

*Why it unblocks this paper:* 3Blue1Brown's Neural Networks series provides clear, visual, and intuitive explanations of neural networks, gradient descent, and backpropagation, which are key to understanding how gradient-based attribution methods work in deep learning interpretability.

*If you want all of it:* About 3.6 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Africa Health Check: Probing Cultural Bias in Medical LLMs', start by building foundational knowledge on medical large language models, bias attribution methods, prompt engineering for bias mitigation, and cultural bias in language models. These prerequisites provide the technical and conceptual background needed to grasp the paper's methodology and findings. Finally, focus on the paper authors' own talk to gain direct insights into their novel dataset, metrics, and evaluation results.

### Medical large language models *(prerequisite)*
This section covers the development, application, and challenges of large language models specifically tailored for healthcare. Understanding medical LLMs is essential to appreciate the paper's evaluation of these models' cultural adaptability and biases in medical contexts.

*How the paper uses it:* The paper evaluates state-of-the-art medical LLMs on African traditional medicine tasks, making foundational knowledge of medical LLMs critical.

▶ [AI Happy Hour | Language Models in Medicine](https://www.youtube.com/watch?v=axWFgMdl2xo) — Stanford AIMI · 1:01:46 · Streamed 4 years ago

### Bias attribution methods *(prerequisite)*
Bias attribution methods, especially gradient-based input attribution, are key to understanding how the paper quantifies prompt-driven cultural bias influences in LLM outputs. This section introduces the theoretical and practical tools for interpreting model biases.

*How the paper uses it:* The paper introduces Cultural Bias Attribution (CBA), a gradient-based metric to diagnose prompt token influence on bias.

▶ [Gradient-based Input Attribution](https://www.youtube.com/watch?v=IYSSjueNLv0) — UofU Data Science · 2 years ago

### Prompt engineering for bias mitigation *(prerequisite)*
Prompt engineering techniques can either reduce or amplify biases in language models. This section explores how prompt design impacts model behavior, which is central to the paper's findings on mitigating Western bias or unintentionally amplifying it.

*How the paper uses it:* The paper analyzes how different prompting strategies affect cultural bias scores and attribution in medical LLMs.

▶ [Navigating Prompt Quality in Enterprise Chaos Control Guide - by Anastasia Podrabinek](https://www.youtube.com/watch?v=V7kgwQm3Q-c) — Prompt Engineering Conference · 1 year ago

### Cultural bias in language models *(prerequisite)*
Understanding cultural bias in LLMs provides the broader context for why and how language models may favor certain cultural perspectives, which is the core problem addressed by the paper. This section covers mechanistic investigations and expert talks on cultural bias in AI.

*How the paper uses it:* The paper probes Western-centric biases in medical LLMs and their impact on African traditional medicine recommendations.

▶ [Vered Shwartz -  Language Barriers and Cultural Biases in LLMs](https://www.youtube.com/watch?v=LfNJuqYwMhY) — Inria Flowers · 6 months ago

### Africa Health Check: Probing Cultural Bias in Medical LLMs *(the paper's own talk)*
This is the authors' own talk presenting their novel dataset, cultural bias metrics, and systematic evaluation of medical LLMs on African traditional medicine tasks. It provides direct insight into their methodology, results, and implications for culturally aware AI in healthcare.

*How the paper uses it:* Direct presentation by the paper's authors on their research and findings.

▶ [Africa Health Check: Probing Cultural Bias in Medical LLMs](https://www.youtube.com/watch?v=bOF37XCvoNs) — Association for Computing Machinery (ACM) · 8 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand cultural bias in medical large language models (LLMs) as studied in the paper. It starts with the basics of medical LLMs and cultural bias in AI, then covers bias attribution methods and prompt engineering for bias mitigation, culminating in the core topic of cultural bias in language models as applied in healthcare contexts.

### Medical large language models *(prerequisite)*
Medical large language models are AI systems trained on healthcare data to understand and generate medical text, assisting in clinical decision-making and information retrieval. Learning about these models helps grasp how AI is applied in medicine and the challenges involved.

*How the paper uses it:* Understanding medical LLMs is essential to evaluate their cultural adaptability and biases in healthcare recommendations.

▶ [Intro to Large Language Models in Healthcare](https://www.youtube.com/watch?v=Xi1kk0fgvmM) — GEMINI Research Center · 11 months ago

### Cultural bias in language models *(prerequisite)*
Cultural bias in language models occurs when AI systems reflect and amplify cultural stereotypes or preferences embedded in their training data, often favoring dominant cultures. Recognizing this bias is key to developing fair and inclusive AI.

*How the paper uses it:* The paper investigates how medical LLMs show cultural bias by favoring Western treatments over African traditional remedies.

▶ [Why AI Doesn’t Understand Your Culture? Dr. Vered Shwartz on Cultural Bias in LLMs](https://www.youtube.com/watch?v=RKIvrESep-g) — Women in AI Research WiAIR · 1:17:18 · 9 months ago

### Bias attribution methods *(prerequisite)*
Bias attribution methods help identify which parts of an AI model's input or internal processes cause biased outputs, often using gradient-based techniques to assign importance scores. This understanding aids in diagnosing and mitigating bias.

*How the paper uses it:* The paper introduces Cultural Bias Attribution (CBA), a gradient-based metric to quantify prompt-driven bias influences in medical LLMs.

▶ [Gradient-based Input Attribution](https://www.youtube.com/watch?v=IYSSjueNLv0) — UofU Data Science · 2 years ago

### Prompt engineering for bias mitigation *(prerequisite)*
Prompt engineering involves designing input queries to AI models to guide their outputs, which can reduce or amplify biases depending on how prompts are structured. Mastering this helps control AI behavior in sensitive domains like healthcare.

*How the paper uses it:* The study shows that prompting strategies can either reduce or amplify Western bias in medical LLMs depending on model and prompt design.

▶ [Prompt Engineering Explained | How to Get Better Results ...](https://www.youtube.com/watch?v=JJNK_fJeTYI) — Memetic Learning · 7:52

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insights into their motivations, methodology, and key findings, enriching understanding beyond the written paper.

*How the paper uses it:* The authors discuss their work on probing cultural bias in medical LLMs and the implications for healthcare AI.

▶ [Africa Health Check: Probing Cultural Bias in Medical LLMs](https://www.youtube.com/watch?v=bOF37XCvoNs) — Association for Computing Machinery (ACM) · 8 months ago

## Already in your library

- [Algorithmic Bias and Fairness: Crash Course AI #18](https://www.youtube.com/watch?v=gV0_raKR2UQ) — also for: The Potential of Diverse Youth as Stakeholders in Identifying and Mitigating Algorithmic Bias for a Future of Fairer AI (Amy E. Ogan)
- [Large Language Models for Health 101](https://www.youtube.com/watch?v=b88FZYNJdIk) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from reproducing a core cultural bias metric on a small scale, to implementing and evaluating the paper's Cultural Bias Attribution method on a subset of the dataset, and finally extending the work by incorporating finer-grained cultural context to address a stated limitation. Each project leverages the applicant's existing software engineering and ML skills while deepening understanding of cultural bias in medical LLMs.

### Beginner — Reproduce Cultural Bias Score on Sample African Remedies
*Effort: a weekend, ~8 hours*

You build a simple script to compute the Cultural Bias Score (CBS) metric on a small synthetic dataset of African traditional herbal remedies versus Western allopathic treatments. This involves simulating multiple-choice question outcomes and calculating preference scores as described in the paper.

**Why it shows you understood the paper:** This project shows you understand the core bias metric CBS, how it quantifies model preference for treatment types, and the importance of cultural context in evaluating medical LLM outputs.

**Grounded in:** Introduced Cultural Bias Score (CBS) to measure outcome preference

**Tech stack:** Python 3.11, Jupyter Notebook, pandas, matplotlib

**Data:** Simulated small dataset of 10 African traditional remedies paired with Western treatments, inspired by the paper's dataset description but created manually due to lack of public release.

**Build it:**

1. Create a small CSV file with paired traditional and Western treatment options for 10 medical conditions.
2. Write a Python script to simulate model answer selections (e.g., random or biased towards Western treatments).
3. Implement the CBS calculation as defined in the paper to quantify bias from simulated answers.
4. Visualize the CBS results using matplotlib to show preference trends.
5. Write a README explaining the CBS metric and how your code reproduces it on the sample data.

**Ships as:** A GitHub repo with code and README demonstrating CBS calculation on a small dataset, including plots showing bias scores.

**Stretch goal:** Add a simple prompt context variable to show how CBS changes when cultural context is added or removed.

### Intermediate — Implement Cultural Bias Attribution on African Medicine Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the Cultural Bias Attribution (CBA) metric using Integrated Gradients to analyze how prompt tokens influence bias in a medical LLM. You apply this to a subset of the African traditional medicine dataset described in the paper, comparing model outputs with and without cultural context prompts.

**Why it shows you understood the paper:** This project demonstrates your ability to implement a core novel method from the paper (CBA), apply gradient-based attribution to LLM outputs, and interpret how prompt design affects cultural bias.

**Grounded in:** Introduced Cultural Bias Attribution (CBA), a novel gradient-based metric to quantify how prompt tokens influence culturally biased model outputs.

**Tech stack:** Python 3.11, PyTorch, transformers, captum (Integrated Gradients)

**Data:** Subset of the African traditional herbal medicine dataset synthesized based on the paper's description, focusing on 20 remedy-country pairs; no official dataset release available.

**Build it:**

1. Set up a transformer-based medical LLM (e.g., OpenBioLLM-Llama3-70B from HuggingFace) for inference.
2. Prepare prompt templates with and without cultural context for the selected remedies.
3. Implement Integrated Gradients attribution using Captum to compute token-level influence on model outputs.
4. Calculate CBA scores by aggregating attribution values for cultural tokens as per the paper's method.
5. Compare CBA and CBS metrics across prompt variants and visualize the results.
6. Document the implementation details and findings in a detailed README.

**Verified links from the paper:**

- <https://huggingface.co/aaditya/OpenBioLLM-Llama3-70B> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to compute CBA on medical LLM prompts, analysis notebooks, and visualizations showing prompt token influence on cultural bias.

**Stretch goal:** Add a simple baseline comparison using zero-shot prompting to show differences in bias attribution.

### Advanced — Extend Cultural Bias Metrics with Subnational Cultural Contexts
*Effort: 3+ weeks*

You develop an extension of the paper's bias evaluation framework by incorporating finer-grained subnational cultural stratifications (e.g., ethnic groups or regions within African countries). You curate or simulate a dataset reflecting this granularity, adapt CBS and CBA metrics accordingly, and evaluate a medical LLM's sensitivity to these refined contexts.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing your ability to extend research methods, handle complex cultural data, and critically assess model cultural adaptability beyond national-level contexts.

**Grounded in:** Incorporate finer-grained cultural stratifications by region, ethnicity, and treatment lineage to better probe subnational adaptation.

**Tech stack:** Python 3.11, PyTorch, transformers, pandas, matplotlib, Jupyter Notebook

**Data:** Simulated or curated dataset of African traditional remedies annotated with subnational cultural labels (e.g., ethnic group or region), created by augmenting the paper's described dataset with plausible cultural subdivisions.

**Build it:**

1. Research and define subnational cultural categories relevant to African traditional medicine (e.g., ethnic groups).
2. Augment the existing remedy-country pairs dataset with simulated subnational cultural labels.
3. Modify CBS and CBA metric implementations to incorporate subnational context tokens in prompts and attribution.
4. Evaluate a medical LLM's treatment selection and bias attribution on prompts with subnational cultural context.
5. Analyze whether finer-grained context improves model cultural adaptability or reveals new biases.
6. Prepare a comprehensive report and README documenting methodology, results, and implications.

**Verified links from the paper:**

- <https://huggingface.co/aaditya/OpenBioLLM-Llama3-70B> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with extended bias metric code, subnational cultural dataset, evaluation notebooks, and a detailed report on findings.

**Stretch goal:** Integrate expert clinical feedback or literature to validate the cultural appropriateness of subnational remedy recommendations.

_The paper's authors did not release their dataset or code; the intermediate and advanced projects rely on partial dataset simulation and the publicly available OpenBioLLM-Llama3-70B model from HuggingFace._
