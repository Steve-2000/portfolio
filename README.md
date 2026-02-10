# Portfolio Backend - Render Deployment

## Environment Variables Required in Render

Set these in your Render dashboard under Environment Variables:

1. **mongoatlas_url**: Your MongoDB Atlas connection string
2. **PORT**: Automatically set by Render (default: 5000)
3. **FRONTEND_URL** (optional): Your frontend URL for CORS

## Deployment Steps

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect your GitHub repository
4. Set environment variables in Render dashboard
5. Deploy!

### Render Settings:
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment**: Node

## Local Development

```bash
npm install
npm run dev
```

Make sure to create a `config.env` file with your environment variables for local development.
