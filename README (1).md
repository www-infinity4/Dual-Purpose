# Infinity Scientific Methods & Robotics Engineering Portal

A high-end, local-first website for documenting scientific ideas, separating established results from hypotheses, designing robot/device prototypes, creating interactive graphs, and publishing reproducible tutorials.

## Purpose

This project turns a collection of scientific concepts into a disciplined research and engineering workspace. It supports four stages:

1. **Consensus** — identify what is established, disputed, speculative, or untested.
2. **Build** — convert a claim into a measurable prototype or simulation.
3. **Expand** — add data, diagrams, robot subsystems, and controlled experiments.
4. **Deliver** — publish a readable report, demonstration, or technical package.

The portal deliberately preserves ambitious ideas while labeling evidence honestly. It does **not** treat an unverified mechanism as proven merely because it can be described mathematically.

## Scientific status model

Every claim should receive one label:

- **Established** — repeatedly measured and supported by mainstream evidence.
- **Engineering inference** — a reasonable design conclusion based on established principles.
- **Testable hypothesis** — a clear prediction that can be falsified by an experiment.
- **Speculative framework** — an organizing idea that needs a measurable mechanism.
- **Rejected by current evidence** — conflicts with reliable measurement unless new evidence appears.

### Example: magnesium and nitrogen

Under ordinary chemical or agricultural conditions, magnesium does not become nitrogen. Magnesium has 12 protons and nitrogen has 7; changing one into the other is a nuclear transformation, not a soil or resonance chemistry process. Magnesium can still affect nitrogen use in plants through chlorophyll formation, enzyme activity, nutrient balance, and compounds such as magnesium nitrate.

A proposed resonance-driven magnesium-to-nitrogen transition therefore belongs in the **testable hypothesis** category until direct isotopic, radiation, mass-balance, and contamination-controlled measurements support it.

## Core modules

- Research claim ledger
- Evidence and confidence matrix
- Interactive canvas graphs
- Quantum mechanics timeline and glossary
- Catalan-number visualizer
- Curvature and expansion tutorials
- Hypercomplex-number-system map
- Robot/device engineering workflow
- Sensor and telemetry architecture
- Threat model and hardened deployment guide
- “Boron Vault” wallet concept using modern cryptography; boron is a project name/material motif, not the security mechanism

## Run locally

No package installation is required.

```bash
python3 -m http.server 8080 --directory .
```

Then open `http://localhost:8080`.

You can also open `index.html` directly, although some browsers restrict local-file behavior.

## Project structure

```text
.
├── index.html
├── styles.css
├── app.js
├── README.md
├── SECURITY.md
├── assets/images/
├── data/claims.json
└── docs/
    ├── SCIENTIFIC_METHOD.md
    ├── ROBOT_ENGINEERING.md
    ├── BORON_VAULT.md
    └── DEPLOYMENT.md
```

## Security posture

No website can truthfully promise zero possibility of compromise. This project instead minimizes attack surface:

- Static files only by default
- No third-party JavaScript
- No analytics or trackers
- No remote fonts
- Strict Content Security Policy
- No `eval`, inline event handlers, or dynamic HTML injection
- Local-only demo wallet; no real funds or seed phrases
- Recommended immutable hosting and signed releases

Read [SECURITY.md](SECURITY.md) before deploying.

## Research protocol for extraordinary claims

A resonance/transmutation experiment should include:

1. Pre-registered prediction and failure criteria.
2. Sealed blanks and positive/negative controls.
3. Independent sample custody.
4. Isotope-sensitive analysis before and after.
5. Full mass balance, gas capture, and contamination tracking.
6. Radiation monitoring appropriate to the proposed mechanism.
7. Replication by a laboratory that did not build the device.

A spectral color shift alone cannot establish element conversion. Optical emissions can arise from impurities, plasma chemistry, oxide layers, or instrument artifacts.

## Robot/device engineering principles

- Begin with a measurable job, not a material list.
- Define inputs, outputs, safety limits, and shutdown behavior.
- Keep power, sensing, control, and communications modular.
- Log raw data with timestamps and calibration metadata.
- Use simulation before high-energy testing.
- Add an independent emergency stop and passive containment.

## Boron Vault concept

“Boron Vault” is a local-first wallet design concept. Its security comes from audited cryptography, hardware-backed key storage, multisignature approval, transaction simulation, and strict separation between viewing and signing. Boron can inspire the visual system or physical enclosure, but elemental boron does not itself secure digital assets.

The included interface is a safe demonstration only. It never creates, imports, or stores a real seed phrase.

## License and use

Use this project as a research notebook, educational site, or prototype front end. Before handling real funds, hazardous materials, radiation, high voltage, pressure, reactive metals, or autonomous machinery, obtain qualified engineering review and comply with applicable law and laboratory safety rules.
