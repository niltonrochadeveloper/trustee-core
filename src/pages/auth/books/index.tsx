import { signOut } from "next-auth/react";
import { Footer, Layout, NavBar } from "@/components";
import dynamic from "next/dynamic";

const BooksPage = dynamic(() => import("product_1_app/books"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Books = () => {
  return (
    <Layout.RegisterLayout>
      <BooksPage />
    </Layout.RegisterLayout>
  );
};

export default Books;
