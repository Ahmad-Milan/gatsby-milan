import React from 'react'

function ShowAddressOrLink({formState, siteData}) {
  return (
    <>
    {
      formState.city.cityName === siteData.cityName ? // This is true only when a nearby location is selected
      <>
      <strong>Selected location address:</strong>&nbsp;<br className="d-lg-none" />
      <span className="d-block d-md-inline">
        {formState.store.address}, <br className="d-sm-none" />
        {formState.store.locationOnAddress === "same" ? formState.store.location : formState.store.locationOnAddress},&nbsp;
        {formState.store.stateShort}&nbsp;{formState.store.zipcode}
      </span>
      </>
      : // This is true for all locations except the nearby ones
      <a href={`https://milanlaser${formState.city.pathname}.com/`} target="_blank" rel="noreferrer" className="main-blue">
        Learn more about Milan Laser {formState.city.cityName}.
      </a>
    }
    </>
  )
}

export default ShowAddressOrLink
