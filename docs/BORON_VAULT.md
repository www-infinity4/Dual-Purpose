# Boron Vault Architecture

“Boron Vault” is a project identity inspired by connected boron–oxygen structures. Its security mechanism is conventional, reviewable cryptography—not a claim that boron oxide protects digital information.

## Separation model

1. **Viewer:** reads public addresses and prepares unsigned transaction intents.
2. **Policy engine:** checks destination allowlists, limits, timing, and required approvals.
3. **Simulator:** renders the exact human-readable effect before approval.
4. **Offline or hardware signer:** holds keys and signs only after independent verification.
5. **Broadcaster:** submits a signed transaction but never receives private keys.
6. **Recovery system:** uses separately stored, regularly tested recovery material.

## Required properties

- No seed phrase or private key enters this website.
- Meaningful value requires more than one independent approval.
- Addresses and amounts are verified on a trusted signer display.
- Viewing, policy, signing, and broadcasting remain separate.
- Logs contain transaction intent and approval metadata, never secret key material.
- Recovery is tested before value is deposited.

## Non-goals

- Absolute or “unhackable” security claims
- Browser-based secret generation or storage
- Automatic signing or spending
- Material-based cryptographic claims without reproducible evidence
- Direct control of laboratory or robotic equipment

The interface in this repository is watch-only and uses invented demo units. It cannot connect to a wallet, sign, purchase, or transmit funds.
