//Develop a MultiSelect component that takes an array of options as a prop. Render a dropdown that allows users to
// select multiple options. Use props to manage the selected options and display them above the dropdown.
import { useState } from "react";
export const MultiSelect=({array})=>{
const[getOption,setGetOption]=useState([]);
const handle=(e)=>{
    const choose=Array.from(e.target.selectedOptions).map(x=>x.value);
    setGetOption(choose);
}
    return(
        <div>
    <h1>Your Array Options are:-</h1>
    <div>
        <select multiple value={getOption} onChange={handle}>
            {array.map((x,index)=>(
                <option key={index} value={x}>{x}</option>
            ))}
        </select>
        <p>Your selected array options are:- {getOption.join(',')||'None'}</p>
    </div>
        </div>
    )
}