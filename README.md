# VitaGenix - Personalized Treatment Plan System

VitaGenix is a **MERN stack-based** personalized treatment plan system that leverages AI to generate customized healthcare recommendations based on genetic data, medical history, and lifestyle.

## 🛠 Tech Stack
- **Frontend:** React.js (Next.js)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **AI Integration:** Google Gemini API
- **Authentication:** JWT, bcrypt

---
## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/aditya-chopde/HackOn_BinaryBrains
cd HackOn_BinaryBrains
```

### **2️⃣ Backend Setup**
#### **Install Dependencies**
```bash
cd server
npm install
```

#### **Configure Environment Variables**
Create a `.env` file in the `server/` directory and add:
```env
GEMINI_API_KEY="AIzaSyCywhXdTYFqdlZNth5JbQAPwUDeoYx5QEU"
JWT_SECRET="fndsfoeuidnfjkdckdvcsedf"
```

#### **Start the Backend Server**
```bash
npm run start
```
Server will run at: **http://localhost:3000**

---

### **3️⃣ Frontend Setup**
#### **Install Dependencies**
```bash
cd client
npm install
```

#### **Start the Frontend**
```bash
npm run dev
```
Frontend will be available at: **http://localhost:5173**

