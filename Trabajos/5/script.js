// Obtener la vista previa de la imagen y la vista previa ampliada
var imagen = document.getElementsByClassName("imagen-hotel")[0];
var vistaPrevia = document.getElementsByClassName("expandir-imagen")[0];
var modal = document.getElementById("myModal");

// Cuando el usuario haga clic en la imagen, abra la vista previa ampliada
imagen.onclick = function() {
  modal.style.display = "block";
  imagen.classList.add("blur");
}

// Cuando el usuario haga clic en la vista previa, cierre la vista previa ampliada
vistaPrevia.onclick = function() {
  modal.style.display = "none";
  imagen.classList.remove("blur");
}

// Cuando el usuario haga clic en cualquier lugar fuera de la vista previa, cierre la vista previa ampliada
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    imagen.classList.remove("blur");
  }
}


//scroll//
const btn_scrolltop = document.getElementById("btn_scrolltop")

btn_scrolltop.addEventListener('click',()=>{
  window.scrollTo(0,0)
})


window.onscroll =() => {
  if (window.scrollY < 300){
    btn_scrolltop.classList.remove("btn-scrolltop-on")
  } else {
    btn_scrolltop.classList.add("btn-scrolltop-on")
  }
  console.log(window.scrollY)
}