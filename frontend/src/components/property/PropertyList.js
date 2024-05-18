// PropertyList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from '@mui/material';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 5;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/properties?page=${currentPage}&limit=${propertiesPerPage}`);
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>Available Properties</h2>
      <ul>
        {properties.map(property => (
          <li key={property._id}>
            <h3>{property.place}</h3>
            <p>Area: {property.area} sq.ft.</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <button>I'm Interested</button>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={10} 
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PropertyList;
