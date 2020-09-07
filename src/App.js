import React, { useState } from "react";
import { ReactComponent as Twitter } from "./twitter.svg";
import "./styles.css";

const quotes = [
  {
    text:
      "Assumenda tempore odio aspernatur dolorum aliquam repellat aperiam velit, nesciunt deleniti reiciendis eaque rem?",
    author: "Lucy Hale"
  },
  {
    text:
      "Aperiam cum, repellendus obcaecati doloremque labore inventore architecto nesciunt expedita amet beatae corrupti? Placeat, eligendi quaerat!",
    author: "Byron Trace"
  },
  {
    text:
      "Pariatur adipisci alias tempora suscipit illo praesentium sed eveniet quod, reiciendis aliquid. Deserunt, ab culpa!",
    author: "Brian Mckennon"
  },
  {
    text:
      "Placeat ab, voluptas at nobis corporis sequi quae dolore autem eius perspiciatis deleniti assumenda quasi dicta, odit est porro deserunt dignissimos.",
    author: "Hugo Milde"
  },
  {
    text:
      "Deserunt vitae labore ad voluptates cum, voluptatibus incidunt veritatis sit a error deleniti nobis vero.",
    author: "Crissy Mullen"
  }
];

const colors = [
  "#dd99bb",
  "#1f1a38",
  "#7b506f",
  "#861388",
  "#c799a6",
  "#23ce6b",
  "#08605f",
  "#177e89",
  "#a2ad59",
  "#598381"
];

const initialState = quotes[Math.floor(Math.random() * quotes.length)];

export default function App() {
  const [quote, setQuote] = useState(initialState);
  const [color, setColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  const HandleNewQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <main id="quote-box">
        <p id="text" style={{ color: color }}>
          {quote.text}
        </p>
        <p id="author" style={{ color: color }}>
          {quote.author}
        </p>
        <span id="actions">
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            style={{ backgroundColor: color }}
          >
            <Twitter />
          </a>
          <button
            id="new-quote"
            onClick={HandleNewQuote}
            style={{ backgroundColor: color }}
          >
            New Quote
          </button>
        </span>
      </main>
    </div>
  );
}
