import {Menu, MenuItem} from "@mui/material";
import type {MarkerMenuObj} from "@/complex/map/MapMenu.tsx";

interface MapMenuProps {
    markerMenu: MarkerMenuObj | null
    setMarkerMenu: (markerMenu: MarkerMenuObj | null) => void
}

export function MarkerMenu({markerMenu, setMarkerMenu}: MapMenuProps) {
    return (
        <Menu open={!!markerMenu} onClose={() => setMarkerMenu(null)} anchorReference="anchorPosition"
              anchorPosition={markerMenu ? { top: markerMenu.mouseY, left: markerMenu.mouseX } : undefined}
        >
            <MenuItem onClick={() => {
            }}>
                info 1
            </MenuItem>
            <MenuItem onClick={() => {
            }}>
                info 2
            </MenuItem>
        </Menu>
    )
}