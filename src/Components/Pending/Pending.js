import React, { useState,useEffect } from 'react';
import './Pending.css';
import axios from 'axios';
import Loader from '../Lottie/Loader/Loader';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import ListItem from '../StudentProfile/ListItem/ListItem'


function Pending () {

    const [Data, setData] = useState('');
    const [FilterData, setFilterData] = useState('')
    const [SearchInput, setSearchInput] = useState('');
    const [SearchData, setSearchData] = useState('')

    function getData(){
        axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/list`).then((item)=>{
            console.log(item.data)
            setData(item.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    function FilterFun(){
        let fltr1=Data.filter((value)=>{
//******************************************** */
        let fail;
        value.Semester1.map((item)=>{
            if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                fail=false;
            }else{
                if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
                    fail=true
                }else fail=false
            }
        })
        if(fail===true){
            return true
        }else{
            //semester 2
            value.Semester2.map((item)=>{
                if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                    fail=false;
                }else{
                    if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
                        fail=true
                    }else fail=false
                }
            }) 
            if(fail===true){
                return true
            }else{
             //semester 3
             value.Semester3.map((item)=>{
                if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                    fail=false;
                }else{
                    if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
                    fail=true
                }else fail=false
                }
            })
            if(fail===true){
                return true
            }else{
                //semester 4
                value.Semester4.map((item)=>{
                if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                    fail=false;
                }else{
                    if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
                    fail=true
                }else fail=false
                }
                })
                if(fail===true){
                return true
                }else{
                      //semester 5
                value.Semester5.map((item)=>{
                    if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                        fail=false;
                    }else{
                        if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
                    fail=true
                }else fail=false
                    }
                    })
                    if(fail===true){
                        return true
                    }else{
                           //semester 6
                     value.Semester6.map((item)=>{
                    if((item.Attempt1.Mark!==""&&item.Attempt1.Status===true)||(item.Attempt2.Mark!==""&&item.Attempt2.Status===true)||(item.Attempt3.Mark!==""&&item.Attempt3.Status===true)||(item.Attempt4.Mark!==""&&item.Attempt4.Status===true)||(item.Attempt5.Mark!==""&&item.Attempt5.Status===true)||(item.Attempt6.Mark!==""&&item.Attempt6.Status===true)){
                        fail=false;
                    }else{
                        if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
                    fail=true
                }else fail=false
                    }
                    })
                    if(fail===true){
                        return true
                    }
                    else{
                        return false
                    }
                    }   
                } 
            }

        }
        }
// **********************************************/
        })
        console.log(fltr1)
        setFilterData(fltr1)
    }

    // function SearchFilter(){  

    // let data=FilterData.filter((item)=>{
    //     let state;    
    //     item.Semester1.map((item)=>{
    //         if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
    //             state=true
    //         }
    //     })
    //     if(state===true){return true}else{
    //         item.Semester2.map((item)=>{
    //             if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
    //                 state=true
    //             }
    //         })
    //         if(state===true){return true}else{
    //             item.Semester3.map((item)=>{
    //                 if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
    //                     state=true
    //                 }
    //             })
    //             if(state===true){return true}else{
    //                 item.Semester4.map((item)=>{
    //                     if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
    //                         state=true
    //                     }
    //                 })
    //                 if(state===true){return true}else{
    //                     item.Semester5.map((item)=>{
    //                         if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
    //                             state=true
    //                         }
    //                     })
    //                     if(state===true){return true}else{
    //                         item.Semester6.map((item)=>{
    //                             if((item.SubName.toLocaleLowerCase()===SearchInput.toLocaleLowerCase()||item.SubCode.toLocaleLowerCase()===SearchInput.toLocaleLowerCase())){
    //                                 state=true
    //                             }
    //                         })
    //                         if(state===true){return true}else{
    //                             return false
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // })
    // console.log("this is search : ",data)
    // setSearchData(data)
    
    // }

    useEffect(()=>{
        setSearchData('')
        if(SearchInput!==''){
            FilterFun()
        }
    },[SearchInput])

    useEffect(() => {
       getData()
    }, [])

    useEffect(()=>{
        if(Data){
            FilterFun()
        }
    },[Data])

    return (
        <div className="student__profile">
            <div className="search">
                <div className="input__fld">
                    <input value={SearchInput} onChange={(e)=>{setSearchInput(e.target.value)}} placeholder='Subject code '/>
                </div>
                <div className="icon__fld">
                    <SearchIcon />
                </div>
            </div>
            <div className='student__list'>
                {Data&&FilterData&&FilterData.map((item,index)=>{
                    return <Link to={`/Profiles/${item.RegNo}`} style={{ color: 'gray',textDecoration:'none'}} key={index}>
                    <ListItem key={index} 
                    Name={item.Name} 
                    Degree={item.Degree} 
                    Course={item.Course} 
                    RegNo={item.RegNo}
                    url={item.ImageURL}
                    />
                    </Link>
                  })}
            </div>
        </div>
    )
}

export default Pending;
