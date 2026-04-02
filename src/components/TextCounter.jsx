import { useState } from "react";

function TextCounter({ title = "Count me as I type" }) {
  const [text, setText] = useState(title);

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div className="my-8 p-8 border-2 border-black rounded-lg flex flex-col gap-y-4 justify-center items-center text-center">
      <h1 className="text-center font-bold text-3xl">Text Counter</h1>
      <textarea
        name="text"
        defaultValue={text}
        className="border border-black rounded-lg p-2"
        onChange={(e) => handleChange(e.target.value)}
      />
      <h3>Character Count: {text.length}</h3>
    </div>
  );
}

export default TextCounter;
