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
// this one only getting back name and id and owner and then set it for actions component
// router.get("/client", function(req,res){
//     Person.find({})
// })

router.put("/actionUpdatePerson", function(req,res){
    let {_id, action, value} = req.body
    Person.findOneAndUpdate({_id : _id}, {[action] : value}, {new:true}, function(err, response){
        res.send(response)
    })
})

router.post("/addNewClient", function(req,res){
    let {name, country, owner} = req.body
    let person = new Person({
        name,
        owner,
        country,
        emailType: null,
        firstContact : new Date(),
        sold:false,
        email: "",
    })
    person.save()
    res.end()
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