import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { ScaleLoader  } from "react-spinners";
const LocationSearchInput = ({ onSelect,Address }) => {
  const [address, setAddress] = useState(Address||"");

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => {
        const { formatted_address, address_components } = results[0];
        
        const city =
          address_components.find((component) =>
            component.types.includes("locality")
          )?.long_name || "";
        const state =
          address_components.find((component) =>
            component.types.includes("administrative_area_level_1")
          )?.long_name || "";
        const country =
          address_components.find((component) =>
            component.types.includes("country")
          )?.long_name || "";
        const zipCode =
          address_components.find((component) =>
            component.types.includes("postal_code")
          )?.long_name || "";
        onSelect(formatted_address, city, state, country, zipCode);
        setAddress(formatted_address);
        return getLatLng(results[0]);
      })
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div style={{ position: "relative" }}>
          <input
            {...getInputProps({
              placeholder: "Enter Address",
              className: "custominput",
              style: {
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
              },
            })}
          />
          <div
            className="autocomplete-dropdown-container"
            style={{
              position: "absolute",
              zIndex: 1000,
              width: "100%",
              backgroundColor: "white",

              borderRadius: "5px",

              marginTop: "5px",
            }}
          >
            {loading && (
              <div>
                <ScaleLoader
                  color="#02b26b"
                  height={20}
                  margin={1}
                  radius={2}
                  speedMultiplier={1}
                  width={6}
                />
              </div>
            )}
            {suggestions.map((suggestion, index) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              const style = suggestion.active
                ? {
                    backgroundColor: "#fafafa",
                    cursor: "pointer",
                    padding: "10px",
                  }
                : {
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    padding: "10px",
                  };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                  key={index}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
