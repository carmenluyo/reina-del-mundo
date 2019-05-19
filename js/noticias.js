var text = "";
var  i;
for(i = 0; i < 6; i++ ){
  text += "<li class='grid'>"
  text +=   "<div class='box'>" 
  text +=      "<div class='img-noti'> </div>" 
  text +=     "<h3> Noticia</h3> " 
  text +=     "<p> lorem ipsum sit amre dolor consenteum lorem ipsum sit amre dolor consenteum lorem ipsum sit amre dolor consenteum </p>" 
  text +=     "<div class='read-more'>" + "<a href='noticia.html'>Leer más</a>" + "</div>" 
  text +=   "</div>" 
  text +=  "</li>";
  a.innerHTML = text;
}
