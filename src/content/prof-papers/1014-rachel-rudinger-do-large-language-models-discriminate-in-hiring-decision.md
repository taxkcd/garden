---
title: "1014 · Do Large Language Models Discriminate in Hiring Decisions on the Basis of Race, Ethnicity, and Gender? — Rachel Rudinger"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rachel-rudinger"
source_hash: "fd8073d151da9bb1c5ede60491859eeaf37be869c0a1c81df64625d6a29d972c"
sequence: 1014
generator: "outreach-garden: managed"
---

# 1014 · Do Large Language Models Discriminate in Hiring Decisions on the Basis of Race, Ethnicity, and Gender?

## At a glance

- **Professor:** Rachel Rudinger
- **Institution:** Univ. of Maryland - College Park
- **Paper:** [Do Large Language Models Discriminate in Hiring Decisions on the Basis of Race, Ethnicity, and Gender?](https://arxiv.org/pdf/2406.10486)
- **Authors:** Haozhe An, Christabel Acquaye, Colin Kai Wang, Zongxia Li, Rachel Rudinger
- **Year:** 2024

## Paper overview

This paper investigates whether large language models (LLMs) show bias in hiring decisions based on the race, ethnicity, and gender implied by applicants' first names. By prompting LLMs to write acceptance or rejection emails to job applicants with names associated with different demographic groups, the study finds that LLMs tend to favor White applicants, especially White males, and discriminate against Hispanic applicants, particularly Hispanic males. The study highlights that such biases, although sometimes small, are statistically significant and could lead to unfair outcomes if LLMs are used in hiring.

### Why it matters

**Research problem:** Do large language models exhibit discriminatory behavior in hiring decisions based on the race, ethnicity, and gender associated with applicants' first names?

**Why it matters:** Understanding if LLMs discriminate in hiring is crucial because these models are increasingly used in decision-making processes that allocate social and economic opportunities. Biases in LLMs could perpetuate or amplify existing labor market discrimination, causing representational and allocational harms to underrepresented groups.

**Key contributions:**

- Large-scale empirical study of implicit hiring discrimination in LLMs using 300 names and 41 occupational roles.
- Demonstration that LLMs tend to favor White applicants and disadvantage Hispanic applicants, especially Hispanic males.
- Evidence that acceptance rates vary by model, prompt template, and applicant qualification level.
- Identification of human-like gender-occupation stereotypes in some LLMs.
- Provision of a methodology for auditing LLM biases in hiring decisions using name-based prompts.

## About the professor

**Rachel Rudinger** — Associate Professor, Computer Science, Univ. of Maryland - College Park.

Research interests: natural language processing, artificial intelligence, computational semantics and pragmatics, commonsense reasoning, challenges of social and cultural fairness in AI

### Research links

- [Faculty/profile page](https://www.cs.umd.edu/people/rudinger)
- [Professor website](https://www.rachelrudinger.com/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Fairness in Machine Learning
**The paper assumes:** fairness concepts in machine learning, bias measurement techniques, and fairness-aware evaluation metrics
**Already in this field?** Skip this entirely if you already understand fairness definitions, bias auditing methods, and evaluation metrics in machine learning.

This background provides foundational knowledge on fairness in machine learning, essential for understanding and critically engaging with the paper's investigation of bias and discrimination in large language models' hiring decisions. The rigorous course option offers a deep, structured academic treatment of fairness concepts, while the fast track provides concise, accessible explainers that cover key ideas quickly. Choose the course for comprehensive understanding or the fast track for a focused introduction to fairness in ML.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Machine Learning through Application](https://www.youtube.com/playlist?list=PL8P_Z6C4GcuU0qt4mBSm-XmWcYX8YWXGO) — Machine Learning University · 17 videos · 3.8h across 17 episodes

**Watch only this:** Module 3, Lessons 1-4: Introduction to Fairness and Bias Mitigation in ML, Designing Fair Models, Fairness Criteria, and Bias Mitigation — about 52 minutes total (4 episodes × ~13 minutes each)

*Why it unblocks this paper:* This Machine Learning University series includes a dedicated module on fairness and bias mitigation in ML, directly relevant to understanding the statistical and algorithmic fairness concepts underlying the paper's analysis of LLM bias in hiring.

*If you want all of it:* All 17 episodes, about 3.8 hours total

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [fairness](https://www.youtube.com/playlist?list=PLgnhCjrW64uTDL2-nLcL6P6No18cCHuSN) — Jess Hoffmann · 10 videos · 1.4h across 10 episodes

**Watch only this:** Episodes 4, 5, and 10: 'FlipTest: Fairness Testing via Optimal Transport', 'Fairness Warnings and Fair-MAML: Learning Fairly with Minimal Data', and 'Mitigating Bias in Algorithmic Hiring: Evaluating Claims and Practices' — about 24 minutes total (~8 minutes each)

*Why it unblocks this paper:* Jess Hoffmann's 'fairness' playlist offers clear, concise explainers on algorithmic fairness topics including bias testing and mitigation, which align well with the paper's focus on fairness and discrimination in ML systems like LLMs.

*If you want all of it:* All 10 episodes, about 1.4 hours total

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on bias and discrimination in LLM hiring decisions, start by grounding yourself in the foundational concepts of bias measurement in machine learning, sociolinguistics related to name-based demographic inference, and algorithmic fairness in NLP. These prerequisites provide the theoretical and methodological background necessary to appreciate the paper's approach. Finally, focus on the paper's core concept by watching a recent conference talk closely related to auditing bias in LLM hiring, which complements the paper's methodology and findings.

### Bias measurement in machine learning *(prerequisite)*
Understanding how bias is measured and conceptualized in machine learning is critical for evaluating discriminatory behaviors in models like LLMs. This section covers foundational machine learning concepts such as bias-variance tradeoff and regularization, which underpin the statistical significance and robustness analyses in the paper.

*How the paper uses it:* The paper assesses statistically significant differences in acceptance rates across demographic groups, relying on bias measurement concepts.

▶ [Stanford CS229: Machine Learning | Summer 2019 | Lecture 12 - Bias and Variance & Regularization](https://www.youtube.com/watch?v=XhyOAX6oSX4) — Stanford Online · 1:55:40 · 5y ago

### Sociolinguistics and name-based demographic inference *(prerequisite)*
This section introduces sociolinguistics, focusing on how language variation and social factors influence name-based demographic inference. Since the paper uses first names as proxies for race, ethnicity, and gender, understanding sociolinguistic principles is essential to critically evaluate this methodology and its limitations.

*How the paper uses it:* The study uses first names statistically associated with demographic groups to probe bias in LLM hiring decisions.

▶ [Sociolinguistics - the study of variation in language](https://www.youtube.com/watch?v=eYIyMCoIAZY) — Martin Hilpert · 36:50 · 12y ago

### Algorithmic fairness in NLP *(prerequisite)*
Algorithmic fairness frameworks in NLP provide the theoretical and practical tools to detect and mitigate biases in language models. This section explores fairness definitions, bias types, and mitigation strategies relevant to the paper's focus on fairness and ethics in AI-driven hiring.

*How the paper uses it:* The paper contributes to fairness research by auditing LLMs for discriminatory hiring biases and proposing a methodology for bias auditing.

▶ [CMU Advanced NLP 2022 (14): Bias and Fairness](https://www.youtube.com/watch?v=9n3GikALDPs) — Graham Neubig · 1:16:08 · 3y ago

### Prompt engineering for bias auditing
Prompt engineering is central to eliciting hiring decisions from LLMs in a controlled manner to analyze bias. This section covers advanced prompt engineering techniques and challenges in auditing LLM behavior, which directly relates to the paper's experimental design using 820 prompt templates.

*How the paper uses it:* The authors use carefully designed prompts to generate hiring decision emails, enabling large-scale bias measurement in LLMs.

▶ [Symposium 2026 - Sanay Ramchandani: Language Bias and Inequality in Large Language Models](https://www.youtube.com/watch?v=p73royi1BkI) — CCIR - Cambridge Centre for International Research · 26:34 · 2w ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Direct presentations by authors provide the most precise and authoritative insights into their research questions, methodology, and findings. This talk discusses intersectional bias benchmarks in automated hiring, closely related to the paper's investigation of demographic biases in LLM hiring decisions.

*How the paper uses it:* This talk presents research on intersectional bias in LLM hiring systems, complementing and contextualizing the paper's findings on demographic discrimination.

▶ [FairHireBench:A Cross-Generational Intersectional Bias Benchmark for LLMs Automated Hiring](https://www.youtube.com/watch?v=tZ8y5BZX3S0) — ACM FAccT Conference · 11:47 · 1mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on bias in large language models (LLMs) for hiring decisions, start by building foundational knowledge of how bias is measured in machine learning and the sociolinguistic basis for using names as demographic proxies. Next, learn about algorithmic fairness in natural language processing (NLP) to grasp fairness frameworks relevant to the study. Finally, explore the core method of prompt engineering used to audit LLM biases, culminating in a focused understanding of the paper's approach and findings.

### Bias measurement in machine learning *(prerequisite)*
This section introduces how bias is defined and measured in machine learning models, focusing on concepts like statistical significance and acceptance rate differences. Understanding these basics helps interpret the paper's findings about small but meaningful disparities in LLM hiring decisions.

*How the paper uses it:* The paper quantifies bias by measuring acceptance rate differences across demographic groups and testing their statistical significance.

▶ [Machine Learning Fundamentals: Bias and Variance](https://www.youtube.com/watch?v=EuBBz3bI-aA) — StatQuest with Josh Starmer · 6:36 · 8y ago

### Sociolinguistics and name-based demographic inference *(prerequisite)*
Learn how sociolinguistics studies the relationship between language and social factors, including how first names can serve as proxies for race, ethnicity, and gender. This background clarifies why the paper uses first names to infer demographic attributes in its bias analysis.

*How the paper uses it:* The study uses first names statistically associated with demographic groups to simulate hiring decisions and detect bias.

▶ [Sociolinguistics - the study of variation in language](https://www.youtube.com/watch?v=eYIyMCoIAZY) — Martin Hilpert · 36:50 · 12y ago

### Algorithmic fairness in NLP *(prerequisite)*
This section covers fairness frameworks and challenges specific to NLP models, including how biases can manifest and be mitigated. It provides essential context for understanding the ethical implications and evaluation methods used in the paper.

*How the paper uses it:* The paper investigates fairness in LLMs applied to hiring, highlighting demographic disparities and stereotype reflections.

▶ [Fairness in Natural Language Processing](https://www.youtube.com/watch?v=fgbzJCfKGHs) — Open Data Science and AI Conference · 36:14 · 4y ago

### Prompt engineering for bias auditing
Prompt engineering involves designing inputs to elicit specific behaviors from LLMs. Here, it is used to generate hiring decision emails based on applicant names, enabling systematic bias measurement. Understanding this method is key to grasping how the paper conducts its large-scale empirical study.

*How the paper uses it:* The authors use 820 prompt templates with demographic name substitutions to audit LLM bias in hiring decisions.

▶ [Prompt Engineering Explained in 5 Minutes | BEST ANIMATION](https://www.youtube.com/watch?v=sVRV5gKMNhg) — KnowledgeCatch · 5:02 · 2d ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
A direct presentation from experts discussing the risks and ethical challenges of LLMs, including bias and fairness concerns. This talk provides insight into the broader context and motivations behind research like the paper's study.

*How the paper uses it:* Offers perspective on the risks of bias in LLMs, complementing the paper's empirical findings on hiring discrimination.

▶ [Nicholas Carlini - Are LLMs worth it?](https://www.youtube.com/watch?v=PngHcmMmwWI) — Conference on Language Modeling · 59:05 · 11mo ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Where human intelligence outwits large language models | Nofil Khan | TEDxUnity Grammar Youth](https://www.youtube.com/watch?v=wXQ6eMkKniA) — also for: Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies (Rosa I. Arriaga)
- [Introduction to Algorithm Fairness | Causes, Measuring ...](https://www.youtube.com/watch?v=3UcSq1dGW2c) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [SoMAS - Reducing Model Biases with Machine Learning ...](https://www.youtube.com/watch?v=kG8swPpJTaA) — also for: Learning bias corrections for climate models using deep neural operators (Aniruddha Bora)
- [AI prompt engineering: A deep dive](https://www.youtube.com/watch?v=T9aRN5JkmL8) — also for: Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies (Rosa I. Arriaga)
- [Prompting 101 | Code w/ Claude](https://www.youtube.com/watch?v=ysPbXH0LpIE) — also for: Geo-OLM: Enabling Sustainable Earth Observation Studies with Cost-Efficient Open Language Models & State-Driven Workflows (Diana Marculescu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of bias in large language models' hiring decisions as studied in the paper. The beginner project replicates a small-scale bias measurement using name-based prompts and acceptance rates. The intermediate project reimplements the core experimental method on a smaller scale with public or simulated data, adding statistical testing. The advanced project extends the paper by addressing a stated limitation, such as including additional demographic groups or richer applicant information to simulate more realistic hiring scenarios.

### Beginner — Small-Scale Bias Audit of LLM Hiring Decisions
*Effort: a weekend (~6-8 hours)*

You build a simple script that prompts an open LLM (e.g., GPT-3.5 via API) to generate acceptance or rejection emails for a small set of applicant first names associated with White, Black, and Hispanic groups and male/female genders. You then compute acceptance rates per demographic group and visualize the differences.

**Why it shows you understood the paper:** This project shows you understand how to operationalize name-based demographic proxies, prompt LLMs for hiring decisions, and measure acceptance rate disparities, directly reflecting the paper's core empirical approach.

**Grounded in:** The project demonstrates the paper's key contribution of measuring acceptance rate differences across demographic groups using name-based prompts and LLM-generated hiring decisions.

**Tech stack:** Python 3.11, OpenAI API (GPT-3.5), matplotlib or seaborn for visualization, pandas

**Data:** A small curated list (~30) of first names statistically associated with White, Black, and Hispanic races/ethnicities and male/female genders, derived from the paper's description; no official dataset released.

**Build it:**

1. Collect or curate a small list of first names associated with the three racial/ethnic groups and two genders.
2. Write prompt templates instructing the LLM to generate acceptance or rejection emails for job applicants with these names.
3. Use the OpenAI API to generate responses for each name-prompt combination.
4. Parse the generated emails to classify them as acceptance or rejection.
5. Calculate acceptance rates per demographic group and visualize the results.
6. Write a README explaining the methodology and findings.

**Ships as:** A GitHub repo with scripts to generate and analyze LLM hiring decisions on a small name set, visualizations of acceptance rate disparities, and a README linking results to the paper's findings.

**Stretch goal:** Add simple statistical significance testing (e.g., permutation test) to assess whether acceptance rate differences are statistically significant.

### Intermediate — Reimplementation of LLM Hiring Bias Audit with Statistical Testing
*Effort: 1-3 weekends (~20 hours)*

You reimplement the paper's core method by designing prompt templates to generate hiring decision emails from an LLM (e.g., Llama2-7b or GPT-3.5), substituting first names associated with demographic groups. You generate a larger set of responses, compute acceptance rates, and perform statistical tests to confirm bias significance.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's main empirical methodology at scale, including prompt engineering, demographic substitution, and rigorous statistical analysis, demonstrating deep comprehension of the paper's approach.

**Grounded in:** This project replicates the paper's large-scale empirical study of implicit hiring discrimination in LLMs using name-based prompts and statistical tests on acceptance rates.

**Tech stack:** Python 3.11, OpenAI API or local Llama2 model via Hugging Face, pandas, scipy or statsmodels for statistical tests, matplotlib or seaborn

**Data:** A curated list of ~100-150 first names associated with White, Black, and Hispanic races/ethnicities and male/female genders, derived from public name demographic datasets or the paper's description; occupational roles can be simplified or limited.

**Build it:**

1. Curate or obtain a larger dataset of first names linked to demographic groups.
2. Design multiple prompt templates instructing the LLM to generate acceptance/rejection emails.
3. Generate hiring decision emails for all name-prompt combinations using the chosen LLM.
4. Parse and classify emails as acceptance or rejection.
5. Calculate acceptance rates per demographic group and qualification level if applicable.
6. Perform statistical significance tests (e.g., permutation tests) on acceptance rate differences.
7. Visualize results and write a detailed README comparing findings to the paper.

**Verified links from the paper:**

- <https://github.com/facebookresearch/llama> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with scripts for prompt generation, LLM querying, acceptance rate computation, statistical testing, visualizations, and documentation replicating the paper's core bias audit method.

**Stretch goal:** Compare acceptance rate disparities across two different LLMs (e.g., GPT-3.5 vs. Llama2-7b) to observe model variation in bias.

### Advanced — Extending LLM Hiring Bias Audit to Additional Demographics and Richer Applicant Profiles
*Effort: few weeks (~40+ hours)*

You extend the paper's methodology by incorporating additional demographic groups beyond White, Black, and Hispanic (e.g., Asian or Native American names) and/or by simulating richer applicant profiles with more attributes (e.g., education, experience) in prompts. You audit bias in LLM hiring decisions under these more realistic conditions and analyze results.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate on the core method, handle more complex data and prompt engineering, and critically analyze bias in LLMs beyond the original scope.

**Grounded in:** This project addresses the paper's limitation of studying only three demographic groups and minimal applicant information, advancing fairness auditing in LLM hiring decisions.

**Tech stack:** Python 3.11, OpenAI API or local LLMs (Llama2-70b recommended), pandas, scipy/statsmodels, matplotlib/seaborn, possibly Docker for environment reproducibility

**Data:** Simulated or curated datasets including additional demographic-associated names and richer applicant attributes (education, experience levels) constructed based on public data or synthetic generation, as no official extended dataset is released.

**Build it:**

1. Research and curate additional demographic-associated first names beyond the original three groups.
2. Design richer prompt templates that include multiple applicant attributes (e.g., qualifications, experience).
3. Generate hiring decision emails from a large LLM for the expanded demographic and profile set.
4. Parse and classify acceptance/rejection outcomes.
5. Analyze acceptance rates across new demographic groups and applicant profiles.
6. Perform statistical tests to assess significance of observed biases.
7. Document methodology, challenges, and findings in a comprehensive README.

**Verified links from the paper:**

- <https://github.com/facebookresearch/llama> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo demonstrating an extended bias audit methodology with richer demographic and applicant data, detailed analysis of bias patterns, and discussion of implications for fairness in LLM hiring.

**Stretch goal:** Develop and test simple bias mitigation strategies in prompts or post-processing to reduce observed discriminatory patterns.
