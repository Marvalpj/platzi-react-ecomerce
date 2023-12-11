import {BrowserRouter} from 'react-router-dom'
import Routes from '../../Routes/Routes'
import Navbar from '../../components/Navbar/Navbar'

import {ShoppingCartProvider} from '../../context/index'

import './App.css'

const App = () => {

  return (
      <ShoppingCartProvider>
        <BrowserRouter>
          <Routes/>
          <Navbar/>
        </BrowserRouter>
      </ShoppingCartProvider>
  )
}

export default App
