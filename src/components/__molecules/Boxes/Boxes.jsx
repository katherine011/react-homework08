import React, { useEffect, useState } from "react";
import { fetchQuotes } from "../../../services/api";
import "./Boxes.css";

const Boxes = () => {
  const [text, setText] = useState(false);
  const [quotes, setQuote] = useState([]);

  useEffect(() => {
    fetchQuotes(setQuote);
  }, []);

  console.log(quotes);

  return (
    <>
      {quotes.map((el) => {
        return (
          <div className="Box" key={el.id}>
            <div className="first">
              <p>{el.author}</p>
              <button onClick={() => setText(!text)}> </button>
            </div>
            {text && (
              <div className="second">
                <p>{el.quote}</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Boxes;
