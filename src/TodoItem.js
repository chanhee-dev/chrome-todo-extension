import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import {Stack, Typography, IconButton, Box} from '@mui/material';

const TodoItem = ({label, onDelete, onDone, isDone, createdDate}) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent={"space-between"}>
      <Typography sx={{
        textDecoration: isDone ? 'line-through' : 'none'
      }}>
        {label}
      </Typography>
      <Box>
        <IconButton onClick={() => {onDone(createdDate)}}>
          <CheckIcon />
        </IconButton>
        <IconButton onClick={() => {onDelete(createdDate)}}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Stack>
  )
}
export default TodoItem; 