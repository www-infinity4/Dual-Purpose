# Infinity Scientific Methods & Robotics

An interactive, local-first research portal for boron oxide, electron-cloud models, evidence classification, research robots, and the Boron Vault security concept.

The portal preserves unusual ideas without presenting them as established facts. Every research claim is labeled as one of:

- **Established** — supported by repeatable measurements and accepted models.
- **Engineering inference** — a practical conclusion based on established principles.
- **Testable hypothesis** — a falsifiable prediction with controls and failure criteria.
- **Speculative framework** — an idea that still needs a measurable mechanism.
- **Rejected by current evidence** — contradicted by reliable current evidence.

## What now works

- Responsive single-page interface with no external UI dependencies
- Interactive B₂O₃ network-motif teaching model
- Animated wave-packet and probability-density laboratory
- Filterable and expandable evidence ledger
- Resonant OS research-agent task queue
- Watch-only Boron Vault transaction-review simulation
- Strict local-first content security policy
- Scientific and safety documentation

## Run locally

No build or package installation is required.

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`. The page can also be opened directly; the evidence ledger has an embedded fallback for browsers that block `file://` data requests.

## Structure

```text
.
├── index.html
├── styles.css
├── app.js
├── data/claims.json
├── docs/BORON_VAULT.md
├── docs/RESEARCH_METHOD.md
├── SECURITY.md
└── README.md
```

## Scientific boundary

“Electron-cloud logic” is presented in two explicitly separate senses:

1. **Physics:** a quantum state evolves in time and produces probabilities for measured observables.
2. **Software inspiration:** a research object carries place, time, evidence, confidence, and allowed state transitions.

The second is a classical software architecture. It is not described as quantum computing. Any proposed B₂O₃ computing or coherence device remains a hypothesis until it defines a physical state variable, write/read operations, an energy budget, error rates, controls, and a reproducible advantage over a classical baseline.

## Safety and security

This website provides no procedure for hazardous synthesis, high-energy experiments, radiation generation, or autonomous physical control. Any future physical research must begin with simulation or a non-hazardous mock-up and receive qualified review. The wallet is a non-signing demonstration and never asks for secrets.

Read [SECURITY.md](SECURITY.md), [the research method](docs/RESEARCH_METHOD.md), and [the Boron Vault architecture](docs/BORON_VAULT.md).
