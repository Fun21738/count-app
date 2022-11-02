import React from "react"
import useJose from "./useJose";



 const Increment = () => {
    const [val] = useJose(1)
  

// const [countUp,setCountUp] = useJose()


    return (
        <div>
            <h1>Postive count is: {val}</h1>
            {/* <button onClick={() => setCountUp(countUp)}>+</button> */}
        </div>
    )
}

export default Increment;
