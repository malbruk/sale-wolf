import { useEffect, useState } from "react"
import './point.css'

export default function Point(){

    const sum=550;
    const [points,setPoints]=useState(0);
    useEffect((()=>{
        let tmp=(sum/50)*5;
        setPoints(tmp)
    }),[])
    return(<>
        <div id="img">
            <p>עד כה צברת {points} נקודות!</p>
        </div>   
    </>)
}
