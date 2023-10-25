'use client';

import { store } from "../redux/store";
import { Provider } from "react-redux";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "../styles/main.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
          <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}