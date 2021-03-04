import React from "react";
import { Button } from "@material-ui/core";
/* import DeleteIcon from '@material-ui/icons/Delete'; */
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import Card from "@material-ui/core/Card";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <Card style={{ margin: "10px", minWidth: "200px" }}>
      <div
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        className="todo"
      >
        {todo.text}
        <div>
          <Button>
          <CheckSharpIcon onClick={() => completeTodo(index)}></CheckSharpIcon>
          </Button>
          <Button onClick={() => removeTodo(index)}>
            <DeleteForeverSharpIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Todo;
