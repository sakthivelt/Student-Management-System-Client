import React, { useEffect,useState } from 'react';
import './Semester.css';
import SemTable from '../../SemTable'
import Aos from 'aos';
import "aos/dist/aos.css";
import Switch from '@mui/material/Switch';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import Pending from './Pending/Pending';
import Tooltip from '@mui/material/Tooltip';



const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Semester({UserData}) {

  const [Sem,setSem]=useState(true);
  const [SemData,setSemData]=useState([])

  useEffect(()=>{
    Aos.init(1000)
    console.log(UserData)
    // console.log()
  },[])

  return (
        <div className='semester' data-aos="zoom-in">
          <div className='nav__bar'>
              <div onClick={()=>{setSem(!Sem)}}><Tooltip title="Pending List" placement='top'><Switch {...label} /></Tooltip></div>
              <div><Link to={`/Profile/Update/${UserData.RegNo}/${UserData.Degree}`}><AddIcon/></Link></div>
          </div>
          {
            Sem?<div className="view__semester">
            {<div><h3>Semester 1</h3><SemTable UserData={UserData} SemesterN={"Semester1"}/></div>}
              {<div><h3>Semester 2</h3><SemTable UserData={UserData} SemesterN={"Semester2"}/></div>}
              {<div><h3>Semester 3</h3><SemTable UserData={UserData} SemesterN={"Semester3"}/></div>}
              {<div><h3>Semester 4</h3><SemTable UserData={UserData} SemesterN={"Semester4"}/></div>}
              {UserData.Degree==="UG"&&<div><h3>Semester 5</h3><SemTable UserData={UserData} SemesterN={"Semester5"}/></div>}
              {UserData.Degree==="UG"&&<div><h3>Semester 6</h3><SemTable UserData={UserData} SemesterN={"Semester6"}/></div>}
            </div>:<div className='pending__semester'>
                <Pending UserData={UserData}/>
            </div>
          }
        </div>
    )
}

export default Semester
