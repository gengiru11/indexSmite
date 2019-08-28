$(document).ready(function(){
    $('#btnEnviar').click(function(){
        var errores ='';
        if($('#idusuario').val()== ''){
            errores += '<p>Ingrese un Usuario</p>';
        } 
        if($('#idnombre').val()== ''){
            errores += '<p>Ingrese un Nombre</p>';
        } 
        if($('#idfechaNacimiento').val()== ''){
            errores += '<p>Ingrese una Fecha de Nacimiento</p>';
        } 
        if($('#idSexo').val()== ''){
            errores += '<p>Ingrese su sexo</p>';
        } 
        if($('#idmail').val()== ''){
            errores += '<p>Ingrese un EMAIL</p>';
        } 
        if($('#idRegion').val()== ''){
            errores += '<p>Ingrese su Region</p>';
        }
        alert(errores);       
    });
});