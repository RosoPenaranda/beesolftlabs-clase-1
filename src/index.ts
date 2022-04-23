/*console.log("Hello World");

let myName = "Max";

function doSomething() {
  console.log("Hello World");
  const a = 0;

  console.log(a);
}

console.log(myName);
*/

let valor;
let valor2: number;
const precio = 10;

let decimal: number = 10;
let hex: number = 0xf00d;
let binary: number = 0b101;
let octal: number = 0o744;

let nombre: string = "Max Mustermann";
let nombre2: string = "Max Mustermann";
let edad: number = 37;
let otroNOmbre: string = `Max Mustermann mi edad: ${edad}`;

console.log(otroNOmbre);

let lista: any[] = [1, 2, 3];
let lista2: string[] = ["Max", "Manuel", "Manuel 2"];
console.log(lista2[3]);

enum Color {
  Rojo,
  Verde,
  Azul,
}

const c: Color = Color.Rojo;
let d: Color;

enum ColorTexto {
  Rojo = "Rojo",
  Verder = 22,
  Azul = "Azul",
}

let colores = {
  Rojo: "Rojo",
  Verder: "Verder",
  Azul: "Azul",
};

let otro: ColorTexto;
otro = ColorTexto.Rojo;
let colorNuevo = colores.Rojo;

let nombre3: any;
function getValue(nombre: string): any {
  return nombre;
}
nombre3 = 5;

nombre3 = getValue("Max");

function vacia(): void {
  console.log("Vacia");
}

null;
undefined;

let numero;
let numero4: number;

numero = 3;

let valor999;
