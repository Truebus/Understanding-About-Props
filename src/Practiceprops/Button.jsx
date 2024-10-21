//o	Create a Button component that takes a label and an onClick 
//function as props. When the button is clicked, it should call the provided onClick function.

export const Button = ({ label, onClick }) => {
    return (
        <div>
            <h1>{label}</h1>
            <button type="button" onClick={onClick}>Click Me</button>
        </div>
    )
}
// Button label="Hello" onClick={()=>console.log("Good Morning")