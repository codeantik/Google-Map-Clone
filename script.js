
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5raXRzaW5naDA5OSIsImEiOiJja2hkamNqZjUwNmQxMnNudjk2aWh3cmR2In0.LHdocGF8uVQeZVIGgf42Aw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true});

function successLocation(position) {
    console.log(position);
    setUpMap([position.coords.longitude, position.coords.latitude]);
};

function errorLocation() {
    setUpMap([-2.24, 53.48]);
};

function setUpMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12.5
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoiYW5raXRzaW5naDA5OSIsImEiOiJja2hkamNqZjUwNmQxMnNudjk2aWh3cmR2In0.LHdocGF8uVQeZVIGgf42Aw'
      });
      
    map.addControl(directions, 'top-left');
};


