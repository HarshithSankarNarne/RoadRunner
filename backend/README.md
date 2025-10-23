# RoadRunner Backend

Backend API server for the RoadRunner application.

## Technologies

- Node.js
- Express.js

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Start the production server:
```bash
npm start
```

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

## Environment Variables

- `PORT` - Server port (default: 3000)

## Development

The backend uses Express.js to provide a RESTful API. Add your routes in the `src` directory.
