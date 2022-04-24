import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";

const Coinpage = () => {
    const { id } = useParams();
    const[coin, setCoin] = useState();
    const { symbol, currency } = CryptoState();

    const fetchCoin = async () => {
        // setLoading(true)
        const { data } = await axios.get(SingleCoin(id));
        setCoin(data);
        // setLoading(false);
        
    }
// console.log('line 21 se',coin.image.large)
    // console.log(coin)

    useEffect(()=>{
        fetchCoin()
    }, [])


    const useStyles = makeStyles((theme)=>({
        container :{
            display:'flex',
            [theme.breakpoints.down("md")]:{
                flexdirection:"columns",
                alignItems:'center'
            }
        },
        sidebar:{
            width: '30%',
            [theme.breakpoints.down("md")]:{
                width:"100%"
            },
            display:'flex',
            flexDirection:'column',
            marginTop: 25,
            borderRight: "2px solid gray"
        },
        heading:{
            fontWeight: "bold",
            marginBottom:20,
            fontFamily:"Montserrat"
        }
    }))

    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div className={classes.sidebar}>
            {coin && <img
                src={coin.image.large}
                alt={coin.name}
                height="200"
                style={{marginBottom: 20}}
            />}
            <Typography variant="h3" className={classes.heading}>
                {coin && coin.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.description}>
                
            </Typography>
            </div>
            <CoinInfo coin={coin}/>
        </div>
    )
}
// {parse(coin?.description.en.split(". "))}
export default Coinpage;

