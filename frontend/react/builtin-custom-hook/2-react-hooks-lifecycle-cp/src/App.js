import React from "react";
import './App.css';

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [quote, setQuote] = React.useState("");
  const [loading , setLoading] = React.useState(true);
  React.useEffect(() => {
    // TODO: answer here
    (getQuote())
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <div>
      <div>
        <text>Random Quote</text>
      </div>
      <div className="button-container">
        <button onClick={getQuote}>Get another quote</button>
      </div>
      <div className="quote-box">
        <div className="quote" data-testid="quote">
	  <p>{loading ? "Loading..." : quote.content}</p>
	  <p>{loading ? "" : quote.author}</p>
        </div>
      </div>
    </div>
  );
}
