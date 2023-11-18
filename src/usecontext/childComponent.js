import React, { useContext } from "react";
import { MyContext } from "./parentComponent";
export default function ChildComponent()
{
    const context =useContext(MyContext);
    return(
        <div>
            <h1>useContext Example:</h1>
            <hr/>
            <h2>{context}</h2>
        </div>
    )
}