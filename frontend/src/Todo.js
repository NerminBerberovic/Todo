import React from 'react'
import { useState } from "react"

import {AiFillDelete} from "react-icons/ai"
import {AiOutlineCheck} from "react-icons/ai"


const Todo = ({text, removeTodo}) => {
  const [color, setColor] = useState(true)

  const switchColor = () =>{
    setColor(false)
  }

  const switchColorAgain = () =>{
    setColor(true)
  }

  return (

    <div className={color ? "todo" : "todo2"} >
        <div className='text'>{text}</div>     
        <div className='icons'> 
        <AiFillDelete className='icon' onClick={()=>removeTodo()}/>
        <AiOutlineCheck className='icon' onClick={()=>switchColor()} onDoubleClick={()=>switchColorAgain()}/>
        </div>
    </div>
  )
}

export default Todo
