import styled, { keyframes } from "styled-components";
import photo from "../media/frand.JPG"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <>
      <MainContainer>
        <SectionContentY>
          <ContentOne>
            <Logo src={photo} alt="Logo" />
            <div className="text-container">
              <Name>Frand Lebaza</Name>
              <span className="text-profession">Desarrollador de software full stack</span>
            </div>

          </ContentOne>
          <ContentTwo>
            <span>Diseño y desarrollo productos digitales únicos: desde páginas web atractivas y apps escalables hasta chatbots inteligentes que potencian tu marca. Combino diseño, funcionalidad e inteligencia artificial para que destaques en el mundo online.</span>
          </ContentTwo>
          <ContentNetworks>
            <CardNetworks href="https://github.com/frand-lebaza">
              <LogoGit>
                <FaGithub />
              </LogoGit>
              <Text >GitHub</Text>
            </CardNetworks>
            <CardNetworks href="https://www.linkedin.com/in/frand-lebaza/">
              <LogoLink>
                <FaLinkedin />
              </LogoLink>
              <Text >LinkedIn</Text>
            </CardNetworks>
          </ContentNetworks>
        </SectionContentY>
      </MainContainer>
    </>
  );
}

export default Home;

// Estilo para el contenedor general

const MainContainer = styled.div`
 background-color: #0A0A10;
  min-height: 100vh;  
`;

const SectionContentY = styled.div`  
    display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    min-height: 100vh;
    margin-inline: 15%;

    @media (max-width: 760px) {
        flex-direction: column;           
        gap: 30px;       
        margin-inline: 0;   
    }
`;

const ContentOne = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;        
    border-radius: 20px;
    
    .text-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .text-profession{
            font-size: 25px;
            color: aquamarine;
              animation: fadeIn 1s ease-in-out;
        }
    }

    @media (max-width: 760px) {
    flex-direction: column;
        width: 80%;

        .text-container{
           align-items: center;
        }
         .text-profession{          
          text-align: center;
        }
    }
`;


const Logo = styled.img`  
    width: 100px;
    height: 100px;
    object-fit: cover;
    transition: all 0.3s ease;
    border-radius: 50%;
     
    @media (max-width: 760px) {    
        width: 200px;
        height: 200px;
    }
`;

const Name = styled.span`
  font-family: "Poppins", sans-serif; 
  font-size: 2rem; 
  font-weight: 600; 
  color: #e8ebeeff;
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

const ContentTwo = styled.div`
    border-bottom: 1px solid white;
    padding-bottom: 20px;
    text-align: justify;  
    color: #e8ebeeff;

    span{
      font-size: 1.5rem;
    }

    @media (max-width: 760px) {
        width: 90%;                       
        text-align: justify;  

        span{
          font-size: 18px;
        }
    }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px); /* salto hacia arriba */
  }
  60% {
    transform: translateY(-3px); /* rebote pequeño */
  }
`;

const CardNetworks = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: transparent; /* sin fondo */
  border-radius: 10px;
  padding: 0.8rem 1.2rem;
  box-shadow: 0px 2px 8px rgba(45, 80, 76, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  width: fit-content; /* ajusta al contenido */
  text-decoration: none;

  /* Hover con sombra extra */
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    animation: none; /* Opcional: detener animación al hover */
  }
`;

const LogoGit = styled.div`
  font-size: 50px; /* tamaño del ícono */
  color: #ffffffff; /* color GitHub oscuro */
   animation: ${bounce} 5s infinite;
`;
const LogoLink = styled.div`
  font-size: 50px; /* tamaño del ícono */
  color: #ffffffff; /* color GitHub oscuro */
   animation: ${bounce} 6s infinite;
`;

const Text = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  color: #bec2c1ff;
  text-decoration: none;

   @media (max-width: 760px) {
        display: none;
    }

`;

const ContentNetworks = styled.div`
  display: flex;
`