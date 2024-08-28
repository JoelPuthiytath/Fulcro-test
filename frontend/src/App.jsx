
import './App.css'
import Home from './pages/Home/Home.jsx'
import { ReactLenis} from '@studio-freight/react-lenis';

function App() {

  return (
    <div className='App'>
    <ReactLenis root>
    <Home/>
    </ReactLenis>
    </div>
  )
}

export default App
