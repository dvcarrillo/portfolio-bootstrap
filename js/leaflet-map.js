var mymap = L.map('mapid').setView([53.644636, 10.019475], 3);

mymap.removeControl(mymap.zoomControl);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 3,
    minZoom: 3,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZHZjYXJyaWxsbyIsImEiOiJjazk3bWljZ24wcTZzM29wYzlrZDd5dWVoIn0.PxWvP4zib4zYxz-mP8YE-w'
}).addTo(mymap);

// Markers 
var markerGranada = L.marker([37.177248, -3.599169]).addTo(mymap).bindPopup("granada, spain<br><br><b>bsc in computer engineering</b><br>universidad de granada<br>2014-2018<br><br><b>web application developer</b><br>jensen technologies<br>2018");
var markerLappeenranta = L.marker([61.054774, 28.189285]).addTo(mymap).bindPopup("lappeenranta, finland<br><br><b>bsc in computer engineering</b><br>lut university<br>2016-2017");
var markerKaposvar = L.marker([46.359038, 17.795213]).addTo(mymap).bindPopup("kaposvár, hungary<br><br><b>international volunteer</b><br>compass egyesület<br>2017");
var markerGeneva = L.marker([46.203315, 6.141823]).addTo(mymap).bindPopup("geneva, switzerland<br><br><b>international consultant</b><br>akka technologies<br>2019-2020");
var markerBordeaux = L.marker([44.839485, -0.579790]).addTo(mymap).bindPopup("bordeaux, france<br><br><b>java spring boot & angular developer</b><br>thales<br>2019-2020<br><b><br>angular developer</b><br>handiroad<br>2019");
// var markerStockholm = L.marker([59.330971, 18.066504]).addTo(mymap).bindPopup("stockholm, sweden<br><br><b>???</b>");
// var markerParis = L.marker([48.857847, 2.351763]).addTo(mymap).bindPopup("paris, france<br><br><b>???</b>");