# 📘 TypeScript Math Quiz

🔗 **Live Demo:** [https://aya-abdellatif.github.io/typescript-math-quiz/](https://aya-abdellatif.github.io/typescript-math-quiz/)

A simple **TypeScript-based math quiz application** that requires user authentication and generates random arithmetic questions.  
The application evaluates user answers and displays the final score at the end of the quiz.

---

## 🚀 Features

### 🔐 Login Authentication
- User must enter a valid email and password.
- Maximum **3 login attempts** allowed.

### 🧮 Random Math Questions
- Generates arithmetic questions randomly.
- Supported operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (*)

### 📝 Custom Quiz Length
- User chooses the **number of questions**.

### 🎯 Score Calculation
- Each correct answer increases the score.
- Final score is displayed at the end of the quiz.

---

## 🛠 Technologies Used

- **TypeScript**
- **JavaScript**
- **HTML**
- **Browser APIs** (`alert`, `prompt`)

---

## 📂 Project Structure

```

typescript-math-quiz
│
├── script.ts
├── script.js
├── index.html
└── README.md

````

- **script.ts** → Main TypeScript source code  
- **script.js** → Compiled JavaScript file  
- **index.html** → Runs the application in the browser  

---

## ▶️ How to Run the Project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/typescript-math-quiz.git
````

---

### 2️⃣ Install TypeScript (if not installed)

```bash
npm install -g typescript
```

---

### 3️⃣ Compile TypeScript

```bash
tsc script.ts
```

This will generate **script.js** from **script.ts**.

---

### 4️⃣ Run the project

Open **index.html** in your browser.

---

## 📸 Example Flow

1️⃣ User enters email and password
2️⃣ If authentication succeeds → user enters number of questions
3️⃣ Random math questions are generated
4️⃣ User answers each question
5️⃣ Final score is displayed

---

## 🎯 Learning Goals

This project was created to practice:

* TypeScript fundamentals
* Functions and modular code
* Random number generation
* Simple authentication logic
* Browser interaction (`alert`, `prompt`)

---

## 📌 Future Improvements

* Add **division questions**
* Add **timer for each question**
* Replace **prompt/alert with a graphical UI**
* Add **difficulty levels**

---

## 👩‍💻 Author

**Aya Abdellatif**
