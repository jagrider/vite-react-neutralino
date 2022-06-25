import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'

// File based routing via vite-plugin-pages and React Router
const Routes = () => {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </React.Suspense>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>
)

if (typeof window !== 'undefined') {
  window.Neutralino.init();
}