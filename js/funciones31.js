/*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS VI
 * Origin: Video31.html ==> Modificar tipo de líneas
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

//2. Definición de Funciones
function comenzar() {
    'use strict';
    var lienzo;
    //DIBUJAMOS UNA CARA
    //1. Indicamos que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');
    //2. Comenzamos el trazado de la circunferencia
    lienzo.arc(200,150,100,0,Math.PI*2,false);
    /**
     * Arc(x,y,r,rad1,rad2,boolean)
     *(x,y): son las coordenadas del centro del círculo
     *r: es el rádio del círculo
     *rad1: ángulo inicial en radianes
     *rad2: ángulo final en radianes
     *boolean: si es false, devuelve el arco, y si es true, devuelve el resto del arco
    */

    //3. Damos la orden de que dibuje la figura como contorno
    lienzo.stroke();
    
    //DIBUJAMOS UNA SONRISA
    //4. Cambiamos el grosor de la línea
    lienzo.lineWidth=10;
    
    //5. Cambiamos la finalización de la línea
    lienzo.lineCap="round";

    //6. Redibujamos los cambios.
    lienzo.beginPath();
    
    //7. Dibujamos el arco de la sonrisa
    lienzo.arc(200,170,60,0,Math.PI,false);
    lienzo.stroke();
    
    //DIBUJAMOS LA NARIZ
    //8. Cambiamos el grosor de la línea
    lienzo.lineWidth = 5;
    
    //9. Especificamos como conectamos las líneas del trazado que vamos a dibujar a continuación
    lienzo.lineJoin="miter";
    
    //10. Indicamos que la finalización "miter" la realice con límite
    lienzo.miterLimit="2";
    
    //11. Indicamos que vamos a iniciar el trazado
    lienzo.beginPath();
    
    //12. Posiciono el puntero
    lienzo.moveTo(195,135);
    
    //13. Dibujamos las íneas
    lienzo.lineTo(215,155);
    lienzo.lineTo(195,155);
    
    //14. Damos la orden de que dibuje la nueva figura como contorno
    lienzo.stroke();
    
    
    //DIBUJAMOS LOS OJOS
    //15. Cambiamos el grosor de la línea
    lienzo.lineWidth = "1";
    
    //16. Indicamos que vamos a iniciar el trazado
    lienzo.beginPath();
    
    //17. Dibujamos la circunferencia interior de los ojos
    lienzo.arc(175,110,7,0,Math.PI*2,false);
    lienzo.arc(225,110,7,0,Math.PI*2,false);
    
    
    //18. Damos la orden de que dibuje la nueva figura como relleno
    lienzo.fill();
    
    //19. Indicamos que vamos a iniciar el trazado
    lienzo.beginPath();
    
    //20. Dibujamos la circunferencia exterior del ojo izquierdo
    lienzo.arc(168,106,15,0,Math.PI*2,false);
    
    //21. Damos la orden de que dibuje la nueva figura como contorno
    lienzo.stroke();
    
    //22. Indicamos que dibuje un nuevo trazado
    lienzo.beginPath();
    
    //23. Dibujamos la circunferencia exterior del ojo derecho
    lienzo.arc(232,106,15,0,Math.PI*2,false);
    
    //24. Damos la orden de que dibuje la nueva figura como contorno
    lienzo.stroke();
    
}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded', cargarDocumento, false);
