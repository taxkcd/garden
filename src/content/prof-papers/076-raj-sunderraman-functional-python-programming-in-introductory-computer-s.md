---
title: "076 · Functional Python Programming in Introductory Computer Science Courses — Raj Sunderraman"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-raj-sunderraman"
source_hash: "0fb1730f7d84a82cc3befa6f23ce9e7766271aea89338e9eb2d9424d03857c61"
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
