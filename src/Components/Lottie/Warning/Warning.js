import React,{useEffect,useRef} from 'react'
import lottie from 'lottie-web'


export default function Warning(){
    const continer=useRef(null);
    useEffect(() => {
      
        lottie.loadAnimation({
            container:continer.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./Warning.json')
        })

    }, [])

    return (
        <div ref={continer} style={{width:'300px',height:"300px"}}>
        </div>
    )

}