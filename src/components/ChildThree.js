import React from 'react'

// using shouldComponentUpdate to prevent unnecessary re-render
class ChildThree extends React.Component {
     shouldComponentUpdate(){
       return false;
     }
    render(){
      console.log("Child Three Component Rendering ");
       return (
        <div>
          <h1>ChildThree</h1>
        </div>
      );
    }
    }
    export default ChildThree;