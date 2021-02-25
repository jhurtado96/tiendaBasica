var Producto = /** @class */ (function () {
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    Producto.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Producto.prototype.toString = function () {
        console.log(this.nombre);
        console.log(this.precio);
    };
    return Producto;
}());
var Carrito = /** @class */ (function () {
    function Carrito(carrito) {
        this.carrito = carrito;
    }
    Carrito.prototype.getCarrito = function () {
        return this.carrito;
    };
    Carrito.prototype.setCarrito = function (carrito) {
        this.carrito = carrito;
    };
    return Carrito;
}());
var skate = new Producto("Skate Manchego", 99);
var camiseta = new Producto("Camiseta Blanca", 19);
var pistola = new Producto("pistola", 199);
var ordenador = new Producto("Ordenador Gaming", 1999);
var rodillo = new Producto("Rodillo", 29);
var carne = new Producto("Carne", 99);
var casco = new Producto("Casco", 69);
var filete = new Producto("Filete", 49);
var casa = new Producto("Casa", 500);
var arrayCarrito = new Carrito([]);
function meterEnCarrito(producto) {
    arrayCarrito.getCarrito().push(producto);
    if (arrayCarrito.getCarrito().includes(producto)) {
    }
}
function mostrarCarritoPrecio() {
    var precioTotal = 0;
    var carritoNombres = [];
    var nombresyprecio = "";
    for (var i = 0; i < arrayCarrito.getCarrito().length; i++) {
        precioTotal = arrayCarrito.getCarrito()[i].getPrecio() + precioTotal;
    }
    for (var i = 0; i < arrayCarrito.getCarrito().length; i++) {
        carritoNombres.push(i + 1 + ": " + arrayCarrito.getCarrito()[i].getNombre() + " - " + arrayCarrito.getCarrito()[i].getPrecio() + "€ " + "<br>");
    }
    for (var i = 0; i < carritoNombres.length; i++) {
        nombresyprecio += carritoNombres[i];
    }
    document.getElementById("contenidoCarrito").innerHTML = nombresyprecio + " El precio total de los productos es: " + precioTotal + "€";
}
