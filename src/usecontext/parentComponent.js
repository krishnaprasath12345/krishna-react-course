import React from 'react'
import ChildComponent from './childComponent'
export const MyContext=React.createContext();
export default function ParentComponent(){
    return(
        <MyContext.Provider value="Hello World.!">
            <ChildComponent/>

        </MyContext.Provider>
    )
}