---
title: "727 · Recipe Networks and the Principles of Healthy Food on the Web — Charalampos Chelmis"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-charalampos-chelmis"
source_hash: "5931dafaf526c203156822d356dc7b2fdf585f89f66e7b27106c08bfdd67ff6a"
sequence: 727
generator: "outreach-garden: managed"
---

# 727 · Recipe Networks and the Principles of Healthy Food on the Web

## At a glance

- **Professor:** Charalampos Chelmis
- **Institution:** University at Albany - SUNY
- **Paper:** [Recipe Networks and the Principles of Healthy Food on the Web](https://ojs.aaai.org/index.php/ICWSM/article/download/22129/21908)
- **Authors:** Charalampos Chelmis, Bedirhan Gergin
- **Year:** 2023

## Paper overview

This paper studies how people use online recipes and proposes a new way to recommend healthier food choices by finding similar recipes that are healthier rather than just substituting ingredients. The authors build large networks of recipes based on shared ingredients and analyze these networks to discover patterns that can help recommend healthier alternatives efficiently.

### Why it matters

**Research problem:** Popular online recipes often tend to be unhealthy, containing high levels of fat, sugar, cholesterol, and calories. Existing food recommendation systems focus mainly on ingredient substitution to promote healthier eating, but identifying healthier recipe substitutions as a whole remains challenging.

**Why it matters:** Millions of people rely on online recipes for meal planning and dietary decisions. Improving the healthiness of recommended recipes can positively impact public health by encouraging healthier eating habits and reducing diet-related diseases.

**Key contributions:**

- Creation of large-scale recipe networks based on ingredient overlap and similarity.
- Identification of a healthiness paradox where neighbors of a recipe tend to be healthier on average.
- Demonstration that healthier recipe substitutions can be efficiently found within a recipe's network neighborhood.
- Analysis of rating paradox showing that similar recipes to low-rated ones tend to have higher ratings.
- Provision of a new perspective for food recommendation systems focusing on recipe substitution rather than just ingredient substitution.

## About the professor

**Charalampos Chelmis** — Associate Professor, Department of Computer Science, University at Albany - SUNY.

Research interests: data-intensive computing involving high-dimensional and or interrelated data, and social good applications

### Research links

- [Faculty/profile page](https://www.cs.albany.edu/~cchelmis)
- [Lab website](https://www.cs.albany.edu/~cchelmis/ideaslab.html)
- [Google Scholar](https://scholar.google.com/citations?user=-NTZR-kAAAAJ&hl=en)
- [GitHub](https://github.com/IDIASLab)
- [LinkedIn](https://www.linkedin.com/in/chelmischaralampos/)
- [Social profile](https://twitter.com/cchelmis)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph theory and network analysis
**The paper assumes:** graph theory, network analysis, and graph-based similarity measures
**Already in this field?** Skip this entirely if you already understand graph theory fundamentals and how to analyze large networks in computer science or data science contexts.

This background focuses on graph theory and network analysis, essential for understanding the construction and analysis of large-scale recipe networks in the paper. The rigorous course offers a deep, structured university-level introduction to graph theory concepts, while the fast track provides a concise, intuition-driven overview suitable for quickly grasping key ideas without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Graph Theory - Soumen Maity | IISER - NPTEL](https://www.youtube.com/playlist?list=PLEAYkSg4uSQ2fXcfrTGZdPuTmv98bnFY5) — Rahul Madhavan · 39 videos · 20.9h across 39 episodes

**Watch only this:** Episodes 1-8 (Basic Concepts, Eulerian and Hamiltonian Graph, Bipartite Graph, Diameter of a graph, Isomorphic graphs), about 4.3 hours — these cover core graph theory concepts needed to understand recipe network structure and analysis.

*Why it unblocks this paper:* This playlist by Soumen Maity from IISER covers fundamental graph theory concepts with sound theoretical coverage, directly relevant to understanding network construction, connectivity, and graph properties used in the paper's recipe networks.

*If you want all of it:* All 39 episodes, about 20.9 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Network Science and Graph Theory](https://www.youtube.com/playlist?list=PLT2d9x00G4lkueRrzpAnrs2mwCJGO3JR7) — Katherine Carl, PhD · 13 videos · 2.8h across 13 episodes

**Watch only this:** Episodes 1-6 (Scale Free Networks, Zachary's Karate Club Network Assignment, Network Science - Communities, The Barabasi Albert Model, Network Evolution, Install Python 3, Atom, NetworkX for Mac OS), about 1.2 hours — these give a solid intuitive foundation on network concepts and practical tools.

*Why it unblocks this paper:* This short series by Katherine Carl, PhD, provides clear, visual explanations of network science and graph theory fundamentals, including network properties and community structure, which are crucial for quickly grasping the paper's network analysis approach.

*If you want all of it:* All 13 episodes, about 2.8 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Recipe Networks and the Principles of Healthy Food on the Web," start with foundational knowledge in graph theory and network science to grasp the mathematical and structural basis of recipe networks. Next, learn about Jaccard similarity as it is the key metric used to define edges between recipes. Then, explore network analysis techniques specifically applied to recipe similarity to understand how the authors model and analyze recipe relationships. Finally, focus on the paper's core concept by reviewing the authors' own talk or closest academic-level content on recipe networks and healthy food recommendations.

### Graph Theory and Network Science *(prerequisite)*
Graph theory and network science provide the mathematical framework and tools to model and analyze complex systems like recipe networks. Understanding concepts such as nodes, edges, degree distributions, and network properties is essential to appreciate how the authors construct and interpret large-scale recipe networks.

*How the paper uses it:* The paper builds large-scale recipe networks and analyzes their structural properties to discover healthiness and rating paradoxes.

▶ [A gentle introduction to network science: Dr Renaud Lambiotte, University of Oxford](https://www.youtube.com/watch?v=L6CqqlILBCI) — The Alan Turing Institute · 1:40:43 · 8y ago

### Jaccard Similarity and Set-Based Metrics *(prerequisite)*
Jaccard similarity is a set-based metric used to quantify the similarity between two sets—in this case, ingredient lists of recipes. It is crucial for understanding how the authors define edges between recipes in their networks based on shared ingredients.

*How the paper uses it:* The authors use Jaccard similarity to define edges between recipes, enabling the construction of similarity-based recipe networks.

▶ [Data Mining (Spring 2023) – k-grams and Jaccard similarity](https://www.youtube.com/watch?v=Um41Ew6dN80) — UofU Data Science · 1:20:21 · Streamed 3y ago

### Network Analysis of Recipe Similarity
This concept covers the application of network analysis techniques to model and analyze relationships between recipes based on ingredient similarity. It helps understand how the authors identify patterns such as the healthiness paradox and rating paradox within the recipe networks.

*How the paper uses it:* The paper analyzes large recipe networks to discover paradoxes and patterns that inform healthier recipe substitution recommendations.

▶ [Chun Yuen Teng - Recipe Recommendation Using Ingredient Networks](https://www.youtube.com/watch?v=_1yIERPxIVE) — SonicNU · 9:28 · 12y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on recipe networks and healthy food recommendations, start by learning the foundational concepts of graph theory and network science to grasp how recipes are modeled as networks. Next, study Jaccard similarity as the key measure used to connect recipes based on shared ingredients. Then, explore network analysis techniques to understand how these recipe relationships reveal healthiness patterns. Finally, review the basics of food recommendation systems and nutrition healthiness metrics to see how these insights apply to recommending healthier recipes.

### Graph Theory and Network Science *(prerequisite)*
Graph theory studies networks made of nodes (points) and edges (connections), providing tools to analyze complex interconnected systems. Network science applies these tools to real-world data, revealing patterns like clusters and hubs that help understand relationships and dynamics.

*How the paper uses it:* The paper models recipes as nodes and their ingredient overlaps as edges, relying on graph theory to analyze the large-scale recipe networks.

▶ [A gentle introduction to network science: Dr Renaud Lambiotte, University of Oxford](https://www.youtube.com/watch?v=L6CqqlILBCI) — The Alan Turing Institute · 1:40:43 · 8y ago

### Jaccard Similarity and Set-Based Metrics *(prerequisite)*
Jaccard similarity measures how similar two sets are by dividing the size of their intersection by the size of their union. It is a simple, intuitive way to quantify overlap, often used to compare ingredient lists or other categorical data.

*How the paper uses it:* The paper uses Jaccard similarity to define edges between recipes based on shared ingredients, forming the basis of the recipe networks.

▶ [Jaccard Similarity explained with examples | Science in Data](https://www.youtube.com/watch?v=96v3YO_fYI0) — Science in Data · 25:41 · 3y ago

### Network Analysis of Recipe Similarity
Network analysis techniques help explore how nodes relate to each other beyond direct connections, identifying clusters, paradoxes, and patterns in similarity and attributes. This reveals insights like healthier recipes clustering together or neighbors being healthier on average.

*How the paper uses it:* The authors analyze the constructed recipe networks to discover healthiness and rating paradoxes, showing how healthier recipes cluster near less healthy ones.

▶ [Chun Yuen Teng - Recipe Recommendation Using Ingredient Networks](https://www.youtube.com/watch?v=_1yIERPxIVE) — SonicNU · 9:28 · 12y ago

### Food Recommendation Systems
Food recommendation systems suggest recipes or meals based on user preferences, nutritional goals, or similarity to known items. Understanding these systems provides context for how recipe substitution can improve healthiness recommendations.

*How the paper uses it:* The paper proposes a new perspective for food recommendation focusing on substituting entire recipes rather than just ingredients to promote healthier eating.

▶ [Towards a Knowledge-aware Food Recommender System Exploiting Holistic User Models](https://www.youtube.com/watch?v=RX_hlApgdoY) — ACM SIGCHI · 11:07 · 6y ago

### Healthiness Metrics in Nutrition Informatics
Healthiness metrics quantify the nutritional quality of food items or recipes, often based on standards like USDA or FSA scores. These metrics enable objective comparison of recipes' health impacts.

*How the paper uses it:* The study uses USDA and FSA healthiness scores to evaluate and compare recipes within the networks, underpinning the healthiness paradox findings.

▶ [Lecture 2 Introduction to nutritionist (Nutrition assessment & Planning and Personalization) Part B](https://www.youtube.com/watch?v=E0xjoWIzgcs) — ITLS ACADEMY · 1:19:47 · 2w ago

## Already in your library

- [Introduction to Graph Theory | Basics of Graph Theory | Imp for GATE and UGC NET](https://www.youtube.com/watch?v=5eKDQmTzX2A) — also for: Graph Theoretic Approach to QoS Guaranteed Spectrum Allocation in Cognitive Radio Networks (Kenneth A. Berman)
- [Introduction to Graph Theory: A Computer Science Perspective](https://www.youtube.com/watch?v=LFKZLXVO-Dg) — also for: Algebraic Vertex Ordering of a Sparse Graph for Adjacency Access Locality and Graph Compression (Xiaobai Sun)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's core ideas about recipe networks and healthy recipe recommendations. The beginner project reproduces a key network metric on a small scale to grasp the healthiness paradox. The intermediate project implements the core recipe network construction and healthiness analysis on a smaller dataset, comparing to a baseline. The advanced project extends the paper by developing and evaluating a prototype algorithm for recommending healthier recipe substitutions, addressing a stated future direction.

### Beginner — Small-scale Recipe Network and Healthiness Paradox
*Effort: a weekend, ~8 hours*

You build a small recipe network from a limited set of recipes (e.g., 100-200) with shared ingredients as edges using Jaccard similarity. Then you compute and visualize the average healthiness scores of neighbors for each recipe to reproduce the healthiness paradox on a manageable scale.

**Why it shows you understood the paper:** This project shows you understand how to construct recipe similarity networks and the key healthiness paradox result that neighbors tend to be healthier on average.

**Grounded in:** Key result: "Given any recipe, its neighboring recipes in the network are on average healthier (healthiness paradox)."

**Tech stack:** Python 3.11, NetworkX, Pandas, Matplotlib or Seaborn

**Data:** Use a small subset of publicly available recipe data with ingredient lists and nutritional info (e.g., scrape or manually collect ~100 recipes from Allrecipes.com or a similar source).

**Build it:**

1. Collect or curate a small dataset of recipes with ingredient lists and healthiness scores (e.g., USDA or FSA scores).
2. Compute pairwise Jaccard similarity between recipes based on ingredients and build a graph where edges represent similarity above a threshold.
3. Calculate average healthiness scores of neighbors for each recipe.
4. Visualize the distribution of recipe healthiness vs. neighbors' average healthiness to demonstrate the paradox.
5. Write a README explaining the healthiness paradox and how your code reproduces it.

**Ships as:** A GitHub repo with code to build and analyze a small recipe network, visualizations showing the healthiness paradox, and a clear README explaining the findings.

**Stretch goal:** Add interactive visualization with a web frontend (React) to explore recipes and their neighbors' healthiness.

### Intermediate — Reimplement Recipe Networks and Healthiness Analysis
*Effort: 1-3 weekends, ~20 hours*

You reimplement the core method of constructing large-scale recipe networks from a publicly available recipe dataset (substitute for RecipeKG) using shared ingredients and Jaccard similarity. Then you analyze the healthiness paradox and rating paradox, comparing results to a simple baseline such as random neighbor selection.

**Why it shows you understood the paper:** This project demonstrates your ability to scale up network construction and replicate the paper's main analytical findings, showing comprehension of the network-based approach to healthier recipe recommendations.

**Grounded in:** Key contributions: "Creation of large-scale recipe networks based on ingredient overlap and similarity." and "Identification of a healthiness paradox where neighbors of a recipe tend to be healthier on average."

**Tech stack:** Python 3.11, NetworkX or graph-tool, Pandas, NumPy, Matplotlib or Seaborn

**Data:** Use a publicly available recipe dataset such as the Recipe1M dataset (a large-scale dataset of recipes with ingredients and nutritional info) as a substitute for RecipeKG.

**Build it:**

1. Download and preprocess the Recipe1M dataset or similar, extracting ingredient lists and healthiness scores.
2. Implement pairwise Jaccard similarity computation and build a recipe network graph with edges above a threshold.
3. Compute and analyze the healthiness paradox: compare each recipe's healthiness to the average healthiness of its neighbors.
4. Analyze the rating paradox similarly if rating data is available.
5. Compare these results to a baseline where neighbors are chosen randomly.
6. Document the methodology, results, and insights in a detailed README.

**Ships as:** A GitHub repo with code to build and analyze large-scale recipe networks, scripts to reproduce healthiness and rating paradox analyses, and a report comparing to baseline.

**Stretch goal:** Add a simple command-line tool to query healthier neighbors for any given recipe.

### Advanced — Prototype Algorithm for Healthier Recipe Substitution Recommendations
*Effort: a few weeks, ~40+ hours*

You develop and empirically evaluate an algorithm that recommends healthier recipe substitutions by searching the recipe network neighborhood for healthier alternatives, addressing the paper's limitation of not implementing such algorithms. You incorporate healthiness scores and optionally user ratings to rank candidate substitutions and evaluate recommendation quality on a public dataset.

**Why it shows you understood the paper:** This project tackles a key future direction from the paper by moving beyond analysis to algorithmic recommendation, demonstrating deep understanding of the network structure, healthiness paradox, and practical recommendation challenges.

**Grounded in:** Future direction: "Develop and empirically evaluate algorithmic solutions for recommending healthier recipe substitutions." and Limitation: "The work does not implement or empirically evaluate actual recipe substitution recommendation algorithms."

**Tech stack:** Python 3.11, NetworkX or graph-tool, Pandas, Scikit-learn, Matplotlib or Seaborn

**Data:** Use the Recipe1M dataset or a similar public recipe dataset with ingredient lists, healthiness scores, and ratings as a substitute for RecipeKG.

**Build it:**

1. Preprocess the dataset to build a recipe network based on ingredient overlap and Jaccard similarity.
2. Design an algorithm that, given a recipe, searches its network neighborhood to find healthier recipes with similar ingredients.
3. Incorporate recipe ratings to prioritize highly rated healthier substitutions.
4. Implement evaluation metrics such as average healthiness improvement and rating comparison between original and recommended recipes.
5. Run experiments comparing your algorithm to simple baselines like random substitution or ingredient-level substitution.
6. Document the algorithm design, evaluation results, and discuss limitations and potential user acceptance.

**Ships as:** A GitHub repo with code implementing the recommendation algorithm, evaluation scripts, and a comprehensive README detailing methodology, results, and future work.

**Stretch goal:** Conduct a small user study or survey to gather feedback on the acceptability of recipe substitutions recommended by your algorithm.
