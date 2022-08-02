// JSX - javascript xml
let app = {
    title: "Todo Decisions",
    subtitle: "things to focus on",
    options: ["baseball", "soccer", "tennis", "golf"],
}

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "here are your options" : "no options here"}</p>
        <ul>
            <li>Nairobi</li>
            <li>Malindi</li>
        </ul>
    </div>
);

let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);