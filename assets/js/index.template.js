// Define a function to load external HTML content and render it using Mustache
function loadContent(templateId, containerId, data) {
    var template = document.getElementById(templateId).innerHTML;
    var rendered = Mustache.render(template, data);
    document.getElementById(containerId).innerHTML = rendered;
}

// Load the navigation content
fetch("./templates/nav.mustache")
    .then((response) => response.text())
    .then((content) => {
        document.getElementById("nav-container").innerHTML = content;
});

// Load the main content
fetch("./templates/main.mustache")
    .then((response) => response.text())
    .then((content) => {
        document.getElementById("main-container").innerHTML = content;
    });

// Load the JavaJam content
fetch("./templates/javajam.mustache")
    .then((response) => response.text())
    .then((content) => {
        document.getElementById("javajam-table").innerHTML = content;
});