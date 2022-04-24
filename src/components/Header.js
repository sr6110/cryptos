import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from 'react-router-dom'
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const{currency, setCurrency  }  = CryptoState()

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            type: "dark"
        }
    })

    console.log(currency)


    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography onClick={() => navigate('/')} className={classes.title} variant='h6'>
                            Cryptos
                        </Typography>
                        <Select variant="outlined" style={{
                            width: 100,
                            height: 40,
                            marginLeft: 15
                        }} value={currency}
                        onChange={e=>setCurrency(e.target.value)}>
                            <MenuItem value={'INR'}>INR</MenuItem>
                            <MenuItem value={'USD'}>USD</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header