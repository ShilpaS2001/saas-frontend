Setup
Clone: git clone https://github.com/ShilpaS2001/saas-frontend.git

Install: npm install

Run: npm run dev

Features Checklist
✅ Authentication: Functional Login/Signup with Protected Routes.

✅ Dashboard: Summary view with API data fetching from JSONPlaceholder.

✅ Theme Toggle: Pixel-perfect Dark Mode with localStorage persistence.

✅ CRUD/Profile: Real-time profile updates using Custom Browser Events.

Screenshots
<img width="1830" height="1014" alt="image" src="https://github.com/user-attachments/assets/c55632d2-d9dd-4e26-948e-417be618ace4" />
<img width="874" height="715" alt="image" src="https://github.com/user-attachments/assets/fee1b3fe-cc11-42c7-9dc7-4611fd9e12c2" />
<img width="672" height="666" alt="image" src="https://github.com/user-attachments/assets/f480b816-1672-42fa-9456-7f02ee335981" />
<img width="1918" height="961" alt="image" src="https://github.com/user-attachments/assets/db7726b5-cb7f-439b-90ef-3f79152f2d2d" />
<img width="1901" height="924" alt="image" src="https://github.com/user-attachments/assets/1bf8979a-5336-41e7-b5f8-0ac22f13458e" />


Decisions & Tradeoffs
Decision: Used Custom Browser Events (profileUpdate) for UI synchronization.

Tradeoff: Instead of a complex State Management library like Redux, I chose an event-driven approach to keep the bundle size small and performance high for a frontend-heavy task.

Decision: Implemented Tailwind CSS v3 with a class strategy for dark mode.

Tradeoff: I prioritized localStorage for theme persistence over server-side cookies to ensure zero-latency theme switching on the client side.
