
$ = (selector) => document.querySelector(selector);
 const btnBalance = document.getElementById("btn-balance");
 const btnCategorias = document.getElementById("btn-categorias");
 const btnReportes = document.getElementById("btn-reportes");
 const seccionBalance = document.getElementById("balance");
const seccionCategorias = document.getElementById("categorias");
 const seccionReportes = document.getElementById("reportes");
 const btnOperacion = document.getElementById("con-operaciones")
 const seccionOperacion = document.getElementById("con-operaciones-seccion")
 const seccionEditarOperacion = document.getElementById("editar-operacion");
 const ocultarFiltros = document.getElementById("ocultar-filtros")
 const  cajaFiltros = document.getElementById("caja-filtros")
 const $inputDescripcion = document.getElementById("input-descripcion")
 const inputMonto = document.getElementById("input-monto");
 const inputDate = document.getElementById("input-date")
 const inputDateUno = document.querySelector("#date-filter")
 const btnCancelar = document.getElementById("btn-cancelar")
 const form = document.querySelector("form")
let $operacionesFinales = document.querySelector("#operaciones-finales")
 const btnAgregar = document.querySelector("#btn-agregar")
 const operacionImagen = document.querySelector(".operaciones-imagen")
 const todo = document.querySelector(".todo")
 const btnAgregarCategoria = document.getElementById("agregar-categoria");
 const btnEliminarCategoria = document.querySelectorAll(".eliminarCategoria")
 const ordenarPor = document.querySelectorAll("#filtros")
 const tipo = document.getElementById("tipo");
 const pintarSuma = document.getElementById("pintar-suma");
 const pintarResta = document.getElementById("pintar-resta");
 const pintarTotal = document.getElementById("pintar-total");
const infoEditar = document.getElementById("info-editar")
 const categoria = document.getElementById("categoria-operacion")
const dondePintar = document.querySelector(".caja-contenedora-categorias")
 const nuevaCategoria = document.querySelector("#nueva-categoria")
 const contenedorFiltros = document.querySelectorAll(".contenedor-filtros")
