import React, { useState } from "react";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';
const Todo = () => {


    const [todos, setTodos] = useState([
        {id:1,titre:"Gestion bdd"},
        {id:2,titre:"Devop"},
        {id:3,titre:"Reunion"},


    ]);

    const List = todos.map(todo => {
        return (<li key={todo.id}>{todo.titre}</li> );
    })

    //uudi package pour génrer des id auto
    const AddNewTodo = (addItem) => {
        setTodos([...todos,{
            id:uuidv4(),
            titre:addItem
        }

        ])
    };

    return ( 
    <div>
        <h1>Ma liste obj</h1>
        {List}

        <AddTodo addnewItem={AddNewTodo}/>
    </div> 
    );
}
 
export default Todo;

