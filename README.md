# 🧑‍💼 Employee Management System

This is a full-stack **Employee Management System** built with **Spring Boot (Java)** for the backend and **React.js** for the frontend. The system allows users to **create**, **read**, **update**, and **delete (CRUD)** employee records in a user-friendly interface.

---

## 📌 Features

- Add new employee
- View all employees in a table
- Edit employee details
- Delete employee
- Responsive UI built with React
- RESTful API backend with Spring Boot

---

## 🛠️ Tech Stack

### 🧩 Frontend (React)
- React.js
- Axios
- React Router
- Bootstrap (or Tailwind/CSS framework)

### ⚙️ Backend (Spring Boot)
- Spring Boot
- Spring Data JPA
- REST API
- H2 / MySQL Database (any you choose)
- Lombok (optional)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js & npm
- Java 17+ and Maven
- Git

---

## 🖥️ How to Run the Project

### Backend (Spring Boot)
- Run the main class: EmProjectApplication.java
- The backend will start at: http://localhost:8080

### Frontend (React)
- Perform the following in the terminal: npm install
                                         npm start
- The frontend will start at: http://localhost:3000

## API Endpoints

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/employees`      | Get all employees   |
| POST   | `/employees`      | Create new employee |
| GET    | `/employees/{id}` | Get employee by ID  |
| PUT    | `/employees/{id}` | Update employee     |
| DELETE | `/employees/{id}` | Delete employee     |



Employee Management System/
├── backend/           ← Spring Boot backend
│   └── src/
│       └── main/java/com/springProject/em_project
│           ├── Empcontroller/
│           ├── EmpEntity/
│           ├── Employee/
│           ├── EmpRepository/
│           ├── EmProjectApplication.java
|           ├── EmpService
|           └── EmpServiceImpl
│   └── pom.xml
│
├── frontend/          ← React frontend
│   └── src/
│       ├── components/
│       ├── images/
|       ├── services/
│       └── App.js
│   └── package.json
│

! NOTE => These are the main files which you can change as per your wants. Ignore the rest.