const filtroTipo = document.querySelectorAll("filtro-tipo")
const $btnEditar = document.querySelectorAll(".btn-editar");


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

 btnCancelar.addEventListener("click", (e) =>{
seccionBalance.classList.remove("oculto")
 })


 window.addEventListener("load", () =>{
  let operacion = []
  let catego = []
  let tiposCate = []

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






 let sumarTodo = []
let suma = () =>{ 
  if(tipo.value === "Ganancia"){
      sumarTodo.push(inputMonto.value)
  }
  tipo.value === "Ganancia" ? pintarSuma.innerHTML = `<p> ${+ inputMonto.value}</p>` : `<p> -$0 </p>`
   paint()
}

let restarTodo = []
let resta = () =>{ 
   if(tipo.value === "Gasto"){
 restarTodo.push(inputMonto.value)
  }
 tipo.value === "Gasto" ? pintarResta.innerHTML = `<p> ${-inputMonto.value}</p>` : `<p> -$0 </p>`;
  paint()
}



  btnAgregar.addEventListener("click", (e) =>{ 
    seccionOperacion.classList.add("oculto")
    seccionBalance.classList.remove("oculto")
     e.preventDefault()  
     suma()
  resta()
   $operacionesFinales.classList.remove("oculto")
   todo.classList.remove("oculto")
   operacionImagen.classList.add("oculto")
   operacion.push({
    Id: crypto.randomUUID(),
    Descripcion: $inputDescripcion.value,
    Monto: inputMonto.value,
    Tipos: tipo.value, 
     Categoria: categoria.value,
     Fecha: inputDate.value,   
    }); 
   paint()
  }) 
   
 

btnCategorias.addEventListener("click", (e) =>{
  dondePintar.innerHTML = 
  `<div class="mt-3 interior-categorias" style="background-color: rgb(255, 254, 255);">
  <div class="column">
 <span class="has-background-primary-dark has-text-primary-light">Todos</span>
 </div>
  <div>
 <button class="is-size-7 delete-link">Editar</button>
 <button class=" eliminar-categoria   is-size-7 delete-link "  id = ${catego.Id}>Eliminar</button>
 </div>
</div>

<div class="mt-3 interior-categorias" style="background-color: rgb(255, 255, 255);">
 <div class="column">
  <span class="has-background-primary-dark has-text-primary-light	">Comida</span>
  </div>
  <div>
    <button class="is-size-7 delete-link">Editar</button>
   <button class=" eliminar-categoria   is-size-7 delete-link" id = ${catego.Id}>Eliminar</button>
  </div>
</div>

<div class="mt-3  interior-categorias " style="background-color: rgb(255, 255, 255); ">
 <div class="column">
 <span class="has-background-primary-dark has-text-primary-light	">Educacion</span>
 </div>
 <div>
 <button class="is-size-7 delete-link">Editar</button>
 <button class=" eliminar-categoria   is-size-7 delete-link"id = ${catego.Id} >Eliminar</button>
 </div>
</div>

<div class="mt-3   interior-categorias" style="background-color: rgb(255, 255, 255); ">
<div class="column">
<span class=" has-background-primary-dark has-text-primary-light	">Transporte</span>
</div>
<div>
<button class="is-size-7 delete-link">Editar</button>
<button class="eliminar-categoria  is-size-7 delete-link" id = ${catego.Id} >Eliminar</button>
</div>
</div>

<div class="mt-3   interior-categorias" style="background-color: rgb(255, 255, 255);  ">
<div class="column">
<span class="has-background-primary-dark has-text-primary-light	">Trabajo</span>
</div>
<div>
  <button class="is-size-7 delete-link" >Editar</button>
 <button class="eliminar-categoria is-size-7 delete-link "  id= ${catego.Id}>Eliminar</button>
</div>
</div>
`
  
})


  btnAgregarCategoria.addEventListener("click", (e) =>{
    catego.push({
      Id: crypto.randomUUID(),
       Categoria: nuevaCategoria.value,
      });
      localStorage.setItem("arrayCategorias", JSON.stringify(catego ));
    
   catego.forEach(catego => {  
   dondePintar.innerHTML += `
   <div class=" mt-3" style="background-color: rgb(255, 255, 255); display: flex;" >
     <div class="column">
     <span class="has-background-primary-dark has-text-primary-light	" >${catego.Categoria}</span>
      </div>
      <div>
      <button class="is-size-7  delete-link"  >Editar</button>
       <button class="is-size-7 delete-link  eliminar-categoria" id = ${catego.Id}>Eliminar</button>
      </div>
   </div>
 `
 }); 



    localStorage.setItem("arrayCategorias" , JSON.stringify(catego));

 tiposCate.push({
   Id:crypto.randomUUID(),
    Tipo: nuevaCategoria.value,
   });
 filtrarCategorias.innerHTML +=  `<option value= "${nuevaCategoria.value}"> ${nuevaCategoria.value}</option>`
 categoria.innerHTML += `<option value= "${nuevaCategoria.value}"> ${nuevaCategoria.value}</option>`
  paint()
   })

  const paint = () =>{
   $operacionesFinales.innerHTML = "";
   operacion.forEach(element => {
    $operacionesFinales.innerHTML += `
    <div class="caja-nueva-operacion">
    <p class="col-10">${element.Descripcion} ${element.Categoria} ${element.Fecha}  ${element.Tipos == "Gasto" ? "-" : "+"}${element.Monto} </p>
    <div class ="col-2">
    <button class="btn-editar" id = ${element.Id}> Editar</button> <button class="btn-delete" id=${element.Id}> Eliminar </button>
    </div>
    </div>
    `;

   });
   eventoBtnDelete()
   deleteCategoria()
   editarBtn()

  };


  localStorage.setItem("arrayOperaciones" , JSON.stringify(operacion ));
     localStorage.setItem("arrayCategorias" , JSON.stringify(catego));
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

const editarBtn = () =>{
  const $btnEditar = document.querySelectorAll(".btn-editar");
 $btnEditar.forEach((btnEdit) =>{
  btnEdit.addEventListener("click", (e) =>{
  seccionEditarOperacion.classList.toggle("oculto");
  seccionOperacion.classList.add("oculto");
  seccionBalance.classList.add("oculto");
  seccionReportes.classList.add("oculto");
  seccionCategorias.classList.add("oculto");
  seccionBalance.classList.add("oculto");
infoEditar.innerHTML =`
<div class ="info-editar">
<form>
<label for="input-descripcion">Descripcion</label>
<textarea class="input is-link" type ="text" id="input-descripcion name="textarea">${$inputDescripcion.value}</textarea>
             
               <label for="input-monto"> Monto</label>        
               <input class="input is-link" type="number" id="input-monto"> 
              <label >Tipo</label>
              <div class="select is-link contenedor-filtros">
               <select class="contenedor-filtros" id="tipo">
                 <option value="Gasto" >Gasto</option>
                 <option value="Ganancia">Ganancia</option>
                </select>
              </div>
              <div>
               <h6>Categoria</h6>
               <div class="select is-info col-12">
                 <select class="col-12" id="categoria-operacion">             
                   <option value="Comidas">Comidas</option>
                   <option value="Servicios">Servicios</option>
                   <option value="Salidas">Salidas</option>
                   <option value="Educacion">Educacion</option>
                   <option value="Transporte">Transporte</option>
                   <option value="Trabajo">Trabajo</option>
                 </select>
                </div>
                <div class="col-sm-12">
                 <h6>Fecha</h6>                
                   <input id="input-date" class="input is-link" type="date" placeholder="Link input">           
                 </div>
                <div class="buttons">
                 <button class="button" id="btn-cancelar">Cancelar</button>
                  <button class="button is-success" id="btn-agregar" >Editar</button>
                 </div>
               </div>
               </div>
               <form>
</div>
`
    localStorage.setItem("arrayOperaciones" , JSON.stringify(operacion ));
      paint()
  })
  })
 }



const deleteCategoria = () =>{
  const btnDeleteCategoria = document.querySelectorAll(".eliminar-categoria");
 btnDeleteCategoria.forEach((btnCategoria) =>{
 btnCategoria.addEventListener("click", (e) =>{
 let btnIdCategoria = e.target.id;
  catego = catego.filter(cadaCatego=> cadaCatego.Id !== btnIdCategoria);
localStorage.setItem("arrayCategorias" , JSON.stringify(catego));
  })
 })
}


 
  const $filtroTipo = document.getElementById("filtro-tipo")
  let filtrarTipo = []
  $filtroTipo.addEventListener("change", (e) =>{
 const filtrarPorTipo = operacion.filter(elem => elem.Tipos === $filtroTipo.value)
 filtrarTipo.push(filtrarPorTipo)
  paint($operacionesFinales, filtrarPorTipo)
  console.log(filtrarPorTipo)
  });
 


 let filtrarCategorias = document.getElementById("filtrar-categorias")
 let filtroCategorias = []
 filtrarCategorias.addEventListener("change", (e) =>{
let  filtrarCadaCategoria = operacion.filter(elem => elem.Categoria === filtrarCategorias.value)
filtroCategorias.push(filtrarCadaCategoria)
 paint($operacionesFinales,filtrarCadaCategoria)
console.log(filtrarCadaCategoria)
 })




 paint()
}) 

