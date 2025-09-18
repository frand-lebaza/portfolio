import styled from "styled-components";
import photo from "../media/frand.JPG"
import backg from "../media/backg.png"

function Home() {
    return (
        <>
            <PageContainer>
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
            </PageContainer>

       {/*      <PageContainer>
                <Title>🚀 Mi Stack Tecnológico</Title>
                <Categories>
                    <Card>
                        <CategoryTitle>Frontend</CategoryTitle>
                        <TechList>
                            <TechItem>React</TechItem>
                            <TechItem>Vite</TechItem>
                            <TechItem>Material UI</TechItem>
                            <TechItem>styled-components</TechItem>
                        </TechList>
                    </Card>
                    <Card>
                        <CategoryTitle>Backend</CategoryTitle>
                        <TechList>
                            <TechItem>Django REST Framework</TechItem>
                            <TechItem>APIs REST</TechItem>
                        </TechList>
                    </Card>
                    <Card>
                        <CategoryTitle>IA & Agentes</CategoryTitle>
                        <TechList>
                            <TechItem>LangChain</TechItem>
                            <TechItem>LangGraph</TechItem>
                            <TechItem>OpenAI</TechItem>
                        </TechList>
                    </Card>

                    <Card>
                        <CategoryTitle>Infraestructura</CategoryTitle>
                        <TechList>
                            <TechItem>UltraMsg (WhatsApp)</TechItem>
                            <TechItem>Deploy en servidor</TechItem>
                        </TechList>
                    </Card>

                    <Card>
                        <CategoryTitle>Herramientas</CategoryTitle>
                        <TechList>
                            <TechItem>Git & GitHub</TechItem>
                            <TechItem>VSCode</TechItem>
                        </TechList>
                    </Card>
                </Categories>
        </PageContainer>  */}           

        </>
    );
}

export default Home;

// Estilo para el contenedor general
const MainContainer = styled.div`
  scroll-snap-type: y mandatory;  
  height: 100vh;
     background-color: #a6a7b4ff;
     padding: 20px;
`;

const PageContainer = styled.div`
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #1a1b22ff;
    width: 100%;
    height: 100vh;
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
const BackgroundDiv = styled.div`
    background: #02151f;
background: linear-gradient(175deg, rgba(2, 21, 31, 1) 14%, rgba(3, 2, 48, 1) 100%);
    position: relative;
    width: 100%;
    height: 100%;

    @media (max-width: 760px) {
        width: 200px;
        height: 200px;
    }
`;

const ContentTwo = styled.div`
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    padding-inline: 20px;

    @media (max-width: 760px) {
        width: 90%;         
        height: auto;        
        text-align: center;  
    }
`;


const StackSection = styled.section`
  padding: 2rem;
  background-color: #1a1b22ff;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: aquamarine;
`;

const Categories = styled.div`
    display: flex;
  gap: 1.5rem;
`;

const Card = styled.div`  
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 4px 2px rgba(85, 157, 153, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: aquamarine;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TechItem = styled.li`
  font-size: 1rem;
  padding: 0.3rem 0;
  color: white;
`;


const ContentThree = styled.div`
  position: relative;
  background-color: #000000ff;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
  grid-template-rows: repeat(3, 1fr); /* 3 filas iguales */
  gap: 10px; /* espacio entre bloques */
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Solo una columna */
    
    /* Los hijos no deben tener grid-column/grid-row fijos */
    & > div {
      grid-column: auto !important;
      grid-row: auto !important;
      height: 200px; /* Altura adaptable */
    }
  }
`;

const CollageItem = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  
`;
