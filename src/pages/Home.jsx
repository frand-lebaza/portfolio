import styled, { keyframes } from "styled-components";
import photo from "../media/frand.JPG"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  siPython, siReact, siJavascript, 
  siNodedotjs, siDjango, siMysql, 
  siPostgresql, siGit, siGithub, siGitlab, 
  siTailwindcss, siStyledcomponents, siLangchain,
  siLanggraph, siOpenai, siVuedotjs,
  siTypescript
} from "simple-icons/icons";
import { SiTypescript } from "react-icons/si";

import Agent from "../components/Agent";

function Home() {
  return (
    <>
      <MainContainer>
        <SectionContentY>
          <ContentOne>
            <Logo src={photo} alt="Logo" />
            <div className="text-container">
              <Name>Frand Lebaza</Name>
              <span className="text-profession">Desarrollador de software</span>
            </div>

          </ContentOne>
          <ContentTwo>
            <span>
              Desarrollador con experiencia en Python, JavaScript y frameworks modernos como React y Vue. Capaz de crear soluciones tecnológicas eficientes y escalables. Actualmente estoy enfocado en el desarrollo de proyectos con Inteligencia Artificial aplicada, integrando LLMs y herramientas que aporten valor real a aplicaciones web y agentes conversacionales.
            </span>
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
          <Stack>Stack Tecnológico</Stack>
          <div className="parent">
            <div className=" init div1">
              <h3>Lenguajes</h3>
              <div className="section-icons">
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siPython.hex}`}
                >
                  <path d={siPython.path} />
                </SvgIcon>
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siJavascript.hex}`}
                >
                  <path d={siJavascript.path} />
                </SvgIcon>
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siTypescript.hex}`}
                >
                  <path d={siTypescript.path} />
                </SvgIcon>
              </div>
              <ul>
                <li> Python</li>
                <li> JavaScript (ES6+)</li>
                <li> TypeScript</li>
              </ul>
            </div>

            <div className="init div2">
              <h3>Frontend</h3>
              <div className="section-icons">
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siReact.hex}`}
                >
                  <path d={siReact.path} />
                </SvgIcon>
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siVuedotjs.hex}`}
                >
                  <path d={siVuedotjs.path} />
                </SvgIcon>

                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siTailwindcss.hex}`}
                >
                  <path d={siTailwindcss.path} />
                </SvgIcon>
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siStyledcomponents.hex}`}
                >
                  <path d={siStyledcomponents.path} />
                </SvgIcon>
              </div>
              <ul>
                <li>React</li>
                <li>Vue</li>
                <li>Tailwind</li>
                <li>Styled-components</li>
              </ul>
            </div>

            <div className="init div3">
              <h3>Backend</h3>
              <div className="section-icons">
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siNodedotjs.hex}`}
                >
                  <path d={siNodedotjs.path} />
                </SvgIcon>
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`white`}
                >
                  <path d={siDjango.path} />
                </SvgIcon>
              </div>
              <ul>
                <li>Node.js</li>
                <li>Django Rest Framework</li>
                <li>APIs REST</li>
              </ul>
            </div>

            <div className=" init div4">
              <h3>IA</h3>
              <div className="section-icons">
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`white`}
                >
                  <path d={siLangchain.path} />
                </SvgIcon>
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`white`}
                >
                  <path d={siLanggraph.path} />
                </SvgIcon>
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`white`}
                >
                  <path d={siOpenai.path} />
                </SvgIcon>
              </div>
              <ul>
                <li> LangChain</li>
                <li> LangGraph</li>
                <li> LangSmith</li>
                <li> API LLMs</li>
              </ul>
            </div>

            <div className="init div5">
              <h3>Databases</h3>
              <div className="section-icons">
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`white`}
                >
                  <path d={siMysql.path} />
                </SvgIcon>
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`white`}
                >
                  <path d={siPostgresql.path} />
                </SvgIcon>

              </div>
              <ul>
                <li> MySQL</li>
                <li> PostgreSQL</li>
              </ul>
            </div>
            <div className="init div6">
              <h3>Control de versiones</h3>
              <div className="section-icons">
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siGit.hex}`}
                >
                  <path d={siGit.path} />
                </SvgIcon>
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`white`}
                >
                  <path d={siGithub.path} />
                </SvgIcon>
                <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siGitlab.hex}`}
                >
                  <path d={siGitlab.path} />
                </SvgIcon>
              </div>
              <ul>
                <li> Git</li>
                <li> GitHub</li>
                <li> GitLab</li>
              </ul>
            </div>
          </div>

        </SectionContentY>

      <Agent/>

      </MainContainer>
    </>
  );
}

export default Home;

// Estilo para el contenedor general

const MainContainer = styled.div`
 background-color: #0A0A10;  
 padding: 50px 0;
`;

const SectionContentY = styled.div`  
    display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    min-height: 100vh;
    margin-inline: 15%;    
    
    .parent {
        width: 100%;        
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        color: white;
        
        .init{          
          display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid white;
            border-radius: 10px;  
            
                overflow: hidden;

            ul {
  list-style: none;
  margin: 0;   
  padding: 0 20px;  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-block: 15px;
}


            .section-icons{                
                display: flex;
                justify-content: center;
                align-items: center; 
                gap:10px;
                padding: 10px;
                width: 100%;
                }

        }
         .div1 { grid-area: 1 / 1 / 3 / 3; }
        .div2 { grid-area: 1 / 5 / 3 / 7; }
        .div3 { grid-area: 1 / 3 / 3 / 5; }
        .div4 { grid-area: 3 / 1 / 5 / 3; }
        .div5 { grid-area: 3 / 3 / 5 / 5; }
        .div6 { grid-area: 3 / 5 / 5 / 7; }

    }


    @media (max-width: 760px) {
        flex-direction: column;           
        gap: 30px;       
        margin-inline: 5%;  

         .parent {
            grid-template-columns: 1fr; /* una sola columna */
            grid-template-rows: auto;   /* se ajustan automáticamente */
            grid-row-gap: 20px;         /* separación entre divs */

             /* cada div ocupa toda la fila */
          .div1, .div2, .div3, .div4, .div5, .div6 {
            grid-area: unset; /* quitamos la posición fija */
          }
         
            }

         
            
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
            font-size: 1.5rem;
            color: #4fd3b2ff;
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
    width: 120px;
    height: 120px;
    object-fit: cover;
    transition: all 0.3s ease;
    border-radius: 50%;
    border: 1px solid #605e5e;
     
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

const Stack = styled.span`
  font-family: "Poppins", sans-serif; 
  font-size: 2rem; 
  font-weight: 600; 
  color: #4fd3b2ff;
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
    color: white;

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
// Estilo base para el SVG
const SvgIcon = styled.svg`
  width: 25px;
  height: 25px;  
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;
