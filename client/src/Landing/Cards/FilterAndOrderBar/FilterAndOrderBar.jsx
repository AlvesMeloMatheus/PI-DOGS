import React, { Fragment, useState, useEffect } from 'react'

import { filterByTemperament, filterIsApi, getAllDogs, getTemperaments, orderDogs } from '../../../Redux/actions';
import { useDispatch, useSelector } from "react-redux"
import {Provider } from 'react-redux'
import store from '../../../Redux/store';

import "./FilterAndOrderBar.css"

const FilterAndOrderBar = () => {
    const dispatch = useDispatch();
    useEffect((() => {
        dispatch(getTemperaments())
        dispatch(getAllDogs)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [])
    const dogs = useSelector(store => store.dogs)
    const temperamntsApi = useSelector(store => store.temperaments)

    const onTempChange = (event) => {
        console.log(event.target.value)
        console.log(dogs)
        dispatch(filterByTemperament(event.target.value,dogs))
    }

    const onOriginChange = (event) => {
        console.log(event.target.value)
        const isApi = event.target.value==="api"
        dispatch(filterIsApi(isApi,dogs))
    }

    const onOrderChange = (event) => {
        console.log(event.target.value)
        dispatch(orderDogs(event.target.value,dogs))
    }

    
    const onClear = () => {
        dispatch(getAllDogs())
    }

  return (
    <Fragment>
        <Provider store={store}>
            <div className='ContainerFilters'>

                <div id='FilterTemp'>
                    <p>Filter by temporament</p>
                    <select
                        id="comboTemp"
                        name="tempId"
                        className="form-control"
                        onChange={onTempChange}
                    >
                        {temperamntsApi.map((temp) => {
                        return (
                            <option key={temp.name} value={temp.name}>
                            {temp.name}
                            </option>
                        );
                        })}
                    </select>
                </div>

                <div id='FilterAPIYDB'>
                    <p>Filter if is from API or DB</p>
                    <select
                        id="comboOrigin"
                        name="originId"
                        className="form-control"
                        onChange={onOriginChange}
                    >
                        <option key="api" value="api">
                            API
                        </option>
                        <option key="db" value="db">
                            DB
                        </option>
                    </select>
                </div>
    

                <div id='FilterWeightAZ'>
                    <p>Order by</p>
                    <select
                        id="comboOrigin"
                        name="originId"
                        className="form-control"
                        onChange={onOrderChange}
                    >
                        <option key="name_asc" value="name_asc">
                        A - Z
                        </option>
                        <option key="name_dsc" value="name_dsc">
                        Z - A
                        </option>
                        <option key="weight_asc" value="weight_asc">
                        Weight asc
                        </option>
                        <option key="weight_dsc" value="weight_dsc">
                        Weight desc
                        </option>
                    </select>
                </div>

                <button
                    id="BtnClear"
                    name="BtnClear"
                    className="form-control"
                    onClick={onClear}
                    >Clear Filters and Order by
                </button>
            </div>
        </Provider>
    </Fragment>
  )
}

export default FilterAndOrderBar;