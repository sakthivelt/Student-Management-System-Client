import React,{useEffect,useRef} from 'react'
import lottie from 'lottie-web'


export default function Loader(){
    const continer=useRef(null);
    useEffect(() => {
      
        lottie.loadAnimation({
            container:continer.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./MiniLoader.json')
        })

    }, [])

    return (
        <div ref={continer} style={{width:'420px',height:"420px"}}>
        </div>
    )

}