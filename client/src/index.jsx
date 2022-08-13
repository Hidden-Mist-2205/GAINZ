import { createRoot } from 'react-dom/client';
import React from 'react';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <div>Hello Tragic World!</div>
  );
}

root.render(<App />);
