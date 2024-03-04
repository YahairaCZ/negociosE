var productoEditando = null;
		
		// función para agregar un nuevo producto
		function agregarProducto() {
			var producto = document.getElementById("producto").value;
			var descripcion = document.getElementById("descripcion").value;
			var fecha = document.getElementById("fecha").value;
			var imagen = document.createElement("image");
            imagen.src = "https://dinadi.cl/imagenes/supergirl.jpg";
			imagen.style.maxWidth = "100px";
			var tabla = document.getElementById("tablaProductos");
			var newRow = tabla.insertRow(-1);
			var newCell1 = newRow.insertCell(0);
			var newCell2 = newRow.insertCell(1);
			var newCell3 = newRow.insertCell(2);
			var newCell4 = newRow.insertCell(3);
			var newCell5 = newRow.insertCell(4);
			newCell1.innerHTML = producto;
			newCell2.innerHTML = descripcion;
			newCell3.innerHTML = fecha;
			newCell4.appendChild(imagen);
			newCell5.innerHTML = '<button onclick="editarProducto(this)">Editar</button> <button onclick="eliminarProducto(this)">Eliminar</button>';
			document.getElementById("producto").value = "";
			document.getElementById("descripcion").value = "";
			document.getElementById("fecha").value = "";
			//document.getElementById("idDelElemento").appendChild(imagen);
			
		// función para eliminar un producto existente
		function eliminarProducto(button) {
			var row = button.parentNode.parentNode;
			row.parentNode.removeChild(row);
		}
