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

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
