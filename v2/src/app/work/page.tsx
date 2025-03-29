"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";
import { Inter, Montserrat, Raleway, Roboto, Poppins, Playfair_Display, Open_Sans, Nunito_Sans, IBM_Plex_Sans, Rubik, DM_Sans } from 'next/font/google';
import PageTransition from '../components/PageTransition';

// Font definitions
const inter = Inter({ subsets: ['latin'], display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });
const raleway = Raleway({ subsets: ['latin'], display: 'swap' });
const roboto = Roboto({ weight: ['400', '500', '700', '900'], display: 'swap', subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '500', '600', '700', '900'], display: 'swap', subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap' });
const openSans = Open_Sans({ subsets: ['latin'], display: 'swap' });
const nunitoSans = Nunito_Sans({ subsets: ['latin'], display: 'swap' });
const ibmPlexSans = IBM_Plex_Sans({ weight: ['400', '500', '600', '700'], subsets: ['latin'], display: 'swap' });
const rubik = Rubik({ subsets: ['latin'], display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], display: 'swap' });

export default function Work() {
  // Use the global theme context
  const { currentTheme } = useTheme();
  
  // State for current font (only on work page)
  const [currentFont, setCurrentFont] = useState("system");

  // Get current theme colors
  const themeColors = themes[currentTheme];

  // Function to get font class
  const getFontClass = () => {
    switch(currentFont) {
      case "inter": return inter.className;
      case "montserrat": return montserrat.className;
      case "raleway": return raleway.className;
      case "roboto": return roboto.className;
      case "poppins": return poppins.className;
      case "playfair": return playfair.className;
      case "openSans": return openSans.className;
      case "nunitoSans": return nunitoSans.className;
      case "ibmPlexSans": return ibmPlexSans.className;
      case "rubik": return rubik.className;
      case "dmSans": return dmSans.className;
      default: return "";
    }
  };

  return (
    <div
      className={`flex flex-col items-center min-h-screen p-6 transition-colors duration-300 ${getFontClass()}`}
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
      }}
    >
      {/* Navigation - reduced vertical spacing */}
      <nav className="flex justify-center gap-6 mt-8 mb-14 w-full h-10">
        <Link
          href="/"
          className="text-2xl font-extrabold transition-colors duration-300"
          style={{ color: themeColors.navInactive }}
        >
          &lt;&gt;
        </Link>
        <Link
          href="/work"
          className="text-2xl font-extrabold transition-colors duration-300"
          style={{ color: themeColors.navActive }}
        >
          &lt;3
        </Link>
        <Link
          href="/life"
          className="text-2xl font-extrabold transition-colors duration-300"
          style={{ color: themeColors.navInactive }}
        >
          (:
        </Link>
      </nav>

      {/* Main Content with transition */}
      <PageTransition>
        <main className="flex flex-col w-full max-w-md">
          <h1
            className="text-2xl font-bold mb-10"
            style={{
              color: themeColors.text === "#FFFFFF" ? "#FFFFFF" : "#000000",
              opacity: 1,
            }}
          >
            Font Options
          </h1>
          
          {/* Font Selection */}
          <div className="mb-10">
            <p className="mb-6 font-medium">Select a font to see how it looks:</p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              <button 
                onClick={() => setCurrentFont("system")}
                className={`p-3 rounded ${currentFont === "system" ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
              >
                System Font
              </button>
              <button 
                onClick={() => setCurrentFont("inter")}
                className={`p-3 rounded ${currentFont === "inter" ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
              >
                Inter
              </button>
              <button 
                onClick={() => setCurrentFont("openSans")}
                className={`p-3 rounded ${currentFont === "openSans" ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
              >
                Open Sans
              </button>
              <button 
                onClick={() => setCurrentFont("nunitoSans")}
                className={`p-3 rounded ${currentFont === "nunitoSans" ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
              >
                Nunito Sans
              </button>
              <button 
                onClick={() => setCurrentFont("ibmPlexSans")}
                className={`p-3 rounded ${currentFont === "ibmPlexSans" ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
              >
                IBM Plex Sans
              </button>
              <button 
                onClick={() => setCurrentFont("rubik")}
                className={`p-3 rounded ${currentFont === "rubik" ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
              >
                Rubik
              </button>
              <button 
                onClick={() => setCurrentFont("dmSans")}
                className={`p-3 rounded ${currentFont === "dmSans" ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
              >
                DM Sans
              </button>
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Font Preview</h2>
              <p className="mb-4">This is how your text will look with the selected font.</p>
              <p className="mb-4 font-medium">This is medium weight text.</p>
              <p className="mb-4 font-semibold">This is semibold weight text.</p>
              <p className="mb-4 font-bold">This is bold weight text.</p>
              <p className="mb-4 font-extrabold">This is extra bold weight text.</p>
              <p className="font-black">This is black weight text.</p>
            </div>
          </div>
        </main>
      </PageTransition>
    </div>
  );
} 