import {createRoot} from 'react-dom/client'
import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';

const root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
)
