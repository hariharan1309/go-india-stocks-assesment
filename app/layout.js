import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Go India Stocks Assesment",
  description: "Built using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="m-0 p-0 flex min-h-[100vh]">
          {children}
          </div>
        </body>
    </html>
  );
}
