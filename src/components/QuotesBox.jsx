import React from "react";
import { useState } from "react";
import quotes from "./quotes.json";

const QuotesBox = () => {
  // console.log(quotes[0]);

  const [colors, setColors] = useState();
  function generarNumero(numero) {
    return (Math.random() * numero).toFixed(0);
  }

  function changeColors() {
    setColors(
      `rgb(${generarNumero(255)},${generarNumero(255)},${generarNumero(255)})`
    );
    return setColors;
  }
  document.body.onload = function() {
    changeColors();
  }
  //   console.log(colors);
  const radomQuotes = Math.floor(Math.random() * quotes.length);
  const [quoteIndex, setQuoteIndex] = useState(radomQuotes);
  const changeIndex = () => {
    setQuoteIndex(radomQuotes);
    changeColors();
  };
  return (
    <div className="container__box" style={{ background: [colors] }}>
      <div className="quotesbox">
        <span className="quotation" style={{ color: [colors] }}>
          &#8220;
        </span>
        <p className="paragraph" style={{ color: [colors] }}>{quotes[quoteIndex].quote}</p>
        
        <h3 className="author" style={{ color: [colors] }}>
          {quotes[quoteIndex].author}
        </h3>
        <button
          className="btn"
          onClick={changeIndex}
          style={{ background: [colors] }}>
          &#9758;
        </button>
      </div>
    </div>
  );
};

export default QuotesBox;
