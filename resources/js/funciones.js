function crearPeliculaTendencia(pelicula){
    const divPel = document.createElement("div");
    divPel.classList.add("col");
    divPel.innerHTML = `<a href="./paginas/detalle.html">
                        <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="">
                        </a>`;

    return divPel;
}

function crearPeliculaAclamada(pelicula){
    const divPel = document.createElement("div");
    divPel.classList.add("carrusel-item");
    divPel.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="">
                        </a>`;

    return divPel;
}


function renderizarPelicula(div, seccion) {
    const peliculaTendencia = document.querySelector(seccion);
    peliculaTendencia.appendChild(div);
}

function insertarPelicula(pelicula, seccion) {
    let div;
    if (seccion =="#pelicula-tendencia"){
        div = crearPeliculaTendencia(pelicula); 
    }else{
        div = crearPeliculaAclamada(pelicula); 
    }   
    
    renderizarPelicula(div, seccion);
}
