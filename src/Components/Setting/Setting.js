import React,{useState,useEffect} from 'react'
import './Setting.css'
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';
import SettingList from './SettingList';
import Aos from 'aos';
import SearchIcon from '@mui/icons-material/Search';


function Setting() {

    const [SubjectCode, setSubjectCode] = useState('');
    const [SubjectName, setSubjectName] = useState('');
    const [Loading,setLoading]=useState(false);
    const [ItemData,setItemData]=useState('');
    const [SearchInput,setSearchInput]=useState('')
    const [FilterData, setFilterData] = useState('')


    Aos.init({
        duration:2000,
    })

    function submitfun(){
        if(SubjectCode!==''&&SubjectName!==''){
            setLoading(true)
            axios.post(`${process.env.REACT_APP_UNSPLASH_URL}/CreateSetting`,{
                SUBCODE:SubjectCode,
                SUBNAME:SubjectName,
            }).then((res)=>{
                setLoading(false)
                getData()
            }).catch(e=>{console.log(e)})            
        }else{
            alert('Please fill out required feilds')
            setLoading(false)
        }

    }

    function getData(){
      setFilterData('')
      FilterFun()
        axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/ListSetting`).then((data)=>{
            setItemData(data.data)
        }).catch(error=>{console.log(error)})
    }

    useEffect(()=>{
        getData()
    },[])

    //Filter Function
    function FilterFun(){
        setFilterData('')
        if(SearchInput!==''){
            var data=ItemData.filter((item)=>{
                if(item.SUBCODE.toLowerCase().includes(SearchInput.toLocaleLowerCase())||item.SUBNAME.toLowerCase().includes(SearchInput.toLocaleLowerCase())){
                    return true
                }
            })
            setFilterData(data)
        }
    }
    useEffect(()=>{
      FilterFun()
    },[SearchInput])

    return (
        <div className="setting" data-aos="zoom-in-up">
            <div className="Form" data-aos="flip-left">
                    <div className="title">
                        Subject Code & Name
                    </div>
                    <div className="inputs">
                        <div><input value={SubjectCode} onChange={(e)=>{setSubjectCode(e.target.value)}} placeholder="Subject Code"/></div>
                        <div><input value={SubjectName} onChange={(e)=>{setSubjectName(e.target.value)}} placeholder="Subject Name"/></div>
                    </div>
                    <div className="button">
                        <LoadingButton loading={Loading} variant="outlined" onClick={()=>{submitfun()}}>Submit</LoadingButton>
                    </div>
            </div>
            <div className="list" data-aos="flip-right">
                    <div className="search">
                        <div className="input__fld">
                            <input value={SearchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/>
                        </div>
                        <div className="icon__fld">
                            <SearchIcon />
                        </div>
                    </div>
                {FilterData?FilterData.map((item,index)=>{
                    return <SettingList key={index} SUBNAME={item.SUBNAME} SUBCODE={item.SUBCODE} id={item._id} getData={getData}/>
                }):ItemData&&ItemData.map((item,index)=>{
                    return <SettingList key={index} SUBNAME={item.SUBNAME} SUBCODE={item.SUBCODE} id={item._id} getData={getData}/>
                })}
            </div>
        </div>
    )
}

export default Setting
