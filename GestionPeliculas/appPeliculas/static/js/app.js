

function eliminarPelicula(id){
    Swal.fire({
        title: "¿Está seguro que desea ELIMINAR esta Película de la Base de Datos?",
        showDenyButton: true,
        confirmButtonText: "SI",
        denyButtonText: "NO",


    }).then((result)=>{
        if(result.isConfirmed){
            location.href = "/eliminarPelicula/" + id
        }
    });
}




function eliminarGenero(objectId) {
    Swal.fire({
        title: "¿Está seguro que desea ELIMINAR este Género de la Base de Datos?",
        showDenyButton: true,
        confirmButtonText: "SI",
        denyButtonText: "NO",
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = "/eliminarGenero/" + objectId;
        }
    });
}
