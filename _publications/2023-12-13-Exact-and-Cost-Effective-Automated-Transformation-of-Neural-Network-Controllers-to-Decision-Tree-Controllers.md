---
title: "Exact and Cost-Effective Automated Transformation of Neural Network Controllers to Decision Tree Controllers"
collection: publications
permalink: /publication/nn-to-dt
date: 2023-12-13
venue: "2023 62nd IEEE Conference on Decision and Control (CDC)"
publication_type: "Conference paper"
authors: "Kevin Chang, Nathan Dahlin, Rahul Jain, and Pierluigi Nuzzo"
summary: "An automated, equivalence-preserving conversion from ReLU neural controllers to verification-friendly soft decision trees."
description: "An exact and cost-effective transformation from discrete-output neural-network controllers to soft decision trees, evaluated on standard control benchmarks."
paperurl: "https://arxiv.org/abs/2304.06049v2"
arxiv: "https://arxiv.org/abs/2304.06049v2"
---

This paper introduces an automated procedure for converting discrete-output ReLU neural-network controllers into exactly equivalent soft decision trees. The construction preserves controller behavior while pruning redundant branches to control the cost of the resulting representation.

## Why it matters

Equivalent tree representations expose the decision structure of a neural controller and can be less expensive for formal tools to analyze, without introducing approximation error between the original and transformed policies.

## Key contributions

- Proves input-output equivalence between the original neural controller and the transformed soft decision tree.
- Automatically prunes redundant branches during transformation.
- Evaluates the approach on MountainCar and CartPole.
- Reports verification speedups of up to 21x and 2x on the two benchmarks.
