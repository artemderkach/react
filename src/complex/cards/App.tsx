import { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Stack,
    TextField,
    Typography
} from "@mui/material";

export function App() {
    const [mode, setMode] = useState<"list" | "create">("list");
    const [cards, setCards] = useState<string[]>([]);
    const [value, setValue] = useState("");

    const save = () => {
        setCards(p => [...p, value]);
        setValue("");
        setMode("list");
    };

    return (
        <Box sx={{ height: "100vh", p: 2, backgroundColor: "grey", width: 200 }}>
            {mode === "list" && (
                <>
                    <Button variant="contained" onClick={() => setMode("create")} sx={{ mb: 2 }}>
                        Add card
                    </Button>

                    <Stack spacing={2}>
                        {cards.map((c, i) => (
                            <Card key={i} sx={{ width: 320 }}>
                                <CardContent>
                                    <Typography>{c}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </>
            )}

            {mode === "create" && (
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
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
    );
}
