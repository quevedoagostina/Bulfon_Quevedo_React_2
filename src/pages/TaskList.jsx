import React, { useState } from "react";
import LMain from "../layouts/LMain";
import { Typography, List, ListItem, Button } from "@mui/material";
import todos from "../data/todos.json";

export default function TaskList(props) {
  const [taskList, setTaskList] = useState(todos);

  const handleToggleComplete = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(updatedTaskList);
  };

  const [menor, setMenor] = useState(0);
  const [mayor, setMayor] = useState(10);

  const handlePagePlus = () => {
    setMenor(menor + 10);
    setMayor(mayor + 10);
  };

  const handlePageMinus = () => {
    if (menor >= 10) {
      setMenor(menor - 10);
      setMayor(mayor - 10);
    }
  };

  return (
    <LMain>
      <Typography variant="h4">Lista de tareas</Typography>
      <List>
        {taskList.slice(menor, mayor).map((task) => (
          <ListItem key={task.id}>
            {task.title}
            {task.completed ? "Completado" : "Pendiente"}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleToggleComplete(task.id)}
            >
              Cambiar Estado
            </Button>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={handlePageMinus}>
        Página Anterior
      </Button>
      <Button variant="contained" color="primary" onClick={handlePagePlus}>
        Página Siguiente
      </Button>
    </LMain>
  );
}

