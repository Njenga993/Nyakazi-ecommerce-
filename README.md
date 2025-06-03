# 🌿 Nyakazi Organics E-Commerce

![Vite](https://img.shields.io/badge/Vite-%233B3B3B.svg?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

---

## 🛍️ Project Overview

**Nyakazi Organics** is a vibrant, eco-friendly e-commerce web app that helps users explore and purchase **organic fresh vegetables, dried greens, herbs, and spices** grown locally in Kenya. It offers a smooth shopping experience with local cart management, animated product previews, and a unique WhatsApp-based checkout process.

---

## ✨ Key Features

- ✅ Modern, responsive UI with an **organic aesthetic**
- 🛒 Add to cart, view cart, remove items — all powered via `localStorage`
- 📱 Checkout via **WhatsApp message** with order summary + delivery info
- 🔍 Filter products by category: Fresh Vegetables, Dried Vegetables, Spices & Herbs
- 💡 Detailed pop-up modal for product descriptions and benefits
- ⚡ Lightning-fast performance thanks to **Vite**
- 🌱 Built with **React + TypeScript** for scalability and maintainability
- 🎨 Smooth animations using `Framer Motion` and clean layout with SCSS modules

---

## 🧪 Demo

> **Live demo - https://njenga993.github.io/Nyakazi-ecommerce-/**

You can include a GIF or screenshot here showing:

- Homepage / Landing Hero
- Animated Product List
- Add-to-cart interaction
- Checkout popup with form
- WhatsApp redirect message

---

## 📂 Folder Structure

```bash
src/
│
├── assets/               # Images and icons
├── components/           # Reusable UI components (Navbar, Footer, ProductCard, etc.)
├── context/              # Cart context for global cart state
├── pages/
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   └── ...
├── styles/               # Global & module-based styles
├── types/                # TypeScript interfaces and types
├── App.tsx               # Root app structure
├── main.tsx              # Entry point
└── data/                 # Dummy product data (optional)

⚙️ Installation & Setup
# 1. Clone the repository
git clone https://github.com/your-username/nyakazi-ecommerce.git
cd nyakazi-ecommerce

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# App will run at http://localhost:5173/
📤 WhatsApp Checkout Logic
Upon checkout, the app:

Collects name, delivery location, and WhatsApp number

Builds a product list from the cart

Opens WhatsApp with a pre-filled message like:
Hello Nyakazi! I'd like to order:
- 2x Fresh Terere (Ksh 100)
- 1x Ginger Ground (Ksh 70)

Delivery to: Gikambura
Name: Mary Njeri
Contact: 07XXXXXXXX

🔧 Tech Stack
React 18

Vite

TypeScript

Framer Motion

Lucide Icons

SCSS Modules

WhatsApp Web API

💚 Contribution
Want to contribute? Feel free to fork and submit a PR! We're looking for help with:

🌐 Multi-language support

📦 Backend integration

💳 M-Pesa checkout (future)

🧪 Unit and integration tests

📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

👩🏽‍🌾 Built by Njenga Kamau
Fresh from the soil to your soul. Organic. Local. Pure.
