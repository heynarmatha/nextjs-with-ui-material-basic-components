import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack>
      <Stack direction="row" spacing={5} m={5}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={5} ml={5}>
        <TextField
          label="Small"
          variant="outlined"
          color="error"
          size="small"
        />
      </Stack>

      <Stack direction="row" spacing={5} m={5}>
        <TextField 
            label="Required prop" 
            value={value} 
            required 
            onChange={(e)=> setValue(e.target.value)}
            error={!value}
            helperText={!value ? "error" : "Don't Share your password"}
        />
        <TextField
          label="Helper text prop"
          helperText="Do Not share your password"
        />
        <TextField
          label="password"
          type="password"
          helperText="Do Not share your password"
        />
        <TextField
          label="disabled"
          type="password"
          helperText="disable"
          disabled
        />
        <TextField
          label="read only"
          InputProps={{ readOnly: true }}
          helperText="read only"
        />
      </Stack>

      <Stack direction="row" spacing={5} m={5}>
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="left">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="right">kg</InputAdornment>,
          }}
        />
      </Stack>
      <div>
        <img src="../../images/logo.png"></img>
      </div>
    </Stack>
  );
};

export default MuiTextField;
