import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "My Anime List",
  description: "The Center of Anime List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
