const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true
}, err => { 
  if(!err)
    console.log("connected to database")
})
