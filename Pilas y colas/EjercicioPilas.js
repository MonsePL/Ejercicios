function Stack() {
  var constructor= [];
  this.push = function(element) {
    constructor.push(element);
  };
  this.pop = function(){
    return constructor.pop();
  };
  this.print = function(){
    document.write(constructor.toString());
  };
  this.size = function(){
    return constructor.lenght;
  };
};

var nombres = []

var nombre = new Stack();
nombre.push("Valentina");
nombre.push("Beatriz");
nombre.push("Sofia");
nombre.push("Monica");
nombre.push("Fernanda");
//nombre.print();

var apellido = new Stack();
apellido.push("Perez");
apellido.push("Buendía");
apellido.push("Dolores");
apellido.push("Ruiz");
apellido.push("Dominguez");
//apellido.print();


for(var i = 0; i < 5; i++){
  nombres.push(nombre.pop() + " " + apellido.pop() + " ")
};
document.write(nombres);
