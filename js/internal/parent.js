// WARNING: Don't edit this file. It is required for responsive iframe behaviour.
const pym = require("pym.js");

const bundleDir = document
  .querySelector("#CecGenericCecMapParent")
  .getAttribute("data-base-url");

new pym.Parent(
  "CecGenericCecMapParent",
  `${bundleDir}/html/CecGenericCecMap.html`,
  {
    id: "CecGenericCecMapParent-frame"
  }
);

// Don't want to create a CSS network request for this simple change.
document.querySelector(`#CecGenericCecMapParent-frame`).style.display = "block";
