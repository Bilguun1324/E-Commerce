import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// import { SPACE_ID, ACCESS_TOKEN } from '@env';
const SPACE_ID="z27ttadow1o0"
const ACCESS_TOKEN="Vemh2QZnvwxy0o-AYtAaVS805F2QNpXak51fImTkbCA"

export const ContentfulProvider: React.FC<any> = ({ children }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
