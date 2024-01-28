
class Persona {
  nombre;
  apellido;
  edad;
  cedula;
  constructor(nombre, apellido, edad, cedula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
  }
  printPersona() {
    return `Persona - Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Cedula: ${this.cedula}`;
  }
}

const persona1 = new Persona("Luiz", "Portilla", 29, 1007191842);


function showPersona() {
  let container = document.querySelector(".container-persona");
  container.innerHTML = `<div class="container"> ${persona1.printPersona()} </div>`;
}
showPersona();
