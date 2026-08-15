---
title: "411 · Assembly and reasoning over semantic mappings at scale for biomedical data integration — Benjamin M. Gyori"
date: 2026-08-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-benjamin-m-gyori"
source_hash: "7a12dbd11fa29b16027d20bb5b566245d764aaa4d264dfbcd9ec2accc6958e55"
sequence: 411
generator: "outreach-garden: managed"
---

# 411 · Assembly and reasoning over semantic mappings at scale for biomedical data integration

## At a glance

- **Professor:** Benjamin M. Gyori
- **Institution:** Northeastern University
- **Paper:** [Assembly and reasoning over semantic mappings at scale for biomedical data integration](https://doi.org/10.1093/bioinformatics/btaf542)
- **Authors:** Charles Tapley Hoyt, Klas Karis, Benjamin M. Gyori
- **Year:** 2025

## Paper overview

This paper presents SeMRA, an open-source software tool designed to integrate and reason over semantic mappings from multiple biomedical ontologies and databases. SeMRA assembles a large-scale integrated mapping database to improve interoperability between diverse biomedical resources by inferring missing mappings and providing confidence measures. The tool supports data integration tasks crucial for biomedical research, such as knowledge graph construction and automated model assembly.

### Why it matters

**Research problem:** Biomedical data resources assign identifiers to overlapping biological concepts, but mappings between these identifiers are incomplete, fragmented, and inconsistent, creating bottlenecks for data interoperability and integration.

**Why it matters:** Consistent integration of biomedical data across multiple resources is essential for FAIR data principles, enabling comprehensive data analysis, knowledge graph construction, automated systems biology modeling, and accurate text mining. Without reliable mappings, these tasks are hindered by redundancy, inconsistency, and missing links.

**Key contributions:**

- Development of SeMRA, a configurable open-source software for large-scale semantic mapping assembly and reasoning.
- Creation of the SeMRA Raw Mappings Database containing 43.4 million mappings from 127 biomedical sources.
- Implementation of graph-based inference methods (inversion, mutation, transitivity) to infer missing mappings with confidence scoring.
- Provision of a locally deployable web application and graph database for interactive exploration and curation of mappings.
- Demonstration of domain-specific integration use cases including cell/cell line and disease resources, showing substantial expansion and consolidation of mappings.

## About the professor

**Benjamin M. Gyori** — Associate Professor, Jointly Appointed with College of Engineering, Khoury College of Computer Sciences and College of Engineering, Northeastern University.

Research interests: computational modeling, machine learning, natural language processing, human–machine interaction, computational systems biology

### Research links

- [Faculty/profile page](https://coe.northeastern.edu/people/gyori-benjamin)
- [Identity evidence](https://www.khoury.northeastern.edu/people/benjamin-gyori)
- [Resolved homepage](https://www.khoury.northeastern.edu/people/benjamin-gyori/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** graph theory and graph algorithms
**The paper assumes:** graph theory, graph algorithms, and graph-based inference methods
**Already in this field?** Skip this entirely if you already have a solid understanding of graph theory and common graph algorithms used for inference and reasoning.

This background focuses on graph theory and graph algorithms, essential for understanding the core methods used in the paper, such as representing semantic mappings as directed graphs and applying graph traversal and inference algorithms. The rigorous course option offers a deep, structured university-level introduction to algorithms including graph algorithms, while the fast track provides a concise, focused guide to graph algorithms for quick comprehension and practical understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.006 Introduction to Algorithms, Fall 2011](https://www.youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb) — MIT OpenCourseWare · 47 videos · 41.8h across 47 episodes

**Watch only this:** Lectures 13 to 16 (Breadth-First Search, Depth-First Search and Topological Sort, Single-Source Shortest Paths Problem, Dijkstra), about 3.5 hours total — these cover core graph traversal and shortest path algorithms foundational to the paper's methods.

*Why it unblocks this paper:* MIT 6.006 Introduction to Algorithms (Fall 2011) is a comprehensive university course covering fundamental graph algorithms such as BFS, DFS, shortest paths, and topological sort, which are directly relevant to the paper's use of graph traversal and inference methods.

*If you want all of it:* 41.8 hours across 47 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Algorithms for Competitive Programming | CSES Full Guide](https://www.youtube.com/playlist?list=PLtfqa971vD5EusKLP8PtZfbm8vrxWqP7X) — Yash Poonia · 36 videos · 16.2h across 36 episodes

**Watch only this:** Episodes 1 (Counting Rooms), 2 (Labyrinth), 4 (Message Route), 8 (Shortest Routes I - Dijkstra’s Algorithm Explained), and 10 (High Score - Bellman Ford Algorithm + Cycle Detection), about 2.5 hours total — these cover essential graph traversal and shortest path algorithms with practical examples.

*Why it unblocks this paper:* Graph Algorithms for Competitive Programming | CSES Full Guide offers a concise and clear series focused specifically on graph algorithms including BFS, DFS, shortest paths, and cycle detection, providing practical intuition and algorithmic techniques relevant to the paper's graph-based inference.

*If you want all of it:* 16.2 hours across 36 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Assembly and reasoning over semantic mappings at scale for biomedical data integration,' start with foundational knowledge on biomedical ontology integration and FAIR data principles, which provide the necessary context for semantic interoperability and data integration challenges. Then, explore the computational methods underlying semantic mapping inference, focusing on graph-based reasoning techniques relevant to SeMRA's approach. Finally, study the core concept of semantic mapping assembly and reasoning, prioritizing any direct talks by the paper's authors or closely related academic presentations.

### Biomedical ontology integration *(prerequisite)*
Biomedical ontology integration is foundational for understanding how diverse biomedical data sources are unified through formal vocabularies and mappings. This section covers ontology development, applications in clinical and biological data, and standards for sharing mappings, which are critical for grasping the challenges SeMRA addresses.

*How the paper uses it:* SeMRA integrates mappings from 445 biomedical ontologies and databases, making ontology integration knowledge essential.

▶ [Ontologies](https://www.youtube.com/watch?v=WayalrOkCkY) — The Foundations of Biomedical Data Science · 1:03:03

### FAIR data principles biomedical *(prerequisite)*
FAIR data principles emphasize findability, accessibility, interoperability, and reusability of biomedical data. Understanding these principles contextualizes why consistent semantic mappings and integration tools like SeMRA are crucial for enabling FAIR-compliant biomedical research.

*How the paper uses it:* The paper motivates SeMRA by the need for consistent integration to support FAIR data principles in biomedical research.

▶ [The Use of Ontologies for FAIR Neuroscience](https://www.youtube.com/watch?v=cP25YdcMERo) — The Foundations of Biomedical Data Science · 1:01:45

### Semantic mapping inference methods *(prerequisite)*
This section covers graph-based inference methods such as inversion, mutation, and transitivity, which are core computational approaches used by SeMRA to infer missing semantic mappings. Understanding these algorithms and graph theory concepts is critical to appreciate SeMRA's reasoning capabilities.

*How the paper uses it:* SeMRA implements graph algorithms for mapping inference based on inversion, mutation, and transitivity.

▶ [Transitive closure of graph |Intuition| Reachability Matrix| Harshit[NITA]](https://www.youtube.com/watch?v=g1i9mP5cxJE) — Harshit jain · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts essential to understanding SeMRA, a tool for integrating and reasoning over semantic mappings in biomedical data. Starting with biomedical ontology integration to grasp how diverse biomedical data sources are unified, it then covers FAIR data principles to appreciate the importance of interoperability. Next, it explains semantic mapping inference methods, the core computational approach used by SeMRA, and concludes with a direct introduction to the SeMRA software and its methods.

### Biomedical ontology integration *(prerequisite)*
Biomedical ontologies provide structured vocabularies and classifications that unify diverse biological and medical concepts across databases. Understanding how these ontologies are developed and integrated is key to grasping how SeMRA assembles mappings from many sources into a coherent framework.

*How the paper uses it:* SeMRA integrates mappings from 445 biomedical ontologies and databases, making ontology integration foundational to its approach.

▶ [Ontologies](https://www.youtube.com/watch?v=WayalrOkCkY) — The Foundations of Biomedical Data Science · 1:03:03

### FAIR data principles biomedical *(prerequisite)*
FAIR principles (Findable, Accessible, Interoperable, Reusable) guide the management of biomedical data to ensure it can be effectively shared and integrated. Understanding FAIR principles clarifies why consistent semantic mappings and interoperability, as enabled by SeMRA, are critical for biomedical research.

*How the paper uses it:* SeMRA addresses data interoperability challenges essential for realizing FAIR data principles in biomedical research.

▶ [FAIR data principles](https://www.youtube.com/watch?v=F13nkArkp_A) — Taylor & Francis · 8:10

### Semantic mapping inference methods
Semantic mapping inference methods use graph algorithms like inversion, mutation, and transitivity to infer missing relationships between concepts. These computational techniques enable SeMRA to expand and improve mapping coverage beyond what is explicitly provided in source databases.

*How the paper uses it:* SeMRA applies graph-based inference methods to infer missing semantic mappings with confidence scoring.

▶ [Transitive closure of graph |Intuition| Reachability Matrix| Harshit[NITA]](https://www.youtube.com/watch?v=g1i9mP5cxJE) — Harshit jain · 6 years ago

### SeMRA paper talk *(the paper's own talk)*
This video introduces SeMRA, its design, and its capabilities for assembling and reasoning over large-scale semantic mappings in biomedical data. It provides a direct overview of the software and methods described in the paper.

*How the paper uses it:* The video directly presents the novel software and methods developed in the SeMRA paper.

▶ [Semantic Mapping Lecture](https://www.youtube.com/watch?v=EUiyCzL_Prg) — Erik Kormos · 8:31

## Already in your library

- [Taxonomy, Ontology, Knowledge Graph, and Semantics](https://www.youtube.com/watch?v=sr257blfdY8) — also for: Insights from an Industry Survey on Software Design Errors (Gursimran Singh Walia)
- [Lec-26: Knowledge Representation and Reasoning | Logic ...](https://www.youtube.com/watch?v=9iN3O_oL2ac) — also for: A Community-driven vision for a new Knowledge Resource for AI (Michael R. Genesereth)
- [Building, Analyzing and Querying Biomedical Knowledge ...](https://www.youtube.com/watch?v=1TsPQC-Oax0) — also for: A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering (Yuan Luo)
- [Knowledge graphs: A short introduction to the core concepts ...](https://www.youtube.com/watch?v=-jkKlY9UA_Y) — also for: A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering (Yuan Luo)
- [Network-based discovery: A short introduction to the core ...](https://www.youtube.com/watch?v=XcUtFig7HZI) — also for: KGML-xDTD: A Knowledge Graph-based Machine Learning Framework for Drug Treatment Prediction and Mechanism Description (David Koslicki)
- [The FAIR principles explained](https://www.youtube.com/watch?v=5OeCrQE3HhE) — also for: MEDFORD IN A BOX: IMPROVEMENTS AND FUTURE DIRECTIONS FOR A METADATA DESCRIPTION LANGUAGE (Alva L. Couch)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the SeMRA system for large-scale semantic mapping integration in biomedical ontologies. The beginner project recreates a small-scale semantic mapping graph and applies simple inference to show basic concepts. The intermediate project uses the authors' SeMRA code and raw mappings database to reproduce core inference methods and metrics on a biomedical domain. The advanced project extends SeMRA by implementing handling of alternative identifiers and replaced-by annotations, addressing a stated limitation and future direction of the paper.

### Beginner — Small-Scale Semantic Mapping Graph and Inference
*Effort: a weekend, ~8 hours*

You build a small directed graph representing semantic mappings between a handful of biomedical ontology terms (e.g., cell types or diseases) using Python and NetworkX. You implement the three inference methods described in the paper—inversion, mutation, and transitivity—on this graph to infer missing mappings and assign simple confidence scores based on evidence provenance. You visualize the graph before and after inference to demonstrate consolidation of mappings.

**Why it shows you understood the paper:** This project shows you understand the core representation of semantic mappings as a directed graph and the key inference algorithms SeMRA uses to expand and consolidate mappings. A professor would see you grasp the fundamental graph-based reasoning approach central to the paper.

**Grounded in:** SeMRA represents semantic mappings as a directed graph and provides functionality to infer indirect mappings based on graph traversal... SeMRA implements three inference methods: inversion, mutation, and transitivity.

**Tech stack:** Python 3.11, NetworkX, Matplotlib

**Data:** A small synthetic dataset of 20-30 mappings between biomedical ontology terms manually created to simulate overlapping identifiers and incomplete mappings.

**Build it:**

1. Create a small directed graph of semantic mappings between biomedical ontology terms using NetworkX.
2. Implement inversion inference: add reverse edges for mappings where applicable.
3. Implement mutation inference: generate new mappings by mutating existing ones according to simple rules.
4. Implement transitivity inference: infer indirect mappings via graph traversal.
5. Assign confidence scores to mappings based on simulated evidence provenance.
6. Visualize the graph before and after inference to show mapping consolidation.

**Ships as:** A GitHub repo with Python scripts that build and infer over a small semantic mapping graph, plus visualizations and a README explaining the inference methods and results.

**Stretch goal:** Add a simple web-based interactive visualization using React or Streamlit to explore the mapping graph and inferred edges.

### Intermediate — Reproduce SeMRA Inference on Cell and Cell Line Mappings
*Effort: 2 weekends, ~20 hours*

You use the authors' SeMRA open-source codebase and the SeMRA Cell and Cell Line Mappings Database to reproduce the paper's core semantic mapping assembly and inference workflow in this domain. You run the inference methods (inversion, mutation, transitivity) on the real data, calculate confidence scores, and report metrics such as the number of inferred mappings and term consolidation percentage. You compare results against a baseline of raw mappings without inference.

**Why it shows you understood the paper:** This project demonstrates you can operate the authors' code and data to replicate a key use case, showing practical understanding of SeMRA's pipeline and its impact on biomedical data integration quality. It evidences your ability to work with large-scale biomedical ontology mappings and graph databases.

**Grounded in:** In the cell and cell line domain, SeMRA integrated 10 resources, inferred thousands of new mappings, and identified systematic cross-reference issues.

**Tech stack:** Python 3.11, SeMRA codebase (https://github.com/biopragmatics/semra), Docker, Neo4j, SSSOM format

**Data:** SeMRA Cell and Cell Line Mappings Database available at https://zenodo.org/records/15164183, including raw mappings and graph database Docker image.

**Build it:**

1. Clone and set up the SeMRA codebase from GitHub and install dependencies.
2. Download the SeMRA Cell and Cell Line Mappings Database from Zenodo.
3. Use the provided Dockerized graph database or set up Neo4j locally to load the mappings.
4. Run the SeMRA inference pipeline (inversion, mutation, transitivity) on the cell domain data.
5. Calculate confidence scores and generate summary metrics such as inferred mappings count and term consolidation percentage.
6. Compare results against the raw mappings baseline and document findings in a report.

**Verified links from the paper:**

- <https://github.com/biopragmatics/semra> — released by the paper's authors
- <https://zenodo.org/records/15164183> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with scripts and instructions to reproduce SeMRA inference on cell mappings, plus a report with metrics and analysis comparing raw vs inferred mappings.

**Stretch goal:** Extend the pipeline to integrate an additional small biomedical ontology or resource not included in the original dataset and evaluate its impact.

### Advanced — Extending SeMRA to Handle Alternative Identifiers and Replaced-by Annotations
*Effort: 3-4 weeks*

You extend the SeMRA software to explicitly handle alternative identifiers and replaced-by annotations in biomedical ontologies, addressing a key limitation noted in the paper. This involves parsing ontology metadata for these annotations, integrating them into the semantic mapping graph, and updating inference and confidence scoring to account for identifier replacements. You demonstrate the extension on a subset of ontologies with known alternative IDs and replaced terms, showing improved mapping consistency and reduced redundancy.

**Why it shows you understood the paper:** This project shows deep comprehension of SeMRA's architecture and the challenges in biomedical ontology integration. By implementing a concrete future direction from the paper, you demonstrate ability to contribute novel improvements and engage with ongoing research problems in semantic mapping integration.

**Grounded in:** SeMRA does not yet explicitly handle alternative identifiers and replaced-by annotations in ontologies... Incorporate handling of alternative identifiers and ontology term replacements to improve mapping consistency.

**Tech stack:** Python 3.11, SeMRA codebase (https://github.com/biopragmatics/semra), Docker, Neo4j, SSSOM format

**Data:** Subset of biomedical ontologies and mappings from the SeMRA Raw Mappings Database and Cell/Disease Mappings Databases that include alternative IDs and replaced-by annotations (from https://zenodo.org/records/15164183 and https://zenodo.org/records/15164180).

**Build it:**

1. Familiarize yourself with SeMRA's codebase and data ingestion pipeline.
2. Identify how alternative identifiers and replaced-by annotations are represented in source ontologies.
3. Extend the data parsing modules to extract and incorporate these annotations into the mapping graph.
4. Modify inference algorithms and confidence scoring to consider identifier replacements and equivalences.
5. Test the extended system on relevant ontology subsets and measure improvements in mapping consolidation and consistency.
6. Document the extension, usage instructions, and evaluation results in the repository README.

**Verified links from the paper:**

- <https://github.com/biopragmatics/semra> — released by the paper's authors
- <https://zenodo.org/records/15164183> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://zenodo.org/records/15164180> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A forked SeMRA repository with implemented support for alternative IDs and replaced-by annotations, example runs on biomedical data subsets, and a detailed README explaining the extension and its impact.

**Stretch goal:** Integrate semi-automated curation workflows using LLMs to suggest replacements and validate inferred mappings, aligning with the paper's future directions.

_Ensure access and compatibility with the SeMRA Dockerized graph databases and that local hardware meets Neo4j requirements before starting intermediate and advanced projects._
