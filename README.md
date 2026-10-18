# Spatial — Budget-Friendly DIY VR Kit & Controller

Welcome to **Spatial** — an ultra-accessible DIY Virtual Reality kit and interactive educational platform designed for classrooms and makers.

---

## ✨ Features

- **🎮 Clean City 3D Interactive Quest**: Embedded Unity WebGL educational simulation playable directly in browser.
- **💰 $16 Unit Cost Breakdown**: Complete 11-item Bill of Materials (BOM) with cost comparisons against high-end headsets.
- **🌟 Our Impact**: 
  - **Massive Scalability**: Replaces 1 expensive headset with 25+ kits for an entire classroom.
  - **Deeper Spatial Learning**: Transforms static textbook concepts into interactive 3D models.
  - **Closing the Digital Divide**: Brings high-tech STEM education to underfunded and rural schools.
- **🛠️ DIY Hands-On Maker Lab**: 1:1 scale printable blueprints, lens alignment guides, and open-source ESP32 firmware code.
- **📱 Mobile VR Headset Mode**: Dual-lens split-screen stereoscopic portal for cardboard headsets.
- **🌐 Bilingual Support**: Full instant switching between English and Khmer (ខ្មែរ).

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root directory (this file is excluded from git):
```bash
MONGODB_URI=mongodb://127.0.0.1:27017/spatial_vr
JWT_SECRET=your_jwt_secret_key_here
NEXT_PUBLIC_APP_NAME="Spatial VR"
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Vanilla CSS & CSS Variables
- **Icons**: Lucide React
- **3D / Simulation**: Unity WebGL (Clean City Quest)
- **Database / API**: Next.js API Routes & MongoDB

---

## 🔒 Security Note
All local environment configuration files (`.env`, `.env.local`, `.env.*`) are strictly ignored via `.gitignore` and are never committed or pushed to repository.
