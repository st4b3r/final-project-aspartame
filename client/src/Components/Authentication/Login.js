import { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import supabase from "./supabase";
import { CryptoState } from "../../CryptoContext";

const Login = ({ handleClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAlert } = CryptoState();

    const handleSubmit = async () => {
        // e.preventDefault();
        if (!email || !password) {
            setAlert({
                open: true,
                message: "Please fill all the fields",
                type: "error",
            });
            return;
        }
        try {
            const result = await supabase.auth.signIn(email, password);
            setAlert({
                open: true,
                message: "Login successful. Welcom ${result.user.email}",
                type: "error",
            });
            console.log(result);
        } catch (error) {
            setAlert({
                open: true,
                message: "Email or Password incorrect",
                type: "error",
            });
            return;
        }
        handleClose();
    };

    return (
        <Box
            p={3}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
            <TextField
                variant="outlined"
                type="email"
                label="Emailadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            ></TextField>
            <TextField
                variant="outlined"
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
            ></TextField>
            <Button
                variant="outlined"
                size="large"
                style={{ backgroundColor: "darkcyan" }}
                onClick={handleSubmit}
            >
                Login
            </Button>
        </Box>
    );
};

export default Login;
