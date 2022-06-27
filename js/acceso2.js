
   

function acceso() {
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    mens1 = "Estimado(a) " + usuario + " su acceso fue permitido";
    routeClose ="AccesoCaap.html";
    window.close(routeClose);
    routeOpen="G:/DD2T - REY/HTML_CAAP/Biblias en Texto/RV60/indiceReinaValera1960.html";
    routeError ="G:/DD2T - REY/HTML_CAAP/Biblias en Texto/RV60/html/error1.html";

    if (usuario=="Reinaldo Mendoza" && clave==7208 ){alert(mens1); window.open(routeOpen); window.close(routeClose);}
   
   
     else if (usuario=="Moises Saravia" && clave==1112){alert(mens1); window.open(routeOpen, _self); window.close(routeClose);}
     else if (usuario=="Maria Inostroza" && clave==1520){alert(mens1); window.open(routeOpen); window.close(routeClose);}
     else if (usuario=="Visita"){alert(mens1); window.open(routeOpen); window.close(routeClose);}
     else {alert(usuario + " usted no tiene acceso o su clave es erronea!!"); window.open(routeError);}
  
   }

   function saliendo() {window.close("error1.html");}
   


   function intentarNuevamente() {window.open("G:/DD2T - REY/HTML_CAAP/Biblias en Texto/RV60/AccesoCaap.html", _self);}

   
   
   
   
   
   
   
   

    

    

