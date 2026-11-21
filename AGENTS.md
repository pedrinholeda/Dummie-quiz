# AGENTS.md

Notes for AI agents and new contributors.

- The app lives in `Dummie-quiz/` (Vercel builds from that folder); run every npm command there.
- Next.js 16 with the pages router, React 19, styled-components 6 through the SWC compiler
  (`next.config.mjs`). JSX stays in `.js` files.
- Quiz content and theme come from `Dummie-quiz/db.json`, also served at `/api/db` for other
  quizzes to load.
- Before a PR: `npm run lint`, `npm test`, `npm run build`. CI runs the same.
- Tests use Vitest + Testing Library in jsdom; `lottie-react` is mocked because lottie-web
  needs a real canvas.
- Commits follow Conventional Commits, in English. A fix comes with a test that fails
  without it.
