---
title: "626 · Lost in Translation: Text Message Spoofing via Email — Aaron Schulman"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aaron-schulman"
source_hash: "8b580bd7873949bc57a520bcce721feef76eb0334eee99a65a1ba953afa084e9"
sequence: 626
generator: "outreach-garden: managed"
---

# 626 · Lost in Translation: Text Message Spoofing via Email

## At a glance

- **Professor:** Aaron Schulman
- **Institution:** Univ. of California - San Diego
- **Paper:** [Lost in Translation: Text Message Spoofing via Email](https://sumanthvrao.github.io/papers/rao-oakland-2026.pdf)
- **Authors:** Sumanth Rao, Ye Shu, Stefan Savage, Aaron Schulman, Geoffrey M. Voelker, Enze Liu
- **Year:** 2026

## Paper overview

This paper reveals and experimentally confirms vulnerabilities in smartphone messaging systems that allow attackers to spoof text messages by exploiting the way email messages are converted and delivered as SMS/MMS by cellular carriers. The attacks can impersonate arbitrary senders and inject messages into existing conversations on popular phones and carriers.

### Why it matters

**Research problem:** The paper investigates how ambiguities in the conversion of email messages to SMS/MMS by carrier gateways and the interpretation of sender identities by smartphone messaging apps create security vulnerabilities that enable text message spoofing.

**Why it matters:** Text messaging is widely used for communication and increasingly for sensitive notifications. Spoofing messages can lead to impersonation, phishing, misinformation, and other security threats. Understanding and mitigating these vulnerabilities is critical for user safety and trust in mobile communications.

**Key contributions:**

- Developed a methodology to infer email-to-SMS/MMS conversion rules across major U.S. carriers.
- Systematically explored and validated how popular smartphone messaging apps parse and interpret sender identities, revealing parsing bugs.
- Demonstrated practical end-to-end spoofing attacks that allow arbitrary sender impersonation and message injection into existing threads without privileged access.
- Analyzed the security mechanisms of carrier gateways and identified ways to bypass SPF, DKIM, and DMARC protections.
- Disclosed vulnerabilities responsibly leading to fixes by Google and Apple and carrier mitigations.

## About the professor

**Aaron Schulman** — Associate Professor, Computer Science and Engineering, Univ. of California - San Diego.

Research interests: security, networking (mostly wireless), and embedded systems

### Research links

- [Faculty/profile page](http://cseweb.ucsd.edu/~schulman)
- [Resolved homepage](https://cseweb.ucsd.edu/~schulman/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Email and SMS Security Protocols
**The paper assumes:** email authentication protocols SPF DKIM DMARC and their role in messaging security
**Already in this field?** Skip this entirely if you already understand email authentication standards and their security implications in messaging systems.

This background focuses on email and SMS security protocols, specifically the authentication mechanisms SPF, DKIM, and DMARC, which are critical to understanding the vulnerabilities and spoofing attacks discussed in the paper. The rigorous course option provides a deep, structured exploration of these protocols suitable for thorough technical grounding, while the fast track offers a concise, practical overview for quicker comprehension. Choose the rigorous course if you want detailed technical knowledge; choose the fast track if you need a focused, time-efficient primer.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Email Authentication Tutorials - Secure Your Email Step-by-Step](https://www.youtube.com/playlist?list=PLdPOHqugh3WFMgTfg2AN0qbsqvd4_SRdq) — PowerDMARC · 11 videos · 0.8h across 11 episodes

**Watch only this:** Episodes 2 and 3: 'How to Set Up SPF Record? Step-by-Step Guide to Protect Your Domain' and 'SPF, DKIM and DMARC Protocols Explained', about 8 minutes total — these give a fast yet solid overview of the key protocols.

*Why it unblocks this paper:* The PowerDMARC tutorial series provides concise, clear, and practical explanations of SPF, DKIM, and DMARC protocols and their setup, ideal for quickly grasping the essentials of email authentication and spoofing prevention relevant to the paper.

*If you want all of it:* All 11 episodes, about 44 minutes total — for a broader practical understanding of email security setup and management.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the vulnerabilities and spoofing attacks detailed in the paper "Lost in Translation: Text Message Spoofing via Email," start by grounding yourself in foundational concepts such as network protocol spoofing attacks, email authentication protocols, and mobile messaging app security. These prerequisites provide the necessary background on how spoofing works at the network and protocol level, and how email authentication mechanisms like SPF, DKIM, and DMARC operate and can be circumvented. Finally, focus on the paper's core concept by watching the authors' own talk or a closely related advanced presentation on SMS spoofing to directly connect the foundational knowledge with the paper's novel contributions and experimental findings.

### Network protocol spoofing attacks *(prerequisite)*
Understanding network protocol spoofing attacks is essential as it lays the groundwork for how attackers can impersonate identities in communication protocols. This knowledge helps in grasping the mechanisms attackers exploit to spoof messages at the network level, which is foundational to the paper's exploration of spoofing via email-to-SMS gateways.

*How the paper uses it:* The paper builds on the concept of spoofing attacks at the network and protocol layers to demonstrate how email-to-SMS gateways can be exploited for text message spoofing.

▶ [[Networking3, Video 15] TCP Spoofing Attack](https://www.youtube.com/watch?v=jO0IN9pUltQ) — CS 161 (Computer Security) at UC Berkeley · 7:20 · 1y ago

### Email authentication protocols *(prerequisite)*
Email authentication protocols such as SPF, DKIM, and DMARC are critical to understanding how email spoofing protections work and their limitations. Since the paper analyzes how these protocols are implemented and bypassed by carrier gateways, a solid grasp of these protocols is necessary to appreciate the vulnerabilities identified.

*How the paper uses it:* The paper analyzes flaws in SPF, DKIM, and DMARC implementations by carrier gateways that enable spoofing attacks.

▶ [How DKIM SPF & DMARC Work to Prevent Email Spoofing](https://www.youtube.com/watch?v=c9fLp5uIxp8) — Thobson Technologies · 17:15 · 5y ago

### Mobile messaging app security *(prerequisite)*
Mobile messaging app security provides insight into how smartphone messaging stacks parse and interpret messages, including potential parsing vulnerabilities. This background is vital to understand the paper's findings on how crafted email sender addresses are misinterpreted by iOS and Android messaging apps, enabling spoofing.

*How the paper uses it:* The paper reverse engineers iOS and Android messaging stacks to reveal parsing vulnerabilities that facilitate spoofing.

▶ [20. Mobile Phone Security](https://www.youtube.com/watch?v=uT7BXusDgDM) — MIT OpenCourseWare · 1:22:00 · 9y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides the most direct and authoritative explanation of their research, methodology, and findings. Watching this talk will give an advanced reader a comprehensive understanding of the paper's contributions and the practical implications of the discovered vulnerabilities.

*How the paper uses it:* This is the authors' presentation of their work on text message spoofing via email, directly explaining their research and results.

▶ [Hack With SMS | SMS Spoofing like Mr. Robot!](https://www.youtube.com/watch?v=umPqpgbCSHY) — zSecurity · 11:32 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the vulnerabilities in text message spoofing via email as explored in the paper, start by learning the foundational concepts of email authentication protocols like SPF, DKIM, and DMARC, which are critical for preventing spoofing. Next, build intuition on network protocol spoofing attacks to grasp how attackers manipulate communication protocols. Then, explore mobile messaging app security to understand how smartphone apps parse and display messages, leading to vulnerabilities. Finally, focus on the core concept of email-to-SMS gateway security, which is central to how carrier gateways convert emails to text messages and where the paper identifies key weaknesses.

### Email authentication protocols *(prerequisite)*
Learn how SPF, DKIM, and DMARC work together to verify email sender identities and prevent spoofing. These protocols form the first line of defense against email-based attacks by authenticating the source and integrity of emails.

*How the paper uses it:* The paper analyzes how carrier gateways implement and sometimes bypass these protocols, enabling spoofing.

▶ [How DKIM SPF & DMARC Work to Prevent Email Spoofing](https://www.youtube.com/watch?v=c9fLp5uIxp8) — Thobson Technologies · 17:15 · 5y ago

### Network protocol spoofing attacks *(prerequisite)*
Understand the basics of spoofing attacks in network protocols, where attackers impersonate legitimate devices or users by falsifying network addresses. This foundational knowledge helps explain how spoofing can extend to messaging systems.

*How the paper uses it:* The paper’s spoofing attacks exploit similar principles at the messaging protocol level.

▶ [[Networking3, Video 15] TCP Spoofing Attack](https://www.youtube.com/watch?v=jO0IN9pUltQ) — CS 161 (Computer Security) at UC Berkeley · 7:20 · 1y ago

### Mobile messaging app security *(prerequisite)*
Explore how messaging apps on smartphones parse and display incoming messages, and how parsing bugs can lead to security vulnerabilities like spoofing. This includes how sender identities are interpreted and displayed to users.

*How the paper uses it:* The paper reverse engineers iOS and Android messaging stacks to reveal parsing vulnerabilities that enable spoofing.

▶ [20. Mobile Phone Security](https://www.youtube.com/watch?v=uT7BXusDgDM) — MIT OpenCourseWare · 1:22:00 · 9y ago

### Email to SMS gateway security
Focus on how cellular carriers convert emails into SMS/MMS messages via gateways, including the mapping of email headers to sender identities. Understanding these gateways is key to grasping how spoofing attacks can bypass protections.

*How the paper uses it:* The paper’s core contribution is analyzing and exploiting vulnerabilities in major U.S. carrier email-to-SMS gateways.

▶ [Email Security - CompTIA Security+ SY0-701 - 4.5](https://www.youtube.com/watch?v=v6ht9efsnRI) — Professor Messer · 7:05 · 2y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Watch the authors explain their findings and demonstrate the practical implications of text message spoofing attacks via email. This provides direct insight into the research and its real-world impact.

*How the paper uses it:* This video illustrates the spoofing techniques and their effects as demonstrated by the paper’s authors.

▶ [Hack With SMS | SMS Spoofing like Mr. Robot!](https://www.youtube.com/watch?v=umPqpgbCSHY) — zSecurity · 11:32 · 3y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the vulnerabilities in email-to-SMS/MMS gateways and smartphone messaging stacks as described in the paper "Lost in Translation: Text Message Spoofing via Email." The beginner project reproduces a core spoofing mechanism on a small scale using familiar tools. The intermediate project builds on the authors' released code to empirically analyze spoofing attack success across carrier gateways. The advanced project extends the research by exploring defenses through improved parsing or user-visible indicators, addressing the paper's future directions.

### Beginner — Email-to-SMS Spoofing Proof-of-Concept
*Effort: a weekend, ~8 hours*

You build a simple script that crafts and sends spoofed email messages to a test SMS gateway (using a carrier's email-to-SMS address format) to demonstrate how sender spoofing can occur. The project includes a basic analysis of how the spoofed sender appears on a smartphone messaging app (e.g., Android Messages or iMessage) by capturing screenshots or logs.

**Why it shows you understood the paper:** This project shows you understand the core vulnerability of sender identity spoofing via email-to-SMS conversion and how crafted email headers can manipulate the perceived sender on a phone, a key insight from the paper.

**Grounded in:** Demonstrated practical end-to-end spoofing attacks that allow arbitrary sender impersonation and message injection into existing threads without privileged access.

**Tech stack:** Python 3.11, smtplib, email.message, Android or iOS smartphone for testing

**Data:** No external dataset required; you simulate spoofed emails sent to your own phone number via carrier email-to-SMS gateway addresses (e.g., number@txt.att.net).

**Build it:**

1. Research and identify your carrier's email-to-SMS gateway address format.
2. Write a Python script to craft an email with spoofed 'From' headers targeting your phone's SMS gateway address.
3. Send the spoofed email and observe how the message appears on your smartphone messaging app.
4. Document the observed sender spoofing behavior with screenshots or logs.
5. Explain how the email headers influence the displayed sender identity.

**Ships as:** A GitHub repo with the spoofing script, instructions to run it, and documented observations showing spoofed sender messages on a smartphone.

**Stretch goal:** Add support for crafting MMS messages with spoofed sender info or test multiple carriers' gateway formats.

### Intermediate — Empirical Analysis of Email-to-SMS Gateway Spoofing
*Effort: 2 weekends, ~20 hours*

You extend and run the authors' released code from https://github.com/ucsdsysnet/email2sms to reproduce their methodology of testing spoofing attacks across multiple U.S. carrier gateways. You analyze the success rates of different spoofing techniques and compare them against baseline SPF/DKIM/DMARC protections. You produce a report with tables and visualizations similar to those in the paper.

**Why it shows you understood the paper:** By working directly with the authors' code and reproducing their experimental results, you demonstrate comprehension of the complex interplay between carrier gateway behaviors and email authentication flaws that enable spoofing.

**Grounded in:** Developed a methodology to infer email-to-SMS/MMS conversion rules across major U.S. carriers and analyzed security mechanisms of carrier gateways identifying ways to bypass SPF, DKIM, and DMARC protections.

**Tech stack:** Python 3.11, Git, matplotlib or seaborn for visualization

**Data:** No external dataset; uses the authors' spoofing attack scripts and your own test phone numbers on multiple U.S. carriers (or simulated gateway responses if real testing is limited).

**Build it:**

1. Clone and set up the authors' email2sms repository.
2. Configure test environment with at least one phone number on a U.S. carrier supporting email-to-SMS gateway.
3. Run the suite of spoofing attack scripts against the carrier gateway.
4. Collect and analyze results on which spoofing techniques succeed or fail.
5. Compare results against SPF/DKIM/DMARC policies and document findings.
6. Create visualizations and a report summarizing spoofing success rates and gateway behaviors.

**Verified links from the paper:**

- <https://github.com/ucsdsysnet/email2sms> — released by the paper's authors

**Ships as:** A GitHub repo fork with your analysis scripts, results, visualizations, and a detailed README report reproducing key findings from the paper.

**Stretch goal:** Add a simple baseline spoofing test that does not bypass SPF/DKIM/DMARC to highlight the improvement by advanced techniques.

### Advanced — Prototype Defense Mechanism for Email-to-SMS Spoofing
*Effort: 3+ weeks*

You design and implement a prototype tool or patch that improves sender identity parsing in a smartphone messaging app or a gateway simulation to detect and flag spoofed messages. Alternatively, you build a user-visible indicator system that warns users of potential spoofing based on heuristics derived from the paper's findings. You evaluate your defense against known spoofing samples from the authors' dataset or your own crafted messages.

**Why it shows you understood the paper:** This project tackles a future direction from the paper by addressing the parsing vulnerabilities or user notification gaps, demonstrating deep understanding of the attack vectors and practical mitigation strategies.

**Grounded in:** Future directions: Improvements in handset messaging stacks to robustly parse sender identities and prevent spoofing; development of user-visible indicators or verification mechanisms to detect spoofed messages.

**Tech stack:** TypeScript/React (for UI prototype), Python 3.11 (for message parsing simulation), Android/iOS emulator or messaging app fork if feasible

**Data:** Uses spoofed message samples from the authors' email2sms scripts or manually crafted spoofed emails to test detection effectiveness.

**Build it:**

1. Study the parsing vulnerabilities described in the paper and identify heuristics to detect spoofed sender addresses.
2. Implement a parser or filter module that flags suspicious sender identities in email-to-SMS converted messages.
3. Build a simple UI prototype (web or mobile) that displays messages with spoofing warnings or visual indicators.
4. Test your defense against a set of spoofed messages generated using the authors' scripts or your own crafted samples.
5. Evaluate detection accuracy and discuss usability trade-offs.
6. Document your design decisions, implementation details, and evaluation results.

**Verified links from the paper:**

- <https://github.com/ucsdsysnet/email2sms> — released by the paper's authors

**Ships as:** A GitHub repo with the defense prototype code, test cases, and a comprehensive README explaining the approach, evaluation, and limitations.

**Stretch goal:** Integrate your defense into an open-source messaging app fork or propose a patch to an emulator to demonstrate real-world applicability.
