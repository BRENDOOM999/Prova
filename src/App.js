
import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Carros from './paiges/Carros';
import Objetos from './paiges/Objetos';
import Arrey from './paiges/Arrey';
import Contador from './paiges/Contador';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import FilmesPopulares from './paiges/filmes/FilmesPopulares';
import FilmesDetalhes from './paiges/filmes/FilmesDetalhes';
import FilmesCartaz from './paiges/filmes/FilmesCartaz';
import FilmesLancamento from './paiges/filmes/FilmesLancamento';

import AtoresDetalhes from "./paiges/atores/AtoresDetalhes";
import TelaInicial from './paiges/TelaInicial';
import DeputadosDetalhes from './paiges/deputados/DeputadosDetalhes';
import RickM from './paiges/RickM';
import PersonagensDetalhes from './paiges/personagens/PersonagensDetalhes';






  function App() {
    return (
      <div>

  <BrowserRouter>
  <Menu/>

  <Container>
    <Routes>
      <Route path="/" element={<Carros/>}/>
      <Route path="/carros" element={<Carros/>}/>
      <Route path="/objetos" element={<Objetos/>}/>
      <Route path="/arrey" element={<Arrey/>}/>
      <Route path="/contador" element={<Contador/>}/>
      
      <Route path="/filmes/populares" element={<FilmesPopulares/>}/>
      <Route path="/filmes/lancamento" element={<FilmesLancamento/>}/>
      <Route path="/filmes/cartaz" element={<FilmesCartaz/>}/>
      <Route path="/filmes/detalhes" element={<FilmesDetalhes/>}/>
      <Route path="/filmes/:id" element={<FilmesDetalhes/>}/>
      <Route path="/atores/:id" element={<AtoresDetalhes />} />

      <Route path="/telainicial" element={<TelaInicial />} />
      <Route path="/detalhesdeputados/:id" element={<DeputadosDetalhes/>} />

      <Route path="/rickm" element={<RickM/>} />
      <Route path="/personagens/:id" element={<PersonagensDetalhes/>} />
   

      

  
      

      
      
   

    </Routes>
    </Container>
  </BrowserRouter>




      </div>

    );
  }

  export default App;
