import React from 'react'

const Arrey = () => {

  const carros = [
    'Fusca', 
    'Gol', 
    'Celta', 
    'Corola'
  ]


  const pessoas = [
    'Daniel', 
    'Paulo',
    'Gustavo', 
    'Vitor'
  ]

  return (
    <div>
      
      <h1>Array</h1>

      {
       carros.map(item => (
        <p>{item}</p>   
       ))
      }
       
       <h1>Pessoas</h1>

       <ul>
      {pessoas.map(item=>(
          <li>{item}</li>
        ))}
      </ul>

      
      
      </div>
  )
}

export default Arrey