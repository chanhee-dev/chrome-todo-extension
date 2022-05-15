import React, {useState} from 'react';
import {Box, Typography, Stack, TextField, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TodoListHeader = ({ setTodoList }) => {
  const [value, setValue] = useState("");
  
  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  const handleNew = () => {
    setTodoList(previous => {
      return [...previous, {
        label: value,
        createdDate: Date.now(),
        modifiedDate: Date.now(),
        isDone: false,
        priority: 0
      }];
    });
    setValue("");
  }

  const handleEnterKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleNew();
    }
  }

  return (
    <Box>
      <Typography>22.05.14</Typography>
      <Stack direction="row" alignItems="center">
        <TextField value={value} onChange={handleValueChange} onKeyUp={handleEnterKeyPress}/>
        <IconButton onClick={handleNew}>
          <AddIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default TodoListHeader;