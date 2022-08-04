"use strict";

// JSX - javascript xml
var app = {
    title: "Todo Decisions",
    subtitle: "things to focus on",
    options: ["baseball", "soccer", "tennis", "golf"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "here are your options" : "no options here"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "Nairobi"
        ),
        React.createElement(
            "li",
            null,
            "Malindi"
        )
    )
);

var count = 0;

function increment() {
    count++;
    console.log(count);
}

var addOne = function addOne() {
    console.log("addone");
};
var minusOne = function minusOne() {
    console.log("minusone");
};
var reset = function reset() {
    console.log("reset");
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "reset"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
