import React, { Fragment, useState } from 'react';
// -------------- React --------------

import "./CreateDog.css"
// -------------- CSS ----------------

import { useDispatch, useSelector } from "react-redux"
import {Provider } from 'react-redux'
// --------------- Redux ----------------------

import { postDogs } from '../../Redux/actions';
import store from '../../Redux/store';

const CreateDog = () => {

    const [dogs, setDogs] = useState({
        name: '',
        height: '',
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

    const dispatch = useDispatch();

    const submitDate = (event) => {
        event.preventDefault();
        var dogFromForm = {
            ...dogs,
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
                            placeholder="Name" 
                            type="text"  
                            name='name'
                            onChange={handleInputChange}
                            />
                    </div>

                    <div>
                        <input className='InpF'
                            placeholder="Height: min - max" 
                            type="text" 
                            name='height'
                            onChange={handleInputChange}
                            />
                    </div>

                    <div>
                        <input className='InpF'
                            placeholder="Weight: min - max" 
                            type="text" 
                            name='weight'
                            onChange={handleInputChange}
                            />
                    </div>

                    <div>
                        <input className='InpF'
                            placeholder="Life Span: min - max" 
                            type="text" 
                            name='life_span'
                            onChange={handleInputChange}
                            />
                    </div>

                    <div>
                        <input className='InpF'
                            placeholder="Temperaments: Temp1, Temp2, TempN" 
                            type="text" 
                            name='temperament'
                            onChange={handleInputChange}
                            />
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