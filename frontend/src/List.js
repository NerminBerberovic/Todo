import React from "react"
import Todo from "./Todo"
import { removeTodo } from './HandleApis'



const List = ({ list }) => {
    const renderedList = list.map((item) => (
    <Todo
        text={item.text} 
        key={item._id}
        removeTodo={()=>removeTodo(item._id)}
    />)
    )

    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    )
}

export default List