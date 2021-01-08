import React, { useEffect } from "react";

// wrapping component with React.memo before exporting
function ChildTwo() {
  console.log("Child Two Component Rendering");
  
  return (
    <div>
      <h1>ChildTwo</h1>
    </div>
  );
}
export default React.memo(ChildTwo);
