# Natural-Language Commands in Angular with .NET Core and Ollama

This project demonstrates how to add a smart conversation layer to an Angular application, allowing it to understand natural-language commands using a **.NET Core backend** and a **local Ollama model**.

---

## Features

- Capture user commands in everyday language.
- Send commands to a backend for interpretation.
- Map multiple natural-language variations to a single, predictable JSON structure.
- Execute actions on the front-end based on interpreted commands.
- Operate fully offline with local LLM model using Ollama.

---

## Architecture

1. **Angular Front-End**  
   Handles user interactions and sends commands to the backend.

2. **.NET Core Backend**  
   Processes commands, builds prompts, queries Ollama, and returns structured JSON.

3. **Ollama Model (Local)**  
   Interprets natural-language commands without cloud dependency.

---

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Node.js & Angular CLI](https://angular.io/guide/setup-local)
- [Ollama](https://ollama.com/) installed locally
- A local Ollama model (e.g., `gemma3n`) running

---

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

2. Run the backend
cd backend
dotnet run

3. Run the Angular frontend
cd frontend
npm install
ng serve

4. Start Ollama model
ollama run gemma3n


⚠️ The backend expects Ollama to be running locally. Without it, natural-language command interpretation will not work.
Testing Without Ollama

To allow testing the frontend without a local Ollama setup, you can temporarily mock the API response in the backend:

return Json(new { action = "navigate", target = "voucher" });

Next Steps / Suggestions

Extend the system to handle more complex actions.

Add voice recognition for spoken commands.

Integrate additional LLM models if needed.