import './App.css';
import data from "./data.json"

export default function Auth() {
  return (
    <div>
      <form name='myForm'>
        Email <input id="myEmail" required type="email" ></input>
        Password <input id="myPassword" required type="password"></input>
        <button id="myButton" type="submit">Submit!</button>
      </form>
      
    </div>
    
  )
}

let myButton = document.getElementById("myButton")
myButton.addEventListener("click", checkAuth)

function checkAuth () {
  let myEmail = document.getElementById("myEmail").value
  let myPassword = document.getElementById("myPassword").value
  data.push (myEmail + myPassword)

}
