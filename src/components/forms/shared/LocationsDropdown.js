import React from 'react'
import stores from '../../../assets/data/stores.json'

function LocationsDropdown() {
  return (
    <>
    <optgroup>
      <option value="">Select a location</option>
    </optgroup>
    {
      stores.map((item, i) => (
        <optgroup key={i} label={item.state}>
          {
            item.cities.map((elem) => {
                let option = elem.locations.map((store, i) => {
                  return (
                    <option key={i} value={store.salesforceValue} zip={store.zipcode}>
                      {store.salesforceValue} {store.open === false ? '/ Coming Soon' : ''}
                    </option>
                  )})
                return option
            })
          }
        </optgroup>
      ))
    }
    </>
  )
}

export default LocationsDropdown
