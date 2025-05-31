
import React from 'react';
import { LinkIcon, MailIcon, ImageIcon } from '../components/icons'; // Added more icons for variety

const FakeLink: React.FC<{ text: string, urlText: string, description: string, iconElement: React.ReactNode, linkColor?: string }> = 
  ({ text, urlText, description, iconElement, linkColor = "text-accent-yellow" }) => (
  <div className="p-3 bg-container-alt-bg border-2 border-accent-cyan rounded-lg shadow-inner group hover:border-accent-pink transition-colors duration-200">
    <a 
      href="#" 
      onClick={(e) => e.preventDefault()} 
      className="flex items-center space-x-2"
      aria-label={`Fake link to ${text}`}
    >
      {iconElement}
      <span className={`text-lg font-display ${linkColor} group-hover:text-accent-lime`}>{text}</span>
    </a>
    <p className="text-xs font-mono text-accent-cyan mt-1 ml-7 group-hover:text-accent-pink transition-colors duration-200">({urlText})</p>
    <p className="text-text-secondary font-mono text-sm mt-1 ml-7">{description}</p>
  </div>
);

const LinksPage: React.FC = () => {
  return (
    <div className="bg-container-bg shadow-hard-neon border-4 border-accent-yellow rounded-xl w-full max-w-2xl p-4 sm:p-6 md:p-8 text-text-primary">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-pink to-accent-lime drop-shadow-[2px_2px_0_rgba(0,0,0,0.7)]">
          Cool Links & WebRings!
        </h1>
        <p className="text-accent-lime mt-3 text-lg">Surf the web like it's 1999! Don't forget your bookmark list!</p>
      </header>

      <section className="space-y-5">
        <h2 className="text-2xl font-display text-accent-pink border-b-2 border-accent-pink pb-1 mb-3">Sites That Are Da Bomb!</h2>
        <FakeLink 
          text="PixelPalace HyperNet" 
          urlText="www.pixelpalace.geocities.com/area51/zone8/index.html"
          description="The #1 source for MIDI tunes, dancing baby GIFs, and 'Under Construction' banners!"
          iconElement={<LinkIcon className={`w-5 h-5 text-accent-cyan flex-shrink-0 group-hover:animate-pulse-funky`} />}
        />
        <FakeLink 
          text="Modem Mayhem Forum & BBS" 
          urlText="forums.aol.com/chat/modem_mayhem_elite"
          description="Discuss dial-up speeds, share warez (kidding!), and how to get more free trial hours."
          iconElement={<LinkIcon className={`w-5 h-5 text-accent-lime flex-shrink-0 group-hover:animate-pulse-funky`} />}
          linkColor="text-accent-lime"
        />
        <FakeLink 
          text="Angelfire Fan Fiction Central HQ" 
          urlText="angelfire.com/scifi/mycoolstories_v2"
          description="Read riveting tales about your favorite shows. Spoilers: may contain glitter text and custom cursors."
          iconElement={<LinkIcon className={`w-5 h-5 text-accent-pink flex-shrink-0 group-hover:animate-pulse-funky`} />}
          linkColor="text-accent-pink"
        />
        <FakeLink
          text="Clipart Kingdom Archive"
          urlText="tripod.com/users/c/clipart_king_97"
          description="Downloadable GIFs, animated dividers, and BMPs for your homepage. Blinking text included!"
          iconElement={<ImageIcon className={`w-5 h-5 text-accent-yellow flex-shrink-0 group-hover:animate-pulse-funky`} />}
          linkColor="text-accent-yellow"
        />
        <FakeLink
          text="Sign My Awesome Guestbook!"
          urlText="guestbooks.theglobe.com/users/coolio95_rules"
          description="Let me know you stopped by! Don't forget to add a glitter GIF and say 'Wazzzup!'"
          iconElement={<MailIcon className={`w-5 h-5 text-accent-cyan flex-shrink-0 group-hover:animate-pulse-funky`} />}
        />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-display text-accent-pink border-b-2 border-accent-pink pb-1 mb-4">Join Our WebRing!</h2>
        <div className="p-4 bg-black border-4 border-dashed border-accent-yellow rounded-md text-center">
          <p className="font-mono text-accent-lime text-lg mb-2">The Totally Tubular AI WebRing of Awesome!</p>
          <div className="flex flex-wrap justify-around items-center font-mono text-sm gap-2 sm:gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-accent-cyan hover:underline p-1 rounded bg-gray-700 hover:bg-gray-600">PREV SITE</a>
            <div className="p-2 border border-accent-pink rounded bg-gray-800">
              {/* Placeholder for a 90s banner - actual image would be better */}
              <div className="w-40 h-10 bg-purple-700 text-xs text-white flex items-center justify-center font-bold font-display animate-pulse-funky shadow-hard-dark">
                YOUR SITE HERE?
              </div>
              <p className="text-xs text-accent-yellow mt-1">Site of the Month!</p>
              <p className="text-xs text-text-secondary mt-1">Sponsored by Dial-Up Dreams ISP</p>
            </div>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-accent-cyan hover:underline p-1 rounded bg-gray-700 hover:bg-gray-600">NEXT SITE</a>
          </div>
          <p className="text-xs text-text-secondary mt-3">Want to join? Send a S.A.S.E. (not really, just click around, lol)</p>
        </div>
      </section>

      <p className="mt-10 text-center text-accent-yellow font-mono text-sm">
        Don't get lost in cyberspace! Always bookmark your faves, and defrag your hard drive regularly!
      </p>
    </div>
  );
};

export default LinksPage;
