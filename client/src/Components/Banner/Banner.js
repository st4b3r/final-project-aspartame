import { Container, makeStyles } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: `url(img/main.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
        width: "auto",
    },
    bannerContent: {
        height: 100,
        display: "flex",
        flexDirection: "column",
        paddingTop: 0,
        justifyContent: "space-around",
    },
}));
function Banner() {
    const classes = useStyles();
    // console.log("classes", classes);
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div>
                    <Carousel />
                </div>
            </Container>
        </div>
    );
}

export default Banner;
