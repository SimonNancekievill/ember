# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start development server (Next.js on port 3000)
npm run test     # run Jest in watch mode
npm run lint     # run ESLint
npm run build    # production build
```

To run a single test file: `npx jest components/SomeComponent`

## Environment

Copy `.env.local` and set:
- `MONGODB_URI` — MongoDB connection string (required; app throws at startup if missing)
- `GITHUB_ID` / `GITHUB_SECRET` — GitHub OAuth app credentials for next-auth
- `NEXTAUTH_SECRET` / `NEXTAUTH_URL` — next-auth config

Test credentials (credentials provider): username `fisch`, password `fisch`.

## Architecture

**Ember** is a Next.js (Pages Router) activity-tracking app. Users log self-care activities (movement, home, social, etc.) and view them as a list or calendar.

### Auth
`next-auth` handles authentication via two providers (configured in `pages/api/auth/[...nextauth].js`):
- GitHub OAuth
- A hardcoded test credentials provider (`fisch` / `fisch`)

All API routes and the main page guard with `getServerSession` / `useSession`. The user's identity is derived from `getToken().sub` (the OAuth `sub` claim), which is stored as `owner` on every Entry document.

### Data layer
- `db/connect.js` — singleton Mongoose connection cached on `global.mongoose` to survive Next.js hot reloads
- `db/models/Entry.js` — single Mongoose model with `name`, `category`, `owner` (userId string), and Mongoose timestamps

### API routes
| Route | Methods | Purpose |
|---|---|---|
| `/api/entries` | GET, POST | list / create entries for the authed user |
| `/api/entries/[id]` | DELETE, PUT | delete / update a single entry (ownership-checked) |
| `/api/counter` | GET | count of all entries for the authed user |
| `/api/auth/[...nextauth]` | — | next-auth handler |

### Data fetching
SWR is configured globally in `pages/_app.js` with a shared `fetcher`. Components call `useSWR("/api/entries")` and `useSWR("/api/counter")` and call `mutate()` after mutations to keep the UI in sync.

### Styling
All styles use **styled-components**. Global CSS variables (colours, category accent colours) are defined in `styles.js` and injected via `createGlobalStyle`. The design system uses:
- `--primary-orange` (#E27A48) as the main accent
- Four category colours: `--movement-yellow`, `--selfcare-mint`, `--home-indigo`, `--social-pink`
- All text is forced lowercase via a global CSS rule
- Custom variable font: Overused Grotesk (loaded from `/public/fonts/`)

The `Button` component uses a `$variant` transient prop (prefixed with `$` to avoid forwarding to the DOM) to switch between its many appearances.

### Path aliases
`@/` maps to the project root (configured in `jsconfig.json` and `jest.config.js`).

### AI affirmation
`hooks/useAffirmation/index.js` picks a random affirmation from `lib/affirmations.json` once per day and caches it in `localStorage` keyed by today's date.
