
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const MODEL_NAME = "gemini-2.5-flash-preview-04-17";
let ai: GoogleGenAI | null = null;

const initializeAiClient = () => {
  // @ts-ignore
  const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : undefined;
  if (!apiKey) {
    console.error("Gemini API Key is not configured.");
    // This error will be caught by the calling function in App.tsx
    throw new Error("API Key not found. Please ensure the API_KEY environment variable is set.");
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const geminiService = {
  generateText: async (prompt: string): Promise<string> => {
    try {
      const client = initializeAiClient();
      if (!client) {
        // Should have been caught by initializeAiClient throwing, but as a safeguard:
        throw new Error("Gemini AI client is not initialized. API Key might be missing.");
      }

      const response: GenerateContentResponse = await client.models.generateContent({
        model: MODEL_NAME,
        contents: prompt,
        // No thinkingConfig means default (enabled) thinking.
        // No specific systemInstruction or other configs for this basic example.
      });
      
      // Accessing the text directly as per guidance
      const textOutput = response.text;
      if (typeof textOutput !== 'string') {
        console.error("Unexpected response format from Gemini API:", response);
        throw new Error("Received an unexpected response format from Gemini API.");
      }
      return textOutput;

    } catch (error) {
      console.error("Error calling Gemini API:", error);
      if (error instanceof Error) {
        // More specific error messages can be caught if needed (e.g., auth errors, rate limits)
        // For now, rethrow a generic message or the original error message.
        throw new Error(`Gemini API request failed: ${error.message}`);
      }
      throw new Error("An unknown error occurred while communicating with Gemini API.");
    }
  },
};
