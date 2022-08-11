import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const myTheme = extendTheme({
  colors: {
    brand: {
      100: "#ad743438",
    }
  }
})

root.render(
  <StrictMode>
    <ChakraProvider theme={myTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);


