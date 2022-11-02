import { useState, useEffect} from 'react'

function useJose(initialVal) {

    const [count, setCount] = useState(0);

    useEffect(()=>{

       const IncrementState = setInterval(() => {
            setCount(prevState=>prevState + initialVal);
            // console.log("rerender");
        },1000)

        return ()=>{
            clearInterval(IncrementState);
    }
    },[])

  return [count]
}

export default useJose