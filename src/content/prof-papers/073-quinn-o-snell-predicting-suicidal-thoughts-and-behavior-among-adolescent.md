---
title: "073 · Predicting suicidal thoughts and behavior among adolescents using the risk and protective factor framework: A large-scale machine learning approach — Quinn O. Snell"
date: 2026-07-29
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-quinn-o-snell"
source_hash: "c43994b8c00f582dc2aeee36515871c4778b0ce04c4c134ef91833d9084042e0"
sequence: 73
generator: "outreach-garden: managed"
---

# 073 · Predicting suicidal thoughts and behavior among adolescents using the risk and protective factor framework: A large-scale machine learning approach

## At a glance

- **Professor:** Quinn O. Snell
- **Institution:** Brigham Young University
- **Paper:** [Predicting suicidal thoughts and behavior among adolescents using the risk and protective factor framework: A large-scale machine learning approach](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0258535)
- **Authors:** Orion Weller, Luke Sagers, Carl Hanson, Michael Barnes, Quinn Snell, E. Shannon Tass
- **Year:** 2021

## Paper overview

This study used machine learning on a large dataset of Utah adolescents to predict suicidal thoughts and behaviors (STB). It identified key risk and protective factors such as online harassment, bullying, family arguments, and demographic factors like gender and age. The model achieved 91% accuracy and suggests targeted areas for prevention programs and policies.

### Why it matters

**Research problem:** Suicidal thoughts and behavior among adolescents are significant public health challenges, but previous studies have limited predictive accuracy and scope. There is a need to identify combinations of risk and protective factors that predict STB effectively.

**Why it matters:** Suicide is a leading cause of death among adolescents in the US. Better prediction of STB can improve prevention and treatment efforts, ultimately reducing suicide rates.

**Key contributions:**

- Developed a highly accurate (91%) machine learning model predicting adolescent STB.
- Identified top predictive factors spanning peer-individual, family, school, and demographic domains.
- Demonstrated that a short survey (10-20 questions) can approximate full model accuracy.
- Provided interpretable machine learning insights using SHAP for feature importance.
- Showed that social determinants of health were not top predictors, highlighting more proximate risk factors.

## About the professor

**Quinn O. Snell** — Professor, Brigham Young University.

Research interests: Natural Language Processing and Large Language Models, Big Data Systems and Data Analytics

### Research links

