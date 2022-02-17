import React, { createContext } from 'react';
import axios from 'axios';
import AppReducer from "./AppReducer";


const initialState = {
  characters: []
}




export const GlobalContext = createContext(initialState);
