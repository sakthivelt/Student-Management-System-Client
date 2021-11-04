import React,{useEffect} from 'react';
import UserAvatar from '../../UserAvatar/UserAvatar';
import './ListItem.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import {format} from 'date-fns';



export default function ListItem({RegNo,Name,Course,Degree,url}){

    const date = new Date();
    var tempdate=`${format(date, 'yyyy-MM-dd').toString().slice(2,4)}`;
    var tempBatch=()=>{
        if(tempdate-`${RegNo.slice(0,2)}`>=3){
            return (`${RegNo.slice(0,2)} batch`)
        }else if(Degree==='UG'){
            if(tempdate-`${RegNo.slice(0,2)}`===0){
                return `1 year`
            }else if(tempdate-`${RegNo.slice(0,2)}`===1){
                return `2 year`
            }else if(tempdate-`${RegNo.slice(0,2)}`===2){
                return `3 year`
            }
        }else if(Degree==='PG'){
            if(tempdate-`${RegNo.slice(0,2)}`===0){
                return `1 year`
            }else if(tempdate-`${RegNo.slice(0,2)}`===1){
                return `2 year`
            }else  if(tempdate-`${RegNo.slice(0,2)}`>=2){
                return (`${RegNo.slice(0,2)} batch`)
            }
        }
    }
    var Batch=tempBatch()
    // (tempdate-`${RegNo.slice(0,2)}`)>3?(tempdate-`${RegNo.slice(0,2)}`):
    // tempdate-`${RegNo.slice(0,2)}`+1)+" year"

    useEffect(() => {
        Aos.init({duration:1000})
    }, [])


    return(
        <div data-aos="zoom-in-up">
        <div className='user__list__items'>
            <div className='avather'><UserAvatar url={url}/></div>
            <div className='student__info'>
                <div>Reg No : {RegNo&&RegNo.toUpperCase()}</div>
                <div>Name : {Name&&Name.toUpperCase()}</div>
                <div>Department : {Course==='Computer Science'.toUpperCase()?`${Degree}.CS -${Batch}`:`${Degree}.${Course} -${Batch}`}</div>
            </div>
        </div>
        </div>
    )
}