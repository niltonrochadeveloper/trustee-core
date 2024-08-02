import { ReduxProvider, SessionProvider } from "@/providers";
import store from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </SessionProvider>
  );
}
