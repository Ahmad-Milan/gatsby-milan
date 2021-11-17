import React, {useState, useEffect, useRef} from 'react'
import openStoresDisplayed from '../../../functions/general/openStoresDisplayed'
import Link from '../../../functions/general/linkTesting'
import { Form } from 'react-bootstrap'
import { usePosition } from '../../../hooks/usePosition'
import axios from 'axios'
import { FIND_PLACE_GOOGLE_MAPS_URL } from '../../../constants/constants'
import LinearProgress from '@mui/material/LinearProgress'
import trimAll from '../../../functions/general/trimAll'

function MilanLocations({siteData, stores}) {
  // Get total number of open stores in all states
  const openStoresNum = openStoresDisplayed()
  // Default state & city to this site state & city
  const [selectedState, setSelectedState] = useState(stores.find(state => state.state === siteData.state))
  const [selectedCity, setSelectedCity] = useState(selectedState.cities.find(city => city.cityName === siteData.cityName))
  const [nearbyMilanStores, setNearbyMilanStores] = useState([])
  const [loading, setLoading] = useState(false)
  // In case a user changed the selection manually
  const [userInteraction, setUserInteraction] = useState(false)
  // States dropdown
  const statesDropdownHandler = event => {
    setUserInteraction(true)
    setSelectedState(stores.find(state => state.state === event.target.value))
  }
  // Cities dropdown
  const citiesDropdownHandler = event => {
    setSelectedCity(selectedState.cities.find(city => city.cityName === event.target.value))
  }
  // This will prevent the useEffect from calling google geocoding api more than once after mounting
  const didMount = useRef(false)
  const {latitude, longitude} = usePosition()
  useEffect(() => {
    // This will NOT run if user interacts
    // This will run ONLY ONCE
    if(latitude && longitude && !didMount.current && !userInteraction) {
      didMount.current = true
      setLoading(true)
      axios.get(`${FIND_PLACE_GOOGLE_MAPS_URL}`, {
        params: {
          input: 'milan+laser',
          inputtype: 'textquery',
          locationbias: `point:${latitude},${longitude}`,
          key: process.env.Google_Maps_API_Key
        }
      })
      .then(response => {
        let nearbyStores = getNearestMilan(response.data.candidates)
        if(nearbyStores.length > 0) setNearbyMilanStores(nearbyStores)
        setLoading(false)
      }).catch(err => console.error(err))
    }
    // This will run if user interacts
    if(userInteraction) {
      setSelectedCity(selectedState.cities[0])
    }
  },[latitude, longitude, selectedState, userInteraction])

  function getNearestMilan(candidates) {
    let nearbyStores = []
    if(candidates.length !== 0) {
      candidates.forEach(elem => {
        stores.forEach(state => {
          state.cities.forEach(city => {
            city.locations.forEach(store => {
              if(store.place_id === elem.place_id) {
                setSelectedState(state)
                setSelectedCity(city)
                nearbyStores.push({
                  cityName: city.cityName,
                  pathname: city.pathname,
                  store: store
                })
              } 
            })
          })
        })
      })
    }
    return nearbyStores
  }

  return (
    <section id="milan-locations" className="full-section background hero light-blue-bg">
      <div className="container">
        <div className="row text-center">
          <h1>{openStoresNum}<sup>+</sup> Milan Locations in {stores.length} States</h1>
        </div>
        
        <div className="row pt-4 justify-content-center">
          {
            loading ? 
            <div className="col-md-6 col-lg-4 text-center" style={{color: 'var(--main-blue)'}}>
              <span className="main-blue">Finding nearest Milan</span>
              <LinearProgress color="inherit" />
            </div>
            : nearbyMilanStores.length !== 0 ? 
            <>
            <h2 className="h3 text-center">Nearest Milan to you</h2>
            <ul className="d-flex justify-content-center flex-wrap mt-1">
              {
                nearbyMilanStores.map((store, x) => (
                  <li key={x} className="col-10 col-sm-6 col-md-4 col-lg-3 p-2">
                    <Link 
                      to={store.pathname === siteData.pathname ? 
                      `/locations/${trimAll(store.cityName)}/${trimAll(store.store.location)}/` : 
                      `https://milanlaser${store.pathname}.com/locations/${trimAll(store.cityName)}/${trimAll(store.store.location)}/`}>
                      {store.store.location}
                    </Link>
                  </li>
                ))
              }
            </ul>
            </>
            :
            <></>
          }
        </div>

        <div className="row pt-4 justify-content-center">
          <h3 className="h4 pb-1 text-center">Select a state from the list</h3>
          <div className="col-md-6 col-lg-4">
            <Form.Select aria-label="milan states" value={selectedState.state} onChange={statesDropdownHandler}>
              {
                stores.map((state, x) => (
                  <option key={x} value={state.state}>
                    {state.state}
                  </option>
                ))
              }
            </Form.Select>
          </div>
        </div>
        <div className="row pt-4 justify-content-center">
          <h3 className="h4 pb-1 text-center">Select a city from the list</h3>
          <div className="col-md-6 col-lg-4">
            <Form.Select aria-label="current city" value={selectedCity.cityName} onChange={citiesDropdownHandler}>
              {
                selectedState.cities.map((city, x) => (
                  <option key={x} value={city.cityName}>
                    {city.cityName}
                  </option>
                ))
              }
            </Form.Select>
          </div>
        </div>
        <div className="row pt-4 justify-content-center">
          <h3 className="text-center">Our {selectedCity.cityName} Location{selectedCity.locations.length === 1 ? '' : 's'}</h3>
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
                        href={`https://milanlaser${selectedCity.pathname}.com/locations/${trimAll(selectedCity.cityName)}/${trimAll(location.location)}/`}>
                      {location.location}
                      </a>
                  }
                </li>
              ))
            }
          </ul>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6 col-xl-4 text-center anchor-blue border-top border-bottom py-2">
            <a href="https://milanlaser.com/locations/" target="_blank" rel="noreferrer">See all Milan locations</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MilanLocations
