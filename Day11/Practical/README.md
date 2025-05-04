# 🛠️ MongoDB Practical 11-28

## 🧩 Delete DataBase
- db.dropDatabase()
  
  ![1.png](./Output/2.png)
   ![2.png](./Output/2_2.png)

## 🗃️ Delete Collection
- db.sampledata.drop()

![3.png](./Output/3_2.png)
![4.png](./Output/3_3.png)

## 🔥 Delete data by ID
- db.degree.deleteOne({_id:ObjectId('680ee994a6a40ec6c45a9682')})
  ![5.png](./Output/4.png)

## 💻 Display the degree programs
- db.degree.find().projection(['name','duration'])
  ![6.png](./Output/5_2.png)
- db.degree.find({},{name:1,_id:0}).pretty()
  
   ![7.png](./Output/6.png)

## 🔥 Delete the degrees
### Delete the degree which duration is less than 04
- db.degree.deleteMany({duration:{$lt:4}})

### Display the remaining
- db.degree.find({},{name:1,duration:1,_id:0}).pretty()

   ![8.png](./Output/7.png)

## ✏️ Update the details of one degree using Id
- db.degree.updateOne({_id:ObjectId('680eef5ea6a40ec6c45a968e')},{$set:{name:'BIT',duration:3}})
   ![9.png](./Output/8_2.png)

## 🔎 Find the degree using Id
- db.degree.findOne({_id:ObjectId('680eef5ea6a40ec6c45a968e')})
   ![10.png](./Output/8_3.png)

## ✏️ Update by adding 1 year to the degrees which duration is greater than or equal to 4
- db.degree.updateMany({duration:{$gte:4}},{$inc:{duration:1}})
   ![11.png](./Output/9_2.png)

  ## 💻 Display all degrees
  - db.degree.find()
    ![12.png](./Output/9_3.png)

    ## ⚙️  Add new skill to student using regno
  - db.students.updateOne({regno:'2021IT001'},{$push:{skills:'PHP'}})

    ### Display student using regno
  - db.students.findOne({regno:'2021IT001'})
     ![13.png](./Output/10.png)
