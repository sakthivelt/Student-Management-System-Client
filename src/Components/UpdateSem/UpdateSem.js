import React,{useEffect,useState} from 'react';
import "./UpdateSem.css";
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ComboBox from './ComboBox';
import BasicSelect from '../Selecting/Selecting';

export default function UpdateSem({ID,Maindata,DialogStatus,setDialogStatus,SemesterN,Degree,RegNo,getData,setSemesterN}) {
  const [open, setOpen] = React.useState(false);
  //
  const [SubCode, setSubCode] = useState('')
  const [SubName, setSubName] = useState('')
  const [Attempt1Mark, setAttempt1Mark] = useState('')
  const [Attempt2Mark, setAttempt2Mark] = useState('')
  const [Attempt3Mark, setAttempt3Mark] = useState('')
  const [Attempt4Mark, setAttempt4Mark] = useState('')
  const [Attempt5Mark, setAttempt5Mark] = useState('')
  const [Attempt6Mark, setAttempt6Mark] = useState('')
  const [Attempt1Status, setAttempt1Status] = useState(true)
  const [Attempt2Status, setAttempt2Status] = useState(true)
  const [Attempt3Status, setAttempt3Status] = useState(true)
  const [Attempt4Status, setAttempt4Status] = useState(true)
  const [Attempt5Status, setAttempt5Status] = useState(true)
  const [Attempt6Status, setAttempt6Status] = useState(true)

  console.log(SubCode===false?"":SubCode," ",SubName===false?"":SubName)

  React.useEffect(() => {
    if(DialogStatus===true){
    handleClickOpen()
    }
  }, [DialogStatus])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogStatus(false)
    console.log(Attempt1Status)
  };


  useEffect(() => {
    if(!(Maindata==='')){
      if(ID!==''){
        let data1=Maindata.data[0];
        data1=data1[SemesterN]
        let data2=data1.filter((item)=>{
          if(item._id===ID){
            return true;
          }else{
            return false
          }
        })
        console.log(data2)
        setSubCode((data2[0].SubCode))
        setSubName((data2[0].SubName))
        setAttempt1Mark(data2[0].Attempt1.Mark)
        setAttempt2Mark(data2[0].Attempt2.Mark)
        setAttempt3Mark(data2[0].Attempt3.Mark)
        setAttempt4Mark(data2[0].Attempt4.Mark)
        setAttempt5Mark(data2[0].Attempt5.Mark)
        setAttempt6Mark(data2[0].Attempt6.Mark)
        setAttempt1Status(data2[0].Attempt1.Status)
        setAttempt2Status(data2[0].Attempt2.Status)
        setAttempt3Status(data2[0].Attempt3.Status)
        setAttempt4Status(data2[0].Attempt4.Status)
        setAttempt5Status(data2[0].Attempt5.Status)
        setAttempt6Status(data2[0].Attempt6.Status)
        // (SemesterN)
      }
    }
  }, [Maindata,ID])

  function Submit(){
    handleClose();
      axios.put(`http://localhost:5000/Profile/${SemesterN}/Update`,{
        _id:ID,
        RegNo:RegNo.toUpperCase(),
        SubCode:SubCode,
        SubName:SubName,
        Attempt1:{Mark:Attempt1Mark,Status:Attempt1Status},
        Attempt2:{Mark:Attempt2Mark,Status:Attempt2Status},
        Attempt3:{Mark:Attempt3Mark,Status:Attempt3Status},
        Attempt4:{Mark:Attempt4Mark,Status:Attempt4Status},
        Attempt5:{Mark:Attempt5Mark,Status:Attempt5Status},
        Attempt6:{Mark:Attempt6Mark,Status:Attempt6Status}
      }).then(()=>{
        // getData()
        setSemesterN(false)
        setSemesterN(true)
      }).catch((error)=>{alert(error)})
  }
  function deletefun(){
    handleClose();
    axios.put(`http://localhost:5000/Profile/${SemesterN}/Delete`,{
      _id:ID,
      RegNo:RegNo.toUpperCase()
    }).then(()=>{
      // getData()
      setSemesterN(false)
      setSemesterN(true)
    }).catch((error)=>{alert(error)})
  }

  return (
    <div >
      <Dialog open={open} onClose={handleClose} maxWidth={'xlg'} >
        <DialogTitle>{SemesterN}</DialogTitle>
        <DialogContent style={{width:'1200px',height:"50vh"}}>
            <div className="input__main" >
              <ComboBox selector={"SUBCODE"} lableName={"SUB CODE"} dvalue={SubCode} setitem={setSubCode}/>
              <ComboBox selector={"SUBNAME"} lableName={"SUB NAME"} dvalue={SubName} setitem={setSubName}/>
              <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',width:"95%"}}>
              
              <div className="status" >
              <TextField  id="standard-basic" label="Attempt 1 Mark" variant="standard" value={Attempt1Mark} onChange={(e)=>{setAttempt1Mark(e.target.value)}}/>              
              <BasicSelect dValue={Attempt1Status} setitem={setAttempt1Status}/>
              </div>

              <div className="status">
              <TextField disabled={Attempt1Status?true:false} id="standard-basic" label="Attempt 2 Mark" variant="standard" value={Attempt2Mark} onChange={(e)=>{setAttempt2Mark(e.target.value)}} />              
              <BasicSelect setdisabled={Attempt1Status?true:false} dValue={Attempt2Status} setitem={setAttempt2Status} />
              </div>
              
              <div className="status">
              <TextField disabled={Attempt2Status?true:false} id="standard-basic" label="Attempt 3 Mark" variant="standard" value={Attempt3Mark} onChange={(e)=>{setAttempt3Mark(e.target.value)}} />              
              <BasicSelect setdisabled={Attempt2Status?true:false} dValue={Attempt3Status} setitem={setAttempt3Status}/>
              </div>
              
              <div className="status">
              <TextField disabled={Attempt3Status?true:false} id="standard-basic" label="Attempt 4 Mark" variant="standard" value={Attempt4Mark} onChange={(e)=>{setAttempt4Mark(e.target.value)}}/>              
              <BasicSelect setdisabled={Attempt3Status?true:false} dValue={Attempt4Status} setitem={setAttempt4Status}/>
              </div>

              {Degree==='UG'&&<div className="status">
              <TextField disabled={Attempt4Status?true:false} id="standard-basic" label="Attempt 5 Mark" variant="standard" value={Attempt5Mark} onChange={(e)=>{setAttempt5Mark(e.target.value)}}/>              
              <BasicSelect setdisabled={Attempt4Status?true:false} dValue={Attempt5Status} setitem={setAttempt5Status}/>
              </div>}

              {Degree==="UG"&&<div className="status">
              <TextField disabled={Attempt5Status?true:false} id="standard-basic" label="Attempt 6 Mark" variant="standard" value={Attempt6Mark} onChange={(e)=>{setAttempt6Mark(e.target.value)}}/>              
              <BasicSelect setdisabled={Attempt5Status?true:false} dValue={Attempt6Status} setitem={setAttempt6Status}/>
              </div>}
              
              </div>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={Submit}>Submit</Button>
          <Button onClick={deletefun}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
