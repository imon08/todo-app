import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import "./App.css";
import { BsCheck2Circle } from "react-icons/bs";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("list")) || [];
  });

  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    const entry = {
      text: input,
      status: "todo",
    };
    const newArr = [entry, ...list];
    setList(newArr);
    setInput("");
    inputRef.current.focus();
  };

  const handleDelete = (index) => {
    const newArr = [...list];
    newArr.splice(index, 1);
    setList(newArr);
  };

  const handleComplete = (index) => {
    let newArr = [...list];
    const workdone = newArr[index];
    newArr.splice(index, 1);
    workdone.status = "complete";
    newArr = [...newArr, workdone];
    setList(newArr);
  };

  return (
    <div className="App">
      <h1 className="headline">Tasks</h1>
      <div className="inputWorkdiv">
        <input
          ref={inputRef}
          type="text"
          className="inputBar"
          value={input}
          onChange={handleInput}
        />

        <button className="addButton" onClick={handleSubmit}>
          Add
        </button>
      </div>

      <div className="listContainer">
        {list.map((item, index) => {
          return (
            <div key={index} className="listItem">
              <p className={`textbox ${item.status==="complete" && "strike"}`}>{item.text}</p>
              <div className="taskButtons">
                <BsCheck2Circle className={item.status==="complete" && "completed"} onClick={() => handleComplete(index)} />
                <RiDeleteBinLine onClick={() => handleDelete(index)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
