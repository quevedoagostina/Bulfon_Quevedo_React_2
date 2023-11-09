import React, { useState } from "react";
import LMain from "../layouts/LMain";
import { Typography, List, ListItem, Button, Divider, styled } from "@mui/material";
import todos from "../data/todos.json";

// Estilos personalizados para el estado "Completado" o "Pendiente"
const TaskItem = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #ccc",
  padding: "8px 0",
});

const StatusText = styled("span")({
  fontWeight: "bold",
  marginLeft: "8px",
  color: (props) => (props.completed ? "green" : "red"),
});

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
          <React.Fragment key={task.id}>
            <TaskItem>
              <Typography variant="body1">{task.title}</Typography>
              <StatusText completed={task.completed}>
                {task.completed ? "Completado" : "Pendiente"}
              </StatusText>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleToggleComplete(task.id)}
              >
                Cambiar Estado
              </Button>
            </TaskItem>
            <Divider />
          </React.Fragment>
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
