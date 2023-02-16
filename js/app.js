const btnBalance = document.getElementById("btn-balance");
const btnCategorias = document.getElementById("btn-categorias");
const btnReportes = document.getElementById("btn-reportes");
const seccionBalance = document.getElementById("balance");
const seccionCategorias = document.getElementById("categorias");
const seccionReportes = document.getElementById("reportes");
const btnOperacion = document.getElementById("con-operaciones")
const seccionOperacion = document.getElementById("con-operaciones-seccion")
const ocultarFiltros = document.getElementById("ocultar-filtros")
const  cajaFiltros = document.getElementById("caja-filtros")
const inputDate = document.getElementById("input-date-uno")
const $inputDescripcion = document.getElementById("input-descripcion")
const inputMonto = document.getElementById("input-monto")

                                        //  BOTONES DE MOSTRAR SECCIONES
btnBalance.addEventListener("click" , (e) =>{
  seccionCategorias.classList.add("oculto");
  seccionReportes.classList.add("oculto");
  seccionBalance.classList.remove("oculto");
  seccionOperacion.classList.add("oculto")
})
btnCategorias.addEventListener("click" , (e) =>{
  seccionCategorias.classList.remove("oculto");
  seccionBalance.classList.add("oculto");
  seccionReportes.classList.add("oculto");
  seccionOperacion.classList.add("oculto")
})
    
btnReportes.addEventListener("click" , (e) =>{
  seccionReportes.classList.remove("oculto");
  seccionCategorias.classList.add("oculto")  
  seccionBalance.classList.add("oculto");
})
        
btnOperacion.addEventListener("click", (e) =>{
  seccionOperacion.classList.remove("oculto");
  seccionBalance.classList.add("oculto");
  seccionReportes.classList.add("oculto");
  seccionCategorias.classList.add("oculto");
  seccionBalance.classList.add("oculto");
})
                                //ME MUESTRA LA FECHA ACTUAL//
window.onload = function(){

  var fecha = new Date();
  var mes = fecha.getMonth()+1;
  var dia = fecha.getDate();
  var ano = fecha.getFullYear();
  if(dia<10)
  dia = "0"+ dia;
  if(mes<10)  
  mes="0"+mes
 inputDate.value=ano+"-"+mes+"-"+dia; 
}


window.addEventListener("load", () =>{

  const form = document.querySelector("form")
  const inputDateUno = document.querySelector("#input-date-uno")
  const $operacionesFinales = document.querySelector("#operaciones-finales")
  const btnAgregar = document.querySelector("#btn-agregar")
  const operacionImagen = document.querySelector(".operaciones-imagen")
  const todo = document.querySelector(".todo")



  let operacion = [] //mi array de datos//

//BOTON AGREGAR//
  btnAgregar.addEventListener("click", (e) =>{
  $operacionesFinales.classList.toggle("oculto")
  todo.classList.toggle("oculto")
  operacionImagen.classList.add("oculto")

  operacion.push({
    Id: crypto.randomUUID(),
    Descripcion: $inputDescripcion.value, 
    Monto: inputMonto.value, 
    Tipos: tipo.value,
     Categoria: categoria.value, 
     Fecha: inputDate.value 
    });
    localStorage.setItem("arrayOperaciones", JSON.stringify(operacion));

  paint()
  console.log(operacion)
  })

//----------------------cierra boton agregar----------//








// ---------------------------------PINTAR-----------------
const paint = () =>{
  $operacionesFinales.innerHTML = ""
  operacion.forEach(element => {
    $operacionesFinales.innerHTML += `
    <div class="caja-nueva-operacion">
    <p class="col-10">${element.Descripcion} ${element.Categoria} ${element.Fecha} ${element.Monto}</p> 
    <div class ="col-2">
    <button class="btn-editar"> Editar</button> <button class="btn-delete" id=${element.Id}> Eliminar </button> 
    </div>
    </div>
    `;
  });

  eventoBtnDelete()
};
//------------------------------CIERRA PINTAR------------------//

 //-----------------------------Evento btn delete// 
const eventoBtnDelete = () => {
  const $btnDelete = document.querySelectorAll(".btn-delete");
$btnDelete.forEach((btn) =>{
btn.addEventListener("click", (e) =>{
  let btnId = e.target.id;
operacion = operacion.filter(operacion => operacion.Id !== btnId);
paint()
localStorage.setItem("arrayOperaciones", JSON.stringify(operacion));
})
})
}
///CIERRA EVENTO DELETE//
























//selec tipo//
  const tipo = document.querySelector("#tipo")
   tipo.addEventListener("change", (e) =>{

})

//selec categoria// 
const categoria = document.querySelector("#categoria")
categoria.addEventListener("change", (e) =>{

})












//filtrar por fecha mayo o menor lo vimos en clase 15/2//

}) //cierra el windows//