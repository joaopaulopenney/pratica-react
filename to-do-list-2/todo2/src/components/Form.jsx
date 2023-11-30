import { Button, Paper, TextField } from "@mui/material";

const Form = () => {
  return (
    <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField id="outlined-basic" label="Tarefa" variant="outlined" fullWidth />
            <Button variant="text">Add</Button>
        </div>
    </Paper>
  );
}

export default Form;


