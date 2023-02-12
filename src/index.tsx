import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import {ErrorBoundary} from 'app/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StrictMode>,
);
