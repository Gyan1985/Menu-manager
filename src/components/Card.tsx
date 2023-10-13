import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from  "../assets/BURGER1.jpeg"
import { makeStyles } from '@mui/styles';
import { FiCard, FiCardActionArea, FiCardActions, FiCardContent, FiCardMedia } from "./CardConstants";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  card: {
    width: '50%'
  },

  media: {
    height: 140
  },

  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
    height:'100%'
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)"
  }
});

export function Card({name,price}: {name: string,price: number}) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box my={4} className="d-flex justify-content-center" style={{width: "100%"}}>
        <FiCard className={classes.card}>
          <FiCardActionArea style={{height: '150px'}}>
            <FiCardMedia
              image={Image}
              title="Contemplative Reptile"
            />
            <FiCardContent className={classes.fiCardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
            </FiCardContent>
          </FiCardActionArea>
          <FiCardActions>
            <Typography>
              Price : $ {price}
            </Typography>
          </FiCardActions>
        </FiCard>
      </Box>
    </Container>
  );
}

