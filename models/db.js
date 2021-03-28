const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://admin-hardik:Comp@231@cluster0.d3aoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true
}, err => { 
  if(!err)
    console.log("connected to database")
})
