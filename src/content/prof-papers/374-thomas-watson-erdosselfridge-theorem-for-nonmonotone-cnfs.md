---
title: "374 · Erdős–Selfridge Theorem for Nonmonotone CNFs — Thomas Watson"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-thomas-watson"
source_hash: "3bc05be421aec0df0d7d12873c949c4d7aea758421d845f524966a089f48f9be"
sequence: 374
generator: "outreach-garden: managed"
---

# 374 · Erdős–Selfridge Theorem for Nonmonotone CNFs

## At a glance

- **Professor:** Thomas Watson
- **Institution:** University of Memphis
- **Paper:** [Erdős–Selfridge Theorem for Nonmonotone CNFs](https://arxiv.org/abs/2201.00968)
- **Authors:** Md Lutfar Rahman, Thomas Watson
- **Year:** 2022

## Paper overview

This paper generalizes the classical Erdős–Selfridge Theorem from monotone CNF formulas to nonmonotone CNFs in the context of a Maker-Breaker style game where two players alternately assign boolean values to variables. It establishes bounds on the minimum number of clauses in k-uniform CNFs where the 'Maker' player has a winning strategy, distinguishing cases based on which player moves last.

### Why it matters

**Research problem:** Determining the minimum number of clauses in a k-uniform CNF formula (not necessarily monotone) such that the Maker (false) player has a winning strategy in the Maker-Breaker game generalized to nonmonotone CNFs.

**Why it matters:** The original Erdős–Selfridge Theorem is a foundational result in combinatorics and theoretical computer science, influencing methods like conditional expectations. Extending it to nonmonotone CNFs addresses a natural and fundamental question given the prevalence of CNFs in theoretical computer science and the complexity of deciding winning strategies in such games.

**Key contributions:**

- Generalization of the Erdős–Selfridge Theorem to nonmonotone CNFs.
- Establishment of tight bounds Θ(2^k) when the false player moves last.
- Bounds Ω(1.5^k) and O(r^k) (where r ≈ 1.618 is the golden ratio) when the true player moves last.
- Development of new combinatorial and potential function techniques to analyze the unordered CNF game.
- Introduction of a zugzwang-based strategy for the player moving last in the nonmonotone setting.

## About the professor

**Thomas Watson** — Associate Professor, Computer Science, University of Memphis.

Research interests: Theoretical computer science, computational complexity

### Research links

- [Faculty/profile page](https://www.memphis.edu/cs/people/faculty_pages/thomas-watson.php)
- [Professor website](http://www.cs.memphis.edu/~twwtson1/)
- [Google Scholar](https://scholar.google.com/citations?user=8H9erioAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Combinatorial Game Theory
**The paper assumes:** combinatorial game theory, positional games, winning strategy analysis
**Already in this field?** Skip this entirely if you already understand combinatorial game theory concepts and positional games including Maker-Breaker games.

To understand the combinatorial game theory concepts underlying the Erdős–Selfridge Theorem generalization to nonmonotone CNFs, it is essential to grasp winning strategies, zugzwang, and potential function arguments in combinatorial games. The rigorous course option provides a structured, in-depth university lecture series on game theory fundamentals, while the fast track offers a concise, focused introduction to combinatorial game theory concepts for quicker comprehension. Choose the course for a thorough foundation and the fast track for a rapid, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [July 2019 Game Theory | Bombay](https://www.youtube.com/playlist?list=PLOzRYVm0a65fY-Vh8Caiv3wAYmDd7SnrN) — NPTEL IIT Bombay · 40 videos

**Watch only this:** Lectures 1-10, about 5 hours — covering fundamentals of combinatorial games, winning strategies, and introductory concepts necessary to understand zugzwang and potential function arguments.

*Why it unblocks this paper:* This NPTEL IIT Bombay course on Game Theory offers a comprehensive and rigorous university-level treatment of combinatorial game theory concepts relevant to analyzing Maker-Breaker style games and strategic reasoning, directly supporting the paper's combinatorial constructions and proofs.

*If you want all of it:* 40 lectures, approximately 20 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Combinatorial Game Theory](https://www.youtube.com/playlist?list=PLxYr6TaF_SDV5r6rmI0LDxuO48FPFb6Rk) — Knop's Course · 6 videos

**Watch only this:** Episodes 1-4, about 1 hour — covering basic definitions, examples of combinatorial games, and the concept of zugzwang.

*Why it unblocks this paper:* Knop's Course 'Introduction to Combinatorial Game Theory' is a concise and well-produced short series that introduces key combinatorial game theory concepts, including winning strategies and zugzwang, providing a quick but solid conceptual foundation for the paper's game-theoretic approach.

*If you want all of it:* 6 episodes, about 1.5 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Erdős–Selfridge Theorem for Nonmonotone CNFs," start by reviewing foundational concepts on CNF formulas and satisfiability to grasp the structure and semantics of CNFs. Then study the classical Erdős–Selfridge Theorem, which the paper generalizes, to understand the original combinatorial game setting and bounds. Finally, focus on the core concept of the paper, the nonmonotone CNF game and the new combinatorial techniques introduced, including the zugzwang strategy, by watching the authors' own talk or the closest available advanced presentation.

### CNF formulas and satisfiability *(prerequisite)*
Understanding CNF formulas and their satisfiability is essential as the paper studies combinatorial games played on k-uniform CNFs. This knowledge provides the basic language and framework for the problem, including literals, clauses, and uniformity.

*How the paper uses it:* The paper generalizes results about CNF formulas, so a solid grasp of CNF structure is foundational.

▶ [Constructing CNF Formulas](https://www.youtube.com/watch?v=MY5gF3J59w4) — Computer Science Theory Explained · 5y ago

### Erdős–Selfridge Theorem classical *(prerequisite)*
The classical Erdős–Selfridge Theorem is a cornerstone combinatorial result about monotone CNFs and winning strategies in Maker-Breaker games. Understanding its statement and proof techniques is crucial to appreciate the paper's generalization to nonmonotone CNFs.

*How the paper uses it:* The paper builds directly on the classical Erdős–Selfridge Theorem by extending it to a more general setting.

▶ [An algorithm and estimates for the Erdős-Selfridge function](https://www.youtube.com/watch?v=N9hR18mUjtE) — ANTS · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of CNF formulas and satisfiability, which are fundamental to the problem setting. Next, grasp the classical Erdős–Selfridge Theorem as it forms the foundation for the paper's generalization. Finally, explore the novel zugzwang strategy concept introduced in the paper to appreciate the new combinatorial techniques used.

### CNF formulas and satisfiability *(prerequisite)*
CNF (Conjunctive Normal Form) formulas are logical expressions structured as an AND of ORs of literals, fundamental in logic and computer science for expressing constraints and satisfiability problems. Understanding how CNFs represent boolean formulas and how satisfiability is determined is essential to follow the paper's game-theoretic analysis.

*How the paper uses it:* The paper studies winning strategies in games defined on k-uniform CNF formulas, so knowing CNF structure and satisfiability is foundational.

▶ [Conjunctive Normal Forms CNF with Examples - Logic - Discrete Mathematics](https://www.youtube.com/watch?v=D80oNidZ_ys) — Ekeeda · 4y ago

### Erdős–Selfridge Theorem classical *(prerequisite)*
The classical Erdős–Selfridge Theorem provides a combinatorial criterion for when a player has a winning strategy in a Maker-Breaker game on monotone CNF formulas. It is a cornerstone result connecting combinatorics and game theory, establishing tight bounds on clause counts for winning strategies.

*How the paper uses it:* This paper generalizes the Erdős–Selfridge Theorem from monotone to nonmonotone CNFs, so understanding the original theorem is crucial.

▶ [An algorithm and estimates for the Erdős-Selfridge function](https://www.youtube.com/watch?v=N9hR18mUjtE) — ANTS · 6y ago

### Zugzwang strategies in combinatorial games
Zugzwang is a concept from combinatorial games where having to move is a disadvantage, and players can exploit this to force favorable outcomes. Understanding zugzwang helps grasp the novel strategy introduced in the paper for the player moving last in the nonmonotone CNF game.

*How the paper uses it:* The paper introduces a zugzwang-based strategy to analyze the last-move player’s winning conditions in the generalized CNF game.

▶ [What is zugzwang in chess? (with example)](https://www.youtube.com/watch?v=FTgCGD_ASuE) — ChessGeek · 5y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the Erdős–Selfridge Theorem generalization to nonmonotone CNFs. The beginner project recreates a core combinatorial construction and winning strategy for the false player moving last. The intermediate project implements and empirically verifies the paper's bounds for the false player moving last case, using your existing programming skills and adding combinatorial algorithm implementation. The advanced project tackles a stated open problem by exploring the conjectured tight bound when the true player moves last, extending the paper's methods and potentially contributing new insights.

### Beginner — Simulate the Zugzwang Strategy for False Player Moving Last
*Effort: a weekend, ~8 hours*

You build a small command-line program that simulates the Maker-Breaker game on small k-uniform nonmonotone CNFs, focusing on the zugzwang-based strategy introduced for the false player (Maker) moving last. The program will allow input of small CNFs and demonstrate the zugzwang pairing and response mechanism described in the paper.

**Why it shows you understood the paper:** This project shows you grasp the novel zugzwang strategy concept and how it applies to the nonmonotone CNF game when the false player moves last, a key contribution of the paper.

**Grounded in:** The paper introduces a zugzwang-based strategy for the player moving last.

**Tech stack:** Python 3.11

**Data:** You synthesize small example k-uniform CNFs (k=3 or 4) manually based on the paper's combinatorial constructions.

**Build it:**

1. Implement a data structure to represent k-uniform CNF formulas with positive and negative literals.
2. Implement the Maker-Breaker game logic where two players alternately assign boolean values to variables without order constraints.
3. Implement the zugzwang strategy for the false player moving last, including identifying zugzwang pairs and responding accordingly.
4. Create example CNFs (k=3 or 4) from the paper's descriptions to test the strategy.
5. Run simulations demonstrating the false player winning using the zugzwang strategy.
6. Document the code and explain how the zugzwang strategy works in the README.

**Ships as:** A Python script with example CNFs and simulation outputs showing the zugzwang strategy in action, plus a README explaining the strategy and its significance.

**Stretch goal:** Add a visualization of the game state and zugzwang pairs using a simple web UI or terminal graphics.

### Intermediate — Reimplement and Empirically Verify Clause Bounds for False Player Last Move
*Effort: 2 weekends, ~20 hours*

You implement the core combinatorial constructions and potential function arguments from the paper to generate k-uniform CNFs where the false player has a winning strategy when moving last. You empirically verify the Θ(2^k) clause bound by generating CNFs for increasing k and checking the winning strategy correctness.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's theoretical bounds into concrete algorithmic constructions and verify them experimentally, showing deep comprehension of the main result for the false player moving last case.

**Grounded in:** If the false player (Maker) moves last, the minimum number of clauses in a k-uniform CNF where Maker wins is Θ(2^k).

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** You generate synthetic k-uniform CNFs programmatically based on the paper's combinatorial constructions; no external dataset is needed.

**Build it:**

1. Implement a generator for k-uniform CNFs following the paper's explicit constructions for the false player moving last.
2. Implement the Maker-Breaker game simulation to verify if the false player has a winning strategy on generated CNFs.
3. Run experiments for k from 2 up to 7 or 8, recording the number of clauses and verifying the winning strategy.
4. Plot the clause counts against k to empirically confirm the Θ(2^k) growth.
5. Write a Jupyter Notebook documenting the implementation, experiments, and results.
6. Discuss any deviations or challenges encountered compared to the paper's theoretical claims.

**Ships as:** A Jupyter Notebook with code, plots, and explanations showing empirical verification of the clause bounds for the false player moving last.

**Stretch goal:** Extend the implementation to simulate the true player moving last case and compare empirical clause counts to the paper's bounds.

### Advanced — Explore the Conjectured Tight Bound for True Player Moving Last
*Effort: 3-4 weeks*

You develop new combinatorial constructions and potential function implementations inspired by the paper to investigate the open problem of the exact asymptotic clause bound when the true player moves last. You attempt to tighten the current Ω(1.5^k) and O(r^k) bounds, possibly by implementing and testing variants of the zugzwang strategy or new inductive arguments.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating your ability to extend foundational combinatorial game theory results and engage with open research questions.

**Grounded in:** The exact tight bound for the case when the true player moves last is conjectured but not fully resolved.

**Tech stack:** Python 3.11, Jupyter Notebook, Matplotlib or Plotly

**Data:** Synthetic k-uniform CNFs generated programmatically based on your own combinatorial constructions and adaptations of the paper's methods.

**Build it:**

1. Study the paper's proofs and conjectures regarding the true player moving last case in detail.
2. Implement baseline CNF generators and game simulations for this case.
3. Design and implement new combinatorial constructions or adaptations of the zugzwang strategy to attempt to improve the bounds.
4. Run experiments to test if your constructions yield smaller or larger clause counts supporting tighter bounds.
5. Document your approach, experiments, and any partial results or insights in a detailed Jupyter Notebook.
6. Prepare a summary README discussing the open problem, your methods, and potential next steps.

**Ships as:** A comprehensive repository with code, notebooks, and documentation exploring the conjectured tight bound for the true player moving last, suitable for discussion with the paper's authors.

**Stretch goal:** Attempt to formalize your findings into a draft technical note or blog post to share with the research community.
