const API_SERVER = 'https://api.themoviedb.org/3'; 


const options = {
    method: 'GET', 
    headers: {
        accept: 'application/json', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njc0ZjM3NDA1YmQxZWYyMjAwY2Y2YzEyNDI5NGM2ZCIsInN1YiI6IjY2NTNhNDBhZWZiMWIxMzE0MzMxNzk2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.paS50HXLF9Fbwp_CT49CXAq1IlJ1X4qEKm6jsFMHT4Y'
        
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
