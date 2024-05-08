

function eliminarPelicula(id){
    Swal.fire({
        title: "¿Está seguro que desea ELIMINAR esta Película?",
        showDenyButton: true,
        confirmButtonText: "SI",
        denyButtonText: "NO",


    }).then((result)=>{
        if(result.isConfirmed){
            location.href = "/eliminarPelicula/" + id
        }
    });
}


function editarPelicula(id) {
    Swal.fire({
        title: "¿Está seguro que desea EDITAR esta Película?",
        showDenyButton: true,
        confirmButtonText: "SI",
        denyButtonText: "NO",
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirige a la página de edición de la película
            location.href = "/listarPeliculas/" + id;
        }
    });
}
