import { Container, makeStyles } from "@material-ui/core";
import axios from "axios";
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";
import { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    carousel: {
        display: "flex",
        alignItems: "center",
        height: "50%",
    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
    },
}));

// Regex (googled)
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Carousel = () => {
    const classes = useStyles();
    const [trending, setTrending] = useState([]);
    const { currency, symbol } = CryptoState();

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency));
        setTrending(data);
    };
    console.log(trending);
    useEffect(() => {
        fetchTrendingCoins();
    }, [currency]);

    const items = trending.map((coin) => {
        let profit = coin.price_change_percentage_24h >= 0;
        return (
            <Link
                key={coin.id}
                className={classes.carouselItem}
                to={`/coins/${coin.id}`}
            >
                <img
                    src={coin?.image}
                    alt={coin.name}
                    height="60"
                    style={{ marginBottom: 10 }}
                />
                <span style={{ fontSize: 14, fontWeight: 400 }}>
                    {coin?.symbol}
                    &nbsp;
                    <span
                        style={{
                            color: profit > 0 ? "lightgreen" : "red",
                            fontWeight: 400,
                        }}
                    >
                        {profit && "+"}
                        {coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                    &nbsp;
                    <span style={{ fontSize: 14, fontWeight: 400 }}>
                        {symbol}{" "}
                        {numberWithCommas(coin?.current_price.toFixed(2))}
                    </span>
                </span>
            </Link>
        );
    });

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 5,
        },
    };
    return (
        <div className={classes.carousel}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                responsive={responsive}
                autoPlay
                items={items}
                disableButtonsControls
                disableDotsControls
            />
            <Container>
                <div></div>
            </Container>
        </div>
    );
};

export default Carousel;
