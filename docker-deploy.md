# Docker Deployment Guide

## Quick Start

### Production
```bash
# Build and run
docker-compose up -d

# Access at http://localhost:3000
```

### Development
```bash
# Run development server
docker-compose --profile dev up

# Access at http://localhost:5173
```

## Commands

```bash
# Build images
npm run docker:build

# Start production
npm run docker:up

# Start development
npm run docker:dev

# Stop containers
npm run docker:down
```

## Environment Variables

Edit `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Production Deployment

```bash
# Build optimized image
docker build -t portfolio:latest .

# Run with custom port
docker run -d -p 8080:80 --env-file .env portfolio:latest
```