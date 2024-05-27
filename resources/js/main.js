const API_SERVER = 'https://api.themoviedb.org/3'; 


const options = {
    method: 'GET', 
    headers: {
        accept: 'application/json', 
        Authorization: `Bearer ${API_KEY}`
        
    }
};

async function cargarPeliculasPopulares() {
  const response = await fetch(`${API_SERVER}/movie/popular?page=1`, options);
  const data = await response.json();
  const peliculas = data.results;
  mostrarPorPantalla(peliculas, "#pelicula-tendencia");
}

async function cargarPeliculasAclamadas() {
  const response = await fetch(`${API_SERVER}/movie/top_rated`, options);
  const data = await response.json();
  const peliculas = data.results;  
  mostrarPorPantalla(peliculas, "#carrusel-container");
}


cargarPeliculasPopulares();
cargarPeliculasAclamadas();

function mostrarPorPantalla(peliculas, seccion){
    peliculas.forEach(pelicula => {
        insertarPelicula(pelicula, seccion);         
    });    
}
