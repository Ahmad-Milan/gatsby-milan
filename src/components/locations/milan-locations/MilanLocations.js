import React, {useState, useEffect, useRef} from 'react'
import openStoresDisplayed from '../../../functions/general/openStoresDisplayed'
import { Link } from 'gatsby'
import { Form } from 'react-bootstrap'
import { usePosition } from '../../../hooks/usePosition'
import axios from 'axios'

function MilanLocations({siteData, stores}) {
  // Get total number of open stores in all states
  const openStoresNum = openStoresDisplayed()

  // Default state & city to this site state & city
  const [selectedState, setSelectedState] = useState(stores.find(state => state.state === siteData.state))
  const [selectedCity, setSelectedCity] = useState(selectedState.stores.find(city => city.city === siteData.city))

  // In case a user changed the selection manually
  const [userInteraction, setUserInteraction] = useState(false)

  // States dropdown
  const statesDropdownHandler = event => {
    setUserInteraction(true)
    setSelectedState(stores.find(state => state.state === event.target.value))
  }

  // Cities dropdown
  const citiesDropdownHandler = event => {
    setSelectedCity(selectedState.stores.find(city => city.city === event.target.value))
  }

  // This will prevent the useEffect from calling google geocoding api more than once after mounting
  const didMount = useRef(false)

  const {latitude, longitude} = usePosition()

  useEffect(() => {
    // This will NOT run if user interacts
    // This will run ONLY ONCE
    if(latitude && longitude && !didMount.current && !userInteraction) {
      didMount.current = true
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          latlng: `${latitude}, ${longitude}`,
          key: process.env.Google_Maps_API_Key
        }
      })
      .then(response => {
        let [detectedCity, stateShort, country] = getCityStateCountry(response)
        let detectedState
        if(country === 'United States') detectedState = stores.find(state => state.stateShort === stateShort)
        if(detectedState) {
          setSelectedState(detectedState)
          const milanCity = findCity(detectedCity, detectedState)
          if(milanCity) setSelectedCity(milanCity)
          else setSelectedCity(detectedState.stores[0])
        }
      }).catch(err => console.error(err))
    }
    // This will run if user interacts
    if(userInteraction) {
      setSelectedCity(selectedState.stores[0])
    }
  },[latitude, longitude, selectedState, userInteraction])


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

  const findCity = (detectedCity, detectedState) => {
    let filteredCity = detectedState.stores.find(city => {
      if(city.city === detectedCity) return true
      else return city.locations.find(location => location.location === detectedCity)
    })
    return filteredCity
  }

  return (
    <section id="milan-locations" className="full-section background hero light-blue-bg">
      <div className="container">
        <div className="row text-center">
          <h1>{openStoresNum}<sup>+</sup> Milan Locations in {stores.length} states</h1>
        </div>
        <div className="row pt-4 justify-content-center">
          <h2 className="h4 pb-1 text-center">Select your state</h2>
          <div className="col-md-6 col-lg-4">
            <Form.Select aria-label="milan states" value={selectedState.state} onChange={statesDropdownHandler}>
              {
                stores.sort().map((state, x) => (
                  <option key={x} value={state.state}>
                    {state.state}
                  </option>
                ))
              }
            </Form.Select>
          </div>
        </div>

        <div className="row pt-4 justify-content-center">
          <h2 className="h4 pb-1 text-center">Select a city near you</h2>
          <div className="col-md-6 col-lg-4">
            <Form.Select aria-label="current city" value={selectedCity.city} onChange={citiesDropdownHandler}>
              {
                selectedState.stores.map((city, x) => (
                  <option key={x} value={city.city}>
                    {city.city}
                  </option>
                ))
              }
            </Form.Select>
          </div>
        </div>
        <div className="row pt-4 justify-content-center">
          <h3 className="text-center">Our {selectedCity.city} Location{selectedCity.locations.length === 1 ? '' : 's'}</h3>
          <ul id="locations-list" className="d-flex justify-content-center flex-wrap mt-1">
            {
              selectedCity.pathname === siteData.pathname ?
              siteData.locations.map((location, x) => (
                <li className="col-10 col-sm-6 col-md-4 col-lg-3 p-2" key={x}>
                  {
                    siteData.multiple ?
                    <Link to={`/locations/${selectedCity.pathname}/${location.pathname}/`}>{location.location}</Link>
                    : <Link to={`/locations/${selectedCity.pathname}/`}>{location.location}</Link> 
                  }
                </li>
              ))
              :
              selectedCity.locations.map((location, x) => (
                <li className="col-10 col-sm-6 col-md-4 col-lg-3 p-2" key={x}>
                  {
                    selectedCity.locations.length === 1 ?
                    <a key={x} href={`https://milanlaser${selectedCity.pathname}.com`}>{location.location}</a>
                    : <a key={x} 
                        href={`https://milanlaser${selectedCity.pathname}.com/locations/${selectedCity.city.trim().toLowerCase().replace(/\s+/g, '')}/${location.location.trim().toLowerCase().replace(/\s+/g, '')}/`}>
                      {location.location}
                      </a>
                  }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MilanLocations
