function getAllDocs() {
  fetch("http://localhost:3000/docs")
    .then(response => response.json())
    .then(dataObject => {
      const sidebarWrapper = document.getElementById("sidebar-wrapper");

      let sidebarHeading = document.createElement("div");
      sidebarHeading.className = "sidebar-heading";

      let listGroup = document.createElement("div");
      listGroup.className = "list-group list-group-flush";

      for (let data of dataObject) {
        if (data.path === "node-init.md") {
          let linkHeading = document.createElement("a");
          linkHeading.className =
            "list-group-item list-group-item-action bg-light";

          linkHeading.href = `javascript:getDocById(${data.id})`;

          let textHeading = document.createTextNode(data.path);
          linkHeading.appendChild(textHeading);

          sidebarHeading.appendChild(linkHeading);
          getDocById(data.id);
        } else {
          let listGroupItem = document.createElement("a");
          listGroupItem.className =
            "list-group-item list-group-item-action bg-light";
          listGroupItem.href = `javascript:getDocById(${data.id})`;
          listGroupItem.appendChild(document.createTextNode(data.path));
          listGroup.appendChild(listGroupItem);
        }
      }
      sidebarWrapper.appendChild(sidebarHeading);
      sidebarWrapper.appendChild(listGroup);
    });
}

function getDocById(id) {
  fetch(`http://localhost:3000/docs/${id}`)
    .then(response => response.text())
    .then(doc => {
      let parser = new DOMParser();
      let html = parser.parseFromString(doc, "text/html").childNodes[0];
      let content = document.getElementById("container");
      content.innerHTML = "";
      content.appendChild(html);
    });
}
