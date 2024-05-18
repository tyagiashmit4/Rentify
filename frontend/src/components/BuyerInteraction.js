import React, { useState } from 'react';

const BuyerInteraction = () => {
  const [showSellerDetails, setShowSellerDetails] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleInterestedClick = (property) => {
    setSelectedProperty(property);
    setShowSellerDetails(true);
  };

  const handleFilterChange = (e) => {
    // Add logic to handle filter changes
    console.log('Filter changed:', e.target.value);
  };

  // Dummy properties data
  const properties = [
    { id: 1, place: 'ABC Apartments', area: 'XYZ Area', bedrooms: 2, bathrooms: 1 },
    { id: 2, place: 'DEF Condos', area: 'LMN Area', bedrooms: 3, bathrooms: 2 },
  ];

  return (
    <div>
      <h2>Buyer Interaction</h2>
      {/* Property List */}
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <strong>{property.place}</strong> - {property.area}, {property.bedrooms} BR, {property.bathrooms} BA
            <button onClick={() => handleInterestedClick(property)}>I'm Interested</button>
          </li>
        ))}
      </ul>

      {/* Filter */}
      <select onChange={handleFilterChange}>
        <option value="">All Properties</option>
        <option value="2BR">2 Bedrooms</option>
        <option value="3BR">3 Bedrooms</option>
        {/* Add more filter options as needed */}
      </select>

      {/* Seller Details */}
      {showSellerDetails && selectedProperty && (
        <div>
          <h3>Seller Details</h3>
          <p>Seller Name: John Doe</p>
          <p>Contact Number: 123-456-7890</p>
          <p>Email: johndoe@example.com</p>
        </div>
      )}
    </div>
  );
};

export default BuyerInteraction;
