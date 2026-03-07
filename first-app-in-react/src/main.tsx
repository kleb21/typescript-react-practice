import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstComponent } from './first-component'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstComponent />
  </StrictMode>,
)
