---
title: "617 · MyZone: A Next-Generation Online Social Network — John Black"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-john-black"
source_hash: "12955af3932ba14c5442afa5b0a28e54264c4802064a3cd6949783182912b791"
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

This paper proposes MyZone, a peer-to-peer online social network designed to overcome the privacy, security, and availability shortcomings of current centralized social networks. It uses a distributed architecture where users own their data, replicated only on trusted friends' devices, ensuring privacy and resilience against censorship and attacks.

### Why it matters

**Research problem:** Current online social networks (OSNs) suffer from privacy violations due to centralized data control, vulnerability to censorship and denial-of-service attacks, user confusion from multiple platforms, and security risks from centralized data centers.

**Why it matters:** OSNs have become pervasive social media platforms with huge social impact, but centralized architectures expose users to privacy violations, government censorship, and security breaches, undermining user trust and the social utility of these networks.

**Key contributions:**

- Design of a distributed OSN architecture that preserves user privacy by decentralizing data storage to trusted friends.
- Definition of a trust model with multiple trust levels (certificate authority, user, friend, mirror, replica) to manage data access and replication securely.
- Development of a service layer that supports NAT traversal, secure peer connections, and resilient rendezvous and relay servers.
- Security measures addressing confidentiality, integrity, availability, authenticity, and consistency in hostile environments.
- A local deployment model (Democracy IN A Box) for private OSNs usable under censorship and network partitioning.

## About the professor

**John Black** — Associate Professor, Computer Science, University of Colorado Boulder.

Research interests: cryptography and security, combinatorial algorithms, graph theory, and recreational math

### Research links

