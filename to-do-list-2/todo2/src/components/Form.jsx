import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = {text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
    // document.getElementById("outlined-basic").value = null;
    setText("");
  }

  return (
    <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField 
              id="outlined-basic" 
              value={text}
              label="Tarefa" 
              variant="outlined" 
              onChange={(e) => setText(e.target.value)} fullWidth 
            />
            <Button variant="text" onClick={() => todoCreate(text)}>Add</Button>
        </div>
    </Paper>
  );
}

export default Form;


