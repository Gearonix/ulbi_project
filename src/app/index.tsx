import {createRoot} from 'react-dom/client'
import {StrictMode} from 'react'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import ThemeProvider from './providers/ThemeProvider/ui/ThemeProvider'
import {ErrorBoundary} from 'app/providers/ErrorBoundary'
import {StoreProvider} from './providers/StoreProvider'

const root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
      <StoreProvider>
        <BrowserRouter>
          <ErrorBoundary>
            <ThemeProvider>
              <App/>
            </ThemeProvider>
          </ErrorBoundary>
        </BrowserRouter>
      </StoreProvider>
    </StrictMode>,
)
