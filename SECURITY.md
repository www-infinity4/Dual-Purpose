# Security Policy

## Honest guarantee

This project cannot guarantee that a deployed website will never be hacked, altered, misconfigured, or socially engineered. It is designed to reduce risk by remaining static, dependency-light, and easy to audit.

## Default threat model

Protected assets:

- Research notes and unpublished designs
- User identity and account metadata
- Experimental data
- Wallet addresses and transaction drafts
- Release files and website integrity

Main threats:

- Supply-chain compromise
- Malicious browser extensions
- Cross-site scripting
- Stolen deployment credentials
- DNS or hosting takeover
- Fake wallet prompts and seed-phrase phishing
- Tampered downloads
- Unauthorized device control

## Required controls for production

1. Host static files from an immutable build artifact.
2. Enforce HTTPS and HSTS.
3. Use a restrictive Content Security Policy.
4. Disable directory listing and server-side execution.
5. Protect DNS and hosting accounts with passkeys or hardware security keys.
6. Sign tagged releases and publish checksums.
7. Keep wallet signing offline or in a hardware wallet.
8. Never collect seed phrases, private keys, or recovery words in the website.
9. Separate robot command networks from the public website.
10. Require authenticated, signed commands for any physical device.

## Suggested headers

```text
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
```

## Wallet rules

- The demo wallet is view-only.
- Never paste a seed phrase into a web page.
- Use transaction allowlists, address verification, and human-readable simulation.
- For significant value, use multisignature control across separate devices and people.
- Verify software hashes and device screens before signing.

## Robot controls

The public site must never directly expose motor, actuator, laser, heater, pressure, chemical-delivery, or radiation-producing controls. Use a separate local controller with:

- Hardware emergency stop
- Independent watchdog
- Signed command protocol
- Rate and range limits
- Safe state on communication loss
- Immutable event log
