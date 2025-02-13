import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";  
 import Footer from "./components/Footer"

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Layout component that wraps all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar will now appear on all pages */}
        <Navbar />


        {/* The rest of the page content */}
        {children}
      </body>

      <footer>


      <Footer/>


      </footer>
    </html>
  );
}
