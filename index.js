
const main = document.querySelector("main#main");
main.remove();

const newHeader = document.createElement("h1");
const nodeName = document.createTextNode("H1");
newHeader.appendChild(nodeName);

newHeader.id = "victory";

newHeader.innerHTML = "Shiro is the champion"