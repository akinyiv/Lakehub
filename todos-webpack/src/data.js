import React from "react";
const City = (props) => {
    return (
        <div>
            <h2>{props.item.town}</h2>
            <h3>{props.item.field}</h3>
        </div>
    );
};

export { City };
