import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';
import { cityApiOptions, cityApiURL } from '../api';

export default function Search(props) {
  const [location, setLocation] = useState(null);

  const handleOnChange = (newLocation) => {
    setLocation(newLocation);
    props.onLocationChange(newLocation);
  };
  const loadOptions = (inputValue) => {
    return fetch(
      `${cityApiURL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      cityApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  return (
    <AsyncPaginate
      className="searchBar"
      placeholder="Search for city "
      debounceTimeout={600}
      value={location}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}
