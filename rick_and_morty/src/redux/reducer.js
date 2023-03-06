import React from 'react'
import { GET_ALL_CHARACTERS } from './actionType'


const initialState= {
    characters: [],
    characterDetail: {}
}

const reducer = (state= initialState,action) => {
  switch (action.type){
    case GET_ALL_CHARACTERS:
        return {
            ...state,
             characters:action.payload}



    default:
        return{
            ...state
        }
  }
}

export default reducer