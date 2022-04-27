import links from "./links.js";
let linkArea = "";

links.map((link) => {
  linkArea += `
    <a href="${link.url}" style="background-color: ${link.backgroundColor}" id="projectItem">
    ${link.name}
    </a>
    `;
});

document.getElementById("projectLinks").innerHTML = linkArea;
