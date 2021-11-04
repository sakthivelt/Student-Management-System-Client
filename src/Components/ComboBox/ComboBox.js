import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import {useEffect,useState} from 'react';


export default function ComboBox({selector,lableName,setitem}) {

  const [data,setdata]=useState();

  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const SelectOptions = [
  { SUBCODE: 'FTAM', SUBNAME:"TAMIL" },
  { SUBCODE: 'FEN', SUBNAME:"ENGLISH" },
  { SUBCODE: 'SAT', SUBNAME:"MATHS" },
];

  function getData(){
    axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/ListSetting`).then((item)=>{
      setdata(item.data)
      console.log(item)
    }).catch((item)=>{
      alert("error")
    })
  }

  useEffect(() => {
    getData()
  },[])


  return (
    <Autocomplete
    onChange={(event, newValue) => {
      setitem(newValue.toUpperCase())
    }}
    style={{margin:"0 20px"}}
      disablePortal
      id="combo-box-demo"
      options={selector==="SUBNAME"?data&&data.map(item=>item.SUBNAME):data&&data.map(item=>item.SUBCODE)}
      style={{width:'40%',margin:'5px 20px'}}
      renderInput={(params) => <TextField {...params} label={lableName} />}
    />
  );
}
