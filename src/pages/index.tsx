import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { Footer, NavBar } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.replace("/auth");
  }, [session, status, router]);

  return (
    <main className="h-screen flex flex-col justify-between">
      <NavBar />
      <div className="self-center text-center">
        <h1>Hello World</h1>
        <br />
        <h2>main app</h2>
      </div>
      <Footer />
    </main>
  );
}
