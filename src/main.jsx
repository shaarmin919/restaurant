import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './Home/About.jsx'
import Service from './Home/Service.jsx'
import Menu from './Home/Menu/Menu.jsx'


const routes =createBrowserRouter([
    
  { 
    path:"/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>
        
      },
      {
        path: "about us",
        element: <About></About>
      },
    {
      path: 'service',
      element: <Service></Service>
    },
     {
      path: "menu",
      element: <Menu></Menu>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider router={routes}>

</RouterProvider>

    
  </React.StrictMode>
)
