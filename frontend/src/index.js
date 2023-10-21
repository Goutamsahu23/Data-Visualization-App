import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

import ColorModeSwitcher from './ColorModeSwitcher'
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ColorModeSwitcher />
        <App />
      </BrowserRouter>

    </ChakraProvider>

  </StrictMode>
);

