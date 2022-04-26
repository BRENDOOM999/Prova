import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiRick from '../../services/apiRick'


const PersonagensDetalhes = () => {
  
    const params = useParams()
  const [personagemm, setPersonagem] = useState({})

  useEffect(() => {
    apiRick.get('character/' + params.id + '?language=pt-BR').then(resultado => {
        
        setPersonagem(resultado.data)
    })
}, [])


  return (
    <div>
      {!personagemm.id && <h1>Carregando... Aguarde!</h1>}

{personagemm.id &&
<div>
  <Container>
  <h1>{personagemm.name}</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant='top' src= {personagemm.image} />
          </Card>
        </Col>
        <Col md={8}>
          <h2>Status:</h2>
          <p>{personagemm.status}</p>
          <h2>Species:</h2>
          <p>{personagemm.species}</p>
          <h2>Gender: </h2>
          <p>{personagemm.gender}</p>
          

          <h2>Type:</h2>
          <p>{personagemm.type}</p>
          

          <Link className='btn btn-primary' to={-1}>Voltar</Link>
          
          
        </Col>

              
            </Row>
        </Container>
      </div>
    }
    </div>
  )
}

export default PersonagensDetalhes