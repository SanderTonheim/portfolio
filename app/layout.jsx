import Footer from "@/components/footer";
import Navbar from "../components/navbar";
import "./globals.css";
import { Syne } from "next/font/google";

const inter = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="no"
      className={`${inter.className} overflow-x-hidden scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col justify-between overflow-x-hidden  ">
        <Navbar />
        <main className="flex flex-grow flex-col bg-[#111111]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
