import React from 'react'
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagina1 = () => {


  return (
    <div>

    <Container className= 'mb-2'>


    <Row>
    <Col>
      <Card style={{ width: '15rem' }}>
      <Card.Img height={160.88} variant="top" src="https://t.ctcdn.com.br/1m0v5EpeYS02cDt51JXPKd5VISE=/1024x0/smart/i551223.jpeg" />
      <Card.Body>
        <Card.Title>Cavaleiro da lua</Card.Title>
        <Card.Text>
        Dia 30 de março estreia a série do cavaleiro da lua na Disney +, uma série diferente de tudo que a marvel studios já fez.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      
    <Col>
    <Card style={{ width: '15rem' }}>
      <Card.Img height={160.88} variant="top" src="https://portalpopline.com.br/wp-content/uploads/2022/02/batman-poster-novo.jpg" />
      <Card.Body>
        <Card.Title>Batman</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '15rem' }}>
      <Card.Img height={160.88} variant="top" src="https://t.ctcdn.com.br/fgFiOIUY9viJNdil2BTB4mA7xoM=/512x288/smart/filters:format(webp)/i518310.jpeg" />
      <Card.Body>
        <Card.Title>Doutor Estranho</Card.Title>
        <Card.Text>
          Doutor estranho sera um marco dentro do MCU, depois de homem aranha ele mudara os sentidos do universo.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>


    <Col>
    <Card style={{ width: '15rem'  }}>
      <Card.Img  height={160.88} variant="top" src="https://disneyplusbrasil.com.br/wp-content/uploads/2021/04/Thor-Love-and-Thunder-Matanca-1-1024x576.jpg" />
      <Card.Body>
        <Card.Title>THOR</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
        
    </div>
  )
}

export default Pagina1