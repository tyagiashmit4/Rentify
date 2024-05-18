import React, { useEffect, useState } from 'react';

const ViewProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties data from backend API
    // Example: fetch('/api/properties').then(response => response.json()).then(data => setProperties(data));
    // For now, using dummy data
    const dummyProperties = [
      { id: 1, place: 'ABC Apartments', area: 'XYZ Area', bedrooms: 2, bathrooms: 1 },
      { id: 2, place: 'DEF Condos', area: 'LMN Area', bedrooms: 3, bathrooms: 2 },
    ];
    setProperties(dummyProperties);
  }, []);

  return (
    <div>
      <h2>Your Posted Properties</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <strong>{property.place}</strong> - {property.area}, {property.bedrooms} BR, {property.bathrooms} BA
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewProperties;
