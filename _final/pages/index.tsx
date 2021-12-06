import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import { ProductFragment } from "../graphql/types";
import { Product } from "../components/Product";
import { fetchProducts } from "../graphql";

type Props = {
  products: ProductFragment[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await fetchProducts();
  const mappedProducts =
    data.data.products?.edges.map(({ node }) => node) || [];

  return {
    props: {
      products: mappedProducts,
    },
  };
};

export default function Home({ products }: Props) {
  // const [products, setProducts] = useState<ProductFragment[]>([]);

  // useEffect(() => {
  //   const fetch = async () => {
  //     const data = await fetchProducts();
  //     const mappedProducts =
  //       data.data.products?.edges.map(({ node }) => node) || [];
  //     setProducts(mappedProducts);
  //   };

  //   fetch();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Mirumee Workshop #1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700">
          Mirumee Workshop #1
        </h1>
        <p className="mt-3 text-2xl">Product List</p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {products.map(({ id, name, thumbnail }) => (
            <div className="p-2" key={id}>
              <Product name={name} thumbnailUrl={thumbnail?.url || ""} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