- [Faculty/profile page](https://cs.byu.edu/department/directories/faculty-directory/quinn-snell)
- [Identity evidence](https://faculty.cs.byu.edu/~snell)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on predicting suicidal thoughts and behavior among adolescents using machine learning, start with foundational knowledge on the risk and protective factors framework and social determinants of health, as these underpin the study's variable selection and contextual understanding. Next, gain technical insight into gradient boosting decision trees and SHAP values, which are core to the modeling and interpretability approach. Finally, focus on the paper authors' own talk to grasp the specific application, findings, and implications of their research.

### Risk and protective factors framework *(prerequisite)*
This framework is foundational to understanding how the study selected and interpreted predictive variables related to adolescent suicidal thoughts and behaviors. The videos provide academic-level lectures and grand rounds that discuss the role of risk and protective factors in child and adolescent mental health, offering context for the paper's approach.

*How the paper uses it:* The study uses the risk and protective factor framework to identify key predictors of suicidal thoughts and behaviors among adolescents.

▶ [Semel Grand Rounds, 2024-04-16, Dr. Stacy Drury](https://www.youtube.com/watch?v=e8K1B01d_i4) — Semel Audio Visual AV · 1:09:29

### Social determinants of health *(prerequisite)*
Understanding social determinants of health (SDH) is important to contextualize the distal factors considered in the study, even though they were not top predictors. The selected videos provide substantive academic discussions on how SDH influence health outcomes, which helps interpret the study's findings about the limited predictive power of census-derived SDH variables.

*How the paper uses it:* The paper found that social determinants of health from census data did not significantly predict adolescent suicidal thoughts and behaviors.

▶ [Exploring the Social Determinants of Health, Health Equity ...](https://www.youtube.com/watch?v=gLFJeS5E41A) — ChangeLab Solutions · 1:03:53

### Gradient boosting decision trees *(prerequisite)*
Gradient boosting decision trees, specifically LightGBM, are the core machine learning method used in the study for prediction. The chosen videos offer detailed, technical explanations and tutorials on gradient boosting and LightGBM, suitable for advanced readers seeking to understand the modeling approach.

*How the paper uses it:* The study used LightGBM, a gradient boosting decision tree model, to achieve high accuracy in predicting suicidal thoughts and behaviors.

▶ [LightGBM 101: Faster Gradient Boosting for Large-Scale ML](https://www.youtube.com/watch?v=BiaPCbiEYas) — Super Data Science: ML & AI Podcast with Jon Krohn · 14:58

### Interpretable machine learning SHAP *(prerequisite)*
SHAP values are used in the paper to interpret feature importance and explain the model's predictions. The selected videos provide rigorous, mathematically grounded explanations of SHAP, including university-level lectures and detailed walkthroughs, enabling a deep understanding of the interpretability method applied.

*How the paper uses it:* The study used SHapley Additive Explanations (SHAP) to interpret the influence of each survey question on the model's predictions.

▶ [IML - 04 Shapley - 03 SHAP (SHapley Additive exPlanation ...](https://www.youtube.com/watch?v=hqr-AGOcG_s) — Statistical Learning and Data Science · 30:27

### Suicide risk prediction in adolescents
This concept directly addresses the applied problem of predicting suicide risk in adolescents using machine learning, combining mental health expertise with data science. The selected videos are expert discussions and research seminars that provide advanced insights into challenges and opportunities in this domain, complementing the paper's contributions.

*How the paper uses it:* The paper contributes to suicide risk prediction in adolescents by developing a highly accurate machine learning model using large-scale survey data.

▶ [Machine Learning-Based Prediction Models For Suicide Prevention](https://www.youtube.com/watch?v=CrJIyE9qcmM) — Center for Suicide Research and Prevention (CSRP) · 1 year ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides the most direct and specific insights into their methodology, findings, and implications. Although no exact recorded talk by the authors on this paper was found, the closest relevant video is a news segment about the research, which offers some direct context and is preferred over unrelated or beginner content.

*How the paper uses it:* This video features a discussion of the algorithm developed by BYU researchers, including the paper's authors, to predict suicidal thoughts in adolescents.

▶ [BYU researchers create algorithm to predict suicidal thoughts in adolescents](https://www.youtube.com/watch?v=IHMhvUP-5oI) — KSL News Utah · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts to understand how machine learning predicts adolescent suicidal thoughts and behaviors using risk and protective factors. We start with the social determinants of health to set context, then cover the risk and protective factor framework, followed by an intuitive explanation of gradient boosting decision trees, the core ML model used. Next, we explore SHAP values for interpreting model predictions, and finally, we look at the applied problem of suicide risk prediction in adolescents, tying all concepts back to the paper.

### Social determinants of health *(prerequisite)*
Social determinants of health (SDH) are the conditions in which people live that affect their health outcomes, such as income, education, and environment. Understanding SDH provides context for why some factors might influence adolescent mental health indirectly or distally.

*How the paper uses it:* The paper considered SDH from census data but found they were not top predictors of suicidal thoughts and behaviors in adolescents.

▶ [What Makes Us Healthy? Understanding the Social ...](https://www.youtube.com/watch?v=8PH4JYfF4Ns) — Let's Learn Public Health · 6:28

### Risk and protective factors framework *(prerequisite)*
This framework identifies factors that increase risk (risk factors) or decrease risk (protective factors) for negative outcomes like suicidal behavior. It helps organize variables from peer, family, school, and demographic domains to understand adolescent mental health.

*How the paper uses it:* The study used this framework to select and analyze predictive variables for suicidal thoughts and behaviors.

▶ [Risk and protective factors](https://www.youtube.com/watch?v=rcA_Z7poEzw) — KidsMatterAustralia · 6:44

### Gradient boosting decision trees *(prerequisite)*
Gradient boosting builds an ensemble of decision trees sequentially, where each tree corrects errors of the previous ones, resulting in a powerful predictive model. LightGBM is a fast, efficient implementation of this technique, well-suited for large datasets.

*How the paper uses it:* LightGBM was the core machine learning model used to achieve 91% accuracy in predicting adolescent suicidal thoughts and behaviors.

▶ [LightGBM algorithm explained | Lightgbm vs xgboost ...](https://www.youtube.com/watch?v=9uxWzeLglr0) — Unfold Data Science · 10:48

### Interpretable machine learning SHAP
SHAP values explain how much each feature contributes to a model's prediction by fairly distributing the prediction among features. This helps interpret complex models like gradient boosting by showing feature importance and direction of influence.

*How the paper uses it:* The paper used SHAP values to identify and interpret the most influential risk and protective factors in their model.

▶ [SHAP values for beginners | What they mean and their ...](https://www.youtube.com/watch?v=MQ6fFDwjuco) — A Data Odyssey · 7:07

### Suicide risk prediction in adolescents
This concept covers how machine learning models can be applied to predict suicidal thoughts and behaviors in adolescents, highlighting challenges and opportunities in mental health prediction and prevention.

*How the paper uses it:* The paper presents a large-scale machine learning approach specifically predicting adolescent suicidal thoughts and behaviors using survey and demographic data.

▶ [Machine Learning-Based Prediction Models For Suicide Prevention](https://www.youtube.com/watch?v=CrJIyE9qcmM) — Center for Suicide Research and Prevention (CSRP) · 1 year ago
