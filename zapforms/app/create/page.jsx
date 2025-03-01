"use client";
import Createform from "@/src/components/forms/createform";
import React, { useEffect, useState } from "react";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const COUNT_VALUE = "COUNT_VALUE";
const Create = () => {
  return (
    <div>
      <Counter />
      <Createform />
    </div>
  );
};

export default Create;

function Counter() {
  const [count, setCount] = useState(0);
  function onCounChange({ type = "", value }) {
    if (type === INCREASE) {
      const newCount = count + value;
      setCount(newCount);
      localStorage.setItem(COUNT_VALUE, newCount);
    } else if (type === DECREASE) {
      const newCount = count - value;
      setCount(newCount);
      localStorage.setItem(COUNT_VALUE, newCount);
    }
  }
  useEffect(() => {
    let getCount = localStorage.getItem(COUNT_VALUE);
    if (getCount) {
      setCount(Number(getCount));
    }
  }, []);
  return (
    <div>
      <button className="w-6 h-6 ">{count}</button>
      <button
        className="w-6 h-6 "
        onClick={() => onCounChange({ type: INCREASE, value: 1 })}
      >
        +
      </button>
      <button
        className="w-6 h-6 "
        onClick={() => onCounChange({ type: DECREASE, value: 1 })}
      >
        -
      </button>
    </div>
  );
}

// function FetchData(){
//   let [data , setdata] = useState([]);
//   let [loading , setLoaing] = useState(false)
//  async function getdata(){
//     setLoaing(true)
//     let responses = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//     let data =await  responses.json()
//     setdata((prev)=>[...prev  , ...data])
//     setLoaing(false)
//  }

//   return <div>

//     {
//       data.map((item)=>{
//         const {title = "", description = ""} = item;
//         return <div>
//           <h1>{title}</h1>
//           <p>{description}</p>
//         </div>
//       })
//     }
//     {
//       loading?<p>Loaidng ...</p>:<button onClick={getdata}>Get More data</button>
//     }
//   </div>
// }

//  function Calculator() {
//   const [input, setInput] = useState("");
//   const [history, setHistory] = useState([]);

//   const handleClick = (value) => {
//     setInput((prev) => prev + value);
//   };

//   const handleClear = () => {
//     setInput("");
//   };

//   const handleCalculate = () => {
//     try {
//       // Evaluate expression
//       const result = eval(input);
//       setHistory((prev)=>[...prev, `${input} = ${result}`]);
//       setInput(result.toString());
//     } catch (error) {
//       setInput("Error");
//     }
//   };

//   const handleClearHistory = () => {
//     setHistory([]);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-5 bg-gray-800 text-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-center mb-4">Next.js Calculator</h1>

//       {/* Display */}
//       <div className="bg-gray-700 p-3 text-right text-2xl rounded">{input || "0"}</div>

//       {/* Buttons */}
//       <div className="grid grid-cols-4 gap-2 mt-3">
//         {["7", "8", "9", "/"].map((btn) => (
//           <button key={btn} className="btn" onClick={() => handleClick(btn)}>
//             {btn}
//           </button>
//         ))}
//         {["4", "5", "6", "*"].map((btn) => (
//           <button key={btn} className="btn" onClick={() => handleClick(btn)}>
//             {btn}
//           </button>
//         ))}
//         {["1", "2", "3", "-"].map((btn) => (
//           <button key={btn} className="btn" onClick={() => handleClick(btn)}>
//             {btn}
//           </button>
//         ))}
//         {["0", ".", "C", "+"].map((btn) => (
//           <button key={btn} className="btn" onClick={btn === "C" ? handleClear : () => handleClick(btn)}>
//             {btn}
//           </button>
//         ))}
//         <button className="col-span-2 btn bg-green-500" onClick={handleCalculate}>
//           =
//         </button>
//         <button className="btn bg-red-500" onClick={handleClearHistory}>
//           Clear History
//         </button>
//       </div>

//       {/* History */}
//       <div className="mt-5">
//         <h2 className="text-lg font-bold mb-2">History</h2>
//         <ul className="bg-gray-700 p-2 rounded">
//           {history.length === 0 ? (
//             <li className="text-gray-400">No history yet</li>
//           ) : (
//             history.map((item, index) => <li key={index}>{item}</li>)
//           )}
//         </ul>
//       </div>

//       {/* Styles */}
//       <style jsx>{`
//         .btn {
//           padding: 15px;
//           font-size: 1.2rem;
//           background: #333;
//           border-radius: 8px;
//           text-align: center;
//           cursor: pointer;
//           transition: 0.2s;
//         }
//         .btn:hover {
//           background: #555;
//         }
//       `}</style>
//     </div>
//   );
// }
