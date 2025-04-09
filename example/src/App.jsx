import React from 'react';
import { TestCalendar } from './TestCalendar';

function App() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Headless Calendar Example</h1>
      <p className="text-gray-600 mb-8 text-center">Test application for the headless calendar component</p>
      
      <TestCalendar />
    </div>
  );
}

export default App;