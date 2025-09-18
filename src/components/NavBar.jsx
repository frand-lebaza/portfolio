import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo1 from '../media/frandia.jpg';

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Función para navegar a secciones
  const handleSectionClick = (sectionId) => {
    setOpen(false); // Cerrar menú móvil

    if (location.pathname === '/') {
      // Si ya estamos en home, solo hacer scroll
      scrollToSection(sectionId);
    } else {
      // Si estamos en otra página, navegar a home y luego hacer scroll
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Nav ref={navRef} scrolled={scrolled}>
      <Hamburger onClick={() => setOpen(!open)} scrolled={scrolled}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Logo to="/">
        <img src={scrolled ? logo1 : logo1} alt="Logo" />    
        <Name>Frand Lebaza</Name>  
      </Logo>
      <div className="car-shop">

        <NavLinks open={open} scrolled={scrolled}>
          <NavLink scrolled={scrolled} to="/" onClick={() => setOpen(false)}>Inicio</NavLink>
          <NavLink scrolled={scrolled} to="/muebles" onClick={() => setOpen(false)}>Tecnologías</NavLink>
          <NavLink scrolled={scrolled} to="/poltronas" onClick={() => setOpen(false)}>Servicios</NavLink>          
          <NavLink scrolled={scrolled} to="/comedores" onClick={() => setOpen(false)}>Redes</NavLink>
          <NavLink scrolled={scrolled} to="/sofa-camas" onClick={() => setOpen(false)}>Sofa Camas</NavLink>                 
        </NavLinks>        
      </div>
    </Nav>
  );
}

export default NavBar;

// Contenedor principal
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 97%;
  background-color: ${({ scrolled }) => (scrolled ? "#2422224d" : "#2422224d")};
  color: ${({ scrolled }) => (scrolled ? "white" : "white")};
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;  
  z-index: 1000;
  height: 60px;
  border-bottom: ${({ scrolled }) => (scrolled ? "1px solid #2422224d" : "")};
  transition: all 0.3s ease;

  .car-shop{
    display: flex;
    justify-content: end;
    align-items: center; 
  }
`;

// Logo
const Logo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;  
  

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    transition: all 0.3s ease;
    border-radius: 50%;
  }
`;

//Name
const Name = styled.span`
  font-family: "Poppins", sans-serif; 
  font-size: 1.5rem; 
  font-weight: 600; 
  color: #dfe0e1ff;
  letter-spacing: 1px;

  /* Animación suave al cargar */
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

`;

// Contenedor de enlaces
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  font-size: 16px;

  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background-color: ${({ scrolled }) => (scrolled ? "#f0f0f0" : "#333")};
    flex-direction: column;
    padding: 1rem;
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`;

// Enlace individual (para rutas)
const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
  display: flex;
  justify-content: center;
  align-items: center; 

  &:hover {
    color: ${({ scrolled }) => (scrolled ? "#555" : "#ddd")};
  }
`;

// Enlace para secciones (no es un Link de React Router)
const SectionLink = styled.div`
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
  display: flex;
  justify-content: center;
  align-items: center; 

  &:hover {
    color: ${({ scrolled }) => (scrolled ? "#555" : "#ddd")};
  }
`;

// Botón hamburguesa
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: ${({ scrolled }) => (scrolled ? "black" : "white")};
    margin-bottom: 4px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;