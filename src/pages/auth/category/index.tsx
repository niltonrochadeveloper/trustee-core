import Image from "next/image";
import { Inter } from "next/font/google";
import { signOut } from "next-auth/react";
import { Footer, Layout, NavBar } from "@/components";

import dynamic from "next/dynamic";

const CategoryPage = dynamic(() => import("product_1_app/category"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Auth() {
  return (
    <Layout.RegisterLayout>
      <CategoryPage />
    </Layout.RegisterLayout>
  );
}
