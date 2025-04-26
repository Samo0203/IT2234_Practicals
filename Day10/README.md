# 🛠️ MongoDB Tutorial

This tutorial covers how to connect, create databases, insert and manipulate data in MongoDB through the UI and shell.

---

## 📋 Table of Contents

1. [Adding a New Connection](#adding-a-new-connection)
2. [Creating a Database](#creating-a-database)
4. [Using MongoDB Shell](#using-mongodb-shell)
5. [Basic Shell Commands](#basic-shell-commands)
6. [Inserting Data via UI](#inserting-data-via-ui)
7. [Editing and Cloning Documents](#editing-and-cloning-documents)
8. [Inserting Data via Shell](#inserting-data-via-shell)
9. [Finding Students](#finding-students)

---

## 🧩 Adding a New Connection 

- Open MongoDB Compass.
- Click the **"Add New Connection"** button to set up a new database connection.
![1.png](./Outputs/1.png)

- After entering your server details, click **"Save & Connect"**.
  ![2.png](./Outputs/2.png)

- Now the connection is created.
  ![3.png](./Outputs/3.png)

## 🗃️ Creating a Database

- Click **"Create Database"**.
- Enter the **Database Name** and **Collection Name**.
- Click **"Create Database"** to confirm.
  ![4.png](./Outputs/4.png)

- Now the database is created.
  ![5.png](./Outputs/5.png)

## 💻 Using MongoDB Shell

- Click the **"Open MongoDB Shell"** button.
- You can now execute MongoDB commands directly from the shell.
  ![5_2.png](./Outputs/5_2.png)

---

## ⚙️ Basic Shell Commands

```bash
# Change the database
use unidb

# Show all databases
show databases

# Show collections in the current database
show collections

# Clear the shell screen
cls
```
  ![6](https://github.com/user-attachments/assets/2e191b69-b929-49c6-8cbb-c188c8c6f913)


## 🛠️ Inserting Data via UI
- Click "Add Data" → "Insert Document".
![7](https://github.com/user-attachments/assets/eb7db30c-c9c1-45b9-b23e-46ac54f693db)

- Enter the document details.
![9](https://github.com/user-attachments/assets/8f7cf308-4180-4a9d-b7a2-dcafe49be774)

- Click "Format" to format the document properly.
- Click "Insert" to save it.
  ![10](https://github.com/user-attachments/assets/882e3b4e-9866-4d65-8a9f-4df5dc69e193)

- Now the data will be inserted.
  ![11](https://github.com/user-attachments/assets/512ca93a-bbeb-4fbc-be5d-1cd631f38bce)


## Clone a Document
- Click "Clone Document" to create a duplicate and modify if needed.
  ![12.png](./Outputs/12.png)

## ✏️ Editing Documents
- Click "Edit Document".
   ![14.png](./Outputs/14.png)
- Click the "+" button to add fields.
   ![15.png](./Outputs/15.png)
Example: Add a "gender" field and click "Update".
 ![17](https://github.com/user-attachments/assets/c62ccd0f-b0a6-4166-9254-6939f9dd2472)

## 🔥 Inserting Data via MongoDB Shell

### Insert One Document
```javascript
db.students.insertOne({
  "regno": "2021IT003",
  "name": "Niki",
  "age": 21,
  "degree": "IT",
  "gpa": 3.5,
  "skills": ["JS", "MySQL", "Java"],
  "gender": "male"
})
```
![19](https://github.com/user-attachments/assets/5f1e45b6-4510-43b4-830d-1d838e082e38)

### Insert Many Document
```javascript
db.students.insertMany([
  {
    "regno": "2021IT004",
    "name": "Jisoo",
    "age": 24,
    "degree": "IT",
    "gpa": 3.8,
    "skills": ["JS", "MySQL", "C"],
    "gender": "male"
  },
  {
    "regno": "2021IT005",
    "name": "Rose",
    "age": 22,
    "degree": "IT",
    "gpa": 3.7,
    "skills": ["JS", "MySQL", "MongoDb"],
    "gender": "male"
  }
])
```
![21](https://github.com/user-attachments/assets/9fc4a5cb-f008-4645-bab2-e15db853d538)![21_1](https://github.com/user-attachments/assets/a5bc11cf-0b54-445f-9b13-c29e69636d75)

## 🔎 Finding Students

### Display Name and Age With ID
```javascript
db.students.find({}, {name:1, age:1})
```
