---
layout: page
title: CRiC
description: Protocol scoped counterfactual risk certification for interactive autonomous driving
img: assets/img/9.jpg
importance: 6
category: Research
year: 2026
---

**Status:** Submitted to NeurIPS 2026 (under review).

## Overview

CRiC is a counterfactual risk-certification framework for evaluating autonomous-driving decisions in interactive environments. It focuses on certifying the behavior of a complete decision protocol rather than evaluating only the accuracy of an individual prediction model.

The framework estimates the risk associated with candidate driving decisions and determines whether the available evidence is sufficient to make a reliable selection.

## Risk Certification

CRiC uses calibrated upper risk bounds to assess candidate trajectories under uncertainty. Instead of always selecting a candidate, the framework can abstain when none of the available options can be certified with sufficient confidence.

This allows the system to distinguish between decisions that appear promising and decisions that have adequate statistical support for safety-aware deployment.

## Evaluation

CRiC evaluates a fixed decision-making protocol across large collections of driving scenes and candidate trajectories. The analysis examines:

- whether calibrated risk bounds reliably control observed failure rates;
- how certification affects candidate selection and abstention;
- how performance changes across different driving conditions; and
- whether reliability is maintained at both the candidate and scene levels.

The framework is designed for scalable evaluation using streaming-friendly artifacts and large-scale autonomous-driving experiments.

## Technologies

PyTorch, trajectory forecasting, motion planning, conformal calibration, counterfactual evaluation, CARLA, autonomous-driving datasets, and HPC/GPU computing.
