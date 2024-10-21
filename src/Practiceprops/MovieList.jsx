//Build a MovieList component that accepts an array of movie objects as a prop. Implement a filter dropdown to
// filter movies by genre. Render the filtered list of movies based on the selected genre.
import { useState } from "react"
export const MovieList=({movie})=>{
const[showgenere,setShowgenere]=useState('All');
const fun=(e)=>{
    setShowgenere(e.target.value);
}
const filtered=showgenere==="All"?movie:movie.filter((x)=>x.genere===showgenere);
    return(
        <div>
    <h1>Movie Lists:-</h1>
    <select value={showgenere} onChange={fun}>
        <option value="All">All</option>
        <option value="Action">Action</option>
        <option value="Romance">Romance</option>
        <option value="Comedy">Comedy</option>
        <option value="Family-Drama">Family-Drama</option>
    </select>
    <ul>
        {filtered.map((x)=>(
    <li key={x.id}>{x.title}</li>
        ))}
    </ul>
        </div>
    )
}