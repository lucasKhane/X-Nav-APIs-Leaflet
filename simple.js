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

    //function onMapClick(e) {
    //  alert("You clicked the map at " + e.latlng);
    //}
    //mymap.on('click', onMapClick);

    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }
    mymap.on('click', onMapClick);

    function onLocationFound(e){
      var radius = e.accuracy/2;
      L.marker(e.latlng).addTo(map)
        .bindPopup("you are within "+ radius + " meters from this point<br/>" +
        "Coordinadtes: " + e.latlng.toString())
        .openPopup();
      L.circle(e.latlng, radius).addTp(map);
    }
    mymap.on('locationFound', onLocationFound);
    function onLocationError(e){
      alert(e.message);
    }
    mymap.on('locationerror', onLocationError);
});
