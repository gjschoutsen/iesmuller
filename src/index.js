import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const myTheme = extendTheme({
  colors: {
    brand: {
      50: "white",
      100: "#ad743438",
      200: "white",
      300: "white",
      400: "white",
      500: "white",
      600: "white",
      700: "white",
      800: "white",
      900: "white",
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


