import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app Eliecer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <script defer></script>
      </head>
      <body className={inter.className} style={{ height: "100vh" }}>
        {/* layout tags or stuff can be here */}
        {children}
      </body>
    </html>
  );
}
