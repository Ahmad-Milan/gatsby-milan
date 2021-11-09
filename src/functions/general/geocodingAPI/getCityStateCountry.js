const getCityStateCountry = response => {
  let detectedCity, stateShort, country
  for (let i = 0; i < response.data.results[0].address_components.length; i++) {
    for (let j = 0; j < response.data.results[0].address_components[i].types.length; j++) {
      switch (response.data.results[0].address_components[i].types[j]) {
        case "locality":
          detectedCity = response.data.results[0].address_components[i].long_name;
          break;
        case "administrative_area_level_1":
          stateShort = response.data.results[0].address_components[i].short_name;
          break;
        case "country":
          country = response.data.results[0].address_components[i].long_name;
          break;
      }
    }
  }
  return [detectedCity, stateShort, country]
}

export default getCityStateCountry