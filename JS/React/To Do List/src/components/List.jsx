import React from "react";

function List(props){

    return <div onClick={()=>props.itemClicked(props.id)}>
    <li key={props.id}>{props.item}</li>
    </div>
}


export default List;