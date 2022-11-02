import { useState, useEffect } from 'react';
import useJose from './useJose';

const Decrement =()=>{
    const [val] = useJose(-1)
    // const [countDown, setCountDown] = useState(0);
    // const handleDecrease=()=>{
    //     setTimeout(()=>{
    //         setCountDown(countDown-1);
    //     },1000)
    //    return (
    //     console.log("rebder")
    //    )
    // }
    // useEffect(()=>{
    //     handleDecrease();
    // })
    return(
        <>
        
        <h1>Negative count is: {val}</h1>
        {/* {/* <button onClick={() =>handleDecrease ()}>-</button> */}
        </>
    );
}
export default Decrement;