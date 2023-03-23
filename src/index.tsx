import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import React from 'react';

import { App } from './App';
import './index.css';
import { defaultTheme } from './theme';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'https://graphql.mojocrowe.dev',
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={defaultTheme}>
			<App />
		</ThemeProvider>
	</ApolloProvider>,
);
