import React, {useState} from 'react'
import { Link } from 'gatsby'
import { FaAsterisk, FaQuestionCircle, FaRegCalendarAlt, FaArrowCircleLeft, FaPaperPlane, FaStoreAlt } from 'react-icons/fa'
import { BiWebcam } from 'react-icons/bi'
import stores from '../../../data/stores.json'
import formData from '../../../data/formData.json'
import allLocations from '../../../data/allLocations.json'

import './Consult.css'

function Consult() {
  //  ***** {For websites with multiple locations nearby} ***** //
  // For the nearby locations list
  const [selectedStore, setSelectedStore] = useState(formData.selectedStore) // object / see notes bellow
  // For all Milan locations dropdown list
  const [dropdownValue, setDropdownValue] = useState(formData.selectedStore.salesforceValue) // string

  // Ask Question Button on Click
  const [askQuestionClicked, setAskQuestionClicked] = useState(false)

  // ---------------------------------------------------------
  // This is the list of nearby locations (NOT the Dropdown) / click handler
  const nearbySelectedHandler = (store) => {
    // 1. Update the formData object
    // Assign the selected store to selectedStore prop in formData
    formData.selectedStore = store
    // 2. Update selectedStore state / This will trigger the component to rerender
    setSelectedStore(store)
    // 3. Update the dropdown value
    setDropdownValue(store.salesforceValue)
    // 4. Unselect other nearby locations if any
    stores.stores.map(store => store.selected = false)
    // 5. Set this clicked store to be selected
    store.selected = true
  }
  // ---------------------------------------------------------
  // This is the Dropdown all locations list onChange handler
  const dropdownHandler = (event) => {
    // Upate dropdown value state
    setDropdownValue(event.target.value)
    // In case the selected location from the dropdown list already exists in the nearyby stores list
    // Filter out the nearby stores and return the identical nearby store if any
    // This will return either an empty array or an array with one element which is the identical nearby store
    const dropdownSelect = stores.stores.filter(item => (
      item.salesforceValue === event.target.value
    ))
    //  If an identical nearby store is found
    if(dropdownSelect.length === 1) {
      // Mrk that store as selected
      // basically, mimic the action of nearbySelectedHandler
      nearbySelectedHandler(dropdownSelect[0])
    }
    // if the dropdown value is not a nearby store
    else {
      // Basically return selectedStore to its default initial value
      // setSelectedStore({salesforceValue: ""})

      // formData.selectedStore.salesforceValue = event.target.value
      stores.stores.forEach(store => store.selected = false)
    }
  }
  // ---------------------------------------------------------
  const [consultType, setConsultType] = useState(formData.selectedConsultType) // null initially
  const handleConsultTypeClick = (type) => {
    // Update formData object
    formData.selectedConsultType = type
    // Update consult type state
    setConsultType(type)
  }
  // ---------------------------------------------------------

  return (
    <div id="consult-form" className="full-section">
      <div className="container">
        <div className="d-flex flex-column">
          <h2 className="text-center text-white subhead-sm consult-h2">Book Your Free Consult</h2>
          <p className="text-center light-blue">Not ready for a consultation? <Link to="/contact/" className="ask_q light-blue">Feel free to ask a question.</Link></p>
        </div>
        <form className="needs-validation w-100 py-4 rounded shadow" action="" method="POST" noValidate>
          <input type="hidden" name="oid" value="00D410000014bPe" />
          <input id="success" type="hidden" name="retURL" value="" />
          <input className="lead_source" type="hidden" name="lead_source"  id="lead_source" value="" />
          <input type="hidden" name="Campaign_ID" id="campaign" value="" />

          <div className="form-steps-container">

            <div className="form-inputs-wrapper step-01">
              <div className="row justify-content-center mx-auto pt-4 mb-md-3">
                <div className="col-md-5">
                  <label htmlFor="first_name">First Name <sup><FaAsterisk /></sup></label>
                  <input className="form-control" type="text" placeholder="First Name" id="first_name" name="first_name" autoComplete="name" required minLength="2" />
                  <div className="invalid-feedback">Enter a valid first name!</div>
                </div>
                <div className="col-md-5 mt-3 mt-sm-0">
                  <label htmlFor="last_name">Last Name <sup><FaAsterisk /></sup></label>
                  <input className="form-control" type="text" placeholder="Last Name" id="last_name" name="last_name" autoComplete="name" required minLength="2" />
                  <div className="invalid-feedback">Enter a valid last name!</div>
                </div>
              </div>
              
              <div className="row justify-content-center mx-auto pt-md-4 mb-md-3">
                <div className="col-md-5 mt-3 mt-sm-0">
                  <label htmlFor="phone">Phone Number <sup><FaAsterisk /></sup></label>
                  <input className="form-control phone_input" type="tel"  placeholder="(555) 555-5555" id="phone" name="phone" autoComplete="home tel"  required minLength="17" />
                  <div className="invalid-feedback">Enter a valid phone number!</div>
                </div>
            
                <div className="col-md-5 my-3 my-sm-0">
                  <label htmlFor="email">Your Email <sup><FaAsterisk /></sup></label>
                  <input className="form-control emailConsult" type="email" placeholder="youremail@mailbox.com" id="email" name="email" autoComplete="home email" required minLength="6" />
                  <div className="invalid-feedback">Enter a valid email!</div>
                </div>
              </div>

              <div className="row justify-content-center mx-auto">
                <div className="col-md-10 p-md-0">
                  <hr className="w-100 mb-0"/>
                </div>
              </div>

              <div id="msg_area_container" className="row justify-content-center mx-auto mt-3 overflow-hidden">
                <div id="msg_area" className={`col-md-10 mx-auto mb-2 ${askQuestionClicked ? 'slide-down' : ''}`}>
                  <label htmlFor="description">Message <small>(optional)</small></label>
                  <textarea className="form-control" placeholder="Hello…" id="description" name="description" rows="3"></textarea>
                </div>
              </div>

              <div className="row justify-content-center mx-auto">
                <div className="col-md-10 custom-checkbox">
                  <input className="me-2 form-check-input" type="checkbox" id="gridCheck"  name="updates" />
                  <label className="main-blue mailchimp" htmlFor="gridCheck"><small>Get updates on laser hair removal deals. (no spam)</small></label>
                </div>
              </div>
            </div>

            <div className="locations-wrapper step-02">
              <div className="row justify-content-center mx-auto pt-4 mb-md-3">
                <div className="col-md-10">
                  <h3 className="h5 mb-4 text-center">Select a Location Near You</h3>
                  <div className="d-flex justify-content-center flex-wrap">
                    {
                      stores.stores.map((store, x) => (
                        <div key={x} className="mb-2 col-6 col-md-4 col-lg-3">
                          <div 
                            className={`card p-2 text-center ${store.selected === true ? 'selected' : 'shadow-sm'}`} 
                            onClick={() => nearbySelectedHandler(store)}>{store.location}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="all-locations-wrapper mb-3">
              <div className="row justify-content-center mx-auto mb-md-3">
                <div className=" col-10 col-sm-8 col-md-6 col-lg-4">
                  <h4 className="h6 text-center">Or select a location from the list</h4>
                  <select
                    value={dropdownValue} onChange={(event) => dropdownHandler(event)}
                    className="form-select" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location">
                    <optgroup>
                      <option value="">Select a location</option>
                    </optgroup>
                    {
                      allLocations.locations.map((item, i) => (
                        <optgroup key={i} label={item.state}>
                          {
                            item.stores.map((store, x) => (
                              <option key={x} value={store.salesforceValue} zip={store.zipcode}>
                                {store.salesforceValue} {store.open === false ? '/ Coming Soon' : ''}
                              </option>
                            ))
                          }
                        </optgroup>
                      ))
                    }
                  </select>
                </div>
              </div>
            </div>
            
            <div className="selected-location-wrapper">
              <div className="row justify-content-center mx-auto mb-md-3">
                <div className="col-md-10">
                  <p className="mb-0 text-center">
                    {
                    selectedStore.location && 
                    <>
                    <strong>Selected Location:</strong>&nbsp;
                    <span className="d-block d-md-inline">
                      {selectedStore.address}, <br className="d-sm-none" />
                      {selectedStore.locationOnAddress === "same" ? selectedStore.location : selectedStore.locationOnAddress},&nbsp;
                      {selectedStore.state}&nbsp;{selectedStore.zipcode}
                    </span>
                    </>
                    }
                  </p>
                </div>
              </div>
            </div>
            {console.log(formData.selectedStore)}
            {console.log(selectedStore)}
            
            <div className="row justify-content-center mx-auto">
              <div className="col-md-10 p-md-0">
                <hr className="w-100 mb-0"/>
              </div>
            </div>

            <div className="consult-type-wrapper mt-3 step-03">
              <div className="row justify-content-center mx-auto mb-md-3">
                <div className="col-md-10">
                  <h3 className="h5 mb-4 text-center">Select Consultation Type</h3>
                  <div className="d-flex justify-content-center">
                    <div className="col-5 col-md-4 col-lg-3">
                      <div 
                        className={`card p-3 text-center ${ consultType === 'Consult' ? 'selected' : 'shadow-sm'}`} 
                        onClick={() => handleConsultTypeClick('Consult')}>
                        <span><FaStoreAlt /></span>
                        <p className="mt-2 mb-0">In-Store</p>
                      </div>
                    </div>
                    <div className="col-5 col-md-4 col-lg-3">
                      <div 
                        className={`card p-3 text-center ${ consultType === 'Virtual' ? 'selected' : 'shadow-sm'}`}
                        onClick={() => handleConsultTypeClick('Virtual')}>
                        <span><BiWebcam /></span>
                        <p className="mt-2 mb-0">Virtual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div id="submit-btns" className="row justify-content-center my-3 col-lg-10 m-auto">
            <div className="col-lg-4 text-center">
            {
              !askQuestionClicked && 
              <button id="ask_q" className="w-100 cta-btn light-btn text-uppercase py-2 shadow-sm" onClick={() => setAskQuestionClicked(true)}>
                <i className="d-inline-flex"><FaQuestionCircle /></i> &nbsp;Ask A Question
              </button>
            }
            {
              askQuestionClicked &&
              <button id="send_q" className="w-100 cta-btn navy-bg-btn text-uppercase py-2 shadow-sm text-white" disabled>
                <i className="d-inline-flex"><FaPaperPlane /></i> &nbsp;SEND QUESTION
              </button>
            }
            </div>
            
            <div className="col-lg-2 text-center"><div className="my-3 my-md-2">OR</div></div>
            
            <div className="col-lg-4 text-center">
            {
              !askQuestionClicked && 
              <button id="self_schedule" className="w-100 cta-btn red-bg-btn py-2 shadow-sm">
              <i className="d-inline-flex"><FaRegCalendarAlt /></i> &nbsp;SEE AVAILABLE TIMES
              </button>
            }
            {
              askQuestionClicked &&
              <button id="go_back" className="w-100 cta-btn light-btn text-uppercase py-2 shadow-sm" onClick={() => setAskQuestionClicked(false)}>
                <i ><FaArrowCircleLeft /></i> &nbsp;GO BACK
              </button>
            }
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Consult


  // initially formData looks like this:
  // {
  //   "selectedConsultType": null,
  //   "selectedStore": {
  //     "salesforceValue": ""
  //   }
  // }