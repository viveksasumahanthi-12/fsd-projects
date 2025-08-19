import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';

const CarouselSection = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=3&limit=5')
      .then(res => res.json())
      .then(data => {
        const slideData = data.map(item => ({
          name: `Photo by ${item.author}`,
          description: 'Random image from Picsum API',
          img: item.download_url
        }));
        setSlides(slideData);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Carousel>
        {slides.map((item, i) => (
          <Paper key={i} style={{ textAlign: 'center' }}>
            <img src={item.img} alt={item.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <Typography variant="h5">{item.name}</Typography>
            <Typography>{item.description}</Typography>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
