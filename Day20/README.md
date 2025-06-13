# Library App 

### Installation

```bash
npm install jsonwebtoken
```
![1](https://github.com/user-attachments/assets/162f5061-1ec3-495e-9631-7775f1d47c85)

```bash
npm install bcrypt
```
![2](https://github.com/user-attachments/assets/3705eab1-a8f3-49fe-94d6-5e390ffc1b93)


### Register User

code:- 
User.js ->
```JavaScript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique:true },
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('users', UserSchema);
```

userRoute.js->
```JavaScript
router.post('/register',async (req,res)=>{
    try{
        let {username,email,password} = req.body
        if(!username || !email || !password){
            res.status(400).send("Please provide the required fields!")
        }
        if(await User.findOne({username})){
            res.status(409).send("Username already available")
        }
            const salt=await bcrypt.genSalt()
            password=await bcrypt.hash(password,salt)  //Hashing the password (not the pwd in plain text)
            const results = await User.create({username,email,password})
            res.status(200).json(results);
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 
```

New User Registration
![registerUser](https://github.com/user-attachments/assets/34a3ed04-12de-4b84-9215-8ceeb5a93337)
![registerUser2](https://github.com/user-attachments/assets/1c2205c3-7259-4e73-acfc-ac526e666cd9)

Already Registered User
![alreadyRegistedUser](https://github.com/user-attachments/assets/51c87b0e-0eec-4401-9068-5d817d6459a7)

### User Login
code:- 
userRote.js ->
```JavaScript
router.post('/login',async (req,res)=>{
    try{
        let {username,password} = req.body
        if(!username || !password){
            res.status(400).send("Please provide the required fields!")
        }
        //check username
        const user = await User.findOne({username})
        if(!user){
            return res.status(409).send("Please check your username and password")
        }

        //check password
        const passMatch = await bcrypt.compare(password,user.password)
        if(!passMatch){
            return res.status(409).send("Please check your username and password")
        }

        //create token
        const payload={ID:user._id,NAME:user.username}
        //encrypeion
        const token=jwt.sign(payload,secretkey)
        //return res.status(200).json({token,payload})
        return res.status(200).json(token);
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 
```

User Login
![userLogin](https://github.com/user-attachments/assets/95bdb3f4-5d31-4c7d-ac98-5dff01ae1248)

User Login with Payload
![userLogin_payload](https://github.com/user-attachments/assets/d9c63e88-a178-40f3-a174-d18bb6828fad)

Incorrect Login
![incorrectLogin](https://github.com/user-attachments/assets/7020a725-dfb2-4abd-bacd-84d79f8b97d4)
