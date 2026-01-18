import {Menu, MenuItem} from "@mui/material";
import L, {type LatLngTuple} from "leaflet";

interface MapMenuProps {
    menu: MenuObj | null
    setMenu: (menu: MenuObj | null) => void

    markers: LatLngTuple[]
    setMarkers: (markers: LatLngTuple[]) => void
}

export interface MenuObj {
    mouseX: number
    mouseY: number
    latlng: L.LatLng
}

export interface MarkerMenuObj {
    mouseX: number
    mouseY: number
}

async function copyCoordinates(menu: MenuObj | null): Promise<void> {
    await navigator.clipboard.writeText(`${menu?.latlng.lat}, ${menu?.latlng.lng}`)
}

export function MapMenu({menu, setMenu, markers, setMarkers}: MapMenuProps) {
    return (
        <Menu open={!!menu} onClose={() => setMenu(null)} anchorReference="anchorPosition"
            anchorPosition={menu ? { top: menu.mouseY, left: menu.mouseX } : undefined}
        >
            <MenuItem onClick={() => {
                setMarkers([...markers, [menu?.latlng.lat || 0, menu?.latlng.lng || 0]])
                setMenu(null)
            }}>
                Add marker
            </MenuItem>
            <MenuItem onClick={() => {
                copyCoordinates(menu)
                setMenu(null)
            }}>
                Copy coordinates
            </MenuItem>
        </Menu>
    )
}