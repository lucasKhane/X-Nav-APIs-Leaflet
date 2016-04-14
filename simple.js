$(document).ready(function(){
    var mymap = L.map('mapid').setView([40.2838, -3.8215], 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
    }).addTo(mymap);

    L.marker([40.2838, -3.8215]).addTo(mymap)
    .bindPopup('<a href=http://www.etsit.urjc.es">ETSIT</a>(<a href="http://www.urjc.es">URJC</a>)')
    .openPopup();
});
