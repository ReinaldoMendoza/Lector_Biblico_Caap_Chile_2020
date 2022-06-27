function acceso() {
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    mens1 = "Estimado(a) " + usuario + " su acceso fue permitido";
    routeClose ="index.html";
    window.close(routeClose);
    routeOpen="https://reinaldomendoza.github.io/Lector_Biblico_Caap_Chile_2020/html/indiceReinaValera1960.html";
    
    
                 
    routeError ="https://reinaldomendoza.github.io/Lector_Biblico_Caap_Chile_2020/html/error1.html";

    if (usuario=="Reinaldo Mendoza" && clave==7208 ){alert(mens1); window.open(routeOpen); window.close(routeClose);}
   
   
     else if (usuario=="Moises Saravia" && clave==1112){alert(mens1); window.open(routeOpen, _self); window.close(routeClose);}
     else if (usuario=="Maria Inostroza" && clave==1520){alert(mens1); window.open(routeOpen); window.close(routeClose);}
     else if (usuario=="Visita"){alert(mens1); window.open(routeOpen); window.close(routeClose);}
     else {alert(usuario + " usted no tiene acceso o su clave es erronea!!"); window.open(routeError);}
  
   }

   function saliendo() {window.close("error1.html");}
   


   function intentarNuevamente() {window.open("https://reinaldomendoza.github.io/Lector_Biblico_Caap_Chile_2020/index.html", _self);}

   
   
   
   
   
   
   
   

    

    

