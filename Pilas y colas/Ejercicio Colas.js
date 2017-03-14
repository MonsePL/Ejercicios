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


var nombre = new Queue();
nombre.enqueue("Valentina");
nombre.enqueue("Beatriz");
nombre.enqueue("Sofia");
nombre.enqueue("Monica");
nombre.enqueue("Fernanda");
//nombre.print()

var apellido = new Queue();
apellido.enqueue("Perez");
apellido.enqueue("Buendía");
apellido.enqueue("Dolores");
apellido.enqueue("Ruiz");
apellido.enqueue("Dominguez");
//apellido.print();


for(var i = 0; i < 5; i++){
  nombres.push(nombre.dequeue() + " " + apellido.dequeue() + " ")
};
document.write(nombres);
