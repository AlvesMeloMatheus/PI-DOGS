import {GET_BREED_BY_NAME, GET_DOGS, GET_DOGS_DETAIL,
     GET_TEMPERAMENTS, POST_DOGS,
    ORDER_DOGS, FILTER_DOGS} from "./types"

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
        console.log(response.data)
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

export function orderDogs(criterio, dogs) {
    return async function (dispatch) {
    console.log("action")
      var orderedDogs = [];
      if(criterio ===  "name_asc"){
        orderedDogs = dogs.sort((a, b) => a.name.localeCompare(b.name));
      } else if (criterio === "name_dsc") {
        orderedDogs = dogs.sort((a, b) => -a.name.localeCompare(b.name))
      }else if (criterio === "weight_asc") {
        orderedDogs = dogs.sort((a, b) => a.weight.localeCompare(b.weight));
      } else if (criterio === "weight_dsc") {
        orderedDogs = dogs.sort((a, b) => -a.weight.localeCompare(b.weight));

      }else{
        orderedDogs = dogs;
      }

      const resultArray =[...orderedDogs]
          
      console.log(orderedDogs)
      console.log(resultArray)
      return dispatch({
        type: ORDER_DOGS,
        payload: resultArray,
      });
    };
  }
  
  export function filterByTemperament(temp, dogs) {
    return async function (dispatch) {
      var filteredDogs = [];
    console.log(temp)
      dogs.forEach((dog) => {
        console.log(dog)
        if (dog.temperament?.includes(temp)) {
          filteredDogs.push(dog);
        }
      });
  
      return dispatch({
        type: FILTER_DOGS,
        payload: filteredDogs,
      });
    };
  }
  
  export function filterIsApi(isFromAPI, dogs) {
    return async function (dispatch) {
      var filteredDogs = [];
      //saber si el id es uuid o id normal, si uuid es de la db
      const regexExp =
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
      dogs.forEach((dog) => {
        if (isFromAPI && !regexExp.test(dog.id)) {
          filteredDogs.push(dog);
        } else if (!isFromAPI && regexExp.test(dog.id)) {
          filteredDogs.push(dog);
        }
      });
  
      return dispatch({
        type: FILTER_DOGS,
        payload: filteredDogs,
         });
    };
  }

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