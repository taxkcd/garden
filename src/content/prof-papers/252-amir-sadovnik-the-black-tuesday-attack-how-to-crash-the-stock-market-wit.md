---
title: "252 · The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models — Amir Sadovnik"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-amir-sadovnik"
source_hash: "44e0f306fdf9dbdb798cc30ad1fd00eaedca6959fd7606c0a2cd5d9e38e9a031"
sequence: 252
generator: "outreach-garden: managed"
---

# 252 · The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models

## At a glance

- **Professor:** Amir Sadovnik
- **Institution:** University of Tennessee
- **Paper:** [The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models](https://arxiv.org/pdf/2510.18990)
- **Authors:** Thomas Hofweber, Jefrey Bergl, Ian Reyes, Amir Sadovnik
- **Year:** 2025

## Paper overview

This paper explores a novel and serious threat to the stock market where small, coordinated manipulations of individual stock prices can trick financial forecasting machine learning models into predicting a market crash. This prediction can cause a self-fulfilling sell-off, potentially crashing the market. The attack exploits vulnerabilities known as adversarial examples in machine learning and could be carried out without direct access to the forecasting models. The paper outlines how such an attack could be executed, its risks, and possible defenses.

### Why it matters

**Research problem:** Financial forecasting models used in stock market investment decisions are vulnerable to adversarial examples—small, targeted perturbations in input data that cause the models to make incorrect predictions. The problem is how adversaries could exploit this vulnerability to cause a stock market crash or devalue individual stocks by manipulating stock prices subtly.

**Why it matters:** The stock market is critical to economic stability, wealth creation, and national security. An adversarial attack causing a market crash could lead to significant economic damage, wealth destruction, and tighter national security budgets. Current defenses and awareness of this threat are insufficient, posing a neglected but urgent risk.

**Key contributions:**

- Identification of a new attack vector on financial forecasting models via adversarial examples realized through actual stock price manipulations.
- Detailed outline of the Black Tuesday Attack sequence including training surrogate models, constructing adversarial examples, and realizing them in the market.
- Discussion of the transferability of adversarial examples across different forecasting models trained on similar data.
- Extension of the attack concept to single-stock manipulation scenarios.
- Analysis of potential defenses and their limitations against such attacks.

## About the professor

**Amir Sadovnik** — Assistant Professor, Electrical Engineering and Computer Science, University of Tennessee.

Research interests: computer vision, signal processing, natural language processing, machine learning

### Research links

- [Faculty/profile page](https://web.eecs.utk.edu/~asadovni/)
- [Identity evidence](http://uvu.eecs.utk.edu)
- [Identity evidence](https://web.eecs.utk.edu/~asadovni/about.html)
- [Resolved homepage](https://web.eecs.utk.edu/~asadovni/index.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Black Tuesday Attack paper, start with foundational knowledge of adversarial machine learning and financial forecasting models, as these underpin the attack methodology. Next, explore the transferability of adversarial examples and market manipulation mechanisms to grasp how attacks can be realized in practice. Finally, focus on the core concept of the Black Tuesday Attack itself, prioritizing any direct talks by the authors or closely related academic presentations.

### Adversarial machine learning fundamentals *(prerequisite)*
This section covers the foundational concepts of adversarial machine learning, including how adversarial examples are crafted and their impact on model robustness. Understanding these basics is critical to grasping how financial forecasting models can be fooled by subtle input perturbations.

*How the paper uses it:* The paper builds on adversarial machine learning principles originally developed in image classification to attack financial forecasting models.

▶ [DSI | Adversarial Machine Learning: Categories, Concepts ...](https://www.youtube.com/watch?v=j39gQ1aeKfc) — Inside Livermore Lab · 1:05:46

### Financial forecasting models *(prerequisite)*
This section introduces the types of financial forecasting models targeted by the attack, including machine learning approaches for stock price prediction. A solid understanding of these models is necessary to appreciate the vulnerabilities exploited by adversarial examples.

*How the paper uses it:* The attack manipulates inputs to financial forecasting models to induce incorrect market crash predictions.

▶ [Machine Learning for Financial Forecasting](https://www.youtube.com/watch?v=_-Rd2PTx9Q4) — Quantiacs · 22:12

### Transferability of adversarial examples *(prerequisite)*
This section explains the property that adversarial examples crafted for one model often transfer to other models trained on similar data. This is crucial for the paper's attack scenario where the adversary does not have direct access to the victim model but uses surrogate models.

*How the paper uses it:* The paper relies on the transferability of adversarial examples to attack black-box financial forecasting models.

▶ [Adversarial Transferability and Beyond](https://www.youtube.com/watch?v=OtRFL0jQaik) — 2d3d.ai · 1:17:21

### Market manipulation and coordinated interventions *(prerequisite)*
This section explores how real-world stock prices can be manipulated through coordinated buying and selling, providing the practical mechanism to realize adversarial perturbations in the market. Understanding these tactics is essential to evaluate the feasibility of the proposed attack.

*How the paper uses it:* The attack realizes adversarial examples by subtly manipulating stock prices via coordinated market interventions.

▶ [How Hedge Funds Manipulate Stocks](https://www.youtube.com/watch?v=EuT6UyeeJcQ) — Solving The Money Problem · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the Black Tuesday Attack paper, starting with the basics of adversarial machine learning to build intuition about how machine learning models can be fooled. Next, it covers financial forecasting models to understand the targets of the attack, followed by the transferability of adversarial examples which enables black-box attacks. Then, it explains how adversarial examples can be realized in the real stock market through coordinated market manipulation. Finally, it touches on the historical context of Black Tuesday to appreciate the economic impact of such attacks.

### Adversarial machine learning fundamentals *(prerequisite)*
Learn what adversarial machine learning is: how small, carefully crafted changes to input data can trick machine learning models into making wrong predictions. This foundational knowledge explains why models are vulnerable and how attackers exploit these weaknesses.

*How the paper uses it:* The paper builds on the concept of adversarial examples to show vulnerabilities in financial forecasting models.

▶ [Adversarial Machine Learning explained! | With examples.](https://www.youtube.com/watch?v=YyTyWGUUhmo) — AI Coffee Break with Letitia · 10:24

### Financial forecasting models *(prerequisite)*
Understand what financial forecasting models are and how they predict stock prices or market trends using historical data. This knowledge is essential to grasp what the adversarial attack targets and manipulates.

*How the paper uses it:* The attack targets financial forecasting models that investors rely on to make decisions.

▶ [Stock Price Prediction And Forecasting Using Stacked LSTM ...](https://www.youtube.com/watch?v=H6du_pfuznE) — Krish Naik · 36:33

### Transferability of adversarial examples *(prerequisite)*
Discover how adversarial examples crafted for one model can also fool other models trained on similar data, even if the attacker does not have direct access to those models. This property enables attacks on black-box financial models.

*How the paper uses it:* The paper exploits transferability to attack black-box financial forecasting models using surrogate models.

▶ [USENIX Enigma 2017 — Adversarial Examples in Machine ...](https://www.youtube.com/watch?v=hUukErt3-7w) — USENIX Enigma Conference · 19:36

### Market manipulation and coordinated interventions *(prerequisite)*
Learn how groups can coordinate buying and selling to subtly influence stock prices in real markets. This practical mechanism is how adversarial perturbations are realized in the stock market to fool forecasting models.

*How the paper uses it:* The attack realizes adversarial examples by manipulating actual stock prices through coordinated market actions.

▶ [How Hedge Funds Manipulate Stocks](https://www.youtube.com/watch?v=EuT6UyeeJcQ) — Solving The Money Problem · 5 years ago

### Black Tuesday Attack talk *(the paper's own talk)*
Gain historical context on the original Black Tuesday stock market crash of 1929 to understand the economic devastation such crashes cause. This background highlights the real-world stakes of the adversarial attack proposed in the paper.

*How the paper uses it:* The paper names its attack after Black Tuesday to emphasize the potential for adversarial attacks to trigger market crashes.

▶ [The 1929 Stock Market Crash - Black Thursday - Extra History](https://www.youtube.com/watch?v=D2iuUzkKu9k) — Extra History · 6 years ago

## Already in your library

- [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Adversarial Examples for Deep Neural Networks](https://www.youtube.com/watch?v=kxyacmVSGlI) — also for: A Duty to Forget, a Right to be Assured? Exposing Vulnerabilities in Machine Unlearning Services (Shuang Hao)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth around the Black Tuesday Attack paper. The beginner project recreates a simple adversarial perturbation scenario on a surrogate financial forecasting model to demonstrate vulnerability. The intermediate project implements the core adversarial example construction method on a public stock dataset and evaluates transferability to a black-box model. The advanced project extends the paper by exploring detection methods for coordinated adversarial manipulations, addressing one of the paper's future directions and limitations.

### Beginner — Surrogate Model and Sparse Adversarial Perturbations on Stock Data
*Effort: a weekend, ~8 hours*

You build a simple surrogate financial forecasting model using publicly available historical stock price data (e.g., daily closing prices of a small set of stocks). Then, you implement a basic adversarial perturbation method that modifies only a small subset of stock prices to cause the model to predict a market downturn. This reproduces the paper's key insight that sparse perturbations can fool forecasting models.

**Why it shows you understood the paper:** This project shows you understand the paper's core mechanism of training surrogate models and crafting sparse adversarial examples that manipulate model predictions, a foundational step in the Black Tuesday Attack.

**Grounded in:** Identification of a new attack vector on financial forecasting models via adversarial examples realized through actual stock price manipulations.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, Jupyter Notebook

**Data:** Use publicly available historical stock price data from Yahoo Finance or similar for a small set of stocks as a substitute for the paper's data.

**Build it:**

1. Collect daily closing price data for a small set of stocks over a recent period.
2. Train a simple regression or classification model to forecast a market index movement based on these stock prices.
3. Implement a method to generate sparse adversarial perturbations on a subset of input stock prices to flip the model's prediction to a downturn.
4. Visualize the original and perturbed inputs and the corresponding model predictions.
5. Document how sparse perturbations affect the surrogate model's output.

**Ships as:** A Jupyter notebook and scripts showing surrogate model training, adversarial perturbation generation, and visualization of prediction changes.

**Stretch goal:** Add a simple baseline defense like input smoothing and show its effect on adversarial perturbations.

### Intermediate — Reimplementation of Black Tuesday Attack Adversarial Example Construction
*Effort: 2 weekends, ~20 hours*

You reimplement the core method of the Black Tuesday Attack by training a surrogate financial forecasting model on a public stock dataset and constructing sparse, targeted adversarial examples that cause the model to predict a market crash. You then test transferability of these adversarial examples to a second black-box model trained on similar data, comparing prediction changes as the paper does.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reproduce the paper's main adversarial attack method and validate the transferability property, a key empirical result of the paper.

**Grounded in:** Detailed outline of the Black Tuesday Attack sequence including training surrogate models, constructing adversarial examples, and realizing them in the market; Discussion of the transferability of adversarial examples across different forecasting models trained on similar data.

**Tech stack:** Python 3.11, PyTorch, pandas, numpy, matplotlib, Jupyter Notebook

**Data:** Use a public stock price dataset such as daily prices from Yahoo Finance for a broad market index and constituent stocks as a substitute for the paper's data.

**Build it:**

1. Collect and preprocess historical stock price data for a market index and its constituent stocks.
2. Train a surrogate forecasting model (e.g., LSTM or feedforward neural network) to predict market index movement.
3. Implement an adversarial example generation algorithm that perturbs a sparse subset of stock prices to cause the surrogate model to predict a crash.
4. Train a second black-box model with a different architecture on the same data.
5. Evaluate and compare the surrogate and black-box model predictions on original and adversarial inputs to demonstrate transferability.
6. Visualize results and write a report comparing metrics such as prediction confidence and perturbation sparsity.

**Ships as:** A GitHub repository with code to train models, generate adversarial examples, evaluate transferability, and a README documenting results.

**Stretch goal:** Incorporate a simple defense method like adversarial training on the surrogate model and evaluate its impact on attack success.

### Advanced — Detection of Coordinated Adversarial Manipulations in Financial Forecasting
*Effort: 3+ weeks*

You develop and evaluate a detection method for coordinated adversarial manipulations of stock prices that realize adversarial examples, addressing one of the paper's future directions. Using simulated adversarial perturbations on public stock data, you design statistical or machine learning-based detectors to identify suspicious coordinated price movements that could indicate an ongoing Black Tuesday Attack.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by moving beyond attack construction to defense via detection, demonstrating deep comprehension of the paper's threat model and challenges in real markets.

**Grounded in:** Investigating detection methods for coordinated market manipulations realizing adversarial examples; Analysis of potential defenses and their limitations against such attacks.

**Tech stack:** Python 3.11, scikit-learn, pandas, numpy, matplotlib, Jupyter Notebook

**Data:** Use public stock price data from Yahoo Finance and simulate coordinated adversarial perturbations as per the paper's attack model.

**Build it:**

1. Collect and preprocess historical stock price data for a set of stocks.
2. Simulate coordinated adversarial perturbations on subsets of stocks to mimic the Black Tuesday Attack.
3. Engineer features capturing coordination patterns, e.g., synchronized price changes, volume spikes.
4. Train and evaluate anomaly detection or classification models to distinguish normal from manipulated data.
5. Analyze detection performance metrics (precision, recall) and discuss practical deployment challenges.
6. Document findings and suggest improvements or extensions.

**Ships as:** A GitHub repository with code for data simulation, feature engineering, detection model training, evaluation scripts, and a detailed README with analysis.

**Stretch goal:** Extend detection to dynamic/adaptive adversarial examples that evolve over time as suggested in the paper's future directions.

_No code or dataset artifacts were released by the paper's authors; all projects must use public stock data substitutes and reimplement methods from the paper's descriptions._
