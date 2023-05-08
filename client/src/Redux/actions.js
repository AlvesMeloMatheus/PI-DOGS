import {GET_BREED_BY_NAME, GET_DOGS, GET_DOGS_DETAIL, GET_TEMPERAMENTS, POST_DOGS} from "./types"

import axios from "axios";


export function getDogByName (dogName) {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/dogs?name=${dogName}`)
        console.log("dogs by NAME from back"+JSON.stringify(res))
        return dispatch ({
            type: GET_BREED_BY_NAME, 
            payload: res.data,
        });
    };
};

export function getAllDogs () {
    return async function (dispatch) {
        const response = await axios.get("http://localhost:3001/dogs");
        console.log("dogs from back"+JSON.stringify(response))
        return dispatch ({
            type: GET_DOGS, 
            payload: response.data.dogs,
        });
    };
};

export function getDogsDetail (idRaza) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/dogs/${idRaza}`);
        return dispatch ({
            type: GET_DOGS_DETAIL, 
            payload: response.data,
        });
    };
};

export function getTemperaments () {
    return async function (dispatch) {
        const response = await axios.get("http://localhost:3001/temperaments");
        return dispatch ({
            type: GET_TEMPERAMENTS, 
            payload: response.data,
        });
    };
};

///dogs/create
export function postDogs (body) {
    return async function (dispatch) {
        const bodyJson = {
            body: body
        }
        const response = await axios.post("http://localhost:3001/dogs/create", bodyJson);
        console.log(response)
        return dispatch ({
            type: POST_DOGS, 
            payload: response.data,
        });
    };
};

  /*
        .then((response) => response.json())
      .then((data) => {
        console.log("este es data: ",data)
        // const data = response.json();
        
        for (let i = 0; i < data.length; i++) {

          const perro = dogs?.find(element => element.name === data[i].name)
  
          if (perro) {
            alert("The is already in the list")
          } else if (data[i].name !== undefined) {
            setDogs(oldDog => [...oldDog, data[i]]);
            console.log("nuevo perro: " + JSON.stringify(data[i]))
          } else {
            alert("Dog not found");
          };

        }

      });
  */