import styled from "styled-components";
import photo from "../media/frand.JPG"
import backg from "../media/backg.png"
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
            <h2>Diseño y desarrollo productos digitales únicos: desde páginas web atractivas y apps escalables hasta chatbots inteligentes que potencian tu marca. Combino diseño, funcionalidad e inteligencia artificial para que destaques en el mundo online.</h2>
          </ContentTwo>
          <ContentOne>
            <CardNetworks>
              <LogoGit>
                <FaGithub />
              </LogoGit>
              <Text>GitHub</Text>
            </CardNetworks>
            <CardNetworks>
              <LogoLink>
                <FaLinkedin />
              </LogoLink>
              <Text>LinkedIn</Text>
            </CardNetworks>
          </ContentOne>
        </SectionContentY>
      </MainContainer>
      <MainContainer>

        <StackContainer>
          <Card>
            <Title>Desarrollo IA</Title>
            <TechItem>LangChain</TechItem>
            <TechItem>LangGraph</TechItem>
            <TechItem>LangSmith</TechItem>
            <TechItem>API LLMs</TechItem>
          </Card>

          <Card>
            <Title>Backend</Title>
            <TechItem>Django Rest Framework</TechItem>
            <TechItem>Node Js</TechItem>
            <TechItem>LangSmith</TechItem>
            <TechItem>API LLMs</TechItem>
          </Card>
          <Card>
            <Title>Frontend</Title>
            <TechItem>React</TechItem>
            <TechItem>React Native</TechItem>
            <TechItem>VueJs</TechItem>
          </Card>

          <Card>
            <Title>Bases de datos</Title>
            <TechItem>MySQL</TechItem>
            <TechItem>PostgreSQL</TechItem>
            <TechItem>MongoDB</TechItem>
          </Card>

          <Card>
            <Title>Control de versiones</Title>
            <TechItem>Git</TechItem>
            <TechItem>GitHub</TechItem>
            <TechItem>GitLab</TechItem>
          </Card>
        </StackContainer>
      </MainContainer>

    </>
  );
}

export default Home;

// Estilo para el contenedor general

const MainContainer = styled.div`
 background-color: #1a1b22ff;
  width: 100%;
  height: 100vh;  
`;


const PageContainer = styled.div`
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #5f6171ff;
   
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    

    @media (max-width: 760px) {
        flex-direction: column;   
        gap: 30px;                
        height: 100vh;             
        padding: 40px 0;         
    }
`;
const SectionContentY = styled.div`  
    display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    min-height: 100vh;
    margin-inline: 15%;

    @media (max-width: 760px) {
        flex-direction: column;   
        gap: 30px;                
        height: 100vh;             
        padding: 40px 0;         
    }
`;

const ContentOne = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;              
    height: 130px;    
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
        width: 200px;
        height: 200px;
    }
`;
const ContentNetworks = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;              
    height: 130px;    
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
        width: 200px;
        height: 200px;
    }
`;

const Logo = styled.img`  
    width: 100px;
    height: 100px;
    object-fit: cover;
    transition: all 0.3s ease;
    border-radius: 50%;
  
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
    text-align: justify;  
    color: #e8ebeeff;

    @media (max-width: 760px) {
        width: 90%;         
        height: auto;        
        text-align: center;  
    }
`;

const StackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 2-3 por fila según ancho */
  gap: 1.5rem;
  padding: 2rem;
  background-color: #1a1b22ff;
  margin-inline: 15%;
`;

const Card = styled.div`
  background: transparent; /* sin fondo */
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); /* sombra sutil */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 200px; /* altura fija para uniformidad */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: aquamarine;
`;

const TechItem = styled.span`
  display: inline-block;
  margin: 0.25rem 0.4rem 0 0;
  padding: 0.3rem 0.6rem;
  font-size: 1.2rem;
  border-radius: 8px;
  background: #29423dff;
  color: #e8ebeeff;
  border: 1px solid #29423dff;
`;

const CardNetworks = styled.div`
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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const LogoGit = styled.div`
  font-size: 50px; /* tamaño del ícono */
  color: #ffffffff; /* color GitHub oscuro */
`;
const LogoLink = styled.div`
  font-size: 50px; /* tamaño del ícono */
  color: #ffffffff; /* color GitHub oscuro */
`;

const Text = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #bec2c1ff;
`;