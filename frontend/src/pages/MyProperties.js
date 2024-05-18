import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../api/api';
import PropertyItem from '../components/PropertyItem';

const MyProperties = () => {
  const [userProperties, setUserProperties] = useState([]);

  useEffect(() => {
    const getUserProperties = async () => {
      try {
        
        const properties = await fetchProperties(); 
        setUserProperties(properties); 
      } catch (error) {
        console.error(error);
      }
    };

    getUserProperties();
  }, []);

  return (
    <div>
      <h1>My Properties</h1>
      {userProperties.length > 0 ? (
        <div>
          {userProperties.map((property) => (
            <PropertyItem key={property._id} property={property} />
          ))}
        </div>
      ) : (
        <p>No properties found.</p>
      )}
    </div>
  );
};

export default MyProperties;
