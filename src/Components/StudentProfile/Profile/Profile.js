import React,{useEffect, useState,useRef} from 'react'
import './Profile.css'
import { useParams,useHistory,BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import axios from 'axios';
import UserAvatar from './UserAvatar'
import Semester from './Semester/Semester'
import Aos from 'aos';
import "aos/dist/aos.css"
import More from './More/More'
import {storage} from '../../../FireBase/FireBase'
import {Report} from './More/Report/Report';
//import material ui components
import PersonIcon from '@mui/icons-material/Person';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { isValid,format} from 'date-fns';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
//Lottie Animation
import Loader from '../../Lottie/Loader/Loader' 
//react to print library
import { useReactToPrint } from 'react-to-print';


function Profile() {
    const History=useHistory()
    console.log(History)
    const RegNo=useParams().RegNo;
    const [UserData, setUserData] = useState("")
    const [Active1,setActive1]=useState(true);
    const [Active2,setActive2]=useState(false);
    const [Active3,setActive3]=useState(false);
    const [Active4,setActive4]=useState(false);


    //React to Print
    const componentRef = useRef();
        const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        });

    //BackDrop start
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
    //BackDrop end

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
                setActive4(false)
                setActive3(false)
                break;
            case 2:
                setActive1(false)
                setActive2(true)
                setActive4(false)
                setActive3(false)
                break;
            case 3:
                handleToggle()
                setActive1(false)
                setActive2(false)
                setActive4(false)
                setActive3(true)
                deletefun()
                break;
            case 4:
                setActive1(false)
                setActive2(false)
                setActive3(false)
                setActive4(true)
            default:
                break;
        }
    }

    function deleteImage(RR){
        console.log(RR)
        var ref=storage.ref(RR)
          ref.delete().then(()=>{
                    return 1
          }).catch((error)=>{console.log(error)
            return 0
        })    
      }

    function deletefun(){
        if(UserData){
            if(UserData.File10&&UserData.FileRef10){
                deleteImage(UserData.FileRef10)
            }
            if(UserData.File11&&UserData.FileRef11){
                deleteImage(UserData.FileRef11)
            }
            if(UserData.File12&&UserData.FileRef12){
                deleteImage(UserData.FileRef12)
            }
            if(UserData.ImageRef&&UserData.ImageURL){
                deleteImage(UserData.ImageRef)
            }
            axios.delete(`${process.env.REACT_APP_UNSPLASH_URL}/delete/${UserData._id}`).then(()=>{
                handleClose()
                History.push('/StudentList')
            }).catch((error)=>{
                handleClose()
                alert('Try Again !!')
            })
        }
    }

    return (
        <div className='profile' data-aos="zoom-in">
        <div>
      <Backdrop
        style={{backgroundColor:'transparent'}}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 100}}
        open={open}
      >
        <Loader/>
      </Backdrop>
    </div>
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
                        <Tooltip title="View" placement='top'><div className={Active1&&'active'} onClick={()=>{setActiveFun(1)}} ><Link to={`/Profiles/${RegNo}`} ><PersonIcon style={{width:'30px',height:"30px",color:"black"}}/></Link></div></Tooltip>
                        <Tooltip title="Semesters list" placement='top'><div className={Active2&&'active'} onClick={()=>{setActiveFun(2)}}><Link to={`/Profiles/${RegNo}/Sem`} ><ClearAllIcon style={{marginTop:"2px",width:'30px',height:"30px",color:'black'}}/></Link></div></Tooltip>
                        <Tooltip title="Delete" placement='top'><div className={Active3&&'active'} onClick={()=>{setActiveFun(3)}}><DeleteIcon style={{marginTop:"2px",width:'28px',height:"28px",color:'black'}}/></div></Tooltip>
                        <Tooltip title="Edite" placement='top'><div ><Link to={`/Profile/${UserData._id}/${RegNo}/Update`}><EditIcon style={{marginTop:"2px",width:'28px',height:"28px",color:'black'}}/></Link></div></Tooltip>
                        <Tooltip title="More" placement='top'><div className={Active4&&'active'} onClick={()=>{setActiveFun(4)}}><Link to={`/Profiles/${RegNo}/More`}><MoreHorizIcon style={{marginTop:"2px",width:'30px',height:"30px",color:'black'}}/></Link></div></Tooltip>
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
                    <Route path={`/Profiles/:RegNo/Sem`} exact>
                        <Semester UserData={UserData}/>
                    </Route>

                    //Route for Upload files of student
                    <Route path={`/Profiles/:RegNo/More/Upload`} >
                        <More UserData={UserData}/>
                    </Route>

                    //Route for Download Student reports
                    <Route path={`/Profiles/:RegNo/More/Download`} >
                        <div style={{width:'100%',height:'100%',overflowY:'scroll'}}>
                            <Report ref={componentRef} pageStyle="@page { size: 2.5in 4in }" documentTitle={RegNo} UserData={UserData}/>
                              <button onClick={handlePrint} style={{position:'fixed',bottom:'0',left:'0'}}>Print this out!</button>
                        </div>
                    </Route>
                    {/* Update
                    <Route path={`/Profiles/${RegNo}/Update`} exact>
                        this is update
                    </Route> */}
                    <Route path={`/Profiles/:RegNo/More`}>
                            <div className="More">
                                <Link to={`/Profiles/${RegNo}/More/Download`}>
                                    <div className="more__items">
                                    <DownloadIcon style={{width:"3rem",height:"3rem",color:"black"}}/>
                                    <h3>Download Student Statement</h3>
                                    </div>
                                </Link>
                                <Link to={`/Profiles/${RegNo}/More/Upload`}>
                                    <div className="more__items">
                                    <FileUploadIcon style={{width:"3rem",height:"3rem",color:"black"}}/>
                                    <h3>Upload Documents</h3>
                                    </div>
                                </Link>
                            </div>
                    </Route>
                </Switch>                    
            </div>

        </div>
    )
}

export default Profile
