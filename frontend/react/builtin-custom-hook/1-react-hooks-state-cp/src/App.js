import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  // TODO: answer here
  return (
    <div aria-label="App">
      <RandomEmoji />
    </div>)
    
}

function RandomEmoji() {
  // TODO: answer here
  const [emoji, setEmoji] = useState("😀");
  useEffect(()=>{
    // TODO: answer here
    setEmoji(randomEmoji())
  }, [])
  return (
    <div className="wrapper">
      <h1 className='emoji' data-testid="emoji">{emoji}</h1>
      <button 
        onClick={() => setEmoji(randomEmoji())}
        className="button"
        >Acak emoji</button>
    </div>
  );
}

export function randomEmoji() {
  const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚',  '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🥳', '🥴', '🥺', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'
];
  // TODO: answer here
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export default App;