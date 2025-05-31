
import React, { useState, useEffect } from 'react'; // Import useState and useEffect for local toast management
import { GameControllerIcon, ComputerIcon, MailIcon } from '../components/icons'; // Added more icons
import PixelPuzzlerGame from '../components/PixelPuzzlerGame'; // Import the Pixel Puzzler game component
import RetroButton from '../components/RetroButton'; // Import the new RetroButton component
// Removed ToastNotification import as it will be handled inline

interface GameItemProps {
  title: string;
  description: string;
  iconElement?: React.ReactNode;
  buttonColor?: string;
  buttonHoverColor?: string;
  isPlayable?: boolean; 
}

const GameItem: React.FC<GameItemProps> = ({ 
  title, 
  description, 
  iconElement = <GameControllerIcon className="w-12 h-12 mb-3 text-accent-lime" />,
  buttonColor = 'bg-accent-cyan',
  buttonHoverColor = 'hover:bg-opacity-80',
  isPlayable = false
}) => {
  // Local state for managing toast notification within each GameItem
  const [localToastMessage, setLocalToastMessage] = useState<string | null>(null);

  // Effect to clear the toast message after a duration if it's not manually closed
  useEffect(() => {
    if (localToastMessage) {
      const timer = setTimeout(() => {
        setLocalToastMessage(null);
      }, 5000); // Toast stays for 5 seconds
      return () => clearTimeout(timer);
    }
  }, [localToastMessage]);

  return (
    <div className="p-4 bg-container-alt-bg border-2 border-accent-pink rounded-lg shadow-inner flex flex-col items-center text-center relative"> {/* Added relative for absolute positioning of local toast */}
      {iconElement}
      <h3 className="text-2xl font-display text-accent-yellow mb-2">{title}</h3>
      <p className="text-text-secondary font-mono text-sm mb-4 leading-relaxed">{description}</p>
      {/* Conditionally render the button or a "Game Loaded" message */}
      {/* Conditionally render the button or a "Game Loaded" message */}
      {isPlayable ? (
        <div className="text-accent-lime font-display text-xl mt-2">Game Loaded!</div> // Display message if playable
      ) : (
        // Use the new RetroButton component
        <RetroButton
          onClick={(e) => {
            e.preventDefault();
            // Set local toast message
            setLocalToastMessage(`Psych! This game, "${title}", is still under construction... or maybe it just needs more quarters? Or perhaps your 2400 baud modem isn't fast enough, dude!`);
          }}
          color={buttonColor} // Pass the buttonColor prop
          hoverColor={buttonHoverColor} // Pass the buttonHoverColor prop
          ariaLabel={`Play ${title} (demo button)`} // Pass the ARIA label
        >
          Play Now, Dude! {/* Button text */}
        </RetroButton>
      )}

      {/* Render local toast notification if localToastMessage is not null */}
      {/* Render local toast notification if localToastMessage is not null */}
      {/* Render local toast notification if localToastMessage is not null */}
      {localToastMessage && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white p-3 rounded-lg shadow-lg border border-accent-lime z-50 text-sm w-11/12 sm:max-w-md md:max-w-lg text-wrap break-words flex items-center justify-between"> {/* Adjusted positioning, padding, rounded corners, width, and added flex for alignment */}
          <span className="flex-grow mr-2">{localToastMessage}</span> {/* Added span to allow text to grow */}
          <button 
            onClick={() => setLocalToastMessage(null)}
            className="ml-2 bg-accent-pink text-white rounded-full w-7 h-7 flex items-center justify-center text-md font-bold hover:bg-opacity-80 transition-colors duration-150" // Styled close button as a prominent circle
            aria-label="Close notification"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

const GamesPage: React.FC = () => {
  // Removed toastMessage state and handleShowToast/handleCloseToast functions
  // as toast is now handled locally within GameItem

  return (
    <div className="bg-container-bg shadow-hard-neon border-4 border-accent-yellow rounded-xl w-full max-w-2xl p-4 sm:p-6 md:p-8 text-text-primary"> 
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-pink to-accent-lime drop-shadow-[2px_2px_0_rgba(0,0,0,0.7)]">
          Totally Gnarly GameZone!
        </h1>
        <p className="text-accent-lime mt-3 text-lg">Insert Coin & Get Ready to Play (Pretend)! No cheat codes needed... yet.</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Pixel Puzzler 3000DX - now with the actual game */}
        <div className="p-4 bg-container-alt-bg border-2 border-accent-pink rounded-lg shadow-inner flex flex-col items-center text-center">
          <GameControllerIcon className="w-12 h-12 mb-3 text-accent-cyan" />
          <h3 className="text-2xl font-display text-accent-yellow mb-2">Pixel Puzzler 3000DX</h3>
          <p className="text-text-secondary font-mono text-sm mb-4 leading-relaxed">Slide the tiles to reveal a wicked 90s image! Warning: may cause extreme pixelation. (Now with real 3D pixels!)</p>
          <PixelPuzzlerGame /> {/* Render the Pixel Puzzler game here */}
        </div>

        {/* Other games remain as placeholders, now with local toast notifications */}
        <GameItem 
          title="Modem Maze Runner Turbo" 
          description="Navigate the treacherous dial-up maze before your 14.4k connection drops! Collect free AOL CDs for bonus points. (SoundBlaster compatible!)"
          iconElement={<ComputerIcon className="w-12 h-12 mb-3 text-accent-pink" />}
          buttonColor="bg-accent-yellow"
          // Removed showToast prop as it's now handled locally
        />
        <GameItem 
          title="GeoCities GIF Guesser Gold" 
          description="Can you name that iconic, low-res, endlessly looping animated GIF? Test your knowledge of early web bling! (Best viewed in Netscape Navigator 3.0)"
          iconElement={<GameControllerIcon className="w-12 h-12 mb-3 text-accent-yellow" />}
          buttonColor="bg-accent-pink"
          // Removed showToast prop
        />
        <GameItem 
          title="Tamagotchi Trainer Pro '97" 
          description="Feed it, clean it, play with it! Just don't let it... you know. The fate of digital life is in your hands! (Batteries not included, dude. Requires 3 AAs)"
          iconElement={<MailIcon className="w-12 h-12 mb-3 text-accent-lime" />} /* Using MailIcon for fun, like sending it updates */
          buttonColor="bg-accent-cyan"
          // Removed showToast prop
        />
        <GameItem
          title="Web Petz Adventure Online"
          description="Adopt a digital critter on the World Wide Web! Feed it HTML snippets and watch it grow. (Requires Netscape Plugin & 1MB RAM)"
          iconElement={<ComputerIcon className="w-12 h-12 mb-3 text-accent-cyan" />}
          buttonColor="bg-accent-lime"
          // Removed showToast prop
        />
        <GameItem
          title="ZorkVenture: The Textual Quest"
          description="Type 'GO NORTH' to explore a world of pure imagination. Watch out for Grummins and Bugbears! (Floppy disk version also available, sold separately)"
          iconElement={<GameControllerIcon className="w-12 h-12 mb-3 text-accent-pink" />}
          buttonColor="bg-accent-yellow"
          // Removed showToast prop
        />
      </section>

      <p className="mt-10 text-center text-accent-pink font-mono text-sm">
        All games are Property of 'Your Imagination Interactive & Co.'. Game Over? Insert another virtual quarter and try again! No continues? Bummer, dude.
      </p>

      {/* Removed global ToastNotification rendering */}
    </div>
  );
};

export default GamesPage;
