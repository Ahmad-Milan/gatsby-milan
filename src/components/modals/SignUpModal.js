import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import SignUpForm from '../forms/signup/SignUpForm'

// Milan Landing Page Pop Up Modal
function SignUpModal({showSignUpModal, setShowSignUpModal}) {
  const [showHeader, setShowHeader] = useState(true)
  
  return (
    <Modal
      centered id="signup-modal"
      show={showSignUpModal}
      onHide={() => setShowSignUpModal(false)}
      aria-labelledby="signup-modal-title"
    >
      <Modal.Header className="justify-content-center border-bottom-0 py-0" closeButton>
        <Modal.Title className="text-center" id="signup-modal-title">
          { showHeader && <h3 className="subhead-sm mb-0 mt-4">Get Milan Laser Updates</h3> }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mb-2">
        <SignUpForm setShowHeader={setShowHeader} />
      </Modal.Body>
    </Modal>
  )
}

export default SignUpModal
