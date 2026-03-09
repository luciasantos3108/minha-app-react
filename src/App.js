import React, { useState } from 'react';
import './App.css';

function App() {
  const [cliques, setCliques] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Minha App React está Online!</h1>
        <p>Este projeto foi enviado do meu PC para o Railway via GitHub.</p>
        
        <div style={{ margin: '20px', padding: '20px', border: '1px solid white', borderRadius: '10px' }}>
          <p>Botão interativo:</p>
          <button 
            onClick={() => setCliques(cliques + 1)}
            style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
          >
            Clicaste {cliques} vezes
          </button>
        </div>

        <a className="App-link" href="https://github.com/luciasantos3108" target="_blank" rel="noopener noreferrer">
          Ver meu GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
