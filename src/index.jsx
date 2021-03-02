import React from 'react';
import { render } from 'react-dom';
//import ChakraProvider component to use ChakraUI
import { ChakraProvider } from '@chakra-ui/react';
import App from './components/App.jsx';

const title = 'My Simple Express React Webpack Babel Setup Environment';

ReactDOM.render(
  <ChakraProvider >
    <App />
  </ChakraProvider>,
  document.getElementById('app')
);