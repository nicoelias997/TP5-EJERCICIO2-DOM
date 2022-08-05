class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }
    mostrarGeneracion(){
        if(this.nacimiento < 1930 || this.nacimiento > 2010){
            alert(
            `${this.nombre}, con edad: ${this.edad} no pertenece a niguna generacion.`)
        } 
        else if(this.nacimiento >= 1930 && this.nacimiento <= 1948){
            alert(`
            ${this.nombre}, con edad: ${this.edad} pertenece a la Silent Generation, referidas a los niños de la posguerra.
            Su rango caracteristico es la austeridad.`)
        }
        else if(this.nacimiento >= 1949 && this.nacimiento <= 1968){
            alert(`
            ${this.nombre}, con edad: ${this.edad} pertenece a la Baby Boom.
            Su rango caracteristico es la ambicion`)
        }
        else if(this.nacimiento >= 1969 && this.nacimiento <= 1980){
            alert(`
            ${this.nombre}, con edad: ${this.edad} pertenece a la generacion X.
            Su rango caracteristico es la obsesion por el exito.`)
        }
        else if(this.nacimiento >= 1981 && this.nacimiento <= 1993){
            alert(`
            ${this.nombre}, con edad: ${this.edad} pertenece a la generacion Y, llamados tambien milennials.
            Su rango caracteristico es la frustracion`)
        }
        else if(this.nacimiento >= 1994 && this.nacimiento <= 2010){
            alert(`
            ${this.nombre}, con edad: ${this.edad} pertenece a la generacion Z.
            Su rango caracteristico es la irreverencia.`)
        }
    }
    esMayorDeEdad(){
        if(this.edad >= 18){
            alert(`${this.nombre} eres mayor de edad.`)
        }else if(this.edad < 18 && this.edad >= 0){
            alert(`${this.nombre} eres menor de edad, debes esperar a cumplir 18 años!`)
        } else{
            alert("Ingresa un numero correcto!")
        }
    }
    mostrarDatos(){
        alert(`
        Nombre: ${this.nombre}.
        Edad: ${this.edad}.
        Dni: ${this.dni}.
        Sexo: ${this.sexo}.
        Peso: ${this.peso} kg.
        Altura: ${this.altura} cm.
        Fecha de nacimiento: ${this.nacimiento}.`)
    }
    generarDni(){
        let dni = Math.floor((Math.random() * (99999999 - 1 + 1)) + 1);
        this.dni = dni;
    }
 } 

 const botonEnviar = document.getElementById("enviarInfo");
 const btnMostrarInfo = document.getElementById("btnMostrarInfo");
 const btnMostrarGeneracion = document.getElementById("btnMostrarGeneracion");
 const btnMostrarMayorEdad = document.getElementById("btnMostrarMayorEdad");
 const card = document.getElementById("card-body");
 const parrafoNuevo = document.createElement("p")


 let persona1;

 const inscripcion = () => {
    persona1 = new Persona(document.querySelector("#nombre").value,
    document.querySelector("#edad").value,
    document.querySelector("#dni").value,
    document.querySelector("#sexo").value,
    document.querySelector("#peso").value,
    document.querySelector("#altura").value,
    document.querySelector("#nacimiento").value,
    )
    if(document.querySelector("#nombre").value != "" && document.querySelector("#edad").value != "" && document.querySelector("#nacimiento").value != ""){
    alert(`Te inscribiste correctamente, ${document.querySelector("#nombre").value}.`)
    } else {
    alert(`Debes completar correctamente al menos tu nombre, edad y tu fecha de nacimiento.`)
    }
    console.log(persona1)
 }

 const mostrarInformacion = () => {
    persona1.mostrarDatos();
 }

 const mostrarGeneracion = () => {
    persona1.mostrarGeneracion();
 }
 
 const mostrarMayorEdad = () => {
    persona1.esMayorDeEdad();
 }