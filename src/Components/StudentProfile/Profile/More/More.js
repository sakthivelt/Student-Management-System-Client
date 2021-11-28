import React,{useState,useEffect} from 'react';
import './More.css'
// import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import {useParams} from 'react-router-dom'
import {storage} from "../../../../FireBase/FireBase"
import {v4} from 'uuid';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Aos from 'aos'


const Input = styled('input')({
    display: 'none',
  });


function More() {
    const [UserData,setUserData]=useState('')
    const RegNo=useParams().RegNo;
    const [File10, setFile10] = useState('');      
    const [File11, setFile11] = useState('');      
    const [File12, setFile12] = useState('');      
    const [FileRef10, setFileRef10] = useState('');      
    const [FileRef11, setFileRef11] = useState('');      
    const [FileRef12, setFileRef12] = useState('');
    const [n,setn]=useState('')      

    function getData(){
        axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/getinfo/${RegNo}`).then((item)=>{
            setUserData(item.data[0])
            console.log(item.data[0])
            setFile10(item.data[0].File10)
            setFile11(item.data[0].File11)
            setFile12(item.data[0].File12)
            setFileRef10(item.data[0].FileRef10)
            setFileRef11(item.data[0].FileRef11)
            setFileRef12(item.data[0].FileRef12)
        }).catch(error=>console.log(error))
    }
    function PutData(){
        console.log(File10," ",File11," ",File12," ",FileRef10," ",FileRef11," ",FileRef12)
        axios.put(`${process.env.REACT_APP_UNSPLASH_URL}/UpdateFiles/${UserData._id}`,{
            File10,
            File11,
            File12,
            FileRef10,
            FileRef11,
            FileRef12,
        }).then(()=>{
            getData();
        }).catch((error)=>console.log(error))
    }
    function FileDelete(n){
        console.log(File10," ",File11," ",File12," ",FileRef10," ",FileRef11," ",FileRef12)
        axios.put(`${process.env.REACT_APP_UNSPLASH_URL}/DeleteFiles/${UserData._id}`,{
            n:n,
        }).then(()=>{
            getData();
        }).catch((error)=>console.log(error))
    }
//image upload
const [progress10, setProgress10] = React.useState(0);
const [progress11, setProgress11] = React.useState(0);
const [progress12, setProgress12] = React.useState(0);
function onChangeImage(e){
    console.log(n)
if(e.target.files[0]){
    var file=e.target.files[0];
    var FileID=v4();
    var ref=storage.ref('Students/'+file.name+FileID);
    var task=ref.put(file);
      
    task.on("state_changed",(snapshot)=>{
        console.log(snapshot)
        switch (n) {
            case 10:
                setProgress10((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                break;
            case 11:
                setProgress11((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                break;
            case 12:
                setProgress12((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                break;        
        }
    },(error)=>{
          alert(error)
    },()=>{
      storage.ref("Students").child(file.name+FileID).getDownloadURL().then((res)=>{
        console.log(res)
        switch (n) {
            case 10:
                setFileRef10('Students/'+file.name+FileID)
                setFile10(res)
                break;
            case 11:
                setFileRef11('Students/'+file.name+FileID)
                setFile11(res)
                break;
            case 12:
                setFileRef12('Students/'+file.name+FileID)
                setFile12(res)
                break;        
        }
        setProgress10(0)
        setProgress11(0)
        setProgress12(0)
      })
    })
}    
}

function deleteImage(nn){
    console.log(nn)
    var ref;
    switch (nn) {
        case 10:
            ref=storage.ref(FileRef10)
            break;
        case 11:
            ref=storage.ref(FileRef11)
            break;
        case 12:
            ref=storage.ref(FileRef12)
            break;        
    }
      ref.delete().then(()=>{
        FileDelete(nn)
      }).catch((error)=>{console.log(error)})    
  }

useEffect(()=>{
    if(File10&&FileRef10||File11&&FileRef11||File12&&FileRef12){
            PutData()
    }
},[File10,File11,File12])

useEffect(()=>{
    getData();
},[])


    return (
        <div className="More_main" data-aos="zoom-in-up">
                <div className='10th' data-aos="flip-right">
                    <div className='PrograssBar'><CircularProgress variant="determinate" value={progress10} size={60} thickness={1}/></div>
                    <h3>10th Marksheet</h3>
                    {File10?<DoneIcon style={{height:'50px',width:"50px",color:"gray"}}/>:
                    <FileUploadIcon style={{height:'50px',width:"50px",color:"gray"}}/>}
                    {File10?<div>
                        <IconButton aria-label="delete" href={File10} target="_blank">
                        <DownloadIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={()=>{
                            setn(10)
                            deleteImage(10)
                            }}>
                        <DeleteOutlineIcon />
                        </IconButton>
                    </div>:
                    <label htmlFor="contained-button-file" >
                        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e)=>{
                            setn(10)
                            onChangeImage(e)
                        }}
                        disabled={progress10!==0||progress11!==0||progress12!==0?true:false}
                        />
                        <Button variant="contained" component="span" onClick={()=>{setn(10)}} disabled={progress10!==0||progress11!==0||progress12!==0?true:false}>
                            Upload
                        </Button>
                    </label>}
                </div>
{/* *****************************************11th************************************************* */}
<div className='11th' data-aos="flip-right">
                    <div className='PrograssBar'><CircularProgress variant="determinate" value={progress11} size={60} thickness={1}/></div>
                    <h3>11th Marksheet</h3>
                    {File11?<DoneIcon style={{height:'50px',width:"50px",color:"gray"}}/>:
                    <FileUploadIcon style={{height:'50px',width:"50px",color:"gray"}}/>}
                    {File11?<div>
                        <IconButton aria-label="delete" href={File11} target="_blank">
                        <DownloadIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={()=>{
                            setn(11)
                            deleteImage(11)
                            }}>
                        <DeleteOutlineIcon />
                        </IconButton>
                    </div>:
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e)=>{
                            setn(11)
                            onChangeImage(e)
                        }}
                        disabled={progress10!==0||progress11!==0||progress12!==0?true:false}
                        />
                        <Button variant="contained" component="span" disabled={progress10!==0||progress11!==0||progress12!==0?true:false}
                        onClick={()=>{setn(11)}}
                        >
                            Upload
                        </Button> 
                    </label>}
                </div>
{/* *************************************************12th********************************************** */}
<div className='12th' data-aos="flip-right">
                    <div className='PrograssBar'><CircularProgress variant="determinate" value={progress12} size={60} thickness={1}/></div>
                    <h3>12th Marksheet</h3>
                    {File12?<DoneIcon style={{height:'50px',width:"50px",color:"gray"}}/>:
                    <FileUploadIcon style={{height:'50px',width:"50px",color:"gray"}}/>}
                    {File12?<div>
                        <IconButton aria-label="delete" href={File12} target="_blank">
                        <DownloadIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={()=>{
                            setn(12)
                            deleteImage(12)}}
                            >
                        <DeleteOutlineIcon />
                        </IconButton>
                    </div>:
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e)=>{
                            setn(12)
                            onChangeImage(e)}}
                        disabled={progress10!==0||progress11!==0||progress12!==0?true:false}
                        />
                        <Button variant="contained" component="span" disabled={progress10!==0||progress11!==0||progress12!==0?true:false}
                        onClick={()=>{setn(12)}}
                        >
                            Upload
                        </Button>
                    </label>}
                </div>
        </div>
    )
}

export default More
