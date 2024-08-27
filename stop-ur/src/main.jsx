import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Stopur from './components/StopUr/Stopur.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Stopur/>
    <App />
  </StrictMode>,
)
