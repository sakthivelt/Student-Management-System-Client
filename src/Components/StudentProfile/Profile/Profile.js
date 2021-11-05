import React,{useEffect, useState} from 'react'
import './Profile.css'
import { useParams,useHistory,BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import axios from 'axios';
import UserAvatar from './UserAvatar'
import Semester from './Semester/Semester'
import Aos from 'aos';
import "aos/dist/aos.css"
//import material ui components
import PersonIcon from '@mui/icons-material/Person';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { isValid,format} from 'date-fns';


function Profile() {
    const RegNo=useParams().RegNo;
    const [UserData, setUserData] = useState("")
    const [Active1,setActive1]=useState(true);
    const [Active2,setActive2]=useState(false);
    const [Active3,setActive3]=useState(false);

    function getData(){
        axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/getinfo/${RegNo}`).then((item)=>{
            setUserData(item.data[0])
            console.log(item.data[0])
        }).catch(error=>console.log(error))
    }
    useEffect(() => {
        Aos.init({duration:2000})
        getData()
    }, [])
    
    function setActiveFun(item){
        switch (item) {
            case 1:
                setActive1(true)
                setActive2(false)
                setActive3(false)
                break;
            case 2:
                setActive1(false)
                setActive2(true)
                setActive3(false)
                break;
            case 3:
                setActive1(false)
                setActive2(false)
                setActive3(true)
                break;
                    
            default:
                break;
        }
    }

    return (
        <div className='profile' data-aos="zoom-in">
            {/* <div className='title'>
                <h2>STUDENT PROFILE</h2>
                <p>Periyar University College of Arts and Science</p>
            </div> */}
            <div className='left__side' data-aos="flip-left">
                    <div className="top" data-aos="flip-down" >
                        <UserAvatar url={UserData.ImageURL}/>
                        <span>
                        <h2>{UserData.RegNo}</h2>
                        <h2>{UserData.Name}</h2>
                        <h2>{UserData.Degree+" - "}{UserData.Course==="COMPUTER SCIENCE"?"CS":UserData.Course}</h2>
                        </span>
                    </div>
                    <div className='bottom' data-aos='flip-down'>
                        <Tooltip title="View" placement='top'><div className={Active1&&'active'} onClick={()=>{setActiveFun(1)}} ><Link to={`/Profiles/${RegNo}`} ><PersonIcon style={{width:'40px',height:"40px",color:"black"}}/></Link></div></Tooltip>
                        <Tooltip title="Semesters list" placement='top'><div className={Active2&&'active'} onClick={()=>{setActiveFun(2)}}><Link to={`/Profiles/${RegNo}/Sem`} ><ClearAllIcon style={{marginTop:"2px",width:'40px',height:"40px",color:'black'}}/></Link></div></Tooltip>
                        <Tooltip title="Edite" placement='top'><div className={Active3&&'active'} onClick={()=>{setActiveFun(3)}}><Link to={`/Profile/${UserData._id}/${RegNo}/Update`}><EditIcon style={{marginTop:"2px",width:'35px',height:"35px",color:'black'}}/></Link></div></Tooltip>
                    </div>
            </div>
            
            <div className='right__side' data-aos="flip-right">
                <Switch>
                    {/* View */}
                    <Route path={`/Profiles/${RegNo}`} exact>
                        <div className='view'>
                            <div data-aos="flip-down" data-aos-delay="500">DATE OF BIRTH : <span>{isValid(new Date(UserData.DOB))&&format(new Date(UserData.DOB),'dd/MM/yyyy')}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">PERIOD OF STUDY : <span>{UserData.PeriodOfStudy}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">GENDER : <span>{UserData.Gender}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">FATHER NAME : <span>{UserData.FatherName}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">MOTHER NAME : <span>{UserData.MotherName}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">AADHAR NO : <span>{UserData.AadharCardNo}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">VOTER ID : <span>{UserData.VoterIdNumber}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">NATIONALITY : <span>{UserData.Nationality}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">RELIGION : <span>{UserData.Religion}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">COMMUNITY : <span>{UserData.Community}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">BLOOD GROUP : <span>{UserData.BloodGroup}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">MOBILE NO : <span>{UserData.CellNo}</span></div>
                            <div data-aos="flip-down" data-aos-delay="500">PERMENENT ADDRESS : <span>{UserData.PermenentAddress}</span></div>                            
                        </div>
                    </Route>

                    {/* Semester List */}
                    <Route path={`/Profiles/${RegNo}/Sem`} exact>
                        <Semester UserData={UserData}/>
                    </Route>

                    {/* Update
                    <Route path={`/Profiles/${RegNo}/Update`} exact>
                        this is update
                    </Route> */}
                </Switch>                    
            </div>

        </div>
    )
}

export default Profile
