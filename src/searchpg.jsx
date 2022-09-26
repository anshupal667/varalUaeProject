import React, { useCallback, useEffect, useState } from "react";
import { Box, makeStyles, TextField, Typography, Container, Grid, Button, Divider} from "@material-ui/core";
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import AnimieCard from "./AnimieCard";
const useStyle = makeStyles(theme => ({
    text: {
        textAlign: "center",
        margin: "30px 00"
    },
    innerBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        alignText: "center",
        marginLeft: "12px"
        // border:"solid",
    },
    textbox: {
        marginBottom: '25px',
        background: "white",
        border: "none"
    }
}))

const SearchAnimie = () => {
    const classes = useStyle();
    const [apidata, setData] = useState([]);
    const [searchedtext, setsearchedtext] = useState('');
    const [searchChar, setSearchChar] = useState([])

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v4/characters?page=0&limit=15&q=&order_by=favorites&sort=desc`).then(result => {
            setData(result.data.data);
        })

    }, [searchChar])
    const changeHandler = (text) => {
        setsearchedtext(text);
    }

    const searchUser = useCallback((searchuser) => {
        if (searchuser !== '' && searchuser.length > 0) {
            axios.get(`https://api.jikan.moe/v4/characters?page=0&limit=15&q=${searchuser}&order_by=favorites&sort=desc`).then(res => {
                setSearchChar(res.data.data);
            })
        }
    }, [])
    return (
        <>
            <Container component="main" maxWidth="md" className={classes.container} >
                <Box className={classes.innerBox}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h1" gutterBottom variant="h5" className={classes.text}>Search Anime Characters</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                className={classes.textbox}
                                variant="outlined"
                                fullWidth
                                placeholder="search char"
                                value={searchedtext}
                                size="small"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"> <SearchIcon /></InputAdornment>,
                                }}
                                onChange={(e) => changeHandler(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary" onClick={searchUser(searchedtext)} disabled={!searchedtext}>Search</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Divider />
                    {searchedtext === "" ?
                        (
                            apidata.map((item,index) => {
                                return (
                                    <Box>
                                        <AnimieCard
                                            key={index}
                                            name={item.name}
                                            favorites={item.favorites}
                                            url={item.url}
                                            nicknames={item.nicknames}
                                            images={item.images.jpg.image_url}>
                                        </AnimieCard>

                                    </Box>
                                )
                            })
                        ):(
                            <>
                    {searchChar.length === 0 ?
                        <Box >
                            <Typography className={classes.text}>Result Not Found</Typography>
                        </Box>
                        : (
                            <>
                                {searchChar.map((item, index) => {
                                    return (
                                        <Box>
                                            <AnimieCard
                                                key={index}
                                                name={item.name}
                                                favorites={item.favorites}
                                                url={item.url}
                                                nicknames={item.nicknames}
                                                images={item.images.jpg.image_url}>
                                            </AnimieCard>

                                        </Box>
                                    )

                                })}
                            </>
                        )}
                        </>
                        )}
                </Box>
            </Container>
        </>
    )
}
export default SearchAnimie;