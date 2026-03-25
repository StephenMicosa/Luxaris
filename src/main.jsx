import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logoWebp from './assets/logo-converted-from-png.webp'
import heroLgWebp from './assets/Hero-lg.webp'

const preloadImage = (href, fetchPriority = 'auto', media) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = href
  link.fetchPriority = fetchPriority
  if (media) link.media = media
  document.head.appendChild(link)
}

preloadImage(logoWebp, 'high')
preloadImage(heroLgWebp, 'high', '(min-width: 1024px)')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
