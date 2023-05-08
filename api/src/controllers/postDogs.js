const express = require('express');
// ------------ Node Modules  BK .-------------

const {Temperaments, Dog} = require("../db")
// ------------ DB ----------------------------

async function  postNewDog (req, res) {

    console.log(req.body)
    const json = JSON.parse(req.body.body);
    console.log(json.body)
    const { name, image, height, weight, life_span, temperament} = json
    console.log("name"+name)
    const dog = await Dog.findOne({where: {name}})

    if (!dog) {

        const newDog =  await Dog.create({
            name,
            image,
            height,
            weight,
            life_span,
        })
    
        const array = temperament?.split(",").join("").split(" ") || []
        for (var i = 0; i < array.length; i++){
            var temp = await Temperaments.findOne({where: {name: array[i]}})
            if (temp){
                newDog.addTemperaments(temp)
            } 
        }
        console.log(newDog);
    
        res.send("New dog successfully created")
    } else {
        res.status(400).send("the dog cannot be created because a dog with the same name already exists")
    }
};

module.exports = { postNewDog };