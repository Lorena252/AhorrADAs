
$ = (selector) => document.querySelector(selector);
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
 const btnEliminarCategoria = document.querySelectorAll(".eliminarCategoria")
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



 window.addEventListener("load", () =>{
  let operacion = [] 
   localStorage.setItem("arrayOperaciones", JSON.stringify(operacion));
   const fechaActual = () =>{
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
fechaActual()


  btnAgregar.addEventListener("click", (e) =>{
     e.preventDefault()
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
   localStorage.setItem("arrayOperaciones", JSON.stringify(operacion ));
   paint()

  })
  //----------------------cierra boton agregar----------//



 // ---------------------------------PINTAR-----------------
  const paint = () =>{
   $operacionesFinales.innerHTML = "";
   operacion.forEach(element => {
    $operacionesFinales.innerHTML += `
    <div class="caja-nueva-operacion">
    <p class="col-10">${element.Descripcion} ${element.Categoria } ${element.Fecha}  ${element.Tipos == "Gasto" ? "-" : "+"}${element.Monto} </p>
    <div class ="col-2">
    <button class="btn-editar"> Editar</button> <button class="btn-delete" id=${element.Id}> Eliminar </button>
    </div>
    </div>
    `;
   });
   eventoBtnDelete()

  };
  localStorage.setItem("arrayOperaciones" , JSON.stringify(operacion ));

  const eventoBtnDelete = () =>{
   const $btnDelete = document.querySelectorAll(".btn-delete");
   $btnDelete.forEach((btn) =>{
   btn.addEventListener("click", (e) =>{
   let btnId = e.target.id;
    operacion = operacion.filter(cadaOperacion => cadaOperacion.Id !== btnId);
   paint()
   localStorage.setItem("arrayOperaciones" , JSON.stringify(operacion ));
    })
   })
  }
    

  const $filtroTipo = document.getElementById("filtro-tipo")
  let filtrarTipo = []
  $filtroTipo.addEventListener("change", (e) =>{
 const filtrarPorTipo = operacion.filter(elem => elem.Tipos === $filtroTipo.value)
 filtrarTipo.push(filtrarPorTipo)
  paint()
  localStorage.setItem("arrayOperaciones" , JSON.stringify(operacion));
  });



 const filtrarCategorias = document.getElementById("filtrar-categorias")
let filtro = []
 filtrarCategorias.addEventListener("change", (e) =>{
const filtrarCadaCategoria = operacion.filter(elem => elem.Categoria === filtrarCategorias.value)
filtro.push(filtrarCadaCategoria)
paint($operacionesFinales,filtrarCadaCategoria)
 })


let dondePintar = document.querySelector(".caja-contenedora-categorias")
const nuevaCategoria = document.querySelector("#nueva-categoria")
const contenedorFiltros = document.querySelectorAll(".contenedor-filtros")

 btnCategorias.addEventListener("click" , (e) =>{
  dondePintar.innerHTML =`
  <div class="mt-3 interior-categorias" style="background-color: rgb(255, 254, 255);">
  <div class="column">
 <span class="has-background-primary-dark has-text-primary-light">Servicios</span>
 </div>
  <div>
 <button class="is-size-7 delete-link">Editar</button>
 <button class="is-size-7 delete-link">Eliminar</button>
 </div>
</div>

<div class="mt-3 interior-categorias" style="background-color: rgb(255, 255, 255);">
 <div class="column">
  <span class="has-background-primary-dark has-text-primary-light	">Salidas</span>
  </div>
  <div>
    <button class="is-size-7 delete-link">Editar</button>
   <button class="is-size-7 delete-link">Eliminar</button>
  </div>
</div>

<div class="mt-3  interior-categorias " style="background-color: rgb(255, 255, 255); ">
 <div class="column">
 <span class="has-background-primary-dark has-text-primary-light	">Educacion</span>
 </div>
 <div>
 <button class="is-size-7 delete-link">Editar</button>
 <button class="is-size-7 delete-link">Eliminar</button>
 </div>
</div>           

<div class="mt-3   interior-categorias" style="background-color: rgb(255, 255, 255); ">
<div class="column">
<span class=" has-background-primary-dark has-text-primary-light	">Transporte</span>
</div>
<div>
<button class="is-size-7 delete-link">Editar</button>
<button class="is-size-7 delete-link">Eliminar</button>
</div>
</div>

<div class="mt-3   interior-categorias" style="background-color: rgb(255, 255, 255);  ">
<div class="column">
<span class="has-background-primary-dark has-text-primary-light	">Trabajo</span>
</div>
<div>
  <button class="is-size-7 delete-link" >Editar</button>
 <button class="is-size-7 delete-link" class= "eliminarCategoria">Eliminar</button>
</div>
</div>
`
})

   let catego = []
 btnAgregarCategoria.addEventListener("click", (e) =>{
 catego.push({
  Id:crypto.randomUUID(),
   Categoria: nuevaCategoria.value
  })
 dondePintar.innerHTML = ""
  catego.forEach(element => {
  dondePintar.innerHTML += ` 
 
  <div class="mt-3 interior-categorias" style="background-color: rgb(255, 254, 255);">
  <div class="column">
 <span class="has-background-primary-dark has-text-primary-light">Servicios</span>
 </div>
  <div>
 <button class="is-size-7 delete-link">Editar</button>
 <button class="is-size-7 delete-link">Eliminar</button>
 </div>
</div>

<div class="mt-3 interior-categorias" style="background-color: rgb(255, 255, 255);">
 <div class="column">
  <span class="has-background-primary-dark has-text-primary-light	">Salidas</span>
  </div>
  <div>
    <button class="is-size-7 delete-link">Editar</button>
   <button class="is-size-7 delete-link">Eliminar</button>
  </div>
</div>

<div class="mt-3  interior-categorias " style="background-color: rgb(255, 255, 255); ">
 <div class="column">
 <span class="has-background-primary-dark has-text-primary-light	">Educacion</span>
 </div>
 <div>
 <button class="is-size-7 delete-link">Editar</button>
 <button class="is-size-7 delete-link">Eliminar</button>
 </div>
</div>           

<div class="mt-3   interior-categorias" style="background-color: rgb(255, 255, 255); ">
<div class="column">
<span class=" has-background-primary-dark has-text-primary-light	">Transporte</span>
</div>
<div>
<button class="is-size-7 delete-link">Editar</button>
<button class="is-size-7 delete-link">Eliminar</button>
</div>
</div>

<div class="mt-3   interior-categorias" style="background-color: rgb(255, 255, 255);  ">
<div class="column">
<span class="has-background-primary-dark has-text-primary-light	">Trabajo</span>
</div>
<div>
  <button class="is-size-7 delete-link" >Editar</button>
 <button class="is-size-7 delete-link" class= "eliminarCategoria">Eliminar</button>
</div>
</div>
   
  <div class=" mt-3" style="background-color: rgb(255, 255, 255); display: flex;" >
    <div class="column">
    <span class="has-background-primary-dark has-text-primary-light	" > ${element.Categoria}</span>
     </div> 
     <div>
     <button class="is-size-7 delete-link">Editar</button>
     <button class="is-size-7 delete-link">Eliminar</button>
     </div>
  </div>

`
});
  })

paint()


















 paint()
}) //cierra el windows//