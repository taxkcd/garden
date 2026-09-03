---
title: "544 · Drafter: A Python Library for Full-Stack Web Development in CS1 — Austin Cory Bart"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-austin-cory-bart"
source_hash: "460a44373515f32e45f3d9c8d1450bdac30451ca46740580a9733bb9315f49ac"
sequence: 544
generator: "outreach-garden: managed"
---

# 544 · Drafter: A Python Library for Full-Stack Web Development in CS1

## At a glance

- **Professor:** Austin Cory Bart
- **Institution:** University of Delaware
- **Paper:** [Drafter: A Python Library for Full-Stack Web Development in CS1](https://doi.org/10.1145/3641554.3701874)
- **Authors:** Austin Cory Bart, Nazim Karaca
- **Year:** 2025

## Paper overview

This paper presents Drafter, an open-source Python library designed to enable novice computer science students in introductory courses (CS1) to develop full-stack web applications easily. Drafter simplifies web development by using pure functions, minimal boilerplate, and Python-only code, avoiding the need to learn HTML, CSS, or JavaScript. It supports good programming practices like decomposition and unit testing, provides rich debugging and testing tools, and allows deployment via GitHub Pages. The tool was successfully integrated into CS1 courses, helping students create meaningful web projects while reinforcing core programming concepts.

### Why it matters

**Research problem:** Teaching web development in introductory computer science courses (CS1) is challenging because existing web technologies and frameworks require knowledge of multiple languages (HTML, CSS, JavaScript) and concepts that are beyond the scope of beginners. Many frameworks also rely on global mutable state and complex setups that conflict with CS1 teaching principles.

**Why it matters:** Web applications are the most common user interfaces students encounter, and integrating web development into CS1 could increase motivation and engagement. However, the complexity and cognitive load of existing web frameworks prevent their effective use in introductory courses, limiting students' exposure to relevant, modern programming contexts.

**Key contributions:**

- Identification of design issues in novice web frameworks for CS1 contexts
- Development of Drafter, a Python library enabling web development with pure functions and minimal boilerplate
- Pedagogical features including scaffolded unit testing, program state visualization, and enhanced error messages
- Provision of educational materials such as a Quick Start Guide, workbook, and deployment instructions
- Reflection on the integration and use of Drafter in actual CS1 courses with hundreds of students

## About the professor

**Austin Cory Bart** — Associate Professor, University of Delaware.

Research interests: Computing Foundations, Human-Computer Interaction and Education

### Research links

- [Faculty/profile page](https://www.cis.udel.edu/people/faculty-profile/?id=261)
- [Professor website](https://acbart.com/)
- [Resolved homepage](https://acbart.github.io/acbart@udel.edu)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=gAQVtfcAAAAJ)
- [DBLP](https://dblp.org/pid/141/9291.html)
- [GitHub](https://github.com/acbart)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Functional programming in Python
**The paper assumes:** functional programming concepts in Python, pure functions, Python dataclasses, state management in functional style, unit testing in Python
**Already in this field?** Skip this entirely if you already understand functional programming principles in Python and how to use dataclasses and unit testing effectively.

To understand the functional programming principles underpinning Drafter, especially its use of pure functions, state management with dataclasses, and unit testing in Python, this background provides two viewing options. The rigorous course offers a comprehensive introduction to Python programming fundamentals including functions, decomposition, and testing, suitable for readers wanting deep foundational knowledge. The fast track is a concise, focused series on functional programming concepts in Python, ideal for readers seeking a quick, clear grasp of the core ideas relevant to Drafter's design.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [6.0001 Introduction to Computer Science and Programming in Python. Fall 2016](https://www.youtube.com/playlist?list=PLUl4u3cNGP63WbdFxL8giv4yhgdMGaZNA) — MIT OpenCourseWare · 38 videos · 10.0h across 38 episodes

**Watch only this:** Episodes 4 (Decomposition, Abstraction, and Functions), 7 (Functions as Arguments), 12 (Testing, Debugging, Exceptions, and Assertions), about 1.5 hours total — these episodes cover the core functional programming and testing concepts relevant to Drafter.

*Why it unblocks this paper:* MIT's 6.0001 Introduction to Computer Science and Programming in Python covers foundational CS1 topics including decomposition, functions, and testing, directly supporting understanding of Drafter's pedagogical approach and functional programming style in Python.

*If you want all of it:* All 38 episodes, about 10 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Functional Programming in Python – Master map(), filter(), and reduce()](https://www.youtube.com/playlist?list=PLP8GkvaIxJP1z5bu4NX_bFrEInBkAgTMr) — Real Python · 6 videos · 1.5h across 6 episodes

**Watch only this:** Episodes 1 (Immutable Data Structures), 2 (filter()), 3 (map()), and 4 (reduce()), about 1 hour total — these cover the essential functional programming concepts used by Drafter.

*Why it unblocks this paper:* Real Python's Functional Programming in Python series provides a concise, well-produced introduction to key functional programming tools like map, filter, and reduce, which are essential to understanding Drafter's pure function approach.

*If you want all of it:* All 6 episodes, about 1.5 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Drafter library and its educational impact, start by grounding yourself in the foundational concepts of Python dataclasses and unit testing, as these are critical to Drafter's state management and pedagogical approach. Next, study functional programming principles in Python, which underpin Drafter's pure function design. Finally, focus on the core concept of Drafter itself through the authors' own talk or the best available advanced content on full-stack Python web development, to appreciate the library's design and integration in CS1 courses.

### Python dataclasses seminar *(prerequisite)*
Understanding Python dataclasses is essential because Drafter uses them to manage application state, a core part of its design. This seminar-level content explores dataclasses beyond beginner tutorials, including advanced features and real-world usage, which aligns with the challenges students faced in the paper regarding state design.

*How the paper uses it:* Drafter manages application state using Python dataclasses, essential for understanding state design.

▶ [Raymond Hettinger - Dataclasses:  The code generator to end all code generators - PyCon 2018](https://www.youtube.com/watch?v=T-TwcmT6Rcw) — PyCon 2018 · 45:08 · 8 years ago

### Unit testing web applications lecture *(prerequisite)*
Unit testing is a fundamental practice reinforced by Drafter to promote good programming habits in CS1 students. This lecture from CS50P offers a rigorous and comprehensive introduction to unit testing in Python, suitable for advanced learners seeking to understand testing frameworks and methodologies relevant to Drafter's scaffolded testing features.

*How the paper uses it:* Drafter supports scaffolded unit testing to reinforce good programming practices in CS1.

▶ [CS50P - Lecture 5 - Unit Tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) — CS50 · 50:54 · 4 years ago

### Functional programming in Python lecture *(prerequisite)*
Drafter's design emphasizes pure functions and functional programming principles to simplify web development for novices. This lecture provides a substantive overview of functional programming concepts in Python, including pure functions and immutability, which are foundational to understanding Drafter's approach.

*How the paper uses it:* Drafter uses pure functions and functional programming principles to simplify web development.

▶ [Functional programming - A general introduction](https://www.youtube.com/watch?v=8z_bUIl_uPo) — Daedalus Community · 11:47 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational Python programming concepts essential for understanding Drafter, a Python library for full-stack web development in CS1 courses. It starts with Python dataclasses to grasp state management, then covers functional programming principles that Drafter uses to simplify web development. Next, it explains unit testing to reinforce good programming practices, and finally, it presents the core idea of full-stack web development using Python only, culminating in understanding Drafter's approach.

### Python dataclasses seminar *(prerequisite)*
Python dataclasses provide a concise way to define classes that primarily store data, reducing boilerplate code and improving readability. Understanding dataclasses is crucial for managing application state cleanly and effectively, which is a key part of how Drafter handles web app state.

*How the paper uses it:* Drafter manages application state using Python dataclasses, making this concept essential for understanding state design in the library.

▶ [This Is Why Python Data Classes Are Awesome](https://www.youtube.com/watch?v=CvQ7e6yUtnw) — ArjanCodes · 22:19 · 4 years ago

### Functional programming in Python lecture *(prerequisite)*
Functional programming emphasizes pure functions, immutability, and avoiding side effects, leading to more predictable and testable code. Learning these principles helps understand how Drafter simplifies web development by using pure functions and minimal boilerplate.

*How the paper uses it:* Drafter uses pure functions and functional programming principles to simplify web development for CS1 students.

▶ [Functional Programming in PYTHON | Explained Simply | Hindi](https://www.youtube.com/watch?v=uNnAqohTTFs) — Kiran Academy - Python & Mern · 10:08 · 2 years ago

### Unit testing web applications lecture *(prerequisite)*
Unit testing involves writing tests for small, independent pieces of code to ensure correctness and facilitate maintenance. This practice is scaffolded in Drafter to reinforce good programming habits like decomposition and testing in introductory courses.

*How the paper uses it:* Drafter supports scaffolded unit testing to reinforce good programming practices in CS1.

▶ [CS50P - Lecture 5 - Unit Tests](https://www.youtube.com/watch?v=tIrcxwLqzjQ) — CS50 · 50:54 · 4 years ago

### Full-stack web development with Python talk
Full-stack web development covers both frontend and backend aspects of web applications. This video explains how Python can be used to build complete web apps, avoiding the need to learn multiple languages, which aligns with Drafter's goal of simplifying web development for beginners.

*How the paper uses it:* Drafter enables full-stack web app development using Python only, avoiding HTML, CSS, and JavaScript.

▶ [How I Would Learn Python Web Development If I Started Over](https://www.youtube.com/watch?v=eOuCaQtlql8) — Tech With Tim · 21:31 · 10 months ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of Drafter, a Python library designed for CS1 full-stack web development. Starting with a beginner-level project to build a simple Drafter web app, you then move to an intermediate project reimplementing Drafter's core pure-function and state management approach with testing support. Finally, the advanced project tackles one of the paper's stated limitations by adding interactive feedback for State dataclass design, extending Drafter's pedagogical features.

### Beginner — Simple Drafter Web App with State and Unit Tests
*Effort: a weekend, ~8 hours*

You build a small full-stack web application using the Drafter Python library that includes multiple pages, user input fields, and a State dataclass to manage application state. You also write scaffolded unit tests for your app and deploy it to GitHub Pages using Drafter's client-side execution model.

**Why it shows you understood the paper:** This project demonstrates you can use Drafter's core abstractions—pure functions, Python-only HTML components, State dataclasses, and unit testing scaffolds—to build and deploy a functional web app, reflecting the paper's key contributions and successful student projects.

**Grounded in:** Key contributions: Development of Drafter, a Python library enabling web development with pure functions and minimal boilerplate; Pedagogical features including scaffolded unit testing; Key results: Students completed projects with multiple routes, pages, state fields, input fields, tests, and static typing.

**Tech stack:** Python 3.11, Drafter Python library, Git, GitHub Pages

**Data:** No external data needed; you create your own simple app state and input fields as per Drafter examples.

**Build it:**

1. Install Drafter and set up a Python environment.
2. Create a Python script defining a State dataclass with a few fields.
3. Define pure functions that generate HTML components using Drafter's API.
4. Implement multiple routes/pages with input fields that update the State.
5. Write scaffolded unit tests using Drafter's testing utilities.
6. Deploy the app to GitHub Pages following Drafter's deployment guide.

**Ships as:** A GitHub repository with a Drafter-based web app, unit tests, and deployment instructions in the README.

**Stretch goal:** Add more complex nested State fields and input validation to increase project difficulty.

### Intermediate — Reimplementation of Drafter's Pure-Function Web Framework Core
*Effort: 1-3 weekends, ~20 hours*

You reimplement the core Drafter approach to full-stack web development: a minimal Python library that enables building web apps using pure functions, State dataclasses, and unit testing support. You compare your implementation against a simple baseline Python web framework (e.g., Flask) by building the same small app and measuring developer experience metrics like lines of code and test coverage.

**Why it shows you understood the paper:** This project shows you deeply understand Drafter's design principles and trade-offs by reconstructing its core method from the paper's description and evaluating it against a baseline, reflecting the paper's approach and results on simplifying CS1 web development.

**Grounded in:** Approach: Development of Drafter enabling full-stack web apps with pure functions and minimal boilerplate; Key contributions: Identification of design issues in novice web frameworks; Key results: Reinforcement of CS1 concepts like decomposition and unit testing.

**Tech stack:** Python 3.11, pytest, Flask (for baseline comparison), Git

**Data:** No external data; you build example apps with simple state and routes as described in the paper.

**Build it:**

1. Study the paper's description of Drafter's core abstractions: pure functions, State dataclasses, and testing scaffolds.
2. Implement a minimal Python library that provides Python functions for HTML elements, State management, and test scaffolding.
3. Build a small web app using your library with multiple routes and stateful input.
4. Build the same app using Flask as a baseline.
5. Write unit tests for both apps and measure lines of code and test coverage.
6. Document your implementation, comparison, and lessons learned in the README.

**Ships as:** A GitHub repo containing your Drafter-like library, example app, Flask baseline app, tests, and a report comparing both approaches.

**Stretch goal:** Add program state visualization or enhanced error messages similar to Drafter's pedagogical features.

### Advanced — Interactive Feedback Tool for State Dataclass Design in Drafter
*Effort: a few weeks, ~40+ hours*

You extend Drafter by developing an interactive code analysis and feedback tool that integrates with the Drafter development workflow to detect common issues in State dataclass design and mutable field initialization. The tool provides real-time warnings and concrete advice to guide students toward best practices, addressing a key limitation identified in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper by enhancing Drafter's pedagogical support, demonstrating deep comprehension of the challenges students face and the library's internals, and contributing a novel extension that could spark collaboration.

**Grounded in:** Limitations: Some students had difficulty designing appropriate State dataclasses and managing mutable fields; Future directions: Enhance Drafter to provide more concrete advice and warnings for State class design and mutable field initialization.

**Tech stack:** Python 3.11, ast module for code analysis, Drafter Python library, pytest, Git

**Data:** No external data; use student-like example Drafter projects with State dataclasses exhibiting common design issues.

**Build it:**

1. Analyze common State dataclass design mistakes described in the paper.
2. Implement a Python static analysis tool using the ast module to parse Drafter projects and detect these issues.
3. Integrate the tool to run alongside Drafter's unit tests, providing warnings and suggestions.
4. Create example Drafter projects demonstrating the tool's feedback.
5. Write documentation and usage instructions for the tool.
6. Optionally, package the tool as a Drafter plugin or CLI extension.

**Ships as:** A GitHub repo with the interactive feedback tool, example projects, tests, and documentation showing how it improves student support for State design.

**Stretch goal:** Add detection and warnings for code after the blocking start_server call as another pedagogical enhancement.
