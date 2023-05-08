const axios = require("axios");
// ---------- Node Modules BK ------------

const { API_KEY } = process.env;

const { Dog, Temperaments, DogsTemperaments} = require("../db");
const { response } = require("express");
const { Error } = require("sequelize");


// enpoint PI -> ☣️"https://api.thedogapi.com/v1/breeds/search?q={raza_perro}" ☣️

// empezando 1° GET -> DOGS -> [ DE OBJ {} <- RAZAS ]
// const response_api = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dog}&api_key=${API_KEY}`)

const URL = `https://api.thedogapi.com/v1/breeds`
const apiKey = `?api_key=${API_KEY}`

function getBreedsById (req, res) {
    // console.log(req.params)
    const { idRaza } = req.params;
    axios(URL+ apiKey)
        .then(async (response) => {
            // console.log(response.data[1])
            var dog ;
            // console.log(idRaza)
            for(const item of response.data){
                // console.log(item.id)
                if(item.id == idRaza) {
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
                    break;
                }
            }

            if (!dog){
                try{
                    dog = await Dog.findOne({
                        where: {id: idRaza},
                        include: [{
                            model: Temperaments,
                        }]
                    })

                    var arrayTemp = dog.dataValues.temperaments;
                    console.log(arrayTemp)

                    var stringTemperaments = "";
                    for(var i =0;i<arrayTemp.length; i++){
                        stringTemperaments +=arrayTemp[i].name;
                        if(i !== arrayTemp.length - 1){ stringTemperaments += ", "}
                    }
                    console.log(stringTemperaments)

                    dog = {
                        id: dog.id,
                        image: dog.image,
                        name: dog.name,
                        height: dog.height,
                        weight: dog.weight,
                        life_span: dog.life_span,
                        temperament: stringTemperaments,
                    }
                } catch (error) {
                    console.log(error.message);
                }
            }

             if (!dog) {
                res.status(404).json( "not found");
             }

            // console.log(dog) // veo el perro
            res.status(200).json(dog);
            }, (error) => res.status(500).json(error.message)
        );
};

module.exports = { getBreedsById };