// src/components/PropertyForm.js

import React, { useState } from 'react';
import { addProperty } from '../../api/api';

const PropertyForm = ({ token }) => {
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearby: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProperty(formData, token);
      // Optionally, refresh the property list or provide feedback to the user
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Place:</label>
        <input type="text" name="place" value={formData.place} onChange={handleChange} required />
      </div>
      <div>
        <label>Area:</label>
        <input type="text" name="area" value={formData.area} onChange={handleChange} required />
      </div>
      <div>
        <label>Bedrooms:</label>
        <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required />
      </div>
      <div>
        <label>Bathrooms:</label>
        <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required />
      </div>
      <div>
        <label>Nearby:</label>
        <input type="text" name="nearby" value={formData.nearby} onChange={handleChange} required />
      </div>
      <button type="submit">Add Property</button>
    </form>
  );
};

export default PropertyForm;
