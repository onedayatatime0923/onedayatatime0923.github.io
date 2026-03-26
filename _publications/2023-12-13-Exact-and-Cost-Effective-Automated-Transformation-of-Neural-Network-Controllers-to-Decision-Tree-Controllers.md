---
title: "Exact and Cost-Effective Automated Transformation of Neural Network Controllers to Decision Tree Controllers"
collection: publications
permalink: /publication/nn-to-dt
date: 2023-12-13
venue: "2023 62nd IEEE Conference on Decision and Control (CDC)"
---

This paper introduces an exact transformation procedure that converts neural network controllers into decision tree controllers without changing the underlying control behavior. The result is a controller representation that is dramatically easier to inspect and reason about, while still remaining suitable for solver-based verification and embedded deployment.

Key contributions:
* Formulates neural-to-tree conversion as an exact equivalence-preserving transformation problem.
* Introduces a cost-aware optimization objective to control the size and complexity of the resulting tree.
* Provides formal guarantees that the transformed controller matches the original controller across activation regions.
* Demonstrates closed-loop applicability on benchmark control tasks including CartPole, MountainCar, and CarRacing.
