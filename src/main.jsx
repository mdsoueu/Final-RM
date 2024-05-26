import React from 'react'
import ReactDOM from 'react-dom/client'
import Cabecalho from './components/Cabecalho.jsx'
import ConsultaRAM from './consulta/ConsultaRAM.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NaTela from './consulta/NaTela.jsx'
import Episodio from './consulta/Episodio.jsx'
import App from './App.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Cabecalho />,
    children: [
      {
        path: '/consulta',
        element: <ConsultaRAM />
      },
      {
        path: '/informacao/:id',
        element: <NaTela />
      },
      {
        path: '/episodios/:id',
        element: <Episodio />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
