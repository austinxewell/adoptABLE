# Crysta Diane Photography – Backend API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-black?style=flat-square&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-blue?style=flat-square&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=flat-square&logo=jsonwebtokens)
![REST API](https://img.shields.io/badge/API-RESTful-lightgrey?style=flat-square&logo=fastapi&logoColor=white)

> A secure, fully custom Node.js + Express backend powering the Crysta Diane Photography platform. Handles all RESTful content management, user authentication, and session handling for admin functionality.

---

## 📦 About the Project

This is the backend API for **Crysta Diane Photography 2.0**, a real-world, full-stack photography platform. Built from scratch with `Express.js`, the API provides all content and functionality for managing services, gallery images, customer reviews, and contact submissions. It supports token-based authentication using `JWT` with session management via HTTP-only cookies.

Data is stored in a MySQL database using `mysql2`, and all routes are protected with role-based middleware. The admin login system uses hashed passwords (`bcryptjs`), and sensitive config is secured through environment variables using `dotenv`.

---

## ⚙️ Features

- 🔐 **JWT-based authentication** for admin login
- 🍪 **Secure cookies** for session handling (HTTP-only)
- ✅ **CRUD operations** for gallery, services, and reviews
- 📬 **Contact form** support with data persistence
- 🧱 **MySQL** schema for real-world content structure
- 🔄 **CORS-enabled** API communication with Nuxt 3 frontend
- 📂 Organized controller/service/middleware architecture
- 🛡️ **Protected routes** for admin functionality

---

## 🛠 Tech Stack

| Technology       | Purpose                                |
|------------------|----------------------------------------|
| **Node.js**      | JavaScript runtime                     |
| **Express.js**   | Web server and routing                 |
| **MySQL2**       | SQL database driver                    |
| **JWT**          | Token-based authentication             |
| **bcryptjs**     | Password hashing                       |
| **cookie-parser**| Cookie session handling                |
| **dotenv**       | Environment configuration              |
| **CORS**         | Cross-origin requests                  |
| **Nodemon**      | Dev hot-reloading                      |

---

## 🚀 Getting Started

### Clone & Install

```bash
git clone https://github.com/austinxewell/CDPhoto-Backend.git
cd CDPhoto-Backend
npm install
```

### Configure Environment

Copy `.env.example` and edit the environment variables:

```bash
cp .env.example .env
```

**.env contents:**

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=crysta_diane
JWT_SECRET=your_jwt_secret
CLIENT_ORIGIN=http://localhost:3000
```

### Run Dev Server

```bash
npm run dev
```

---

## 📂 Project Structure

```
/src
  /controllers     -> Business logic for each route
  /middleware      -> Auth, session, error handling
  /models          -> Database queries
  /routes          -> API endpoint definitions
  /utils           -> Token creation, validators
.env               -> Env configuration
app.js             -> App config and middleware
server.js          -> Entry point
```

---

## 🔐 Auth Flow

1. Admin logs in via `/api/login` with email/password
2. Server validates user, hashes password, issues JWT
3. JWT is stored in an HTTP-only cookie
4. Protected routes require valid session cookie
5. Logout clears the token from the browser

---

## 🧪 API Endpoints

| Method | Route                 | Auth | Description                     |
|--------|-----------------------|------|---------------------------------|
| POST   | `/api/login`          | ❌    | Admin login                     |
| POST   | `/api/logout`         | ✅    | Logout session                  |
| GET    | `/api/services`       | ❌    | Public - fetch all services     |
| POST   | `/api/services`       | ✅    | Admin - create service          |
| PUT    | `/api/services/:id`   | ✅    | Admin - update service          |
| DELETE | `/api/services/:id`   | ✅    | Admin - delete service          |
| GET    | `/api/reviews`        | ❌    | Public - read reviews           |
| POST   | `/api/reviews`        | ❌    | Public - submit review          |
| DELETE | `/api/reviews/:id`    | ✅    | Admin - delete review           |
| GET    | `/api/photos`         | ❌    | Public - gallery fetch          |
| POST   | `/api/photos`         | ✅    | Admin - upload photo            |
| PUT    | `/api/photos/:id`     | ✅    | Admin - update photo            |
| DELETE | `/api/photos/:id`     | ✅    | Admin - delete photo            |
| POST   | `/api/contact`        | ❌    | Public - contact form submission|

---

## 📝 License

MIT License. See [LICENSE](https://opensource.org/licenses/MIT) for full details.

---

## 👨‍💻 Author

**Austin Ewell**  
Front End Developer | Backend Architect  
🔗 [GitHub](https://github.com/austinxewell)
