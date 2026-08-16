---
title: "471 · ChromoLCD: LCD-based Compact Reprogrammer for On-the-fly High-Resolution Images on Photochromic Surfaces — Stefanie Mueller"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stefanie-mueller"
source_hash: "053ae92b9c61e1855001ab351c45245cfc361a3d21c717a88f86989471181a7d"
sequence: 471
generator: "outreach-garden: managed"
---

# 471 · ChromoLCD: LCD-based Compact Reprogrammer for On-the-fly High-Resolution Images on Photochromic Surfaces

## At a glance

- **Professor:** Stefanie Mueller
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [ChromoLCD: LCD-based Compact Reprogrammer for On-the-fly High-Resolution Images on Photochromic Surfaces](https://groups.csail.mit.edu/hcie/files/research-projects/chromolcd/2026-tei-chromolcd-paper.pdf)
- **Authors:** Yunyi Zhu, Qingyuan Li, Alex Luchianov, Katherine Yan, Eden Hen, Emily Guan, Stefanie Mueller
- **Year:** 2026

## Paper overview

ChromoLCD is a handheld device that uses an LCD panel combined with a custom UV and RGB LED backlight to create high-resolution, multicolor images on surfaces coated with photochromic materials. It enables users to quickly reprogram images on everyday flat surfaces like clothing, kitchen counters, and whiteboards, allowing dynamic and customizable appearances.

### Why it matters

**Research problem:** Existing photochromic surface reprogrammers either have high resolution but are bulky and non-portable (projector-based) or are portable but have low resolution (LED-based). There is a need for a compact, portable device that can produce high-resolution multicolor images on photochromic surfaces.

**Why it matters:** High-resolution, portable reprogramming of photochromic surfaces enables dynamic, customizable, and interactive physical environments and personal items, expanding applications in human-computer interaction, personal fabrication, and augmented reality.

**Key contributions:**

- First LCD-based photochromic reprogrammer achieving high-resolution light patterns at UV and RGB wavelengths in a compact handheld form factor.
- Technical evaluation of image resolution, LCD panel transmittance, contrast ratio, and saturation/desaturation performance on photochromic dyes.
- Demonstration of three applications: reprogrammable AR markers on kitchen counters, on-the-fly design changes on personal accessories, and reference images on interactive whiteboards.

## About the professor

**Stefanie Mueller** — Associate Professor, Department of Electrical Engineering and Computer Science, Massachusetts Inst. of Technology.

Research interests: Human-Computer Interaction, Manufacturing

### Research links

- [Faculty/profile page](https://www.csail.mit.edu/user/4778)
- [Professor website](http://people.csail.mit.edu/stefaniemueller)
- [Lab website](http://hcie.csail.mit.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Optics and Photonics
**The paper assumes:** optical physics, photonics principles, light modulation by LCDs, LED spectral properties, photochromic material light interactions
**Already in this field?** Skip this entirely if you already understand the physics of light modulation in LCDs and the interaction of UV and visible light with photochromic materials.

This background covers optics and photonics fundamentals essential to understanding how LCD panels modulate UV and visible light and how these interact with photochromic materials in the ChromoLCD device. The rigorous course option provides a deep, structured university-level foundation in photonics, while the fast track offers a more concise, focused introduction suitable for quickly grasping key concepts relevant to the paper's hardware and optical design.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Photonics](https://www.youtube.com/playlist?list=PLyqSpQzTE6M-4CNtkROCAvLGDl6Zws22j) — NPTEL-NOC IITM · 49 videos · 35.7h across 49 episodes

**Watch only this:** Episodes 1-10, about 7 hours — covering Introduction to Photonics, Diffraction & Interference, Ray & Wave Optics tutorials, Interferometers, and Coherence, which provide the essential optical physics foundation for the paper.

*Why it unblocks this paper:* This NPTEL IITM 'Introduction to Photonics' course thoroughly covers fundamental optics and photonics principles including wave optics, interference, coherence, electromagnetic optics, and photon interactions, which are directly relevant to understanding LCD light modulation and UV-visible light behavior in photochromic reprogramming.

*If you want all of it:* 35.7 hours across all 49 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Non-linear Optics and its Applications by by Prof. Samudra Roy](https://www.youtube.com/playlist?list=PLq-Gm0yRYwTgs2qOLnHChlKr3tk01gW33) — Quantum AI · 31 videos · 15.4h across 31 episodes

**Watch only this:** Lectures 1-10, about 5 hours — covering Basic Linear Optics and an Introduction to Nonlinear Optics, sufficient to grasp key optical principles relevant to the paper's approach.

*Why it unblocks this paper:* This 'Introduction to Non-linear Optics and its Applications' playlist by Prof. Samudra Roy offers a concise, well-structured overview of linear and nonlinear optical phenomena, including light-matter interactions critical for understanding photochromic dye behavior and UV-visible light modulation in the device.

*If you want all of it:* 15.4 hours across 31 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ChromoLCD paper, start with foundational knowledge on photochromic materials and LCD panel optics to grasp the materials' behavior and the light modulation principles. Then, build understanding of UV and RGB LED backlighting technology to appreciate the custom illumination system. Finally, focus on the core concept of the ChromoLCD device itself through the authors' own talk, which directly presents their novel approach and results.

### Photochromic materials lecture *(prerequisite)*
Understanding the fundamental properties and mechanisms of photochromic materials is essential to grasp how ChromoLCD's light patterns induce color changes on coated surfaces. This lecture covers the physical and chemical basis of photochromism, which underpins the device's function.

*How the paper uses it:* Photochromic materials are the substrate whose color state is dynamically controlled by ChromoLCD's UV and RGB light patterns.

▶ [LECTURE Nr.2: ADAPTIVE PHOTOCHROMIC THIN FILMS FOR SMART WINDOWS / Dr.phys Smagul Karazhanov](https://www.youtube.com/watch?v=99Wqm06sdXk) — SWEB SMART WINDOWS · 26:02 · 10 months ago

### LCD panel optics lecture *(prerequisite)*
A detailed understanding of how LCD panels modulate light at the pixel level is critical to appreciate how ChromoLCD achieves high-resolution image formation. These lectures explain the optical principles and advanced display characteristics relevant to the device's monochromatic LCD panel.

*How the paper uses it:* ChromoLCD uses a monochromatic LCD panel to selectively block light per pixel, enabling high-resolution patterning on photochromic surfaces.

▶ [Lecture 9A LCD Basics](https://www.youtube.com/watch?v=3llv_BkzZcE) — Novel Device Lab at University of Cincinnati · 13:10 · 7 years ago

### UV and RGB LED backlighting lecture *(prerequisite)*
Knowledge of LED backlight design and spectral characteristics is necessary to understand the custom UV and RGB LED backlight system in ChromoLCD. This video provides a rigorous explanation of LED operation and color generation relevant to the device's illumination strategy.

*How the paper uses it:* ChromoLCD's custom backlight combines UV and RGB LEDs at specific wavelengths to saturate and desaturate photochromic dyes.

▶ [How LED Works - Unravel the Mysteries of How LEDs Work!](https://www.youtube.com/watch?v=O8M2z2hIbag) — The Engineering Mindset · 19:06 · 3 years ago

### ChromoLCD device talk *(the paper's own talk)*
This is the authors' own presentation of their work on ChromoLCD, providing direct insights into their design decisions, technical evaluations, and application demonstrations. It is the most authoritative and relevant resource for understanding the paper's contributions and results.

*How the paper uses it:* This talk directly presents the ChromoLCD device, its technical evaluation, and applications as described in the paper.

▶ [CHI Talk: ChromoUpdate: Fast Design Iterations with Photochromic Color Textures](https://www.youtube.com/watch?v=aReB3kqtR0Y) — MIT CSAIL HCI Engineering Group · 5:17 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the ChromoLCD device and its innovative approach to reprogramming photochromic surfaces, start by learning about photochromic materials and how they change color under UV and visible light. Next, grasp the basics of LCD panel optics to see how the device modulates light at a pixel level. Then, explore UV and RGB LED backlighting to understand the custom illumination system used. Finally, study the core concept of high-resolution reprogramming on photochromic surfaces that combines these technologies to achieve dynamic, multicolor images.

### Photochromic materials lecture *(prerequisite)*
Photochromic materials change color when exposed to certain wavelengths of light, especially UV light. Understanding their chemical and physical behavior is essential to grasp how ChromoLCD can dynamically alter surface appearances by controlling light exposure.

*How the paper uses it:* ChromoLCD relies on photochromic dyes that saturate and desaturate under UV and visible light to create reprogrammable images.

▶ [Answering questions on Photochromic and Transition Lenses](https://www.youtube.com/watch?v=hfzEWuwe2UI) — Optometry with KHURRAM · 19:25 · 2 years ago

### LCD panel optics lecture *(prerequisite)*
LCD panels control light transmission on a per-pixel basis by manipulating liquid crystal alignment and polarization. Learning how LCDs modulate light helps understand how ChromoLCD achieves high-resolution image formation by selectively blocking or passing light.

*How the paper uses it:* ChromoLCD uses a monochromatic LCD panel to selectively block light per pixel, enabling high-resolution patterning on photochromic surfaces.

▶ [Lecture 9A LCD Basics](https://www.youtube.com/watch?v=3llv_BkzZcE) — Novel Device Lab at University of Cincinnati · 13:10 · 7 years ago

### UV and RGB LED backlighting lecture *(prerequisite)*
LED backlights emit light at specific wavelengths; UV LEDs trigger photochromic changes, while RGB LEDs provide visible colors. Understanding LED operation and spectral properties clarifies how ChromoLCD’s custom backlight produces the necessary illumination for multicolor reprogramming.

*How the paper uses it:* ChromoLCD’s custom backlight combines UV and RGB LEDs to provide the precise wavelengths needed to saturate and desaturate photochromic dyes.

▶ [How LED Works - Unravel the Mysteries of How LEDs Work!](https://www.youtube.com/watch?v=O8M2z2hIbag) — The Engineering Mindset · 19:06 · 3 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder for demonstrating understanding of the ChromoLCD paper. The beginner project recreates a core technical metric from the paper using software simulation, the intermediate project implements the core LCD-based reprogramming method on a simulated photochromic surface and compares image resolution metrics, and the advanced project extends the method by exploring flexible or curved surface reprogramming, addressing a key limitation noted in the paper.

### Beginner — Simulate LCD Panel Transmittance and Contrast Ratios
*Effort: a weekend, ~8 hours*

You build a small simulation tool that models the LCD panel's light transmittance and contrast ratio at UV and RGB wavelengths, reproducing the paper's reported values. The simulation visualizes how pixel blocking affects light intensity and contrast, helping understand the optical constraints of ChromoLCD.

**Why it shows you understood the paper:** This project shows you grasp the fundamental optical properties of LCD panels critical to ChromoLCD's operation, including how low UV transmittance impacts saturation time and energy efficiency.

**Grounded in:** Measured LCD panel transmittance is 2.1% for UV light (365nm) and between 4.1% and 5.1% for visible wavelengths, consistent with conventional LCDs. Contrast ratios range from 28:1 to 67:1 across UV and visible wavelengths.

**Tech stack:** Python 3.11, matplotlib, numpy, Jupyter Notebook

**Data:** No external data needed; simulate light transmittance and contrast ratio values based on paper-reported measurements.

**Build it:**

1. Create a Python Jupyter notebook to model light transmittance through an LCD pixel at UV and RGB wavelengths.
2. Implement functions to simulate pixel blocking and calculate contrast ratios based on light intensity.
3. Visualize transmittance and contrast ratio values with plots comparing UV and visible light.
4. Document how these optical properties affect photochromic dye saturation and desaturation.
5. Write a README explaining the simulation and its relation to ChromoLCD's performance.

**Ships as:** A Jupyter notebook with simulation code, plots of transmittance and contrast ratios, and a README linking these to the paper's technical evaluation.

**Stretch goal:** Add an interactive widget to vary LCD panel parameters and observe effects on contrast and transmittance.

### Intermediate — Software Simulation of ChromoLCD Image Reprogramming
*Effort: 2 weekends, ~20 hours*

You implement a software simulation of the ChromoLCD method that uses an LCD mask and UV/RGB light pattern to reprogram a virtual photochromic surface. You simulate saturation and desaturation dynamics pixel-wise and measure effective resolution and reprogramming time, comparing against a simple LED-array baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core method of ChromoLCD from the paper's description, including the interplay of LCD pixel blocking and multicolor UV/RGB illumination to achieve high-resolution reprogramming.

**Grounded in:** ChromoLCD uses a monochromatic LCD panel that selectively blocks light on a per-pixel basis combined with a custom backlight containing UV and RGB LEDs at specific wavelengths. ChromoLCD achieves a resolution of 25 pixels per inch, which is 8 times better than prior LED-based systems.

**Tech stack:** Python 3.11, numpy, matplotlib, scipy

**Data:** Simulated photochromic surface data generated in code, modeling pixel states and dye saturation levels over time.

**Build it:**

1. Implement a pixel grid representing a photochromic surface with saturation states.
2. Model LCD panel pixel blocking as a binary mask controlling UV and RGB light exposure per pixel.
3. Simulate saturation and desaturation kinetics of photochromic dyes under UV and RGB illumination.
4. Create a baseline simulation of LED-array reprogramming with lower resolution and compare results.
5. Measure and plot effective resolution (pixels per inch) and reprogramming time for both methods.
6. Write a README explaining the simulation, assumptions, and comparison to ChromoLCD results.

**Ships as:** A Python simulation repository with code to run reprogramming simulations, plots comparing resolution and time metrics, and documentation linking to the paper's core method and results.

**Stretch goal:** Incorporate noise or imperfect contrast ratios in the LCD mask to study image quality degradation.

### Advanced — Prototype Flexible LCD-Based Reprogrammer for Curved Photochromic Surfaces
*Effort: 3+ weeks*

You design and prototype a software and hardware concept for reprogramming curved or flexible photochromic surfaces using flexible LCD or PDLC display technology, addressing the paper's limitation of flat surface support. The project includes a simulation of flexible display optics and a proof-of-concept control software to drive reprogramming patterns on curved surfaces.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by exploring flexible LCD technologies and adapting the ChromoLCD approach to non-flat surfaces, demonstrating deep comprehension and innovation beyond the original work.

**Grounded in:** Currently supports only flat or surfaces that can be made flat due to the flat glass substrate of LCD panels. Exploring flexible LCD technologies like PDLC displays to support curved or flexible surfaces.

**Tech stack:** Python 3.11, OpenCV, numpy, React.js, TypeScript, FastAPI

**Data:** Simulated curved photochromic surface models and flexible LCD pixel masks generated in code.

**Build it:**

1. Research flexible LCD and PDLC display characteristics relevant to photochromic reprogramming.
2. Simulate light pattern projection on curved surfaces accounting for distortion and pixel alignment.
3. Develop software to generate corrected LCD masks for curved surfaces to maintain image resolution.
4. Build a React+FastAPI web app to design and preview reprogramming patterns on virtual curved surfaces.
5. Document challenges and potential hardware adaptations needed for flexible ChromoLCD devices.
6. Write a comprehensive README linking the prototype to the paper's stated limitations and future directions.

**Ships as:** A prototype repository with simulation code, a web-based pattern design tool for curved surfaces, and detailed documentation discussing feasibility and next steps.

**Stretch goal:** Integrate optical mouse sensor or camera tracking simulation to enable swiping reprogramming gestures on curved surfaces.
