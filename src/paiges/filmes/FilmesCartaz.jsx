import React from 'react'
import { useState, useEffect } from 'react'
import { Col,Card,Row,Body } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesCartaz = () => {
    const[filmes, setFilmes] = useState([])

   useEffect(()=>{
       const promessa = apiFilmes.get('movie/now_playing?language=pt-BR')
       promessa.then(resultado=>{
        setFilmes(resultado.data.results)
       })

   },[])

  return (
    <div>
    <h1>Filmes Cartaz</h1>
      
    {filmes.length === 0 && <h1>Carregar... Aguarde</h1>}

<Row>
{filmes.map(item => (
        <Col key = {item.id} md={3} className='mb-3'>
            <Card>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
            <Card.Body>
                <Card.Title><strong>Titulo: </strong>{item.title}</Card.Title>
                <Link className='btn btn-danger' to={"/filmes/" + item.id} > Ver detalhes </Link>
            </Card.Body>
            </Card>
        </Col>
      ))}
</Row>



    </div>
  )
}

export default FilmesCartaz 