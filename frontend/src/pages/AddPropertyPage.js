import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AddPropertyPage = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearby: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/properties', propertyDetails);
      console.log(response.data); // Handle property addition success
      // Clear form after successful submission if needed
      setPropertyDetails({
        place: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        nearby: '',
      });
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 400, margin: 'auto', mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" mb={2}>
          Add Property
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Place"
            type="text"
            name="place"
            value={propertyDetails.place}
            onChange={handleChange}
            fullWidth
            mb={2}
          />
          <TextField
            label="Area"
            type="text"
            name="area"
            value={propertyDetails.area}
            onChange={handleChange}
            fullWidth
            mb={2}
          />
          <TextField
            label="Bedrooms"
            type="number"
            name="bedrooms"
            value={propertyDetails.bedrooms}
            onChange={handleChange}
            fullWidth
            mb={2}
          />
          <TextField
            label="Bathrooms"
            type="number"
            name="bathrooms"
            value={propertyDetails.bathrooms}
            onChange={handleChange}
            fullWidth
            mb={2}
          />
          <TextField
            label="Nearby"
            type="text"
            name="nearby"
            value={propertyDetails.nearby}
            onChange={handleChange}
            fullWidth
            mb={2}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Property
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddPropertyPage;
