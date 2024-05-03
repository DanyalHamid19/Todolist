import React, { useState } from 'react';
import { Button, Container, TextField, Typography, List, ListItem, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import "./App.css";
function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container
      style={{
        backgroundColor: "#ADD8E6",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
      maxWidth={false}
    
      ><h2>Enter Your Daily Tasks Below </h2>
      <Paper
        elevation={3}
        style={{ padding: "20px", marginTop: "20px", borderRadius: "15px" }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{
            backgroundColor: "#2196f3",
            textAlign: "center",
            padding: "10px",
            borderRadius: "10px 10px 0 0",
            color: "#fff",
          }}
        >
          Todo-List
        </Typography>
        <br></br>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <TextField
            label="Add a task"
            variant="outlined"
            fullWidth
            value={task}
            onChange={handleInputChange}
          />
          <Button variant="contained" onClick={handleAddTask}>
            ADD
          </Button>
        </div>
        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              disablePadding
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography>{task}</Typography>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteTask(index)}
                style={{ color: "black", marginLeft: "auto" }}
              >
                <DeleteIcon style={{ color: "red" }} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default App;
