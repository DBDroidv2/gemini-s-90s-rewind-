import React from 'react';

// Define the props for the RetroButton component
interface RetroButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Click handler for the button
  children: React.ReactNode; // Content to be rendered inside the button (e.g., text, icons)
  color?: string; // Base background color for the button (e.g., 'bg-blue-500')
  hoverColor?: string; // Hover background color for the button (e.g., 'hover:bg-blue-600')
  className?: string; // Additional CSS classes for custom styling
  ariaLabel?: string; // ARIA label for accessibility
}

// RetroButton functional component
const RetroButton: React.FC<RetroButtonProps> = ({ 
  onClick, 
  children, 
  color = 'bg-accent-cyan', // Default background color
  hoverColor = 'hover:bg-opacity-80', // Default hover effect
  className = '', // Default empty string for additional classes
  ariaLabel = 'Retro button' // Default ARIA label
}) => {
  return (
    // Button element with retro-themed styling
    <button
      type="button" // Specify button type
      onClick={onClick} // Assign click handler
      className={`
        px-6 py-3 // Padding
        border-4 border-black // Thick black border for a retro look
        text-lg font-display // Text size and font
        rounded-lg // Slightly rounded corners
        shadow-hard-dark // Hard shadow for 3D effect
        text-button-text // Text color
        ${color} // Dynamic background color
        ${hoverColor} // Dynamic hover effect
        focus:outline-none focus:ring-4 focus:ring-accent-yellow // Focus styles for accessibility
        active:shadow-button-press // Shadow when button is pressed
        active:translate-y-1 // Move down slightly when pressed for tactile feedback
        transition-all duration-150 // Smooth transition for interactive effects
        ${className} // Additional custom classes
      `}
      aria-label={ariaLabel} // ARIA label for screen readers
    >
      {children} {/* Render children inside the button */}
    </button>
  );
};

export default RetroButton; // Export the component for use in other files
