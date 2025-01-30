import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import SessionWrapper from "@/components/SessionWrapper";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"], 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fuel The Grind | Donate Your Favorite Creator",
  description: "Fuel The Grind is a platform for creators to receive donations from their fans. Donate to your favorite creator and help them achieve their goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
          <body
            className={`${geistSans.variable} ${geistMono.variable}`}
          >
              <Navbar/>
                <BackgroundBeamsWithCollision >
                  {children}
                </BackgroundBeamsWithCollision>
              <Footer/>
          </body>
        </SessionWrapper>
    </html>
  );
}
