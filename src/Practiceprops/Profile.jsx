//o	Build a UserProfile component that accepts username, email, and age as props. Display these details in a list format.
//o	Use prop-types to validate that the username is a string, email is a string, and age is a number.
import PropTypes from 'prop-types'

export const UserProfile=({username,email,age})=>{
    return(
        <div>
    <ol>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
    </ol>
        </div>
    )
}
UserProfile.propTypes={
  username:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  age:PropTypes.number.isRequired,
}

// function App() {
//     return (
//       <UserProfile username="Versha" email="versha68@gmail.com" age={22}/>
//      )
//    }
   