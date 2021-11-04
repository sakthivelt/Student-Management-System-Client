import React,{useEffect,useState} from 'react'
import "./StudentList.css"
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ListItem from './ListItem/ListItem'
import Aos from 'aos';
import "aos/dist/aos.css"
import axios from 'axios'
import Loader from '../Lottie/Loader/Loader'


function StudentList() {
    const [Degree,setDegree]=useState('');
    const [Course,setCourse]=useState('');
    const [Name, setName] = useState('');
    const [RegNo,setRegNo] = useState('');
    const [UserData,setUserData]=useState(null);
    const [UserData2,setUserData2]=useState(null);
    const [FilterData, setFilterData] = useState('');
    const [SearchInput, setSearchInput] = useState('');
    const [Loading, setLoading] = useState(true);

console.log(process.env)
    const getData= async ()=>{
        const data= await axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/list`).then((item)=>{
            setUserData(item.data);
            return item.data;
        }).then((item)=>{
            console.log(item)
            setUserData2(
                item.map((item,index)=>{
                    return <Link to={`/Profiles/${item.RegNo}`} style={{ color: 'gray',textDecoration:'none'}} key={index}>
                            <ListItem key={index} 
                            Name={item.Name} 
                            Degree={item.Degree} 
                            Course={item.Course} 
                            RegNo={item.RegNo}
                            url={item.ImageURL}
                            />
                            </Link>
                })
            )
            setLoading(false)
        }).catch((error)=>{
            console.log(error)
            setLoading(false)
        }
        );
}

useEffect(() => {
    Aos.init({duration:1000})
   getData();
}, [])

//filter function
function fltrfun(){
    if(UserData){
        var data=UserData.filter((item)=>{
            if(item.Name.toLowerCase().includes(SearchInput.toLocaleLowerCase())||item.RegNo.toLowerCase().includes(SearchInput.toLocaleLowerCase())){
                return true
            }
        })
        setFilterData(data)
    }
}

useEffect(() => {
    fltrfun();
}, [SearchInput])

    return (
        <div className="student__profile">
            <div className="search">
                <div className="input__fld">
                    <input value={SearchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/>
                </div>
                <div className="icon__fld">
                    <SearchIcon />
                </div>
            </div>
            {Loading&&<div className='loading'><Loader/></div>}
            <div className='student__list'>
               {FilterData&&SearchInput?FilterData.map((item,index)=>{
                    return <Link to={`/Profiles/${item.RegNo}`} style={{ color: 'gray',textDecoration:'none'}} key={index}>
                    <ListItem key={index} 
                    Name={item.Name} 
                    Degree={item.Degree} 
                    Course={item.Course} 
                    RegNo={item.RegNo}
                    url={item.ImageURL}
                    />
                    </Link>
               }):UserData2}
            </div>
        </div>
    )
}
  
export default StudentList
