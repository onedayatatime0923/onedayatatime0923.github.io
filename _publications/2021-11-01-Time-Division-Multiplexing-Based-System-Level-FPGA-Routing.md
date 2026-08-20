---
title: "Time-Division Multiplexing Based System-Level FPGA Routing"
collection: publications
permalink: /publication/fpga-routing
date: 2021-11-01
venue: "2021 IEEE/ACM International Conference on Computer-Aided Design (ICCAD)"
publication_type: "Conference paper"
authors: "Wei-Kai Liu, Ming-Hung Chen, Chiaming Chang, Chen-Chia Chang, and Yao-Wen Chang"
summary: "A timing-aware routing framework that jointly manages topology, congestion, and TDM ratios in multi-FPGA prototyping systems."
description: "A system-level multi-FPGA routing framework that uses distributed profiling and TDM-ratio refinement to improve emulation performance."
paperurl: "https://doi.org/10.1109/ICCAD51958.2021.9643558"
doi: "10.1109/ICCAD51958.2021.9643558"
---

Multi-FPGA prototyping systems use time-division multiplexing (TDM) to carry more signals than the available inter-FPGA connections. This work develops a timing-aware routing framework that coordinates net ordering, routing congestion, and TDM-ratio assignment to improve overall system performance.

## Why it matters

The system clock period depends on both the routing topology and the multiplexing ratios assigned to inter-FPGA signals. Optimizing those decisions together avoids bottlenecks that topology-only routing methods can miss.

## Key contributions

- Uses distributed profiling to produce timing- and congestion-aware net ordering.
- Refines assignments at both net and edge levels to reduce TDM ratios.
- Evaluates the framework on the 2019 CAD Contest at ICCAD benchmarks.
- Achieves the best overall score against the participating teams and prior published methods under the contest metric.
