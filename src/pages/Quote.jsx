import { useEffect, useState } from "react";
import axios from "axios";

function Quote() {
  const [quote, setQuote] = useState("");
  const fetchQUote = () => {
    let randomNumber = Math.floor(Math.random() * 500) + 1;
    // First Method: Fetching with fetch
    // fetch(`https://jsonplaceholder.typicode.com/comments/${randomNumber}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setQuote(data.name);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching quote:", error);
    //   });

    // Second Method: Fetching with axios
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${randomNumber}`)

      .then((response) => {
        setQuote(response.data.name);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });

    //   fetch('https://jsonplaceholder.typicode.com/', {
    //     method: 'DELETE'
    //   })
  };

  useEffect(() => {
    fetchQUote();
  }, []);

  return (
    <div className="bg-amber-200 h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold">Quote Generator</h1>
      <p>Click below to generate a new quote</p>
      <button
        className="border border-black rounded-lg p-3 cursor-pointer"
        onClick={fetchQUote}>
        Click
      </button>
      <p>{quote ? quote : "Loading Quote..."}</p>
    </div>
  );
}

export default Quote;
