//Create a ProfileCard component that accepts a user prop. The user object should include properties like name, age, and 
//bio. Render the user’s information and conditionally display an "Edit" button if the user is an admin.
export const ProfileCard=({user})=>{
    const role=user.role==="admin";
    return(
        <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.bio}</h1>
            {role==="admin" &&<button type="button">Edit Button</button>}
        </div>
    )
}
// function App() {
//     const users={
//       name:'versha',
//       age:22,
//       bio:'Graduate Student',
//       role:"admin",
//     }
//    return (
//     <ProfileCard user={users} />
//     )
//   }