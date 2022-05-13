import React, { useState } from "react";

const AddTodo = ({addnewItem}) => {




    const [AddTodo, setAddTodo] = useState('');



    const saveData = (e) => {
        //evite le rechargement apres submit
      
        console.log("ok")
        console.log(AddTodo)


        //la champ de caratère sera vide dans input apres submit
        if(AddTodo!=''){
            e.preventDefault()
            addnewItem(AddTodo)
            setAddTodo('')

        }

    }
     
//onChange recup la valeur saisi du input

    return ( 
    <form onSubmit={saveData}>
        <label>Form</label>
        <input type="text" onChange={(e) => {
        setAddTodo(e.target.value)
        }}/>
        <button type="submit">Valider</button>

    </form> );
}
 
export default AddTodo;