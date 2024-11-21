import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Layout from './components/Layout'
import ResearchChat from './components/ResearchChat'
import ExtractChat from './components/ExtractChat'
import DraftChat from './components/DraftChat'







const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout/>}>
      <Route path=''  element={<Dashboard />}/>
     
      <Route path='ExtractChat' element={<ExtractChat/>} />
      <Route path='ResearchChat' element={<ResearchChat/>} />
      <Route path='AutoDraftChat' element={<DraftChat/>} />
      
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

    
  </StrictMode>,
)
