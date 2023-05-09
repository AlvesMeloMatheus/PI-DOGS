import React, { Fragment, useState, useEffect } from 'react';
// -------------- React --------------

import "./CreateDog.css"
// -------------- CSS ----------------

import { useDispatch, useSelector } from "react-redux"
import {Provider } from 'react-redux'
// --------------- Redux ----------------------

import { postDogs, getTemperaments } from '../../Redux/actions';
import store from '../../Redux/store';

const CreateDog = () => {

    



    useEffect((() => {
        dispatch(getTemperaments())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [])
    
    const temperamntsApi = useSelector(store => store.temperaments)

    const [cubeState, setCubeState] = useState(
        new Array(temperamntsApi.length).fill(false)
    );
    const initCube = new Array(temperamntsApi.length).fill(false);



    // console.log(temperamntsApi)

    const [dogs, setDogs] = useState({
        name: '',
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        min_life_span: '',
        max_life_span: '',
        weight: '',
        life_span: '',
        temperament: '',
    })

    const handleInputChange = (event) => {
        // console.log(event.target.value);

        setDogs({
            ...dogs,
           [event.target.name]: event.target.value 
        })

    }



    const handleOnChange = (position) => {

        if(cubeState.length===0){
            const updateInitCubeState = initCube.map(
                (item, index) => {
                    return  (index === position) ? !item : item
                }
            );
            setCubeState(updateInitCubeState);
        } else {
            const updateCubeState = cubeState.map(
                (item, index) => {
                    return  (index === position) ? !item : item
                }
            );
            setCubeState(updateCubeState);
        }

    }

    const dispatch = useDispatch();

    const submitDate = (event) => {
        console.log(cubeState)
        event.preventDefault();
        const tempStr = cubeState.reduce(
            (str, currentState, index) => {
              if (currentState === true) {
                return str + temperamntsApi[index].name + ', ';
              }
              return str;
            },
            ''
          );
        var dogFromForm = {
            ...dogs,
            height: dogs.min_height + " - " + dogs.max_height,
            weight: dogs.min_weight + " - " + dogs.max_weight,
            life_span: dogs.min_life_span + " - " + dogs.max_life_span,
            temperament: tempStr,
            image: "https://c4.wallpaperflare.com/wallpaper/952/320/853/wolf-background-desktop-wallpaper-preview.jpg"
        }
        const body= JSON.stringify(dogFromForm )
        console.log(body)
        dispatch(postDogs(body))
        console.log(dogs.name + ' ' + dogs.life_span);
    }

    return (
        <Fragment>
            <Provider store={store}>
                <h1>❤️ Create your dog ❤️</h1>
                <form onSubmit={submitDate}>

                    <div>
                        <input className='InpF'
                            placeholder="Name:" 
                            type="text"  
                            name='name'
                            onChange={handleInputChange}
                            />
                    </div>

                    <div>
                        <input className='InpF2'
                            placeholder="Height: min" 
                            type="number" 
                            min="0"
                            name='min_height'
                            onChange={handleInputChange}
                            />
                            <input className='InpF2M'
                            placeholder="Height: max" 
                            type="number"
                            min="0" 
                            name='max_height'
                            onChange={handleInputChange}
                            />
                    </div>


                    <div>
                        <input className='InpF2'
                            placeholder="Weight: min" 
                            type="number" 
                            min="0"
                            name='min_weight'
                            onChange={handleInputChange}
                            />
                        <input className='InpF2M'
                            placeholder="Weight: maxn" 
                            type="number" 
                            min="0"
                            name='max_weight'
                            onChange={handleInputChange}
                            />
                    </div>

                    <div>
                        <input className='InpF2'
                            placeholder="Life Span: min" 
                            type="number" 
                            min="0"
                            name='min_life_span'
                            onChange={handleInputChange}
                            />
                        <input className='InpF2M'
                            placeholder="Life Span: max" 
                            type="number"
                            min="0" 
                            name='max_life_span'
                            onChange={handleInputChange}
                            />
                    </div>

                    <div className='Checkbox'>
                        {temperamntsApi.map(({name}, index) => {
                            return (
                                <div className='CheckboxContainer' key={index}>
                                    <input className='CubeHover'
                                        placeholder="Temperaments: Temp1, Temp2, TempN" 
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`} 
                                        name={name}
                                        value={name}
                                        checked={cubeState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>
                                        {name}
                                    </label>
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <button id='BtnSub' type="submit" >Submit</button>
                    </div>

                </form>
            </Provider>
        </Fragment>
    )
}

export default CreateDog;