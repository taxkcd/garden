---
title: "026 · On the Impact of Formal Verification on Software Development — Yuanyuan (YY) Zhou"
date: 2026-07-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yyzhou"
source_hash: "6e6dd57f55105ff0d5e2c21a4c4586202382c0ea6134e6c70a83b862a102f5ea"
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

To deeply understand the impact of auto-active formal verification on software development as studied in the paper, start with foundational knowledge on formal specification languages and interactive theorem proving to grasp the formal underpinnings and proof debugging challenges. Then explore software verification tooling usability to appreciate practical challenges in tool support. Finally, focus on the core concept by watching the authors' own talks or closely related advanced presentations on formal verification impact and auto-active verification methods to connect theory with the paper's empirical findings.

## Recommended videos (in order)

### Formal specification languages seminar *(prerequisite)*
Formal specifications are central to the paper's findings about how verification requires augmenting informal requirements with formal assertions. Understanding specification languages provides foundational knowledge about how properties are expressed and reasoned about formally.

*How the paper uses it:* The paper discusses how formal specifications augment informal requirements and are essential for verification.

▶ [The Design of A Formal Property-Specification Language](https://www.youtube.com/watch?v=qo1AjLgs3XA) — Microsoft Research · 1:13:10

### Interactive theorem proving lecture *(prerequisite)*
Interactive theorem proving lectures provide insight into proof development and debugging challenges, which relate directly to the paper's discussion of proof brittleness and the difficulty of understanding verifier internal states.

*How the paper uses it:* The paper highlights challenges in proof debugging and incremental proof development that relate to interactive theorem proving techniques.

▶ [Interactive Theorem Proving, Guest Lecture - Introduction to ...](https://www.youtube.com/watch?v=uvMjgKcZDec) — David Broman · 1:45:32

### Software verification tooling usability talk *(prerequisite)*
Understanding usability challenges and tool support improvements is crucial to contextualizing the paper's findings on proof debugging difficulties and opportunities for better tooling to improve verification adoption.

*How the paper uses it:* The paper identifies usability challenges and suggests improvements in tooling for proof debugging and error messages.

▶ [Usability Testing is easier than you think - Jo Minney - NDC ...](https://www.youtube.com/watch?v=mA0tUkythNk) — NDC Conferences · 53:52

### Auto-active formal verification lecture
Auto-active verification is the central method studied in the paper. Lectures on this topic explain how automated proof guidance works and the verification workflow, providing technical background to understand the paper's empirical insights.

*How the paper uses it:* The paper studies the impact of auto-active verification tools like Dafny on software development.

▶ [The Varied Forms of Verification with Z3](https://www.youtube.com/watch?v=wHSmAThRBHg) — Microsoft Research · 1:03:27

### Authors' talk on formal verification impact *(the paper's own talk)*
The authors' own talks or closely related advanced presentations provide the most direct and authoritative explanation of the study's motivation, methodology, findings, and implications, making them the best resource for understanding the paper in depth.

*How the paper uses it:* Direct presentation of the paper's study and findings by the authors or experts closely aligned with the paper's topic.

▶ [Software Verification in the Age of Artificial Intelligence](https://www.youtube.com/watch?v=D_Qnu3P_klk) — Association for Computing Machinery (ACM) · 2 months ago
