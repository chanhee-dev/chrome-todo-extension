import React from 'react';
import {Box} from '@mui/material';
import TodoItem from './TodoItem';

const TodoListContent = ({ todoList, setTodoList }) => {
  const handleDelete = (createdDate) => {
    setTodoList(previous => {
      return previous.filter(todo => {
        return createdDate !== todo.createdDate;
      });
    });
  };

  const handleDone = (createdDate) => {
    setTodoList(previous => {
      return previous.reduce((acc, cur) => {
        if (createdDate === cur.createdDate) {
          cur.isDone = !cur.isDone;
        }
        acc.push(cur);
        return acc;
      }, []);
    })
  };

  return (
    <Box>
      {todoList.map(todo => {
        return (
          <TodoItem
            key={todo.createdDate}
            onDelete={handleDelete}
            onDone={handleDone}
            label={todo.label} 
            isDone={todo.isDone}
            createdDate={todo.createdDate}
          />
        )
      })}          
    </Box>
  )
}

export default TodoListContent;