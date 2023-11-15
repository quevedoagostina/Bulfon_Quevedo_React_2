import React, { useState } from "react";
import LMain from "../layouts/LMain";
import {
  Typography,
  List,
  Card,
  CardContent,
  Button,
  Divider,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
  styled,
  Grid,
} from "@mui/material";
import todos from "../data/todos.json";

const TaskCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  height: "100%", // Ajusta la altura de la tarjeta
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const TaskItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // Cambia el diseño a columna
  padding: theme.spacing(2),
  flexGrow: 1, // Hace que este contenedor crezca para ocupar todo el espacio disponible
}));

const StatusText = styled("span")(({ completed, theme }) => ({
  fontWeight: "bold",
  marginTop: theme.spacing(1),
  color: completed ? theme.palette.success.main : theme.palette.error.main,
}));

const PageNavigation = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: theme.spacing(2),
}));

export default function TaskList(props) {
  const [taskList, setTaskList] = useState(todos);
  const [tasksPerPage, setTasksPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleToggleComplete = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(updatedTaskList);
  };

  const handlePagePlus = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePageMinus = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleTasksPerPageChange = (event) => {
    setTasksPerPage(event.target.value);
    setCurrentPage(1); // Reset to the first page when changing tasks per page
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = taskList.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <LMain>
      <Typography variant="h4">Lista de tareas</Typography>

      <FormControl>
        <InputLabel id="tasks-per-page-label">Tareas por Página</InputLabel>
        <Select
          labelId="tasks-per-page-label"
          id="tasks-per-page"
          value={tasksPerPage}
          onChange={handleTasksPerPageChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        {currentTasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
            <TaskCard>
              <CardContent>
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
              </CardContent>
              <Divider />
            </TaskCard>
          </Grid>
        ))}
      </Grid>

      <PageNavigation>
        <Button variant="contained" color="primary" onClick={handlePageMinus}>
          Página Anterior
        </Button>
        <Typography>
          Mostrando {indexOfFirstTask + 1} - {Math.min(indexOfLastTask, taskList.length)} de {taskList.length} tareas
        </Typography>
        <Button variant="contained" color="primary" onClick={handlePagePlus}>
          Página Siguiente
        </Button>
      </PageNavigation>
    </LMain>
  );
}
