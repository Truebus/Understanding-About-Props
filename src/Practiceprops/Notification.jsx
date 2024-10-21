//Create a Notification component that accepts a message and type (e.g., "success", "error", "info") as props. 
//Render the notification with different styles based on the type. Include a button to dismiss the notification.
import { useState } from "react"
export const Notification=({message,type})=>{
    const [visible,setVisible]=useState(true);
const styles={
    success:{color:"green",},
    error:{color:"red"},
    info:{color:"black"}
}
if(!visible) return null;
const style=styles[type]||{color:"orange"};
const handle=()=>{
    setVisible(false)
}
    return(
        <div style={style}>
    <h1>{message}</h1>
    <button onClick={handle}>Hide Me</button>
        </div>
    )
}