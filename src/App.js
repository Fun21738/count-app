import Increment from './componets/Decrement';
import Decrement from './componets/Increment';
// import { useState } from 'react';
const App = () => {
  // const [countUp, setCountUp] = useState(0);
  // const [countDown, setCountDown] = useState(0);
  return (
    <div className="App">
      <Increment />
      {/* <h1>{counter}</h1> */}
      <Decrement />

    </div>
  );
}

export default App;
