export class Usuario{
    uid:string;
    nombre:string;
    apellidos:string;
    email:string;
    horario:string;
    estado:string;
    forma_contactar:string;
    descripcion:string;
    foto:string;
    telefono:string;

    constructor(uid:string, nombre:string, apellidos:string, email:string, horario:string, estado:string, forma_contactar:string, descripcion:string, foto:string, telefono:string){
        this.uid = uid;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.horario = horario;
        this.estado = estado;
        this.forma_contactar = forma_contactar;
        this.descripcion = descripcion;
        this.foto = foto;
        this.telefono = telefono;
    }
}