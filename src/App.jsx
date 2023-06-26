import React, { useState } from "react";
import Table from "./Table";
function App(){
  // return (
  //   <div className="flex gap-3">
  //     <Table></Table>
  //     <Table></Table>
  //   </div>
  // );
  console.log("App Function running");

  const [flip,setFlip]=useState(false);

  let key1='table1';
  let key2='table2';

if(flip){
  key1='table2';
  key2='table1';
}

function flipkey()
{
  setFlip(!flip);
}
return (
    <div className="flex gap-6">
      <Table key={key1}></Table>
      <Table key={key2}></Table>
      <button onClick={flipkey} className="rounded-md px-4 py-1 bg-indigo-700 text-white flex-row">Flip key</button>
    </div>
  );
  }


 {/* <Product  title="Awesome coffee Mug" price={40}/> */}
    {/* <Hello/>
    <div>value of {a} </div> */}
    {/* <ProductDetail></ProductDetail> */}


    // import a,{Product,Hello} from "./Product";
// import Product from "./Product";
// import ProductDetail from "./ProductDetail";
export default App;