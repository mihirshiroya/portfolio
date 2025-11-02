import './index.css'
import Navbar from './Components/Navbar'
import { useTheme,ThemeProvider } from "./context/ThemeContext"
import Section from './Components/section'
import Main from './Components/Main'
function App() {
    const { theme } = useTheme()
  return (
    <>
       <ThemeProvider>
        <Navbar />
       <Main/>
       </ThemeProvider>
    </>
  )
}

export default App
