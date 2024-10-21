//Create an FAQ component that takes an array of questions and answers as a prop. Render each question, and when clicked,
// expand to show the corresponding answer. Use props to manage the state of which question is currently expanded.

import { useState } from "react"
export const Faq=({lists})=>{
    const[ques,setQues]=useState(null);
    const click=(id)=>{
setQues(ques===id?null:id)
    }

    return(
     <div>
          {lists.map((x)=>(
        <div>
        <h1  key={x.id} onClick={()=>click(x.id)}>{x.question}</h1>
        {ques === x.id && <p>{x.answer}</p>} {/* Use x.id and x.answer */}
        </div>
      ))}
    </div>
    )
}

// function App() {
//   const data=[{
//     id:1,
//     question:"What is React?",
//     answer:"React is a Js Library which is helpful to develop interactive websites."
//   },{
//     id:2,
//     question:"What is Componenet?",
//     answer:"A Componenet is a foundation of UI.Everything in the websites are UI componenets.",
//   },{
//     id:3,
//     question:"What is Hooks?",
//     answer:"A Hook allows to hook the react features and states.It replaces the class."
//   }]
//    return (
//     <Faq lists={data}/>
//     )