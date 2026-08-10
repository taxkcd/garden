---
title: "336 · Scaling and logic in the colour code on a superconducting quantum processor — Murphy Yuezhen Niu"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-murphy-yuezhen-niu"
source_hash: "9868dfbe1b6f453f16754943fee9c5283ea20a8c97dc0f26a380f3af226236e6"
sequence: 336
generator: "outreach-garden: managed"
---

# 336 · Scaling and logic in the colour code on a superconducting quantum processor

## At a glance

- **Professor:** Murphy Yuezhen Niu
- **Institution:** Univ. of California - Santa Barbara
- **Paper:** [Scaling and logic in the colour code on a superconducting quantum processor](https://www.nature.com/articles/s41586-025-09061-4.pdf)
- **Authors:** N. Lacroix, A. Bourassa, F. J. H. Heras, L. M. Zhang, J. Bausch, A. W. Senior, T. Edlich, N. Shutty, V. Sivak, A. Bengtsson, M. McEwen, O. Higgott, D. Kafri, J. Claes, A. Morvan, Z. Chen, S. Madhuk, R. Acharya, L. Aghababaie Beni, G. Aigeldinger, R. Alcaraz, T. I. Andersen, M. Ansmann, F. Arute, K. Arya, A. Asfaw, J. Atalaya, R. Babbush, B. Ballard, J. C. Bardin, A. Bilmes, S. Blackwell, J. Bovaird, D. Bowers, L. Brill, M. Broughton, D. A. Browne, B. Buchea, B. B. Buckley, T. Burger, B. Burkett, N. Bushnell, A. Cabrera, J. Campero, H.-S. Chang, B. Chiaro, L.-Y. Chih, A. Y. Cleland, J. Cogan, R. Collins, P. Conner, W. Courtney, A. L. Crook, B. Curtin, S. Das, S. Demura, L. De Lorenzo, A. Di Paolo, P. Donohoe, I. Drozdov, A. Dunsworth, A. Eickbusch, A. Moshe Elbag, M. Elzouka, C. Erickson, V. S. Ferreira, L. Flores Burgos, E. Forati, A. G. Fowler, B. Foxen, S. Ganjam, G. Garcia, R. Gasca, É. Genois, W. Giang, D. Gilboa, R. Gosula, A. Grajales Dau, D. Graumann, A. Greene, J. A. Gross, T. Ha, S. Habegger, M. Hansen, M. P. Harrigan, S. D. Harrington, S. Heslin, P. Heu, R. Hiltermann, J. Hilton, S. Hong, H.-Y. Huang, A. Huff, W. J. Huggins, E. Jeffrey, Z. Jiang, X. Jin, C. Joshi, P. Juhas, A. Kabel, H. Kang, A. H. Karamlou, K. Kechedzhi, T. Khaire, T. Khattar, M. Khezri, S. Kim, P. V. Klimov, B. Kobrin, A. N. Korotkov, F. Kostritsa, J. Mark Kreikebaum, V. D. Kurilovich, D. Landhuis, T. Lange-Dei, B. W. Langley, P. Laptev, K.-M. Lau, J. Ledford, K. Lee, B. J. Lester, L. Le Guevel, W. Yan Li, Y. Li, A. T. Lill, W. P. Livingston, A. Locharla, E. Lucero, D. Lundahl, A. Lunt, A. Maloney, S. Mandrà, L. S. Martin, O. Martin, C. Maxfield, J. R. McClean, S. Meeks, A. Megrant, K. C. Miao, R. Molavi, S. Molina, S. Montazeri, R. Movassagh, C. Neill, M. Newman, A. Nguyen, M. Nguyen, C.-H. Ni, M. Y. Niu, L. Oas, W. D. Oliver, R. Orosco, K. Ottosson, A. Pizzuto, R. Potter, O. Pritchard, C. Quintana, G. Ramachandran, M. J. Reagor, R. Resnick, D. M. Rhodes, G. Roberts, E. Rosenberg, E. Rosenfeld, E. Rossi, P. Roushan, K. Sankaragomathi, H. F. Schurkus, M. J. Shearn, A. Shorter, V. Shvarts, S. Small, W. Clarke Smith, S. Springer, G. Sterling, J. Suchard, A. Szasz, A. Sztein, D. Thor, E. Tomita, A. Torres, M. Mert Torunbalci, A. Vaishnav, J. Vargas, S. Vdovichev, G. Vidal, C. Vollgraff Heidweiller, S. Waltman, J. Waltz, S. X. Wang, B. Ware, T. Weidel, T. White, K. Wong, B. W. K. Woo, M. Woodson, C. Xing, Z. Jamie Yao, P. Yeh, B. Ying, J. Yoo, N. Yosri, G. Young, Y. Zhang, N. Zhu, N. Zobrist, H. Neven, P. Kohli, A. Davies, S. Boixo, J. Kelly, C. Jones, C. Gidney, K. J. Satzinger
- **Year:** 2025

## Paper overview

This paper demonstrates the implementation of the colour code quantum error correction on a superconducting quantum processor. The authors show that increasing the code distance reduces logical errors, characterize logical gates, inject high-fidelity magic states, and teleport logical qubits using lattice surgery. These results establish the colour code as a promising approach for fault-tolerant quantum computing on superconducting hardware.

### Why it matters

**Research problem:** Quantum error correction is essential to reduce errors in quantum processors to levels required for practical quantum algorithms. While the surface code has been widely studied and implemented, it has limitations in logical operations and qubit overhead. The colour code offers more efficient logical operations but is challenging to implement on superconducting qubits due to complex stabilizer measurements and decoding.

**Why it matters:** Achieving fault-tolerant quantum computation requires efficient error correction codes that suppress logical errors and support universal logical operations with reasonable resource overhead. The colour code's potential for more efficient logical gates and lower qubit overhead could accelerate scalable quantum computing, but experimental demonstrations and scaling on superconducting platforms have been lacking.

**Key contributions:**

- First demonstration of error suppression by scaling the colour code distance from 3 to 5 on a superconducting processor.
- Characterization of transversal single-qubit logical Clifford gates via logical randomized benchmarking with low error rates.
- High-fidelity injection of arbitrary and magic logical states with post-selection.
- Demonstration of logical state teleportation between colour code qubits using lattice surgery.
- Development and use of optimized syndrome extraction circuits and advanced decoding strategies compatible with superconducting hardware.

## About the professor

**Murphy Yuezhen Niu** — Assistant Professor, Stansbury Chair in Computer Science, Univ. of California - Santa Barbara.

Research interests: Algorithms and Theory, Computer Architecture, Machine Learning and Data Mining, Quantum Computing

### Research links

- [Faculty/profile page](https://cs.ucsb.edu/index.php/people/faculty/murphy-niu)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=0wJPxfkAAAAJ&view_op=list_works&sortby=pubdate)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Quantum error correction
**The paper assumes:** quantum error correction codes, stabilizer formalism, topological quantum codes, fault-tolerant quantum computing
**Already in this field?** Skip this entirely if you already understand the theory and practice of quantum error correction, including stabilizer codes and topological codes like the surface and colour codes.

This background focuses on quantum error correction, essential for understanding the implementation and scaling of the colour code on superconducting quantum processors as presented in the paper. The rigorous course option provides a deep, structured university-level treatment of quantum error correction concepts, while the fast track offers a concise, accessible introduction to the same topic for quicker comprehension. Choose the course for thorough mastery or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Yale Quantum Institute Course on Quantum Error Correction](https://www.youtube.com/playlist?list=PLh9mgdi4rNewrbMExcT-dzW-tH2mjkagq) — YaleCourses · 7 videos · 11.6h across 7 episodes

**Watch only this:** Lectures 1 through 3, about 5 hours — covering introduction to quantum errors, quantum codes and stabilizers, and bosonic modes which provide foundational understanding for topological codes and error correction circuits.

*Why it unblocks this paper:* This Yale Quantum Institute course is a recent, authoritative university-level lecture series dedicated specifically to quantum error correction, covering stabilizers, decoding, and measurement techniques directly relevant to the colour code implementation and decoding strategies used in the paper.

*If you want all of it:* All 7 lectures, about 11.6 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Quantum Error Correction Series](https://www.youtube.com/playlist?list=PLD9iE8dbH_2VT2mgoeEXfswH52QN3Y2cf) — Quantumgrad · 6 videos · 5.3h across 6 episodes

**Watch only this:** Episodes 1 through 3, about 2.7 hours — sufficient to grasp the basics of quantum error correction, stabilizers, and logical qubits.

*Why it unblocks this paper:* This Quantumgrad series offers a concise and clear tutorial on quantum error correction, covering the core concepts and mechanisms in about 5 hours total, making it an efficient introduction that aligns well with the paper's focus on error correction codes and decoding.

*If you want all of it:* All 6 episodes, about 5.3 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on scaling and logic in the colour code on a superconducting quantum processor, start with foundational knowledge of quantum error correction codes and topological quantum codes, which provide the theoretical framework for protecting quantum information. Next, study surface code quantum computing and lattice surgery, as these serve as important benchmarks and techniques closely related to the colour code implementation. Finally, focus on the core concept of the colour code quantum error correction itself, which is the central method implemented and scaled in the paper.

### Quantum error correction codes *(prerequisite)*
Quantum error correction codes form the fundamental framework for protecting quantum information against noise and errors. Understanding stabilizer codes, CSS codes, and fault tolerance is essential to grasp how the colour code operates and suppresses logical errors.

*How the paper uses it:* The paper implements the colour code, a type of quantum error correction code, to reduce logical errors on a superconducting processor.

▶ [Peter Shor | Quantum error correcting codes and fault tolerance](https://www.youtube.com/watch?v=buIbd_aXAHw) — Harvard CMSA · 1:48:26

### Topological quantum codes *(prerequisite)*
Topological quantum codes, including the colour code and surface code, encode logical qubits in global topological properties, enabling fault tolerance. This section provides context for the colour code as a topological code and its advantages and challenges.

*How the paper uses it:* The colour code implemented in the paper is a topological quantum code enabling fault-tolerant logical operations.

▶ [Quantum Error Correction with Non-Abelian Topological ...](https://www.youtube.com/watch?v=77ih9UENVXk) — Qiskit · 1:23:54

### Surface code quantum computing *(prerequisite)*
The surface code is the most widely studied topological code and serves as a benchmark for error correction performance and resource overhead. Understanding surface code techniques and thresholds helps contextualize the colour code's comparative advantages and limitations.

*How the paper uses it:* The paper compares the colour code's error suppression and overhead to that of the surface code on the same superconducting hardware.

▶ [10 years of progress in quantum surface codes](https://www.youtube.com/watch?v=SyW1LkbFv6k) — Craig Gidney · 32:38

### Lattice surgery in quantum codes *(prerequisite)*
Lattice surgery is a key technique for performing logical operations and qubit teleportation in topological codes by merging and splitting code patches. Mastery of lattice surgery is crucial to understanding the paper's demonstration of logical state teleportation and gate implementation.

*How the paper uses it:* The paper demonstrates logical state teleportation between colour code qubits using lattice surgery.

▶ [Daniel Litinski (FU Berlin) - A Game of Surface Codes: Large ...](https://www.youtube.com/watch?v=fAcRsdAvhjc) — QEC Conference Team · 48:51

### Colour code quantum error correction
The colour code is a topological quantum error correcting code that enables transversal logical gates and potentially lower qubit overhead. This section focuses on the colour code's structure, decoding challenges, and logical operations, which are central to the paper's contributions.

*How the paper uses it:* The paper's core contribution is the implementation and scaling of the colour code on a superconducting quantum processor.

▶ [Daniel Litinski: Majoranas and Color Codes -- A Topological ...](https://www.youtube.com/watch?v=bmeLJK6bGoA) — QuICS · 43:40

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand the implementation and scaling of the colour code quantum error correction on superconducting processors. Start with the basics of quantum error correction codes to grasp how quantum information is protected, then learn about topological quantum codes which provide the framework for fault tolerance. Next, explore the surface code as a benchmark for performance and overhead, followed by lattice surgery techniques used for logical qubit operations. Finally, focus on the colour code itself, the central method demonstrated in the paper.

### Quantum error correction codes *(prerequisite)*
Quantum error correction codes protect fragile quantum information from errors due to noise and decoherence by encoding logical qubits into multiple physical qubits. Understanding these codes is essential to grasp how the colour code reduces logical errors in quantum processors.

*How the paper uses it:* The paper implements the colour code, a type of quantum error correction code, to suppress logical errors on a superconducting processor.

▶ [Basics of Quantum Error Correction II: Stabilizers and CSS ...](https://www.youtube.com/watch?v=BnPc_IEL6qE) — Qiskit · 1:10:31

### Topological quantum codes *(prerequisite)*
Topological quantum codes use the topology of qubit arrangements to enable fault-tolerant quantum computation, making logical qubits robust against local errors. The colour code is a topological code, so understanding this concept helps in appreciating its error suppression and logical gate capabilities.

*How the paper uses it:* The colour code implemented in the paper is a topological quantum code enabling fault tolerance on superconducting hardware.

▶ [Quantum Error Correction with Non-Abelian Topological ...](https://www.youtube.com/watch?v=77ih9UENVXk) — Qiskit · 1:23:54

### Surface code quantum computing *(prerequisite)*
The surface code is a widely studied topological quantum error correction code that serves as a benchmark for logical error rates and resource overhead. Learning about the surface code provides context for comparing the colour code's performance and advantages.

*How the paper uses it:* The paper compares the colour code's error suppression and overhead to that of the surface code on the same processor.

▶ [10 years of progress in quantum surface codes](https://www.youtube.com/watch?v=SyW1LkbFv6k) — Craig Gidney · 32:38

### Lattice surgery in quantum codes *(prerequisite)*
Lattice surgery is a technique to perform logical operations and teleportation between encoded qubits by merging and splitting code patches. It is a key method used in the paper to teleport logical qubits within the colour code framework.

*How the paper uses it:* The paper demonstrates logical state teleportation between colour code qubits using lattice surgery.

▶ [Daniel Litinski (FU Berlin) - A Game of Surface Codes: Large ...](https://www.youtube.com/watch?v=fAcRsdAvhjc) — QEC Conference Team · 48:51

### Colour code quantum error correction
The colour code is a topological quantum error correction code that allows more efficient logical operations and lower qubit overhead compared to the surface code. Understanding its structure and capabilities is crucial to appreciate the paper's demonstration of scaling, logical gates, and magic state injection on superconducting hardware.

*How the paper uses it:* The paper's core contribution is the implementation and scaling of the colour code on a superconducting quantum processor.

▶ [Daniel Litinski: Majoranas and Color Codes -- A Topological ...](https://www.youtube.com/watch?v=bmeLJK6bGoA) — QuICS · 43:40

## Already in your library

- [Fault Tolerance with LDPC Codes | Quantum Colloquium](https://www.youtube.com/watch?v=PD4h6ZIV2gY) — also for: Machine Learning and Algorithmic Techniques for Error Correction (Anxiao Andrew Jiang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper's implementation and scaling of the colour code quantum error correction on superconducting processors. The beginner project reproduces a key metric of logical error suppression by simulating small colour codes. The intermediate project implements the core colour code decoding method and benchmarks logical gate errors on a small simulated lattice. The advanced project extends the decoding approach to improve decoding speed and accuracy, addressing a stated limitation and future direction of the paper.

### Beginner — Simulate Logical Error Suppression in Distance-3 and Distance-5 Colour Codes
*Effort: a weekend, ~8 hours*

You build a Python simulation of the distance-3 and distance-5 colour codes on a hexagonal lattice, implementing basic syndrome extraction and error injection to estimate logical error rates per cycle. You reproduce the paper's key metric showing logical error suppression by scaling the code distance from 3 to 5.

**Why it shows you understood the paper:** This project demonstrates you understand the core concept of error suppression by increasing code distance in the colour code, a central experimental result of the paper.

**Grounded in:** Logical error per cycle reduced by a factor of Λ3/5 = 1.56(4) when increasing code distance from 3 to 5, indicating performance below the colour code threshold.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Simulated error syndromes generated by injecting Pauli errors according to a simple noise model described in the paper.

**Build it:**

1. Implement a data structure representing the hexagonal lattice for distance-3 and distance-5 colour codes.
2. Simulate random Pauli errors on physical qubits with a fixed error probability per cycle.
3. Implement syndrome extraction by measuring stabilizers and detecting error syndromes.
4. Decode syndromes using a simple lookup or minimum-weight perfect matching approximation to estimate logical errors.
5. Run repeated simulations to estimate logical error rates per cycle for both code distances.
6. Plot and compare logical error rates to reproduce the suppression factor Λ3/5 ≈ 1.56.

**Ships as:** A GitHub repository with simulation code, a README explaining the colour code basics, and plots showing logical error rates for distance-3 and distance-5 codes demonstrating error suppression.

**Stretch goal:** Add visualization of the hexagonal lattice and error syndromes to better illustrate the colour code structure.

### Intermediate — Implement Neural-Network Decoding for Colour Code Logical Gates
*Effort: 2 weekends, ~20 hours*

You implement a neural-network-based decoder for the distance-3 colour code syndrome data and perform logical randomized benchmarking of transversal single-qubit Clifford gates. You compare the logical gate error rate to the logical error per cycle, reproducing the paper's characterization of logical gates with low error rates.

**Why it shows you understood the paper:** This project shows you can implement the paper's core decoding method and reproduce a key logical gate fidelity metric, demonstrating comprehension of both decoding and logical gate benchmarking in the colour code.

**Grounded in:** Characterization of transversal single-qubit logical Clifford gates via logical randomized benchmarking with low error rates (εC = 0.0027(3), significantly lower than ε3 = 0.0171(3)).

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Simulated syndrome measurement data for distance-3 colour code under a depolarizing noise model; no official dataset available, so you generate synthetic data based on the paper's noise parameters.

**Build it:**

1. Implement or reuse the distance-3 colour code lattice and syndrome extraction simulation from the beginner project.
2. Generate training data by simulating syndromes with injected errors and corresponding logical error labels.
3. Build and train a neural network to decode syndromes to logical error corrections.
4. Implement logical randomized benchmarking by simulating sequences of transversal Clifford gates and decoding their syndromes.
5. Estimate the logical gate error rate and compare it to the logical error per cycle.
6. Document the methodology and results in a detailed README.

**Ships as:** A GitHub repository with neural network decoder code, benchmarking scripts, and plots showing logical gate error rates compared to logical error per cycle, demonstrating decoding and benchmarking proficiency.

**Stretch goal:** Extend the decoder to distance-5 codes and analyze scaling of logical gate errors.

### Advanced — Accelerate Colour Code Decoding with Real-Time Neural Network and Explore Decoding Accuracy Improvements
*Effort: 3+ weeks*

You develop an optimized, real-time neural network decoder for the colour code that improves decoding speed and accuracy, addressing the paper's limitation on decoding complexity and future direction for enhancing decoding performance. You benchmark your decoder against a baseline and analyze the impact on logical error suppression and scalability.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified by the paper, demonstrating deep understanding of the decoding challenges in colour codes and contributing a practical improvement toward scalable fault-tolerant quantum computing.

**Grounded in:** Colour codes have a stricter error threshold and require more complex decoding strategies; future directions include enhancing decoding speed and accuracy for practical real-time error correction.

**Tech stack:** Python 3.11, PyTorch, NumPy, C++ (optional for performance), Matplotlib

**Data:** Synthetic syndrome data generated from simulations of distance-3 and distance-5 colour codes under realistic noise models described in the paper.

**Build it:**

1. Review and reimplement the neural network decoder from the intermediate project as a baseline.
2. Profile and identify bottlenecks in decoding speed and accuracy.
3. Design and implement architectural improvements such as model pruning, quantization, or lightweight architectures to accelerate decoding.
4. Incorporate advanced training techniques or data augmentation to improve decoding accuracy.
5. Benchmark the improved decoder on simulated syndrome data, comparing speed and logical error suppression to the baseline.
6. Analyze results and discuss implications for practical scalability of colour code error correction.

**Ships as:** A GitHub repository with optimized decoder code, benchmarking scripts, and a comprehensive report detailing improvements in decoding speed and accuracy, linked to the paper's decoding challenges and scalability goals.

**Stretch goal:** Integrate the decoder with a small-scale lattice surgery simulation to demonstrate logical state teleportation with improved decoding.
