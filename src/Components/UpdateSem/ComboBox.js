import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({selector,lableName,setitem,dvalue}) {
const [InputValue, setInputValue] = useState(dvalue)

  return (
    <Autocomplete
    onChange={(event, newValue) => {
      newValue===false?setitem(''):setitem(newValue!==null&&newValue.toUpperCase())
    }}
    style={{margin:"0 20px"}}
      disablePortal
      id="combo-box-demo"
      options={selector==="SUBNAME"?SubN.map(item=>item):SubC.map(item=>item)}
      style={{width:'40%',margin:'5px 20px'}}
      renderInput={(params) => <TextField {...params} label={lableName} />}
      defaultValue={dvalue}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const SubC = [
   'FTAM',
  'FEN',
  'SAT'
];

const SubN=[
    "TAMIL",
    "ENGLISH",
    "MATHS" 
]