- [Faculty/profile page](https://www.cs.colorado.edu/~jrblack)
- [Professor website](http://www.cs.colorado.edu/~jrblack)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Distributed Systems Security
**The paper assumes:** distributed systems security, peer-to-peer networking, trust models, secure communication protocols
**Already in this field?** Skip this entirely if you already understand the principles of secure distributed systems and peer-to-peer network security.

To fully understand the design and security guarantees of MyZone, a distributed peer-to-peer social network, background knowledge in distributed systems security is essential. The rigorous course option provides a deep, structured university-level foundation on computer systems design and security principles relevant to distributed architectures. The fast-track option offers a concise, focused introduction to distributed systems concepts and challenges, suitable for quickly grasping the core ideas behind secure peer-to-peer networks and their trust models.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Jan 2022 - Design and Engineering of Computer Systems](https://www.youtube.com/playlist?list=PLOzRYVm0a65dAAfy0d4aRtj5v0OCAvoCY) — NPTEL IIT Bombay · 54 videos · 22.3h across 54 episodes

**Watch only this:** Lectures 1 through 15 (Introduction to Computer Systems through Optimizing Memory Access), about 6 hours — covering core system design, OS concepts, processes, threads, scheduling, virtualization, and memory management relevant to distributed systems security.

*Why it unblocks this paper:* This NPTEL IIT Bombay course covers comprehensive topics on computer systems design, including operating systems, networking, and security fundamentals that underpin distributed systems security. It provides the rigorous technical foundation needed to understand the service layer components, NAT traversal, and security guarantees MyZone relies on.

*If you want all of it:* 22.3 hours across all 54 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Distributed Systems - design and algorithms](https://www.youtube.com/playlist?list=PLK_7cs6EN_4PkB8NrlPEqNOi7JSeie8PW) — Database Podcasts · 20 videos · 2.2h across 20 episodes

**Watch only this:** Episodes 1 through 7 (Beyond Centralized Data through Ensuring Availability & Fault Tolerance), about 45 minutes — covering distributed architectures, P2P networks, trust, and fault tolerance essential for understanding MyZone's design.

*Why it unblocks this paper:* This short-form series from Database Podcasts succinctly explains key distributed systems concepts including peer-to-peer networks, trust building, availability, fault tolerance, and cryptography basics. It directly addresses the core challenges MyZone tackles, providing a quick yet substantive overview.

*If you want all of it:* 2.2 hours across all 20 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MyZone paper, start with foundational concepts including peer-to-peer social networks, distributed trust models, NAT traversal techniques, and secure distributed systems security. These prerequisites provide the necessary background on decentralized architectures, trust management, network connectivity challenges, and security guarantees. Finally, focus on the core concept of distributed OSN architecture, culminating with the authors' own talk if available, to grasp the specific design and implementation details of MyZone.

### Peer-to-peer social networks *(prerequisite)*
This section covers the principles and challenges of peer-to-peer social networks, which form the architectural foundation of MyZone. Understanding decentralized social networking protocols and their design trade-offs is essential to appreciate how MyZone achieves privacy and resilience.

*How the paper uses it:* MyZone employs a distributed peer-to-peer architecture to decentralize data storage and control.

▶ [P2P and Online Social Networking Research at Mirage Group](https://www.youtube.com/watch?v=3DgZv7_cfNs) — Microsoft Research · 1:36:07 · 10y ago

### Distributed trust models *(prerequisite)*
Distributed trust models explain how trust relationships and access control are managed in decentralized systems. This knowledge is critical to understanding MyZone's multi-level trust model that governs data replication and access among friends.

*How the paper uses it:* MyZone defines a trust model with multiple trust levels to securely manage data access and replication.

▶ [Ontology, The Technical Vision of Distributed Trust Networks | NEO DevCon 1](https://www.youtube.com/watch?v=QyaZz0vtONs) — Neo Smart Economy · 23:43 · 8y ago

### NAT traversal techniques *(prerequisite)*
NAT traversal techniques enable peers behind network address translators to establish direct connections, a key technical challenge in peer-to-peer systems. Understanding these methods is vital to grasp how MyZone's service layer supports secure peer connections.

*How the paper uses it:* MyZone's service layer supports NAT traversal to enable secure peer-to-peer communication.

▶ [NAT-T (NAT Traversal) In English for SD-WAN:Encapsulates IPsec traffic in UDP (usually port 4500)](https://www.youtube.com/watch?v=VMeYfLcfB_M) — Anand Routing & Security Academy · 28:12 · 9mo ago

### Secure distributed systems security *(prerequisite)*
This section provides an in-depth look at security mechanisms in distributed systems, including confidentiality, integrity, availability, and authenticity. These concepts underpin MyZone's security guarantees in hostile environments.

*How the paper uses it:* MyZone ensures security guarantees such as confidentiality, integrity, availability, authenticity, and consistency in its design.

▶ [UMass CS677 (Spring'24) - Lecture 25 - Distributed Systems Security](https://www.youtube.com/watch?v=NDkf2vzfxOA) — UMass OS · 1:23:25 · Streamed 2y ago

### Distributed OSN architecture
This core section focuses on the architecture of distributed online social networks, highlighting how user data is managed and shared without centralized control. It directly relates to MyZone's design and implementation strategies.

*How the paper uses it:* MyZone's core contribution is its distributed OSN architecture that decentralizes data storage and control.

▶ [Henry Story talks about Open Distributed Social Networks](https://www.youtube.com/watch?v=xf9xULase2U) — Oxford Internet Institute, University of Oxford · 4:50 · 16y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the MyZone paper, start by grasping the basics of peer-to-peer social networks to appreciate the decentralized architecture MyZone uses. Next, learn about distributed trust models to see how MyZone manages secure data sharing among friends. Then, study NAT traversal techniques, which enable secure peer connections across network boundaries. After that, explore secure distributed systems security to understand MyZone's guarantees of confidentiality and integrity. Finally, dive into the core concept of distributed OSN architecture to see how MyZone designs and manages user data in a decentralized social network.

### Peer-to-peer social networks *(prerequisite)*
Peer-to-peer social networks distribute data and control among users rather than relying on a central server. This decentralization enhances privacy and resilience by allowing direct connections between users. Understanding this concept helps grasp how MyZone avoids centralized data control.

*How the paper uses it:* MyZone employs a distributed peer-to-peer architecture to decentralize data storage and control.

▶ [Offline First Peer-to-Peer Social Networks](https://www.youtube.com/watch?v=5KXltaBGMoM) — Offline First · 5:45 · 8y ago

### Distributed trust models *(prerequisite)*
Distributed trust models define how trust is established and managed in systems without a central authority. They enable secure data sharing and replication by defining trust levels and access controls among peers. This foundation is key to understanding MyZone's approach to secure friend-based data replication.

*How the paper uses it:* MyZone defines a trust model with multiple trust levels to manage data access and replication securely among friends.

▶ [Explaining Distributed Systems Like I'm 5](https://www.youtube.com/watch?v=CESKgdNiKJw) — HashiCorp, an IBM Company · 12:40 · 4y ago

### NAT traversal techniques *(prerequisite)*
NAT traversal techniques allow devices behind network address translators (NATs) to establish direct peer-to-peer connections. This is essential for enabling secure communication in decentralized networks where users are often behind routers. Understanding NAT traversal explains how MyZone achieves reliable peer connections.

*How the paper uses it:* MyZone's service layer supports NAT traversal to enable secure peer connections across network boundaries.

▶ [NAT Explained - Network Address Translation](https://www.youtube.com/watch?v=FTUV0t6JaDA) — PowerCert Animated Videos · 4:26 · 8y ago

### Secure distributed systems security *(prerequisite)*
Secure distributed systems security covers how confidentiality, integrity, availability, authenticity, and consistency are maintained in systems spread across multiple nodes. This knowledge is critical to understanding how MyZone protects user data and ensures reliable operation in hostile environments.

*How the paper uses it:* MyZone provides security guarantees including confidentiality, integrity, availability, authenticity, and consistency in a distributed OSN.

▶ [How Distributed Systems Establish Trust: TLS, Keys & Certificates](https://www.youtube.com/watch?v=n1u7v9KrZaM) — Think Software · 10:22 · 3y ago

### Distributed OSN architecture
Distributed OSN architecture explains how online social networks can be designed without central servers by distributing data and control among users. This concept ties together the previous topics and shows the overall system design MyZone uses to preserve privacy and availability.

*How the paper uses it:* MyZone's core contribution is its distributed OSN architecture that decentralizes data storage to trusted friends.

▶ [Distributed social media - Mastodon & Fediverse Explained](https://www.youtube.com/watch?v=S57uhCQBEk0) — Simply Explained · 6:48 · 7y ago

## Already in your library

- [Peer-to-Peer Architectural Model: Overlay Network, Unstructured & Structured P2P, Advtgs & Disadvtgs](https://www.youtube.com/watch?v=5TlXplq3wv4) — also for: Managing Edge Resources at Scale: A Peer-to-Peer CDN for On-Demand Video Streaming (Klara Nahrstedt)
- [What is Network Architecture? full Explanation | Peer to Peer and Client-Server architecture](https://www.youtube.com/watch?v=MvPFBVy2hy4) — also for: Managing Edge Resources at Scale: A Peer-to-Peer CDN for On-Demand Video Streaming (Klara Nahrstedt)
- [How Peer to Peer (P2P) Network works | System Design Interview Basics](https://www.youtube.com/watch?v=2v6KqRB7adg) — also for: MyZone: A Next-Generation Online Social Network (John Black)
- [NAT and NAT-Traversal Explained - Network Address Translation](https://www.youtube.com/watch?v=5DhHcIuBn1g) — also for: MyZone: A Next-Generation Online Social Network (John Black)
- [Introduction to Social Network Analysis [1/5]: Main Concepts](https://www.youtube.com/watch?v=lnLW6ITFY3M) — also for: Modeling information diffusion in social media: data-driven observations (Lawrence O. Hall)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to understand and extend the MyZone distributed social network design. The beginner project recreates a core mechanism of peer-to-peer profile replication on trusted mirrors, the intermediate project implements a simplified version of MyZone's secure rendezvous and NAT traversal service layer, and the advanced project tackles the open problem of mirror selection optimization and incentive design for mirror participation, directly addressing a key limitation and future direction from the paper.

### Beginner — Peer-to-Peer Profile Replication Prototype
*Effort: a weekend, ~8 hours*

You build a small peer-to-peer application that simulates user profile replication among trusted friends (mirrors). The app allows a user to create a profile and replicate it to one or two trusted peers, demonstrating basic data sharing and availability when the original user is offline.

**Why it shows you understood the paper:** This project shows you understand the core MyZone concept of decentralizing user data storage to trusted friends to preserve privacy and availability, replicating profiles only on mirrors.

**Grounded in:** User profile availability is ensured by replicating profiles on trusted mirrors.

**Tech stack:** Node.js, Express.js, JavaScript, WebRTC (for peer connections)

**Data:** Simulated user profiles created locally; no external dataset needed.

**Build it:**

1. Set up a Node.js Express server to serve a simple web UI for profile creation.
2. Implement WebRTC peer connections to establish direct communication between peers.
3. Allow a user to create a profile and send a copy to one or two trusted peers (mirrors).
4. Implement a simple mechanism to retrieve the profile from mirrors when the original user is offline.
5. Demonstrate profile availability by simulating the original user disconnecting and mirrors serving the profile.

**Ships as:** A GitHub repository with a README explaining the replication mechanism, instructions to run the app, and a demo showing profile availability via mirrors.

**Stretch goal:** Add basic access control so only trusted mirrors can access replicated profiles.

### Intermediate — Simplified MyZone Service Layer with NAT Traversal
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of MyZone's service layer focusing on secure peer rendezvous and NAT traversal. The system allows peers behind NATs to discover each other and establish secure connections for profile replication and messaging, mimicking MyZone's infrastructure.

**Why it shows you understood the paper:** This project demonstrates comprehension of MyZone's service layer design, including NAT traversal techniques and secure peer connections, which are critical for decentralized OSN functionality.

**Grounded in:** The service layer supports NAT traversal, secure connections, and resilient rendezvous and relay servers.

**Tech stack:** Node.js, Express.js, JavaScript, STUN/TURN servers (e.g., coturn), WebRTC

**Data:** Simulated user profiles and peer metadata created locally; no external dataset needed.

**Build it:**

1. Set up a Node.js server to act as a rendezvous server for peer discovery.
2. Configure and integrate a public STUN server or coturn TURN server for NAT traversal.
3. Implement client-side WebRTC logic to register with the rendezvous server and discover peers.
4. Establish secure peer-to-peer connections using WebRTC data channels.
5. Demonstrate profile replication or messaging over the established connections.
6. Compare connection success rates with and without NAT traversal support.

**Ships as:** A GitHub repository with code and documentation showing a working rendezvous and NAT traversal service layer, with instructions to test peer connections behind NATs.

**Stretch goal:** Add a simple relay server fallback for peers unable to connect directly.

### Advanced — Mirror Selection and Incentive Mechanism for MyZone
*Effort: 3+ weeks*

You design and implement an algorithmic prototype for mirror selection among friends to optimize profile availability and acceptance, incorporating an incentive mechanism to motivate users to act as mirrors. You simulate a network of users with trust relationships and evaluate mirror assignment strategies.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the MyZone paper by tackling mirror selection and incentives, demonstrating deep understanding and capacity to extend the original system design.

**Grounded in:** Selection of mirrors among friends for profile replication is not fully addressed and remains an open problem; incentive mechanisms for motivating users to act as mirrors are not developed.

**Tech stack:** Python 3.11, NetworkX (for graph modeling), Jupyter Notebook, Matplotlib or Plotly (for visualization)

**Data:** Simulated social network graphs with trust levels among users; no real dataset required.

**Build it:**

1. Model a social network as a graph with nodes as users and edges representing trust relationships with weights.
2. Implement mirror selection algorithms based on criteria such as trust level, availability, and resource capacity.
3. Design a simple incentive mechanism (e.g., credit system) to encourage mirror participation.
4. Simulate user churn and measure profile availability under different mirror selection and incentive strategies.
5. Visualize results comparing baseline random mirror selection versus your optimized approach.
6. Document findings and discuss trade-offs and potential real-world applicability.

**Ships as:** A GitHub repository containing simulation code, analysis notebooks, and a detailed README explaining the mirror selection problem, your approach, and evaluation results.

**Stretch goal:** Extend the simulation to include synchronization timing protocols among mirrors balancing consistency and resource constraints.
