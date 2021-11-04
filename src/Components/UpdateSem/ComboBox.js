import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'

export default function ComboBox({selector,lableName,setitem,dvalue}) {
        const [InputValue, setInputValue] = useState(dvalue)
        const [SubC,setSubC] =useState([]) 
        const [SubN,setSubN]=useState([])

        function getdata(){
          axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/ListSetting`).then((item)=>{
            console.log(item)
              let data=item.data.map((i)=>{
                  return i.SUBNAME
              })
              setSubN(data)
              data=item.data.map((i)=>{
                return i.SUBCODE
              })
              setSubC(data)
            }).catch(error=>{console.log(error)})
        }
        useEffect(()=>{
          getdata()
        },[])


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

