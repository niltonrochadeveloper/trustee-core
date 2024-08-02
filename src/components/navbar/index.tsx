import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Navbar() {
  const { data, status } = useSession();

  return (
    <nav className="bg-blue-500 flex justify-between items-center px-4 w-full h-[10vh]">
      <div className="text-2xl font-bold flex items-center text-white">
        {data?.user?.name && `Olá, ${data?.user?.name}`}
      </div>
      <div>
        {status === "authenticated" && (
          <button
            className="text-black bg-white border font-medium border-white rounded py-2 px-6"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Fazer logout
          </button>
        )}
        {status === "unauthenticated" && (
          <button
            className="text-black bg-white border font-medium border-white rounded py-2 px-6"
            onClick={() => signIn("keycloak", { callbackUrl: "/auth" })}
          >
            fazer login
          </button>
        )}
      </div>
    </nav>
  );
}
