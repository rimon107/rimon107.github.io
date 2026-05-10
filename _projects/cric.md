---
layout: page
title: CRiC
description: Protocol-scoped counterfactual risk certification for interactive autonomous driving
img: assets/img/cric.png
importance: 1
category: Research
---

**Status:** Submitted to NeurIPS 2026 (under review).

**CRiC: Counterfactual Risk Certification for Interactive Driving** is my ongoing Ph.D. research project on trustworthy decision-making for interactive autonomous driving, conducted with Prof. Myounggyu Won at the University of Memphis.

CRiC studies how to certify the risk of a full autonomous-driving decision protocol, rather than only evaluating a standalone predictor. The framework focuses on protocol-scoped reliability, calibrated upper-risk bounds, counterfactual evaluation, and abstention-aware candidate selection — components aimed at producing safety guarantees that hold for the system as deployed, not just for a model in isolation.

### Architecture

{% include figure.liquid
   loading="eager"
   path="assets/img/cric.png"
   class="img-fluid rounded z-depth-1"
   caption="CRiC framework: a frozen decision protocol is evaluated end-to-end, with calibrated upper-risk bounds and abstention-aware candidate selection."
%}

### Highlights

- Developed a protocol-scoped certification framework for interactive autonomous driving that evaluates a frozen decision protocol rather than only a predictor.
- Designed calibrated upper-risk-bound selection for safety-aware candidate choice under uncertainty.
- Introduced abstention logic when candidate ordering is too uncertain to commit to a single decision.
- Built streaming-friendly evaluation artifacts and reliability analyses for large-scale scene/candidate rollouts.
- Evaluated on standard interactive-driving benchmarks using PyTorch and HPC/GPU infrastructure.

### Keywords

Autonomous driving, trustworthy machine learning, conformal calibration, counterfactual evaluation, motion planning, trajectory forecasting, safe robotics.

### Resources

<!-- Uncomment when arXiv link is live -->
<!-- - 📄 [arXiv preprint](https://arxiv.org/abs/2606.XXXXX) -->
<!-- - 💻 [Code (GitHub)](https://github.com/rimon107/cric) -->
- Submitted to NeurIPS 2026 (under review). Preprint and code release coming soon.