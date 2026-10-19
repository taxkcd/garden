---
title: "808 · TClone: Low-Latency Forking of Live GUI Environments for Computer-Use Agents — Yiying Zhang"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yiying-zhang"
source_hash: "55ac66cdd8fb22b449558f3d6485e7102bf033127111125b99a6d104415e05eb"
sequence: 808
generator: "outreach-garden: managed"
---

# 808 · TClone: Low-Latency Forking of Live GUI Environments for Computer-Use Agents

## At a glance

- **Professor:** Yiying Zhang
- **Institution:** Univ. of California - San Diego
- **Paper:** [TClone: Low-Latency Forking of Live GUI Environments for Computer-Use Agents](https://arxiv.org/pdf/2605.17320)
- **Authors:** Yutong Huang, Vikranth Srivatsa, Alex Asch, Hansin Tushar Patwa, Yiying Zhang
- **Year:** 2026

## Paper overview

TClone is a system that allows computer-use agents (CUAs) to safely and efficiently create multiple versions (branches) of a live personal computer workspace, including GUI, memory, and files. This enables agents to explore different actions in parallel, rollback mistakes, and commit successful results without risking damage to the user's real environment. TClone achieves this by separating fast branch creation from slower checkpointing, using copy-on-write memory and filesystem sharing, and running the GUI inside containers.

### Why it matters

**Research problem:** Computer-use agents operate in live personal workspaces and can cause damage by modifying files, settings, or credentials. Existing solutions like VMs and containers either have high latency for cloning or do not capture full GUI and personal state, making safe, low-latency branching and rollback for agents impractical.

**Why it matters:** CUAs need isolation and rollback to avoid damaging user data, but also require fast branching to support speculative execution and parallel search for higher quality results. Without efficient workspace versioning, agents risk causing persistent damage or suffer from slow execution due to cloning overhead.

**Key contributions:**

- Introduction of versioned personal workspaces as a new OS abstraction for safe and efficient execution of computer-use agents.
- Design of a fast workspace-fork architecture that separates online branch creation from durable checkpointing.
- Development of key mechanisms for workspace fork including process tree reconstruction, copy-on-write memory sharing, filesystem versioning with lazy page-cache CoW, network and GUI state handling, and security profile enforcement.
- Comprehensive evaluation demonstrating significant latency and memory footprint improvements over existing VM and container checkpoint/restore baselines.

## About the professor

**Yiying Zhang** — Associate Professor, Computer Science and Engineering Department, Univ. of California - San Diego.

Research interests: building systems for ML/AI and using ML/AI to solve systems problems

### Research links

- [Faculty/profile page](https://cseweb.ucsd.edu/~yiying)
- [Professor website](https://cseweb.ucsd.edu/~yiying/)
- [Lab website](http://wuklab.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Operating Systems and Virtualization
**The paper assumes:** operating systems concepts, virtualization technologies, containerization, checkpoint/restore mechanisms, copy-on-write memory
**Already in this field?** Skip this entirely if you already have a solid understanding of modern operating systems and virtualization techniques, including containers and checkpoint/restore.

This background covers operating systems and virtualization concepts essential to understanding TClone's innovations in low-latency workspace forking, copy-on-write memory sharing, containerization, and checkpoint/restore mechanisms. The rigorous course option provides a deep, structured university-level foundation, while the fast track offers a concise, clear introduction to core OS concepts for quicker comprehension. Choose the lane that fits your available time and depth needs; the fast track is a focused primer, not a watered-down version.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS 537: OS | University of Wisconsin-Madison](https://www.youtube.com/playlist?list=PLzBbfbHQmjyuqBFJ8KpDdcvnLNkvPXbS-) — Meta-cle · 26 videos · 28.3h across 26 episodes

**Watch only this:** Lectures 2 (Processes), 4 (Virtualization: CPU to Memory), 5 (Memory Virtualization: Segmentation and Paging), 8 (Memory: Swapping), 10-15 (Concurrency topics), 18-22 (Persistence and File System Structures including Copy-on-Write File Systems), totaling about 14 hours — these cover process forking, memory virtualization, copy-on-write, concurrency, and filesystem layering relevant to TClone.

*Why it unblocks this paper:* This University of Wisconsin-Madison OS course covers fundamental and advanced topics in operating systems including process management, virtualization, memory management, concurrency, and persistence. Its detailed lectures on virtualization, copy-on-write filesystems, and checkpointing directly relate to TClone's mechanisms for fast branching and workspace versioning.

*If you want all of it:* 28.3 hours across all 26 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Operating System](https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O) — Neso Academy · 77 videos · 14.5h across the first 60 episodes

**Watch only this:** Episodes 1 (Introduction to Operating Systems), 13 (Virtual Machines), 15-20 (Process Management and Scheduling), 23 (Shared Memory Systems), totaling about 2.5 hours — these cover OS fundamentals, virtualization, process forking, and memory sharing relevant to TClone.

*Why it unblocks this paper:* Neso Academy's Operating System playlist offers concise, well-structured videos explaining OS basics, process management, virtualization, system calls, and file systems. It provides a clear, visual introduction to the core OS concepts underlying TClone's design, suitable for quickly grasping key ideas without deep academic detail.

*If you want all of it:* About 14.5 hours across the first 60 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand TClone, start with foundational concepts like copy-on-write memory sharing and filesystem versioning with lazy page-cache, which are key technical enablers for TClone's efficient branching and snapshotting. Then, explore background on container checkpoint and restore and GUI state isolation in containers to grasp existing cloning methods and GUI workspace isolation challenges that TClone improves upon. Finally, focus on the core concept of TClone itself through the authors' own system talks to gain direct insight into their design, mechanisms, and evaluation.

### Copy-on-write memory sharing *(prerequisite)*
Copy-on-write (CoW) memory sharing is a fundamental technique that allows efficient cloning of process memory by deferring actual copying until modifications occur. Understanding CoW is critical to appreciate how TClone reduces memory footprint and achieves fast branch creation by sharing unchanged memory pages among workspace branches.

*How the paper uses it:* TClone uses copy-on-write memory sharing to enable fast cloning of live GUI workspaces with low memory overhead.

▶ [Copy-on-Write Explained: How fork() Copies Gigabytes in Microseconds](https://www.youtube.com/watch?v=1eFvQVzYhis) — SysSketch · 1mo ago

### Filesystem versioning and lazy page-cache *(prerequisite)*
Filesystem versioning combined with lazy page-cache copy-on-write enables efficient snapshotting and sharing of file state across branches without duplicating entire filesystems. This mechanism is essential for TClone's ability to fork live workspaces with minimal latency and storage overhead.

*How the paper uses it:* TClone implements filesystem versioning with lazy page-cache CoW to efficiently manage file state in forked workspace branches.

▶ [How Linux Works: Page Cache, Folios, and Queues Visualized](https://www.youtube.com/watch?v=_UygkEbj_oQ) — The Kernel Log · 7mo ago

### Container checkpoint and restore *(prerequisite)*
Container checkpoint and restore techniques provide background on existing methods for cloning and migrating containerized applications. Understanding their synchronous checkpointing limitations highlights the motivation for TClone's separation of fast branch creation from durable checkpointing.

*How the paper uses it:* TClone improves upon traditional container checkpoint/restore by enabling asynchronous checkpointing and faster speculative execution for computer-use agents.

▶ [Container Checkpoint/Restore at Scale for Fast Pod Startup Time - Ritesh Naik, MathWorks](https://www.youtube.com/watch?v=BXVyszsbYmg) — CNCF \[Cloud Native Computing Foundation\] · 4y ago

### GUI state isolation in containers *(prerequisite)*
Isolating GUI state within containers is critical for capturing and maintaining independent live GUI sessions per workspace branch. This ensures that each forked environment has its own display, input, and window state, preventing interference among branches.

*How the paper uses it:* TClone runs the GUI stack inside each workspace container to fully capture and isolate GUI state for each forked branch.

▶ [Container Isolation at Scale (Introducing gVisor) - Dawn Chen & Zhengyu He, Google](https://www.youtube.com/watch?v=pWyJahTWa4I) — CNCF \[Cloud Native Computing Foundation\] · 8y ago

### TClone system talk *(paper-talk search result; attribution unverified)*
The authors' own talks provide the most direct and detailed insight into TClone's design motivations, architecture, key mechanisms, and evaluation results. These talks are essential for understanding the novel OS abstractions and system innovations introduced by TClone.

*How the paper uses it:* These talks are given by the paper authors and cover the full scope of TClone's system design and contributions.

▶ [https://www.youtube.com › watch?v=CNQfMAQOpVs](https://www.youtube.com/watch?v=CNQfMAQOpVs) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand TClone, a system for low-latency branching and rollback of live GUI workspaces for computer-use agents. We start with the basics of copy-on-write memory sharing to grasp how fast cloning is achieved, then cover filesystem versioning and lazy page-cache to understand efficient snapshotting of file state. Next, we explore container checkpoint and restore techniques as background on existing cloning methods, followed by GUI state isolation in containers to see how TClone captures live GUI environments. Finally, we conclude with the core concept of OS workspace versioning, the central abstraction enabling TClone's safe and efficient branching.

### Copy-on-write memory sharing *(prerequisite)*
Copy-on-write (CoW) is a technique where memory or data is not duplicated immediately when cloned; instead, the original and the clone share the same data until one modifies it, triggering a copy. This approach drastically reduces memory usage and speeds up cloning operations by avoiding unnecessary data copying.

*How the paper uses it:* TClone uses copy-on-write memory sharing to reduce memory footprint and enable fast workspace forking.

▶ [Copy-on-Write Explained: How fork() Copies Gigabytes in Microseconds](https://www.youtube.com/watch?v=1eFvQVzYhis) — SysSketch · 1mo ago

### Filesystem versioning and lazy page-cache *(prerequisite)*
Filesystem versioning allows multiple versions of files to coexist, enabling snapshots and rollbacks. Lazy page-cache copy-on-write means that file data in memory is only duplicated when modified, improving read performance and reducing overhead when creating branches.

*How the paper uses it:* TClone implements filesystem versioning with lazy page-cache CoW to efficiently snapshot and share file state across branches.

▶ [How Linux Works: Page Cache, Folios, and Queues Visualized](https://www.youtube.com/watch?v=_UygkEbj_oQ) — The Kernel Log · 7mo ago

### Container checkpoint and restore *(prerequisite)*
Container checkpoint and restore is a method to save the entire state of a running container and later restore it, enabling cloning or migration. However, traditional approaches are often synchronous and slow, limiting their use for speculative execution.

*How the paper uses it:* TClone improves upon existing container checkpoint/restore methods by separating fast branch creation from slower durable checkpointing.

▶ [Container Checkpoint/Restore at Scale for Fast Pod Startup Time - Ritesh Naik, MathWorks](https://www.youtube.com/watch?v=BXVyszsbYmg) — CNCF \[Cloud Native Computing Foundation\] · 4y ago

### GUI state isolation in containers *(prerequisite)*
GUI state isolation means running graphical user interfaces inside containers so that each container has its own independent display session, input, and window state. This isolation is critical for safely branching live GUI workspaces without interference.

*How the paper uses it:* TClone runs the GUI stack inside each workspace container to fully capture and isolate GUI state per branch.

▶ [GUIdock: Using Docker Containers with a Common Graphics User Interface to Address](https://www.youtube.com/watch?v=xIx6TYdy1pg) — ScienceVio · 10y ago

### OS workspace versioning
OS workspace versioning is a new abstraction that treats a user's entire live workspace—including processes, memory, files, and GUI state—as a versioned entity that can be snapshotted, branched, rolled back, or merged. This abstraction enables safe and efficient speculative execution for computer-use agents.

*How the paper uses it:* TClone introduces versioned personal workspaces as an OS abstraction to enable low-latency branching and rollback of live GUI environments.

▶ [Operating Systems Lecture 2: Process Abstraction](https://www.youtube.com/watch?v=lIZN6UgoxOc) — Mythili Vutukuru · 11:59 · 8y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to understand and demonstrate key aspects of TClone's approach to low-latency forking of live GUI environments for computer-use agents. Starting from a small-scale simulation of copy-on-write memory sharing, progressing to a containerized workspace snapshot and fork prototype, and culminating in an advanced extension addressing TClone's limitation on external side effects, each project builds on the applicant's existing skills while deepening understanding of TClone's core mechanisms and challenges.

### Beginner — Simulate Copy-on-Write Memory Sharing
*Effort: a weekend, ~8 hours*

You build a small user-space simulation in Python or C++ that demonstrates copy-on-write (CoW) memory sharing between parent and forked processes. The simulation will show how memory pages are shared until a write occurs, triggering a copy, mimicking TClone's CoW memory sharing to reduce memory footprint during workspace forks.

**Why it shows you understood the paper:** This project concretely demonstrates the fundamental memory optimization technique TClone uses to reduce fork latency and memory usage, showing you understand how CoW enables efficient branching of live workspaces.

**Grounded in:** TClone shares unchanged anonymous and read-mostly file-backed state copy-on-write while CRIU re-materializes the full workspace per clone.

**Tech stack:** Python 3.11 or C++17, Linux (for fork and mmap syscalls if C++)

**Data:** No external data needed; you simulate memory pages and write operations programmatically.

**Build it:**

1. Implement a parent process that allocates a simulated memory region (e.g., an array or buffer).
2. Implement a fork operation that creates a child process sharing the parent's memory via CoW semantics.
3. Simulate writes in the child process that trigger copying of affected memory pages.
4. Visualize or log memory sharing and copying events to demonstrate CoW behavior.
5. Compare memory usage before and after writes to show savings from sharing.

**Ships as:** A repository with code and a README explaining CoW simulation, including logs or visualizations showing memory sharing and copying events.

**Stretch goal:** Extend the simulation to include file-backed memory regions and demonstrate lazy page-cache CoW as described in TClone.

### Intermediate — Prototype Workspace Fork with Container and GUI Isolation
*Effort: 2 weekends, ~20 hours*

You build a prototype system that creates isolated workspace forks using Docker containers to simulate TClone's versioned personal workspaces. The prototype will snapshot a simple GUI application state inside a container, fork it into multiple branches with isolated GUI sessions, and demonstrate fast branching with copy-on-write filesystem layers.

**Why it shows you understood the paper:** This project reproduces TClone's core method of separating fast branch creation from durable checkpointing, including GUI state isolation inside containers, showing you grasp the system-level design and container-based isolation mechanisms.

**Grounded in:** TClone introduces versioned personal workspaces as an OS abstraction, enabling live GUI workspace snapshotting, forking into isolated branches, rollback, and selective commit or merge. It runs the GUI stack inside containers to capture GUI state fully and isolate branches.

**Tech stack:** Docker, Linux, Python 3.11 or TypeScript (for orchestration scripts), X11 or VNC for GUI session management

**Data:** No external dataset; you use a simple GUI application (e.g., xclock or a text editor) inside containers.

**Build it:**

1. Set up a base Docker container running a lightweight Linux GUI application with X11 or VNC.
2. Implement a script to snapshot the container filesystem using Docker image layering with OverlayFS.
3. Create a mechanism to fork the base container into multiple sibling containers sharing the base image layers (copy-on-write).
4. Isolate GUI sessions by assigning separate display servers or VNC ports per forked container.
5. Demonstrate concurrent GUI sessions running in forked containers with isolated input and display.
6. Measure and log container fork latency and memory usage compared to full container duplication.

**Verified links from the paper:**

- <https://github.com/linuxserver/docker-webtop> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/openclaw/openclaw> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with Dockerfiles, orchestration scripts, and README documenting the prototype, latency/memory measurements, and GUI isolation demonstration.

**Stretch goal:** Add asynchronous checkpointing of container state to simulate TClone's separation of fast branching from durable checkpointing.

### Advanced — Extend Workspace Forking to Manage External Side Effects
*Effort: 3+ weeks*

You develop an extension to the workspace forking prototype that tracks and manages external side effects (e.g., sending emails, making network requests) triggered by agent actions in forked branches. This addresses a key limitation of TClone by implementing a policy-based approval mechanism to commit or rollback such side effects.

**Why it shows you understood the paper:** This project tackles a stated limitation of TClone, demonstrating deep comprehension of the system's boundaries and security model, and explores future directions for safe multi-agent workflows involving external interactions.

**Grounded in:** TClone does not commit, merge, or rollback external side effects such as sending emails or making online payments; these remain policy boundaries requiring explicit approval.

**Tech stack:** Docker, Python 3.11, Linux, Network proxy tools (e.g., mitmproxy), Optional: Kubernetes for multi-agent orchestration

**Data:** No external dataset; you simulate agent actions that produce external side effects like HTTP requests or email sends.

**Build it:**

1. Extend the containerized workspace prototype to intercept external side effects using network proxies or hooks.
2. Implement a logging mechanism to record side effects generated by each forked branch.
3. Design a policy engine that allows manual or automated approval to commit or rollback side effects.
4. Create a user interface or CLI to review and approve side effects before merging branch results.
5. Demonstrate rollback of side effects by blocking or reversing network actions from unapproved branches.
6. Evaluate the system with concurrent agent branches producing conflicting side effects.

**Verified links from the paper:**

- <https://github.com/linuxserver/docker-webtop> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with extended prototype code, policy engine, and documentation showing management of external side effects in forked workspaces.

**Stretch goal:** Integrate with lightweight VM or sandboxing technologies to enhance isolation while preserving versioning semantics, as suggested in TClone's future directions.
