import { useState, useEffect } from "react"
 const Increment = () => {
    const [countUp, setCountUp] = useState(0);

    const handleAdd =()=>{
        setTimeout(() => {
            setCountUp(countUp+1);
        },1000)
    }

    useEffect(()=>{
        handleAdd();
    })
    return (
        <div>
            <h1>Postive count is: {countUp}</h1>
            {/* <button onClick={() => handleAdd()}>+</button> */}
        </div>
    )
}

export default Increment;
