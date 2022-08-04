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
            alert(`<p>${this.nombre}, con edad: ${this.edad} no pertenece a niguna generacion.</p>`)
        } 
        else if(this.nacimiento >= 1930 && this.nacimiento <= 1948){
            alert(`<p>${this.nombre}, con edad: ${this.edad} pertenece a la <strong>Silent Generation</strong>, referidas a los niños de la posguerra.<br>Su rango caracteristico es la <strong>austeridad</strong></p>`)
        }
        else if(this.nacimiento >= 1949 && this.nacimiento <= 1968){
            alert(`<p>${this.nombre}, con edad: ${this.edad} pertenece a la <strong>Baby Boom</strong>.<br>Su rango caracteristico es la <strong>ambicion</strong></p>`)
        }
        else if(this.nacimiento >= 1969 && this.nacimiento <= 1980){
            alert(`<p>${this.nombre}, con edad: ${this.edad} pertenece a la <strong>generacion X</strong>.<br>Su rango caracteristico es la <strong>obsesion por el exito</strong></p>`)
        }
        else if(this.nacimiento >= 1981 && this.nacimiento <= 1993){
            alert(`<p>${this.nombre}, con edad: ${this.edad} pertenece a la <strong>generacion Y</strong>, llamados tambien milennials.<br>Su rango caracteristico es la <strong>frustracion</strong></p>`)
        }
        else if(this.nacimiento >= 1994 && this.nacimiento <= 2010){
            alert(`<p>${this.nombre}, con edad: ${this.edad} pertenece a la <strong>generacion Z</strong>.<br>Su rango caracteristico es la <strong>irreverencia</strong></p>`)
        }
    }
    esMayorDeEdad(){
        if(this.edad >= 18){
            alert(`${this.nombre} eres mayor de edad.`)
        }
        if(this.edad < 18 || isNaN(this.edad)){
            alert(`${this.persona} eres menor de edad, debes esperar a cumplir 18 años!`)
        }
    }
    mostrarDatos(){
        alert(`<ul>
        <li>Nombre: ${this.nombre}.</li>
        <li>Edad: ${this.edad}.</li>
        <li>Dni: ${this.dni}.</li>
        <li>Sexo: ${this.sexo}.</li>
        <li>Peso: ${this.peso} kg.</li>
        <li>Altura: ${this.altura} metros.</li>
        <li>Fecha de nacimiento: ${this.nacimiento}.</li>
        </ul>`)
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
    document.querySelector("#altura").value,
    document.querySelector("#peso").value,
    document.querySelector("#nacimiento").value,
    )
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