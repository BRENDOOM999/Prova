import React, { useEffect, useState } from 'react'
import apiRick from './../services/apiRick'
import Objetos from './Objetos'

const Carros = () => {

  const [xxxx, setXxxx] = useState([])

  useEffect(() => {
    apiRick.get('character/').then(resultado => {
        console.log(resultado.data)
        setXxxx(resultado.data.arraydoObjetos)
    })
}, [])


  return (
    <div>
<p>Codigo base ara pagina</p>

    </div>
  )
}

export default Carros