---
title: "690 · Towards Automated Dynamic Analysis for Linux-based Embedded Firmware — David Brumley"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-brumley"
source_hash: "107ade018927b6f07d74e60e794c81f6080147ed0bfc69faf71c1d0d9e256f5c"
sequence: 690
generator: "outreach-garden: managed"
---

# 690 · Towards Automated Dynamic Analysis for Linux-based Embedded Firmware

## At a glance

- **Professor:** David Brumley
- **Institution:** Carnegie Mellon University
- **Paper:** [Towards Automated Dynamic Analysis for Linux-based Embedded Firmware](https://doi.org/10.14722/NDSS.2016.23415)
- **Authors:** Daming D. Chen, Manuel Egele, Maverick Woo, David Brumley
- **Year:** 2016

## Paper overview

This paper presents FIRMADYNE, an automated system that dynamically analyzes Linux-based firmware from embedded network devices like routers. It uses full system emulation to scale analysis across thousands of firmware images, identifying vulnerabilities by running the firmware in an emulated environment and testing exploits automatically. The system found many previously unknown vulnerabilities affecting numerous devices from multiple vendors, highlighting widespread security issues in embedded firmware.

### Why it matters

**Research problem:** Embedded network devices run vendor-specific firmware that is rarely updated and often insecure. Existing methods to identify vulnerabilities in such firmware either require physical hardware (limiting scalability) or rely on static analysis (which has accuracy trade-offs). There is a need for an automated, scalable, and accurate dynamic analysis system for embedded firmware.

**Why it matters:** Embedded devices like home routers are critical network gateways but often have poor security, exposing users to attacks that can compromise entire networks. Identifying vulnerabilities at scale is essential to improve security and motivate manufacturers to patch devices.

**Key contributions:**

- Design and implementation of FIRMADYNE, the first automated dynamic analysis system targeting Linux-based embedded firmware at scale.
- Techniques to handle embedded system challenges such as hardware peripherals, NVRAM emulation, and dynamic configuration files.
- A large dataset of 23,035 firmware images from 42 vendors, with automated extraction and analysis of 9,486 images.
- Discovery of 14 previously unknown vulnerabilities and confirmation of 60 known exploits across hundreds of firmware images.
- Open-sourcing the system to encourage further research in embedded firmware security.

## About the professor

**David Brumley** — Professor, Electrical and Computer Engineering, Carnegie Mellon University.

Research interests: develop systems that automatically check the world's software for exploitable bugs

### Research links

- [Faculty/profile page](https://users.ece.cmu.edu/~dbrumley)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=O-29z5AAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Operating Systems and System Emulation
**The paper assumes:** operating system fundamentals, kernel architecture, system emulation principles
**Already in this field?** Skip this entirely if you already have a solid understanding of operating system design and how system emulators replicate hardware and OS behavior.

To understand the paper's approach to automated dynamic analysis of Linux-based embedded firmware, a solid grasp of operating systems concepts and system emulation is essential. The rigorous course option provides a deep, structured university-level foundation on operating systems, covering kernel modules, system calls, and hardware emulation. The fast track offers a shorter, focused playlist on operating systems fundamentals suitable for quickly grasping key concepts relevant to firmware emulation and analysis.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Operating System](https://www.youtube.com/playlist?list=PLp6ek2hDcoNCM91hLp1Z3X12zckZw9y5n) — NPTEL IIT Delhi · 40 videos · 33.7h across 40 episodes

**Watch only this:** Lectures mod01lec01 through mod01lec12, about 6 hours — covering OS basics, process management, memory, and kernel modules to build foundational knowledge for firmware emulation.

*Why it unblocks this paper:* This NPTEL IIT Delhi Operating System course covers comprehensive OS concepts including kernel modules, memory management, and hardware interaction, which are crucial for understanding the emulation and instrumentation techniques used in FIRMADYNE.

*If you want all of it:* 33.7 hours across 40 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 6.S081: Operating System Engineering](https://www.youtube.com/playlist?list=PLUznfNKscdcN21PDbG_mcMLdDR2SbWdqx) — lzzrhx · 21 videos · 31.2h across 21 episodes

**Watch only this:** Lectures 1, 3, 6, 9, 17, and 19, about 8 hours total — focusing on OS introduction, system calls, interrupts, virtual memory, and virtual machines to quickly grasp key OS and emulation concepts.

*Why it unblocks this paper:* The MIT 6.S081 Operating System Engineering playlist offers concise, well-structured lectures on OS organization, system calls, virtual memory, and virtual machines, directly relevant to understanding full system emulation and kernel instrumentation in the paper.

*If you want all of it:* 31.2 hours across 21 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Towards Automated Dynamic Analysis for Linux-based Embedded Firmware,' start by building foundational knowledge on embedded Linux firmware architecture and full system emulation, which are critical to grasping how firmware can be dynamically analyzed at scale. Next, explore dynamic vulnerability analysis methods to appreciate the runtime testing approach used for vulnerability detection. Finally, focus on the core concept of the paper itself—automated dynamic analysis of embedded firmware—by watching the authors' own talk to gain direct insights into their system design, challenges, and results.

### Embedded Linux firmware architecture *(prerequisite)*
Understanding the structure and components of embedded Linux firmware is essential to appreciate the challenges in extracting, emulating, and analyzing firmware images. This knowledge provides context on how vendor-specific firmware is built and why emulation requires handling diverse architectures and configurations.

*How the paper uses it:* The paper targets Linux-based embedded firmware, so understanding its architecture is foundational to following the system design and emulation techniques.

▶ [Fundamentals of Embedded Linux - Chris Simmons - NDC TechTown 2022](https://www.youtube.com/watch?v=BdKyq56Cijo) — NDC Conferences · 1:04:15 · 3y ago

### Full system emulation *(prerequisite)*
Full system emulation is the core technique enabling scalable dynamic analysis of firmware by simulating the entire hardware and software stack. Grasping how emulators like QEMU work and the challenges in emulating hardware peripherals is critical to understanding FIRMADYNE's approach.

*How the paper uses it:* FIRMADYNE relies on full system emulation with an instrumented kernel to run firmware images dynamically and test for vulnerabilities.

▶ [QEMU_1: Basic Introduction to Emulation and QEMU](https://www.youtube.com/watch?v=jC5qiet1JZc) — Mahmoud Jadaan · 8:08 · 2y ago

### Dynamic vulnerability analysis *(prerequisite)*
Dynamic vulnerability analysis involves detecting security flaws by executing software and monitoring its behavior, which contrasts with static analysis. Understanding this methodology clarifies how FIRMADYNE verifies vulnerabilities by running firmware in an emulated environment and applying automated exploit tests.

*How the paper uses it:* The paper's approach centers on dynamic analysis to identify and confirm vulnerabilities in embedded firmware at scale.

▶ [TROOPERS22: A Vulnerability Analysis of Endpoint Management & Monitoring Solutions](https://www.youtube.com/watch?v=Vqwhyn4R-Cw) — TROOPERS IT Security Conference · 54:29 · 3y ago

### Automated firmware extraction and emulation
This concept covers the practical techniques to prepare firmware images for emulation, including extraction from device binaries and handling diverse file systems and architectures. It bridges foundational knowledge and the paper's core system by showing how firmware is made ready for dynamic analysis.

*How the paper uses it:* FIRMADYNE automates firmware extraction and emulation to scale vulnerability analysis across thousands of images.

▶ [Intro to Firmware Analysis with QEMU and Ghidra](https://www.youtube.com/watch?v=50lFwNvHbDs) — Jason Turley · 36:24 · 1y ago

### FIRMADYNE paper talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides direct insight into the design, implementation, challenges, and results of FIRMADYNE. It offers the most authoritative and detailed explanation of their automated dynamic analysis system and its impact on embedded firmware security research.

*How the paper uses it:* This talk is by the authors and focuses specifically on the FIRMADYNE system and its contributions.

▶ [#HITBLockdown D2 - Army Of Undead: Tailored Firmware Emulation - Thomas Weber](https://www.youtube.com/watch?v=Tw9XNpp4PTY) — Hack In The Box Security Conference · 1:00:31 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the FIRMADYNE paper, start by learning about the architecture and components of embedded Linux firmware, which is the target environment for the analysis. Next, grasp the concept of full system emulation, the core technique enabling scalable dynamic analysis of firmware. Then, explore dynamic vulnerability analysis to understand how runtime testing detects security flaws. Finally, delve into automated firmware extraction and emulation techniques that prepare firmware images for analysis, culminating in a direct look at the FIRMADYNE system and its results.

### Embedded Linux firmware architecture *(prerequisite)*
This section introduces the structure and components of embedded Linux firmware, explaining how Linux is adapted for embedded devices like routers. Understanding this helps grasp what firmware images contain and why emulation is challenging.

*How the paper uses it:* FIRMADYNE targets Linux-based embedded firmware, so understanding its architecture is essential to appreciate the system's approach.

▶ [Fundamentals of Embedded Linux - Chris Simmons - NDC TechTown 2022](https://www.youtube.com/watch?v=BdKyq56Cijo) — NDC Conferences · 1:04:15 · 3y ago

### Full system emulation *(prerequisite)*
Full system emulation simulates an entire hardware platform in software, allowing firmware to run as if on real hardware. This technique is crucial for dynamic analysis without physical devices.

*How the paper uses it:* FIRMADYNE uses full system emulation with an instrumented kernel to run firmware images at scale for vulnerability detection.

▶ [QEMU_1: Basic Introduction to Emulation and QEMU](https://www.youtube.com/watch?v=jC5qiet1JZc) — Mahmoud Jadaan · 8:08 · 2y ago

### Dynamic vulnerability analysis *(prerequisite)*
Dynamic vulnerability analysis involves testing software during execution to find security flaws, as opposed to static code inspection. It provides accurate detection of exploitable bugs by observing real runtime behavior.

*How the paper uses it:* FIRMADYNE performs automated dynamic analysis by running firmware in emulation and testing exploits to identify vulnerabilities.

▶ [Module 05: Vulnerability Analysis in Ethical Hacking | CVE, CVSS, Nessus, OpenVAS, Nikto | Free](https://www.youtube.com/watch?v=QXSyH4lx6Sk) — Cyber Mind Space · 56:07 · 1y ago

### Automated firmware extraction and emulation
This covers methods to automatically extract firmware filesystems and prepare them for emulation, handling challenges like architecture detection and peripheral emulation.

*How the paper uses it:* FIRMADYNE automates firmware extraction and emulation to scale analysis across thousands of images.

▶ [Intro to Firmware Analysis with QEMU and Ghidra](https://www.youtube.com/watch?v=50lFwNvHbDs) — Jason Turley · 36:24 · 1y ago

### FIRMADYNE paper talk *(paper-talk search result; attribution unverified)*
A detailed presentation by an expert covering the design, implementation, and results of FIRMADYNE, providing direct insight into the system and its impact.

*How the paper uses it:* This talk directly explains the FIRMADYNE system and its contributions to automated dynamic firmware analysis.

▶ [#HITBLockdown D2 - Army Of Undead: Tailored Firmware Emulation - Thomas Weber](https://www.youtube.com/watch?v=Tw9XNpp4PTY) — Hack In The Box Security Conference · 1:00:31 · 6y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of FIRMADYNE's approach to automated dynamic analysis of Linux-based embedded firmware. The beginner project focuses on basic firmware extraction and filesystem inspection, the intermediate project involves running and analyzing firmware emulation using the authors' open-source system, and the advanced project extends the system to improve emulation fidelity by addressing a known limitation in NVRAM peripheral emulation. Each project ties directly to a core contribution, result, or limitation from the paper.

### Beginner — Firmware Filesystem Extraction and Inspection
*Effort: a weekend, ~6-8 hours*

You build a toolchain script that automates extraction of Linux-based embedded firmware images to recover their root filesystems and inspects key configuration files such as /etc/passwd and network interface files. This reproduces the initial firmware unpacking and inspection step from FIRMADYNE's pipeline.

**Why it shows you understood the paper:** This project shows you understand the challenges of handling diverse firmware images and the importance of automated filesystem extraction as a foundation for dynamic analysis.

**Grounded in:** Key contribution: automated extraction and analysis of 9,486 firmware images (§IV); Key result: successful extraction of over 96.6% of Linux-based firmware images (§VI)

**Tech stack:** Python 3.11, bash, binwalk, unsquashfs, mount (Linux)

**Data:** Use publicly available Linux-based embedded firmware images from vendor websites or open firmware archives (e.g., OpenWrt firmware images) as a substitute for the paper's dataset.

**Build it:**

1. Collect a small set (5-10) of Linux-based embedded firmware images from public sources.
2. Use binwalk to analyze and extract embedded filesystems from each firmware image.
3. Mount or unsquash the extracted filesystem to access its contents.
4. Write a Python script to parse and summarize key configuration files (e.g., /etc/passwd, /etc/network/interfaces).
5. Generate a report listing extracted filesystems and notable configuration details for each firmware image.

**Ships as:** A GitHub repository containing extraction scripts, a sample dataset of firmware images, and a README demonstrating automated extraction and inspection of firmware filesystems.

**Stretch goal:** Add automated detection of firmware architecture and generate a summary of architecture-specific binaries found in the filesystem.

### Intermediate — Automated Firmware Emulation with FIRMADYNE
*Effort: 2 weekends, ~20 hours*

You set up and run the FIRMADYNE open-source system to emulate a subset of Linux-based firmware images. You automate the extraction, architecture identification, and QEMU-based emulation steps, then run simple vulnerability checks or known exploits to verify emulation success.

**Why it shows you understood the paper:** This project demonstrates your ability to deploy and operate the core dynamic analysis system from the paper, reproducing its scalable emulation and vulnerability verification pipeline.

**Grounded in:** Key contribution: design and implementation of FIRMADYNE (§IV); Key result: emulated over 96.6% of firmware images and identified 887 vulnerable images (§VI)

**Tech stack:** Linux (Ubuntu), Python 3.11, Docker, QEMU, FIRMADYNE system from https://github.com/firmadyne/

**Data:** Use the firmware images included or referenced in the FIRMADYNE repository or public Linux-based firmware images as a substitute.

**Build it:**

1. Clone and install the FIRMADYNE system following its documentation.
2. Prepare a small dataset of firmware images compatible with FIRMADYNE.
3. Run the automated extraction and architecture identification pipeline.
4. Boot firmware images in QEMU emulation using FIRMADYNE's instrumented kernels.
5. Execute included automated exploit tests or simple network service checks.
6. Collect and analyze logs to verify successful emulation and vulnerability detection.

**Verified links from the paper:**

- <https://github.com/firmadyne/> — released by the paper's authors

**Ships as:** A GitHub repository with setup instructions, scripts to run FIRMADYNE on sample firmware, and a report summarizing emulation success rates and vulnerability findings.

**Stretch goal:** Integrate a simple static analysis tool to complement dynamic analysis and compare results on the same firmware images.

### Advanced — Enhanced NVRAM Emulation for Firmware Dynamic Analysis
*Effort: 3-4 weeks*

You extend the FIRMADYNE system by improving its NVRAM peripheral emulation to reduce emulation failures. This involves reverse engineering common NVRAM access patterns in firmware, implementing a more complete NVRAM emulation module, and validating improved emulation success on previously failing firmware images.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the paper, showing deep comprehension of embedded firmware hardware emulation challenges and contributing a practical system enhancement.

**Grounded in:** Limitation: incomplete NVRAM emulation causes emulation failures (§VII); Future direction: improve emulation fidelity including better NVRAM support (§VIII)

**Tech stack:** Linux (Ubuntu), Python 3.11, C (for kernel module development), QEMU, FIRMADYNE system from https://github.com/firmadyne/

**Data:** Use firmware images from the FIRMADYNE dataset that previously failed emulation due to NVRAM issues, or select similar public firmware exhibiting NVRAM dependency.

**Build it:**

1. Study FIRMADYNE's existing NVRAM emulation implementation and identify its limitations.
2. Analyze firmware binaries to understand common NVRAM access methods and data structures.
3. Develop an enhanced NVRAM emulation module or kernel patch to better simulate NVRAM behavior.
4. Integrate the improved NVRAM emulation into the FIRMADYNE emulation pipeline.
5. Test the enhanced system on firmware images that previously failed emulation.
6. Document improvements in emulation success rates and any new vulnerabilities discovered.

**Verified links from the paper:**

- <https://github.com/firmadyne/> — released by the paper's authors

**Ships as:** A GitHub repository with the enhanced NVRAM emulation code, integration instructions, test results showing reduced emulation failures, and a detailed README explaining the approach and impact.

**Stretch goal:** Extend the improved emulation to support additional hardware peripherals or out-of-tree kernel modules to further increase firmware coverage.
