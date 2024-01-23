"use strict";


const D=document
//Aplicar los terminos de orientacion de objecto...(polimorfismo,herencia,emcasulamiento,)
const SeleccionDom={
  Enviarlogin:D.querySelector('#EnviarLogin'),
  Agregar:D.querySelector('#Enviar'),
  MallaYSector:D.querySelector('#MallaYSector'),
  cerrar:D.querySelector('#Cerrar'),
  buscar:D.querySelector('#Buscar'),
  finalizar:D.querySelector('#Finalizar'),
   nombre:D.querySelector('#nombre'),
   login:D.querySelector('.login'),
   malla:D.querySelector('#malla'),
    sector:D.querySelector('#sector'),
    Polin : D.querySelector('#Polin'),
    Nivel : D.querySelector('#Nivel'),
    Surco:D.querySelector('#Surco'),
    Lado:D.querySelector('#Lado'),
    Plaga:D.querySelector('#Plaga'),
    Benefico:D.querySelector('#Benefico'),
    Nota:D.querySelector('#Nota')



}
const {Enviarlogin,Agregar,MallaYSector,cerrar,buscar,finalizar,nombre,login,malla,sector,Polin,Nivel,Surco,Lado,Plaga,Benefico,Nota}=SeleccionDom
console.log(Polin.value);



