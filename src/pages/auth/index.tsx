import { Inter } from "next/font/google";
import { signOut, useSession } from "next-auth/react";
import { Footer, Layout, NavBar } from "@/components";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Protect() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.replace("/");
  }, [session, status, router]);

  if (status === "loading") {
    return <p>carregando...</p>;
  }

  if (!session) {
    return <p>carregando...</p>;
  }

  return (
    <Layout.RegisterLayout>
      <h1>Home</h1>
    </Layout.RegisterLayout>
  );
}
