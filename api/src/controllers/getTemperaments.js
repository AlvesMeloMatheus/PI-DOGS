const axios = require("axios");
// ---------- Node Modules BK ------------

const { API_KEY } = process.env;

const {Temperaments} = require("../db")

const URL = `https://api.thedogapi.com/v1/breeds`
const apiKey = `?api_key=${API_KEY}`

function getTemperaments (req, res) {

    axios(URL + apiKey)
    .then(async (response) => {

        var temperaments = [];
    
        
        for(const item of response.data){

            const array = item.temperament?.split(",").join("").split(" ") || []

            for ( var i = 0; i < array.length; i++) {
                const n = temperaments.find(e => array[i] === e)
                if ( n === undefined) {
                    temperaments.push(array[i]);
                }     
            }
                
        }

        for ( var j = 0; j < temperaments.length; j++) {

            const temp = await Temperaments.findOne({where: {name: temperaments[j]}})
            if (!temp){
                await Temperaments.create({name: temperaments[j]})
            } 
        }

        const allTemp = await Temperaments.findAll()
        
        res.status(200).json(allTemp);
        }, (error) => res.status(500).json(error.message)
    );

};

module.exports = { getTemperaments };