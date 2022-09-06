import Header from "./components/Header";
import EnableColorOnDarkAppBar from "./components/PageHeader";
import Container from "@mui/material/Container";
import "./App.css";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App">
      <EnableColorOnDarkAppBar />
      <Container className="app-container" maxWidth="sm">
        <Header />
        <ListTask />
      </Container>
    </div>
  );
}

export default App;

// Objective
// In this checkpoint, we are going to use what we
// have learned previously to create a ToDo Application while using Redux to manage the global state.
// Instructions
// Create  the following component:
// Addtask
// ListTask
// Task
// Every task should have the following attributes:I d, description, isDone
// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// Edit a task
