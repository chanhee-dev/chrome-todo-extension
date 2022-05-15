import React from 'react';
import {Box, Button} from '@mui/material';

const TodoListFooter = ({setTodoList}) => {
  const handleAllDelete = () => {
    setTodoList([]);
  };

  const handleAllDone = () => {
    setTodoList(previous => {
      return previous.map(todo => {
        return {
          ...todo,
          isDone: true
        }
      })
    })
  };

  return (
    <Box>
      <Button onClick={handleAllDelete}>모두 삭제</Button>
      <Button onClick={handleAllDone}>모두 해결</Button>
    </Box>
  )
}
export default TodoListFooter;