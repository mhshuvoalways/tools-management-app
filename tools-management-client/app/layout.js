import Loading from "@/app/components/common/loading";
import Tostify from "@/app/components/common/tostify";
import { Inter } from "next/font/google";
import Context from "./context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sinc - Inventory management of tools",
  description: "Inventory management of tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-thin.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-solid.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-regular.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-light.css"
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        {
          <Context>
            <Tostify />
            <Loading />
            {children}
          </Context>
        }
      </body>
    </html>
  );
}
