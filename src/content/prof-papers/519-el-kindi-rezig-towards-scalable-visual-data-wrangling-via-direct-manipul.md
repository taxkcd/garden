---
title: "519 · Towards Scalable Visual Data Wrangling via Direct Manipulation — El Kindi Rezig"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-el-kindi-rezig"
source_hash: "2e0c10c0033f2e449648a3286b9a177e8911474d31c0bafcc25168c513be837c"
sequence: 519
generator: "outreach-garden: managed"
---

# 519 · Towards Scalable Visual Data Wrangling via Direct Manipulation

## At a glance

- **Professor:** El Kindi Rezig
- **Institution:** University of Utah
- **Paper:** [Towards Scalable Visual Data Wrangling via Direct Manipulation](https://arxiv.org/pdf/2512.18405)
- **Authors:** El Kindi Rezig, Mir Mahathir Mohammad, Nicolas Baret, Ricardo Mayerhofer, Andrew McNutt, Paul Rosen
- **Year:** 2026

## Paper overview

This paper presents Buckaroo, a visual data wrangling system that helps users clean and prepare data by detecting anomalies within meaningful data groups and allowing direct manipulation of visualizations to fix errors. It supports scalable interaction with large datasets through smart sampling and multi-layer navigation, making data cleaning more intuitive, transparent, and reproducible.

### Why it matters

**Research problem:** Data wrangling is a labor-intensive and error-prone bottleneck in data science workflows, especially when anomalies are subgroup-dependent and fixing one error can cause others. Existing tools lack scalable, interactive, and visual approaches that integrate anomaly detection, exploration, and repair.

**Why it matters:** Data quality is critical for reliable data-driven decision-making, yet data scientists spend up to 80% of their time cleaning data. Improving the usability and scalability of data wrangling tools can significantly reduce project time and errors.

**Key contributions:**

- A group-based abstraction for organizing and visualizing anomalies in interpretable summaries.
- An extensible framework for custom error detectors and repair functions.
- Efficient indexing and overlap-tracking to enable localized, low-latency anomaly detection and updates.
- A snapshot storage module supporting undo/redo and scalable storage of data cleaning steps.
- Integration of anomaly detection, visualization, and repair in a single interactive system.

## About the professor

**El Kindi Rezig** — Assistant Professor, Kahlert School of Computing, University of Utah.

Research interests: data management in general and data quality in particular

### Research links

- [Faculty/profile page](https://elkindi.github.io)
- [Resolved homepage](https://elkindi.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=oapZdl8AAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/96/8919.html)
- [GitHub](https://github.com/elkindi)
- [LinkedIn](https://www.linkedin.com/in/elkindi)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Interactive Data Visualization
**The paper assumes:** interactive data visualization techniques, visual analytics principles, and user interaction design for data exploration
**Already in this field?** Skip this entirely if you already understand core concepts and techniques of interactive data visualization and visual analytics.

This background focuses on interactive data visualization, which is central to understanding how Buckaroo enables scalable, intuitive data wrangling through direct manipulation and multi-layer navigation of visual anomaly summaries. The rigorous course offers a deep dive into the principles and practical use of Vega-Lite for creating interactive visualizations, while the fast track provides a concise, approachable introduction to the same topic, ideal for quickly grasping key concepts and techniques.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Mastering Data Visualization in Vega-Lite](https://www.youtube.com/playlist?list=PLe9dkYfBBHFktHd5Tn2FAlADEbQ70kUSp) — Professor Lace Padilla · 20 videos · 2.4h across 20 episodes

**Watch only this:** Episodes 1-14 ("Master the Art and Science of Data Visualization with Dr. Lace Padilla" through "Vega-Lite: Overview and detailed view with linked charts"), about 1.7 hours — these cover foundational concepts, Vega-Lite grammar, and interactive techniques including zooming, panning, and linked views essential for understanding Buckaroo's visual interface.

*Why it unblocks this paper:* This university-level series by Professor Lace Padilla thoroughly covers interactive data visualization using Vega-Lite, which aligns closely with Buckaroo's approach to direct manipulation and scalable visual data wrangling.

*If you want all of it:* All 20 episodes, about 2.4 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Buckaroo system for scalable visual data wrangling, start by building foundational knowledge on scalable data visualization navigation and backend indexing techniques that enable efficient interaction with large datasets. Next, explore interactive data cleaning systems to grasp the direct manipulation paradigm. Then, study group-based anomaly detection methods which are central to Buckaroo's approach for organizing and detecting anomalies. Finally, focus on the authors' own talk or the closest available advanced lecture on data wrangling to directly connect theory with the Buckaroo system implementation.

### scalable data visualization navigation lecture *(prerequisite)*
Understanding scalable data visualization and navigation techniques is essential to grasp how Buckaroo supports multi-layer pan-and-zoom navigation for large datasets without sacrificing interactivity. This foundational knowledge helps appreciate the integration with the Hopara engine and the challenges of visualizing large data interactively.

*How the paper uses it:* Buckaroo integrates with the Hopara pan-and-zoom engine to enable scalable navigation over large datasets.

▶ [Portable Scalable Data Visualization Techniques for Apache Spark and Python Notebook-based Analytics](https://www.youtube.com/watch?v=WHuf0diAPQ4) — Databricks · 26:44 · 6 years ago

### backend indexing for data wrangling talk *(prerequisite)*
Efficient backend indexing is critical for Buckaroo's localized, low-latency anomaly detection and updates. Learning about database indexing structures and their performance implications provides insight into how Buckaroo achieves sub-second response times and outperforms traditional tools like Pandas.

*How the paper uses it:* Buckaroo uses efficient indexing and overlap-tracking in its PostgreSQL backend to enable fast anomaly detection and data repair operations.

▶ [NWDS Talk - Learned Index Structures for Dynamic and Multi-Dimensional Data](https://www.youtube.com/watch?v=Zv04F380hCw) — UW Database Group · 55:03 · 5 years ago

### interactive data cleaning systems seminar *(prerequisite)*
Interactive data cleaning systems form the conceptual basis for Buckaroo's direct manipulation interface, where users can repair data via visualizations with immediate feedback. Understanding the design and challenges of such systems contextualizes Buckaroo's contributions in usability and integration.

*How the paper uses it:* Buckaroo integrates anomaly detection, visualization, and repair in a single interactive system supporting direct manipulation.

▶ [Interactive Data Analysis - Jeffrey Heer - May 23, 2013](https://www.youtube.com/watch?v=WwNs-lDq7f4) — caltech · 1:01:24 · 13 years ago

### group-based anomaly detection lecture
Group-based anomaly detection is a core method Buckaroo employs to organize data into meaningful groups and detect anomalies within and across these groups. This lecture provides a deep dive into the algorithms and applications of group anomaly detection, directly relevant to Buckaroo's approach.

*How the paper uses it:* Buckaroo organizes data into groups defined by categorical attributes and detects anomalies within these groups.

▶ [Anomaly Detection: Algorithms, Explanations, Applications](https://www.youtube.com/watch?v=12Xq9OLdQwQ) — Microsoft Research · 1:26:56 · 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in interactive data cleaning and scalable visualization before focusing on the core methods used in the Buckaroo system for visual data wrangling. Starting with interactive data cleaning systems to understand direct manipulation interfaces, it then covers scalable data visualization navigation to grasp multi-layer navigation techniques. Next, it explains backend indexing for efficient anomaly detection and updates, followed by group-based anomaly detection methods. Finally, it concludes with an overview of data wrangling concepts to contextualize Buckaroo's approach.

### interactive data cleaning systems seminar *(prerequisite)*
Learn how interactive data cleaning systems empower users to explore and clean data through direct manipulation and visual interfaces. This foundational knowledge helps understand how Buckaroo integrates anomaly detection, visualization, and repair in a single system.

*How the paper uses it:* Buckaroo uses direct manipulation interfaces to allow users to repair data visually with immediate feedback.

▶ [Interactive Data Analysis - Jeffrey Heer - May 23, 2013](https://www.youtube.com/watch?v=WwNs-lDq7f4) — caltech · 1:01:24 · 13 years ago

### scalable data visualization navigation lecture *(prerequisite)*
Understand the principles and techniques behind scalable data visualization and navigation, including multi-layer pan-and-zoom interfaces. This knowledge is essential to grasp how Buckaroo supports smooth interaction with large datasets via Hopara integration.

*How the paper uses it:* Buckaroo integrates with the Hopara pan-and-zoom engine to enable scalable, low-latency navigation over large datasets.

▶ [Stevens Institute of Technology: Data Visualization Basics - Dr. Joseph Morabito](https://www.youtube.com/watch?v=4YUtYI5rBuo) — Stevens Institute of Technology · 43:39 · 13 years ago

### backend indexing for data wrangling talk *(prerequisite)*
Explore how backend indexing structures improve data access efficiency and enable low-latency anomaly detection and updates. This technical foundation clarifies how Buckaroo achieves sub-second response times for common wrangling operations.

*How the paper uses it:* Buckaroo uses efficient backend indexing and overlap-tracking to support localized, low-latency anomaly detection and updates.

▶ [DB Indexing in System Design Interviews - B-tree, Geospatial, Inverted Index, and more!](https://www.youtube.com/watch?v=BHCSL_ZifI0) — Hello Interview · 14:16 · 1 year ago

### group-based anomaly detection lecture
Learn about group or collective anomaly detection, which identifies unusual patterns within meaningful data groups rather than individual points. This concept is central to Buckaroo’s approach of organizing data into groups defined by categorical attributes to detect anomalies.

*How the paper uses it:* Buckaroo organizes data into groups defined by categorical attributes to detect and visualize anomalies effectively.

▶ [Group Anomaly Detection with Machine Learning](https://www.youtube.com/watch?v=Xd8ZOv0N1B8) — AICamp · 39:39 · 5 years ago

### Buckaroo visual data wrangling talk *(the paper's own talk)*
Gain a comprehensive understanding of data wrangling concepts, including cleaning, transforming, and preparing data for analysis. This overview contextualizes Buckaroo’s innovations within the broader data wrangling workflow.

*How the paper uses it:* Buckaroo is a visual data wrangling system that improves usability and scalability in data cleaning workflows.

▶ [Data Wrangling 101](https://www.youtube.com/watch?v=Tgo8B2FiNn4) — Flick · 14:54 · 7 years ago

## Already in your library

- [Anomaly Detection Explained | Unsupervised Machine Learning with Real-World Examples](https://www.youtube.com/watch?v=7FjapNRy5YA) — also for: Extended Isolation Forest (Robert J. Brunner)
- [Lec-32: What is Data Preprocessing & Data Cleaning ...](https://www.youtube.com/watch?v=tDu_KIlXaB0) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)
- [Lecture 23: Visualizing Data](https://www.youtube.com/watch?v=C5JjMP8m-4E) — also for: Data Visualization Literacy (Katy Börner)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Buckaroo's visual data wrangling system. The beginner project reproduces a core visualization concept using familiar tools and a public dataset. The intermediate project implements Buckaroo's group-based anomaly detection and direct manipulation repair on a real dataset, comparing performance to a baseline. The advanced project extends Buckaroo's approach by addressing its limitation on usability with large error-laden datasets through advanced error summarization and sampling strategies.

### Beginner — Grouped Anomaly Visualization with Direct Manipulation
*Effort: a weekend, ~8 hours*

You build a React web app that visualizes anomalies grouped by categorical attributes on a public dataset using bar charts. The app allows users to select anomalous groups and perform simple data repairs (e.g., imputation or removal) via direct manipulation, with immediate visual feedback.

**Why it shows you understood the paper:** This project shows you understand Buckaroo's core idea of organizing data into meaningful groups for anomaly detection and supporting direct manipulation for repair with instant updates.

**Grounded in:** A group-based abstraction for organizing and visualizing anomalies in interpretable summaries; Buckaroo supports direct manipulation of visualizations for data repair with immediate feedback.

**Tech stack:** React, TypeScript, D3.js, PostgreSQL (optional for data storage)

**Data:** Adult Income dataset from Kaggle (https://www.kaggle.com/datasets/wenruliu/adult-income-dataset), used as a substitute for the paper's data.

**Build it:**

1. Load and preprocess the Adult Income dataset, grouping data by a categorical attribute (e.g., 'education').
2. Implement anomaly detection within groups by computing simple statistics (e.g., outlier detection on income).
3. Visualize groups and their anomaly scores using bar charts with D3.js inside React components.
4. Enable user interaction to select anomalous groups and apply simple repair operations (e.g., remove outliers or impute missing values).
5. Update the visualization immediately after repairs to reflect changes.
6. Document the approach and link to the dataset in the README.

**Verified links from the paper:**

- <https://www.kaggle.com/datasets/wenruliu/adult-income-dataset> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with a React app demonstrating grouped anomaly visualization and direct manipulation repair on the Adult Income dataset, with clear README instructions.

**Stretch goal:** Add undo/redo functionality for repair steps to mimic Buckaroo's snapshot storage module.

### Intermediate — Reimplementation of Buckaroo's Group-Based Anomaly Detection and Repair
*Effort: 1-3 weekends*

You implement Buckaroo's core method of grouping data by categorical attributes and detecting anomalies within and across groups on the Adult Income dataset. You build a backend using PostgreSQL for efficient indexing and a React frontend for interactive visualization and direct manipulation repair. You compare response times and repair effectiveness against a baseline using Pandas.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement Buckaroo's scalable backend indexing and interactive repair workflow, validating the paper's claims about performance and usability.

**Grounded in:** Buckaroo organizes data into groups defined by categorical attributes to detect and visualize anomalies; Buckaroo achieves sub-second response times for common wrangling operations using PostgreSQL backend, outperforming Pandas; Buckaroo supports direct manipulation of visualizations for data repair with immediate feedback.

**Tech stack:** Python 3.11, PostgreSQL, React, TypeScript, D3.js, Pandas

**Data:** Adult Income dataset from Kaggle (https://www.kaggle.com/datasets/wenruliu/adult-income-dataset) as a stand-in for the paper's data.

**Build it:**

1. Set up a PostgreSQL database and import the Adult Income dataset.
2. Implement group-based anomaly detection queries using SQL, indexing categorical attributes for efficiency.
3. Build a React frontend that visualizes anomaly summaries per group with interactive charts.
4. Implement direct manipulation repair operations that update the database and refresh visualizations with sub-second latency.
5. Benchmark response times of repair operations against a Pandas-based baseline.
6. Write a report comparing performance and discussing the trade-offs.

**Verified links from the paper:**

- <https://www.kaggle.com/datasets/wenruliu/adult-income-dataset> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A full-stack GitHub repo with backend and frontend demonstrating Buckaroo's core anomaly detection and repair method, including performance benchmarks and a detailed README.

**Stretch goal:** Extend the system to generate an executable Python script capturing the sequence of cleaning steps for reproducibility.

### Advanced — Enhanced Error Summarization and Sampling for Scalable Visual Data Wrangling
*Effort: a few weeks*

You develop an extension to Buckaroo's approach that addresses the limitation of overwhelming users with too many error-laden charts on large datasets. You implement advanced sampling and aggregation strategies to summarize errors effectively, integrating these into an interactive visualization prototype. You evaluate usability improvements and system responsiveness on a large public dataset.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of Buckaroo's challenges and the ability to innovate on scalable, user-friendly data wrangling interfaces.

**Grounded in:** Usability challenges remain for very large datasets with many errors, as too many error-laden charts can overwhelm users; Exploring more advanced sampling and aggregation strategies to better summarize errors in large datasets.

**Tech stack:** Python 3.11, PostgreSQL, React, TypeScript, D3.js, Hopara pan-and-zoom engine (if feasible)

**Data:** Adult Income dataset from Kaggle or a large public dataset with categorical and numerical attributes to simulate large error scenarios.

**Build it:**

1. Analyze the current Buckaroo approach to error visualization and identify scalability bottlenecks.
2. Design and implement advanced sampling methods (e.g., stratified sampling, error aggregation) to reduce visual clutter.
3. Integrate these methods into an interactive React visualization that supports multi-layer pan-and-zoom navigation.
4. Evaluate the system's usability through informal user testing or expert feedback focusing on error summarization effectiveness.
5. Measure system responsiveness and latency to ensure scalability.
6. Document findings, limitations, and potential for integration with Buckaroo.

**Verified links from the paper:**

- <https://www.kaggle.com/datasets/wenruliu/adult-income-dataset> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with an enhanced visual data wrangling prototype demonstrating scalable error summarization and sampling, with evaluation results and comprehensive documentation.

**Stretch goal:** Collaborate with the Buckaroo team to integrate your sampling strategies into their full system and conduct formal usability studies.
