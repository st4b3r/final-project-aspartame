import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
    const useStyles = makeStyles({
        selectbutton: {
            border: "1px solid darkcyan",
            borderRadius: 5,
            padding: 10,
            fontFamily: "Monospace",
            cursor: "pointer",
            backgroundColor: selected ? "darkcyan" : "",
            color: selected ? "black" : "",
            fontWeight: selected ? 800 : 600,
            "&:hover": {
                backgroundColor: "darkcyan",
                color: "black",
            },
            width: "20%",
            textAlign: "center",
        },
    });

    const classes = useStyles();

    return (
        <span onClick={onClick} className={classes.selectbutton}>
            {children}
        </span>
    );
};

export default SelectButton;
