
import React from 'react';
import { ComputerIcon, MailIcon } from '../components/icons'; 

const AboutPage: React.FC = () => {
  return (
    <div className="bg-container-bg shadow-hard-neon border-4 border-accent-yellow rounded-xl w-full max-w-2xl p-4 sm:p-6 md:p-8 text-text-primary">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-pink to-accent-lime drop-shadow-[2px_2px_0_rgba(0,0,0,0.7)]">
          All About This App, Dude!
        </h1>
        <p className="text-accent-lime mt-3 text-lg">Get the lowdown on Gemini's 90s Rewind!</p>
      </header>

      <section className="space-y-6">
        <div className="p-4 bg-container-alt-bg border-2 border-accent-cyan rounded-lg shadow-inner">
          <h2 className="text-2xl font-display text-accent-yellow mb-2">What's the Dil-yo?</h2>
          <p className="text-text-secondary font-mono leading-relaxed">
            Yo, check it! Gemini's 90s Rewind is your own private time machine back to the raddest decade ever, powered by Google's cutting-edge Gemini AI. 
            It's like, totally AI-some! We're talkin' phat responses, slang that's all that and a bag of chips, and a vibe that'll make you wanna break out your Walkman and do the Macarena.
          </p>
        </div>

        <div className="p-4 bg-container-alt-bg border-2 border-accent-pink rounded-lg shadow-inner">
          <h2 className="text-2xl font-display text-accent-lime mb-2">Built with Mad Skillz (and Code)</h2>
          <p className="text-text-secondary font-mono leading-relaxed">
            This digital masterpiece was cooked up using React, Tailwind CSS for those fly styles, and the super-smart Google Gemini API. 
            It's a modern web app wearin' its favorite 90s threads, running on a virtual 486DX2 processor and a 56k modem (in spirit!). 
            Think of it as the Fresh Prince of today's tech, gettin' jiggy with it.
          </p>
        </div>

        <div className="p-4 bg-container-alt-bg border-2 border-accent-yellow rounded-lg shadow-inner">
          <h2 className="text-2xl font-display text-accent-cyan mb-2">Fly Features!</h2>
          <ul className="text-text-secondary font-mono leading-relaxed list-disc list-inside space-y-1">
            <li>Wicked Fast Responses (usually! Depends on the dial-up connection to the AI mainframe).</li>
            <li>Slang-tastic Interface that's cooler than a polar bear's toenails.</li>
            <li>Zero Floppy Disks Required! (But we miss 'em).</li>
            <li>Nostalgia Overload: Guaranteed to make you say "As If!" and "Booyah!"</li>
            <li>Responsive Design: Looks great even on your buddy's old 800x600 CRT monitor.</li>
            <li>100% Y2K Compliant (We think. Fingers crossed!).</li>
          </ul>
        </div>
        
        {/* 90s Under Construction Element */}
        <div className="mt-8 p-4 bg-black border-4 border-dashed border-accent-yellow rounded-md text-center overflow-hidden">
            <div className="flex items-center justify-center mb-2">
                <span className="text-4xl" role="img" aria-label="construction worker emoji">🚧</span>
                <span className="text-4xl mx-2 text-accent-yellow font-display animate-pulse">PAGE UNDER CONSTRUCTION</span>
                <span className="text-4xl" role="img" aria-label="construction worker emoji">🚧</span>
            </div>
            <p className="font-mono text-accent-lime text-sm">
                (Not really, but it looks cool, right? Like those old GeoCities pages!)
            </p>
            <div className="mt-2 h-8 bg-accent-yellow overflow-hidden relative">
                <div className="absolute whitespace-nowrap animate-marquee">
                    <span className="text-black font-bold font-display text-lg px-2">
                        WORK IN PROGRESS... RADICAL UPDATES COMIN' SOON!... STAY TUNED!... KEEP IT REAL!... MORE COWBELL!...
                    </span>
                </div>
            </div>
        </div>

        <div className="p-4 bg-container-alt-bg border-2 border-accent-cyan rounded-lg shadow-inner">
          <h2 className="text-2xl font-display text-accent-yellow mb-2">Got Questions? Hit Me Up! (Not Really)</h2>
          <p className="text-text-secondary font-mono leading-relaxed">
            This is just a demo, my friend! But if you dig it, that's totally tubular. 
            Keep exploring, keep prompting, and keep the 90s spirit alive! Booyah! And remember, be kind, rewind (your old VHS tapes).
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <ComputerIcon className="w-12 h-12 text-accent-cyan transform hover:scale-110 transition-transform duration-200" />
            <MailIcon className="w-12 h-12 text-accent-pink transform hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </section>

      <p className="mt-10 text-center text-accent-lime font-mono text-sm">
        Remember to save your work, and don't forget to feed your Tamagotchi! Oh, and "Don't Copy That Floppy!"
      </p>
    </div>
  );
};

export default AboutPage;
