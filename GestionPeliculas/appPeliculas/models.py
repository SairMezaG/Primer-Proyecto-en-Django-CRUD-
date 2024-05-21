from djongo import models

# Create your models here.



class Genero(models.Model):
    nombre = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.nombre



class Pelicula(models.Model):
    codigo = models.CharField(max_length=9)
    titulo = models.CharField(max_length=50)
    protagonista = models.CharField(max_length=50)
    duracion = models.IntegerField()
    resumen = models.CharField(max_length=2000)
    foto = models.ImageField(upload_to="fotos/", null=True, blank=True)
    genero = models.ForeignKey(Genero, on_delete=models.PROTECT)  

    def __str__(self):
        return self.titulo

    def delete(self, using=None, keep_parents=False):
        # Elimina la imagen asociada antes de eliminar la instancia
        if self.foto:
            self.foto.storage.delete(self.foto.name)
        super().delete(using=using, keep_parents=keep_parents)
