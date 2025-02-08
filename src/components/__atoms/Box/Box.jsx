// import React, { useEffect, useState } from "react";
// import "./Box.css";
// import { fetchQuotes } from "../../../services/api";

// const Box = () => {
//   const [text, setText] = useState(false);
//   const [quotes, setQuote] = useState([]);

//   useEffect(() => {
//     fetchQuotes(setQuote);
//   }, []);

//   console.log(quotes);

//   return (
//     <>
//       {quotes.map((quote) => {
//         return (
//           <div className="Box">
//             <div className="first">
//               <p></p>
//               <button onClick={() => setText(!text)}>click</button>
//             </div>
//             {text && (
//               <div className="second">
//                 <p></p>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Box;
