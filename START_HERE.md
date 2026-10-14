# Brisa Roofing: Problem-Solving Test

You just joined our team. Our client Brisa Roofing is having problems with their website and leads. Your job: find out what's going on, fix what matters most, and explain it.

- **Time:** about 2 hours of work. Send it within 24 hours of getting our email.
- **AI:** Use any AI tool you want, as much as you want. We use AI every day and we want to see how you use it. If you use an AI agent (Claude Code, Codex, Cursor...), `AGENTS.md` and `CLAUDE.md` already give it the project context.
- **Nobody to ask:** This test runs on its own. If something is unclear, make your best assumption, write it in `QUESTIONS.md`, and keep going.

## 1. Set up

You need Node 20+, Python 3.10+ and git.

Work in your own copy of this repo (made with **Use this template**, as explained in our email). If you got a zip instead, save the starting point before changing anything:

```bash
git init && git add -A && git commit -m "Initial state"
```

Run the project (each in its own terminal, from this folder):

```bash
python3 tools/mock_make_webhook.py
```

```bash
cd site && npm install && npm run dev
```

```bash
python3 reports/daily_report.py
```

The website runs at http://localhost:3000. The first command is a fake Make webhook that prints every lead the website sends.

## 2. The task

1. Read `client-email.md`.
2. Investigate. Everything the client gave us is in this folder.
3. Fix the **3 most important** problems, and check that each fix works.
4. List everything else you found in `FINDINGS.md`, with what you would do about it.
5. Record a short video.

## 3. Rules

- Don't edit anything in `data/`, `dns/` or `make/`. That's evidence from the client's accounts.
- We can't access the client's Hostinger, Make or Vercel accounts. For problems there, write exactly what you would change.
- Commit and push as you go: small commits, clear messages.
- Write in `JOURNAL.md` while you work, not at the end.
- Keep `AGENTS.md` up to date. When you're done, we'll open your repo in a fresh AI session and ask it where the project stands. It should be able to answer from your files alone.

## 4. What to send

Reply to our email with the link to your repo. If it's private, share it with the GitHub user named in our email. (Got a zip? Send back a zip of this folder.)

It must include:

| What | Where |
|---|---|
| Your 3 fixes | Committed in git |
| What you found and fixed | `FINDINGS.md` (use the template) |
| What you'd ask the client, and what you assumed | `QUESTIONS.md` |
| Your notes while working, with times and dead ends | `JOURNAL.md` |
| Context so an AI or teammate could continue your work | `AGENTS.md` |
| Video link | Top of `FINDINGS.md` |

**The video:** 5 minutes max, one take, your own voice, screen recording (Loom or similar). No slides, no script.

1. **For the client (1 min):** explain it as if you were talking to Carmen. No technical words.
2. **What you found (2 min):** walk through your findings and show one fix working.
3. **An AI moment (1 min):** one time the AI was wrong or unhelpful, and what you did about it.
4. **The code (1 min):** open one of your fixes and explain it in your own words.

We stop watching at 5:00.

## 5. What we look at

- Do you investigate before you fix? Is your evidence real?
- Did you pick the right 3 problems, and explain why?
- Do you check that your fixes actually work?
- Could someone non-technical understand you?
- Do you use AI well: giving it context, checking its work?
