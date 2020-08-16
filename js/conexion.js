class conexion{
	/*VAR $ruta ;
	var $usuario;
	var $contraseña;
	var $basedatos;*/
	
	  function conexion(){
		
		$ruta = "localHost";
		$usuario ="root";
		$contrasena ="";
		$basedatos ="c_usuarios";
		}
	
	  function conectarse(){
		  
		  $enlace = mysqli_connect($ruta, $usuario , $contrasena ,$basedatos);
		  
		  if ($enlace) {
				 
				 echo ('conexionexitosa') ;
			  
			  }else{

                    die('Error de conección (' . mysqli_connect_errno() + ') ' + mysqli_connect_error());

				
				  }
				}
			return($enlace);			
		  
		  }	  
	}


<body>

	


</body>
</html>


