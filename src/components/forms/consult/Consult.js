import React, {useState} from 'react'
import { Link } from 'gatsby'
import { FaAsterisk, FaQuestionCircle, FaRegCalendarAlt, FaArrowLeft, FaPaperPlane, FaStoreAlt, FaArrowRight } from 'react-icons/fa'
import { BiWebcam } from 'react-icons/bi'
import formData from '../../../data/formData.json'
import allLocations from '../../../data/allLocations.json'
import siteData from '../../../data/siteData.json'

import './Consult.css'

function Consult() {
  // Get nearby locations if any
  let nearbyLocations;
  if(siteData.branches > 1) {
    nearbyLocations = allLocations.locations.filter(elem => (
      elem.state === siteData.state
    ))[0].stores.filter(item => (
      item.city === siteData.city
    ))[0].locations
  }

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
    updatedFormState.store.address = store.address
    updatedFormState.store.location = store.location
    updatedFormState.store.locationOnAddress = store.locationOnAddress
    updatedFormState.store.stateShort = store.stateShort
    updatedFormState.store.virtual = store.virtual
    updatedFormState.store.open = store.open
    updatedFormState.store.virtualZip = store.virtualZip

    if(!store.virtual) updatedFormState.include.consultType = 'Consult'
    if(store.virtual) updatedFormState.include.consultType = ''

    setFormState(updatedFormState)

    nearbyLocations.map(store => store.selected = false)
    store.selected = true
  }

  // ---------------------------------------------------------
  // This is the Dropdown all locations list onChange handler
  const dropdownHandler = (event) => {
    let filteredStore
    filteredStore = allLocations.locations.filter(element => {
      return element.stores.some(item => {
        if (item.salesforceValue && item.salesforceValue === event.target.value) return true
        else if(item.locations) {
          return item.locations.some(location => location.salesforceValue === event.target.value)
        }
      })
    })[0].stores.filter(item => {
      if (item.salesforceValue && item.salesforceValue === event.target.value) return true
      else if(item.locations) {
        return item.locations.some(location => location.salesforceValue === event.target.value)
      }
    })[0]
  
    if(filteredStore.locations) {
      filteredStore = filteredStore.locations.filter(location => location.salesforceValue === event.target.value)[0]
    }
      
    const updatedFormState = { ...formState }
    updatedFormState.store.salesforceValue = filteredStore.salesforceValue
    updatedFormState.store.zipcode = filteredStore.zipcode
    updatedFormState.store.address = filteredStore.address
    updatedFormState.store.location = filteredStore.location
    updatedFormState.store.locationOnAddress = filteredStore.locationOnAddress
    updatedFormState.store.stateShort = filteredStore.stateShort
    updatedFormState.store.virtual = filteredStore.virtual
    updatedFormState.store.open = filteredStore.open
    updatedFormState.store.virtualZip = "ghglkjljkg"
    setFormState(updatedFormState)

    nearbyLocations.map(store => store.selected = false)
    const nearbyStore = nearbyLocations.filter(store => (
      store.salesforceValue === filteredStore.salesforceValue
    ))
    if(nearbyStore.length === 1) {
      nearbyStore[0].selected = true
    }
  }

  const handleConsultTypeClick = (type) => {
    if(!formState.store.virtual) return
    const updatedFormState = { ...formState }
    if(type === 'Virtual') {
      updatedFormState.include.consultType = 'Virtual'
      updatedFormState.include.campaignId = 'virtual_campaign_id'
    }
    if(type === 'Consult') {
      updatedFormState.include.consultType = 'Consult'
      updatedFormState.include.campaignId = '7011L000001K6qrQAC'
    }
    setFormState(updatedFormState)
  }

  const actionHandler = (action) => {
    const updatedFormState = { ...formState }
    updatedFormState.include.action = action
    if(action === 'question') {
      updatedFormState.include.leadsource = 'Website'
      updatedFormState.include.campaignId = ''
      updatedFormState.include.consultType = ''
    }
    if(action === 'self_schedule') {
      updatedFormState.include.leadsource = 'Self-Schedule Site'
    }
    setFormState(updatedFormState)
  }

  const handleGoBack = () => {
    const updatedFormState = { ...formState }
    updatedFormState.include.action = ''
    if(!formState.store.virtual) {
      updatedFormState.include.consultType = 'Consult'
      updatedFormState.include.leadsource = 'Website'
      updatedFormState.include.leadsource = 'Self-Schedule Site'
    }
    setFormState(updatedFormState)
  }

  console.log(formState)

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
          <input className="lead_source" type="hidden" name="lead_source"  id="lead_source" value={formState.include.leadsource} />
          <input type="hidden" name="Campaign_ID" id="campaign" value={formState.include.campaignId} />

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

              <div className="row justify-content-center mx-auto mt-3 overflow-hidden">
                <div id="msg_area" className={`col-md-10 mx-auto mb-2 ${askQuestionClicked ? 'slide-down' : ''}`}>
                  <label htmlFor="description">Message <small>(optional)</small></label>
                  <textarea 
                    className="form-control" placeholder="Hello…" id="description" name="description" rows="3"
                    value={formState.user.description} onChange={updateFormControl}></textarea>
                </div>
              </div>

              <div className="row justify-content-center mx-auto">
                <div className="col-md-10 custom-checkbox">
                  <input className="me-2 form-check-input" type="checkbox" id="gridCheck"  name="updates" />
                  <label className="main-blue mailchimp" htmlFor="gridCheck"><small>Get updates on laser hair removal deals. (no spam)</small></label>
                </div>
              </div>
            </div>

          {
            formState.include.action !== '' &&
            <div className="locations-wrapper step-02">

              <div className="row justify-content-center mx-auto pt-4 mb-3">
                <div className="col-md-10">
                  <h3 className="h5 mb-4 text-center">Select a Location Near You</h3>
                  <div className="d-flex justify-content-center flex-wrap">
                    {
                      nearbyLocations.map((store, x) => (
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

              <div className="row justify-content-center mx-auto mb-3">
                <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                  <h4 className="h6 text-center">Or select a location from the list</h4>
                  <select
                    value={formState.store.salesforceValue} onChange={(event) => dropdownHandler(event)}
                    className="form-select" id="00N1L00000F9eBV" name="00N1L00000F9eBV" title="Location">
                    <optgroup>
                      <option value="">Select a location</option>
                    </optgroup>
                    {
                      allLocations.locations.map((item, i) => (
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

              <div className="row justify-content-center mx-auto">
                <div className="col-md-10">
                  <p className="mb-0 text-center">
                    {
                    formState.store.salesforceValue !== '' && 
                    <>
                    <strong>Selected location address:</strong>&nbsp;<br className="d-lg-none" />
                    <span className="d-block d-md-inline">
                      {formState.store.address}, <br className="d-sm-none" />
                      {formState.store.locationOnAddress === "same" ? formState.store.location : formState.store.locationOnAddress},&nbsp;
                      {formState.store.stateShort}&nbsp;{formState.store.zipcode}
                    </span>
                    </>
                    }
                  </p>
                </div>
              </div>

            </div>
          }


          {
            formState.include.action === 'self_schedule' && formState.store.salesforceValue !== '' &&
            <div className="consult-type-wrapper">
              <div className="row justify-content-center mx-auto">
                <div className="col-md-10 p-md-0">
                  <hr className="w-100 mb-0"/>
                </div>
              </div>

              <div className="row justify-content-center mx-auto mb-md-3 py-4">
                <div className="col-md-10">
                  <h3 className="h5 text-center">Select Consultation Type</h3>
                  {
                    !formState.store.virtual &&
                    <div className="d-flex justify-content-center pt-2">
                      <div className="alert alert-danger col col-sm-10 col-md-8 col-lg-6 text-center p-2 mb-0" role="alert">
                        Virtual consult is not available for this location
                      </div>
                    </div>
                  }
                  <div className="d-flex justify-content-center mt-4">
                    <div className="col-5 col-md-4 col-lg-3">
                      <div 
                        className={`card p-3 text-center ${ formState.include.consultType === 'Consult' ? 'selected' : 'shadow-sm'}`} 
                        onClick={() => handleConsultTypeClick('Consult')}>
                        <span><FaStoreAlt /></span>
                        <p className="mt-2 mb-0">In-Store</p>
                      </div>
                    </div>

                    <div className="col-5 col-md-4 col-lg-3">
                      <div 
                        className={`card p-3 text-center ${ formState.include.consultType === 'Virtual' ? 'selected' : 'shadow-sm'}`}
                        style={!formState.store.virtual ? {color: 'lightgrey'} : {} }
                        onClick={() => handleConsultTypeClick('Virtual')}>
                        <span><BiWebcam /></span>
                        <p className="mt-2 mb-0">Virtual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          </div>
            


          <div id="actions-btns" className="row justify-content-center my-3 col-lg-10 m-auto">
            <div className="col-lg-4 text-center">
            {
              !askQuestionClicked && formState.include.action !== 'self_schedule' &&
              <button className="w-100 cta-btn light-btn py-2 shadow-sm" onClick={() => setAskQuestionClicked(true)}>
                <i><FaQuestionCircle /></i><span className="ps-2">ASK A QUESTION</span>
              </button>
            }
            {
              askQuestionClicked && formState.include.action === '' &&
              <button className="w-100 cta-btn navy-bg-btn py-2 shadow-sm text-white" onClick={() => actionHandler('question')}>
                <span className="pe-2">NEXT</span><i><FaArrowRight /></i>
              </button>
            }
            {
              askQuestionClicked && formState.include.action === 'question' &&
              <button 
                className="w-100 cta-btn navy-bg-btn py-2 shadow-sm text-white"
                disabled={true ? formState.store.salesforceValue === '' : false}>
                <i><FaPaperPlane /></i><span className="ps-2">SEND QUESTION</span>
              </button>
            }
            {
              !askQuestionClicked && formState.include.action === 'self_schedule' &&
              <button className="w-100 cta-btn light-btn py-2 shadow-sm" onClick={() => handleGoBack()}>
                <i><FaArrowLeft /></i><span className="ps-2">GO BACK</span>
              </button>
            }
            </div>
            
            <div className="col-lg-2 text-center"><div className="my-3 my-md-2">OR</div></div>
            
            <div className="col-lg-4 text-center">
            {
              !askQuestionClicked && formState.include.action !== 'self_schedule' &&
              <button 
                className="w-100 cta-btn red-bg-btn py-2 shadow-sm" 
                onClick={() => actionHandler('self_schedule')}>
              <i><FaRegCalendarAlt /></i><span className="ps-2">SEE AVAILABLE TIMES</span>
              </button>
            }
            {
              !askQuestionClicked && formState.include.action === 'self_schedule' &&
              <button 
                className="w-100 cta-btn red-bg-btn py-2 shadow-sm" 
                disabled={true ? formState.include.consultType === '' : false}>
              <i><FaRegCalendarAlt /></i><span className="ps-2">SEE AVAILABLE TIMES</span>
              </button>
            }
            {
              askQuestionClicked && formState.include.action === '' &&
              <button className="w-100 cta-btn light-btn py-2 shadow-sm" onClick={() => setAskQuestionClicked(false)}>
                <i><FaArrowLeft /></i><span className="ps-2">GO BACK</span>
              </button>
            }
            {
              formState.include.action === 'question' &&
              <button className="w-100 cta-btn light-btn py-2 shadow-sm" onClick={() => handleGoBack()}>
                <i><FaArrowLeft /></i><span className="ps-2">GO BACK</span>
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
