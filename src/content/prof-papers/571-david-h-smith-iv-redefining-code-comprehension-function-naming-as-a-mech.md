---
title: "571 · ReDefining Code Comprehension: Function Naming as a Mechanism for Evaluating Code Comprehension — David H. Smith IV"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-h-smith-iv"
source_hash: "8b46b79c825ee3e5864c0e9e519549955ade238bbc388ca4e010323c102c3213"
sequence: 571
generator: "outreach-garden: managed"
---

# 571 · ReDefining Code Comprehension: Function Naming as a Mechanism for Evaluating Code Comprehension

## At a glance

- **Professor:** David H. Smith IV
- **Institution:** Virginia Tech
- **Paper:** [ReDefining Code Comprehension: Function Naming as a Mechanism for Evaluating Code Comprehension](https://arxiv.org/abs/2503.12207)
- **Authors:** David H. Smith IV, Max Fowler, Paul Denny, Craig Zilles
- **Year:** 2025

## Paper overview

This paper proposes a novel method for assessing students' code comprehension by asking them to generate function names that capture the purpose of code snippets. This approach aims to overcome limitations of traditional 'Explain in Plain English' (EiPE) questions, which are hard to grade automatically and often fail to distinguish between high-level and low-level understanding. The authors evaluate this method in an introductory programming course, analyze its psychometric properties, and release an open-source autograding tool to facilitate adoption.

### Why it matters

**Research problem:** Traditional EiPE questions, while effective for assessing code comprehension, are time-consuming to grade and existing autograding methods struggle to differentiate between high-level, purpose-focused responses and low-level, implementation-focused ones.

**Why it matters:** As programming education evolves with the rise of human-generative AI collaborative coding, it is crucial to develop scalable, reliable assessments that accurately measure students' understanding of code at a conceptual level, preparing them for future coding tasks involving AI assistance.

**Key contributions:**

- Proposed function naming as a bounded, high-level code comprehension assessment task.
- Evaluated psychometric properties of function naming questions using IRT.
- Compared autograding methods to reduce false positives in grading.
- Demonstrated that function naming questions discourage low-level, multistructural responses.
- Released an open-source Python package (eiplgrader) to autograde EiPE questions with function naming.

## About the professor

**David H. Smith IV** — Assistant Professor, Department of Computer Science, Virginia Tech.

Research interests: novice human generative AI collaborative coding, interactive learning tools, automated grading and feedback, assessment

### Research links

- [Faculty/profile page](https://website.cs.vt.edu/people/faculty/david-h-smith-iv.html)
- [Professor website](https://hamiltonfour.tech/)
- [Resolved homepage](https://hamiltonfour.tech/#/)
- [Google Scholar](https://scholar.google.com/citations?user=hpe-z9YAAAAJ&hl=en)
- [GitHub](https://github.com/CoffeePoweredComputers)
- [LinkedIn](https://www.linkedin.com/in/david-h-smith-iv-1b9499102/)
- [Social profile](https://x.com/David_H_SmithIV)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Item Response Theory
**The paper assumes:** psychometric assessment methods, item response theory, educational measurement models
**Already in this field?** Skip this entirely if you already understand the basics of psychometric testing and Item Response Theory models.

This background focuses on Item Response Theory (IRT), the core psychometric method used in the paper to evaluate function naming questions for code comprehension assessment. The rigorous course option offers a deep, university-level exploration of IRT concepts and applications, ideal for readers seeking comprehensive understanding. The fast track provides a concise, conceptual introduction to IRT through a short, well-structured explainer series, suitable for readers needing a quick yet solid grasp of the fundamentals.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [IRT/R/CAT Harvard](https://www.youtube.com/playlist?list=PLUdIRh6s7NW9wvBMaazwzezDhqHHwo2-w) — Maarten Ottenhof · 22 videos · 9.8h across the first 20 episodes

**Watch only this:** Episodes 1 (R - Item Response Theory Example) and 2 (R - Item Response Theory Analysis Lecture), about 1 hour total — these introduce IRT basics and analysis methods relevant to understanding the paper's evaluation approach.

*Why it unblocks this paper:* This Harvard-level playlist by Maarten Ottenhof covers detailed IRT concepts, including analysis, model fit, and practical R implementations, directly supporting the paper's use of IRT for psychometric evaluation of assessment items.

*If you want all of it:* Approximately 9.8 hours across the first 20 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [A Conceptual Introduction to Item Response Theory](https://www.youtube.com/playlist?list=PLJNUIJnElUzDmrIPunMyF3tTvIHb65wNb) — Karon F. Cook · 7 videos · 1.1h across 7 episodes

**Watch only this:** Episodes 1 through 4 (The Logic of IRT Scoring; IRT Is a Probability Model; Plotting Along; Understanding Item Parameters), about 36 minutes total — these cover the core concepts needed to follow the paper's psychometric analysis.

*Why it unblocks this paper:* This short series by Karon F. Cook provides a clear, conceptual introduction to IRT, covering logic, probability models, item parameters, and applications, giving a quick yet thorough foundation for readers unfamiliar with IRT.

*If you want all of it:* About 1.1 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's novel approach to code comprehension assessment via function naming, start by grounding yourself in foundational psychometric methods, specifically Item Response Theory (IRT), and educational assessment frameworks like the SOLO taxonomy. Next, explore existing code comprehension assessment methods to contextualize the paper's contributions. Finally, focus on the core concept of function naming as a proxy for code comprehension, including the authors' own talk to gain direct insights into their methodology and findings.

### Item Response Theory in Education *(prerequisite)*
Item Response Theory (IRT) is a modern psychometric framework used to evaluate the quality and properties of assessment items. Understanding IRT is crucial because the paper applies it to analyze the discrimination and difficulty of function naming questions, providing rigorous evidence of their effectiveness.

*How the paper uses it:* The paper uses IRT to evaluate the psychometric properties of function naming questions.

▶ [Understanding Item Response Theory (IRT): Key Concepts & Applications with Matthew Diemer](https://www.youtube.com/watch?v=B-oLR7XRVCU) — Statistical Horizons · 59:15 · 1y ago

### SOLO Taxonomy for Learning Assessment *(prerequisite)*
The SOLO taxonomy categorizes levels of learning outcomes from surface to deep understanding. Since the paper applies the SOLO taxonomy to analyze the quality of student responses to function naming tasks, familiarity with this taxonomy helps in appreciating how the authors interpret relational versus multistructural responses.

*How the paper uses it:* The paper analyzes response quality using the SOLO taxonomy to distinguish comprehension levels.

▶ [SOLO Taxonomy Explained | Levels of Learning Outcomes | Pedagogy | FPSC Lecturer Education Prep](https://www.youtube.com/watch?v=HkpGMMTe6Ic) — Zeshan Umar Educationist · 18:42 · 9mo ago

### Code Comprehension Assessment Methods *(prerequisite)*
Understanding traditional and current methods for assessing code comprehension provides context for the paper's motivation and contributions. This section covers university-level lectures on code comprehension techniques, including testing and debugging, which relate to how comprehension is typically evaluated.

*How the paper uses it:* The paper proposes a novel assessment method to improve upon traditional Explain in Plain English (EiPE) questions.

▶ [Lecture 12: List Comprehension, Functions as Objects, Testing, and Debugging](https://www.youtube.com/watch?v=AZBxs3OvFrY) — MIT OpenCourseWare · 1:15:46 · 2y ago

### Function Naming as Code Comprehension Proxy
This core concept focuses on using function naming as a bounded, high-level task to assess code comprehension. Videos here discuss naming conventions and best practices in programming, which underpin the rationale for using function names as proxies for understanding code purpose and behavior.

*How the paper uses it:* The paper's central contribution is proposing function naming as a mechanism for evaluating code comprehension.

▶ [Naming Things in Code](https://www.youtube.com/watch?v=-J3wNP6u5YU) — CodeAesthetic · 7:25 · 3y ago

### Paper Author Talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides the most direct and detailed explanation of their novel assessment method, experimental design, psychometric analysis, and autograding tool release. This talk is invaluable for grasping the nuances and implications of their work from the researchers themselves.

*How the paper uses it:* Direct presentation by the authors explaining their novel function naming assessment method and findings.

▶ [How to write the perfect function](https://www.youtube.com/watch?v=2OMRWPOSw9s) — Logan Smith · 47:32 · 1mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts necessary to understand the paper's novel approach to assessing code comprehension through function naming. We start with psychometric evaluation methods (Item Response Theory) and learning assessment frameworks (SOLO Taxonomy) to grasp how comprehension quality is measured. Then, we cover traditional code comprehension assessment methods before focusing on the core idea of function naming as a proxy for high-level code understanding and automated grading techniques that enable scalable evaluation.

### Item Response Theory in Education *(prerequisite)*
Item Response Theory (IRT) is a modern approach used to analyze test items and assess their quality in measuring abilities. It helps understand how well questions discriminate between different levels of student understanding and how difficult they are. Learning IRT provides insight into how the paper evaluates the psychometric properties of function naming questions.

*How the paper uses it:* The paper uses IRT to evaluate the discrimination and difficulty of function naming questions as exam items.

▶ [Understanding Item Response Theory (IRT): Key Concepts & Applications with Matthew Diemer](https://www.youtube.com/watch?v=B-oLR7XRVCU) — Statistical Horizons · 59:15 · 1y ago

### SOLO Taxonomy for Learning Assessment *(prerequisite)*
The SOLO taxonomy categorizes levels of learning outcomes from simple to complex understanding, ranging from unistructural to relational and extended abstract. It is used to analyze the quality of student responses and their depth of comprehension. Understanding SOLO helps interpret how the paper assesses the quality of function naming responses.

*How the paper uses it:* The paper applies the SOLO taxonomy to analyze the quality and relational nature of student function naming responses.

▶ [SOLO Taxonomy Explained | Levels of Learning Outcomes | Pedagogy | FPSC Lecturer Education Prep](https://www.youtube.com/watch?v=HkpGMMTe6Ic) — Zeshan Umar Educationist · 18:42 · 9mo ago

### Code Comprehension Assessment Methods *(prerequisite)*
Traditional code comprehension assessments often ask students to explain code in plain English, which can be difficult to grade automatically and may not distinguish between levels of understanding. This section introduces common approaches and challenges in evaluating code comprehension, setting the stage for the paper's novel method.

*How the paper uses it:* The paper critiques traditional 'Explain in Plain English' questions and proposes function naming as a better assessment method.

▶ [Program comprehension| program comprehension technique last lecture](https://www.youtube.com/watch?v=qamrDD5Zwy0) — Sir Muneeb Academy · 20:36 · 1y ago

### Automated Grading of Code Explanations
Automated grading systems use AI and algorithms to evaluate student work efficiently and consistently, reducing manual grading effort. Understanding automated grading approaches clarifies how the paper compares autograding methods to improve accuracy and scalability in assessing code comprehension.

*How the paper uses it:* The paper compares One Attempt and Robustness autograding methods for function naming questions to reduce false positives.

▶ [I Built an Automated Grading System using AI and Computer Vision](https://www.youtube.com/watch?v=Nuup6eBIUkg) — Murtaza's Workshop - Robotics and AI · 11:13 · 12d ago

### Function Naming as Code Comprehension Proxy
Function naming involves creating concise, descriptive names that capture the purpose of code snippets, reflecting high-level understanding. This concept is central to the paper's novel assessment method, which uses function names as a bounded, scalable proxy for evaluating code comprehension.

*How the paper uses it:* The paper introduces function naming as a bounded, high-level code comprehension assessment task that encourages relational thinking.

▶ [Naming Things in Code](https://www.youtube.com/watch?v=-J3wNP6u5YU) — CodeAesthetic · 7:25 · 3y ago

## Already in your library

- [Gradescope: An Automated Tool to Help Grading Student Programming Projects](https://www.youtube.com/watch?v=6LS_Z7Vn-qc) — also for: Autograding Interactive Computer Graphics Applications (Barbara Cutler)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's novel approach to code comprehension assessment via function naming. The beginner project reproduces a simple autograding mechanism on function names, the intermediate project applies and compares the paper's autograding methods using the authors' released tool, and the advanced project extends the method by addressing a stated limitation or exploring a future direction such as scaffolding or partial credit. Each project leverages your existing software engineering and Python skills while introducing educational assessment concepts and automated grading techniques.

### Beginner — Function Name Autograder Prototype
*Effort: a weekend, ~8 hours*

You build a simple Python script that takes a set of code snippets and student-submitted function names, then applies basic string matching and keyword checks to autograde the function names as correct or incorrect. This reproduces the core idea of function naming as a bounded, high-level code comprehension task and a simple autograding mechanism.

**Why it shows you understood the paper:** This project shows you understand the paper's core proposal of using function names as a proxy for code comprehension and the challenges of automated grading, including false positives and the need for robustness.

**Grounded in:** Proposed function naming as a bounded, high-level code comprehension assessment task; Compared autograding methods to reduce false positives in grading.

**Tech stack:** Python 3.11

**Data:** Simulated small dataset of 4 short Python code snippets and example student function names inspired by the paper's description (no public dataset available).

**Build it:**

1. Select or write 4 simple Python code snippets representing typical introductory programming tasks.
2. Collect or simulate a small set of student function name responses for each snippet.
3. Implement a Python script that autogrades responses by checking for presence of key purpose-related words and syntactic validity.
4. Add simple heuristics to flag likely incorrect or low-level names.
5. Run the script on the dataset and output grading results with basic accuracy metrics.
6. Write a README explaining the approach, limitations, and relation to the paper.

**Ships as:** A GitHub repository with the autograder script, example data, and README documenting the function naming concept and grading heuristics.

**Stretch goal:** Add a simple robustness grading variant that generates multiple function name variants per response to reduce false positives.

### Intermediate — Function Naming Autograding with eiplgrader
*Effort: 1-3 weekends, ~20 hours*

You set up and use the authors' open-source eiplgrader Python package to autograde function naming responses collected from an introductory programming course or a simulated dataset. You implement both One Attempt Grading and Robustness Grading methods, compare their grading outcomes, and report metrics such as false positive reduction and discrimination scores.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the paper's released tool, reproduce its core autograding methods, and understand psychometric evaluation metrics like discrimination and error rates.

**Grounded in:** Compared autograding methods to reduce false positives in grading; Function naming questions exhibit moderate to high discrimination, making them effective exam items.

**Tech stack:** Python 3.11, eiplgrader package

**Data:** Use the eiplgrader package's example datasets or simulate a small dataset of function naming responses based on the paper's description; no public dataset is provided.

**Build it:**

1. Clone and install the eiplgrader package from https://github.com/CoffeePoweredComputers/eiplgrader.
2. Familiarize yourself with the package's API and example usage for function naming EiPE questions.
3. Prepare or simulate a dataset of student function naming responses for 4 code snippets.
4. Run autograding using One Attempt Grading and Robustness Grading methods on the dataset.
5. Analyze and compare grading results, focusing on false positives, false negatives, and discrimination metrics.
6. Document your findings and how they relate to the paper's reported results.

**Verified links from the paper:**

- <https://github.com/CoffeePoweredComputers/eiplgrader> — released by the paper's authors

**Ships as:** A GitHub repository with your scripts, dataset, analysis notebooks or reports, and README explaining the reproduction and comparison of grading methods.

**Stretch goal:** Implement a simple SOLO taxonomy analysis on the function names to classify response quality and compare with autograding results.

### Advanced — Extending Function Naming Assessment with Early Curriculum Integration
*Effort: several weeks, ~40+ hours*

You design and implement an extension of the paper's function naming assessment by integrating function naming exercises earlier in an introductory programming curriculum. You develop a small interactive web app or script-based tool that scaffolds students from low-level code understanding to high-level function naming, collect pilot data (simulated or real), and analyze the impact on comprehension and grading outcomes. Optionally, you explore partial credit mechanisms enabled by robustness grading.

**Why it shows you understood the paper:** This project tackles a key future direction and limitation from the paper, demonstrating your ability to extend research methods, design educational scaffolding, and apply automated grading in a novel context.

**Grounded in:** Investigate the potential of function naming as scaffolding for traditional EiPE tasks and code comprehension development; Evaluate function naming exercises with a broader range of code snippets to confirm generalizability; Explore partial credit mechanisms enabled by robustness grading for more granular feedback.

**Tech stack:** Python 3.11, eiplgrader package, React.js or simple Flask/FastAPI web app

**Data:** Simulated or collected student responses to early-stage function naming exercises on a broader set of code snippets; no public dataset is available.

**Build it:**

1. Design a set of simpler code snippets suitable for early curriculum function naming exercises.
2. Develop an interactive tool or web app that presents code snippets and collects function naming responses.
3. Integrate the eiplgrader package to autograde responses using robustness grading with partial credit.
4. Collect pilot data by simulating student responses or recruiting a small group of learners.
5. Analyze response quality, grading accuracy, and evidence of scaffolding effect on comprehension.
6. Document the design, implementation, analysis, and relation to the paper's limitations and future directions.

**Verified links from the paper:**

- <https://github.com/CoffeePoweredComputers/eiplgrader> — released by the paper's authors

**Ships as:** A GitHub repository containing the interactive tool, grading scripts, pilot data, analysis reports, and README discussing the extension and its educational implications.

**Stretch goal:** Adapt the SOLO taxonomy for short function names to better capture comprehension levels and integrate it into the tool's feedback.
