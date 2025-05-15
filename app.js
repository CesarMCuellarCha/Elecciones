let candidatos = []

cargarCandidatos()

/**
 * Ejemplo petición fetch para obtener
 * los candidatos desde archivo json 
 * externo
 */
function cargarCandidatos(){
    const url = "https://raw.githubusercontent.com/CesarMCuellarCha/Elecciones/refs/heads/main/candidatos.json";
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
        candidatos = datos
        console.log(candidatos)
        mostrarCandidatos()
    })
    .catch(error => console.error('Error:', error))
}


function mostrarCandidatos(){
    let grupoCandidatos =  document.createElement("div")
    grupoCandidatos.className="card-group"
    document.querySelector("#candidatos").appendChild(grupoCandidatos); 

    candidatos.forEach(candidato => {
        let card = document.createElement("div")
        card.className="card w-25"
        let header = document.createElement("div")
        header.className="card-header"       
        let titulo = document.createElement("h3")
        titulo.textContent=candidato.curso
        header.appendChild(titulo)
        card.appendChild(header)

        let body = document.createElement("div")
        body.className="card-body"
        let foto = document.createElement('img')
        foto.src=candidato.foto
        foto.width='100'
        foto.height='100'
        foto.className="card-img-top"
        body.appendChild(foto)       
        card.appendChild(body)

        let footer = document.createElement("div")
        footer.className="card-footer"
        let textoCandidato = document.createElement("span")
        textoCandidato.textContent="Nombre: "
        textoCandidato.className="fw-bold"
        footer.appendChild(textoCandidato)       
        let nombreCandidato = document.createElement("span")
        nombreCandidato.textContent=`${candidato.nombre} ${candidato.apellido}`     
        footer.appendChild(nombreCandidato)  
        let salto = document.createElement("br")
        footer.appendChild(salto)

        let textoFicha = document.createElement("span")
        textoFicha.textContent="Ficha: "
        textoFicha.className="fw-bold"
        footer.appendChild(textoFicha)       
        let codigoFicha = document.createElement("span")
        codigoFicha.textContent=candidato.ficha     
        footer.appendChild(codigoFicha)  
        card.appendChild(footer)

        grupoCandidatos.appendChild(card); 

    });
    
    /*let programa = document.getElementById("programaAprendiz")
    programa.textContent=candidatos[0].curso
    let foto = document.getElementById("fotoAprendiz")
    foto.src=candidatos[0].foto
    let nombre = document.getElementById("nombreAprendiz")
    nombre.textContent=candidatos[0].nombre + " " + candidatos[0].apellido
    let ficha = document.getElementById("fichaAprendiz")
    ficha.textContent = candidatos[0].ficha*/
}

    