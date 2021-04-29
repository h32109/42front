import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
