import React, { useState } from "react";
import List from "./List";
import InputArea from "./InputArea";

function App() {

  const [click, showClickedItem] = useState([]);

  function onDelete(id){
    //console.log(`item called for delete, ${id}`);
    showClickedItem((prevState)=>{
      return prevState.filter((item, index)=>{
        return index !=id;
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea showClickedItem={showClickedItem}/>

      <div>
        <ul>
          {click.map((item, index) => (
            <List key={index} id={index} item={item}
             itemClicked={onDelete}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
