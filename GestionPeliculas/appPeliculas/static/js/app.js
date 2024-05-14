

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



/* function eliminarGenero(nombre) {
    Swal.fire({
        title: "¿Está seguro que desea ELIMINAR el género " + nombre + "?",
        showDenyButton: true,
        confirmButtonText: "SI",
        denyButtonText: "NO",
    }).then((result) => {
        if (result.isConfirmed) {
            // Encode the name to ensure it's properly passed in the URL
            var encodedNombre = encodeURIComponent(nombre);
            // Send the request to delete the genre
            location.href = "/eliminarGenero/" + encodedNombre;
        }
    });
} */

/* function eliminarGenero(id) {
    Swal.fire({
        title: "¿Está seguro que desea ELIMINAR este Género?",
        showDenyButton: true,
        confirmButtonText: "SI",
        denyButtonText: "NO",
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = "/eliminarGenero/" + id;
        }
    });
} */


function eliminarGenero(objectId) {
    Swal.fire({
        title: "¿Está seguro que desea ELIMINAR este Género?",
        showDenyButton: true,
        confirmButtonText: "SI",
        denyButtonText: "NO",
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = "/eliminarGenero/" + objectId;
        }
    });
}
