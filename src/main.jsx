
import MyButton from './components/MyButton';
import  './App.css'

function App() {
  

  }

  //let x = "";
  // if (!user.loggedIn){
    // x = "Click here to login;"
    //}else { 
    //  x = "Welcome", + user.name;
    // }
    const list = ["apple", "pears", "bananas"];
}

  let x ="Dont Click Me!";

  return ( 
  <div>
    <h1 className='myCoolClass'>Welcome to my app</h1>
  
    <MyButton/>
    list.map((element, index, array) => {
      return <li key={index}+{element}li>
    })
    {user.loggedIn ? <p>Welcome, user</p> : <p>Clicl here to login</p>}
    
  </div>
  )

export default App

//Dom Manipulation

list.forEach((item) => {
  //1.Create the elelments
  const newLI = document.createElement("li");
  //2. Modify the elements
  newLI.textContent = items;
  //3. Append the elements
  document.body.append(newLI);
});
