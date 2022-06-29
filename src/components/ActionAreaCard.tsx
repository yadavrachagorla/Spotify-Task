import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
type Image = {
    height: number
    width: number
    url: string
}
type Artists = {
    id: number
    name: string
    type: string
}
type Items = {
    images: Image[]
    artists: Artists[]
    id: string
    name: string
    release_date: string
    total_tracks: number
}
export default function ActionAreaCard({item} : {item:Items}) {
    const history = useNavigate();
    
  return (
    <Card sx={{ maxWidth: 220 }} onClick={() => history(`/details?id=${item.id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.images[1].url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.artists.map((data) => data.name)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
