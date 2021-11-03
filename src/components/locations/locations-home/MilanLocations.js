import React, {useState, useEffect, useRef} from 'react'
import openStoresDisplayed from '../../../functions/general/openStoresDisplayed'
import { Link } from 'gatsby'
import { Form } from 'react-bootstrap'

function MilanLocations({siteData, stores}) {
  const openStoresNum = openStoresDisplayed()
  const [selectedState, setSelectedState] = useState(stores.find(state => state.state === siteData.state))
  const [selectedCity, setSelectedCity] = useState(selectedState.stores.find(city => city.city === siteData.city))
  const didMount = useRef(false)

  const statesDropdownHandler = event => {
    setSelectedState(stores.find(state => state.state === event.target.value))
  }

  const citiesDropdownHandler = event => {
    setSelectedCity(selectedState.stores.find(city => city.city === event.target.value))
  }

  useEffect(() => {
    // using useRef in this case, prevents useEffect from running on mount
    if(didMount.current) setSelectedCity(selectedState.stores[0])
    else didMount.current = true
  }, [selectedState])

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
