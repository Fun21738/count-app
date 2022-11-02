import { useState, useEffect } from 'react';

const Decrement =()=>{
    const [countDown, setCountDown] = useState(0);
    const handleDecrease=()=>{
        setTimeout(()=>{
            setCountDown(countDown-1);
        },1000)
       
    }
    useEffect(()=>{
        handleDecrease();
    })
    return(
        <>
        <h1>Negative count is: {countDown}</h1>
        {/* <button onClick={() =>handleDecrease ()}>-</button> */}
        </>
    );
}
export default Decrement;