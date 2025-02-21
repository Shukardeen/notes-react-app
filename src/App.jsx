import { Header, Footer } from './components/index'
import {Outlet} from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </Provider>
  )
}

export default App
