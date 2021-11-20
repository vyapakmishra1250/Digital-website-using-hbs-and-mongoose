const mongoose = require('mongoose');

//creating database
mongoose.connect("mongodb://localhost:27017/vyapak", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
      console.log("Connectgion sucessfull")
  }).catch((error)=>{
      console.log(error);
  })