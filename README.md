# PostCraft AI — LinkedIn Post Generator (Full-Stack AI Edition)

A modern web application built with **HTML5, CSS3, JavaScript, Node.js, and Express** that generates professional, high-performing LinkedIn posts powered by **Google Gemini AI**.

---

## 🏗️ Architecture & Security

```
[ Frontend: Browser ]
   │
   │  1. POST /api/generate { topic, tone } (No API keys exposed!)
   ▼
[ Backend: Node.js + Express ]
   │
   │  2. Reads GEMINI_API_KEY from .env via dotenv
   │  3. Connects to Google Gemini API (gemini-2.5-flash)
   │  4. Validates & formats 6 professional components
   ▼
[ Return JSON to Frontend ]
   │
   │  5. Renders inside authentic LinkedIn Feed Card
```

### 🔒 Security Principles
- **No API Keys in Frontend**: The client-side JavaScript (`app.js`) only communicates with your local backend (`/api/generate`). It never knows or sees your private API key.
- **`.env` Protection**: Sensitive keys are loaded from `.env` on the server. `.env` is listed in `.gitignore` and is never committed to GitHub.
- **Graceful Fallback**: If an API key is not yet configured or if the Gemini API reaches a temporary rate limit, the backend automatically falls back to the smart built-in procedural engine so your application never breaks.

---

## 📦 Packages & What They Do

When installing dependencies with `npm install`, four packages are installed:

1. **`express`**:
   - **What it does**: A fast, lightweight web framework for Node.js.
   - **Why we need it**: It creates the web server, handles API routes (`POST /api/generate` and `GET /api/status`), parses incoming JSON request bodies, and serves static files (`index.html`, CSS, and JS).

2. **`dotenv`**:
   - **What it does**: A zero-dependency module that loads environment variables from a `.env` file into Node.js's `process.env`.
   - **Why we need it**: Keeps your secret API keys safe on your machine without hardcoding them into source code.

3. **`cors`**:
   - **What it does**: Cross-Origin Resource Sharing middleware for Express.
   - **Why we need it**: Ensures secure request handling between frontend clients and the backend API server.

4. **`@google/genai`**:
   - **What it does**: Google's official Gen AI SDK.
   - **Why we need it**: Allows Node.js to communicate directly with Google Gemini models (such as `gemini-2.5-flash`).

---

## 🛠️ Step-by-Step Configuration & Setup

### Step 1: Install Dependencies
Open PowerShell or Command Prompt in the project folder and run:
```bash
npm install
```
> **What this does**: Reads `package.json` and downloads the 4 dependencies (`express`, `dotenv`, `cors`, `@google/genai`) into the `node_modules` folder.

### Step 2: Get a Free Google Gemini API Key
1. Go to **[Google AI Studio](https://aistudio.google.com/app/apikey)**.
2. Sign in with your Google account.
3. Click **"Create API Key"**.
4. Copy the generated key (it starts with `AIzaSy...`).

### Step 3: Add Your Key to `.env`
1. Open the `.env` file in the project directory with any text editor (VS Code, Notepad).
2. Paste your key:
   ```env
   GEMINI_API_KEY=AIzaSyYourActualKeyHere
   PORT=3000
   ```
3. Save the file.

---

## 🚀 Running the Application

### Option A: The One-Click Launcher (`start.bat`)
Double-click **`start.bat`** in the project folder. It will:
- Check if dependencies are installed (and run `npm install` if needed).
- Start the Express server on `http://localhost:3000`.
- Open Google Chrome automatically.

### Option B: Terminal Command
Run:
```bash
npm start
```
Then open Google Chrome and navigate to:
```text
http://localhost:3000
```

---

## 📋 Project File Structure

```text
Linkedin Post Generator/
├── .env                # Private API key storage (EXCLUDED from git)
├── .env.example        # Safe template for environment variables
├── .gitignore          # Prevents .env and node_modules from being committed
├── package.json        # Node.js project manifest and dependency definitions
├── server.js           # Express backend server with Gemini AI integration
├── start.bat           # 1-click Windows launcher
├── index.html          # Semantic dashboard layout & LinkedIn feed card
├── css/
│   └── styles.css      # Design system, responsive layout & skeleton animations
├── js/
│   ├── app.js          # Frontend controller (calls /api/generate)
│   ├── generator.js    # Backup/offline generation engine
│   └── templates.js    # Content frameworks and hashtag dictionaries
└── README.md           # Documentation
```
