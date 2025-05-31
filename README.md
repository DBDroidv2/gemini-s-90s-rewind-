# Gemini's 90s Rewind!

Wazzup, home slice! Welcome to Gemini's 90s Rewind, your own private time machine back to the raddest decade ever, powered by Google's cutting-edge Gemini AI. It's like, totally AI-some! We're talkin' phat responses, slang that's all that and a bag of chips, and a vibe that'll make you wanna break out your Walkman and do the Macarena.

## How to Run the App

To get this digital masterpiece running on your local machine, follow these steps:

1.  **Install Dependencies**:
    Open your terminal in the project's root directory (`gemini's-90s-rewind!`) and run the following command to install all the necessary Node.js packages:
    ```bash
    npm install
    ```

2.  **Start the Development Server**:
    After the dependencies are installed, kick off the development server with this command:
    ```bash
    npm run dev
    ```
    This will start the Vite development server, usually accessible at `http://localhost:5173`.

3.  **Access the Application**:
    Open your web browser and navigate to the URL provided by the `npm run dev` command (e.g., `http://localhost:5173`) to view the application.

## API Key Configuration

This application uses the Google Gemini API. To make it work, you need to set your Gemini API key as an environment variable.

**Important**: Do NOT commit your API key directly into your code or `README.md`!

**How to set the API Key (Windows):**

1.  Open **System Properties** (you can search for it in the Start Menu).
2.  Click on **Environment Variables...**
3.  Under "User variables for \[Your Username]" or "System variables" (if you want it available for all users), click **New...**
4.  For "Variable name", enter `API_KEY`.
5.  For "Variable value", paste your actual Gemini API key.
6.  Click **OK** on all dialogs to save the changes.
7.  **Restart your terminal or IDE** for the changes to take effect.

Alternatively, for development, you can create a `.env` file in the root of your project and add:
```
API_KEY=YOUR_GEMINI_API_KEY_HERE
```
Replace `YOUR_GEMINI_API_KEY_HERE` with your actual key. Remember to add `.env` to your `.gitignore` file!

## Current Features

*   **AI Prompting (HomePage):** Interact with the Google Gemini AI by submitting prompts and receiving 90s-themed responses.
*   **API Key Configuration Check:** The app checks for the `API_KEY` environment variable and provides a warning if it's missing.
*   **Navigation:** A totally tubular `Navbar` allows you to cruise between different sections: Home, About, Gallery, Links, and Games.
*   **Static Content Pages:**
    *   `AboutPage`: Get the 411 on the app's purpose and tech stack.
    *   `GalleryPage`: Scope out a static collection of AI-generated 90s-inspired "artworks."
    *   `LinksPage`: Check out a list of "fake" 90s web links and a classic "WebRing."
    *   `GamesPage`: Browse a list of "fake" games with placeholder "Play Now" buttons, just like those shareware demos!
*   **90s Aesthetic:** The entire application is decked out with a strong 90s vibe, complete with slang, retro visuals, and nostalgic elements.

## To-Do List / Future Features

Here's what's left to make this app even more phat:

*   [ ] **Implement Actual Games:** Develop simple, playable 90s-style mini-games within the `GamesPage` (e.g., a text adventure, a basic puzzle).
*   [ ] **Dynamic Gallery Content:** Introduce functionality to allow users to generate and save AI-generated content (text or images) to the `GalleryPage`, making it interactive.
*   [ ] **Save/Bookmark AI Interactions:** Add a feature on the `HomePage` to save or bookmark favorite AI prompts and responses for later review.
*   [ ] **Theming/Customization Options:** Provide options for users to customize the application's visual theme, perhaps with different 90s sub-genres (e.g., "Grunge," "Neon").
*   [ ] **Enhanced Error Handling:** Improve the robustness of error messages and provide more specific guidance for common AI API issues.
*   [ ] **Accessibility Improvements:** Conduct a thorough accessibility audit and implement improvements beyond basic `aria-labels`.
