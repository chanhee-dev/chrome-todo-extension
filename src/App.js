import React, { useState } from 'react';
import { Paper } from '@mui/material';
import TodoListHeader from './TodoListHeader';
import TodoListContent from './TodoListContent';
import TodoListFooter from './TodoListFooter';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Paper sx={{
        width: '400px'
      }}>
        <TodoListHeader setTodoList={setTodoList} />
        <TodoListContent todoList={todoList} setTodoList={setTodoList} />
        <TodoListFooter setTodoList={setTodoList} />
      </Paper>
    </div>
  );
}

export default App;
