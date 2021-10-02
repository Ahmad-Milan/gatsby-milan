import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import Modal from 'react-bootstrap/Modal'
import MainForm from '../forms/main/MainForm'
import {siteData, city} from '../../components/layout/Layout'

import './Lp_Modal.css'

function Lp_Modal() {
  const [lgShow, setLgShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLgShow(true)
    }, 2000);
  }, [])

  return (
    <Modal
      size="lg" id="lp-modal"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="lp-modal-title"
    >
      <Modal.Header className="justify-content-center pb-0 mt-4" closeButton>
        <Modal.Title id="lp-modal-title">
          <h3 className="subhead-sm mb-0">Book Your Free Consultation</h3>
          <p className="text-center mb-0 light-blue">Not ready for a consultation? <Link to="/contact/" className="light-blue">Feel free to ask a question.</Link></p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MainForm siteData={siteData} city={city} action_link="l/642813/2018-11-30/gz1s" />
      </Modal.Body>
    </Modal>
  )
}

export default Lp_Modal
