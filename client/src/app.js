import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CryptoPage from "./Pages/CryptoPage";
import { makeStyles } from "@material-ui/core/styles";

function App() {
    const useStyles = makeStyles(() => ({
        App: {
            backgroundColor: "#14161a",
            color: "white",
            minHeight: "100vh",
        },
    }));

    const classes = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.App}>
                <Header />
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/crypto/:id">
                    <CryptoPage />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
