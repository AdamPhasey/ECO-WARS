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
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Box
} from "@mui/material";
import { useState } from 'react'
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';





export default function Cards({name, image}) {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="flex flex-row  justify-center gap-10">
      <Card
        className="bg-[#f2e9e4] text-black"
        sx={{ maxWidth: 400 }}
      >
        <CardActionArea>
<img src={image} alt="profile pic"/>


          <CardContent>
            <Typography gutterBottom variant="h3" component="h3">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h4">
              8
            </Typography>
            {/* Question component will need the question and a function to process the question */}

          </CardContent>
        </CardActionArea>

        <CardActions className="text-black flex flex-col gap-3">
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Transport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="VEHICLE OF TRANSPORT"
          onChange={handleChange}
        >
          <MenuItem value={10}>Car</MenuItem>
          <MenuItem value={20}>Train</MenuItem>
          <MenuItem value={30}>Bus</MenuItem>
        </Select>
      </FormControl>
    </Box>
          <TextField id="outlined-basic" label="Travel Time" variant="outlined" />
          <Button size="small">
            Submit
          </Button>

        </CardActions>
      </Card>

    
    </div>
  );
}
