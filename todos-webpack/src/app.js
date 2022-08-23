import React from "react";
import ReactDOM from "react-dom";
import { City } from "./data";

const Template = (props) => {
    const newInfo = {
        town: "kisumu is a nice town",
        field: "nice landscapes"
    };
    return (
        <div>
            <h1>{props.data}</h1>
            <City item={newInfo} />
            </div>
    );
};  

ReactDOM.render(<Template/>, document.getElementById("root"));