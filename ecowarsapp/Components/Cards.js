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
import Question from "../Components/Question.js"



export default function Cards() {


  return (
    <>
      <Card
        className="bg-[#f2e9e4] text-black"
        sx={{ maxWidth: 400 }}
      >
        <CardActionArea>
          <CardMedia 
            component="img"
            image="/2021-profile.jpg"
            alt="npm package"
            sx={{ maxHeight: 200 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h3">
              Carlos Alford
            </Typography>
            <Typography gutterBottom variant="h5" component="h4">
              8
            </Typography>
            <Button size="small">
              Expand
            </Button>
            {/* Question component will need the question and a function to process the question */}
            <Question />
          </CardContent>
        </CardActionArea>

        <CardActions className="text-black">
          <Button size="small">
            Submit
          </Button>
        </CardActions>
      </Card>

     
    </>
  );
}
