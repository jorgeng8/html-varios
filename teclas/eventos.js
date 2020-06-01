document.addEventListener("keyup",dibujarTeclado); //una buena practia cuando se le lama una funcion es iniciar la primera palabra en letra minuscula y las demas palabras se inician en mayuscula
//Con "keydown" se satura el documento por la cantidad de eventos que suceden al dejar la tecla presionada. Con el "keyup" sólo se detecta el evento cuando la tecla se suelta.

var teclas={ //objeto con los codigos de las teclas JSON coleccion de variables //bloque de codigo
ARRIBA:38, //up
ABAJO:40, //down
IZQUIERDA:37, //left
DERECHA:39 //right
};// se recomienda describir las variables en mayuscula cuando no cambia mucho a lo largo de la vida del codigo //constantes

function dibujarTeclado(evento){ //evento variable llamada por el usario
    console.log(evento.keyCode); //llama el parametro keyCode en la consola
    console.log(evento); //para saber el keyCode de la tecla se muestra en la consola
    switch (evento.keyCode) { //llama el aparmetro keyCode
        case teclas.ARRIBA: //case=caso
        console.log("arriba"); //up
            break;
        case teclas.ABAJO:
        console.log("abajo"); //down
            break;
        case teclas.IZQUIERDA:
        console.log("izquierda"); //left
            break;
        case teclas.DERECHA:
        console.log("derecha"); //right
            break;
        default: // si no es ninguna de las anteriores
        console.log("ninguna de las anteriores");
            break;
    }
}
/* //variante del case usando if
function dibujarTeclado(evento)
{
  if (evento.keyCode == teclas.arriba) {
    console.log("arriba");// muestra en la consola la direccion
  } else if (evento.keyCode == teclas.abajo) {
      console.log("abajo");
  } else if (evento.keyCode == teclas.izquierda) {
      console.log("izquierda");
  } else if (evento.keyCode == teclas.derecha) {
      console.log("derecha");
  } else { // si no es ninguna de las anteriores
      console.log("Otra tecla");
  }
}*/

/*Cuando colocamos un solo igual (=) lo que estamos realizando en una asignación de valor . 
Es decir cuando queremos que una variable sea igual a algo solamente aplicamos un igual (=) 
como por ejemplo var profesor = "Freddy"; 

Luego cuando utilizamos un doble igual (==) lo que estamos realizando es una comparación entre dos valores . 
Por eso es que donde mas lo van a utilizar es dentro de los condicionales (if , swich) . 
Es decir que si queremos comparar si mi variable es igual a un valor aplicamos el doble igual (==) . 
profesor == "Freddy".

Por último existe algo mas que nos podemos encontrar, es un triple igual (===) 
lo que realiza esto es una comparación entre dos valores pero ademas de comparar el valor compara el tipo de 
los valores . Es decir si comparamos 10 === "10" , por mas que el valor sea el mismo nos va a decir que la 
comparación es falsa ya que un valor es de tipo entero y otro es de tipo alfanumérico */