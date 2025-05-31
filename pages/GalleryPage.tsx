
import React from 'react';
import { ImageIcon, ComputerIcon } from '../components/icons'; // Added ComputerIcon for variety

const GalleryItem: React.FC<{ title: string, description: string, bgColor: string, borderColor: string, iconElement?: React.ReactNode }> = 
  ({ title, description, bgColor, borderColor, iconElement }) => (
  <div className={`p-4 bg-container-alt-bg border-2 ${borderColor} rounded-lg shadow-inner flex flex-col items-center`}>
    <div className={`w-full h-32 sm:h-40 ${bgColor} rounded-md mb-3 flex items-center justify-center border-2 ${borderColor} border-dashed`}>
      {iconElement || <ImageIcon className={`w-12 h-12 sm:w-16 sm:h-16 ${borderColor === 'border-accent-cyan' ? 'text-accent-cyan' : 'text-accent-pink'} opacity-50`} />}
    </div>
    <h3 className="text-xl font-display text-accent-yellow mb-1">{title}</h3>
    <p className="text-text-secondary font-mono text-sm text-center">{description}</p>
  </div>
);

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-container-bg shadow-hard-neon border-4 border-accent-yellow rounded-xl w-full max-w-2xl p-4 sm:p-6 md:p-8 text-text-primary">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-pink to-accent-lime drop-shadow-[2px_2px_0_rgba(0,0,0,0.7)]">
          Da Art Gallery, Yo!
        </h1>
        <p className="text-accent-lime mt-3 text-lg">Scope out these AI-generated masterpieces!</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <GalleryItem 
          title="GeoSlacker Background #42" 
          description="Tiled, repeating, and totally hypnotic. The epitome of early web design." 
          bgColor="bg-gradient-to-br from-purple-600 to-blue-800"
          borderColor="border-accent-cyan"
          iconElement={<div className="w-16 h-16 bg-purple-700 opacity-75 animate-pulse-funky rounded-full"></div>}
        />
        <GalleryItem 
          title="My First AI Poem (So Deep)" 
          description="'Pixels dance, a modem sings... is the floppy truly wise?' - AI Bard Bot 3000"
          bgColor="bg-gradient-to-tr from-pink-500 to-orange-500"
          borderColor="border-accent-pink"
          iconElement={<span className="font-mono text-4xl text-pink-200 opacity-70">¶</span>}
        />
        <GalleryItem 
          title="Animated GIF of the Future" 
          description="Legend says it's still loading. A tribute to 28.8k modems. Infinite loop guaranteed."
          bgColor="bg-gray-700"
          borderColor="border-accent-lime"
          iconElement={<ImageIcon className="w-12 h-12 sm:w-16 sm:h-16 text-accent-lime opacity-60 animate-spin-slow" />}
        />
         <GalleryItem 
          title="ASCII Art Masterpiece: 'Cat'" 
          description="Look closely. It's a cat. Or a dog. Or maybe a text file? Art is subjective, man."
          bgColor="bg-black"
          borderColor="border-accent-yellow"
          iconElement={<pre className="font-mono text-accent-yellow text-xs sm:text-sm opacity-70">
{`  /\\_/\\
 ( o.o )
  > ^ <`}
          </pre>}
        />
        <GalleryItem
          title="CyberDreamscape #7"
          description="A mind-bending 3D render from the digital frontier. Pass the VR goggles, dude!"
          bgColor="bg-gradient-to-b from-indigo-700 via-purple-600 to-teal-500"
          borderColor="border-accent-yellow"
          iconElement={<ComputerIcon className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-300 opacity-60 transform rotate-[-15deg]" />}
        />
        <GalleryItem
          title="IconPack Deluxe '98"
          description="16x16 pixels of pure artistic genius. Perfect for your desktop theme!"
          bgColor="bg-gray-500"
          borderColor="border-accent-cyan"
          iconElement={
            <div className="grid grid-cols-2 gap-1">
              <div className="w-6 h-6 bg-blue-400 border border-blue-600"></div>
              <div className="w-6 h-6 bg-red-400 border border-red-600"></div>
              <div className="w-6 h-6 bg-green-400 border border-green-600"></div>
              <div className="w-6 h-6 bg-yellow-400 border border-yellow-600"></div>
            </div>
          }
        />
      </section>

      <p className="mt-10 text-center text-accent-cyan font-mono text-sm">
        No actual AI was harmed (much) in the making of this gallery. Keep it real! And remember, "Right-click, Save As..."
      </p>
    </div>
  );
};

export default GalleryPage;
