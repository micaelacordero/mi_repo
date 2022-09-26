/* js productos*/

let nombreProducto1 = "Bacha Artesanal"
let precioProducto1 = 4850
let stockProducto1 = 5

let nombreProducto2 = "Jarrita Acqua"
let precioProducto2 = 1200
let stockProducto2 = 20

let nombreProducto3 = "Jarrón Rubí"
let precioProducto3 = 3300
let stockProducto3 = 25

let nombreProducto4 = "Cuenco Acqua"
let precioProducto4 = 1300
let stockProducto4 = 30

let nombreProducto5 = "Taza rústica rubí"
let precioProducto5 = 1500
let stockProducto5 = 50

let nombreProducto6 = "Hornito rubí"
let precioProducto6 = 1900
let stockProducto6 = 30
 
let nombreProducto7 = "Ensaladera Mar"
let precioProducto7 = 2800
let stockProducto7 = 20

let nombreProducto8 = "Mate Acqua"
let precioProducto8 = 1400
let stockProducto8 = 70

let precioTotal = 0

alert ("Bienvenidos a Magia Blanca! Aquí podra adquirir los siguientes productos: \n - Bacha Artesanal  \n - Jarrita Acqua \n - Jarrón Rubí \n - Cuenco Acqua \n - Taza rústica rubí \n - Hornito rubí \n - Ensaladera Mar \n - Mate Acqua")

let cantidadCompra = prompt ("Cuantos productos desea adquirir?")

for(let i = 0; i < cantidadCompra; i = i + 1){
  let productoCompra = prompt("Que producto desea comprar?: \n - Bacha Artesanal \n - Jarrita Acqua \n - Jarrón Rubí \n - Cuenco Acqua \n - Taza rústica rubí \n - Hornito rubí \n - Ensaladera Mar \n - Mate Acqua")

if (productoCompra == "Bacha Artesanal"){
  
  let cantidadProductoBacha = prompt("Ingrese que cantidad de " + nombreProducto1 + " desea comprar:")
  if (cantidadProductoBacha <= stockProducto1){
       precioTotal = precioTotal + (cantidadProductoBacha * precioProducto1)
  }
  else {
      alert("El stock actual de este producto es de: " + stockProducto1 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
  }
}

else if (productoCompra == "Jarrita Acqua"){
  
  let cantidadProductoJarrita = prompt("Ingrese que cantidad de " + nombreProducto2 + " desea comprar:")
  if (cantidadProductoJarrita <= stockProducto2){
       precioTotal = precioTotal + (cantidadProductoJarrita * precioProducto2) 
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto2 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}
}

else if (productoCompra == "Jarrón Rubí"){
  
  let cantidadProductoJarrón = prompt("Ingrese que cantidad de " + nombreProducto3 + " desea comprar:")
  if (cantidadProductoJarrón <= stockProducto3) {
       precioTotal = precioTotal + (cantidadProductoJarrón * precioProducto3) 
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto3 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
} 
}

else if (productoCompra == "Cuenco Acqua"){
  
  let cantidadProductoCuenco = prompt("Ingrese que cantidad de " + nombreProducto4 + " desea comprar:")
  if (cantidadProductoCuenco <= stockProducto4) {
        precioTotal = precioTotal + (cantidadProductoCuenco * precioProducto4) 
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto4 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}  
}

else if (productoCompra == "Taza rústica rubí"){
  
  let cantidadProductoTaza = prompt("Ingrese que cantidad de " + nombreProducto5 + " desea comprar:")
  if (cantidadProductoTaza <= stockProducto5) {
       precioTotal = precioTotal + (cantidadProductoTaza * precioProducto5)
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto5 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}  
}

else if (productoCompra == "Hornito rubí"){
  
  let cantidadProductoHornito = prompt("Ingrese que cantidad de " + nombreProducto6 + " desea comprar:")
  if (cantidadProductoHornito <= stockProducto6) {
        precioTotal = precioTotal + (cantidadProductoHornito * precioProducto6)
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto6 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}
}

else if (productoCompra == "Ensaladera Mar"){
  
  let cantidadProductoEnsaladera = prompt("Ingrese que cantidad de " + nombreProducto7 + " desea comprar:")
  if (cantidadProductoEnsaladera <= stockProducto7) {
        precioTotal = precioTotal + (cantidadProductoEnsaladera * precioProducto7) 
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto7 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
}
}

else if (productoCompra == "Mate Acqua"){
  
  let cantidadProductoMate = prompt("Ingrese que cantidad de " + nombreProducto8 + " desea comprar:")
  if (cantidadProductoMate <= stockProducto8) {
        precioTotal = precioTotal + (cantidadProductoMate * precioProducto8)
  }
  else {
    alert("El stock actual de este producto es de: " + stockProducto8 + ". En caso de necesitar realizar un pedido mayorista por favor comunicarse a través de la página de contacto.")
  } 
}
} 

if (precioTotal != 0){
  alert("El precio total es: " + precioTotal)
}





