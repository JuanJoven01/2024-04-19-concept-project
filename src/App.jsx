import { BrowserRouter, useRoutes } from "react-router-dom"
import { Home} from './pages/Home'
import { Games } from "./pages/Games"
import { Community } from "./pages/Community"
import { Marketplace } from "./pages/Marketplace"
import { Learning } from "./pages/Learning"
import { NavBar } from "./components/NavBar"
import './App.css'


const AppRoutes = () => {

  const routes = useRoutes(
    [
      { path: '/', element: <Home />},
      { path: '/games', element: <Games />},
      { path: '/community', element: <Community />},
      { path: '/marketplace', element: <Marketplace />},
      { path: '/learning', element: <Learning />},
    ]
  )
  return routes

}


function App() {



  return (
    <>
      <BrowserRouter>
        <NavBar />
        < AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
