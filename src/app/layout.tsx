import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorProvider } from "@/context/CursorContext";
import { AudioProvider } from "@/context/AudioContext";
import MouseCursorComponent from "@/components/MouseCursor.component";
import BackgroundAudioComponent from "@/components/BackgroundAudio.component";
import LogoComponent from "@/components/Logo.Component";

// react-lenis

import { ReactLenis } from "@/utils/lenis";
import FullPageNav from "@/components/Navbar.component";
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Websero-creative",
  description: "A Creative Design And Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          style={{
            overflowX: "hidden",
          }}
        >
          <div className="min-h-screen relative">
            <CursorProvider>
              <AudioProvider>
                <FullPageNav />
                <MouseCursorComponent />
                <BackgroundAudioComponent />      
                <LogoComponent />
                {children}
              </AudioProvider>
            </CursorProvider>
          </div>
        </body>
      </ReactLenis>
    </html>
  );
}
