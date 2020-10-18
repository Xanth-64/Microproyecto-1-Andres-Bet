const imagenes = document.querySelector(".Carrusel");
const botones = document.querySelectorAll(".botonCarrusel");
const imagenesNum = 5;
let imagenActual = 1;
let mover = 0;

botones.forEach( boton => {
    boton.addEventListener("click", event =>{
        if (event.target.id === "back"){
            if(imagenActual != 1){
                imagenActual--;
                if(imagenActual === 2){
                    mover += 600;
                }
                else{
                    mover += 600;
                }
                

            }
        }
        else{
            if(imagenActual != imagenesNum){
                imagenActual++;
                if(imagenActual === 1){
                    mover -= 600;
                }
                else{
                    mover -= 600;
                }

                
            }
        }
        imagenes.style.transform = `translateX(${mover}px)`;
    });
});