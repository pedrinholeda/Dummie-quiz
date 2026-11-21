# The Dummie Quiz

A ten-question quiz of useless general knowledge (or is it?), with a reaction GIF after every
answer and a score at the end. Questions are in Portuguese.

**Play it:** https://dummie-quiz.vercel.app/

Built during Alura's *Imersão React – Next.js* week, then kept up to date.

## How it plays

1. Type your name on the home page to unlock the quiz.
2. Each question has four alternatives. Pick one and confirm: a GIF tells you whether you got
   it right.
3. The last screen shows your score, with buttons to play again or browse other quizzes
   made during the course.

The home page also lists quizzes by other participants; opening one loads its questions from
that project's `/api/db` endpoint.

## Run it locally

Requires Node.js 22+.

```bash
cd Dummie-quiz
npm ci
npm run dev
```

Open http://localhost:3000.

| command | what it does |
|---|---|
| `npm run dev` | development server |
| `npm run build` / `npm start` | production build and server |
| `npm run lint` | ESLint with the Next.js config |
| `npm test` | Vitest + Testing Library |

## Change the questions

Everything the quiz shows lives in [`Dummie-quiz/db.json`](Dummie-quiz/db.json): title,
background, theme colors and the questions. Each question has an `image`, a `title`, a
`description`, the `alternatives` and the `answer` (the index of the right alternative,
starting at 0).

## Stack

Next.js 16 (pages router), React 19, styled-components 6, Framer Motion and Lottie. Deployed
on Vercel from the `Dummie-quiz/` folder.
