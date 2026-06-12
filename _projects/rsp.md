---
layout: page
title: Residual-Signal Protocol (RSP)
description: Evaluating whether learned interaction representations explain trajectory-forecasting errors beyond physical and scenario-based factors
img: assets/img/8.jpg
importance: 7
category: research
related_publications: true
---

**Status:** Submitted to CoRL 2026 (under review).

## Overview

The **Residual-Signal Protocol (RSP)** is an evaluation framework for determining whether learned target--neighbor interaction representations capture information that genuinely helps explain trajectory-forecasting errors beyond simple physical interaction metrics and scenario covariates.

Rather than relying only on aggregate forecasting metrics, RSP examines whether a representation provides meaningful explanatory signal after accounting for established baseline factors.

## DyadCode

As part of the framework, I developed **DyadCode**, a learned discrete representation of pairwise driving interactions. DyadCode captures recurring interaction patterns between a target vehicle and its neighboring agents.

Its explanatory signal is evaluated against random, shuffled, and K-means-based controls using robustness tests, PET/TTC information ablations, and representation-quality analyses.

## Evaluation

RSP was evaluated on the **Argoverse 2 Motion Forecasting Dataset** using forecasting outputs from **MTR** and **QCNet**. The evaluation examines:

- whether learned representations explain forecasting errors beyond baseline factors;
- whether the observed signal remains stable under robustness checks;
- how different representations rank difficult interactions; and
- how representation behavior changes across interaction conditions.

## Technologies

PyTorch, Argoverse 2, MTR, QCNet, representation evaluation, statistical analysis, and HPC/GPU computing.

