import styled, { keyframes } from "styled-components";
import photo from "../media/frand.JPG"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { 
  siPython, siReact, siJavascript, siNodedotjs, siDjango, siMysql, siPostgresql, siGit, siGithub, siGitlab, siTailwindcss, siStyledcomponents, siLangchain,
  siLanggraph,
  siOpenai,
  siVuedotjs
 } from "simple-icons/icons";
import { SiGit } from "react-icons/si";

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
            <span>
              Desarrollador con experiencia en Python, JavaScript y frameworks modernos como React y Vue. Capaz de crear soluciones tecnológicas eficientes y escalables con un enfoque cada vez más sólido en backend e integración de Inteligencia Artificial. Actualmente estoy profundizando en el desarrollo de proyectos con IA aplicada, integrando modelos y herramientas que aporten valor real a aplicaciones web y agentes conversacionales.
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
          <Name>Stack Tecnológico</Name>
          <div className="parent">
            <div className=" init div1">
              <h3>Lenguajes</h3>
              <ul>
                <li>
                  <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siPython.hex}`}
                  >
                    <path d={siPython.path} />
                  </SvgIcon> Python</li>
                <li> <SvgIcon
                  viewBox="0 0 24 24"
                  fill={`#${siJavascript.hex}`}
                >
                  <path d={siJavascript.path} />
                </SvgIcon> JavaScript (ES6+)</li>
              </ul>
            </div>

            <div className="init div2">
              <h3>Frontend</h3>
              <ul>
                <li>
                   <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siReact.hex}`}
                  >
                    <path d={siReact.path} />
                  </SvgIcon> React</li>
                <li>
                   <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siVuedotjs.hex}`}
                  >
                    <path d={siVuedotjs.path} />
                  </SvgIcon> Vue</li>
                <li>
                   <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siTailwindcss.hex}`}
                  >
                    <path d={siTailwindcss.path} />
                  </SvgIcon> Tailwind</li>
                <li>
                  <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siStyledcomponents.hex}`}
                  >
                    <path d={siStyledcomponents.path} />
                  </SvgIcon> styled-components</li>
              </ul>
            </div>

            <div className="init div3">
              <h3>Backend</h3>
              <ul>
                <li>  <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siNodedotjs.hex}`}
                  >
                    <path d={siNodedotjs.path} />
                  </SvgIcon> Node.js</li>
                <li>
                  <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`white`}
                  >
                    <path d={siDjango.path} />
                  </SvgIcon>  Django Rest Framework</li>
                <li>  APIs REST</li>
              </ul>
            </div>

            <div className=" init div4">
              <h3>IA / Data</h3>
              <ul>
                <li> <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`white`}
                  >
                    <path d={siLangchain.path} />
                  </SvgIcon> LangChain</li>
                <li> <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`white`}
                  >
                    <path d={siLanggraph.path} />
                  </SvgIcon> LangGraph</li>
                <li>  <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`white`}
                  >
                    <path d={siLangchain.path} />
                  </SvgIcon> LangSmith</li>
                <li> <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siOpenai.hex}`}
                  >
                    <path d={siOpenai.path} />
                  </SvgIcon> LLM API</li>
              </ul>
            </div>

            <div className="init div5">
              <h3>Databases</h3>
              <ul>
                <li>
                   <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siMysql.hex}`}
                  >
                    <path d={siMysql.path} />
                  </SvgIcon>  MySQL</li>
                <li>
                  <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siPostgresql.hex}`}
                  >
                    <path d={siPostgresql.path} />
                  </SvgIcon> PostgreSQL</li>
              </ul>
            </div>
           {/*  <div className="init div6">
              <h3>Versions</h3>
              <ul>
                <li> <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siGit.hex}`}
                  >
                    <path d={siGit.path} />
                  </SvgIcon> Git</li>
                <li>  <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`white`}
                  >
                    <path d={siGithub.path} />
                  </SvgIcon> GitHub</li>
                <li>  <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siGitlab.hex}`}
                  >
                    <path d={siGitlab.path} />
                  </SvgIcon> GitLab</li>
              </ul>
            </div>
          </div> */}
          <div className="init div6">
 <div class="footer-2">
  <h6>LENGUAGES</h6>
        <div class="connections-2">
            <div class="connection-2 facebook-2">
              <div class="icon-2">
                <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siGit.hex}`}
                  >
                    <path d={siGit.path} />
                  </SvgIcon>
              </div>
              </div>
            <div class="connection-2 twitter-2"><div class="icon-2">
              <SvgIcon
                    viewBox="0 0 24 24"
                    fill={`#${siGit.hex}`}
                  >
                    <path d={siGit.path} />
                  </SvgIcon></div></div>
        </div>
       
        <div class="info-2">
            <div class="name-2">Git</div>
            <div class="name-2">GitHub</div>
            <div class="name-2">GitLab</div>            
        </div>
    </div>
    <div class="card-blur-2">
      
    </div>
          </div>
          </div>
                  </SectionContentY>

