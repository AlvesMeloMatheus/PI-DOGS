const axios = require("axios");
// ---------- Node Modules BK ------------

const { API_KEY } = process.env;

const { Dog, Temperaments } = require("../db");
const { response } = require("express");


// enpoint PI -> ☣️"https://api.thedogapi.com/v1/breeds/search?q={raza_perro}" ☣️

// empezando 1° GET -> DOGS -> [ DE OBJ {} <- RAZAS ]
// const response_api = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dog}&api_key=${API_KEY}`)

const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

function getBreeds (req, res) {

    // console.log(req.params)
    axios(URL)
        .then(async (response) => {
            // console.log(response.data[1])
            var dogs = [];

            var dog ={};
            // console.log(idRaza)
            for(const item of response.data){
                // console.log(item.id)
                    // console.log(item)
                    dog = {
                        id: item.id,
                        image: item.image?.url,
                        name: item.name,
                        height: item.height?.metric,
                        weight: item.weight?.metric,
                        life_span: item.life_span,
                        temperament: item.temperament,
                    };
                    // console.log(dog)
                
                dogs.push(dog)
            }

            const dogsDB = await Dog.findAll({
                include: [{
                    model: Temperaments,
                }]
            }) || []

            dogsDB.forEach(element => {
                var arrayTemp = element.dataValues.temperaments;
                console.log(arrayTemp)

                var stringTemperaments = "";
                for(var i =0;i<arrayTemp.length; i++){
                    stringTemperaments +=arrayTemp[i].name;
                    if(i !== arrayTemp.length - 1){ stringTemperaments += ", "}
                }
                console.log(stringTemperaments)


                dog = {
                    id: element.id,
                    image: element.image,
                    name: element.name,
                    height: element.height,
                    weight: element.weight,
                    life_span: element.life_span,
                    temperament: stringTemperaments,
                };
                // console.log(dog)
            
                dogs.push(dog)
            });

            // console.log(dogs) // veo los perros
            res.status(200).json({dogs});
            }, (error) => res.status(500).json(error.message)
        );
};

module.exports = { getBreeds};