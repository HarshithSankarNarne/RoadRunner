# RoadRunner

A full-stack application with separate frontend and backend repositories.

## Project Structure

This repository contains two main directories:

### `/backend` - Backend API
- **Technology**: Node.js with Express
- **Purpose**: RESTful API server
- **Port**: 3000 (default)
- [Backend README](./backend/README.md)

### `/frontend` - Frontend Application
- **Technology**: React with Vite
- **Purpose**: User interface
- **Port**: 5173 (default, Vite dev server)
- [Frontend README](./frontend/README.md)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/HarshithSankarNarne/RoadRunner.git
cd RoadRunner
```

2. **Setup Backend**
```bash
cd backend
npm install
npm run dev
```

3. **Setup Frontend** (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```

## Development

- Backend runs on `http://localhost:3000`
- Frontend runs on `http://localhost:5173`

For detailed information about each part, see their respective README files.

## License

ISC