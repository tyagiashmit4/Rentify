import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PostPropertyForm = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    place: '',
    area: '',
    bedrooms: 0,
    bathrooms: 0,
    nearbyHospitals: '',
    nearbyColleges: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit property details to backend API
    console.log(propertyDetails);
    // Clear form after submission if needed
    setPropertyDetails({
      place: '',
      area: '',
      bedrooms: 0,
      bathrooms: 0,
      nearbyHospitals: '',
      nearbyColleges: '',
    });
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        maxWidth: 400,
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" component="div">
        Post Property
      </Typography>
      <TextField
        label="Place"
        type="text"
        name="place"
        value={propertyDetails.place}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Area"
        type="text"
        name="area"
        value={propertyDetails.area}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Bedrooms"
        type="number"
        name="bedrooms"
        value={propertyDetails.bedrooms}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Bathrooms"
        type="number"
        name="bathrooms"
        value={propertyDetails.bathrooms}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Nearby Hospitals"
        type="text"
        name="nearbyHospitals"
        value={propertyDetails.nearbyHospitals}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Nearby Colleges"
        type="text"
        name="nearbyColleges"
        value={propertyDetails.nearbyColleges}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Post Property
      </Button>
    </Box>
  );
};

export default PostPropertyForm;
