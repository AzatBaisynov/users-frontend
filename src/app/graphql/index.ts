import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useSelector } from 'react-redux';

export const apolloClient = new ApolloClient({
	uri: "http://localhost:3000/graphql",
	cache: new InMemoryCache(),
});
