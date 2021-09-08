import React, {useState} from 'react'
import { Link } from 'gatsby'
import { FaAsterisk, FaQuestionCircle, FaRegCalendarAlt, FaArrowCircleLeft, FaPaperPlane, FaStoreAlt, FaCity } from 'react-icons/fa'
import { BiWebcam } from 'react-icons/bi'
import stores from '../../../data/stores.json'
import formData from '../../../data/formData.json'
import allLocations from '../../../data/allLocations.json'
import allLocations2 from '../../../data/allLocations2.json'

import './Consult.css'

function Consult() {
  // Ask Question Button on Click
  const [askQuestionClicked, setAskQuestionClicked] = useState(false)
  const [formState, setFormState] = useState(formData)

  const selfScheduleHandler = () => {}
  
  // ---------------------------------------------------------
  // Form Control Inputs
  const updateFormControl = (event) => {
    const { id, value } = event.target
    // the id is the input id which should match the user obj props 
    const updatedFormState = { ...formState } // Shallow clone from original 
    updatedFormState.user[id] = value
    setFormState(updatedFormState)
  }

  // ---------------------------------------------------------
  // This is the list of nearby locations (NOT the Dropdown) / click handler
  const nearbySelectedHandler = (store) => {
    const updatedFormState = { ...formState }
    updatedFormState.store.salesforceValue = store.salesforceValue
    updatedFormState.store.zipcode = store.zipcode

    setFormState(updatedFormState)

    stores.stores.map(store => store.selected = false)
    store.selected = true
    // setShowAddress(true)
  }

  // ---------------------------------------------------------
  // This is the Dropdown all locations list onChange handler
  const dropdownHandler = (event) => {
    const filteredStore = allLocations.locations.filter(element => (
      element.stores.some(store => store.salesforceValue === event.target.value)
    ))[0].stores.filter(store => store.salesforceValue === event.target.value)[0]
  
    const updatedFormState = { ...formState }
    updatedFormState.store.salesforceValue = filteredStore.salesforceValue
    updatedFormState.store.zipcode = filteredStore.zipcode
    setFormState(updatedFormState)
    // setShowAddress(false)

    stores.stores.map(store => store.selected = false)
    const nearbyStore = stores.stores.filter(store => (
      store.salesforceValue === filteredStore.salesforceValue
    ))
    if(nearbyStore.length === 1) {
      nearbyStore[0].selected = true
      // setShowAddress(true)
    }
  }

  console.log(allLocations2.locations)
  // console.log(allLocations)

  return (
    <div id="consult-form" className="full-section">
      <div className="container">
        <div className="d-flex flex-column">
          <h2 className="text-center text-white subhead-sm consult-h2">Book Your Free Consult</h2>
          <p className="text-center light-blue">Not ready for a consultation? <Link to="/contact/" className="ask_q light-blue">Feel free to ask a question.</Link></p>
        </div>
        <form className="w-100 py-4 rounded shadow" action="" method="POST" >
          <input type="hidden" name="oid" value="00D410000014bPe" />
          <input id="success" type="hidden" name="retURL" value="" />
          <input className="lead_source" type="hidden" name="lead_source"  id="lead_source" value="" />
          <input type="hidden" name="Campaign_ID" id="campaign" value="" />

          <div className="form-steps-container">

            <div className="form-inputs-wrapper step-01">
              <div className="row justify-content-center mx-auto pt-4 mb-md-3">
                <div className="col-md-5">
                  <label htmlFor="first_name">First Name <sup><FaAsterisk /></sup></label>
                  <input 
                    className="form-control" type="text" placeholder="First Name" id="firstname" name="first_name" autoComplete="name" required minLength="2" 
                    value={formState.user.firstname} onChange={updateFormControl} />
                  <div className="invalid-feedback">Enter a valid first name!</div>
                </div>
                <div className="col-md-5 mt-3 mt-sm-0">
                  <label htmlFor="last_name">Last Name <sup><FaAsterisk /></sup></label>
                  <input 
                    className="form-control" type="text" placeholder="Last Name" id="lastname" name="last_name" autoComplete="name" required minLength="2" 
                    value={formState.user.lastname} onChange={updateFormControl} />
                  <div className="invalid-feedback">Enter a valid last name!</div>
                </div>
              </div>
              
              <div className="row justify-content-center mx-auto pt-md-4 mb-md-3">
                <div className="col-md-5 mt-3 mt-sm-0">
                  <label htmlFor="phone">Phone Number <sup><FaAsterisk /></sup></label>
                  <input 
                    className="form-control phone_input" type="tel"  placeholder="(555) 555-5555" id="phone" name="phone" autoComplete="home tel"  required minLength="17" 
                    value={formState.user.phone} onChange={updateFormControl} />
                  <div className="invalid-feedback">Enter a valid phone number!</div>
                </div>
            
                <div className="col-md-5 my-3 my-sm-0">
                  <label htmlFor="email">Your Email <sup><FaAsterisk /></sup></label>
                  <input 
                    className="form-control emailConsult" type="email" placeholder="youremail@mailbox.com" id="email" name="email" autoComplete="home email" required minLength="6" 
                    value={formState.user.email} onChange={updateFormControl} />
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
                    value={formState.store.salesforceValue} onChange={(event) => dropdownHandler(event)}
                    className="form-select" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location">
                    <optgroup>
                      <option value="">Select a location</option>
                    </optgroup>
                    {/* {
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
                    } */}
                    {
                      allLocations2.locations.map((item, i) => (
                        <optgroup key={i} label={item.state}>
                          {
                            item.stores.map((elem, x) => {
                              if(elem.city) {
                                let option = elem.locations.map((store, i) => {
                                  return (
                                    <option key={i} value={store.salesforceValue} zip={store.zipcode}>
                                      {store.salesforceValue} {store.open === false ? '/ Coming Soon' : ''}
                                    </option>
                                  )})
                                return option
                              } else {
                                return (
                                  <option key={x} value={elem.salesforceValue} zip={elem.zipcode}>
                                    {elem.salesforceValue} {elem.open === false ? '/ Coming Soon' : ''}
                                  </option>
                                )}
                            })
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
                    {/* {
                    showAddress() !== 'undefinded' && 
                    <>
                    <strong>Selected location address:</strong>&nbsp;
                    <span className="d-block d-md-inline">
                      {showAddres().address}, <br className="d-sm-none" />
                      {showAddres().locationOnAddress === "same" ? showAddres().location : showAddres().locationOnAddress},&nbsp;
                      {showAddres().state}&nbsp;{showAddres().zipcode}
                    </span>
                    </>
                    } */}
                  </p>
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
              <button id="self_schedule" className="w-100 cta-btn red-bg-btn py-2 shadow-sm" type="submit">
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
