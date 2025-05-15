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
    let programa = document.getElementById("programaAprendiz")
    programa.textContent=candidatos[0].curso
    let foto = document.getElementById("fotoAprendiz")
    foto.src="https://raw.githubusercontent.com/CesarMCuellarCha/Elecciones/refs/heads/main/candidato1.jpg"
    let nombre = document.getElementById("nombreAprendiz")
    nombre.textContent=candidatos[0].nombre + " " + candidatos[0].apellido
    let ficha = document.getElementById("fichaAprendiz")
    ficha.textContent = candidatos[0].ficha
}

    /**
     * 
     */
    class Rectangulo {
        
        /**
         * 
         * @param {*} width 
         * @param {*} height 
         */
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        
        /**
         * 
         * @returns 
         */
        calcularArea() {
            return this.width * this.height;
        }
    }