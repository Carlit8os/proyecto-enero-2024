
class Veterinaria {
  nombre;
  direccion;
  telefono;
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  printVeterinaria() {
    return `Veterinaria - Nombre: ${this.nombre}, Direccion: ${this.direccion}, Telefono: ${this.telefono}`;
  }
}

const veterinaria1 = new Veterinaria(
  "Mr.Firulays", "Calle #53-24",3208897175);
console.log(veterinaria1.printVeterinaria());

function showVeterinaria() {
  let container = document.querySelector(".container-veterinaria");
  console.log(container);
  container.innerHTML = `<div class="container"> ${veterinaria1.printVeterinaria()} </div>`;
}
showVeterinaria();
