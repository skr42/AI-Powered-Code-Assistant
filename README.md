# DeepSeek - AI Powered Code Assistant 💬🧠

DeepSeek is an AI-powered code assistant web application built with the MERN stack. It functions like ChatGPT and allows users to ask any programming or general questions after logging in. It responds using the OpenAI API and aims to provide developers with helpful insights and answers directly in an intuitive chat interface.

![DeepSeek Screenshot](./Screenshot.png)
## 🌐 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: OpenAI API
- **Authentication**: Custom login/logout with session-based control (assumed from screenshot)

---

## 🚀 Features

- 🔐 User Authentication (Login/Logout)
- 💬 Chat interface with AI responses
- 🧠 Integrates OpenAI API for intelligent Q&A
- 🌓 Clean dark-mode UI
- 💾 Message history panel (UI present, functionality can be extended)
- 📂 Modular code structure (Frontend & Backend)

---

## 📦 Installation

### Prerequisites

- Node.js and npm
- MongoDB
- OpenAI API Key

### Clone the repository

```bash
git clone https://github.com/<your-username>/DeepSeek.git
cd DeepSeek

```
### Backend Setup
```bash
cd backend
npm install
# Create a `.env` file and add your OpenAI API key and MongoDB URI
npm start
```
### Frontend Setup
```bash
cd frontend

npm install
npm run dev
```
Your app should now be running on http://localhost:5173

