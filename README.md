# coderabbit-l1-test

Test repository for authorized security research under CodeRabbit's
Vulnerability Disclosure Program.

**Purpose:** test whether CodeRabbit's review pipeline executes repository-
provided ESLint configuration code (lead L1 in `../REVIEW.md` — same
vulnerability class as the Kudelski Security RCE of January 2025, which
was fixed for RuboCop; this tests the other tools).

**What the canary does:** `eslint.config.js` defines a custom rule that
reports a fixed canary message on every JS file. If the message appears in
a CodeRabbit review, the config code executed. The canary performs no
network access, reads no environment variables, and exfiltrates nothing.

This repo belongs to the researcher. No other repository is involved.
