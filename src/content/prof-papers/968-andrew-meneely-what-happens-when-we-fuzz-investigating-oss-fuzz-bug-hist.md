---
title: "968 · What Happens When We Fuzz? Investigating OSS-Fuzz Bug History — Andrew Meneely"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andrew-meneely"
source_hash: "9a60cd27867cb1c364441d0bca810579773883b99acc3a67d9464f905800d540"
sequence: 968
generator: "outreach-garden: managed"
---

# 968 · What Happens When We Fuzz? Investigating OSS-Fuzz Bug History

## At a glance

- **Professor:** Andrew Meneely
- **Institution:** Rochester Inst. of Technology
- **Paper:** [What Happens When We Fuzz? Investigating OSS-Fuzz Bug History](https://arxiv.org/pdf/2305.11433)
- **Authors:** Brandon N. Keller, Benjamin S. Meyers, Andrew Meneely
- **Year:** 2023

## Paper overview

This paper studies the impact of using OSS-Fuzz, an automated fuzz testing system, on open-source software projects. It analyzes over 44,000 reported bugs to understand how quickly bugs are found and fixed, the types of bugs found, and whether developers learn from the fuzzing feedback. The study finds that fuzzing helps reduce bug lifespans and developers respond quickly to fuzz bugs, but not all developers fix their own bugs. It also shows fuzzers find a subset of security vulnerabilities, so fuzzing should be one part of a broader quality assurance strategy.

### Why it matters

**Research problem:** How effective is fuzz testing, specifically OSS-Fuzz, in identifying, prioritizing, and fixing bugs in open-source software projects? How do developers respond to fuzzing feedback, and what types of vulnerabilities does fuzzing detect compared to historical vulnerabilities?

**Why it matters:** Software vulnerabilities and bugs can cause security risks and reliability issues. Automated fuzzing promises to detect bugs faster and more comprehensively than manual testing, potentially saving resources and improving software quality. Understanding the real-world impact of fuzzing helps development teams decide whether to adopt fuzzing as part of their quality assurance.

**Key contributions:**

- Large-scale empirical analysis of OSS-Fuzz bug data across 562 projects.
- Measurement of bug lifespans, showing fuzzing reduces median bug lifespan to 324 days compared to 438 days in prior studies.
- Analysis of developer response times, finding median response to fuzz bugs is 2 days.
- Assessment of learning opportunities, showing only 46% of bugs are fixed by the original author who introduced them.
- Comparison of fuzz bugs to CVE vulnerabilities, finding only 9.2% overlap, indicating fuzzers find a subset of security issues.

## About the professor

**Andrew Meneely** — Assistant Professor, Software Engineering, Rochester Inst. of Technology.

Research interests: Empirical software engineering, software security, collaborative software development, open source development, socio-technical factors, metrics and measurement, applied machine learning and data mining

### Research links

- [Faculty/profile page](http://www.se.rit.edu/~andy)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Software Bug Lifecycle Analysis
**The paper assumes:** software bug lifecycle concepts, empirical software engineering methods, bug-introducing commit identification
**Already in this field?** Skip this entirely if you already understand software bug lifecycles, empirical software engineering research methods, and commit-level bug analysis techniques.

To understand this paper's methodology and results on software bug lifecycles, including bug lifespans, developer response times, and bug-introducing commits, background knowledge in software bug lifecycle analysis and empirical software engineering methods is essential. The rigorous course option provides a deep, structured university-level introduction to research methodology applicable to empirical studies like this one. The fast track offers a concise, focused explainer series on software bugs and their lifecycle, ideal for quickly grasping the core concepts without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Research Methodology in Humanities and Social Sciences](https://www.youtube.com/playlist?list=PLLy_2iUCG87D73UutbR_QvNaeUyi4RVWP) — IIT Roorkee July 2018 · 41 videos · 21.5h across 41 episodes

**Watch only this:** Episodes 1-15 ("Paradigm Shift in Research Methodology An Interdisciplinary Approach" through "Difference Between Methods and Methodology"), about 7.5 hours — these cover foundational research concepts, methodology, and methods essential for understanding empirical software engineering studies.

*Why it unblocks this paper:* This comprehensive course on Research Methodology in Humanities and Social Sciences covers systematic research design and methods, which underpin the empirical analysis techniques used in the paper to study bug lifecycles and developer behavior.

*If you want all of it:* All 41 episodes, about 21.5 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Bug](https://www.youtube.com/playlist?list=PLXERU3RHCWiLURkGuEyK40idoyLXNlpA7) — AgileLUX · 9 videos · 0.5h across 9 episodes

**Watch only this:** Episodes 6-9 ("Definition of a Software Bug" through "Lifecycle of a Software Bug"), about 12 minutes — these episodes focus tightly on bug definitions, types, and lifecycle stages relevant to the paper's analysis.

*Why it unblocks this paper:* This short series specifically explains software bugs and their lifecycle in a clear, concise manner, directly addressing the core concepts needed to understand bug introduction, detection, and fixing dynamics discussed in the paper.

*If you want all of it:* All 9 episodes, about 30 minutes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "What Happens When We Fuzz? Investigating OSS-Fuzz Bug History," start by building foundational knowledge on software vulnerability taxonomies and the SZZ algorithm, which are critical for interpreting bug types and identifying bug-introducing commits. Then, explore automated software testing techniques to contextualize fuzzing within broader testing strategies. Finally, focus on the core concept of fuzz testing empirical analysis, emphasizing the authors' own talk or related rigorous research presentations to grasp their methodology and findings.

### Software vulnerability taxonomy *(prerequisite)*
Understanding CWE classifications and related vulnerability taxonomies is essential to interpret the types of bugs and security issues discussed in the paper. This section provides a detailed and research-level overview of vulnerability classification systems, which underpin the paper's analysis of fuzz bugs versus CVE vulnerabilities.

*How the paper uses it:* The paper compares fuzzing-detected bugs to CVE vulnerability data using CWE classifications to assess overlap.

▶ [CVSS, CVE, CWE — The Cyber Risk Vulnerability Language](https://www.youtube.com/watch?v=dwFbYHZxBpQ) — Oxford Research Channel · 39:41 · 1y ago

### SZZ algorithm bug origin *(prerequisite)*
The SZZ algorithm is a key technique used in the paper to identify bug-introducing commits, which is critical for measuring bug lifespans and developer response times. This talk provides an advanced evaluation of SZZ implementations, offering insights into its strengths and limitations relevant to the paper's methodology.

*How the paper uses it:* The paper relies on the SZZ algorithm to identify bug-introducing commits for lifespan and fix analysis.

▶ [Evaluating SZZ Implementations Through a Developer-Informed Oracle](https://www.youtube.com/watch?v=ZiuAaysj_Sk) — ICSE2021 Conference · 18:35 · 5y ago

### Automated software testing techniques *(prerequisite)*
This section situates fuzz testing within the broader context of automated software testing strategies. Understanding these techniques helps appreciate the role and limitations of fuzzing as part of quality assurance, as discussed in the paper.

*How the paper uses it:* The paper studies automated fuzz testing (OSS-Fuzz) as a key quality assurance tool among other testing methods.

▶ [What is Automated Testing?](https://www.youtube.com/watch?v=Nd31XiSGJLw) — The Startup Lab · 6:54 · 7y ago

### Fuzz testing empirical analysis
This core section focuses on empirical studies and rigorous analyses of fuzz testing effectiveness, which directly aligns with the paper's large-scale data-driven approach. It includes conference talks that discuss fuzz testing evaluation and practical applications, providing a deep understanding of fuzzing's impact on software quality.

*How the paper uses it:* The paper presents a large-scale empirical analysis of OSS-Fuzz bug data to evaluate fuzz testing effectiveness.

▶ [Evaluating Fuzz Testing](https://www.youtube.com/watch?v=ID8XtoMn43I) — Association for Computing Machinery (ACM) · 25:42 · 7y ago

### OSS-Fuzz bug history talk *(paper-talk search result; attribution unverified)*
This section ideally features the authors' own presentation or a direct talk about OSS-Fuzz bug history to gain first-hand insight into their findings and methodology. Unfortunately, no direct author talk on this exact paper was found. Instead, a closely related and rigorous talk on OSS-Fuzz and fuzz testing by a recognized expert is selected to provide relevant and advanced context.

*How the paper uses it:* The paper investigates OSS-Fuzz bug history; a direct or closely related talk offers valuable detailed insights.

▶ [Short Intro to OSS-Fuzz | How to Find and Fix Bugs in Open-Source at Scale](https://www.youtube.com/watch?v=SmH3Ys_k8vA) — Code Intelligence · 30:20 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the impact and methodology of fuzz testing in open-source software as studied in the paper, start by learning about software vulnerability taxonomies to grasp how bugs and security issues are classified. Then, build foundational knowledge of automated software testing techniques to see where fuzzing fits in the broader testing landscape. Next, understand the SZZ algorithm, which is critical for identifying bug-introducing commits and analyzing bug lifespans. Finally, focus on fuzz testing itself, especially OSS-Fuzz, to comprehend how fuzzing works, its effectiveness, and developer responses as analyzed in the paper.

### Software vulnerability taxonomy *(prerequisite)*
This section introduces the Common Weakness Enumeration (CWE) and related vulnerability classification systems, which help categorize and understand different types of software bugs and security weaknesses. Knowing CWE is essential to interpret the types of bugs fuzzers find and how they relate to known vulnerabilities.

*How the paper uses it:* The paper uses CWE classifications to compare fuzzing-detected bugs with historical CVE vulnerabilities.

▶ [Mastering Vulnerability Research: Unveiling Common Weakness Enumeration (CWE)](https://www.youtube.com/watch?v=rK6InJ-RXPo) — PCPL ALEX · 5:52 · 3y ago

### Automated software testing techniques *(prerequisite)*
Learn about the various automated testing methods used in software development, including their purposes and differences from manual testing. This context helps place fuzz testing within the broader quality assurance ecosystem.

*How the paper uses it:* Fuzzing is an automated testing technique whose effectiveness the paper evaluates in open-source projects.

▶ [5 Types of Testing Software Every Developer Needs to Know!](https://www.youtube.com/watch?v=YaXJeUkBe4Y) — Alex Hyett · 6:24 · 3y ago

### SZZ algorithm bug origin *(prerequisite)*
The SZZ algorithm is a method to identify which code commits introduced bugs by analyzing version control history. Understanding SZZ is key to grasping how the paper determines bug lifespans and developer fix behaviors.

*How the paper uses it:* The paper relies on the SZZ algorithm to map OSS-Fuzz bug reports to bug-introducing and bug-fixing commits.

▶ [Evaluating SZZ Implementations Through a Developer-Informed Oracle](https://www.youtube.com/watch?v=ZiuAaysj_Sk) — ICSE2021 Conference · 18:35 · 5y ago

### Fuzz testing empirical analysis *(paper-talk search result; attribution unverified)*
This section explains fuzz testing, focusing on how it automatically generates inputs to find bugs and vulnerabilities in software. It covers OSS-Fuzz, a large-scale fuzzing service for open-source projects, and discusses how fuzzing impacts bug detection and developer response.

*How the paper uses it:* The paper empirically analyzes OSS-Fuzz bug data to assess fuzzing effectiveness and developer reactions.

▶ [Short Intro to OSS-Fuzz | How to Find and Fix Bugs in Open-Source at Scale](https://www.youtube.com/watch?v=SmH3Ys_k8vA) — Code Intelligence · 30:20 · 5y ago

## Already in your library

- [Fuzzing Programs to Find Bugs - Computerphile](https://www.youtube.com/watch?v=kaD54VXxGrI) — also for: Fuzzing with Agents? Generators Are All You Need (Rohan Padhye)
- [Fuzzing (fuzz testing) 101: Lessons from cyber security expert Dr. David Brumley](https://www.youtube.com/watch?v=17ebHty54T4) — also for: A Study of the Reliability of Agentic AI-Generated Programs (Barton P. Miller)
- [Genetic algorithms explained in 6 minutes (...and 28 seconds)](https://www.youtube.com/watch?v=-kpcAa-qKwY) — also for: Domain-Informed Representation for Evolutionary Sieving in Integral and Module Lattices (Qi Cheng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate understanding of the empirical analysis of OSS-Fuzz bug data from the paper. The beginner project reproduces a key metric visualization using simulated or small-scale data to grasp bug lifespan and response time concepts. The intermediate project implements the core bug lifespan and developer response time analysis on a publicly available or synthesized dataset, applying the SZZ algorithm heuristic. The advanced project extends the paper by exploring developer behavior around bug fixing, addressing the limitation that less than half of fuzz bugs are fixed by the original author, and proposes tooling or workflow enhancements to encourage original authorship in fixes.

### Beginner — Visualize Bug Lifespan and Developer Response Time
*Effort: a weekend, ~8 hours*

You build a simple data visualization dashboard that plots bug lifespans and developer response times similar to the paper's reported medians and distributions. Using a small synthetic dataset mimicking OSS-Fuzz bug reports, you recreate histograms or boxplots showing median bug lifespan around 324 days and median response time around 2 days.

**Why it shows you understood the paper:** This project shows you understand the key metrics the paper uses to measure fuzzing effectiveness and developer responsiveness, and how to interpret empirical bug data distributions.

**Grounded in:** Measurement of bug lifespans, showing fuzzing reduces median bug lifespan to 324 days compared to 438 days in prior studies; Analysis of developer response times, finding median response to fuzz bugs is 2 days.

**Tech stack:** Python 3.11, pandas, matplotlib, Jupyter Notebook

**Data:** Synthetic dataset simulating OSS-Fuzz bug reports with bug open and fix dates and developer response timestamps, created based on paper statistics.

**Build it:**

1. Create a small CSV dataset with bug report IDs, open dates, fix dates, and first developer response dates.
2. Load the data into pandas and compute bug lifespans and response times.
3. Plot histograms and boxplots of bug lifespans and response times using matplotlib.
4. Annotate plots with median values and compare to paper's reported numbers.
5. Write a README explaining the metrics and how the visualization relates to the paper.

**Ships as:** A Jupyter Notebook and README showing visualizations of bug lifespan and developer response time distributions with commentary linking to the paper's findings.

**Stretch goal:** Add interactive filtering by bug type or project to explore how metrics vary.

### Intermediate — Reimplement OSS-Fuzz Bug Lifespan and Response Analysis
*Effort: 1-3 weekends, ~20 hours*

You implement the core empirical analysis pipeline from the paper: parsing bug report data, mapping to commit ranges using the SZZ algorithm heuristic to identify bug-introducing and bug-fixing commits, and computing bug lifespans and developer response times. You apply this to a smaller open-source project's issue and commit data (e.g., a popular GitHub project with public issues) as a substitute for OSS-Fuzz data, and compare your metrics to the paper's results.

**Why it shows you understood the paper:** This project demonstrates you can replicate the paper's core method of linking bug reports to commits and measuring key metrics, showing comprehension of the SZZ algorithm and empirical software engineering techniques.

**Grounded in:** The authors analyzed 44,102 OSS-Fuzz reported issues mapping bug reports to GitHub commit ranges to identify bug-introducing and bug-fixing commits, measured bug lifespans and developer response times.

**Tech stack:** Python 3.11, GitPython, pandas, matplotlib, Jupyter Notebook

**Data:** Public GitHub repository issue and commit data used as a proxy for OSS-Fuzz bug reports; no official OSS-Fuzz dataset available.

**Build it:**

1. Select a popular open-source GitHub repository with rich issue and commit history.
2. Extract issue creation and closing dates, and commit history using GitPython.
3. Implement a simplified SZZ algorithm to identify bug-introducing commits from issue-fixing commits.
4. Calculate bug lifespans and developer response times based on issue and commit timestamps.
5. Visualize the distributions and compare median values to those reported in the paper.
6. Document methodology, assumptions, and limitations in a README.

**Ships as:** A Jupyter Notebook and README demonstrating the bug lifespan and response time analysis on real GitHub data, with visualizations and comparison to the paper's findings.

**Stretch goal:** Incorporate mapping of bug types to CWE categories using issue labels or keywords to analyze vulnerability overlap.

### Advanced — Tool to Encourage Original Authors to Fix Their Bugs
*Effort: 3+ weeks*

You design and implement a developer workflow tool or GitHub bot that identifies bugs introduced by a developer and nudges or facilitates that same developer to fix them, addressing the paper's finding that only 46% of fuzz bugs are fixed by the original author. The tool integrates with GitHub issues and pull requests to provide reminders, metrics, or incentives to encourage original authorship in bug fixes. You evaluate the tool's potential impact through simulated or historical data analysis.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating deep understanding of developer behavior around fuzz bug fixing and proposing a practical socio-technical intervention.

**Grounded in:** Assessment of learning opportunities, showing only 46% of bugs are fixed by the original author who introduced them; future direction: enhancing developer workflows to increase original author bug fixes.

**Tech stack:** TypeScript, Node.js, GitHub Actions, GitHub API, React (optional for UI)

**Data:** Historical GitHub issue and commit data from a selected open-source project to simulate or analyze developer fix patterns.

**Build it:**

1. Analyze historical issue and commit data to identify bugs introduced and fixed by the same developer.
2. Design a GitHub Action or bot that triggers on new bug reports or pull requests related to bugs.
3. Implement reminders or notifications targeted at original bug introducers to encourage fixing.
4. Optionally build a dashboard showing metrics on original author fix rates.
5. Test the tool on a sample repository or simulate its effect using historical data.
6. Document design decisions, implementation, and evaluation in a detailed README.

**Ships as:** A GitHub bot or workflow with source code and documentation demonstrating a method to increase original author engagement in bug fixing, linked to the paper's findings and future directions.

**Stretch goal:** Integrate machine learning to predict which bugs are likely to be fixed by original authors and tailor nudges accordingly.

_No official OSS-Fuzz dataset or authors' released code is available; all projects must rely on synthetic data or proxy public GitHub data._
