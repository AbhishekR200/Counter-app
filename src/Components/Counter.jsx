import React,{useState} from 'react'

function Counter() {
    const[counter,setCounter] = useState(0)
    function incrementCounter(){
        setCounter(counter+1)
    }
    function decrementCounter(){
        if(!counter==0)
        setCounter(counter-1)
    }
    function resetCounter(){
        setCounter(0)
    }

  return (
<div>
        <div className='text-center'>
            <h1 className='m-3'> Counter Application</h1>
            <h1>{counter}</h1>
            <button onClick={incrementCounter} className='btn btn-primary m-3'>increment</button>
        
       
        <button onClick={decrementCounter} className='btn btn-danger m-3'>decrement</button>
      
        
        <button onClick={resetCounter} className='btn btn-primary m-3'>reset</button>
        </div>
        
      
    </div>
  )
}

export default Counter