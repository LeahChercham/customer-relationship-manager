const express = require("express")
const router = express.Router()
const Person = require('../models/Person')
// =========================

// Clients routes below
router.get("/clients", function(req,res){
    Person.find({}, function(err, response){
        console.log("found them")
        res.send(response)
    })
})

router.put("/updatePerson", function(req,res){
    let {name, email, country} = req.body
    Person.findOneAndUpdate({_id : req.body._id } , {name, email, country}, {new:true}, function(err, response){
    res.send(response)
    })
})

//Action routes below
router.get("/client", function(req,res){
    Person.find({})
})



// =========================
module.exports = router




// // // // ++++++++++++++ DO NOT UNCOMMENT ++++++++++++++++++
// // // // router.post("/person", function(req,res){
// // // //     let data = require('../routes/data.json')
// // // //     data.forEach(d => {
// // // //         let person = new Person(d)
// // // //         person.save()
// // // //     })
// // // //     console.log("done")
// // // // })