import React from 'react';
import './Stepper.css'
import Warning from '../Lottie/Warning/Warning';
import Success from "../Lottie/Success/Success";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {Link} from 'react-router-dom'
//material ui components
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import CheckIcon from '@material-ui/icons/Check';
import { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
//firebase
import  {storage} from '../../FireBase/FireBase'
console.log(storage)



const useStyles = makeStyles((theme) => ({
  
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    cursor:'pointer',
    boxShadow:"-1px 7px 48px -8px rgba(0,0,0,0.56)",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function getSteps() {
  return ['', '',];
}


export default function HorizontalLinearStepper() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const Courses=['Tamil',"English","Maths",'Physics',"Computer Science","commerce"]
  //valuse for main
  const [Name, setName] = useState('');
  const [RegNo, setRegNo] = useState('');
  const [Degree, setDegree] = useState('');
  const [Course, setCourse] = useState('');
  const [DOB, setDOB] = useState('');
  const [PeriodOfStudy, setPeriodOfStudy] = useState('');
  const [Gender, setGender] = useState('');
  const [FatherName, setFatherName] = useState('');
  const [MotherName, setMotherName] = useState('');
  const [AadharCardNo, setAadharCardNo] = useState('');
  const [VoterIdNumber, setVoterIdNumber] = useState('');
  const [CellNo, setCellNo] = useState('');
  const [EmailId, setEmailId] = useState('');
  const [Nationality, setNationality] = useState('');
  const [Religion, setReligion] = useState('');
  const [Community, setCommunity] = useState('');
  const [BloodGroup, setBloodGroup] = useState('');
  const [PermenentAddress, setPermenentAddress] = useState('');
  const [ImageURL, setImageURL] = useState('')
  const [Image, setImage] = useState('')
  const [ImageRef, setImageRef] = useState('')
  const [OldUser,setOldUser]=useState(true)
  const [Animation,setAnimation]=useState(true)

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  
//main start
function getStepContent(step) {
  switch (step) {
    case 0:
      return <div style={{width:'100%',height:'400px'}} >
            <div className='student__bio1'>
                <TextField style={{margin:'30px 60px'}} value={Name} onChange={(e)=>{setName(e.target.value)}} id="input-with-icon-adornment" label='Student name'/>
                <TextField required style={{margin:'20px 60px'}} value={RegNo} onChange={(e)=>{setRegNo(e.target.value)}} id="standard-basic" label="Register No"/>
                <div style={{width:'200px',width:'200px',margin:'20px 60px'}}>
                  <FormControl className={classes.formControl} >
                  <InputLabel id="demo-simple-select-label" required>Degree</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Degree}
                    onChange={(event)=>{setDegree(event.target.value)}}
                  >
                    <MenuItem value={''}>None</MenuItem>
                    <MenuItem value={"UG"}>UG</MenuItem>
                    <MenuItem value={"PG"}>PG</MenuItem>
                  </Select>
                </FormControl>
                </div>
                <div style={{width:'200px',width:'200px',margin:'20px 60px'}}>
                  <FormControl className={classes.formControl} >
                  <InputLabel id="demo-simple-select-label">Course</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Course}
                    onChange={(event)=>{setCourse(event.target.value)}}
                  >
                    {Courses.map((item,index)=>{
                    return <MenuItem value={item} key={index}>{item}</MenuItem>
                    })}
                  </Select>
                </FormControl>
                </div>
                <TextField style={{margin:'20px 60px'}} value={DOB} onChange={(e)=>{setDOB(e.target.value)}} id="standard-basic" label="Date Of Birth"/>
                <TextField style={{margin:'20px 60px'}} value={PeriodOfStudy} onChange={(e)=>{setPeriodOfStudy(e.target.value)}} id="standard-basic" label="Period Of Study"/>
                <div style={{width:'200px',width:'200px',margin:'20px 60px'}}>
                  <FormControl className={classes.formControl} >
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Gender}
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>None</MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </FormControl>
                </div>
                <TextField style={{margin:'20px 60px'}} value={FatherName} onChange={(e)=>{setFatherName(e.target.value)}} id="standard-basic" label="Father Name"/>
                <TextField style={{margin:'20px 60px'}} value={MotherName} onChange={(e)=>{setMotherName(e.target.value)}} id="standard-basic" label="Mother Name"/>
            </div>
            </div>
    case 1:
      return <div style={{width:'100%',height:'400px',background:'white'}}>
             <div className='student__bio2'>
               <div style={{width:'70%',height:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
               <TextField style={{margin:'20px 60px'}} value={AadharCardNo} onChange={(e)=>{setAadharCardNo(e.target.value)}} id="standard-basic" label="Aadhar Card No"/>
                <TextField style={{margin:'20px 60px'}} value={VoterIdNumber} onChange={(e)=>{setVoterIdNumber(e.target.value)}} id="standard-basic" label="Voter ID"/>
               <TextField style={{margin:'20px 70px'}} value={CellNo} onChange={(e)=>{setCellNo(e.target.value)}} id="standard-basic" label="Mobile NO"/>
                <TextField style={{margin:'20px 70px'}} value={EmailId} onChange={(e)=>{setEmailId(e.target.value)}} id="standard-basic" label="Email Id"/>
                <TextField style={{margin:'20px 70px'}} value={Nationality} onChange={(e)=>{setNationality(e.target.value)}} id="standard-basic" label="Nationality"/>
                <TextField style={{margin:'20px 70px'}} value={Religion} onChange={(e)=>{setReligion(e.target.value)}} id="standard-basic" label="Religion"/>
                <TextField style={{margin:'20px 70px'}} value={Community} onChange={(e)=>{setCommunity(e.target.value)}} id="standard-basic" label="Community"/>
                <TextField style={{margin:'20px 70px'}} value={BloodGroup} onChange={(e)=>{setBloodGroup(e.target.value)}} id="standard-basic" label="Blood Group"/>
                <TextField style={{margin:'0px 70px'}} value={PermenentAddress} onChange={(e)=>{setPermenentAddress(e.target.value)}} id="outlined-multiline-flexible"  label="Permenent Address" multiline maxRows={4} />
                </div>

               <div style={{width:'20%',height:'100%',background:'white',display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center'}}>
              
               <Tooltip title={Image?<span onClick={()=>{deleteImage()}} style={{cursor:'pointer'}}>Cancen Image</span>:"Upload Image"} interactive>
               <div>
               <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e)=>{onChangeImage(e)}}
                disabled={Image?true:false}
              />
               <label htmlFor="contained-button-file">
               <div style={{display:"flex"}}>
               <CircularProgress variant="determinate" thickness={0.5} value={progress} style={{position:'absolute',zIndex:'1',width:"150px",height:"150px",cursor:'pointer'}}/>
              <Avatar alt="Remy Sharp" src={Image&&Image} className={`${classes.small} photo__avater`} style={{width:"150px",height:"150px",background:'white',color:'gray'}}>
                {Image?<CheckIcon style={{width:"100px",height:"100px"}}/>:<PersonIcon style={{width:"100px",height:"100px"}}/>}
              </Avatar>
              </div>
              </label>
              </div>
              </Tooltip>

              {/* <h2 >{Image?<span style={{cursor: "pointer"}} onClick={()=>{setImage('')}}>Cancel Image</span>:"Upload Image"}</h2> */}
               </div>
             </div>
              </div>
    case 2:
      return <div style={{width:'100%',height:'400px',background:'red'}}>
            <input/>
            </div>
    default:
      return 'Unknown step';
  }
}

//image upload
const [progress, setProgress] = React.useState(0);
function onChangeImage(e){
  if(e.target.files[0]){
    var file=e.target.files[0];
    console.log(file)
    if(file.name.split('.').pop()==="jpg"||file.name.split('.').pop()==="jpeg"){
      var ref=storage.ref('Students/'+file.name);
      setImageRef(ref);
      var task=ref.put(file);
      
      task.on("state_changed",(snapshot)=>{
          console.log(snapshot)
          setProgress((snapshot.bytesTransferred/snapshot.totalBytes)*100);
      },(error)=>{
            alert(error)
      },()=>{
        storage.ref("Students").child(file.name).getDownloadURL().then((res)=>{
          console.log(res)
          setImage(res)
          setImageURL(res)
          setProgress(0)
        })
      })
     
    }else{
      alert('this is not a image file')
    } 
  }

}

function deleteImage(){
  setImageURL('')
  if(ImageRef){
    var deleteRef=ImageRef.delete().then(()=>{
      setImage("");
    }).catch((error)=>{console.log(error)})
  }
  
}

function FormSubmit(){
  if(RegNo===""){
    setAnimation(false);
    setOldUser(false);
  }else{
    axios.post("http://localhost:5000/Create",{
      RegNo:RegNo.toUpperCase(),
      Name:Name.toUpperCase(),
      DOB,
      Degree,
      Course:Course.toUpperCase(),
      PeriodOfStudy,
      Gender:Gender.toUpperCase(),
      FatherName:FatherName.toUpperCase(),
      MotherName:MotherName.toUpperCase(),
      AadharCardNo,
      VoterIdNumber,
      CellNo,
      EmailId,
      Nationality:Nationality.toUpperCase(),
      Religion:Religion.toUpperCase(),
      Community:Community.toUpperCase(),
      BloodGroup:BloodGroup.toUpperCase(),
      PermenentAddress:PermenentAddress.toUpperCase(),
      ImageURL,
              }).then((res)=>{
                console.log(res )
                setOldUser(res.data.OldUser)
                setAnimation(false)
              }).catch(()=>{
                alert('error')
              })

  }
    
}

//main end

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setRegNo('')
    setName('')
    setDOB('')
    setDegree('')
    setCourse('')
    setPeriodOfStudy('')
    setGender('')
    setFatherName('')
    setMotherName('')
    setAadharCardNo('')
    setVoterIdNumber('')
    setCellNo('')
    setEmailId('')
    setNationality('')
    setReligion('')
    setCommunity('')
    setBloodGroup('')
    setPermenentAddress('')
    setImageURL('')
    setActiveStep(0);
  };
  const handleReEdite=()=>{
    setActiveStep(0);
  }

  return (
    <div className={classes.root} style={{height:'80vh',width:'100%'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div >
        {activeStep === steps.length ? (
          <div style={{width:'100%',height:'360px'}}>
            <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
              {Animation||OldUser===true||RegNo===""?<Warning/>:<Success/>}
              {!Animation&&OldUser===true&&<h3>User already Existing</h3>}
              {Animation&&<h3>Server ERROR</h3>}
              {RegNo===''&&<h2>Please fill out the RegNo</h2>}
              {/* {Animation?<h1>"LOading..."</h1>:"Result"} */}
            </div>
            <Button onClick={handleReset} color='primary'variant="contained" className={classes.button}>
              Next Student
            </Button>
            {!Animation&&OldUser===true||RegNo===''?<Button onClick={handleReEdite} className={classes.button}>Re Edite</Button>:<Link to={`/Profile/Update/${RegNo}/${Degree}`}><Button className={classes.button}>Add More</Button></Link>}
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep)}
            </div>
            <div  style={{marginRight:'300px'}}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? <span onClick={()=>{FormSubmit()}}>Finish</span>: 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
