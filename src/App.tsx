import React, { useState } from 'react';


export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="mobile-converted">
      <span className="mobile-converted">🎓 AI Learning Companion - Deploy Ready</span>
      <button onClick={() => setCurrentPage('dashboard')}>
        <span>📊 Dashboard</span>
      </button>
      <div className="mobile-converted" style={{overflowY: "auto"}}>
        <span>Ready for GitHub Pages deployment!</span>
      </div>
    </div>
  );
}

