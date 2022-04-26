import React from 'react'
import { Navbar, Nav, Container, Dropdown, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>



      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/carros">Carros</Link>
          <Link className="nav-link" to="/arrey">Arrey</Link>
          <Link className="nav-link" to="/objetos">Objetos</Link>
          <Link className="nav-link" to="/contador">Contador</Link>
          
          <NavDropdown title="Filmes" className="show" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/filmes/populares">Filmes Populares</Link>
            <Link className="dropdown-item" to="/filmes/lancamento">Filmes Lançamento</Link>
            <Link className="dropdown-item" to="/filmes/cartaz">Filmes Cartaz </Link>
          </NavDropdown>

          <Link className="nav-link" to="/telainicial">Deputados</Link>
          <Link className="nav-link" to="/rickm">Rick end Morty</Link>



        </Nav>
        </Container>
      </Navbar>


    </div>


  )
}

export default Menu
