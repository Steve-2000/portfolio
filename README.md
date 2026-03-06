# Portfolio Frontend - Firebase Hosting Deployment

React + Vite portfolio frontend deployed on Firebase Hosting.

## Environment Variables Required

Create a `.env` file based on `.env.example`:

```
VITE_API_BASE_URL=https://your-backend-api.onrender.com
```

## Deployment Steps

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Build the project: `npm run build`
4. Deploy: `firebase deploy`

### Local Development
```bash
npm install
npm run dev
```

## Backend Integration

Make sure to update `.env` with your Render backend URL after deploying the backend.

## Tech Stack

- React 19
- Redux Toolkit
- Material-UI
- Tailwind CSS
- Vite
- Axios for API calls

