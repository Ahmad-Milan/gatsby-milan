import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import Modal from 'react-bootstrap/Modal'
import MainForm from '../forms/main/MainForm'
import {siteData} from '../templates/Layout'
import { FORM_ACTION_LP_LINK } from '../../constants/constants'

// Milan Landing Page Pop Up Modal
function LpModal() {
  const [showLpModal, setShowLpModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLpModal(true)
    }, 2000);
  }, [])

  return (
    <Modal
      size="lg" id="lp-modal"
      show={showLpModal}
      onHide={() => setShowLpModal(false)}
      aria-labelledby="lp-modal-title"
    >
      <Modal.Header className="justify-content-center pb-0 mt-4" closeButton>
        <Modal.Title id="lp-modal-title">
          <h3 className="subhead-sm mb-0">Book Your Free Consultation</h3>
          <p className="text-center mb-0 light-blue">Not ready for a consultation? <Link to="/locations/contact/" className="light-blue">Feel free to ask a question.</Link></p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MainForm siteData={siteData} action_link={FORM_ACTION_LP_LINK} />
      </Modal.Body>
    </Modal>
  )
}

export default LpModal
