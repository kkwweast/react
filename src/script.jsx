import{usaState} from "react"

export default function Exercise () {
    return }

const[text, setText] = useState("");
const[todoList,setTodoList] =useState(["Ready", "Set","Go"]);



 function HophopThing(ev) {
    ev.preventDefault();
    setTodoList({...todoList, text});
 }


  < div>   
       <h1>React State exercise</h1>
        <form onSubmit={(ev)=> {  
            ev.preventDefault();
            setTodoList{[...todoList, text]}; 
            setText("")
        }}>


<label html="HophopThing"
<input types="text" value="text" onChange{(ev)=>setText(eve.target.value)/>
value={text}
placeHolder="Next Task"
type="text"
onChange={(ev)}=> setText(ev.target.value);
id="todoListInput"
name="todoListInput"

)
<button>Add Items</button>
 </form>



 <ul>

{todoList.map((element, index) => {
    return <li>key={index}>{element}</li>
})}

  </ul>     
   
   </div>
    
     
}







