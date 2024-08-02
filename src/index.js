import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './styles/index.css';
import './fonts/YekanBakh/font.css';

import { ApolloProvider, ApolloClient , InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './mui/theme';

const client = new ApolloClient({
    uri:process.env.REACT_APP_GRAPGCMS_URI,
    cache:new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ApolloProvider>
);
