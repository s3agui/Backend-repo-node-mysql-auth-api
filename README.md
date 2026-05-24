# 🏎️ Final Project: Full-Stack Authentication System Deployment
### Node.js + MySQL Auth API

![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue)
![Swagger](https://img.shields.io/badge/Docs-Swagger-brightgreen)
![Render](https://img.shields.io/badge/Deployed-Render-purple)

---

## 🌐 Live URLs

| Service | URL |
|---|---|
| **API (Live)** | https://backend-repo-node-mysql-auth-api.onrender.com |
| **API Documentation** | https://backend-repo-node-mysql-auth-api.onrender.com/api-docs |
| **Frontend** | https://angular-auth-cuerda.netlify.app |

---

## 📋 Features

- ✅ JWT authentication with refresh tokens
- ✅ Role based authorization (User & Admin)
- ✅ Email verification via Mailtrap
- ✅ Forgot password and reset password
- ✅ Sequelize ORM with MySQL
- ✅ Swagger API documentation
- ✅ Environment variables for security

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js v18+
- MySQL database

### Installation
```bash
git clone https://github.com/s3agui/Backend-repo-node-mysql-auth-api.git
cd Backend-repo-node-mysql-auth-api
npm install
```

### Environment Setup
```bash
cp .env.example .env
# Fill in your credentials in .env
```

### Run Development
```bash
git checkout production
npm run start:dev
```

Server runs on: http://localhost:4000
Swagger docs: http://localhost:4000/api-docs

---

## 🌿 Branch Structure

| Branch | Description |
|---|---|
| `main` | Original backend code |
| `production` | Secured with .env variables |

---

## ⚙️ Environment Variables

Create a `.env` file based on `.env.example`:

```env
NODE_ENV=development
PORT=4000

# Database
DB_HOST=your-database-host
DB_PORT=3306
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name

# JWT
JWT_SECRET=your-super-secret-jwt-key

# Email (Mailtrap)
EMAIL_FROM=noreply@your-domain.com
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your-mailtrap-user
SMTP_PASS=your-mailtrap-password

# CORS
CORS_ORIGIN=https://your-frontend-url.netlify.app
```

---

## 📡 API Endpoints

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | /accounts/authenticate | Login | ❌ |
| POST | /accounts/register | Register | ❌ |
| POST | /accounts/verify-email | Verify email | ❌ |
| POST | /accounts/forgot-password | Forgot password | ❌ |
| POST | /accounts/reset-password | Reset password | ❌ |
| POST | /accounts/refresh-token | Refresh JWT | ❌ |
| POST | /accounts/revoke-token | Logout | ✅ |
| GET | /accounts | Get all accounts | ✅ Admin |
| GET | /accounts/:id | Get account | ✅ |
| POST | /accounts | Create account | ✅ Admin |
| PUT | /accounts/:id | Update account | ✅ |
| DELETE | /accounts/:id | Delete account | ✅ |

---

## 🔐 Security Best Practices

- ✅ Passwords hashed with bcrypt
- ✅ JWT secrets stored in `.env`
- ✅ Database credentials in `.env`
- ✅ `.env` excluded from GitHub via `.gitignore`
- ✅ CORS restricted to frontend URL
- ✅ Refresh tokens stored in HttpOnly cookies
- ✅ Token revocation on logout

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js + Express | Backend framework |
| TypeScript | Language |
| MySQL + Sequelize | Database + ORM |
| JWT + bcrypt | Authentication |
| Nodemailer | Email sending |
| Mailtrap | Email testing |
| Swagger UI | API documentation |
| dotenv | Environment variables |

---

## 📁 Project Structure
├── _helpers/
│   ├── db.ts              # Database connection
│   ├── role.ts            # Role enum
│   ├── send-email.ts      # Email helper
│   └── swagger.ts         # Swagger setup
├── _middleware/
│   ├── authorize.ts       # JWT auth middleware
│   ├── error-handler.ts   # Global error handler
│   └── validate-request.ts # Request validation
├── accounts/
│   ├── account.controller.ts  # API routes
│   ├── account.service.ts     # Business logic
│   ├── account.model.ts       # Sequelize model
│   └── refresh-token.model.ts # Token model
├── .env.example           # Environment template
├── server.ts              # Entry point
└── swagger.yaml           # API documentation
---

## 👨‍🎓 Course Information

- **Subject:** Full-Stack Web Development
- **Project:** Final Project — Full-Stack Authentication System Deployment
- **Student:** Carlos Jose Cuerda
