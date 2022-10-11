/* js productos*/

let producto1 = {
  nombre: "bacha artesanal",
  precio: 4850,
  stock: 5
}
 
let producto2 = {
  nombre: "jarrita acqua",
  precio: 1200,
  stock: 20
}
 
let producto3 = {
  nombre: "jarrón rubí",
  precio: 3300,
  stock: 25
}
 
let producto4 = {
  nombre: "cuenco acqua",
  precio: 1300,
  stock: 30
}
 
let producto5 = {
  nombre:"taza rústica rubí",
  precio: 1500,
  stock: 50  
} 

let producto6 = {
  nombre: "hornito rubí",
  precio: 1900,
  stock: 30
}
  
let producto7 = {
  nombre: "ensaladera mar",
  precio: 2800,
  stock: 20
}
 
let producto8 = {
  nombre: "mate acqua",
  precio: 1400,
  stock: 70
}
 

let precioTotal = 0

let listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]

let listaNombres = []

for (const producto of listaProductos){
     listaNombres.push(producto.nombre) 
}

function saludo (){
     alert ("Gracias por ingresar a Magia Blanca!")
}

saludo();

alert ("Aquí podra adquirir los siguientes productos: \n - " + listaNombres.join("\n - "))

let cantidadCompra = prompt ("Cuantos productos desea adquirir?")

for(let i = 0; i < cantidadCompra; i = i + 1){
  let productoCompra = prompt("Que producto desea comprar?: \n - bacha artesanal \n - jarrita acqua \n - jarrón rubí \n - cuenco acqua \n - taza rústica rubí \n - hornito rubí \n - ensaladera mar \n - mate acqua")

if (productoCompra == "bacha artesanal"){
  
  let cantidadProductoBacha = prompt("Ingrese que cantidad de " + producto1.nombre + " desea comprar:")
  if (cantidadProductoBacha <= producto1.stock){
       precioTotal = precioTotal + (cantidadProductoBacha * producto1.precio)
  }
  else {
      alert("El stock actual de este producto es de: " + producto1.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
  }
}

else if (productoCompra == "jarrita acqua"){
  
  let cantidadProductoJarrita = prompt("Ingrese que cantidad de " + producto2.nombre + " desea comprar:")
  if (cantidadProductoJarrita <= producto2.stock){
       precioTotal = precioTotal + (cantidadProductoJarrita * producto2.precio) 
  }
  else {
    alert("El stock actual de este producto es de: " + producto2.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}
}

else if (productoCompra == "jarrón rubí"){
  
  let cantidadProductoJarrón = prompt("Ingrese que cantidad de " + producto3.nombre + " desea comprar:")
  if (cantidadProductoJarrón <= producto3.stock) {
       precioTotal = precioTotal + (cantidadProductoJarrón * producto3.precio) 
  }
  else {
    alert("El stock actual de este producto es de: " + producto3.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
} 
}

else if (productoCompra == "cuenco acqua"){
  
  let cantidadProductoCuenco = prompt("Ingrese que cantidad de " + producto4.nombre + " desea comprar:")
  if (cantidadProductoCuenco <= producto4.stock) {
        precioTotal = precioTotal + (cantidadProductoCuenco * producto4.precio) 
  }
  else {
    alert("El stock actual de este producto es de: " + producto4.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}  
}

else if (productoCompra == "taza rústica rubí"){
  
  let cantidadProductoTaza = prompt("Ingrese que cantidad de " + producto5.nombre + " desea comprar:")
  if (cantidadProductoTaza <= producto5.stock) {
       precioTotal = precioTotal + (cantidadProductoTaza * producto5.precio)
  }
  else {
    alert("El stock actual de este producto es de: " + producto5.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}  
}

else if (productoCompra == "hornito rubí"){
  
  let cantidadProductoHornito = prompt("Ingrese que cantidad de " + producto6.nombre + " desea comprar:")
  if (cantidadProductoHornito <= producto6.stock) {
        precioTotal = precioTotal + (cantidadProductoHornito * producto6.precio)
  }
  else {
    alert("El stock actual de este producto es de: " + producto6.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}
}

else if (productoCompra == "ensaladera mar"){
  
  let cantidadProductoEnsaladera = prompt("Ingrese que cantidad de " + producto7.nombre + " desea comprar:")
  if (cantidadProductoEnsaladera <= producto7.stock) {
        precioTotal = precioTotal + (cantidadProductoEnsaladera * producto7.precio) 
  }
  else {
    alert("El stock actual de este producto es de: " + producto7.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}
}

else if (productoCompra == "mate acqua"){
  
  let cantidadProductoMate = prompt("Ingrese que cantidad de " + producto8.nombre + " desea comprar:")
  if (cantidadProductoMate <= producto8.stock) {
        precioTotal = precioTotal + (cantidadProductoMate * producto8.precio)
  }
  else {
    alert("El stock actual de este producto es de: " + producto8.stock + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
  } 
}
} 

if (precioTotal != 0){
  alert("El precio total es: " + precioTotal)
}

saludo();





