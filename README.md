# 🧴 ProductHub - Next.js 16 Premium Fragrance Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-teal.svg?style=for-the-badge)](https://producthub-blue.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.1-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

**ProductHub** is a high-performance, full-stack e-commerce application for premium perfumes. Built with the latest **Next.js 16** features, it demonstrates advanced authentication patterns, edge-level route protection using the new **Proxy convention**, and a secure CRUD API integrated with MongoDB.

---

## 🚀 Live Demo

Check out the live deployment on Vercel:  
**[https://producthub-blue.vercel.app](https://producthub-blue.vercel.app)**

---

## ✨ Features

- 👤 **Advanced Authentication**: Secure login and registration using **NextAuth.js** with JWT strategy.
- 🛡️ **Network Boundary Protection**: Uses the **Next.js 16 Proxy** (`src/proxy.js`) for edge-runtime route guarding.
- 🧴 **Dynamic Product Catalog**: Real-time search, filtering, and categorization of premium scents.
- 🔒 **Secured Private Pages**: Protected dashboards for profile management and product administration.
- 📡 **RESTful API**: Secure backend endpoints for products and reviews with server-side session validation.
- 🎨 **Premium Aesthetics**: Glassmorphic UI design powered by **Tailwind CSS 4** and **DaisyUI**.
- 📱 **Mobile Optimized**: Fully responsive layout for seamless browsing on any device.
- 🔔 **Real-time Feedback**: Interactive notifications via `react-hot-toast` and `sweetalert2`.

---

## 🛠️ Technologies Used

- **Framework**: [Next.js 16.1.6](https://nextjs.org/) (App Router & Proxy)
- **Authentication**: [NextAuth.js 4.24.13](https://next-auth.js.org/)
- **Database**: [MongoDB 7.1.0](https://www.mongodb.com/)
- **Styling**: [Tailwind CSS 4.2.1](https://tailwindcss.com/) & [DaisyUI 5.5.19](https://daisyui.com/)
- **State/Hooks**: React 19 (Server & Client Components)
- **Backend**: Edge-ready API Routes

---

## 🗺️ Route Summary

### Public Pages

- `/`: Landing page featuring hero, features, and testimonials.
- `/login`: Professional sign-in portal.
- `/register`: User registration with validation.
- `/blogs`: Exploration of fragrance trends.

### Private Pages (Authenticated Only)

- `/products`: Searchable fragrance catalog.
- `/profile`: User account dashboard and details.
- `/manageProducts`: Administrative interface for listed items.
- `/addProduct`: Form for adding new premium fragrances.

### API Routes

- `GET /api/products`: Fetch all products (Secured).
- `POST /api/products`: Create a new product entry (Secured).
- `GET/POST /api/reviews`: Manage user feedback.
- `GET/POST /api/auth/*`: NextAuth authentication endpoints.

---

## ⚙️ Setup & Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/MdHridoySikder/producthub.git
cd producthub
```

### 2. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Navigate to `http://localhost:3000` to see the app.

---

## ☁️ Deployment (Vercel)

1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Configure the following environment variables in the Vercel Dashboard:
   - `NEXTAUTH_URL`: `https://producthub-blue.vercel.app`
   - `NEXTAUTH_SECRET`: (Generate a secure random string)
   - `NEXT_MONGO_URI`: (Your production MongoDB string)
3. Deploy!

> [!TIP]
> This project uses the **Next.js 16 Proxy** convention. Ensure `src/proxy.js` is present in your deployment for edge-level security to function correctly.

---

## 📸 Screenshots

|                                        Desktop View                                        |                                       Mobile View                                        |
| :----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
| ![Desktop Placeholder](https://via.placeholder.com/800x450?text=ProductHub+Desktop+Mockup) | ![Mobile Placeholder](https://via.placeholder.com/250x500?text=ProductHub+Mobile+Mockup) |

---

## 👤 Author

**Md Hridoy Sikder**

- GitHub: [@MdHridoySikder](https://github.com/MdHridoySikder)
- Email: [your-email@example.com](mailto:your-email@example.com)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
