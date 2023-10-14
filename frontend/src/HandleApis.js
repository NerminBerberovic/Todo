import axios from "axios"


  const removeTodo = async ( _id) => {
        
    try{
        await axios.post("http://localhost:8000/delete", { _id })

    }
    catch(e) {
        console.log(e)
    }
  }

  export {removeTodo}
