/*
 * @function loadSideBar
 * @utilities
 * fetch(url) -> obtener listado de ficheros markdown para las opciones del menu
 * */
function loadSideBar() {
  fetch("http://localhost:3000/docs")
    .then(data => data.json())
    .then(documentos => {
      console.log(documentos);
      let sidebar = document.getElementById("sidebar-wrapper");
      let cabecera = document.createElement("div");
      cabecera.className = "sidebar-heading";
      let contenedor_lista = document.createElement("div");
      contenedor_lista.className = "list-group list-group-flush";
      let cabecera_a = document.createElement("a");
      let contentPath;
      let titulo = "";
      for (let i = 0; i < documentos.length; i++) {
        if (documentos[i].name === "node-init.md") {
          titulo = documentos[i].name;
          cabecera_a.href = `javascript:loadContent("${documentos[i].pathDocs}");`;
          cabecera_a.appendChild(document.createTextNode(titulo));
          contentPath = documentos[i].pathDocs;
        } else {
          let elementos = document.createElement("a");
          elementos.innerText = documentos[i].name;
          elementos.className =
            "list-group-item list-group-item-action bg-light";
          elementos.href = `javascript:loadContent("${documentos[i].pathDocs}");`;
          contenedor_lista.appendChild(elementos);
        }
      }
      let titulo_cabecera = document.createElement("a");
      titulo_cabecera.className =
        "list-group-item list-group-item-action bg-light";
      titulo_cabecera.appendChild(cabecera_a);
      cabecera.appendChild(titulo_cabecera);
      sidebar.appendChild(cabecera);
      sidebar.appendChild(contenedor_lista);
      loadContent(contentPath);
    });
}

/*
 * @function loadContent
 * @param id -> identificador del fichero markdown a cargar
 * @utilities
 * fetch(url) -> obtener fichero markdown a mostrar
 * DOMParser -> parsear cadena de caracteres a html documents
 * */
function loadContent(path) {
  fetch("http://localhost:3000/docs", {
    method: "POST",
    body: JSON.stringify({ path: path }),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(file => {
      let container = document.getElementById("container");
      container.innerHTML = "";
      let parser = new DOMParser();
      container.appendChild(
        parser.parseFromString(file.file, "text/html").childNodes[0]
          .childNodes[1]
      );
    });
}

function loadChat() {
  const formRow = document.createElement("div");
  formRow.className = "row form-row";
  formRow.id = "chat-container";

  const formGroupTextMessage = document.createElement("div");
  formGroupTextMessage.className = "form-group col-md-9";

  const inputTextMessage = document.createElement("input");
  inputTextMessage.type = "text";
  inputTextMessage.className = "form-control";
  inputTextMessage.id = "inputTextMessage";

  formGroupTextMessage.appendChild(inputTextMessage);

  formRow.appendChild(formGroupTextMessage);

  const formGroupButton = document.createElement("div");
  formGroupButton.className = "form-group col-md-3";

  const inputButton = document.createElement("button");
  inputButton.className = "btn btn-primary";
  inputButton.id = "inputButton";
  inputButton.innerText = "Enviar";

  formGroupButton.appendChild(inputButton);

  const messageContainer = document.createElement("ul");
  messageContainer.className = "message";

  formRow.appendChild(formGroupButton);

  document.getElementById("container").innerHTML = "";
  document.getElementById("container").appendChild(messageContainer);
  document.getElementById("container").appendChild(formRow);
}
