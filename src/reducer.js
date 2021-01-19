import { v4 as uuidv4 } from "uuid";
import { ADD, COMPLETE, DEL, UNCOMPLETE } from "./actions";

export const initialState = {
  toDos: [],
  completed: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [{ text: action.payload, id: uuidv4() }, ...state.toDos],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
      };
    case COMPLETE:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [{ ...target }, ...state.completed],
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
        toDos: [{ ...aTarget }, ...state.toDos],
      };
    default:
      return;
  }
};

export default reducer;
