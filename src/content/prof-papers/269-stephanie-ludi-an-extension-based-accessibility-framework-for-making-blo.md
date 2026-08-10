---
title: "269 · An Extension-Based Accessibility Framework for Making Blockly Accessible to Blind and Low-Vision Users — Stephanie Ludi"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stephanie-ludi"
source_hash: "6bdd20f2c12debb29bfe00b4508df1f7be8333c948b245b441759a229b851a23"
sequence: 269
generator: "outreach-garden: managed"
---

# 269 · An Extension-Based Accessibility Framework for Making Blockly Accessible to Blind and Low-Vision Users

## At a glance

- **Professor:** Stephanie Ludi
- **Institution:** University of North Texas
- **Paper:** [An Extension-Based Accessibility Framework for Making Blockly Accessible to Blind and Low-Vision Users](https://arxiv.org/pdf/2601.10688)
- **Authors:** Rubel Hassan Mollik, Vamsi Krishna Kosuri, Stephanie Ludi, Hans Djalali, Aboubakar Mountapmbeme
- **Year:** 2026

## Paper overview

This paper presents a new software framework called the Extension-Based Accessibility Framework (EAF) that makes block-based programming environments (like Blockly) accessible to blind and low-vision learners. The framework allows users to navigate and edit code using keyboard shortcuts and screen readers without modifying the original Blockly library. It introduces a 3D navigation model and features such as stack labeling and mode-based editing to improve usability and comprehension for visually impaired users.

### Why it matters

**Research problem:** Block-based programming environments (BBPEs) widely used in K-12 education are mostly inaccessible to blind or visually impaired (BVI) learners because they rely heavily on visual drag-and-drop interfaces and lack screen reader compatibility. Existing accessibility solutions require modifying the Blockly library, limiting adoption and interoperability.

**Why it matters:** Accessibility barriers prevent BVI learners from fully participating in computer science education, leaving them behind sighted peers. Since many BBPEs are built on Blockly, improving its accessibility can benefit a broad range of educational platforms and promote inclusivity in computing education.

**Key contributions:**

- Development of EAF, a modular accessibility framework compatible with existing Blockly-based platforms without requiring core library modifications.
- Introduction of a novel 3D navigation and editing model featuring stack labeling, block numbering, and mode-based editing to enhance navigation and comprehension for BVI users.
- Validation of EAF through integration testing on two Blockly-based systems with 177 test cases and expert evaluation involving screen readers.
- Establishment of standardized keyboard shortcuts to improve usability and interoperability across Blockly-based environments.
- Demonstration of full keyboard navigation and external screen reader support, addressing limitations of prior accessibility solutions.

## About the professor

**Stephanie Ludi** — Computer Science and Engineering, University of North Texas.

### Research links

- [Faculty/profile page](https://computerscience.engineering.unt.edu/people/faculty/stephanie-ludi)
- [Identity evidence](http://www.cse.unt.edu/~ludi)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Accessibility in Human-Computer Interaction
**The paper assumes:** accessibility principles in human-computer interaction, assistive technology design, and screen reader integration
**Already in this field?** Skip this entirely if you already understand core accessibility concepts in HCI and how assistive technologies like screen readers interact with software interfaces.

To understand the accessibility challenges and design principles behind the Extension-Based Accessibility Framework (EAF) for Blockly, foundational knowledge in Accessibility within Human-Computer Interaction (HCI) is essential. The rigorous course option provides a deep, structured university-level introduction to HCI concepts including accessibility, while the fast track offers a concise, focused series on accessibility topics from the perspective of blind and low-vision users. Choose the course for comprehensive theoretical grounding and the fast track for a practical, user-centered accessibility overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Human Computer Interaction (In English)](https://www.youtube.com/playlist?list=PLyqSpQzTE6M-KVz-9blW7qq_LgDPSOtEE) — NPTEL-NOC IITM · 45 videos · 26.3h across 45 episodes

**Watch only this:** Episodes 1-8: 'Human Computer Interaction (In English) - Intro video' through 'Inclusivity, Accessibility and Design Principles', about 4.7 hours total — these cover foundational HCI concepts, design principles, and accessibility essentials.

*Why it unblocks this paper:* This NPTEL-NOC IITM course by Prof. Rajiv Ratn Shah covers core HCI concepts including accessibility and inclusive design principles, which are crucial to understanding the design rationale behind EAF’s modular, non-invasive accessibility framework for Blockly.

*If you want all of it:* All 45 episodes, approximately 26.3 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Accessibility](https://www.youtube.com/playlist?list=PLFYdvD6EeUNl5Q8MSG52cZe4wHTxrX3cy) — Professor K Explains · 14 videos · 2.2h across the first 13 episodes

**Watch only this:** Episodes 1-12: 'How I use technology as a blind person! - Molly Burke (CC)' through 'How I Use Screen Reading And Magnification- Voice Over- Talk Back', about 2 hours total — these provide essential context on accessibility challenges and assistive technology usage.

*Why it unblocks this paper:* This playlist by Professor K Explains offers a concise, user-focused introduction to accessibility from the perspective of blind and low-vision users, including practical insights on screen readers and assistive technologies, directly relevant to the paper’s focus on making Blockly accessible.

*If you want all of it:* All 14 episodes, approximately 2.2 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on the Extension-Based Accessibility Framework (EAF) for Blockly, start by building foundational knowledge on accessibility challenges in block-based programming, screen reader technology, keyboard navigation models, and modular software accessibility frameworks. These prerequisites provide context on the technical and user interaction challenges addressed by EAF. Finally, focus on the core concept of the paper by watching the authors' own talks and presentations about Blockly accessibility and their novel framework, which directly explain their approach and contributions.

### block-based programming accessibility *(prerequisite)*
This section covers the accessibility challenges and solutions specific to block-based programming environments, which are central to the paper's motivation and problem statement. Understanding these challenges helps contextualize why the authors developed EAF and the importance of making Blockly accessible to blind and low-vision users.

*How the paper uses it:* The paper addresses accessibility barriers in block-based programming environments used in K-12 education.

▶ [How to Make Accessible Custom Blocks | Blockly Summit 2026](https://www.youtube.com/watch?v=KLUYA-6mlf8) — Blockly · 16:07

### screen reader technology *(prerequisite)*
Screen readers are critical assistive technologies for visually impaired users, and the paper emphasizes compatibility with major screen readers. This section provides a technical understanding of how screen readers work and their interaction models, which is essential to appreciate the framework's audio feedback and navigation features.

*How the paper uses it:* EAF integrates WAI-ARIA compliant audio feedback to support screen reader compatibility.

▶ [Victor Tsaran: An Introduction to Screen Readers](https://www.youtube.com/watch?v=izrC4R7SsH4) — YUI Library · 27:24

### keyboard navigation models *(prerequisite)*
The paper introduces a novel 3D hierarchical navigation model relying heavily on keyboard shortcuts and navigation techniques. This section explains advanced keyboard navigation principles and testing methods, which underpin the usability improvements EAF offers for blind and low-vision users.

*How the paper uses it:* EAF implements a 3D navigation model using standardized keyboard shortcuts for improved navigation.

▶ [Keyboard Navigation & Focus Order in A11Y Testing | Accessibility Basics](https://www.youtube.com/watch?v=BzeU7_ceIQI) — Software Testing 101 · 1 year ago

### modular software accessibility frameworks *(prerequisite)*
The extension-based modular design of EAF allows integration without modifying the core Blockly library, a key innovation of the paper. This section introduces concepts of modular frameworks and APIs that facilitate extensibility and maintainability in software accessibility solutions.

*How the paper uses it:* EAF is a modular framework that integrates with Blockly without core library modifications.

▶ [Samuel Levy - Accessibility on the backend - Laracon AU 2023](https://www.youtube.com/watch?v=ede-6Tj1Qbg) — Laracon AU · 33:17

### EAF Blockly accessibility talk *(the paper's own talk)*
This section features the authors' own talks and presentations about their accessibility framework for Blockly. These videos provide direct insights into the design, implementation, and evaluation of EAF, making them the most authoritative and relevant resources for understanding the paper's core contributions.

*How the paper uses it:* These talks directly present the authors' novel accessibility framework and its integration with Blockly.

▶ [Blockly Developer Summit 2019: Making Blockly Accessible for People with Visual Impairments](https://www.youtube.com/watch?v=Ah7rrJUrwS0) — Google TechTalks · 17:03 · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about screen reader technology and keyboard navigation models, which are foundational for accessibility in software. Next, explore block-based programming accessibility to see the challenges and existing solutions in environments like Blockly. Then, study modular software accessibility frameworks to grasp how non-invasive extensions can improve accessibility. Finally, focus on the paper's core innovation: the 3D hierarchical navigation model that enhances spatial orientation and editing for blind and low-vision users.

### screen reader technology *(prerequisite)*
Screen readers are assistive technologies that convert on-screen text into speech or braille, enabling visually impaired users to interact with digital content. Understanding how screen readers navigate and interpret interfaces is crucial for designing accessible software.

*How the paper uses it:* The paper relies on screen reader compatibility to provide auditory feedback for blind and low-vision users interacting with Blockly.

▶ [How Blind People Use Technology: Screen Readers Explained](https://www.youtube.com/watch?v=OkcmWHtkOqY) — THE WORLD ACCORDING TO REECE · 4:53

### keyboard navigation models *(prerequisite)*
Keyboard navigation models define how users move through and interact with software interfaces using only the keyboard. Mastering these models helps in designing accessible navigation schemes that do not rely on a mouse or visual cues.

*How the paper uses it:* The paper introduces a novel 3D navigation model using keyboard shortcuts to enable non-visual navigation of Blockly blocks.

▶ [How to keyboard accessibility test](https://www.youtube.com/watch?v=uO8NJqAtMLM) — Pope Tech · 3 years ago

### block-based programming accessibility *(prerequisite)*
Block-based programming environments use visual blocks to teach coding concepts, but they often lack accessibility for visually impaired users. Learning about the accessibility challenges and existing solutions in these environments provides context for the paper's contributions.

*How the paper uses it:* The paper addresses the inaccessibility of Blockly and similar environments for blind and low-vision learners.

▶ [How to Make Accessible Custom Blocks | Blockly Summit 2026](https://www.youtube.com/watch?v=KLUYA-6mlf8) — Blockly · 16:07

### modular software accessibility frameworks *(prerequisite)*
Modular accessibility frameworks allow adding accessibility features without changing the core software, making integration easier and more maintainable. Understanding this approach helps appreciate the paper's extension-based framework design.

*How the paper uses it:* The paper's Extension-Based Accessibility Framework integrates with Blockly without modifying its core library.

▶ [Modular Framework Explained | Architecture, Components, Execution Flow & Real-Time Example](https://www.youtube.com/watch?v=s3jAc2tcDN0) — Manual&Automation-Softwaretesting-Mentor · 8 days ago

## Already in your library

- [Spatial Intelligence as Structured Representation for Robotics - Wenlong Huang 2.20.2026](https://www.youtube.com/watch?v=0Orgo7j82mU) — also for: ExoPredicator: Learning Abstract Models of Dynamic Worlds for Robot Planning (Tom Silver)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the Extension-Based Accessibility Framework (EAF) for Blockly accessibility. The beginner project recreates a core navigation concept from the paper using familiar web technologies. The intermediate project implements the paper's 3D hierarchical navigation model and compares it to default keyboard navigation in Blockly, requiring new skills in accessibility APIs and screen reader integration. The advanced project extends EAF by addressing a stated limitation: adding support for refreshable braille displays or screen magnifiers, thus exploring compatibility with additional assistive technologies.

### Beginner — Keyboard Navigation Prototype for Blockly Blocks
*Effort: a weekend, ~8 hours*

You build a simple web page embedding a Blockly workspace and implement basic keyboard navigation between blocks using arrow keys and tab. The navigation will include announcing the currently focused block's label via WAI-ARIA live regions to simulate screen reader feedback.

**Why it shows you understood the paper:** This project shows you understand the paper's core problem of keyboard-only navigation for blind and low-vision users and the use of ARIA roles to provide accessible audio feedback without modifying Blockly's core.

**Grounded in:** Demonstrates the paper's contribution of full keyboard navigation and WAI-ARIA compliant audio feedback for screen reader compatibility.

**Tech stack:** JavaScript, HTML, CSS, Blockly JavaScript library

**Data:** No external data needed; uses Blockly's default block definitions.

**Build it:**

1. Set up a basic HTML page embedding Blockly with a simple block workspace.
2. Implement keyboard event handlers to move focus between blocks using arrow keys and tab.
3. Add WAI-ARIA live region elements to announce the focused block's label on navigation.
4. Test keyboard navigation and audio announcements using browser accessibility tools.
5. Document the navigation model and how it relates to the paper's approach.

**Ships as:** A GitHub repo with a working Blockly page supporting keyboard navigation and ARIA announcements, plus a README explaining the connection to the paper's accessibility framework.

**Stretch goal:** Add mode-based editing to prevent accidental changes, mimicking the paper's mode-based editing feature.

### Intermediate — 3D Hierarchical Navigation Model for Blockly Accessibility
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's novel 3D hierarchical navigation model for Blockly blocks, including stack labeling and block numbering. You compare this navigation model's usability against default Blockly keyboard navigation by measuring navigation efficiency and user feedback simulated via automated tests or expert walkthroughs.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core method from its detailed description, including hierarchical navigation and standardized shortcuts, and to evaluate it against a baseline, showing comprehension of the paper's key contributions and validation approach.

**Grounded in:** Reimplements the paper's key contribution of the 3D navigation and editing model featuring stack labeling, block numbering, and standardized keyboard shortcuts, and validates it with metrics similar to the paper's 85.9% pass rate on test cases.

**Tech stack:** JavaScript, React (optional), Blockly JavaScript library, ARIA APIs

**Data:** Uses Blockly's standard block sets as a substitute for the paper's test cases; no proprietary data required.

**Build it:**

1. Create a Blockly workspace with a representative set of nested blocks.
2. Implement the 3D hierarchical navigation model with stack labeling and block numbering using keyboard shortcuts.
3. Integrate WAI-ARIA roles and live regions for screen reader compatibility.
4. Develop automated tests or scripted walkthroughs to measure navigation success and error rates compared to default Blockly navigation.
5. Write a report summarizing navigation efficiency and qualitative feedback, referencing the paper's validation results.

**Ships as:** A GitHub repo with the enhanced Blockly navigation implementation, test scripts, and a README with comparative evaluation and discussion linking back to the paper.

**Stretch goal:** Add support for multiple screen readers (VoiceOver, JAWS, NVDA) and report on compatibility issues.

### Advanced — Extending EAF for Refreshable Braille Display Compatibility
*Effort: 3+ weeks*

You extend the Extension-Based Accessibility Framework by adding support for refreshable braille displays, addressing one of the paper's stated limitations. This involves integrating braille output APIs, adapting the 3D navigation model to provide braille-friendly feedback, and testing with available braille emulators or devices.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's future directions and limitations, applying the modular extension approach to a new assistive technology domain, demonstrating research potential and engineering creativity.

**Grounded in:** Addresses the paper's limitation and future direction of evaluating and extending EAF's compatibility with additional assistive technologies such as braille displays.

**Tech stack:** JavaScript, Node.js, Blockly JavaScript library, Web Bluetooth API or Braille display APIs (where available)

**Data:** Uses Blockly blocks and navigation data; no external datasets required.

**Build it:**

1. Research available APIs or emulators for refreshable braille displays compatible with web applications.
2. Modify the EAF keyboard navigation model to output braille-friendly text and navigation cues.
3. Implement an interface layer that translates Blockly block structure and navigation state into braille output.
4. Test the implementation with braille display emulators or real devices if accessible.
5. Document the design decisions, challenges, and how this extension fits into the modular EAF framework.

**Ships as:** A GitHub repo demonstrating EAF extended with braille display support, including usage instructions and a detailed README connecting the work to the paper's accessibility goals and limitations.

**Stretch goal:** Explore adding configurable verbosity and speech rate settings for screen reader feedback as another future direction.
