import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Routes'
import { useState } from 'react'
import NavBar from './components/NavBar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createGlobalStyle } from 'styled-components';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
      {/*   <NavBar /> */}
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
    
`;