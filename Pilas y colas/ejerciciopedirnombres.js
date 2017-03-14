function Queue() {
  this.constructor = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  this.print = print;

  function enqueue(element) {
    this.constructor.push(element);
  };
  function dequeue() {
    return this.constructor.shift();
  };
  function empty() {
    return this.constructor.lenght == 0;
  };
  function print(element) {
    return document.write(this.constructor);
  };
};

var nombres = []

var nodeusarios = prompt("¿Cuántos usuarios son?")
for(var = i; )
var nombre = new Queue(prompt("Escribe el nombre"));
nombre.enqueue("");
nombre.enqueue("");
nombre.enqueue("");
nombre.enqueue("");
nombre.enqueue("");
//nombre.print()
var nodeusuarios = parseInt(prompt ("¿Cuántos usuarios son?"))

var usuarios = [];

for (var i = 0; i < nodeusuarios; i++) {
    var nombre = prompt("Ingresa el nombre " + (i+1));
    var estudiante = {}
    usuario.nombre = nombre;

    usuarios.push(estudiante);

}





for(var i = 0; i < nodeusarios.lenght; i++){
  nombres.push(nombre.dequeue() + " " + apellido.dequeue() + " ")
};
document.write(nombres);
