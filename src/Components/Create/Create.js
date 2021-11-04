import React, { useEffect } from 'react'
import './Create.css'
import HorizontalLinearStepper from '../Stepper/Stepper'
import Aos from 'aos';
import "aos/dist/aos.css"

function Create() {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    return (
        <div className='create__main' style={{background:'white'}} data-aos='zoom-in-up'>
            <HorizontalLinearStepper/>
        </div>
    )
}

export default Create;

