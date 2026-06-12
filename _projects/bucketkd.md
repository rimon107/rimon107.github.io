---
layout: page
title: BucketKD
description: Safety-aware knowledge distillation for end-to-end motion planning
img: assets/img/8.png
importance: 5
category: Research
year: 2025-2026
---

**Status:** Submitted to IROS 2026 (under review).

## Overview

BucketKD is a safety-aware knowledge-distillation framework for compressing end-to-end autonomous-driving motion planners while preserving important trajectory behavior.

Rather than matching only the overall outputs of a larger teacher model, BucketKD organizes planning states into meaningful groups or buckets and encourages the student model to retain safety-relevant behavior across different driving situations.

## Safety-Aware Distillation

BucketKD introduces time-to-collision-guided waypoint attention to emphasize trajectory points that are more important for safety. It also uses adaptive planning-state discretization to group driving examples according to their planning characteristics.

These components help the student model learn where accurate imitation matters most, especially in challenging or safety-sensitive situations.

## Evaluation

BucketKD was evaluated using end-to-end motion-planning experiments in autonomous-driving environments. The evaluation examines:

- how well the compressed model preserves the teacher planner's trajectory behavior;
- whether safety-critical waypoints receive appropriate attention;
- how model compression affects planning accuracy and safety metrics; and
- whether the student model achieves a better balance between efficiency and driving performance.

The project also formed the basis of my M.S. thesis in Computer Science at the University of Memphis.

## Technologies

PyTorch, knowledge distillation, end-to-end motion planning, CARLA, time-to-collision safety metrics, model compression, trajectory evaluation, and HPC/GPU computing.

