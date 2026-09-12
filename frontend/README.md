# TaskFlow Frontend

A polished React/Vite frontend for a task manager inspired by the supplied landing-page, login-page and dashboard references.

## Run

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Demo login

- Email: `demo@taskflow.app`
- Password: `Demo@123`

The demo uses localStorage for a frontend-only prototype. Tasks persist in the browser.

## Important

Google login is represented by a UI button only. For production, connect it to your FastAPI OAuth endpoint, e.g. `/auth/google`.

The current frontend has:
- Landing page
- Login/signup
- Dashboard
- Add/edit/delete tasks
- Complete/pending status
- Search/filter
- Overdue detection
- Profile
- Responsive mobile layout

For production, replace the localStorage authentication/task logic in `src/App.jsx` with Axios calls to your FastAPI backend and protect routes using your real auth mechanism.
