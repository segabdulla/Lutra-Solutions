import React, { useState, useEffect} from 'react';

import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

const LocationPicker = ({setlatlong}) => {

    const [address, setAddress] = useState('');
    
    const handleLocationUpdate = async() => {
      const results = await geocodeByAddress(address.value?.description);
      const latlng = await getLatLng(results[0]);
      setlatlong(latlng)
    }

    useEffect( () => {
      if(address){
        handleLocationUpdate();
      }
      const timeoutId = setTimeout(() => 3000);
      return function cleanup() {
        clearTimeout(timeoutId);
      };
    },[address]);

    return (
        <>
          <label htmlFor="addressInput" className="mantine-1w07r5r mantine-TextInput-label">
            Select Location
            <span className="mantine-1m203yh mantine-TextInput-required"> *</span>
          </label>
          <GooglePlacesAutocomplete
              apiKey="AIzaSyANrVmNojmo95WX3DAi5O_p_yrqIWTDpYE"
              id="addressInput"
              autocompletionRequest = {{
                  bounds: [
                    { lat: 50, lng: 50 },
                    { lat: 100, lng: 100 }
                  ],
                  componentRestrictions: {
                  country: ['my'],
                  }
                }} 
              selectProps={{
                  address,
                  onChange: setAddress,
              }}
          />
        </>
    );
}

export default LocationPicker