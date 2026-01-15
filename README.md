# SaaS Frontend Dashboard

A modern SaaS frontend application built using **Next.js (App Router)** and **Tailwind CSS**, featuring authentication flow, protected dashboard routes, theme management, and API-driven pages. The project is deployed on **Vercel** with GitHub CI/CD integration.

🔗 **Live Demo:**  
https://saas-frontend-lilac.vercel.app


## 🚀 Features

- 🔐 **Authentication Flow**
  - Login & Signup pages
  - Fake authentication using `localStorage`
  - Protected routes (unauthenticated users redirected to login)

- 📊 **Dashboard**
  - Sidebar & top navigation
  - Dashboard home page
  - Users page with API data
  - Settings page

- 👥 **Users Page**
  - Fetches user data from a public API
  - Displays users in a responsive table
  - Loading state handling

- ⚙️ **Settings Page**
  - Update user profile (name & email)
  - Dark / Light theme toggle
  - Theme preference persists using `localStorage`

- 🌗 **Theme Management**
  - Light theme by default
  - Dark mode enabled via manual toggle
  - Implemented using Tailwind `dark` class strategy and CSS variables

- 🌍 **Deployment**
  - Hosted on Vercel
  - Automatic redeployment on every GitHub push


## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Authentication:** Client-side (localStorage based)
- **API:** JSONPlaceholder (public API)
- **Deployment:** Vercel
- **Version Control:** Git & GitHub


## 📁 Project Structure
src/
├─ app/
│ ├─ login/
│ ├─ signup/
│ ├─ dashboard/
│ │ ├─ users/
│ │ ├─ settings/
│ │ └─ page.js
│ ├─ layout.js
│ └─ globals.css
├─ components/
│ ├─ dashboard/
│ │ ├─ Sidebar.js
│ │ ├─ Topbar.js
│ │ └─ DashboardLayout.js
│ └─ ProtectedRoute.js
└─ utils/
└─ auth.js


## 🧪 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShilpaS2001/saas-frontend.git


Navigate to project folder

cd saas-frontend


Install dependencies

npm install


Run development server

npm run dev


Open in browser:

http://localhost:3000

🧠 Key Implementation Details

Protected routes are handled using a reusable ProtectedRoute component.

Dark mode is implemented using Tailwind’s dark class and CSS variables.

Theme preference and profile data persist across refresh using localStorage.

Dashboard pages are structured using reusable layout components.

Vercel automatically rebuilds and redeploys on every GitHub push.

📌 Notes

This project focuses on frontend logic and architecture.

Authentication is intentionally mocked for demonstration purposes.

Backend integration can be added easily if required.

👩‍💻 Author

Shilpa S
GitHub: https://github.com/ShilpaS2001
