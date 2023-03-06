import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { GET_ALL_CHARACTERS } from './actionType'

const getallcharacter = ()=>{ //esta fn retorna otra fn
    return (dispatch)=>{

        fetch('https://rickandmortyapi.com/api/character/')
        .then(response=>response.json())
        .then(data => {
            return dispatch({
                type: GET_ALL_CHARACTERS, payload:data.results}
            )
        })

    }
}


export default action