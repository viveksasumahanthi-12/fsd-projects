import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardSection = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=6')
      .then(res => res.json())
      .then(data => {
        // Map first 3 images to card objects
        const cardData = data.slice(0, 3).map(item => ({
          title: `Photo by ${item.author}`,
          description: 'Random image from Picsum API',
          img: item.download_url
        }));
        setCards(cardData);
      });
  }, []);

  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={card.img}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h5">{card.title}</Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" startIcon={<FavoriteIcon />}>Like</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardSection;
