import { useState } from "react";
import supabase from "./supabase";
import { Box, Button, TextField } from "@material-ui/core";
import { CryptoState } from "../../CryptoContext";

export default function Auth() {
    const [email, setEmail] = useState("");
    const { setAlert } = CryptoState();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { error } = await supabase.auth.signIn({ email });
            console.log(email);
            if (error) throw error;
            setAlert({
                open: true,
                message: "Magic Link sent",
                type: "success",
            });
        } catch (error) {
            console.log(error);
            setAlert({
                open: true,
                message: "Something went wrong",
                type: "error",
            });
        }
    };

    return (
        <Box
            p={3}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
            {" "}
            <p>Sign in via magic link with your email below</p>
            <>
                <TextField
                    variant="outlined"
                    type="email"
                    label="Emailadress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                ></TextField>
                <Button
                    variant="outlined"
                    size="large"
                    style={{ backgroundColor: "darkcyan" }}
                    onClick={handleLogin}
                >
                    Send Magic Link
                </Button>
            </>
        </Box>
    );
}
