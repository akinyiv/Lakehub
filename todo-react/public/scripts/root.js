"use strict";

// JSX - javascript xml
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Todo App"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
