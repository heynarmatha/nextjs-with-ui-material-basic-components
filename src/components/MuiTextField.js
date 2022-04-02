import { Stack ,TextField } from "@mui/material"
const MuiTextField = () => {
  return (
    <Stack direction="row" spacing={5} m={5}>
       <TextField label="Name" variant="outlined"/> 
       <TextField label="Name" variant="filled"/> 
       <TextField label="Name" variant="standard"/> 
    </Stack>
  )
}

export default MuiTextField