import Head from "next/head";
// import { GetStaticProps } from "next";
// import { useEffect, useState } from "react";

// import { ProductFragment } from "../graphql/types";
// import { Product } from "../components/Product";
// import { fetchProducts } from "../graphql";

// Step 1: Create a Product component and use it

// Step 3: Fetch data inside useEffect from our GraphQL API and see what it returns

// Step 7: Use fetched data to display products

// Step 10: TypeScript ✨

// Step 11: Use Next.js features to boost the performance using getStaticProps (CSR vs SSR)

export default function Home() {
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
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full"></div>
      </main>
    </div>
  );
}
