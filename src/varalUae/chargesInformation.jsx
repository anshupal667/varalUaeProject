import { Box, Chip, Typography, IconButton, Link, makeStyles, Button } from "@material-ui/core";
import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const useStyle = makeStyles(theme => ({
    card: {
        // border: "2px solid",
        display: "flex",
        flexDirection: "column",
        width: "30%",
        margin: "2rem 3rem"
    },
    nickname: {
        marginLeft: "1rem"
    }
}))


const ChargesInformation = (props) => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.card}>
                <Box className={classes.cardContainer}>
                    <Box className={classes.nickname}>
                        <Typography color="primary" gutterBottom variant="h5" component="h1" style={{ fontWeight: "700" }}>{props.title}</Typography>
                        <Typography color="primary" gutterBottom variant="h5" component="h1" style={{ fontWeight: "700" }}>{props.payment}One Time Password</Typography>
                        <Typography color="primary" gutterBottom variant="h5" component="p">{props.intro}</Typography>
                    </Box>
                    <Box className={classes.chargesList}>
                        {/* <CheckCircleOutlineIcon color="primary"></CheckCircleOutlineIcon> */}
                        <Typography color="primary"><IconButton><CheckCircleOutlineIcon color="primary" /></IconButton>Attestation Charges</Typography>
                        <Typography color="primary"><IconButton><CheckCircleOutlineIcon color="primary" /></IconButton>Registered Agent</Typography>
                        <Typography color="primary"><IconButton><CheckCircleOutlineIcon color="primary" /></IconButton>Registered Office</Typography>
                        <Typography color="primary"><IconButton><CheckCircleOutlineIcon color="primary" /></IconButton>Varal Administrative</Typography>
                        <Typography color="primary"><IconButton><CheckCircleOutlineIcon color="primary" /></IconButton>Preparing Statutory File</Typography>
                        <Typography color="primary"><IconButton><CheckCircleOutlineIcon color="primary" /></IconButton>Liasing with Registration Authorities</Typography>
                        <Typography color="primary"><IconButton><CheckCircleOutlineIcon color="primary" /></IconButton>Due Diligence Appraisal</Typography>
                        <Typography color="primary"><IconButton><CheckCircleOutlineIcon color="primary" /></IconButton>Keeping The Register</Typography>
                        <Typography color="primary"><IconButton><CheckCircleOutlineIcon color="primary" /></IconButton>Seal Charges</Typography>
                        <Typography color="primary"><IconButton><CheckCircleOutlineIcon color="primary" /></IconButton>Certificate of Good Standing</Typography>
                    </Box>
                    <Button style={{
                        border: "2px solid blue",
                        color: "blue",
                        height: "12vh",
                        width: "26vw",
                        fontWeight: "700",
                        fontSize: "1.5rem",
                       textTransform: "capitalize",
                       marginTop:"2rem"
                       }}>
                       Continue
                       </Button>
            </Box>
        </Box>
        </>
    )
}
export default ChargesInformation;