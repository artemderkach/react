import {useEffect, useState} from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Sidebar} from "@/complex/sidebar/Sidebar.tsx";

const c = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "a10",
    "a11",
    "a12",
    "a13",
    "a14",
]

export function App() {
    const [mode, setMode] = useState<"list" | "create">("list");
    const [cards, setCards] = useState<string[]>([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        setCards(c);
    }, [])

    const save = () => {
        setCards(p => [...p, value]);
        setValue("");
        setMode("list");
    };

    return (
        <Box display="flex" flexDirection="row">
            <Box sx={{ height: "100vh", p: 1, backgroundColor: "grey", width: 200, overflowY: "auto" }}>
                {mode === "list" && (
                    <Box>
                        <Button variant="contained" onClick={() => setMode("create")} sx={{ mb: 2 }}>
                            Add card
                        </Button>

                        <Stack spacing={2}>
                            {cards.map((c, i) => (
                                <Card key={i} sx={{ width: "100%", padding: 0 }}>
                                    <CardContent>
                                        <Typography>{c}</Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </Box>
                )}

                {mode === "create" && (
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            gap: 2
                        }}
                    >
                        <Typography variant="h5">Create card</Typography>

                        <TextField
                            label="Title"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />

                        {/* add more fields here */}

                        <Box sx={{ mt: "auto", display: "flex", gap: 2 }}>
                            <Button onClick={() => setMode("list")}>Cancel</Button>
                            <Button variant="contained" onClick={save}>
                                Save
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
}
