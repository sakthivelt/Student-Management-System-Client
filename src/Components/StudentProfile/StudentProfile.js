import React from 'react'
import "./StudentProfile.css"
import SearchIcon from '@mui/icons-material/Search';

function StudentProfile() {
    return (
        <div className="student__profile" >
            <div className="search">
                <div className="input__fld">
                    <input/>
                </div>
                <div className="icon__fld">
                    <SearchIcon />
                </div>
            </div>
            <div className='student__list' onMouseOver={()=>{console.log("hi")}}>

            </div>
        </div>
    )
}

export default StudentProfile
