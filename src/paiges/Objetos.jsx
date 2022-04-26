import React from 'react'
import { Button, Container, Card, Row, Col } from 'react-bootstrap';

const Objetos = () => {
    

      const carros = [
        {
        marca:'VW', 
        modelo:'Fusca', 
        cor:'Azul', 
        ano: 1980, 
        foto:'https://motortudo.com/wp-content/uploads/2021/09/Fusca-1972-Fusca-antigo-30.jpg',
        },

        {
          marca:'BMW', 
          modelo:'X5', 
          cor:'Branco', 
          ano: 2002, 
          foto:'https://images.noticiasautomotivas.com.br/img/f/bmw-x5-m50d-2015-1.jpg',
          },
          
          {
            marca:'BMW', 
            modelo:'X5', 
            cor:'Branco', 
            ano: 2002, 
            foto:'https://images.noticiasautomotivas.com.br/img/f/bmw-x5-m50d-2015-1.jpg',
            },

            {
              marca:'BMW', 
              modelo:'X5', 
              cor:'Branco', 
              ano: 2002, 
              foto:'https://images.noticiasautomotivas.com.br/img/f/bmw-x5-m50d-2015-1.jpg',
              },

              {
                marca:'BMW', 
                modelo:'X5', 
                cor:'Branco', 
                ano: 2002, 
                foto:'https://images.noticiasautomotivas.com.br/img/f/bmw-x5-m50d-2015-1.jpg',
                },

                {
                  marca:'BMW', 
                  modelo:'X5', 
                  cor:'Branco', 
                  ano: 2002, 
                  foto:'https://images.noticiasautomotivas.com.br/img/f/bmw-x5-m50d-2015-1.jpg',
                  },

                  {
                    marca:'BMW', 
                    modelo:'X5', 
                    cor:'Branco', 
                    ano: 2002, 
                    foto:'https://images.noticiasautomotivas.com.br/img/f/bmw-x5-m50d-2015-1.jpg',},
    ]



  return (
    <div>
    <h1>Objeto</h1>
    <h2>Carros</h2>

  <Row xs={1} md={4} className="g-4">
  {carros.map((item) => (
    <Col>
      <Card>
        <Card.Img height= {180.88} variant="top" src= {item.foto} />
        <Card.Body>
          <Card.Text>
          <p><strong>Marca:</strong>{item.marca}</p>
          <p><strong>Modelo:</strong>{item.modelo}</p>
          <p><strong>Cor:</strong>{item.cor}</p>
          <p><strong>Ano:</strong>{item.ano}</p>
          </Card.Text>
          <Button variant="danger">Ver detalhes</Button>
        </Card.Body>
        
      </Card>
    </Col>
  ))}
</Row>
      
    



    

    </div>
  )
}

export default Objetos