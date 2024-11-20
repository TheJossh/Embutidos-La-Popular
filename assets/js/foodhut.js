

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();


// Script para inicializar el mapa 
 
function initMap() {
    // Coordenadas de Juticalpa, Olancho (Ejemplo: ajusta si tienes coordenadas más precisas)
    const juticalpaOlancho = { lat: 14.6668, lng: -86.2203 };
    
    // Inicializar mapa centrado en Juticalpa
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14, // Nivel de acercamiento
      center: juticalpaOlancho, // Ubicación inicial
    });

    // Agregar marcador
    const marker = new google.maps.Marker({
      position: juticalpaOlancho,
      map: map,
      title: "Embutidos La Popular - Juticalpa, Olancho",
    });
  }