import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '~/assets/styles/default.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
