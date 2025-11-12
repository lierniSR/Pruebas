class Contacto{
    constructor(nombre, telefono, email){
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

    visualizar(){
        return this.nombre + " // " + this.telefono + " // " + this.email;
    }
}