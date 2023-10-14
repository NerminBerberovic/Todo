import React, { useState, useEffect } from "react"
import Section from "./Section"
import axios from "axios"
import "./Style.css"

//import Todo from "./Todo"
//import { deleteTodo } from './HandleApis'
import List from "./List"



function App() {
  const [text, setText] = useState("")
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    async function fetchData() {
        try{
            const { data } = await axios.get("http://localhost:8000")
            setTodoList(data)
        }
        catch(e) {
            console.log(e)
        }
    }
    fetchData()

  })


  const addTodo = async () => {
        
    try{
        await axios.post("http://localhost:8000/add", { text })
        setText("")
        
    }
    catch(e) {
        console.log(e)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Section>
            <h1>Todo App</h1>
        </Section>
            
        <Section>
            <div className='top'>
                    <input type="text"
                        value={text} 
                        onChange={(e)=>{setText(e.target.value)}}
                        placeholder='Enter Todo'
                    /> 
                    <div onClick={addTodo} className="add"> Add </div>
            </div>
        </Section>

        <Section>
                <List 
                list={todoList}
                />  
        </Section>
      </div>
    </div>
  )
}

export default App;
