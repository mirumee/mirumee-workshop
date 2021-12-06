import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ProductListQuery, ProductListQueryVariables } from "./types";

export const client = new ApolloClient({
  uri: "https://vercel.saleor.cloud/graphql/",
  cache: new InMemoryCache(),
});

export const PRODUCT_LIST_QUERY = gql`
  fragment Product on Product {
    id
    name
    thumbnail {
      url
    }
  }

  query ProductList {
    products(channel: "default-channel", first: 8) {
      edges {
        node {
          ...Product
        }
      }
    }
  }
`;

export const fetchProducts = () =>
  client.query<ProductListQuery, ProductListQueryVariables>({
    query: PRODUCT_LIST_QUERY,
  });
