import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    Select,
    MenuItem,
    makeStyles,
    createTheme,
    ThemeProvider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
// import UserSidebar from "./Authentication/UserSidebar";
// import supabase from "./Authentication/supabase";

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "darkcyan",
        fontFamily: "monospace",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));
// const user = supabase.auth.user();

function Header() {
    const classes = useStyles();
    const history = useHistory();
    const { currency, setCurrency } = CryptoState();
    // console.log("Header Currency", currency);
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            onClick={() => history.push("/")}
                            className={classes.title}
                            variant="h5"
                        >
                            My Crypto Portfolio
                        </Typography>
                        <Select
                            variant="outlined"
                            style={{
                                width: 80,
                                height: 30,
                                marginLeft: 15,
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"EUR"}>EUR</MenuItem>
                            <MenuItem value={"USD"}>USD</MenuItem>
                        </Select>
                        {/* {user ? <UserSidebar /> : <AuthModal />} */}
                        <AuthModal />
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;
