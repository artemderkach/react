import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from 'leaflet'
import {MapContainer, TileLayer, useMapEvents} from 'react-leaflet'
import {Box} from "@mui/material";

import {MapMenu, type MarkerMenuObj, type MenuObj} from "@/complex/map/MapMenu.tsx";
import {useEffect, useState} from "react";
import {MapMarker} from "@/complex/map/Marker.tsx";
import {MarkerMenu} from "@/complex/map/MarkerMenu.tsx";

const position: LatLngTuple = [51.505, -0.09]

function MapRightClick({setMenu}: {setMenu: (menu: MenuObj | null) => void}) {
    useMapEvents({
        contextmenu(e) {
            const map = e.target;
            const rect = map.getContainer().getBoundingClientRect();

            setMenu({
                mouseX: rect.left + e.containerPoint.x,
                mouseY: rect.top + e.containerPoint.y,
                latlng: e.latlng,
            })
        },
    });

    return null;
}

export function App() {
    const [menu, setMenu] = useState<MenuObj | null>(null);
    const [markerMenu, setMarkerMenu] = useState<MarkerMenuObj | null>(null);
    const [markers, setMarkers] = useState<LatLngTuple[]>([]);

    useEffect(() => {
        setMarkers([position])
    }, [])

    return (
        <Box sx={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box sx={{width: "90%", height: "90%", border: "1px solid red"}}>
                <MapContainer
                    center={position} zoom={13} scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%"}}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        markers.map((marker, index) => {
                            return (
                                <MapMarker marker={marker} index={index} setMarkerMenu={setMarkerMenu}/>
                            )
                        })
                    }

                    <MapRightClick setMenu={setMenu} />
                    <MapMenu menu={menu} setMenu={setMenu} markers={markers} setMarkers={setMarkers} />
                    <MarkerMenu markerMenu={markerMenu} setMarkerMenu={setMarkerMenu} />
                </MapContainer>
            </Box>
        </Box>
    )
}