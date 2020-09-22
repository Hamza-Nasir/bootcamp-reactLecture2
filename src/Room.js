import React, {useState} from 'react';  
import './Room.css'

function Room() {

    const [isLit, setLit] = useState(true);
    const [age, increaseAge] = useState(19);
    // // The code snippet below does the same thing as the one commented out above
    // const state = useState(true);
    // //console.log("States = ", state);
    // const isLit = state[0];
    // const setLit = state[1];


    // function updateLight() {
    //     setLit(!isLit);
    // }

    // function changeAge() {
    //     increaseAge(age+1);
    // }

  return (
    <div className={"room " + (isLit? "lit": "dark")}>
      Inside the Room Component. Room is {isLit? "Lit": "Dark"} <br/>
      My Age: {age};

      <br/><br/>
      {/* <button onClick={updateLight}>Toggle the Lights</button><br/><br/>
      <button onClick={changeAge}>Increase my Age</button> */}
      <button onClick={() => setLit(!isLit)}>Toggle the Lights</button><br/><br/>
      <button onClick={() => increaseAge(age+1)}>Increase my Age</button>
    </div>
  );
}

export default Room;
