import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'

const DeputadosDetalhes = () => {

    const params = useParams()
    const [deputado, setDeputado] = useState({})
   


    useEffect(() => {
        apiDeputados.get('deputados/' + params.id ).then(resultado => {
            setDeputado(resultado.data.dados)
        })
     
    }, [])

    return (
        <div>
            {!deputado.id && <h1>Carregando... Aguarde!</h1>}

            {deputado.id &&
                <div>
                    <h1>{deputado.nome}</h1>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={'https://www.camara.leg.br/internet/deputado/bandep/' + deputado.urlFoto} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <p><strong>Partido: </strong>{deputado.siglaPartido}</p>
                            <p><strong>Estado: </strong>{deputado.siglaUf}</p>
                            <p><strong>Email </strong>{deputado.email}</p>

                            <Link className='btn btn-danger' to={-1 }> VOLTAR </Link>
                        </Col>


                       
                    </Row>
                    
                </div>
            }
        </div>
    )
}

export default DeputadosDetalhes