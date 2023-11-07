import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

//import "./Styles.css";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar class="d-flex justify-content-evenly" color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/home">
        Home
      </NavbarBrand>
      <NavbarBrand tag={Link} to="/Produtos">
        Produtos
      </NavbarBrand>
      <NavbarBrand tag={Link} to="/Kits">
        Kits
      </NavbarBrand>
      <NavbarBrand tag={Link} to="/Fornecedores">
        Fornecedores
      </NavbarBrand>
      <NavbarBrand style={{ justifyContent: "flex-end" }}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            usuario
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/Login">login</Dropdown.Item>
            <Dropdown.Item href="/Cadastro">Cadastrar</Dropdown.Item>
            <Dropdown.Item href="#/home">Sair</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </NavbarBrand>

      <NavbarToggler
        onClick={() => {
          console.log("menu aberto"); //click no tres tracos
          setIsOpen(!isOpen);
        }}
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="justify-content-end"
          style={{ width: "100%" }}
          navbar
        ></Nav>
      </Collapse>
    </Navbar>
  );
};
export default AppNavbar;
