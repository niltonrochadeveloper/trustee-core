import Image from "next/image";
import { Inter } from "next/font/google";
import { signOut } from "next-auth/react";
import { Footer, Layout, NavBar } from "@/components";

import dynamic from "next/dynamic";
import { getServerSideProps } from "next/dist/build/templates/pages";

const ProductsList = dynamic(() => import("product_1_app/products"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Products = () => {
  return (
    <Layout.RegisterLayout>
      <ProductsList />
    </Layout.RegisterLayout>
  );
};

export default Products;
