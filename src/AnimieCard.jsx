import { Box, Chip, Typography, IconButton, Link, makeStyles } from "@material-ui/core";
import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyle = makeStyles(theme => ({
    text: {
        textAlign: "center",
        margin: "30px 00"
    },
    card: {
        display: "flex",
        border: "1px solid black",
        margin: "12px 00px",
        background: "white"
    },
    cardContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        alignText: "center",
        marginLeft: "12px"
    },
    fav: {
        width: "100%",
        display: "flex",
        justifyContent: "end"
    },
    nickname: {
        display: "flex",
        height: "4vh",
    },
    name: {
        width: "100%"
    },
}))


const AnimieCard = (props) => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.card}>
                <img src={props.images} style={{ height: "10vh" }} width="10%"></img>
                <Box className={classes.cardContainer}>
                    <Box className={classes.nickname}>
                        <Box className={classes.name}>
                            <Typography> {props.name} </Typography>
                        </Box>
                        <Box className={classes.fav}>
                            <FavoriteIcon color="secondary"></FavoriteIcon>
                            <Typography><span>{props.favorites}</span></Typography>
                            <IconButton>
                                <Link href={props.url} target="_blank"><ArrowForwardIcon /></Link>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box>
                        {props.nicknames.length != 0 ?
                            (<Chip variant="outlined" size="small" label={props.nicknames} />)
                            : (null)
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default AnimieCard;