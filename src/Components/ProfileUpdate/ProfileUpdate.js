import React,{useState} from'react'
import './ProfileUpdate.css'
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';
//component
import FormDialog from '../Dialog/FormDialog'
import BasicTable from "../Table/Table"
//Speed Dial
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@mui/material/Button';


function ProfileUpdate() {
    const Params=useParams()
    const RegNo=Params.RegNo;
    const Degree=Params.Degree;
    const [callGetData,setcallGetData]=useState(false)
    const [DialogStatus,setDialogStatus]=useState(false)
    const [SemesterN,setSemesterN]=useState('')
    const [Semester1, setSemester1] = useState(false)
    const [Semester2, setSemester2] = useState(false)
    const [Semester3, setSemester3] = useState(false)
    const [Semester5, setSemester5] = useState(false)
    const [Semester6, setSemester6] = useState(false)
    const [Semester4, setSemester4] = useState(false)

//Speed Dial
const actions = [
    { icon: Semester1?<RemoveIcon/>:<SpeedDialIcon />, name: 'Semester1' },
    { icon: Semester2?<RemoveIcon/>:<SpeedDialIcon />, name: 'Semester2' },
    { icon: Semester3?<RemoveIcon/>:<SpeedDialIcon />, name: 'Semester3' },
    { icon: Semester4?<RemoveIcon/>:<SpeedDialIcon />, name: 'Semester4' },
    { icon: Semester5?<RemoveIcon/>:<SpeedDialIcon />, name: 'Semester5' },
    { icon: Semester6?<RemoveIcon/>:<SpeedDialIcon />, name: 'Semester6' },
  ];
  

    //SpeedDial
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const InputForm=()=>{
        setDialogStatus(true)
    }

    function semesterAction(item){
        if(item==="Semester1"){
            setSemester1(!Semester1)
        }else if(item==="Semester2"){
            setSemester2(!Semester2)
        }else if(item==="Semester3"){
            setSemester3(!Semester3)
        }else if(item==="Semester4"){
            setSemester4(!Semester4)
        }else if(item==="Semester5"){
            setSemester5(!Semester5)
        }else if(item==="Semester6"){
            setSemester6(!Semester6)
        }
    }    

    function SemesterOneInupt(semN){
        setDialogStatus(true)
        setSemesterN(semN)
    }

    return (
        <div className="profile__wraper" >
    <div style={{width:"89%"}}>
        {Semester1&&<><h2 style={{textAlign:"center"}} onClick={()=>{SemesterOneInupt("Semester1")}}>Semester 1</h2><BasicTable callGetData={callGetData} Degree={Degree} RegNo={RegNo} SemesterN={"Semester1"} setSemesterN={setSemester1}/></>}
        {Semester2&&<><h2 style={{textAlign:"center"}} onClick={()=>{SemesterOneInupt("Semester2")}}>Semester 2</h2><BasicTable callGetData={callGetData} Degree={Degree} RegNo={RegNo} SemesterN={"Semester2"} setSemesterN={setSemester2}/></>}
        {Semester3&&<><h2 style={{textAlign:"center"}} onClick={()=>{SemesterOneInupt("Semester3")}}>Semester 3</h2><BasicTable callGetData={callGetData} Degree={Degree} RegNo={RegNo} SemesterN={"Semester3"} setSemesterN={setSemester3}/></>}
        {Semester4&&<><h2 style={{textAlign:"center"}} onClick={()=>{SemesterOneInupt("Semester4")}}>Semester 4</h2><BasicTable callGetData={callGetData} Degree={Degree} RegNo={RegNo} SemesterN={"Semester4"} setSemesterN={setSemester4}/></>}
        {Semester5&&<><h2 style={{textAlign:"center"}} onClick={()=>{SemesterOneInupt("Semester5")}}>Semester 5</h2><BasicTable callGetData={callGetData} Degree={Degree} RegNo={RegNo} SemesterN={"Semester5"} setSemesterN={setSemester5}/></>}
        {Semester6&&<><h2 style={{textAlign:"center"}} onClick={()=>{SemesterOneInupt("Semester6")}}>Semester 6</h2><BasicTable callGetData={callGetData} Degree={Degree} RegNo={RegNo} SemesterN={"Semester6"} setSemesterN={setSemester6}/></>}

    </div>
        <div style={{position: 'fixed', top: "30%", right: "50px"}}>
        <Box sx={{ height: 500, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => {
                return <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={()=>{semesterAction(action.name)}}
          />
        })}
      </SpeedDial>
    </Box>
    </div>

{/* Dialog */}
        {DialogStatus&&<FormDialog DialogStatus={DialogStatus} callGetData={callGetData} setDialogStatus={setDialogStatus} SemesterN={SemesterN} Degree={Degree} RegNo={RegNo} setcallGetData={setcallGetData} />}
        </div>
    )
}

export default ProfileUpdate;

