import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Header } from "./components/Header";
import styles from "~/tailwind.css";
import shopifyIcon from "./assets/images/iconShopify.ico";

// or "@remix-run/cloudflare"

// ...

export const links = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "icon",
    href: shopifyIcon,
  },
];

export const meta = () => ({
  charset: "utf-8",
  title: "Shopfy LP Clone",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="pt-BR">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
