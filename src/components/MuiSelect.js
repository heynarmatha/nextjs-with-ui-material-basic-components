import { Box, TextField, MenuItem } from "@mui/material";

const UiSelect = () => {
  return (
    <Box width="250px" m={5}>
      <TextField
        label="Select Country"
        select
        fullWidth
      >
        <MenuItem value="In">India</MenuItem>
        <MenuItem value="US">US</MenuItem>
        <MenuItem value="M">Mumbai</MenuItem>
      </TextField>
    </Box>
  );
};

export default UiSelect;
