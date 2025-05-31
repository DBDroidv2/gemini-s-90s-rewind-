
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import LinksPage from './pages/LinksPage';
import GamesPage from './pages/GamesPage'; 
import Navbar from './components/Navbar';
import { FloppyDiskIcon } from './components/icons';
// Import the Analytics component from Vercel
import { Analytics } from "@vercel/analytics/next";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-accent-pink selection:text-black">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-start p-4 sm:p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/games" element={<GamesPage />} />
          </Routes>
        </main>
        <footer className="w-full bg-container-alt-bg border-t-4 border-accent-yellow p-4 text-center text-text-secondary text-xs opacity-90 mt-auto">
          <div className="max-w-4xl mx-auto flex items-center justify-center space-x-2">
            <FloppyDiskIcon className="text-accent-cyan h-5 w-5 flex-shrink-0" />
            <p className="font-mono">
              &copy; {new Date().getFullYear()} Gemini's 90s Rewind. Powered by Google Gemini. Don't defrag your SSDs, dude!
            </p>
          </div>
        </footer>
      </div>
      {/* Add the Vercel Analytics component for usage tracking */}
      <Analytics />
    </Router>
  );
};

export default App;
