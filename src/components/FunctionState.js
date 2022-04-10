import React, { useState } from "react";


function FunctionState() {

    //useState permet de declarer des stocker un stat dans une function ajout de la v16
    const [counter, setCounter] = useState(0)
    //1 value du state       2 function qui intéragie avec le state           3

    /*equilavant de :
    (1) state={
        counter:0       (3)
    }

    equilavant de
   (2) this.setState(prevState=>{
        mise a jour de la donner du state
        counter : prevState +1
    })*/

    console.log(counter)

    return (<div>

        <h1>Fonction  {counter}</h1>
        <button onClick={()=>setCounter(prevCounter=>prevCounter+1)}>Ajout +1</button>



    </div>);
}

export default FunctionState;