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