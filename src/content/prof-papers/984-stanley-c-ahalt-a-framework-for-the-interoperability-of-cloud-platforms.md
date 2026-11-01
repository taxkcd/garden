---
title: "984 · A Framework for the Interoperability of Cloud Platforms: Towards FAIR Data in SAFE Environments — Stanley C. Ahalt"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stanley-c-ahalt"
source_hash: "0216d9c8afa8cc4619b2c8dfd74bc3c46cf8cb245a1b1d207f601789f8dc2d4b"
sequence: 984
generator: "outreach-garden: managed"
---

# 984 · A Framework for the Interoperability of Cloud Platforms: Towards FAIR Data in SAFE Environments

## At a glance

- **Professor:** Stanley C. Ahalt
- **Institution:** University of North Carolina
- **Paper:** [A Framework for the Interoperability of Cloud Platforms: Towards FAIR Data in SAFE Environments](https://pmc.ncbi.nlm.nih.gov/articles/PMC10897146/pdf/41597_2024_Article_3041.pdf)
- **Authors:** Robert L. Grossman, Rebecca R. Boyles, Brandi N. Davis-Dusenbery, Amanda Haddock, Allison P. Heath, Brian D. O’Connor, Adam C. Resnick, Deanne M. Taylor, Stan Ahalt
- **Year:** 2024

## Paper overview

This paper introduces a framework called SAFE (Secure and Authorized FAIR Environment) to enable interoperability between cloud platforms that manage sensitive scientific data, such as biomedical data. SAFE complements the FAIR principles (Findable, Accessible, Interoperable, Reusable) by focusing on secure, authorized cloud environments that allow data to be analyzed across platforms without violating governance or security policies. The framework defines roles, governance processes, and technical standards to ensure trusted data sharing and analysis across multiple cloud platforms.

### Why it matters

**Research problem:** As scientific research increasingly relies on multiple cloud platforms, there is a critical need for interoperability between these platforms, especially for sensitive or controlled-access data. Current governance and security policies often restrict data to remain within a single cloud platform, limiting researchers' ability to analyze data using specialized tools available on other platforms.

**Why it matters:** Interoperability of cloud platforms can accelerate research outcomes by enabling researchers to access and analyze distributed datasets without unnecessary data replication or security risks. This is particularly important for sensitive biomedical and social science data, where privacy, compliance, and governance constraints are stringent.

**Key contributions:**

- Introduction of the SAFE framework as a complement to FAIR data principles, focusing on secure, authorized cloud environments for sensitive data analysis.
- Formal definitions of key concepts such as authorized environment, authorized user, right to distribute data, and platform governance roles.
- Proposal of globally unique identifiers for cloud platforms (APID), platform networks (APNI), and geographic regions (ARID) to support interoperability.
- Description of governance processes and security compliance frameworks to authorize cloud platforms and users for data access and distribution.
- A trust-based interoperability model where data governance authorizes users, platform governance authorizes environments, and platforms trust these authorizations to enable data sharing.

## About the professor

**Stanley C. Ahalt** — Professor, Dean, School of Data Science and Society, Department of Computer Science, University of North Carolina.

Research interests: Signal, image, and video processing; high-performance scientific and industrial computing; pattern recognition applied to national security problems; high-productivity, domain specific languages.

### Research links

- [Faculty/profile page](http://cs.unc.edu/people/stan-ahalt)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cloud Computing Security and Governance
**The paper assumes:** cloud security principles, data governance frameworks, and compliance standards
**Already in this field?** Skip this entirely if you already understand cloud platform security models, governance roles, and compliance frameworks like NIST SP 800-53.

To understand the SAFE framework's approach to secure and authorized interoperability of cloud platforms managing sensitive data, background in cloud computing security, governance roles, and compliance standards like NIST SP 800-53 is essential. The rigorous course offers a deep dive into NIST 800-171 security controls relevant to protecting controlled unclassified information (CUI), while the fast track provides a concise, visual introduction to core cloud security concepts and practices. Choose the course for comprehensive governance and compliance knowledge; choose the fast track for a quicker conceptual grasp of cloud security principles underpinning SAFE environments.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [NIST 800-171r3 Explained: Your Intro to the 17 CUI Security Families](https://www.youtube.com/playlist?list=PLYiQxPuSzraCmSk75wlwDc0jzUFLeygJF) — CyberTAAS · 9 videos · 5.9h across 9 episodes

**Watch only this:** Episodes 2 through 5, about 2.6 hours — covering Incident and Response, Identification & Authentication, Configuration Management Part 1, and Audit and Accountability, which together provide essential understanding of security controls and governance relevant to SAFE environments.

*Why it unblocks this paper:* This CyberTAAS playlist thoroughly explains NIST SP 800-171r3 security families, which are foundational to the SAFE framework's recommended security compliance processes for authorizing cloud platforms and users handling sensitive data.

*If you want all of it:* 5.9 hours across all 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Cloud Security Explained](https://www.youtube.com/playlist?list=PLOspHqNVtKACfjqfEwR3iKz1gJILKj5Tn) — IBM Technology · 32 videos · 3.6h across 32 episodes

**Watch only this:** First 8 episodes, about 48 minutes — including foundational topics like insider threats, malware, endpoint detection, threat intelligence, access management, and risk analytics, which build intuition about cloud security challenges and solutions relevant to SAFE.

*Why it unblocks this paper:* IBM Technology's 'Cloud Security Explained' playlist offers clear, concise episodes that cover fundamental cloud security concepts, controls, and governance models, providing a quick yet authoritative overview that supports understanding of SAFE's secure interoperability goals.

*If you want all of it:* 3.6 hours across all 32 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SAFE framework for interoperable cloud platforms managing sensitive data, start by grounding yourself in foundational concepts: FAIR data principles, cloud platform interoperability challenges, cloud data governance, and security compliance frameworks like NIST SP 800-53. These prerequisites provide the necessary context on data management, interoperability standards, governance, and security compliance that underpin the SAFE framework. Finally, focus on the core concept of SAFE environments and the authors' own talk to grasp the framework's governance model, roles, and interoperability mechanisms.

### FAIR data principles *(prerequisite)*
Understanding the FAIR principles (Findable, Accessible, Interoperable, Reusable) is foundational because the SAFE framework complements these principles by focusing on secure and authorized environments for sensitive data. The chosen video provides a detailed, research-level overview of FAIR principles and their practical implementation in health data, suitable for advanced learners.

*How the paper uses it:* The SAFE framework complements FAIR principles by enabling secure, authorized cloud environments for sensitive data analysis.

▶ [FAIR principles in practice for health data](https://www.youtube.com/watch?v=fXCR8lkxcw8) — Swiss Personalized Health Network - SPHN · 1:00:05 · 4y ago

### Cloud platform interoperability *(prerequisite)*
Interoperability between cloud platforms is central to the SAFE framework. This video from the NIH Cloud Platform Interoperability initiative offers a research-focused seminar on clinical and phenotypic data interoperability using standards like FHIR, providing deep insights into the challenges and solutions relevant to the paper's context.

*How the paper uses it:* The SAFE framework addresses interoperability challenges between cloud platforms managing sensitive scientific data.

▶ [Clinical and Phenotypic Data Interoperability using FHIR in NCPI](https://www.youtube.com/watch?v=rTPMbYgoSSc) — NIH Cloud Platform Interoperability (NCPI) · 17:25 · 5y ago

### Cloud data governance *(prerequisite)*
Governance processes are key to authorizing platforms and users in SAFE environments. This video from Amazon Web Services offers a professional-level explanation of data governance, emphasizing the collaboration between business and IT, which aligns well with the governance roles and processes defined in the SAFE framework.

*How the paper uses it:* SAFE environments require defined governance processes for data and platform authorization.

▶ [What is data governance? | Amazon Web Services](https://www.youtube.com/watch?v=kiYPjNj9AmU) — Amazon Web Services · 11:34 · 3y ago

### Security compliance frameworks NIST *(prerequisite)*
Security compliance standards like NIST SP 800-53 underpin platform authorization in the SAFE framework. This detailed overview video explains the NIST SP 800-53 controls and their application, providing the necessary background on security frameworks referenced in the paper.

*How the paper uses it:* The SAFE framework recommends security compliance frameworks such as NIST SP 800-53 for platform authorization.

▶ [NIST SP 800-53, Revision 5 Security Controls for Information Systems and Organizations - 1 overview](https://www.youtube.com/watch?v=hWWILCZbDho) — ConvoCourses · 24:54 · 8y ago

### Secure authorized FAIR environments
This concept is the core of the paper, describing SAFE environments that enable secure, authorized, interoperable cloud data analysis. The selected video presents the Five Safes principles, which closely relate to the SAFE framework's governance and security approach, offering an advanced seminar-level treatment of secure data environments in biomedical research.

*How the paper uses it:* The SAFE framework introduces Secure and Authorized FAIR Environments as a foundation for interoperable sensitive data analysis.

▶ [Secure Processing Environments: The 5 Safes principles](https://www.youtube.com/watch?v=A4JazlQMUkA) — NFDI4Health · 28:46 · 5mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the SAFE framework for interoperable cloud platforms managing sensitive data, start by learning the foundational FAIR data principles, which the framework complements. Next, grasp cloud data governance and security compliance frameworks like NIST that underpin platform authorization. Then, explore cloud platform interoperability challenges and solutions, which the SAFE framework addresses. Finally, dive into the core concept of Secure and Authorized FAIR Environments (SAFE) that enable secure, authorized, interoperable data analysis across clouds.

### FAIR data principles *(prerequisite)*
FAIR principles ensure data is Findable, Accessible, Interoperable, and Reusable, which are essential for effective data sharing and reuse in research. Understanding these principles provides the foundation for why interoperable and well-governed data environments like SAFE are needed.

*How the paper uses it:* The SAFE framework complements FAIR principles by focusing on secure, authorized cloud environments for sensitive data.

▶ [Knowledge clip: FAIR data principles](https://www.youtube.com/watch?v=2uZxFu9SFi8) — UGent Open Science · 4:54 · 6y ago

### Cloud data governance *(prerequisite)*
Data governance involves the policies, roles, and processes that ensure data is managed securely, compliantly, and responsibly. It is critical for authorizing who can access and distribute sensitive data in cloud environments.

*How the paper uses it:* SAFE defines governance processes and roles to authorize cloud platforms and users for data access and distribution.

▶ [Introduction to Data Governance (Data Architecture | Data Governance)](https://www.youtube.com/watch?v=UNXAUc9gG-4) — Software Architecture Academy · 7:11 · 4y ago

### Security compliance frameworks NIST *(prerequisite)*
NIST SP 800-53 is a widely used security and privacy control framework that guides organizations in securing information systems. Understanding it helps clarify how cloud platforms can be authorized to handle sensitive data securely.

*How the paper uses it:* The SAFE framework recommends security compliance frameworks like NIST SP 800-53 for platform authorization.

▶ [NIST SP 800-53, Revision 5 Security Controls for Information Systems and Organizations - 1 overview](https://www.youtube.com/watch?v=hWWILCZbDho) — ConvoCourses · 24:54 · 8y ago

### Cloud platform interoperability *(prerequisite)*
Interoperability between cloud platforms enables data and tools to work seamlessly across different systems, which is essential for collaborative research without compromising security or governance.

*How the paper uses it:* The SAFE framework addresses interoperability challenges between cloud platforms managing sensitive data.

▶ [Clinical and Phenotypic Data Interoperability using FHIR in NCPI](https://www.youtube.com/watch?v=rTPMbYgoSSc) — NIH Cloud Platform Interoperability (NCPI) · 17:25 · 5y ago

### Secure authorized FAIR environments
Secure and Authorized FAIR Environments (SAFE) are cloud platforms approved through governance to securely hold and analyze sensitive data while exposing APIs for interoperability. This concept is the core innovation of the paper enabling trusted data sharing across clouds.

*How the paper uses it:* SAFE environments are the central concept enabling secure, authorized, interoperable cloud data analysis in the framework.

▶ [Secure Processing Environments: The 5 Safes principles](https://www.youtube.com/watch?v=A4JazlQMUkA) — NFDI4Health · 28:46 · 5mo ago

## Already in your library

- [FAIR data principles](https://www.youtube.com/watch?v=F13nkArkp_A) — also for: Assembly and reasoning over semantic mappings at scale for biomedical data integration (Benjamin M. Gyori)
- [Lec-41: Cloud Security Threats and Mitigation Strategies](https://www.youtube.com/watch?v=SMMemzKTF7s) — also for: Honey Configs: Measuring The Emerging Exploitation of Cloud IP Address Reuse (Paul Barford)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the SAFE framework for interoperable cloud platforms managing sensitive data. The beginner project recreates a core conceptual element of the framework using your existing backend and API skills. The intermediate project implements a simplified interoperability API and governance model on a small scale, introducing new skills in API design and metadata standards. The advanced project extends the framework by prototyping a trust-based interoperability model across simulated cloud platforms with governance processes, addressing one of the paper's stated limitations.

### Beginner — SAFE Framework Role and Authorization Model API
*Effort: a weekend, ~8 hours*

You build a RESTful API backend that models the SAFE framework's core roles (Project Sponsor, Platform Operator, User) and their authorizations for data access and platform interoperability. The API will allow creating, reading, and managing these roles and their permissions, simulating governance processes in a simplified form.

**Why it shows you understood the paper:** This project demonstrates you understand the SAFE framework's governance roles and authorization concepts by translating them into a concrete API design and implementation, reflecting the paper's formal definitions.

**Grounded in:** The framework defines roles such as Project Sponsor, Platform Operator, and User with specific governance responsibilities.

**Tech stack:** Python 3.11, FastAPI, SQLite, Docker

**Data:** No external dataset is needed; you simulate governance data as JSON objects representing users, roles, and authorizations.

**Build it:**

1. Define data models for Project Sponsor, Platform Operator, User, and their authorizations using Pydantic.
2. Implement REST API endpoints to create, update, and query these entities and their permissions.
3. Add validation logic to enforce simple governance rules (e.g., only Project Sponsors can grant distribution rights).
4. Write example scripts or API calls demonstrating role creation and authorization flows.
5. Document the API endpoints and governance concepts in the README.

**Ships as:** A GitHub repository with a FastAPI backend implementing SAFE roles and authorizations, example API usage scripts, and documentation explaining how the API models the SAFE governance concepts.

**Stretch goal:** Add a simple web frontend to visualize roles and authorizations and simulate governance workflows.

### Intermediate — Interoperability API Prototype for SAFE Environments
*Effort: 1-3 weekends, ~20 hours*

You implement a prototype of the SAFE framework's interoperability APIs that expose platform authorizations and dataset distribution rights. This includes defining unique platform identifiers (APID), simulating platform metadata, and building API endpoints that allow querying authorized users and data sharing permissions between two mock cloud platforms.

**Why it shows you understood the paper:** This project shows you can translate the paper's core interoperability mechanism into a working API prototype, including the use of unique identifiers and metadata standards, demonstrating comprehension of the framework's technical standards.

**Grounded in:** Definition of APIs and metadata standards to expose platform authorizations and dataset distribution rights.

**Tech stack:** Python 3.11, FastAPI, SQLite, Docker, Postman or curl for API testing

**Data:** Simulated metadata for two mock cloud platforms with unique APIDs and datasets with distribution rights encoded as JSON.

**Build it:**

1. Design data models for cloud platforms with APID, datasets, and distribution rights metadata.
2. Implement API endpoints to expose platform authorizations and dataset distribution rights.
3. Simulate two cloud platforms with distinct APIDs and datasets, each with governance metadata.
4. Implement API calls that demonstrate interoperability by querying authorizations across platforms.
5. Write tests or scripts to verify that only authorized users can access datasets per governance rules.
6. Document the API design, usage examples, and how it reflects the SAFE interoperability model.

**Ships as:** A GitHub repository with a FastAPI-based interoperability API prototype, simulated platform metadata, example interoperability queries, and documentation linking the implementation to the SAFE framework.

**Stretch goal:** Integrate a simple authentication mechanism (e.g., JWT) to enforce user authorization in the API.

### Advanced — Trust-Based Interoperability Model Simulation Across Cloud Platforms
*Effort: a few weeks, ~60 hours*

You build a multi-platform simulation demonstrating the SAFE framework's trust-based interoperability model. This includes implementing governance processes for authorizing users and platforms, exchanging platform authorizations via APIs, and enforcing data sharing policies across simulated cloud platforms. You address the paper's limitation on trust relationships by prototyping a governance workflow and trust establishment mechanism.

**Why it shows you understood the paper:** This project evidences deep comprehension of the SAFE framework by implementing its trust and governance model end-to-end, including platform authorization, user rights, and mutual trust enabling secure data sharing without data replication.

**Grounded in:** A trust-based interoperability model where data governance authorizes users, platform governance authorizes environments, and platforms trust these authorizations to enable data sharing.

**Tech stack:** Python 3.11, FastAPI, Docker Compose, SQLite, React (optional frontend), JWT for authentication

**Data:** Simulated governance metadata and user authorizations for multiple mock cloud platforms; no real datasets are needed.

**Build it:**

1. Implement separate FastAPI services simulating multiple cloud platforms, each with its own governance metadata and API exposing authorizations.
2. Develop governance workflows for authorizing users and platforms, including issuing and validating tokens or signed authorizations.
3. Implement API endpoints for exchanging and verifying platform authorizations and user rights across platforms.
4. Simulate data sharing requests that enforce governance policies based on trust relationships and authorizations.
5. Optionally, build a simple React frontend to visualize trust relationships and data sharing status.
6. Document the architecture, governance workflows, and how the simulation addresses the SAFE framework's trust model and limitations.

**Ships as:** A multi-service GitHub repository demonstrating a trust-based interoperability model simulation with governance workflows, API exchanges, and enforcement of data sharing policies, accompanied by detailed documentation.

**Stretch goal:** Extend the simulation to incorporate compliance with a specific security framework (e.g., NIST SP 800-53) and demonstrate platform authorization issuance.
