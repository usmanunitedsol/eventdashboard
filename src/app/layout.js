import { Inter } from "next/font/google";
import "./styles/style.scss";
import "./styles/pushbar.scss"
import Navbar from "../../global_component/header/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event dashboard",
  description: "Created by usman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
