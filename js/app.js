


let operacion = [] //mi array de datos//

localStorage.setItem("arrayOperaciones", JSON.stringify(operacion)) //transforma de JS a JSON//


window.addEventListener("load", () =>{

  let datosFormatoJSON = localStorage.getItem("operacion")
  let datosParseadosJavaScrip = JSON.parse(datosFormatoJSON) //transforma de JSON a JS/
  
  


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
const $inputDescripcion = document.getElementById("input-descripcion")
const inputMonto = document.getElementById("input-monto");
const inputDate = document.getElementById("input-date")
const inputDateUno = document.querySelector("#date-filter")
const btnCancelar = document.getElementById("btn-cancelar")
const form = document.querySelector("form")
const $operacionesFinales = document.querySelector("#operaciones-finales")
const btnAgregar = document.querySelector("#btn-agregar")
const operacionImagen = document.querySelector(".operaciones-imagen")
const todo = document.querySelector(".todo")
const btnAgregarCategoria = document.getElementById("agregar-categoria");


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
 //---------------------- ME MUESTRA LA FECHA ACTUAL---------//

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
////////////



//BOTON AGREGAR//
  btnAgregar.addEventListener("click", (e) =>{
  $operacionesFinales.classList.remove("oculto")
  todo.classList.remove("oculto")
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


//condicion categoria//
const nuevaCategoria = document.querySelector("#nueva-categoria")
const contenedorFiltros = document.querySelectorAll(".contenedor-filtros")
btnAgregarCategoria.addEventListener("click", (e) =>{
  let catego = nuevaCategoria.value
  console.log(catego)
paint()
})



// ---------------------------------PINTAR-----------------
const paint = () =>{
  $operacionesFinales.innerHTML = ""
  operacion.forEach(element => {
    $operacionesFinales.innerHTML += `
    <div class="caja-nueva-operacion">
    <p class="col-10">${element.Descripcion} ${element.Categoria} ${element.Fecha} ${element.Monto} </p> 
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
const eventoBtnDelete = () =>{
  const $btnDelete = document.querySelectorAll(".btn-delete");
$btnDelete.forEach((btn) =>{
btn.addEventListener("click", (e) =>{
  let btnId = e.target.id;
operacion = operacion.filter(cadaOperacion => cadaOperacion.Id !== btnId);

paint()
localStorage.setItem("arrayOperaciones", JSON.stringify(operacion));
})
})
}
///CIERRA EVENTO DELETE//





//FILTRAR TIPO//
const filtroTipo = document.getElementById("filtro-tipo")
filtroTipo.addEventListener("change", (e) =>{
  const filtrarTodos = operacion.filter(elem => elem.Tipos === "Gasto" || "Ganancia")
 const filtrarTipoGasto = operacion.filter(elem => elem.Tipos === "Gasto")
 const filtrarTipoGanancia = operacion.filter(elem => elem.Tipos === "Ganancia")

 
});

paint($operacionesFinales, filtroTipo.value)





paint()
}) //cierra el windows//