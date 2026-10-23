---
title: "945 · nope: Strengthening Domain Authentication with Succinct Proofs — Michael Walfish"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michael-walfish"
source_hash: "104c70da2a70f4a010a4bf008ef718e1ab648918e8ece333f897e7cef58a8b9c"
sequence: 945
generator: "outreach-garden: managed"
---

# 945 · nope: Strengthening Domain Authentication with Succinct Proofs

## At a glance

- **Professor:** Michael Walfish
- **Institution:** New York University
- **Paper:** [nope: Strengthening Domain Authentication with Succinct Proofs](https://dl.acm.org/doi/pdf/10.1145/3694715.3695962)
- **Authors:** Zachary DeStefano, Jeff J. Ma, Joseph Bonneau, Michael Walfish
- **Year:** 2024

## Paper overview

This paper introduces nope, a new method to improve server authentication on the Internet by using succinct cryptographic proofs to verify that a server's public key is legitimately linked to its domain name via DNSSEC. This approach reduces reliance on traditional certificate authorities (CAs), which are vulnerable to compromise, while maintaining compatibility with existing Internet infrastructure like TLS and certificate transparency. nope proofs are small, fast to verify, and embedded in standard certificates, enabling stronger security without major changes to current systems.

### Why it matters

**Research problem:** Current server authentication relies heavily on certificate authorities (CAs) to bind public keys to domain names, but CAs are a weak link due to risks of compromise, mis-issuance, and the large number of trusted CAs. DNSSEC offers a way to authenticate DNS records but lacks transparency and revocation infrastructure. The challenge is to reduce or eliminate trust in CAs without requiring new infrastructure, while maintaining compatibility and security.

**Why it matters:** Server authentication is fundamental to Internet security, assuring users that they communicate with legitimate domain owners. Failures in CA-based authentication have led to security breaches and domain impersonation attacks. Improving authentication mechanisms enhances trust, reduces attack surfaces, and protects users from man-in-the-middle and impersonation attacks.

**Key contributions:**

- Design and implementation of nope, a mechanism embedding succinct proofs of DNSSEC chains in standard TLS certificates.
- Techniques for efficient representation of DNS parsing and cryptographic operations within succinct proofs, reducing proof generation time and memory by nearly an order of magnitude.
- Experimental evaluation demonstrating minimal performance overhead: proof verification takes about 1 ms natively and proofs add less than 10% to certificate chain size.
- Security analysis showing nope eliminates single points of failure by requiring both a fraudulent certificate and fraudulent DNSSEC records for domain impersonation.
- A method to bind proofs to specific certificates using truncated timestamps and organization names to enable revocation and transparency.

## About the professor

**Michael Walfish** — Professor, Computer Science, New York University.

Research interests: computer systems, security, and networks

### Research links

- [Faculty/profile page](https://www.cs.nyu.edu/~mwalfish)
- [Professor website](https://cs.nyu.edu/~mwalfish)
- [Resolved homepage](https://cs.nyu.edu/~mwalfish/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Zero-Knowledge Proofs and zkSNARKs
**The paper assumes:** zero-knowledge proofs, succinct non-interactive arguments of knowledge (zkSNARKs), Groth16 proving system
**Already in this field?** Skip this entirely if you already understand zero-knowledge proofs and the Groth16 zkSNARK protocol in cryptography.

This background focuses on zero-knowledge proofs and zkSNARKs, specifically the Groth16 construction, which is central to the nope paper's method of embedding succinct DNSSEC proofs in TLS certificates. The rigorous course provides a deep, structured understanding suitable for readers who want to master the theory and practice behind zkSNARKs, while the fast track offers a concise, intuition-driven introduction to the cryptographic math and concepts underpinning zero-knowledge proofs. Choose the course for comprehensive technical depth and the fast track for a quick but solid conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Zero Knowledge Proofs MOOC Spring 2023](https://www.youtube.com/playlist?list=PLS01nW3Rtgor_yJmQsGBZAg5XM4TSGpPs) — Berkeley RDI · 18 videos · 21.2h across the first 14 episodes

**Watch only this:** Lectures 1-5, about 7.5 hours — covering introduction, modern SNARK constructions, programming ZKPs, interactive proofs, and the Plonk SNARK to understand succinct proof systems and their design.

*Why it unblocks this paper:* This Berkeley RDI Zero Knowledge Proofs MOOC covers foundational and advanced topics on zkSNARKs, including modern constructions like Groth16, interactive proofs, polynomial commitments, and optimization techniques, directly matching the paper's cryptographic core.

*If you want all of it:* About 21.2 hours across the first 14 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Cryptography and Zero Knowledge Proof Math](https://www.youtube.com/playlist?list=PLhlPiqNmXBw2rUeJIWRFWgnIbJ4MEvDMY) — Ciara Nightingale · 8 videos · 1.9h across 8 episodes

**Watch only this:** Episodes 3-7, about 1 hour 10 minutes — covering field theory, Fermat's little theorem, group theory, modular arithmetic, and set theory to build the math background needed for understanding zero-knowledge proofs.

*Why it unblocks this paper:* This Ciara Nightingale playlist provides a concise and clear explanation of the cryptographic math prerequisites and zero-knowledge proof concepts, giving a quick, accessible foundation in the math and intuition behind zkSNARKs relevant to the paper.

*If you want all of it:* About 1.9 hours across all 8 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the nope paper, start with foundational knowledge of DNSSEC, which underpins the DNS-based authentication chain used by nope. Next, build a solid grasp of TLS certificate authentication, the traditional mechanism that nope enhances. Then, explore certificate transparency infrastructure, critical for nope's integration with existing revocation and auditing systems. Finally, focus on the core concept of nope itself through the authors' own presentation, which details their novel approach using succinct proofs embedded in certificates.

### DNSSEC domain name security *(prerequisite)*
DNSSEC provides cryptographic authentication of DNS records, preventing attacks like cache poisoning and spoofing. Understanding DNSSEC is essential to grasp how nope leverages DNSSEC signatures to prove domain ownership and link public keys to domain names securely.

*How the paper uses it:* nope relies on DNSSEC to authenticate the DNS records that bind domain names to TLS keys, forming the basis of its security guarantees.

▶ [DNS Security Overview](https://www.youtube.com/watch?v=NFFY20VAs9s) — Wes Hardaker · 1:01:25 · 4y ago

### TLS certificate authentication *(prerequisite)*
TLS certificates are the traditional method for authenticating servers on the Internet, binding public keys to domain names via certificate authorities. A detailed understanding of TLS handshakes, certificate issuance, and validation is necessary to appreciate how nope enhances this process with succinct proofs.

*How the paper uses it:* nope embeds succinct DNSSEC proofs within standard TLS certificates, so understanding TLS certificate authentication is critical to see how nope integrates with existing infrastructure.

▶ [Applied Cryptography: 12. Transport Layer Security (TLS) Basic](https://www.youtube.com/watch?v=PMtO120LLsg) — Applied Cryptography | University of Tartu · 49:50 · 2y ago

### certificate transparency infrastructure *(prerequisite)*
Certificate Transparency (CT) logs provide public auditing and revocation mechanisms for TLS certificates, helping detect mis-issuance and improve trust. Knowing how CT works is important to understand how nope leverages existing CT infrastructure for logging and revocation of proofs.

*How the paper uses it:* nope integrates with existing certificate transparency logs to enable detection of misbehavior and revocation without new infrastructure.

▶ [\[BSL2025\] Watching the Watchmen: An Introduction to Certificate Transparency Logs - Luis Grangeia](https://www.youtube.com/watch?v=cYhGn-p5978) — BSides Lisbon · 33:12 · 10mo ago

### nope domain authentication talk *(paper-talk search result; attribution unverified)*
This is the authors' own presentation of the nope system at Real World Crypto 2025, providing direct insight into their design, implementation, and evaluation of succinct proofs for strengthening domain authentication. Watching this talk offers the most authoritative and detailed explanation of the paper's contributions and results.

*How the paper uses it:* This talk by Zachary DeStefano at RWC 2025 is the primary source for understanding the nope system as presented by its creators.

▶ [NOPE: Strengthening Domain Authentication (RWC 2025)](https://www.youtube.com/watch?v=j8pdfHnTvsU) — IACR · 20:28 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the nope paper, start by learning how DNSSEC secures domain name resolution, then grasp traditional TLS certificate authentication to see the existing trust model. Next, explore certificate transparency infrastructure which nope leverages for auditing and revocation. Finally, dive into succinct zero-knowledge proofs (zkSNARKs), the cryptographic core enabling nope's succinct proofs embedded in certificates.

### DNSSEC domain name security *(prerequisite)*
DNSSEC adds cryptographic signatures to DNS records to ensure their authenticity and integrity, protecting against attacks like DNS spoofing and cache poisoning. Understanding DNSSEC is essential because nope builds on DNSSEC to prove domain ownership securely.

*How the paper uses it:* nope uses DNSSEC signatures as the foundation for its proofs linking domain names to public keys.

▶ [What is DNSSEC ?](https://www.youtube.com/watch?v=jPLy-THZaXY) — CloudCipher Academy · 8:02 · 2mo ago

### TLS certificate authentication *(prerequisite)*
TLS certificates bind public keys to domain names via certificate authorities (CAs), enabling secure HTTPS connections. Knowing how TLS certificates work clarifies the current trust model that nope aims to strengthen by adding DNSSEC-based proofs.

*How the paper uses it:* nope embeds succinct proofs inside standard TLS certificates to enhance domain authentication.

▶ [Applied Cryptography: 12. Transport Layer Security (TLS) Basic](https://www.youtube.com/watch?v=PMtO120LLsg) — Applied Cryptography | University of Tartu · 49:50 · 2y ago

### certificate transparency infrastructure *(prerequisite)*
Certificate Transparency (CT) logs publicly record issued TLS certificates to detect mis-issuance and enable auditing. nope integrates with existing CT infrastructure to support revocation and transparency without new systems.

*How the paper uses it:* nope proofs are logged in existing certificate transparency logs to detect misbehavior and support revocation.

▶ [Certificate Transparency Logs: Attackers are using them, you should too!](https://www.youtube.com/watch?v=zNfJmZy2qBg) — Keytos Security · 21:19 · 4y ago

### zkSNARKs succinct zero knowledge proofs
zkSNARKs are cryptographic proofs that are very short and fast to verify, allowing one to prove knowledge of a statement without revealing extra information. nope uses zkSNARKs (specifically Groth16) to create succinct proofs that a valid DNSSEC chain exists linking a domain to its TLS key.

*How the paper uses it:* nope’s core innovation is embedding Groth16 zkSNARK proofs of DNSSEC chains inside TLS certificates.

▶ [Introduction to Zero Knowledge Proofs (ZKP): SNARKs شرح بالعربي](https://www.youtube.com/watch?v=3NP1zcy7ays) — Ismaeil Ahmed · 49:58 · 3y ago

### nope domain authentication talk *(paper-talk search result; attribution unverified)*
This talk by the paper's author presents the design, implementation, and evaluation of nope, providing direct insight into how succinct proofs strengthen domain authentication while maintaining compatibility with existing infrastructure.

*How the paper uses it:* The talk explains the nope system end-to-end, illustrating its motivation, cryptographic techniques, and deployment considerations.

▶ [NOPE: Strengthening Domain Authentication (RWC 2025)](https://www.youtube.com/watch?v=j8pdfHnTvsU) — IACR · 20:28 · 1y ago

## Already in your library

- [zk-SHARKs: Combining Succinct Verification and Public Coin Setup - Madars Virza, MIT](https://www.youtube.com/watch?v=OP8ydUxAVt4) — also for: Collaborative Incrementally Verifiable Computation (Omkant Pandey)
- [Zero Knowledge Proofs - Computerphile](https://www.youtube.com/watch?v=HUs1bH85X9I) — also for: HyperVerITAS: Verifying Image Transformations at Scale on Boolean Hypercubes (Pratik Soni)
- [A Beginner's Guide to Zero Knowledge Proofs (ZK Proofs Explained)](https://www.youtube.com/watch?v=_MYpZQVZdiM) — also for: Round-Optimal Pairing-Free Blind Signatures (Stefano Tessaro)
- [F8 2018: Certificate Transparency: Detecting Malicious Certificates and Phishing Attacks](https://www.youtube.com/watch?v=y6bhoF-VtZA) — also for: Honey Configs: Measuring The Emerging Exploitation of Cloud IP Address Reuse (Paul Barford)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of nope's approach to strengthening domain authentication with succinct proofs. The beginner project reproduces a core verification step using existing tools, the intermediate project builds on the authors' implementation to measure proof generation and verification performance, and the advanced project extends nope by addressing prover efficiency or managed DNSSEC keys as suggested in the paper's future directions.

### Beginner — DNSSEC Chain Verification with Succinct Proofs
*Effort: a weekend, ~8 hours*

You build a small tool that parses a DNSSEC-signed DNS record chain for a domain and verifies its validity using succinct proof concepts inspired by nope. You implement a simplified version of the proof verification logic, focusing on verifying a DNSSEC signature chain linking a domain's TLS key to the DNS root, but without generating zkSNARK proofs.

**Why it shows you understood the paper:** This project shows you understand the core cryptographic and DNSSEC validation principles underpinning nope's proofs, demonstrating the ability to parse DNSSEC data and verify signature chains as a prerequisite to succinct proof embedding.

**Grounded in:** Demonstrates the paper's key contribution of verifying DNSSEC signature chains linking domain TLS keys to the DNS root as the basis for nope proofs.

**Tech stack:** Python 3.11, dnspython library, OpenSSL command line or Python cryptography library

**Data:** Use live DNSSEC-signed DNS records for a test domain with DNSSEC enabled (e.g., a domain known to support DNSSEC).

**Build it:**

1. Use dnspython to fetch DNSKEY, RRSIG, and relevant DNS records for a DNSSEC-enabled domain.
2. Parse the DNSSEC chain and extract signatures and keys.
3. Implement signature verification logic using Python cryptography or OpenSSL to verify each signature in the chain.
4. Output whether the DNSSEC chain is valid and correctly links the domain's TLS key to the DNS root.
5. Document the process and explain how this verification relates to the proof construction in nope.

**Ships as:** A Python script and README demonstrating DNSSEC chain verification with example outputs and explanations linking it to nope's approach.

**Stretch goal:** Add a simple web UI to input domains and display DNSSEC chain verification results interactively.

### Intermediate — Running and Evaluating nope Proof Generation and Verification
*Effort: 2 weekends, ~20 hours*

You clone and run the official nope implementation from the authors' GitHub repository to generate and verify succinct proofs for a sample domain. You measure proof generation time, memory usage, and verification latency, then compare these metrics against baseline DNSSEC validation without proofs.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, reproduce their core experimental results, and understand the performance tradeoffs of embedding succinct proofs in TLS certificates as proposed by nope.

**Grounded in:** Reproduces the paper's key results on proof generation time reduction, memory usage, proof size overhead, and verification latency.

**Tech stack:** Linux environment, Rust and Go (per nope repo requirements), Python 3.11 for scripting measurements

**Data:** Use the authors' code at https://github.com/PepperSieve/nope and test with DNSSEC-enabled domains as in the repo examples.

**Build it:**

1. Clone the nope repository and follow build instructions to set up the environment.
2. Generate a nope proof for a test domain's DNSSEC chain using the provided tooling.
3. Measure and record proof generation time and memory consumption.
4. Verify the generated proof and measure verification latency.
5. Compare these metrics to baseline DNSSEC validation times without proofs.
6. Write a report summarizing the results and their significance.

**Verified links from the paper:**

- <https://github.com/PepperSieve/nope> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to generate and verify nope proofs, measurement logs, and a README summarizing performance comparisons.

**Stretch goal:** Modify the proof generation pipeline to test different domain keys or DNSSEC configurations and analyze effects on performance.

### Advanced — Optimizing nope Prover Efficiency for Managed DNSSEC Keys
*Effort: 3-4 weeks*

You extend the nope implementation by developing optimizations or architectural changes to reduce prover resource usage, focusing on the scenario of frequent key rotations or managed DNSSEC keys (nope-managed). You implement caching, incremental proof updates, or circuit simplifications to improve proof generation time and memory footprint.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the zkSNARK proving system, the nope design, and practical deployment challenges. It shows capability to contribute novel improvements to the research.

**Grounded in:** Addresses the paper's limitation on prover resource intensity and future direction of supporting managed DNSSEC keys with improved prover efficiency.

**Tech stack:** Rust and Go (nope repo languages), Linux development environment, Profiling tools (e.g., perf, valgrind), Python 3.11 for scripting and automation

**Data:** Use the authors' nope codebase and DNSSEC-enabled domain data; simulate frequent key rotations by generating multiple proofs with updated keys.

**Build it:**

1. Study the nope prover code and identify bottlenecks in proof generation.
2. Implement caching or incremental proof generation techniques to reuse computations across key rotations.
3. Profile memory and CPU usage before and after optimizations.
4. Test the system with simulated frequent DNSSEC key rotations to evaluate improvements.
5. Document the design, implementation, and evaluation results.
6. Optionally, propose a method to bind proofs to certificates with improved timestamp handling.

**Verified links from the paper:**

- <https://github.com/PepperSieve/nope> — released by the paper's authors

**Ships as:** An extended nope fork with prover optimizations, performance evaluation scripts, and a detailed README explaining the improvements and their impact.

**Stretch goal:** Explore integrating the optimized prover with a client-side verifier extension to demonstrate end-to-end improved deployment feasibility.
