import { useEffect } from 'react';

function IniciarMap() {
    useEffect(() => {
        const coord = { lat: -26.830462224358953, lng: -65.20385131873294 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: coord
        });

        new window.google.maps.Marker({
            position: coord,
            map: map
        });
    }, []);

    return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
}

export default IniciarMap;