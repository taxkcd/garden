---
title: "223 · Measuring an Artificial Intelligence System’s Performance on a Verbal IQ Test For Young Children — Robert H. Sloan"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-robert-h-sloan"
source_hash: "0e9710faed4b7b516e478f5537b4864d2036da78d6fb7d5d22722cafecd45933"
sequence: 223
generator: "outreach-garden: managed"
---

# 223 · Measuring an Artificial Intelligence System’s Performance on a Verbal IQ Test For Young Children

## At a glance

- **Professor:** Robert H. Sloan
- **Institution:** University of Illinois at Chicago
- **Paper:** [Measuring an Artificial Intelligence System’s Performance on a Verbal IQ Test For Young Children](https://arxiv.org/abs/1509.03390)
- **Authors:** Stellan Ohlsson, Robert H. Sloan, György Turán, Aaron Urasky
- **Year:** 2013

## Paper overview

This paper evaluates the verbal intelligence of the AI system ConceptNet 4 by administering a verbal IQ test designed for young children (ages 4-7). The study finds that ConceptNet 4 performs roughly at the level of an average four-year-old child, with strengths in vocabulary and similarities but weaknesses in comprehension and word reasoning. The work demonstrates how psychometric tests can be used as benchmarks for AI systems and highlights the challenges AI faces in common sense reasoning and natural language understanding.

### Why it matters

**Research problem:** How to objectively measure and compare the verbal intelligence and commonsense reasoning abilities of AI systems using standardized psychometric tests designed for humans, specifically young children.

**Why it matters:** AI systems currently struggle with tasks that young children can perform easily, such as common sense reasoning and answering open-ended verbal questions. Establishing reliable benchmarks like verbal IQ tests helps identify AI strengths and weaknesses, guiding future research and development.

**Key contributions:**

- Demonstrated the use of a full verbal IQ test (WPPSI-III) as a psychometric AI (PAI) benchmark for evaluating AI systems.
- Provided empirical results showing ConceptNet 4's verbal IQ equivalent to an average four-year-old child.
- Highlighted specific strengths (Vocabulary, Similarities) and weaknesses (Comprehension, Word Reasoning) of ConceptNet 4.
- Showed the tight interconnection between knowledge representation, commonsense reasoning, natural language processing, and question answering in AI.
- Developed a minimal additional code framework to interface ConceptNet with the WPPSI-III verbal test items.

## About the professor

**Robert H. Sloan** — Professor, Department of Computer Science, University of Illinois at Chicago.

Research interests: Privacy, cybersecurity, and technology law and policy; AI, society, and public-interest computing; Computer science education; Theoretical computer science and computational learning theory

### Research links

- [Faculty/profile page](https://cs.uic.edu/profiles/robert-sloan/)
- [Identity evidence](https://www.cs.uic.edu/Sloan)
- [Professor website](https://sloan.cs.uic.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand this paper, start with foundational knowledge in natural language processing and commonsense knowledge representation, as these underpin the AI system's capabilities and limitations. Next, grasp the psychometric evaluation framework, especially how human IQ tests are adapted to AI benchmarking. Finally, focus on the core concept of using the WPPSI-III verbal IQ test as a psychometric AI benchmark, including insights from the authors' own presentations if available.

### Natural language processing for AI *(prerequisite)*
Natural language processing (NLP) is essential for converting verbal IQ test questions into queries that AI systems like ConceptNet can process. Understanding modern NLP methods, especially deep learning approaches, clarifies the challenges the paper highlights regarding ConceptNet 4's limited NLP capabilities.

*How the paper uses it:* The paper discusses ConceptNet 4's NLP limitations affecting its verbal IQ test performance.

▶ [Stanford CS224N: NLP with Deep Learning | Spring 2024 ...](https://www.youtube.com/watch?v=DzpHeXVSC5I) — Stanford Online · 1:20:17

### Commonsense knowledge representation *(prerequisite)*
Commonsense knowledge representation is critical for AI systems to reason about everyday facts and answer open-ended questions. This section provides insight into how knowledge bases like ConceptNet encode and utilize commonsense, directly relating to the paper's evaluation of ConceptNet's reasoning strengths and weaknesses.

*How the paper uses it:* ConceptNet 4's knowledge base and reasoning abilities are central to its verbal IQ test results.

▶ [Giving AI Some Common Sense - Distinguished Lecturer ...](https://www.youtube.com/watch?v=IA-wM0wysS0) — Institute for Experiential AI · 1:03:33

### Psychometric AI evaluation *(prerequisite)*
Psychometric AI evaluation covers the methodology of using standardized human intelligence tests to benchmark AI systems. This background is necessary to appreciate the paper's novel approach of applying the WPPSI-III verbal IQ test to ConceptNet 4 and interpreting the results.

*How the paper uses it:* The paper pioneers using a full verbal IQ test as a psychometric AI benchmark.

▶ [Are AI Benchmarks Actually Measuring Anything? | Dr. Sanmi Koyejo (Stanford) | AI Evaluation Seminar](https://www.youtube.com/watch?v=3uoUKeoyXNE) — AI Evaluation Programme: Capabilities and Safety and valgrAI · 4 months ago

### Wechsler Preschool Primary Scale Intelligence *(prerequisite)*
Understanding the WPPSI-III test, its structure, and what it measures is vital to contextualize the AI evaluation. This section explains the test's design for young children, which the paper uses as a benchmark for ConceptNet 4's verbal intelligence.

*How the paper uses it:* The WPPSI-III verbal IQ test is the standardized psychometric tool used for AI evaluation in the paper.

▶ [What is the WPPSI™ Test (Wechsler Preschool and Primary Scale of Intelligence™)?](https://www.youtube.com/watch?v=XoC22n1YOis) — Testing Mom · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how AI systems like ConceptNet are evaluated using verbal IQ tests designed for young children. Start with the basics of natural language processing and knowledge representation to grasp how AI interprets and stores information. Then, learn about the specific IQ test used (WPPSI-III) and the psychometric AI evaluation approach before finishing with the paper's core focus on using verbal IQ tests as benchmarks for AI performance.

### Natural language processing for AI *(prerequisite)*
Natural Language Processing (NLP) enables AI systems to understand and process human language, which is essential for translating verbal IQ test questions into queries the AI can answer. This foundation helps explain why NLP limitations affect AI performance on verbal reasoning tasks.

*How the paper uses it:* The paper uses NLP tools to translate WPPSI-III verbal test questions into inputs for ConceptNet 4, highlighting NLP's critical role and its current limitations.

▶ [Lecture 1 | Natural Language Processing with Deep Learning](https://www.youtube.com/watch?v=OQQ-W_63UgQ) — Stanford University School of Engineering · 1:11:41

### Commonsense knowledge representation *(prerequisite)*
Commonsense knowledge representation is how AI encodes everyday facts and reasoning patterns, allowing it to answer questions about the world. Understanding this helps clarify ConceptNet's strengths and weaknesses in answering verbal IQ test items requiring common sense.

*How the paper uses it:* ConceptNet 4 relies on a commonsense knowledge base (AnalogySpace) to answer verbal IQ questions, and its performance reflects the quality of this representation.

▶ [How to Implement Common Sense for AI](https://www.youtube.com/watch?v=w7eCncp4I8A) — Future AI Society · 18:45

### Wechsler Preschool Primary Scale Intelligence *(prerequisite)*
The WPPSI-III is a standardized verbal IQ test designed for young children, measuring vocabulary, comprehension, and reasoning skills. Knowing its structure and purpose helps understand how the AI's verbal IQ was assessed and compared to children.

*How the paper uses it:* The paper administers the WPPSI-III verbal test to ConceptNet 4 to benchmark its verbal intelligence against that of young children.

▶ [What is the WPPSI™ Test (Wechsler Preschool and Primary Scale of Intelligence™)?](https://www.youtube.com/watch?v=XoC22n1YOis) — Testing Mom · 4 years ago

### Psychometric AI evaluation
Psychometric AI evaluation uses standardized human intelligence tests as objective benchmarks to measure AI capabilities, providing a common ground for comparison. This approach reveals AI strengths and weaknesses in human-like reasoning tasks.

*How the paper uses it:* The paper demonstrates using the WPPSI-III verbal IQ test as a psychometric benchmark to evaluate ConceptNet 4's verbal intelligence.

▶ [Exploring the Intersection of AI and Psychometric Testing](https://www.youtube.com/watch?v=EUmuKmNqPYk) — Talent Select · 4:46

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors offers insights into their motivations, methodology, and interpretations of results, enriching understanding of the paper's contributions and challenges.

*How the paper uses it:* The authors discuss their approach to measuring AI verbal IQ and the implications of their findings on AI commonsense reasoning.

▶ [AI vs human intelligence: the TRUTH about AI!](https://www.youtube.com/watch?v=8ZoMEvujfJ4) — Jelvix | TECH IN 5 MINUTES · 3 years ago

## Already in your library

- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
