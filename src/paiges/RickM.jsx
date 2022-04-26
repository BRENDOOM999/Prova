import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiRick from './../services/apiRick'

const RickM = () => {
    

    const [personagem, setPersonagens] = useState([])

    
    useEffect(() => {
        apiRick.get('character/?language=pt-BR').then(resultado => {
            console.log(resultado.data)
            setPersonagens(resultado.data.results)
        })
    }, [])

  return (
    <div>
        
        <h1>personagem </h1>

        { !personagem.length && <h1>Carregando... Aguarde</h1>}

        
<Row xs={1} md={4} className="g-4">
{personagem.map(item => (
    <Col >
        <Card>
            <Card.Img variant="top" src={item.image } />
            <Card.Body>
                    <Card.Title>Nome: {item.name} </Card.Title>
                    <Card.Text>Especie: {item.species}</Card.Text>

                    <Link className="btn btn-danger" to={'/personagens/' + item.id}>
                        Ver Detalhes
                    </Link>

            </Card.Body>
        </Card>
    </Col>
))}
</Row>


    </div>
)
}

export default RickM