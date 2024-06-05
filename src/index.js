import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react"; // Import ChakraProvider
import store from './redux/store';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider> {/* Dodaj ChakraProvider wokół aplikacji */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
