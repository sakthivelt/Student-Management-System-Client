import React from 'react';
import './SettingList.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios'

function SettingList({SUBNAME,SUBCODE,id,getData}) {

    function DeleteSetting(ID){
            axios.delete(`${process.env.REACT_APP_UNSPLASH_URL}/DeleteSetting/${ID}`).then(()=>{
                getData()
            }).catch(error=>console.log(error))
    }

    return (
        <div className='SttingList'>
            <div>{SUBNAME}</div>
            <div>{SUBCODE}</div>
            <div onClick={()=>{DeleteSetting(id)}}><DeleteOutlineIcon/></div>
        </div>
    )
}

export default SettingList
