---
title: "617 · MyZone: A Next-Generation Online Social Network — John Black"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-john-black"
source_hash: "b6da43153eadbd4fd8bb3eafbad7c796a0212288ec86626b163a7adc89fd846c"
sequence: 617
generator: "outreach-garden: managed"
---

# 617 · MyZone: A Next-Generation Online Social Network

## At a glance

- **Professor:** John Black
- **Institution:** University of Colorado Boulder
- **Paper:** [MyZone: A Next-Generation Online Social Network](https://arxiv.org/pdf/1110.5371)
- **Authors:** Alireza Mahdian, John Black, Richard Han, Shivakant Mishra
- **Year:** 2011

## Paper overview

This paper proposes MyZone, a new design for online social networks (OSNs) that addresses privacy, security, availability, and censorship issues found in current centralized OSNs. It uses a distributed peer-to-peer architecture where users own their data and replicate it on trusted friends' devices. The design aims to be resilient against attacks and network failures, support all main OSN features, and work well even in hostile or partitioned network environments.

### Why it matters

**Research problem:** Current centralized OSNs violate user privacy by allowing service providers full access to user data, are vulnerable to censorship and denial-of-service attacks, and cause user frustration due to multiple platforms and changing policies. There is a need for a distributed OSN architecture that preserves privacy, ensures availability, and resists censorship and attacks.

**Why it matters:** OSNs have become pervasive social media with hundreds of millions of users, but centralized control leads to privacy violations, censorship by governments, and security vulnerabilities. Users are increasingly concerned about privacy and censorship, and current OSNs fail to provide a trustworthy, resilient platform. A next-generation OSN that addresses these issues would empower users and protect their data and communication.

**Key contributions:**

- Design of a distributed OSN architecture that preserves user privacy by storing data on user devices and trusted friends' mirrors.
- A two-layer system design separating secure service infrastructure from OSN application features.
- A trust model defining multiple trust levels including certificate authority, friend, mirror, and replica trust.
- Mechanisms for NAT traversal and relay servers to enable connectivity behind firewalls and NATs.
- Security measures to detect and recover from malicious rendezvous servers and other attacks.

## About the professor

**John Black** — Associate Professor, Computer Science, University of Colorado Boulder.

Research interests: cryptography and security, combinatorial algorithms, graph theory, and recreational math

### Research links

- [Faculty/profile page](https://www.cs.colorado.edu/~jrblack)
- [Professor website](http://www.cs.colorado.edu/~jrblack)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Distributed Systems
**The paper assumes:** distributed systems principles, peer-to-peer networking, replication and consistency models, network security in distributed environments
**Already in this field?** Skip this entirely if you already understand core distributed systems concepts including replication, consistency, fault tolerance, and peer-to-peer network architectures.

To understand the design and implementation of MyZone, a distributed peer-to-peer online social network, a solid grasp of distributed systems concepts such as replication, consistency, trust models, and network challenges like NAT traversal is essential. The rigorous course option offers a deep, university-level exploration of distributed systems principles, while the fast track provides a concise, intuition-driven introduction to the key ideas, suitable for quickly gaining the necessary background.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Distributed Systems (www.distributedsystemscourse.com)](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) — Distributed Systems Course · 18 videos · 4.5h across 18 episodes

**Watch only this:** Episodes 1 through 6 (What is a distributed system?, Why build one?, How to learn distributed systems, What could go wrong?, The many types of fail, Byzantine Fault Tolerance), about 1.5 hours — these episodes introduce core concepts and challenges in distributed systems necessary to grasp the paper's context.

*Why it unblocks this paper:* This short-form series offers clear, focused explainers on distributed systems fundamentals, including failure modes, consensus, consistency, and the CAP theorem, providing an efficient conceptual overview relevant to MyZone's peer-to-peer and trust-based design.

*If you want all of it:* All 18 episodes, about 4.5 hours — for a broader but still concise coverage of distributed systems topics.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MyZone paper, start by building foundational knowledge on trust models in distributed systems, NAT traversal techniques, and security and privacy in decentralized social networks. These prerequisites provide the necessary background on trust relationships, network connectivity challenges, and privacy/security concerns that MyZone addresses. Finally, focus on the core concept of distributed peer-to-peer social networks and the authors' own talk if available, to grasp the specific architectural design and innovations of MyZone.

### Trust models in distributed systems *(prerequisite)*
Trust models are critical to understanding how MyZone establishes multiple trust levels such as certificate authority, friend trust, and mirror trust to secure data replication and communication. This section covers advanced university lectures on distributed consensus and trust without centralized trust, providing a rigorous foundation for MyZone's trust architecture.

*How the paper uses it:* MyZone's trust model defines multiple trust levels including certificate authority and friend trust to secure the distributed OSN.

▶ [Lecture 6: Trust without Trust, Distributed Systems & Consensus](https://www.youtube.com/watch?v=ZMNnjmEfWRo) — Blockchain at Berkeley · 1:21:43 · 4y ago

### NAT traversal techniques *(prerequisite)*
NAT traversal is essential for enabling peer-to-peer connectivity behind firewalls and NAT devices, a key challenge MyZone addresses with STUN and relay servers. This section includes detailed technical webinars and lectures explaining NAT traversal mechanisms and their role in secure network communication.

*How the paper uses it:* MyZone's service layer incorporates NAT traversal and relay servers to enable connectivity behind restrictive network environments.

▶ [Tailscale Webinar - NAT Traversal explained with Lee Briggs](https://www.youtube.com/watch?v=7EoCa9HP9Bc) — Tailscale · 1:12:07 · 2y ago

### Security and privacy in decentralized social networks *(prerequisite)*
Understanding the security and privacy challenges in decentralized social networks is fundamental to appreciating MyZone's design goals. This section presents university-level lectures and research talks on privacy threats, security mechanisms, and decentralized social media architectures.

*How the paper uses it:* MyZone aims to preserve user privacy and resist attacks by decentralizing data storage and enforcing access control.

▶ [ARES 2021 - Enabling Privacy-Preserving Rule Mining in Decentralized Social Networks](https://www.youtube.com/watch?v=AKjDMnSdQ_c) — ARES & CD-MAKE Conference · 14:53 · 5y ago

### Distributed peer-to-peer social networks
This core concept covers the architectural paradigm underlying MyZone's design, focusing on peer-to-peer networking models that enable decentralized social networking. The selected video explains P2P network operation and system design considerations relevant to MyZone's approach.

*How the paper uses it:* MyZone uses a distributed peer-to-peer architecture to decentralize social network data and functionality.

▶ [How Peer to Peer (P2P) Network works | System Design Interview Basics](https://www.youtube.com/watch?v=2v6KqRB7adg) — ByteMonk · 11:13 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts essential to understanding MyZone, a distributed, privacy-preserving online social network. We start with the basics of peer-to-peer networks to grasp the architectural paradigm, then explore trust models critical for securing distributed systems, followed by NAT traversal techniques that enable connectivity behind firewalls. Finally, we focus on security and privacy challenges specific to decentralized social networks, culminating in a direct look at the MyZone paper talk for author insights.

### Distributed peer-to-peer social networks *(prerequisite)*
Peer-to-peer (P2P) networks allow devices (peers) to communicate directly without relying on a central server, which is fundamental to MyZone's architecture. Understanding how P2P differs from client-server models helps grasp how MyZone achieves decentralization and resilience.

*How the paper uses it:* MyZone uses a distributed peer-to-peer architecture to store user data on user devices and trusted friends, avoiding centralized control.

▶ [How Peer to Peer (P2P) Network works | System Design Interview Basics](https://www.youtube.com/watch?v=2v6KqRB7adg) — ByteMonk · 11:13 · 4y ago

### Trust models in distributed systems *(prerequisite)*
Trust models define how entities in a distributed system verify and rely on each other, which is crucial for security and data integrity. Learning about different trust levels and consensus mechanisms helps understand how MyZone manages friend trust, mirror trust, and certificate authorities.

*How the paper uses it:* MyZone defines multiple trust levels including certificate authority, friend, mirror, and replica trust to secure user data and interactions.

▶ [Lecture 6: Trust without Trust, Distributed Systems & Consensus](https://www.youtube.com/watch?v=ZMNnjmEfWRo) — Blockchain at Berkeley · 1:21:43 · 4y ago

### NAT traversal techniques *(prerequisite)*
Network Address Translation (NAT) traversal techniques enable devices behind routers and firewalls to establish direct connections, which is essential for peer-to-peer communication. Understanding NAT and traversal methods explains how MyZone ensures connectivity despite network barriers.

*How the paper uses it:* MyZone's service layer includes STUN and relay servers to enable NAT traversal and maintain peer connectivity behind firewalls.

▶ [NAT and NAT-Traversal Explained - Network Address Translation](https://www.youtube.com/watch?v=5DhHcIuBn1g) — lemonade in tech · 10:28 · 3y ago

### Security and privacy in decentralized social networks *(prerequisite)*
Decentralized social networks face unique security and privacy challenges since data is distributed across peers rather than centralized servers. Learning these challenges and mitigation strategies provides context for MyZone's privacy-preserving design.

*How the paper uses it:* MyZone aims to preserve user privacy and resist attacks by storing data only on user devices and trusted mirrors in a distributed manner.

▶ [Privacy and Security in Online Social Media](https://www.youtube.com/watch?v=AQClJAif5w8) — NPTEL-NOC IITM · 5:51 · 3y ago

### MyZone paper talk *(paper-talk search result; attribution unverified)*
A direct talk by the authors offers insights into the motivations, design decisions, and challenges of MyZone, complementing the technical understanding gained from foundational concepts.

*How the paper uses it:* Hearing from the authors themselves provides deeper understanding of MyZone's architecture and security goals.

▶ [What’s wrong with GenZ? | MA Podcast Season 2 Episode 97 Feat. Yasin Asad](https://www.youtube.com/watch?v=WUHLRhiZESM) — Muhammad Ali · 56:00 · 7d ago

## Already in your library

- [Peer-to-Peer Architectural Model: Overlay Network, Unstructured & Structured P2P, Advtgs & Disadvtgs](https://www.youtube.com/watch?v=5TlXplq3wv4) — also for: Managing Edge Resources at Scale: A Peer-to-Peer CDN for On-Demand Video Streaming (Klara Nahrstedt)
- [What is Network Architecture? full Explanation | Peer to Peer and Client-Server architecture](https://www.youtube.com/watch?v=MvPFBVy2hy4) — also for: Managing Edge Resources at Scale: A Peer-to-Peer CDN for On-Demand Video Streaming (Klara Nahrstedt)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of MyZone's distributed, privacy-preserving OSN design. The beginner project recreates a core mechanism of user data replication on trusted peers, the intermediate project implements a simplified peer-to-peer OSN service layer with NAT traversal and trust concepts, and the advanced project tackles a key open problem from the paper by designing and evaluating an incentive mechanism for mirror selection and synchronization.

### Beginner — Simulate User Profile Replication on Trusted Peers
*Effort: a weekend, ~8 hours*

You build a small simulation of MyZone's core idea of replicating user profiles only on trusted friends' devices. The simulation models a small network of users and their trust relationships, and demonstrates how profile data is replicated and accessed only by trusted mirrors.

**Why it shows you understood the paper:** This project shows you grasp the paper's key privacy-preserving trust model and data replication approach, demonstrating how user data ownership and selective replication work in a distributed OSN.

**Grounded in:** Design of a distributed OSN architecture that preserves user privacy by storing data on user devices and trusted friends' mirrors.

**Tech stack:** JavaScript, Node.js

**Data:** Synthetic data simulating user profiles and friend trust relationships generated within the simulation.

**Build it:**

1. Model a small network of users with friend relationships and trust levels.
2. Implement profile data objects owned by each user.
3. Simulate replication of profile data only to trusted friends acting as mirrors.
4. Implement read access controls so only trusted mirrors can access replicated data.
5. Demonstrate data availability when original user is offline but mirrors serve data.

**Ships as:** A Node.js simulation with README explaining the trust model, replication logic, and example runs showing profile availability and privacy.

**Stretch goal:** Add a simple visualization of the network and replication state using a JavaScript graph library.

### Intermediate — Implement a Simplified P2P OSN Service Layer with NAT Traversal
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of MyZone's service layer that supports peer registration, friend discovery, and NAT traversal using STUN and relay servers. The system enforces friend-based trust for profile replication and supports secure socket communication between peers.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core distributed infrastructure and trust model, including handling NAT traversal challenges and secure peer communication, which are central to MyZone's design.

**Grounded in:** A two-layer system design separating secure service infrastructure from OSN application features; mechanisms for NAT traversal and relay servers to enable connectivity behind firewalls and NATs.

**Tech stack:** Java 11 or 17, Netty or Java NIO for networking, STUN client library, Docker for relay server

**Data:** Synthetic user identities and friend trust relationships created for testing peer registration and replication.

**Build it:**

1. Implement a peer registration service with certificate-based identity verification.
2. Implement a basic STUN client to discover NAT type and public IP/port.
3. Set up a relay server to forward traffic when direct NAT traversal fails.
4. Implement friend discovery and trust verification between peers.
5. Implement secure socket communication between peers using TLS or similar.
6. Simulate profile replication on trusted friends' devices with access control.

**Ships as:** A Java-based service layer prototype with README documenting architecture, NAT traversal handling, trust enforcement, and instructions to run relay and peer nodes.

**Stretch goal:** Add logging and detection of malicious rendezvous behavior as described in the paper's security measures.

### Advanced — Design and Evaluate Incentive Mechanisms for Mirror Selection and Synchronization
*Effort: 3+ weeks*

You design an incentive mechanism, possibly using game-theoretic or reputation-based approaches, to motivate users to act as reliable mirrors in MyZone. You implement a prototype simulation or small-scale deployment to evaluate how incentives affect mirror selection, replication consistency, and system availability.

**Why it shows you understood the paper:** This project addresses a key open problem and future direction identified by the paper, demonstrating deep comprehension of MyZone's limitations and extending its design to improve availability and user participation.

**Grounded in:** Mirror selection strategy and incentives for mirrors are not addressed and remain open problems; defining synchronization protocols and timing for mirror updates.

**Tech stack:** TypeScript, Node.js, React (optional for UI)

**Data:** Synthetic network of users with trust relationships and simulated mirror availability and behavior.

**Build it:**

1. Research incentive mechanisms and game-theoretic models applicable to mirror selection.
2. Design an incentive protocol that rewards users for acting as mirrors based on availability and trust.
3. Implement a simulation environment modeling user behavior, mirror selection, and synchronization timing.
4. Evaluate system availability and consistency metrics under different incentive schemes.
5. Optionally, build a simple UI to visualize mirror selection and incentive effects.
6. Document findings and limitations in a detailed README.

**Ships as:** A prototype simulation and analysis demonstrating how incentives impact mirror reliability and synchronization, with code and documentation.

**Stretch goal:** Integrate the incentive mechanism with a minimal P2P OSN prototype implementing MyZone's trust and replication model.
