import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/to-do/to-do-slice";

export const AddToDoComponent = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addToDoHandler = (e) => {
    e.preventDefault();
    dispatch(addToDo(input));
    setInput("");
  };
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addToDoHandler}> Submit</button>
    </>
  );
};
