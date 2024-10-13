import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

const root = createRoot(document.getElementById('root')!)

root.render(
  <FluentProvider theme={webLightTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </FluentProvider>
)
