/*
* @function loadSideBar
* @utilities
* fetch(url) -> obtener listado de ficheros markdown para las opciones del menu
* */
function loadSideBar() {

    fetch('http://localhost:3000/docs').then(
        data => data.json()
    ).then(
        (documentos)=>{
            console.log(documentos);
            let sidebar= document.getElementById("sidebar-wrapper");
            let cabecera = document.createElement('div');
                cabecera.className="sidebar-heading";
            let contenedor_lista = document.createElement('div');
                contenedor_lista.className="list-group list-group-flush";
            let titulo="";
            for (let i=0;i<documentos.length;i++){
                if (documentos[i].name==="node-init.md"){
                    titulo=documentos[i].name;
                }else {
                    let elementos= document.createElement('a');
                        elementos.innerText=documentos[i].name;
                    elementos.className="list-group-item list-group-item-action bg-light";
                    contenedor_lista.appendChild(elementos);
                }
            }
            let titulo_cabecera=document.createElement('a');
            titulo_cabecera.className="list-group-item list-group-item-action bg-light";
            titulo_cabecera.innerText=titulo;
            cabecera.appendChild(titulo_cabecera);
            sidebar.appendChild(cabecera);
            sidebar.appendChild(contenedor_lista);
        }
    )

}

/*
* @function loadContent
* @param id -> identificador del fichero markdown a cargar
* @utilities
* fetch(url) -> obtener fichero markdown a mostrar
* DOMParser -> parsear cadena de caracteres a html documents
* */
function loadContent(id) {

}
