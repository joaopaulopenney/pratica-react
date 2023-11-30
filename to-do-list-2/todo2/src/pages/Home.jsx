import { Container, List } from "@mui/material";
import TodoItem from "../components/TodoItem";
import Form from "../components/Form";

const Home = () => {
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
       <Form />
       <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
          <TodoItem />
       </List>
      </Container>
  );
}

export default Home;