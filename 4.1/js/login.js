// FUNCION PARA VALIDAR EL USUARIO, SI ES O NO CORRECTO



function validar(){

    var pass = documetn.getElementByid("usuario").value;
    var contraseña = documetn.getElementByid("contraseña").value;
  
   
  
  if (pass == "RaulB" && contraseña == "1234") {
  
    alert("BIENVENIDO")
    
  } else {
  
    alert("Usuario y/o contraseña no valido")
  }
  }