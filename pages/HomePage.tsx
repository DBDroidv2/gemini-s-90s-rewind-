
import React, { useState, useCallback, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { SendIcon, AlertTriangleIcon, CheckCircleIcon, InfoIcon, EraserIcon } from '../components/icons';

const HomePage: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKeyConfigured, setApiKeyConfigured] = useState<boolean>(false);

  useEffect(() => {
    // @ts-ignore
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY && process.env.API_KEY.length > 0) {
      setApiKeyConfigured(true);
    } else {
      setApiKeyConfigured(false);
      setError("Whoa, hold the phone! API Key is MIA. Link it up to surf the digital wave!");
      console.warn("API_KEY not found. This app is, like, totally buggin' without it.");
    }
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKeyConfigured) {
      setError("No can do, home slice! API Key's not set. What's the 411?");
      return;
    }
    if (!prompt.trim()) {
      setError("Don't be a square! You gotta type a prompt, my friend!");
      return;
    }
    if (isLoading) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const result = await geminiService.generateText(prompt);
      setResponse(result);
    } catch (err) {
      console.error("Error generating text:", err);
      const message = err instanceof Error ? err.message : "an unknown gremlin in the system.";
      setError(`Psych! Gemini's being a major drag: ${message} Try again?`);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading, apiKeyConfigured]);

  const handleClear = useCallback(() => {
    setPrompt('');
    setResponse(null);
    setError(null);
  }, []);

  const canClear = prompt.trim() !== '' || response !== null || error !== null;

  return (
    <div className="bg-container-bg shadow-hard-neon border-4 border-accent-yellow rounded-xl w-full max-w-2xl p-4 sm:p-6 md:p-8 text-text-primary">
      <header className="mb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-pink to-accent-lime drop-shadow-[2px_2px_0_rgba(0,0,0,0.7)]">
          Gemini's 90s Rewind!
        </h1>
        <p className="text-accent-lime mt-3 text-lg">Wazzup! Type a prompt & get a da bomb response!</p>
      </header>

      {!apiKeyConfigured && error && (
        <div className="mb-4 p-4 bg-error-bg border-l-4 border-error-border text-error-text rounded-md flex items-start animate-pulse-funky">
          <AlertTriangleIcon className="h-6 w-6 mr-3 text-error-border flex-shrink-0" />
          <div>
            <p className="font-bold font-display text-lg">Uh Oh, SpaghettiOs!</p>
            <p>{error}</p>
          </div>
        </div>
      )}

      {apiKeyConfigured && !error && !response && !isLoading && (
        <div className="mb-4 p-3 bg-success-bg border-l-4 border-success-border text-success-text rounded-md flex items-center">
           <CheckCircleIcon className="h-5 w-5 mr-2 text-success-border flex-shrink-0" />
           <p className="text-sm">Booyah! API Key's dialed in. You're all that!</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="prompt" className="block text-sm font-bold text-accent-cyan mb-1 font-display tracking-wide">
            Lay down your Phat Prompt:
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='e.g., "Write a story about a Tamagotchi that gained sentience..."'
            rows={4}
            className="w-full p-3 bg-input-bg border-2 border-input-border rounded-lg shadow-inner text-text-primary placeholder-text-placeholder focus:ring-2 focus:ring-input-focus-ring focus:border-input-focus-ring transition-all duration-200 resize-none focus:bg-container-alt-bg"
            disabled={isLoading || !apiKeyConfigured}
            aria-label="Prompt input field"
            aria-describedby="prompt-tip"
          />
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              type="submit"
              disabled={isLoading || !prompt.trim() || !apiKeyConfigured}
              className="w-full flex items-center justify-center px-6 py-3 border-2 border-black text-lg font-display rounded-lg shadow-hard-dark text-button-text bg-button-bg hover:bg-button-hover-bg focus:outline-none focus:ring-4 focus:ring-accent-yellow active:shadow-button-press active:translate-y-0.5 transition-all duration-150 disabled:bg-button-disabled-bg disabled:text-text-secondary disabled:shadow-none group"
              aria-label="Submit prompt to Gemini"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner className="h-6 w-6 mr-2 text-accent-yellow" />
                  <span>Dialing Up AI...</span>
                </>
              ) : (
                <>
                  <SendIcon className="h-6 w-6 mr-2 transform transition-transform duration-200 group-hover:rotate-12" />
                  <span>Get Jiggy With It!</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={!canClear || isLoading}
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border-2 border-black text-lg font-display rounded-lg shadow-hard-dark text-button-text bg-accent-cyan hover:bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-accent-yellow active:shadow-button-press active:translate-y-0.5 transition-all duration-150 disabled:bg-button-disabled-bg disabled:text-text-secondary disabled:shadow-none group"
              aria-label="Clear prompt and response"
            >
              <EraserIcon className="h-6 w-6 mr-2 transform transition-transform duration-200 group-hover:scale-110" />
              <span>Start Over, Dude!</span>
            </button>
        </div>
      </form>

      {error && !isLoading && apiKeyConfigured && (
         <div className="mt-6 p-4 bg-error-bg border-l-4 border-error-border text-error-text rounded-md flex items-start">
          <AlertTriangleIcon className="h-6 w-6 mr-3 text-error-border flex-shrink-0" />
          <div>
              <p className="font-bold font-display text-lg">Talk to the Hand!</p>
              <p>{error}</p>
          </div>
        </div>
      )}

      {response && !isLoading && (
        <div className="mt-8 p-1">
          <h2 className="text-2xl font-display text-accent-lime mb-2 drop-shadow-[1px_1px_0_rgba(0,0,0,0.5)]">Word! Here's the 411:</h2>
          <div className="bg-container-alt-bg p-4 rounded-lg border-2 border-accent-cyan shadow-inner whitespace-pre-wrap overflow-x-auto text-text-console font-mono max-h-[50vh] text-sm md:text-base"  aria-live="assertive">
            {response}
          </div>
        </div>
      )}
      
      {!response && !isLoading && !error && apiKeyConfigured && (
         <div id="prompt-tip" className="mt-6 p-4 bg-info-bg border-l-4 border-info-border text-info-text rounded-md flex items-start">
          <InfoIcon className="h-6 w-6 mr-3 text-info-border flex-shrink-0" />
          <p>The AI mainframe is, like, totally ready for your awesome prompt!</p>
        </div>
      )}

      {apiKeyConfigured && (
        <div className="mt-8 p-4 bg-container-alt-bg border-2 border-accent-lime rounded-lg shadow-inner">
          <h3 className="text-xl font-display text-accent-yellow mb-2 flex items-center">
            <InfoIcon className="h-5 w-5 mr-2 text-accent-yellow" />
            Totally Tubular Tips!
          </h3>
          <ul className="list-disc list-inside font-mono text-sm space-y-1 text-text-secondary">
            <li>Be specific, dude! The more deets you give, the better the AI's vibe.</li>
            <li>Ask for stuff in a 90s style, like "Write a rap about floppy disks, yo!"</li>
            <li>Don't be a wannabe, use authentic 90s slang in your prompts for max nostalgia!</li>
            <li>If the AI is buggin', try rephrasing your prompt. Sometimes it just needs a chill pill.</li>
            <li>Remember: This AI is learning, so be patient, my friend. It's not psychic... yet!</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
