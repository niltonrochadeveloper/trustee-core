import { NavBar } from "@/components";
import { setTheme } from "@/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useStore from "@/hooks/useStore";

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  const { useAppDispatch, useAppSelector } = useStore();
  const {
    theme: { mode },
    product,
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main className="h-screen flex flex-col w-full">
      <div className="flex w-full">
        <div className="flex flex-col w-[315px] pt-24 bg-blue-300 h-screen">
          <p className="px-4">{mode} porta 3000</p>
          <button onClick={() => dispatch(setTheme())}>
            mudar thema global porta 3000
          </button>
          <Link className="hover:bg-blue-50 px-4 py-2" href={"/auth"}>
            home
          </Link>
          <Link className="hover:bg-blue-50 px-4 py-2" href={"/auth/products"}>
            products
          </Link>
          <Link className="hover:bg-blue-50 px-4 py-2" href={"/auth/books"}>
            books
          </Link>
          <Link className="hover:bg-blue-50 px-4 py-2" href={"/auth/category"}>
            categories
          </Link>
          <>
            {product?.items.map((item) => (
              <>
                <p>{item.name}</p>
              </>
            ))}
          </>
        </div>
        <div className="w-full">
          <NavBar />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default RegisterLayout;
