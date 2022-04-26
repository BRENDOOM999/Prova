import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'

const Cartao = (props) => {

     console.log(props)

  return (
    <div>

<Col>
    <Card style={{ width: '15rem' }}>
      <Card.Img height={160.88} variant="top" src={props.imagem} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.conteudo}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>


    </div>
  )
}

export default Cartao