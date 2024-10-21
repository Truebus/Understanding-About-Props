//Build a Tabs component that takes an array of tab objects (with title and content properties) as a prop. 
//Render the tabs and display the content of the active tab. Use props to manage which tab is currently active.
import { useState } from "react"
export const Tabs=({data})=>{
    const[active,setActive]=useState(data.length>0?data[0].id:null);
    const handle=(id)=>{
   setActive(id);
    }
    return(
     <div>
        {data.map((x)=>(
            <div>
                <ul>
                    <li key={x.id} onClick={()=>handle(x.id)}>{x.title}</li>
                </ul>
            </div>
        ))}
        <div>
            {data.map((x)=>
            active===x.id?<p>{x.content}</p>:null)}
        </div>
     </div>
    )
}