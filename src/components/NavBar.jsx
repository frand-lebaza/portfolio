import styled from "styled-components";
import { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo>FranDev</Logo>

            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>

            <Menu open={isOpen}>
                <MenuItem href="#">Inicio</MenuItem>
                <MenuItem href="#">Tecnologías</MenuItem>
                <MenuItem href="#">Portafolio</MenuItem>
                <MenuItem href="#">Servicios </MenuItem>
                <MenuItem href="#">Contacto</MenuItem>
                <MenuItem href="#">Redes</MenuItem>                
            </Menu>
        </Nav>
    );
}

export default NavBar;

// Contenedor principal
const Nav = styled.nav`
  height: 60px;
  padding: 0 20px;
  background: #15151bff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

// Logo
const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Botón menú hamburguesa
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: white;
    margin: 4px 0;
    border-radius: 5px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Menú de navegación
const Menu = styled.div`
  display: flex;
  gap: 20px;  

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: #33333aff;
    flex-direction: column;
    align-items: center;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;

// Items del menú
const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  padding-block: 5px;

  &:hover {
    color: #b785d4ff;
  }
`;

