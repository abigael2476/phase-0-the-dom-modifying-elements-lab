// 1. Remove the <main id="main"> node
const main = document.getElementById("main");
main.remove();

// 2. Create a new <h1> and assign it to newHeader
const newHeader = document.createElement("h1");

// 3. Give it an id of 'victory'
newHeader.id = "victory";

// 4. Set its text
newHeader.textContent = "Abigael is the champion"; // <-- replace Abigael with your name

// 5. Append it to the document body
document.body.append(newHeader);
