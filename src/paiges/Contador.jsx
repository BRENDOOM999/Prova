import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Contador = () => {

    //let numero = 0;
    let [numero, setNumero] = useState(0)
    function somar(){
        setNumero(++numero)
        console.log(++numero)
    }

    function sub(){
        setNumero(--numero)
        console.log(--numero)
    }

  return (
    <div>
        <h1>Contador</h1>

        
        <Button variant="dark" onClick={somar}>+</Button>{' '}
         
        {numero}
        
        <Button variant="danger" onClick={sub}>-</Button>{' '}

    </div>
  )
}

export default Contador