import { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { CryptoState } from "../../CryptoContext";
import supabase from "./supabase";

const SignUp = ({ handleClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { setAlert } = CryptoState();

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            setAlert({
                open: true,
                message: "Password do not match",
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
                label="Enter Emailadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            ></TextField>
            <TextField
                variant="outlined"
                type="password"
                label="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
            ></TextField>
            <TextField
                variant="outlined"
                type="password"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
            ></TextField>
            <Button
                variant="outlined"
                size="large"
                style={{ backgroundColor: "darkcyan" }}
                onClick={handleSubmit}
            >
                SignUp
            </Button>
        </Box>
    );
};

export default SignUp;
