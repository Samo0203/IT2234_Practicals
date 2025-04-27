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

## 💻 Display Students

### Display Name and Age With ID
{name:1, age:1}
![22](https://github.com/user-attachments/assets/f91fbb8e-54ab-4d79-8777-79a71c0fe3f2)

### Display Name and Age Without ID
{name:1, age:1, _id:0}
![23](https://github.com/user-attachments/assets/43fd53df-c085-48da-b3d8-8f4d0454b888)

- Click "Reset" to clear the filters.
![24](https://github.com/user-attachments/assets/9d7e2e82-7803-4e5b-ba86-e4cb9e806e57)

### List View
![28](https://github.com/user-attachments/assets/916d8b2b-d384-45c6-b823-814d18cfcf7a)

### Table View
![28_2](https://github.com/user-attachments/assets/4b063996-d655-4c15-ac59-d2c014cc3646)

## 🔎 Find Students

### Find Student using Registration Number
{regno:"2021IT004"}
![26](https://github.com/user-attachments/assets/bd60393c-3cbd-4c46-b8f9-bb745fd73674)

### Find Students using gender
{gender:"female"}
![27](https://github.com/user-attachments/assets/e93ce825-eddf-4dc5-b02f-c1381b2a225c)

db.students.find({"gender":"female"})

![29](https://github.com/user-attachments/assets/e7bde783-e8f1-4498-80c3-786460245d6c)

### Find 1st female student
db.students.findOne({"gender":"female"})

![30](https://github.com/user-attachments/assets/c292f00d-0876-4c98-a730-740a216b82b0)

### Find students whose age is greater than 25

{age:{$gt:25}}

![31](https://github.com/user-attachments/assets/0d080d9c-0edc-467d-8074-493193aa4a4d)

db.students.find({"age":{$gt:25}})

![31_3](https://github.com/user-attachments/assets/a0a7ba36-88f0-40ac-bdba-b578b4b7a89b)

### Find students whose age is less than 25
{age:{$lt:25}}

![32](https://github.com/user-attachments/assets/9ab69f40-c00d-4d96-8b39-595c10944c02)

### Find students whose age is equal to 25
{age:{$eq:25}}
![33](https://github.com/user-attachments/assets/14688075-cced-45d6-a90c-86db6543f0b9)

### Find students who have skills in MongoDb
{skills:"MongoDb"}
![34](https://github.com/user-attachments/assets/8e6d6b43-1f12-4af8-aca8-19e5f873aa65)

{skills:{$in:["MongoDb"]}}

![34_2](https://github.com/user-attachments/assets/eb39dbb3-a48f-49ad-958f-afd922835265)

### Find students who have skills in C or Java
{skills:{$in:["C", "Java"]}}

![35](https://github.com/user-attachments/assets/490f5968-f416-4ec8-895f-e82d2f4d41cb)

### Find students who don't have skills in MongoDb
{skills:{ $nin:["MongoDb"]}}
![36](https://github.com/user-attachments/assets/097d9d4e-197e-4cd7-a5e7-c26f5e2e5ff1)

## 🛠️ Sort Students
### Sort students by gpa (Descending order)
{ gpa: -1 }
![37](https://github.com/user-attachments/assets/916cc93c-f410-492f-8012-aba41cf920a8)
![37_2](https://github.com/user-attachments/assets/923d1b69-36fc-4da0-8880-b285357b96f4)
![37_3](https://github.com/user-attachments/assets/3af958f1-446b-4f38-825c-bb8dc1497013)

### Sort students by gpa and name
{ name: 1, age: 1 }
![38](https://github.com/user-attachments/assets/0ed7312b-1104-4af9-b835-98b22b7aeeea)
![38_2](https://github.com/user-attachments/assets/d2aea0b2-ff52-43b9-99f4-188baff6467a)
![38_3](https://github.com/user-attachments/assets/547032ba-c240-43f2-bcba-66ad4e6ac110)

### Sort students by gpa (Ascending order) via shell
db.students.find().sort({'gpa':1})
![39](https://github.com/user-attachments/assets/6e0ff16e-5c5f-49f2-b660-406e0245025d)
![39_2](https://github.com/user-attachments/assets/015cb61c-ad31-47cc-9e73-8ee447ff3991)
![39_3](https://github.com/user-attachments/assets/31416784-95f5-403c-8a54-0aa44ab65aed)

### Sort students by gpa (Descending order) via shell
db.students.find().sort({'gpa':-1})
![39_4](https://github.com/user-attachments/assets/d7b03123-9181-43ad-a176-7b5984822bee)
![39_5](https://github.com/user-attachments/assets/480bbd33-5c25-43d2-b1de-a769b0918db4)
![39_6](https://github.com/user-attachments/assets/2869d9e7-2b8f-4836-8052-3ffb98b16bdf)

### Find IT male students sort by gpa (Descending order) via shell
db.students.find({'degree':'IT','gender':'male'}).sort({'gpa':1})
![40](https://github.com/user-attachments/assets/2b2b1d54-c7ab-4fcd-b041-107d5da6e9ef)

