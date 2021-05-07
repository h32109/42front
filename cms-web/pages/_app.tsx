import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../api/apolloClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
