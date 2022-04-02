import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const MuiButton = () => {
  return (
    <Stack>
      <Stack display="block" spacing={4} direction="row" mt={3}>
        <Button variant="text" size="large" color="error">
          Text
        </Button>
        <Button variant="contained" size="large" color="success" onClick={()=>alert("Hello")}>
          contained
        </Button>
        <Button variant="outlined" size="medium" color="warning" disableElevation>
          outlined
        </Button>
      </Stack>
      <Stack display="block" spacing={4} direction="row" mt={3}>
          <Button variant="contained" startIcon={<SendIcon/>} >Icon left</Button>
          <Button variant="contained" endIcon={<SendIcon/>}  disableRipple>Icon right</Button>
          <IconButton>
              <SendIcon color="warning" size="large"/>
          </IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
