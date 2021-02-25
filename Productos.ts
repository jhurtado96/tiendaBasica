class Producto {
  private nombre:string
  private precio:number
  private cantidad:number
  constructor(nombre, precio) {
    this.nombre = nombre
    this.precio=precio
}
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }


    
    
  public toString() {
        
        console.log(this.nombre)
        console.log(this.precio)
    }


}

class Carrito{
    private carrito:Producto[]

    public getCarrito(): Producto[] {
        return this.carrito;
    }

    public setCarrito(carrito: Producto[]): void {
        this.carrito = carrito;
    }

    constructor(carrito){
        this.carrito=carrito
    }
}

let skate = new Producto("Skate Manchego", 99)
let camiseta = new Producto("Camiseta Blanca", 19)
let pistola = new Producto("pistola", 199)
let ordenador = new Producto("Ordenador Gaming", 1999)
let rodillo = new Producto("Rodillo",29)
let carne = new Producto("Carne",99)
let casco = new Producto("Casco",69)
let filete = new Producto("Filete",49)
let casa = new Producto("Casa",500)
let arrayCarrito = new Carrito([])

function meterEnCarrito (producto){
    
    arrayCarrito.getCarrito().push(producto)

    if(arrayCarrito.getCarrito().includes(producto)){
        
    }

}


function mostrarCarritoPrecio() {
  let precioTotal = 0
  let carritoNombres=[]
  let nombresyprecio=""
    for(let i = 0;i<arrayCarrito.getCarrito().length;i++){
        precioTotal=arrayCarrito.getCarrito()[i].getPrecio()+ precioTotal
    

    }
    
    for(let i = 0;i<arrayCarrito.getCarrito().length;i++){
        carritoNombres.push(i+1+": " + arrayCarrito.getCarrito()[i].getNombre()+ " - " + arrayCarrito.getCarrito()[i].getPrecio()+ "€ "+"<br>")
    }
    for(let i=0;i<carritoNombres.length;i++){
        nombresyprecio += carritoNombres[i]
    }
    
    document.getElementById("contenidoCarrito").innerHTML = nombresyprecio + " El precio total de los productos es: " + precioTotal +"€"
}


