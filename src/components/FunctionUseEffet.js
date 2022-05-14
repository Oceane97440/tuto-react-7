import React,{useState,useEffect} from 'react'

function FunctionUseEffet() {


    const [counter, setCounter] = useState(0)

    //equivalant au componentdidmount
    useEffect(()=>{

        //componentdidupdate équivalant , methode s'enclanche après 5sec suite à la maj du state (conter)
        setTimeout(() => {
            document.title=`Nbr titre ${counter}`

        }, 5000);
    })


  return (
    <div>FunctionUseEffet {counter}


    <button onClick={()=>setCounter(prevCounter=>prevCounter+1)}>Ajout +1</button>

    </div>
    
  )
}

export default FunctionUseEffet