<div  class="card">
    <div class="footer">
        <div class="connections">
            <div class="connection facebook"><div class="icon"></div></div>
            <div class="connection twitter"><div class="icon"></div></div>
        </div>
       
        <div class="info">
            <div class="name">Filan Fisteku</div>
            <div class="job">Architect Manager</div>
        </div>
    </div>
    <div class="card-blur"></div>
</div>
      </MainContainer>
    </>
  );
}

export default Home;

// Estilo para el contenedor general

const MainContainer = styled.div`
 background-color: #0A0A10;  
 padding: 50px 0;

 .card {
    position: absolute;
    border-radius: 8px;
    height: 450px;
    width: 400px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 0 80px -10px black;
    overflow: hidden;
}

.card-blur {
    position: absolute;
    height: 100%;
    width: calc(100% + 1px);
    background-color: black;
    opacity: 0;
    transition: opacity 0.15s ease-in;
}

.card:hover .card-blur {
    opacity: 0.6;
}

.footer {
    z-index: 1;
    position: absolute;
    height: 80px;
    width: 100%;
    bottom: 0;
}


.connections {
    height: 80px;
    width: 400px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100px;
    margin: auto;
}

.connection {
    height: 25px;
    width: 25px;
    border-radius: 100%;
    background-color: white;
    display: inline-block;
    padding: 5px;
    margin-right: 25px;
    transform: translateY(200px);
    
    transition: transform 1s cubic-bezier(.46, 1.48, .18, .81);
}

.card:hover .connection {
    transform: translateY(0px);
}

.info {
	font-family: Inconsolata;
    padding-left: 20px;
    transform: translateY(250px);
    
    transition: transform 1s cubic-bezier(.31,1.21,.64,1.02);
}

.card:hover .info {
    transform: translateY(0px);
}

.name {
    font-weight: bolder;
    padding-top: 5px;
}

.job {
    margin-top: 10px;
}

.connection.facebook {
    height: 35px;
    width: 35px;
    margin-left: 20px;
    padding: 0px;
    border-radius: 100%;
    overflow: hidden;
}

.connection.twitter {
    transition-delay: 0.06s;
}


.connection.facebook .icon {
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
}

.connection.twitter .icon {
    height: 18px;
    width: 18px;
    margin-top: 4px;
    margin-left: 4px;
    background-position: center;
    background-size: cover;
}


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
            padding-block: 10px;
                overflow: hidden;

        }

.card-blur-2 {  
    height: 100%;
    width: calc(100% + 1px);          
    opacity: 0;
    transition: opacity 0.15s ease-in;
}

.init:hover .card-blur-2 {
    opacity: 0.6;
}

.footer-2 {
    z-index: 1;    
    height: 60px;
    width: 100%;
    bottom: 0;    
}


.connections-2 {
    height: 80px;             
}

.connection-2 {
    height: 25px;
    width: 25px;
    border-radius: 100%;
    background-color: white;
    display: inline-block;
    padding: 5px;
    margin-right: 25px;
    transform: translateY(200px);
    
    transition: transform 1s cubic-bezier(.46, 1.48, .18, .81);
}

.init:hover .connection-2 {
    transform: translateY(0px);
}

.info-2 {
	font-family: Inconsolata;
    padding-left: 20px;
    transform: translateY(250px);
    
    transition: transform 1s cubic-bezier(.31,1.21,.64,1.02);
}

.init:hover .info-2 {
    transform: translateY(0px);
}

.name-2 {
    font-weight: bolder;
    padding-top: 5px;
}

.job-2 {
    margin-top: 10px;
}

.connection-2.facebook-2 {
    height: 35px;
    width: 35px;
    margin-left: 20px;
    padding: 0px;
    border-radius: 100%;
    overflow: hidden;
}

.connection-2.twitter-2 {
    transition-delay: 0.06s;
}


.connection-2.facebook-2 .icon-2 {
    height: 18px;
    width: 18px;
    margin-top: 4px;
    margin-left: 4px;    
}

.connection-2.twitter-2 .icon-2 {
    height: 18px;
    width: 18px;
    margin-top: 4px;
    margin-left: 4px;
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
  width: 20px;
  height: 20px;  
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
