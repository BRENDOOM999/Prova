import { useState, useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {
    

    const params = useParams()
    const[filmes, setFilmes] = useState({})
    const[atores, setAtores] = useState([])
  


    useEffect(()=>{
        const promessa = apiFilmes.get('movie/' +params.id + '?language=pt-BR')
        promessa.then(resultado=>{
            setFilmes(resultado.data)
        })


        apiFilmes.get('movie/' +params.id +  '/credits?language=pt-BR').then(resultado=>{
            setAtores(resultado.data.cast)
        })

        apiFilmes.get('movie/' +params.id +  '/credits?language=pt-BR').then(resultado=>{
            setAtores(resultado.data.cast)
        })
 
    },[])



    
  return (
   
   
    <div>

   {filmes.id &&

     <div>
        <h1>{filmes.title}</h1>
        <Row>
                <Col  md={4}>
                    <Card>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filmes.poster_path} />
                    </Card>
                </Col>
                <Col md={8}>
                    <p><strong>Título Original: </strong>{filmes.original_title}</p>
                    <p><strong>Popularidade: </strong>{filmes.popularity}</p>
                    <p><strong>Data de Lançamento: </strong>{filmes.release_date}</p>
                    <p><strong>Sinopse: </strong>{filmes.overview}</p>
                    <p><strong>Genero: </strong>

                    {filmes.genres.map(item => (
                                 <p>{item.name}</p>
                    ))}
                    </p>
                    <Link className='btn btn-danger' to={-1 }> VOLTAR </Link>

                </Col> 
                <Col md={12} className='mt3'>
                <h1>Atores</h1>
                </Col>

                <Row>
                    {atores.map(item => (
                      <Col className="mb-3" md={2} key={item.id}>
                            <Link to={'/atores/' + item.id}>
                                  <Card title={item.name}>
                                   <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                               </Card>
                         </Link>
                    </Col>
                      ))}
              </Row>

        </Row>
        
        </div>
                    }
    </div>


  )
}

export default FilmesDetalhes