class Dactos {
   constructor(Valor,Polin,Nivel,Surco,Lado,Plaga,Benefico,malla,sector){
    this.Polin=Polin;
    this.Nivel=Nivel;
    this.Surco=Surco;
    this.Lado=Lado;
    this.Plaga=Plaga;
    this.Benefico=Benefico;
    this.malla=malla;
    this.sector=sector;


   }
   CrearBitacora(ValorNota,ValorMalla,ValorSector){
 const tabla=document.createElement('table')   
Nota.appendChild(tabla)
tabla.classList.add('table')


  
     
  const tbody=D.createElement('tbody')     
tabla.appendChild(tbody)
        const trTitulo=D.createElement('tr')
 tbody.appendChild(trTitulo)
     const tdLado=D.createElement('td')
     trTitulo.appendChild(tdLado)
     const tdSurco=D.createElement('td')
     trTitulo.appendChild(tdSurco)
     const tdPolin=D.createElement('td')
     trTitulo.appendChild(tdPolin)
     const tdNivel=D.createElement('td')
     trTitulo.appendChild(tdNivel)
     const tdPlaga=D.createElement('td')
     trTitulo.appendChild(tdPlaga)
     const tdFecha=D.createElement('td')
     trTitulo.appendChild(tdFecha)
     const tdStatus=D.createElement('td')
     trTitulo.appendChild(tdStatus)
     const tdDelete=D.createElement('td')
     trTitulo.appendChild(tdDelete)
     const Benefico=D.createElement('td')
     const Id=D.createElement('td')
     trTitulo.appendChild(Id)
     trTitulo.appendChild(Benefico)
     let M= JSON.parse(localStorage.getItem('ValorDelaVentaEmergente'))
      let S= JSON.parse(localStorage.getItem('ValorDelaVentaEmergente'))
       const MallaYsector=document.createElement('thead')
       tabla.appendChild(MallaYsector)
       const TituloMalla=document.createElement('h3')
       const TituloSector=document.createElement('h3')
       MallaYsector.appendChild(TituloMalla)
       MallaYsector.appendChild(TituloSector)
       TituloMalla.innerText='Malla:'+M[0]
       TituloSector.innerText='Sector:'+S[1]
     tdLado.innerText='Lado'
     tdSurco.innerText='Surco'
     tdPolin.innerText='Polin'
     tdNivel.innerText='Nivel'
     tdPlaga.innerText='Plaga'
     tdFecha.innerText='Fecha'
     tdStatus.innerText='Status'
     Benefico.innerText='Benefico'
     Id.innerText='Id'
     tdDelete.innerText='Eliminar'
     trTitulo.classList.add('status')
   
     




    

     const date=new Date()
     const opciones={weekday:'long',year:'numeric',month:'short',day:'numeric'};
     const fechaActual=date.toLocaleDateString('de-DE',opciones);
     const [mes,dia,ano]=[date.getMonth(),date.getDay()-1,date.getFullYear()]
      const tr=document.createElement('tr')
     const td0=document.createElement('td')
     const td1=document.createElement('td')
     const td2=document.createElement('td')
     const td3=document.createElement('td')
     const td4=document.createElement('td')
     const td5=document.createElement('td')
     const td6=document.createElement('td')
     const td7=document.createElement('td')
     const Delete=document.createElement('button')
     const td9=document.createElement('td')
     const td8=document.createElement('td')
     
     
     const p=document.createElement('p')
     tbody.appendChild(tr)
    tr.appendChild(td0)
     tr.appendChild(td1)
     tr.appendChild(td2)
     tr.appendChild(td3)
     tr.appendChild(td4)
     tr.appendChild(td5)
     tr.appendChild(td6)
     tr.appendChild(td7)
     td6.appendChild(p)
     td7.appendChild(Delete)
   /*   Semaforo(td0,td1,td2,td3,td4,td5,td6) */
      tr.appendChild(td9)
     tr.appendChild(td8)
    
Delete.classList.add('btn')
Delete.classList.add('btn-danger')
Delete.style='color:white'
p.innerText='No liberado'



if(localStorage.getItem('BitacoraActualizado')){
  const local_Registro=JSON.parse(localStorage.getItem('BitacoraActualizado')) 
 console.log(local_Registro);
 console.log('esta los datos');
//corregir este apartado -------------------------------------------------------------------------------------------
 let SegundaFase=local_Registro[0]
/* ['cero']=local_Registro 
console.log('cero'); */
console.log(SegundaFase); 
/* ['Primer','Segundo','Tercer','Cuarto','Quinto']=SegundaFase */

console.log('Esta es la primera fase'+ SegundaFase);
   
td0.innerText=SegundaFase[0],
td1.innerText=SegundaFase[1],
td2.innerText=SegundaFase[2],
td3.innerText=SegundaFase[3],
td4.innerText=SegundaFase[4],
td5.innerText=fechaActual
/* Delete.innerText='Eliminar' */
/* td9.innerText=id */
/* td8.innerText='Sexto' */


//Corregir este apartado-----------------------------------------------------------------------------------

}/* else{
 Bitacora.push(Registro);
  const local_Bitacora= localStorage.setItem('Bitacora',JSON.stringify(Bitacora))
 const local_Registro=JSON.parse(localStorage.getItem('Bitacora')) 
 console.log('no esta los datos');


   console.log(local_Registro);
} */ 
//















let estado=0;
 let classStatus=td6.getAttribute('class')
p.addEventListener('click',function () {
 const confirmacion=confirm('Estas seguro que esta liberado')
 if(confirmacion===true){
   estado++ 
td6.classList.add('status')
  p.innerText=estado
 }else if(confirmacion===false){
   estado=0 
td6.classList.remove('status')
  p.innerText=estado
 }




  


     
 

 
})




Delete.addEventListener('click',function Eliminar(e) {
const trE=document.querySelector('tr')






 tr.classList.add('Eliminar')
Delete.classList.add('Eliminar')

const Elimina=Delete.getAttribute("class")
let confimacion=prompt('Esta seguro que quieres eliminar')
console.log(confimacion);
console.log(Elimina);
const tdE=document.querySelector('.Eliminar')
if(confimacion=='si' ){
trE.parentNode.removeChild(tdE)

}else  {
 tr.classList.remove('Eliminar')
 Delete.classList.remove('Eliminar')
}






     
   
  
 

   
 
  


})


  
 
     
  
   }
   //Analizar este codigo de venta emergente
   
   GuardarLocal(nombre=undefined,valor1=undefined,valor2=undefined,valor3=undefined,valor4=undefined){
  let F=undefined
  let Guardar=[]
  let ValorLocal=[valor1,valor2,valor3,valor4]
  let actualizacion=[]
console.log(ValorLocal);
console.log(ValorLocal);
  if (valor1!==F  || valor1===[ ] ||valor1=== { } || valor2!==F ||valor2!==[] || valor2!=={} || valor3!==F ||  valor3!==[] || valor3!=={} || valor4!==F || valor4!==[] || valor4!=={}){
  //Checar por que al guardar se derefine los valores 

 
   ValorLocal.forEach(Bitacora => {
    let local= Guardar.push(Bitacora)
  
   });
  
     

      const Local1=localStorage.setItem(nombre,JSON.stringify(Guardar))
      const GetLocal=JSON.parse(localStorage.getItem(nombre) )
      console.log('este es'+GetLocal); 
  

  
  console.log(Guardar);


    
   
  }else{
alert('Hay un campo vacio,favor de ingresar los dactos que hace falta')
  }
  

      
   
     
   
        



   }
  Cerrar(){
    login.classList.add('validarInput')
    alert('Se actualizo con extito!')
  }
   Evaludor(lado,surco,nivel,plaga,benefico,Polin){
    
  
    
    
     if ( this.Valor===""||lado===''||plaga===''||benefico===''||Polin===''||surco===''||nivel==='') {
       alert('Recuerda no dejar vacio los campo')
       if (nivel ==='2' || nivel==='3') {
        Lado.style='background:red'
         surco.style='background:red'
         Polin.style='background:red'
         nivel.style='background:red'
         plaga.style='background:red'
        
      }
       
     }
   
   }
  
