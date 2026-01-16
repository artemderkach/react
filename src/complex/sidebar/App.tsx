import {Sidebar} from "@/complex/sidebar/Sidebar.tsx";
import {Box, CssBaseline} from "@mui/material";


export function App() {
    return (
        <Box sx={{display: "flex", backgroundColor: "grey"}}>
            <CssBaseline />
            <Sidebar />
        </Box>
    )
}