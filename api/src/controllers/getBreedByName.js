const axios = require("axios");
// ---------- Node Modules BK ------------

const { Dog, Temperaments } = require('../db')
// ---------- DB -------------------------

const { API_KEY } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds`
const apiKey = `?api_key=${API_KEY}`

async function getBreedByName (req, res) {
    console.log(1 + 2)
    // nombre de tipo de raza  -> retriever <-

    const { name } = req.query;
    console.log(req.query);

    var dogsBreed = [];
    var dog;

    await axios(URL+ apiKey)
        .then( async (response) => {
            for( const item of response.data ){

                if( item.name.toLowerCase().includes(name.toLowerCase()) ) {

                    dog = {
                        id: item.id,
                        image: item.image?.url,
                        name: item.name,
                        height: item.height?.metric,
                        weight: item.weight?.metric,
                        life_span: item.life_span,
                        temperament: item.temperament,
                    };
                    dogsBreed.push(dog)
                }
            }

            console.log("dogs desde la API: "+ dogsBreed.toString())

            }, (error) => console.log("there is no such breed of dog from the Api", error)
        );

        try{
            var dogDB = await Dog.findOne({
                where: {name: name},
                include: [{
                    model: Temperaments,
                }]
            })

            var arrayTemp = dogDB.dataValues.temperaments;
            console.log(arrayTemp)

            var stringTemperaments = "";
            for(var i =0;i<arrayTemp.length; i++){
                stringTemperaments +=arrayTemp[i].name;
                if(i !== arrayTemp.length - 1){ stringTemperaments += ", "}
            }
            console.log(stringTemperaments)

            dogDB = {
                id: dogDB.id,
                image: dogDB.image,
                name: dogDB.name,
                height: dogDB.height,
                weight: dogDB.weight,
                life_span: dogDB.life_span,
                temperament: stringTemperaments,
            }
            console.log(dogDB)

            dogsBreed.push(dogDB);    
        } catch (error) {
            console.log(error.message);
        }

        console.log("after catch")

         if (dogsBreed.length === 0) {
            res.status(404).json( "not found");
         }

        console.log("dog final " + JSON.stringify(dogsBreed)) // veo los perros con misma raza
        res.status(200).json(dogsBreed);
}

module.exports = { getBreedByName };