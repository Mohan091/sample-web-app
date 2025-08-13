# Sample Web App

This project is a demo web application with the following stack:
- **Frontend:** React
- **Backend:** Java Spring Boot
- **Database:** MySQL
- **Caching:** Redis

## Getting Started

### Backend (Java Spring Boot)
1. Go to `backend/` and run:
   ```
   mvn spring-boot:run
   ```
2. Ensure MySQL and Redis are running locally.

### Frontend (React)
1. Go to `frontend/` and run:
   ```
   npm install
   npm start
   ```

### Database Setup
- Run the SQL script in `server/init.sql` to initialize the database.

### Redis
- Use the config in `server/redis.conf` for local setup.

## API
- `GET /api/users` returns a list of users.
- `POST /api/users?name=John` adds a new user.
