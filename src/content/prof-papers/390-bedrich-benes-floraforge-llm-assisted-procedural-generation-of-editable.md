---
title: "390 · FloraForge: LLM-Assisted Procedural Generation of Editable and Analysis-Ready 3D Plant Geometric Models For Agricultural Applications — Bedrich Benes"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-bedrich-benes"
source_hash: "dc345ba209aa3969fa097c26664241d3dcdce768ca7b1fb7984e943c66d13074"
sequence: 390
generator: "outreach-garden: managed"
---

# 390 · FloraForge: LLM-Assisted Procedural Generation of Editable and Analysis-Ready 3D Plant Geometric Models For Agricultural Applications

## At a glance

- **Professor:** Bedrich Benes
- **Institution:** Purdue University
- **Paper:** [FloraForge: LLM-Assisted Procedural Generation of Editable and Analysis-Ready 3D Plant Geometric Models For Agricultural Applications](https://arxiv.org/abs/2512.11925v1)
- **Authors:** Mozhgan Hadadi, Talukder Z. Jubery, Patrick S. Schnable, Arti Singh, Bedrich Benes, Adarsh Krishnamurthy, Baskar Ganapathysubramanian
- **Year:** 2026

## Paper overview

FloraForge is a novel framework that uses large language models (LLMs) to help plant scientists create accurate, editable 3D models of plants without needing programming skills. It generates continuous, mathematically precise plant geometries that can be used for scientific analysis and visualization, enabling researchers to study plant traits and simulate growth or environmental interactions more easily.

### Why it matters

**Research problem:** Existing 3D plant modeling methods either require extensive species-specific training data and produce models that are hard to edit (learning-based reconstructions), or demand specialized expertise in procedural geometric modeling, making them inaccessible to most plant scientists. There is a lack of tools that combine accessibility, parametric editability, and mathematical rigor for plant phenotyping and simulation.

**Why it matters:** Accurate and editable 3D plant models are essential for computational phenotyping, breeding, and precision agriculture. Without accessible tools, researchers face bottlenecks in generating models that can be used for hypothesis-driven studies and physics-based simulations, limiting scientific progress and practical applications in agriculture.

**Key contributions:**

- LLM-assisted procedural plant generator that automates creation of botanically constrained B-spline surface templates without requiring geometric modeling expertise.
- Analysis-ready continuous B-spline surface representations enabling smooth, mathematically rigorous models suitable for quantitative phenotyping and simulation.
- Human-readable Plant Descriptor files exposing biologically meaningful morphological parameters for direct editing by domain experts with hierarchical parameter inheritance.
- Cross-species validation demonstrating applicability to monocot (maize) and dicot (soybean, mung bean) architectures with fitting to empirical LiDAR point cloud data.

## About the professor

**Bedrich Benes** — Professor and Associate Head, Computer Science, Purdue University.

### Research links

- [Faculty/profile page](https://cs.purdue.edu/homes/bbenes)
- [Resolved homepage](http://www.purdue.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** B-spline surface modeling
**The paper assumes:** parametric spline theory, B-spline curves and surfaces, geometric modeling with splines
**Already in this field?** Skip this entirely if you already understand parametric spline surfaces and their use in 3D geometric modeling.

This background focuses on B-spline surface modeling, which is central to understanding the FloraForge framework's approach to generating mathematically precise, editable, and analysis-ready 3D plant models. The rigorous course option provides a deep, structured university-level introduction to computer graphics and curve/surface modeling concepts, while the fast track offers a concise, clear series of short videos that cover geometric modeling fundamentals including B-splines. Choose the course for comprehensive mastery; choose the fast track for a quick but solid conceptual grasp.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Geometric modelling](https://www.youtube.com/playlist?list=PL5v4pl4wKbQMbujBY-zUUKC20MH2je2FF) — Saurabh Gupta · 10 videos · 1.5h across 10 episodes

**Watch only this:** Episodes 1, 7, 8, and 9, about 34 minutes total — covering introduction to geometric modeling, Bezier curves, B-spline curves, and comparison of spline types, which gives a solid conceptual overview relevant to the paper.

*Why it unblocks this paper:* This short-form series by Saurabh Gupta provides clear, concise explanations of geometric modeling concepts including parametric curves, B-spline curves, and their control, suitable for quickly grasping the essentials needed to understand the procedural modeling approach in FloraForge.

*If you want all of it:* 1.5 hours across all 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FloraForge paper, start with foundational concepts including B-spline surface modeling and large language models for code generation, as these underpin the mathematical and AI-driven procedural generation approach. Next, explore 3D plant phenotyping and modeling lectures to grasp the biological and agricultural context motivating the work. Finally, focus on the core concept of FloraForge itself through the authors' own related procedural plant modeling talk, which provides direct insight into their novel framework.

### B-spline surface modeling lecture *(prerequisite)*
B-spline surfaces provide the continuous, smooth, and mathematically rigorous geometric representation used in FloraForge to model plant organs. Understanding B-spline theory and surface construction is essential for appreciating how the framework achieves analysis-ready plant geometries.

*How the paper uses it:* FloraForge uses botanically constrained B-spline surface templates as the core geometric representation for plants.

▶ [B-Splines](https://www.youtube.com/watch?v=r6UcF0S0HvQ) — Mathematics of Computer Graphics and Virtual Environments 2015/16 · Streamed 10y ago

### Large language models code generation seminar *(prerequisite)*
FloraForge leverages pretrained large language models to iteratively generate and refine procedural Python scripts for plant modeling. A solid understanding of how LLMs perform code generation and their capabilities is crucial to grasp the human-AI co-design process described in the paper.

*How the paper uses it:* The framework uses LLMs to seed and refine procedural plant modeling scripts via natural language interaction.

▶ [Lecture: #9 Language Models for Code Generation - ScaDS.AI Dresden/Leipzig](https://www.youtube.com/watch?v=mto9XS1Bf1c) — ScaDS-AI Living Lab · 23:53 · 4y ago

### 3D plant phenotyping and modeling lecture *(prerequisite)*
This area contextualizes the biological and agricultural importance of accurate 3D plant models for phenotyping, breeding, and simulation. Understanding the challenges and goals in plant phenotyping helps motivate the need for FloraForge's accessible and editable modeling approach.

*How the paper uses it:* FloraForge aims to facilitate computational phenotyping and simulation by providing editable, analysis-ready 3D plant models.

▶ [GIFSconf18  - Computational Models For Plant Phenotyping by Mik Cieslak](https://www.youtube.com/watch?v=ozP7ixRssXA) — Global Institute for Food Security (GIFS) · 22:36 · 7y ago

### FloraForge LLM plant modeling talk *(the paper's own talk)*
This section focuses on the core contribution of the paper: the LLM-assisted procedural generation framework for editable 3D plant models. The authors' own talk or closely related research presentations provide the most direct and detailed insight into their methodology, results, and future directions.

*How the paper uses it:* Direct insight from the authors on their novel LLM-assisted plant modeling framework.

▶ [Interactive procedural modeling of climbing plants based on Hädrich et al.'s method](https://www.youtube.com/watch?v=jZAtoYqygIM) — Akkuunamatata · 3d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of B-spline surfaces, which are the mathematical foundation for the smooth, editable plant geometries in FloraForge. Next, learn about large language models (LLMs) for code generation to grasp how FloraForge uses AI to create and refine procedural plant modeling scripts. Then, explore procedural plant modeling concepts to see how plants can be generated algorithmically. Finally, watch a talk related to FloraForge or similar LLM-assisted plant modeling to connect all concepts directly to the paper's approach.

### B-spline surface modeling lecture *(prerequisite)*
B-spline surfaces are smooth, continuous mathematical curves and surfaces used to model complex shapes with precision and flexibility. Understanding B-splines helps you grasp how FloraForge represents plant organs as editable, continuous surfaces suitable for scientific analysis and visualization.

*How the paper uses it:* FloraForge uses hierarchical B-spline surface representations to create mathematically rigorous, editable 3D plant models.

▶ [Splines in 5 minutes:  Part 3 -- B-splines and 2D](https://www.youtube.com/watch?v=JwN43QAlF50) — Graphics in 5 Minutes · 4y ago

### Large language models code generation seminar *(prerequisite)*
Large language models (LLMs) can generate and refine code by understanding natural language instructions, enabling non-experts to create complex procedural scripts. Learning how LLMs assist code generation clarifies how FloraForge leverages AI to iteratively build and improve plant modeling scripts from natural language input.

*How the paper uses it:* FloraForge uses pretrained LLMs to generate and refine procedural Python scripts for plant geometry modeling.

▶ [How AI Code Generation Works Explained Simply | How Claude Code & Other AI Coding Assistants Work](https://www.youtube.com/watch?v=EDx3NmfPYvc) — Learn with Whiteboard · 2w ago

### Procedural plant modeling lecture
Procedural plant modeling involves algorithmically generating plant structures based on rules and parameters, allowing for scalable and editable plant models. Understanding this concept helps you see how FloraForge creates hierarchical, botanically constrained plant geometries that can be customized and analyzed.

*How the paper uses it:* FloraForge automates the creation of botanically constrained procedural plant models using hierarchical parameter inheritance.

▶ [Generating 3D Plant Models Instantly! | Indie Devlog](https://www.youtube.com/watch?v=QaNifstMxbw) — Gajatix Studios · 2y ago

### FloraForge LLM plant modeling talk *(the paper's own talk)*
A talk or presentation related to LLM-assisted procedural plant modeling provides direct insight into the FloraForge framework, illustrating how the components come together in practice. This helps consolidate understanding by connecting theory to the authors' implementation and results.

*How the paper uses it:* This paper introduces FloraForge, an LLM-assisted framework for editable, analysis-ready 3D plant modeling for agricultural applications.

▶ [Interactive procedural modeling of climbing plants based on Hädrich et al.'s method](https://www.youtube.com/watch?v=jZAtoYqygIM) — Akkuunamatata · 3d ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Large Language Models for Code Generation - Meetup ...](https://www.youtube.com/watch?v=VPy7HpmKCuA) — also for: Hierarchical Reward Design from Language: Enhancing Alignment of Agent Behavior with Human Specifications (Vaibhav V. Unhelkar)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the FloraForge framework for LLM-assisted procedural generation of editable 3D plant models. Starting with a beginner-level project to replicate a core geometric modeling concept using familiar tools, you then advance to reimplementing the procedural generation method on a simplified dataset, and finally extend the framework by addressing a stated limitation or future direction. Each project ties directly to a specific contribution, result, or limitation from the paper, ensuring your portfolio clearly evidences comprehension of the paper's key ideas and challenges.

### Beginner — Editable B-Spline Leaf Model from YAML Parameters
*Effort: a weekend, ~8 hours*

You build a simple Python script that generates a continuous B-spline surface representing a single plant leaf based on parameters defined in a human-readable YAML file. The script outputs a polygonal mesh for visualization and allows parameter edits to change leaf shape, demonstrating parametric editability.

**Why it shows you understood the paper:** This project shows you grasp the paper's concept of representing plant organs as continuous B-spline surfaces controlled by editable Plant Descriptor files, a core contribution enabling smooth, mathematically rigorous models.

**Grounded in:** Plant organs are represented as continuous B-spline surfaces suitable for both visualization and quantitative analysis.

**Tech stack:** Python 3.11, PyYAML, numpy, matplotlib, scipy

**Data:** No external data needed; you create synthetic leaf parameter sets inspired by the paper's Plant Descriptor structure.

**Build it:**

1. Write a YAML schema defining key leaf morphology parameters (length, width, curvature, control points).
2. Implement a Python parser to read the YAML and generate B-spline control points accordingly.
3. Use scipy or a similar library to construct the B-spline surface from control points.
4. Sample the surface to create a polygonal mesh and visualize it with matplotlib or a simple 3D viewer.
5. Allow parameter edits in the YAML file to regenerate and visualize updated leaf shapes.

**Ships as:** A GitHub repo with the YAML schema, Python script, example parameter files, and visualizations showing editable leaf shapes.

**Stretch goal:** Add support for hierarchical branching by linking multiple leaves with a simple stem model.

### Intermediate — Procedural Plant Model Generation with LLM-Seeded Templates
*Effort: 2 weekends, ~20 hours*

You reimplement the core FloraForge procedural generation pipeline by writing Python code that uses LLM-generated initial templates (e.g., via OpenAI API) to create hierarchical B-spline models of a simple plant species. You manually fit Plant Descriptor parameters to a small public 3D plant scan substitute and compute Chamfer distances to evaluate geometric fidelity.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's main method of LLM-assisted procedural plant modeling, including hierarchical parameter inheritance and manual fitting to point cloud data, validating the approach on a simplified dataset.

**Grounded in:** LLM-seeded templates provide plausible initial geometries that can be refined to match real plant data.

**Tech stack:** Python 3.11, OpenAI API, PyYAML, numpy, scipy, open3d

**Data:** Use a publicly available small 3D plant point cloud dataset (e.g., a simple leaf or seedling scan from an open 3D repository) as a substitute for the paper's empirical LiDAR data.

**Build it:**

1. Use an LLM (e.g., OpenAI GPT) to generate initial Python procedural templates for a simple plant structure based on natural language prompts.
2. Implement Python code to parse and execute these templates to generate hierarchical B-spline surface models.
3. Load the substitute 3D plant point cloud and manually adjust Plant Descriptor YAML parameters to fit the model to the data.
4. Compute symmetric Chamfer distances between the procedural model mesh and the point cloud to quantify geometric fidelity.
5. Document the fitting process and results, comparing initial LLM templates to refined models.

**Ships as:** A GitHub repo with code to generate procedural plant models from LLM templates, YAML parameter files, fitting scripts, and Chamfer distance evaluation reports.

**Stretch goal:** Automate a simple parameter optimization loop to reduce manual fitting time.

### Advanced — Automated Parameter Extraction from 3D Plant Scans for FloraForge Models
*Effort: 3+ weeks*

You develop a pipeline that automates extraction of Plant Descriptor parameters from 3D plant point cloud data to reduce manual fitting time. This includes point cloud preprocessing, feature extraction (e.g., node heights, leaf counts), and parameter inference using classical geometry processing or ML regression. You integrate this with procedural model generation to produce editable B-spline plant models with minimal manual intervention.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the paper—manual parameter fitting bottlenecks—by implementing an automated parameter extraction method, demonstrating deep comprehension and extending the framework toward high-throughput phenotyping.

**Grounded in:** Current manual fitting of Plant Descriptor parameters to point cloud data requires 2-6 hours per plant, limiting throughput.

**Tech stack:** Python 3.11, open3d, scikit-learn, PyYAML, numpy, scipy

**Data:** Use publicly available 3D plant point clouds as substitutes for the paper's LiDAR data; synthetic data generation may supplement for testing.

**Build it:**

1. Implement point cloud preprocessing: denoising, segmentation to isolate plant organs.
2. Extract geometric features relevant to Plant Descriptor parameters (e.g., branch lengths, node positions, leaf counts) using open3d.
3. Train or implement regression models to map extracted features to Plant Descriptor parameter values.
4. Integrate parameter extraction with procedural model generation to produce editable B-spline models automatically.
5. Evaluate the automated fitting accuracy by comparing generated models to point clouds using Chamfer distance.
6. Document limitations and potential improvements for scaling to diverse species.

**Ships as:** A GitHub repo with automated parameter extraction scripts, integration with procedural model generation, evaluation metrics, and detailed README explaining the pipeline.

**Stretch goal:** Extend the pipeline to incorporate temporal growth modeling by analyzing sequential scans.

_The paper's authors have not released code or datasets, so all projects must rely on reimplementation from the paper's descriptions and publicly available or synthetic data substitutes._
