import styled from "styled-components";
import photo from "../media/frandia.jpg"

function Home() {
    return (
        <PageContainer>
            <ContentOne>

            </ContentOne>
            <ContentTwo>
            <h2>Soy Frand, desarrollador de software junior apasionado por crear soluciones digitales funcionales y atractivas. Me enfoco en aprender y mejorar cada día, combinando buenas prácticas con creatividad para transformar ideas en proyectos reales</h2>
            </ContentTwo>

        </PageContainer>
    );
}

export default Home;

const PageContainer = styled.div`
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5%;

    @media (max-width: 760px) {
        flex-direction: column;   /* 👉 Se ponen uno debajo del otro */
        gap: 30px;                /* más espacio entre ellos */
        height: 100vh;             /* permite crecer según contenido */
        padding: 40px 0;          /* agrega espacio vertical */
    }
`;

const ContentOne = styled.div`
    background-image: url(${photo});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 50%;

    @media (max-width: 760px) {
        width: 200px;
        height: 200px;
    }
`;

const ContentTwo = styled.div`
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    padding-inline: 20px;

    @media (max-width: 760px) {
        width: 90%;          /* ocupa más ancho en móvil */
        height: auto;        /* deja que crezca con el texto */
        text-align: center;  /* centra el texto */
    }
`;
