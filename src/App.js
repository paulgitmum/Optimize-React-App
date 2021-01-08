import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";
import ChildThree from "./components/ChildThree";
import ChildFour from "./components/ChildFour";

const App = () => {
  const [state, setState] = React.useState({ name: "Paulos", input: "" });

  const changeName = () => {
    setState({ name: "Dave" });
  };
  const handleInput = (e) => {
    e.preventDefault();
    let inputText = e.target.value;
    setState({ input: inputText });
  };


  const displayChildFour = () => {
    return <ChildFour />;
  };
 
  const memoChildFour = React.useMemo(() => {
    return displayChildFour();
  }, []);
  console.log("render method");
  return (
    <div className='container'>
      <h1>React App Optimization</h1>
      <h2>{state.name}</h2>
      <h2>{state.input}</h2>
      <ChildOne />
      <ChildTwo />
      <ChildThree />
      {memoChildFour}
      <input type="text" onChange={handleInput} />
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};
export default App;
