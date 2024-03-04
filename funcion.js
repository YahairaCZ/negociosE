function agregarProducto() {
    var producto = document.getElementById("producto").value;
    var descripcion = document.getElementById("descripcion").value;
    var fecha = document.getElementById("fecha").value;
    
    // Obtener el archivo de imagen seleccionado por el usuario
    var fileInput = document.getElementById('imagen');
    var file = fileInput.files[0];
    
    // Verificar si se seleccionó un archivo de imagen
    if(file) {
        // Crear un lector de archivos para leer el contenido de la imagen
        var reader = new FileReader();
        
        // Definir una función de devolución de llamada cuando la lectura del archivo esté completa
        reader.onload = function(e) {
            // Crear elemento de imagen
            var imagen = document.createElement("img");
            imagen.src = e.target.result; // URL de datos de la imagen
            
            // Establecer estilos
            imagen.style.maxWidth = "100px";

            // Crear nueva fila y celdas para la tabla
            var tabla = document.getElementById("tablaProductos");
            var newRow = tabla.insertRow(-1);
            var newCell1 = newRow.insertCell(0);
            var newCell2 = newRow.insertCell(1);
            var newCell3 = newRow.insertCell(2);
            var newCell4 = newRow.insertCell(3);
            var newCell5 = newRow.insertCell(4);

            // Insertar datos y elementos en las celdas
            newCell1.innerHTML = producto;
            newCell2.innerHTML = descripcion;
            newCell3.innerHTML = fecha;
            newCell4.appendChild(imagen);
            newCell5.innerHTML = '<button onclick="editarProducto(this)">Editar</button> <button onclick="eliminarProducto(this)">Eliminar</button>';

            // Limpiar los campos de entrada después de agregar el producto
            document.getElementById("producto").value = "";
            document.getElementById("descripcion").value = "";
            document.getElementById("fecha").value = "";
        };
        
        // Leer el contenido del archivo como una URL de datos
        reader.readAsDataURL(file);
    } else {
        alert('Por favor seleccione una imagen.');
    }
}


function editarProducto(button) {
    var row = button.parentNode.parentNode;
    productoEditando = row;
    var producto = row.cells[0].innerHTML;
    var descripcion = row.cells[1].innerHTML;
    var fecha = row.cells[2].innerHTML;
    var imagen = row.cells[3].querySelector('img').src; // Obtener la URL de la imagen
    
    // Mostrar los detalles del producto en los campos de entrada
    document.getElementById("producto").value = producto;
    document.getElementById("descripcion").value = descripcion;
    document.getElementById("fecha").value = fecha;
    
    // Mostrar la imagen actual del producto
    var imagenPreview = document.createElement("img");
    imagenPreview.src = imagen;
    imagenPreview.style.maxWidth = "100px";
    document.getElementById("imagenPreview").innerHTML = ''; // Limpiar la imagen anterior
    document.getElementById("imagenPreview").appendChild(imagenPreview);
    
    // Mostrar el botón de "Guardar cambios" y ocultar el botón de "Agregar"
    document.getElementById("agregar").style.display = "none";
    document.getElementById("editar").style.display = "inline";
}


// función para eliminar un producto existente
function eliminarProducto(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function guardarCambios() {
    var nuevoProducto = document.getElementById("producto").value;
    var nuevaDescripcion = document.getElementById("descripcion").value;
    var nuevaFecha = document.getElementById("fecha").value;

    // Obtener el archivo de imagen seleccionado por el usuario
    var fileInput = document.getElementById('imagen');
    var file = fileInput.files[0];

    // Verificar si se seleccionó un nuevo archivo de imagen
    if(file) {
        // Crear un lector de archivos para leer el contenido de la imagen
        var reader = new FileReader();
        
        // Definir una función de devolución de llamada cuando la lectura del archivo esté completa
        reader.onload = function(e) {
            // Crear elemento de imagen
            var imagen = document.createElement("img");
            imagen.src = e.target.result; // URL de datos de la nueva imagen
            
            // Establecer estilos
            imagen.style.maxWidth = "100px";
            
            // Actualizar la imagen en la tabla
            productoEditando.cells[3].innerHTML = '';
            productoEditando.cells[3].appendChild(imagen);

            // Actualizar los detalles del producto en la tabla
            productoEditando.cells[0].innerHTML = nuevoProducto;
            productoEditando.cells[1].innerHTML = nuevaDescripcion;
            productoEditando.cells[2].innerHTML = nuevaFecha;

            // Limpiar los campos de entrada después de guardar los cambios
            document.getElementById("producto").value = "";
            document.getElementById("descripcion").value = "";
            document.getElementById("fecha").value = "";

            // Limpiar la vista previa de la imagen
            document.getElementById("imagenPreview").innerHTML = '';

            // Mostrar el botón de "Agregar" y ocultar el botón de "Guardar cambios"
            document.getElementById("agregar").style.display = "inline";
            document.getElementById("editar").style.display = "none";

            // Reiniciar la variable productoEditando
            productoEditando = null;
        };
        
        // Leer el contenido del nuevo archivo como una URL de datos
        reader.readAsDataURL(file);
    } else {
        // Si no se selecciona una nueva imagen, simplemente actualizar los detalles del producto en la tabla
        productoEditando.cells[0].innerHTML = nuevoProducto;
        productoEditando.cells[1].innerHTML = nuevaDescripcion;
        productoEditando.cells[2].innerHTML = nuevaFecha;

        // Limpiar los campos de entrada después de guardar los cambios
        document.getElementById("producto").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("fecha").value = "";

        // Limpiar la vista previa de la imagen
        document.getElementById("imagenPreview").innerHTML = '';

        // Mostrar el botón de "Agregar" y ocultar el botón de "Guardar cambios"
        document.getElementById("agregar").style.display = "inline";
        document.getElementById("editar").style.display = "none";

        // Reiniciar la variable productoEditando
        productoEditando = null;
    }
}
