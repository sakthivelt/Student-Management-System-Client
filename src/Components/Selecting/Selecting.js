import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({setitem,setdisabled,dValue}) {
  const [status, setstatus] = React.useState(dValue);


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth disabled={setdisabled}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={(e)=>{
            setstatus(e.target.value.toString())  
            setitem(e.target.value)}}
        >
          <MenuItem value={true}>Pass</MenuItem>
          <MenuItem value={false}>Fail</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
