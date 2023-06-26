import React from "react";

// export function Product()
// {
//   return <div className="text-red-600">I am a Product</div>;
// }
// export function Hello(){
//   return <div className="text-indigo-400">Hello world!!</div>;
// }



 function Product({title,price}){
  return(
   <div>
    I am a Product {title} {price}
   </div>
  );
}

export default Product;

//const a=10;
//export default a;
//named export and default export  