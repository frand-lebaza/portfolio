import styled from "styled-components";
import photo from "../media/frandia.jpg"
import backg from "../media/backg.png"

function Home() {
    return (

        <PageContainer>
            <ContentOne>
                <Logo  src={photo} alt="Logo"/>
                <div className="text-container">
                <Name>Frand Lebaza</Name>
                <span className="text-profession">Desarrollador de softwarefull stack</span>
                </div>
                
            </ContentOne>
            <ContentTwo>
                <h1>Transformo ideas en soluciones digitales reales</h1>
                <h2>Soy Frand, desarrollador de software. Diseño y desarrollo productos digitales únicos: desde páginas web atractivas y apps escalables hasta chatbots inteligentes que potencian tu marca. Combino diseño, funcionalidad e inteligencia artificial para que destaques en el mundo online.</h2>
            </ContentTwo>
        </PageContainer>

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
            color: red;
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
