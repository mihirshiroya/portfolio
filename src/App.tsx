import './index.css'
import Navbar from './Components/Navbar'
import { ThemeProvider } from "./context/ThemeContext"
import Main from './Components/Main'
import ScrollToTop from './Components/scroll-to-top'

function App() {
  return (
    <div className='relative'>
       <ThemeProvider>
        <Navbar />
       <Main children={undefined}/>
       </ThemeProvider>
       <div className='absolute right-5 bottom-5'>
        <ScrollToTop />
       </div>
       
    </div>
  )
}

export default App
