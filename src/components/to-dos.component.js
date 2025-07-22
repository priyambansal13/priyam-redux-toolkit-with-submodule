import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "../features/to-do/to-do-slice";

export const ToDosComponent = () => {
  const dispatch = useDispatch();
  const toDosState = useSelector((state) => state.toDos);

  const RemoveToDoHandler = (e) => {
    e.preventDefault();
    dispatch(removeToDo(1));
  };
  return (
    <>
      <span>{JSON.stringify(toDosState)}</span>
      <button onClick={RemoveToDoHandler}> Remove</button>
    </>
  );
};
