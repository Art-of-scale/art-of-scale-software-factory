# Factory Passport

Your factory's journey on the Art of Scale Software Factory Ladder (`docs/LADDER.md`). Your live status page shows it, and it updates on every deploy.

- **Machine checks** tick themselves from the repo and the live settings.
- **Coach ticks** are below. The Coach ticks a step only after it has seen the proof (for example, `sf-level`, `sf-ship` or `sf-wrap`). Never tick a step to make the board look better.

Tick format: `- [x] id · note with the evidence and date`.

## Level 3 · Spec-driven factory (free kit; Lab 9 lands here)
- [ ] l3-live · App live on its own web address (tick when the Owner confirms the live link)
- [ ] l3-db · Database connected, public key only (tick when the status page shows Database ✓)
- [ ] l3-breakit · Break-it test passed: user A cannot see or change user B's rows (tick when the Owner has tried it with two logins)
- [ ] l3-rollback · The Owner knows how to undo a bad change (Vercel → Deployments → Instant Rollback; tick when they have found the button)

## Level 4 · Auto-QA factory (SHIFTAI Coding Sprint: Upgrade Pack)
- [ ] l4-review · An independent reviewer checks Medium and High changes
- [ ] l4-attack · A security attacker checks Medium and High changes
- [ ] l4-preview · Every change gets a preview link and a pull request the Owner merges

## Level 5 · Evidence and governed factory (SHIFTAI Coding Sprint: Certified Builder)
- [ ] l5-evidence · Every change shows before/after evidence
- [ ] l5-main · Main is protected: pull request and the Owner's merge
- [ ] l5-backup · Backups on, and one restore tested
- [ ] l5-alerts · Error alerts reach a named person
- [ ] l5-popia · POPIA register, purpose and user notice in place
- [ ] l5-engineer · Engineer check before go-live
- [ ] l5-gate · Production-Ready Gate passed
