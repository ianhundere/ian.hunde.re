# Dependency Audit — July 2026

Status of known dependency vulnerabilities for ian.hunde.re, per the non-breaking-only
dependency policy (architecture AD-4: npm only, semver-compatible updates only, never
`npm audit fix --force`).

## Baseline (2026-07-28)

`npm audit` against the committed lockfile (npm 12.0.1, node 26):

| Severity | Count |
| --- | --- |
| Critical | 0 |
| High | 19 |
| Moderate | 18 |
| Low | 8 |
| **Total** | **45** |

All findings are transitive build-chain dependencies pinned by Gatsby 5 (brace-expansion,
postcss, immutable, lodash, serialize-javascript, sharp/libvips, js-yaml, path-to-regexp,
tmp, webpack, and similar).

## Fix attempt and outcome

`npm audit fix` (non-breaking) was applied and evaluated on 2026-07-28. The regenerated
tree floated transitive versions that matched **more** advisories (69 total / 48 high),
because newly resolved versions carry newly published July-2026 advisories. The change
was reverted; the committed lockfile remains the baseline above.

**Net result: zero non-breaking improvement is currently available.** Gatsby 5 pins the
transitive majors involved; meaningful reduction requires crossing major boundaries, which
AD-4 forbids (it would break the Gatsby 5 build chain — Gatsby is in maintenance mode with
no Gatsby 6 planned or announced).

## Accepted risk rationale

- The site is a fully static build (Gatsby → HTML/JS on Vercel). The advisories sit in
  build-time code paths, and the static site provides no attacker-controlled input channel
  to the few matched packages that ship client code (gatsby-link, gatsby-plugin-offline,
  lodash).
- Advisory classes present (ReDoS/DoS, path traversal, prototype pollution in build
  tooling) require attacker-controlled input to the build, which only processes
  first-party content from this repository.
- Accepted by the site owner on 2026-07-28 (sprint action item AI-3).

## Supply-chain hardening applied

`package.json` now carries an `allowScripts` allowlist naming the only packages permitted
to run install scripts (sharp, lmdb, msgpackr-extract, gatsby/gatsby-cli, core-js,
es5-ext, @parcel/watcher). Under script-blocking npm configurations this is enforced;
older npm versions ignore the field harmlessly.

Note: approvals are version-pinned and do **not** carry over when a package's version
bumps — after any dependency update (including dependabot merges), re-run
`npm approve-scripts` for the bumped packages or the Gatsby build will silently skip
their native build scripts and fail under npm ≥ 12.

## Revisit conditions

- The site gains any runtime/server component (serverless function, SSR) — re-evaluate
  every advisory for runtime exposure.
- A critical-severity advisory appears, or an advisory lands in first-party (non-build)
  code paths.
- A migration off Gatsby 5 (replatform) unlocks the pinned transitive majors.
- Next scheduled look: with any future dependency work, or ~6 months (2027-01).
