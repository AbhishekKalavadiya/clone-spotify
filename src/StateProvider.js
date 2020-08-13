import React, {
    createContext,
    useContext,
    useReducer
} from 'react'

//prepares the StateProvide for what to come 
export const StateProviderContext = createContext() 

//wraps the App components
export const StateProvider = ({ 
    initialState, 
    reducer, 
    children }) => (

        <StateProviderContext.Provider value={useReducer(reducer, initialState)} >
            {children}
        </StateProviderContext.Provider>
    )

 //get value from StateProvider or dispatch action to it, some kind of way to getting access to it   
export const StateProviderValue = () => useContext(StateProviderContext)    