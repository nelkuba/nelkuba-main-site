# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## 🛠️ Developer Setup

### 1. **Clone the repository**

```bash
git clone https://github.com/nelkuba/nelkuba-main-site.git
cd nelkuba-main-site
```

### 2. **Install dependencies**
Make sure you have Node.js (v16 or above) and npm installed.

```npm install
npm run dev
The app should now be running at http://localhost:5173.
```

📦 Tech Stack
```
React

Vite

Tailwind CSS

Framer Motion

```

📁 Project Structure
```
src/
│
├── assets/               # Static images & media
├── components/           # All reusable React components
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── About.jsx
│  
│
├── App.jsx               # Main App component
├── main.jsx              # ReactDOM entry point
└── index.css             # Tailwind + global styles
```
