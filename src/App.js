import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("list")) || [];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    const newArr = [input, ...list];
    setList(newArr);
    setInput("");
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
    newArr = [...newArr, workdone];
    setList(newArr);
  };

  return (
    <div className="App">
      <div>
        <h1> ToDo List</h1>
      </div>
      <div>
        <input type="text" className="" value={input} onChange={handleInput} />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <button onClick={() => handleComplete(index)}>Complete</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
