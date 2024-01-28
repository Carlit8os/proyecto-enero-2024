
class Animal {
  nombre;
  genero;
  raza;
  constructor(nombre, genero, raza) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;
  }
  printAnimal() {
    return `Animal - Nombre: ${this.nombre}, Genero: ${this.genero}, Raza: ${this.raza}`;
  }
}

const dog1 = new Animal("luky", "Macho", "siames");

function showAnimal() {
  let container = document.querySelector(".container-animal");
  container.innerHTML = `<div class="container"> ${dog1.printAnimal()} </div>`;
}
showAnimal();