   RecibirNumeroMalla(){
   // const btnEnviar=D.querySelector('#Enviar')
 login.classList.remove('validarInput')
   alert('Estamos mejorando esta area')
   
     
  }
  Enviar(){   
    
 let Malla=malla.value
 let Sector=sector.value
 this.GuardarLocal('ValorDelaVentaEmergente',Malla,Sector)
 const MallaUno=new Dactos (malla.value)
 const SectorUno=new Dactos(sector.value)
 const EvaluaUno=MallaUno.Evaludor()//Esta bien
 const Evaluados=SectorUno.Evaludor()//Esta bien
 


  

  }
   EditarTitulo(){ 
login.classList.remove('validarInput')
alert('Se actualizo con extito!')
  }
}

//Aqui termina la clase padre


const Editar= new Dactos();

nombre.addEventListener('click',Recibir)
function Recibir() {
  Editar.RecibirNumeroMalla()
}

/* let task = JSON.parse(localStorage.getItem('Bitacora'));
 console.log(task);

const Nota=D.querySelector('table')
Agregar.addEventListener('click',Save)
let tasks=D.querySelector('#tasks')

const td=D.querySelector('td') 
let id=-1;

 function Finaliza() {
 
 contador=0

 id++
 alert('se ha finalizado correctamente ')
 login.classList.remove('validarInput')
alert('Se actualizo con extito!')


} */ 


cerrar.addEventListener('click',VentanaEmergente)
//esta function ya esta bien
function VentanaEmergente(){
 Editar.Cerrar()
}
let Bitacora = []; 


 Enviarlogin.addEventListener('click',Enviar)

  
 function Enviar(){
  
  Editar.Enviar()
  Editar.EditarTitulo()
  Editar.Cerrar()
  let ValorDelaVentaEmergente=JSON.parse(localStorage.getItem('ValorDelaVentaEmergente'))
 let  [malla,sector]=ValorDelaVentaEmergente
 nombre.innerText='Malla'+' '+malla+' '+'Sector'+'  '+sector
 

 }
// Corregir este error 

//let Guardar=new Dactos()
Agregar.addEventListener('click',GUardarLocalDeBitacora)
 function GUardarLocalDeBitacora(){

  
  const Guardar=new Dactos (Polin,Surco,Nivel,Lado,Benefico )
console.log(Guardar);
  const ValorBitacora=[
    Polin.value,
   Surco.value,
   Nivel.value,
   Lado.value,
   Benefico.value,
  Plaga.value,
  ]
   


 let MayaYSector=JSON.parse(localStorage.getItem('ValorDelaVentaEmergente')) 
 let Maya=MayaYSector[0]
 let Sector=MayaYSector[1]
  /* ['Maya','Sector']=MayaYSector */
  
Guardar.GuardarLocal('BitacoraActualizado',ValorBitacora)
let LocalNota=JSON.parse(localStorage.getItem('BitacoraActualizado'))
// ValorDeNota,Maya,Sector
 Guardar.CrearBitacora(LocalNota,Maya,Sector) 
console.log(ValorBitacora[0]);
 }

/* function Semaforo(Lado,Surco,Polin,Nivel,plaga,Fecha){
  let nivel = D.getElementById('Nivel').value;
  let Plaga=D.querySelector('#Plaga').value;
 console.log(typeof nivel);
 if (nivel ==='2' || nivel==='3') {
   Lado.style='background:red'
    Surco.style='background:red'
    Polin.style='background:red'
    Nivel.style='background:red'
    plaga.style='background:red'
    Fecha.style='background:red'
 }
  
   
 
} */

