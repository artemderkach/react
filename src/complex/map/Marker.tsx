import {Marker, Popup, useMap} from "react-leaflet";
import type {LatLngTuple} from "leaflet";
import type {MarkerMenuObj} from "@/complex/map/MapMenu.tsx";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";

const markerCustomIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],        // size of the image
    iconAnchor: [13, 41],      // point of the icon that touches the map
    popupAnchor: [0, -40],     // popup position relative to icon
});

interface MapMarkerProps {
    marker: LatLngTuple
    setMarkerMenu: (markerMenu: MarkerMenuObj | null) => void
    index: number
}

export function MapMarker({marker, setMarkerMenu, index}: MapMarkerProps) {
    const map = useMap()

    return (
        <Marker key={index} position={marker} icon={markerCustomIcon} eventHandlers={{
            click: (e) => {
                const point = map.latLngToContainerPoint(marker)
                const rect = map.getContainer().getBoundingClientRect();

                setMarkerMenu({
                    mouseX: rect.left + point.x,
                    mouseY: rect.top + point.y,
                })
            }
        }}>
            <Popup key={index}>
                {marker[0]}, {marker[1]}, {index} <br/>
            </Popup>
        </Marker>
    )
}