import React, { useState } from "react";

function InputArea(props){
    const [typedValue, showtypedValue] = useState("");

    function handleType(event) {
    showtypedValue(event.target.value);
  }
  function handleClick() {
    props.showClickedItem((prevState) => {
      return [...prevState, typedValue];
    });
    showtypedValue("");
  }

    return <div className="form">
        <input
          onChange={handleType}
          type="text"
          placeholder="Add items"
          value={typedValue}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
}

export default InputArea;