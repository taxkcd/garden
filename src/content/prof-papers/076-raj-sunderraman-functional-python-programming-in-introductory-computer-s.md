---
title: "076 · Functional Python Programming in Introductory Computer Science Courses — Raj Sunderraman"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-raj-sunderraman"
source_hash: "82fa2a8c86e58fcf4b57c8aed846bd9c2c69c9253126678d51bb3b4ac16b92e5"
sequence: 76
generator: "outreach-garden: managed"
---

# 076 · Functional Python Programming in Introductory Computer Science Courses

## At a glance

- **Professor:** Raj Sunderraman
- **Institution:** Georgia State University
- **Paper:** [Functional Python Programming in Introductory Computer Science Courses](https://arxiv.org/abs/2512.03492)
- **Authors:** Rajshekhar Sunderraman
- **Year:** 2025

## Paper overview

This paper advocates teaching functional programming concepts using a purely functional subset of Python in introductory computer science courses. It defines a restricted functional style in Python and demonstrates how students can learn immutability, pure functions, and stateless programming early in their education, even when using a traditionally imperative language like Python.

### Why it matters

**Research problem:** How to effectively introduce and teach functional programming principles in introductory programming courses that primarily use non-functional languages like Python.

**Why it matters:** Functional programming offers advantages such as robust, concise, and easy-to-understand code, better testing and debugging, thread safety, and fewer common programming errors. However, most introductory courses focus on imperative programming, missing early exposure to these benefits.

**Key contributions:**

- Definition of a purely functional subset of Python suitable for introductory courses.
- Presentation of best practice guidelines for teaching functional programming in Python.
- Examples illustrating functional programming solutions in Python, such as Caesar cipher encoding and twin primes.
- Design and deployment of a challenging CS2 programming assignment converting Datalog atoms to relational algebra expressions using functional style.
- Discussion of pedagogical benefits and student reception.

## About the professor

**Raj Sunderraman** — Professor and Associate Chair, Department of Computer Science, Georgia State University.

Research interests: theory and practice of Databases, Logic Programming, and the Semantic Web

### Research links

- [Faculty/profile page](http://tinman.cs.gsu.edu/~raj)
- [Resolved homepage](https://csds.gsu.edu/profile/raj-sunderraman/#genesis-content)
- [DBLP](https://dblp.org/pid/s/RSunderraman.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Functional Programming Principles
**The paper assumes:** functional programming concepts and principles
**Already in this field?** Skip this entirely if you already understand the core concepts and rationale behind functional programming.

To understand the pedagogical approach of teaching a purely functional subset of Python in introductory courses, it is essential to grasp the core principles of functional programming such as immutability, pure functions, and higher-order functions. The rigorous course option provides a comprehensive university-level introduction to programming fundamentals with some functional programming concepts, suitable for deep foundational understanding. The fast track offers a concise, focused introduction to functional programming concepts using Haskell, which, while a different language, clearly illustrates the core functional programming principles relevant to the paper's approach.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.00 Intro to Computer Science & Programming, Fall 2008](https://www.youtube.com/playlist?list=PL4C4720A6F225E074) — MIT OpenCourseWare · 24 videos · 19.8h across 24 episodes

**Watch only this:** Lectures 1-6, about 4.9 hours — covering introduction to programming, functions, recursion, and an introduction to functional programming concepts, which provide the foundational understanding needed for the paper's approach.

*Why it unblocks this paper:* MIT 6.00 Intro to Computer Science & Programming, Fall 2008 is a rigorous university course that introduces programming fundamentals including functional programming concepts such as pure functions, immutability, and higher-order functions, aligning well with the paper's focus on teaching a functional subset of Python in introductory courses.

*If you want all of it:* 19.8 hours across 24 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Intro to Functional Programming with Haskell Course](https://www.youtube.com/playlist?list=PLMWwct3_kb-2xtOziG1gQYMVr691GadR4) — LigerLearn · 6 videos · 3.7h across 6 episodes

**Watch only this:** Episodes 1-4, about 2.5 hours — covering lambda calculus primer, installing Haskell, an introduction for beginners, and algebraic data types, which cover the essential functional programming principles relevant to the paper.

*Why it unblocks this paper:* The 'Intro to Functional Programming with Haskell Course' by LigerLearn is a concise, well-structured series that introduces core functional programming concepts such as lambda calculus, pure functions, and algebraic data types in about 3.7 hours, providing a quick yet clear foundation complementary to the paper's focus.

*If you want all of it:* 3.7 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on teaching functional programming in Python for introductory courses, start by grounding yourself in the foundational principles of functional programming, including pure functions and immutability. Next, explore how Python supports functional programming techniques, focusing on higher-order functions and pure functions in Python. Then, gain context on teaching programming paradigms to appreciate the educational approach. Finally, focus on the paper's core contribution: the design and use of a purely functional subset of Python, including the author's own talk to get direct insights into the methodology and pedagogical outcomes.

### Functional Programming Principles *(prerequisite)*
This section covers the core theoretical concepts underpinning the paper's approach, such as pure functions, immutability, and side effects. Understanding these principles is essential to appreciate why the paper advocates a purely functional subset of Python and how it benefits programming robustness and clarity.

*How the paper uses it:* The paper emphasizes teaching pure functions and immutability early, so understanding these principles is foundational.

▶ [Functional Programming in 40 Minutes • Russ Olsen • GOTO 2018](https://www.youtube.com/watch?v=0if71HOyVjY) — GOTO Conferences · 41:35

### Python Functional Programming Techniques *(prerequisite)*
This section explores how Python supports functional programming constructs like higher-order functions, lambda expressions, and pure functions. It is crucial to understand these Python-specific techniques to grasp how the paper defines and enforces a functional subset within a traditionally imperative language.

*How the paper uses it:* The paper's approach relies on Python's functional features such as map, filter, reduce, and lambda expressions.

▶ [Daniel Kirsch - Functional Programming in Python](https://www.youtube.com/watch?v=r2eZ7lhqzNE) — PyData · 39:27

### Teaching Programming Paradigms *(prerequisite)*
Understanding how programming paradigms are taught provides context for the paper's educational strategy. This section discusses different paradigms, including functional programming, and how they can be introduced effectively in curricula, which informs the paper's pedagogical decisions.

*How the paper uses it:* The paper innovates in teaching functional programming early in the curriculum, so understanding paradigm teaching methods is relevant.

▶ [Programming Paradigms | Functional Programming | Object Oriented Programming | Logic | java world](https://www.youtube.com/watch?v=ySBTM-FKEtg) — Java World · 3 years ago

### Purely Functional Subset Design
This section focuses on the paper's core method: defining and using a purely functional subset of Python. It covers how to restrict imperative constructs and encourage functional style programming, which is central to the paper's contribution and teaching approach.

*How the paper uses it:* The paper's main contribution is the design of a purely functional subset of Python for introductory courses.

▶ [Functional Programming (Theory of Python) (Python Tutorial)](https://www.youtube.com/watch?v=SvK_GErE2nM) — Real Physics · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the foundational ideas behind functional programming principles such as pure functions and immutability, which are central to the paper's approach. Next, learn how Python supports functional programming techniques including higher-order functions and lambda expressions. Then, explore how programming paradigms differ to appreciate the educational context. Finally, focus on the paper’s core method: designing and using a purely functional subset of Python for teaching, which restricts imperative constructs and encourages functional style.

### Functional Programming Principles *(prerequisite)*
This section introduces core functional programming concepts like pure functions and immutability, which help produce robust and predictable code. Understanding these principles is essential because the paper’s approach relies on teaching these early to students using Python.

*How the paper uses it:* The paper emphasizes teaching immutability and pure functions early to build good programming habits.

▶ [What are "Pure Functions" and "Side Effects"?](https://www.youtube.com/watch?v=4IIWib5MZKg) — Academind · 5 years ago

### Python Functional Programming Techniques *(prerequisite)*
Learn how Python supports functional programming features such as higher-order functions (map, filter, reduce), lambda expressions, and immutable data structures. This knowledge is crucial to understand how the paper defines a functional subset within Python.

*How the paper uses it:* The paper’s functional subset uses Python’s functional features like comprehensions, lambdas, and higher-order functions.

▶ [How to Use Higher Order Functions in Python? | Map, Filter & ...](https://www.youtube.com/watch?v=ITl7jKtelZ4) — Kiran Academy - Python & Mern · 17:11

### Teaching Programming Paradigms *(prerequisite)*
This section explains what programming paradigms are and contrasts functional programming with other paradigms like imperative and object-oriented programming. This context helps appreciate why the paper advocates early functional programming education despite Python’s imperative roots.

*How the paper uses it:* The paper addresses challenges in teaching functional programming in a traditionally imperative language like Python.

▶ [What are Programming Paradigms?](https://www.youtube.com/watch?v=FGufrjzbiZw) — MrBrownCS · 7:06

### Purely Functional Subset Design
Focus here on how to restrict Python to a purely functional subset by disallowing assignments, loops, and conditionals, and encouraging pure functions and immutable data. This is the core method the paper uses to teach functional programming effectively in introductory courses.

*How the paper uses it:* The paper defines and uses a purely functional subset of Python as its main teaching approach.

▶ [Functional Programming (Theory of Python) (Python Tutorial)](https://www.youtube.com/watch?v=SvK_GErE2nM) — Real Physics · 6 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's core idea: teaching and practicing purely functional programming in Python within an introductory CS context. The beginner project reproduces a small functional programming example from the paper to show grasp of the functional subset design. The intermediate project implements the core method of the paper by creating a purely functional Python assignment similar to the Caesar cipher example, comparing it to an imperative baseline. The advanced project extends the paper by designing and evaluating an automated tool to help students adhere to the functional subset restrictions, addressing a stated limitation and future direction.

### Beginner — Functional Caesar Cipher in Pure Python
*Effort: a weekend, ~6 hours*

You build a purely functional implementation of the Caesar cipher in Python, following the paper's functional subset restrictions: no assignments, no loops or conditionals, using pure functions, comprehensions, and higher-order functions. This reproduces one of the paper's illustrative examples.

**Why it shows you understood the paper:** This project shows you understand how to write Python code in the restricted functional style defined by the paper, demonstrating immutability, pure functions, and use of functional constructs in a familiar problem.

**Grounded in:** Examples illustrating functional programming solutions in Python, such as Caesar cipher encoding

**Tech stack:** Python 3.11

**Data:** No external data needed; the project uses simple string inputs for Caesar cipher encoding.

**Build it:**

1. Read the paper section defining the functional subset of Python and the Caesar cipher example.
2. Implement a pure function that shifts characters by a given offset using comprehensions and map/filter as needed.
3. Avoid any variable reassignment, loops, or conditionals; use lambda expressions and higher-order functions.
4. Write tests to verify correctness on sample inputs.
5. Document in README how the implementation adheres to the functional subset.

**Ships as:** A GitHub repo with a Python script implementing the Caesar cipher in purely functional style, test cases, and a README explaining the functional restrictions used.

**Stretch goal:** Add a similar purely functional implementation of twin primes detection as another example from the paper.

### Intermediate — Purely Functional Python Assignment: Caesar Cipher vs Imperative
*Effort: 2 weekends, ~15 hours*

You reimplement the paper's core method by designing and coding a purely functional Python assignment based on the Caesar cipher example. You also implement a simple imperative baseline version. You compare the two styles on code metrics such as lines of code, readability (via comments), and testability (via unit tests).

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's functional subset design to a concrete assignment, reproducing its core teaching approach and evaluating the pedagogical tradeoffs between functional and imperative styles.

**Grounded in:** Definition of a purely functional subset of Python suitable for introductory courses and examples illustrating functional programming solutions in Python, such as Caesar cipher encoding

**Tech stack:** Python 3.11, pytest

**Data:** No external data; uses generated string inputs for Caesar cipher.

**Build it:**

1. Study the paper's functional subset restrictions and the Caesar cipher example in detail.
2. Implement a purely functional Python version of Caesar cipher adhering strictly to the subset rules.
3. Implement a straightforward imperative Python version of Caesar cipher using loops and assignments.
4. Write unit tests for both implementations to verify correctness.
5. Compare the two implementations on code length, clarity (via comments), and test coverage.
6. Write a report summarizing the comparison and reflecting on the teaching implications.

**Ships as:** A GitHub repo containing both functional and imperative Caesar cipher implementations, tests, and a comparative report in the README.

**Stretch goal:** Extend the assignment to include a functional implementation of twin primes detection and compare similarly.

### Advanced — Automated Tool to Enforce Functional Subset Restrictions in Python
*Effort: 3-4 weeks*

You design and implement a static analysis tool or linter that automatically checks Python code for adherence to the paper's purely functional subset restrictions (e.g., no assignments, no loops, no conditionals). You evaluate the tool on student-submitted code samples (simulated or collected) and report on its effectiveness in helping students comply with the functional style.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by creating an automated aid to reduce the initial difficulty students face and improve adherence to functional programming principles in Python.

**Grounded in:** The approach may be challenging for students initially due to restrictions on common imperative constructs like loops and conditionals; future direction: exploration of automated tools to assist students in adhering to the functional subset restrictions.

**Tech stack:** Python 3.11, ast (Python Abstract Syntax Tree module), pytest

**Data:** Simulated student Python code snippets written in both functional and imperative styles to test the tool.

**Build it:**

1. Review the paper's functional subset restrictions and common student errors described.
2. Design static analysis rules to detect disallowed constructs: assignments, loops, conditionals.
3. Implement a Python tool using the ast module to parse and analyze Python source files for violations.
4. Create a test suite with example Python scripts that both comply and violate the functional subset.
5. Evaluate the tool's accuracy and usability by running it on the test suite and sample student code.
6. Document the tool's usage, limitations, and potential integration into teaching workflows.

**Ships as:** A GitHub repo with the static analysis tool, test cases, example student code, and documentation on usage and evaluation results.

**Stretch goal:** Integrate the tool into a simple web interface or IDE plugin to provide real-time feedback to students.
