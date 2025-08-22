# 📝 Task Manager API

A RESTful API for managing tasks.  
Supports **CRUD operations**, **filtering**, **pagination**, and **input validation**.  
Currently uses an in-memory store (array) — database integration planned in the future.  

---

## ⚡ Tech Stack
- Node.js
- Express.js
- Express-Validator (for input validation)
- Morgan (for request logging)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/harshitmahara2455/task-manager-api.git
cd task-manager-api
```
### 2️⃣ Install dependencies
```bash 
npm install 
```
### 3️⃣ Run the server
```bash 
npm start 
```
Server will run on 
```bash
http://localhost:3000
```
### 📌 API Endpoints

🔹 Create a Task

POST /tasks

Request Body
```bash
{
  "title": "Finish assignment",
  "description": "Complete the backend project",
  "priority": "high",
  "status": "pending"
}
```
Response
```bash
{
  "id": 1,
  "title": "Finish assignment",
  "description": "Complete the backend project",
  "priority": "high",
  "status": "pending"
}
```
🔹 Get All Tasks (with filters & pagination)

GET /tasks

Query Params

status → pending | completed

priority → low | medium | high

page → page number (default: 1)

limit → number of items per page (default: 10)

Example Request
```bash
GET /tasks?status=pending&priority=high&page=2&limit=5
```
Response
```bash
{
  "page": 2,
  "limit": 5,
  "totalTasks": 50,
  "tasks": [
    {
      "id": 6,
      "title": "Fix bug in login",
      "description": "Resolve issue with user login",
      "priority": "high",
      "status": "pending"
    }
  ]
}
```
🔹 Get a Single Task

GET /tasks/:id

Example
```bash
GET /tasks/1
```
Response
```bash
{
  "id": 1,
  "title": "Finish assignment",
  "description": "Complete the backend project",
  "priority": "high",
  "status": "pending"
}
```
🔹 Update a Task

PUT /tasks/:id

Request Body
```bash 
{
  "title": "Finish assignment",
  "description": "Submit before deadline",
  "priority": "medium",
  "status": "completed"
}
```
Response
```bash 
{
  "id": 1,
  "title": "Finish assignment",
  "description": "Submit before deadline",
  "priority": "medium",
  "status": "completed"
}
```
🔹 Delete a Task

DELETE /tasks/:id

Example
```bash
DELETE /tasks/1
```
Response
```bash
{
  "message": "Task deleted successfully"
}
```
✅ Validation Rules

When creating or updating a task:

title: required, string, min 3 chars

description: optional, string

priority: must be one of low | medium | high

status: must be one of pending | completed

Example Error Response
```bash
{
  "errors": [
    {
      "msg": "Title is required",
      "param": "title",
      "location": "body"
    }
  ]
}
```
❌ Error Handling

All errors return consistent JSON:
```bash
{
  "error": "Task not found"
}
```
👨‍💻 Author

Built by Harshit 🚀
Feel free to connect


