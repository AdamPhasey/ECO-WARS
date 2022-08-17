import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Badge,
  Button,
  CardActionArea,
  CardActions,
  Stack,
  TextField
} from "@mui/material";
import { useEffect, useRef } from "react";
import Link from "next/link";



export default function Cards() {


  return (
    <>
      <Card
        className="bg-[#f2e9e4] text-black"
        sx={{ maxWidth: 400, maxHeight: 450 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image="/spacecoinfront.png"
            alt="npm package"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SPACE COIN
            </Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            
            <Typography className="text-sm">
              LOREM IPSUM
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="text-white">
          <Button size="small">
            <Link href={"https://github.com/AdamPhasey/space-coin-front"}>
              Github
            </Link>
          </Button>
          <Button size="small">
            <Link href={"https://spacecoin.vercel.app"}>Live</Link>
          </Button>
        </CardActions>
      </Card>

     
    </>
  );
}
