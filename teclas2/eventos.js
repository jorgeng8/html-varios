document.addEventListener("keydown",dibujarTeclado); //una buena practia cuando se le lama una funcion es iniciar la primera palabra en letra minuscula y las demas palabras se inician en mayuscula
//Con "keydown" se satura el documento por la cantidad de eventos que suceden al dejar la tecla presionada. Con el "keyup" sólo se detecta el evento cuando la tecla se suelta.

var teclas={ //objeto con los codigos de las teclas JSON coleccion de variables //bloque de codigo
ARRIBA:38, //up
ABAJO:40, //down
IZQUIERDA:37, //left
DERECHA:39 //right
};// se recomienda describir las variables en mayuscula cuando no cambia mucho a lo largo de la vida del codigo //constantes
var cuadrito=document.getElementById("area_de_dibujo");
var papel=cuadrito.getContext("2d");
var x=150; var y= 150;

dibujarlinea("red",x-1,y-1,x+1,y+1, papel);
function dibujarlinea(color, xinicial, yinicial, xfinal,yfinal, lienzo){   
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.lineWidth=3; //hase la linea mas gruesa
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal); 
    lienzo.stroke(); 
    lienzo.closePath();
}
function dibujarTeclado(evento){ //evento variable llamada por el usario
    console.log(evento)
    var color="blue";
    var movimiento=1;
    
    switch (evento.keyCode) { //llama el aparmetro keyCode

        /*case teclas.ARRIBA: //case=caso
        dibujarlinea(color,x,y,x,y-movimiento, papel);//el codigo es secuencial ejemplo si pones y=y-movimiento; arriba ese inicia primero
        y=y-movimiento;
            break;*/

        
       case teclas.ARRIBA && teclas.IZQUIERDA: // dibujar en diagonal
        dibujarlinea(color,x,y,x,y-movimiento, papel);
        dibujarlinea(color,x,y,x-movimiento,y, papel);
        x=x-movimiento;
        y=y-movimiento;
            break;
 /*
        case teclas.ARRIBA && teclas.DERECHA: // dibujar en diagonal
        dibujarlinea(color,x,y,x,y-movimiento, papel);
        dibujarlinea(color,x,y,x+movimiento,y, papel);
        x=x+movimiento;
        y=y-movimiento;
        break;*/

        case teclas.ABAJO:
        dibujarlinea(color,x,y,x,y+movimiento, papel);
        y=y+movimiento;
            break;

        case teclas.IZQUIERDA:
        dibujarlinea(color,x,y,x-movimiento,y, papel);
        x=x-movimiento;
            break;

        case teclas.DERECHA:
        dibujarlinea(color,x,y,x+movimiento,y, papel);
        x=x+movimiento;
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
