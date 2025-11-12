let boton = document.getElementById("boton");
let body = document.querySelector("body");

boton.addEventListener("click", function(evento){
    evento.preventDefault();
    let div = document.createElement("div");

    let email = document.getElementById("email");
    let tel = document.getElementById("telefono");
    let nombre = document.getElementById("nombre");

    let info = document.getElementById("infor");

    if(comprobaciones(email.value, tel.value)){
        let contacto = new Contacto(nombre.value, tel.value, email.value);
        let labelContacto = document.createElement("label");
        labelContacto.innerHTML = contacto.visualizar();
        labelContacto.style.marginRight = "1em";

        let botonEliminar = document.createElement("button");
        let botonModificar = document.createElement("button");
        botonEliminar.innerHTML = "Eliminar Contacto";
        botonEliminar.style.marginRight = "1em";
        botonModificar.innerHTML = "Modificar Contacto";

        div.appendChild(labelContacto);
        div.appendChild(botonEliminar);
        div.appendChild(botonModificar);

        body.appendChild(div);

        botonEliminar.addEventListener("click", function(evento){
            body.removeChild(div);
        });

        botonModificar.addEventListener("click", function(evento){
            // Obtener elementos
            const modal = document.getElementById("miModal");
            const spanCerrar = document.querySelector(".cerrar");

            modal.style.display = "block";

            //Obtener todos los campos necesarios de la modal
            let nombreModal = document.getElementById("nombreModal");
            let telefonoModal = document.getElementById("telefonoModal");
            let emailModal = document.getElementById("gmailModal");
            let botonModal = document.getElementById("modalBoton");


            nombreModal.value = contacto.nombre;
            telefonoModal.value = contacto.telefono;
            emailModal.value = contacto.email

            // Cerrar modal con la X
            spanCerrar.onclick = function() {
                modal.style.display = "none";
            }

            botonModal.addEventListener("click", function(evento){
                evento.preventDefault();
                
                if(comprobaciones(emailModal.value, telefonoModal.value)){
                    let contactoNew = new Contacto(nombreModal.value, telefonoModal.value, emailModal.value);
                    div.firstChild.innerHTML = contactoNew.visualizar();
                    info.style.display = "block";
                    info.innerHTML = "Se ha actualizado el contacto con éxito!";
                    info.style.color = "green";
                } else {
                    info.style.display = "block";
                    info.innerHTML = "No se ha podido actualizar el contacto.";
                    info.style.color = "red";
                }

            });
        });
    }
});


function comprobaciones(email, tel){
    const comprobarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Cuando hay un ^ dentro de corchetes es como el operador !, todo menos espacios y @ en el primer ejemplo
    const comprobarTel = /^\d{9}$/;

    if(!comprobarEmail.test(email)){
        alert("El email está mal formada.");
        return false;
    }

    if(!comprobarTel.test(tel)){
        alert("El telefono está mal.");
        return false;
    }

    return true;
}