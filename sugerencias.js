function pelis()
{
    var titulo = document.getElementById("titulo").value;
    var desc = document.getElementById("desc").value;
    var e = document.getElementById("seleccion");
    var img;
    if (e.options[e.selectedIndex].value == "b")
        img = recuperar_nombre(); //No va
    else
        img = "a";

    if (titulo == null || titulo == "")
        alert("Rellene el título")
    else
        if (desc == null || desc == "")
            alert("Rellene la descripción")
        else
            if (img == "")
                alert("Desmarque la subida de archivos")
            else
                grabar_xml(titulo, desc, img); //Esto es en lo que pido ayuda. Sería abrir el fichero para escritura, saltarse el elemento raíz, escribir, guardar, y salir, sin mostrar
 
}