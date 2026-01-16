import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";
import {Box, Button, List, ListItem, ListItemButton, ListItemText, Paper} from "@mui/material";
import type {Component, ComponentType, ReactNode} from "react";
import CommuteIcon from '@mui/icons-material/Commute';
import KayakingIcon from '@mui/icons-material/Kayaking';


interface SidebarItemProps {
    Item: ComponentType<{fontSize: "small" | "medium" | "large"}>
}

const Items = [
    DashboardIcon,
    MapIcon,
    CommuteIcon,
    KayakingIcon,
]

const SIDE = 44;

export function Sidebar() {
    return (
        <Box sx={{backgroundColor: "lightblue", width: SIDE, height: "100vh"}}>
            {Items.map((item, index) => {
                return (
                    <SidebarItem key={index} Item={item}/>
                )
            })}
        </Box>
    )
}

export function SidebarItem({Item}: SidebarItemProps) {
    return (
        <ListItemButton sx={{height: SIDE, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Item fontSize={"medium"}/>
        </ListItemButton>
    )
}
