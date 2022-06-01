import axios from "axios";
import { useParams } from "react-router";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { useEffect, useState } from "react";
import CoinInfo from "../Components/CoinInfo";
import { makeStyles, Typography, LinearProgress } from "@material-ui/core";

// Regex (googled)
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CryptoPage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();

    const { currency, symbol } = CryptoState();

    const fetchCoin = async () => {
        const { data } = await axios.get(SingleCoin(id));

        setCoin(data);
    };
    console.log("CRyptoPage", coin);

    useEffect(() => {
        fetchCoin();
    }, []);
    const useStyles = makeStyles((theme) => ({
        container: {
            display: "flex",
            [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                alignItems: "center",
            },
        },
        sidebar: {
            width: "30%",
            [theme.breakpoints.down("md")]: {
                width: "100%",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 25,
            borderRight: "2px solid grey",
        },
        heading: {
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Monospace",
            color: "darkcyan",
        },
    }));

    const classes = useStyles();
    if (!coin)
        return <LinearProgress style={{ backgroundColor: "darkcyan" }} />;

    return (
        <div className={classes.container}>
            <div className={classes.sidebar}>
                <img
                    src={coin?.image.large}
                    alt={coin?.name}
                    height="120"
                    style={{ marginBottom: 20 }}
                />
                <Typography variant="h3" className={classes.heading}>
                    {coin?.name}
                </Typography>

                <div className={classes.marketData}>
                    <span style={{ display: "flex" }}>
                        <Typography variant="h6" className={classes.heading}>
                            Rank:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography
                            variant="h5"
                            style={{
                                fontFamily: "Monospace",
                            }}
                        >
                            {numberWithCommas(coin?.market_cap_rank)}
                        </Typography>
                    </span>
                    <span style={{ display: "flex" }}>
                        <Typography variant="h6" className={classes.heading}>
                            Current Price:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography
                            variant="h6"
                            style={{
                                fontFamily: "Monospace",
                            }}
                        >
                            {symbol}{" "}
                            {numberWithCommas(
                                coin?.market_data.current_price[
                                    currency.toLowerCase()
                                ].toFixed(2)
                            )}
                        </Typography>
                    </span>
                    <span style={{ display: "flex" }}>
                        <Typography variant="h6" className={classes.heading}>
                            Market Cap:
                        </Typography>
                        &nbsp; &nbsp;
                        <Typography
                            variant="h6"
                            style={{
                                fontFamily: "Monospace",
                            }}
                        >
                            {symbol}{" "}
                            {numberWithCommas(
                                coin?.market_data.market_cap[
                                    currency.toLowerCase()
                                ]
                                    .toString()
                                    .slice(0, -6)
                            )}{" "}
                            Million
                        </Typography>
                    </span>
                </div>
            </div>
            <CoinInfo coin={coin} />
        </div>
    );
};

export default CryptoPage;
