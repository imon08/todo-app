import React, { useEffect, useRef, useState } from "react";

function Bodysecond() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(["123", "234"]);


  const add = () => {
    const newarray = [...data];
    newarray.push(input);
    setInput("")
    setData(newarray);

  };

  return (
    <div>
      <input placeholder="Enter text" value={input} onChange={(e)=>{
        setInput(e.target.value)
      }}></input>
      <button onClick={add}>Add me</button>
      <div>
        {data.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Bodysecond;
