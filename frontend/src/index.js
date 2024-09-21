import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your CSS file for global styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Performance measurement tool

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in your app
reportWebVitals(console.log); // Log results to the console or send to an analytics endpoin
