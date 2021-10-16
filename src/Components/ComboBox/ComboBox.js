import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({selector,lableName,setitem}) {
  return (
    <Autocomplete
    onChange={(event, newValue) => {
      setitem(newValue.toUpperCase())
    }}
    style={{margin:"0 20px"}}
      disablePortal
      id="combo-box-demo"
      options={selector==="SUBNAME"?top100Films.map(item=>item.SUBNAME):top100Films.map(item=>item.SUBCODE)}
      style={{width:'40%',margin:'5px 20px'}}
      renderInput={(params) => <TextField {...params} label={lableName} />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { SUBCODE: 'FTAM', SUBNAME:"TAMIL" },
  { SUBCODE: 'FEN', SUBNAME:"ENGLISH" },
  { SUBCODE: 'SAT', SUBNAME:"MATHS" },
  
];