/* finalizar.addEventListener('click',Finaliza) 
function Save(event) {
  id++
  contador++
Validacion()

    




    }
   
const contenedor=document.querySelector('#tasks')
const Subcontenedor=document.createElement('div')

contenedor.appendChild(Subcontenedor)
 const tabla=document.createElement('table') 

 
let contador=0;
 const tbody=document.createElement('tbody') */
 
   /* function  Mostrar() {

 Subcontenedor.appendChild(tabla)
 tabla.classList.add('table')


      if (contador===1) {
      
        
tabla.appendChild(tbody)
         const trTitulo=document.createElement('tr')
  tbody.appendChild(trTitulo)
      const tdLado=document.createElement('td')
      trTitulo.appendChild(tdLado)
      const tdSurco=document.createElement('td')
      trTitulo.appendChild(tdSurco)
      const tdPolin=document.createElement('td')
      trTitulo.appendChild(tdPolin)
      const tdNivel=document.createElement('td')
      trTitulo.appendChild(tdNivel)
      const tdPlaga=document.createElement('td')
      trTitulo.appendChild(tdPlaga)
      const tdFecha=document.createElement('td')
      trTitulo.appendChild(tdFecha)
      const tdStatus=document.createElement('td')
      trTitulo.appendChild(tdStatus)
      const tdDelete=document.createElement('td')
      trTitulo.appendChild(tdDelete)
      const Benefico=document.createElement('td')
      const Id=document.createElement('td')
      trTitulo.appendChild(Id)
      trTitulo.appendChild(Benefico)
      let M= JSON.parse(localStorage.getItem('malla'))
       let S= JSON.parse(localStorage.getItem('sector'))
        const MallaYsector=document.createElement('thead')
        tabla.appendChild(MallaYsector)
        const TituloMalla=document.createElement('h3')
        const TituloSector=document.createElement('h3')
        MallaYsector.appendChild(TituloMalla)
        MallaYsector.appendChild(TituloSector)
        TituloMalla.innerText='Malla:'+M
        TituloSector.innerText='Sector:'+S
      tdLado.innerText='Lado'
      tdSurco.innerText='Surco'
      tdPolin.innerText='Polin'
      tdNivel.innerText='Nivel'
      tdPlaga.innerText='Plaga'
      tdFecha.innerText='Fecha'
      tdStatus.innerText='Status'
      Benefico.innerText='Benefico'
      Id.innerText='Id'
      tdDelete.innerText='Eliminar'
      trTitulo.classList.add('status')
    
      }




     

      const date=new Date()
      const opciones={weekday:'long',year:'numeric',month:'short',day:'numeric'};
      const fechaActual=date.toLocaleDateString('de-DE',opciones);
      const [mes,dia,ano]=[date.getMonth(),date.getDay()-1,date.getFullYear()]
       const tr=document.createElement('tr')
      const td0=document.createElement('td')
      const td1=document.createElement('td')
      const td2=document.createElement('td')
      const td3=document.createElement('td')
      const td4=document.createElement('td')
      const td5=document.createElement('td')
      const td6=document.createElement('td')
      const td7=document.createElement('td')
      const Delete=document.createElement('button')
      const td9=document.createElement('td')
      const td8=document.createElement('td')
      
      
      const p=document.createElement('p')
      tbody.appendChild(tr)
     tr.appendChild(td0)
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)
      tr.appendChild(td5)
      tr.appendChild(td6)
      tr.appendChild(td7)
      td6.appendChild(p)
      td7.appendChild(Delete)
      Semaforo(td0,td1,td2,td3,td4,td5,td6)
       tr.appendChild(td9)
      tr.appendChild(td8)
     
Delete.classList.add('btn')
Delete.classList.add('btn-danger')
Delete.style='color:white'
p.innerText='No liberado'

Validacion(td0,td1,td2,td3,td4,td5,td6,td7,td8,td9)  

 if(localStorage.getItem('Bitacora')){
   const local_Registro=JSON.parse(localStorage.getItem('Bitacora')) 
  local_Registro.push(Registro);
  console.log(local_Registro);
  const local_Bitacora= localStorage.setItem('Bitacora',JSON.stringify(local_Registro))
  console.log('esta los datos');

  for (let index = 0; index < local_Registro.length; index++) {
console.log('este es el id'+index);
console.log(local_Registro[index].Lado);     
td0.innerText=local_Registro[index].Lado
td1.innerText=local_Registro[index].Surco
td2.innerText=local_Registro[index].Polin
td3.innerText=local_Registro[index].Nivel
td4.innerText=local_Registro[index].Plaga
td5.innerText=fechaActual
Delete.innerText='Eliminar'
td9.innerText=id
td8.innerText=local_Registro[index].Benefico
}



}else{
  Bitacora.push(Registro);
   const local_Bitacora= localStorage.setItem('Bitacora',JSON.stringify(Bitacora))
  const local_Registro=JSON.parse(localStorage.getItem('Bitacora')) 
  console.log('no esta los datos');

 
    console.log(local_Registro);
} 
//















let estado=0;
  let classStatus=td6.getAttribute('class')
p.addEventListener('click',function () {
  const confirmacion=confirm('Estas seguro que esta liberado')
  if(confirmacion===true){
    estado++ 
 td6.classList.add('status')
   p.innerText=estado
  }else if(confirmacion===false){
    estado=0 
 td6.classList.remove('status')
   p.innerText=estado
  }
 



   


      
  

  
})
 



Delete.addEventListener('click',function Eliminar(e) {
const trE=document.querySelector('tr')






  tr.classList.add('Eliminar')
 Delete.classList.add('Eliminar')

 const Elimina=Delete.getAttribute("class")
 let confimacion=prompt('Esta seguro que quieres eliminar')
console.log(confimacion);
console.log(Elimina);
const tdE=document.querySelector('.Eliminar')
 if(confimacion=='si' ){
trE.parentNode.removeChild(tdE)

 }else  {
  tr.classList.remove('Eliminar')
  Delete.classList.remove('Eliminar')
 }





 
      
    
   
  

    
  
   
 

})


   
  
      
   
    }
     */
 
     /*   const Advertencia=document.querySelector('#Advertencia')
        
       Advertencia.style='visibility: hidden; '
     function Validacion(td0,td1,td2,td3,td4,td5,td6,td7,td8,td9){
      console.log(Surco.value);
      if(Surco.value===""){
     
      Advertencia.style='visibility:visible'
        let Surco=document.querySelector('#Surco')
       Surco.classList.add('validacio')
       Advertencia 




       
      }else {

        let surco=document.querySelector('#Surco')
        surco.classList.remove('validacio')
       Mostrar()
        console.log('Creado con exito');
Advertencia.style='display:none'
        console.log(Bitacora);
  let Polin = document.getElementById('Polin').value;
  let Nivel = document.getElementById('Nivel').value;
  let Surco=document.querySelector('#Surco').value;
  let Lado=document.querySelector('#Lado').value;
  let Plaga=document.querySelector('#Plaga').value;
  let Benefico=document.querySelector('#Benefico').value
  let sectorlocal=JSON.parse(localStorage.getItem('malla')) 
  let mallalocal=JSON.parse(localStorage.getItem('sector')) 
  
  
  let Registro = {

    Polin,
    Nivel,
    Surco,
    Lado,
    Plaga,
    id,
    Benefico,
    sectorlocal,
    mallalocal,
  
    




  };

if(localStorage.getItem('Bitacora')){
   const local_Registro=JSON.parse(localStorage.getItem('Bitacora')) 
  local_Registro.push(Registro);
  console.log(local_Registro);
  const local_Bitacora= localStorage.setItem('Bitacora',JSON.stringify(local_Registro))
  console.log('esta los datos');
console.log(localStorage.getItem('Bitacora'));
  for (let index = 0; index < local_Registro.length; index++) {
console.log('este es el id'+index);
console.log(local_Registro[index].Lado);     
td0.innerText=local_Registro[index].Lado
td1.innerText=local_Registro[index].Surco
td2.innerText=local_Registro[index].Polin
td3.innerText=local_Registro[index].Nivel
td4.innerText=local_Registro[index].Plaga
td5.innerText=fechaActual
td6.innerText='Eliminar'
td7.innerText=id
td8.innerText=local_Registro[index].Benefico
}



}else{
      Bitacora.push(Registro);
   const local_Bitacora= localStorage.setItem('Bitacora',JSON.stringify(Bitacora))
  const local_Registro=JSON.parse(localStorage.getItem('Bitacora')) 
  console.log('no esta los datos');

 
    console.log(local_Registro);
}
 








  

      }

    } */