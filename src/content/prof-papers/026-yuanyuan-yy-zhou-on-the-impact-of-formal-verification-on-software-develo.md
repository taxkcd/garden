---
title: "026 · On the Impact of Formal Verification on Software Development — Yuanyuan (YY) Zhou"
date: 2026-07-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yyzhou"
source_hash: "7bd59ef45cb09b8c6dadb8ed89545e44394f9a71ec100b09934caf681ab560df"
sequence: 26
generator: "outreach-garden: managed"
---

# 026 · On the Impact of Formal Verification on Software Development

## At a glance

- **Professor:** Yuanyuan (YY) Zhou
- **Institution:** Univ. of California - San Diego
- **Paper:** [On the Impact of Formal Verification on Software Development](https://cseweb.ucsd.edu/~mcoblenz/assets/pdf/OOPSLA_2025_Dafny.pdf)
- **Authors:** Eric Mugnier, Yuanyuan Zhou, Ranjit Jhala, Michael Coblenz
- **Year:** 2025

## Paper overview

This paper studies how auto-active formal verification tools like Dafny affect real-world software development. Through interviews with 14 experienced users, the authors analyze how verification changes software design, implementation, debugging, testing, and maintenance. They identify challenges such as proof brittleness and the difficulty of debugging proofs, and suggest opportunities to improve usability and adoption of verification in practice.

### Why it matters

**Research problem:** Despite advances in auto-active verifiers that automate many proof details, their adoption in real-world software development remains limited due to the significant effort required to apply them effectively and the usability challenges they pose.

**Why it matters:** Formal verification promises to improve software correctness and reliability, but its limited adoption means many software systems remain vulnerable to bugs. Understanding how verification tools impact development and how to simplify their use can help broaden their adoption and improve software quality.

**Key contributions:**

- Analysis of how auto-active verification impacts software design and implementation, including specification writing, auxiliary assertions, proof debugging, and proof hardening.
- Insights into how verification affects testing, review, deployment, and maintenance, highlighting differences between formal-first and engineering-first developers.
- Identification of opportunities to improve verified software engineering, such as better tooling for proof debugging, style guides for robust proofs, and integration of testing with formal specifications.

## About the professor

**Yuanyuan (YY) Zhou** — Qualcomm Endowed Chair Professor, Department of Computer Science and Engineering, Univ. of California - San Diego.

### Research links

- [Faculty/profile page](https://cseweb.ucsd.edu/~yyzhou)
- [Professor website](https://cseweb.ucsd.edu/~yyzhou/index.html)
- [Lab website](https://opera.ucsd.edu/)
- [LinkedIn](http://twitter.com/yyzhou)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Formal Methods and Program Verification
**The paper assumes:** formal methods, program verification, formal specification languages, and automated theorem proving
**Already in this field?** Skip this entirely if you already understand the basics of formal verification techniques and how formal specifications are used to prove program correctness.

This background is designed to provide foundational knowledge on formal methods and program verification, essential for understanding the challenges and impacts of auto-active verification tools like Dafny discussed in the paper. The rigorous course option offers a structured, in-depth university lecture series for comprehensive learning, while the fast track provides a concise, focused explainer series to quickly grasp key concepts without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS636 Short Lectures | Formal Methods | VU Midterm & Final Term Preparation](https://www.youtube.com/playlist?list=PLhkQ-b-MvWXY3WXekZqf3g8wkafhtMPfh) — STUDENT OF THE YEAR HUB · 58 videos · 13.4h across 58 episodes

**Watch only this:** Episodes 1.1 Introduction to Formal Methods Part 1, 1.2 Introduction to Formal Methods Part 2, 1.3 Introduction to Mathematical Notations, 4.1 Introduction to Formal Verification Part 1, 4.2 Introduction to Formal Verification Part 2, and 4.3 Introduction to Transition Systems — about 1.5 hours total. These episodes provide a solid grounding in formal methods and verification basics needed to understand the paper's context.

*Why it unblocks this paper:* This CS636 Formal Methods course from the Virtual University of Pakistan covers foundational topics such as formal specifications, verification, assertions, and transition systems, directly relevant to understanding the formal verification concepts and challenges in the paper.

*If you want all of it:* 13.4 hours across all 58 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Formal Methods for Verification and Model Checking](https://www.youtube.com/playlist?list=PLZ5_EQH6uyVucnu20SS2BFQdVp_m_bznu) — scottlanyon · 7 videos · 1.5h across 7 episodes

**Watch only this:** Episodes 2 Very Basic Introduction to Formal Verification, 3 Formally Proving Code Correctness: An Example, and 4 Formal verification: A quick primer — about 36 minutes total. These cover the essential ideas of formal verification and proof that underpin the paper's discussion.

*Why it unblocks this paper:* This short series by scottlanyon offers a clear, concise introduction to formal verification concepts, including formal proofs and model checking, which quickly builds intuition relevant to the paper's focus on verification tool usability and proof debugging.

*If you want all of it:* 1.5 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the impact of auto-active formal verification on software development as studied in the paper, start with foundational knowledge on formal specification and proof debugging techniques, which are critical for writing and maintaining formal proofs. Then, explore the phenomenon of proof brittleness and hardening to grasp challenges in proof maintenance. Finally, focus on the core concept of auto-active formal verification and the authors' own talk presenting their study, which directly addresses the paper's contributions and findings.

### Formal specification in software *(prerequisite)*
Formal specifications are the foundation for writing proofs and specifications in verification. Understanding formal specification helps grasp how developers write precise requirements and assertions that verification tools check.

*How the paper uses it:* The paper discusses how formal specifications augment informal requirements and are essential for verification.

▶ [Module overview: Formal Methods for Software Engineering](https://www.youtube.com/watch?v=r00kOy1S4MU) — Jan Oliver Ringert · 3 years ago

### Proof debugging techniques *(prerequisite)*
Proof debugging is a key challenge identified in the paper, involving understanding and fixing proof failures. Learning about modern functional verification and debugging techniques provides insight into the difficulties developers face and potential tool support.

*How the paper uses it:* The paper highlights proof debugging challenges due to unclear error messages and hidden verifier state.

▶ [An Overview of Modern Functional Verification and Debug](https://www.youtube.com/watch?v=dKFwQNsXaNU) — EECG Toronto - University of Toronto · 13 years ago

### Proof brittleness and hardening *(prerequisite)*
Proof brittleness refers to verified proofs breaking after minor changes, requiring hardening to maintain robustness. Understanding this phenomenon is crucial to appreciate the maintenance challenges and the new development phases introduced by verification.

*How the paper uses it:* The paper identifies proof brittleness as a major challenge requiring a new phase of proof hardening.

▶ [Formal Methods for Dependable Computing: From Models, through Software, to Circuits](https://www.youtube.com/watch?v=VUyfi6JJRgA) — CITRIS and the Banatao Institute · 47:00 · 15 years ago

### Auto-active formal verification
Auto-active formal verification is the central method studied in the paper, where the verifier automates many proof details but requires user guidance. Understanding this approach is key to grasping the paper's analysis of verification's impact on software development.

*How the paper uses it:* The paper studies the impact of auto-active verification tools like Dafny on software development.

▶ [Auto-Active Verification of Software with Timers and Clocks (STAC)](https://www.youtube.com/watch?v=BPYIAw9wMe4) — Software Engineering Institute | Carnegie Mellon University · 9:14 · 9 years ago

### Paper authors talk
The authors' own talk provides direct insights into their study, methodology, findings, and implications. It is the most authoritative and relevant resource to understand the paper's contributions and context.

*How the paper uses it:* This is the authors' recorded talk presenting the paper at OOPSLA 2025.

▶ [https://www.youtube.com › watch?v=GptVarCy2v4](https://www.youtube.com/watch?v=GptVarCy2v4) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the foundation of formal specifications in software, which are the precise descriptions needed for formal verification. Then learn about proof debugging techniques to grasp the challenges developers face when proofs fail. Next, explore proof brittleness and hardening to see why maintaining proofs is difficult. Finally, focus on auto-active formal verification, the core method studied in the paper, to understand how it automates proof details and impacts software development.

### Formal specification in software *(prerequisite)*
Formal specifications are precise, mathematical descriptions of what software should do. They form the foundation for writing proofs that verify software correctness. Understanding formal specifications helps you grasp how developers translate informal requirements into verifiable properties.

*How the paper uses it:* The paper highlights that verification requires formal specifications augmenting informal requirements and auxiliary assertions.

▶ [Intro to Formal Methods for Engineering  - Launch School Tech Talk - 2020](https://www.youtube.com/watch?v=RC9fAJhSTMY) — launchschool · 5 years ago

### Proof debugging techniques *(prerequisite)*
Proof debugging involves identifying why a formal proof fails and fixing it, which is often challenging due to unclear error messages and hidden internal states of verifiers. Learning common debugging strategies helps understand the mental effort developers invest in making proofs succeed.

*How the paper uses it:* The paper discusses how proof debugging is challenging due to unclear error messages and the need to build mental models of the verifier's internal state.

▶ [Programming Proofs and Proving Programs](https://www.youtube.com/watch?v=E5-y5kyyroc) — Microsoft Research · 9 years ago

### Auto-active formal verification
Auto-active formal verification automates many proof details but still requires user guidance through annotations and specifications. It balances automation and manual proof effort, making it a practical approach for verifying real-world software.

*How the paper uses it:* The paper studies the impact of auto-active verification tools like Dafny on software development practices.

▶ [Auto-Active Verification of Software with Timers and Clocks (STAC)](https://www.youtube.com/watch?v=BPYIAw9wMe4) — Software Engineering Institute | Carnegie Mellon University · 9:14 · 9 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of how auto-active formal verification impacts software development, based on the paper's insights. The beginner project reproduces a core challenge of proof debugging and brittleness using Dafny code snippets. The intermediate project implements a small-scale incremental proof development and hardening workflow inspired by the paper's findings, using Dafny and verification guidelines. The advanced project extends the paper by prototyping an interactive proof debugging tool that exposes verifier internal state, addressing a key future direction to improve usability and bridge formal-first and engineering-first developers.

### Beginner — Dafny Proof Debugging and Brittleness Demo
*Effort: a weekend, ~8 hours*

You build a small Dafny project with a few simple verified functions and lemmas that intentionally break after minor code changes. You add auxiliary assertions and formal specifications to debug and fix the proofs, illustrating the brittleness and debugging challenges described in the paper.

**Why it shows you understood the paper:** This project concretely demonstrates the paper's key result that proof debugging is challenging due to unclear error messages and proof brittleness, showing you grasp the practical difficulties developers face when using auto-active verifiers like Dafny.

**Grounded in:** Proof debugging is challenging due to unclear error messages and hidden verifier state (Section 4.3); Proof brittleness causes previously verified proofs to fail after minor changes (Section 4.4).

**Tech stack:** Dafny 3.0 or latest stable, VS Code with Dafny extension or Dafny CLI

**Data:** No external data needed; you write small Dafny code snippets inspired by examples in the paper and Dafny VMC Guidelines.

**Build it:**

1. Install Dafny and set up a development environment with VS Code or CLI.
2. Write a simple Dafny module with a few verified functions and lemmas using formal specifications and auxiliary assertions.
3. Introduce minor code changes that cause proofs to break, simulating proof brittleness.
4. Use Dafny error messages and add assertions to debug and fix the proofs.
5. Document the debugging steps and challenges encountered in a README.

**Ships as:** A GitHub repo containing Dafny code illustrating proof brittleness and debugging, with a README explaining the challenges and fixes, showing your understanding of the paper's core issues.

**Stretch goal:** Add a small script or notes on how to harden proofs against minor changes, inspired by the paper's proof hardening phase.

### Intermediate — Incremental Proof Development and Hardening Workflow
*Effort: 2 weekends, ~20 hours*

You implement a small verified Dafny project that applies incremental proof development techniques (top-down and bottom-up proof structuring) and includes a proof hardening phase to reduce brittleness. You compare verification success and stability metrics before and after hardening, inspired by the paper's analysis.

**Why it shows you understood the paper:** This project reproduces the paper's core method of managing verification complexity through incremental proof development and proof hardening, demonstrating your ability to apply and measure these techniques practically.

**Grounded in:** Developers use incremental proof development, top-down and bottom-up proof structuring, and rely on functional specifications to simplify verification (Section 4.2); Proof brittleness causes verified proofs to break, requiring proof hardening (Section 4.4).

**Tech stack:** Dafny 3.0 or latest stable, VS Code with Dafny extension or Dafny CLI, Markdown for documentation

**Data:** No external dataset; you create a small verified module inspired by Dafny VMC Guidelines and Ironclad examples for incremental proof development.

**Build it:**

1. Set up Dafny environment and familiarize yourself with incremental proof techniques from Dafny VMC Guidelines.
2. Write a verified Dafny module with layered proofs using top-down and bottom-up strategies.
3. Introduce minor code changes to simulate proof brittleness and measure verification failures.
4. Implement a proof hardening phase by refactoring proofs and adding style guide-inspired assertions.
5. Measure and compare verification success rates and brittleness before and after hardening.
6. Document the workflow, metrics, and lessons learned in a detailed README.

**Verified links from the paper:**

- <https://github.com/dafny-lang/Dafny-VMC> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/microsoft/Ironclad> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with a verified Dafny project demonstrating incremental proof development and hardening, including verification metrics and a README explaining the approach and results.

**Stretch goal:** Integrate simple automated checks or linters to enforce proof style guidelines to improve robustness.

### Advanced — Interactive Proof Debugging Tool Prototype
*Effort: 3-4 weeks*

You design and implement a prototype interactive proof debugging tool that exposes the internal state of the Dafny verifier, such as proof obligations, solver queries, and intermediate proof states. The tool provides a UI to navigate and incrementally debug proofs, addressing the paper's future direction to improve usability and bridge formal-first and engineering-first developers.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by creating tooling that makes proof debugging more transparent and accessible, demonstrating deep comprehension of the challenges and practical solutions for verified software engineering.

**Grounded in:** Developing better interactive debugging tools that expose verifier internal state similar to interactive proof assistants (Future Directions).

**Tech stack:** Dafny 3.0 or latest stable, Node.js and React for UI, TypeScript, Express.js for backend API, Docker for containerization

**Data:** No external dataset; you use Dafny verification tasks from your intermediate project or small Dafny examples to demonstrate the tool.

**Build it:**

1. Study Dafny's verification process and identify points where internal state can be extracted (e.g., proof obligations, SMT solver queries).
2. Implement a backend service that runs Dafny verification and extracts internal proof state information.
3. Build a React frontend UI to visualize proof states, error messages, and allow stepwise navigation through proof attempts.
4. Integrate the backend and frontend to enable interactive proof debugging sessions.
5. Test the tool on small Dafny projects with known proof brittleness and debugging challenges.
6. Document the tool design, usage instructions, and how it addresses the paper's usability challenges.

**Ships as:** A GitHub repo with a working interactive proof debugging tool prototype, example Dafny projects, and documentation showing how it improves proof debugging transparency and usability.

**Stretch goal:** Extend the tool to support collaborative proof debugging sessions or integrate with existing IDEs like VS Code.

_No authors' own code artifacts were released for this paper; the intermediate project relies on reimplementing core methods and uses third-party Dafny VMC Guidelines and Ironclad repositories as references._
