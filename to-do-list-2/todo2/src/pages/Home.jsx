import { Container, List } from "@mui/material";
import TodoItem from "../components/TodoItem";
import Form from "../components/Form";
import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    console.log(id);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
       <Form addTodo={addTodo} />
       <List sx={{ marginTop: "1em" }}>
          {todos.map((todo) => (
            <div key={todo.id} style={{ marginTop: "1em" }}>
              <TodoItem todo={todo} deleteTodo={deleteTodo} />
            </div>
          ))}
       </List>
      </Container>
  );
}

export default Home;