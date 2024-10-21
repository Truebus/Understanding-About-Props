//o	Create a Greeting component that accepts a name prop. It should display "Hello, {name}!".
//o	If no name is provided, it should default to "Hello, Guest!".
export function Greeting(props){
    return(
        <h1>Hello {props.name}</h1>
    )
}
Greeting.defaultProps={
    name:"Guest",
};
export default Greeting;