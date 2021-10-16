import React,{useEffect,useRef} from 'react'
import lottie from 'lottie-web'


export default function Success(){
    const continer=useRef(null);
    useEffect(() => {
      
        lottie.loadAnimation({
            container:continer.current,
            renderer:'svg',
            loop:false,
            autoplay:true,
            animationData:require('./Success.json')
        })

    }, [])

    return (
        <div ref={continer} style={{width:'300px',height:"300px"}}>
        </div>
    )

}