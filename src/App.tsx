import './index.css'
import Navbar from './Components/Navbar'
import { useTheme,ThemeProvider } from "./context/ThemeContext"
import Section from './Components/section'
import Main from './Components/Main'
import ScrollToTop from './Components/scroll-to-top'

function App() {
    const { theme } = useTheme()
  return (
    <div className='relative'>
       <ThemeProvider>
        <Navbar />
       <Main/>
       </ThemeProvider>
       <div className='absolute right-5 bottom-5'>
        <ScrollToTop />
       </div>
       
    </div>
  )
}

export default App
