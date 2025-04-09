import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

try {
  // Try to import and log the calendar component
  import('@bbd-seyoung/headless-calendar')
    .then(module => {
      console.log('Successfully imported calendar module:', module);
    })
    .catch(error => {
      console.error('Failed to import calendar module:', error);
    });

  // Render the app
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Fatal error in main.jsx:', error);
  document.getElementById('root').innerHTML = `
    <div style="padding: 20px; color: red;">
      <h2>Application Error</h2>
      <p>${error.message}</p>
      <pre>${error.stack}</pre>
    </div>
  `;
}