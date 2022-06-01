import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CryptoPage from "./Pages/CryptoPage";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "./Components/Alert";
// import Auth from "./Components/Authentication/auth";
import supabase from "./Components/Authentication/supabase";
import { useState, useEffect } from "react";

function App() {
    const useStyles = makeStyles(() => ({
        App: {
            backgroundColor: "#14161a",
            color: "white",
            minHeight: "100vh",
        },
    }));
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(supabase.auth.session());
        console.log(session);

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);
    const classes = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.App}>
                <Header />
                <Route exact path="/">
                    <Homepage />
                </Route>

                <Route exact path="/crypto/:id">
                    <CryptoPage />
                </Route>
            </div>
            <Alert />
            <footer>&copy; 2022 St4b3r</footer>
        </BrowserRouter>
    );
}

export default App;
