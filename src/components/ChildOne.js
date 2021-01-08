import React, {useEffect} from "react";


// extending your class component from React.PureComponent
class Child extends React.PureComponent {

  render(){
    console.log("Child One Component Rendering");
     return (
      <div>
        <h1>ChildOne</h1>
      </div>
    );
  }
  }
  export default Child;
  