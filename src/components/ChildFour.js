import React from "react";

function ChildFour() {
  console.log("Child Four component rendering");
  const [products, setProducts] = React.useState(["Orange", "Apple", "Banana"]);

  // mocking expensive operations
  const displayProduct = () => {
    return (
      <div>
        {products.map((product) => {
          return <p>{product}</p>;
        })}
      </div>
    );
  };
  return (
    <div>
      <h1>Child Four</h1>
      {displayProduct()}
    </div>
  );
}
export default ChildFour;
