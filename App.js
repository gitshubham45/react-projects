// // it is a react element created
// const heading = React.createElement('h1',{id:'heading'}, "Hello world from React..");

// // root created to do DOM manipulation
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // take the heading object and convert it to actual 
// // h1 tag
// root.render(heading);



const parent = React.createElement(
    'div',
    { id: 'parent' },
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            'h1',
            { id: "h1" },
            "This is the h1 tag"
        ), React.createElement(
            'h2',
            { id: "h2" },
            "This is the h2 tag"
        )]
    ),
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            'h1',
            { id: "h1" },
            "This is the h1 tag"
        ), React.createElement(
            'h2',
            { id: "h2" },
            "This is the h2 tag"
        )]
    )]

);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);