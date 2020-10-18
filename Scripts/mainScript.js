const imagenes = document.querySelector(".Carrusel");
const botones = document.querySelectorAll(".botonCarrusel");
const imagenesNum = 5;
let imagenActual = 1;
let mover = 0;
let displacement = 100
botones.forEach( boton => {
    boton.addEventListener("click", event =>{
        if (event.target.id === "back"){
            if(imagenActual != 1){
                imagenActual--;
                if(imagenActual === 2){
                    mover += displacement;
                }
                else{
                    mover += displacement;
                }
                

            }
        }
        else{
            if(imagenActual != imagenesNum){
                imagenActual++;
                if(imagenActual === 1){
                    mover -= displacement;
                }
                else{
                    mover -= displacement;
                }

                
            }
        }
        imagenes.style.transform = `translateX(${mover}vw)`;
    });
});

const skills = document.getElementById("Skills")
let andres = {
    HTML : 10,
    CSS : 100,
    JavaScript : 100,
    Figma : 20,
    React : 50,
    Scrum : 30,
}
let count = 0;
let barAttributes = ""
for (let prop in andres){
    barAttributes += `<div class = "bar-column" id = "${prop}"><span>${prop}\n ${andres[prop]}%</span></div>\n`
    count++;
}

skills.innerHTML = `<h1 class="sectionTitle">My Skills</h1>` +
`<div id = "bar-Chart">` +
  barAttributes +               
`</div>`;
const barritas = document.querySelectorAll(".bar-column")
const barras_width = (500 - (5 * count)) / count
    for (let index = 0; index < barritas.length; index++) {
        const element = barritas[index];
        element.style.width = `${barras_width}px`;
    }
for (let prop in andres){
    elemento = document.getElementById(prop);
    elemento.style.height = `${300 * andres[prop] / 100}px`;
}

function formSubmit() {
    let name = document.forms["userMessage"]["Name"].value;
    let mail = document.forms["userMessage"]["Email"].value;
    let message = document.forms["userMessage"]["Message"].value;
    console.log(name + '\n' + mail + '\n' + message)
    alert("“Su solicitud ha sido enviada")
}