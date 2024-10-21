//o	Create a Card component that accepts title and content props. Style it as a card
// (with padding and border) and display the title in a header and the content in a paragraph.
export const Card=({title,content})=>{
    let style={
        padding:"20px",border:"2px solid black",minHeight:"300px",width:"90%"
        
    }
    return(
      <div style={style}>
        <header>
            <h1>{title}</h1>
        </header>
        <p>{content}</p>
      </div>
    )
}
// import './App.css'
// import { Card } from './Practiceprops/Card';



// function App() {
//  return (
//    <Card title="What is React?" content="React basically javascript library.It uses for develop websites either dynamic or static.
//    This language is easy,faster,flexible,etc."/>
//   )
// }

// export default App;