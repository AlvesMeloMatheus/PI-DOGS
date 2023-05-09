import {GET_BREED_BY_NAME, GET_DOGS, GET_DOGS_DETAIL, 
    GET_TEMPERAMENTS, POST_DOGS, FILTER_DOGS, ORDER_DOGS} from "./types"

const initialState = {
    dogsByName: [],
    dogs: [],
    dogDetail: {},
    dogCreate: {},
    temperaments: [],
}

const reducer = ( state = initialState, action) => {

    switch (action.type) {
        case GET_BREED_BY_NAME:
            return {
                ...state,
                dogsByName: action.payload
            }
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload
            }

        case GET_DOGS_DETAIL:
            return {
                ...state,
                dogDetail: action.payload
            }
        
        case POST_DOGS:
            return {
                ...state,
                dogCreate: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case ORDER_DOGS:
                return {
                  ...state,
                  dogs: action.payload,
                };
        case FILTER_DOGS:
                return {
                  ...state,
                  dogs: action.payload,
        };
        default:
            return state;
    }
}

export default reducer;