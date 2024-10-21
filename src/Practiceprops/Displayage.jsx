//o	Build a component called AgeDisplay that takes an age prop and displays a message based on the age (e.g., "You are {age} years old.").
//o	If the age is not provided, display "Age not specified."

export function AgeDisplay({age}){
    return(
        <h1> {age !==undefined?`You are${age} Years Old`:"age is not specified"}</h1>
    )
}
AgeDisplay.defaultProps={
    age:undefined,
}
export default AgeDisplay;