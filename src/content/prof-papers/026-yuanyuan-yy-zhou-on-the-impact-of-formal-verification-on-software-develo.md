---
title: "026 · On the Impact of Formal Verification on Software Development — Yuanyuan (YY) Zhou"
date: 2026-07-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yyzhou"
source_hash: "e22b730c050530425f8564285cba4aa31d403fe527637089150a5274bcd6d5d4"
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
