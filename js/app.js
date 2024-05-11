const formulario = document.getElementById('formulario');
const registro  = document.getElementById('registro');
const exito  = document.getElementById('exito');
 
formulario.addEventListener('submit',async(e)=>{
    e.preventDefault();


    // escribir
// try {
//     const respuesta = await fetch('https://sheet.best/api/sheets/1066240c-e4fd-48cf-984a-1f1f16bb7781',{
//         method:'POST',
//         mode : 'cors',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body:JSON.stringify({
//             'Nombre':formulario.nombre.value,
//             'Correo': formulario.correo.value,
//             'Telefono': formulario.telefono.value
//         })
//     });
    
//     const contenido = await respuesta.json();
//     console.log(contenido);
// } catch (error) {
//     console.log(error);
// }


// leer filas
    
    // try {
    //     const respuesta = await fetch('https://sheet.best/api/sheets/1066240c-e4fd-48cf-984a-1f1f16bb7781');
        
    //     const contenido = await respuesta.json();
    //     console.log(contenido);
    // } catch (error) {
    //     console.log(error);
    // }


    // // ELIMINAR FILAS
    // try {
    //         const respuesta = await fetch('https://sheet.best/api/sheets/1066240c-e4fd-48cf-984a-1f1f16bb7781/0',{
    //             method:'DELETE',
    //             mode : 'cors',
               
    //         });
            
    //         const contenido = await respuesta.json();
    //         console.log(contenido);
    // } catch (error) {
    //         console.log(error);
    // }
    
   // ACTUALIZAR FILAS
 try {
    const respuesta = await fetch('https://sheet.best/api/sheets/1066240c-e4fd-48cf-984a-1f1f16bb7781/3',{
        method:'PATCH',
        mode : 'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            'Nombre':formulario.nombre.value,
            'Correo': formulario.correo.value,
            'Telefono': formulario.telefono.value
        })
    });
    
    const contenido = await respuesta.json();
    console.log(contenido);
} catch (error) {
    console.log(error);
}






// registro.classList.remove('activo');
// exito.classList.add('activo');
    // alert('hola');
});