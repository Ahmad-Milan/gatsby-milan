const isMilanCity = (detectedCity, detectedState) => {
  let filteredCity = detectedState.stores.find(city => {
    if(city.city === detectedCity) return true
    else return city.locations.find(location => location.location === detectedCity)
  })
  return filteredCity
}
export default isMilanCity