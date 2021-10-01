import React from 'react'
import LocationsDropdown from './LocationsDropdown'
import { FaAsterisk } from 'react-icons/fa'

function SelectLocation({formState, dropdownHandler}) {
  return (
    <>
      <label htmlFor="00N1L00000F9eBV">Location <sup><FaAsterisk /></sup></label>
      <select
        value={formState.store.salesforceValue} onChange={(event) => dropdownHandler(event.target.value)}
        className="form-select" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location">
        <LocationsDropdown />
      </select>
    </>
  )
}

export default SelectLocation
